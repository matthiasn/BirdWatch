/** @jsx React.DOM */

var BirdWatch = BirdWatch || {};

(function () {

    /** function preparing data for use by regression.js */
    function regressionData(hist) { return hist.map(function(el, idx, arr) { return [idx, -el]; }); }

    /** Arrow component for use in BarChart */
    var Arrow = React.createClass({
        render: function () {
            var y = parseInt(this.props.y);
            var arr = "-600,100 200,100 -200,500 100,500 600,0 100,-500 -200,-500 200,-100 -600,-100 ";
            var arrColor = "#428bca";
            if (this.props.dir === "UP") {
                arrColor = "#45cc40";
                arr = "100,600 100,-200 500,200 500,-100 0,-600 -500,-100 -500,200 -100,-200 -100,600";
            }
            if (this.props.dir === "RIGHT-UP") {
                arrColor = "#45cc40";
                arr ="400,-400 -200,-400 -350,-250 125,-250 -400,275 -275,400 250,-125 250,350 400,200";
            }
            if (this.props.dir === "DOWN") {
                arrColor = "#dc322f";
                arr = "100,-600 100,200 500,-200 500,100 0,600 -500,100 -500,-200 -100,200 -100,-600";
            }
            if (this.props.dir === "RIGHT-DOWN") {
                arrColor = "#dc322f";
                arr = "400,400 -200,400 -350,250 125,250 -400,-275 -275,-400 250,125 250,-350 400,-200";
            }
            var arrowTrans = "translate(" + this.props.x + ", "+ (y + 7) + ") scale(0.01) ";

            return ( <polygon transform={arrowTrans} stroke="none" fill={arrColor} points={arr}/> ); }
    });


    /** single Bar component for assembling BarChart */
    var Bar = React.createClass({
        getInitialState: function() { return {percHist: [], posHist: []} },
        componentWillReceiveProps: function(props) {
            this.setState({percHist: _.last(this.state.percHist.concat(props.val / props.count), 50)});
            this.setState({posHist: _.last(this.state.posHist.concat(props.idx+1), 2)});
        },
        render: function () {
            var y = parseInt(this.props.y);
            var t = this.props.t;
            var w = parseInt(this.props.w);
            var val = this.props.val;

            var posSlope = regression('linear', regressionData(this.state.posHist)).equation[0];
            var posArrDir = "RIGHT";
            if (posSlope > 0) { posArrDir = "UP";   }
            if (posSlope < 0) { posArrDir = "DOWN"; }

            var percSlope = regression('linear', regressionData(this.state.percHist)).equation[0];
            var percArrDir = "RIGHT-UP";
            if (percSlope < 0) { percArrDir = "RIGHT-DOWN"; }

            return  <g>
                      <text y={y +12} x="117" stroke="none" fill="black" dy=".35em" textAnchor="end">{t}</text>
                      <Arrow dir={posArrDir} y={y} x={126} />
                      <Arrow dir={percArrDir} y={y} x={140} />
                      <rect y={y} x="148" height="15" width={w} stroke="white" fill="#428bca"></rect>
                      <text y={y +12} x={w+154} stroke="none" fill="black" dy=".35em" textAnchor="start">{val}</text>
                    </g>
             }
    });

    /** BarChart component, renders all bar items */
    var BarChart = React.createClass({
        render: function() {
            var bars = this.props.words.map(function (bar, i, arr) {
                if (!bar) return "";
                var y = i * 15;
                var w = bar.value / arr[0].value * (barChartElem.width() - 216);
                return <Bar t={bar.key} y={y} w={w} key={bar.key} idx={i} val={bar.value} count={this.props.count} />;
            }.bind(this));
            return <svg width="750" height="6000">
                     <g>
                       {bars}
                       <line transform="translate(148, 0)" y="0" y2="375" stroke="#000000"></line>
                     </g>
                   </svg>
        }
    });

    var barChartElem = $("#react-bar-chart");
    var barChart = React.renderComponent(<BarChart numPages={1} words={[]}/>, document.getElementById('react-bar-chart'));

    BirdWatch.setWords = function (words, count) { barChart.setProps({words: _.take(words, 25), count: count }); };
})();
