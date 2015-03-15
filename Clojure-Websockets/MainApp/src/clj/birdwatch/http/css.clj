(ns birdwatch.http.css
  (:require [garden.core :refer [css]]
            [garden.units :refer [px em percent]]))

(defn index-css
  "Generate index page CSS in Clojure using Garden."
  [dev?]
  (let [link-color "#428bca"
        light-text-color "#999"
        bg-color "#EEE"
        sort-btn-color "#c0c0c0"]
    (css {:pretty-print? dev?}
         [:a {:text-decoration :none
              :font-weight :bold
              :color link-color}]
         [:#count {:float :right}]
         [:.not-rounded {:border-radius 0}]
         [:.button-xsmall {:font-size (percent 70)}]
         [:.sort-button {:background-color sort-btn-color}]
         [:.tweettext {:padding-left (px 10)
                       :padding-bottom (px 10)
                       :font-size (px 10)
                       :overflow :auto
                       :min-height (px 50)}]
         [:.tweet-image {:max-width (percent 100)}]
         [:.username {:padding-left (px 10)
                      :font-weight :bold
                      :font-size (px 12)}]
         [:.username_screen {:font-size (px 10)
                             :color light-text-color}]
         [:.time-interval {:padding-top (px 2)
                          :font-size (px 10)
                          :color light-text-color
                          :text-align :right}]
         [:.thumbnail {:padding-right (px 5)
                       :margin-top (px 5)
                       :width (px 64)
                       :height (px 64)
                       :max-width (px 64)
                       :max-height (px 64)
                       :float :left}]
         [:.tweet {:padding "10px 10px 5px 10px"
                   :margin-top (px 5)
                   :margin-bottom (px 5)
                   :background-color bg-color
                   :overflow :auto}]
         [:#tweet-count {:font-weight :bold}]
         [:.legend {:font-size (em 0.8)}]
         [:.timeseries {:margin-top (px 15)}]
         [:.intent {:float :right}])))
