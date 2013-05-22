require ["barchart", "wordCloud", "wordCount"], (chart, cloud, wordCount) ->
  showTweets = 10
  barChartLimit = 20
  lastCloudUpdate = new Date().getTime() - 2000
  lastBarUpdate = new Date().getTime() - 2000
  q = $("#queryString").text()

  barchart = chart.BarChart(q)  
  wordCloud = cloud.WordCloud(700, 500, 250, q)
  wordCount = wordCount.WordCount()
  
  # from http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberFormat = (x) -> x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
  # ViewModel for knockout.js driven list of Tweets
  class TweetsViewModel
    constructor: -> @tweets = ko.observableArray()
  viewModel = new TweetsViewModel
  ko.applyBindings viewModel

  countHandler = (msg) ->
    count = parseInt msg.data.substr(1)
    $("#count").text("Tweets ingested: " + numberFormat count)

  countFeed = new EventSource("/countFeed")
  countFeed.addEventListener "message", countHandler, false
  
  # handler function for each received message
  handler = (msg) ->
    tweet = JSON.parse(msg.data)
    wordCount.insert [tweet]
    viewModel.tweets.unshift tweet
    viewModel.tweets.pop()
    if (new Date().getTime() - lastBarUpdate) > 800
      barchart.redraw(wordCount.getWords().slice(0, barChartLimit))
      lastBarUpdate = new Date().getTime()
    if (new Date().getTime() - lastCloudUpdate) > 5000
      wordCloud.redraw(wordCount.getWords())
      lastCloudUpdate = new Date().getTime()
  
  # preload latest 2000 tweets
  d3.json "/tweets/latest?n=2000&q=" + q, (tweets) ->
    wordCount.insert tweets
    barchart.init(wordCount.getWords().slice(0, barChartLimit))
    wordCloud.redraw wordCount.getWords()
    lastCloudUpdate = new Date().getTime()
    
    tweetsShort = tweets.slice(0, showTweets).reverse()
    viewModel.tweets.unshift t for t in tweetsShort

    # start feed, attach listener
    feed = new EventSource("/tweetFeed?q=" + q)
    feed.addEventListener "message", handler, false
    