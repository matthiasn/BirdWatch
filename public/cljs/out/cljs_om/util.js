// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cljs_om.util.search_hash = (function search_hash(){return cljs.core.subs.call(null,decodeURIComponent((window["location"]["hash"])),2);
});
cljs_om.util.number_format = (function number_format(number){if((number < 1000))
{return [cljs.core.str(number)].join('');
} else
{if((number < 100000))
{return [cljs.core.str((Math.round((number / 100)) / 10)),cljs.core.str("K")].join('');
} else
{if((number < 1000000))
{return [cljs.core.str(Math.round((number / 1000))),cljs.core.str("K")].join('');
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return [cljs.core.str((Math.round((number / 100000)) / 10)),cljs.core.str("M")].join('');
} else
{return null;
}
}
}
}
});
cljs_om.util.from_now = (function from_now(date){var time_string = (new moment(date)).fromNow(true);if(cljs.core._EQ_.call(null,time_string,"a few seconds"))
{return "just now";
} else
{return time_string;
}
});
cljs_om.util.url_replacer = (function url_replacer(acc,entity){return clojure.string.replace.call(null,acc,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(entity),[cljs.core.str("<a href='"),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(entity)),cljs.core.str("' target='_blank'>"),cljs.core.str(new cljs.core.Keyword(null,"display_url","display_url",2728579044).cljs$core$IFn$_invoke$arity$1(entity)),cljs.core.str("</a>")].join(''));
});
cljs_om.util.hashtags_replacer = (function hashtags_replacer(acc,entity){var hashtag = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(entity);return clojure.string.replace.call(null,acc,[cljs.core.str("#"),cljs.core.str(hashtag)].join(''),[cljs.core.str("<a href='https://twitter.com/search?q=%23"),cljs.core.str(hashtag),cljs.core.str("' target='_blank'>#"),cljs.core.str(hashtag),cljs.core.str("</a>")].join(''));
});
cljs_om.util.mentions_replacer = (function mentions_replacer(acc,entity){var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(entity);return clojure.string.replace.call(null,acc,[cljs.core.str("@"),cljs.core.str(screen_name)].join(''),[cljs.core.str("<a href='http://www.twitter.com/"),cljs.core.str(screen_name),cljs.core.str("' target='_blank'>@"),cljs.core.str(screen_name),cljs.core.str("</a>")].join(''));
});
cljs_om.util.reducer = (function reducer(text,coll,fun){return cljs.core.reduce.call(null,fun,text,coll);
});
cljs_om.util.format_tweet = (function format_tweet(tweet){return cljs.core.assoc.call(null,tweet,new cljs.core.Keyword(null,"html-text","html-text",3410453889),clojure.string.replace.call(null,cljs_om.util.reducer.call(null,cljs_om.util.reducer.call(null,cljs_om.util.reducer.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet),new cljs.core.Keyword(null,"urls","urls",1017502806).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.util.url_replacer),new cljs.core.Keyword(null,"user_mentions","user_mentions",4755352879).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.util.mentions_replacer),new cljs.core.Keyword(null,"hashtags","hashtags",1163047321).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.util.hashtags_replacer),"RT ","<strong>RT </strong>"));
});
cljs_om.util.entity_count = (function entity_count(tweet,sym,s){var rt_id = ((cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))?new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet)):new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet));var count = sym.call(null,cljs.core.keyword.call(null,rt_id).call(null,new cljs.core.Keyword(null,"retweets","retweets",708368263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state))));if(!((count == null)))
{return [cljs.core.str(cljs_om.util.number_format.call(null,count)),cljs.core.str(s)].join('');
} else
{return "";
}
});
cljs_om.util.rt_count  = (function rt_count (tweet){return cljs_om.util.entity_count.call(null,tweet,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736)," RT | ");
});
cljs_om.util.fav_count  = (function fav_count (tweet){return cljs_om.util.entity_count.call(null,tweet,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678)," fav");
});
cljs_om.util.rt_count_since_startup = (function rt_count_since_startup(tweet){var t = ((cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))?new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet):tweet);var count = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(t)).call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)));if((count > 0))
{return [cljs.core.str(cljs_om.util.number_format.call(null,count)),cljs.core.str(" RT since startup | ")].join('');
} else
{return "";
}
});
cljs_om.util.sorted_by = (function sorted_by(key_a,key_b){return (function (x,y){if(!(cljs.core._EQ_.call(null,key_a.call(null,x),key_a.call(null,y))))
{return (key_a.call(null,x) > key_a.call(null,y));
} else
{return (key_b.call(null,x) > key_b.call(null,y));
}
});
});
cljs_om.util.initial_state = (function initial_state(){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"by-id","by-id",1108060611),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"words","words",1127222811),new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959),new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"stream","stream",4416881394),new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),new cljs.core.Keyword(null,"sorted","sorted",4412278319),new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825),new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),new cljs.core.Keyword(null,"retweets","retweets",708368263)],[cljs.core.sorted_set_by.call(null,cljs.core._GT_),cljs.core.sorted_set_by.call(null,cljs_om.util.sorted_by.call(null,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"id","id",1013907597))),10,cljs.core.PersistentArrayMap.EMPTY,cljs.core.sorted_set_by.call(null,cljs_om.util.sorted_by.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"id","id",1013907597))),cljs.core.sorted_set_by.call(null,cljs_om.util.sorted_by.call(null,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"key","key",1014010321))),cljs.core.sorted_set_by.call(null,cljs_om.util.sorted_by.call(null,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"id","id",1013907597))),"*",null,cljs.core.sorted_set_by.call(null,cljs_om.util.sorted_by.call(null,new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"id","id",1013907597))),new cljs.core.Keyword(null,"by-id","by-id",1108060611),0,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY]);
});
cljs.core.List.EMPTY;

//# sourceMappingURL=util.js.map