<template>

	<view class="login-all-wrap">
		<wybar leftIcon=""></wybar>

		<view class="column" style="align-items: center;">
			<image src="../../static/logo.png" mode="aspectFit" class="logo_image"></image>
			<view style="height: 30px;color: #181818;font-size: 22px;font-weight: bold;margin-top: 15px;">
				{{i18n.login.title}}
			</view>

		</view>
		<view class="codephoneinput row">
			<view @click="chooseCountry()" style="width: 70px;height: 100%;align-items: center;position: relative;;"
				class="row">
				<view style="flex: 1;color: #000;font-size: 16px;">
					{{countryCode}}
				</view>
				<image src="../../static/xia.png" mode="aspectFit" style="width: 16px;height: 16px;margin-right: 18px;">
				</image>
				<view
					style="position: absolute;right: 9px;top: 11px;height: 18px;width: 1px;background-color: #D6DADE;">

				</view>
			</view>
			<input :placeholder="i18n.login.placePhone" v-model="mobile" @input="mobileinpit" :maxlength="11"
				:focus="true" type="number" placeholder-style="color:rgba(201,201,201,1);" />
		</view>
		<block>
			<view class="codephoneinput row" style="margin-top: 20px;">
				<input :focus="codeFocus" :placeholder="i18n.login.placeCode" v-model="code" :maxlength="6"
					style="width: calc(100% - 100px);" type="number" placeholder-style="color:rgba(201,201,201,1);" />
				<view @click="getSmsCode" class="codetext"
					:style="canshowcode == true?  'color: rgba(0,193,222,1);': 'color: rgba(201,201,201,1);'">
					{{codetimes}}
				</view>
			</view>
		</block>

		<button enabled="enabled" class="login-btn" style="border-radius: 8px; border: 0;" type="primary"
			:class="{ opatity: enabled}" @click="submit">
			{{i18n.login.login}}
		</button>
		<view  class="newstate">
			<view class="xieyis">
				{{i18n.login.con}}<text @click="gotoxieyi(4)"
					class="xieyi">{{i18n.login.xieyi}}</text>{{i18n.login.and}}<text @click="gotoxieyi(5)"
					class="xieyi">{{i18n.login.yinsi}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp();
	import md5_js from '../../toolClass/md5.js'

	import {
		genTestUserSig
	} from '@/debug/GenerateTestUserSig.js'

	import wybar from '../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		data() {
			return {
				top: 0,
				closeTop: 0,
				loginType: true,
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
				unionid: '',
				nickName: '',
				avatar: '',
				thirdArray: [],
				countryCode: '+86',
				
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
			
			var that = this
			that.codetimes = that.i18n.login.getcode
		},
		computed: {
			enabled: function() {
				if (this.loginType == true) {
					if (this.mobile.length > 0 && this.code.length == 6) {
						return false;
					}
				} else {
					if (this.mobile.length > 0 && this.password.length > 5) {
						return false;
					}
				}
				return true;
			},
			i18n() {
				return this.$t('index')
			}
		},
		methods: {
			saveLocal(info) {
				console.log(info)
				getApp().globalData.userinfo = info
				uni.setStorage({
					key: 'userinfo',
					data: info,
					success: function() {
						 console.log('uid存储成功')
					}
				});

				const userSig = info.im.UserSig;
				const uiddd = info.im.userId;
				// console.log('uni.$TUIKitEvent.SDK_RELOAD, this.onSDKReload')
				
				
			
				this.getUserHomeData(info)
				setTimeout(function() {
					// let pages = getCurrentPages();
					// console.log(pages)
					// if (pages.length == 1) {
						uni.reLaunch({
							url: '../index/index'
						})
					// } else {
					// 	let beforePage = pages[pages
					// 		.length - 2];
					// 	uni.navigateBack({
					// 		delta: 1
					// 	})
					// }
				}, 0);
			},
			// onSDKReady(){
			// 	console.log(1111111)
			// },
			// 获取个人中心的数据，为了下单的时候可以读取店家地址
			
			getUserHomeData(info) {
				console.log(info)
				var that = this
				that.http.sendRequest('Users.Home',{'uid':info.uid,'token':info.token}).then(data => {
					console.log(data)
					var dic = data.info[0]
					uni.setStorage({
						key:'shopinfo',
						data:dic,
						success: function() {
							console.log('店铺信息存储成功')
						}
					});
					console.log(dic.address)
					var address = dic.address
					if(address && address.length>0){
						var addressDic = {
							'address': dic.address,
							'lng': dic.lng,
							'lat': dic.lat,
						}
						uni.setStorage({
							key: 'shopAddress',
							data: addressDic,
							success: function() {
								console.log('地址存储成功')
							}
						});
					}
				})
			},
			getSmsCode() {
				
				var that = this
				if (this.canshowcode == false) {
					return
				}
				let sign = this.http.sort2url({
					'mobile': this.mobile,
					'type': 1,
					'code': this.countryCode
				});
				var dic = {}
				dic.mobile = this.mobile
				dic.type = 1
				dic.code = this.countryCode
				dic.sign = sign
				// console.log(dic)
				this.http.sendRequest('Login.GetCode', dic).then(function(res) {
					if (res.code == 1002) {
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
			mobileinpit(event) {
				
				if (this.loginType == true) {
					if (event.detail.value.length > 0) {
						this.canshowcode = true
					} else {
						this.canshowcode = false
					}
				} else {
					if (event.detail.value.length > 0) {
						this.passwordFocus = true
					} else {
						this.passwordFocus = false
					}
				}
			},
			
			submit() {
				var that = this
				
				if (that.loginType) {
					if (that.mobile.length == 0 || that.code.length == 0) {
						return;
					}
				} else {
					if (that.mobile.length == 0 || that.password.length == 0) {
						return;
					}
				}

				let url;
				let data;
				if (that.loginType == true) {
					url = "Login.LoginByCode";
					data = {
						mobile: that.mobile,
						code: that.code,
						// // #ifdef MP-WEIXIN
						// env: 'weixin'
						// // #endif
					};
				} else {
					url = "Login.LoginByPass";
					data = {
						mobile: that.mobile,
						pass: that.password,
					};
				}
				uni.showLoading({
					title: '',
					mask: true
				});
				
				// #ifdef APP-PLUS
				that.http.sendRequest(url, data).then(function(res) {
					// console.log(res)
					uni.hideLoading();
					if (res.code == 0) {
						// console.log(res.info)
						that.saveLocal(res.info)
					}
				})
				// #endif
				
			},
			gotoxieyi(index){
				var url = getApp().globalData.weburl + 'appapi/page/detail?id='+ index
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '../webView/webView'
						});
					}
				})
			},
			// mpWechatLogin() {
			// 	if (this.agree == false) {
			// 		uni.showToast({
			// 			title: this.i18n.login.agree,
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	uni.getUserProfile({
			// 		desc: this.i18n.login.xinxi, // 这个参数是必须的
			// 		success: res => {
			// 			var data = JSON.parse(res.rawData)
			// 			// that.nickName = data.nickName
			// 			// that.avatar = data.avatarUrl
			// 			this.getwxopenid(data)
			// 			// uni.login({
			// 			// 	provider: 'weixin',
			// 			// 	success: res => {
			// 			// 		that.getUnionid(res.code, resolve, 2)
			// 			// 	},
			// 			// 	fail(err) {
			// 			// 		uni.hideLoading()
			// 			// 	}
			// 			// })
			// 		},
			// 		fail() {
			// 			uni.hideLoading()
			// 		}
			// 	})
			// },
			// getwxopenid(data) {
			// 	var that = this
			// 	uni.login({
			// 		success: res => {
			// 			uni.hideLoading();
			// 			uni.request({
			// 				url: getApp().globalData.weburl + "api/?s=App.Login.getUnionid",
			// 				method: 'GET',
			// 				data: {
			// 					'code': res.code
			// 				},
			// 				success: function(res2) {
			// 					console.log('getUnionid返回值', res2)
			// 					var openid = res2.data.data.openid;
			// 					getApp().globalData.openid = openid;
			// 					uni.setStorage({
			// 						key: 'openid',
			// 						data: openid,
			// 						success: function() {

			// 						}
			// 					});

			// 					let sign = that.http.sort2url({
			// 						'openid': openid,
			// 						'type': 2
			// 					});
			// 					var dic = {
			// 						'openid': openid,
			// 						'type': 2,
			// 						'sign': sign,
			// 						'nicename': data.nickName,
			// 						'avatar': data.avatarUrl,
			// 					}
			// 					that.http.sendRequest('Login.LoginByThird', dic).then(function(
			// 						res) {
			// 						that.saveLocal(res.info)
			// 					})
			// 				},
			// 			});
			// 		}
			// 	});
			// },
			// thirdLogin(item) {
			// 	if (this.agree == false) {
			// 		uni.showToast({
			// 			title: this.i18n.login.agree,
			// 			icon: 'none'
			// 		});
			// 		return;
			// 	}
			// 	var that = this
			// 	uni.getProvider({
			// 		service: 'oauth',
			// 		success: function(res) {
			// 			console.log(res.provider)
			// 			if (item.type == 1) {
			// 				uni.login({
			// 					provider: 'qq',
			// 					success: function(loginRes) {
			// 						console.log(JSON.stringify(loginRes));
			// 						uni.request({
			// 							url: 'https://graph.qq.com/user/get_user_info',
			// 							method: 'GET',
			// 							data: {
			// 								openid: loginRes.authResult.openid,
			// 								access_token: loginRes.authResult.access_token,
			// 								appid: '101988339'
			// 							},
			// 							success: res => {
			// 								console.log(res.data.nickname, res.data
			// 									.figureurl_qq)
			// 								that.getThirdNameAndAvatar(loginRes
			// 									.authResult.openid, res.data
			// 									.nickname, res.data.figureurl_qq,
			// 									'1')
			// 							},
			// 							fail: () => {},
			// 							complete: () => {}
			// 						});
			// 					}
			// 				});
			// 			} else if (item.type == 2) {
			// 				uni.login({
			// 					provider: 'weixin',
			// 					success: function(loginRes) {
			// 						uni.request({
			// 							url: 'https://api.weixin.qq.com/sns/userinfo',
			// 							method: 'GET',
			// 							data: {
			// 								openid: loginRes.authResult.openid,
			// 								access_token: loginRes.authResult.access_token
			// 							},
			// 							success: res => {
			// 								console.log(res.data.nickname, res.data
			// 									.headimgurl)
			// 								that.getThirdNameAndAvatar(loginRes
			// 									.authResult.openid, res.data
			// 									.nickname, res.data.headimgurl, '2'
			// 								)
			// 							},
			// 							fail: () => {},
			// 							complete: () => {}
			// 						});

			// 					}
			// 				});
			// 			}
			// 		}
			// 	});
			// },
			// getThirdNameAndAvatar(openid, nickname, avatar, type) {
			// 	var that = this
			// 	let sign = that.http.sort2url({
			// 		'openid': openid,
			// 		'type': type
			// 	});
			// 	var dic = {
			// 		'openid': openid,
			// 		'type': type,
			// 		'sign': sign,
			// 		'nicename': nickname,
			// 		'avatar': avatar,
			// 	}
			// 	that.http.sendRequest('Login.LoginByThird', dic).then(function(
			// 		res) {

			// 		that.saveLocal(res.info)
			// 	})
			// },
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
		/* #ifdef APP-PLUS */
		margin-top: 40px;
		/* #endif */
		/* #ifndef APP-PLUS */
		margin-top: 120px;
		/* #endif */

		/* margin-left: calc(50% - 40px); */
	}
</style>
