goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../cljs_om/wordcount.js", ['cljs_om.wordcount'], ['cljs.core', 'clojure.string']);
goog.addDependency("../om/dom.js", ['om.dom'], ['cljs.core']);
goog.addDependency("../om/core.js", ['om.core'], ['cljs.core', 'om.dom']);
goog.addDependency("../cljs_om/util.js", ['cljs_om.util'], ['cljs.core', 'clojure.string']);
goog.addDependency("../cljs_om/ui.js", ['cljs_om.ui'], ['cljs.core', 'om.core', 'cljs_om.util', 'om.dom']);
goog.addDependency("../cljs_om/core.js", ['cljs_om.core'], ['cljs.core', 'om.core', 'cljs_om.util', 'cljs_om.ui', 'cljs_om.wordcount', 'om.dom']);