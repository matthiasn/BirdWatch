'use strict';

/** utils service */
angular.module('birdwatch.services', []).service('utils', function () {

    var formatTweet = function(tweet) {
        var t = tweet._source;
        var m, tag, url, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
        t.text = t.text.replace("RT ", "<strong>RT </strong>");
        _ref = t.entities.hashtags;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            tag = _ref[_i];
            t.text = t.text.replace("#" + tag.text, "<a href='https://twitter.com/search?q=%23" + tag.text 
                + " ' target='_blank'>#" + tag.text + "</a>");
        }
        _ref2 = t.entities.user_mentions;
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            m = _ref2[_j];
            t.text = t.text.replace("@" + m.screen_name, "<a href='https://twitter.com/" + m.screen_name 
                + " ' target='_blank'>@" + m.screen_name + "</a>");
        }
        _ref3 = t.entities.urls;
        for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
            url = _ref3[_k];
            t.text = t.text.replace(url.url, "<a href='" + url.url + " ' target='_blank'>" + url.display_url + "</a>");
        }
        tweet._source = t;
        return tweet;
    };
    
    return { formatTweet: formatTweet };
});