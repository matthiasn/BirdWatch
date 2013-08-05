'use strict';

/** Directives */
angular.module('birdwatch.filters', [])
    /** Tweet Card Layout (with external template)*/
    .filter("fromNow", function () {
        return function (date) {
            var timeString = moment(date).fromNow(true);
            if (timeString === "a few seconds") { return "just now"; }
            else { return timeString; }
        }
    });