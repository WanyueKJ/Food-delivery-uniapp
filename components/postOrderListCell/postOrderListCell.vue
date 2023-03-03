<template>
	<view class="" style="width: 100%;">
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="background-color: #fcfcfc; height: 100%;width: 100%;"
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
					<!-- 订单状态 -->
					<view class="section1">
						<view class="mark">{{i18n.postorder.song}}</view>
						<view class="status">{{item.add_time}}</view>
						<view class="rightStatus">{{item.status_des}}</view>
					</view>
					<!-- 发件人相关信息 -->
					<view class="section2">
						<image class="point" src="../../static/home/orangepoint@2x.png" mode="aspectFit"></image>
						<view class="address">{{item.f_name}}{{item.f_addr}}</view>
						<view class="name">{{item.pick_name}} {{item.pick_phone}}</view>
					</view>
					<!-- 收件人相关信息 -->
					<view class="section3">
						<image class="point" src="../../static/home/greenpoint@2x.png" mode="aspectFit"></image>
						<view class="address">{{item.t_name}}{{item.t_addr}}</view>
						<view class="name">{{item.recip_name}} {{item.recip_phone}}</view>
						<view v-show="item.status==1" class="rightBtn" @click.stop="dopayOrder(item)">{{i18n.postorder.topay}}</view>
						<view v-show="item.status==2" class="feeBtn" @click.stop="doJiaxiaofei(item)">{{i18n.postorder.fee}}</view>
					</view>
					
				</view>
			</view>
		</scroll-view>
		<payView v-if="showpay" :money="addTipMoney > 0 ? addTipMoney : selectedItem.money" type="2" @closePayView="closePayView"></payView>
		<tipMoneyV v-if="showTip" :type="9999" @tipMoneyAdd="tipMoneyAdd"></tipMoneyV>
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
			},
		},
		data() {
			return {
				windowHeight: 0,
				listArray: [],
				page: 1,
				refresherTriggered: 0,
				showpay: 0,
				selectedItem:{},
				showTip:0,
				type:0,
				leftBtnTxt:'',
				rightBtnTxt:'',
				status:''
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
			
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			// console.log(that.typeString)
			that.requestData()
			that.type = that.typeString
		},
		methods: {
			cellItemClick(item, index) {
				this.$emit('cellItemClick', item, index)

			},
			reloadData(){
				this.page = 1
				this.requestData()
			},
			updateListData(index){
				this.page = 1
				var that = this
				that.http.sendAppRequest('Orders.GetList', {
					'type': index,
					'p': '1'
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						
						// this.$emit('changloginstatus','1')
						if (that.page == 1) {
							that.listArray = res.info
						} else {
							that.listArray = that.listArray.concat(res.info)
						}
						 // console.log(that.listArray)
					}
				
				})
			},
			requestData() {
				var that = this
				var type = parseInt(that.typeString)
				var currentType = type+1
				that.http.sendAppRequest('Orders.GetList', {
					'type': String(currentType),
					'p': that.page
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						
						// this.$emit('changloginstatus','1')
						if (that.page == 1) {
							that.listArray = res.info
						} else {
							that.listArray = that.listArray.concat(res.info)
						}
						 // console.log(that.listArray)
					}

				})
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
						'is_mer': '1',
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
										that.refresherrefresh()
									},
									fail: function(err) {
										console.log('fail:' + JSON.stringify(err));
									}
								});
							} else if (e.id == 2) {
								uni.requestPayment({
									"provider": "wxpay",
									
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
	
	.bg{
		margin: 10px;
		display: flex;
		border-radius: 8px;
		flex-direction: column;
		align-items: center;
		background-color: white;
		border: 0.5px solid #E6E6E6;
	}
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
	
	.section1{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #EEFDFF;
		height: 50px;
		position: relative;
		align-items: center;
		width:100%;
	}
	.mark{
		width: 56px;
		height: 20px;
		background: #eefdff;
		border: 1px solid #00c1de;
		border-radius: 2px;
		margin-left: 12px;
		font-size: 12px;
		text-align: center;
		color: #00c1de;
		line-height: 20px;
	}
	
	.status{
		margin-left: 8px;
		height: 32px;
		line-height: 32px;
		color: #989898;
		font-size: 14px;
		
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
		flex-direction: column;
		width: 100%;
		position: relative;
	}
	.name{
		margin-left:25px;
		margin-right:15px;
		color: #6F6F6F;
		font-size: 14px;
		margin-top: 5px;
	}
	.point{
		width: 8px;
		height: 8px;
		left: 10px;
		top: 31px;
		display: flex;
		position: absolute;
	}
	.address{
		margin-top: 10px;
		margin-left: 25px;
		margin-right: 15px;
		color: #181818;
		font-size: 16px;
		font-weight: bold;
	}
	.section3{
		display: flex;
		flex-direction: column;
		/* border-bottom: 1px solid #f0f0f0; */
		width: 100%;
		position: relative;
		margin-bottom: 20px;
	}
	.rightBtn{
		width: 70px;
		height: 30px;
		background: #00c1de;
		border-radius: 15px;
		position: absolute;
		right: 15px;
		bottom: 10px;
		text-align: center;
		color: white;
		line-height: 30px;
		font-size: 14px;
	}
	.feeBtn{
		width: 70px;
		height: 30px;
		background: white;
		border-radius: 15px;
		position: absolute;
		right: 15px;
		bottom: 5px;
		text-align: center;
		color: #323232;
		line-height: 30px;
		font-size: 14px;
		border: 1px solid #b8b8b8;
	}
	
	
</style>
