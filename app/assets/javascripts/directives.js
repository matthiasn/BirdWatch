'use strict';

/** Directives */
angular.module('birdwatch.directives', [])
    /** Tweet Card Layout (with external template)*/
    .directive('tweetCard', function () {
        return {
            restrict: 'C',
            scope: { tweet: "=tweet" },
            templateUrl: "/assets/templates/tweetCard.tpl.html",
            link: function (scope, elem, attrs) { }
        }
    });