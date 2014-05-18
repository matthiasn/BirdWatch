// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.timeseries');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs_om.wordcount');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs_om.ajax');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('cljs_om.ajax');
goog.require('cljs_om.wordcount');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_om.ui');
goog.require('goog.events');
goog.require('cljs_om.util');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.timeseries.ts_elem = document.getElementById("timeseries1");
cljs_om.timeseries.ts_w = (cljs_om.timeseries.ts_elem["offsetWidth"]);
cljs_om.timeseries.random_data = (function random_data(){var series_data = [[]];var random = (new Rickshaw.Fixtures.RandomData(150));var n__4329__auto___24720 = 100;var i_24721 = 0;while(true){
if((i_24721 < n__4329__auto___24720))
{random.addData(series_data);
{
var G__24722 = (i_24721 + 1);
i_24721 = G__24722;
continue;
}
} else
{}
break;
}
return series_data;
});
cljs_om.timeseries.graph_with_legend = (function (){var series_data = [[]];var random = (new Rickshaw.Fixtures.RandomData(150));var n__4329__auto___24724 = 10;var i_24725 = 0;while(true){
if((i_24725 < n__4329__auto___24724))
{random.addData(series_data);
{
var G__24726 = (i_24725 + 1);
i_24725 = G__24726;
continue;
}
} else
{}
break;
}
var G__24723 = (new Rickshaw.Graph(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",3646034542),cljs_om.timeseries.ts_elem,new cljs.core.Keyword(null,"renderer","renderer",519058485),"bar",new cljs.core.Keyword(null,"width","width",1127031096),cljs_om.timeseries.ts_w,new cljs.core.Keyword(null,"height","height",4087841945),100,new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),"steelblue",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.nth.call(null,series_data,0),new cljs.core.Keyword(null,"name","name",1017277949),"Tweets"], null)], null)], null))));G__24723.render();
return G__24723;
})();
cljs_om.timeseries.update = (function update(chart){(cljs_om.timeseries.graph_with_legend["series"]["0"]["data"] = cljs.core.nth.call(null,cljs_om.timeseries.random_data.call(null),0));
return chart.update();
});

//# sourceMappingURL=timeseries.js.map