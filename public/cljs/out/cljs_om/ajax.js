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
var c__5638__auto___8636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___8636){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___8636){
return (function (state_8591){var state_val_8592 = (state_8591[1]);if((state_val_8592 === 7))
{var inst_8528 = (state_8591[7]);var inst_8530 = (state_8591[8]);var inst_8535 = (state_8591[9]);var inst_8535__$1 = cljs.core._nth.call(null,inst_8528,inst_8530);var inst_8536 = new cljs.core.Keyword(null,"_id","_id",1013998892).cljs$core$IFn$_invoke$arity$1(inst_8535__$1);var inst_8537 = cljs.core.mod.call(null,inst_8536,100);var inst_8538 = cljs.core._EQ_.call(null,0,inst_8537);var state_8591__$1 = (function (){var statearr_8593 = state_8591;(statearr_8593[9] = inst_8535__$1);
return statearr_8593;
})();if(inst_8538)
{var statearr_8594_8637 = state_8591__$1;(statearr_8594_8637[1] = 10);
} else
{var statearr_8595_8638 = state_8591__$1;(statearr_8595_8638[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 20))
{var inst_8565 = cljs.core.async.timeout.call(null,0);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,23,inst_8565);
} else
{if((state_val_8592 === 1))
{var state_8591__$1 = state_8591;var statearr_8596_8639 = state_8591__$1;(statearr_8596_8639[2] = null);
(statearr_8596_8639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 24))
{var inst_8586 = (state_8591[2]);var state_8591__$1 = (function (){var statearr_8597 = state_8591;(statearr_8597[10] = inst_8586);
return statearr_8597;
})();var statearr_8598_8640 = state_8591__$1;(statearr_8598_8640[2] = null);
(statearr_8598_8640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 4))
{var inst_8517 = (state_8591[2]);var inst_8518 = JSON.parse.call(null,inst_8517);var inst_8519 = cljs.core.js__GT_clj.call(null,inst_8518,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_8524 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_8519);var inst_8525 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_8524);var inst_8526 = cljs.core.seq.call(null,inst_8525);var inst_8527 = inst_8526;var inst_8528 = null;var inst_8529 = 0;var inst_8530 = 0;var state_8591__$1 = (function (){var statearr_8599 = state_8591;(statearr_8599[11] = inst_8527);
(statearr_8599[7] = inst_8528);
(statearr_8599[8] = inst_8530);
(statearr_8599[12] = inst_8529);
return statearr_8599;
})();var statearr_8600_8641 = state_8591__$1;(statearr_8600_8641[2] = null);
(statearr_8600_8641[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 15))
{var state_8591__$1 = state_8591;var statearr_8601_8642 = state_8591__$1;(statearr_8601_8642[2] = null);
(statearr_8601_8642[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 21))
{var state_8591__$1 = state_8591;var statearr_8602_8643 = state_8591__$1;(statearr_8602_8643[2] = null);
(statearr_8602_8643[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 13))
{var inst_8542 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8603_8644 = state_8591__$1;(statearr_8603_8644[2] = inst_8542);
(statearr_8603_8644[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 22))
{var inst_8560 = (state_8591[13]);var inst_8551 = (state_8591[14]);var inst_8570 = (state_8591[2]);var inst_8571 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_8560);var inst_8572 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_8571);var inst_8573 = cljs.core.next.call(null,inst_8551);var inst_8527 = inst_8573;var inst_8528 = null;var inst_8529 = 0;var inst_8530 = 0;var state_8591__$1 = (function (){var statearr_8604 = state_8591;(statearr_8604[11] = inst_8527);
(statearr_8604[7] = inst_8528);
(statearr_8604[8] = inst_8530);
(statearr_8604[12] = inst_8529);
(statearr_8604[15] = inst_8572);
(statearr_8604[16] = inst_8570);
return statearr_8604;
})();var statearr_8605_8645 = state_8591__$1;(statearr_8605_8645[2] = null);
(statearr_8605_8645[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 6))
{var inst_8583 = (state_8591[2]);var inst_8584 = cljs.core.async.timeout.call(null,10);var state_8591__$1 = (function (){var statearr_8606 = state_8591;(statearr_8606[17] = inst_8583);
return statearr_8606;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,24,inst_8584);
} else
{if((state_val_8592 === 17))
{var inst_8551 = (state_8591[14]);var inst_8555 = cljs.core.chunk_first.call(null,inst_8551);var inst_8556 = cljs.core.chunk_rest.call(null,inst_8551);var inst_8557 = cljs.core.count.call(null,inst_8555);var inst_8527 = inst_8556;var inst_8528 = inst_8555;var inst_8529 = inst_8557;var inst_8530 = 0;var state_8591__$1 = (function (){var statearr_8610 = state_8591;(statearr_8610[11] = inst_8527);
(statearr_8610[7] = inst_8528);
(statearr_8610[8] = inst_8530);
(statearr_8610[12] = inst_8529);
return statearr_8610;
})();var statearr_8611_8646 = state_8591__$1;(statearr_8611_8646[2] = null);
(statearr_8611_8646[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 3))
{var inst_8589 = (state_8591[2]);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8591__$1,inst_8589);
} else
{if((state_val_8592 === 12))
{var inst_8527 = (state_8591[11]);var inst_8528 = (state_8591[7]);var inst_8530 = (state_8591[8]);var inst_8535 = (state_8591[9]);var inst_8529 = (state_8591[12]);var inst_8545 = (state_8591[2]);var inst_8546 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_8535);var inst_8547 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_8546);var inst_8548 = (inst_8530 + 1);var tmp8607 = inst_8527;var tmp8608 = inst_8528;var tmp8609 = inst_8529;var inst_8527__$1 = tmp8607;var inst_8528__$1 = tmp8608;var inst_8529__$1 = tmp8609;var inst_8530__$1 = inst_8548;var state_8591__$1 = (function (){var statearr_8612 = state_8591;(statearr_8612[11] = inst_8527__$1);
(statearr_8612[7] = inst_8528__$1);
(statearr_8612[8] = inst_8530__$1);
(statearr_8612[18] = inst_8545);
(statearr_8612[19] = inst_8547);
(statearr_8612[12] = inst_8529__$1);
return statearr_8612;
})();var statearr_8613_8647 = state_8591__$1;(statearr_8613_8647[2] = null);
(statearr_8613_8647[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 2))
{var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,4,cljs_om.ajax.ajax_results_chan);
} else
{if((state_val_8592 === 23))
{var inst_8567 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8614_8648 = state_8591__$1;(statearr_8614_8648[2] = inst_8567);
(statearr_8614_8648[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 19))
{var inst_8576 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8615_8649 = state_8591__$1;(statearr_8615_8649[2] = inst_8576);
(statearr_8615_8649[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 11))
{var state_8591__$1 = state_8591;var statearr_8616_8650 = state_8591__$1;(statearr_8616_8650[2] = null);
(statearr_8616_8650[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 9))
{var inst_8581 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8617_8651 = state_8591__$1;(statearr_8617_8651[2] = inst_8581);
(statearr_8617_8651[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 5))
{var inst_8530 = (state_8591[8]);var inst_8529 = (state_8591[12]);var inst_8532 = (inst_8530 < inst_8529);var inst_8533 = inst_8532;var state_8591__$1 = state_8591;if(cljs.core.truth_(inst_8533))
{var statearr_8618_8652 = state_8591__$1;(statearr_8618_8652[1] = 7);
} else
{var statearr_8619_8653 = state_8591__$1;(statearr_8619_8653[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 14))
{var inst_8551 = (state_8591[14]);var inst_8553 = cljs.core.chunked_seq_QMARK_.call(null,inst_8551);var state_8591__$1 = state_8591;if(inst_8553)
{var statearr_8620_8654 = state_8591__$1;(statearr_8620_8654[1] = 17);
} else
{var statearr_8621_8655 = state_8591__$1;(statearr_8621_8655[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 16))
{var inst_8579 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8622_8656 = state_8591__$1;(statearr_8622_8656[2] = inst_8579);
(statearr_8622_8656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 10))
{var inst_8540 = cljs.core.async.timeout.call(null,0);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,13,inst_8540);
} else
{if((state_val_8592 === 18))
{var inst_8560 = (state_8591[13]);var inst_8551 = (state_8591[14]);var inst_8560__$1 = cljs.core.first.call(null,inst_8551);var inst_8561 = new cljs.core.Keyword(null,"_id","_id",1013998892).cljs$core$IFn$_invoke$arity$1(inst_8560__$1);var inst_8562 = cljs.core.mod.call(null,inst_8561,100);var inst_8563 = cljs.core._EQ_.call(null,0,inst_8562);var state_8591__$1 = (function (){var statearr_8623 = state_8591;(statearr_8623[13] = inst_8560__$1);
return statearr_8623;
})();if(inst_8563)
{var statearr_8624_8657 = state_8591__$1;(statearr_8624_8657[1] = 20);
} else
{var statearr_8625_8658 = state_8591__$1;(statearr_8625_8658[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 8))
{var inst_8527 = (state_8591[11]);var inst_8551 = (state_8591[14]);var inst_8551__$1 = cljs.core.seq.call(null,inst_8527);var state_8591__$1 = (function (){var statearr_8626 = state_8591;(statearr_8626[14] = inst_8551__$1);
return statearr_8626;
})();if(inst_8551__$1)
{var statearr_8627_8659 = state_8591__$1;(statearr_8627_8659[1] = 14);
} else
{var statearr_8628_8660 = state_8591__$1;(statearr_8628_8660[1] = 15);
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
}
}
}
}
}
}
}
}
});})(c__5638__auto___8636))
;return ((function (switch__5623__auto__,c__5638__auto___8636){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_8632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8632[0] = state_machine__5624__auto__);
(statearr_8632[1] = 1);
return statearr_8632;
});
var state_machine__5624__auto____1 = (function (state_8591){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_8591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e8633){if((e8633 instanceof Object))
{var ex__5627__auto__ = e8633;var statearr_8634_8661 = state_8591;(statearr_8634_8661[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8662 = state_8591;
state_8591 = G__8662;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_8591){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_8591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___8636))
})();var state__5640__auto__ = (function (){var statearr_8635 = f__5639__auto__.call(null);(statearr_8635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___8636);
return statearr_8635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___8636))
);
cljs_om.ajax.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null)], null);
});
cljs_om.ajax.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
cljs_om.ajax.json_xhr = (function json_xhr(p__8663){var map__8665 = p__8663;var map__8665__$1 = ((cljs.core.seq_QMARK_.call(null,map__8665))?cljs.core.apply.call(null,cljs.core.hash_map,map__8665):map__8665);var on_complete = cljs.core.get.call(null,map__8665__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__8665__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__8665__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__8665__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__8665,map__8665__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,xhr.getResponseText());
});})(xhr,map__8665,map__8665__$1,on_complete,data,url,method))
);
return xhr.send(url,cljs_om.ajax.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
cljs_om.ajax.prev_search = (function prev_search(query_string,size,from){return cljs_om.ajax.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/tweets/search",new cljs.core.Keyword(null,"data","data",1016980252),cljs_om.ajax.query.call(null,"*",size,from),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__8666_SHARP_){return cljs.core.async.put_BANG_.call(null,cljs_om.ajax.ajax_results_chan,p1__8666_SHARP_);
})], null));
});

//# sourceMappingURL=ajax.js.map