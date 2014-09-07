/** @jsx React.DOM */

var BirdWatch = BirdWatch || {};

(function () {

    /** function preparing data for use by regression.js */
    function regressionData(hist) { return hist.map(function(el, idx, arr) { return [idx, -el]; }); }

    /** Arrow component for use in BarChart */
    var Arrow = React.createClass({displayName: 'Arrow',
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

            return ( React.DOM.polygon( {transform:arrowTrans, stroke:"none", fill:arrColor, points:arr}) ); }
    });

    function now () { return new Date().getTime(); }

    /** single Bar component for assembling BarChart */
    var Bar = React.createClass({displayName: 'Bar',
        getInitialState: function() {
            return {ratioHist: [], posHist: [], lastUpdate: now(), posArrDir: "RIGHT", ratioArrDir: "RIGHT-UP"}
        },
        /** this function  gets called right before rendering. component state can be modified here, not in render */
        componentWillReceiveProps: function(props) {
            this.setState({ratioHist: _.last(this.state.ratioHist.concat(props.val / props.count), this.props.ratioChangeTweets)});
            this.setState({posHist: _.last(this.state.posHist.concat(props.idx+1), 2)});

            // slope of the fitted position change function
            var posSlope = regression('linear', regressionData(this.state.posHist)).equation[0];
            if (posSlope === 0 && now() - this.state.lastUpdate > this.props.posChangeDur) { this.setState({posArrDir: "RIGHT"}); }
            if (posSlope > 0) { this.setState({posArrDir: "UP", lastUpdate: now()}); }
            if (posSlope < 0) { this.setState({posArrDir: "DOWN", lastUpdate: now()}); }

            // slope of the ratio (value / total value) change
            var ratioSlope = regression('linear', regressionData(this.state.ratioHist)).equation[0];
            this.setState({ratioArrDir: (ratioSlope > 0) ? "RIGHT-UP" : "RIGHT-DOWN"});
        },
        /** adding terms to the search bar when clicking on any of the bars */
        clickHandler: function(e) { BirdWatch.addSearchTerm(this.props.key); },
        render: function () {
            var y = parseInt(this.props.y);
            var t = this.props.t;
            var w = parseInt(this.props.w);
            var val = this.props.val;

            var textX = w+145;
            var style = {fontWeight: 500, fill: "#DDD", textAnchor: "end"};
            if (w < 50) { style.fill="#999"; textX+=26; style.textAnchor="start"; style.fontWeight=400}

            return  React.DOM.g( {onClick:this.clickHandler}, 
                      React.DOM.text( {y:y+8, x:"137", stroke:"none", fill:"black", dy:".35em", textAnchor:"end"}, t),
                      Arrow( {dir:this.state.posArrDir, y:y, x:146} ),
                      Arrow( {dir:this.state.ratioArrDir, y:y, x:160} ),
                      React.DOM.rect( {y:y, x:"168", height:"15", width:w, stroke:"white", fill:"#428bca"}),
                      React.DOM.text( {y:y+8, x:textX, stroke:"none", style:style, dy:".35em"} , val)
                    )
             }
    });

    /** BarChart component, renders all bar items.
     *  Also renders interactive legend where the trend indicator durations can be configured */
    var BarChart = React.createClass({displayName: 'BarChart',
        render: function() {
            var h = this.props.words.length * 15;
            var bars = this.props.words.map(function (bar, i, arr) {
                if (!bar) return "";
                var y = i * 15;
                var w = bar.value / arr[0].value * (barChartElem.width() - 190);
                return Bar( {t:bar.key, y:y, w:w, key:bar.key, idx:i, val:bar.value,
                            posChangeDur:this.refs.posChangeDur.getDOMNode().value,
                            ratioChangeTweets:this.refs.ratioChangeTweets.getDOMNode().value} );
            }.bind(this));
            return React.DOM.div(null, 
                     React.DOM.svg( {width:"750", height:h}, 
                       React.DOM.g(null, 
                         bars,
                         React.DOM.line( {transform:"translate(168, 0)", y:"0", y2:h, stroke:"#000000"})
                       )
                     ),
                    React.DOM.p( {className:"legend"}, React.DOM.strong(null, "1st trend indicator:"), " position changes in last  ",
                        React.DOM.select( {defaultValue:"300000", ref:"posChangeDur"}, 
                            React.DOM.option( {value:"10000"}, "10 seconds"),
                            React.DOM.option( {value:"30000"}, "30 seconds"),
                            React.DOM.option( {value:"60000"}, "minute"),
                            React.DOM.option( {value:"300000"}, "5 minutes"),
                            React.DOM.option( {value:"600000"}, "10 minutes")
                        )
                    ),
                    React.DOM.p( {className:"legend"}, React.DOM.strong(null, "2nd trend indicator:"), " ratio change termCount / totalTermsCounted over last  ",
                        React.DOM.select( {defaultValue:"100", ref:"ratioChangeTweets"}, 
                            React.DOM.option( {value:"10"}, "10 tweets"),
                            React.DOM.option( {value:"100"}, "100 tweets"),
                            React.DOM.option( {value:"500"}, "500 tweets"),
                            React.DOM.option( {value:"1000"}, "1000 tweets")
                        )
                    )
                  )
        }
    });

    var barChartElem = $("#react-bar-chart");
    var barChart = React.renderComponent(BarChart( {numPages:1, words:[]}), document.getElementById('react-bar-chart'));

    BirdWatch.updateBarchart = function (words) { barChart.setProps({words: _.take(words, 25) }); };
})();
