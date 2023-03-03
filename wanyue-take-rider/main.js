import App from './App'

import maphttp from './js/maphttp.js'
Vue.prototype.maphttp = maphttp;

import NB from './js/nb.js'
Vue.prototype.NB = NB;

import NBLogin from './js/nblogin.js'
Vue.prototype.NBlogin = NBLogin;

import COS from './js/COS.js';
Vue.prototype.COS = COS;

// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);

Vue.config.productionTip = false;

import nothing from '@/components/nothing/index.vue'
Vue.component('nothing',nothing)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false


// 引入 多语言包
import VueI18n from 'vue-i18n'
import WYMsg from 'static/language/index.js'//'./assets/lang/index.js'

Vue.prototype._i18n = WYMsg

App.mpType = 'app'
const app = new Vue({
	WYMsg,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif