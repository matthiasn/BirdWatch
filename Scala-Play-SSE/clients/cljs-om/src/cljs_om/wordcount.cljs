(ns cljs-om.wordcount
  (:require [clojure.string :as s]
            [cljs-om.util :as util]))

(def stop-words #{"use" "good" "want" "amp" "just" "now" "like" "til" "new" "get" "one" "i" "me" "my" "myself" "we"
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
                  "few" "more" "most" "other" "some" "such" "no" "nor" "not" "only" "own" "same" "so" "than" "too"
                  "very" "say" "says" "said" "shall" "via" "htt…" "don" "let" "gonna" "rt" "&amp" "http"})

(defn get-words [app n]
  (vec (map (fn [w] (let [[k v] w] {:key k :value v})) (take n (:words-sorted-by-count @app)))))

(defn add-word [app word]
  "add word to the words map and the sorted set with the counts (while discarding old entry)"
  (util/swap-pmap app :words-sorted-by-count word (inc (get (:words-sorted-by-count @app) word 0))))

(defn process-tweet [app text]
  "process tweet: split, filter, lower case, replace punctuation, add word"
  (doall ;; initially lazy, needs realization
   (->> (s/split text #"[\s—\u3031-\u3035\u0027\u309b\u309c\u30a0\u30fc\uff70]+")
        (filter #(not (re-find #"(@|https?:)" %)) ,)
        (filter #(> (count %) 3) ,)
        (filter #(< (count %) 25) ,)
        (map s/lower-case ,)
        (map #(s/replace % #"[;:,/‘’…~\-!?#<>()\"@.]+" "" ) ,)
        (filter (fn [item] (not (contains? stop-words item))) ,)
        (map #(add-word app %) ,))))

