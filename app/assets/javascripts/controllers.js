'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services']).
    controller('BirdWatchCtrl', function ($scope, $http, $location) {
        $scope.tweets = [];
        $scope.lastTweets = [];
        $scope.searchText = $location.path().substr(1);

        /** starting new search */
        $scope.newSearch = function () {
            $scope.tweetFeed.close();
            $scope.tweets = [];
            $scope.listen();
        };
        
        /** handle incoming tweets: add to tweets array */
        $scope.addTweet = function (msg) {
            $scope.lastTweets = $scope.tweets.slice(Math.max($scope.tweets.length - 5, 1)).reverse();
            $scope.$apply(function () { $scope.tweets.push(JSON.parse(msg.data)); });
        };

        /** start listening for tweets with given query */
        $scope.listen = function () {
            var searchString = "*";
            if ($scope.searchText.length > 0) {              
                searchString = $scope.searchText;
                $location.path(searchString);
            }
            $scope.tweetFeed = new EventSource("/tweetFeed2?q=" + searchString);            
            $scope.tweetFeed.addEventListener("message", $scope.addTweet, false);
        };

        $scope.listen();
    });