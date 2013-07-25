'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'birdwatch.d3Services']).
    controller('BirdWatchCtrl', function ($scope, $http, $location, utils, d3Services, $timeout) {
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
        
        $scope.addSearchString = function (searchString) {
            $scope.searchText = $scope.searchText + " " + searchString;
            $scope.$apply();  // I want the term to appear immediately, not only after search returns
            $scope.newSearch();
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        $scope.updateInterval = 1000;
        $scope.onTimeout = function (){
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

        $scope.barchart = d3Services.barChart($scope.addSearchString);

        /** start listening for tweets with given query */
        $scope.listen = function () {
            $scope.wordCount = utils.wordCount();

            var searchString = "*";
            if ($scope.searchText.length > 0) {
                searchString = $scope.searchText;
                $location.path(searchString);
            }
            
            $http({method: "POST", data: utils.buildQuery(searchString, 10000, 0), url: "/tweets/search"}).
                success(function (data, status, headers, config) {
                    $scope.tweets = data.hits.hits.reverse()
                        .map(function (t) { return t._source; })
                        .map(utils.formatTweet);

                    $scope.wordCount.insert($scope.tweets);

                    if ( $scope.barchartDefined === false ) {
                        $scope.barchart.init($scope.wordCount.getWords().slice(0, 26));
                        $scope.barchartDefined = true;
                    } else {
                        $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 26))                        
                    }

                    $scope.tweetFeed = new EventSource("/tweetFeed2?q=" + searchString);
                    $scope.tweetFeed.addEventListener("message", $scope.addTweet, false);
                }).
                error(function (data, status, headers, config) { });
        };

        $scope.listen();
        
    }).filter("fromNow", function () {
        return function(date) {
            return moment(date).fromNow();
        }
    })
;