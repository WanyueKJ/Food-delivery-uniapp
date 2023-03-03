<template>
	<view>
		<wybar @clickLeft="back" :leftText="tittleStr"></wybar>
		<view class="addView" v-if="adsType == 0 || adsType == 1">
			<view class="inputBackView">
				<view class="leftTipLabel">
					{{i18n.mine.dizhi}}
				</view>
				<input type="text" @click="doSelectAds" :placeholder="i18n.mine.dianjisousuodizhi" :value="address"
					class="inputV" :disabled="true" />
				<image src="../../../static/ads-seld-right.png" mode="" class="morenImage"></image>
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
			<view class="inputBackView" @click="morenSelecteddddd()">
				<image :src=" morenSelected ? '../../../static/item-sel.png' : '../../../static/item-nor.png'"
					mode="aspectFit" class="morenImage"></image>
				<view class="morenText">
					{{i18n.mine.baocundaodizhibu}}
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="adsListView" :style="'height:' + scrollH +'px;'">
			<view class="leftTipLabel" style="font-weight: bold; border-bottom:none"
				v-if="adsType == 0 || adsType == 1">
				{{i18n.shansong.dizhibu}}
			</view>
			<view class="column" style="margin-left: 25%;margin-top: 100px;width: 50%;align-items: center;" v-if="adsListArray.length == 0 && adsType > 1">
				<image src="../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
					还没有收货地址
				</view>
				<view class="" style="height: 37px;border-radius: 19px;border: 1px solid #d8d8d8;font-size: 14px;width: 110px;line-height: 37px;text-align: center;color: #818181;margin-top: 20px;" @click="doSubMit()">
					新建地址
				</view>
			</view>
			<!-- <image src="" mode="aspectFit"
				style="width: 240px;height: 176px;position: absolute;margin-left: calc(50% - 120px);top: 75px;"
				v-if="adsListArray.length == 0 && adsType > 1"></image> -->
			<view v-for="(item,index) in adsListArray" :key="index" class="adscell" v-else>
				<view class="adscell_middle" @click="doSelectOldAds(item,index)">
					<view class="adscell_middle_title oneline" :style="item.exceed != 0 ? 'color:#989898;' : ''">
						{{item.place + item.addr}}
					</view>
					<view class="adscell_middle_tip oneline" :style="item.exceed != 0 ? 'color:#989898;' : ''">
						{{item.name + ' ' + item.mobile}}
					</view>
				</view>
				<image src="../../../static/edit.png" mode="" class="rightEidtBtn" @click="doEditOldAds(item,index)">
				</image>

			</view>

		</scroll-view>
		<text class="subBtnClass" @click="doSubMit()" v-if="adsListArray.length > 0 || adsType < 2">{{btnTitle}}</text>

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
				tittleStr: '',
				adsType: '',
				address: '',
				menpaihao: '',
				name: '',
				phoneNum: '',
				morenSelected: 1,
				adsListArray: [],
				lat: '',
				lng: '',
				btnTitle: '',
				fromW: '',
				windowHeight: 0,
				scrollH: 0,
				slat: '',
				slng: '',
			}
		},
		onLoad(option) {
			var that = this
			that.adsType = option.adsType
			that.fromW = option.fromW
			if (option.slat) {
				that.slat = option.slat
				that.slng = option.slng
			}

			var res = uni.getSystemInfoSync()
			that.windowHeight = res.windowHeight
			if (that.adsType == 0 || that.adsType == 1) {
				that.scrollH = that.windowHeight - 375 - 60
				if (option.foads) {
					var ads = JSON.parse(option.foads)
					console.log(ads)
					that.address = ads.place
					that.lat = ads.lat
					that.lng = ads.lng
					if (ads.mobile && ads.mobile.length > 0) {
						that.phoneNum = ads.mobile
						that.menpaihao = ads.addr
						that.name = ads.name
					}
				}


			} else {
				that.scrollH = that.windowHeight - 100 - 60
			}
			console.log(that.adsType, that.fromW)
			if (option.adsType == 0) {
				that.tittleStr = that.i18n.mine.tianxiequhuoxinxi

				that.btnTitle = that.i18n.mine.baocunbingshiyong

			} else if (option.adsType == 1) {
				that.tittleStr = that.i18n.mine.tianxieshouhuoxinxi

				that.btnTitle = that.i18n.mine.baocunbingshiyong

			} else {
				that.tittleStr = that.i18n.mine.dizhiguanli

				that.btnTitle = that.i18n.mine.xinjiandizhi
			}
			uni.$on('selectedAdsSuccess', (msg) => {
				console.log(msg)
				that.address = msg.name
				that.lat = msg.lat
				that.lng = msg.lng
				console.log(that.address, that.lat, that.lng)
			})
		},
		onUnload() {
			uni.$off('selectedAdsSuccess');
		},
		onShow() {
			this.requesrList()
		},
		methods: {
			requesrList(){
				var that = this
				that.http.sendRequest('Addr.GetList', {
					'store_lng': that.slng,
					'store_lat': that.slat
				}).then(function(res) {
					var info = res.info
					that.adsListArray = info
				})
			},
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
					url: './handSelecedAds?from=1'
				})
			},
			morenSelecteddddd() {
				this.morenSelected = !this.morenSelected;
			},
			doSelectOldAds(item, index) {
				if (item.exceed == 0) {
					var that = this

					item.type = that.adsType > 1 ? that.adsType - 2 : that.adsType
					uni.navigateBack({

					})
					if (that.fromW != 'mineas') {
						if (that.fromW == 'order') {
							uni.$emit('chooseAddressSucess2', item)
						} else {
							uni.$emit('chooseAddressSucess', item)
						}
					}
				}



				console.log(item)
			},
			doEditOldAds(item, index) {
				console.log(item)
				uni.navigateTo({
					url: './editAds?item=' + JSON.stringify(item)
				})
			},
			doSubMit() {
				var that = this
				if (that.slat.length > 0 && that.slng.length > 0 && (this.adsType == 0 || this.adsType == 1)) {
					var dic = {
						
						'lat': that.lat,
						'lng': that.lng,
						'store_lng': that.slng,
						'store_lat': that.slat,
						
					}
				
					that.http.sendRequest('Addr.CheckExceedAddress', dic).then(function(res) {
						
						if(res.code == 0){
							that.zaixieyibian()
						}else{
							uni.hideToast()
							uni.showModal({
								title: that.i18n.xinkaifa.qingqueren,
								content: res.msg,
								showCancel: true,
								cancelText: that.i18n.xinkaifa.tiaozhengdizhi,
								confirmText: that.i18n.xinkaifa.rengranbaocun,
								success: res => {
									if (res.confirm) {
										that.baocundizhi()
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}

					})
				} else {


					if (this.morenSelected) {
						if (this.adsType == 0 || this.adsType == 1) {
							var msgDic = {
								'place': that.address,
								'lat': that.lat,
								'lng': that.lng,
								'addr': that.menpaihao,
								'name': that.name,
								'mobile': that.phoneNum,

							}
							that.http.sendRequest('Addr.Set', msgDic).then(function(res) {
								msgDic.type = that.adsType > 1 ? that.adsType - 2 : that.adsType
								const dic = res.info[0]
								msgDic.id = dic.id
								uni.navigateBack({

								})
								if (that.fromW != 'mineas') {
									if (that.fromW == 'order') {
										uni.$emit('chooseAddressSucess2', msgDic)
									} else {
										uni.$emit('chooseAddressSucess', msgDic)
									}
								}

							})

						} else {
							var msgDic = {}
							uni.navigateTo({
								url: './editAds?item=' + JSON.stringify(msgDic) +'&slng=' + that.slng + '&slat=' + that.slat
							})
						}
					} else {
						if (that.address.length == 0 || that.lat.length == 0 || that.lng.length == 0 || that.menpaihao
							.length == 0 || that.name.length == 0 || that.phoneNum.length == 0) {
							uni.showToast({
								title: that.i18n.mine.qingwanshandizhi,
								duration: 2000,
								icon: none
							})
							return
						}
						var msgDic = {
							'place': that.address,
							'lat': that.lat,
							'lng': that.lng,
							'addr': that.menpaihao,
							'name': that.name,
							'mobile': that.phoneNum,
							'type': that.adsType > 1 ? that.adsType - 2 : that.adsType
						}
						uni.navigateBack({

						})
						if (that.fromW != 'mineas') {
							if (that.fromW == 'order') {
								uni.$emit('chooseAddressSucess2', msgDic)
							} else {
								uni.$emit('chooseAddressSucess', msgDic)
							}
						}

					}
				}
			},
			zaixieyibian(){
				var that = this
				if (this.morenSelected) {
					if (this.adsType == 0 || this.adsType == 1) {
						var msgDic = {
							'place': that.address,
							'lat': that.lat,
							'lng': that.lng,
							'addr': that.menpaihao,
							'name': that.name,
							'mobile': that.phoneNum,
				
						}
						that.http.sendRequest('Addr.Set', msgDic).then(function(res) {
							msgDic.type = that.adsType > 1 ? that.adsType - 2 : that.adsType
							const dic = res.info[0]
							msgDic.id = dic.id
							uni.navigateBack({
				
							})
							if (that.fromW != 'mineas') {
								if (that.fromW == 'order') {
									uni.$emit('chooseAddressSucess2', msgDic)
								} else {
									uni.$emit('chooseAddressSucess', msgDic)
								}
							}
				
						})
				
					} else {
						var msgDic = {}
						uni.navigateTo({
							url: './editAds?item=' + JSON.stringify(msgDic)
						})
					}
				} else {
					if (that.address.length == 0 || that.lat.length == 0 || that.lng.length == 0 || that.menpaihao
						.length == 0 || that.name.length == 0 || that.phoneNum.length == 0) {
						uni.showToast({
							title: that.i18n.mine.qingwanshandizhi,
							duration: 2000,
							icon: none
						})
						return
					}
					var msgDic = {
						'place': that.address,
						'lat': that.lat,
						'lng': that.lng,
						'addr': that.menpaihao,
						'name': that.name,
						'mobile': that.phoneNum,
						'type': that.adsType > 1 ? that.adsType - 2 : that.adsType
					}
					uni.navigateBack({
				
					})
					if (that.fromW != 'mineas') {
						if (that.fromW == 'order') {
							uni.$emit('chooseAddressSucess2', msgDic)
						} else {
							uni.$emit('chooseAddressSucess', msgDic)
						}
					}
				
				}
			},
			baocundizhi(){
				var that = this
				var msgDic = {
					'place': that.address,
					'lat': that.lat,
					'lng': that.lng,
					'addr': that.menpaihao,
					'name': that.name,
					'mobile': that.phoneNum,
				
				}
				that.http.sendRequest('Addr.Set', msgDic).then(function(res) {
					that.requesrList()
				})
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
		background-color: #f7f8f9;
		overflow: hidden;
	}

	.content {
		background-color: #f7f8f9;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.addView {
		width: calc(100% - 24px);
		margin-left: 12px;
		height: 264px;
		margin-top: 10px;
		background-color: #FFFFFF;
		border-radius: 10px;
	}

	.inputBackView {
		width: 100%;
		height: 51px;
		display: flex;
		flex-direction: row;
	}

	.leftTipLabel {
		margin-left: 12px;
		height: 51px;
		line-height: 51px;
		top: 0;
		font-size: 16px;
		color: #323232;
		width: 75px;
		border-bottom: 1px solid #f0f0f0;
	}

	.inputV {
		border-bottom: 1px solid #f0f0f0;
		height: 51px;
		line-height: 51px;
		top: 0;
		font-size: 14px;
		width: calc(100% - 100px);

	}

	.morenImage {
		margin-left: 10px;
		height: 16px;
		width: 16px;
		margin-top: 18px;

	}

	.morenText {
		margin-left: 6px;
		height: 20px;
		margin-top: 16px;
		line-height: 20px;
		font-size: 15px;
		color: #323232;
	}

	.adsListView {
		width: calc(100% - 24px);
		margin-left: 12px;
		height: auto;
		margin-top: 10px;
		background-color: #FFFFFF;
		border-radius: 10px;
		position: relative;
	}

	.adscell {
		width: calc(100% - 24px);
		margin-left: 12px;
		height: 70px;
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.adscell_middle {
		height: 100%;
		width: calc(100% - 52px);
		display: flex;
		flex-direction: column;
	}

	.adscell_middle_title {
		margin-top: 15px;
		height: 20px;
		line-height: 20px;
		color: #323232;
		font-size: 16px;
	}

	.adscell_middle_tip {

		height: 30px;
		line-height: 30px;
		color: #989898;
		font-size: 13px;
	}

	.rightEidtBtn {
		height: 16px;
		width: 16px;
		margin-top: 27px;
		margin-right: 10px;
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
