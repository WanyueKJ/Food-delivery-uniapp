import LangEn from './th-TH.js'
import LangCn from './zh_CN.js'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
var system_info = uni.getStorageSync('system_info')
// if (!system_info) {
	// 获取设备信息
	uni.getSystemInfo({
		success: function(res) {
			// console.log('设备信息' + JSON.stringify(res))
			system_info = res
			uni.setStorageSync('system_info', res);
			
		}
	})
// }
var lag = system_info.language ? system_info.language : 'th-TH'
// #ifdef APP-PLUS
lag = system_info.appLanguage ? system_info.appLanguage : 'th-TH'
// #endif
const cur_lang = lag.indexOf('zh') != -1 ? 'zh_CN' : 'th-TH'
console.log(lag)
const i18n = new VueI18n({
	locale: cur_lang || 'th-TH', // 默认选择的语言
	messages: {
		'th-TH': LangEn,
		'zh_CN': LangCn
	}
})
export default i18n
