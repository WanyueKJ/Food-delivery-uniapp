(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1182:function(t,e,a){"use strict";a.r(e);var n=a("d734");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3b7c");var i=a("f0c5"),r=Object(i["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=r.exports},"3b7c":function(t,e,a){"use strict";var n=a("5e0a"),o=a.n(n);o.a},"56c5":function(t,e,a){"use strict";(function(t,e){var n=a("4ea4"),o=n(a("9523"));a("5340");var i=n(a("1182")),r=n(a("7cfb")),u=n(a("7454")),l=n(a("ca41")),c=n(a("58d8")),f=n(a("0739")),s=n(a("66fd")),d=(n(a("a925")),n(a("4f73")));function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}t.__webpack_require_UNI_MP_PLUGIN__=a,s.default.prototype.maphttp=r.default,s.default.prototype.NB=u.default,s.default.prototype.NBlogin=l.default,s.default.prototype.COS=c.default,s.default.mixin(f.default),s.default.config.productionTip=!1;s.default.component("nothing",(function(){a.e("components/nothing/index").then(function(){return resolve(a("7226"))}.bind(null,a)).catch(a.oe)})),s.default.config.productionTip=!1,s.default.prototype._i18n=d.default,i.default.mpType="app";var g=new s.default(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({WYMsg:d.default},i.default));e(g).$mount()}).call(this,a("bc2e")["default"],a("543d")["createApp"])},"5e0a":function(t,e,a){},d734:function(t,e,a){"use strict";a.r(e);var n=a("e0d8"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},e0d8:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("fce2"));var o=n(a("8b0c")),i=(n(a("a27c")),a("aa04"),new o.default({id:"iHWefAYqKznuxWjLnr",reportApiSpeed:!0}));t.$aegis=i;var r={globalData:{GaoDeAppKey:"",GaoDeKey_amapkey:"",mainurl:"https://taketest2.sdwanyue.com/api/?s=",weburl:"https://taketest2.sdwanyue.com/",userinfo:"",safeAreaInsets:"",statusBarHeight:0,screenHeight:0,windowHeight:0,pageHeight:0,safeArea:"",safeAreaBottom:0,top:0,menuButtonWidth:0,menuButtonLeft:0,menuButtonHeight:44,_i18n:"",$t:"",userInfo:{}},onLaunch:function(){var t=this;this.globalData._i18n=this.$i18n,this.globalData.$t=function(e){t.globalData.$i18n;return t.$t(e)},this.getAreaSize(),this.globalData.GaoDeKey_amapkey="52de86da47be2ea547c37dd382025a0c"},computed:{i18n:function(){return this.$t("index")}},methods:{getAreaSize:function(){var e=t.getSystemInfoSync();this.globalData.safeAreaInsets=e.safeAreaInsets,this.globalData.windowHeight=e.windowHeight,this.globalData.screenHeight=e.screenHeight,this.globalData.safeArea=e.safeArea,this.globalData.top=e.safeArea.top,this.globalData.statusBarHeight=e.statusBarHeight,this.globalData.pageHeight=this.globalData.windowHeight,this.globalData.safeAreaBottom=e.screenHeight-e.safeArea.bottom,this.globalData.pageHeight=this.globalData.windowHeight+44+this.globalData.top;var a=t.getMenuButtonBoundingClientRect();this.globalData.top=a.top,this.globalData.menuButtonWidth=a.width,this.globalData.menuButtonLeft=a.left,this.globalData.menuButtonHeight=a.height},resetLoginData:function(){},onTIMError:function(){},onSDKReady:function(e){var a=e.name;t.$TUIKitEvent.SDK_READY;t.$emit("isSDKReady",{isSDKReady:!0})},onNetStateChange:function(){},onSDKReload:function(){},onSdkNotReady:function(){},onKickedOut:function(){t.showToast({title:"您被踢下线",icon:"error"})}},onShow:function(){},onHide:function(){}};e.default=r}).call(this,a("543d")["default"])}},[["56c5","common/runtime","common/vendor"]]]);