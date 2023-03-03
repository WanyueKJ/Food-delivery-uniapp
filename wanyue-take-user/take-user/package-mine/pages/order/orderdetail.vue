<template>
	<view v-if="orderMsg">
		<view class="topView" :style="'height:' + (statusBarHeight + 120) + 'px;'">
			<view style="width: 100%;position: relative;" :style="'height:' + (statusBarHeight + 48) + 'px;'"
				v-if="top_type_id == 2">
				<view class="row" style="width: 100%;height: 48px;position: absolute;bottom: 0;">
					<image src="../../../static/back-yuan.png" mode=""
						style="margin-left: 12px;margin-top: 13px;width: 20px;height: 20px;" @click="doBack()"></image>
					<text
						style="height: 48px;font-size: 18px;line-height: 48px;color: #FFFFFF;font-weight: bold;width: 33.3%;margin-left: 8px;">{{i18n.order.orderxiangqing}}</text>
				</view>
			</view>
			<view class="" style="width: 100%;height: 100%;position: relative;" v-else>
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in orderMsg.store.environment"
						:key="index">
						<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				
				<image src="../../../static/back-yuan.png" mode=""
					style="left: 12px;bottom: 85px;width: 30px;height: 30px;position: absolute;" @click="doBack()">
				</image>
			</view>

		</view>
		<scroll-view scroll-y="true" class="Back-scroll" :style="'height:' + scrollHeight + 'px;'">
			<!-- top:' + (statusBarHeight + 52) + 'px; -->
			
			<view class="store_name" @click="doStore()">
				{{orderMsg.store.use_name}}
				<image src="../../../static/ads-seld-right.png" mode=""
					style="width: 20px;height: 20px;margin-left: 5px;" v-if="top_type_id != 2"></image>
			</view>
			<view class="orderxiangxixinxi">
				{{i18n.order.orderxiangxixinxi}}
			</view>

			<view class="item_view">
				<view class="item-title-label">
					{{i18n.order.orderbianhao}}
				</view>
				<view class="item-des-label">
					{{orderMsg.order_id}}
				</view>
			</view>

			<view class="item_view">
				<view class="item-title-label">
					{{i18n.order.dinggoushangjia}}
				</view>
				<view class="item-des-label" style="color: #FF5725;">
					{{orderMsg.store.use_name}}
				</view>
			</view>

			<view class="item_view" v-if="orderMsg.shipping_type == '1'">
				<view class="item-title-label">
					{{i18n.mine.shouhuodizhi}}
				</view>
				<view class="item-des-label" style="height: auto;">
					{{orderMsg.address.place + orderMsg.address.addr}}
				</view>
			</view>
			<view class="item_view" v-if="orderMsg.shipping_type == 2">
				<view class="item-title-label" style="width: auto;flex: 1;">
					{{i18n.order.tihuomendian}}
				</view>
				<image src="../../../static/meishi/shangjia-ads.png" mode=""
					style="width:15px;height:15px;margin-top:9px;margin-right: 3px;" @click="doSJMap()"></image>
				<view class="item-des-label" style="max-width: 60%;height: auto;width: auto;" @click="doSJMap()">
					{{orderMsg.pickup.address + ' ' + orderMsg.pickup.doorplate}}
				</view>
			</view>
			<view class="item_view">
				<view class="item-title-label">
					{{i18n.mine.xiadanshijian}}
				</view>
				<view class="item-des-label">
					{{orderMsg.add_time}}
				</view>
			</view>

			<view class="item_view">
				<view class="item-title-label">
					{{i18n.order.zhifufangshi}}
				</view>
				<view class="item-des-label">
					{{orderMsg.pay_type_txt}}
				</view>
			</view>

			<view class="item_view">
				<view class="item-title-label">
					{{i18n.order.peisongfuwu}}
				</view>
				<view class="item-des-label">
					{{orderMsg.shipping_type_txt}}
				</view>
			</view>

			<view class="item_view" v-if="orderMsg.shipping_type == '2'">
				<view class="item-title-label">
					{{i18n.order.tihuoshijian}}
				</view>
				<view class="item-des-label">
					{{orderMsg.pickup.pickup_date}}
				</view>
			</view>

			<view class="item_view" v-if="orderMsg.shipping_type == '2'">
				<view class="item-title-label">
					{{i18n.order.tihuoren}}
				</view>
				<view class="item-des-label">
					{{userinfo.user_nickname + ' ' + orderMsg.pickup.pickup_phone}}
				</view>
			</view>

			<view class=""
				style="margin-left: 15px;width: calc(100% - 30px);height: 1px;background-color: #D6DADE;margin-top: 10px;">
			</view>

			<view v-for="(item,index) in orderMsg.cart_info" :key="index" class="item_view"
				style="height: 50px;margin-top: 18px;">
				<image :src="item.product.image" mode="aspectFill"
					style="width: 50px;height: 50px;border-radius: 4px;background-color: #F5f6f7;"></image>
				<view class="column" style="height: 50px;flex:1;margin-left: 8px;">
					<view class="" style="font-size: 14px;width: 100%;">
						{{item.product.use_name}}
					</view>
					<view class="row" style="font-size: 12px;color:#6F6F6F;width: 100%;"
						v-if="item.more_product_attr && item.more_product_attr.length > 0">
						<text style="font-size: 12px;color: #646464;" v-for="(attr,a) in item.more_product_attr"
							:key="a">{{attr.attr.use_attr_name + (a < item.more_product_attr.length -1 ? '、' : '')}}</text>
					</view>
					<view class="" style="font-size: 12px;color:#6F6F6F;width: 100%;" v-if="item.product_attr_id > 0">
						{{item.attr.use_attr_name}}
					</view>
					<view class="" style="font-size: 12px;color:#6F6F6F;width: 100%;" v-else>
						<!-- {{i18n.yilou.wuguige}} -->
					</view>
					<view class="" style="font-size: 12px;color: #FF5725;width: 100%;">
						x{{item.cart_num}}
					</view>
				</view>
				<view class="row" style="align-items: center;font-size: 10px;font-weight: bold;">
					¥<text style="font-size: 14px;margin-left: 3px;">{{item.use_price}}</text>
				</view>
			</view>

			<view class=""
				style="margin-left: 15px;width: calc(100% - 30px);height: 1px;background-color: #D6DADE;margin-top: 18px;">
			</view>

			<view class="item_view">
				<view class="item-title-label" style="color: #181818;">
					{{i18n.meishi.xiaoji}}
				</view>
				<view class="item-des-label">
					¥{{xiaojiprice}}
				</view>
			</view>

			<view class="item_view" v-if="orderMsg.shipping_type == '1'">
				<view class="item-title-label" style="color: #181818;">
					{{i18n.meishi.waisongfei}}
				</view>
				<view class="item-des-label">
					¥{{orderMsg.freight_price}}
				</view>
			</view>
			<view class="item_view" v-if="orderMsg.coupon_price > 0">
				<view class="item-title-label" style="color: #181818;">
					{{i18n.order.youhuizhekou}}
				</view>
				<view class="item-des-label" style="color: #FF5725;">
					-¥{{orderMsg.coupon_price}}
				</view>
			</view>


			<view class=""
				style="margin-left: 15px;width: calc(100% - 30px);height: 1px;background-color: #D6DADE;margin-top: 18px;">
			</view>

			<view class="item_view">
				<view class="item-title-label" style="color: #181818;font-weight: bold;">
					{{i18n.meishi.zongjine + '(' + i18n.meishi.hanshui + ')'}}
				</view>
				<view class="item-des-label">
					¥{{orderMsg.pay_price}}
				</view>
			</view>
			<view class="" style="width: 100%;height: 150px;">

			</view>



		</scroll-view>

		<view class="status_text" :style="'top:' + (statusBarHeight + 110) + 'px;'">
			{{orderMsg.status_txt}}
		</view>
		<view class="bottom_view"
			:style="((orderMsg.status == 1 || orderMsg.status == 2) && orderMsg.show_reminder != 1) || orderMsg.status == 7 ? 'height: 70px;' : 'height: 150px;'">
			<view class="bottom_contentView">
				<!-- (1:已付款(待接单) 2:待配送 3:配送中 4:已完成 5:退款 6:已备货) -->

				<view class="column" style="margin-left: 15px;width: calc(100% - 30px);min-height: 50px;"
					v-if="orderMsg.status == 4 || orderMsg.status == 5 || orderMsg.status == 7">
					<view class="" style="margin-top: 15px;font-size: 14px;">
						{{orderMsg.des}}
					</view>
					<view class="" style="margin-top: 3px;font-size: 14px;font-weight: bold;"
						v-if="orderMsg.status == 4">
						{{orderMsg.service_time}}
					</view>
				</view>
				<view class="row"
					style="margin-left: 15px;width: calc(100% - 30px);min-height: 50px;align-items: center;" v-else>
					<view class="" style="font-size: 14px;width: 40%;" v-if="orderMsg.status == 0">
						等待支付，剩余<text style="color: #FF5623;">{{count_downStr}}</text> 超时订单将自动取消
					</view>
					<view class="" style="font-size: 14px;width: 40%;" v-else>
						{{orderMsg.des}}
					</view>
					<view class="" style="font-size: 14px;font-weight: bold;width: 60%;text-align: right;"
						v-if="orderMsg.shipping_type == '2'">
						{{i18n.order.tihuoshijian + orderMsg.pickup.pickup_date}}
					</view>
					<view class="" style="font-size: 14px;font-weight: bold;width: 60%;text-align: right;" v-else>
						{{orderMsg.service_time}}
					</view>

				</view>
				<view class="row" style="width: 100%;margin-top: 10px;" v-if="orderMsg.status == 0">
					<view class="bottom_button"
						style="border:1px solid #FF5725;color: #FF5725;width: calc(50% - 22.5px);"
						@click="doCancleOrder()">
						取消订单
					</view>
					<view class="bottom_button" style="background-color: #FF5725;color: #FFF;width: calc(50% - 22.5px);"
						@click="doPayOrder()">
						立即付款
					</view>


				</view>
				<view class="" style="width: 100%;margin-top: 10px;" v-if="top_type_id != 3">
					<view class="bottom_button" style="background-color: #FF5725;color: #FFF;" @click="orderAgain()"
						v-if="orderMsg.status == 4 || orderMsg.status == 5">
						{{i18n.mine.zailaiyidan}}
					</view>
					<view class="bottom_button" style="border:1px solid #FF5725;color: #FF5725;" @click="doCuidan()"
						v-if="orderMsg.show_reminder == 1">
						{{i18n.order.cuidan}}
					</view>
					<view class="bottom_button" style="border:1px solid #FF5725;color: #FF5725;" @click="doTihuoma()"
						v-if="orderMsg.show_verify == 1">
						{{i18n.yilou.tihuoma}}
					</view>
				</view>
				<view class="row" style="justify-content: space-around;" v-else>
					<view class="bottom_button" style="background-color: #FF5725;color: #FFF;" @click="orderAgain()"
						v-if="orderMsg.status == 4 || orderMsg.status == 5">
						{{i18n.mine.zailaiyidan}}
					</view>
					<view class="bottom_button" style="border:1px solid #FF5725;color: #FF5725;" @click="doCuidan()"
						v-if="orderMsg.show_reminder == 1 && orderMsg.status < 4">
						{{i18n.order.cuidan}}
					</view>
					<view class="bottom_button" style="background-color:#FF5725;color: #FFF;margin-right: 15px;"
						@click="dofuwuwancheng()" v-if="orderMsg.status == 3">
						{{i18n.shansong.wancheng}}
					</view>
				</view>
			</view>
		</view>
		<cuidan v-if="showCuidan" @cuidanle="cuidanle"></cuidan>
		<tihuoma v-if="showTihuoma" @cuidanle="cuidanle" :orderMsg="orderMsg"></tihuoma>

		<payView v-if="showpay" :money="payMoney" type="3" @closePayView="closePayView"></payView>
		<!-- <tipMoneyV v-if="showTip" :type="9999" @tipMoneyAdd="tipMoneyAdd"></tipMoneyV> -->
	</view>
</template>

<script>
	// import starV from '../../../components/rate-star/rate.vue'
	import starV from '../../../components/banxing/banStar.vue'
	import payView from '@/components/payview/payview.vue'
	// import tipMoneyV from '../../../components/addorder/order-tip.vue'
	import cuidan from "@/package-mine/components/cuidan.vue"
	import tihuoma from "@/package-mine/components/tihuoma.vue"

	export default {
		components: {
			starV,
			cuidan,
			tihuoma,
			payView,
			// tipMoneyV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				statusBarHeight: 0,
				scrollHeight: 0,
				orderType: 0,
				orderID: '',
				orderMsg: null,
				isShowPrice: 0,
				showpay: false,
				showTip: 0,
				addTipMoney: 0,
				payMoney: 0,
				top_type_id: '',
				lianxiList: [],
				showCuidan: false,
				showTihuoma: false,
				xiaojiprice: 0,
				userinfo: null,
				count_down: 0,
				count_downStr: '',
				timer: null
			}
		},
		onLoad(option) {
			var that = this
			that.statusBarHeight = getApp().globalData.top
			var res = uni.getSystemInfoSync()
			that.windowHeight = res.screenHeight
			that.scrollHeight = that.windowHeight - that.statusBarHeight - 120
			that.orderID = option.order
			that.top_type_id = option.top_type_id
			that.userinfo = uni.getStorageSync('userinfo');

			// that.orderID = 1
			if (that.top_type_id == 2) {
				that.requestshansongOrderDeatiles()
			} else {
				that.requestOrderDeatiles()
			}

		},
		methods: {
			requestshansongOrderDeatiles() {
				var that = this
				that.http.sendRequest('Orders.GetDetail', {
					'orderid': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						that.orderMsg = res.info[0]
						// that.orderType = that.orderMsg.type

						that.orderType = that.orderMsg.type
						console.log(that.orderMsg)
						//支付状态， 1待支付2已支付 3已接单 4已取件 5已送达 6已完成 7退款中 8退款完成 9退款拒绝 10已取消

						if (that.orderMsg.status == 6) {
							if (that.orderMsg.isevaluate == 0) {
								that.lianxiList = [{
										'name': that.i18n.meishi.pingjia,
										'image': '../../static/images/order/pingjia.png',
										'id': 0
									},
									{
										'name': that.i18n.order.lianxiqishou,
										'image': '../../static/images/order/lianxiqishou.png',
										'id': 1
									}

								]
							} else {
								that.lianxiList = [{
										'name': that.i18n.order.lianxishangjia,
										'image': '../../static/images/order/lianxishangjia.png',
										'id': 2
									},

								]
							}

						}
						console.log(that.lianxiList)


					}
				})
			},
			requestOrderDeatiles() {
				var that = this
				that.http.sendRequest('MerchantStoreOrder.Read', {
					'id': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						that.orderMsg = res.info[0]
						if (that.orderMsg.status == 0) {
							if (that.orderMsg.count_down > 0) {
								that.count_down = that.orderMsg.count_down
								that.timer = setInterval(() => {
									that.count_down--
									that.showtime()
								}, 1000)

							} else {
								that.orderMsg.status = 7
							}
						}

						that.orderType = that.orderMsg.type
						var xjp = 0
						for (let i = 0; i < that.orderMsg.cart_info.length; i++) {
							const p = that.orderMsg.cart_info[i]
							xjp = xjp + parseFloat(p.use_price)
						}
						that.xiaojiprice = xjp.toFixed(2)
						console.log(that.orderMsg)
						//(1:已付款(待接单) 2:待配送 3:配送中 4:已完成 5:退款 6:已备货)
						if ((that.orderMsg.status == 1 && that.orderMsg.show_reminder != 1) || that.orderMsg
							.status == 7) {
							that.scrollHeight = that.windowHeight - that.statusBarHeight - 120 - 70
						} else {
							that.scrollHeight = that.windowHeight - that.statusBarHeight - 120 - 150
						}
						if (that.orderMsg.status == 4) {
							if (that.orderMsg.shipping_type == 1) {
								that.lianxiList = [{
										'name': that.i18n.meishi.pingjia,
										'image': '../../static/images/order/pingjia.png',
										'id': 0
									},
									{
										'name': that.i18n.order.lianxiqishou,
										'image': '../../static/images/order/lianxiqishou.png',
										'id': 1
									},
									{
										'name': that.i18n.order.lianxishangjia,
										'image': '../../static/images/order/lianxishangjia.png',
										'id': 2
									},
									{
										'name': that.i18n.order.zhidianshangjia,
										'image': '../../static/images/order/zhidian.png',
										'id': 3
									}
								]
							} else {
								that.lianxiList = [{
										'name': that.i18n.meishi.pingjia,
										'image': '../../static/images/order/pingjia.png',
										'id': 0
									},
									{
										'name': that.i18n.order.lianxishangjia,
										'image': '../../static/images/order/lianxishangjia.png',
										'id': 2
									},
									{
										'name': that.i18n.order.zhidianshangjia,
										'image': '../../static/images/order/zhidian.png',
										'id': 3
									}
								]
							}

						} else {
							that.lianxiList = [{
									'name': that.i18n.order.lianxishangjia,
									'image': '../../static/images/order/lianxishangjia.png',
									'id': 2
								},
								{
									'name': that.i18n.order.zhidianshangjia,
									'image': '../../static/images/order/zhidian.png',
									'id': 3
								}
							]
						}
						console.log(that.lianxiList)
					}
				})
			},
			showtime() {
				if (this.count_down < 0) {
					clearInterval(this.timer)
					this.requestOrderDeatiles()
				} else {
					var min = Math.floor(this.count_down / 60)
					var seconds = Math.floor(this.count_down % 60)
					if (min < 10) {
						min = '0' + min
					}
					if (seconds < 10) {
						seconds = '0' + seconds
					}
					this.count_downStr = min + ':' + seconds
				}


			},
			doBack() {
				uni.navigateBack({
					success: res => {
						console.log(res)
					},
					fail: (error) => {
						console.log('fail', error)
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				})
			},
			//订单追踪
			doOrderStateDetail() {
				uni.navigateTo({
					url: './ordertracking?orderID=' + this.orderID
				})
			},
			//退款进度
			tuikuanjindu() {
				uni.navigateTo({
					url: 'refundOrder/refundDetails?orderID=' + this.orderID
				})
			},
			onChange(e) {

			},
			call() {
				var that = this
				uni.makePhoneCall({
					phoneNumber: that.orderMsg.rinfo.mobile
				})
			},
			showBigImage(index) {
				var that = this
				uni.previewImage({
					current: index,
					urls: that.orderMsg.thumbs,
				})
			},
			priceMessage() {
				this.isShowPrice = !this.isShowPrice
			},
			copyWord() {
				var that = this
				uni.setClipboardData({
					data: that.orderMsg.orderno
				})
				uni.showToast({
					title: '复制成功',
					icon: 'none'
				})
			},
			doCancleOrder() {
				var that = this
				uni.showModal({
					title: '',
					content: '是否确定取消订单',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							that.requestCancle('MerchantStoreOrder.Cancel')
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			requestCancle(e) {
				var that = this
				that.http.sendRequest(e, {
					'id': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						uni.navigateBack({

						})
					}
				})
			},


			doPayOrder() {
				this.addTipMoney = 0
				this.payMoney = this.orderMsg.pay_price
				this.showpay = true
			},
			doAddTipMoney() {
				this.showTip = 1
			},
			doApplyReturnMoney() {
				uni.navigateTo({
					url: './refundOrder/applyRefund?orderID=' + this.orderID + '&orderno=' + this.orderMsg
						.orderno + '&money=' + this.orderMsg.money
				})

			},
			doLianxiPingtai() {
				uni.setStorage({
					key: 'weburl',
					data: getApp().globalData.service_url_kefu,
					success() {
						uni.navigateTo({
							url: '../webView/webView',
						});
					}
				})
			},
			doDelateOrder() {
				var that = this
				uni.showModal({
					title: '',
					content: '是否确定删除订单',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							that.requestCancle('Orders.Del')
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			doCancleApplyReturnMoney() {
				var that = this
				uni.showModal({
					title: '',
					content: '是否确定取消退款申请',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							that.requestCancle('Orders.Cancelrefund')
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			zailaiyidan() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			doPingjia() {
				uni.navigateTo({
					url: './orderEvaluate?orderID=' + this.orderID
				})
			},
			closePayView(e) {
				console.log(e)
				var that = this

				that.showpay = false
				if (e == 0) {

				} else {
					var url = ''
					var dic = {
						// #ifdef APP-PLUS
						'pay_type': e.id,
						// #endif
						'id': that.orderMsg.id,
						// #ifdef MP-WEIXIN
						'openid': uni.getStorageSync('openid'),
						'pay_type': e.id == 2 ? '3' : e.id,
						// #endif

					}

					url = 'MerchantStoreOrder.Pay'

					that.http.sendRequest(url, dic).then(function(res) {
						if (res.code == 0) {
							if (e.id == 1) {
								uni.requestPayment({
									provider: 'alipay',
									orderInfo: res.info[0].ali
										.orderinfo, //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
									success: function(res) {
										uni.showToast({
											title: '支付成功',
											duration: 2000
										})
										console.log('success:' + JSON.stringify(res));

										that.requestOrderDeatiles()

									},
									fail: function(err) {
										console.log('fail:' + JSON.stringify(err));
										uni.showToast({
											title: '支付失败',
											duration: 2000
										})
									}
								});
							} else if (e.id == 2) {
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


									// {
									//     "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
									//     "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
									//     "package": "Sign=WXPay",        // 固定值
									//     "partnerid": "148*****52",      // 微信支付商户号
									//     "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
									//     "timestamp": 1597935292,        // 时间戳（单位：秒）
									//     "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
									// }
									success(res) {
										uni.showToast({
											title: '支付成功',
											duration: 2000
										})
										console.log(res)

										// that.doBack()
										that.requestOrderDeatiles()

									},
									fail(e) {
										console.log(e)
										uni.showToast({
											title: '支付失败',
											duration: 2000
										})
									}
								})
							} else {
								uni.showToast({
									title: '支付成功',
									duration: 2000
								})
								// if (url == 'Orders.Fee') {
								// 	that.orderMsg.fee = that.orderMsg.fee * 1 + that.addTipMoney * 1
								// 	that.orderMsg.money = that.orderMsg.money * 1 + that.addTipMoney * 1
								// } else {
								// that.doBack()
								that.requestOrderDeatiles()
								// }

							}
						} else {
							uni.showToast({
								title: '支付失败',
								duration: 2000
							})
						}

					})

				}

			},
			tipMoneyAdd(e) {
				console.log(e)
				this.showTip = 0
				if (e > 0) {
					this.payMoney = e
					this.addTipMoney = e
					this.showpay = true
				}
			},
			lianxi(id) {
				if (id == 0) {
					if (this.top_type_id == 1) {
						uni.navigateTo({
							url: './orderEvaluate?orderID=' + this.orderID
						})
					} else if (this.top_type_id == 3) {
						uni.navigateTo({
							url: './fuwuEVA?orderID=' + this.orderID
						})
					} else if (this.top_type_id == 2) {

					} else if (this.top_type_id == 4) {

					} else {
						uni.navigateTo({
							url: './marketEVA?orderID=' + this.orderID
						})
					}

				} else if (id == 1) {
					var that = this
					that.http.sendRequest('MerchantStoreOrder.SubmitOrder', {
						'rider_id': that.orderMsg.rider.id,
						'orderid': that.orderMsg.order_id,
						'order_type': 1
					}).then(function(res) {
						var dic = {
							ordernum: that.orderMsg.order_id,
							id: that.orderMsg.id,
							ads: that.orderMsg.address.place + that.orderMsg.address.addr,
							type: 0
						}
						const dicstr = JSON.stringify(dic)
						console.log(dicstr)
						uni.navigateTo({
							url: `/pages/TUI-Chat/chat?conversationID=C2C${that.orderMsg.rider_im.uid}&order=${dicstr}`
						})
					})

				} else if (id == 2) {
					uni.navigateTo({
						url: `/pages/TUI-Chat/chat?conversationID=C2C${this.orderMsg.im.uid}`
					})

				} else {
					uni.makePhoneCall({
						phoneNumber: this.orderMsg.store.phone
					})
				}
			},
			doStore() {
				if (this.top_type_id == 1) {
					uni.navigateTo({
						url: '/package-meishi/pages/store/store?id=' + this.orderMsg.store.id
					})
				} else if (this.top_type_id == 3) {
					uni.navigateTo({
						url: '/package-other/pages/service/detaile/index?id=' + this.orderMsg.store.id
					})
				} else if (this.top_type_id == 2) {

				} else if (this.top_type_id == 4) {

				} else {
					uni.navigateTo({
						url: '/package-other/pages/market/store/store?id=' + this.orderMsg.store.id + '&type=' +
							this.top_type_id
					})
				}
			},
			doSJMap() {
				var farray = this.wgs84togcj02(this.orderMsg.store.lng, this.orderMsg.store.lat)
				var lng = farray[0]
				var lat = farray[1]
				console.log(farray)
				uni.openLocation({
					latitude: parseFloat(lat),
					longitude: parseFloat(lng),
					name: this.orderMsg.store.use_name,
					success: function() {
						console.log('success');
					},
					fail(err) {
						console.log(err);
					}
				});
			},
			orderAgain() {
				var that = this
				that.http.sendRequest('MerchantStoreOrder.Again', {
					'id': that.orderID,
				}).then(function(res) {
					// that.listArray = res.info
					//1:美食 2:闪送 3:服务 4:找店 5:超市 6:生鲜 7:送药 8:家政
					if (res.code == 0) {
						if (that.top_type_id == 1) {
							uni.navigateTo({
								url: '/package-meishi/pages/store/store?id=' + that.orderMsg.store.id
							})
						} else if (that.top_type_id == 3) {
							uni.navigateTo({
								url: '/package-other/pages/service/detaile/index?id=' + that.orderMsg
									.store.id
							})
						} else if (that.top_type_id == 2) {

						} else if (that.top_type_id == 4) {

						} else {
							uni.navigateTo({
								url: '/package-other/pages/market/store/store?id=' + that.orderMsg.store
									.id + '&type=' + that.top_type_id
							})
						}
					}

				})
			},
			doCuidan() {
				this.showCuidan = true
			},
			cuidanle(str) {
				this.showCuidan = false
				this.showTihuoma = false
				if (str.length > 0) {
					var that = this
					that.http.sendRequest('MerchantStoreOrder.Reminder', {
						'id': that.orderID,
						'content': str
					}).then(function(res) {

						if (res.code == 0) {

						}

					})
				}
			},
			doTihuoma() {
				this.showTihuoma = true
			},
			wgs84togcj02(lng, lat) {
				//定义一些常量
				var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
				var PI = 3.1415926535897932384626;
				var a = 6378245.0;
				var ee = 0.00669342162296594323;
				var dlat = this.transformlat(lng - 105.0, lat - 35.0);
				var dlng = this.transformlng(lng - 105.0, lat - 35.0);
				var radlat = lat / 180.0 * PI;
				var magic = Math.sin(radlat);
				magic = 1 - ee * magic * magic;
				var sqrtmagic = Math.sqrt(magic);
				dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
				dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
				var mglat = lat + dlat;
				var mglng = lng + dlng;
				return [mglng, mglat]
			},
			transformlat(lng, lat) {
				//定义一些常量
				var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
				var PI = 3.1415926535897932384626;
				var a = 6378245.0;
				var ee = 0.00669342162296594323;
				var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(
					lng));
				ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
				ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
				ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
				return ret
			},
			transformlng(lng, lat) {
				//定义一些常量
				var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
				var PI = 3.1415926535897932384626;
				var a = 6378245.0;
				var ee = 0.00669342162296594323;
				var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
				ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
				ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
				ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
				return ret
			},
			dofuwuwancheng() {
				uni.showLoading({
					title: '  '
				})
				var that = this
				that.http.sendRequest('Serve.ServiceComplete', {
					'id': that.orderID,
				}).then(function(res) {
					uni.hideLoading()
					if (res.code == 0) {
						that.requestOrderDeatiles()
					}

				})
				setTimeout(function() {
					uni.hideLoading()
				}, 2000);
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F7F8F9;
		overflow: hidden;
	}

	.topView {
		width: 100%;
		background-color: #FF5725;
		/* background: linear-gradient(to right, #FE8328, #FF4B21); */
	}

	.Back-scroll {
		/* position: absolute; */
		margin-left: 12px;
		width: calc(100% - 24px);
		background-color: #FFF;
	}

	.orderStateLabel {
		/* width: 70px; */
		/* margin-left: calc(50% - 35px); */
		text-align: center;
		height: 30px;
		line-height: 30px;
		font-size: 20px;
		font-weight: bolder;
		color: #323232;
	}

	.label-30H {
		line-height: 28px;
		height: 28px;
		font-size: 14px;
		color: #989898;
		margin-top: 1px;
		text-align: center;
	}

	.item_view {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		min-height: 32px;
		font-size: 14px;
		flex-direction: row;
	}

	.item-title-label {
		margin-top: 6px;
		color: #6F6F6F;
		height: 20px;
		line-height: 20px;
		width: 40%;
	}

	.item-des-label {
		margin-top: 6px;
		color: #181818;
		font-weight: bold;
		height: 20px;
		line-height: 20px;
		text-align: right;
		width: 60%;
		margin-bottom: 6px;
	}

	.orderCell-dtal-header-typeLabel {
		margin-top: 16px;
		width: 56px;
		height: 20px;
		border-radius: 2px;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
	}

	.order-ads-item-cycle {
		width: 4px;
		height: 4px;
		border-radius: 4px;
		border: 2px solid #FF5725;
		margin-left: 9px;
		margin-top: 30.5px;
		flex-shrink: 0;
		/* background-color: #007AFF; */
	}

	.order-ads-item-middle {
		margin-left: 10px;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-right: 8px;
		/* background-color: #007AFF; */
		flex-shrink: 1;
		flex: 1;
	}

	.order-ads-item-ads {
		margin-top: 15px;
		height: 18px;
		line-height: 18px;
		font-size: 16px;
		font-weight: bold;
		color: #323232;
		overflow: hidden;
	}

	.order-ads-item-ads-tip {
		height: 20px;
		line-height: 20px;
		font-size: 13px;
		color: #989898;
		overflow: hidden;
	}

	.status_text {
		position: absolute;
		left: 32px;
		height: 20px;
		line-height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		font-size: 11px;
		font-weight: bold;
		color: #FFF;
		background-color: #FF5725;
	}

	.store_lianxi {
		margin-top: 28px;
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 64px;
		display: flex;
		flex-direction: row;
		border: 1px solid #FF5725;
		border-radius: 8px;
		/* border-width: 1px;
		border-color: #FF5725; */
		align-items: center;
		justify-content: space-around;
	}

	.store_name {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 64px;
		line-height: 64px;
		font-size: 18px;
		font-weight: bold;
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	.orderxiangxixinxi {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		font-weight: bold;
	}

	.bottom_view {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 150px;
		background-color: rgba(0, 0, 0, 0);
	}

	.bottom_contentView {
		box-shadow: 0px 0px 5px 5px rgba(50, 50, 59, 0.1);
		background-color: #FFF;
		margin-top: 10px;
		width: 100%;
		height: 140px;
	}

	.bottom_button {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 49px;
		border-radius: 8px;
		line-height: 49px;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}
</style>
