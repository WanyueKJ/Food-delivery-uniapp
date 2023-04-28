<script>
	// APP 和 小程序平台
	// #ifdef  APP-PLUS || MP-WEIXIN   
	import TIM from 'tim-wx-sdk';
	import COS from 'cos-wx-sdk-v5';
	// #endif

	// #ifdef H5
	import TIM from 'tim-js-sdk';
	import TIMUploadPlugin from 'tim-upload-plugin'
	logger.error(' TUIKit 暂不支持 H5 / web ，请使用者自己完成兼容哦，页面刷新可能会导致报错，需要重新登录 ');
	// #endif

	// #ifdef APP-PLUS
	import Aegis from 'aegis-weex-sdk';
	// #endif

	

	// #ifdef H5
	import Aegis from 'aegis-web-sdk';
	// #endif

	import logger from './utils/logger'; // app.js
	import {
		genTestUserSig
	} from './debug/GenerateTestUserSig.js';

	const aegis = new Aegis({
		id: 'iHWefAYqKznuxWjLnr', // 项目key
		reportApiSpeed: true, // 接口测速
	});
	uni.$aegis = aegis
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module

	export default {
		globalData: {
			windowWidth: 0,
			windowHeight: 0,
			amapWebKey: "31869e8d1c25cd86dd128861e9c657c5",
			// #ifdef APP-PLUS
			amapKey: "35d86249652912cfd2749439829ec1ba",
			// #endif
			// #ifdef MP-WEIXIN
			amapKey: "35d86249652912cfd2749439829ec1ba",
			// #endif
			statusBarHeight: 0,
			screenHeight: 0,
			pageHeight: 0,
			safeArea: '',
			safeAreaBottom: 0,
			top: 0,
			menuButtonWidth: 0,
			menuButtonLeft: 0,
			menuButtonHeight: 0,
			navHeight: 0,
			weburl: 'https://takeout.sdwanyue.com/',
			// weburl: 'https://take.sdwanyue.com/',
			version: '1.2.0',
			platform: '',
			openid: '',
			service_url_kefu: '',
			_i18n: '',
			$t: '',
			userInfo: {},
			language: ''
		},
		onLaunch: function() {
			let context = this;
			this.globalData._i18n = this.$i18n //这是原型链上的$i18n  
			this.globalData.$t = function(str) {
				let $i18n = context.globalData.$i18n //这里去拿global的i18n  
				return context.$t(str)
			}
			this.getAreaSize()
			
			

			
		},
		onShow: function() {
			const value = uni.getStorageSync('userinfo');
			console.log(value)
			console.log('App Show')
			

		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			getAreaSize(e) {

				var res = uni.getSystemInfoSync()
				this.globalData.windowHeight = res.windowHeight
				this.globalData.windowWidth = res.windowWidth
				this.globalData.screenHeight = res.screenHeight
				this.globalData.safeArea = res.safeArea
				this.globalData.top = res.safeArea.top
				this.globalData.safeAreaBottom = res.screenHeight - res.safeArea.bottom
				this.globalData.statusBarHeight = res.statusBarHeight
				this.globalData.pageHeight = this.globalData.windowHeight
				this.globalData.platform = res.platform
				this.globalData.navHeight = res.statusBarHeight + 44
				// console.log(this.platform);
				// #ifdef APP-PLUS
				// plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {

				// 	this.version = wgtinfo.version; //应用版本号
				// })
				// #endif

				// #ifdef MP-WEIXIN
				// console.log('11111111121323123123133123123123131323212');
				this.globalData.safeAreaBottom = res.screenHeight - res.safeArea.bottom
				this.globalData.pageHeight = this.globalData.windowHeight + 44 + this.globalData.top
				var weixin = uni.getMenuButtonBoundingClientRect();
				this.globalData.top = weixin.top
				this.globalData.menuButtonWidth = weixin.width
				this.globalData.menuButtonLeft = weixin.left
				this.globalData.menuButtonHeight = weixin.height
				// #endif
				// this.getHomeConfig()

				uni.setTabBarItem({
					index: 0,
					text: this.i18n.tabBar.home
				});
				
				uni.setTabBarItem({
					index: 1,
					text: this.i18n.tabBar.shopManager
				});
				
				uni.setTabBarItem({
					index: 2,
					text: this.i18n.tabBar.mine
				});
			},
			// getHomeConfig() {
			// 	var that = this;
			// 	console.log(this.globalData.weburl)
			// 	uni.request({
			// 		url: this.globalData.weburl + 'api/?s=App.Home.GetConfig',
			// 		data: {},
			// 		success: function(res) {

			// 			if (res.data.ret == 200) {
			// 				if (res.data.data.code == 0) {
			// 					that.globalData.service_url_kefu = that.http.decypt(res.data.data.info[0]
			// 						.service_url)
			// 					console.log(that.globalData.service_url_kefu);
			// 				}
			// 			}

			// 		},
			// 		fail: function(error) {
			// 			console.log(error)
			// 			uni.hideLoading();

			// 		},
			// 		complete: function(res) {
			// 			console.log(res)
			// 		}
			// 	})
			// this.http.sendRequest('Home.GetConfig', {}).then(function(res) {
			// 	console.log(JSON.stringify(res))
			// 	if (res.code == 0) {
			// 		this.globalData.service_url_kefu = res.info[0].service_url
			// 	}
			// })
			// },
			// TODO:
			resetLoginData() {
				// this.globalData.expiresIn = '';
				// this.globalData.sessionID = '';
				// this.globalData.userInfo = {
				// 	userID: '',
				// 	userSig: '',
				// 	token: '',
				// 	phone: ''
				// };
				// this.globalData.userProfile = null;
				// logger.log(`| app |  resetLoginData | globalData: ${this.globalData}`);
			},
			onTIMError() {},
			onSDKReady(){
			},
			onNetStateChange() {},
			onSDKReload() {},
			onSdkNotReady() {},
			onKickedOut() {
				
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./App.css");
</style>
