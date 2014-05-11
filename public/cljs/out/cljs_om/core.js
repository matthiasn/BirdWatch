// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('cljs_om.ui');
goog.require('cljs_om.ui');
goog.require('cljs_om.util');
goog.require('cljs_om.util');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"count","count",1108755585),0,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs.core.sorted_set_by.call(null,(function (x,y){return (new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(x) > new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(y));
})),new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.sorted_set_by.call(null,(function (x,y){return (new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(x) > new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(y));
})),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.sorted_set_by.call(null,(function (x,y){return (new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(x) > new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(y));
})),new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs.core.sorted_set_by.call(null,cljs.core._GT_),new cljs.core.Keyword(null,"n","n",1013904352),5,new cljs.core.Keyword(null,"sorted","sorted",4412278319),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)], null));
om.core.root.call(null,cljs_om.ui.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
om.core.root.call(null,cljs_om.ui.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
cljs_om.core.add_to_tweets_map = (function add_to_tweets_map(tweet){return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet))], null),cljs_om.util.format_tweet.call(null,tweet));
});
cljs_om.core.add_rt_status = (function add_rt_status(tweet){if(cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))
{var rt = new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet);cljs_om.core.add_to_tweets_map.call(null,rt);
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(rt),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt)], null)));
return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(rt),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt)], null)));
} else
{return null;
}
});
cljs_om.core.add_tweet = (function add_tweet(tweet){cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) + 1));
cljs_om.core.add_to_tweets_map.call(null,tweet);
cljs_om.core.add_rt_status.call(null,tweet);
cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)], null)));
return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)));
});
cljs_om.core.receive_sse = (function receive_sse(e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs_om.core.add_tweet.call(null,tweet);
});
cljs_om.core.stream = (new EventSource("/tweetFeed?q=*"));
cljs_om.core.stream.addEventListener("message",(function (e){return cljs_om.core.receive_sse.call(null,e);
}),false);

//# sourceMappingURL=core.js.map