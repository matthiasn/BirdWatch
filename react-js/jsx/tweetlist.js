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
                return <div className="pull-right timeInterval">{numberFormat(this.props.count)} RT</div>
            }
            else return <div></div>;
        }
    });
    var FavoriteCount = React.createClass({
        render: function() {
            if(this.props.count > 0) {
                return <div className="pull-right timeInterval">{numberFormat(this.props.count)} fav&nbsp;</div>
            }
            else return <div></div>;
        }
    });

    /** single Tweet component */
    var Tweet = React.createClass({
        render: function () {
            var img = "";
            if (this.props.t.entities.media && this.props.t.entities.media.length > 0) {
                img = <div className="tweet-image">
                          <a href={this.props.t.entities.media[0].url} target="_blank">
                              <img src={this.props.t.entities.media[0].media_url + ":small"} />
                          </a>
                      </div>;
            }

            return (
            <div className="tweet">
                <span>
                    <a href={"http://www.twitter.com/" + this.props.t.user.screen_name} target="_blank">
                        <img className="thumbnail" src={this.props.t.user.profile_image_url} />
                    </a>
                </span>
                <a href={"http://www.twitter.com/" + this.props.t.user.screen_name} target="_blank">
                    <span className="username">{this.props.t.user.name}</span>
                </a>
                <span className="username_screen">&nbsp;&#64;{this.props.t.user.screen_name}</span>
                <div className="pull-right timeInterval">{fromNow(this.props.t.created_at)}</div>
                <div className="tweettext">
                    <div dangerouslySetInnerHTML={{__html: this.props.t.htmlText}} className=""></div>
                    <div className="pull-left timeInterval">{numberFormat(this.props.t.user.followers_count)} followers</div>
                    <RetweetCount count={this.props.t.retweet_count} />
                    <FavoriteCount count={this.props.t.favorite_count} />
                </div>
                {img}
                <div className="intent">
                    <a href={"https://www.twitter.com/intent/tweet?in_reply_to=" + this.props.t.id_str}>
                        <img src="/assets/images/reply.png"/>
                    </a>
                    <a href={"https://www.twitter.com/intent/retweet?tweet_id=" + this.props.t.id_str}>
                        <img src="/assets/images/retweet.png"/>
                    </a>
                    <a href={"https://www.twitter.com/intent/favorite?tweet_id=" + this.props.t.id_str}>
                        <img src="/assets/images/favorite.png"/>
                    </a>
                </div>
            </div>
        ); }
    });

    /** Tweet list component, renders all Tweet items (above) */
    var TweetList = React.createClass({
        render: function() {
            var tweetNodes = this.props.tweets.map(function (tweet, idx, arr) {
                return <Tweet t={tweet} key={idx} />;
            }.bind(this));
            return <div id="tweet-list">{tweetNodes}</div>;
        }
    });

    /** TweetCount shows the number of tweets analyzed */
    var TweetCount = React.createClass({ render: function () { return <span>{this.props.count}</span>;} });

    /** render BirdWatch components */
    var tweetListComp = React.renderComponent(<TweetList tweets={[]}/>, document.getElementById('tweet-frame'));
    var tweetCount = React.renderComponent(<TweetCount count={0}/>, document.getElementById('tweet-count'));

    BirdWatch.setTweetCount = function (n) { tweetCount.setProps({count: n}); };
    BirdWatch.setTweetList = function (tweetList) { tweetListComp.setProps({tweets: tweetList}); };
})();
