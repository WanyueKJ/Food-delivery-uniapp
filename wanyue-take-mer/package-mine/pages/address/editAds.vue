<template>
	<view class="content">
		<wybar @clickLeft="back" :titleText="i18n.mine.shopaddress" :rightText="i18n.mine.save" @clickRight="save">
		</wybar>
		<view class="addView">
			<view class="inputBackView" style="position: relative;">
				<input type="text" @click="doSelectAds" :placeholder="i18n.mine.searchAddress" :value="address"
					class="inputV" :disabled="true" />
				<image src="../../../static/ads-seld-right.png" mode="" class="morenImage" @click="doSelectAds"></image>
			</view>
			<view class="inputBackView">
				<input type="text" @input="input1" :placeholder="i18n.mine.addresstip" :value="detailAddress"
					class="inputV" />
			</view>

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
				address: '',
				msg: {},
				lat: '',
				lng: '',
				detailAddress: '',
				statusBarHeight: 0,
				menuButtonWidth: 0
			}
		},
		onLoad(option) {
			var that = this
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
				this.detailAddress = e.target.value

			},
			doSelectAds() {
				console.log('选择地址了')
				uni.navigateTo({
					url: 'handSelecedAds?from=2'
				})
			},

			save() {
				if (this.detailAddress.length == 0) {
					uni.showLoading({
						title: this.i18n.mine.addresstip
					})
					setTimeout(function() {
						uni.hideLoading();
					}, 2000)
					return
				}
				if (this.address) {
					var dic = {
						'address': this.address,
						'detailAddress': this.detailAddress,
						'lng': this.lng,
						'lat': this.lat
					}
					var that = this
					var adds = this.address + this.detailAddress
					var param = {'address':adds,
								 'lng': this.lng,
								 'lat': this.lat}
					this.http.sendRequest('Users.Update', param).then(function(res) {
						if (res.code == 0) {
							that.addressDic = {
								'address': adds,
								'lng': that.lng,
								'lat': that.lat,
							}
							uni.setStorage({
								key: 'shopAddress',
								data: that.addressDic,
								success: function() {
									console.log('地址存储成功' + that.addressDic)
								}
							});
							
						}
					})
					uni.$emit('updateAddress', dic)
					let pages = getCurrentPages();
					uni.navigateBack({
						delta: pages.length - 2
					})
				}
			},

			back() {
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
		margin-right: 10px;
		flex: 1;
		font-size: 14px;
		
		/* background-color: #DD524D; */
		/* margin-left: 5px; */
	}

	.morenImage {
		margin-right: 10px;
		height: 16px;
		width: 16px;
		margin-top: 18px;
	}

	.subBtnClass {
		position: absolute;
		bottom: 40rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 96rpx;
		border-radius: 48rpx;
		background-color: #7900B2;
		line-height: 96rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}
</style>
