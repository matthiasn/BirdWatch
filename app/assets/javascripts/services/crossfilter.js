//'use strict';

/** utils service */
angular.module('birdwatch.services').service('cf', function () {
    var exports = {};

    var cf = crossfilter([]);
    var userDim = cf.dimension(function(t) { return t.user.screen_name; });
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

    return exports;
});
