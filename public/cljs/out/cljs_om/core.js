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
cljs_om.core.replace_screenname = (function replace_screenname(acc,entity){return null;
});
cljs_om.core.replace_entity = (function replace_entity(text,coll){return cljs.core.reduce.call(null,(function (acc,mention){var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(mention);return clojure.string.replace.call(null,acc,screen_name,[cljs.core.str(screen_name),cljs.core.str(screen_name)].join(''));
}),text,coll);
});
cljs_om.core.format_tweet = (function format_tweet(tweet){return clojure.string.replace.call(null,cljs_om.core.replace_entity.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet),"RT ","<strong>RT </strong>"),new cljs.core.Keyword(null,"user_mentions","user_mentions",4755352879).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entities","entities",3206757171).cljs$core$IFn$_invoke$arity$1(tweet))),"@","<strong>@</strong>");
});
cljs_om.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_om.core.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.core.t6828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.core.t6828 = (function (owner,tweet,tweet_view,meta6829){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta6829 = meta6829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.core.t6828.cljs$lang$type = true;
cljs_om.core.t6828.cljs$lang$ctorStr = "cljs-om.core/t6828";
cljs_om.core.t6828.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.core/t6828");
});
cljs_om.core.t6828.prototype.om$core$IRender$ = true;
cljs_om.core.t6828.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": cljs_om.core.format_tweet.call(null,self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.core.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join(''))));
});
cljs_om.core.t6828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6830){var self__ = this;
var _6830__$1 = this;return self__.meta6829;
});
cljs_om.core.t6828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6830,meta6829__$1){var self__ = this;
var _6830__$1 = this;return (new cljs_om.core.t6828(self__.owner,self__.tweet,self__.tweet_view,meta6829__$1));
});
cljs_om.core.__GT_t6828 = (function __GT_t6828(owner__$1,tweet__$1,tweet_view__$1,meta6829){return (new cljs_om.core.t6828(owner__$1,tweet__$1,tweet_view__$1,meta6829));
});
}
return (new cljs_om.core.t6828(owner,tweet,tweet_view,null));
});
cljs_om.core.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.core.t6834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.core.t6834 = (function (owner,app,tweets_view,meta6835){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta6835 = meta6835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.core.t6834.cljs$lang$type = true;
cljs_om.core.t6834.cljs$lang$ctorStr = "cljs-om.core/t6834";
cljs_om.core.t6834.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.core/t6834");
});
cljs_om.core.t6834.prototype.om$core$IRender$ = true;
cljs_om.core.t6834.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.core.tweet_view,new cljs.core.Keyword(null,"tweets","tweets",4447894420).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
cljs_om.core.t6834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6836){var self__ = this;
var _6836__$1 = this;return self__.meta6835;
});
cljs_om.core.t6834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6836,meta6835__$1){var self__ = this;
var _6836__$1 = this;return (new cljs_om.core.t6834(self__.owner,self__.app,self__.tweets_view,meta6835__$1));
});
cljs_om.core.__GT_t6834 = (function __GT_t6834(owner__$1,app__$1,tweets_view__$1,meta6835){return (new cljs_om.core.t6834(owner__$1,app__$1,tweets_view__$1,meta6835));
});
}
return (new cljs_om.core.t6834(owner,app,tweets_view,null));
});
om.core.root.call(null,cljs_om.core.tweets_view,cljs_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tweet-frame")], null));
cljs_om.core.print_some = (function print_some(tweet){if((new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)) > 1000))
{cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tweet","tweet",1124678115),tweet);
return cljs.core.swap_BANG_.call(null,cljs_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tweets","tweets",4447894420),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tweets","tweets",4447894420).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_om.core.app_state)),tweet));
} else
{return null;
}
});
cljs_om.core.receive_sse = (function receive_sse(e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs_om.core.print_some.call(null,tweet);
});
cljs_om.core.stream = (new EventSource("/tweetFeed?q=*"));
cljs_om.core.stream.addEventListener("message",(function (e){return cljs_om.core.receive_sse.call(null,e);
}),false);

//# sourceMappingURL=core.js.map