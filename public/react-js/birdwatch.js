(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    // single export object for attaching all service functions, later exported as BirdWatch.crossfilter
    var exports = {};

    // crossfilter object: browser side analytics library, holds array type data (w/incremental updates).
    // dimensions are fast queries on data, e.g. view sorted by followers_count or retweet_count of the original message
    var cf = crossfilter([]);
    var tweetIdDim   = cf.dimension(function(t) { return t.id; });
    var followersDim = cf.dimension(function(t) { return t.user.followers_count; });
    var retweetsDim  = cf.dimension(function(t) {
        if (t.hasOwnProperty("retweeted_status")) { return t.retweeted_status.retweet_count; }
        else return 0;
    });
    var originalIdDim  = cf.dimension(function(t) {
        if (t.hasOwnProperty("retweeted_status")) { return t.retweeted_status.id; }
        else return 0;
    });

    // Higher-order function, returns a function that rounds time down. Interval s is specified in seconds.
    // Example: returned function makes Jan 1, 2012, 16:45:00 out of Jan 1, 2012, 16:45:55 when interval is 60s
    function dateRound(s) { return function(t) { return s * Math.floor(Date.parse(t.created_at) / (s * 1000)); }; }

    var byMinGrp   = cf.dimension(dateRound(       60 )).group();
    var by15MinGrp = cf.dimension(dateRound(    15*60 )).group();
    var byHourGrp  = cf.dimension(dateRound(    60*60 )).group();
    var by6HourGrp = cf.dimension(dateRound(  6*60*60 )).group();
    var byDayGrp   = cf.dimension(dateRound( 24*60*60 )).group();

    exports.timeseries = function() {
        if (byMinGrp.size()   < 60) { return byMinGrp.all();   }
        else if (by15MinGrp.size() < 48) { return by15MinGrp.all(); }
        else if (byHourGrp.size()  < 96) { return byHourGrp.all();  }
        else if (by6HourGrp.size() < 40) { return by6HourGrp.all(); }
        else                             { return byDayGrp.all();   }
    };

    // freeze imposes filter on crossfilter that only shows anything older than and including the latest
    // tweet at the time of calling freeze. Accordingly unfreeze clears the filter
    exports.freeze    = function() { tweetIdDim.filter([0, tweetIdDim.top(1)[0].id]); };
    exports.unfreeze  = function() { tweetIdDim.filterAll(); };

    exports.add       = function(data)     { cf.add(data); };                            // add new items, as array
    exports.clear     = function()         { cf.remove();  };                            // reset crossfilter
    exports.noItems   = function()         { return cf.size(); };                        // crossfilter size total
    exports.numPages  = function(pageSize) { return Math.ceil(cf.size() / pageSize); };  // number of pages

    // predicates
    var retweeted     = function(t) { return t.hasOwnProperty("retweeted_status"); };

    // mapper functions
    var originalTweet = function(t) { return BirdWatch.formatTweet(t.retweeted_status); };   // returns original tweet
    var tweetId       = function(t) { return t.id; };                                    // returns tweet id
    var retweetCount  = function(t) { if (retweeted(t)) { return t.retweeted_status.retweet_count; } else return 0; };
    var maxRetweets   = function(t) {
        t.retweet_count = retweetCount(_.max(originalIdDim.filter(t.id).top(1000),
            function(t){ return t.retweeted_status.retweet_count; }));
        originalIdDim.filterAll();
        return t;
    };

    // deliver tweets for current page. fetches all tweets up to the current page,
    // throws tweets for previous pages away.
    exports.tweetPage = function(currentPage, pageSize, order) {
        return _.rest(fetchTweets(currentPage * pageSize, order), (currentPage - 1) * pageSize);
    };

    // fetch tweets from crossfilter dimension associated with particular sort order up to the current page,
    // potentially mapped and filtered
    var fetchTweets = function(pageSize, order) {
        if (order === "latest")    { return tweetIdDim.top(pageSize); }    // latest: desc order of tweets by ID
        else if (order === "followers") { return followersDim.top(pageSize).map(maxRetweets); } // desc order of tweets by followers
        else if (order === "retweets")  { // descending order of tweets by total retweets of original message
            return _.first(               // filtered to be unique, would appear for each retweet in window otherwise
                _.uniq(retweetsDim.top(cf.size()).filter(retweeted).map(originalTweet), false, tweetId), pageSize);
        }
        else { return []; }
    };

    BirdWatch.crossfilter = exports;
}());
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    // single export object for attaching all service functions, later exported as BirdWatch.tweets
    var exports = {};

    var tweetFeed;
    var tweetsCache = [];

    /** callback function to perform when new tweet(s) arrive */
    var onNewTweets = function (t) {};
    exports.registerCallback = function (callback) { onNewTweets = callback; };

    /** Load previous Tweets, paginated. Recursive function, calls itself with the next chunk to load until
     *  eventually n, the remaining tweets to load, is not larger than 0 any longer. guarantees at least n hits
     *  if available, potentially more if (n % chunkSize != 0) */
    var loadPrev = function (q, n, chunkSize, offset) {
        if (n > 0) {
            $.ajax(
                {
                    url: "/tweets/search",
                    type: "POST",
                    data: JSON.stringify(BirdWatch.buildQuery(q, chunkSize, offset)),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (res) {
                        onNewTweets(res.hits.hits.reverse().map(function (t) { return t._source; }).map(BirdWatch.formatTweet));
                        setTimeout(function () {
                            loadPrev(q, n - chunkSize, chunkSize, offset + chunkSize);
                        }, 0);
                    }
                }
            );
        }
    };

    /** Start Listening for Tweets with given query */
    exports.search = function (queryString, prevSize) {
        if (typeof tweetFeed === 'object') { tweetFeed.close(); }

        var searchString = "*";
        if (queryString.length > 0) {
            searchString = queryString;
        }

        var throttled = _.throttle(function() {        // throttle because insertion too expensive on high traffic searches
            onNewTweets(tweetsCache);  // run callback with all items in cache
            tweetsCache = [];          // then empty cache.
        }, 1000);

        /** handle incoming tweets: add to tweetsCache array, run callback at most every second */
        var cachedCallback = function(msg) {
            tweetsCache = tweetsCache.concat(BirdWatch.formatTweet(JSON.parse(msg.data)));
            throttled();
        };

        tweetFeed = new EventSource("/tweetFeed?q=" + searchString);
        tweetFeed.addEventListener("message", cachedCallback, false);

        loadPrev(searchString, prevSize, 500, 0); // load previous tweets in chunks of size 500
    };

    BirdWatch.tweets = exports;
}());
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    BirdWatch.formatTweet = function (t) {
        /** results from ElasticSearch are wrapped in object inside _source property */
        if (t.hasOwnProperty('_source')) { t = t._source; }

        var tags = t.entities.hashtags;
        var mentions = t.entities.user_mentions;
        var urls = t.entities.urls;

        t.htmlText = t.text;
        t.htmlText = t.htmlText.replace("RT ", "<strong>RT </strong>");

        for (var i = 0; i < tags.length; i++) {
            t.htmlText = t.htmlText.replace("#" + tags[i].text, "<a href='https://twitter.com/search?q=%23" + tags[i].text +
                " ' target='_blank'>#" + tags[i].text + "</a>");
        }
        for (var j = 0; j < mentions.length; j++) {
            t.htmlText = t.htmlText.replace("@" + mentions[j].screen_name, "<a href='https://twitter.com/" +
                mentions[j].screen_name + " ' target='_blank'>@" + mentions[j].screen_name + "</a>");
        }
        for (var k = 0; k < urls.length; k++) {
            t.htmlText = t.htmlText.replace(urls[k].url, "<a href='" + urls[k].url +
                " ' target='_blank'>" + urls[k].display_url + "</a>");
        }
        return t;
    };

    /** build paginated query */
    BirdWatch.buildQuery = function (queryString, size, from) {
        return {
            size: size,
            from: from,
            query: {
                query_string: {
                    default_field: "text",
                    query: "(" + queryString + ") AND lang:en",
                    default_operator: "AND"
                }
            },
            sort: { "id": "desc" }
        };
    };

    BirdWatch.legalStuff = function () {
        alert("Simple. Project is delivered as is. Use it in whichever way you see fit. The author, Matthias Nehlsen, does not make claims of any kind and cannot be held responsible for anything.\n\nHere in more legal terms, adapted from \nhttps://github.com/mbostock/d3/blob/master/LICENSE. Thanks, Michael Bostock!\n\nTHIS SOFTWARE AND ITS ONLINE DEMO IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL MATTHIAS NEHLSEN BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.");
    };
}());
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    // single export object for attaching all service functions, later exported as BirdWatch.wordcount
    var exports = {};
    var tags = {};
    var maxLength = 25;
    var minLength = 3;
    var parseText = function(text) {
        var cases = {};
        return text.split(wordSeparators).forEach(function(word) {
            if (discard.test(word)) { return; }
            word = word.replace(punctuation, "");
            if (stopWords.test(word.toLowerCase())) { return; }
            word = word.substr(0, maxLength);
            cases[word.toLowerCase()] = word;
            word = word.toLowerCase();
            if (word.length >= minLength) { tags[word] = (tags[word] || 0) + 1; }
        });
    };
    var stopWords = /^(use|good|want|amp|just|now|like|til|new|get|one|i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall|via)$/;
    var punctuation = /[!"&()*+,-\.\/:;<=>?\[\\\]^`“”\{|\}~]+/g;
    var wordSeparators = /[\s\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+/g;
    var discard = /^(@|https?:)/;
    exports.insert = function(data) { return data.forEach(function(d) { return parseText(d.text); }); };
    exports.getWords = function() {
        return d3.entries(tags).sort(function(a, b) { return b.value - a.value; }).slice(0, 500);
    };
    exports.reset = function() { tags = {}; };

    BirdWatch.wordcount = exports;
}());
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    BirdWatch.WordCloud = function (w, h, maxEntries, addSearch, elem) {

        var me = {},
            fill = d3.scale.category20b(),
            words = [],
            max,
            scale = 1,
            complete = 0,
            tags,
            fontSize,
            cloud,
            svg,
            background,
            transitionDuration = 700,
            vis;

        function draw(data, bounds) {
            scale = bounds ? Math.min(
                w / Math.abs(bounds[1].x - w / 2),
                w / Math.abs(bounds[0].x - w / 2),
                h / Math.abs(bounds[1].y - h / 2),
                h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;
            words = data;
            var text = vis.selectAll("text")
                .data(words, function(d) { return d.text.toLowerCase(); });
            text.transition()
                .duration(transitionDuration)
                .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function(d) { return d.size + "px"; });
            text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function(d) { return d.size + "px"; })
                .on("click",function (d) {
                    var tag;
                    tag = d.text.replace('#', '');
                    addSearch(tag);
                })
                .style("opacity", 1e-6)
                .transition()
                .duration(transitionDuration)
                .style("opacity", 1);
            text.style("font-family", function(d) { return d.font; })
                .style("fill", function(d) { return fill(d.text.toLowerCase()); })
                .text(function(d) { return d.text; });
            var exitGroup = background.append("g")
                .attr("transform", vis.attr("transform"));
            var exitGroupNode = exitGroup.node();
            text.exit().each(function() { exitGroupNode.appendChild(this); });
            exitGroup.transition()
                .duration(transitionDuration)
                .style("opacity", 1e-6)
                .remove();
            vis.transition()
                .delay(100)
                .duration(transitionDuration)
                .attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
        }

        me.init = function() {
            cloud = d3.layout.cloud()
                .timeInterval(1)
                .size([w, h])
                .fontSize(function(d) { return fontSize(+d.value); })
                .text(function(d) { return d.key; })
                .on("end", draw);

            svg = d3.select(elem).append("svg").attr("width", w).attr("height", h);

            background = svg.append("g");
            vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");
        };

        function generate() {
            cloud.font("Impact").spiral("archimedean");
            fontSize = d3.scale.log().range([10, 85]);

            if (tags.length) fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
            complete = 0;
            words = [];
            cloud.stop().words(tags.slice(0, max = Math.min(tags.length, maxEntries))).start();
        }

        me.redraw = function(dataSource) {
            tags = dataSource;
            generate();
        };

        me.init();

        return me;
    };
}());
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    BirdWatch.BarChart = function (callback, maxBarWidth, element, noItems) {
        var me = {};

        me.maxBarWidth = maxBarWidth;
        var sortedData, xScale, yScale, chart, rect, labelContainer, barsContainer;

        var valueLabelWidth = 40; // space reserved for value labels (right)
        var barHeight = 15;       // height of one bar
        var barLabelWidth = 120;  // space reserved for bar labels
        var barLabelPadding = 5;  // padding between bar and bar labels (left)
        var gridLabelHeight = 18; // space reserved for grid line labels

        // accessor functions
        var barLabel = function (d) { return d.key; };
        var barValue = function (d) { return parseFloat(d.value); };

        var y = function (d, i) { return yScale(i); };
        var yText = function (d, i) { return y(d, i) + yScale.rangeBand() / 2; };

        function render() {
            // svg container element
            chart = d3.select(element).append("svg")
                .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
                .attr('height', gridLabelHeight + noItems * barHeight);

            // bar labels
            labelContainer = chart.append('g')
                .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight) + ')');
            labelContainer.selectAll('text').data(sortedData).enter().append('text')
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);
            // bars
            barsContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')');
            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', '#428bca')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');
                    //callback(tag);
                });

            // bar value labels
            barsContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "none")
                .text(function (d) { return d3.round(barValue(d), 2); });
            // start line
            barsContainer.append("line")
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1])
                .style("stroke", "#000");
        }

        me.update = function(dataSource) {
            sortedData = dataSource.sort(function (a, b) {
                if (barValue(b) < barValue(a)) return -1;
                if (barValue(b) > barValue(a)) return 1;
                if (barLabel(b) < barLabel(a)) return -1;
                if (barLabel(b) > barLabel(a)) return 1;
                return 0;
            });
            yScale = d3.scale.ordinal().domain(d3.range(0, sortedData.length)).rangeBands([0, sortedData.length * barHeight]);
            xScale = d3.scale.linear().domain([0, d3.max(sortedData, barValue)]).range([0, maxBarWidth]);
        };

        me.init = function(initialData, maxBarWidth) {
            me.update(initialData);
            me.maxBarWidth = maxBarWidth;
            render();
        };

        me.redraw = function(dataSource) {
            me.update(dataSource);

            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', 'steelblue')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');
                    //callback(tag);
                });

            barsContainer.selectAll("rect")
                .data(sortedData)
                .transition()
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); });

            barsContainer.selectAll("rect")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            barsContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "black")
                .text(function (d) { return d3.round(barValue(d), 2); });

            barsContainer.selectAll("text").data(sortedData)
                .transition()
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "none")
                .text(function (d) { return d3.round(barValue(d), 2); });

            barsContainer.selectAll("text")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            labelContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);

            labelContainer.selectAll('text').data(sortedData)
                .transition()
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);

            labelContainer.selectAll("text")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            barsContainer.append("line")
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1])
                .style("stroke", "#000");
        };

        return me;
    };
}());
;/** @jsx React.DOM */

var BirdWatch = BirdWatch || {};

(function () {

    /** count formatting function, for example for rendering 1.5K followers */
    var numberFormat = function (number) {
        if (number < 1000) { return number; }
        else if (number < 100000) { return (Math.round(number / 100) / 10) + "K"}
        else if (number < 1000000) { return Math.round(number / 1000) + "K"}
        else { return (Math.round(number / 100000) / 10) + "M"}
    };

    /** TimeStamp formatting function, making use of moment.js */
    var fromNow = function (date) {
        var timeString = moment(date).fromNow(true);
        if (timeString === "a few seconds") { return "just now"; }
        else { return timeString; }
    };

    /** Component for conditional rendering of retweet count inside Tweet */
    var RetweetCount = React.createClass({displayName: 'RetweetCount',
        render: function() {
            if(this.props.count > 0) {
                return (React.DOM.div( {className:"pull-right timeInterval"}, 
                           numberFormat(this.props.count), " RT") );
            }
            else return React.DOM.div(null);
        }
    });
    var FavoriteCount = React.createClass({displayName: 'FavoriteCount',
        render: function() {
            if(this.props.count > 0) {
                return (React.DOM.div( {className:"pull-right timeInterval"}, 
                           numberFormat(this.props.count), " fav ") );
            }
            else return React.DOM.div(null);
        }
    });

    /** single Tweet component */
    var Tweet = React.createClass({displayName: 'Tweet',
        render: function () { return (
            React.DOM.div( {className:"tweet"}, 
                React.DOM.span(null, 
                    React.DOM.a( {href:"http://www.twitter.com/" + this.props.t.user.screen_name, target:"_blank"}, 
                        React.DOM.img( {className:"thumbnail", src:this.props.t.user.profile_image_url} )
                    )
                ),
                React.DOM.a( {href:"http://www.twitter.com/" + this.props.t.user.screen_name, target:"_blank"}, 
                    React.DOM.span( {className:"username"}, this.props.t.user.name)
                ),
                React.DOM.span( {className:"username_screen"}, " @",this.props.t.user.screen_name),
                React.DOM.div( {className:"pull-right timeInterval"}, fromNow(this.props.t.created_at)),
                React.DOM.div( {className:"tweettext"}, 
                    React.DOM.div( {dangerouslySetInnerHTML:{__html: this.props.t.htmlText}, className:""}),
                    React.DOM.div( {className:"pull-left timeInterval"}, numberFormat(this.props.t.user.followers_count), " followers"),
                    RetweetCount( {count:this.props.t.retweet_count} ),
                    FavoriteCount( {count:this.props.t.favorite_count} )
                )
            )
        ); }
    });

    /** Tweet list component, renders all Tweet items (above) */
    var TweetList = React.createClass({displayName: 'TweetList',
        render: function() {
            var tweetNodes = this.props.tweets.map(function (tweet) {
                if (!tweet) return "";
                return Tweet( {t:tweet, key:tweet.id} );
            }.bind(this));
            return React.DOM.div( {id:"tweet-list"}, tweetNodes);
        }
    });

    /** Pagination component, allows selecting the current page in the Tweet list */
    var PaginationItem = React.createClass({displayName: 'PaginationItem',
        setActive: function () {this.props.setPage(this.props.page)},
        render: function() {
            return React.DOM.li( {className:this.props.active ? "active" : "", onClick:this.setActive}, 
                      React.DOM.a(null, this.props.page)
                   )
        }
    });

    var Pagination = React.createClass({displayName: 'Pagination',
        toggleLive: function() { this.props.toggleLive(); },
        handleFirst: function() { this.props.setPage(1); },
        handleLast: function() { this.props.setPage(this.props.numPages); },
        handleNext: function() { this.props.setNext(); },
        handlePrevious: function() { this.props.setPrev(); },

        render: function() {
            var numPages = Math.min(+this.props.numPages, 25);
            var paginationItems = _.range(1, numPages+1).map(function (p) {
                return PaginationItem( {page:p, active:p==this.props.activePage, setPage:this.props.setPage, key:p} );
            }.bind(this));

            return React.DOM.ul( {className:"pagination-mini"}, 

                React.DOM.li( {className:this.props.live ? "active" : ""}, React.DOM.a( {onClick:this.toggleLive}, "Live")),
                React.DOM.li(null, React.DOM.a( {onClick:this.handleFirst}, "First")),
                React.DOM.li(null, React.DOM.a( {onClick:this.handlePrevious}, "Previous")),
                paginationItems,
                React.DOM.li(null, React.DOM.a( {onClick:this.handleNext}, "Next")),
                React.DOM.li(null, React.DOM.a( {onClick:this.handleLast}, "Last"))
            )
        }
    });

    var tweetListComp = React.renderComponent(TweetList( {tweets:[]}), document.getElementById('tweet-frame'));

    /** TweetCount shows the number of tweets analyzed */
    var TweetCount = React.createClass({displayName: 'TweetCount',
        render: function () { return React.DOM.span(null, this.props.count);}
    });

    /** render BirdWatch components */
    var tweetCount = React.renderComponent(TweetCount( {count:0}), document.getElementById('tweet-count'));
    var pagination = React.renderComponent(Pagination( {numPages:1} ), document.getElementById('pagination'));

    BirdWatch.setTweetCount = function (n) { tweetCount.setProps({count: n}); };
    BirdWatch.setTweetList = function (tweetList) { tweetListComp.setProps({tweets: tweetList}); };
    BirdWatch.setPagination = function (props) { pagination.setProps(props); };
    BirdWatch.setPaginationHandlers = function (handlers) { pagination.setProps(handlers); };

})();
;(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    var sortOrder = "latest";
    var pageSize = $("#page-size");

    var live = true;
    var activePage = 1;
    var setPage = function (p) {
        if (p > 0 && p <= BirdWatch.crossfilter.numPages(pageSize.val())) {
            activePage = p;
            triggerReact();
        }
    };

    BirdWatch.setPaginationHandlers({
        toggleLive: function () {
            if (live) { BirdWatch.crossfilter.freeze(); }
            else {BirdWatch.crossfilter.unfreeze(); }
            live = !live;
        },
        setPage: function (p) { setPage(p); },
        setNext: function () { setPage(activePage +1); },
        setPrev: function () { setPage(activePage -1); }
    });

    var timeSeries1 = $("#timeseries1");
    var graph = new Rickshaw.Graph( {
        element: document.querySelector("#timeseries1"),
        width: timeSeries1.width(),
        height: 100,
        renderer: 'bar',
        series: [ {
            color: 'steelblue',
            name: 'Tweets',
            data: [{ x: 0, y: 0 }]
        } ]
    } );
    new Rickshaw.Graph.Axis.Time({ graph: graph });
    graph.render();

    new Rickshaw.Graph.HoverDetail({
        graph: graph,
        yFormatter: function(y) { return y === null ? y : y.toFixed(0); }
    });

    var barChartElem = $("#wordBars");
    var barchart = BirdWatch.BarChart(function(){}, barChartElem.width() - 180, "#wordBars", 25);
    var barChartInit = false;

    var wordCloudElem = $("#wordCloud");
    var wordCloud = BirdWatch.WordCloud(wordCloudElem.width(), wordCloudElem.width() * 0.75, 250, function (){}, "#wordCloud");
    BirdWatch.lastCloudUpdate = (new Date().getTime()) - 12000;

    BirdWatch.setWordCount = function (wordCounts) {
        if (!barChartInit) {
            barchart.init(wordCounts, 500);
            barChartInit = true;
        }
        barchart.redraw(wordCounts);

        if ((new Date().getTime() - BirdWatch.lastCloudUpdate) > 15000) {
            wordCloud.redraw(wordCounts);
            BirdWatch.lastCloudUpdate = (new Date().getTime());
        }
    };

    $('#searchForm').submit(function (e) {
        BirdWatch.search();
        e.preventDefault();
        return false;
    });

    var throttledGraph = _.throttle(function() {
        graph.series[0].data = BirdWatch.crossfilter.timeseries().map(function(el) { return { x: el.key, y: el.value }; });
        graph.update();
    }, 2500);

    function triggerReact () {
        var n = BirdWatch.crossfilter.noItems();
        BirdWatch.setTweetCount(n);
        throttledGraph();
        BirdWatch.setTweetList(BirdWatch.crossfilter.tweetPage(activePage, pageSize.val(), sortOrder));
        BirdWatch.setPagination({live: live, numPages: BirdWatch.crossfilter.numPages(pageSize.val()), activePage: activePage});
    }

    BirdWatch.sortByLatest = function () { sortOrder = "latest"; triggerReact(); };
    BirdWatch.sortByFollowers = function () { sortOrder = "followers"; triggerReact();};
    BirdWatch.sortByRetweets = function () { sortOrder = "retweets"; triggerReact(); };
    BirdWatch.sortByFavorites = function () { sortOrder = "favorites"; triggerReact(); };

    BirdWatch.tweets.registerCallback(function (t) {
        BirdWatch.wordcount.insert(t);
        BirdWatch.crossfilter.add(t);
        BirdWatch.setWordCount(BirdWatch.wordcount.getWords());
        triggerReact();
    });

    BirdWatch.search = function () {
        var searchField = $("#searchField");
        BirdWatch.wordcount.reset();
        activePage = 1;
        BirdWatch.crossfilter.clear();
        BirdWatch.tweets.search(searchField.val(), $("#prev-size").val());
        searchField.focus();
    };

    BirdWatch.search();
}());
