<template>
	<view class="page">
		<view class="topmobile row">
			<view>{{i18n.bind.curBindPhone}}</view>
			<view style="color: rgba(255,77,41,1);font-size: 14px;">{{showmobile}}</view>
			<view v-if="type == 1">{{i18n.bind.bindTopTip}}</view>
		</view>
		<view class="warp">
			<view class="section row">
				<!-- <view v-if="type == 1" class="sectiontitle">{{i18n.bind.newphone}}</view>
				<view v-if="type == 2" class="sectiontitle">{{i18n.bind.phone}}</view> -->
				<view @click="chooseCountry()" style="width: 100px;height: 100%;align-items: center;position: relative;justify-content: center;"
					class="row">
					<view style="color: #000;font-size: 16px;">
						{{countryCode}}
					</view>
					<image src="../../static/image/jiantouxiaxia.png" mode="aspectFit" style="width: 16px;height: 16px;margin-right: 18px;">
					</image>
					<view
						style="position: absolute;right: 9px;top: 14.5px;height: 18px;width: 1px;background-color: #D6DADE;">
					</view>
				</view>
				<input class="phoneinput" @input="phone_input" :maxlength="11"
					placeholder-style="color:#C9C9C9;font-size:14px;" v-model="phone" :focus="true" type="number"
					:placeholder="i18n.login.placePhone" />
			</view>
			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.yanzhengma}}</view>
				<input :focus="codeFocus" :maxlength="6" type="number" placeholder-style="color:#C9C9C9;font-size:14px;"
					v-model="code" :placeholder="i18n.login.placeCode" class="codeinput" />
				<view class="getcode" :style="canshowcode == true?  'color: rgba(255,77,41,1);': 'color: #C9C9C9;'"
					@click="getSmsCode">{{codetimes}}</view>
			</view>
		</view>
		<view v-if="type !=1" class="warp" style="margin-top: 10px;">
			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.setpassword}}</view>
				<input :password="true" class="phoneinput" placeholder-style="color:#C9C9C9;font-size:14px;"
					v-model="password" :placeholder="i18n.bind.passPlacehold1" />
			</view>

			<view class="section row">
				<view class="sectiontitle">{{i18n.bind.surePasword}}</view>
				<input :password="true" class="phoneinput" placeholder-style="color:#C9C9C9;font-size:14px;"
					v-model="password2" :placeholder="i18n.bind.zaiciPWD" />
			</view>
		</view>
		<view v-if="type == 1" class="login" :class="{ opatity: enabled}" @click="submit">{{i18n.bind.quedinggenghuan}}</view>
		<view v-if="type == 2" class="login" :class="{ opatity: enabled}" @click="submit">{{i18n.bind.wancheng}}</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				password2: '',
				password: '',
				codeFocus: false,
				phone: '',
				code: '',
				codetimes: '获取验证码',
				canshowcode: false,
				userInfo: '',
				showmobile: '',
				type: 1,
				countryCode: '+86'
			}
		},
		computed: {
			enabled: function() {
				if (this.phone.length > 0 && this.code.length > 5) {
					return false;
				}
				return true;
			},
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			this.codetimes = this.i18n.login.getcode
			if (this.type == 1) {
				uni.setNavigationBarTitle({
					title: this.i18n.bind.genghuanshoujihao
				})
			} else {
				uni.setNavigationBarTitle({
					title: this.i18n.bind.resetPWD
				})
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
		onLoad(option) {
			this.type = option.type
			if (this.type == 1) {
				uni.setNavigationBarTitle({
					title: this.i18n.bind.genghuanshoujihao
				})
			} else {
				uni.setNavigationBarTitle({
					title: this.i18n.bind.resetPWD
				})
			}
			
			this.userInfo = this.NB.user()
			this.showmobile = this.userInfo.mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
		},
		methods: {
			chooseCountry() {
				uni.navigateTo({
					url: 'country'
				})
			},
			phone_input(event) {
				if (event.detail.value.length > 0) {
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
				let sign;
				if (this.type == 1) {
					sign = this.NB.sort2url({
						'account': this.phone,
						'type': 4
					});
				} else {
					sign = this.NB.sort2url({
						'account': this.phone,
						'type': 3
					});
				}
				var dic = {}
				dic.account = this.phone
				dic.code = this.countryCode
				if (this.type == 1) {
					dic.type = 4
				} else {
					dic.type = 3
				}
				dic.sign = sign
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
				var dic = {}
				var url = ''
				if (this.type == 2) {
					if (this.password != this.password2) {
						uni.showToast({
							title: this.i18n.bind.liangcimimabuyizhi,
							icon: 'none'
						});
						return
					}
					dic.mobile = this.phone
					dic.code = this.code
					dic.pass = this.password
					url = 'Rider.Login.Forget'
				} else {
					dic.mobile = this.phone
					dic.code = this.code
					url = 'Rider.User.UpMobile'
				}
				var that = this
				this.NB.sendRequest(url, dic, true).then(data => {
					setTimeout(() => {
						if (that.type == 1) {
							uni.reLaunch({
								url: './login'
							})
						} else {
							uni.navigateBack({
								delta: 1
							});
						}

					}, 500)
				})
			}
		}
	}
</script>

<style>
	.section {
		position: relative;
		width: 100%;
		height: 47px;
		align-items: center;
		border-bottom: 1px solid #F5F5F5;
	}

	.sectiontitle {
		color: rgba(50, 50, 50, 1);
		font-size: 14px;
		margin-left: 15px;
		flex-shrink: 0;
		width: 100px;
	}

	.topmobile {
		color: rgba(50, 50, 50, 1);
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 60px;
		font-size: 12px;
		align-items: center;
	}

	.page {
		width: 100%;
		height: 100%;
		background-color: #FAFAFA;
	}

	.login {
		background-color: #FF5725;
		color: #FFFFFF;
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		border-radius: 4px;
		margin-top: 60px;
	}

	.getcode {
		font-size: 13px;
		position: absolute;
		right: 15px;
		height: 40px;
		line-height: 40px;
	}

	.phoneinput {
		margin-left: 5px;
		height: 47px;
		line-height: 47px;
		font-size: 14px;
		width: calc(100% - 180px);
	}

	.codeviews {
		width: 200px;
		height: 40px;
		border-bottom: 1px solid #F5F5F5;
	}

	.codeinput {
		margin-left: 5px;
		width: 150px;
		height: 47px;
		line-height: 47px;
		font-size: 14px;
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
		height: 94px;
		margin-left: 15px;
		background-color: #FFFFFF;
		border-radius: 8px;
	}
</style>
