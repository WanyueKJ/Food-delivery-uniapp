import Vue from 'vue'
import App from './App'

import http from './toolClass/WYToolClass.js'
Vue.prototype.http = http;

// 全局mixins，用于实现setData等功能';
import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);


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
