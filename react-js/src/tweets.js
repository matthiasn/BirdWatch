(function () {
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
