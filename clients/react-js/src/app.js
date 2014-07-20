(function () {
    'use strict';

    window.BirdWatch = window.BirdWatch || {};

    var sortOrder = "latest";
    var pageSize = $("#page-size");

    var live = true;
    var activePage = 1;
    var setPage = function (p) {
        if (p > 0 && p <= BirdWatch.crossfilter.numPages(pageSize.val())) {
            activePage = p;
            triggerReact();
        }
    };

    BirdWatch.setPaginationHandlers({
        toggleLive: function () {
            if (live) { BirdWatch.crossfilter.freeze(); }
            else {BirdWatch.crossfilter.unfreeze(); }
            live = !live;
        },
        setPage: function (p) { setPage(p); },
        setNext: function () { setPage(activePage +1); },
        setPrev: function () { setPage(activePage -1); }
    });

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

    var wordCloudElem = $("#wordCloud");
    var wordCloud = BirdWatch.WordCloud(wordCloudElem.width(), wordCloudElem.width() * 0.75, 250, addSearchTerm, "#wordCloud");

    $('#searchForm').submit(function (e) {
        BirdWatch.search();
        e.preventDefault();
        return false;
    });

    var throttledGraph = _.throttle(function() {
        if (BirdWatch.crossfilter.noItems() > 0) {
            graph.series[0].data = BirdWatch.crossfilter.timeseries().map(function(el) {
                return { x: el.key, y: el.value };
            });
        }
        graph.update();
    }, 2500);

    function triggerReact () {
        var n = BirdWatch.crossfilter.noItems();
        BirdWatch.setTweetCount(n);
        throttledGraph();
        BirdWatch.setTweetList(BirdWatch.crossfilter.tweetPage(activePage, pageSize.val(), sortOrder));
        BirdWatch.setPagination({live: live, numPages: BirdWatch.crossfilter.numPages(pageSize.val()), activePage: activePage});
        BirdWatch.updateBarchart(BirdWatch.wordcount.getWords());
    }

    BirdWatch.sortBy = function (order) { sortOrder = order; triggerReact(); };

    /** function to call when data model changes should be reflected in the reactjs components */
    BirdWatch.tweets.registerCallback(function (t) {
        BirdWatch.wordcount.insert(t);
        BirdWatch.crossfilter.add(t);
        wordCloud.redraw(BirdWatch.wordcount.getWords());
        triggerReact();
    });

    /** function triggering a new search, also setting URL */
    var searchField = $("#searchField");
    BirdWatch.search = function () {
        BirdWatch.wordcount.reset();
        activePage = 1;
        BirdWatch.crossfilter.clear();
        BirdWatch.tweets.search(searchField.val(), $("#prev-size").val());
        searchField.focus();
        window.location.hash = "/" + encodeURIComponent(searchField.val());
        BirdWatch.lastCloudUpdate = (new Date().getTime()) - 12000;
        window.setTimeout(BirdWatch.feedWordCloud, 5000);  // schedule drawing wordcloud once (for low-frequency searches)
        graph.series[0].data = [{ x: 0, y: 0 }];
    };

    function addSearchTerm (term) {
        var prev = searchField.val();
        var newSearch = ((prev.length > 0) ? prev + " " : "") + term;
        searchField.val(newSearch);
        searchField.focus();
    }
    BirdWatch.addSearchTerm = addSearchTerm;

    searchField.val(decodeURIComponent(window.location.hash.substr(2)));
    BirdWatch.search();
}());
