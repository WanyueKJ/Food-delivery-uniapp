<script>
	// APP 和 小程序平台
	// #ifdef  APP-PLUS || MP-WEIXIN   
	
	import COS from 'cos-wx-sdk-v5';
	// #endif

	

	// #ifdef APP-PLUS
	import Aegis from 'aegis-weex-sdk';
	// #endif

	// #ifdef MP-WEIXIN
	import Aegis from 'aegis-mp-sdk';
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
			GaoDeAppKey: '', // 高德ios、android key
			GaoDeKey_amapkey: '', //app上填写高德web key、小程序上填写小程序的 key
			// #ifdef H5
			mainurl: "/api/?s=",
			// #endif
			// #ifndef H5
			// mainurl: 'https://taketest.sdwanyue.com/api/?s=',
			// mainurl: 'https://take.sdwanyue.com/api/?s=',
			mainurl: 'https://takeout.sdwanyue.com/api/?s=',
			// #endif
			// weburl: 'https://taketest.sdwanyue.com/',
			weburl: 'https://takeout.sdwanyue.com/',
			// weburl: 'https://take.sdwanyue.com/',
			userinfo: '',
			safeAreaInsets: '',
			statusBarHeight: 0, //状态栏高度
			screenHeight: 0,
			windowHeight: 0, //页面高度
			pageHeight: 0,
			//安全区域
			safeArea: '',
			safeAreaBottom: 0,
			top: 0, //顶部高度
			menuButtonWidth: 0, //顶部按钮宽度
			menuButtonLeft: 0, //顶部按钮距离
			menuButtonHeight: 44,
			_i18n: '',
			$t: '',
			userInfo: {},
		
		},
		onLaunch: function() {
			let context = this;
			this.globalData._i18n = this.$i18n //这是原型链上的$i18n  
			this.globalData.$t = function(str) {
				let $i18n = context.globalData.$i18n //这里去拿global的i18n  
				return context.$t(str)
			}
			this.getAreaSize()
			
			
			
			
			// 将原生插件挂载在 uni 上
			// #ifdef APP-PLUS
			// uni.$TUICalling = TUICalling;
			// #endif
			// 如果您已创建了 tim，请将 tim 实例挂载在 wx 上，且不可以修改 wx.$TIM（修改变量可能导致 TUICalling 组件无法正常使用）, 完成 TUICalling 初始化，
			// 如果您没有创建，可以不传
			
			// #ifdef APP-PLUS
			// if (this.NB.isAndroidOrIOS() == 'iOS') {
			// 	this.globalData.GaoDeAppKey = 'b1aadb7457eae6aa40a0c8ed58ae0456'
			// } else {
			// 	this.globalData.GaoDeAppKey = '43cff70e1deb9455185e2c8cf8363aec'
			// }
			if (this.NB.isAndroidOrIOS() == 'iOS') {
				this.globalData.GaoDeAppKey = 'f32a7750d2a2c3d7459f85185c867c4f'
			} else {
				this.globalData.GaoDeAppKey = 'a88be362cab2d0f18608bedcc47ace9a'
			}
			this.globalData.GaoDeKey_amapkey = '97a3e0a8bf3f3ca77193b81c48d92ee2'
			// #endif
			// #ifdef MP-WEIXIN
			this.globalData.GaoDeKey_amapkey = '52de86da47be2ea547c37dd382025a0c'
			// #endif
			
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			getAreaSize() {
				var res = uni.getSystemInfoSync()
				// console.log(res)
				this.globalData.safeAreaInsets = res.safeAreaInsets
				this.globalData.windowHeight = res.windowHeight
				this.globalData.screenHeight = res.screenHeight
				this.globalData.safeArea = res.safeArea
				this.globalData.top = res.safeArea.top
				this.globalData.statusBarHeight = res.statusBarHeight
				this.globalData.pageHeight = this.globalData.windowHeight
				this.globalData.safeAreaBottom = res.screenHeight - res.safeArea.bottom
				this.globalData.pageHeight = this.globalData.windowHeight + 44 + this.globalData.top
				// #ifdef MP-WEIXIN
				var weixin = uni.getMenuButtonBoundingClientRect();
				// console.log(weixin)
				this.globalData.top = weixin.top
				this.globalData.menuButtonWidth = weixin.width
				this.globalData.menuButtonLeft = weixin.left
				this.globalData.menuButtonHeight = weixin.height
				// #endif
			},
			// TODO:
			resetLoginData() {

			},
			onTIMError() {},
			onSDKReady({
				name
			}) {
				const isSDKReady = name === uni.$TUIKitEvent.SDK_READY ? true : false
				uni.$emit('isSDKReady', {
					isSDKReady: true
				});
			},
			onNetStateChange() {},
			onSDKReload() {},
			onSdkNotReady() {},
			onKickedOut() {
				uni.showToast({
					title: '您被踢下线',
					icon: 'error'
				});
			}
		},
		onShow: function() {
			
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./App.css");
</style>
