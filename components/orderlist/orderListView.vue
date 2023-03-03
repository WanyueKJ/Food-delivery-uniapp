<template>
	<view class="" style="width: 100%;">
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="background-color: #fcfcfc;height: 100%;width: 100%;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower"
			:refresher-enabled="true" :refresher-threshold="45" @refresherrefresh="refresherrefresh">
			<view v-if="listArray.length == 0" class="nothing">
				<image src="../../static/noorder@2x.png" mode="aspectFit"></image>
				<text>{{i18n.index.noorder}}</text>
				<view class="reload" @click="reloadData()">{{i18n.index.reloadtip}}</view>
			</view>
			<view v-else v-for="(item,index) in listArray" :key="index" class="orderCell-odr"
				@click="cellItemClick(item,index)">
				<view class="bg">
					<!-- 顶部状态、送达时间、序号 -->
					<view class="section1">
						<image class="mark" src="../../static/home/nummark@2x.png" mode="aspectFit">
							<view class="xuhao" v-if="index<10">#0{{index+1}}</view>
							<view class="xuhao" v-else>#{{index+1}}</view>
						</image>	
						<view class="status">{{item.delivery_time}}</view>
						<view class="cuidan" v-if="item.reminder_count>0">({{i18n.index.cuidan}})</view>
						<view class="rightStatus">{{item.status_txt}}</view>
					</view>
					<!-- 收货人信息 -->
					<view class="section2">
						<view class="name">{{item.users.user_nickname}}</view>
						<image class="phone" src="../../static/home/tel@2x.png" mode="aspectFit" @click.stop="call(item.users.mobile)"></image>
						<!-- <image class="chat" src="../../static/home/chat@2x.png" mode="aspectFit" @click.stop="chat(item)"></image> -->
						<view v-if="typeString==6" class="address">{{item.users.mobile}}</view>
						<view v-else class="address">{{item.address.place}} {{item.address.addr}}</view>
					</view>
					<view class="section3">
						<view class="goodnum">{{item.total_num}}{{i18n.shop.jianshu}}{{i18n.index.shangpin}}</view>
						<view  class="price">{{i18n.index.all}}:
							<text style="color: #EF6B2A;">{{i18n.index.moneyFuhao}}{{item.pay_price}}</text> 
						</view>
					</view>
					<!-- || item.show_evaluate==1 -->
					<view class="section4" v-show="item.show_receie==1 || item.show_refund==1 || item.show_cancel==1 ">
						<view v-show="item.show_cancel==1" class="leftBtn" @click.stop="cancelOrder(item)">{{i18n.index.cancelorder}}</view>
						<view v-show="item.show_receie==1" class="rightBtn" @click.stop="receiveOrder(item)">{{i18n.index.receive}}</view>
						<view v-show="item.show_refund==1" class="leftBtn" @click.stop="refund(item)">{{i18n.index.refund}}</view>
					</view>
					<!-- 骑手信息 -->
					<view  class="sectionrider" v-show="item.rider.id>0">
						<view class="name2">{{item.rider.user_nickname}}</view>
						<view class="rider">{{i18n.index.rider}}</view>
						<image class="phone2" src="../../static/home/tel@2x.png" mode="aspectFit" @click.stop="call(item.rider.mobile)"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- <payView v-if="showpay" :money="addTipMoney > 0 ? addTipMoney : selectedItem.money" type="2" @closePayView="closePayView"></payView> -->
		<!-- <tipMoneyV v-if="showTip" :type="9999" @tipMoneyAdd="tipMoneyAdd"></tipMoneyV> -->
	</view>
</template>

<script>
	import payView from '../payview/payview.vue'
	import tipMoneyV from '../addorder/order-tip.vue'
	
	export default {
		components: {
			payView,
			tipMoneyV
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		data() {
			return {
				windowHeight: 0,
				listArray: [],
				page: 1,
				refresherTriggered: 0,
				price: 0,
				showpay: 0,
				selectedItem:{},
				showTip:0,
				addTipMoney:0,
				type:0,
				index:1,
			}
		},
		props: {
			height: {
				type: [Number],
				default: 0
			},
			typeString: {
				type: [Number, String],
				default: 0
			},
			islogin:{
				type:[Number, Boolean],
				default:0
			}
			
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			 
			 if(that.islogin){
				that.requestData()
			}
			
		},
		methods: {
			call(phone){
				uni.makePhoneCall({
					phoneNumber:phone
				})
			},
			chat(item){
				console.log(item)
				var uid = item.users_im.user_id
				uni.navigateTo({
					url: `/pages/TUI-Chat/chat?conversationID=C2C${uid}`
				});
			},
			cancelOrder(item){
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.cancelsuretip,
					success: function(res) {
						if (res.confirm) {
							that.cancelSure(item)
						} else if (res.cancel) {
				
						}
					}
				})
				
			},
			cancelSure(item){
				console.log(item.id)
				var param = {'id':item.id}
				var that = this
				this.http.sendRequest('MerchantOrder.CancelOrder',param).then(function(data) {
					if(data.code == 0){
						that.requestData()
						uni.$emit('updateOrderCount')
					}
				})
			},
			receiveOrder(item){
				var param = {'id':item.id}
				var that = this
				this.http.sendRequest('MerchantOrder.TakeOrders',param).then(function(data) {
					if(data.code == 0){
						that.reloadData()
						uni.$emit('updateOrderCount')
					}
				})
			},
			refund(item){
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.refundsuretip,
					success: function(res) {
						if (res.confirm) {
							that.refundSure(item)
						} else if (res.cancel) {
				
						}
					}
				})
				
			},
			refundSure(item){
				var param = {'id':item.id}
				var that = this
				this.http.sendRequest('MerchantOrder.RefundOrder',param).then(function(data) {
					if(data.code == 0){
						that.reloadData()
						uni.$emit('updateOrderCount')
					}
				})
			},
			evaluate(item){
				
			},
			reloadData(){
				this.page = 1
				this.requestData()
			},
			cellItemClick(item, index) {
				this.$emit('cellItemClick', item, index)

			},
			requestData() {
				var that = this
				that.http.sendRequest('MerchantOrder.Index', {
					'type': that.typeString,
					'p': String(that.page)
				}).then(function(data) {
					// console.log(data)
					if (data.code == 0) {
						if (that.page == 1) {
							that.listArray = data.info[0]
						} else {
							that.listArray = that.listArray.concat(res.info[0])
						}
					}

				})
			},
			updateData(type){
				var that = this
				that.page = 1
				that.http.sendRequest('MerchantOrder.Index', {
					'type': String(type),
					'p': String(that.page)
				}).then(function(data) {
					// console.log(data)
					if (data.code == 0) {
						if (that.page == 1) {
							that.listArray = data.info[0]
						} else {
							that.listArray = that.listArray.concat(res.info[0])
						}
					}
				
				})
				that.$forceUpdate()
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
			
			refresherrefresh() {
				var that = this
				that.page = 1
				that.refresherTriggered = true;
				that.requestData()
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 100);
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
					if(that.addTipMoney > 0){
						url = 'Orders.Fee'
						dic.fee = that.addTipMoney
					}else{
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
											title:'支付成功',
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
									
								
									
									
					
									success(res) {
										uni.showToast({
											title:'支付成功',
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
									title:'支付成功',
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
				console.log(2121211)
				this.selectedItem = item
				this.showpay = 1
				
			},
			doAgainOrder(e){
				uni.switchTab({
					url:'../../pages/index/index'
				})
			},
			doJiaxiaofei(item){
				console.log(2121211)
				this.selectedItem = item
				this.showTip = 1
			},
			tipMoneyAdd(e){
				
				this.showTip = 0
				if(e > 0){
					this.addTipMoney = e
					this.showpay = 1
				}
			}
		}
	}
</script>

<style>
	.nothing {
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 15px;
		background: #ffffff;
		border: 0.25px solid #e6e6e6;
		border-radius: 2px;
		height: 220px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.nothing image {
		margin-top: 20px;
		width: 80px;
		height: 80px;
	}
	
	.nothing text {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 12px;
		color: #DADADA;
		margin-top: 10px;
	}
	.reload{
		margin-left: 15px;
		margin-top: 20px;
		margin-right: 15px;
		background-color: #00C1DE;
		color: white;
		font-size:14px;
		border-radius: 2px;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100px;
	}
	.bg{
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.section1{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 56px;
		position: relative;
		align-items: center;
		width:100%;
	}
	.mark{
		width: 50px;
		height: 32px;
		margin-left: 0;
	}
	.xuhao{
		color: white;
		font-size: 13px;
		line-height: 32px;
		margin-left: 5px;
		position: absolute;
		text-align: center;
	}
	.status{
		margin-left: 2px;
		height: 32px;
		line-height: 32px;
		color: #2F3E51;
		font-size: 18px;
		font-weight: bold;
	}
	.cuidan{
		height: 32px;
		line-height: 32px;
		color: #F41515;
		font-size: 18px;
		font-weight: bold;
		text-align: left;
	}
	.rightStatus{
		position: absolute;
		right: 5px;
		height: 32px;
		line-height: 32px;
		font-size: 15px;
		color:#6F6F6F;
		text-align: right;
	}
	
	.section2{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 72px;
		width: 100%;
		position: relative;
		/* align-items: center; */
	}
	.name{
		margin-left:5px;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 16px;
		margin-top: 5px;
		font-weight: bold;
	}
	.phone{
		position: absolute;
		width: 30px;
		height: 30px;
		margin-top: 5px;
		right: 15px;
	}
	.chat{
		position: absolute;
		width: 30px;
		height: 30px;
		right: 70px;
		margin-top: 5px;
	}
	.address{
		left: 5px;
		bottom: 10px;
		height: 20px;
		line-height: 20px;
		color: #6F6F6F;
		font-size: 14px;
		position: absolute;
	}
	.section3{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 56px;
		width: 100%;
		position: relative;
	}
	.goodnum{
		color:#181818;
		font-size: 16px;
		font-weight: bold;
		margin-left: 5px;
		height: 22px;
		line-height: 22px;
		position: relative;
		margin-top: 17px;
	}
	.price{
		position: absolute;
		right: 15px;
		margin-top: 17px;
		height: 22px;
		line-height: 22px;
		color: #181818;
		font-size: 14px;
	}
	
	.section4{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		height: 68px;
		width: 100%;
		position: relative;
	}
	.sectionrider{
		display: flex;
		flex-direction: row;
		height: 68px;
		width: 100%;
		position: relative;
	}
	.leftBtn{
		width: calc(50% - 13px);
		height: 36px;
		margin-left:5px;
		margin-top:16px;
		background-color: rgb(239, 239, 239);
		color: #969696;
		border-radius: 2px;
		line-height: 36px;
		text-align: center;
		background-color: #E6E6E6;
	}
	.rightBtn{
		width: calc(50% - 13px);
		height: 36px;
		margin-left:12px;
		margin-top:16px;
		line-height: 36px;
		text-align: center;
		background-color: #00C1DE;
		color: white;
		border-radius: 2px;
	}
	.name2{
		margin-left:5px;
		height: 20px;
		line-height: 20px;
		color: #181818;
		font-size: 16px;
		margin-top: 24px;
		font-weight: bold;
	}
	.phone2{
		position: absolute;
		width: 30px;
		height: 30px;
		margin-top: 19px;
		right: 15px;
	}
	.rider{
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
	.orderCell-odr {
		margin-left: 12px;
		margin-top: 8px;
		margin-bottom: 2px;
		width: calc(100% - 24px);
		border-radius: 8px;
		/* height: 183px; */
		background-color: #FFFFFF;
		overflow: hidden;
		border:0.5px solid #E6E6E6;
		border-radius: 8px;
	}

	.orderCell-odr-header {
		margin-left: 12px;
		margin-bottom: 2px;
		width: calc(100% - 24px);
		height: 52px;
		border-bottom: 1px solid #F0F0F0;
		position: relative;
	}

	.orderCell-odr-header-typeLabel {
		margin-top: 16px;
		width: 56px;
		height: 20px;
		border-radius: 2px;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
	}

	.orderCell-odr-header-timeLabel {
		margin-top: 16px;
		height: 20px;
		font-size: 14px;
		line-height: 20px;
		margin-left: 10px;
		color: #989898;
	}

	.orderCell-odr-header-stateLabel {
		position: absolute;
		margin-top: 16px;
		height: 20px;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
		right: 0;
		color: #646464;
	}

	.order-ads-item-cycle {
		width: 4px;
		height: 4px;
		border-radius: 4px;
		border: 2px solid #7900B2;
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

	.orderControlButton {
		/* position: absolute; */
		height: 28px;
		border-radius: 14px;
		border-width: 1px;
		margin-top: 18.5px;
		text-align: center;
		margin-right: 8px;
		font-size: 14px;
		line-height: 28px;
		flex-shrink: 0;
	}
</style>
