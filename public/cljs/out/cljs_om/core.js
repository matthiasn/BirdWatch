// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs_om.wordcount');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('cljs_om.wordcount');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_om.ui');
goog.require('cljs_om.util');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.core.sort_by = (function sort_by(key_a,key_b){return (function (x,y){if(!(cljs.core._EQ_.call(null,key_a.call(null,x),key_a.call(null,y))))
{return (key_a.call(null,x) > key_a.call(null,y));
} else
{return (key_b.call(null,x) > key_b.call(null,y));
}
});
});
cljs_om.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"by-id","by-id",1108060611),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"words","words",1127222811),new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959),new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"stream","stream",4416881394),new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),new cljs.core.Keyword(null,"sorted","sorted",4412278319),new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825),new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003)],[cljs.core.sorted_set_by.call(null,cljs.core._GT_),cljs.core.sorted_set_by.call(null,cljs_om.core.sort_by.call(null,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"id","id",1013907597))),10,cljs.core.PersistentArrayMap.EMPTY,cljs.core.sorted_set_by.call(null,cljs_om.core.sort_by.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"id","id",1013907597))),cljs.core.sorted_set_by.call(null,cljs_om.core.sort_by.call(null,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"key","key",1014010321))),cljs.core.sorted_set_by.call(null,cljs_om.core.sort_by.call(null,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"id","id",1013907597))),"*",null,cljs.core.sorted_set_by.call(null,cljs_om.core.sort_by.call(null,new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"id","id",1013907597))),new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),0,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY]);
cljs_om.core.app_state = cljs.core.atom.call(null,cljs_om.core.initial_state);
om.core.root.call(null,cljs_om.ui.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
om.core.root.call(null,cljs_om.ui.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
om.core.root.call(null,cljs_om.ui.search_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("search")], null));
om.core.root.call(null,cljs_om.ui.sort_buttons_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("sort-buttons")], null));
cljs_om.core.add_to_tweets_map = (function add_to_tweets_map(tweet){return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet))], null),cljs_om.util.format_tweet.call(null,tweet));
});
cljs_om.core.mod_sort_set = (function mod_sort_set(app_key,fun,set_key,val,rt){return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,app_key,fun.call(null,app_key.call(null,cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap.fromArray([set_key,val,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt)], true, false)));
});
cljs_om.core.add_rt_status = (function add_rt_status(tweet){if(cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))
{var rt = new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet);var rt_id = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt));var prev = rt_id.call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)));var prev_rt_count = rt_id.call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)));if(!((prev == null)))
{cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.disj,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(prev),rt);
cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.disj,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(prev),rt);
} else
{}
if(!((rt == null)))
{if(!((prev_rt_count == null)))
{cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.disj,new cljs.core.Keyword(null,"count","count",1108755585),prev_rt_count,rt);
} else
{}
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825),rt_id], null),(rt_id.call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state))) + 1));
cljs_om.core.mod_sort_set.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.conj,new cljs.core.Keyword(null,"count","count",1108755585),rt_id.call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state))),rt);
} else
{}
cljs_om.core.add_to_tweets_map.call(null,rt);
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
cljs_om.core.ts_elem = document.getElementById("timeseries1");
cljs_om.core.ts_w = (cljs_om.core.ts_elem["offsetWidth"]);
cljs_om.core.random_data = (function random_data(){var series_data = [[]];var random = (new Rickshaw.Fixtures.RandomData(150));var n__4329__auto___17586 = 100;var i_17587 = 0;while(true){
if((i_17587 < n__4329__auto___17586))
{random.addData(series_data);
{
var G__17588 = (i_17587 + 1);
i_17587 = G__17588;
continue;
}
} else
{}
break;
}
return series_data;
});
cljs_om.core.graph_with_legend = (function (){var series_data = [[]];var random = (new Rickshaw.Fixtures.RandomData(150));var n__4329__auto___17590 = 10;var i_17591 = 0;while(true){
if((i_17591 < n__4329__auto___17590))
{random.addData(series_data);
{
var G__17592 = (i_17591 + 1);
i_17591 = G__17592;
continue;
}
} else
{}
break;
}
var G__17589 = (new Rickshaw.Graph(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",3646034542),cljs_om.core.ts_elem,new cljs.core.Keyword(null,"renderer","renderer",519058485),"bar",new cljs.core.Keyword(null,"width","width",1127031096),cljs_om.core.ts_w,new cljs.core.Keyword(null,"height","height",4087841945),100,new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),"steelblue",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.nth.call(null,series_data,0),new cljs.core.Keyword(null,"name","name",1017277949),"Tweets"], null)], null)], null))));G__17589.render();
return G__17589;
})();
cljs_om.core.update = (function update(chart){(cljs_om.core.graph_with_legend["series"]["0"]["data"] = cljs.core.nth.call(null,cljs_om.core.random_data.call(null),0));
return chart.update();
});
setInterval((function (){return cljs_om.core.update.call(null,cljs_om.core.graph_with_legend);
}),5000);
cljs_om.core.add_tweet = (function add_tweet(tweet){cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) + 1));
cljs_om.core.add_to_tweets_map.call(null,tweet);
cljs_om.core.add_rt_status.call(null,tweet);
cljs_om.wordcount.process_tweet.call(null,cljs_om.core.app_state,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)], null)));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)));
cljs_om.core.word_cloud.redraw(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,250,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)))));
return BirdWatch.updateBarchart(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,25,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)))));
});
cljs_om.core.tweet_chan = cljs.core.async.chan.call(null);
var c__6889__auto___17617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6889__auto___17617){
return (function (){var f__6890__auto__ = (function (){var switch__6825__auto__ = ((function (c__6889__auto___17617){
return (function (state_17604){var state_val_17605 = (state_17604[1]);if((state_val_17605 === 5))
{var inst_17599 = (state_17604[2]);var state_17604__$1 = (function (){var statearr_17606 = state_17604;(statearr_17606[7] = inst_17599);
return statearr_17606;
})();var statearr_17607_17618 = state_17604__$1;(statearr_17607_17618[2] = null);
(statearr_17607_17618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17605 === 4))
{var inst_17595 = (state_17604[2]);var inst_17596 = cljs_om.core.add_tweet.call(null,inst_17595);var inst_17597 = cljs.core.async.timeout.call(null,0);var state_17604__$1 = (function (){var statearr_17608 = state_17604;(statearr_17608[8] = inst_17596);
return statearr_17608;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17604__$1,5,inst_17597);
} else
{if((state_val_17605 === 3))
{var inst_17602 = (state_17604[2]);var state_17604__$1 = state_17604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17604__$1,inst_17602);
} else
{if((state_val_17605 === 2))
{var state_17604__$1 = state_17604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17604__$1,4,cljs_om.core.tweet_chan);
} else
{if((state_val_17605 === 1))
{var state_17604__$1 = state_17604;var statearr_17609_17619 = state_17604__$1;(statearr_17609_17619[2] = null);
(statearr_17609_17619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6889__auto___17617))
;return ((function (switch__6825__auto__,c__6889__auto___17617){
return (function() {
var state_machine__6826__auto__ = null;
var state_machine__6826__auto____0 = (function (){var statearr_17613 = [null,null,null,null,null,null,null,null,null];(statearr_17613[0] = state_machine__6826__auto__);
(statearr_17613[1] = 1);
return statearr_17613;
});
var state_machine__6826__auto____1 = (function (state_17604){while(true){
var ret_value__6827__auto__ = (function (){try{while(true){
var result__6828__auto__ = switch__6825__auto__.call(null,state_17604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6828__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6828__auto__;
}
break;
}
}catch (e17614){if((e17614 instanceof Object))
{var ex__6829__auto__ = e17614;var statearr_17615_17620 = state_17604;(statearr_17615_17620[5] = ex__6829__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6827__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17621 = state_17604;
state_17604 = G__17621;
continue;
}
} else
{return ret_value__6827__auto__;
}
break;
}
});
state_machine__6826__auto__ = function(state_17604){
switch(arguments.length){
case 0:
return state_machine__6826__auto____0.call(this);
case 1:
return state_machine__6826__auto____1.call(this,state_17604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6826__auto____0;
state_machine__6826__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6826__auto____1;
return state_machine__6826__auto__;
})()
;})(switch__6825__auto__,c__6889__auto___17617))
})();var state__6891__auto__ = (function (){var statearr_17616 = f__6890__auto__.call(null);(statearr_17616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6889__auto___17617);
return statearr_17616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6891__auto__);
});})(c__6889__auto___17617))
);
cljs_om.core.receive_sse = (function receive_sse(e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs.core.async.put_BANG_.call(null,cljs_om.core.tweet_chan,tweet);
});
cljs_om.core.start_search = (function start_search(search){var s = ((cljs.core._EQ_.call(null,search,""))?"*":search);if(!((new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) == null)))
{new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)).close();
} else
{}
cljs.core.reset_BANG_.call(null,cljs_om.core.app_state,cljs_om.core.initial_state);
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search","search",4402534682),s);
(window["location"]["hash"] = encodeURIComponent(s));
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stream","stream",4416881394),(new EventSource([cljs.core.str("/tweetFeed?q="),cljs.core.str(s)].join(''))));
return new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)).addEventListener("message",((function (s){
return (function (e){return cljs_om.core.receive_sse.call(null,e);
});})(s))
,false);
});
cljs_om.core.start_search.call(null,cljs.core.subs.call(null,decodeURIComponent((window["location"]["hash"])),2));
cljs_om.core.error_handler = (function error_handler(err){return cljs.core.print.call(null,err);
});
cljs_om.core.handler = (function handler(payload){var seq__17627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hits","hits",1017107122).cljs$core$IFn$_invoke$arity$1(payload)));var chunk__17628 = null;var count__17629 = 0;var i__17630 = 0;while(true){
if((i__17630 < count__17629))
{var t = cljs.core._nth.call(null,chunk__17628,i__17630);cljs.core.async.put_BANG_.call(null,cljs_om.core.tweet_chan,new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(t));
{
var G__17631 = seq__17627;
var G__17632 = chunk__17628;
var G__17633 = count__17629;
var G__17634 = (i__17630 + 1);
seq__17627 = G__17631;
chunk__17628 = G__17632;
count__17629 = G__17633;
i__17630 = G__17634;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17627);if(temp__4126__auto__)
{var seq__17627__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17627__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__17627__$1);{
var G__17635 = cljs.core.chunk_rest.call(null,seq__17627__$1);
var G__17636 = c__4229__auto__;
var G__17637 = cljs.core.count.call(null,c__4229__auto__);
var G__17638 = 0;
seq__17627 = G__17635;
chunk__17628 = G__17636;
count__17629 = G__17637;
i__17630 = G__17638;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__17627__$1);cljs.core.async.put_BANG_.call(null,cljs_om.core.tweet_chan,new cljs.core.Keyword(null,"_source","_source",2825869484).cljs$core$IFn$_invoke$arity$1(t));
{
var G__17639 = cljs.core.next.call(null,seq__17627__$1);
var G__17640 = null;
var G__17641 = 0;
var G__17642 = 0;
seq__17627 = G__17639;
chunk__17628 = G__17640;
count__17629 = G__17641;
i__17630 = G__17642;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs_om.core.query = (function query(query_string,size,from){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query_string","query_string",2609202906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default_field","default_field",2318031086),"text",new cljs.core.Keyword(null,"default_operator","default_operator",4706070612),"AND",new cljs.core.Keyword(null,"query","query",1121848378),[cljs.core.str("("),cljs.core.str(query_string),cljs.core.str(") AND lang:en")].join('')], null)], null),new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"desc"], null)], null);
});
cljs_om.core.prev_search = (function prev_search(query_string,size,from){return ajax.core.POST.call(null,"/tweets/search",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",4313443576),cljs_om.core.query.call(null,query_string,size,from),new cljs.core.Keyword(null,"handler","handler",1706707644),cljs_om.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),cljs_om.core.error_handler,new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154),new cljs.core.Keyword(null,"response-format","response-format",4250805877),new cljs.core.Keyword(null,"json","json",1017176154),new cljs.core.Keyword(null,"keywords?","keywords?",4346628423),true], null));
});
cljs_om.core.prev_search.call(null,"*",500,0);
cljs_om.core.prev_search.call(null,"*",500,500);

//# sourceMappingURL=core.js.map