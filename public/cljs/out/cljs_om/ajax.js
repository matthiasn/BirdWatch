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
var c__5638__auto___8606 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___8606){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___8606){
return (function (state_8571){var state_val_8572 = (state_8571[1]);if((state_val_8572 === 7))
{var inst_8527 = (state_8571[7]);var inst_8528 = (state_8571[8]);var inst_8530 = (state_8571[9]);var inst_8529 = (state_8571[10]);var inst_8535 = cljs.core._nth.call(null,inst_8528,inst_8530);var inst_8536 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_8535);var inst_8537 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_8536);var inst_8538 = (inst_8530 + 1);var tmp8573 = inst_8527;var tmp8574 = inst_8528;var tmp8575 = inst_8529;var inst_8527__$1 = tmp8573;var inst_8528__$1 = tmp8574;var inst_8529__$1 = tmp8575;var inst_8530__$1 = inst_8538;var state_8571__$1 = (function (){var statearr_8576 = state_8571;(statearr_8576[7] = inst_8527__$1);
(statearr_8576[8] = inst_8528__$1);
(statearr_8576[11] = inst_8537);
(statearr_8576[9] = inst_8530__$1);
(statearr_8576[10] = inst_8529__$1);
return statearr_8576;
})();var statearr_8577_8607 = state_8571__$1;(statearr_8577_8607[2] = null);
(statearr_8577_8607[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 1))
{var state_8571__$1 = state_8571;var statearr_8578_8608 = state_8571__$1;(statearr_8578_8608[2] = null);
(statearr_8578_8608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 4))
{var inst_8517 = (state_8571[2]);var inst_8518 = JSON.parse.call(null,inst_8517);var inst_8519 = cljs.core.js__GT_clj.call(null,inst_8518,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_8524 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_8519);var inst_8525 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_8524);var inst_8526 = cljs.core.seq.call(null,inst_8525);var inst_8527 = inst_8526;var inst_8528 = null;var inst_8529 = 0;var inst_8530 = 0;var state_8571__$1 = (function (){var statearr_8579 = state_8571;(statearr_8579[7] = inst_8527);
(statearr_8579[8] = inst_8528);
(statearr_8579[9] = inst_8530);
(statearr_8579[10] = inst_8529);
return statearr_8579;
})();var statearr_8580_8609 = state_8571__$1;(statearr_8580_8609[2] = null);
(statearr_8580_8609[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 15))
{var inst_8556 = (state_8571[2]);var state_8571__$1 = state_8571;var statearr_8581_8610 = state_8571__$1;(statearr_8581_8610[2] = inst_8556);
(statearr_8581_8610[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 13))
{var inst_8541 = (state_8571[12]);var inst_8545 = cljs.core.chunk_first.call(null,inst_8541);var inst_8546 = cljs.core.chunk_rest.call(null,inst_8541);var inst_8547 = cljs.core.count.call(null,inst_8545);var inst_8527 = inst_8546;var inst_8528 = inst_8545;var inst_8529 = inst_8547;var inst_8530 = 0;var state_8571__$1 = (function (){var statearr_8582 = state_8571;(statearr_8582[7] = inst_8527);
(statearr_8582[8] = inst_8528);
(statearr_8582[9] = inst_8530);
(statearr_8582[10] = inst_8529);
return statearr_8582;
})();var statearr_8583_8611 = state_8571__$1;(statearr_8583_8611[2] = null);
(statearr_8583_8611[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 6))
{var inst_8563 = (state_8571[2]);var inst_8564 = cljs.core.async.timeout.call(null,1000);var state_8571__$1 = (function (){var statearr_8584 = state_8571;(statearr_8584[13] = inst_8563);
return statearr_8584;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8571__$1,16,inst_8564);
} else
{if((state_val_8572 === 3))
{var inst_8569 = (state_8571[2]);var state_8571__$1 = state_8571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8571__$1,inst_8569);
} else
{if((state_val_8572 === 12))
{var inst_8559 = (state_8571[2]);var state_8571__$1 = state_8571;var statearr_8585_8612 = state_8571__$1;(statearr_8585_8612[2] = inst_8559);
(statearr_8585_8612[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 2))
{var state_8571__$1 = state_8571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8571__$1,4,cljs_om.ajax.ajax_results_chan);
} else
{if((state_val_8572 === 11))
{var state_8571__$1 = state_8571;var statearr_8586_8613 = state_8571__$1;(statearr_8586_8613[2] = null);
(statearr_8586_8613[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 9))
{var inst_8561 = (state_8571[2]);var state_8571__$1 = state_8571;var statearr_8587_8614 = state_8571__$1;(statearr_8587_8614[2] = inst_8561);
(statearr_8587_8614[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 5))
{var inst_8530 = (state_8571[9]);var inst_8529 = (state_8571[10]);var inst_8532 = (inst_8530 < inst_8529);var inst_8533 = inst_8532;var state_8571__$1 = state_8571;if(cljs.core.truth_(inst_8533))
{var statearr_8588_8615 = state_8571__$1;(statearr_8588_8615[1] = 7);
} else
{var statearr_8589_8616 = state_8571__$1;(statearr_8589_8616[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 14))
{var inst_8541 = (state_8571[12]);var inst_8550 = cljs.core.first.call(null,inst_8541);var inst_8551 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_8550);var inst_8552 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_8551);var inst_8553 = cljs.core.next.call(null,inst_8541);var inst_8527 = inst_8553;var inst_8528 = null;var inst_8529 = 0;var inst_8530 = 0;var state_8571__$1 = (function (){var statearr_8590 = state_8571;(statearr_8590[7] = inst_8527);
(statearr_8590[8] = inst_8528);
(statearr_8590[9] = inst_8530);
(statearr_8590[14] = inst_8552);
(statearr_8590[10] = inst_8529);
return statearr_8590;
})();var statearr_8591_8617 = state_8571__$1;(statearr_8591_8617[2] = null);
(statearr_8591_8617[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 16))
{var inst_8566 = (state_8571[2]);var state_8571__$1 = (function (){var statearr_8592 = state_8571;(statearr_8592[15] = inst_8566);
return statearr_8592;
})();var statearr_8593_8618 = state_8571__$1;(statearr_8593_8618[2] = null);
(statearr_8593_8618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 10))
{var inst_8541 = (state_8571[12]);var inst_8543 = cljs.core.chunked_seq_QMARK_.call(null,inst_8541);var state_8571__$1 = state_8571;if(inst_8543)
{var statearr_8594_8619 = state_8571__$1;(statearr_8594_8619[1] = 13);
} else
{var statearr_8595_8620 = state_8571__$1;(statearr_8595_8620[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8572 === 8))
{var inst_8527 = (state_8571[7]);var inst_8541 = (state_8571[12]);var inst_8541__$1 = cljs.core.seq.call(null,inst_8527);var state_8571__$1 = (function (){var statearr_8596 = state_8571;(statearr_8596[12] = inst_8541__$1);
return statearr_8596;
})();if(inst_8541__$1)
{var statearr_8597_8621 = state_8571__$1;(statearr_8597_8621[1] = 10);
} else
{var statearr_8598_8622 = state_8571__$1;(statearr_8598_8622[1] = 11);
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
});})(c__5638__auto___8606))
;return ((function (switch__5623__auto__,c__5638__auto___8606){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_8602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8602[0] = state_machine__5624__auto__);
(statearr_8602[1] = 1);
return statearr_8602;
});
var state_machine__5624__auto____1 = (function (state_8571){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_8571);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e8603){if((e8603 instanceof Object))
{var ex__5627__auto__ = e8603;var statearr_8604_8623 = state_8571;(statearr_8604_8623[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8624 = state_8571;
state_8571 = G__8624;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_8571){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_8571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___8606))
})();var state__5640__auto__ = (function (){var statearr_8605 = f__5639__auto__.call(null);(statearr_8605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___8606);
return statearr_8605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___8606))
);
cljs_om.ajax.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null)], null);
});
cljs_om.ajax.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
cljs_om.ajax.json_xhr = (function json_xhr(p__8625){var map__8627 = p__8625;var map__8627__$1 = ((cljs.core.seq_QMARK_.call(null,map__8627))?cljs.core.apply.call(null,cljs.core.hash_map,map__8627):map__8627);var on_complete = cljs.core.get.call(null,map__8627__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__8627__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__8627__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__8627__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__8627,map__8627__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,xhr.getResponseText());
});})(xhr,map__8627,map__8627__$1,on_complete,data,url,method))
);
return xhr.send(url,cljs_om.ajax.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
cljs_om.ajax.prev_search = (function prev_search(query_string,size,from){return cljs_om.ajax.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/tweets/search",new cljs.core.Keyword(null,"data","data",1016980252),cljs_om.ajax.query.call(null,"*",size,from),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__8628_SHARP_){return cljs.core.async.put_BANG_.call(null,cljs_om.ajax.ajax_results_chan,p1__8628_SHARP_);
})], null));
});

//# sourceMappingURL=ajax.js.map