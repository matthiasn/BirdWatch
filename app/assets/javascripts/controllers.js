'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $http, $location, utils, barchart, wordcloud, $timeout) {
        /** Main Data Structure: Array for Tweets */
        $scope.tweets = [];
        
        /** Settings */
        $scope.prevSizeOpts = ['100', '500', '1000', '2000', '5000'];
        $scope.prevSize = $scope.prevSizeOpts[2];
        $scope.pageSizeOpts = ['5', '10', '25', '50', '100'];
        $scope.pageSize = $scope.pageSizeOpts[2];
        $scope.stayOnLastPage = true;
        $scope.toggleLive = function () { $scope.stayOnLastPage = !$scope.stayOnLastPage};
        
        $scope.currentPage = 1;
        $scope.maxSize = 12;
        $scope.barchartDefined = false;
        $scope.searchText = $location.path().substr(1);
        $scope.legalStuff = utils.legalStuff;

        /** Dynamically calculate number of pages total*/
        $scope.noOfPages = function () { return Math.ceil($scope.tweets.length / $scope.pageSize); };

        /** Last update timestamp for WordCLoud */
        $scope.lastCloudUpdate = new Date().getTime() - 10000;

        /** Return paginated selection of Tweets array */
        $scope.tweetPage = function () {
            var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
            var endIndex = Math.min(startIndex + $scope.pageSize, $scope.tweets.length);            
            return $scope.tweets.slice(startIndex, endIndex).reverse();
        };
        
        /** Start new search */
        $scope.newSearch = function () {
            $scope.tweetFeed.close();
            $scope.tweets = [];
            $scope.listen();
        };

        /** Add a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) {
                $scope.searchText = $scope.searchText + " " + searchString;
            }
            $scope.$apply();  // I want the term to appear immediately, not only after search returns
            $scope.newSearch();            
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        $scope.updateInterval = 10000;
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
                
                if ($scope.stayOnLastPage) {
                    $scope.currentPage = Math.ceil($scope.tweets.length / $scope.pageSize);                    
                }
            });
        };
        
        /** charts */
        $scope.barchart = barchart.BarChart($scope.addSearchString, $("#wordBars").width() - 180);
        $scope.wordCloud = wordcloud.WordCloud($("#wordCloud").width(), $("#wordCloud").width() * 0.75, 250, 
            $scope.addSearchString);

        /** resize charts on window resize (currently only working for wordcloud) */
        function resizeCharts() {
            $("#wordCloud").empty();
            $scope.wordCloud = wordcloud.WordCloud($("#wordCloud").width(), $("#wordCloud").width() * 0.75,
                250, $scope.addSearchString);
        }
        var TO = false;
        $(window).resize(function(){
            if(TO !== false)
                clearTimeout(TO);
            TO = setTimeout(resizeCharts, 2000); //200 is time in miliseconds
        });
        
        /** Load previous Tweets, paginated. Recursive function, calls itself with the next chunk to load until
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
                            $scope.wordCloud.redraw($scope.wordCount.getWords());
                        }

                        if ($scope.barchartDefined === false) {
                            $scope.barchart.init($scope.wordCount.getWords().slice(0, 26));
                            $scope.barchartDefined = true;
                        } else {
                            $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 26))
                        }

                        if ($scope.stayOnLastPage) {
                            $scope.currentPage = Math.ceil($scope.tweets.length / $scope.pageSize);
                        }
                        
                        $scope.loadPrev(searchString, n - chunkSize, chunkSize, offset + chunkSize);
                    }).error(function (data, status, headers, config) { }
                );
            }
        };

        /** Start Listening for Tweets with given query */
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

        /** start listening to new Tweets immediately */
        $scope.listen();
    });