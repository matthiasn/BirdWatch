(ns birdwatch.stats.regression)

(defn square [x] (* x x))
(defn mean [xs]
  (let [cnt (count xs)]
    (when (pos? cnt) (/ (apply + xs) cnt))))

(defn linear-regression
  "Computes linear regression. Adapted from
   http://compbio.ucdenver.edu/Hunter_lab/Hunter/cl-statistics.lisp"
  [ys]
  (let [n (count ys)]
    (when (pos? n)
      (let [xs (range n)
            x-bar (mean xs)
            y-bar (mean ys)
            Lxx (reduce + (map (fn [xi] (square (- xi x-bar))) xs))
            Lyy (reduce + (map (fn [yi] (square (- yi y-bar))) ys))
            Lxy (reduce + (map (fn [xi yi] (* (- xi x-bar) (- yi y-bar))) xs ys))
            slope (/ Lxy Lxx)
            intercept (- y-bar (* slope x-bar))
            reg-ss (* slope Lxy)
            res-ms (/ (- Lyy reg-ss) (- n 2))]
        [intercept slope]))))
