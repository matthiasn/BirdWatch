//'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $location, utils, barchart, wordcloud, $timeout, wordCount, cf, tweets) {
        $scope.prevSizeOpts = ['100', '500', '1000', '2000', '5000', '10000', '20000'];
        $scope.prevSize = $scope.prevSizeOpts[2];
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
        $scope.tsdata1 = cf.timeseries();

        /** Add a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) { $scope.searchText += " " + searchString; }
            $scope.$apply();  // Term should appear immediately, not only after search returns
            $scope.search();
        };

        /** update UI every second to keep time ago for tweets accurate */
        var onTimeout = function () {
            $scope.tsdata1 = cf.timeseries();
            updateTimeout = $timeout(onTimeout, 1000);
        };
        var updateTimeout = onTimeout();

        var insertionCache = [];
        // callback to perform when new tweets available
        tweets.registerCallback(function (t) {
            insertionCache = insertionCache.concat(t);      // every received item is appended to insertionCache.
            _.throttle(function() {                         // throttle because every insertion triggers expensive
                $scope.wordCount.insert(insertionCache);    // $scope.apply(), insert cache once every 3 seconds,
                insertionCache = [];                        // then empty cache.
                $scope.words = $scope.wordCount.getWords();
            }, 3000)();

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
