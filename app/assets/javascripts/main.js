require(["barchart", "wordcloud"], function (chart, cloud) {
    var feed = new EventSource('/tweetStateFeed');
    feed.addEventListener('message', handler, false);

    // Overall viewmodel for this screen, along with initial state
    var TweetsViewModel = function() { this.tweets = ko.observableArray(); };
    var viewModel = new TweetsViewModel();
    ko.applyBindings(viewModel);

    var barchart = chart.BarChart();
    barchart.init();
    var wordCloud = cloud.WordCloud();
    wordCloud.init();
    
    var lastCloudUpdate = new Date().getTime() - 2000;
    var lastBarUpdate = new Date().getTime() - 2000;
    var lastWordsUpdate = new Date().getTime() - 2000;

    function handler(msg){
        var data = JSON.parse(msg.data);

        viewModel.tweets.unshift(data.tweetList[0]);
        if(viewModel.tweets().length > 9) { viewModel.tweets().pop(); }     // not working

        if ( (new Date().getTime() - lastBarUpdate) > 800) {
            barchart.redraw(data.topWords);
            lastBarUpdate = new Date().getTime();
        }
        if ( (new Date().getTime() - lastCloudUpdate) > 5000) {
            wordCloud.redraw(data.topWords);
            lastCloudUpdate = new Date().getTime();
        }

        if ( (new Date().getTime() - lastWordsUpdate) > 1000) {
            var bulletData = {
                title: "Words / Tweet",
                subtitle: "M, SD",
                ranges: [data.wordCountMean-data.wordCountStdDev,data.wordCountMean+data.wordCountStdDev,25],
                measures: [data.wordCountMean],
                markers: [data.wordCountMean]
            };
            nv.addGraph(function() {
                bulletChart = nv.models.bulletChart();

                d3.select('#bulletChart svg')
                    .datum(bulletData)
                    .transition().duration(1000)
                    .call(bulletChart);

                return bulletChart;
            });
        }
    }

});