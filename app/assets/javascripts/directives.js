'use strict';

/** Directives */
angular.module('birdwatch.directives', ['charts.barchart', 'charts.wordcloud'])
    /** Tweet Card Layout (with external template)*/
    .directive('tweetCard', function () {
        return {
            restrict: 'C',
            scope: { tweet: "=tweet" },
            templateUrl: "/assets/templates/tweetCard.tpl.html"
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
    })
    .directive('timeseries', function () {
        return {
            restrict: 'C',
            scope: { tsdata: "=tsdata", live: "=live", interval: "=interval", height: "=height" },
            link: function ($scope, elem, attrs) {
                var graph = new Rickshaw.Graph( {
                    element: elem[0],
                    width: elem.width(),
                    height: $scope.height,
                    renderer: 'bar',
                    series: [ {
                        color: 'steelblue',
                        name: 'Tweets',
                        data: [{ x: 0, y: 0 }]
                    } ]
                } );
                new Rickshaw.Graph.Axis.Time({ graph: graph });
                graph.render();

                new Rickshaw.Graph.HoverDetail({
                    graph: graph,
                    yFormatter: function(y) { return y === null ? y : y.toFixed(0); }
                });

                $scope.$watch("tsdata", function() {
                    if ($scope.tsdata.length > 0) {
                        graph.series[0].data = $scope.tsdata.map(function(el) { return { x: el.key, y: el.value } });
                        graph.update();
                    }
                });
            }
        }
    })
    //from http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
    .directive('ngBindHtmlUnsafe', ['$sce', function($sce){
    return {
        scope: {
            ngBindHtmlUnsafe: '='
        },
        template: "<div ng-bind-html='trustedHtml'></div>",
        link: function($scope, iElm, iAttrs, controller) {
            $scope.updateView = function() {
                $scope.trustedHtml = $sce.trustAsHtml($scope.ngBindHtmlUnsafe);
            };

            $scope.$watch('ngBindHtmlUnsafe', function(newVal, oldVal) {
                $scope.updateView(newVal);
            });
        }
    };
}]);
