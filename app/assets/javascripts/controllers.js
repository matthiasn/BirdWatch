'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $http, $location, utils, barchart, wordcloud, $timeout) {
        $scope.tweets = [];
        $scope.prevSize = 1000;
        $scope.pageSize = 30;

        $scope.noOfPages = function () { return Math.ceil($scope.tweets.length / $scope.pageSize); };
        $scope.currentPage = 4;
        $scope.maxSize = 13;
        
        $scope.lastCloudUpdate = new Date().getTime() - 2000;

        $scope.lastTweets = function () {
            return $scope.tweets.slice(Math.max($scope.tweets.length - 100, 0)).reverse();
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
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) {
                $scope.searchText = $scope.searchText + " " + searchString;
            }
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

                if ((new Date().getTime() - $scope.lastCloudUpdate) > 5000) {
                    $scope.wordCloud.redraw($scope.wordCount.getWords());
                    $scope.lastCloudUpdate = new Date().getTime();
                }
            });
        };

        $scope.barchart = barchart.BarChart($scope.addSearchString);

        $scope.wordCloud = wordcloud.WordCloud(650, 400, 250, $scope.addSearchString);


        /** load previous tweets, paginated. recursive function, calls itself with the next chunk to load until
         *  eventually n, the remaining tweets to load, is not larger than 0 any longer. guarantees at least n hits
         *  if available, potentially more if (n % chunkSize != 0) */
        $scope.loadPrev = function (searchString, n, chunkSize, offset) {
            if (n > 0) {
                $http({method: "POST", data: utils.buildQuery(searchString, chunkSize, offset), url: "/tweets/search"}).
                    success(function (data, status, headers, config) {

                        var tempData = data.hits.hits.reverse()
                            .map(function (t) { return t._source; })
                            .map(utils.formatTweet);

                        $scope.tweets = tempData.concat($scope.tweets); // prepend whole array

                        $scope.wordCount.insert(tempData);

                        if (n < 101) {     // only trigger drawing of wordcloud on last chunk of data, expensive 
                            $scope.wordCloud.redraw($scope.wordCount.getWords())
                        }

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

            $scope.tweetFeed = new EventSource("/tweetFeed?q=" + searchString);
            $scope.tweetFeed.addEventListener("message", $scope.addTweet, false);

            $scope.loadPrev(searchString, $scope.prevSize, 100, 0);
        };

        $scope.listen();

    })
    .filter("fromNow", function () {
        return function (date) { return moment(date).fromNow(); }
    })
    .directive('profileImage', function () {
        return {
            restrict: 'A',
            template: '<span ng-model="tweet"><a href="http://www.twitter.com/{{ t.user.screen_name }}" target="_blank">' +
                      '<img class="thumbnail" src="{{t.user.profile_image_url}}" />' +
                      '</a></span>',
            scope: { tweet: "=" },
            link: function (scope, elem, attrs) {
                console.log(attrs);
            }
        }
    });