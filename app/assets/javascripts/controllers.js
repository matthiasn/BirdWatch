'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'd3services.charts']).
    controller('BirdWatchCtrl',function ($scope, $http, $location, utils, charts, $timeout) {
        $scope.tweets = [];
        $scope.lastTweets = function () {
            return $scope.tweets
                .slice(Math.max($scope.tweets.length - 100, 0)).reverse();
        };

        $scope.barchartDefined = false;
        $scope.searchText = $location.path().substr(1);

        /** starting new search */
        $scope.newSearch = function () {
            $scope.tweetFeed.close();
            $scope.tweets = [];
            $scope.listen();
        };

        /** adds a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) $scope.searchText = searchString;
            else $scope.searchText = $scope.searchText + " " + searchString;
            $scope.$apply();  // I want the term to appear immediately, not only after search returns
            $scope.newSearch();
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        $scope.updateInterval = 1000;
        $scope.onTimeout = function () {
            $scope.$apply();
            updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);
        };
        var updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);

        /** handle incoming tweets: add to tweets array */
        $scope.addTweet = function (msg) {
            $scope.$apply(function () {
                var t = utils.formatTweet(JSON.parse(msg.data));
                $scope.tweets.push(t);
                $scope.wordCount.insert([t]);
                $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 25));
            });
        };

        $scope.barchart = charts.BarChart($scope.addSearchString);

        /** load previous tweets, paginated. recursive function, calls itself with the next chunk to load until 
         *  eventually n, the remaining tweets to load, is not larger than 0 any longer. guarantees at least n hits
         *  if available, potentially more if (n % chunkSize != 0) */
        $scope.loadPrev = function (searchString, n, chunkSize, offset) {
            if (n > 0) {
                console.log(n + ";" + chunkSize + ";" + offset);
                $http({method: "POST", data: utils.buildQuery(searchString, chunkSize, offset), url: "/tweets/search"}).
                    success(function (data, status, headers, config) {

                        $scope.tweets = data.hits.hits.reverse()
                            .map(function (t) { return t._source; })
                            .map(utils.formatTweet).concat($scope.tweets);

                        $scope.wordCount.insert($scope.tweets);

                        if ($scope.barchartDefined === false) {
                            $scope.barchart.init($scope.wordCount.getWords().slice(0, 26));
                            $scope.barchartDefined = true;
                        } else {
                            $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 26))
                        }

                        $scope.loadPrev(searchString, n - chunkSize, chunkSize, offset + chunkSize);
                    }).
                    error(function (data, status, headers, config) {
                    }
                );
            }
        };

        /** start listening for tweets with given query */
        $scope.listen = function () {
            $scope.tweets = [];
            $scope.wordCount = utils.wordCount();

            var searchString = "*";
            if ($scope.searchText.length > 0) {
                searchString = $scope.searchText;
                $location.path(searchString);
            }
            else $location.path("");

            $scope.tweetFeed = new EventSource("/tweetFeed2?q=" + searchString);
            $scope.tweetFeed.addEventListener("message", $scope.addTweet, false);

            $scope.loadPrev(searchString, 1000, 100, 0);
        };

        $scope.listen();

    }).filter("fromNow", function () {
        return function (date) {
            return moment(date).fromNow();
        }
    })
;