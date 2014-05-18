// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.ajax');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs_om.ajax.error_handler = (function error_handler(err){return cljs.core.print.call(null,err);
});
cljs_om.ajax.handler = (function handler(payload){return cljs.core.async.put_BANG_.call(null,cljs_om.ajax.ajax_results_chan,payload);
});
cljs_om.ajax.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null)], null);
});
cljs_om.ajax.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
cljs_om.ajax.json_xhr = (function json_xhr(p__23113){var map__23115 = p__23113;var map__23115__$1 = ((cljs.core.seq_QMARK_.call(null,map__23115))?cljs.core.apply.call(null,cljs.core.hash_map,map__23115):map__23115);var on_complete = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__23115__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__23115,map__23115__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,xhr.getResponseText());
});})(xhr,map__23115,map__23115__$1,on_complete,data,url,method))
);
return xhr.send(url,cljs_om.ajax.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
cljs_om.ajax.prev_search = (function prev_search(query_string,size,from,chan){return cljs_om.ajax.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/tweets/search",new cljs.core.Keyword(null,"data","data",1016980252),cljs_om.ajax.query.call(null,"*",size,from),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__23116_SHARP_){return cljs.core.async.put_BANG_.call(null,chan,p1__23116_SHARP_);
})], null));
});

//# sourceMappingURL=ajax.js.map