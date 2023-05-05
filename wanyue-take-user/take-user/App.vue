<script>
	// APP 和 小程序平台
	// #ifdef  APP-PLUS 
	import COS from 'cos-wx-sdk-v5';
	// #endif

	// #ifdef H5

	// #endif

	// #ifdef APP-PLUS
	import Aegis from 'aegis-weex-sdk';
	// #endif



	// #ifdef H5
	// #endif

	
	import {
		genTestUserSig
	} from './debug/GenerateTestUserSig.js';

	// #ifndef H5
	const aegis = new Aegis({
		id: 'iHWefAYqKznuxWjLnr', // 项目key
		reportApiSpeed: true, // 接口测速
	});
	uni.$aegis = aegis
	// #endif
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module

	export default {
		globalData: {
			windowWidth: 0,
			windowHeight: 0,
			amapWebKey: "c50ee695409f57890939b79ab8ae2d8d",
			// #ifdef APP-PLUS
			amapKey: "52de86da47be2ea547c37dd382025a0c",
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
			// weburl: 'https://taketest.sdwanyue.com/',
			// #ifdef H5
			weburl: '/',
			// #endif
			// #ifndef H5
			weburl: 'https://takeout.sdwanyue.com/',
			// weburl: 'https://takeout.sdwanyue.com/',
			// #endif
			version: '1.2.0',
			platform: '',
			openid: '',
			service_url_kefu: '',
			SDKAppID: genTestUserSig('').sdkAppID,
			_i18n: '',
			$t: '',
			userInfo: {},
			language: '',
			SDKAppID: 1400719905,
			appName: '万岳外卖'
		},
		onLaunch: function() {

			let context = this;
			this.globalData._i18n = this.$i18n //这是原型链上的$i18n  
			this.globalData.$t = function(str) {
				let $i18n = context.globalData.$i18n //这里去拿global的i18n  
				return context.$t(str)
			}
			this.getAreaSize()
			const SDKAppID = genTestUserSig('').sdkAppID;
		
			
		},
		onShow: function() {
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
				
				this.getHomeConfig()

				uni.setTabBarItem({
					index: 0,
					text: this.i18n.tabBar.home
				});
				uni.setTabBarItem({
					index: 1,
					text: this.i18n.tabBar.order
				});
				uni.setTabBarItem({
					index: 2,
					text: this.i18n.tabBar.message
				});
				uni.setTabBarItem({
					index: 3,
					text: this.i18n.tabBar.mine
				});
			},
			getHomeConfig() {
				var that = this;
				console.log(this.globalData.weburl)
				uni.request({
					url: this.globalData.weburl + 'api/?s=App.Home.GetConfig',
					data: {},
					success: function(res) {

						if (res.data.ret == 200) {
							if (res.data.data.code == 0) {
								that.globalData.service_url_kefu = that.http.decypt(res.data.data.info[0]
									.service_url)
								// console.log(that.globalData.service_url_kefu);
							}
						}

					},
					fail: function(error) {
						console.log(error)
						uni.hideLoading();

					},
					complete: function(res) {
						// console.log(res)
					}
				})
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
				this.getImUnread()
			},
			onNetStateChange() {},
			onSDKReload() {},
			onSdkNotReady() {},
			onKickedOut() {
				uni.showToast({
					title: '您被踢下线',
					icon: 'error'
				});
			},
			uploadprofile(value) {
				// 修改个人标配资料
				let promise = uni.$TUIKit.updateMyProfile({
					avatar: value.avatar,
					nick: value.user_nickname
				});
				promise.then(function(imResponse) {
					console.log(imResponse.data); // 更新资料成功
				}).catch(function(imError) {
					console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
				});
			},
			onMessageReceived() {
				this.getImUnread()
			},
			getImUnread() {
				console.log(2121121212)
				uni.$TUIKit.getConversationList().then(res => {
					// console.log(res.data.conversationList)
					var allread = 0
					for (let i of res.data.conversationList) {
						allread += i.unreadCount
					}
					if (allread != 0) {
						uni.showTabBarRedDot({
							index: 2
						})
					} else {
						uni.hideTabBarRedDot({
							index: 2
						})
					}
				}).catch(fail => {});
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./App.css");
</style>
