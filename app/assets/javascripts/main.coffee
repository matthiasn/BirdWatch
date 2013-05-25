require ["barchart", "cloud", "wordcount"], (chart, cloud, wordCount) ->
  showTweets = 10
  barChartLimit = 20
  lastCloudUpdate = new Date().getTime() - 2000
  lastBarUpdate = new Date().getTime() - 2000
  q = $("#queryString").text()
  
  $("#wordcloud_preview").remove()

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
  
  formatTweet = (t) ->
    t.text = t.text.replace("RT ", "<strong>RT </strong>")
    t.text = t.text.replace("#" + tag.text, "<a href='https://twitter.com/search?q=%23" + tag.text + " ' target='_blank'>#" + tag.text + "</a>") for tag in t.hashtags
    t.text = t.text.replace("@" + m.screen_name, "<a href='https://twitter.com/" + m.screen_name + " ' target='_blank'>@" + m.screen_name + "</a>") for m in t.user_mentions
    t.text = t.text.replace(url.url, "<a href='" + url.url + " ' target='_blank'>" + url.display_url + "</a>") for url in t.urls
    t
  
  # handler function for each received message
  handler = (msg) ->
    tweet = JSON.parse(msg.data)
    tweet.profile_url = "http://twitter.com/" + tweet.screen_name

    wordCount.insert [tweet]
    tweet = formatTweet(tweet)

    viewModel.tweets.unshift tweet
    viewModel.tweets.pop()
    if (new Date().getTime() - lastBarUpdate) > 800
      barchart.redraw(wordCount.getWords().slice(0, barChartLimit))
      lastBarUpdate = new Date().getTime()
    if (new Date().getTime() - lastCloudUpdate) > 5000
      wordCloud.redraw(wordCount.getWords())
      lastCloudUpdate = new Date().getTime()

  # preload matches from latest 1000 tweets 
  d3.json "/tweets/latest?n=1000&q=" + q, (tweets) ->
    wordCount.insert tweets
    barchart.init(wordCount.getWords().slice(0, barChartLimit))
    wordCloud.redraw wordCount.getWords()
    lastCloudUpdate = new Date().getTime()
    
    tweetsShort = tweets.slice(0, showTweets).reverse()
    formatTweet(t) for t in tweetsShort    
    viewModel.tweets.unshift t for t in tweetsShort

    # start feed, attach listener
    feed = new EventSource("/tweetFeed?q=" + q)
    feed.addEventListener "message", handler, false 