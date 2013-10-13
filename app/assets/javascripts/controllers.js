'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $location, utils, barchart, wordcloud, $timeout, wordCount, cf, tweets) {
        $scope.prevSizeOpts = ['100', '500', '1000', '2000', '5000', '10000', '20000'];
        $scope.prevSize = $scope.prevSizeOpts[4];
        $scope.pageSizeOpts = [5, 10, 25, 50, 100];
        $scope.pageSize = $scope.pageSizeOpts[1];
        $scope.live = true;
        $scope.toggleLive = function () {                             // freezes view when switched off by having the
            if ($scope.live) { cf.freeze(); } else { cf.unfreeze(); } // crossfilter limit results to tweets older
            $scope.live = !$scope.live;                               // than the latest at the time of calling freeze()
        };
        $scope.currentPage = 1;
        $scope.searchText = $location.path().substr(1);
        $scope.legalStuff = utils.legalStuff;
        $scope.cf = cf;
        $scope.sortModel = 'latest';
        $scope.words = [];

        /** Add a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) { $scope.searchText += " " + searchString; }
            $scope.$apply();  // Term should appear immediately, not only after search returns
            $scope.search();
        };

        /** update UI every ten seconds to keep time ago for tweets accurate */
        var onTimeout = function () { updateTimeout = $timeout(onTimeout, 10000); };
        var updateTimeout = onTimeout();

        /** actions to perform when new tweets are available through the streaming connection */
        tweets.registerCallback(function (t) {
            $scope.wordCount.insert(t);
            $scope.words = $scope.wordCount.getWords();
            cf.add(t);
        });

        /** Search for Tweets with given query, run on startup */
        $scope.search = function () {
            $scope.wordCount = wordCount.wordCount();
            tweets.search($scope.searchText, $scope.prevSize);
            cf.clear();
        };
        $scope.search();
    });
