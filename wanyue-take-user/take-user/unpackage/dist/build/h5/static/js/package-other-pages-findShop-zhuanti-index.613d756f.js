(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-other-pages-findShop-zhuanti-index"],{"2b57":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEUAAAD/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyU4/FvcAAAAC3RSTlMAgNcYU+hHKAveqXO+3OEAAABNSURBVEjHYxgFo2BQA44MAgqMNuGXZ9beSsCA3VsIGLDbYYgbwB69e6EgAiRgKODcjQK2E1RAkhUIR5LkzSFsxFayEy0i2Y+CUTDYAQAvXjQTv6NPnAAAAABJRU5ErkJggg=="},"301d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{width:"100%"},style:"height:"+t.system_top+"px;"}),n("v-uni-view",{staticClass:"row",staticStyle:{width:"100%",height:"40px","align-items":"center"}},[n("v-uni-image",{staticStyle:{width:"32px",height:"32px","margin-left":"12px"},attrs:{src:i("2b57"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}}),n("v-uni-view",{staticStyle:{"margin-left":"5px",color:"#FF5725","font-size":"16px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t._v(t._s(t.leftText))]),n("v-uni-view",{staticStyle:{flex:"1"}}),t.rightText.length>0?n("v-uni-view",{staticStyle:{"font-size":"14px","font-weight":"bold"},style:"color:"+t.rightcolor+";margin-right: "+t.wxWidth+"px;",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t._v(t._s(t.rightText))]):t._e(),t.rightIcon.length>0?n("v-uni-image",{staticStyle:{width:"32px",height:"32px"},style:"color:"+t.rightcolor+";margin-right: "+t.wxWidth+"px;",attrs:{mode:"aspectFit",src:t.rightIcon},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}}):t._e()],1)],1)},a=[]},3729:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("6d19")),a={components:{wybar:r.default},computed:{i18n:function(){return this.$t("index")}},data:function(){return{array:[],titleStr:"",scrollHeight:0,page:1,refresherTriggered:0,zID:""}},onReady:function(){var t=uni.getSystemInfoSync(),e=44;parseInt(t.safeArea.top)>e&&(e=parseInt(t.safeArea.top)),this.scrollHeight=getApp().globalData.windowHeight-(e+40)},onLoad:function(t){this.titleStr=t.title,this.zID=t.id,this.requestData()},methods:{requestData:function(){var t=this;t.http.sendRequest("LookingShop.SpecialCategory",{id:t.zID,p:t.page}).then((function(e){0==e.code&&(1==t.page?t.array=e.info[0]:t.array=t.array.concat(e.info[0]))}))},scrolltolower:function(){console.log("滚动到底部");var t=this;t.page++,t.requestData()},refresherrefresh:function(){var t=this;t.page=1,t.refresherTriggered=!0,t.requestData(),console.log("自定义下拉刷新被触发"),setTimeout((function(){t.refresherTriggered=!1}),1e3)},click:function(t){uni.setStorage({key:"weburl",data:t.href,success:function(){uni.navigateTo({url:"/pages/webView/webView"})}})},back:function(){uni.navigateBack()}}};e.default=a},"55f8":function(t,e,i){"use strict";var n=i("962f"),r=i.n(n);r.a},"61df":function(t,e,i){"use strict";i.r(e);var n=i("3729"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"6d19":function(t,e,i){"use strict";i.r(e);var n=i("301d"),r=i("9f34");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,c=i("f0c5"),l=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"2d81e44f",null,!1,n["a"],o);e["default"]=l.exports},"962f":function(t,e,i){var n=i("a2bc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("56893083",n,!0,{sourceMap:!1,shadowMode:!1})},"9f34":function(t,e,i){"use strict";i.r(e);var n=i("ca75"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},a2bc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-7c3aa215]{width:100%;height:100%}.cell[data-v-7c3aa215]{height:130px;width:calc(100% - 30px);margin-left:15px;border-bottom:1px solid #f5f5f5;align-items:center}.threeLine[data-v-7c3aa215]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",""]),t.exports=e},b5b8:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("wybar",{attrs:{leftText:t.titleStr},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-scroll-view",{staticStyle:{width:"100%","background-color":"#FFFFFF"},style:"height:"+t.scrollHeight+"px;",attrs:{"scroll-y":"true","refresher-triggered":t.refresherTriggered,"refresher-enabled":!0,"refresher-threshold":45},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)},refresherrefresh:function(e){arguments[0]=e=t.$handleEvent(e),t.refresherrefresh.apply(void 0,arguments)}}},t._l(t.array,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell row",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(e)}}},[i("v-uni-image",{staticStyle:{width:"125px",height:"94px","border-radius":"4px"},attrs:{src:e.thumbnail,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"column",staticStyle:{height:"94px",width:"calc(100% - 135px)","margin-left":"8px"}},[i("v-uni-view",{staticClass:"threeLine",staticStyle:{"font-size":"14px","font-weight":"bold",flex:"1",width:"100%"}},[t._v(t._s(e.post_title))]),i("v-uni-view",{staticStyle:{color:"#6f6f6f","font-size":"12px","line-height":"18px"}},[t._v(t._s(e.update_time))])],1)],1)})),1)],1)},a=[]},ca75:function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"wyBar",data:function(){return{system_top:44,wxWidth:15}},created:function(){var t=uni.getSystemInfoSync();parseInt(t.safeArea.top)>this.system_top&&(this.system_top=parseInt(t.safeArea.top)),console.log(this.system_top)},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},color:{type:String,default:"#FFFFFF"},rightcolor:{type:String,default:"#FF5725"},backgroundColor:{type:String,default:"#FFFFFF"}},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=n},ef37:function(t,e,i){"use strict";i.r(e);var n=i("b5b8"),r=i("61df");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("55f8");var o,c=i("f0c5"),l=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"7c3aa215",null,!1,n["a"],o);e["default"]=l.exports}}]);