<template>
	<view class="login-all-wrap">
		<image class="bgimage" src="./image/bj_denglu.png"></image>
		<view class="leftbtn" :style="'top:' + top + 'px;'">
			<view @click="changelogintype" v-if="loginType == true">{{i18n.login.passLogin}}</view>
			<view @click="changelogintype" v-if="loginType == false">{{i18n.login.kuaijieLogin}}</view>
		</view>
		<view v-if="loginType == true" class="logintitle">{{i18n.login.shoujikuaijieLogin}}</view>
		<view v-if="loginType == false" class="logintitle">{{i18n.login.zhpassLogin}}</view>
		<view class="vview"></view>
		<view class="codephoneinput row">
			<view @click="chooseCountry()" style="width: 70px;height: 100%;align-items: center;position: relative;;"
				class="row">
				<view style="flex: 1;color: #000;font-size: 16px;">
					{{countryCode}}
				</view>
				<image src="../../static/image/jiantouxiaxia.png" mode="aspectFit" style="width: 16px;height: 16px;margin-right: 18px;">
				</image>
				<view
					style="position: absolute;right: 9px;top: 22px;height: 18px;width: 1px;background-color: #D6DADE;">
				</view>
			</view>
			<input :placeholder="i18n.login.placePhone" v-model="mobile" @input="mobileinpit" :maxlength="11" type="number"
				placeholder-style="color:rgba(201,201,201,1);" />
		</view>
		<block v-if="loginType == true">
			<view class="codephoneinput row" style="margin-top: 20px;">
				
				<input :focus="codeFocus" :placeholder="i18n.login.placeCode" v-model="codes" :maxlength="6"
					style="flex: 1;" type="number" placeholder-style="color:rgba(201,201,201,1);" />
				<view @click="getSmsCode" class="codetext"
					:style="canshowcode == true?  'color: #FF5725;': 'color: rgba(201,201,201,1);'">
					{{codetimes}}
				</view>
			</view>
		</block>
		<block v-else>
			<view class="codephoneinput row" style="margin-top: 20px;">
				
				<input :placeholder="i18n.login.pleasePass" :focus="passwordFocus" style="width: 100%;" v-model="password"
					:password="true" type="text" placeholder-style="color:rgba(201,201,201,1);" />
			</view>
		</block>

		<view class="small-btn">
			<!-- <navigator v-if="loginType == false" class="reg-btn" url="/pages/login/regist?type=1">
				注册
			</navigator> -->
			<navigator v-if="loginType == false" class="forget-pass" url="/pages/login/regist?type=3">
				{{i18n.login.forgetPass}}
			</navigator>
		</view>

		<button enabled="enabled" class="login-btn" style="border-radius: 50rpx; border: 0;" type="primary"
			:class="{ opatity: enabled}" @click="submit">
			{{i18n.login.login}}
		</button>

		<view class="newstate">
			<view class="click" @click="agreeme"></view>
			<image v-if="agree == false" @click="agreeme" class="agree" src="../../static/image/default_denglu.png"
				mode="aspectFit"></image>
			<image v-else @click="agreeme" class="agree" src="../../static/image/selected_denglu.png" mode="aspectFit">
			</image>
			<view class="row align-center agreexieyi">
				{{i18n.login.yuedubingtongyi}}
				<text @click="gotoxieyi(4)" class="xieyi">{{i18n.login.yonghufuwuxieyi}}</text>
				{{i18n.login.he}}
				<text @click="gotoxieyi(5)" class="xieyi">{{i18n.login.yinsibaohuzhengce}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp();
	// import {
	// 	genTestUserSig
	// } from '@/debug/GenerateTestUserSig.js';
	export default {
		components: {},
		data() {
			return {
				top: 0,
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
				codes: "",
				smsType: 0, //获取验证码类型 0 登录 1 注册 2忘记密码
				unionid: '',
				nickName: '',
				avatar: '',
				countryCode: '+86'
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
		onReady() {
			this.codetimes = this.i18n.login.getcode	
		},
		onUnload() {
			clearInterval(this.timer)
			this.timer = null
		},
		onLoad(option) {
			this.top = getApp().globalData.top + 20
			
		},
		computed: {
			enabled: function() {
				if (this.loginType == true) {
					if (this.mobile.length == 11 && this.codes.length == 6) {
						return false;
					}
				} else {
					if (this.mobile.length == 11 && this.password.length > 5) {
						return false;
					}
				}
				return true;
			},
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			chooseCountry() {
				uni.navigateTo({
					url: 'country'
				})
			},
			NotAgree() {
				if (this.agree == false) {
					uni.showToast({
						title: this.i18n.login.yuedubngtongyixieyi,
						icon: 'none'
					})
					return
				}
			},
			saveLocal(info) {
				getApp().globalData.userinfo = info
				// console.log(info)
				uni.setStorage({
					key: 'userinfo',
					data: info,
					success: function() {}
				});
				
				var uiddd = info.im.userId;
				const userSig = info.im.UserSig;
			setTimeout(function() {
					uni.reLaunch({
						url: '../index/index'
					})
				}, 1000);
			},
			changelogintype() {
				this.passwordFocus = false
				this.codeFocus = false
				this.loginType = !this.loginType
			},
			mobileinpit(event) {
				if (this.loginType == true) {
					if (event.detail.value.length == 11) {
						this.canshowcode = true
					} else {
						this.canshowcode = false
					}
				} else {
					if (event.detail.value.length == 11) {
						this.passwordFocus = true
					} else {
						this.passwordFocus = false
					}
				}
			},
			password_input(event) {},
			agreeme() {
				if (this.agree == true) {
					this.agree = false;
				} else {
					this.agree = true;
				}
			},
			gotoxieyi(ID) {
				var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + ID
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '../webview/index',
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
				let sign = this.NB.sort2url({
					'account': this.mobile,
					'type': 1
				});
				var dic = {}
				dic.account = this.mobile
				dic.code = this.countryCode
				dic.type = 1
				dic.sign = sign
				console.log(dic)
				this.NB.sendRequest('Rider.Login.GetCode', dic, true).then(data => {}).catch(data => {
					console.log(data)
					if (data.code == 1002) {
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
								that.codetimes = this.i18n.login.getcode
							}
						}, 1000);
					}
				})
			},
			submit() {
				if (this.agree == false) {
					uni.showToast({
						title: this.i18n.login.yuedubngtongyixieyi,
						icon: 'none'
					});
					return;
				}
				let url;
				let data;
				if (this.loginType == true) {
					url = "Rider.Login.LoginByCode";
					data = {
						username: this.mobile,
						code: this.codes,
					};
				} else {
					url = "Rider.Login.LoginByPass";
					data = {
						username: this.mobile,
						pass: this.password,
					};
				}
				let that = this;
				uni.showLoading({
					title: '',
					mask: true
				});
				// #ifdef MP-WEIXIN
				uni.login({
					success: res => {
						console.log(res)
						uni.hideLoading();
						uni.request({
							url: getApp().globalData.mainurl + "Login.getUnionid",
							method: 'GET',
							data: {
								'code': res.code
							},
							success: function(res2) {
								console.log(res2)
								var openid = res2.data.data.openid;
								getApp().globalData.openid = openid;
								uni.setStorage({
									key: 'openid',
									data: openid,
									success: function() {

									}
								});
								that.NB.sendRequest(url, data).then(data => {
									console.log(data)
									that.saveLocal(data.info[0])
								})
							},
						});
					}
				});
				// #endif

				// #ifndef MP-WEIXIN
				that.NB.sendRequest(url, data, true).then(data => {
					that.saveLocal(data.info[0])
				})
				// #endif

			}
		}
	}
</script>

<style>
	@import url("./login.css");
</style>
