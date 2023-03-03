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
							{{storeName}}
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
					<view class="line_n" style="width: calc(50% - 67px);">

					</view>
					<view class="yuan">
						3
					</view>
					<view class="line_n" style="width: 28px;">

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
						{{i18n.meishi.jiezhang}}
					</view>
				</view>
			</view>

		</view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="width: 100%;background-color: #F5F6F7;">

			<view class="payView">
				<view
					style="width: 100%;height: 40px;padding-left: 12px;line-height: 40px;font-size: 14px;font-weight: bold;">
					{{i18n.meishi.fukuanfangshi}}
				</view>
				<view @click="payTypeClick(item,index)" v-for="(item,index) in payTypeList" :key="index" class="row"
					style="width: 100%;height: 60px;">
					<image :src="item.thumb" mode="" class="payType-item-image"></image>
					<text class="payType-item-name">{{item.name}}</text>
					<image src="../../../static/item-sel.png" mode="" class="payType-item-Btn"
						v-if="selectIndex == index"></image>
					<image src="../../../static/item-nor.png" mode="" class="payType-item-Btn" v-else></image>
				</view>
			</view>

			<view class="payView">
				<view
					style="width: 100%;height: 40px;padding-left: 12px;line-height: 40px;font-size: 14px;font-weight: bold;">
					{{i18n.meishi.dingdanneirong}}
				</view>
				<view v-for="(item,index) in goodsArray" :key="index" class="row"
					style="width: 100%;height: 54px;align-items: center;">
					<view style="font-size: 14px;margin-left: 10px;">
						{{item.cart_num}}x
					</view>
					<view class="column" style="margin-left: 10px;flex: 1;justify-content: center;height: 100%;">
						<view class="oneline" style="font-size: 14px;">
							{{item.use_name}}
						</view>
						<view class="oneline" style="font-size: 12px;color: #AAAAAA;" v-if="item.more_product_attr && item.more_product_attr.length > 0">
							<text v-for="(attr,a) in item.more_product_attr" :key="a">{{attr.attr.use_attr_name + (a < item.more_product_attr.length -1 ? '、' : '')}}</text>
							
							<!-- {{item.attr.use_attr_name}}<text
								v-if="item.parentAttr.id > 0">+{{item.parentAttr.use_attr_name}}</text> -->
						</view>
						<view class="oneline" style="font-size: 12px;color: #AAAAAA;margin-top: 5px;"
							v-if="item.product_attr_id > 0">
							{{item.attr.use_attr_name}}
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
				</view>
				<view
					style="width: calc(100% - 24px);height: 1px;background-color: #f5f6f7;margin-left: 12px;margin-top: 10px;margin-bottom: 10px;">
				</view>

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
					style="margin-left: 15px;margin-top: 10px;width: calc(100% - 30px);align-items: center;" v-if="fromType == 'meishi'">
					<view style="flex: 1;font-size: 14px;color: #181818;">
						{{i18n.meishi.waisongfei}}
					</view>
					<view style="font-weight: bold;font-size: 10px;margin-right: 5px;">
						¥
					</view>
					<view style="font-weight: bold;font-size: 14px;">
						{{take_out_price}}
					</view>
				</view>
				<view style="width: 100%;height: 10px;">

				</view>
			</view>
			<view style="width: 100%;height: 40px;">

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
						{{pay_price}}
					</view>
				</view>
				<button class="next" @click="xiadan()" :disabled="disabled">{{i18n.meishi.xianzaixiadan}}</button>
				<!-- <view class="next" @click="xiadan()">
					{{i18n.meishi.xianzaixiadan}}
				</view> -->
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				system_top: 44,
				scrollHeight: 0,
				goodsArray: [{
					num: 1
				}, {
					num: 1
				}, {
					num: 1
				}],
				payTypeList: [],
				selectIndex: 0,
				storeID: '',
				storeName: '',
				order_key: '',
				pay_price: '',
				take_out_price: '',
				product_price: '',
				coupon_price: '',
				fromType: '',
				order_id: null,
				disabled:false,
				store_top_type:0
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - this.system_top - 40 - 60 - 100
		},
		onLoad(option) {
			var that = this
			that.fromType = option.type
			that.storeID = option.storeID
			that.storeName = option.storeName
			that.order_key = option.order_key
			that.store_top_type = option.store_top_type
			that.getPayList()
			that.getCartGoods()
			that.getgezhongjiage()
		},
		onUnload() {

		},
		onShow() {
			var that = this
			if (that.order_id && that.order_id.length > 0) {
				that.getOrderStatus()
			}
		},
		methods: {
			getOrderStatus() {
				var that = this
				that.http.sendRequest('MerchantStoreOrder.Read', {
					'id': that.order_id,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						console.log(info)
						if (info.status == 1) {
							that.doOrderList()
						}
					}
				})

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
						that.goodsArray = info

					}
				})

			},
			getgezhongjiage() {
				var that = this
				that.http.sendRequest('MerchantStoreCart.Computed', {
					'order_key': that.order_key,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.pay_price = info.pay_price
						that.take_out_price = info.take_out_price
						that.product_price = info.product_price
						that.coupon_price = info.coupon_price
						console.log(info)
					}else {
						uni.navigateBack({
							delta: 2
						})
					}
				})
			},
			xiadan() {

				var that = this
				that.disabled = true
				that.order_id = ''
				const payid = that.payTypeList[that.selectIndex].id
				var dic = {
					'order_key': that.order_key,
					'pay_type': payid
				}
				
				that.http.sendRequest('MerchantStoreOrder.Save', dic).then(function(res) {
					if (res.code == 0) {
						console.log(res.info[0])
						that.order_id = res.info[0].order_id
						if (payid == 0) {
							uni.showToast({
								title: '',
								duration: 2000
							})
							// that.doOrderList()
						} else {
						
							if (payid == 1) {
						
								uni.requestPayment({
									provider: 'alipay',
									orderInfo: res.info[0].ali
										.orderinfo, //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
									success: function(res) {
										that.disabled = false
										uni.$emit('buysucess',that.store_top_type)
										uni.showToast({
											title: '',
											duration: 2000
										})
										console.log('success:' + JSON.stringify(res));
										that.doOrderList()
									},
									fail: function(err) {
										that.disabled = false
										uni.$emit('buysucess',that.store_top_type)
										console.log('fail:' + JSON.stringify(err));
										that.doOrderList()
									}
								});
							} else if (payid == 2) {
								uni.requestPayment({
									"provider": "wxpay",
									// #ifdef APP-PLUS
									"orderInfo": res.info[0].wx,
									// #endif
									// #ifdef MP-WEIXIN
									'timeStamp': res.info[0].small.timeStamp,
									'nonceStr': res.info[0].small.nonceStr,
									'package': res.info[0].small.package,
									'signType': res.info[0].small.signType,
									'paySign': res.info[0].small.sign,
									// #endif
						 
									success(res) {
										that.disabled = false
										uni.$emit('buysucess',that.store_top_type)
										uni.showToast({
											title: '',
											duration: 2000
										})
										console.log(res)
										that.doOrderList()
									},
									fail(e) {
										that.disabled = false
										uni.$emit('buysucess',that.store_top_type)
										console.log(e)
										that.doOrderList()
									}
								})
							}
						}
						
					}
				})

			},
			payTypeClick(item, index) {
				this.selectIndex = index
			},
			getPayList() {
				var that = this
				//类型 1充值 2下单
				this.http.sendRequest('Orders.GetPayList', {
					'type': 3
				}).then(function(res) {
					that.payTypeList = res.info
				})
			},
			doOrderList(){
				// #ifdef MP-WEIXIN
				this.getWechatTemplate()
				// #endif
				// #ifndef MP-WEIXIN
				uni.switchTab({
					url: '/pages/order/order'
				})
				// #endif
				
			},
			getWechatTemplate(){
				var that = this
				that.http.sendRequest('Home.GetWechatTemplate', {'type':0},true).then(function(res) {
					if(res.code == 0){
						const list = res.info[0]
						if(list && list.length > 0){
							uni.requestSubscribeMessage({
								tmplIds: list,
								success(res) {
									console.log(res)
								},
								fail(err) {
									console.log(err)
								}
							})
						}
					}
					uni.switchTab({
						url: '/pages/order/order'
					})
				})
			},
		}
	}
</script>

<style>
	@import url(index.css);

	.payView {
		margin-top: 8px;
		width: calc(100% - 30px);
		margin-left: 15px;
		border-radius: 4px;
		background-color: #FFF;
		position: relative;
	}

	.payType-item-image {
		margin-left: 12px;
		width: 26px;
		height: 26px;
		margin-top: 17px;
	}

	.payType-item-name {
		margin-left: 12px;
		/* width: 100px; */
		height: 60px;
		line-height: 60px;
		color: #323232;
		font-size: 16px;
		flex: 1;
	}

	.item-yue-label {
		height: 60px;
		line-height: 60px;
		color: #646464;
		font-size: 12px;
		margin-right: 10px;
	}

	.payType-item-Btn {
		/* position: absolute; */
		margin-right: 24rpx;
		margin-top: 42rpx;
		width: 40rpx;
		height: 40rpx;
	}
</style>
