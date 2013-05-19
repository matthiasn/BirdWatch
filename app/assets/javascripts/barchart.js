define(function () {
  return {
    BarChart: function () {
        var me = {};

        var sortedData, xScale, yScale,chart, rect, gridContainer, labelContainer, barsContainer;

        var valueLabelWidth = 40; // space reserved for value labels (right)
        var barHeight = 20;       // height of one bar
        var barLabelWidth = 150;  // space reserved for bar labels
        var barLabelPadding = 5;  // padding between bar and bar labels (left)
        var gridLabelHeight = 18; // space reserved for gridline labels
        var gridChartOffset = 3;  // space between start of grid and first bar
        var maxBarWidth = 420;    // width of the bar with the max value

        // accessor functions 
        var barLabel = function (d) { return d.key; };
        var barValue = function (d) { return parseFloat(d.value); };

        var y = function (d, i) { return yScale(i); };
        var yText = function (d, i) { return y(d, i) + yScale.rangeBand() / 2; };

        function renderBarChart() {
            // svg container element
            chart = d3.select('#wordBars').append("svg")
                .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
                .attr('height', gridLabelHeight + gridChartOffset + sortedData.length * barHeight);

            // grid line labels
            gridContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')');
            gridContainer.selectAll("text").data(xScale.ticks(10)).enter().append("text")
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);
            // vertical grid lines
            gridContainer.selectAll("line").data(xScale.ticks(10)).enter().append("line")
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc");
            // bar labels
            labelsContainer = chart.append('g')
                .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')');
            labelsContainer.selectAll('text').data(sortedData).enter().append('text')
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);
            // bars
            barsContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')');
            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', 'steelblue');
            // bar value labels
            barsContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "none")
                .text(function (d) { return d3.round(barValue(d), 2); });
            // start line
            barsContainer.append("line")
                .attr("y1", -gridChartOffset)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#000");
        }

        me.update = function(dataSource) {
            sortedData = dataSource.sort(function (a, b) {
                if (barValue(b) < barValue(a)) return -1;
                if (barValue(b) > barValue(a)) return 1;
                if (barLabel(b) < barLabel(a)) return -1;
                if (barLabel(b) > barLabel(a)) return 1;
                return 0;
            });
            yScale = d3.scale.ordinal().domain(d3.range(0, sortedData.length)).rangeBands([0, sortedData.length * barHeight]);
            xScale = d3.scale.linear().domain([0, d3.max(sortedData, barValue)]).range([0, maxBarWidth]);
        }

        me.init = function() {
            var initialData = [{key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0},
                {key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0},
                {key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0},
                {key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0},
                {key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0},
                {key: "", value: 0}, {key: "", value: 0}, {key: "", value: 0}];

            me.update(initialData);
            renderBarChart();
        };

        me.redraw = function(dataSource) {
            me.update(dataSource);

            barsContainer.selectAll("rect")
                .data(sortedData)
                .transition()
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); });

            barsContainer.selectAll("text").data(sortedData)
                .transition()
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "none")
                .text(function (d) { return d3.round(barValue(d), 2); });

            labelsContainer.selectAll('text').data(sortedData)
                .transition()
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);

            gridContainer.selectAll("text").data(xScale.ticks(10))
                .transition()
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);

            gridContainer.selectAll("line").data(xScale.ticks(10))
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc");
        };

        return me;
    }
  }
});