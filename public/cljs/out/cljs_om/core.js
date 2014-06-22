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
var c__5638__auto___9646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___9646){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___9646){
return (function (state_9634){var state_val_9635 = (state_9634[1]);if((state_val_9635 === 4))
{var inst_9626 = (state_9634[2]);var inst_9627 = cljs.core.nth.call(null,inst_9626,0,null);var inst_9628 = cljs.core.nth.call(null,inst_9626,1,null);var inst_9629 = cljs_om.tweets.add_tweet.call(null,inst_9627,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_9634__$1 = (function (){var statearr_9636 = state_9634;(statearr_9636[7] = inst_9629);
(statearr_9636[8] = inst_9628);
return statearr_9636;
})();var statearr_9637_9647 = state_9634__$1;(statearr_9637_9647[2] = null);
(statearr_9637_9647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9635 === 3))
{var inst_9632 = (state_9634[2]);var state_9634__$1 = state_9634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9634__$1,inst_9632);
} else
{if((state_val_9635 === 2))
{var inst_9620 = [cljs_om.core.tweets_chan,cljs_om.core.prev_tweets_chan];var inst_9621 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9620,null));var inst_9622 = [new cljs.core.Keyword(null,"priority","priority",4143410454)];var inst_9623 = [true];var inst_9624 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9622,inst_9623);var state_9634__$1 = state_9634;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9634__$1,4,inst_9621,inst_9624);
} else
{if((state_val_9635 === 1))
{var state_9634__$1 = state_9634;var statearr_9638_9648 = state_9634__$1;(statearr_9638_9648[2] = null);
(statearr_9638_9648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5638__auto___9646))
;return ((function (switch__5623__auto__,c__5638__auto___9646){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9642 = [null,null,null,null,null,null,null,null,null];(statearr_9642[0] = state_machine__5624__auto__);
(statearr_9642[1] = 1);
return statearr_9642;
});
var state_machine__5624__auto____1 = (function (state_9634){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9643){if((e9643 instanceof Object))
{var ex__5627__auto__ = e9643;var statearr_9644_9649 = state_9634;(statearr_9644_9649[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9650 = state_9634;
state_9634 = G__9650;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9634){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___9646))
})();var state__5640__auto__ = (function (){var statearr_9645 = f__5639__auto__.call(null);(statearr_9645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___9646);
return statearr_9645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___9646))
);
cljs_om.core.start_search = (function start_search(search){return cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,search,cljs_om.core.tweets_chan);
});
cljs_om.core.start_search.call(null,cljs_om.util.search_hash.call(null));

//# sourceMappingURL=core.js.map