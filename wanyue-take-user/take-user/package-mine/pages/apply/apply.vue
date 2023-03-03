<template>
	<view>
		<wybar @clickLeft="back" :leftText="titleStr"></wybar>
		<!-- <uni-swiper-dot :info="silide" :current="current" style="height: 375rpx;"> -->
		<swiper class="topImage" :interval="3000" @change="change" autoplay circular style="height: 375rpx;">
			<swiper-item v-for="(item ,index) in silide" :key="index">
				<view class="swiper-item">
					<image @click="goSilder(item)" :src="item.image" class="swiper-item-image" mode="aspectFill">
					</image>
				</view>
			</swiper-item>
		</swiper>
		<!-- </uni-swiper-dot> -->
		<view class="msgView">
			<view class="msgView">
				<view style="font-size: 18px;font-weight: bold;height: 40px;line-height: 50px;">
					{{i18n.mine.tianxiebaomingxinxi}}
				</view>
				<view class="row cell">
					<view style="width: 80px;">
						{{i18n.mine.xingming}}
					</view>
					<input type="text" placeholder="请输入姓名" class="inputView"  v-model="name">
				</view>
				<view class="row cell">
					<view style="width: 80px;align-items: center;" class="row" @click="chooseCountry()">
						{{countryCode}}
						<image src="../../../static/xia.png" mode="" style="width: 15px;height: 15px;margin-left: 5px;">
						</image>
					</view>
					<input type="text" :placeholder="i18n.login.placePhone" class="inputView" v-model="mobile"
						@input="mobileinpit">
				</view>
				<view class="row cell">
					<view style="width: 80px;">
						{{i18n.mine.yanzhemgma}}
					</view>
					<input type="text" :placeholder="i18n.login.placeCode" class="inputView"  v-model="code">
					<view @click="getSmsCode" class="codetext"
						:style="canshowcode == true?  'color: rgba(255,77,41,1)': 'color: rgba(201,201,201,1);'">
						{{codetimes}}
					</view>
				</view>
			</view>

		</view>
		<view class="sub" @click="doSubmit()">
			{{i18n.mine.submit}}
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
				titleStr: '',
				type: 0,
				current: 0,
				silide: [],
				countryCode: '+86',
				canshowcode: false,
				timer: null,
				codetimes: '',
				mobile: '',
				code: '',
				name:''
			}
		},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'countryCode',
				success: res => {
					if(res.data){
						that.countryCode = res.data
					}
					
					console.log(res)
				}
			})
		},
		onLoad(option) {
			this.titleStr = option.name
			this.type = option.type
			if (this.type == 0) {
				this.titleStr = this.i18n.mine.shanghuruzhu
			} else if (this.type == 1) {
				this.titleStr = this.i18n.mine.qishoujiameng
			} else if (this.type == 2) {
				this.titleStr = this.i18n.mine.shangwuhezuo
			}
			this.codetimes = this.i18n.login.getcode
			this.requestData()
		},
		methods: {
			requestData(){
				var that = this
				that.http.sendRequest('MerchantEnter.GetBanner', {'type':parseInt(that.type) + 1}).then(function(res) {
					if (res.code == 0) {
						that.silide = res.info[0]
					}

				})
			},
			goSilder(item){
				if(item.url.length > 6){
					uni.setStorage({
						key: 'weburl',
						data: item.url,
						success() {
							uni.navigateTo({
								url: '/pages/webView/webView',
							});
						}
					})
				}
				
				
			},
			back() {
				uni.navigateBack({

				})
			},
			change(e) {
				this.current = e.detail.current
			},
			chooseCountry() {
				uni.navigateTo({
					url: '../../../pages/login/country'
				})
			},
			mobileinpit(event) {
				if (event.detail.value.length > 0) {
					this.canshowcode = true
				} else {
					this.canshowcode = false
				}

			},
			password_input(event) {},
			getSmsCode() {
				var that = this
				if (that.canshowcode == false) {
					return
				}
				let sign = this.http.sort2url({
					'mobile': that.mobile,
					// 'code': that.countryCode
				});
				var dic = {}
				dic.mobile = that.mobile
				dic.code = that.countryCode
				dic.sign = sign
				console.log(dic)
				that.http.sendRequest('MerchantEnter.GetCode', dic).then(function(res) {
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
			doSubmit(){
				var that = this
				var dic = {}
				dic.mobile = that.mobile
				dic.code = that.code
				dic.name = that.name
				dic.type = parseInt(that.type) + 1
				console.log(dic)
				that.http.sendRequest('MerchantEnter.Save', dic).then(function(res) {
					if (res.code == 0) {
						that.success()
					}
				
				})
			},
			success(){
				uni.navigateTo({
					url:'applySuccess?type=' + this.type
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

	.topImg {
		width: 100%;

	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-item-image {
		width: 100%;
		height: 100%;
	}

	.msgView {
		margin-left: 12px;
		width: calc(100% - 24px);
		background-color: #FFF;
		border-radius: 0 0 8px 8px;
		height: 190px;
	}

	.cell {
		width: 100%;
		height: 47px;
		font-size: 14px;
		line-height: 47px;
		border-bottom: 1px solid #f5f6f7;
	}

	.inputView {
		min-width: 35%;
		height: 100%;
		line-height: 47px;
		flex: 1;
	}

	.codetext {
		color: #A8A8A8;
		font-size: 13px;
		margin-right: 12px;
		height: 100%;
	}
	.sub {
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: 10px;
		height: 49px;
		border-radius: 8px;
		background-color: #FF5725;
		font-size: 14px;
		color: #FFF;
		font-weight: bold;
		text-align: center;
		line-height: 49px;
	}
</style>
