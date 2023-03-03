<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + (height-bottomHeight) + 'px;'"
			style="width: 100%;" class="column">
			<view class="section1">
				<view class="title">{{i18n.index.customerinfo}}</view>
				<view class="name">{{userInfo.user_nickname}} {{userInfo.mobile}}</view>
				<image class="phone" src="../../static/home/tel@2x.png" mode="aspectFit"
					@click="call(userInfo.mobile)"></image>
				<!-- <image v-if="showChat" class="chat" src="../../static/home/chat@2x.png" mode="aspectFit"
					@click="chat(orderInfo)"></image> -->
				<view class="address">{{address.place}} {{address.addr}}</view>
			</view>
			<!-- 骑手信息 -->
			<view v-show="orderInfo.delivery_uid>0" class="section_rider">
				<view class="section2_title">{{i18n.index.riderinfo}}</view>
				<image class="avatar" :src="rider.avatar" mode="aspectFit"></image>
				<view class="ridername">{{rider.user_nickname}} {{rider.mobile}}</view>
				<view class="riderstatus">{{rider.statue_txt}}</view>
				<image class="phone" src="../../static/home/tel@2x.png" mode="aspectFit"
					@click="call(rider.mobile)"></image>
			</view>
			<!-- 商品信息 -->
			<view class="section2">
				<view class="section2_title">{{i18n.index.goodinfo}}</view>
				<view class="section2_list" v-for="(item,index) in goodsData" :key="index">
					<view class="goodsContainer">
						<view style="color: #383838;font-size: 14px;">{{item.use_name}}</view>
						<view style="color: #a8a8a8;font-size: 13px;" v-if="item.product_attr.id>0">({{item.product_attr.use_attr_name}})</view>
						<view class="row" style="color: #a8a8a8;font-size: 13px;margin-left: 3px;flex:1;flex-wrap:wrap;"
						v-if="item.more_product_attr && item.more_product_attr.length > 0">
							<text v-for="(attr,a) in item.more_product_attr" :key="a">{{attr.attr.use_attr_name + (a < item.more_product_attr.length -1 ? '、' : '')}}</text>
						</view>
					</view>
					<view class="goodsnum">x{{item.cart_num}}</view>
					<view class="goodsprice">{{i18n.index.moneyFuhao}}{{item.use_price}}</view>
				</view>
			</view>
			<view class="section3">
				<view class="section2_list">
					<view class="goodsname">{{i18n.index.total}}</view>
					<view class="goodsprice">{{orderInfo.pay_price}}</view>
				</view>
				<view v-show="orderInfo.freight_price>0" class="section2_list">
					<view class="goodsname">{{i18n.index.waimaifee}}</view>
					<view class="goodsprice">{{i18n.index.moneyFuhao}}{{orderInfo.freight_price}}</view>
				</view>
				<view v-show="orderInfo.coupon_price>0" class="section2_list">
					<view class="goodsname">{{i18n.index.youhui}}</view>
					<view class="goodsprice">-{{i18n.index.moneyFuhao}}{{orderInfo.coupon_price}}</view>
				</view>
				<view class="allprice">{{i18n.index.all}}：<text
						style="font-weight: bold;color: #181818;">{{i18n.index.moneyFuhao}}{{orderInfo.pay_price}}</text></view>
			</view>
			<view class="section2">
				<view class="section2_title">{{i18n.index.orderinfo}}</view>
				<view class="section2_list" v-for="(item,index) in orderArr" :key="index" v-show="item.value">
					<view class="goodsname">{{item.title}}</view>
					<view class="goodsprice">{{item.value}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="section4" v-show="isShowBottom">
			<view v-show="orderInfo.show_cancel==1" class="leftBtn" @click.stop="cancelOrder()">{{i18n.index.cancelReceive}}</view>	
			<view v-show="orderInfo.show_receie==1" class="rightBtn" @click.stop="receiveOrder()">{{i18n.index.receive}}</view>					
			<view v-show="orderInfo.show_refund==1" :class="orderInfo.show_evaluate==1? 'leftBtn' : 'centerBtn'"  @click.stop="refund()">{{i18n.index.refund}}</view>
			<view v-show="orderInfo.show_evaluate==1" :class="orderInfo.show_refund==1?'rightBtn' :'centerBtn2'" @click.stop="evalue()">{{i18n.index.evalue}}</view>
		</view>
		<!-- <payView v-if="showpay" :money="addTipMoney > 0 ? addTipMoney : selectedItem.money" type="2" @closePayView="closePayView"></payView> -->
		<!-- <tipMoneyV v-if="showTip" :type="9999" @tipMoneyAdd="tipMoneyAdd"></tipMoneyV> -->
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
				height: 0,
				orderInfo: {},
				orderID: '',
				refresherTriggered: false,
				price: 0,
				showpay: 0,
				selectedItem: {},
				showTip: 0,
				addTipMoney: 0,
				type: 0,
				index: 1,
				userInfo:{},
				rider:{},
				goodsData: [],
				isShowBottom:false,
				address:{},
				orderArr:[],
				bottomHeight:0,
				showChat:true	
			}
		},

		onLoad(option) {
			uni.setNavigationBarTitle({
				title: this.i18n.titles.orderdetail
			})
			var that = this
			var res = uni.getSystemInfoSync()
			that.height = res.windowHeight
			that.orderID = option.id
			//frome=1 表示从聊天界面的顶部订单号点击进来的
			if(option.from == '1'){
				this.showChat = false
			}else{
				this.showChat = true
			}
			that.requestData()
		},
		methods: {
			call(phone) {
				uni.makePhoneCall({
					phoneNumber:phone
				})

			},
			chat(item) {
				console.log(item)
				var uid = item.users_im.user_id
				console.log(uid)
				uni.navigateTo({
					url:`/pages/TUI-Chat/chat?conversationID=C2C${uid}`
					
				});
			},
			evalue(){
				uni.navigateTo({
					url: '/package-shopManager/pages/commentManager/commentDetail?id=' + this.orderInfo.order_evaluate.id
					// url:'evalueDetail'
				})
			},
			cancelOrder(){
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
			cancelSure(){
				var param = {'id':this.orderInfo.id}
				var that = this
				this.http.sendRequest('MerchantOrder.CancelOrder',param).then(function(data) {
					if(data.code == 0){
						console.log(112121)
						uni.navigateBack()
						uni.$emit('refreshList')
					}
				})
			},
			receiveOrder(){
				var param = {'id':this.orderInfo.id}
				var that = this
				this.http.sendRequest('MerchantOrder.TakeOrders',param).then(function(data) {
					if(data.code == 0){
						// that.requestData()
						uni.navigateBack()
						uni.$emit('refreshList')
					}
				})
			},
			refund(){
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.refundsuretip,
					success: function(res) {
						if (res.confirm) {
							that.refundSure()
						} else if (res.cancel) {
				
						}
					}
				})
				
			},
			refundSure(item){
				var param = {'id':this.orderInfo.id}
				var that = this
				this.http.sendRequest('MerchantOrder.RefundOrder',param).then(function(data) {
					if(data.code == 0){
						// that.requestData()
						uni.$emit('refreshList')
						uni.navigateBack()
					}
				})
			},
			requestData() {
				var that = this
				that.http.sendRequest('MerchantOrder.Detail', {
					'id': that.orderID
				}).then(function(data) {
					if (data.code == 0) {
						var dic = data.info[0]
						console.log(dic)
						that.orderInfo = dic
						that.goodsData = dic.product
						that.address = dic.address
						that.userInfo = dic.users
						that.rider = dic.rider
						var transport = dic.shipping_type == 1 ? that.i18n.index.peisong : that.i18n.index.ziti1
						that.orderArr=[{
								'title': that.i18n.index.orderNum,
								'value': dic.order_id
							},
							{
								'title': that.i18n.index.ordertime,
								'value': dic.add_time
							},
							{
								'title': that.i18n.index.orderserve,
								'value': dic.serve.name
							},
							{
								'title': that.i18n.index.orderpeisong,
								'value': dic.shipping_type_txt
							},
							{
								'title': that.i18n.index.orderstatus,
								'value': dic.status_txt
							},
							{
								'title': that.i18n.index.ordercui,
								'value': dic.reminder_content
							},
							{
								'title': that.i18n.index.orderpay,
								'value': dic.pay_type_txt
							}]
						
					    if(dic.show_receie==1 || dic.show_refund==1 || dic.show_cancel==1 || dic.show_evaluate == 1){
							that.bottomHeight = 60
							that.isShowBottom = true
						}else{
							that.isShowBottom = false
							that.bottomHeight = 0
							
						}
						
					}

				})
			},

			refresherrefresh() {
				var that = this
				that.refresherTriggered = true;
				that.requestData()
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 1000);
			},
			closePayView(e) {
				console.log(e)
				var that = this

				that.showpay = 0
				if (e == 0) {

				} else {
					var url = ''
					var dic = {
						// #ifdef APP-PLUS
						'payid': e.id,
						// #endif
						'orderid': that.selectedItem.id,
						

					}
					console.log(that.addTipMoney)
					if (that.addTipMoney > 0) {
						url = 'Orders.Fee'
						dic.fee = that.addTipMoney
					} else {
						url = 'Orders.Repay'
					}
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
										that.refresherrefresh()
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
											title: '支付成功',
											duration: 2000
										})
										console.log(res)
										that.refresherrefresh()
									},
									fail(e) {
										console.log(e)

									}
								})
							} else {
								uni.showToast({
									title: '支付成功',
									duration: 2000
								})
								that.refresherrefresh()
							}
						}

					})

				}

			},
			dopayOrder(item) {
				this.addTipMoney = 0
				this.selectedItem = item
				this.showpay = 1

			},
			doAgainOrder(e) {
				uni.switchTab({
					url: '../../pages/index/index'
				})
			},
			doJiaxiaofei(item) {
				console.log(2121211)
				this.selectedItem = item
				this.showTip = 1
			},
			tipMoneyAdd(e) {

				this.showTip = 0
				if (e > 0) {
					this.addTipMoney = e
					this.showpay = 1
				}
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: white;
	}

	.bg {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section2 {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #f0f0f0;
		position: relative;
		width: 100%;
		margin: 5px;
	}

	.section2_title {
		height: 22px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		font-weight: bold;
		line-height: 22px;
		margin-top: 10px;
		margin-left: 5px;
	}

	.section2_list {
		display: flex;
		flex-direction: row;
		min-height: 35px;
		align-items: center;
		width: 100%;
	}

	.goodsname {
		margin-left: 5px;
		margin-right: 15px;
		color: #383838;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		flex: 1;
	}
	.goodsContainer{
		margin-left: 5px;
		margin-right: 15px;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
	}
	.goodsprice {
		margin-right: 15px;
		color: #383838;
		font-size: 14px;
	}
	.goodsnum {
		margin-right: 20px;
		color: #383838;
		font-size: 14px;
	}

	.section3 {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		margin: 5px;
		border-bottom: 1px solid #f0f0f0;
	}

	.allprice {
		right: 15px;
		top: 110px;
		height: 20px;
		line-height: 20px;
		color: #383838;
		font-size: 14px;
		/* position: absolute; */
		width: 95%;
		text-align: right;
		/* border-bottom: 1px solid #f0f0f0; */
	}

	.section3_title {
		height: 22px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		font-weight: bold;
		line-height: 22px;
		margin-top: 20px;
		margin-left: 5px;
	}

	.xuhao {
		color: white;
		font-size: 13px;
		line-height: 32px;
		margin-left: 5px;
		position: absolute;
		text-align: center;
	}

	.status {
		margin-left: 2px;
		height: 32px;
		line-height: 32px;
		color: #2F3E51;
		font-size: 18px;
		font-weight: bold;
	}

	.rightStatus {
		position: absolute;
		right: 5px;
		height: 32px;
		line-height: 32px;
		font-size: 15px;
		color: #6F6F6F;
		text-align: right;
	}

	.section1 {
		margin: 5px;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #f0f0f0;
		height: 100px;
		width: 100%;
		position: relative;
		/* align-items: center; */
	}

	.title {
		height: 22px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		font-weight: bold;
		line-height: 22px;
		margin-left: 5px;
		/* margin-top: 15px; */
	}

	.name {
		margin-left:5px;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 16px;
		margin-top: 15px;
		/* position: absolute; */
		/* left: 5px; */
	}

	.phone {
		position: absolute;
		width: 30px;
		height: 30px;
		margin-top: 35px;
		right: 15px;
	}

	.chat {
		position: absolute;
		width: 30px;
		height: 30px;
		right: 70px;
		margin-top: 35px;
	}

	.address {
		margin-left: 5px;
		/* bottom: 10px; */
		height: 20px;
		line-height: 20px;
		color: #6F6F6F;
		font-size: 14px;
		margin-top:10px;
		/* position: absolute; */
	}

	.price {
		position: absolute;
		right: 15px;
		margin-top: 17px;
		height: 22px;
		line-height: 22px;
		color: #181818;
		font-size: 14px;
	}

	.section4 {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: absolute;
		bottom: 0;
		box-shadow: 5px, 5px, 10px, 10px, #7D7D83;
		height: 60px;
	}

	.leftBtn {
		width: calc(50% - 13px);
		height: 36px;
		margin-left: 5px;
		margin-top: 16px;
		color: #969696;
		border-radius: 2px;
		line-height: 36px;
		text-align: center;
		background-color: #E6E6E6;
	}

	.centerBtn {
		color: #969696;
		border-radius: 2px;
		line-height: 36px;
		text-align: center;
		background-color: #E6E6E6;
		width: 50%;
		left: 25%;
		position: absolute;
		top: 5px;
	}

	.centerBtn2 {
		position: absolute;
		height: 36px;
		width: 50%;
		left: 25%;
		top: 5px;
		line-height: 36px;
		text-align: center;
		background-color: #00C1DE;
		color: white;
		border-radius: 2px;
	}

	.rightBtn {
		width: calc(50% - 13px);
		height: 36px;
		margin-left: 12px;
		margin-top: 16px;
		line-height: 36px;
		text-align: center;
		background-color: #00C1DE;
		color: white;
		border-radius: 2px;
	}

	.section_rider {
		margin: 5px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 110px;
		width: 100%;
		position: relative;
		/* align-items: center; */
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #f0f0f0;
		margin-top: 45px;
		position: absolute;
		left: 5px;
	}

	.ridername {
		position: absolute;
		left: 50px;
		margin-top: 45px;
		height: 22px;
		font-size: 16px;
		font-weight: 400;
		text-align: left;
		color: #383838;
		line-height: 22px;
	}

	.riderstatus {
		height: 20px;
		position: absolute;
		font-size: 14px;
		font-weight: 400;
		text-align: left;
		color: #6f6f6f;
		line-height: 20px;
		left: 50px;
		margin-top: 67px;
	}

	.name2 {
		margin-left: 5px;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 16px;
		margin-top: 24px;
		font-weight: bold;
	}

	.phone2 {
		position: absolute;
		width: 30px;
		height: 30px;
		margin-top: 19px;
		right: 15px;
	}

	.rider {
		width: 42px;
		height: 18px;
		background: #ffffff;
		border: 0.5px solid #00c1de;
		border-radius: 2px;
		color: #00C1DE;
		text-align: center;
		font-size: 13px;
		line-height: 18px;
		margin-top: 25px;
		position: relative;
		margin-left: 2px;
	}
</style>
