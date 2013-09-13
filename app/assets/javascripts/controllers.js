'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $http, $location, utils, barchart, wordcloud, $timeout, wordCount, cf, tweets) {
        /** Settings */
        $scope.prevSizeOpts = ['100', '500', '1000', '2000', '5000'];
        $scope.prevSize = $scope.prevSizeOpts[2];
        $scope.pageSizeOpts = [5, 10, 25, 50, 100];
        $scope.pageSize = $scope.pageSizeOpts[2];
        $scope.stayOnLastPage = true;
        $scope.toggleLive = function () { $scope.stayOnLastPage = !$scope.stayOnLastPage};      
        $scope.currentPage = 1;
        $scope.maxSize = 12;
        $scope.barchartDefined = false;
        $scope.searchText = $location.path().substr(1);
        $scope.legalStuff = utils.legalStuff;
        $scope.count = tweets.count;
        $scope.noOfPages = tweets.noOfPages;
        $scope.tweetPage = tweets.tweetPage;
        
        /** Add a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) {
                $scope.searchText = $scope.searchText + " " + searchString;
            }
            $scope.$apply();  // Term should appear immediately, not only after search returns
            $scope.search();
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        var updateInterval = 10000;
        var onTimeout = function () {
            $scope.$apply();
            updateTimeout = $timeout(onTimeout, updateInterval);
        };
        var updateTimeout = $timeout(onTimeout, updateInterval);

        /** charts */
        var wordCloudDiv = $("#wordCloud");
        var wordCloudWidth = wordCloudDiv.width();
        var lastCloudUpdate = new Date().getTime() - 10000;
        
        $scope.barchart = barchart.BarChart($scope.addSearchString, $("#wordBars").width() - 170);
        $scope.wordCloud = wordcloud.WordCloud(wordCloudDiv.width(), wordCloudDiv.width() * 0.75, 250,
            $scope.addSearchString, "#wordCloud");
        
        /** resize wordCloud on window resize when div size changes by at least 5% */
        function resizeWordcloud() {
            wordCloudDiv.empty();
            $scope.wordCloud = wordcloud.WordCloud(wordCloudDiv.width(), wordCloudDiv.width() * 0.75,
                250, $scope.addSearchString, "#wordCloud");
            $scope.wordCloud.redraw($scope.wordCount.getWords());
            wordCloudWidth = wordCloudDiv.width();
        }
        /** limit execution to max once every 2 seconds because resize fires multiple times (from StackOverflow) */
        var TO = false;
        $(window).resize(function(){
            if(TO !== false)
                clearTimeout(TO);
            TO = setTimeout(resizeWordcloud, 2000); 
        });

        /** callback to perform when new tweets available */
        tweets.registerCallback(function (t) {
            $scope.wordCount.insert(t);
            cf.add(t);

            if ($scope.barchartDefined === false) {
                $scope.barchart.init($scope.wordCount.getWords().slice(0, 26));
                $scope.barchartDefined = true;
            } else {
                $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 26))
            }

            if ((new Date().getTime() - lastCloudUpdate) > 10000) {
                $scope.wordCloud.redraw($scope.wordCount.getWords());
                lastCloudUpdate = new Date().getTime();
            }

            if ($scope.stayOnLastPage) { $scope.currentPage = Math.ceil(tweets.count() / $scope.pageSize); }
        });

        /** Search for Tweets with given query, run on startup */
        $scope.search = function () {
            $scope.wordCount = wordCount.wordCount();
            tweets.search($scope.searchText, $scope.prevSize);
            cf.clear();
        };
        $scope.search();
    });
