<template>
	<view style="width: 100%;height: 100%;justify-content: center;align-items: center;display: flex;"
		v-if="isShowLogin">
		<text
			style="width: 100px;height: 30px;background-color: #FF5725;color: #FFFFFF;text-align: center;font-size: 15px;line-height: 30px;border-radius: 15px;"
			@click="doLongin()">{{i18n.mine.qingdenglu}}</text>
	</view>
	<view class="content column" v-else>

		<view style="width: 100%;background-color: #fff;position: relative;"
			:style="'height:' + (statusBarHeight + 38) + 'px;'">
			
			<view class="row"
				style="left: 15px;height: 36px;position: absolute;bottom: 0;align-items: center;"
				:style="'right:' + (menuButtonWidth + 15) + 'px;'">
			
				<text style="font-size: 16px;color: black;margin: auto;">订单</text>

			</view>

		</view>
		
		<swiper style="width: 100%;background-color: #F7F8F9;" :style="'height:' + scrollHeight + 'px;'"
			@animationfinish="animationfinish" :current="typeIndex">
			
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV1" :height="scrollHeight" typeString="1" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV3" :height="scrollHeight" typeString="3" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV2" :height="scrollHeight" typeString="2" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV5" :height="scrollHeight" typeString="5" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV6" :height="scrollHeight" typeString="6" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV7" :height="scrollHeight" typeString="7" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
			<swiper-item @touchmove.stop="stopTouchMove">
				<orderListV ref="orderListV8" :height="scrollHeight" typeString="8" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				</orderListV>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import orderListV from '../../components/orderlist/orderListView.vue'
	export default {
		components: {
			orderListV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				statusBarHeight: 0,
				scrollHeight: 0,
				menuButtonWidth: 0,
				typeArray: [],
				typeIndex: 0,
				fromWhere: '',
				isShowLogin: false
			}
		},
		onLoad() {
			this.statusBarHeight = getApp().globalData.top
			this.menuButtonWidth = getApp().globalData.menuButtonWidth
			console.log(this.statusBarHeight, this.menuButtonWidth)
			var res = uni.getSystemInfoSync()
			this.windowWidth = getApp().globalData.windowWidth
			this.windowHeight = res.windowHeight
			this.scrollHeight = this.windowHeight - this.statusBarHeight - 78
			this.typeArray = [this.i18n.index.meishi, this.i18n.index.fuwu, this.i18n.index.shansong, this.i18n.index					.chaoshi, this.i18n.index.shengxian, this.i18n.index.songyao, '果蔬']
			var that = this
			uni.$on('buysucess', function(type) {
				console.log('buysucessbuysucessbuysucess',type)
				// setTimeout(function() {
					
					switch (Math.floor(type)){
						case 1:
						that.typeIndex = 0
						that.$refs.orderListV1.refresherrefresh()
						break;
						case 2:
						that.typeIndex = 2
						that.$refs.orderListV2.refresherrefresh()
						break;
						case 3:
						that.typeIndex = 1
						that.$refs.orderListV3.refresherrefresh()
						break;
						case 4:
						break;
						case 5:
						that.typeIndex = 3
						that.$refs.orderListV5.refresherrefresh()
						break;
						case 6:
						that.typeIndex = 4
						that.$refs.orderListV6.refresherrefresh()
						break;
						case 7:
						that.typeIndex = 5
						that.$refs.orderListV7.refresherrefresh()
						break;
						case 8:
						that.typeIndex = 6
						that.$refs.orderListV8.refresherrefresh()
						break;
						default:
						break;
					}
					console.log(that.typeIndex)
				// }, 1000); 
				
			})
			// var that = this
			// that.http.sendRequest('Home.Home', {

			// }).then(function(res) {
			// 	if (res.code == 0) {
			// 		const dic = res.info[0]
			// 		const arr1 = dic.merchant_type[0]
			// 		for (var i = 0; i < arr1.length; i++) {
			// 			that.typeArray.push(arr1[i])
			// 		}
			// 		const arr2 = dic.merchant_type[1]
			// 		for (var i = 0; i < arr2.length; i++) {
			// 			that.typeArray.push(arr2[i])
			// 		}

			// 	}
			// })
		},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'mineChangeOrderType',
				success: res => {
					that.typeIndex = res.data
					console.log(res)
					uni.removeStorageSync('mineChangeOrderType');

				}
			})
			var value = uni.getStorageSync('userinfo');
			if (!value || !value.id || value.id == 0) {
				that.isShowLogin = true
			} else {
				that.isShowLogin = false
			}		
		},
		methods: {
			stopTouchMove: function() {
				return false;
			},
			doreturn() {
				if (this.fromWhere == 'abc') {
					uni.navigateBack({
						delta: 999
					})
				} else {
					uni.navigateBack({

					})
				}
			},
			typeButtonClick(item, index) {
				this.typeIndex = index
			},
			animationfinish(e) {
				this.typeIndex = e.detail.current
			},
			doSearch() {
				uni.navigateTo({
					url: '/package-mine/pages/order/orderSearchVC'
				})
			},
			cellItemClick(item, index) {
				uni.navigateTo({
					url: '../../package-mine/pages/order/order-map-detaile?order=' + item
						.id + '&top_type_id=' + item.top_type_id
				})
				

			},
			doPingjia(item) {
				if (item.top_type_id == 1) {
					uni.navigateTo({
						url: '/package-mine/pages/order/orderEvaluate?orderID=' + item.id
					})
				} else if (item.top_type_id == 3) {
					uni.navigateTo({
						url: '/package-mine/pages/order/fuwuEVA?orderID=' + item.id
					})
				} else {
					uni.navigateTo({
						url: '/package-mine/pages/order/marketEVA?orderID=' + item.id
					})
				}

			},
			doLongin() {
				uni.navigateTo({
					url: '../login/login',
				});
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

	.content {
		width: 100%;
		height: 100%;
	}

	.returnImage {
		margin-left: 15px;
		height: 20px;
		width: 20px;
	}

	.weixin-rightBtn {
		margin-top: 13px;
		height: 20px;
		width: 20px;
		right: 12px;
		position: absolute;
	}

	.typeButton-odr {
		display: inline-block;
		/* width: 70px; */
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #646464;
		font-size: 14px;
		margin-left: 15px;
		margin-right: 15px;
	}

	.typeButton-odr-sel {
		display: inline-block;
		/* width: 70px; */
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #FF5725;
		font-size: 14px;
		font-weight: bolder;
		position: relative;
		margin-left: 15px;
		margin-right: 15px;
	}

	.typeButton-odr-sel::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 2px;
		width: 28px;
		height: 9rpx;
		margin: 0 auto;
		background-color: #FF5725;
		border-radius: 4.5rpx;
	}
	
</style>
