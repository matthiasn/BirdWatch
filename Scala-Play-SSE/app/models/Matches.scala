package models

import play.api.libs.json.JsValue
import scala.collection.immutable.HashSet

/** Container for Tweet as Json and all matched query IDs  */
case class Matches(json: JsValue, matches: HashSet[String])
