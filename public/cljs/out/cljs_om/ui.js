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
cljs_om.ui.count_view = (function count_view(app,owner){if(typeof cljs_om.ui.t7274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7274 = (function (owner,app,count_view,meta7275){
this.owner = owner;
this.app = app;
this.count_view = count_view;
this.meta7275 = meta7275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7274.cljs$lang$type = true;
cljs_om.ui.t7274.cljs$lang$ctorStr = "cljs-om.ui/t7274";
cljs_om.ui.t7274.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7274");
});
cljs_om.ui.t7274.prototype.om$core$IRender$ = true;
cljs_om.ui.t7274.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.span(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
cljs_om.ui.t7274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7276){var self__ = this;
var _7276__$1 = this;return self__.meta7275;
});
cljs_om.ui.t7274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7276,meta7275__$1){var self__ = this;
var _7276__$1 = this;return (new cljs_om.ui.t7274(self__.owner,self__.app,self__.count_view,meta7275__$1));
});
cljs_om.ui.__GT_t7274 = (function __GT_t7274(owner__$1,app__$1,count_view__$1,meta7275){return (new cljs_om.ui.t7274(owner__$1,app__$1,count_view__$1,meta7275));
});
}
return (new cljs_om.ui.t7274(owner,app,count_view,null));
});
cljs_om.ui.tweets_by_order = (function tweets_by_order(order){return (function (app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,order.call(null,app))));
});
});
cljs_om.ui.tweets_by_id = (function tweets_by_id(app,n){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (m){return cljs.core.keyword.call(null,m).call(null,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003).cljs$core$IFn$_invoke$arity$1(app));
}),cljs.core.take.call(null,n,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(app))));
});
cljs_om.ui.find_tweets = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs_om.ui.tweets_by_id,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425)),new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677)),new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)),new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs_om.ui.tweets_by_order.call(null,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183))], null);
cljs_om.ui.sort_button_js = (function sort_button_js(app,key){return {"className": [cljs.core.str("btn "),cljs.core.str(((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(app)))?"btn-primary":null))].join(''), "onClick": (function (e){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted","sorted",4412278319)], null),key);
})};
});
cljs_om.ui.sort_buttons_view = (function sort_buttons_view(app,owner){if(typeof cljs_om.ui.t7280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7280 = (function (owner,app,sort_buttons_view,meta7281){
this.owner = owner;
this.app = app;
this.sort_buttons_view = sort_buttons_view;
this.meta7281 = meta7281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7280.cljs$lang$type = true;
cljs_om.ui.t7280.cljs$lang$ctorStr = "cljs-om.ui/t7280";
cljs_om.ui.t7280.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7280");
});
cljs_om.ui.t7280.prototype.om$core$IRender$ = true;
cljs_om.ui.t7280.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "btn-group"},React.DOM.button({"className": "btn"},"Sort by"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-id","by-id",1108060611)),"latest"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425)),"followers"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677)),"retweets"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183)),"retweets2"),React.DOM.button(cljs_om.ui.sort_button_js.call(null,self__.app,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683)),"favorites"));
});
cljs_om.ui.t7280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7282){var self__ = this;
var _7282__$1 = this;return self__.meta7281;
});
cljs_om.ui.t7280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7282,meta7281__$1){var self__ = this;
var _7282__$1 = this;return (new cljs_om.ui.t7280(self__.owner,self__.app,self__.sort_buttons_view,meta7281__$1));
});
cljs_om.ui.__GT_t7280 = (function __GT_t7280(owner__$1,app__$1,sort_buttons_view__$1,meta7281){return (new cljs_om.ui.t7280(owner__$1,app__$1,sort_buttons_view__$1,meta7281));
});
}
return (new cljs_om.ui.t7280(owner,app,sort_buttons_view,null));
});
cljs_om.ui.handle_change = (function handle_change(e,owner,p__7283){var map__7285 = p__7283;var map__7285__$1 = ((cljs.core.seq_QMARK_.call(null,map__7285))?cljs.core.apply.call(null,cljs.core.hash_map,map__7285):map__7285);var text = cljs.core.get.call(null,map__7285__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),e.target.value);
});
cljs_om.ui.trigger_search = (function trigger_search(owner){cljs_om.core.start_search.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
});
cljs_om.ui.search_view = (function search_view(app,owner){if(typeof cljs_om.ui.t7291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7291 = (function (owner,app,search_view,meta7292){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta7292 = meta7292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7291.cljs$lang$type = true;
cljs_om.ui.t7291.cljs$lang$ctorStr = "cljs-om.ui/t7291";
cljs_om.ui.t7291.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7291");
});
cljs_om.ui.t7291.prototype.om$core$IRender$ = true;
cljs_om.ui.t7291.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "input-group"},om.dom.input.call(null,{"onChange": (function (p1__7287_SHARP_){return cljs_om.ui.handle_change.call(null,p1__7287_SHARP_,self__.owner);
}), "onKeyPress": (function (p1__7286_SHARP_){if((p1__7286_SHARP_.keyCode === 13))
{return cljs_om.ui.trigger_search.call(null,self__.owner);
} else
{return null;
}
}), "placeholder": "Example search: java (job OR jobs OR hiring)", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",1017460895)), "ref": "new-contact", "type": "text", "className": "form-control"}),React.DOM.span({"className": "input-group-btn"},React.DOM.button({"onClick": (function (){return cljs_om.ui.trigger_search.call(null,self__.owner);
}), "className": "btn btn-primary"},React.DOM.span({"className": "glyphicon glyphicon-search"}))));
});
cljs_om.ui.t7291.prototype.om$core$IInitState$ = true;
cljs_om.ui.t7291.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
cljs_om.ui.t7291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7293){var self__ = this;
var _7293__$1 = this;return self__.meta7292;
});
cljs_om.ui.t7291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7293,meta7292__$1){var self__ = this;
var _7293__$1 = this;return (new cljs_om.ui.t7291(self__.owner,self__.app,self__.search_view,meta7292__$1));
});
cljs_om.ui.__GT_t7291 = (function __GT_t7291(owner__$1,app__$1,search_view__$1,meta7292){return (new cljs_om.ui.t7291(owner__$1,app__$1,search_view__$1,meta7292));
});
}
return (new cljs_om.ui.t7291(owner,app,search_view,null));
});
cljs_om.ui.tweet_view = (function tweet_view(tweet,owner){if(typeof cljs_om.ui.t7297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7297 = (function (owner,tweet,tweet_view,meta7298){
this.owner = owner;
this.tweet = tweet;
this.tweet_view = tweet_view;
this.meta7298 = meta7298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7297.cljs$lang$type = true;
cljs_om.ui.t7297.cljs$lang$ctorStr = "cljs-om.ui/t7297";
cljs_om.ui.t7297.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7297");
});
cljs_om.ui.t7297.prototype.om$core$IRender$ = true;
cljs_om.ui.t7297.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var user = new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.tweet);var screen_name = new cljs.core.Keyword(null,"screen_name","screen_name",970639856).cljs$core$IFn$_invoke$arity$1(user);var href = [cljs.core.str("http://www.twitter.com/"),cljs.core.str(screen_name)].join('');return React.DOM.div({"className": "tweet"},React.DOM.span(null,React.DOM.a({"target": "_blank", "href": href},React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "thumbnail"}))),React.DOM.a({"target": "_blank", "href": href},React.DOM.span({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",839823591).cljs$core$IFn$_invoke$arity$1(user), "className": "username"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(user))),React.DOM.span({"className": "username_screen"},[cljs.core.str(" @"),cljs.core.str(screen_name)].join('')),React.DOM.div({"className": "pull-right timeInterval"},cljs_om.util.from_now.call(null,new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(self__.tweet))),React.DOM.div({"className": "tweettext"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"html-text","html-text",3410453889).cljs$core$IFn$_invoke$arity$1(self__.tweet)}}),React.DOM.div({"className": "pull-left timeInterval"},[cljs.core.str(cljs_om.util.number_format.call(null,new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(user))),cljs.core.str(" followers")].join('')),React.DOM.div({"className": "pull-right timeInterval"},[cljs.core.str(cljs_om.util.rt_count_since_startup.call(null,self__.tweet)),cljs.core.str(cljs_om.util.rt_count.call(null,self__.tweet)),cljs.core.str(cljs_om.util.fav_count.call(null,self__.tweet))].join(''))));
});
cljs_om.ui.t7297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7299){var self__ = this;
var _7299__$1 = this;return self__.meta7298;
});
cljs_om.ui.t7297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7299,meta7298__$1){var self__ = this;
var _7299__$1 = this;return (new cljs_om.ui.t7297(self__.owner,self__.tweet,self__.tweet_view,meta7298__$1));
});
cljs_om.ui.__GT_t7297 = (function __GT_t7297(owner__$1,tweet__$1,tweet_view__$1,meta7298){return (new cljs_om.ui.t7297(owner__$1,tweet__$1,tweet_view__$1,meta7298));
});
}
return (new cljs_om.ui.t7297(owner,tweet,tweet_view,null));
});
cljs_om.ui.tweets_view = (function tweets_view(app,owner){if(typeof cljs_om.ui.t7303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_om.ui.t7303 = (function (owner,app,tweets_view,meta7304){
this.owner = owner;
this.app = app;
this.tweets_view = tweets_view;
this.meta7304 = meta7304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_om.ui.t7303.cljs$lang$type = true;
cljs_om.ui.t7303.cljs$lang$ctorStr = "cljs-om.ui/t7303";
cljs_om.ui.t7303.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs-om.ui/t7303");
});
cljs_om.ui.t7303.prototype.om$core$IRender$ = true;
cljs_om.ui.t7303.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,cljs_om.ui.tweet_view,new cljs.core.Keyword(null,"sorted","sorted",4412278319).cljs$core$IFn$_invoke$arity$1(self__.app).call(null,cljs_om.ui.find_tweets).call(null,self__.app,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
cljs_om.ui.t7303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7305){var self__ = this;
var _7305__$1 = this;return self__.meta7304;
});
cljs_om.ui.t7303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7305,meta7304__$1){var self__ = this;
var _7305__$1 = this;return (new cljs_om.ui.t7303(self__.owner,self__.app,self__.tweets_view,meta7304__$1));
});
cljs_om.ui.__GT_t7303 = (function __GT_t7303(owner__$1,app__$1,tweets_view__$1,meta7304){return (new cljs_om.ui.t7303(owner__$1,app__$1,tweets_view__$1,meta7304));
});
}
return (new cljs_om.ui.t7303(owner,app,tweets_view,null));
});

//# sourceMappingURL=ui.js.map