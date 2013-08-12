'use strict';

/** utils service */
angular.module('birdwatch.services').service('tweets', function ($http, utils, $location) {
    
    var tweets = [];
    var tweetFeed;
    var onNewTweets = function (items) {
        console.log("callback:");
        console.log(items);
    };
    
    var tweetPage = function (currentPage, pageSize) {
        
        var startIndex = (currentPage - 1) * pageSize;
        var endPage = startIndex + pageSize;
        
        var endIndex = Math.min(endPage, tweets.length);
        
        var page = tweets.slice(startIndex, endIndex).reverse();
        console.log(page);

        console.log("currentPage " + currentPage);
        console.log("startIndex " + startIndex);
        console.log("endIndex " + endIndex);
        console.log("tweets.length " + tweets.length);
        console.log("startIndex + pageSize " + endPage);

        return page;   
    };

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
                    query: "(" + queryString + ") AND lang:en",
                    default_operator: "AND"
                }
            },
            sort: { "id": "desc" }
        };
    };

    /** handle incoming tweets: add to tweets array */
    var addTweet = function (msg) {
        var t = utils.formatTweet(JSON.parse(msg.data));
        tweets.push(t);
        onNewTweets([t]);
    };
    
    var loadPrev = function (searchString, n, chunkSize, offset) {
        if (n > 0) {
            $http({method: "POST", data: buildQuery(searchString, chunkSize, offset), url: "/tweets/search"}).
                success(function (data, status, headers, config) {

                    var tempData = data.hits.hits.reverse()
                        .map(function (t) { return t._source; })
                        .map(formatTweet);

                    tweets = tempData.concat(tweets); // prepend whole array
                    
                    onNewTweets(tempData);

                    loadPrev(searchString, n - chunkSize, chunkSize, offset + chunkSize);
                }).error(function (data, status, headers, config) { }
            );
        }
    };

    var prevSize = 1000;

    /** Start Listening for Tweets with given query */
    var search = function (queryString) {
        tweets = [];

        if (typeof tweetFeed === 'object') {
            tweetFeed.close();
        }

        var searchString = "*";
        if (queryString.length > 0) {
            searchString = queryString;
            $location.path(searchString);
        }
        else $location.path("");

        tweetFeed = new EventSource("/tweetFeed?q=" + searchString);
        tweetFeed.addEventListener("message", addTweet, false);

        loadPrev(searchString, prevSize, 100, 0);
    };
    
    var registerCallback = function (callback) {
        onNewTweets = callback;
    };
    
    return { tweetPage: tweetPage, search: search, registerCallback: registerCallback };
});