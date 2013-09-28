'use strict';

/** Directives */
angular.module('birdwatch.directives', ['charts.barchart', 'charts.wordcloud'])
    /** Tweet Card Layout (with external template)*/
    .directive('tweetCard', function () {
        return {
            restrict: 'C',
            scope: { tweet: "=tweet" },
            templateUrl: "/assets/templates/tweetCard.tpl.html",
            link: function (scope, elem, attrs) { }
        }
    })
    .directive('barchart', function (barchart) {
        return {
            restrict: 'C',
            scope: { words: "=words", live: "=live", callback: "=callback" },
            link: function ($scope, element, attrs) {
                $scope.barchartDefined = false;
                $scope.barchart = barchart.BarChart($scope.callback, element.width() - 180, element, 25);

                $scope.$watch("words", function() {
                    if ($scope.live) {
                        if ($scope.barchartDefined === false) {
                            $scope.barchart.init($scope.words.slice(0, 26));
                            $scope.barchartDefined = true;
                        } else {
                            $scope.barchart.redraw($scope.words.slice(0, 26))
                        }
                    }
                });
            }
        }
    })
    .directive('cloud', function (wordcloud) {
        return {
            restrict: 'C',
            scope: { words: "=words", live: "=live", interval: "=interval", callback: "=callback" },
            link: function ($scope, elem, attrs) {
                function init() {
                    elem.empty();
                    $scope.wordCloud = wordcloud.WordCloud(elem.width(), elem.width() * 0.75, 250, $scope.callback, elem);
                }
                init();

                var lastCloudUpdate = new Date().getTime() - $scope.interval;
                $scope.$watch("words", function() {
                    if ((new Date().getTime() - lastCloudUpdate) > $scope.interval &&  $scope.live) {
                        $scope.wordCloud.redraw($scope.words);
                    }
                });

                /** re-initialize wordCloud on window resize */
                $(window).resize(function () { _.throttle(init, 1000)(); });
            }
        }
    });
