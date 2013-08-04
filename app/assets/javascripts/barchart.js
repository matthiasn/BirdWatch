'use strict';

/** utils service */
angular.module('charts.barchart', []).service('barchart', function () {

    var BarChart = function (addSearch, maxBarWidth) {
        var me = {};

        me.maxBarWidth = maxBarWidth;
        var sortedData, xScale, yScale,chart, rect, gridContainer, labelContainer, barsContainer;

        var valueLabelWidth = 40; // space reserved for value labels (right)
        var barHeight = 15;       // height of one bar
        var barLabelWidth = 130;  // space reserved for bar labels
        var barLabelPadding = 5;  // padding between bar and bar labels (left)
        var gridLabelHeight = 18; // space reserved for grid line labels
        var gridChartOffset = 5;  // space between start of grid and first bar

        // accessor functions 
        var barLabel = function (d) { return d.key; };
        var barValue = function (d) { return parseFloat(d.value); };

        var y = function (d, i) { return yScale(i); };
        var yText = function (d, i) { return y(d, i) + yScale.rangeBand() / 2; };

        function render() {
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
            labelContainer = chart.append('g')
                .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')');
            labelContainer.selectAll('text').data(sortedData).enter().append('text')
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
                .attr('fill', 'steelblue')
                .on("click", function(d) {
                    var tag = barLabel(d).replace('#','');                    
                    addSearch(tag);
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
                    addSearch(tag);
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
                .attr("stroke", "none")
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

            barsContainer.selectAll("line")
                .attr("y1", -gridChartOffset)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#000");

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

            /** insert, update and change grid text */
            var gridText = gridContainer.selectAll("text").data(xScale.ticks(10));

            gridText.enter().insert("text")
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);

            gridText.transition()
                .attr("x", xScale)
                .attr("dy", -3)
                .attr("text-anchor", "middle")
                .text(String);

            gridText.exit().remove();

            /** insert, update and change grid lines */
            gridContainer.selectAll("line").data(xScale.ticks(10))
                .attr("x1", xScale)
                .attr("x2", xScale)
                .attr("y1", 0)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#ccc").exit().remove();
            
            barsContainer.append("line")
                .attr("y1", -gridChartOffset)
                .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
                .style("stroke", "#000");
        };

        return me;
    };
    
    return { BarChart: BarChart };
});