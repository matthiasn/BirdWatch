(ns birdwatch.data-test
  (:require [clojure.test :refer :all]
            [birdwatch.data :refer :all]))

;; first round of tests, with an empty accumulator.
(def tweets1 [{:retweeted_status {:id_str "1" :retweet_count 1111 :favorite_count 111}}
              {:retweeted_status {:id_str "2" :retweet_count 2222 :favorite_count 222}}
              {:retweeted_status {:id_str "3" :retweet_count 3333 :favorite_count 333}}
              {:retweeted_status {:id_str "4" :retweet_count 4444 :favorite_count 444}}
              {:retweeted_status {:id_str "5" :retweet_count 5555 :favorite_count 555}}])

(def by-rt1 (retweets tweets1 {}))
(def by-rt-exp1 {:1 1111 :2 2222 :3 3333 :4 4444 :5 5555})
(deftest rt-test1  (testing "expected equals actual" (is (= by-rt1 by-rt-exp1))))

(def by-fav1 (favorites tweets1 {}))
(def by-fav-exp1 {:1 111 :2 222 :3 333 :4 444 :5 555})
(deftest fav-test1 (testing "expected equals actual" (is (= by-fav1 by-fav-exp1))))

;; test with previous results as accumulator (to simulate merging results)
;; expectation: only merge tweets with higher counts (assumption: favorite- and rt-counts go up)
(def tweets2 [{:retweeted_status {:id_str "1" :retweet_count 11 :favorite_count 11}}
              {:retweeted_status {:id_str "2" :retweet_count 22222 :favorite_count 2222}}
              {:retweeted_status {:id_str "4" :retweet_count 44444 :favorite_count 4444}}
              {:retweeted_status {:id_str "6" :retweet_count 6666 :favorite_count 666}}])

(def by-rt2 (retweets tweets2 by-rt1))
(def by-rt-exp2 {:1 1111 :2 22222 :3 3333 :4 44444 :5 5555 :6 6666})
(deftest rt-test2  (testing "expected equals actual" (is (= by-rt2 by-rt-exp2))))

(def by-fav2 (favorites tweets2 by-fav1))
(def by-fav-exp2 {:1 111 :2 2222 :3 333 :4 4444 :5 555 :6 666})
(deftest fav-test2 (testing "expected equals actual" (is (= by-fav2 by-fav-exp2))))
