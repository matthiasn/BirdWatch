'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services']).
    controller('BirdWatchCtrl', function ($scope, $http, $location, utils, $timeout) {
        $scope.tweets = [];
        $scope.lastTweets = function () {
            return $scope.tweets
                .slice(Math.max($scope.tweets.length - 100, 1)).reverse();
        };
        
        $scope.searchText = $location.path().substr(1);

        /** starting new search */
        $scope.newSearch = function () {
            $scope.tweetFeed.close();
            $scope.tweets = [];
            $scope.listen();
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        $scope.updateInterval = 10000;
        $scope.onTimeout = function (){
            $scope.$apply();
            updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);
        }
        var updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);

        /** handle incoming tweets: add to tweets array */
        $scope.addTweet = function (msg) {
            $scope.$apply(function () {        
                $scope.tweets.push(utils.formatTweet(JSON.parse(msg.data)));
            });
        };

        /** start listening for tweets with given query */
        $scope.listen = function () {

            $http({method: "GET", url: "/tweets/search?q=" + $scope.searchText + "&n=10000"}).
                success(function (data, status, headers, config) {
                    $scope.tweets = data.hits.hits.reverse();
                    $scope.tweets.forEach(utils.formatTweet);
                    
                    var searchString = "*";
                    if ($scope.searchText.length > 0) {
                        searchString = $scope.searchText;
                        $location.path(searchString);
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