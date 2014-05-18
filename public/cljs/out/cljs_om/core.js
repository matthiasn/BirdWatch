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
cljs.core.enable_console_print_BANG_.call(null);
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
cljs_om.core.combined_tweets_chan = cljs.core.async.chan.call(null,1);
cljs_om.core.fwd = (function fwd(from,to,ms){var c__6291__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto__){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto__){
return (function (state_33838){var state_val_33839 = (state_33838[1]);if((state_val_33839 === 5))
{var inst_33833 = (state_33838[2]);var state_33838__$1 = (function (){var statearr_33840 = state_33838;(statearr_33840[7] = inst_33833);
return statearr_33840;
})();var statearr_33841_33851 = state_33838__$1;(statearr_33841_33851[2] = null);
(statearr_33841_33851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33839 === 4))
{var inst_33829 = (state_33838[2]);var inst_33830 = cljs.core.async.put_BANG_.call(null,to,inst_33829);var inst_33831 = cljs.core.async.timeout.call(null,ms);var state_33838__$1 = (function (){var statearr_33842 = state_33838;(statearr_33842[8] = inst_33830);
return statearr_33842;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33838__$1,5,inst_33831);
} else
{if((state_val_33839 === 3))
{var inst_33836 = (state_33838[2]);var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33838__$1,inst_33836);
} else
{if((state_val_33839 === 2))
{var state_33838__$1 = state_33838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33838__$1,4,from);
} else
{if((state_val_33839 === 1))
{var state_33838__$1 = state_33838;var statearr_33843_33852 = state_33838__$1;(statearr_33843_33852[2] = null);
(statearr_33843_33852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto__))
;return ((function (switch__6276__auto__,c__6291__auto__){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_33847 = [null,null,null,null,null,null,null,null,null];(statearr_33847[0] = state_machine__6277__auto__);
(statearr_33847[1] = 1);
return statearr_33847;
});
var state_machine__6277__auto____1 = (function (state_33838){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_33838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e33848){if((e33848 instanceof Object))
{var ex__6280__auto__ = e33848;var statearr_33849_33853 = state_33838;(statearr_33849_33853[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33854 = state_33838;
state_33838 = G__33854;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_33838){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_33838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto__))
})();var state__6293__auto__ = (function (){var statearr_33850 = f__6292__auto__.call(null);(statearr_33850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto__);
return statearr_33850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto__))
);
return c__6291__auto__;
});
cljs_om.core.fwd.call(null,cljs_om.core.tweets_chan,cljs_om.core.combined_tweets_chan,0);
cljs_om.core.fwd.call(null,cljs_om.core.prev_tweets_chan,cljs_om.core.combined_tweets_chan,10);
var c__6291__auto___33875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___33875){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___33875){
return (function (state_33863){var state_val_33864 = (state_33863[1]);if((state_val_33864 === 4))
{var inst_33857 = (state_33863[2]);var inst_33858 = cljs_om.tweets.add_tweet.call(null,inst_33857,cljs_om.core.app_state,cljs_om.core.word_cloud);var state_33863__$1 = (function (){var statearr_33865 = state_33863;(statearr_33865[7] = inst_33858);
return statearr_33865;
})();var statearr_33866_33876 = state_33863__$1;(statearr_33866_33876[2] = null);
(statearr_33866_33876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33864 === 3))
{var inst_33861 = (state_33863[2]);var state_33863__$1 = state_33863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33863__$1,inst_33861);
} else
{if((state_val_33864 === 2))
{var state_33863__$1 = state_33863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33863__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_33864 === 1))
{var state_33863__$1 = state_33863;var statearr_33867_33877 = state_33863__$1;(statearr_33867_33877[2] = null);
(statearr_33867_33877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6291__auto___33875))
;return ((function (switch__6276__auto__,c__6291__auto___33875){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_33871 = [null,null,null,null,null,null,null,null];(statearr_33871[0] = state_machine__6277__auto__);
(statearr_33871[1] = 1);
return statearr_33871;
});
var state_machine__6277__auto____1 = (function (state_33863){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_33863);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e33872){if((e33872 instanceof Object))
{var ex__6280__auto__ = e33872;var statearr_33873_33878 = state_33863;(statearr_33873_33878[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33879 = state_33863;
state_33863 = G__33879;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_33863){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_33863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___33875))
})();var state__6293__auto__ = (function (){var statearr_33874 = f__6292__auto__.call(null);(statearr_33874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___33875);
return statearr_33874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___33875))
);
cljs_om.core.ajax_results_chan = cljs.core.async.chan.call(null);
var c__6291__auto___33971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___33971){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___33971){
return (function (state_33936){var state_val_33937 = (state_33936[1]);if((state_val_33937 === 7))
{var inst_33893 = (state_33936[7]);var inst_33892 = (state_33936[8]);var inst_33894 = (state_33936[9]);var inst_33895 = (state_33936[10]);var inst_33900 = cljs.core._nth.call(null,inst_33893,inst_33895);var inst_33901 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_33900);var inst_33902 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_33901);var inst_33903 = (inst_33895 + 1);var tmp33938 = inst_33893;var tmp33939 = inst_33892;var tmp33940 = inst_33894;var inst_33892__$1 = tmp33939;var inst_33893__$1 = tmp33938;var inst_33894__$1 = tmp33940;var inst_33895__$1 = inst_33903;var state_33936__$1 = (function (){var statearr_33941 = state_33936;(statearr_33941[7] = inst_33893__$1);
(statearr_33941[8] = inst_33892__$1);
(statearr_33941[9] = inst_33894__$1);
(statearr_33941[11] = inst_33902);
(statearr_33941[10] = inst_33895__$1);
return statearr_33941;
})();var statearr_33942_33972 = state_33936__$1;(statearr_33942_33972[2] = null);
(statearr_33942_33972[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 1))
{var state_33936__$1 = state_33936;var statearr_33943_33973 = state_33936__$1;(statearr_33943_33973[2] = null);
(statearr_33943_33973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 4))
{var inst_33882 = (state_33936[2]);var inst_33883 = JSON.parse.call(null,inst_33882);var inst_33884 = cljs.core.js__GT_clj.call(null,inst_33883,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_33889 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_33884);var inst_33890 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_33889);var inst_33891 = cljs.core.seq.call(null,inst_33890);var inst_33892 = inst_33891;var inst_33893 = null;var inst_33894 = 0;var inst_33895 = 0;var state_33936__$1 = (function (){var statearr_33944 = state_33936;(statearr_33944[7] = inst_33893);
(statearr_33944[8] = inst_33892);
(statearr_33944[9] = inst_33894);
(statearr_33944[10] = inst_33895);
return statearr_33944;
})();var statearr_33945_33974 = state_33936__$1;(statearr_33945_33974[2] = null);
(statearr_33945_33974[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 15))
{var inst_33921 = (state_33936[2]);var state_33936__$1 = state_33936;var statearr_33946_33975 = state_33936__$1;(statearr_33946_33975[2] = inst_33921);
(statearr_33946_33975[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 13))
{var inst_33906 = (state_33936[12]);var inst_33910 = cljs.core.chunk_first.call(null,inst_33906);var inst_33911 = cljs.core.chunk_rest.call(null,inst_33906);var inst_33912 = cljs.core.count.call(null,inst_33910);var inst_33892 = inst_33911;var inst_33893 = inst_33910;var inst_33894 = inst_33912;var inst_33895 = 0;var state_33936__$1 = (function (){var statearr_33947 = state_33936;(statearr_33947[7] = inst_33893);
(statearr_33947[8] = inst_33892);
(statearr_33947[9] = inst_33894);
(statearr_33947[10] = inst_33895);
return statearr_33947;
})();var statearr_33948_33976 = state_33936__$1;(statearr_33948_33976[2] = null);
(statearr_33948_33976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 6))
{var inst_33928 = (state_33936[2]);var inst_33929 = cljs.core.async.timeout.call(null,1000);var state_33936__$1 = (function (){var statearr_33949 = state_33936;(statearr_33949[13] = inst_33928);
return statearr_33949;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33936__$1,16,inst_33929);
} else
{if((state_val_33937 === 3))
{var inst_33934 = (state_33936[2]);var state_33936__$1 = state_33936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33936__$1,inst_33934);
} else
{if((state_val_33937 === 12))
{var inst_33924 = (state_33936[2]);var state_33936__$1 = state_33936;var statearr_33950_33977 = state_33936__$1;(statearr_33950_33977[2] = inst_33924);
(statearr_33950_33977[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 2))
{var state_33936__$1 = state_33936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33936__$1,4,cljs_om.core.ajax_results_chan);
} else
{if((state_val_33937 === 11))
{var state_33936__$1 = state_33936;var statearr_33951_33978 = state_33936__$1;(statearr_33951_33978[2] = null);
(statearr_33951_33978[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 9))
{var inst_33926 = (state_33936[2]);var state_33936__$1 = state_33936;var statearr_33952_33979 = state_33936__$1;(statearr_33952_33979[2] = inst_33926);
(statearr_33952_33979[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 5))
{var inst_33894 = (state_33936[9]);var inst_33895 = (state_33936[10]);var inst_33897 = (inst_33895 < inst_33894);var inst_33898 = inst_33897;var state_33936__$1 = state_33936;if(cljs.core.truth_(inst_33898))
{var statearr_33953_33980 = state_33936__$1;(statearr_33953_33980[1] = 7);
} else
{var statearr_33954_33981 = state_33936__$1;(statearr_33954_33981[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 14))
{var inst_33906 = (state_33936[12]);var inst_33915 = cljs.core.first.call(null,inst_33906);var inst_33916 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_33915);var inst_33917 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_33916);var inst_33918 = cljs.core.next.call(null,inst_33906);var inst_33892 = inst_33918;var inst_33893 = null;var inst_33894 = 0;var inst_33895 = 0;var state_33936__$1 = (function (){var statearr_33955 = state_33936;(statearr_33955[7] = inst_33893);
(statearr_33955[8] = inst_33892);
(statearr_33955[9] = inst_33894);
(statearr_33955[10] = inst_33895);
(statearr_33955[14] = inst_33917);
return statearr_33955;
})();var statearr_33956_33982 = state_33936__$1;(statearr_33956_33982[2] = null);
(statearr_33956_33982[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 16))
{var inst_33931 = (state_33936[2]);var state_33936__$1 = (function (){var statearr_33957 = state_33936;(statearr_33957[15] = inst_33931);
return statearr_33957;
})();var statearr_33958_33983 = state_33936__$1;(statearr_33958_33983[2] = null);
(statearr_33958_33983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 10))
{var inst_33906 = (state_33936[12]);var inst_33908 = cljs.core.chunked_seq_QMARK_.call(null,inst_33906);var state_33936__$1 = state_33936;if(inst_33908)
{var statearr_33959_33984 = state_33936__$1;(statearr_33959_33984[1] = 13);
} else
{var statearr_33960_33985 = state_33936__$1;(statearr_33960_33985[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33937 === 8))
{var inst_33892 = (state_33936[8]);var inst_33906 = (state_33936[12]);var inst_33906__$1 = cljs.core.seq.call(null,inst_33892);var state_33936__$1 = (function (){var statearr_33961 = state_33936;(statearr_33961[12] = inst_33906__$1);
return statearr_33961;
})();if(inst_33906__$1)
{var statearr_33962_33986 = state_33936__$1;(statearr_33962_33986[1] = 10);
} else
{var statearr_33963_33987 = state_33936__$1;(statearr_33963_33987[1] = 11);
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
});})(c__6291__auto___33971))
;return ((function (switch__6276__auto__,c__6291__auto___33971){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_33967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33967[0] = state_machine__6277__auto__);
(statearr_33967[1] = 1);
return statearr_33967;
});
var state_machine__6277__auto____1 = (function (state_33936){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_33936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e33968){if((e33968 instanceof Object))
{var ex__6280__auto__ = e33968;var statearr_33969_33988 = state_33936;(statearr_33969_33988[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33989 = state_33936;
state_33936 = G__33989;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_33936){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_33936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___33971))
})();var state__6293__auto__ = (function (){var statearr_33970 = f__6292__auto__.call(null);(statearr_33970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___33971);
return statearr_33970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___33971))
);
cljs_om.tweets.start_search.call(null,cljs_om.core.app_state,cljs_om.util.search_hash.call(null),cljs_om.core.tweets_chan,cljs_om.core.ajax_results_chan);

//# sourceMappingURL=core.js.map