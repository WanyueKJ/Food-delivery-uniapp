<template>
	<scroll-view class="scroll clomun" scroll-y="true" :style="'height:' + scrollHeight + 'px;' "
		style="background-color: #F5F5F5; height: 100%;width: 100%;">
		<view :style="'height:' + navHeight + 'px;'"
			style="background-color: #2F3E51;width: 100%;display: flex;flex-direction: row;">
			<view class="nav" :style="'margin-top:' + (navHeight-44) + 'px;'">
				<image class="backimg" src="../../static/whiteback@2x.png" mode="aspectFit" @click="back()"></image>
				<text class="nav_title">{{i18n.titles.orderdetail}}</text>
			</view>
		</view>
		<view style="height: 80px;width: 100%;background-color: #2F3E51;"></view>
		<view class="topstatus" :style="'margin-top:' + (topSpace) +'px;'">
			<view class="tip1">{{orderMsg.status_text}}</view>
			<!-- <text style="color: #D8D8D8;font-size: 20px;">></text> -->
			<!-- 订单状态描述 -->
			<block v-if="orderMsg.status==1">
				<view
					style="width:100%;text-align: center;font-size: 14px;height: 20px;line-height: 20px;color: #989898;">
					{{i18n.postorder.at}}
					<text style="color: #00c1de;">{{orderMsg.prepaytime}}</text>{{i18n.postorder.donepaytip}}
				</view>
			</block>
			<block v-else>
				<view
					style="width:100%;text-align: center;font-size: 14px;height: 20px;line-height: 20px;color: #989898;">
					{{orderMsg.status_des}}
				</view>
			</block>
			<!-- 预计送达时间 -->
			<view
				style="margin-top:10px; width:100%; text-align: center; font-size: 14px;height: 20px;line-height: 20px;color: #989898;">
				{{i18n.postorder.yuji}} {{orderMsg.forecast_time}}
			</view>
			<!-- 按钮 -->
			<block v-if="orderMsg.status==1">
				<view class="btns">
					<view class="cancel" @click="cancelOrder()">{{i18n.index.cancelorder}}</view>
					<view class="pay" @click="pay()">{{i18n.index.paynow}}</view>
				</view>
			</block>
			<block v-if="orderMsg.status==2">
				<view class="centerBtn2" @click="cancelOrder()">{{i18n.index.cancelorder}}</view>
			</block>
			<block v-if="orderMsg.status==3">
				<view class="centerBtn" @click="refundOrder()">{{i18n.postorder.applyrefund}}</view>
			</block>
			<block v-if="orderMsg.status==10">
				<view class="btns">
					<view class="cancel" @click="deleteOrder()">{{i18n.postorder.deleteorder}}</view>
					<view class="pay" @click="buyAgain()">{{i18n.postorder.buyagain}}</view>
				</view>
			</block>
			<block v-if="orderMsg.status==6">
				<view class="btns">
					<view class="cancel" @click="envalueOrder()">{{i18n.postorder.toenvalue}}</view>
					<view class="pay" @click="buyAgain()">{{i18n.postorder.buyagain}}</view>
				</view>
			</block>
		</view>
		<!-- 收货人信息 -->
		<view class="topstatus">
			<view class="section1">
				<view class="mark" @click="song()">{{i18n.postorder.song}}</view>
			</view>
			<view class="section2">
				<image class="point" src="../../static/home/orangepoint@2x.png" mode="aspectFit"></image>
				<view class="name oneline">{{orderMsg.f_name}}</view>
				<view class="address oneline">{{orderMsg.pick_name}} {{orderMsg.pick_phone}}</view>
			</view>
			<view class="section3">
				<image class="point" src="../../static/home/greenpoint@2x.png" mode="aspectFit"></image>
				<view class="name oneline">{{orderMsg.t_name}}</view>
				<view class="address oneline">{{orderMsg.recip_name}} {{orderMsg.recip_phone}}</view>
			</view>
			<view class="section4">
				<view class="dingdan">{{i18n.postorder.orderprice}}</view>
				<view class="rightStatus">{{i18n.index.moneyFuhao}}{{orderMsg.money}}</view>
				<image @click="openPriceDetail()" class="rightimg" v-if="showFeeDetail" src="../../static/shang.png"
					mode="aspectFit"></image>
				<image @click="openPriceDetail()" class="rightimg" v-else src="../../static/xia.png" mode="aspectFit">
				</image>
			</view>
			<!-- 价格明细 -->
			<block v-if="showFeeDetail">
				<view class="prcieSingleItem" style="margin-top: 20rpx;">
					<text class="leftNameLabel">{{i18n.postorder.jichufee}}{{priceDic.money_basic_txt}}</text>
					<text class="rightPriceLabel">{{i18n.index.moneyFuhao}}{{priceDic.money_basic}}</text>
				</view>
				<view class="prcieSingleItem" v-if="priceDic.money_time > 0">
					<text class="leftNameLabel">{{i18n.postorder.timefee}}</text>
					<text class="rightPriceLabel">{{i18n.index.moneyFuhao}}{{priceDic.money_time}}</text>
				</view>
				<view class="prcieSingleItem" v-if="priceDic.money_distance > 0">
					<text class="leftNameLabel">{{i18n.postorder.julifee}}{{priceDic.money_distance_txt}}</text>
					<text class="rightPriceLabel">{{i18n.index.moneyFuhao}}{{priceDic.money_distance}}</text>
				</view>
				<view class="prcieSingleItem" v-if="priceDic.money_weight > 0">
					<text class="leftNameLabel">{{i18n.postorder.zhongfee}}{{priceDic.money_weight_txt}}</text>
					<text class="rightPriceLabel">{{i18n.index.moneyFuhao}}{{priceDic.money_weight}}</text>
				</view>
				<view class="prcieSingleItem" v-if="orderMsg.fee > 0">
					<text class="leftNameLabel">{{i18n.postorder.feetip}}</text>
					<text class="rightPriceLabel">{{i18n.index.moneyFuhao}} {{orderMsg.fee}}</text>
				</view>
			</block>
		</view>
		<view class="topstatus">
			<view class="sectiontitle" style="border-bottom: 1px solid #f0f0f0;">{{i18n.postorder.tip2}}</view>
			<view style="height: 52px;line-height: 52px;font-size: 14px;color:#323232 ;margin-left: 12px;">
				{{cateName}}/{{priceDic.weight}}Kg
			</view>
		</view>
		<!-- 配送信息 -->
		<view class="topstatus">
			<view class="sectiontitle" style="border-bottom: 1px solid #f0f0f0;">{{i18n.postorder.peisong}}</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.postorder.tip3}}</text>
				<text class="rightsongLabel">{{orderMsg.service_time}}</text>
			</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.index.orderpeisong}}</text>
				<text class="rightsongLabel">{{orderMsg.way}}</text>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="topstatus">
			<view class="sectiontitle" style="border-bottom: 1px solid #f0f0f0;">{{i18n.index.orderinfo}}</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.index.orderNum}}</text>
				<text class="rightsongLabel">{{orderMsg.orderno}}</text>
			</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.index.ordertime}}</text>
				<text class="rightsongLabel">{{orderMsg.add_time}}</text>
			</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.index.orderpay}}</text>
				<text class="rightsongLabel">{{orderMsg.pay_type}}</text>
			</view>
			<view class="prcieSingleItem" style="margin-top: 20rpx;">
				<text class="leftNameLabel">{{i18n.postorder.orderbeizhu}}</text>
				<text class="rightsongLabel">{{orderMsg.des}}</text>
			</view>
		</view>
		<view style="height: 40px;width: 100%;color: #fcfcfc;"></view>
		<payView v-if="showpay" :money="orderMsg.money" type="2" @closePayView="closePayView"></payView>
	</scroll-view>
	


</template>

<script>
	import payView from '../../components/payview/payview.vue'
	export default {
		components: {
			payView
		},
		data() {
			return {
				scrollHeight: 0,
				bottomViewHeight: 76,
				navHeight: 0,
				showFeeDetail: false,
				orderID: '',
				orderMsg: {},
				priceDic: {},
				cateName: '',
				desc: '',
				showpay: false,
				windowHeight: 0,
				topSpace: 0,
				addTipMoney:0
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			console.log(res.safeArea.bottom)
			this.windowHeight = res.windowHeight
			this.navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight

		},
		onLoad(e) {
			this.orderID = e.ID
		},
		onShow() {
			this.requestData()
		},
		methods: {
			requestData() {
				var that = this
				this.http.sendAppRequest('Orders.GetDetail', {
					'orderid': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						that.orderMsg = res.info[0]
						that.orderType = that.orderMsg.type
						that.priceDic = that.orderMsg.extra.computed
						that.priceDic.money_time = that.orderMsg.extra.timemoney
						that.cateName = that.orderMsg.extra.catename
						if (that.orderMsg.status == 3 || that.orderMsg.status == 4) {
							that.topSpace = 0
						} else {
							that.topSpace = -60
						}
						console.log(that.orderMsg)
						// that.latitude = uni.getStorageSync('latitude')
						// that.longitude = uni.getStorageSync('longitude')
						// var iconPath = ''
						// if (that.orderType == 5) {
						// 	iconPath = '../../static/order/order-map-ban.png'
						// } else if (that.orderType == 4) {
						// 	iconPath = '../../static/order/order-map-pai.png'
						// } else {
						// 	iconPath = '../../static/order/order-map-shou.png'
						// }
						// that.markers = [{
						// 	"id": 12312232,
						// 	"width": 45,
						// 	"height": 45,
						// 	"latitude": that.orderMsg.t_lat,
						// 	"longitude": that.orderMsg.t_lng,
						// 	"iconPath": iconPath,
						// 	'coordType': 'wgs84'
						// }]
						// that.requestOrderMessage()
					}
				})
			},
			back() {
				uni.navigateBack()
			},
			cancelOrder() {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.cancelsuretip,
					success: function(res) {
						if (res.confirm) {
							that.cancelSure()
						} else if (res.cancel) {

						}
					}
				})
			},
			cancelSure() {
				var param = {
					'orderid': this.orderMsg.id
				}
				console.log(param)
				this.http.sendAppRequest('Orders.Cancel', param).then(function(data) {
					if (data.code == 0) {
						uni.navigateBack({

						});
					}
				})
			},
			deleteOrder() {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.cancelsuretip,
					success: function(res) {
						if (res.confirm) {
							that.deleteSure()
						} else if (res.cancel) {

						}
					}
				})
			},
			deleteSure() {
				var param = {
					'orderid': this.orderMsg.id
				}
				console.log(param)
				this.http.sendAppRequest('Orders.Del', param).then(function(data) {
					if (data.code == 0) {
						uni.navigateBack({

						});
					}
				})

			},
			pay() {
				this.addTipMoney = 0
				console.log(2121211)
				
				this.showpay = true
			},
			refundOrder() {
				uni.navigateTo({
					url: 'refundOrder/applyRefund?orderID=' + this.orderMsg.id + '&orderno=' + this.orderMsg
						.orderno + '&money=' + this.orderMsg.money
				})
			},

			openPriceDetail() {
				this.showFeeDetail = !this.showFeeDetail
			},
			envalueOrder() {
				uni.navigateTo({
					url: 'orderEvaluate?orderID=' + this.orderMsg.id
				})
			},
			buyAgain() {
				uni.navigateTo({
					url: 'newOrder'
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
						'is_mer': '1',
						// #ifdef APP-PLUS
						'payid': e.id,
						// #endif
						'orderid': that.orderID,
							
					
					}
					console.log(that.addTipMoney) 
					if(that.addTipMoney > 0){
						url = 'Orders.Fee'
						dic.fee = that.addTipMoney
					}else{
						url = 'Orders.Repay'
					}
					that.http.sendAppRequest(url, dic).then(function(res) {
						if (res.code == 0) {
							if (e.id == 1) {
								uni.requestPayment({
									provider: 'alipay',
									orderInfo: res.info[0].ali
										.orderinfo, //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
									success: function(res) {
										uni.showToast({
											title:'支付成功',
											duration: 2000
										})
										console.log('success:' + JSON.stringify(res));
										that.requestData()
									},
									fail: function(err) {
										console.log('fail:' + JSON.stringify(err));
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
											title:'支付成功',
											duration: 2000
										})
										console.log(res)
										that.requestData()
									},
									fail(e) {
										console.log(e)
										
									}
								})
							} else {
								uni.showToast({
									title:'支付成功',
									duration: 2000
								})
								that.requestData()
							}
						}
					
					})
					
				}
			
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}

	.scroll {
		/* margin-top: 0px; */
	}

	.mapView {
		width: 750rpx;
		background-color: #1AAD19;
	}

	.prcieSingleItem {
		width: 750rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
	}

	.leftNameLabel {
		height: 60rpx;
		font-size: 14px;
		line-height: 60rpx;
		color: #646464;
		margin-left: 24rpx;
		flex: 1;
	}

	.rightPriceLabel {
		height: 60rpx;
		font-size: 14px;
		font-weight: bold;
		line-height: 60rpx;
		color: #323232;
		margin-right: 25px;
	}

	.rightsongLabel {
		height: 60rpx;
		font-size: 14px;
		line-height: 60rpx;
		color: #323232;
		margin-right: 25px;
	}

	.rightimg {
		position: absolute;
		width: 12px;
		height: 12px;
		right: 12px;

	}

	.rightStatus {
		position: absolute;
		right: 25px;
		height: 16px;
		font-size: 16px;
		font-weight: bold;
		text-align: left;
		color: #ff0b00;
		line-height: 16px;
	}

	.section4 {
		display: flex;
		flex-direction: row;
		height: 56px;
		position: relative;
		align-items: center;
		margin-left: 12px;
		margin-right: 12px;
	}

	.dingdan {
		height: 52px;
		font-size: 16px;
		text-align: left;
		color: #323232;
		line-height: 52px;
	}

	.sectiontitle {
		height: 52px;
		font-size: 16px;
		text-align: left;
		color: #323232;
		line-height: 52px;
		padding-left: 12px;
	}

	.section1 {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 56px;
		position: relative;
		align-items: center;
		margin-left: 12px;
		margin-right: 12px;
	}

	.mark {
		width: 50px;
		height: 20px;
		background: #eefdff;
		border: 1px solid #00c1de;
		border-radius: 2px;
		margin-left: 0;
		height: 12px;
		font-size: 12px;
		font-weight: 400;
		text-align: center;
		color: #00c1de;
		line-height: 12px;
	}

	.section2 {
		display: flex;
		flex-direction: row;
		height: 70px;
		margin-left: 12px;
		margin-right: 12px;
		position: relative;
	}

	.name {
		margin-left: 15px;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 16px;
		margin-top: 15px;
		font-weight: bold;
	}

	.point {
		width: 8px;
		height: 8px;
		margin-left: 0;
		margin-top: 31px;

	}

	.address {
		left: 23px;
		top: 40px;
		height: 20px;
		line-height: 20px;
		color: #6F6F6F;
		font-size: 14px;
		position: absolute;
	}

	.section3 {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 70px;
		margin-left: 12px;
		margin-right: 12px;
		position: relative;
	}

	.btns {
		display: flex;
		flex-direction: row;
		height: 50px;
		width: 100%;
		margin-top: 10px;
		align-items: center;
		justify-content: space-evenly;
	}

	.cancel {
		width: 80px;
		height: 30px;
		background: #ffffff;
		border: 0.5px solid #b8b8b8;
		border-radius: 15px;
		font-size: 14px;
		text-align: center;
		color: #323232;
		line-height: 30px;
	}

	.pay {
		width: 80px;
		height: 30px;
		font-size: 14px;
		text-align: center;
		color: #ffffff;
		line-height: 30px;
		height: 30px;
		background: #00c1de;
		border-radius: 15px;
	}

	.centerBtn {
		color: #969696;
		height: 30px;
		border-radius: 15px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #E6E6E6;
		width: 100px;
		align-items: center;
		margin-left: calc(50% - 50px);
		margin-bottom: 20px;
		margin-top: 10px;
		/* position: absolute; */
		/* margin-top: 5px; */
	}

	.centerBtn2 {
		/* position: absolute; */
		height: 30px;
		width: 100px;
		margin-left: calc(50% - 50px);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #00C1DE;
		color: white;
		border-radius: 15px;
		margin-bottom: 20px;
		margin-top: 10px;
	}

	.desc {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 20px;
		width: 100%;
		text-align: center;
		background-color: red;
	}

	.tip1 {
		height: 20px;
		font-size: 20px;
		text-align: center;
		color: #323232;
		line-height: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.topstatus {
		background-color: white;
		border-radius: 4px;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.01);
		display: flex;
		flex-direction: column;
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 5px;
	}

	.backimg {
		width: 20px;
		height: 20px;
		margin-left: 15px;

	}

	.nav {
		display: flex;
		align-items: center;
		height: 44px;
		width: 100%;
	}

	.nav_title {
		width: 50%;
		margin-left: 12%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}
</style>
