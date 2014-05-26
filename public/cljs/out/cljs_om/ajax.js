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
cljs_om.ajax.ajax_results_chan = cljs.core.async.chan.call(null);
var c__5638__auto___14474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___14474){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___14474){
return (function (state_14439){var state_val_14440 = (state_14439[1]);if((state_val_14440 === 7))
{var inst_14398 = (state_14439[7]);var inst_14395 = (state_14439[8]);var inst_14396 = (state_14439[9]);var inst_14397 = (state_14439[10]);var inst_14403 = cljs.core._nth.call(null,inst_14396,inst_14398);var inst_14404 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_14403);var inst_14405 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_14404);var inst_14406 = (inst_14398 + 1);var tmp14441 = inst_14395;var tmp14442 = inst_14396;var tmp14443 = inst_14397;var inst_14395__$1 = tmp14441;var inst_14396__$1 = tmp14442;var inst_14397__$1 = tmp14443;var inst_14398__$1 = inst_14406;var state_14439__$1 = (function (){var statearr_14444 = state_14439;(statearr_14444[7] = inst_14398__$1);
(statearr_14444[8] = inst_14395__$1);
(statearr_14444[9] = inst_14396__$1);
(statearr_14444[10] = inst_14397__$1);
(statearr_14444[11] = inst_14405);
return statearr_14444;
})();var statearr_14445_14475 = state_14439__$1;(statearr_14445_14475[2] = null);
(statearr_14445_14475[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 1))
{var state_14439__$1 = state_14439;var statearr_14446_14476 = state_14439__$1;(statearr_14446_14476[2] = null);
(statearr_14446_14476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 4))
{var inst_14385 = (state_14439[2]);var inst_14386 = JSON.parse.call(null,inst_14385);var inst_14387 = cljs.core.js__GT_clj.call(null,inst_14386,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_14392 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_14387);var inst_14393 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_14392);var inst_14394 = cljs.core.seq.call(null,inst_14393);var inst_14395 = inst_14394;var inst_14396 = null;var inst_14397 = 0;var inst_14398 = 0;var state_14439__$1 = (function (){var statearr_14447 = state_14439;(statearr_14447[7] = inst_14398);
(statearr_14447[8] = inst_14395);
(statearr_14447[9] = inst_14396);
(statearr_14447[10] = inst_14397);
return statearr_14447;
})();var statearr_14448_14477 = state_14439__$1;(statearr_14448_14477[2] = null);
(statearr_14448_14477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 15))
{var inst_14424 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14449_14478 = state_14439__$1;(statearr_14449_14478[2] = inst_14424);
(statearr_14449_14478[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 13))
{var inst_14409 = (state_14439[12]);var inst_14413 = cljs.core.chunk_first.call(null,inst_14409);var inst_14414 = cljs.core.chunk_rest.call(null,inst_14409);var inst_14415 = cljs.core.count.call(null,inst_14413);var inst_14395 = inst_14414;var inst_14396 = inst_14413;var inst_14397 = inst_14415;var inst_14398 = 0;var state_14439__$1 = (function (){var statearr_14450 = state_14439;(statearr_14450[7] = inst_14398);
(statearr_14450[8] = inst_14395);
(statearr_14450[9] = inst_14396);
(statearr_14450[10] = inst_14397);
return statearr_14450;
})();var statearr_14451_14479 = state_14439__$1;(statearr_14451_14479[2] = null);
(statearr_14451_14479[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 6))
{var inst_14431 = (state_14439[2]);var inst_14432 = cljs.core.async.timeout.call(null,1000);var state_14439__$1 = (function (){var statearr_14452 = state_14439;(statearr_14452[13] = inst_14431);
return statearr_14452;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14439__$1,16,inst_14432);
} else
{if((state_val_14440 === 3))
{var inst_14437 = (state_14439[2]);var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14439__$1,inst_14437);
} else
{if((state_val_14440 === 12))
{var inst_14427 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14453_14480 = state_14439__$1;(statearr_14453_14480[2] = inst_14427);
(statearr_14453_14480[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 2))
{var state_14439__$1 = state_14439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14439__$1,4,cljs_om.ajax.ajax_results_chan);
} else
{if((state_val_14440 === 11))
{var state_14439__$1 = state_14439;var statearr_14454_14481 = state_14439__$1;(statearr_14454_14481[2] = null);
(statearr_14454_14481[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 9))
{var inst_14429 = (state_14439[2]);var state_14439__$1 = state_14439;var statearr_14455_14482 = state_14439__$1;(statearr_14455_14482[2] = inst_14429);
(statearr_14455_14482[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 5))
{var inst_14398 = (state_14439[7]);var inst_14397 = (state_14439[10]);var inst_14400 = (inst_14398 < inst_14397);var inst_14401 = inst_14400;var state_14439__$1 = state_14439;if(cljs.core.truth_(inst_14401))
{var statearr_14456_14483 = state_14439__$1;(statearr_14456_14483[1] = 7);
} else
{var statearr_14457_14484 = state_14439__$1;(statearr_14457_14484[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 14))
{var inst_14409 = (state_14439[12]);var inst_14418 = cljs.core.first.call(null,inst_14409);var inst_14419 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_14418);var inst_14420 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_14419);var inst_14421 = cljs.core.next.call(null,inst_14409);var inst_14395 = inst_14421;var inst_14396 = null;var inst_14397 = 0;var inst_14398 = 0;var state_14439__$1 = (function (){var statearr_14458 = state_14439;(statearr_14458[14] = inst_14420);
(statearr_14458[7] = inst_14398);
(statearr_14458[8] = inst_14395);
(statearr_14458[9] = inst_14396);
(statearr_14458[10] = inst_14397);
return statearr_14458;
})();var statearr_14459_14485 = state_14439__$1;(statearr_14459_14485[2] = null);
(statearr_14459_14485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 16))
{var inst_14434 = (state_14439[2]);var state_14439__$1 = (function (){var statearr_14460 = state_14439;(statearr_14460[15] = inst_14434);
return statearr_14460;
})();var statearr_14461_14486 = state_14439__$1;(statearr_14461_14486[2] = null);
(statearr_14461_14486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 10))
{var inst_14409 = (state_14439[12]);var inst_14411 = cljs.core.chunked_seq_QMARK_.call(null,inst_14409);var state_14439__$1 = state_14439;if(inst_14411)
{var statearr_14462_14487 = state_14439__$1;(statearr_14462_14487[1] = 13);
} else
{var statearr_14463_14488 = state_14439__$1;(statearr_14463_14488[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14440 === 8))
{var inst_14395 = (state_14439[8]);var inst_14409 = (state_14439[12]);var inst_14409__$1 = cljs.core.seq.call(null,inst_14395);var state_14439__$1 = (function (){var statearr_14464 = state_14439;(statearr_14464[12] = inst_14409__$1);
return statearr_14464;
})();if(inst_14409__$1)
{var statearr_14465_14489 = state_14439__$1;(statearr_14465_14489[1] = 10);
} else
{var statearr_14466_14490 = state_14439__$1;(statearr_14466_14490[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___14474))
;return ((function (switch__5623__auto__,c__5638__auto___14474){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_14470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14470[0] = state_machine__5624__auto__);
(statearr_14470[1] = 1);
return statearr_14470;
});
var state_machine__5624__auto____1 = (function (state_14439){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_14439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e14471){if((e14471 instanceof Object))
{var ex__5627__auto__ = e14471;var statearr_14472_14491 = state_14439;(statearr_14472_14491[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14492 = state_14439;
state_14439 = G__14492;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_14439){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_14439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___14474))
})();var state__5640__auto__ = (function (){var statearr_14473 = f__5639__auto__.call(null);(statearr_14473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___14474);
return statearr_14473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___14474))
);
cljs_om.ajax.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null)], null);
});
cljs_om.ajax.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
cljs_om.ajax.json_xhr = (function json_xhr(p__14493){var map__14495 = p__14493;var map__14495__$1 = ((cljs.core.seq_QMARK_.call(null,map__14495))?cljs.core.apply.call(null,cljs.core.hash_map,map__14495):map__14495);var on_complete = cljs.core.get.call(null,map__14495__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__14495__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__14495__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__14495__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__14495,map__14495__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,xhr.getResponseText());
});})(xhr,map__14495,map__14495__$1,on_complete,data,url,method))
);
return xhr.send(url,cljs_om.ajax.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
cljs_om.ajax.prev_search = (function prev_search(query_string,size,from){return cljs_om.ajax.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/tweets/search",new cljs.core.Keyword(null,"data","data",1016980252),cljs_om.ajax.query.call(null,"*",size,from),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__14496_SHARP_){return cljs.core.async.put_BANG_.call(null,cljs_om.ajax.ajax_results_chan,p1__14496_SHARP_);
})], null));
});

//# sourceMappingURL=ajax.js.map