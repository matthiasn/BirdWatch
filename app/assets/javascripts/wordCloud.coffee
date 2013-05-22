define ->
  WordCloud: (w, h, maxEntries, q) ->
    me = {}
    fill = d3.scale.category20b()
    fontSize = d3.scale.log().range([ 10, 85 ])
    svg = d3.select("#wordCloud").append("svg").attr("width", w).attr("height", h)
    background = svg.append("g")
    vis = svg.append("g").attr("transform", "translate(" + [ w >> 1, h >> 1 ] + ")")
    
    layout = d3.layout.cloud().timeInterval(1).size([ w, h ]).fontSize((d) -> fontSize +d.value).text((d) -> d.key)
      .font("Impact").spiral("archimedean")
      
    # draws the wordCloud
    draw = (data, bounds) ->
      scale = (if bounds then Math.min(w / Math.abs(bounds[1].x - w / 2), w / Math.abs(bounds[0].x - w / 2), h / Math.abs(bounds[1].y - h / 2), h / Math.abs(bounds[0].y - h / 2)) / 2 else 1)
      text = vis.selectAll("text").data(data, (d) -> d.text.toLowerCase())
      text.transition().duration(1000)
        .attr("transform", (d) -> "translate(" + [ d.x, d.y ] + ")rotate(" + d.rotate + ")")
        .style("font-size", (d) -> d.size + "px")

      text.enter().append("text").attr("text-anchor", "middle")
        .attr("transform", (d) -> "translate(" + [ d.x, d.y ] + ")rotate(" + d.rotate + ")")
        .style("font-size", (d) -> d.size + "px")
        .on("click", (d) -> 
          if (q.indexOf(d.text) !=-1) then window.location = "/?q=" + d.text
          else window.location = "/?q=" + d.text + "," + q
        )
        .style("opacity", 1e-6)
        .transition().duration(1000).style("opacity", 1)
        .style("font-family", (d) -> d.font)
        .style("fill", (d) -> fill d.text.toLowerCase())
        .text((d) -> d.text)

      exitGroup = background.append("g").attr("transform", vis.attr("transform"))
      exitGroupNode = exitGroup.node()
      text.exit().each -> exitGroupNode.appendChild this
      exitGroup.transition().duration(1000).style("opacity", 1e-6).remove()
      vis.transition().delay(1000).duration(750).attr("transform", "translate(" + [ w >> 1, h >> 1 ] + ")scale(" + scale + ")")
    
    # assign draw function
    layout.on("end", draw)

    # externally accessible redraw function
    me.redraw = (tags) ->
      if tags.length then fontSize.domain [ +tags[tags.length - 1].value or 1, +tags[0].value ]
      layout.stop().words(tags.slice(0, max = Math.min(tags.length, maxEntries))).start()
      
    me