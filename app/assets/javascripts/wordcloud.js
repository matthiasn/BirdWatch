'use strict';

/** utils service */
angular.module('charts.wordcloud', []).service('wordcloud', function () {

    var WordCloud = function (w, h, maxEntries, addSearch) {
        var me = {};
        var fill = d3.scale.category20b();
        var fontSize = d3.scale.log().range([10, 85]);
        var svg = d3.select("#wordCloud").append("svg").attr("width", w).attr("height", h);
        var background = svg.append("g");
        var vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");
        var layout = d3.layout.cloud()
            .timeInterval(1)
            .size([w, h])
            .fontSize(function (d) { return fontSize(+d.value); })
            .text(function (d) { return d.key; })
            .font("Impact").spiral("archimedean");

        var draw = function (data, bounds) {
            var scale = (bounds ? Math.min(w / Math.abs(bounds[1].x - w / 2),
                w / Math.abs(bounds[0].x - w / 2),
                h / Math.abs(bounds[1].y - h / 2),
                h / Math.abs(bounds[0].y - h / 2)) / 2 : 1);
            var text = vis.selectAll("text").data(data, function (d) { return d.text.toLowerCase(); });
            
            text.transition().duration(800)
                .attr("transform",function (d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function (d) { return d.size + "px"; });
            
            text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("transform",function (d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size",function (d) { return d.size + "px"; })
                .on("click",function (d) {
                    var tag;
                    tag = d.text.replace('#', '');
                    addSearch(tag);
                })
                .style("opacity", 1e-6)
                .transition()
                .duration(400)
                .style("opacity", 1)
                .style("font-family",function (d) { return d.font; })
                .style("fill",function (d) { return fill(d.text.toLowerCase()); })
                .text(function (d) { return d.text; });
            var exitGroup = background.append("g").attr("transform", vis.attr("transform"));
            var exitGroupNode = exitGroup.node();
            text.exit().each(function () { return exitGroupNode.appendChild(this); });
            exitGroup.transition().duration(600).style("opacity", 1e-6).remove();
            return vis.transition().delay(400).duration(600).attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
        };
        layout.on("end", draw);
        me.redraw = function (tags) {
            if (tags.length) { fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]); }
            return layout.stop().words(tags.slice(0, Math.min(tags.length, maxEntries))).start();
        };
        return me;
    };
    return { WordCloud: WordCloud };
});
