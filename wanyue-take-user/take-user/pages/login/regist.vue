<template>
	<view>
		<view class="warp box-shadow">
			<view class="section row">
				<view class="sectiontitle">手机号</view>
				<input class="phoneinput" @input="phone_input" :maxlength="11"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="phone" :focus="true" type="number"
					placeholder="请输入手机号" />
			</view>
			<view class="section row">
				<view class="sectiontitle">验证码</view>
				<input :focus="codeFocus" :maxlength="6" type="number" placeholder-style="color:#C9C9C9;font-size:16px;"
					v-model="code" placeholder="请输入验证码" class="codeinput" />
				<view class="getcode" :style="canshowcode == true?  'color: rgba(255,77,41,1);': 'color: #C9C9C9;'"
					@click="getSmsCode">{{codetimes}}</view>
			</view>
			<view class="section row">
				<view class="sectiontitle">登录密码</view>
				<input class="phoneinput" @input="password_input" :password="true"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="password"
					:placeholder="type == 1? '请输入密码':'请输入重置密码'" />
			</view>
			<view class="section row">
				<view class="sectiontitle">确认密码</view>
				<input class="phoneinput" @input="password_input2" :password="true"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="password2" placeholder="请再次确认密码" />
			</view>
			<view v-if="type == 1" class="login" :class="{ opatity: enabled}" @click="submit">注册</view>
			<view v-else class="login" :class="{ opatity: enabled}" @click="submit">登录</view>
			<view style="height: 30px;"></view>
		</view>

	</view>
</template>

<script>
	import {
		genTestUserSig
	} from '@/debug/GenerateTestUserSig.js';
	export default {
		data() {
			return {
				password: '',
				password2: '',
				phone: '',
				code: '',
				type: 0,
				codeFocus: false,
				codetimes: '获取验证码',
				canshowcode: false,
			}
		},
		computed: {
			enabled: function() {
				if (this.phone.length == 11 && this.code.length > 5 && this.password.length > 5 && this.password2
					.length > 5) {
					return false;
				}
				return true;
			},
		},
		onLoad(option) {
			this.type = option.type
			if (option.type == 1) {
				uni.setNavigationBarTitle({
					title: '注册账号'
				})
			} else {
				uni.setNavigationBarTitle({
					title: '找回密码'
				})
			}
		},
		methods: {
			password_input(event) {

			},
			password_input2(event) {

			},
			phone_input(event) {
				if (event.detail.value.length == 11) {
					this.canshowcode = true;
				} else {
					this.canshowcode = false;
				}
			},
			getSmsCode() {
				if (this.canshowcode == false) {
					return
				}
				var that = this
				let sign = this.http.sort2url({
					'mobile': this.phone,
					'type': this.type == 1 ? '2' : '3'
				});
				var dic = {}
				dic.mobile = this.phone
				dic.type = this.type == 1 ? '2' : '3'
				dic.sign = sign
				// #ifdef MP-WEIXIN
				dic.env = 'weixin'
				// #endif
				// #ifdef H5
				dic.env = 'H5'
				// #endif
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
								that.codetimes = '获取验证码'
							}
						}, 1000);
					}
				})
				// this.NB.sendRequest('Login.GetCode', dic, true).then(info => {}).catch(data => {
				// 	if (data.code == 1002) {
				// 		that.codeFocus = true
				// 		var time = 60
				// 		that.canshowcode = false
				// 		clearInterval(that.timer)
				// 		that.timer = null
				// 		that.codetimes = '(' + '60s)'
				// 		that.timer = setInterval(function() {
				// 			time = time - 1
				// 			that.codetimes = '(' + time + 's)'
				// 			if (time == 0) {
				// 				clearInterval(that.timer)
				// 				that.timer = null
				// 				that.canshowcode = true
				// 				that.codetimes = '获取验证码'
				// 			}
				// 		}, 1000);
				// 	}
				// })
			},
			submit() {

				var dic = {}
				dic.mobile = this.phone
				dic.code = this.code
				dic.pass = this.password
				dic.pass2 = this.password2
				// #ifdef MP-WEIXIN
				dic.env = 'weixin'
				// #endif
				// #ifdef H5
				dic.env = 'H5'
				// #endif

				var url = ''
				if (this.type == 1) {
					url = 'Login.Reg'
				} else {
					url = 'Login.Forget'
				}
				// #ifndef MP-WEIXIN
				var that = this
				that.http.sendRequest(url, dic).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						console.log(info)
						that.saveLocal(info)
					}

				})
				// this.NB.sendRequest(url, dic, true).then(info => {
				// 	this.saveLocal(info)
				// })
				// #endif

				// #ifdef MP-WEIXIN
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
								var openid = res2.data.data.openid;
								getApp().globalData.openid = openid;
								uni.setStorage({
									key: 'openid',
									data: openid,
									success: function() {

									}
								});
								that.http.sendRequest(url, dic).then(function(res) {
									if (res.code == 0) {
										var info = res.info[0]
										console.log(info)
										that.saveLocal(info)
									}

								})
								// that.NB.sendRequest('Login.Reg', dic, true).then(info => {
								// 	that.saveLocal(info)
								// })
							},
						});
					}
				});
				// #endif
			},
			saveLocal(info) {
				console.log(21121212121211212)
				// if (this.type == 1) {

					getApp().globalData.userinfo = info
					uni.setStorage({
						key: 'userinfo',
						data: info,
						success: function() {}
					});
					setTimeout(function() {
						// let pages = getCurrentPages();
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
				// } else {
				// 	uni.navigateBack({

				// 	})
				// }
				
				
			},
		}
	}
</script>

<style>
	@import url("./regist.css");
</style>
