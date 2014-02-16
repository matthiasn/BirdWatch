var BirdWatch = BirdWatch || {};

(function () {
    BirdWatch.prevSize = $("#prev-size");
    BirdWatch.pageSize = $("#page-size");
    BirdWatch.offsetSize = $("#offset-size");

    var buildQuery = function (queryString, size, from) {
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

    var punctuation = /[!"&()*+,\.\/:;<=>?\[\\\]^`“”\{|\}~]+/g;
    var wordSeparators = /[\s\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+/g;
    var discard = /^(@|https?:)/;

    var flattenTweet = function (t) {
        return {
            id: t.id,
            text: t.text,
            created_at: t.created_at,
            screen_name: t.user.screen_name,
            name: t.user.name,
            profile_image_url: t.user.profile_image_url,
            retweet_count: t.retweet_count,
            followers_count: t.user.followers_count,
            favorite_count: t.favorite_count
        };
    };

    BirdWatch.processWords = function (tweet) {
        var words = tweet.text.split(wordSeparators).map(function (word) {
            if (discard.test(word)) { return ""; }
            word = word.replace(punctuation, "");
            return word;
        });
        BirdWatch.addWords(words);
    };

    /** POST search */
    BirdWatch.loadPrevious = function (q, n, chunkSize, offset) {
        if (n > 0) {
            $.ajax(
                {
                    url: "/tweets/search",
                    type: "POST",
                    data: JSON.stringify(buildQuery(q, chunkSize, offset)),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (res) {
                        var tweets = res.hits.hits;
                        tweets.forEach(function (rawTweet) {
                            var t =  rawTweet._source;
                            BirdWatch.tweetHandler(flattenTweet(t));
                            if (t.hasOwnProperty("retweeted_status")) {
                                BirdWatch.tweetHandler(flattenTweet(t.retweeted_status));
                            }
                            BirdWatch.processWords(t);
                        });

                        BirdWatch.triggerReact();

                        setTimeout(function () {
                            BirdWatch.loadPrevious(q, n - chunkSize, chunkSize, offset + chunkSize);
                        }, 0);
                    }
                }
            );
        }
    };

    var tweetFeed; // holds SSE streaming connection for Tweets for specified query
    BirdWatch.listen = function (q) { // returns function that takes query as argument
        if (tweetFeed) { tweetFeed.close(); }   // if initialized, close before starting new connection
        tweetFeed = new EventSource("/tweetFeed?q=" + q); // (re-)initializes connection
        tweetFeed.addEventListener("message", function (msg) {
            var t = JSON.parse(msg.data);
            BirdWatch.processWords(t);
            BirdWatch.fastTweetHandler(flattenTweet(t));
            if (t.hasOwnProperty("retweeted_status")) {
                BirdWatch.fastTweetHandler(flattenTweet(t.retweeted_status));
            }
            BirdWatch.triggerReact();
        }, false); // attach addMsg event handler
    };

})();

BirdWatch.setAppState = function (appState) {};
BirdWatch.setTweetCount = function (n) {};
BirdWatch.setPQueueSize = function (n) {};

BirdWatch.setTweetList = function (tweetList) {};

BirdWatch.setWordCount = function (wordCount) {};
BirdWatch.startSearch = function (query) {};

BirdWatch.pageSize.change(function () {BirdWatch.triggerReact();} );
BirdWatch.offsetSize.change(function () {BirdWatch.triggerReact();} );

BirdWatch.getPrevSize = function () { return BirdWatch.prevSize.val(); };
BirdWatch.getPageSize = function () { return BirdWatch.pageSize.val(); };
BirdWatch.getOffsetSize = function () { return BirdWatch.offsetSize.val(); };

$('#searchForm').submit(function (e) {
    BirdWatch.search();
    e.preventDefault();
    return false;
});

BirdWatch.search = function () {
    var searchField = $("#searchField");
    BirdWatch.startSearch(searchField.val());
    searchField.val(searchField.val()).focus();
};

BirdWatch.sortByLatest = function () {};
BirdWatch.sortByFollowers = function () {};
BirdWatch.sortByRetweets = function () {};
BirdWatch.sortByFavorites = function () {};

BirdWatch.tweetHandler = function (t) {};
BirdWatch.fastTweetHandler = function (t) {};
BirdWatch.haltQueue = function () {};

BirdWatch.addWords = function (words) {};
BirdWatch.triggerReact = function () {};

BirdWatch.printObject = function (obj) { console.log(obj); };

BirdWatch.makeTweet = function (created_at, id, text, screen_name, name, profile_image_url, followers_count,
                                retweet_count, favorite_count) {
    return {
        created_at: created_at,
        id: id,
        text: text,
        screen_name: screen_name,
        name: name,
        profile_image_url: profile_image_url,
        followers_count: followers_count,
        retweet_count: retweet_count,
        favorite_count: favorite_count
    }
};

BirdWatch.makeWordCountObj = function (text, value) {
    return {
        text: text,
        value: value
    }
};
