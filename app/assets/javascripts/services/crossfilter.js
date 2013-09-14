'use strict';

/** utils service */
angular.module('birdwatch.services').service('cf', function (utils) {
    var exports = {};

    var cf = crossfilter([]);
    var userDim      = cf.dimension(function(t) { return t.user.screen_name; });
    var tweetIdDim   = cf.dimension(function(t) { return t.id_str; });
    var followersDim = cf.dimension(function(t) { return t.user.followers_count; });
    var retweetsDim  = cf.dimension(function(t) {
        if (t.hasOwnProperty("retweeted_status")) {return t.retweeted_status.retweet_count; }
        else return 0;
    });

    exports.add = function(data) { cf.add(data); };
    exports.clear   = function() { cf.remove(); };
    exports.noItems = function() { return cf.size() };
    exports.numPages = function(pageSize) { return Math.ceil(cf.size() / pageSize); };

    var retweetMapper = function(t) { return utils.formatTweet(t.retweeted_status); };
    var retweeted     = function(t) { return t.hasOwnProperty("retweeted_status"); };
    var tweetId       = function(t) { return t.id_str };

    var tweetCache = [];
    exports.tweetPage = function(currentPage, pageSize, order, live) {
        if (live) {
            tweetCache = _.rest(fetchTweets(currentPage * pageSize, order), (currentPage - 1) * pageSize);
        }
        return tweetCache;
        //return _.rest(fetchTweets(currentPage * pageSize, order), (currentPage - 1) * pageSize);
    };

    var fetchTweets = function(pageSize, order) {
      if      (order === "latest")    { return tweetIdDim.top(pageSize); }
      else if (order === "followers") { return followersDim.top(pageSize);}
      else if (order === "retweets") {
          return _.first(
              _.uniq(retweetsDim.top(cf.size()).filter(retweeted).map(retweetMapper), false, tweetId), pageSize);
      }
      else { return []; }
    };

    return exports;
});
