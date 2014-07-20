'use strict';

// crossfilter service
angular.module('birdwatch.services').factory('cf', function (utils) {
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
    function dateRound(s) { return function(t) { return s * Math.floor(Date.parse(t.created_at) / (s * 1000)) }; }

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
    var originalTweet = function(t) { return utils.formatTweet(t.retweeted_status); };   // returns original tweet
    var tweetId       = function(t) { return t.id; };                                    // returns tweet id
    var retweetCount  = function(t) { if (retweeted(t)) { return t.retweeted_status.retweet_count; } else return 0 };
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

    return exports;
});
