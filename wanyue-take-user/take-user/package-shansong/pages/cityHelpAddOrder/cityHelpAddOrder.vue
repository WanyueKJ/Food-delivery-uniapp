<template>
	<view class="content">
		<scroll-view scroll-y class="scroll-backview" :style="'height:' + (windowHeight-76) + 'px;'"
			style="top: 5px; background-color: #F7F8F9;" :show-scrollbar="false">
			<view class="order-adsView" :style="type == 2 ? 'height: 270px;' : 'height: 125px;'">
				<view class="pageView row" v-if="type == 2">
					<view @click="pageBarClick(0)" class="pageCell"
						:style="pageSelIndex == 0 ? 'border: 1px solid #FF5725;color:#FF5725 ' : 'border: 1px solid #DEDEDE;color:#323232 '">
						{{i18n.shansong.zhidinggoumai}}
						<image src="../../static/images/page-selected.png" mode="" class="page-image"
							v-if="pageSelIndex == 0"></image>
					</view>
					<view @click="pageBarClick(1)" class="pageCell" style="margin-left: 20px;"
						:style="pageSelIndex == 1 ? 'border: 1px solid #FF5725;color:#FF5725 ' : 'border: 1px solid #DEDEDE;color:#323232 '">
						{{i18n.shansong.jiujingoumai}}
						<image src="../../static/images/page-selected.png" mode="" class="page-image"
							v-if="pageSelIndex == 1"></image>
					</view>
				</view>
				<view class="order-ads-item">
					<text class="order-ads-item-cycle" v-if="type == 2">{{i18n.shansong.mai}}</text>
					<text class="order-ads-item-cycle" v-if="type == 3">{{i18n.shansong.pai}}</text>
					<text class="order-ads-item-cycle" v-if="type == 4">{{i18n.shansong.ban}}</text>

					<view class="order-ads-item-middle" v-if="pageSelIndex == 0 && foAds.addr" @click="dosddress(0)">
						<text class="order-ads-item-ads oneline">{{foAds.place + foAds.addr}}</text>
						<text class="order-ads-item-ads-tip oneline">{{foAds.name + ' ' + foAds.mobile}}</text>
					</view>
					<view class="order-ads-item-middle" style="line-height: 75px; font-size: 16px; color: #989898;"
						v-if="pageSelIndex == 0 && !foAds.addr" @click="dosddress(0)">
						{{typeTisString}}
					</view>
					<view class="order-ads-item-middle" style="line-height: 75px; font-size: 16px; font-weight: bold;"
						v-if="pageSelIndex == 1">
						{{i18n.shansong.jiujinmaiTip}}
					</view>
					<view class="order-ads-right" @click="dosddress(2)" v-if="pageSelIndex == 0">
						<view class="order-ads-right-line">

						</view>
						<text class="order-ads-right-title">{{i18n.shansong.dizhibu}}</text>
					</view>
					<view class="order-ads-right" v-if="pageSelIndex == 1">

					</view>
				</view>
				<view class="order-ads-item" v-if="type == 2">
					<text class="order-ads-item-cycle" style="background-color: #26CC91;">{{i18n.shansong.shou}}</text>
					<view @click="dosddress(1)" class="order-ads-item-middle" v-if="toAds.mobile">
						<text class="order-ads-item-ads oneline">{{toAds.place + toAds.addr}}</text>
						<text class="order-ads-item-ads-tip oneline">{{toAds.name + ' ' + toAds.mobile}}</text>
					</view>
					<view @click="dosddress(1)" class="order-ads-item-middle"
						style="line-height: 75px; font-size: 16px; color: #989898;" v-else>
						{{i18n.shansong.dianjixuanzeshouhuodizhi}}
					</view>
					<view class="order-ads-right" @click="dosddress(3)">
						<view class="order-ads-right-line">

						</view>
						<text class="order-ads-right-title">{{i18n.shansong.dizhibu}}</text>
					</view>
				</view>
				<view class="order-ads-item" style="height: 50px;" @click="doselectTime">
					<text class="leftLabel-p" v-if="type == 2">{{i18n.meishi.songdashijian}}</text>
					<text class="leftLabel-p" v-if="type == 3">{{i18n.shansong.paiduishijian}}</text>
					<text class="leftLabel-p" v-if="type == 4">{{i18n.shansong.bangbanshijian}}</text>
					<view class="rightButton">
						<text class="rightButton-text">{{timeValue.tian + ' ' + timeValue.time}}</text>
						<!-- <text class="rightButton-text" v-if="type == 3">立即排队</text>
						<text class="rightButton-text" v-if="type == 4">立即前往</text> -->
						<image src="../../static/images/ads-seld-right.png" mode="" class="rightButton-image"></image>
					</view>
				</view>
			</view>

			<view class="order-adsView" style="height: 240px;margin-top: 10px;" v-if="type == 2">
				<view class="order-ads-item" style="height: 50px;">
					<text class="leftLabel-p" style="font-weight: bold;">{{i18n.shansong.bangwogoumaideshangpian}}</text>
				</view>
				<textarea type="text" :value="beizhuStr" :placeholder="i18n.shansong.xiexiaxianggoumaishangpin" class="input-xuqiu"
					@input="doAddBeizhu" />
				<view class="order-ads-item" style="height: 80px;">
					<view class="column" style="width: 60%;height: 100%;">
						<text class="leftLabel-p">{{i18n.shansong.yugushangpinfei}}</text>
						<text class="leftLabel-p"
							style="font-size: 12px; color: #FF5725;margin-top: 0;height: 20px;line-height: 20px;">{{i18n.shansong.qishoudianfu}}</text>
					</view>
					<view class="rightButton">
						<input type="number" :value="yuguajiage" :placeholder="i18n.shansong.yugujiage" class="rightButton-text"
							style="color: #323232;height: 50px; line-height: 50px;" @input="yuguajiageInput" />
					</view>
				</view>
			</view>
			<view class="order-adsView" style="height: 240px;margin-top: 10px;" v-if="type == 3">
				<view class="order-ads-item" style="height: 50px;">
					<text class="leftLabel-p" style="font-weight: bold;">{{i18n.shansong.tianxiepaiduineirong}}</text>
				</view>
				<textarea type="text" :value="beizhuStr" :placeholder="i18n.shansong.paijutiyaoqiu" class="input-xuqiu"
					@input="doAddBeizhu" />
				<view class="order-ads-item" style="height: 80px;">
					<view class="column" style="width: 60%;height: 100%;">
						<text class="leftLabel-p" style="margin-top: 15px;">{{i18n.shansong.paiduishichang}}</text>
					</view>
					<view class="rightButton">
						<text type="text" class="rightButton-text" style="color: #323232;"
							@click="doPaidushichangxuanze()">{{geshihuashichang}}</text>
						<image src="../../static/images/ads-seld-right.png" mode="" class="rightButton-image"
							@click="doPaidushichangxuanze()"></image>
					</view>
				</view>
			</view>
			<view class="order-adsView" style="height: 240px;margin-top: 10px;" v-if="type == 4">
				<view class="order-ads-item" style="height: 50px;">
					<text class="leftLabel-p" style="font-weight: bold;">{{i18n.shansong.tianxiebangbanshi}}</text>
				</view>
				<textarea type="text" :value="beizhuStr" :placeholder="i18n.shansong.bangbanjutineirong" class="input-xuqiu"
					@input="doAddBeizhu" />
				<view class="order-ads-item" style="height: 80px;">
					<view class="column" style="width: 60%;height: 100%;">
						<text class="leftLabel-p">{{i18n.shansong.yufufuwufei}}</text>
						<text class="leftLabel-p oneline"
							style="font-size: 12px; color: #FF5725;margin-top: 0;height: 20px;line-height: 20px;">{{i18n.shansong.fuwuwanchengjiesuan}}</text>
					</view>
					<view class="rightButton">
						<input type="number" :value="yuguajiage" :placeholder="i18n.shansong.yufufuwufei" class="rightButton-text"
							style="color: #323232;height: 50px; line-height: 50px;" @input="yuguajiageInput" />
					</view>
				</view>
			</view>
			<!-- <view class="order-adsView" style="height: 50px; margin-top: 10px;">
				<view class="order-ads-item" style="height: 50px;" @click="doselectCoupon">
					<text class="leftLabel-p">{{i18n.meishi.youhuiquan}}</text>
					<view class="rightButton">
						<input type="text" :value="goupon.name" :placeholder="i18n.shansong.xuanzeyouhiquan" class="rightButton-text"
							:disabled="1" style="color: #323232;" />
						<image src="../../../static/ads-seld-right.png" mode="" class="rightButton-image"></image>
					</view>
				</view>
			</view> -->
			<view class="order-adsView" style="height: 50px; margin-top: 10px;">
				<view class="order-ads-item" style="height: 50px;" @click="doselectSmallMoney">
					<text class="leftLabel-p">{{i18n.shansong.xiaofei}}</text>
					<view class="rightButton">
						<input type="text" :value="tipMoney.length > 0 ? tipMoney + '¥' : ''" :placeholder="i18n.shansong.jijianjiasu"
							class="rightButton-text" :disabled="1" style="color: #323232;" />
						<image src="../../static/images/ads-seld-right.png" mode="" class="rightButton-image"></image>
					</view>
				</view>
			</view>
			<view class="xieyiView">
				<image :src="isAgree ? '/static/item-sel.png' : '/static/item-nor.png'" mode="" class="xieyiButn-p"
					@click="doAgreeXieyi"></image>
				<text class="xieyiTitle">{{i18n.shansong.yudubingtongyi}}</text>
				<text class="xieyiTitle" style="color: #FF5725; margin-left: 0px;" @click="doXieyiWebview(23)"
					v-if="type == 2">{{i18n.shansong.bangmaixieyi}}</text>
				<text class="xieyiTitle" style="color: #FF5725; margin-left: 0px;" @click="doXieyiWebview(25)"
					v-if="type == 3">{{i18n.shansong.bangpaixieyi}}</text>
				<text class="xieyiTitle" style="color: #FF5725; margin-left: 0px;" @click="doXieyiWebview(24)"
					v-if="type == 4">{{i18n.shansong.bangbanxieyi}}</text>
			</view>
		</scroll-view>
		<view class="bottomView">
			<view class="priceLeftView row" v-if="priceDic.money_basic">
				<text class="priceLeftView_rmb">¥</text>
				<text class="priceLeftView_priceL">{{price}}</text>
				<text class="priceLeftView_mingxi" @click="showPriceDetailes()">{{i18n.shansong.jiagemingxi}}</text>
				<image src="../../static/images/price-up.png" mode="" class="priceLeftView_mingxiIMG"
					@click="showPriceDetailes()"></image>
			</view>
			<text class="priceLabel" v-else>{{i18n.shansong.wanzhengdizhihuode}}</text>
			<text :style="isPayOrderClick ? 'opacity: 0.5;' : 'opacity: 1;'" class="subBtnClass2222"
				@click="doAddOrder()">{{i18n.shansong.lijixiadan}}</text>
		</view>
		<timev :type="realType" v-if="isShowTime"></timev>
		<couponMsgV :type="realType" :money="priceToGoupon" v-if="isShowGoupon"></couponMsgV>
		<tipMoneyV v-if="isShowTip"></tipMoneyV>
		<priceDatl :priceDic="priceDic" :priceNum="price" v-if="isShowPrceDatl"></priceDatl>
		<paitimeV v-if="isShowPaiduiShichang"></paitimeV>
		<payView v-if="showpay" :money="price" type="2" @closePayView="closePayView"></payView>
	</view>
</template>

<script>
	import timev from '../../../components/addorder/order-time.vue'
	import couponMsgV from '../../../components/addorder/order-coupon.vue'
	import tipMoneyV from '../../../components/addorder/order-tip.vue'
	import priceDatl from '../../../components/addorder/order-priceDatl.vue'
	import paitimeV from '../../../components/addorder/paiTimeSelected.vue'
	import payView from '../../../components/payview/payview.vue'
	var amapFile = require('../../../libs/amap-wx.130.js');
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});
	export default {
		components: {
			timev,
			couponMsgV,
			tipMoneyV,
			priceDatl,
			payView,
			paitimeV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onUnload() {
			// 移除监听事件  
			uni.$off('timeSelcted');
			uni.$off('wupinMsgSelcted');
			uni.$off('beizhuChange');
			uni.$off('couponSelcted');
			uni.$off('tipMoneyAdd');
			uni.$off('chooseAddressSucess2');
			uni.$off('priceDatlHide');
		},
		onLoad(option) {

			var res = uni.getSystemInfoSync()
			var that = this
			that.type = option.helpType
			that.realType = that.type * 1 + 1
			uni.getStorage({
				key: 'bangmaipaiban',
				success: res => {
					that.beizhuStr = res.data
					console.log(res)
				}
			})
			console.log(that.type)
			if (that.type == 2) {
				that.typeTisString = that.i18n.shansong.dianjixuanzegoumaidizhi
				if(option.from == 'find'){
					that.foAds = JSON.parse(option.fromads)
				}
				console.log(that.foAds)
				// that.timeValue = {
				// 		'time': '立即送达',
				// 		'servetime': 0
				// 	},
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.tongchenggoumai
				})

			} else if (that.type == 3) {
				that.typeTisString = that.i18n.shansong.dianjixuanzepaidudizhi
				// that.timeValue = {
				// 		'time': '立即排队',
				// 		'servetime': 0
				// 	},
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.bangwopaidui
				})
				that.helpsendComputed()
			} else {
				that.typeTisString = that.i18n.shansong.dianjixuanzebanshidizhi
				// that.timeValue = {
				// 		'time': '立即前往',
				// 		'servetime': 0
				// 	},
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.bangwobanshi
				})
				that.helpsendComputed()
			}

			that.windowHeight = res.windowHeight
			that.windowWidth = res.windowWidth

			uni.$on('timeSelcted', (e) => {
				that.isShowTime = 0
				if (e != 0) {
					that.timeValue = e
					that.helpsendCheckTime()
				}
			})

			uni.$on('beizhuChange', (e) => {
				that.beizhuStr = e

			})
			uni.$on('couponSelcted', (e) => {
				that.isShowGoupon = 0
				console.log(e)
				if (e != 'close'){
					if (e == 0) {
						that.goupon = {
							'name': '',
							'id': '0',
							'limit': 0
						}
						that.priceDic.money_coupon = 0
					} else {
						that.goupon = e
						that.goupon.name = '- ¥ ' + that.goupon.limit
						that.priceDic.money_coupon = that.goupon.limit
					}
					that.dojisuanjiage()
				}
				
			})
			uni.$on('tipMoneyAdd', (e) => {
				that.isShowTip = 0

				if (e == 0) {
					that.tipMoney = ''
					that.priceDic.money_small = 0
				} else {
					that.tipMoney = e
					that.priceDic.money_small = that.tipMoney
				}
				that.dojisuanjiage()

			})
			uni.$on('chooseAddressSucess2', (msg) => {
				if (msg.type == 0) {
					that.foAds = msg
				} else {
					that.toAds = msg
				}
				console.log(msg, that.pageSelIndex)
				if (that.pageSelIndex == 0) {
					if (that.foAds && that.foAds.lat &&  that.toAds && that.toAds.lat) {
						this.getRidingRoute()
					}
				} else {
					if (that.toAds.mobile) {
						this.helpsendComputed()
					}
				}


			})
			uni.$on('paiTimeSelected', (e) => {
				that.isShowPaiduiShichang = 0

				if (e == 0) {

				} else {
					console.log(e.ddd * 1440, e.hhh, e.mmm)
					this.morenshichang = e.ddd * 1440 + (e.hhh * 60) + e.mmm * 1
					console.log(this.morenshichang)
					if (this.morenshichang < 30) {
						this.morenshichang = 30
						this.geshihuashichang = '30' + this.i18n.meishi.fenzhong
					} else {
						if (e.ddd > 0) {
							this.geshihuashichang = e.ddd + this.i18n.shansong.tian + e.hhh + this.i18n.shansong.xiaoshi + e.mmm + this.i18n.meishi.fenzhong
						} else if (e.hhh > 0) {
							this.geshihuashichang = e.hhh + this.i18n.shansong.xiaoshi + e.mmm + this.i18n.meishi.fenzhong
						} else {
							this.geshihuashichang = e.mmm + this.i18n.meishi.fenzhong
						}
					}
					this.helpsendComputed()
				}
			})
			uni.$on('priceDatlHide', (e) => {
				that.isShowPrceDatl = 0
			})
		},
		data() {
			return {
				type: '',
				realType: 0,
				windowHeight: 0,
				windowWidth: 0,
				pageSelIndex: 0,
				isAgree: 0,
				isShowTime: 0,
				timeValue: {
					'time': '请选择',
					'servetime': 0,
					'tian':''
				},
				wyMsg: {},
				foAds: {},
				toAds: {},
				beizhuStr: '',
				isShowGoupon: 0,
				goupon: {
					'name': '',
					'id': '0',
					'limit': 0
				},
				isShowTip: 0,
				tipMoney: '0',
				price: 0,
				priceToGoupon: 0,
				distance: '',
				distanceTime: 0,
				timemoney: 0, //服务时间加价
				priceDic: {
					'money_time': 0,
					'money_basic':0,
					'money_distance_txt':0,
					'money_length':0
				},
				isShowPrceDatl: 0,
				typeTisString: '',
				isShowPrceDatl: 0,
				showpay: 0,
				isPayOrderClick: 1,
				isShowPaiduiShichang: 0,
				yuguajiage: '',
				morenshichang: 30,
				geshihuashichang: '30分钟',
				order_id: null
			}
		},
		onReady() {
			this.timeValue = {
					'time': this.i18n.shansong.qingxuanze,
					'servetime': 0,
					'tian':''
				}
			this.geshihuashichang = '30' + this.i18n.meishi.fenzhong
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
				that.http.sendRequest('Orders.GetDetail', {
					'orderid': that.order_id,
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						console.log(info)
						if (info.status == 2) {
							that.doOrderList()
						}
					}
				})
			},
			getRidingRoute() {
				var that = this
				myAmapFun.getRidingRoute({
					origin: that.foAds.lng + ',' + that.foAds.lat, //'117.135215,36.192833',
					destination: that.toAds.lng + ',' + that.toAds.lat, //'117.135215,36.292833',
					success: function(data) {
						var points = [];
						console.log(data)

						that.distance = data.paths[0].distance

						that.helpsendComputed()

					},
					fail: function(info) {

					}
				})
			},
			dosddress(e) {
				console.log(112112)
				uni.navigateTo({
					url:'/package-mine/pages/address/address?fromW=order&adsType=' + e
				})
			},
			doAgreeXieyi() {
				this.isAgree = !this.isAgree
			},
			doXieyiWebview(e) {
				var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + e + '&lang=' + getApp().globalData.language
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '/pages/webView/webView',
						});
					}
				})
			},
			doselectTime() {
				console.log(1111111111)
				this.isShowTime = true
			},

			doAddBeizhu(e) {
				this.beizhuStr = e.detail.value
			},
			doselectCoupon() {
				this.isShowGoupon = true
			},
			doselectSmallMoney() {
				this.isShowTip = true
			},
			pageBarClick(e) {
				var that = this
				that.pageSelIndex = e
				if (that.pageSelIndex == 0) {
					if (that.foAds.mobile && that.toAds.mobile) {
						this.getRidingRoute()
					}
				} else {
					if (that.toAds.mobile) {
						this.helpsendComputed()
					}
				}
			},
			helpsendCheckTime() {
				var that = this
				var url = ''
				if (that.type == 2) {
					url = 'Helpbuy.CheckTime'
				} else if (that.type == 3) {
					url = 'Helpqueue.CheckTime'
				} else if (that.type == 4) {
					url = 'Helpwork.CheckTime'
				}
				that.http.sendRequest(url, {
					'servicetime': that.timeValue.servetime
				}).then(function(res) {
					if (res.code == 0) {
						that.timemoney = res.info[0].timemoney
						that.priceDic.money_time = that.timemoney
						that.dojisuanjiage()
						console.log(1111111111111111, that.priceDic)
					}
				})
			},
			helpsendComputed() {
				console.log(121312123132123)
				var that = this
				var url = ''
				var dic = {}
				if (that.type == 2) {
					url = 'Helpbuy.Computed'
					dic = {
						'start_lng': that.foAds.lng,
						'start_lat': that.foAds.lat,
						'end_lng': that.toAds.lng,
						'end_lat': that.toAds.lat,
						'distance': that.pageSelIndex == 0 ? that.distance : 0,
						'type': that.pageSelIndex + 1
					}
				} else if (that.type == 3) {
					url = 'Helpqueue.Computed'
					dic = {
						'length': this.morenshichang
					}
				} else if (that.type == 4) {
					url = 'Helpwork.Computed'
				}
				that.http.sendRequest(url, dic).then(function(res) {
					if (res.code == 0) {
						that.priceDic.money_basic = res.info[0].money_basic
						that.priceDic.money_basic_txt = res.info[0].money_basic_txt
						that.priceDic.money_distance = res.info[0].money_distance
						that.priceDic.money_distance_txt = res.info[0].money_distance_txt
						that.priceDic.money_length = res.info[0].money_length
						that.priceDic.money_length_txt = res.info[0].money_length_txt
						that.isPayOrderClick = 0
						that.dojisuanjiage()
					}
				})
			},
			dojisuanjiage() {
				
				var that = this
				console.log(that.priceDic.money_basic*1,that.priceDic.money_length*1,that
						.goupon.limit*1,that.tipMoney*1,that.priceDic.money_time*1)
				
				if (that.type == 2) {
					that.price = (that.priceDic.money_basic * 1) + (that.priceDic.money_distance * 1) - (that
						.goupon.limit * 1) + that.tipMoney * 1 + (that.priceDic.money_time * 1)
				}
				if (that.type == 3) {
					that.price = (that.priceDic.money_basic * 1) + (that.priceDic.money_length * 1) - (that
						.goupon.limit * 1) + (that.tipMoney * 1) + (that.priceDic.money_time * 1)
				}
				if (that.type == 4) {
					that.price = that.priceDic.money_basic * 1 - that
						.goupon.limit * 1 + (that.priceDic.money_time * 1) + that.tipMoney * 1 + that.yuguajiage * 1
				}
				that.priceToGoupon = that.price + (that
						.goupon.limit * 1)
				that.price = parseFloat(that.price).toFixed(2)
				console.log(that.price)
				if (that.price < 0) {
					that.price = 0
				}
			},
			showPriceDetailes() {
				this.isShowPrceDatl = 1
			},
			closePayView(e) {
				console.log(e)
				this.showpay = 0
				if (e == 0) {

				} else {
					var that = this
					that.order_id = ''
					var url = ''
					var dic = {}
					if (that.type == 2) {
						url = 'Helpbuy.Create'
						dic = {
							'start_lng': that.foAds.lng,
							'start_lat': that.foAds.lat,
							'end_lng': that.toAds.lng,
							'end_lat': that.toAds.lat,
							'distance': that.pageSelIndex == 0 ? that.distance : 0,
							'type': that.pageSelIndex + 1,
							'prepaid': that.yuguajiage
						}
						dic.start_name = that.foAds.place
						dic.start_addr = that.foAds.addr
						dic.end_name = that.toAds.place
						dic.end_addr = that.toAds.addr
						dic.recip_name = that.toAds.name
						dic.recip_phone = that.toAds.mobile

					} else if (that.type == 3) {
						url = 'Helpqueue.Create'
						dic = {
							'length': that.morenshichang,
							'end_lng': that.foAds.lng,
							'end_lat': that.foAds.lat,
						}
						dic.end_name = that.foAds.place
						dic.end_addr = that.foAds.addr
						dic.recip_name = that.foAds.name
						dic.recip_phone = that.foAds.mobile
					} else if (that.type == 4) {
						url = 'Helpwork.Create'
						dic = {
							'prepaid': that.yuguajiage,
							'end_lng': that.foAds.lng,
							'end_lat': that.foAds.lat,
						}
						dic.end_name = that.foAds.place
						dic.end_addr = that.foAds.addr
						dic.recip_name = that.foAds.name
						dic.recip_phone = that.foAds.mobile
					}

					dic.servicetime = that.timeValue.servetime
					dic.usercouponid = that.goupon.id
					dic.fee = that.tipMoney
					// dic.payid = e.id
					dic.des = that.beizhuStr
					// #ifdef APP-PLUS
						dic.payid = e.id
					// #endif
					// #ifdef MP-WEIXIN
						dic.openid = uni.getStorageSync('openid'),
						dic.payid = e.id == 2 ? '3' : e.id,
					// #endif
						that.http.sendRequest(url, dic).then(function(res) {
							if (res.code == 0) {
								that.order_id = res.info[0].order_id
								if (e.id == 1) {

									uni.requestPayment({
										provider: 'alipay',
										orderInfo: res.info[0].ali
											.orderinfo, //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
										success: function(res) {
											uni.showToast({
												title:'',
												duration: 2000
											})
											console.log('success:' + JSON.stringify(res));
											that.doOrderList()
										},
										fail: function(err) {
											console.log('fail:' + JSON.stringify(err));
											that.doOrderList()
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
												title:'',
												duration: 2000
											})
											console.log(res)
											that.doOrderList()
										},
										fail(e) {
											console.log(e)
											that.doOrderList()
										}
									})
								} else {
									uni.showToast({
										title:'',
										duration: 2000
									})
									that.doOrderList()
								}
							} else if (res.code == 981) {
								if (e.id == 0) {
									that.doOrderList()
								}
							}
						})
				}

			},
			doAddOrder() {
				if (!this.isPayOrderClick) {
					if (this.type == 3) {
						if (!this.foAds.mobile || this.foAds.mobile.length == 0) {
							uni.showToast({
								title: this.i18n.yilou.qtxpddz,
								duration: 2000,
								icon: 'none'
							})
							return
						}
					} else if (this.type == 4) {
						if (!this.foAds.mobile || this.foAds.mobile.length == 0) {
							uni.showToast({
								title: this.i18n.yilou.qtxbsdz,
								duration: 2000,
								icon: 'none'
							})
							return
						}
					}



					if (!this.isAgree) {
						uni.showToast({
							title: this.i18n.yilou.qingtyqsxy,
							duration: 2000,
							icon: 'none'
						})
					} else if (this.timeValue.servetime == 0) {
						if (this.type == 2) {
							uni.showToast({
								title: this.i18n.yilou.qxzsdsj,
								duration: 2000,
								icon: 'none'
							})
						} else if (this.type == 3) {
							uni.showToast({
								title: this.i18n.yilou.qxzpdsj,
								duration: 2000,
								icon: 'none'
							})
						} else if (this.type == 4) {
							uni.showToast({
								title: this.isAgree8n.yilou.qxzbbsj,
								duration: 2000,
								icon: 'none'
							})
						}
						
					} else {
						this.showpay = 1
					}

				}

			},
			doPaidushichangxuanze() {
				this.isShowPaiduiShichang = 1
			},
			yuguajiageInput(e) {
				this.yuguajiage = e.detail.value
				if (this.type == 4) {
					this.priceDic.money_fuwu = this.yuguajiage
					this.dojisuanjiage()
				}
			},
			doOrderList() {
				console.log(123123312123123)
				uni.$emit('xiadanchongleazhidaole', this.type)
				
				// #ifdef MP-WEIXIN
				this.getWechatTemplate()
				// #endif
				// #ifndef MP-WEIXIN
				uni.$emit('buysucess',2)
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
					uni.$emit('buysucess',2)
					uni.switchTab({
						url: '/pages/order/order'
					})
				})
			},

		}
	}
</script>

<style>
	@import url("../addOrder/addOrder.css");

	page {
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #f7f8f9;
	}

	.pageView {
		width: 100%;
		height: 70px;
	}

	.pageCell {
		margin-left: 12px;
		width: calc(50% - 26px);
		margin-top: 16px;
		height: 38px;
		border-radius: 4px;
		line-height: 38px;
		font-size: 16px;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.page-image {
		position: absolute;
		width: 16px;
		height: 16px;
		right: 0px;
		bottom: 0px;
		/* background-color: #FF5725; */
	}

	.input-xuqiu {
		height: 107px;
		width: calc(100% - 24px);
		margin-left: 12px;
		font-size: 15px;
		line-height: 20px;
	}

	.input-xuqiu::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		margin: 0 auto;
		background-color: #f5f6f7;
	}
</style>
