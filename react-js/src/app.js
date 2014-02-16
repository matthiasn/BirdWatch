(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    BirdWatch.triggerReact = function () {
        console.log("triggerReact");

        BirdWatch.setTweetCount(BirdWatch.crossfilter.noItems());
    };

    BirdWatch.tweets.registerCallback(function (t) {
        BirdWatch.wordcount.insert(t);
        BirdWatch.crossfilter.add(t);
    });

    BirdWatch.search = function (searchText, prevSize) {
        BirdWatch.tweets.search(searchText, prevSize);
        BirdWatch.crossfilter.clear();
    };

}());
