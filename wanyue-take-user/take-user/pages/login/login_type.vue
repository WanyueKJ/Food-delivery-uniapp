
<template>

	<view>
		<wybar @clickLeft="back"></wybar>
		<!-- <view class="top"> -->
		<!-- <image style="width: 32px;height: 32px;margin-left: 12px;position: absolute;top: 50px;"
			src="../../static/back-left.png" @click="back"></image> -->
		<!-- </view> -->
		<!-- 
		<view class="logintitle">
			登录
		</view> -->
		<view class="column" style="align-items: center;">
			<image src="../../static/logo.png" mode="aspectFit" class="logo_image"></image>
			<view style="height: 30px;color: #181818;font-size: 22px;font-weight: bold;margin-top: 15px;">
				{{appName}}
			</view>
			<view style="height: 30px;color: #6F6F6F;font-size: 12px;max-width: 90%;line-height: 18px;">
				随看随点不愁选，即点即达不久等
			</view>

			<view class="button_type" style="margin-top: 50px;color: #fff;background-color: #FF5725;"
				@click="wxLogin()">
				{{i18n.login.wxLogin}}
			</view>
			<view class="button_type" style="margin-top: 20px;color: #6F6F6F;border: #E6E6E6 solid 1px;"
				@click="doPhoneLogin()">
				{{i18n.login.phoneLogin}}
			</view>


			<view class="newstate">
				<view class="xieyis">
					{{i18n.login.denglubiaoshitongyi}}<text @click="gotoxieyi(4)"
						class="xieyi">{{i18n.login.fuwuxiyi}}</text>&<text @click="gotoxieyi(5)"
						class="xieyi">{{i18n.login.yinsizhengce}}</text>
				</view>
			</view>

		</view>





	</view>
</template>

<script>
	const app = getApp();
	
	import wybar from '../../components/wybar/wyBar.vue'
	// import {
	// 	genTestUserSig
	// } from '@/debug/GenerateTestUserSig.js';
	export default {
		components: {
			wybar
		},
		data() {
			return {
				appName: ''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onUnload() {

		},
		onReady: function() {
			// #ifndef H5
			this.top = getApp().globalData.top
			this.menuButtonHeight = getApp().globalData.menuButtonHeight
			// #endif

		},
		onShow() {

		},
		onLoad() {
			this.appName = getApp().globalData.appName
		},

		methods: {
			saveLocal(info, isTir) {
				getApp().globalData.userinfo = info
				uni.setStorage({
					key: 'userinfo',
					data: info
				});


				setTimeout(function() {
					if (isTir && info.mobile.length == 0) {
						uni.navigateTo({
							url: '/package-mine/pages/editAvatarAndName/editPhone?isbind=1'
						})
					} else {
						let pages = getCurrentPages();
						if (pages.length == 1) {
							uni.reLaunch({
								url: '../home/index'
							})
						} else {
							let beforePage = pages[pages
								.length - 2];
							uni.navigateBack({
								delta: beforePage
							})
						}
					}

				}, 1000);
			},

			gotoxieyi(type) {
				var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + type + '&lang=' + getApp().globalData
					.language
				console.log(url)
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
			back() {
				let pages = getCurrentPages();
				if (pages.length == 1) {
					uni.reLaunch({
						url: '../index/index'
					})
				} else {
					let beforePage = pages[pages
						.length - 2];
					uni.navigateBack({
						delta: beforePage
					})
				}
			},

			wxLogin() {
				uni.getUserProfile({
					desc: '获取您的用户信息', // 这个参数是必须的
					success: res => {
						var data = JSON.parse(res.rawData)
						this.getwxopenid(data)
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
								console.log('uni.login返回值', res2)
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
									'type': 2
								});
								var dic = {
									'openid': openid,
									'type': 2,
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
			doPhoneLogin() {
				console.log(11111)
				uni.navigateTo({
					url: 'login'
					// url:'./loginPhone?isArgee=' + this.isAgree
				})
			}

		}
	}
</script>

<style>
	/* @import url("./login_type.css"); */

	.logo_image {
		width: 64px;
		height: 64px;
		/* #ifdef APP-PLUS */
		margin-top: 40px;
		/* #endif */
		/* #ifndef APP-PLUS */
		margin-top: 120px;
		/* #endif */
		border-radius: 8px;
		/* margin-left: calc(50% - 40px); */
	}

	.button_type {
		width: 86%;
		height: 45px;
		border-radius: 8px;
		font-size: 16px;
		text-align: center;
		line-height: 45px;
	}

	.newstate {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 40px;
		/* margin-top: 20px; */
		width: 100%;
		position: absolute;
		bottom: 20px;
	}


	.opatity {
		opacity: 0.5;
	}

	.xieyi {
		color: #FF5725;
		font-size: 12px;
	}

	.xieyis {
		font-size: 12px;
		color: #181818;
		height: 40px;
		line-height: 40px;
		font-size: 12px;
		margin-left: 5px;
	}
</style>
