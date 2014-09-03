/** @jsx React.DOM */

var BirdWatch = BirdWatch || {};

(function () {
    /** Pagination component, allows selecting the current page in the Tweet list */
    var PaginationItem = React.createClass({
        setActive: function () {this.props.setPage(this.props.page)},
        render: function() {
            return <li className={this.props.active ? "active" : ""} onClick={this.setActive}><a>{this.props.page}</a></li>
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
    var pagination = React.renderComponent(<Pagination numPages={1} />, document.getElementById('pagination'));
    BirdWatch.setPagination = function (props) { pagination.setProps(props); };
    BirdWatch.setPaginationHandlers = function (handlers) { pagination.setProps(handlers); };
})();
