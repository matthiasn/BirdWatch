/** @jsx React.DOM */

var BirdWatch = BirdWatch || {};

(function () {

    /** count formatting function, for example for rendering 1.5K followers */
    var numberFormat = function (number) {
        if (number < 1000) { return number; }
        else if (number < 100000) { return (Math.round(number / 100) / 10) + "K"}
        else if (number < 1000000) { return Math.round(number / 1000) + "K"}
        else { return (Math.round(number / 100000) / 10) + "M"}
    };

    /** TimeStamp formatting function, making use of moment.js */
    var fromNow = function (date) {
        var timeString = moment(date).fromNow(true);
        if (timeString === "a few seconds") { return "just now"; }
        else { return timeString; }
    };

    /** Component for conditional rendering of retweet count inside Tweet */
    var RetweetCount = React.createClass({
        render: function() {
            if(this.props.count > 0) {
                return (<div className="pull-right timeInterval">
                           {numberFormat(this.props.count)} RT</div> );
            }
            else return <div></div>;
        }
    });
    var FavoriteCount = React.createClass({
        render: function() {
            if(this.props.count > 0) {
                return (<div className="pull-right timeInterval">
                           {numberFormat(this.props.count)} fav&nbsp;</div> );
            }
            else return <div></div>;
        }
    });

    /** single Tweet component */
    var Tweet = React.createClass({
        render: function () { return (
            <div className="tweet">
                <span>
                    <a href={"http://www.twitter.com/" + this.props.t.screen_name} target="_blank">
                        <img className="thumbnail" src={this.props.t.profile_image_url} />
                    </a>
                </span>
                <a href={"http://www.twitter.com/" + this.props.t.screen_name} target="_blank">
                    <span className="username">{this.props.t.name}</span>
                </a>
                <span className="username_screen">&nbsp;&#64;{this.props.t.screen_name}</span>
                <div className="pull-right timeInterval">{fromNow(this.props.t.created_at)}</div>
                <div className="tweettext">
                    <div>{this.props.t.text}</div>
                    <div className="pull-left timeInterval">{numberFormat(this.props.t.followers_count)} followers</div>
                    <RetweetCount count={this.props.t.retweet_count} />
                    <FavoriteCount count={this.props.t.favorite_count} />
                </div>
            </div>
        ); }
    });

    /** Tweet list component, renders all Tweet items (above) */
    var TweetList = React.createClass({
        render: function() {
            var tweets = [].concat(this.props.tweets);
            var tweetNodes = tweets.map(function (tweet) {
                if (!tweet) return "";
                return <Tweet t={tweet} />;
            }.bind(this));
            return <div id="tweet-list">{tweetNodes}</div>;
        }
    });

    var tweetListComp = React.renderComponent(<TweetList />, document.getElementById('tweet-frame'));

    /** TweetCount shows the number of tweets analyzed */
    var TweetCount = React.createClass({
        render: function () { return <span>{this.props.count}</span>;}
    });

    /** WordQueueSize shows the number of words queued for processing */
    var WordQueueSize = React.createClass({
        render: function () { return <strong>{this.props.count}</strong>;}
    });

    var barChartElem = $("#wordBars");
    var barchart = BirdWatch.BarChart(function(){}, barChartElem.width() - 180, "#wordBars", 25);
    var barChartInit = false;

    var wordCloudElem = $("#wordCloud");
    var wordCloud = BirdWatch.WordCloud(wordCloudElem.width(), wordCloudElem.width() * 0.75, 250, function(){}, "#wordCloud");
    BirdWatch.lastCloudUpdate = (new Date().getTime()) - 7000;

    /** render BirdWatch components */
    var tweetCount = React.renderComponent(<TweetCount count={0}/>, document.getElementById('tweet-count'));
    var WordQueueSize = React.renderComponent(<WordQueueSize count={0}/>, document.getElementById('word-queue-size'));

    BirdWatch.setTweetCount = function (n) { tweetCount.setProps({count: n}); };
    BirdWatch.setPQueueSize = function (n) { WordQueueSize.setProps({count: n}); };
    BirdWatch.setTweetList = function (tweetList) { tweetListComp.setProps({tweets: tweetList}); };

    BirdWatch.renderingFinished = true;

    BirdWatch.setWordCount = function (wordCounts) {
        if (!barChartInit) {
            barchart.init(wordCounts, 500);
            barChartInit = true;
        }
        barchart.redraw(wordCounts);

        if (BirdWatch.renderingFinished && (new Date().getTime() - BirdWatch.lastCloudUpdate) > 10000) {
            BirdWatch.renderingFinished = false;
            //BirdWatch.haltQueue();
            wordCloud.redraw(wordCounts);
        }
    };
})();
