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
cljs_om.ui.count_view = (function count_view(app,owner){if(typeof cljs_om.ui.t5709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t5709 = (function (owner,app,count_view,meta5710){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta5710 = meta5710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t5709.cljs$lang$type = true;
cljs_om.ui.t5709.cljs$lang$ctorStr = "cljs-om.ui/t5709";
cljs_om.ui.t5709.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t5709");
});
cljs_om.ui.t5709.prototype.om$core$IRender$ = true;
cljs_om.ui.t5709.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
cljs_om.ui.t5709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5711){var self__ = this;
var _5711__$1 = this;return self__.meta5710;
});
cljs_om.ui.t5709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5711,meta5710__$1){var self__ = this;
var _5711__$1 = this;return (new cljs_om.ui.t5709(self__.owner,self__.app,self__.count_view,meta5710__$1));
});
cljs_om.ui.__GT_t5709 = (function __GT_t5709(owner__$1,app__$1,count_view__$1,meta5710){return (new cljs_om.ui.t5709(owner__$1,app__$1,count_view__$1,meta5710));
});
}
return (new cljs_om.ui.t5709(owner,app,count_view,null));
});
cljs_om.ui.tweets_by_followers = (function tweets_by_followers(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_retweets = (function tweets_by_retweets(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_rt_since_startup = (function tweets_by_rt_since_startup(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_favorites = (function tweets_by_favorites(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.tweets_by_id = (function tweets_by_id(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,m).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.find_tweets = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs_om.ui.tweets_by_id,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs_om.ui.tweets_by_followers,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs_om.ui.tweets_by_retweets,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs_om.ui.tweets_by_favorites,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs_om.ui.tweets_by_rt_since_startup], null);
cljs_om.ui.sort_button = (function sort_button(app,key){return {"className": [cljs.core.str("btn "),cljs.core.str(((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(app)))?"btn-primary":null))].join(''), "onClick": (function (e){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted","sorted",4412278319)], null),key);
})};
});
cljs_om.ui.sort_buttons_view = (function sort_buttons_view(app,owner){if(typeof cljs_om.ui.t5715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t5715 = (function (owner,app,sort_buttons_view,meta5716){
this.owner = owner;
this.app = app;
this.sort_buttons_view = sort_buttons_view;
this.meta5716 = meta5716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t5715.cljs$lang$type = true;
cljs_om.ui.t5715.cljs$lang$ctorStr = "cljs-om.ui/t5715";
cljs_om.ui.t5715.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t5715");
});
cljs_om.ui.t5715.prototype.om$core$IRender$ = true;
cljs_om.ui.t5715.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "btn-group"},React.DOM.button({"className": "btn"},"Sort by"),React.DOM.button(cljs_om.ui.sort_button.call(null,self__.app,new cljs.core.Keyword(null,"by-id","by-id",1108060611)),"latest"),React.DOM.button(cljs_om.ui.sort_button.call(null,self__.app,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425)),"followers"),React.DOM.button(cljs_om.ui.sort_button.call(null,self__.app,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677)),"retweets"),React.DOM.button(cljs_om.ui.sort_button.call(null,self__.app,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183)),"retweets2"),React.DOM.button(cljs_om.ui.sort_button.call(null,self__.app,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)),"favorites"));
});
cljs_om.ui.t5715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5717){var self__ = this;
var _5717__$1 = this;return self__.meta5716;
});
cljs_om.ui.t5715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5717,meta5716__$1){var self__ = this;
var _5717__$1 = this;return (new cljs_om.ui.t5715(self__.owner,self__.app,self__.sort_buttons_view,meta5716__$1));
});
cljs_om.ui.__GT_t5715 = (function __GT_t5715(owner__$1,app__$1,sort_buttons_view__$1,meta5716){return (new cljs_om.ui.t5715(owner__$1,app__$1,sort_buttons_view__$1,meta5716));
});
}
return (new cljs_om.ui.t5715(owner,app,sort_buttons_view,null));
});
cljs_om.ui.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.ui.t5721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t5721 = (function (owner,tweet,tweet_view,meta5722){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta5722 = meta5722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t5721.cljs$lang$type = true;
cljs_om.ui.t5721.cljs$lang$ctorStr = "cljs-om.ui/t5721";
cljs_om.ui.t5721.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t5721");
});
cljs_om.ui.t5721.prototype.om$core$IRender$ = true;
cljs_om.ui.t5721.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "pull-right timeInterval"},cljs_om.util.from_now.call(null,new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(self__.tweet))),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"html-text","html-text",3410453889).cljs$core$IFn$_invoke$arity$1(self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.util.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join('')),React.DOM.div({"className": "pull-right timeInterval"},[cljs.core.str(cljs_om.util.rt_count_since_startup.call(null,self__.tweet)),cljs.core.str(cljs_om.util.rt_count.call(null,self__.tweet)),cljs.core.str(cljs_om.util.fav_count.call(null,self__.tweet))].join(''))));
});
cljs_om.ui.t5721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5723){var self__ = this;
var _5723__$1 = this;return self__.meta5722;
});
cljs_om.ui.t5721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5723,meta5722__$1){var self__ = this;
var _5723__$1 = this;return (new cljs_om.ui.t5721(self__.owner,self__.tweet,self__.tweet_view,meta5722__$1));
});
cljs_om.ui.__GT_t5721 = (function __GT_t5721(owner__$1,tweet__$1,tweet_view__$1,meta5722){return (new cljs_om.ui.t5721(owner__$1,tweet__$1,tweet_view__$1,meta5722));
});
}
return (new cljs_om.ui.t5721(owner,tweet,tweet_view,null));
});
cljs_om.ui.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.ui.t5727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t5727 = (function (owner,app,tweets_view,meta5728){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta5728 = meta5728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t5727.cljs$lang$type = true;
cljs_om.ui.t5727.cljs$lang$ctorStr = "cljs-om.ui/t5727";
cljs_om.ui.t5727.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t5727");
});
cljs_om.ui.t5727.prototype.om$core$IRender$ = true;
cljs_om.ui.t5727.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.ui.tweet_view,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,cljs_om.ui.find_tweets).call(null,self__.app,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
cljs_om.ui.t5727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5729){var self__ = this;
var _5729__$1 = this;return self__.meta5728;
});
cljs_om.ui.t5727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5729,meta5728__$1){var self__ = this;
var _5729__$1 = this;return (new cljs_om.ui.t5727(self__.owner,self__.app,self__.tweets_view,meta5728__$1));
});
cljs_om.ui.__GT_t5727 = (function __GT_t5727(owner__$1,app__$1,tweets_view__$1,meta5728){return (new cljs_om.ui.t5727(owner__$1,app__$1,tweets_view__$1,meta5728));
});
}
return (new cljs_om.ui.t5727(owner,app,tweets_view,null));
});

//# sourceMappingURL=ui.js.map