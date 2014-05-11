// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_om.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.core.number_format = (function number_format(number){if((number < 1000))
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
cljs_om.core.url_replacer = (function url_replacer(acc,entity){cljs.core.print.call(null,entity);
return clojure.string.replace.call(null,acc,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(entity),[cljs.core.str("<a href='"),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(entity)),cljs.core.str("' target='_blank'>"),cljs.core.str(new cljs.core.Keyword(null,"display_url","display_url",2728579044).cljs$core$IFn$_invoke$arity$1(entity)),cljs.core.str("</a>")].join(''));
});
cljs_om.core.hashtags_replacer = (function hashtags_replacer(acc,entity){var hashtag = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(entity);return clojure.string.replace.call(null,acc,[cljs.core.str("#"),cljs.core.str(hashtag)].join(''),[cljs.core.str("<a href='https://twitter.com/search?q=%23"),cljs.core.str(hashtag),cljs.core.str("' target='_blank'>#"),cljs.core.str(hashtag),cljs.core.str("</a>")].join(''));
});
cljs_om.core.mentions_replacer = (function mentions_replacer(acc,entity){var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(entity);return clojure.string.replace.call(null,acc,[cljs.core.str("@"),cljs.core.str(screen_name)].join(''),[cljs.core.str("<a href='http://www.twitter.com/"),cljs.core.str(screen_name),cljs.core.str("' target='_blank'>@"),cljs.core.str(screen_name),cljs.core.str("</a>")].join(''));
});
cljs_om.core.replacer = (function replacer(text,coll,fun){return cljs.core.reduce.call(null,fun,text,coll);
});
cljs_om.core.format_tweet = (function format_tweet(tweet){return cljs.core.assoc.call(null,tweet,new cljs.core.Keyword(null,"html-text","html-text",3410453889),clojure.string.replace.call(null,cljs_om.core.replacer.call(null,cljs_om.core.replacer.call(null,cljs_om.core.replacer.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet),new cljs.core.Keyword(null,"urls","urls",1017502806).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.core.url_replacer),new cljs.core.Keyword(null,"user_mentions","user_mentions",4755352879).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.core.mentions_replacer),new cljs.core.Keyword(null,"hashtags","hashtags",1163047321).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet)),cljs_om.core.hashtags_replacer),"RT ","<strong>RT </strong>"));
});
cljs_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",1108755585),0], null));
cljs_om.core.rt_count = (function rt_count(tweet){var count = new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet));if((count > 0))
{return [cljs.core.str(cljs_om.core.number_format.call(null,count)),cljs.core.str(" RT")].join('');
} else
{return null;
}
});
cljs_om.core.fav_count = (function fav_count(tweet){var count = new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet));if((count > 0))
{return [cljs.core.str(cljs_om.core.number_format.call(null,count)),cljs.core.str(" fav ")].join('');
} else
{return null;
}
});
cljs_om.core.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.core.t8116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.core.t8116 = (function (owner,tweet,tweet_view,meta8117){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta8117 = meta8117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.core.t8116.cljs$lang$type = true;
cljs_om.core.t8116.cljs$lang$ctorStr = "cljs-om.core/t8116";
cljs_om.core.t8116.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.core/t8116");
});
cljs_om.core.t8116.prototype.om$core$IRender$ = true;
cljs_om.core.t8116.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"html-text","html-text",3410453889).cljs$core$IFn$_invoke$arity$1(self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.core.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join('')),React.DOM.div({"className": "pull-right timeInterval"},[cljs.core.str(cljs_om.core.fav_count.call(null,self__.tweet)),cljs.core.str(cljs_om.core.rt_count.call(null,self__.tweet))].join(''))));
});
cljs_om.core.t8116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8118){var self__ = this;
var _8118__$1 = this;return self__.meta8117;
});
cljs_om.core.t8116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8118,meta8117__$1){var self__ = this;
var _8118__$1 = this;return (new cljs_om.core.t8116(self__.owner,self__.tweet,self__.tweet_view,meta8117__$1));
});
cljs_om.core.__GT_t8116 = (function __GT_t8116(owner__$1,tweet__$1,tweet_view__$1,meta8117){return (new cljs_om.core.t8116(owner__$1,tweet__$1,tweet_view__$1,meta8117));
});
}
return (new cljs_om.core.t8116(owner,tweet,tweet_view,null));
});
cljs_om.core.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.core.t8122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.core.t8122 = (function (owner,app,tweets_view,meta8123){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta8123 = meta8123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.core.t8122.cljs$lang$type = true;
cljs_om.core.t8122.cljs$lang$ctorStr = "cljs-om.core/t8122";
cljs_om.core.t8122.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.core/t8122");
});
cljs_om.core.t8122.prototype.om$core$IRender$ = true;
cljs_om.core.t8122.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.core.tweet_view,new cljs.core.Keyword(null,"tweets","tweets",4447894420).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
cljs_om.core.t8122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8124){var self__ = this;
var _8124__$1 = this;return self__.meta8123;
});
cljs_om.core.t8122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8124,meta8123__$1){var self__ = this;
var _8124__$1 = this;return (new cljs_om.core.t8122(self__.owner,self__.app,self__.tweets_view,meta8123__$1));
});
cljs_om.core.__GT_t8122 = (function __GT_t8122(owner__$1,app__$1,tweets_view__$1,meta8123){return (new cljs_om.core.t8122(owner__$1,app__$1,tweets_view__$1,meta8123));
});
}
return (new cljs_om.core.t8122(owner,app,tweets_view,null));
});
om.core.root.call(null,cljs_om.core.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
cljs_om.core.count_view = (function count_view(app,owner){if(typeof cljs_om.core.t8128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.core.t8128 = (function (owner,app,count_view,meta8129){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta8129 = meta8129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.core.t8128.cljs$lang$type = true;
cljs_om.core.t8128.cljs$lang$ctorStr = "cljs-om.core/t8128";
cljs_om.core.t8128.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.core/t8128");
});
cljs_om.core.t8128.prototype.om$core$IRender$ = true;
cljs_om.core.t8128.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
cljs_om.core.t8128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8130){var self__ = this;
var _8130__$1 = this;return self__.meta8129;
});
cljs_om.core.t8128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8130,meta8129__$1){var self__ = this;
var _8130__$1 = this;return (new cljs_om.core.t8128(self__.owner,self__.app,self__.count_view,meta8129__$1));
});
cljs_om.core.__GT_t8128 = (function __GT_t8128(owner__$1,app__$1,count_view__$1,meta8129){return (new cljs_om.core.t8128(owner__$1,app__$1,count_view__$1,meta8129));
});
}
return (new cljs_om.core.t8128(owner,app,count_view,null));
});
om.core.root.call(null,cljs_om.core.count_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-count")], null));
cljs_om.core.add_tweet2 = (function add_tweet2(tweet){if((new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)) > 1000))
{cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) + 1));
return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tweets","tweets",4447894420),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tweets","tweets",4447894420).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),cljs_om.core.format_tweet.call(null,tweet)));
} else
{return null;
}
});
cljs_om.core.add_tweet = (function add_tweet(tweet){cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)) + 1));
return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tweets","tweets",4447894420),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tweets","tweets",4447894420).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),cljs_om.core.format_tweet.call(null,tweet)));
});
cljs_om.core.receive_sse = (function receive_sse(e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs_om.core.add_tweet.call(null,tweet);
});
cljs_om.core.stream = (new EventSource("/tweetFeed?q=*"));
cljs_om.core.stream.addEventListener("message",(function (e){return cljs_om.core.receive_sse.call(null,e);
}),false);

//# sourceMappingURL=core.js.map