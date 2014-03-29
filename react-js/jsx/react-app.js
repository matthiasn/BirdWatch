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

    /** single Bar component for assembling BarChart */
    var Bar = React.createClass({
        getInitialState: function() {
            return {count: 1};
        },
        componentWillReceiveProps: function() {
            this.setState({count: this.state.count+1});
        },
        render: function () {
            var y = parseInt(this.props.y);
            var t = this.props.t;
            var w = parseInt(this.props.w);
            var val = this.props.val;
            var num = this.state.count;
            return (
                <g>
                    <text y={y +12} x="117" stroke="none" fill="black" dy=".35em" textAnchor="end">{t}</text>
                    <rect y={y} x="120" height="15" width={w} stroke="white" fill="#ee0000"></rect>
                    <text y={y +12} x={w+122} stroke="none" fill="black" dy=".35em" textAnchor="start">{val}</text>
                    <text y={y +12} x={135} stroke="none" fill="black" dy=".35em" textAnchor="start">{num}</text>
                </g>
            ); }
    });

    /** BarChart component, renders all bar items */
    var BarChart = React.createClass({
        render: function() {
            var bars = this.props.words.map(function (bar, i, arr) {
                if (!bar) return "";
                var y = i * 15;

                var w = bar.value / arr[0].value * (barChartElem.width() - 190);
                return <Bar t={bar.key} y={y} w={w} key={bar.key} val={bar.value} />;
            }.bind(this));
            return <svg width="750" height="6000"><g>{bars}</g></svg>;
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

    /** TweetCount shows the number of tweets analyzed */
    var TweetCount = React.createClass({ render: function () { return <span>{this.props.count}</span>;} });

    /** render BirdWatch components */
    var tweetListComp = React.renderComponent(<TweetList tweets={[]}/>, document.getElementById('tweet-frame'));
    var tweetCount = React.renderComponent(<TweetCount count={0}/>, document.getElementById('tweet-count'));
    var pagination = React.renderComponent(<Pagination numPages={1} />, document.getElementById('pagination'));

    var barChartElem = $("#wordBars");
    var barChart = React.renderComponent(<BarChart numPages={1} words={[]}/>, document.getElementById('react-bar-chart'));

    BirdWatch.setTweetCount = function (n) { tweetCount.setProps({count: n}); };
    BirdWatch.setTweetList = function (tweetList) { tweetListComp.setProps({tweets: tweetList}); };
    BirdWatch.setPagination = function (props) { pagination.setProps(props); };
    BirdWatch.setPaginationHandlers = function (handlers) { pagination.setProps(handlers); };
    BirdWatch.setWords = function (words) { barChart.setProps({words: _.take(words, 25)}); };
})();
