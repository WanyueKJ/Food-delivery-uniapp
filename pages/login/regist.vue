<template>
	<view>
		<view class="warp box-shadow">
			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.phone}}</view>
				<input class="phoneinput" @input="phone_input" :maxlength="11"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="phone" :focus="true" type="number"
					:placeholder="i18n.login.placePhone" />
			</view>
			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.yanzhengma}}</view>
				<input :focus="codeFocus" :maxlength="6" type="number" placeholder-style="color:#C9C9C9;font-size:16px;"
					v-model="code" :placeholder="i18n.login.placeCode" class="codeinput" />
				<view class="getcode" :style="canshowcode == true?  'color: rgba(255,77,41,1);': 'color: #C9C9C9;'"
					@click="getSmsCode">{{codetimes}}</view>
			</view>
			<view class="section row">
				<view class="sectiontitle">{{i18n.login.loginPWD}}</view>
				<input class="phoneinput" @input="password_input" :password="true"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="password"
					:placeholder="type == 1? i18n.login.pleasePass : i18n.login.pleaseInputRestPwd" />
			</view>
			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.surePasword}}</view>
				<input class="phoneinput" @input="password_input2" :password="true"
					placeholder-style="color:#C9C9C9;font-size:16px;" v-model="password2" :placeholder="i18n.login.zaiciquerenmima" />
			</view>
			<view v-if="type == 1" class="login" :class="{ opatity: enabled}" @click="submit">{{i18n.login.zhuce}}</view>
			<view v-else class="login" :class="{ opatity: enabled}" @click="submit">{{i18n.login.login}}</view>
			<view style="height: 30px;"></view>
		</view>

	</view>
</template>

<script>
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
		onReady() {
			this.codetimes = this.i18n.login.getcode
			uni.setNavigationBarTitle({
				title: this.i18n.login.zhucezhanghao
			});
		},
		computed: {
			enabled: function() {
				if (this.phone.length == 11 && this.code.length > 5 && this.password.length > 5 && this.password2
					.length > 5) {
					return false;
				}
				return true;
			},
			i18n() {
				return this.$t('index')
			},
		},
		onLoad(option) {
			this.type = option.type
			if (option.type == 1) {
				uni.setNavigationBarTitle({
					title: this.i18n.login.zhucezhanghao
				})
			} else {
				uni.setNavigationBarTitle({
					title: this.i18n.login.zhaohuimiam
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
				let sign = this.NB.sort2url({
					'account': this.phone,
					'type': this.type
				});
				var dic = {}
				dic.account = this.phone
				dic.type = this.type
				dic.sign = sign
				
				// #ifdef H5
				dic.env = 'H5'
				// #endif
				this.NB.sendRequest('Rider.Login.GetCode', dic, true).then(info => {}).catch(data => {
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
								that.codetimes = that.i18n.login.getcode
							}
						}, 1000);
					}
				})
			},
			submit() {
				if (this.password != this.password2) {
					uni.showToast({
						title: this.i18n.bind.liangcimimabuyizhi,
						icon: 'none'
					});
					return
				}
				var dic = {}
				dic.mobile = this.phone
				dic.code = this.code
				dic.pass = this.password
				console.log(dic)
				// #ifdef MP-WEIXIN
				dic.env = 'weixin'
				// #endif
				var url = ''
				if (this.type == 1) {
					url = 'Login.Reg'

				} else {
					url = 'Rider.Login.Forget'
				}

				this.NB.sendRequest(url, dic, true).then(data => {
					console.log(data)
					this.saveLocal(data.info[0])
				}).catch(data => {
					console.log(data)
				})

				return
				// #ifdef MP-WEIXIN
				var that = this
				uni.login({
					success: res => {
						uni.hideLoading();
						uni.request({
							url: getApp().globalData.site_url + "App.Login.getUnionid",
							method: 'GET',
							data: {
								'code': res.code
							},
							success: function(res2) {
								var openid = res2.data.data.openid;
								getApp().globalData.openid = openid;
								that.NB.sendRequest('Login.Reg', dic, true).then(data => {
									setTimeout(() => {
										uni.navigateBack({
											delta: 1
										});
									}, 1000)
								})
							},
						});
					}
				});
				// #endif
			},
			saveLocal(info) {
				getApp().globalData.userinfo = info
				uni.setStorage({
					key: 'userinfo',
					data: info,
					success: function() {
						setTimeout(() => {
							uni.reLaunch({
								url: '../index/index'
							})
						}, 1000)
					}
				});
				var uiddd = info.im.userId;
				const userSig = info.im.UserSig;
				uni.$TUIKit.login({
						userID: uiddd,
						userSig: userSig
					})
					.then(function(imResponse) {
						console.log('imResponse:', imResponse.data); // 登录成功
						if (imResponse.data.repeatLogin === true) {
							// 标识帐号已登录，本次登录操作为重复登录。v2.5.1 起支持
							console.log(imResponse.data.errorInfo);
						}
					})
					.catch(function(imError) {
						console.warn('login error:', imError); // 登录失败的相关信息
					});
				// 修改个人标配资料
				let promise = uni.$TUIKit.updateMyProfile({
					avatar: info.avatar,
					nick: info.user_nickname
				});
				promise.then(function(imResponse) {
					console.log(imResponse.data); // 更新资料成功
				}).catch(function(imError) {
					console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
				});
			},
		}
	}
</script>

<style>
	.login {
		background: linear-gradient(to right, rgba(254, 131, 40, 1), rgba(255, 75, 33, 1));
		color: #FFFFFF;
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		border-radius: 21px;
		margin-top: 50px;
	}

	.opatity {
		opacity: 0.5;
	}

	.getcode {
		font-size: 16px;
		position: absolute;
		right: 0;
		height: 40px;
		line-height: 40px;
	}

	.phoneinput {
		margin-left: 20px;
		width: 200px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}

	.section {
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
		align-items: center;
		padding-top: 10px;
		position: relative;
	}

	.sectiontitle {
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		width: 100px;
	}

	.codeinput {
		margin-left: 20px;
		width: 100px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}

	.codeview {
		position: relative;
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.warp {
		width: calc(100% - 30px);
		margin-left: 15px;
		margin-top: 30px;
		border-radius: 8px;
	}
</style>
