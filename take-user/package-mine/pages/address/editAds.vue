<template>
	<view class="content">
		<view style="width: 100%;background-color: #FFFFFF;position: relative;"
			:style="'height:' + (statusBarHeight + 48) + 'px;'">
			<view class="row" style="width: 100%;height: 48px;position: absolute;bottom: 0;">
				<image src="../../../static/back-yuan.png" mode="" class="returnImage" @click="doreturn()"></image>
				<text v-if="isEdit"
					style="margin-left: calc(33.3% - 52px);height: 48px;font-size: 18px;line-height: 48px;color: #323232;font-weight: bold;width: 33.3%;text-align: center;">{{i18n.mine.bianjidizhi}}</text>
				<text v-else
					style="margin-left: calc(33.3% - 52px);height: 48px;font-size: 18px;line-height: 48px;color: #323232;font-weight: bold;width: 33.3%;text-align: center;">{{i18n.mine.xinjiandizhi}}</text>
				<!-- #ifdef MP-WEIXIN -->
				<view class="weixin-rightBtn" :style="'right:' + (menuButtonWidth+20) + 'px;'" @click="doDelate()"
					v-if="isEdit">{{i18n.mine.shanchu}}
				</view>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<view class="weixin-rightBtn" :style="'right:12px;'" @click="doDelate()" v-if="isEdit">
					{{i18n.mine.shanchu}}
				</view>
				<!-- #endif -->
			</view>

		</view>
		<view class="addView">
			<view class="inputBackView" style="position: relative;">
				<view class="leftTipLabel">
					{{i18n.mine.dizhi}}
				</view>
				<input type="text" @click="doSelectAds" :placeholder="i18n.mine.dianjisousuodizhi" :value="address"
					class="inputV" :disabled="true" />
				<image src="../../../static/ads-seld-right.png" mode="" class="morenImage" @click="doSelectAds"></image>
			</view>
			<view class="inputBackView">
				<view class="leftTipLabel">
					{{i18n.mine.menpaihao}}
				</view>
				<input type="text" @input="input1" :placeholder="i18n.mine.tianxiexiangxidizhi" :value="menpaihao"
					class="inputV" />
			</view>
			<view class="inputBackView">
				<view class="leftTipLabel">
					{{i18n.mine.lianxiren}}
				</view>
				<input type="text" @input="input2" :placeholder="i18n.mine.xingming" :value="name" class="inputV" />
			</view>
			<view class="inputBackView">
				<view class="leftTipLabel">
					{{i18n.mine.shoujihao}}
				</view>
				<input type="number" @input="input3" :placeholder="i18n.mine.shoujihaoma" :value="phoneNum"
					class="inputV" />
			</view>
		</view>
		<text class="subBtnClass" @click="docheck()">{{btnTitle}}</text>

	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				address: '',
				menpaihao: '',
				name: '',
				phoneNum: '',
				msg: {},
				lat: '',
				lng: '',
				btnTitle: '',
				isEdit: 0,
				statusBarHeight: 0,
				menuButtonWidth: 0,
				slat: '',
				slng: ''
			}
		},
		onLoad(option) {
			var that = this
			that.msg = JSON.parse(option.item)
			if (option.slat && option.slng) {
				that.slat = option.slat
				that.slng = option.slng
			}
			console.log(that.msg)
			that.statusBarHeight = getApp().globalData.top
			that.menuButtonWidth = getApp().globalData.menuButtonWidth
			console.log(that.statusBarHeight, that.menuButtonWidth)
			that.address = that.msg.place
			that.menpaihao = that.msg.addr
			that.name = that.msg.name
			that.phoneNum = that.msg.mobile
			that.lat = that.msg.lat
			that.lng = that.msg.lng
			if (that.msg.mobile) {
				that.btnTitle = that.i18n.mine.baocunbingshiyong
				that.isEdit = 1
				// uni.setNavigationBarTitle({
				// 	title:'编辑地址'
				// })
			} else {
				that.isEdit = 0
				that.btnTitle = that.i18n.mine.save
				// uni.setNavigationBarTitle({
				// 	title:'新建地址'
				// })
				// var webView = this.$mp.page.$getAppWebview();
				// webView.setTitleNViewButtonStyle(0,{  
				//     width: '0'  
				// });  

			}
			uni.$on('selectedAdsSuccess2', (msg) => {
				console.log(msg)
				that.address = msg.name
				that.lat = msg.lat
				that.lng = msg.lng
			})

		},
		onUnload() {
			uni.$off('selectedAdsSuccess2');
		},
		methods: {
			input1(e) {
				this.menpaihao = e.detail.value
				console.log(e.detail.value)
			},
			input2(e) {
				this.name = e.detail.value
				console.log(e.detail.value)
			},
			input3(e) {
				this.phoneNum = e.detail.value
				console.log(e.detail.value)
			},
			doSelectAds() {
				console.log('选择地址了')
				uni.navigateTo({
					url: './handSelecedAds?from=2'
				})
			},
			docheck() {
				var that = this
				if (that.slat.length > 0 && that.slng.length > 0) {
					var dic = {

						'lat': that.lat,
						'lng': that.lng,
						'store_lng': that.slng,
						'store_lat': that.slat,

					}

					that.http.sendRequest('Addr.CheckExceedAddress', dic).then(function(res) {

						if (res.code == 0) {
							that.doSubMit()
						} else {
							uni.hideToast()
							uni.showModal({
								title: that.i18n.xinkaifa.qingqueren,
								content: res.msg,
								showCancel: true,
								cancelText: that.i18n.xinkaifa.tiaozhengdizhi,
								confirmText: that.i18n.xinkaifa.rengranbaocun,
								success: res => {
									if (res.confirm) {
										that.doSubMit()
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}

					})
				} else {
					that.doSubMit()
				}

			},
			doSubMit() {
				var that = this
				var dic = {
					place: that.address,
					addr: that.menpaihao,
					name: that.name,
					mobile: that.phoneNum,
					lat: that.lat,
					lng: that.lng
				}
				var url = ''
				if (that.msg.mobile) {
					url = 'Addr.Up'
					dic.addrid = that.msg.id
				} else {
					url = 'Addr.Set'
				}
				console.log(url, dic)
				that.http.sendRequest(url, dic).then(function(res) {
					if (res.code == 0) {
						uni.navigateBack({

						})
					}

				})
			},
			doDelate() {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.mine.shanchuTip,
					showCancel: true,
					cancelText: that.i18n.cancel,
					confirmText: that.i18n.sure,
					success: res => {
						if (res.confirm) {
							that.requestDelate()
						}
					},
					fail: () => {},
					complete: () => {}
				});


			},
			requestDelate() {
				var that = this
				that.http.sendRequest('Addr.Del', {
					addrid: that.msg.id
				}).then(function(res) {
					uni.navigateBack({

					})
				})
			},
			doreturn() {
				uni.navigateBack({

				})
			}
		}

	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.content {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.returnImage {
		margin-left: 12px;
		margin-top: 4px;
		width: 40px;
		height: 40px;
	}

	.weixin-rightBtn {
		margin-top: 9px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #989898;
		position: absolute;
	}

	.addView {
		width: 100%;
		/* margin-left: 12px; */
		height: 264px;
		margin-top: 10px;
	}

	.inputBackView {
		/* width: 100%; */
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 51px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;

	}

	.leftTipLabel {
		/* margin-left: 12px; */
		width: 100px;
		height: 51px;
		line-height: 51px;
		top: 0;
		font-size: 16px;
		color: #323232;
		width: 75px;
		/* background-color: #007AFF; */
	}

	.inputV {
		/* border-bottom: 1px solid #f0f0f0; */
		height: 51px;
		line-height: 51px;
		top: 0;
		font-size: 14px;
		width: calc(100% - 150px);
		/* background-color: #DD524D; */
		/* margin-left: 5px; */
	}

	.morenImage {
		margin-right: 10px;
		height: 16px;
		width: 16px;
		margin-top: 18px;
		position: absolute;
		right: 0;
	}

	.subBtnClass {
		position: absolute;
		bottom: 40rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 96rpx;
		border-radius: 48rpx;
		background-color: #FF5725;
		line-height: 96rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}
</style>
