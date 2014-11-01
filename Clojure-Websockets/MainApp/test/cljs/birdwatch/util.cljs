(ns birdwatch.test.util
  (:require-macros [cemerick.cljs.test :as m
                    :refer (is test-var deftest run-tests done with-test-ctx)])
  (:require [cemerick.cljs.test :as t]
            [birdwatch.util :as util]))

(deftest number-format
  (is (= (util/number-format 200) "200"))
  (is (= (util/number-format 2200) "2.2K"))
  (is (= (util/number-format 20500) "20.5K"))
  (is (= (util/number-format 123456) "123K"))
  (is (= (util/number-format 1234567) "1.2M")))

(deftest from-now
  "test that"
  (is (= (util/from-now (new js/Date)) "just now")))

