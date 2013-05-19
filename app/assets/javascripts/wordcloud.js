define(function () {
  return {
    WordCloud: function () {
        var me = {};

        // d3 word cloud
        var fill = d3.scale.category20b();
        var w = 700, h = 500;
        var maxEntries = 250;
        var words = [];
        var max;
        var scale = 1;
        var complete = 0;
        var keyword = "";
        var tags;
        var fontSize;
        var maxLength = 30;
        var statusText = d3.select("#status");

        var layout, svg, background, vis;

        function draw(data, bounds) {
            statusText.style("display", "none");
            scale = bounds ? Math.min(
                w / Math.abs(bounds[1].x - w / 2),
                w / Math.abs(bounds[0].x - w / 2),
                h / Math.abs(bounds[1].y - h / 2),
                h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;
            words = data;
            var text = vis.selectAll("text")
                .data(words, function(d) { return d.text.toLowerCase(); });
            text.transition()
                .duration(1000)
                .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function(d) { return d.size + "px"; });
            text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function(d) { return d.size + "px"; })
                .on("click", function(d) { load(d.text); })
                .style("opacity", 1e-6)
                .transition()
                .duration(1000)
                .style("opacity", 1);
            text.style("font-family", function(d) { return d.font; })
                .style("fill", function(d) { return fill(d.text.toLowerCase()); })
                .text(function(d) { return d.text; });
            var exitGroup = background.append("g")
                .attr("transform", vis.attr("transform"));
            var exitGroupNode = exitGroup.node();
            text.exit().each(function() { exitGroupNode.appendChild(this); });
            exitGroup.transition()
                .duration(1000)
                .style("opacity", 1e-6)
                .remove();
            vis.transition()
                .delay(1000)
                .duration(750)
                .attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
        }

        me.init = function() {
            layout = d3.layout.cloud()
                .timeInterval(1)
                .size([w, h])
                .fontSize(function(d) { return fontSize(+d.value); })
                .text(function(d) { return d.key; })
                .on("end", draw);

            svg = d3.select("#wordcloud").append("svg")
                .attr("width", w)
                .attr("height", h);

            background = svg.append("g");
            vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");
        };

        function generate() {
            layout
                .font("Impact")
                .spiral("archimedean");
            fontSize = d3.scale.log().range([10, 85]);

            if (tags.length) fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
            complete = 0;
            words = [];
            layout.stop().words(tags.slice(0, max = Math.min(tags.length, maxEntries))).start();
            lastUpdated = new Date().getTime();
        }

        me.redraw = function(dataSource) {
            tags = dataSource;
            generate();
        };

        return me;
    }
  }
});