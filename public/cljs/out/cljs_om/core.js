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
cljs_om.core.prev_tweets_chan = cljs.core.async.chan.call(null,100000);
cljs_om.core.combined_tweets_chan = cljs.core.async.chan.call(null,100000);
var c__5638__auto___18829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___18829){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___18829){
return (function (state_18816){var state_val_18817 = (state_18816[1]);if((state_val_18817 === 5))
{var inst_18811 = (state_18816[2]);var state_18816__$1 = (function (){var statearr_18818 = state_18816;(statearr_18818[7] = inst_18811);
return statearr_18818;
})();var statearr_18819_18830 = state_18816__$1;(statearr_18819_18830[2] = null);
(statearr_18819_18830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18817 === 4))
{var inst_18805 = (state_18816[2]);var inst_18806 = cljs.core.nth.call(null,inst_18805,0,null);var inst_18807 = cljs.core.nth.call(null,inst_18805,1,null);var inst_18808 = cljs.core.async.put_BANG_.call(null,cljs_om.core.combined_tweets_chan,inst_18806);var inst_18809 = cljs.core.async.timeout.call(null,0);var state_18816__$1 = (function (){var statearr_18820 = state_18816;(statearr_18820[8] = inst_18807);
(statearr_18820[9] = inst_18808);
return statearr_18820;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18816__$1,5,inst_18809);
} else
{if((state_val_18817 === 3))
{var inst_18814 = (state_18816[2]);var state_18816__$1 = state_18816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18816__$1,inst_18814);
} else
{if((state_val_18817 === 2))
{var inst_18802 = [cljs_om.core.tweets_chan,cljs_om.core.prev_tweets_chan];var inst_18803 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18802,null));var state_18816__$1 = state_18816;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18816__$1,4,inst_18803,new cljs.core.Keyword(null,"priority","priority",4143410454));
} else
{if((state_val_18817 === 1))
{var state_18816__$1 = state_18816;var statearr_18821_18831 = state_18816__$1;(statearr_18821_18831[2] = null);
(statearr_18821_18831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__5638__auto___18829))
;return ((function (switch__5623__auto__,c__5638__auto___18829){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_18825 = [null,null,null,null,null,null,null,null,null,null];(statearr_18825[0] = state_machine__5624__auto__);
(statearr_18825[1] = 1);
return statearr_18825;
});
var state_machine__5624__auto____1 = (function (state_18816){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_18816);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e18826){if((e18826 instanceof Object))
{var ex__5627__auto__ = e18826;var statearr_18827_18832 = state_18816;(statearr_18827_18832[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18833 = state_18816;
state_18816 = G__18833;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_18816){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_18816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___18829))
})();var state__5640__auto__ = (function (){var statearr_18828 = f__5639__auto__.call(null);(statearr_18828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___18829);
return statearr_18828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___18829))
);
cljs_om.core.fwd = (function fwd(from,to,ms){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_18869){var state_val_18870 = (state_18869[1]);if((state_val_18870 === 5))
{var inst_18864 = (state_18869[2]);var state_18869__$1 = (function (){var statearr_18871 = state_18869;(statearr_18871[7] = inst_18864);
return statearr_18871;
})();var statearr_18872_18882 = state_18869__$1;(statearr_18872_18882[2] = null);
(statearr_18872_18882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18870 === 4))
{var inst_18860 = (state_18869[2]);var inst_18861 = cljs.core.async.put_BANG_.call(null,to,inst_18860);var inst_18862 = cljs.core.async.timeout.call(null,ms);var state_18869__$1 = (function (){var statearr_18873 = state_18869;(statearr_18873[8] = inst_18861);
return statearr_18873;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18869__$1,5,inst_18862);
} else
{if((state_val_18870 === 3))
{var inst_18867 = (state_18869[2]);var state_18869__$1 = state_18869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18869__$1,inst_18867);
} else
{if((state_val_18870 === 2))
{var state_18869__$1 = state_18869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18869__$1,4,from);
} else
{if((state_val_18870 === 1))
{var state_18869__$1 = state_18869;var statearr_18874_18883 = state_18869__$1;(statearr_18874_18883[2] = null);
(statearr_18874_18883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_18878 = [null,null,null,null,null,null,null,null,null];(statearr_18878[0] = state_machine__5624__auto__);
(statearr_18878[1] = 1);
return statearr_18878;
});
var state_machine__5624__auto____1 = (function (state_18869){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_18869);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e18879){if((e18879 instanceof Object))
{var ex__5627__auto__ = e18879;var statearr_18880_18884 = state_18869;(statearr_18880_18884[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18885 = state_18869;
state_18869 = G__18885;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_18869){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_18869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_18881 = f__5639__auto__.call(null);(statearr_18881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_18881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
var c__5638__auto___18906 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___18906){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___18906){
return (function (state_18894){var state_val_18895 = (state_18894[1]);if((state_val_18895 === 4))
{var inst_18888 = (state_18894[2]);var inst_18889 = cljs_om.tweets.add_tweet.call(null,inst_18888,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_18894__$1 = (function (){var statearr_18896 = state_18894;(statearr_18896[7] = inst_18889);
return statearr_18896;
})();var statearr_18897_18907 = state_18894__$1;(statearr_18897_18907[2] = null);
(statearr_18897_18907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18895 === 3))
{var inst_18892 = (state_18894[2]);var state_18894__$1 = state_18894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18894__$1,inst_18892);
} else
{if((state_val_18895 === 2))
{var state_18894__$1 = state_18894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18894__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_18895 === 1))
{var state_18894__$1 = state_18894;var statearr_18898_18908 = state_18894__$1;(statearr_18898_18908[2] = null);
(statearr_18898_18908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5638__auto___18906))
;return ((function (switch__5623__auto__,c__5638__auto___18906){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_18902 = [null,null,null,null,null,null,null,null];(statearr_18902[0] = state_machine__5624__auto__);
(statearr_18902[1] = 1);
return statearr_18902;
});
var state_machine__5624__auto____1 = (function (state_18894){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_18894);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e18903){if((e18903 instanceof Object))
{var ex__5627__auto__ = e18903;var statearr_18904_18909 = state_18894;(statearr_18904_18909[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18910 = state_18894;
state_18894 = G__18910;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___18906))
})();var state__5640__auto__ = (function (){var statearr_18905 = f__5639__auto__.call(null);(statearr_18905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___18906);
return statearr_18905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___18906))
);
cljs_om.core.start_search = (function start_search(search){return cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,search,cljs_om.core.tweets_chan);
});
cljs_om.core.start_search.call(null,cljs_om.util.search_hash.call(null));

//# sourceMappingURL=core.js.map