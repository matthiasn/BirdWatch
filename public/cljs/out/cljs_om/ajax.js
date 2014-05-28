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
var c__5638__auto___23134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___23134){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___23134){
return (function (state_23089){var state_val_23090 = (state_23089[1]);if((state_val_23090 === 7))
{var inst_23033 = (state_23089[7]);var inst_23026 = (state_23089[8]);var inst_23028 = (state_23089[9]);var inst_23033__$1 = cljs.core._nth.call(null,inst_23026,inst_23028);var inst_23034 = new cljs.core.Keyword(null,"_id","_id",1013998892).cljs$core$IFn$_invoke$arity$1(inst_23033__$1);var inst_23035 = cljs.core.mod.call(null,inst_23034,10);var inst_23036 = cljs.core._EQ_.call(null,0,inst_23035);var state_23089__$1 = (function (){var statearr_23091 = state_23089;(statearr_23091[7] = inst_23033__$1);
return statearr_23091;
})();if(inst_23036)
{var statearr_23092_23135 = state_23089__$1;(statearr_23092_23135[1] = 10);
} else
{var statearr_23093_23136 = state_23089__$1;(statearr_23093_23136[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 20))
{var inst_23063 = cljs.core.async.timeout.call(null,1);var state_23089__$1 = state_23089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23089__$1,23,inst_23063);
} else
{if((state_val_23090 === 1))
{var state_23089__$1 = state_23089;var statearr_23094_23137 = state_23089__$1;(statearr_23094_23137[2] = null);
(statearr_23094_23137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 24))
{var inst_23084 = (state_23089[2]);var state_23089__$1 = (function (){var statearr_23095 = state_23089;(statearr_23095[10] = inst_23084);
return statearr_23095;
})();var statearr_23096_23138 = state_23089__$1;(statearr_23096_23138[2] = null);
(statearr_23096_23138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 4))
{var inst_23015 = (state_23089[2]);var inst_23016 = JSON.parse.call(null,inst_23015);var inst_23017 = cljs.core.js__GT_clj.call(null,inst_23016,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_23022 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_23017);var inst_23023 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_23022);var inst_23024 = cljs.core.seq.call(null,inst_23023);var inst_23025 = inst_23024;var inst_23026 = null;var inst_23027 = 0;var inst_23028 = 0;var state_23089__$1 = (function (){var statearr_23097 = state_23089;(statearr_23097[11] = inst_23027);
(statearr_23097[8] = inst_23026);
(statearr_23097[12] = inst_23025);
(statearr_23097[9] = inst_23028);
return statearr_23097;
})();var statearr_23098_23139 = state_23089__$1;(statearr_23098_23139[2] = null);
(statearr_23098_23139[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 15))
{var state_23089__$1 = state_23089;var statearr_23099_23140 = state_23089__$1;(statearr_23099_23140[2] = null);
(statearr_23099_23140[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 21))
{var state_23089__$1 = state_23089;var statearr_23100_23141 = state_23089__$1;(statearr_23100_23141[2] = null);
(statearr_23100_23141[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 13))
{var inst_23040 = (state_23089[2]);var state_23089__$1 = state_23089;var statearr_23101_23142 = state_23089__$1;(statearr_23101_23142[2] = inst_23040);
(statearr_23101_23142[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 22))
{var inst_23049 = (state_23089[13]);var inst_23058 = (state_23089[14]);var inst_23068 = (state_23089[2]);var inst_23069 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_23058);var inst_23070 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_23069);var inst_23071 = cljs.core.next.call(null,inst_23049);var inst_23025 = inst_23071;var inst_23026 = null;var inst_23027 = 0;var inst_23028 = 0;var state_23089__$1 = (function (){var statearr_23102 = state_23089;(statearr_23102[15] = inst_23070);
(statearr_23102[11] = inst_23027);
(statearr_23102[16] = inst_23068);
(statearr_23102[8] = inst_23026);
(statearr_23102[12] = inst_23025);
(statearr_23102[9] = inst_23028);
return statearr_23102;
})();var statearr_23103_23143 = state_23089__$1;(statearr_23103_23143[2] = null);
(statearr_23103_23143[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 6))
{var inst_23081 = (state_23089[2]);var inst_23082 = cljs.core.async.timeout.call(null,100);var state_23089__$1 = (function (){var statearr_23104 = state_23089;(statearr_23104[17] = inst_23081);
return statearr_23104;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23089__$1,24,inst_23082);
} else
{if((state_val_23090 === 17))
{var inst_23049 = (state_23089[13]);var inst_23053 = cljs.core.chunk_first.call(null,inst_23049);var inst_23054 = cljs.core.chunk_rest.call(null,inst_23049);var inst_23055 = cljs.core.count.call(null,inst_23053);var inst_23025 = inst_23054;var inst_23026 = inst_23053;var inst_23027 = inst_23055;var inst_23028 = 0;var state_23089__$1 = (function (){var statearr_23108 = state_23089;(statearr_23108[11] = inst_23027);
(statearr_23108[8] = inst_23026);
(statearr_23108[12] = inst_23025);
(statearr_23108[9] = inst_23028);
return statearr_23108;
})();var statearr_23109_23144 = state_23089__$1;(statearr_23109_23144[2] = null);
(statearr_23109_23144[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 3))
{var inst_23087 = (state_23089[2]);var state_23089__$1 = state_23089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23089__$1,inst_23087);
} else
{if((state_val_23090 === 12))
{var inst_23027 = (state_23089[11]);var inst_23033 = (state_23089[7]);var inst_23026 = (state_23089[8]);var inst_23025 = (state_23089[12]);var inst_23028 = (state_23089[9]);var inst_23043 = (state_23089[2]);var inst_23044 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_23033);var inst_23045 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_23044);var inst_23046 = (inst_23028 + 1);var tmp23105 = inst_23027;var tmp23106 = inst_23026;var tmp23107 = inst_23025;var inst_23025__$1 = tmp23107;var inst_23026__$1 = tmp23106;var inst_23027__$1 = tmp23105;var inst_23028__$1 = inst_23046;var state_23089__$1 = (function (){var statearr_23110 = state_23089;(statearr_23110[11] = inst_23027__$1);
(statearr_23110[18] = inst_23045);
(statearr_23110[8] = inst_23026__$1);
(statearr_23110[12] = inst_23025__$1);
(statearr_23110[9] = inst_23028__$1);
(statearr_23110[19] = inst_23043);
return statearr_23110;
})();var statearr_23111_23145 = state_23089__$1;(statearr_23111_23145[2] = null);
(statearr_23111_23145[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 2))
{var state_23089__$1 = state_23089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23089__$1,4,cljs_om.ajax.ajax_results_chan);
} else
{if((state_val_23090 === 23))
{var inst_23065 = (state_23089[2]);var state_23089__$1 = state_23089;var statearr_23112_23146 = state_23089__$1;(statearr_23112_23146[2] = inst_23065);
(statearr_23112_23146[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 19))
{var inst_23074 = (state_23089[2]);var state_23089__$1 = state_23089;var statearr_23113_23147 = state_23089__$1;(statearr_23113_23147[2] = inst_23074);
(statearr_23113_23147[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 11))
{var state_23089__$1 = state_23089;var statearr_23114_23148 = state_23089__$1;(statearr_23114_23148[2] = null);
(statearr_23114_23148[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 9))
{var inst_23079 = (state_23089[2]);var state_23089__$1 = state_23089;var statearr_23115_23149 = state_23089__$1;(statearr_23115_23149[2] = inst_23079);
(statearr_23115_23149[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 5))
{var inst_23027 = (state_23089[11]);var inst_23028 = (state_23089[9]);var inst_23030 = (inst_23028 < inst_23027);var inst_23031 = inst_23030;var state_23089__$1 = state_23089;if(cljs.core.truth_(inst_23031))
{var statearr_23116_23150 = state_23089__$1;(statearr_23116_23150[1] = 7);
} else
{var statearr_23117_23151 = state_23089__$1;(statearr_23117_23151[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 14))
{var inst_23049 = (state_23089[13]);var inst_23051 = cljs.core.chunked_seq_QMARK_.call(null,inst_23049);var state_23089__$1 = state_23089;if(inst_23051)
{var statearr_23118_23152 = state_23089__$1;(statearr_23118_23152[1] = 17);
} else
{var statearr_23119_23153 = state_23089__$1;(statearr_23119_23153[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 16))
{var inst_23077 = (state_23089[2]);var state_23089__$1 = state_23089;var statearr_23120_23154 = state_23089__$1;(statearr_23120_23154[2] = inst_23077);
(statearr_23120_23154[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 10))
{var inst_23038 = cljs.core.async.timeout.call(null,1);var state_23089__$1 = state_23089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23089__$1,13,inst_23038);
} else
{if((state_val_23090 === 18))
{var inst_23049 = (state_23089[13]);var inst_23058 = (state_23089[14]);var inst_23058__$1 = cljs.core.first.call(null,inst_23049);var inst_23059 = new cljs.core.Keyword(null,"_id","_id",1013998892).cljs$core$IFn$_invoke$arity$1(inst_23058__$1);var inst_23060 = cljs.core.mod.call(null,inst_23059,10);var inst_23061 = cljs.core._EQ_.call(null,0,inst_23060);var state_23089__$1 = (function (){var statearr_23121 = state_23089;(statearr_23121[14] = inst_23058__$1);
return statearr_23121;
})();if(inst_23061)
{var statearr_23122_23155 = state_23089__$1;(statearr_23122_23155[1] = 20);
} else
{var statearr_23123_23156 = state_23089__$1;(statearr_23123_23156[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23090 === 8))
{var inst_23049 = (state_23089[13]);var inst_23025 = (state_23089[12]);var inst_23049__$1 = cljs.core.seq.call(null,inst_23025);var state_23089__$1 = (function (){var statearr_23124 = state_23089;(statearr_23124[13] = inst_23049__$1);
return statearr_23124;
})();if(inst_23049__$1)
{var statearr_23125_23157 = state_23089__$1;(statearr_23125_23157[1] = 14);
} else
{var statearr_23126_23158 = state_23089__$1;(statearr_23126_23158[1] = 15);
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
});})(c__5638__auto___23134))
;return ((function (switch__5623__auto__,c__5638__auto___23134){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_23130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23130[0] = state_machine__5624__auto__);
(statearr_23130[1] = 1);
return statearr_23130;
});
var state_machine__5624__auto____1 = (function (state_23089){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_23089);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e23131){if((e23131 instanceof Object))
{var ex__5627__auto__ = e23131;var statearr_23132_23159 = state_23089;(statearr_23132_23159[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23160 = state_23089;
state_23089 = G__23160;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_23089){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_23089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___23134))
})();var state__5640__auto__ = (function (){var statearr_23133 = f__5639__auto__.call(null);(statearr_23133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___23134);
return statearr_23133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___23134))
);
cljs_om.ajax.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null),new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null)], null);
});
cljs_om.ajax.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
cljs_om.ajax.json_xhr = (function json_xhr(p__23161){var map__23163 = p__23161;var map__23163__$1 = ((cljs.core.seq_QMARK_.call(null,map__23163))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);var on_complete = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__23163,map__23163__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,xhr.getResponseText());
});})(xhr,map__23163,map__23163__$1,on_complete,data,url,method))
);
return xhr.send(url,cljs_om.ajax.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
cljs_om.ajax.prev_search = (function prev_search(query_string,size,from){return cljs_om.ajax.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"/tweets/search",new cljs.core.Keyword(null,"data","data",1016980252),cljs_om.ajax.query.call(null,"*",size,from),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__23164_SHARP_){return cljs.core.async.put_BANG_.call(null,cljs_om.ajax.ajax_results_chan,p1__23164_SHARP_);
})], null));
});

//# sourceMappingURL=ajax.js.map