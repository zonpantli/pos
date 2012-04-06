(ns pos.client.util
  (:use [jayq.util :only [log]]))

(defn from-arr-by-id [arr id]
  (first (filter #(= (:id %1) id) arr)))