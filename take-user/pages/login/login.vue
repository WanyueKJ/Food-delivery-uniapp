<template>

	<view class="login-all-wrap" v-if="loginType > 0">
		<wybar @clickLeft="doBack"></wybar>
		<view class="column" style="align-items: center;">
			<image src="../../static/logo.png" mode="aspectFit" class="logo_image"></image>
			<view style="height: 30px;color: #181818;font-size: 22px;font-weight: bold;margin-top: 15px;">
				{{appName}}
			</view>
			<view style="color: #6F6F6F;font-size: 12px;max-width: 90%;line-height: 18px;margin-top: 6px;">
				随看随点不愁选，即点即达不久等
			</view>
		</view>
		<view class="column" style="width: 100%;" v-if="loginType == 1">
			<view class="codephoneinput row">
				<view @click="chooseCountry()" style="width: 70px;height: 100%;align-items: center;position: relative;;"
					class="row">
					<view style="flex: 1;color: #000;font-size: 16px;">
						{{countryCode}}
					</view>
					<image src="../../static/xia.png" mode="aspectFit"
						style="width: 16px;height: 16px;margin-right: 18px;">
					</image>
					<view
						style="position: absolute;right: 9px;top: 11px;height: 18px;width: 1px;background-color: #D6DADE;">

					</view>
				</view>
				<input :placeholder="i18n.login.placePhone" v-model="mobile" @input="mobileinpit" :maxlength="11"
					type="number" placeholder-style="color:rgba(201,201,201,1);" />
			</view>
			<block>
				<view class="codephoneinput row" style="margin-top: 20px;">
					<input :focus="codeFocus" :placeholder="i18n.login.placeCode" v-model="code" :maxlength="6"
						style="width: calc(100% - 100px);" type="number"
						placeholder-style="color:rgba(201,201,201,1);" />
					<view @click="getSmsCode" class="codetext"
						:style="canshowcode == true?  'color: #FF5725': 'color: rgba(201,201,201,1);'">
						{{codetimes}}
					</view>
				</view>
			</block>



			<button enabled="enabled" class="login-btn" style="border-radius: 50rpx; border: 0;" type="primary"
				:class="{ opatity: enabled}" @click="submit">
				{{i18n.login.login}}
			</button>
		</view>

		<view class="newstate">

			<image @click="agreeme()" class="agree"
				:src="agree ? '../../static/login/xiyi-s.png' : '../../static/login/xiyi-n.png'" mode="aspectFit">
			</image>
			<view class="xieyis">
				我已阅读并同意<text @click="gotoxieyi(4)" class="xieyi">《用户服务协议》</text>和<text @click="gotoxieyi(5)"
					class="xieyi">《隐私保护政策》</text>
			</view>

		</view>

	</view>
</template>

<script>
	import md5_js from '../../toolClass/md5.js'
	// import {
	// 	genTestUserSig
	// } from '@/debug/GenerateTestUserSig.js';

	import wybar from '../../components/wybar/wyBar.vue'
	// #ifdef APP-PLUS
	// 使用时不需要传递 provider
	const univerifyManager = uni.getUniverifyManager()
	// #endif
	export default {
		components: {
			wybar
		},

		data() {
			return {
				top: 0,
				closeTop: 0,
				loginType: 0,
				codetimes: '获取验证码',
				timer: null,
				canshowcode: false,
				passwordFocus: false,
				codeFocus: false,
				agree: false,
				mobile: "",
				password: "",
				phone: "",
				code: "",
				smsType: 0, //获取验证码类型 0 登录 1 注册 2忘记密码
				unionid: '',
				nickName: '',
				avatar: '',
				thirdArray: [],
				countryCode: '+86',
				appName: '',
				buttonsList: [],
				hasMobile: false,
				session_key: '',
				openid: '',



			}
		},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'countryCode',
				success: res => {
					that.countryCode = res.data
					console.log(res)
				}
			})
		},
		onUnload() {
			clearInterval(this.timer)
			this.timer = null
		},
		onLoad(option) {
			this.top = getApp().globalData.top + 20
			this.closeTop = getApp().globalData.top + 20
			this.appName = getApp().globalData.appName
			// #ifdef MP-WEIXIN
			this.top = getApp().globalData.top + getApp().globalData.menuButtonHeight + 10
			var that = this
			uni.login({
				success(res) {
					var code = res.code
					uni.request({
						url: getApp().globalData.weburl + "api/?s=App.Login.getUnionid",
						method: 'GET',
						data: {
							'code': code
						},
						success: function(obj) {
							var openid = obj.data.data.openid
							that.openid = openid
							uni.setStorage({
								key: 'openid',
								data: openid
							})
							that.session_key = obj.data.data.session_key
						},
					})
				}
			})
			// #endif
			var that = this
			that.codetimes = this.i18n.login.getcode
			// #ifdef APP-PLUS

			// 预登录
			// 参数和 uni.preLogin 相同
			univerifyManager.preLogin({
				provider: 'univerify',
				success() { //预登录成功
					// 显示一键登录选项
					that.hasMobile = true
					that.getLoginType()
				},
				fail(res) { // 预登录失败
					// 不显示一键登录选项（或置灰）
					// 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
					console.log(res.errCode)
					console.log(res.errMsg)
					console.log(res)
					that.loginType = 1
					that.getLoginType()
				}
			})
			// uni.preLogin({
			// 	provider: 'univerify',
			// 	success() { //预登录成功
			// 		// 显示一键登录选项
			// 		that.hasMobile = true
			// 		that.getLoginType()
			// 	},
			// 	fail(res) { // 预登录失败
			// 		// 不显示一键登录选项（或置灰）
			// 		// 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
			// 		console.log(res.errCode)
			// 		console.log(res.errMsg)
			// 		console.log(res)
			// 		that.loginType = 1
			// 		that.getLoginType()
			// 	}
			// })
			// #endif
			// #ifndef APP-PLUS
			that.getLoginType()
			that.loginType = 2
			// #endif


		},
		onUnload() {
			// #ifdef APP-PLUS
			// 使用时不需要传递 provider
			univerifyManager.offButtonsClick()
			// #endif
		},
		onHide() {
			uni.hideLoading()
		},
		computed: {

			enabled: function() {
				if (this.mobile.length > 0 && this.code.length == 6) {
					return false;
				}
				return true;
			},
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			docodelog() {
				this.loginType = 1
			},

			getPhoneNumber(e) {
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					})
					return
				}
				console.log(e)
				if (e.detail.errMsg == 'getPhoneNumber:fail:user cancel' ||
					e.detail.errMsg == 'getPhoneNumber:fail user deny' ||
					e.detail.errMsg == 'getPhoneNumber:fail:user deny') {
					return
				}
				uni.showLoading({
					title: ''
				})

				var that = this
				var dic = {}
				dic.encryptedData = e.detail.encryptedData
				dic.iv = e.detail.iv
				dic.sessionKey = that.session_key

				console.log(dic)
				that.http.sendRequest('Login.GetUniMobile', dic).then(function(ressss) {

					that.phone = ressss.info[0].phoneNumber
					let sign = that.http.sort2url({
						'account': that.phone,
						'source': 3
					});
					var data = {}
					data.account = that.phone
					data.sign = sign
					data.source = 3
					data.openid = that.openid
					console.log(ressss.info[0], data)
					that.http.sendRequest('Login.LoginByMobile', data).then(function(res) {
						console.log(res.info[0])
						that.saveLocal(res.info[0], true)
						uni.hideLoading()
					})
				})
			},
			agreeme() {
				if (this.agree == true) {
					this.agree = false;
				} else {
					this.agree = true;
				}
			},
			getLoginType() {
				var that = this
				that.http.sendRequest('Login.GetLoginType', {}).then(function(res) {
					that.thirdArray = res.info

					// #ifdef APP-PLUS
					for (var i = 0; i < that.thirdArray.length; i++) {
						var item = that.thirdArray[i]
						if (item.type == 1) {
							that.buttonsList.push({
								"provider": "qq",
								"iconPath": "/static/login/login_qq.png"
							})
						}
						if (item.type == 2) {
							that.buttonsList.push({
								"provider": "weixin",
								"iconPath": "/static/login/login_wx.png"
							})
						}
					}
					if (that.hasMobile) {
						that.yijianlogin()
					} else {
						that.loginType = 1
					}
					// #endif

					// that.thirdArray.push({
					// 	'thumb': res.info[0].thumb,
					// 	'name': 'Google',
					// 	'type': 3
					// })
				})
			},
			saveLocal(info, isTir) {
				console.log(info)
				getApp().globalData.userinfo = info

				uni.setStorage({
					key: 'userinfo',
					data: info,
					success: function() {}
				});


				setTimeout(function() {
					if (isTir && info.mobile.length == 0) {
						uni.navigateTo({
							url: '/package-mine/pages/editAvatarAndName/editPhone?isbind=1'
						})
					} else {
						uni.reLaunch({
							url: '/package-meishi/pages/index/index'
						})
					}
					// let pages = getCurrentPages();
					// if (pages.length == 1) {


					// } else {
					// 	let beforePage = pages[pages
					// 		.length - 2];
					// 	uni.navigateBack({
					// 		delta: 1
					// 	})
					// }
				}, 1000);
			},

			mobileinpit(event) {
				if (event.detail.value.length > 0) {
					this.canshowcode = true
				} else {
					this.canshowcode = false
				}

			},
			password_input(event) {},

			gotoxieyi(ID) {
				var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + ID + '&lang=' + getApp().globalData
					.language
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '../webView/webView',
						});
					}
				})
			},
			register() {
				uni.navigateTo({
					url: "../reg/reg"
				})
			},

			getSmsCode() {
				var that = this
				if (this.canshowcode == false) {
					return
				}
				let sign = this.http.sort2url({
					'mobile': this.mobile,
					'type': 1
				});
				var dic = {}
				dic.mobile = this.mobile
				dic.type = 1
				dic.code = this.countryCode
				dic.sign = sign
				console.log(dic)
				this.http.sendRequest('Login.GetCode', dic).then(function(res) {
					if (res.code == 1002 || res.code == 0) {
						that.codeFocus = true
						var time = 60
						that.canshowcode = false
						clearInterval(that.timer)
						that.timer = null
						that.codetimes = '(' + '60s)'
						that.timer = setInterval(function() {
							time = time - 1
							that.codetimes = '(' + time + 's)'
							if (time == 0) {
								clearInterval(that.timer)
								that.timer = null
								that.canshowcode = true
								that.codetimes = that.i18n.login.getcode
							}
						}, 1000);
					}

				})
			},
			submit() {
				let that = this;
				if (that.mobile.length == 0 || that.code.length == 0) {
					return;
				}
				if (!that.agree) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return
				}

				let url;
				let data;

				url = "Login.LoginByCode";
				data = {
					mobile: that.mobile,
					code: that.code,
					// #ifdef MP-WEIXIN
					// env: 'weixin'
					// #endif
				};

				console.log(url, data)

				uni.showLoading({
					title: '',
					mask: true
				});
				// #ifdef MP-WEIXIN
				uni.login({
					success: res => {
						uni.hideLoading();
						// that.code = res.code;
						uni.request({
							url: getApp().globalData.weburl + "api/?s=App.Login.getUnionid",
							method: 'GET',
							data: {
								'code': res.code
							},
							success: function(res2) {
								var openid = res2.data.data.openid;
								getApp().globalData.openid = openid;
								data.openid = openid
								uni.setStorage({
									key: 'openid',
									data: openid,
									success: function() {}
								});
								that.http.sendRequest(url, data).then(function(res) {
									console.log(res.info[0])
									that.saveLocal(res.info[0], false)
								})
							},
						});
					},
					fail: function(error) {
						console.log(error)
					}
				});
				// #endif
				// #ifndef MP-WEIXIN
				that.http.sendRequest(url, data).then(function(res) {
					console.log(res.info[0])
					that.saveLocal(res.info[0], false)
				})
				// #endif

			},
			mpWechatLogin() {
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return;
				}
				uni.getUserProfile({
					desc: '获取您的用户信息', // 这个参数是必须的
					success: res => {
						var data = JSON.parse(res.rawData)
						// that.nickName = data.nickName
						// that.avatar = data.avatarUrl
						this.getwxopenid(data)
						// uni.login({
						// 	provider: 'weixin',
						// 	success: res => {
						// 		that.getUnionid(res.code, resolve, 2)
						// 	},
						// 	fail(err) {
						// 		uni.hideLoading()
						// 	}
						// })
					},
					fail() {
						uni.hideLoading()
					}
				})
			},
			getwxopenid(data) {
				var that = this

				uni.login({
					success: res => {
						uni.hideLoading();
						uni.request({
							url: getApp().globalData.weburl + "api/?s=App.Login.getUnionid",
							method: 'GET',
							data: {
								'code': res.code
							},
							success: function(res2) {
								console.log('getUnionid返回值', res2)
								var openid = res2.data.data.openid;
								getApp().globalData.openid = openid;
								uni.setStorage({
									key: 'openid',
									data: openid,
									success: function() {

									}
								});

								let sign = that.http.sort2url({
									'openid': openid,
									'type': 9
								});
								var dic = {
									'openid': openid,
									'type': 9,
									'sign': sign,
									'nicename': data.nickName,
									'avatar': data.avatarUrl,
								}
								that.http.sendRequest('Login.LoginByThird', dic).then(function(
									res) {
									console.log(res.info[0])
									that.saveLocal(res.info[0], true)
								})
							},
						});
					}
				});
			},
			thirdLogin(item) {
				console.log(item)
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return;
				}
				this.loginsanfang(item)
			},
			doBack() {
				uni.navigateBack({

				})
			},
			chooseCountry() {
				uni.navigateTo({
					url: 'country'
				})
			}


		}

	}
</script>

<style>
	@import url("./login.css");

	.logo_image {
		width: 64px;
		height: 64px;
		margin-top: 40px;


		/* margin-left: calc(50% - 40px); */
		border-radius: 8px;
	}

	.codelogbtn {
		color: #646464;
		width: 30%;
		margin-left: 40%;
		font-size: 13px;
		height: 20px;
		line-height: 20px;
		margin-top: 15px;
	}
</style>
