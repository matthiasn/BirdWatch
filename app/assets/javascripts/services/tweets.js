'use strict';

/** tweets service, load previous tweets and receives subsequent live tweets for given query */
angular.module('birdwatch.services').factory('tweets', function ($http, utils, $location) {
    
    var tweets = [];
    var tweetFeed;
    
    /** callback function to perform when new tweet(s) arrive */
    var onNewTweets = function (t) {};
    var registerCallback = function (callback) { onNewTweets = callback; };

    /** Return paginated selection of Tweets array */
    var tweetPage = function (currentPage, pageSize) {        
        var startIndex = (currentPage -1) * pageSize;
        var endPage = startIndex + pageSize;
        var endIndex = Math.min(endPage, tweets.length);    
        return tweets.slice(startIndex, endIndex).reverse();   
    };

    /** handle incoming tweets: add to tweets array */
    var addTweet = function (msg) {
        var t = utils.formatTweet(JSON.parse(msg.data));
        tweets.push(t);
        onNewTweets([t]);
    };

    /** Load previous Tweets, paginated. Recursive function, calls itself with the next chunk to load until
     *  eventually n, the remaining tweets to load, is not larger than 0 any longer. guarantees at least n hits
     *  if available, potentially more if (n % chunkSize != 0) */
    var loadPrev = function (searchString, n, chunkSize, offset) {
        if (n > 0) {
            $http({method: "POST", data: utils.buildQuery(searchString, chunkSize, offset), url: "/tweets/search"}).
                success(function (data) {
                    var tempData = data.hits.hits.reverse().map(function (t) { return t._source; }).map(utils.formatTweet);
                    tweets = tempData.concat(tweets); // prepend whole array                   
                    onNewTweets(tempData);

                    loadPrev(searchString, n - chunkSize, chunkSize, offset + chunkSize);
                }).error(function (data, status, headers, config) { }
            );
        }
    };

    /** Start Listening for Tweets with given query */
    var search = function (queryString, prevSize) {
        tweets = [];
        if (typeof tweetFeed === 'object') { tweetFeed.close(); }

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
    
    /** Dynamically calculate number of pages total*/
    var noOfPages = function (pageSize) { return Math.ceil(tweets.length / pageSize); };

    var count = function () { return tweets.length; };
    
    return { tweetPage: tweetPage, search: search, registerCallback: registerCallback, noOfPages: noOfPages, count: count };
});
