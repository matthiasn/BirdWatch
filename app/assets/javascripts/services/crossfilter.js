'use strict';

/** utils service */
angular.module('birdwatch.services').service('cf', function (utils) {
    var exports = {};

    var cf = crossfilter([]);
    var userDim = cf.dimension(function(t) { return t.user.screen_name; });
    var tweetIdDim = cf.dimension(function(t) { return t.id_str; });
    var followersDim = cf.dimension(function(t) { return t.user.followers_count; });
    var retweetsDim = cf.dimension(function(t) {
        if (t.hasOwnProperty("retweeted_status")) {return t.retweeted_status.retweet_count; }
        else return 0;
    });

    exports.add = function(data) {
        cf.add(data);
    };

    exports.clear = function() {
        cf.remove();
    };

    exports.tweetPage = function(currentPage, pageSize, order, live) {
      if (order === "latest") {
          return tweetIdDim.top(pageSize);
      }
      else if (order === "followers") {
          return followersDim.top(pageSize);
      }
      else if (order === "retweets") {
          return retweetsDim.top(pageSize).map(function(rt) {
              var t = utils.formatTweet(rt.retweeted_status);
              return t;
          });
      }
      else {return [];}
    };

    return exports;
});
