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
            </div>
        ); }
    });

    /** Tweet list component, renders all Tweet items (above) */
    var TweetList = React.createClass({
        render: function() {
            var tweetNodes = this.props.tweets.map(function (tweet) {
                if (!tweet) return "";
                return <Tweet t={tweet} key={tweet.id} />;
            }.bind(this));
            return <div id="tweet-list">{tweetNodes}</div>;
        }
    });

    /** Pagination component, allows selecting the current page in the Tweet list */
    var PaginationItem = React.createClass({
        setActive: function () {this.props.setPage(this.props.page)},
        render: function() {
            return <li className={this.props.active ? "active" : ""} onClick={this.setActive}>
                      <a>{this.props.page}</a>
                   </li>
        }
    });

    var Pagination = React.createClass({
        toggleLive: function() { this.props.toggleLive(); },
        handleFirst: function() { this.props.setPage(1); },
        handleLast: function() { this.props.setPage(this.props.numPages); },
        handleNext: function() { this.props.setNext(); },
        handlePrevious: function() { this.props.setPrev(); },

        render: function() {
            var numPages = Math.min(+this.props.numPages, 25);
            var paginationItems = _.range(1, numPages+1).map(function (p) {
                return <PaginationItem page={p} active={p==this.props.activePage} setPage={this.props.setPage} key={p} />;
            }.bind(this));

            return <ul className="pagination-mini">

                <li className={this.props.live ? "active" : ""}><a onClick={this.toggleLive}>Live</a></li>
                <li><a onClick={this.handleFirst}>First</a></li>
                <li><a onClick={this.handlePrevious}>Previous</a></li>
                {paginationItems}
                <li><a onClick={this.handleNext}>Next</a></li>
                <li><a onClick={this.handleLast}>Last</a></li>
            </ul>
        }
    });

    var tweetListComp = React.renderComponent(<TweetList tweets={[]}/>, document.getElementById('tweet-frame'));

    /** TweetCount shows the number of tweets analyzed */
    var TweetCount = React.createClass({
        render: function () { return <span>{this.props.count}</span>;}
    });

    /** render BirdWatch components */
    var tweetCount = React.renderComponent(<TweetCount count={0}/>, document.getElementById('tweet-count'));
    var pagination = React.renderComponent(<Pagination numPages={1} />, document.getElementById('pagination'));

    BirdWatch.setTweetCount = function (n) { tweetCount.setProps({count: n}); };
    BirdWatch.setTweetList = function (tweetList) { tweetListComp.setProps({tweets: tweetList}); };
    BirdWatch.setPagination = function (props) { pagination.setProps(props); };
    BirdWatch.setPaginationHandlers = function (handlers) { pagination.setProps(handlers); };

})();
