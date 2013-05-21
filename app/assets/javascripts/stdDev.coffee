define ->
  WordCount: ->
    me = {}

    parseText = (text) ->


    me.tags = {}

    me.insert = (data) -> data.forEach (d) -> parseText d.text

    me.getWords = -> d3.entries(me.tags).sort((a, b) -> b.value - a.value)

    me.reset = -> me.tags = {}

    me
