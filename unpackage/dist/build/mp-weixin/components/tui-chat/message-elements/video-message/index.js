(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tui-chat/message-elements/video-message/index"],{"0487":function(e,t,n){"use strict";n.r(t);var a=n("175b"),i=n("064a");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("e780");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=c.exports},"064a":function(e,t,n){"use strict";n.r(t);var a=n("73dc"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"175b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},"73dc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isPlay:!1}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(e){this.setData({message:e})},immediate:!0,deep:!0}},methods:{playerHander:function(){e.$emit("videoPlayerHandler",{isPlay:!0,message:this.message})},stopHander:function(){this.isPlay=!1}}};t.default=n}).call(this,n("543d")["default"])},d61a:function(e,t,n){},e780:function(e,t,n){"use strict";var a=n("d61a"),i=n.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-chat/message-elements/video-message/index-create-component',
    {
        'components/tui-chat/message-elements/video-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0487"))
        })
    },
    [['components/tui-chat/message-elements/video-message/index-create-component']]
]);
