// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs_om.wordcount');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs_om.ajax');
goog.require('cljs.core.async');
goog.require('cljs_om.timeseries');
goog.require('goog.events');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('cljs_om.ajax');
goog.require('cljs_om.wordcount');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('cljs_om.timeseries');
goog.require('om.core');
goog.require('cljs_om.ui');
goog.require('goog.events');
goog.require('cljs_om.util');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.core.app_state = cljs.core.atom.call(null,cljs_om.util.initial_state.call(null));
om.core.root.call(null,cljs_om.ui.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
om.core.root.call(null,cljs_om.ui.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
om.core.root.call(null,cljs_om.ui.search_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("search")], null));
om.core.root.call(null,cljs_om.ui.sort_buttons_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("sort-buttons")], null));
cljs_om.core.add_to_tweets_map = (function add_to_tweets_map(tweets_map,tweet){return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tweets_map,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet))], null),cljs_om.util.format_tweet.call(null,tweet));
});
cljs_om.core.mod_sort_set = (function mod_sort_set(app_key,fun,set_key,val,rt){return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,app_key,fun.call(null,app_key.call(null,cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap.fromArray([set_key,val,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt)], true, false)));
});
cljs_om.core.add_rt_status = (function add_rt_status(tweet){if(cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))
{var state = cljs.core.deref.call(null,cljs_om.core.app_state);var rt = new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet);var rt_id = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt));var prev = rt_id.call(null,new cljs.core.Keyword(null,"retweets","retweets",708368263).cljs$core$IFn$_invoke$arity$1(state));var prev_rt_count = rt_id.call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(state));if(!((prev == null)))
{cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.disj,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(prev),rt);
cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.disj,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(prev),rt);
} else
{}
if(!((prev_rt_count == null)))
{cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.disj,new cljs.core.Keyword(null,"count","count",1108755585),prev_rt_count,rt);
} else
{}
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825),rt_id], null),(prev_rt_count + 1));
cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.conj,new cljs.core.Keyword(null,"count","count",1108755585),(prev_rt_count + 1),rt);
if((new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(rt) > new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(prev)))
{cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"retweets","retweets",708368263),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt))], null),cljs_om.util.format_tweet.call(null,rt));
} else
{cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"retweets","retweets",708368263),new cljs.core.Keyword(null,"latest","latest",4198990585)], null),rt);
}
cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.conj,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(rt),rt);
return cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.conj,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(rt),rt);
} else
{return null;
}
});
cljs_om.core.cloud_elem = document.getElementById("wordCloud");
cljs_om.core.cloud_w = (cljs_om.core.cloud_elem["offsetWidth"]);
cljs_om.core.word_cloud = BirdWatch.WordCloud(cljs_om.core.cloud_w,(cljs_om.core.cloud_w * 0.7),250,(function (e){return null;
}),"#wordCloud");
setInterval((function (){return cljs_om.timeseries.update.call(null,cljs_om.timeseries.graph_with_legend);
}),5000);
cljs_om.core.add_tweet = (function add_tweet(tweet){var state = cljs.core.deref.call(null,cljs_om.core.app_state);cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(state) + 1));
cljs_om.core.add_to_tweets_map.call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),tweet);
cljs_om.core.add_rt_status.call(null,tweet);
cljs_om.wordcount.process_tweet.call(null,cljs_om.core.app_state,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)], null)));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)));
return cljs_om.core.word_cloud.redraw(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,250,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs_om.core.tweets_chan = cljs.core.async.chan.call(null,100000);
cljs_om.core.prev_tweets_chan = cljs.core.async.chan.call(null,100000);
cljs_om.core.combined_tweets_chan = cljs.core.async.chan.call(null,1);
var c__6291__auto___25335 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___25335){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___25335){
return (function (state_25322){var state_val_25323 = (state_25322[1]);if((state_val_25323 === 5))
{var inst_25317 = (state_25322[2]);var state_25322__$1 = (function (){var statearr_25324 = state_25322;(statearr_25324[7] = inst_25317);
return statearr_25324;
})();var statearr_25325_25336 = state_25322__$1;(statearr_25325_25336[2] = null);
(statearr_25325_25336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25323 === 4))
{var inst_25313 = (state_25322[2]);var inst_25314 = cljs.core.async.put_BANG_.call(null,cljs_om.core.combined_tweets_chan,inst_25313);var inst_25315 = cljs.core.async.timeout.call(null,0);var state_25322__$1 = (function (){var statearr_25326 = state_25322;(statearr_25326[8] = inst_25314);
return statearr_25326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25322__$1,5,inst_25315);
} else
{if((state_val_25323 === 3))
{var inst_25320 = (state_25322[2]);var state_25322__$1 = state_25322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25322__$1,inst_25320);
} else
{if((state_val_25323 === 2))
{var state_25322__$1 = state_25322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25322__$1,4,cljs_om.core.tweets_chan);
} else
{if((state_val_25323 === 1))
{var state_25322__$1 = state_25322;var statearr_25327_25337 = state_25322__$1;(statearr_25327_25337[2] = null);
(statearr_25327_25337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto___25335))
;return ((function (switch__6276__auto__,c__6291__auto___25335){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_25331 = [null,null,null,null,null,null,null,null,null];(statearr_25331[0] = state_machine__6277__auto__);
(statearr_25331[1] = 1);
return statearr_25331;
});
var state_machine__6277__auto____1 = (function (state_25322){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_25322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e25332){if((e25332 instanceof Object))
{var ex__6280__auto__ = e25332;var statearr_25333_25338 = state_25322;(statearr_25333_25338[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25339 = state_25322;
state_25322 = G__25339;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_25322){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_25322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___25335))
})();var state__6293__auto__ = (function (){var statearr_25334 = f__6292__auto__.call(null);(statearr_25334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___25335);
return statearr_25334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___25335))
);
var c__6291__auto___25364 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___25364){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___25364){
return (function (state_25351){var state_val_25352 = (state_25351[1]);if((state_val_25352 === 5))
{var inst_25346 = (state_25351[2]);var state_25351__$1 = (function (){var statearr_25353 = state_25351;(statearr_25353[7] = inst_25346);
return statearr_25353;
})();var statearr_25354_25365 = state_25351__$1;(statearr_25354_25365[2] = null);
(statearr_25354_25365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25352 === 4))
{var inst_25342 = (state_25351[2]);var inst_25343 = cljs.core.async.put_BANG_.call(null,cljs_om.core.combined_tweets_chan,inst_25342);var inst_25344 = cljs.core.async.timeout.call(null,10);var state_25351__$1 = (function (){var statearr_25355 = state_25351;(statearr_25355[8] = inst_25343);
return statearr_25355;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,5,inst_25344);
} else
{if((state_val_25352 === 3))
{var inst_25349 = (state_25351[2]);var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25351__$1,inst_25349);
} else
{if((state_val_25352 === 2))
{var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,4,cljs_om.core.prev_tweets_chan);
} else
{if((state_val_25352 === 1))
{var state_25351__$1 = state_25351;var statearr_25356_25366 = state_25351__$1;(statearr_25356_25366[2] = null);
(statearr_25356_25366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6291__auto___25364))
;return ((function (switch__6276__auto__,c__6291__auto___25364){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_25360 = [null,null,null,null,null,null,null,null,null];(statearr_25360[0] = state_machine__6277__auto__);
(statearr_25360[1] = 1);
return statearr_25360;
});
var state_machine__6277__auto____1 = (function (state_25351){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_25351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object))
{var ex__6280__auto__ = e25361;var statearr_25362_25367 = state_25351;(statearr_25362_25367[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25368 = state_25351;
state_25351 = G__25368;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___25364))
})();var state__6293__auto__ = (function (){var statearr_25363 = f__6292__auto__.call(null);(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___25364);
return statearr_25363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___25364))
);
var c__6291__auto___25389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___25389){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___25389){
return (function (state_25377){var state_val_25378 = (state_25377[1]);if((state_val_25378 === 4))
{var inst_25371 = (state_25377[2]);var inst_25372 = cljs_om.core.add_tweet.call(null,inst_25371);var state_25377__$1 = (function (){var statearr_25379 = state_25377;(statearr_25379[7] = inst_25372);
return statearr_25379;
})();var statearr_25380_25390 = state_25377__$1;(statearr_25380_25390[2] = null);
(statearr_25380_25390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25378 === 3))
{var inst_25375 = (state_25377[2]);var state_25377__$1 = state_25377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25377__$1,inst_25375);
} else
{if((state_val_25378 === 2))
{var state_25377__$1 = state_25377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25377__$1,4,cljs_om.core.combined_tweets_chan);
} else
{if((state_val_25378 === 1))
{var state_25377__$1 = state_25377;var statearr_25381_25391 = state_25377__$1;(statearr_25381_25391[2] = null);
(statearr_25381_25391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6291__auto___25389))
;return ((function (switch__6276__auto__,c__6291__auto___25389){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_25385 = [null,null,null,null,null,null,null,null];(statearr_25385[0] = state_machine__6277__auto__);
(statearr_25385[1] = 1);
return statearr_25385;
});
var state_machine__6277__auto____1 = (function (state_25377){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_25377);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e25386){if((e25386 instanceof Object))
{var ex__6280__auto__ = e25386;var statearr_25387_25392 = state_25377;(statearr_25387_25392[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25377);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25393 = state_25377;
state_25377 = G__25393;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___25389))
})();var state__6293__auto__ = (function (){var statearr_25388 = f__6292__auto__.call(null);(statearr_25388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___25389);
return statearr_25388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___25389))
);
cljs_om.core.ajax_results_chan = cljs.core.async.chan.call(null);
var c__6291__auto___25485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6291__auto___25485){
return (function (){var f__6292__auto__ = (function (){var switch__6276__auto__ = ((function (c__6291__auto___25485){
return (function (state_25450){var state_val_25451 = (state_25450[1]);if((state_val_25451 === 7))
{var inst_25406 = (state_25450[7]);var inst_25408 = (state_25450[8]);var inst_25409 = (state_25450[9]);var inst_25407 = (state_25450[10]);var inst_25414 = cljs.core._nth.call(null,inst_25407,inst_25409);var inst_25415 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_25414);var inst_25416 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_25415);var inst_25417 = (inst_25409 + 1);var tmp25452 = inst_25406;var tmp25453 = inst_25408;var tmp25454 = inst_25407;var inst_25406__$1 = tmp25452;var inst_25407__$1 = tmp25454;var inst_25408__$1 = tmp25453;var inst_25409__$1 = inst_25417;var state_25450__$1 = (function (){var statearr_25455 = state_25450;(statearr_25455[7] = inst_25406__$1);
(statearr_25455[8] = inst_25408__$1);
(statearr_25455[11] = inst_25416);
(statearr_25455[9] = inst_25409__$1);
(statearr_25455[10] = inst_25407__$1);
return statearr_25455;
})();var statearr_25456_25486 = state_25450__$1;(statearr_25456_25486[2] = null);
(statearr_25456_25486[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 1))
{var state_25450__$1 = state_25450;var statearr_25457_25487 = state_25450__$1;(statearr_25457_25487[2] = null);
(statearr_25457_25487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 4))
{var inst_25396 = (state_25450[2]);var inst_25397 = JSON.parse.call(null,inst_25396);var inst_25398 = cljs.core.js__GT_clj.call(null,inst_25397,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_25403 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_25398);var inst_25404 = new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(inst_25403);var inst_25405 = cljs.core.seq.call(null,inst_25404);var inst_25406 = inst_25405;var inst_25407 = null;var inst_25408 = 0;var inst_25409 = 0;var state_25450__$1 = (function (){var statearr_25458 = state_25450;(statearr_25458[7] = inst_25406);
(statearr_25458[8] = inst_25408);
(statearr_25458[9] = inst_25409);
(statearr_25458[10] = inst_25407);
return statearr_25458;
})();var statearr_25459_25488 = state_25450__$1;(statearr_25459_25488[2] = null);
(statearr_25459_25488[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 15))
{var inst_25435 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25460_25489 = state_25450__$1;(statearr_25460_25489[2] = inst_25435);
(statearr_25460_25489[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 13))
{var inst_25420 = (state_25450[12]);var inst_25424 = cljs.core.chunk_first.call(null,inst_25420);var inst_25425 = cljs.core.chunk_rest.call(null,inst_25420);var inst_25426 = cljs.core.count.call(null,inst_25424);var inst_25406 = inst_25425;var inst_25407 = inst_25424;var inst_25408 = inst_25426;var inst_25409 = 0;var state_25450__$1 = (function (){var statearr_25461 = state_25450;(statearr_25461[7] = inst_25406);
(statearr_25461[8] = inst_25408);
(statearr_25461[9] = inst_25409);
(statearr_25461[10] = inst_25407);
return statearr_25461;
})();var statearr_25462_25490 = state_25450__$1;(statearr_25462_25490[2] = null);
(statearr_25462_25490[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 6))
{var inst_25442 = (state_25450[2]);var inst_25443 = cljs.core.async.timeout.call(null,1000);var state_25450__$1 = (function (){var statearr_25463 = state_25450;(statearr_25463[13] = inst_25442);
return statearr_25463;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25450__$1,16,inst_25443);
} else
{if((state_val_25451 === 3))
{var inst_25448 = (state_25450[2]);var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25450__$1,inst_25448);
} else
{if((state_val_25451 === 12))
{var inst_25438 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25464_25491 = state_25450__$1;(statearr_25464_25491[2] = inst_25438);
(statearr_25464_25491[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 2))
{var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25450__$1,4,cljs_om.core.ajax_results_chan);
} else
{if((state_val_25451 === 11))
{var state_25450__$1 = state_25450;var statearr_25465_25492 = state_25450__$1;(statearr_25465_25492[2] = null);
(statearr_25465_25492[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 9))
{var inst_25440 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25466_25493 = state_25450__$1;(statearr_25466_25493[2] = inst_25440);
(statearr_25466_25493[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 5))
{var inst_25408 = (state_25450[8]);var inst_25409 = (state_25450[9]);var inst_25411 = (inst_25409 < inst_25408);var inst_25412 = inst_25411;var state_25450__$1 = state_25450;if(cljs.core.truth_(inst_25412))
{var statearr_25467_25494 = state_25450__$1;(statearr_25467_25494[1] = 7);
} else
{var statearr_25468_25495 = state_25450__$1;(statearr_25468_25495[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 14))
{var inst_25420 = (state_25450[12]);var inst_25429 = cljs.core.first.call(null,inst_25420);var inst_25430 = new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(inst_25429);var inst_25431 = cljs.core.async.put_BANG_.call(null,cljs_om.core.prev_tweets_chan,inst_25430);var inst_25432 = cljs.core.next.call(null,inst_25420);var inst_25406 = inst_25432;var inst_25407 = null;var inst_25408 = 0;var inst_25409 = 0;var state_25450__$1 = (function (){var statearr_25469 = state_25450;(statearr_25469[7] = inst_25406);
(statearr_25469[14] = inst_25431);
(statearr_25469[8] = inst_25408);
(statearr_25469[9] = inst_25409);
(statearr_25469[10] = inst_25407);
return statearr_25469;
})();var statearr_25470_25496 = state_25450__$1;(statearr_25470_25496[2] = null);
(statearr_25470_25496[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 16))
{var inst_25445 = (state_25450[2]);var state_25450__$1 = (function (){var statearr_25471 = state_25450;(statearr_25471[15] = inst_25445);
return statearr_25471;
})();var statearr_25472_25497 = state_25450__$1;(statearr_25472_25497[2] = null);
(statearr_25472_25497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 10))
{var inst_25420 = (state_25450[12]);var inst_25422 = cljs.core.chunked_seq_QMARK_.call(null,inst_25420);var state_25450__$1 = state_25450;if(inst_25422)
{var statearr_25473_25498 = state_25450__$1;(statearr_25473_25498[1] = 13);
} else
{var statearr_25474_25499 = state_25450__$1;(statearr_25474_25499[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25451 === 8))
{var inst_25406 = (state_25450[7]);var inst_25420 = (state_25450[12]);var inst_25420__$1 = cljs.core.seq.call(null,inst_25406);var state_25450__$1 = (function (){var statearr_25475 = state_25450;(statearr_25475[12] = inst_25420__$1);
return statearr_25475;
})();if(inst_25420__$1)
{var statearr_25476_25500 = state_25450__$1;(statearr_25476_25500[1] = 10);
} else
{var statearr_25477_25501 = state_25450__$1;(statearr_25477_25501[1] = 11);
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
});})(c__6291__auto___25485))
;return ((function (switch__6276__auto__,c__6291__auto___25485){
return (function() {
var state_machine__6277__auto__ = null;
var state_machine__6277__auto____0 = (function (){var statearr_25481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25481[0] = state_machine__6277__auto__);
(statearr_25481[1] = 1);
return statearr_25481;
});
var state_machine__6277__auto____1 = (function (state_25450){while(true){
var ret_value__6278__auto__ = (function (){try{while(true){
var result__6279__auto__ = switch__6276__auto__.call(null,state_25450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6279__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6279__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object))
{var ex__6280__auto__ = e25482;var statearr_25483_25502 = state_25450;(statearr_25483_25502[5] = ex__6280__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25503 = state_25450;
state_25450 = G__25503;
continue;
}
} else
{return ret_value__6278__auto__;
}
break;
}
});
state_machine__6277__auto__ = function(state_25450){
switch(arguments.length){
case 0:
return state_machine__6277__auto____0.call(this);
case 1:
return state_machine__6277__auto____1.call(this,state_25450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6277__auto____0;
state_machine__6277__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6277__auto____1;
return state_machine__6277__auto__;
})()
;})(switch__6276__auto__,c__6291__auto___25485))
})();var state__6293__auto__ = (function (){var statearr_25484 = f__6292__auto__.call(null);(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6291__auto___25485);
return statearr_25484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6293__auto__);
});})(c__6291__auto___25485))
);
cljs_om.core.receive_sse = (function receive_sse(e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs.core.async.put_BANG_.call(null,cljs_om.core.tweets_chan,tweet);
});
cljs_om.core.start_search = (function start_search(search){var s = ((cljs.core._EQ_.call(null,search,""))?"*":search);if(!((new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) == null)))
{new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)).close();
} else
{}
cljs.core.reset_BANG_.call(null,cljs_om.core.app_state,cljs_om.util.initial_state.call(null));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search","search",4402534682),s);
(window["location"]["hash"] = encodeURIComponent(s));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stream","stream",4416881394),(new EventSource([cljs.core.str("/tweetFeed?q="),cljs.core.str(s)].join(''))));
new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)).addEventListener("message",((function (s){
return (function (e){return cljs_om.core.receive_sse.call(null,e);
});})(s))
,false);
cljs_om.ajax.prev_search.call(null,"*",500,0,cljs_om.core.ajax_results_chan);
cljs_om.ajax.prev_search.call(null,"*",500,500,cljs_om.core.ajax_results_chan);
cljs_om.ajax.prev_search.call(null,"*",500,1000,cljs_om.core.ajax_results_chan);
cljs_om.ajax.prev_search.call(null,"*",500,1500,cljs_om.core.ajax_results_chan);
return cljs_om.ajax.prev_search.call(null,"*",500,2000,cljs_om.core.ajax_results_chan);
});
cljs_om.core.start_search.call(null,cljs_om.util.search_hash.call(null));

//# sourceMappingURL=core.js.map