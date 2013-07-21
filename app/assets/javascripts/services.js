'use strict';

/** utils service */
angular.module('birdwatch.services', []).service('utils', function () {

    var formatTweet = function (t) {

        /** results from ElasticSearch are wrapped in object inside _source property */
        if (t.hasOwnProperty('_source')) { t = t._source; }
        
        var tags = t.entities.hashtags;
        var mentions = t.entities.user_mentions;
        var urls = t.entities.urls;

        t.htmlText = t.text;
        t.htmlText = t.htmlText.replace("RT ", "<strong>RT </strong>");
        
        for (var i = 0; i < tags.length; i++) {
            t.htmlText = t.htmlText.replace("#" + tags[i].text, "<a href='https://twitter.com/search?q=%23" + tags[i].text 
                + " ' target='_blank'>#" + tags[i].text + "</a>");
        }
        for (var j = 0; j < mentions.length; j++) {
            t.htmlText = t.htmlText.replace("@" + mentions[j].screen_name, "<a href='https://twitter.com/" 
                + mentions[j].screen_name + " ' target='_blank'>@" + mentions[j].screen_name + "</a>");
        }
        for (var k = 0; k < urls.length; k++) {
            t.htmlText = t.htmlText.replace(urls[k].url, "<a href='" + urls[k].url 
                + " ' target='_blank'>" + urls[k].display_url + "</a>");
        }
        return t;
    };

    var buildQuery = function (queryString, size, from) {
        return {
            size: size,
            from: from,
            query: {
                query_string: {
                    default_field: "text",
                    query: queryString,
                    default_operator: "AND"
                }
            }
        };
    };
    
    /** initially from Jason Davies, transformed into CoffeeScript and then back into JavaScript. Needs work. */
    var wordCount = function() {
        var discard, exports, maxLength, minLength, parseText, punctuation, stopWords, tags, wordSeparators;
        exports = {};
        tags = {};
        maxLength = 25;
        minLength = 3;
        parseText = function(text) {
            var cases;
            cases = {};
            return text.split(wordSeparators).forEach(function(word) {
                if (discard.test(word)) {
                    return;
                }
                word = word.replace(punctuation, "");
                if (stopWords.test(word.toLowerCase())) {
                    return;
                }
                word = word.substr(0, maxLength);
                cases[word.toLowerCase()] = word;
                word = word.toLowerCase();
                if (word.length >= minLength) {
                    return tags[word] = (tags[word] || 0) + 1;
                }
            });
        };
        stopWords = /^(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall|via)$/;
        punctuation = /[!"&()*+,-\.\/:;<=>?\[\\\]^`\{|\}~]+/g;
        wordSeparators = /[\s\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+/g;
        discard = /^(@|https?:)/;
        exports.insert = function(data) {
            return data.forEach(function(d) {
                return parseText(d.text);
            });
        };
        exports.getWords = function() {
            return d3.entries(tags).sort(function(a, b) {
                return b.value - a.value;
            });
        };
        exports.reset = function() {
            return tags = {};
        };
        return exports;
    };

    var barChart = function (q) {
        var me = {};

        var sortedData, xScale, yScale,chart, rect, gridContainer, labelContainer, barsContainer;

        var valueLabelWidth = 40; // space reserved for value labels (right)
        var barHeight = 20;       // height of one bar
        var barLabelWidth = 150;  // space reserved for bar labels
        var barLabelPadding = 5;  // padding between bar and bar labels (left)
        var gridLabelHeight = 18; // space reserved for gridline labels
        var gridChartOffset = 5;  // space between start of grid and first bar
        var maxBarWidth = 500;    // width of the bar with the max value

        // accessor functions 
        var barLabel = function (d) { return d.key; };
        var barValue = function (d) { return parseFloat(d.value); };

        var y = function (d, i) { return yScale(i); };
        var yText = function (d, i) { return y(d, i) + yScale.rangeBand() / 2; };

        function render() {
            // svg container element
            chart = d3.select('#wordBars').append("svg")
                .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
                .attr('height', gridLabelHeight + gridChartOffset + sortedData.length * barHeight);

            // grid line labels
            gridContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')');
            gridContainer.selectAll("text").data(xScale.ticks(10)).enter().append("text")
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);
            // vertical grid lines
            gridContainer.selectAll("line").data(xScale.ticks(10)).enter().append("line")
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc");
            // bar labels
            labelContainer = chart.append('g')
                .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')');
            labelContainer.selectAll('text').data(sortedData).enter().append('text')
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);
            // bars
            barsContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')');
            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', 'steelblue')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');
                    if (q.indexOf(tag) !=-1) window.location = "/search?q=" + tag;
                    else if (q.length > 0) window.location = "/search?q=" + tag + "," + q;
                    else window.location = "/search?q=" + tag;
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
                .attr("y1", -gridChartOffset)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
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

        me.init = function(initialData) {
            me.update(initialData);
            renderBarChart();
        };

        me.redraw = function(dataSource) {
            me.update(dataSource);

            barsContainer.selectAll("rect")
                .data(sortedData)
                .transition()
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); });

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

            labelContainer.selectAll('text').data(sortedData)
                .transition()
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);

            /** insert, update and change grid text */
            var gridText = gridContainer.selectAll("text").data(xScale.ticks(10))

            gridText.enter().insert("text")
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);

            gridText.transition()
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);

            gridText.exit().remove();

            /** insert, update and change grid lines */
            var gridLines = gridContainer.selectAll("line").data(xScale.ticks(10))

            gridLines.enter().insert("line")
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc");

            gridLines.attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc");

            gridLines.exit().remove();
        };

        return me;
    };
    
    return { formatTweet: formatTweet, wordCount: wordCount, barChart: barChart, buildQuery: buildQuery };
});