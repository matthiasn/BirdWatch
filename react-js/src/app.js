(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    var timeSeries1 = $("#timeseries1");
    var graph = new Rickshaw.Graph( {
        element: document.querySelector("#timeseries1"),
        width: timeSeries1.width(),
        height: 100,
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

    var barChartElem = $("#wordBars");
    var barchart = BirdWatch.BarChart(function(){}, barChartElem.width() - 180, "#wordBars", 25);
    var barChartInit = false;

    var wordCloudElem = $("#wordCloud");
    var wordCloud = BirdWatch.WordCloud(wordCloudElem.width(), wordCloudElem.width() * 0.75, 250, function (){}, "#wordCloud");
    BirdWatch.lastCloudUpdate = (new Date().getTime()) - 7000;

    BirdWatch.setWordCount = function (wordCounts) {
        if (!barChartInit) {
            barchart.init(wordCounts, 500);
            barChartInit = true;
        }
        barchart.redraw(wordCounts);

        if ((new Date().getTime() - BirdWatch.lastCloudUpdate) > 10000) {
            wordCloud.redraw(wordCounts);
        }
    };

    $('#searchForm').submit(function (e) {
        BirdWatch.search();
        e.preventDefault();
        return false;
    });

    var sortOrder = "latest";

    var pageSize = $("#page-size");
    BirdWatch.triggerReact = function () {
        BirdWatch.setTweetCount(BirdWatch.crossfilter.noItems());

        graph.series[0].data = BirdWatch.crossfilter.timeseries().map(function(el) { return { x: el.key, y: el.value }; });
        graph.update();

        BirdWatch.setTweetList(BirdWatch.crossfilter.tweetPage(1, pageSize.val(), sortOrder));
    };

    BirdWatch.sortByLatest = function () { sortOrder = "latest"; BirdWatch.triggerReact(); };
    BirdWatch.sortByFollowers = function () { sortOrder = "followers"; BirdWatch.triggerReact();};
    BirdWatch.sortByRetweets = function () { sortOrder = "retweets"; BirdWatch.triggerReact(); };
    BirdWatch.sortByFavorites = function () { sortOrder = "favorites"; BirdWatch.triggerReact(); };

    BirdWatch.tweets.registerCallback(function (t) {
        BirdWatch.wordcount.insert(t);
        BirdWatch.crossfilter.add(t);
        BirdWatch.setWordCount(BirdWatch.wordcount.getWords());
    });

    BirdWatch.search = function () {
        var searchField = $("#searchField");

        BirdWatch.wordcount.reset();
        BirdWatch.crossfilter.clear();
        BirdWatch.tweets.search(searchField.val(), $("#prev-size").val());
        searchField.focus();
    };

    BirdWatch.search();
}());
