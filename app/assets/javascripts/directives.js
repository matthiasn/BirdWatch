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
            template: '',
            link: function ($scope, element, attrs) {
                $scope.barchartDefined = false;
                $scope.barchart = barchart.BarChart($scope.callback, element.width() - 170, element);

                $scope.$watch("words", function() {
                    if ($scope.words.length > 10 && $scope.live) {
                        if ($scope.barchartDefined === false) {
                            $scope.barchart.init($scope.words.slice(0, 26));
                            $scope.barchartDefined = true;
                        } else { $scope.barchart.redraw($scope.words.slice(0, 26)) }
                    }
                });
            }
        }
    })
    .directive('cloud', function (wordcloud) {
        return {
            restrict: 'C',
            scope: { words: "=words", live: "=live", interval: "=interval", callback: "=callback" },
            template: '',
            link: function ($scope, elem, attrs) {
                var lastCloudUpdate = new Date().getTime() - $scope.interval;
                $scope.wordCloud = wordcloud.WordCloud(elem.width(), elem.width() * 0.75, 250, $scope.callback, elem);

                /** resize wordCloud on window resize when div size changes */
                function resizeWordcloud() {
                    elem.empty();
                    $scope.wordCloud = wordcloud.WordCloud(elem.width(), elem.width() * 0.75, 250, $scope.callback, elem);
                }
                $(window).resize(function () { _.throttle(resizeWordcloud, 1000)(); });

                $scope.$watch("words", function() {
                    if ((new Date().getTime() - lastCloudUpdate) > $scope.interval &&  $scope.live) {
                        $scope.wordCloud.redraw($scope.words);
                    }
                });
            }
        }
    });
