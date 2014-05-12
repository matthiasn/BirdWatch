// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_om.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
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
cljs_om.util.entity_count = (function entity_count(tweet,sym,s){return [cljs.core.str(cljs_om.util.number_format.call(null,((cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))?sym.call(null,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet)):sym.call(null,tweet)))),cljs.core.str(s)].join('');
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

//# sourceMappingURL=util.js.map