'use strict';

/** utils service */
angular.module('charts.barchart', []).service('barchart', function () {

    var BarChart = function (callback, maxBarWidth, element, noItems) {
        var me = {};

        me.maxBarWidth = maxBarWidth;
        var sortedData, xScale, yScale, chart, rect, labelContainer, barsContainer;

        var valueLabelWidth = 40; // space reserved for value labels (right)
        var barHeight = 15;       // height of one bar
        var barLabelWidth = 120;  // space reserved for bar labels
        var barLabelPadding = 5;  // padding between bar and bar labels (left)
        var gridLabelHeight = 18; // space reserved for grid line labels

        // accessor functions 
        var barLabel = function (d) { return d.key; };
        var barValue = function (d) { return parseFloat(d.value); };

        var y = function (d, i) { return yScale(i); };
        var yText = function (d, i) { return y(d, i) + yScale.rangeBand() / 2; };

        function render() {
            // svg container element
            chart = d3.select("#" + element.context.id).append("svg")
                .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
                .attr('height', gridLabelHeight + noItems * barHeight);

            // bar labels
            labelContainer = chart.append('g')
                .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight) + ')');
            labelContainer.selectAll('text').data(sortedData).enter().append('text')
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);
            // bars
            barsContainer = chart.append('g')
                .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')');
            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', '#428bca')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');                    
                    callback(tag);
                });

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
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1])
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
        };

        me.init = function(initialData, maxBarWidth) {
            me.update(initialData);
            me.maxBarWidth = maxBarWidth;
            render();
        };

        me.redraw = function(dataSource) {
            me.update(dataSource);

            barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); })
                .attr('stroke', 'white')
                .attr('fill', 'steelblue')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');
                    callback(tag);
                });

            barsContainer.selectAll("rect")
                .data(sortedData)
                .transition()
                .attr('y', y)
                .attr('height', yScale.rangeBand())
                .attr('width', function (d) { return xScale(barValue(d)); });

            barsContainer.selectAll("rect")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            barsContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr("x", function (d) { return xScale(barValue(d)); })
                .attr("y", yText)
                .attr("dx", 3) // padding-left
                .attr("dy", ".35em") // vertical-align: middle
                .attr("text-anchor", "start") // text-align: right
                .attr("fill", "black")
                .attr("stroke", "black")
                .text(function (d) { return d3.round(barValue(d), 2); });
            
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

            barsContainer.selectAll("text")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            labelContainer.selectAll("text").data(sortedData).enter().append("text")
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);
            
            labelContainer.selectAll('text').data(sortedData)
                .transition()
                .attr('y', yText)
                .attr('stroke', 'none')
                .attr('fill', 'black')
                .attr("dy", ".35em") // vertical-align: middle
                .attr('text-anchor', 'end')
                .text(barLabel);

            labelContainer.selectAll("text")
                .data(sortedData)
                .exit()
                .transition()
                .remove();

            barsContainer.append("line")
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1])
                .style("stroke", "#000");
        };

        return me;
    };
    
    return { BarChart: BarChart };
});
