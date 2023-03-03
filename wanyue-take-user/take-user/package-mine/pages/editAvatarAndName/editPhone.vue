<template>
	<view>
		<wybar @clickLeft="back" :rightText="isbind ? i18n.yilou.tiaoguo : ''" @clickRight="clickRight"></wybar>
		<view class="tip" v-if="isbind">
			{{i18n.yilou.bangdingphone}}
		</view>
		<view class="tip" v-else>
			{{i18n.mine.editPhoneTip}}
		</view>
		<view class="inputback row">
			<view @click="chooseCountry()" style="width: 70px;height: 100%;align-items: center;position: relative;;" class="row">
				<view style="flex: 1;color: #000;font-size: 16px;">
					{{countryCode}}
				</view>
				<image src="../../../static/xia.png" mode="aspectFit" style="width: 16px;height: 16px;margin-right: 18px;"></image>
				<view style="position: absolute;right: 9px;top: 22px;height: 18px;width: 1px;background-color: #D6DADE;">
					
				</view>
			</view>
			
			<input type="number" @input="inputphone" :value="mobile" class="input" style="margin-left: 15px;width: auto;">
		</view>
		
		<view class="inputback row" style="align-items: center;">
			<input type="number" @input="inputCode" :placeholder="i18n.login.placeCode" class="input" style="width: auto;flex: 1;">
			<view @click="getSmsCode" class="codetext"
				:style="canshowcode == true?  'color: #FF5725': 'color: rgba(201,201,201,1);'">
				{{codetimes}}
			</view>
		</view>

		<view class="save" @click="doSave()" v-if="isbind">
			{{i18n.yilou.bangding}}
		</view>
		<view class="save" @click="doSave()" v-else>
			{{i18n.mine.querenxiugai}}
		</view>
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		
		data() {
			return {
				mobile:'',
				countryCode:'+86',
				codetimes: '获取验证码',
				timer: null,
				canshowcode: false,
				code:'',
				isbind:false
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
			this.codetimes = this.i18n.login.getcode
			if(option.isbind == 1){
				this.isbind = true
			}
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			chooseCountry(){
				uni.navigateTo({
					url:'../../../pages/login/country'
				})
			},
			inputphone(e){
				this.mobile = e.detail.value
				if(this.mobile.length > 2){
					this.canshowcode = true
					
				}else{
					this.canshowcode = false
				}
			},
			inputCode(e){
				this.code = e.detail.value
			},
			getSmsCode() {
				var that = this
				if (this.canshowcode == false) {
					return
				}
				let sign = this.http.sort2url({
					'mobile': this.mobile,
					'type': 5
				});
				var dic = {}
				dic.mobile = this.mobile
				dic.type = 5
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
			doSave(){
				var that = this
				var dic = {}
				dic.code = that.code
				dic.new_mobile = that.countryCode + '-' + that.mobile
				console.log(dic)
				that.http.sendRequest('User.UpMobile', dic).then(function(res) {
					if (res.code == 0) {
						var userInfo = uni.getStorageSync('userinfo');
						userInfo.mobile = that.mobile
						uni.setStorage({
							key: 'userinfo',
							data: userInfo
						})
						if(that.isbind){
							uni.reLaunch({
								url:'/pages/index/index'
							})
						}else{
							that.back()
						}
						
					}
							
				})
			},
			clickRight(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
	}

	.tip {
		margin-left: 15px;
		width: calc(100% - 30px);
		margin-top: 30px;
		font-size: 24px;
		font-weight: bold;
		color: #FF5725;
	}

	.inputback {
		margin-left: 15px;
		width: calc(100% - 30px);
		margin-top: 20px;
		height: 60px;
		border-radius: 8px;
		background-color: #FFF;
	}

	.input {
		margin-left: 15px;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		font-weight: bold;
		color: #FF5725;
		width: calc(100% - 30px);
	}

	.save {
		left: 15px;
		width: calc(100% - 30px);
		height: 49px;
		line-height: 49px;
		border-radius: 8px;
		color: #FFF;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		background-color: #FF5725;
		position: absolute;
		bottom: 50px;
	}
	.codetext {
		color: rgba(201, 201, 201, 1);
		font-size: 16px;
		margin-right: 10px;
	}
</style>
