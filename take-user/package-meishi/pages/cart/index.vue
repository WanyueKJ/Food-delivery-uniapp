<template>
	<view>
		<view style="width: 100%;">
			<view style="width: 100%;">
				<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
				<view class="row" style="width: 100%;height: 40px;align-items: center;">
					<image @click="doBack()" src="../../../static/back-left.png" mode="aspectFit"
						style="width: 32px;height: 32px;margin-left: 12px;"></image>
					<view style="margin-left: 5px;flex: 1;" class="column">
						<view style="color: #181818;font-size: 16px;font-weight: bold;height: 20px;line-height: 20px;">
							{{i18n.meishi.gouwuche}}
						</view>
						<view style="color: #181818;font-size: 12px;height: 20px;line-height: 20px;">
							{{storeMsg.use_name}}
						</view>

					</view>
				</view>
			</view>
			<view class="progress">
				<view class="row" style="width: 100%;align-items: center;height: 40px;">
					<view class="line_n" style="width: 28px;">

					</view>
					<view class="yuan">
						1
					</view>
					<view class="line_n" style="width: calc(50% - 67px);">

					</view>
					<view class="yuan">
						2
					</view>
					<view class="line_g" style="flex: 1;">

					</view>
				</view>
				<view class="row" style="width: 100%;">
					<view style="width: 82px;text-align: center;font-size: 10px;line-height: 14px;">
						{{i18n.meishi.caidan}}
					</view>
					<view style="text-align: center;font-size: 10px;line-height: 14px;flex: 1;">
						{{i18n.meishi.gouwuche}}
					</view>
					<view style="width: 82px;text-align: center;font-size: 10px;line-height: 14px;">

					</view>
				</view>
			</view>

		</view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="width: 100%;background-color: #F5F6F7;">
			<view class="addressPageView">
				
				<view class="column" style="width: 100%;" v-if="adsTypeIndex == 0">
					<view class="row" style="width: 100%;height: 82px;align-items: center;" @click="doAds()">
						<view class="column"
							style="height: 100%;flex: 1;margin-left: 10px;justify-content: center;width: calc(100% - 50px);">
							<view class="ads_nameL oneline" style="height: 18px;">
								{{adress.place + ' ' + adress.addr}}
							</view>
							<view class="ads_nameL oneline"
								style="color: #6F6F6F;font-weight: 400;margin-top: 10px;font-size: 14px;"
								v-if="adress.id > 0">
								<!-- 张三 17811111111 -->
								{{adress.name + ' ' + adress.mobile}}
							</view>
							<view class="ads_nameL oneline"
								style="color: #FF5725;font-weight: 400;margin-top: 10px;font-size: 14px;" v-else>
								<!-- 张三 17811111111 -->
								{{i18n.yilou.xinzengshouhuorenmsg}}
							</view>
						</view>
						<image src="../../../static/ads-seld-right.png" mode=""
							style="width: 20px;height: 20px;margin-right: 10px;"></image>
					</view>
					<view style="margin-left: 10px;width: calc(100% - 20px);background-color: #D6DADE;height: 0.5px;">
					</view>
					<view class="row" style="width: 100%;height: 51px;align-items: center;">
						<view style="font-size: 14px;color: #6F6F6F;flex: 1;margin-left: 10px;"
							v-if="fromType == 'meishi'">
							{{i18n.meishi.songdashijian}}
						</view>
						<view style="font-size: 14px;color: #6F6F6F;flex: 1;margin-left: 10px;" v-else>
							{{i18n.yilou.fuwushijian}}
						</view>
						<view style="font-size: 14px;color: #FF5725;font-weight: bold;margin-right: 10px;"
							@click="showTimeV(0)">
							{{timeValue.name}}
							<!-- {{i18n.meishi.yuji}}11:20{{i18n.meishi.songda}} -->
						</view>
						<image src="../../../static/ads-seld-right.png" mode=""
							style="width: 20px;height: 20px;margin-right: 10px;" @click="showTimeV(0)"></image>

					</view>
				</view>
				<view class="column" style="width: 100%;" v-if="adsTypeIndex == 1">
					<view class="column" style="width: 100%;height: 82px;justify-content: center;">
						<view class="ads_nameL" style="margin-left: 10px;width: calc(100% - 20px);">
							{{storeAds.address}}
						</view>

					</view>
					<view style="margin-left: 10px;width: calc(100% - 20px);background-color: #D6DADE;height: 0.5px;">
					</view>
					<view class="row" style="width: 100%;height: 51px;align-items: center;">
						<view style="font-size: 14px;color: #6F6F6F;flex: 1;margin-left: 10px;">
							{{i18n.meishi.zitishijian}}
						</view>
						<view style="font-size: 14px;color: #FF5725;font-weight: bold;margin-right: 10px;"
							@click="showTimeV(1)">
							{{pickup_date.name}}
						</view>
						<image src="../../../static/ads-seld-right.png" mode=""
							style="width: 20px;height: 20px;margin-right: 10px;"></image>

					</view>
					<view style="margin-left: 10px;width: calc(100% - 20px);background-color: #D6DADE;height: 0.5px;">
					</view>
					<view class="row" style="width: 100%;height: 51px;align-items: center;">
						<view style="font-size: 14px;color: #6F6F6F;flex: 1;margin-left: 10px;">
							{{i18n.meishi.yuliudianhua}}
						</view>
						<!-- <view > -->
						<input
							style="font-size: 14px;color: #FF5725;font-weight: bold;margin-right: 10px;width: 120px;text-align: right;"
							type="text" v-model="mobileNum" :placeholder="i18n.login.placePhone" :focus="!isEdit"
							:disabled="isEdit" @confirm="doSure()">
						<!-- </view> -->
						<image src="../../../static/edit.png" mode=""
							style="width: 20px;height: 20px;margin-right: 10px;" @click="editPhone()"></image>

					</view>
				</view>


			</view>
			<view v-for="(item,index) in goodsArray" :key="index" class="row goods"
				:style="index == 0 ? 'margin-top: 10px;' : ''">
				<view class="row goods_numsV" @click="changeNums(index,item)">
					<view style="flex: 1;text-align: center;">
						{{item.cart_num}}
					</view>
					<image src="../../../static/home-down-z.png" mode="aspectFit"
						style="width: 12px;height: 12px;margin-right: 3px;"></image>
				</view>
				<image :src="item.product.image" mode="aspectFill" class="goods_thumb"></image>
				<view class="column" style="flex: 1;margin-left: 10px;">
					<view class="oneline" style="font-size: 14px;width: 100%;">
						{{item.use_name}}
					</view>
					<view class="oneline" style="font-size: 12px;color: #AAAAAA;"
						v-if="item.more_product_attr && item.more_product_attr.length > 0">
						<text v-for="(attr,a) in item.more_product_attr"
							:key="a">{{attr.attr.use_attr_name + (a < item.more_product_attr.length -1 ? '、' : '')}}</text>

						<!-- {{item.attr.use_attr_name}}<text
							v-if="item.parentAttr.id > 0">+{{item.parentAttr.use_attr_name}}</text> -->
					</view>
					<view class="oneline" style="font-size: 12px;color: #AAAAAA;" v-if="item.product_attr_id > 0">
						{{item.attr.use_attr_name}}<text
							v-if="item.parentAttr.id > 0">+{{item.parentAttr.use_attr_name}}</text>
					</view>
					<!-- <view class="oneline" style="font-size: 12px;color: #AAAAAA;margin-top: 5px;" v-else>
						{{i18n.yilou.wuguige}}
					</view> -->
				</view>

				<view style="font-weight: bold;font-size: 10px;margin-right: 5px;">
					¥
				</view>
				<view style="font-weight: bold;font-size: 14px;margin-right: 15px;">
					{{item.use_price}}
				</view>
				<view class="addNumsView row" v-if="changeIndex == index && timeCount > 0">
					<view @click="jianshuliang(item)"
						style="width: 39.5px;height: 30px;text-align: center;line-height: 29px;font-size: 20px;font-weight: bold;color: #FF5725;">
						-
					</view>
					<view style="width: 1px;height: 18px;background-color: #D8D8D8;">

					</view>
					<view @click="jiashuliang(item)"
						style="width: 39.5px;height: 30px;text-align: center;line-height: 29px;font-size: 20px;font-weight: bold;color: #FF5725;">
						+
					</view>
				</view>
			</view>
			<view class="jixuAdd" @click="doBack()">
				{{i18n.meishi.jixutianjia}}
			</view>

			<view class="column" style="width: 100%;background-color: #FFF;margin-top: 8px;">
				<view class="row"
					style="margin-left: 15px;margin-top: 10px;width: calc(100% - 30px);align-items: center;">
					<view style="flex: 1;font-size: 14px;color: #181818;">
						{{i18n.meishi.xiaoji}}
					</view>
					<view style="font-weight: bold;font-size: 10px;margin-right: 5px;">
						¥
					</view>
					<view style="font-weight: bold;font-size: 14px;">
						{{product_price}}
					</view>
				</view>

				<view class="row"
					style="margin-left: 15px;margin-top: 10px;width: calc(100% - 30px);align-items: center;"
					v-if="adsTypeIndex == 0 && fromType == 'meishi'">
					<view style="flex: 1;font-size: 14px;color: #181818;">
						{{i18n.meishi.waisongfei}}
					</view>
					<view style="font-weight: bold;font-size: 10px;margin-right: 5px;">
						¥
					</view>
					<view style="font-weight: bold;font-size: 14px;">
						{{peisongfei}}
					</view>
				</view>
			</view>
			<view class="column" style="margin-top: 8px;margin-bottom: 8px;width: 100%;">
				<view v-for="(item,index) in otherServer" :key="index" class="jixuAdd row"
					@click="docanjuSelected(item)">
					<view style="flex: 1;">
						{{item.name}}
					</view>
					<image :src="otherId == item.id ? '../../../static/item-sel.png' : '../../../static/item-nor.png'"
						mode="" style="width: 18px;height: 18px;margin-right: 30px;margin-top: 16px;"></image>
				</view>
			</view>

			<view style="width: 100%;height: 20px;background-color: #f5f6f7;">

			</view>
		</scroll-view>
		<view class="bottomView">
			<view style="width: 100%;background-color: #D6DADE;height: 0.5px;">

				<view class="row"
					style="margin-left: 15px;width: calc(100% - 30px);height: 40px;align-items: center;font-size: 14px;">
					{{i18n.meishi.zongjine}}
					<view class="" style="flex:1;font-size: 12px;">
						({{i18n.meishi.hanshui}})
					</view>
					<view style="font-weight: bold;font-size: 12px;margin-right: 3px;">
						¥
					</view>
					<view style="font-weight: bold;font-size: 18px;">
						{{allPrice}}
					</view>
				</view>
				<view class="next" @click="next()" v-if="up_to_send <= 0 || adsTypeIndex == 1">
					{{i18n.meishi.xiayibu}}
				</view>
				<view class="next" v-else>
					差¥{{up_to_send}}起送
				</view>
			</view>
			<timeV :type="adsTypeIndex " :storeID="storeID" :org_time="org_time" v-if="isShowTime"></timeV>
			<couponV @couponSelcted="couponSelcted" :storeID="storeID" :money="order_price" :yixuanID="coupon.id" v-if="isShowCoupon">
			</couponV>
		</view>
	</view>
</template>

<script>
	import timeV from "@/package-meishi/components/cart/time.vue"
	import couponV from "@/package-meishi/components/cart/coupon.vue"
	export default {

		components: {
			timeV,
			couponV
		},
		data() {
			return {
				system_top: 44,
				scrollHeight: 0,
				adsTypeArray: [],
				adsTypeIndex: 0,
				isEdit: true,
				timer: null,
				timeCount: 0,
				changeIndex: null,
				goodsArray: [],
				isShowTime: false,
				timeValue: {
					'name': '请选择',
					'dateStr': 0,
				},
				pickup_date: {
					'name': '请选择',
					'dateStr': 0,
				},
				iscanju: true,
				storeID: '',
				storeAds: {},
				storeMsg: null,
				fromType: '',
				adress: null,
				yujishijian: '',
				coupon: {
					id: '0',
					limit_money: 0
				},
				isShowCoupon: false,
				peisongfei: '',
				allPrice: '--',
				order_price: 0,
				product_price: 0,
				mobileNum: '',
				order_key: '',
				otherServer: [],
				otherId: '',
				org_time: 0,
				up_to_send: 0,
				store_top_type: 0,
				changeAdsGetTime:false
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onShow() {

		},
		onReady() {
			const res = uni.getSystemInfoSync();
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - this.system_top - 40 - 60 - 100
			this.adsTypeArray = [this.i18n.meishi.waimaipeisong, this.i18n.meishi.daodianziti]
		},
		onLoad(option) {

			var that = this
			that.storeMsg = JSON.parse(option.store)
			that.storeID = that.storeMsg.id
			if (that.storeMsg.address) {
				that.storeAds = that.storeMsg.address
			}
			that.fromType = option.type
			that.adress = uni.getStorageSync('userlocation');
			that.timeValue = {
				'name': that.i18n.shansong.qingxuanze,
				'dateStr': 0
			}
			that.pickup_date = {
				'name': that.i18n.shansong.qingxuanze,
				'dateStr': 0
			}
			that.store_top_type = option.top_type
			console.log(that.store_top_type,option)
			
			that.getCartGoods()

			that.getzitiList()
			that.GetServeList()
			uni.$on('timeSelcted', (e) => {
				that.isShowTime = 0
				if (e != 0) {
					if (that.adsTypeIndex == 0) {
						that.timeValue = e
					} else {
						that.pickup_date = e

					}
					that.getAllPrice()
				}
			})

			uni.$on('chooseAddressSucess', function(msg) {
				that.changeAdsGetTime = true
				that.adress = msg
				console.log('chooseAddressSucess',msg)
				that.getyujishijian()
				that.getAllPrice()
			})

		},
		onUnload() {
			// 移除监听事件  
			uni.$off('timeSelcted');
			uni.$off('chooseAddressSucess');
		},
		methods: {
			tabbarClick(index) {
				this.adsTypeIndex = index
				this.order_key = ''
				this.allPrice = '--'
				this.getAllPrice()
			},
			editPhone() {
				this.isEdit = false
			},
			doSure() {
				this.isEdit = true
				this.getAllPrice()
			},
			doBack() {
				uni.navigateBack({

				})
			},
			getCartGoods() {
				var that = this
				that.http.sendRequest('MerchantStoreCart.Index', {
					'store_id': that.storeID,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						if (info.length == 0) {
							that.doBack()
						} else {
							that.goodsArray = info
							var ppp = 0.00
							for (var i = 0; i < info.length; i++) {
								ppp += info[i].cart_num * info[i].use_price
							}
							that.product_price = ppp
							// if (that.adress.id > 0) {

							that.getyujishijian()
							// }
						}


					}
				})

			},
			getzitiList() {
				// var that = this
				// that.http.sendRequest('MerchantStoreCart.GetPickUpList', {
				// 	'store_id': that.storeID,
				// }).then(function(res) {
				// 	if (res.code == 0) {
				// 		var info = res.info[0]
				// 		if (info.length > 0) {
				// 			that.storeAds = info[0]
				// 		}
				// 	}
				// })

			},
			GetServeList() {
				var that = this
				that.http.sendRequest('MerchantStoreCart.GetServeList', {
					'store_id': that.storeID,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.otherServer = info
					}
				})

			},
			changeNums(index, item) {
				if (this.timer) {
					clearInterval(this.timer)
					this.timer = null
				}
				this.changeIndex = index
				this.timeCount = 5
				this.timer = setInterval(() => {
					this.timeCount--
					if (this.timeCount == 0) {
						clearInterval(this.timer)
						this.timer = null
					}
				}, 1000)
			},
			jiashuliang(item) {
				this.timeCount = 5

				var that = this
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': item.product_id,
					'cart_num': 1,
					'product_attr_id': item.product_attr_id,
					'more_product_attr_id': item.more_product_attr_id
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						item.cart_num = parseInt(item.cart_num) + 1
						that.getCartGoods()
					}
				})
			},
			jianshuliang(item) {
				this.timeCount = 5
				var that = this
				that.http.sendRequest('MerchantStoreCart.Save', {
					'product_id': item.product_id,
					'cart_num': -1,
					'product_attr_id': item.product_attr_id,
					'more_product_attr_id': item.more_product_attr_id
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						if (parseInt(item.cart_num) > 1) {
							item.cart_num = parseInt(item.cart_num) - 1
						}
						that.getCartGoods()
					}
				})

			},
			getyujishijian() {
				var that = this
				that.http.sendRequest('MerchantStoreCart.GetPresetTime', {
					'target_lng': that.adress.lng,
					'target_lat': that.adress.lat,
					'store_id': that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.timeValue = {
							'name': info.time,
							'dateStr': info.org_time,
						}
						that.org_time = info.org_time

						if (that.adress.id > 0 && !that.changeAdsGetTime) {
							that.getAllPrice()
						}

					}
				})
			},
			getAllPrice() {
				console.log('getAllPricegetAllPricegetAllPrice')
				var that = this
				var dic = {}
				var cartid = [];

				for (var i = 0; i < that.goodsArray.length; i++) {
					cartid.push(that.goodsArray[i].id)

				}
				dic.cart_id = JSON.stringify(cartid)
				dic.store_id = that.storeID
				dic.type = that.adsTypeIndex + 1
				dic.address_id = that.adsTypeIndex == 0 ? that.adress.id : ''
				dic.coupon_id = that.coupon.id
				dic.serve_id = that.otherId
				if (that.adsTypeIndex == 1) {
					dic.pickup_id = that.storeAds.id
					dic.pickup_date = that.pickup_date.dateStr
					dic.pickup_phone = that.mobileNum
				} else {
					dic.scheduled_time = that.timeValue.dateStr
				}
				console.log(dic)
				that.http.sendRequest('MerchantStoreCart.Confirm', dic).then(function(res) {
					console.log(res)
					if (res.code == 0) {
						var info = res.info[0]
						that.order_key = info.order_key
						that.getgezhongjiage()
					}
				})
			},
			getgezhongjiage() {
				console.log('getgezhongjiagegetgezhongjiagegetgezhongjiagegetgezhongjiage')
				var that = this
				that.http.sendRequest('MerchantStoreCart.Computed', {
					'order_key': that.order_key,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.allPrice = info.pay_price
						that.peisongfei = info.take_out_price
						that.product_price = info.product_price
						that.order_price = info.order_price
						that.up_to_send = info.up_to_send
						console.log(info)
					}
				})
			},
			showTimeV(index) {
				this.isShowTime = true
			},
			docanjuSelected(item) {
				if (this.otherId == item.id) {
					this.otherId = ''
				} else {
					this.otherId = item.id
				}
				this.getAllPrice()
				// if(this.order_key.length > 0){
				// 	this.getgezhongjiage()
				// }
			},
			next() {
				if (this.order_key.length > 0 && this.adsTypeIndex == 0) {
					uni.navigateTo({
						url: './next?storeID=' + this.storeID + '&storeName=' + this.storeMsg.use_name +
							'&order_key=' + this.order_key + '&type=' + this.fromType + '&store_top_type=' + this.store_top_type
					})
				} else {
					if (this.adsTypeIndex == 1 && this.mobileNum.length > 0) {
						var that = this
						var dic = {}
						var cartid = [];

						for (var i = 0; i < that.goodsArray.length; i++) {
							cartid.push(that.goodsArray[i].id)

						}
						dic.cart_id = JSON.stringify(cartid)
						dic.store_id = that.storeID
						dic.type = that.adsTypeIndex + 1
						dic.address_id = that.adsTypeIndex == 0 ? that.adress.id : ''
						dic.coupon_id = that.coupon.id
						dic.serve_id = that.otherId
						if (that.adsTypeIndex == 1) {
							dic.pickup_id = that.storeAds.id
							dic.pickup_date = that.pickup_date.dateStr
							dic.pickup_phone = that.mobileNum
						} else {
							dic.scheduled_time = that.timeValue.dateStr
						}
						console.log(dic)
						that.http.sendRequest('MerchantStoreCart.Confirm', dic).then(function(res) {
							if (res.code == 0) {
								var info = res.info[0]
								that.order_key = info.order_key
								uni.navigateTo({
									url: './next?storeID=' + that.storeID + '&storeName=' + that.storeMsg
										.use_name + '&order_key=' + info.order_key + '&type=' + that
										.fromType + '&store_top_type=' + that.store_top_type
								})
							}
						})
					}
				}

			},
			doAds() {
				var that = this
				if (this.adress.id > 0) {
					uni.navigateTo({
						url: '/package-mine/pages/address/address?adsType=2&slat=' + that.storeMsg.lat + '&slng=' +
							that.storeMsg.lng
					})
				} else {
					uni.navigateTo({
						url: '/package-mine/pages/address/address?foads=' + JSON.stringify(this.adress) +
							'&adsType=1&slat=' + that.storeMsg.lat + '&slng=' + that.storeMsg.lng
					})
				}

			},
			showCouponV() {
				this.isShowCoupon = true
			},
			couponSelcted(e) {
				var that = this
				that.isShowCoupon = false
				if (e != 'close') {
					if (e == 0) {
						that.coupon = {
							'name': '',
							'id': '0',
							'limit_money': 0
						}

					} else {
						that.coupon = e

					}
					that.getAllPrice()
				}
			},
		}
	}
</script>

<style>
	@import url(index.css);
</style>
