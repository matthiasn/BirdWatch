(ns birdwatch.stats.wordcount
  (:require [clojure.string :as s]))

(def stop-words
  #{"use" "good" "want" "amp" "just" "now" "like" "til" "new" "get" "one" "i" "me" "my" "myself" "we"
    "us" "our" "ours" "ourselves" "you" "your" "yours" "yourself" "yourselves" "he" "him" "his" "himself"
    "she" "her" "hers" "herself" "it" "its" "itself" "they" "them" "their" "theirs" "themselves" "what"
    "which" "who" "whom" "whose" "this" "that" "these" "those" "am" "is" "are" "was" "were" "be" "been"
    "being" "have" "has" "had" "having" "do" "does" "did" "doing" "will" "would" "should" "can" "could"
    "ought" "i'm" "you're" "he's" "she's" "it's" "we're" "they're" "i've" "you've" "we've" "they've" "i'd"
    "you'd" "he'd" "she'd" "we'd" "they'd" "i'll" "you'll" "he'll" "she'll" "we'll" "they'll" "isn't"
    "aren't" "wasn't" "weren't" "hasn't" "haven't" "hadn't" "doesn't" "don't" "didn't" "won't" "wouldn't"
    "shan't" "shouldn't" "can't" "cannot" "couldn't" "mustn't" "let's" "that's" "who's" "what's" "here's"
    "there's" "when's" "where's" "why's" "how's" "a" "an" "the" "and" "but" "if" "or" "because" "as"
    "until" "while" "of" "at" "by" "for" "with" "about" "against" "between" "into" "through" "during"
    "before" "after" "above" "below" "to" "from" "up" "upon" "down" "in" "out" "on" "off" "over" "under"
    "again" "further" "then" "once" "here" "there" "when" "where" "why" "how" "all" "any" "both" "each"
    "few" "more" "most" "other" "some" "such" "no" "nor" "not" "only" "own" "same" "so" "than" "too" "come"
    "very" "say" "says" "said" "shall" "via" "htt…" "don" "let" "gonna" "rt" "&amp" "http" "must" "see"})

(defn get-words
  "get vector of maps with word as :key and count as :value"
  [state n]
  (vec (map
        (fn [w] (let [[k v] w] {:key k :value v}))
        (take n (:words-sorted-by-count state)))))

(defn get-words2
  "get vector of maps with word as :key and count as :value"
  [state n]
  (vec (take n (:words-sorted-by-count state))))

(defn words-in-tweet
  "process tweet: split, filter, lower case, replace punctuation, add word"
  [text]
  (->> (s/split text #"[\s—\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+")
       (filter #(not (re-find #"(@|https?:)" %)) ,)
       (filter #(> (count %) 3) ,)
       (filter #(< (count %) 25) ,)
       (map s/lower-case ,)
       (map #(s/replace % #"[;:,/‘’…~\-!?\[\]\"<>()\"@.]+" "" ) ,)
       (filter (fn [item] (not (contains? stop-words item))) ,)))
