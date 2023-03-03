(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/phoneset/index"],{"569d":function(t,n,e){"use strict";var c=e("6fcb"),u=e.n(c);u.a},"6fcb":function(t,n,e){},8109:function(t,n,e){"use strict";e.r(n);var c=e("89cd"),u=e.n(c);for(var i in c)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(i);n["default"]=u.a},"89cd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={computed:{i18n:function(){return this.$t("index")}},data:function(){return{voicevalue:0}},created:function(){},methods:{close:function(){this.$emit("colseset")},voicechanging:function(t){console.log(t.detail.value),this.voicevalue=t.detail.value,plus.device.setVolume(this.voicevalue/100)},goset:function(){t.openSetting()}}};n.default=e}).call(this,e("543d")["default"])},a9fd:function(t,n,e){"use strict";e.r(n);var c=e("afdc"),u=e("8109");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("569d");var o=e("f0c5"),a=Object(o["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);n["default"]=a.exports},afdc:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var c=function(){var t=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/phoneset/index-create-component',
    {
        'components/phoneset/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a9fd"))
        })
    },
    [['components/phoneset/index-create-component']]
]);
