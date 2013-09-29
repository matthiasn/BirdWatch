'use strict';

/** utils service */
angular.module('birdwatch.services').factory('wordCount', function () {
    
    /** initially from Jason Davies, transformed into CoffeeScript and then back into JavaScript. Needs work. */
    var wordCount = function() {
        var exports = {};
        var tags = {};
        var maxLength = 25;
        var minLength = 3;
        var parseText = function(text) {
            var cases = {};
            return text.split(wordSeparators).forEach(function(word) {
                if (discard.test(word)) { return; }
                word = word.replace(punctuation, "");
                if (stopWords.test(word.toLowerCase())) { return; }
                word = word.substr(0, maxLength);
                cases[word.toLowerCase()] = word;
                word = word.toLowerCase();
                if (word.length >= minLength) { return tags[word] = (tags[word] || 0) + 1; }
            });
        };
        var stopWords = /^(use|good|want|amp|just|now|like|til|new|get|one|i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall|via)$/;
        var punctuation = /[!"&()*+,-\.\/:;<=>?\[\\\]^`“”\{|\}~]+/g;
        var wordSeparators = /[\s\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+/g;
        var discard = /^(@|https?:)/;
        exports.insert = function(data) { return data.forEach(function(d) { return parseText(d.text); }); };
        exports.getWords = function() {
            return d3.entries(tags).sort(function(a, b) { return b.value - a.value; }).slice(0, 500);
        };
        exports.reset = function() { return tags = {}; };
        return exports;
    };

    return { wordCount: wordCount };
});
