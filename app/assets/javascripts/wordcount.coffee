define ->
  WordCount: ->
    parseText = (text) ->
      cases = {}
      text.split(wordSeparators).forEach (word) ->
        return if discard.test(word)
        word = word.replace(punctuation, "")
        return if stopWords.test(word.toLowerCase())
        word = word.substr(0, maxLength)
        cases[word.toLowerCase()] = word
        word = word.toLowerCase()
        me.tags[word] = (me.tags[word] or 0) + 1

    me = {}
    maxLength = 25
    # From Jonathan Feinberg's cue.language, see lib/cue.language/license.txt.
    stopWords = /^(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)$/
    punctuation = /[!"&()*+,-\.\/:;<=>?\[\\\]^`\{|\}~]+/g
    wordSeparators = /[\s\u3031-\u3035\u309b\u309c\u30a0\u30fc\uff70]+/g
    discard = /^(@|https?:)/
    me.tags = {}

    #me.tags = d3.entries(me.tags).sort(function(a, b) { return b.value - a.value; });
    #me.tags.forEach(function(d) { d.key = cases[d.key]; });
    #me.topN = (n) ->

    me.insert = (data) -> data.forEach (d) -> parseText d.text

    me.getWords = -> d3.entries(me.tags).sort((a, b) -> b.value - a.value)

    me.reset = -> me.tags = {}

    me
