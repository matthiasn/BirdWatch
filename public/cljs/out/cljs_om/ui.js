// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_om.ui');
goog.require('cljs.core');
goog.require('cljs_om.util');
goog.require('cljs_om.util');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.ui.count_view = (function count_view(app,owner){if(typeof cljs_om.ui.t6993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t6993 = (function (owner,app,count_view,meta6994){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta6994 = meta6994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t6993.cljs$lang$type = true;
cljs_om.ui.t6993.cljs$lang$ctorStr = "cljs-om.ui/t6993";
cljs_om.ui.t6993.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t6993");
});
cljs_om.ui.t6993.prototype.om$core$IRender$ = true;
cljs_om.ui.t6993.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
cljs_om.ui.t6993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6995){var self__ = this;
var _6995__$1 = this;return self__.meta6994;
});
cljs_om.ui.t6993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6995,meta6994__$1){var self__ = this;
var _6995__$1 = this;return (new cljs_om.ui.t6993(self__.owner,self__.app,self__.count_view,meta6994__$1));
});
cljs_om.ui.__GT_t6993 = (function __GT_t6993(owner__$1,app__$1,count_view__$1,meta6994){return (new cljs_om.ui.t6993(owner__$1,app__$1,count_view__$1,meta6994));
});
}
return (new cljs_om.ui.t6993(owner,app,count_view,null));
});
cljs_om.ui.tweets_by_followers = (function tweets_by_followers(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_retweets = (function tweets_by_retweets(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_favorites = (function tweets_by_favorites(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_id = (function tweets_by_id(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,m).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.find_tweets = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs_om.ui.tweets_by_id,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs_om.ui.tweets_by_followers,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs_om.ui.tweets_by_retweets,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs_om.ui.tweets_by_favorites], null);
cljs_om.ui.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.ui.t6999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t6999 = (function (owner,tweet,tweet_view,meta7000){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta7000 = meta7000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t6999.cljs$lang$type = true;
cljs_om.ui.t6999.cljs$lang$ctorStr = "cljs-om.ui/t6999";
cljs_om.ui.t6999.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t6999");
});
cljs_om.ui.t6999.prototype.om$core$IRender$ = true;
cljs_om.ui.t6999.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"html-text","html-text",3410453889).cljs$core$IFn$_invoke$arity$1(self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.util.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join('')),React.DOM.div({"className": "pull-right timeInterval"},[cljs.core.str(cljs_om.util.fav_count.call(null,self__.tweet)),cljs.core.str(cljs_om.util.rt_count.call(null,self__.tweet))].join(''))));
});
cljs_om.ui.t6999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7001){var self__ = this;
var _7001__$1 = this;return self__.meta7000;
});
cljs_om.ui.t6999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7001,meta7000__$1){var self__ = this;
var _7001__$1 = this;return (new cljs_om.ui.t6999(self__.owner,self__.tweet,self__.tweet_view,meta7000__$1));
});
cljs_om.ui.__GT_t6999 = (function __GT_t6999(owner__$1,tweet__$1,tweet_view__$1,meta7000){return (new cljs_om.ui.t6999(owner__$1,tweet__$1,tweet_view__$1,meta7000));
});
}
return (new cljs_om.ui.t6999(owner,tweet,tweet_view,null));
});
cljs_om.ui.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.ui.t7005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7005 = (function (owner,app,tweets_view,meta7006){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta7006 = meta7006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7005.cljs$lang$type = true;
cljs_om.ui.t7005.cljs$lang$ctorStr = "cljs-om.ui/t7005";
cljs_om.ui.t7005.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7005");
});
cljs_om.ui.t7005.prototype.om$core$IRender$ = true;
cljs_om.ui.t7005.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.ui.tweet_view,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,cljs_om.ui.find_tweets).call(null,self__.app,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
cljs_om.ui.t7005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7007){var self__ = this;
var _7007__$1 = this;return self__.meta7006;
});
cljs_om.ui.t7005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7007,meta7006__$1){var self__ = this;
var _7007__$1 = this;return (new cljs_om.ui.t7005(self__.owner,self__.app,self__.tweets_view,meta7006__$1));
});
cljs_om.ui.__GT_t7005 = (function __GT_t7005(owner__$1,app__$1,tweets_view__$1,meta7006){return (new cljs_om.ui.t7005(owner__$1,app__$1,tweets_view__$1,meta7006));
});
}
return (new cljs_om.ui.t7005(owner,app,tweets_view,null));
});

//# sourceMappingURL=ui.js.map