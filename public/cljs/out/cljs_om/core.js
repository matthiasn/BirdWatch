// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_om.tweets');
goog.require('cljs_om.tweets');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_om.timeseries');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('om.core');
goog.require('cljs_om.timeseries');
goog.require('om.core');
goog.require('cljs_om.ui');
goog.require('cljs_om.util');
cljs_om.core.app_state = cljs.core.atom.call(null,cljs_om.util.initial_state.call(null));
om.core.root.call(null,cljs_om.ui.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
om.core.root.call(null,cljs_om.ui.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
om.core.root.call(null,cljs_om.ui.search_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("search")], null));
om.core.root.call(null,cljs_om.ui.sort_buttons_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("sort-buttons")], null));
cljs_om.core.cloud_elem = document.getElementById("wordCloud");
cljs_om.core.cloud_w = (cljs_om.core.cloud_elem["offsetWidth"]);
cljs_om.core.word_cloud = BirdWatch.WordCloud(cljs_om.core.cloud_w,(cljs_om.core.cloud_w * 0.7),250,(function (e){return null;
}),"#wordCloud");
setInterval((function (){return cljs_om.timeseries.update.call(null,cljs_om.timeseries.graph_with_legend);
}),5000);
setInterval((function (){return BirdWatch.updateBarchart(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,25,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)))));
}),1000);
cljs_om.core.tweets_chan = cljs.core.async.chan.call(null,10000);
cljs_om.core.prev_tweets_chan = cljs.core.async.chan.call(null,10000);
var c__5638__auto___20812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___20812){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___20812){
return (function (state_20800){var state_val_20801 = (state_20800[1]);if((state_val_20801 === 4))
{var inst_20792 = (state_20800[2]);var inst_20793 = cljs.core.nth.call(null,inst_20792,0,null);var inst_20794 = cljs.core.nth.call(null,inst_20792,1,null);var inst_20795 = cljs_om.tweets.add_tweet.call(null,inst_20793,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_20800__$1 = (function (){var statearr_20802 = state_20800;(statearr_20802[7] = inst_20794);
(statearr_20802[8] = inst_20795);
return statearr_20802;
})();var statearr_20803_20813 = state_20800__$1;(statearr_20803_20813[2] = null);
(statearr_20803_20813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 3))
{var inst_20798 = (state_20800[2]);var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20800__$1,inst_20798);
} else
{if((state_val_20801 === 2))
{var inst_20786 = [cljs_om.core.tweets_chan,cljs_om.core.prev_tweets_chan];var inst_20787 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20786,null));var inst_20788 = [new cljs.core.Keyword(null,"priority","priority",4143410454)];var inst_20789 = [true];var inst_20790 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20788,inst_20789);var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20800__$1,4,inst_20787,inst_20790);
} else
{if((state_val_20801 === 1))
{var state_20800__$1 = state_20800;var statearr_20804_20814 = state_20800__$1;(statearr_20804_20814[2] = null);
(statearr_20804_20814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5638__auto___20812))
;return ((function (switch__5623__auto__,c__5638__auto___20812){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_20808 = [null,null,null,null,null,null,null,null,null];(statearr_20808[0] = state_machine__5624__auto__);
(statearr_20808[1] = 1);
return statearr_20808;
});
var state_machine__5624__auto____1 = (function (state_20800){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_20800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e20809){if((e20809 instanceof Object))
{var ex__5627__auto__ = e20809;var statearr_20810_20815 = state_20800;(statearr_20810_20815[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20816 = state_20800;
state_20800 = G__20816;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_20800){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_20800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___20812))
})();var state__5640__auto__ = (function (){var statearr_20811 = f__5639__auto__.call(null);(statearr_20811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___20812);
return statearr_20811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___20812))
);
cljs_om.core.start_search = (function start_search(search){return cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,search,cljs_om.core.tweets_chan);
});
cljs_om.core.start_search.call(null,cljs_om.util.search_hash.call(null));

//# sourceMappingURL=core.js.map