<template>
	<view>
		<view :style="'height:' + navHeight + 'px;'"
			style="background-color: #2F3E51;width: 100%;display: flex;flex-direction: row;">
			<view class="nav" :style="'margin-top:' + (navHeight-44) + 'px;'">
				<image class="backimg" src="../../static/whiteback@2x.png" mode="aspectFit" @click="back()"></image>
				<text class="nav_title">{{i18n.postorder.neworder}}</text>
			</view>
		</view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5; height: 100%;width: 100%;" class="column">
			<view>
				<view style="height: 44px;">
					<view class="title">{{i18n.postorder.tip1}}</view>
				</view>
				<!-- 姓名 -->
				<view class="inputBackView">
					<view class="leftTipLabel">{{i18n.postorder.shouhuoren}}</view>
					<input type="text" @input="input1" :placeholder="i18n.postorder.name" :value="name"
						class="inputV" />
				</view>
				<!-- 电话 -->
				<view class="inputBackView">
					<view class="leftTipLabel">
						{{i18n.postorder.shouji}}
					</view>
					<input type="number" @input="inputphone" :placeholder="i18n.postorder.shouji" :value="phone"
						class="inputV" />
				</view>
				<!-- 地址 -->
				<view class="inputBackView" style="position: relative;" @click="choseAddress()">
					<view class="leftTipLabel">{{i18n.postorder.address}}</view>
					<input type="text" @click="choseAddress" :placeholder="i18n.postorder.tip5" :value="address"
						class="inputV" :disabled="true" />
					<image src="../../static/ads-seld-right.png" mode="aspectFit" class="morenImage"></image>
				</view>
				<!-- 门牌号 -->
				<view class="inputBackView">
					<view class="leftTipLabel">{{i18n.postorder.menpaihao}}</view>
					<input type="text" @input="inputmenpaihao" :placeholder="i18n.postorder.lizi" :value="menpaihao"
						class="inputV" />
				</view>
				<!-- 物品信息 -->
				<view style="height: 44px;">
					<view class="title">{{i18n.postorder.tip2}}</view>
				</view>
				<view class="inputBackView" style="position: relative;" @click="chosegoodsinfo">
					<view class="leftTipLabel">{{i18n.postorder.tip2}}</view>
					<input type="text" :placeholder="i18n.postorder.zhongliang" :value="goods" :disabled="true"
						class="inputV" />
					<image src="../../static/ads-seld-right.png" mode="aspectFit" class="morenImage"></image>
				</view>
				<!-- 备注 -->
				<view class="inputBackView" style="position: relative;" @click="choseBeizhu()">
					<view class="leftTipLabel">{{i18n.postorder.beizhu}}</view>
					<input type="text" :placeholder="i18n.postorder.yaoqiu" :value="beizhu" class="inputV"
						:disabled="true" />
					<image src="../../static/ads-seld-right.png" mode="aspectFit" class="morenImage"></image>
				</view>
				<view style="height: 44px;">
					<view class="title">{{i18n.postorder.tip3}}</view>
				</view>
				<!-- 配送时间 -->
				<view class="inputBackView" style="position: relative;" @click="choseTime">
					<view class="leftTipLabel">
						{{i18n.postorder.tip3}}
					</view>
					<input type="text" :placeholder="i18n.postorder.tip6" :value="time" class="inputV"
						style="color: #00C1DE;" :disabled="true" />
					<image src="../../static/ads-seld-right.png" mode="aspectFit" class="morenImage"></image>
				</view>
				<!-- 小费 -->
				<view style="height: 44px;">
					<view class="title">{{i18n.postorder.fee}}</view>
				</view>
				<view class="inputBackView" style="position: relative;" @click="choseFee">
					<view class="leftTipLabel">{{i18n.postorder.feetip}}</view>
					<input type="text" :placeholder="i18n.postorder.jijian" :value="tipMoney" class="inputV"
						:disabled="true" />
					<image src="../../static/ads-seld-right.png" mode="aspectFit" class="morenImage"
						@click="choseFee()"></image>
				</view>
			</view>
			<view style="width: 100%;height: 80px;"></view>
		</scroll-view>
		<view :style="'height:' + bottomViewHeight + 'px;'"
			style="width: 100%;background-color: white;display: flex;flex-direction: row;position: relative;">
			<!-- 价格明细 -->
			<view v-if="hasPrice" class="price" @click="showPriceDetail()">
				<view class="moneyF">{{i18n.index.moneyFuhao}}</view>
				<view class="money">{{allmoney}}</view>
				<view class="tip2">{{i18n.postorder.tip8}}</view>
				<image src="../../static/shang.png" mode="aspectFit" class="arrow"></image>
			</view>
			<!-- 底部说明 -->
			<view v-else class="bottom_txt">{{i18n.postorder.tip7}}</view>
			<view class="bottom_right" @click="xiadan()">{{i18n.postorder.xiadan}}</view>
		</view>
		<!-- 相关组件 -->
		<timev v-if="isShowTime" @timeSelcted="timeSelcted"></timev>
		<wupinMsgV v-if="isShowWPMsg" @wupinMsgSelcted="wupinMsgSelcted"></wupinMsgV>
		<tipMoneyV v-if="isShowTip" @tipMoneyAdd="tipMoneyAdd"></tipMoneyV>
		<priceDatl :priceDic="priceDic" :priceNum="allmoney" v-if="isShowPrceDatl" @priceDatlHide="priceDatlHide">
		</priceDatl>
		<payView v-if="showpay" :money="allmoney" type="2" @closePayView="closePayView"></payView>
	</view>
</template>

<script>
	import http from '../../toolClass/WYToolClass.js'
	import timev from '../components/addorder/order-time.vue'
	import wupinMsgV from '../components/addorder/order-wupin.vue'
	import tipMoneyV from '../../components/addorder/order-tip.vue'
	import priceDatl from '../components/addorder/order-priceDatl.vue'
	import payView from '../../components/payview/payview.vue'
	var amapFile = require('../../libs/amap-wx.130.js'); //如：..­/..­/libs/amap-wx.js
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});
	export default {
		components: {
			timev,
			wupinMsgV,
			tipMoneyV,
			priceDatl,
			payView
		},
		data() {
			return {
				scrollHeight: 0,
				bottomViewHeight: 76,
				navHeight: 0,
				name: '',
				phone: '',
				address: '',
				menpaihao: '',
				goods: '',
				beizhu: '',
				time: '',
				hasPrice: false,
				allmoney: 0,
				start_address: '',
				start_lat: 0,
				start_lng: 0,
				isShowTime: 0,
				pickName: '', //取件姓名：用登录时的昵称
				pickPhone: '', //取件电话：用登录时的手机号
				timeValue: {
					'time': '请选择',
					'servetime': 0,
					'tian': ''
				},
				isShowWPMsg: 0,
				wyMsg: {},
				// foAds: {},
				// toAds: {},
				isShowTip: 0,
				tipMoney: '',
				price: 0,
				// priceToGoupon: '0',
				// type: '',
				distance: '',
				weight: '',
				distanceTime: 0,
				timemoney: 0, //服务时间加价
				priceDic: {
					'money_basic': 0,
					'money_distance': 0,
					'money_weight': 0,
					'money_time': 0
				},
				showpay: 0,
				// isPayOrderClick: 1,
				isShowPrceDatl: 0
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			// console.log(res.safeArea.bottom)
			this.navHeight = 64 + res.statusBarHeight
			this.bottomViewHeight = 60
			this.scrollHeight = res.windowHeight - this.bottomViewHeight - this.navHeight

		},
		onLoad() {
			var res = uni.getSystemInfoSync()
			var that = this
			// that.foAds = JSON.parse(option.fromads)
			// that.toAds = JSON.parse(option.toads)
			// console.log(that.foAds, that.toAds)
			// that.type = option.type
			that.windowHeight = res.windowHeight
			that.windowWidth = res.windowWidth
			var dic = uni.getStorageSync('shopAddress')
			console.log(dic)
			if (!dic || !dic.address) {
				var that = this
				uni.showModal({
					title: '',
					content: that.i18n.postorder.noaddresstip,
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '../../package-mine/pages/editProfile/editProfile'
							})
						} else if (res.cancel) {
							uni.navigateBack()
						}
					}
				});
				return
			}
			var value = uni.getStorageSync('userinfo')
			that.pickName = value.user_nickname
			that.pickPhone = value.mobile
			// console.log(value)
			that.start_lat = dic.lat
			that.start_lng = dic.lng
			that.start_address = dic.address
			// that.getRidingRouteDistance()
			uni.$on('beizhuChange', (e) => {
				that.beizhu = e
			})
			uni.$on('selectedAdsSuccess2', (msg) => {
				console.log(msg)
				var that = this
				that.address = msg.name
				that.latitude = msg.lat
				that.longitude = msg.lng
				// if (msg.type == 0) {
				// 	that.foAds = msg
				// } else {
				// 	that.toAds = msg
				// }
				this.getRidingRouteDistance()
			})
			uni.$on('selectedAdsSuccess', (msg) => {
				console.log(msg)
				
			})
			

		},
		methods: {
			back() {
				uni.navigateBack()
			},
			priceDatlHide() {
				this.isShowPrceDatl = false
			},
			input1(e) {
				this.name = e.detail.value
			},
			inputphone(e) {
				this.phone = e.detail.value
			},
			choseAddress() {
				uni.navigateTo({
					url:'../../package-mine/pages/address/handSelecedAds?from=2'
				})
			},
			inputmenpaihao(e) {
				this.menpaihao = e.detail.value
			},
			chosegoodsinfo() {
				this.isShowWPMsg = 1
			},
			choseBeizhu() {
				uni.navigateTo({
					url: './beizhu?beizhu=' + this.beizhu
				})
			},
			choseTime() {
				this.isShowTime = true
			},
			choseFee() {
				this.isShowTip = true
			},
			xiadan() {
				this.showpay = 1
			},
		
			showPriceDetail() {
				this.isShowPrceDatl = 1
			},
			helpsendCheckTime() {
				var that = this
				this.http.sendAppRequest('Helpsend.CheckTime', {
					'servicetime': that.timeValue.servetime,
					'cityid': '1'
				}).then(function(res) {
					if (res.code == 0) {
						let tian = that.timeValue.tian
						if(tian == that.i18n.postorder.tommow){
							that.time = that.timeValue.tian + that.timeValue.time
						}else{
							that.time = that.timeValue.time
						}
						that.timemoney = res.info[0].timemoney
						that.priceDic.money_time = that.timemoney
						// console.log(1111111111111111, that.priceDic)
						that.computedTimeFee()
					}
				})
			},
			computedTimeFee() {
				var timefee = parseFloat(this.priceDic.money_time)
				if (timefee > 0) {
					var newmoney = timefee + parseFloat(this.allmoney)
					this.allmoney = String(newmoney)
				}
			},
			wupinMsgSelcted(e) {
				this.isShowWPMsg = false
				console.log(e)
				if (e != 0) {
					this.wyMsg = e
					var dic = e.type
					this.goods = dic.name + ' ' + this.wyMsg.weight + 'Kg'
					this.weight = this.wyMsg.weight
					this.helpsendComputed()
				}
			},
			helpsendComputed() {
				var param = {
					'type': '2',
					'start_lng': this.start_lng,
					'start_lat': this.start_lat,
					'end_lng': this.longitude,
					'end_lat': this.latitude,
					'distance': this.distance,
					'weight': this.weight,
				}
				var that = this
				that.http.sendAppRequest('Helpsend.Computed', param).then(function(data) {
					if (data.code == 0) {
						var dic = data.info[0]
						console.log(dic)
						that.hasPrice = true
						var money = parseFloat(dic.money_basic) + parseFloat(dic.money_weight) + parseFloat(dic
							.money_distance)
						that.allmoney = String(money)
						that.priceDic.money_basic = dic.money_basic
						that.priceDic.money_basic_txt = dic.money_basic_txt
						that.priceDic.money_weight = dic.money_weight
						that.priceDic.money_weight_txt = dic.money_weight_txt
						that.priceDic.money_distance = dic.money_distance
						that.priceDic.money_distance_txt = dic.money_distance_txt
					}
				})
			},
			timeSelcted(e) {
				var that = this
				that.isShowTime = 0
				if (e != 0) {
					// console.log(e)
					that.timeValue = e
					that.helpsendCheckTime()
				}
			},
			tipMoneyAdd(e) {
				var that = this
				that.isShowTip = 0
				// console.log(e)
				if (e == 0) {
					that.tipMoney = ''
					if(that.priceDic.money_small>0){
						var money = parseFloat(this.priceDic.money_small)
						var nowmoney = parseFloat(this.allmoney) - money
						this.allmoney = String(nowmoney)
					}
					that.priceDic.money_small = 0
				} else {
					that.tipMoney = e
					that.priceDic.money_small = that.tipMoney
					var money = parseFloat(this.priceDic.money_small)
					this.hasPrice = true
					var nowmoney = parseFloat(this.allmoney) + money
					this.allmoney = String(nowmoney)
				}
				
			},
			
			getRidingRouteDistance() {
				var that = this
				setTimeout(function() {
					myAmapFun.getRidingRoute({
						origin: that.start_lng + ',' + that.start_lat, //'117.135215,36.192833',
						destination: that.longitude + ',' + that.latitude, //'117.135215,36.292833',
						success: function(data) {
							var points = [];
							// console.log(data)
							if (data.paths && data.paths[0] && data.paths[0].rides) {
								var rides = data.paths[0].rides;
								for (var i = 0; i < rides.length; i++) {
									var poLen = rides[i].polyline.split(';');
									for (var j = 0; j < poLen.length; j++) {
										points.push({
											longitude: parseFloat(poLen[j].split(',')[0]),
											latitude: parseFloat(poLen[j].split(',')[1])
										})
									}
								}
							}
							// console.log(points)
							that.polyline = [{
								points: points,
								color: "#00c1de",
								width: 6
							}]
							that.distance = data.paths[0].distance


							that.helpsendGetLengthWithDistance()

						},
						fail: function(info) {
							// console.log(JSON.stringify(info))
						}
					})
				}, 500)



			},
			helpsendGetLengthWithDistance() {
				var that = this
				http.sendAppRequest('Helpsend.GetLength', {
					'distance': that.distance
				}).then(function(res) {
					if (res.code == 0) {
						that.distanceTime = res.info[0].length
						// that.setMarkersCallout()
					}
				})
			},
			closePayView(e) {
				console.log(e)
				this.showpay = 0
				if (e == 0) {

				} else {
					var param = {
						'type': '2', // type 类型 1帮取 2帮送
						'start_name': this.start_address,
						'start_lng': this.start_lng,
						'start_lat': this.start_lat,
						'pick_name': this.pickName,
						'pick_phone': this.pickPhone,
						'end_name': this.address,
						'end_addr': this.menpaihao,
						'end_lng': this.longitude,
						'end_lat': this.latitude,
						'recip_name': this.name,
						'recip_phone': this.phone,
						'distance': this.distance,
						'weight': this.weight,
						'servicetime': this.timeValue.servetime,
						'cateid': this.wyMsg.type.id,
						'des': this.beizhu,
						'fee': this.tipMoney,
						'is_mer': '1'
					}
					console.log(param)
					// #ifdef APP-PLUS
					param.payid = e.id
					// #endif
					
					var that = this
					that.http.sendAppRequest('Helpsend.Create', param).then(function(res) {
							console.log(res)
							if (res.code == 0) {
								if (e.id == 0) {
									uni.showToast({
										title: '支付成功',
										duration: 2000
									})
									that.back()
								} else {

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
												that.back()
											},
											fail: function(err) {
												console.log('fail:' + JSON.stringify(err));
												that.back()
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

											success(res) {
												uni.showToast({
													title: '支付成功',
													duration: 2000
												})
												console.log(res)
												that.back()
											},
											fail(e) {
												console.log(e)
												that.back()
											}
										})
									}
								}

							} else if (res.code == 981) {
								if (e.id == 0) {
									that.back()
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
		background-color: #F5F5F5;
		overflow: hidden;
	}

	.topImageView {
		width: 100%;
		overflow: hidden;
		height: 64px;
		background-color: #2F3E51;
		/* position: relative; */
		background-size: 100% auto;

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
		margin-left: 25%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}

	.title {
		width: 100%;
		padding-left: 15px;
		padding-top: 17px;
		height: 10px;
		height: 44px;
		font-size: 14px;
		text-align: left;
		color: #6f6f6f;
		line-height: 10px;

	}

	.inputBackView {
		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
	}
	.leftTipLabel {
		margin-left: 15px;
		
		/* height: 51px;
		line-height: 51px; */
		/* top: 0; */
		font-size: 16px;
		color: #323232;
	}
	
	.inputV {
		/* border-bottom: 1px solid #f0f0f0; */
		height: 51px;
		line-height: 51px;
		top: 0;
		font-size: 14px;
		display: flex;
		flex:1;
		/* width: calc(100% - 150px); */
		margin-right: 15px;
		margin-left: 15px;
	}

	.morenImage {
		 margin-right: 20px; 
		margin-left: 10px;
		height: 16px;
		width: 16px;
		/* margin-top: 18px; */
		/* position: absolute; */
	}

	.subBtnClass {
		position: absolute;
		bottom: 40rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 96rpx;
		border-radius: 48rpx;
		background-color: #00c1de;
		line-height: 96rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}

	.bottom_txt {
		/* width: 105px; */
		height: 14px;
		font-size: 14px;
		text-align: center;
		color: #323232;
		line-height: 14px;
		margin-top: 23px;
		margin-left: 15px;
	}

	.bottom_right {
		position: absolute;
		height: 38px;
		background: #00c1de;
		border-radius: 2px;
		right: 15px;
		bottom: 11px;
		color: white;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		line-height: 38px;
		width: 100px;
	}

	.price {
		position: relative;
		height: 40px;
		align-items: center;
		display: flex;
		flex-direction: row;
		width: 50%;
		margin-top: 10px;
		margin-left: 15px;
	}

	.moneyF {

		height: 30px;
		font-size: 12px;
		text-align: center;
		color: #f40404;
		line-height: 30px;
	}

	.money {
		height: 40px;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		color: #f40404;
		line-height: 40px;
		margin-left: 5px;
	}

	.tip2 {
		margin-left: 10px;
		height: 40px;
		font-size: 13px;
		text-align: center;
		color: #989898;
		line-height: 40px;
	}

	.arrow {
		width: 12px;
		height: 12px;
	}
</style>
