package models

import play.api.libs.json.JsValue
import scala.collection.immutable.HashSet

/**
 * Created with IntelliJ IDEA.
 * User: mn
 * Date: 31.07.13
 * Time: 02:10
 * To change this template use File | Settings | File Templates.
 */

case class Matches(json: JsValue, matches: HashSet[String])
