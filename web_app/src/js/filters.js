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
    }).filter("numberFormat", function () {
        return function (number) {
            if (number < 1000) { return number; }
            else if (number < 100000) { return (Math.round(number / 100) / 10) + "K"}
            else if (number < 1000000) { return Math.round(number / 1000) + "K"}
            else { return (Math.round(number / 100000) / 10) + "M"}
        }
    });
