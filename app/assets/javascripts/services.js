'use strict';

/** utils service */
angular.module('birdwatch.services', []).service('utils', function () {

    var formatTweet = function(tweet) {
        var t = tweet._source;
        var tags = t.entities.hashtags;
        var mentions = t.entities.user_mentions;
        var urls = t.entities.urls;

        t.text = t.text.replace("RT ", "<strong>RT </strong>");
        
        for (var i = 0; i < tags.length; i++) {
            t.text = t.text.replace("#" + tags[i].text, "<a href='https://twitter.com/search?q=%23" + tags[i].text 
                + " ' target='_blank'>#" + tags[i].text + "</a>");
        }
        for (var j = 0; j < mentions.length; j++) {
            t.text = t.text.replace("@" + mentions[j].screen_name, "<a href='https://twitter.com/" 
                + mentions[j].screen_name + " ' target='_blank'>@" + mentions[j].screen_name + "</a>");
        }
        for (var k = 0; k < urls.length; k++) {
            t.text = t.text.replace(urls[k].url, "<a href='" + urls[k].url 
                + " ' target='_blank'>" + urls[k].display_url + "</a>");
        }
        tweet._source = t;
        return tweet;
    };
    return { formatTweet: formatTweet };
});