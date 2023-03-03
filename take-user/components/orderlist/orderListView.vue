<template>
	<view class="" style="width: 100%;">
		<scroll-view scroll-y="true" :style="'height:' + height + 'px;'" style="height: 100%;width: 100%;"
			class="column" :refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower"
			:refresher-enabled="true" :refresher-threshold="45" @refresherrefresh="refresherrefresh">

			<!-- <image :src="nolistImage" mode="aspectFit"
				style="width: 480rpx;height: 352rpx;position: absolute;left: 135rpx;top: 150rpx;"
				v-if="listArray.length == 0"></image> -->
			<view class="" style="margin-left: 25%;margin-top: 100px;width: 50%;" v-if="listArray.length == 0">
				<image src="../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
				<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
					暂无订单
				</view>
			</view>
			<view v-for="(item,index) in listArray" :key="index" class="orderCell-odr"
				@click="cellItemClick(item,index)" v-else>
				<view class="row" style="width: 100%;"
					v-if="(item.status == 1 || item.status == 2 || item.status == 3 || item.status == 6 || item.status == 7) && typeString != 2">
					<image :src="item.store.thumb" mode="aspectFill" class="thumb" style="margin-bottom: 12px;"
						v-if="typeString != 2">
					</image>
					<image src="../../static/shansong.png" mode="aspectFill" class="thumb" style="margin-bottom: 12px;"
						v-if="typeString == 2">
					</image>
					<view class="column" style="width: calc(100% - 136px);margin-left: 6px;margin-top: 12px;"
						v-if="typeString != 2">
						<view class="storeName">
							{{item.store.use_name}}
						</view>
						<view class="storeName" style="color: #FF5725;font-size: 12px;">
							{{item.des}}
						</view>

					</view>
					<view class="column" style="width: calc(100% - 136px);margin-left: 6px;margin-top: 12px;"
						v-if="typeString == 2">
						<view class="storeName" v-if="item.type == 1">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwosong}}
						</view>
						<view class="storeName" v-if="item.type == 2">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwoqu}}
						</view>
						<view class="storeName" v-if="item.type == 3">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwomai}}
						</view>
						<view class="storeName" v-if="item.type == 4">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwopaidui}}
						</view>
						<view class="storeName" v-if="item.type == 5">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwoban}}
						</view>
						<view class="storeName" style="color: #FF5725;font-size: 12px;">
							{{item.status_des}}
						</view>

					</view>
					<image src="../../static/ads-seld-right.png" mode="aspectFit"
						style="margin-top: 44px;width: 16px;height: 16px;"></image>
				</view>
				<view class="row" style="width: 100%;"
					v-if="(item.status == 2 || item.status == 3 || item.status == 4 || item.status == 5 || item.status == 10) && typeString == 2">
					<image :src="item.store.thumb" mode="aspectFill" class="thumb" style="margin-bottom: 12px;"
						v-if="typeString != 2">
					</image>
					<image src="../../static/shansong.png" mode="aspectFill" class="thumb" style="margin-bottom: 12px;"
						v-if="typeString == 2">
					</image>
					<view class="column" style="width: calc(100% - 136px);margin-left: 6px;margin-top: 12px;"
						v-if="typeString != 2">
						<view class="storeName">
							{{item.store.use_name}}
						</view>
						<view class="storeName" style="color: #FF5725;font-size: 12px;">
							{{item.des}}
						</view>

					</view>
					<view class="column" style="width: calc(100% - 136px);margin-left: 6px;margin-top: 12px;"
						v-if="typeString == 2">
						<view class="storeName" v-if="item.type == 1">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwosong}}
						</view>
						<view class="storeName" v-if="item.type == 2">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwoqu}}
						</view>
						<view class="storeName" v-if="item.type == 3">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwomai}}
						</view>
						<view class="storeName" v-if="item.type == 4">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwopaidui}}
						</view>
						<view class="storeName" v-if="item.type == 5">
							{{i18n.index.shansong + '-' + i18n.shansong.bangwoban}}
						</view>
						<view class="storeName" style="color: #FF5725;font-size: 12px;">
							{{item.status_des}}
						</view>

					</view>
					<image src="../../static/ads-seld-right.png" mode="aspectFit"
						style="margin-top: 44px;width: 16px;height: 16px;"></image>
				</view>
				<view class="" style="width: 100%;"
					v-if="(item.status == 0 || item.status == 4 || item.status == 5) && typeString != 2">
					<view class="orderCell-odr-header row">
						<image :src="item.store.thumb" mode="aspectFill"
							style="width: 43px;height: 32px;border-radius: 2px;"></image>
						<view class="column" style="width: calc(100% - 120px);margin-left: 6px;">
							<view class="orderCell-odr-header-typeLabel">
								{{item.store.use_name}}
								<image src="../../static/ads-seld-right.png" mode="aspectFit"
									style="width: 16px;height: 16px;"></image>
							</view>
							<view class="" style="display: flex;">
								<text class="storeStatus" v-if="item.store.operating_state == 0">
									{{i18n.order.xiuxizhong}}
								</text>
								<text class="storeStatus_zi" v-else>
									{{i18n.meishi.yingye}}
								</text>
							</view>
						</view>


						<!-- 1:代接单 2:待取货 3:配送中 4:已完成 5:退款) -->
						<text class="orderCell-odr-header-stateLabel">{{item.status_txt}}</text>

					</view>
					<view class="row orderCell-odr-header" style="height: 64px;position: relative;">
						<scroll-view scroll-x="true" style="width: calc(100% - 66px);height: 100%;white-space: nowrap;">
							<view v-for="(obj,index) in item.product" :key="index" class="column"
								style="width: 56px;height: 64px;margin-right: 6px;display: inline-block;">
								<image :src="obj.image" mode="aspectFill"
									style="width: 56px;height: 42px;border-radius: 2px;background-color: #f5f6f7;">
								</image>
								<view class="goodsName oneline">
									{{obj.use_name}}
								</view>
							</view>
						</scroll-view>
						<view class="zhezhaoview"></view>
						<view class="column" style="width: 66px;height: 100%;">
							<view class="price">
								<text style="font-size: 10px;">¥ </text>{{item.pay_price}}
							</view>
							<view class="goodsName" style="text-align: right;">
								{{i18n.order.gong + item.total_num + i18n.order.jian}}
							</view>
						</view>
					</view>
					<view class="orderCell-odr-header"
						style="align-items: center;display: flex;flex-direction: row-reverse;" v-if="item.status == 0">
						<view class="" style="display: flex;" @click.stop="dopayOrder(item)">
							<text class="orderControlButton">立即支付</text>
						</view>
						<view class="" style="display: flex;" @click.stop="quxiaoOrder(item)">
							<text class="orderControlButton_l">取消订单</text>
						</view>

					</view>
					<view class="orderCell-odr-header"
						style="align-items: center;display: flex;flex-direction: row-reverse;" v-if="item.status != 0">
						<view class="" style="display: flex;" @click.stop="orderAgain(item)">
							<text class="orderControlButton">{{i18n.mine.zailaiyidan}}</text>
						</view>
						<view class="" style="display: flex;" v-if="item.status == 4 && item.is_evaluate == 0" @click.stop="doPingjia(item)">
							<text class="orderControlButton_l">{{i18n.meishi.pingjia}}</text>
						</view>

					</view>
				</view>
				<view class="" style="width: 100%;"
					v-if="(item.status == 6 || item.status == 7 || item.status == 8 || item.status == 9 || item.status == 1) && typeString == 2">
					<view class="orderCell-odr-header row">
						<image src="../../static/shansong.png" mode="aspectFill"
							style="width: 43px;height: 32px;border-radius: 2px;"></image>
						<view class="column" style="width: calc(100% - 120px);margin-left: 6px;">
							<view class="orderCell-odr-header-typeLabel">
								<view class="" v-if="item.type == 1">
									{{i18n.index.shansong + '-' + i18n.shansong.bangwosong}}
								</view>
								<view class="" v-if="item.type == 2">
									{{i18n.index.shansong + '-' + i18n.shansong.bangwoqu}}
								</view>
								<view class="" v-if="item.type == 3">
									{{i18n.index.shansong + '-' + i18n.shansong.bangwomai}}
								</view>
								<view class="" v-if="item.type == 4">
									{{i18n.index.shansong + '-' + i18n.shansong.bangwopaidui}}
								</view>
								<view class="" v-if="item.type == 5">
									{{i18n.index.shansong + '-' + i18n.shansong.bangwoban}}
								</view>

								<image src="../../static/ads-seld-right.png" mode="aspectFit"
									style="width: 16px;height: 16px;"></image>

							</view>
							<view class="storeName" style="color: #989898;font-size: 12px;">
								{{item.add_time}}
							</view>

						</view>


						<!-- 支付状态， 1待支付2已支付 3已接单 4已取件 5已送达 6已完成 7退款中 8退款完成 9退款拒绝 10已取消-->
						<text class="orderCell-odr-header-stateLabel"
							v-if="item.status == 6">{{i18n.yilou.yiwancheng}}</text>
						<text class="orderCell-odr-header-stateLabel"
							v-if="item.status == 7">{{i18n.yilou.tuikuanzhong}}</text>
						<text class="orderCell-odr-header-stateLabel"
							v-if="item.status == 8">{{i18n.yilou.tuikuanwancheng}}</text>
						<text class="orderCell-odr-header-stateLabel"
							v-if="item.status == 9">{{i18n.yilou.tuikuanshibai}}</text>


					</view>
					<view class="row" style="width: 100%;align-items: center;" v-if="item.type > 3">
						<view class="order-ads-item-cycle" style="margin-top: 20px;"></view>
						<view class="order-ads-item-middle">
							<text class="order-ads-item-ads">{{item.t_name + item.t_addr}}</text>
							<text class="order-ads-item-ads-tip">{{item.recip_name + ' ' +  item.recip_phone}}</text>

						</view>
						<view class="price" style="width: auto;">
							<text style="font-size: 10px;">¥ </text>{{item.money}}
						</view>

					</view>
					<view class="row" style="width: 100%;align-items: center;" v-if="item.type == 3">

						<view class="column" style="width: 100%;">
							<view class="row" style="width: 100%;align-items: center;">
								<view class="order-ads-item-cycle" style="margin-top: 20px;"></view>
								<view class="order-ads-item-middle">
									<text class="order-ads-item-ads"
										v-if="item.extra.type == 1">{{item.f_name + item.f_addr}}</text>
									<text class="order-ads-item-ads" v-else>{{i18n.shansong.jiujingoumai}}</text>
								</view>
							</view>
							<view class="row" style="width: 100%;align-items: center;margin-top: 10px;">
								<view class="order-ads-item-cycle" style="margin-top: 20px;border: 2px solid #26CC91;"></view>
								<view class="order-ads-item-middle">
									<text class="order-ads-item-ads"
										style="height: 44px;">{{item.t_name + item.t_addr}}</text>
									<text
										class="order-ads-item-ads-tip">{{item.recip_name + ' ' +  item.recip_phone}}</text>
								</view>
							</view>
						</view>
						<view class="price" style="width: auto;">
							<text style="font-size: 10px;">¥ </text>{{item.money}}
						</view>
					</view>
					<view class="row" style="width: 100%;align-items: center;" v-if="item.type == 1 || item.type == 2">
						<view class="column" style="width: 100%;align-items: center;">

							<view class="row" style="width: 100%;align-items: center;">
								<view class="order-ads-item-cycle"></view>
								<view class="order-ads-item-middle">
									<text class="order-ads-item-ads">{{item.f_name + item.f_addr}}</text>
									<text
										class="order-ads-item-ads-tip">{{item.pick_name + ' ' +  item.pick_phone}}</text>
								</view>

							</view>
							<view class="row" style="width: 100%;align-items: center;">
								<view class="order-ads-item-cycle" style="border: 2px solid #26CC91;"></view>
								<view class="order-ads-item-middle" style="">
									<text class="order-ads-item-ads">{{item.t_name + item.t_addr}}</text>
									<text
										class="order-ads-item-ads-tip">{{item.recip_name + ' ' +  item.recip_phone}}</text>
								</view>

							</view>

						</view>

						<view class="price" style="width: auto;">
							<text style="font-size: 10px;">¥ </text>{{item.money}}
						</view>
					</view>
					<view class="orderCell-odr-header"
						style="align-items: center;display: flex;flex-direction: row-reverse;" v-if="item.status == 1">
						<view class="" style="display: flex;" @click.stop="dopayOrder(item)">
							<text class="orderControlButton">立即支付</text>
						</view>
						<view class="" style="display: flex;" @click.stop="quxiaoOrder(item)">
							<text class="orderControlButton_l">取消订单</text>
						</view>
					</view>
					<view class="orderCell-odr-header"
						style="align-items: center;display: flex;flex-direction: row-reverse;" v-if="item.status == 6">
						<view class="" style="display: flex;" @click.stop="orderAgain(item)">
							<text class="orderControlButton">{{i18n.mine.zailaiyidan}}</text>
						</view>
						<view class="" style="display: flex;" @click.stop="doPingjia(item)" v-if="item.isevaluate == 0">
							<text class="orderControlButton_l">{{i18n.meishi.pingjia}}</text>
						</view>

					</view>

				</view>

			</view>
		</scroll-view>
		<payView v-if="showpay" :money="typeString == 2 ? selectedItem.money : selectedItem.pay_price"
			:type="typeString == 2 ? '2' : '3'" @closePayView="closePayView"></payView>
	</view>
</template>

<script>
	import payView from '../payview/payview.vue'

	export default {
		components: {
			payView
		},
		data() {
			return {
				windowHeight: 0,
				listArray: [],
				page: 1,
				refresherTriggered: 0,
				price: 0,
				showpay: 0,
				selectedItem: {},
				showTip: 0,
				addTipMoney: 0,
				nolistImage: ''
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
			searchString: {
				type: [Number, String],
				default: ''
			},
			isSearch: {
				type: Boolean,
				default: false
			},
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			that.nolistImage = getApp().globalData.weburl + 'order-no.png'
			if (!that.isSearch) {
				that.requestData()
			}
		},
		methods: {
			doSearch(e) {
				this.searchString = e
				this.page = 1
				this.requestData()
			},
			changeindex(index) {

			},
			cellItemClick(item, index) {
				// 支付状态， 1待支付2已支付 3已接单 4已取件 5已送达 6已完成 7退款中 8退款完成 9退款拒绝 10已取消

				if (this.typeString == 2) {
					console.log(item.id)
					this.http.sendRequest('Orders.GetDetail', {
						'orderid': item.id,

					}).then(function(res) {
						console.log(res)
						// that.listArray = res.info
						if (res.code == 0) {
							var dic = res.info[0]
							item.status = dic.status
							// if (item.status == 3 || item.status == 4) {
								uni.navigateTo({
									url: '../../package-mine/pages/order/ordermap-ss?order=' + item.id +
										'&top_type_id=2'
								})
							// } else {
							// 	uni.navigateTo({
							// 		url: '../../package-mine/pages/order/orderdetailss?order=' + item.id +
							// 			'&top_type_id=2'
							// 	})
							// }
						}

					})


				} else {
					this.$emit('cellItemClick', item, index)
				}

			},
			doPingjia(item) {
				if (this.typeString == 2) {
					uni.navigateTo({
						url: '/package-mine/pages/order/shansongEVA?orderID=' + item.id
					})
				} else {
					this.$emit('doPingjia', item)
				}

			},
			requestData() {
				var that = this
				if (that.typeString == 2) {
					that.http.sendRequest('Orders.GetList', {
						'type': 0,
						'keyword': that.searchString,
						'p': that.page
					}).then(function(res) {
						// that.listArray = res.info
						if (res.code == 0) {
							if (that.page == 1) {
								that.listArray = res.info
							} else {
								that.listArray = that.listArray.concat(res.info)
							}
						}

					})
				} else {
					that.http.sendRequest('MerchantStoreOrder.Search', {
						'top_type_id': that.typeString,
						'keywords': that.searchString,
						'p': that.page
					}).then(function(res) {
						// that.listArray = res.info
						if (res.code == 0) {
							if (that.page == 1) {
								that.listArray = res.info[0]
							} else {
								that.listArray = that.listArray.concat(res.info[0])
							}
						}

					})
				}

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
					var dic = {}
					console.log(that.selectedItem)
					if (that.typeString != 2) {
						url = 'MerchantStoreOrder.Pay'
						dic = {
							// #ifdef APP-PLUS
							'pay_type': e.id,
							// #endif
							'id': that.selectedItem.id,
							
						}
					} else {
						url = 'Orders.Repay'
						dic = {
							// #ifdef APP-PLUS
							'payid': e.id,
							// #endif
							'orderid': that.selectedItem.id,
							

						}
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
				console.log(2121211)
				this.selectedItem = item
				this.showpay = 1

			},
			doAgainOrder(e) {
				uni.switchTab({
					url: '../../pages/index/index'
				})
			},
			orderAgain(item) {

				var that = this
				if (that.typeString == 2) {
					uni.navigateTo({
						url: '/package-shansong/pages/index/index'
					})
				} else {
					that.http.sendRequest('MerchantStoreOrder.Again', {
						'id': item.id,
					}).then(function(res) {
						// that.listArray = res.info
						//1:美食 2:闪送 3:服务 4:找店 5:超市 6:生鲜 7:送药 8:家政
						if (res.code == 0) {
							if (item.top_type_id == 1) {
								uni.navigateTo({
									url: '/package-meishi/pages/store/store?id=' + item.store_id
								})
							} else if (item.top_type_id == 3) {
								uni.navigateTo({
									url: '/package-other/pages/service/detaile/index?id=' + item
										.store_id
								})
							} else if (item.top_type_id == 2) {

							} else if (item.top_type_id == 4) {

							} else {
								uni.navigateTo({
									url: '/package-other/pages/market/store/store?id=' + item.store_id +
										'&type=' + item.top_type_id
								})
							}
						}

					})
				}
			},
			quxiaoOrder(item) {

				var that = this
				uni.showModal({
					title: '',
					content: '是否确定取消订单',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							if(that.typeString == 2){
								that.requestCancle('Orders.Cancel',item.id)
							}else{
								that.requestCancleDianpu('MerchantStoreOrder.Cancel',item.id)
							}
							
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			requestCancle(e,id) {
				var that = this
				that.http.sendRequest(e, {
					'orderid': id
				}).then(function(res) {
					if (res.code == 0) {
						that.refresherrefresh()
						
					}
				})
			},
			requestCancleDianpu(e,id) {
				console.log(e,id)
				var that = this
				that.http.sendRequest(e, {
					'id': id
				}).then(function(res) {
					if (res.code == 0) {
						that.refresherrefresh()
						
					}
				})
			},
		}
	}
</script>

<style>
	.orderCell-odr {
		margin-left: 12px;
		margin-top: 8px;
		margin-bottom: 2px;
		width: calc(100% - 24px);
		border-radius: 8px;
		/* height: 183px; */
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.orderCell-odr-header {
		margin-left: 12px;
		/* margin-bottom: 2px; */
		width: calc(100% - 24px);
		height: 52px;
		align-items: center;
	}

	.orderCell-odr-header-typeLabel {
		font-size: 12px;
		line-height: 17px;
		font-weight: bold;
		/* text-align: center; */
		align-items: center;
		display: flex;
		flex-direction: row;
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
		/* position: absolute; */
		/* margin-right: 12px; */
		/* height: 20px; */
		font-size: 11px;
		/* font-weight: bold; */
		/* line-height: 20px;
		right: 0; */
		color: #FF5725;
		text-align: right;
		flex: 1;
	}

	.order-ads-item-cycle {
		width: 4px;
		height: 4px;
		border-radius: 4px;
		border: 2px solid #FF5725;
		margin-left: 9px;
		/* margin-top: 30.5px; */
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
		/* flex-shrink: 1; */
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
		border-radius: 4px;
		background-color: #FF5725;
		margin-left: 10px;
		font-size: 12px;
		line-height: 28px;
		color: #FFF;
		padding-left: 18px;
		padding-right: 18px;
	}

	.orderControlButton_l {
		/* position: absolute; */
		height: 28px;
		border-radius: 4px;
		/* background-color: #FF5725; */
		margin-left: 10px;
		font-size: 12px;
		line-height: 28px;
		color: #555555;
		padding-left: 18px;
		padding-right: 18px;
		border: 1px solid #C5C5C5;
	}

	.thumb {
		margin-left: 12px;
		margin-top: 12px;
		width: 96px;
		height: 72px;
		border-radius: 4px;
	}

	.storeName {
		width: 100%;
		font-size: 14px;
		line-height: 22px;
		font-weight: bold;
	}

	.storeStatus {
		height: 13px;
		border-radius: 2px;
		background-color: #6f6f6f;
		line-height: 13px;
		font-size: 8px;
		color: #FFF;
		padding-left: 5px;
		padding-right: 5px;
		display: flex;
	}

	.storeStatus_zi {
		height: 13px;
		border-radius: 2px;
		background-color: #FF5725;
		line-height: 13px;
		font-size: 8px;
		color: #FFF;
		padding-left: 5px;
		padding-right: 5px;
		display: flex;
	}

	.goodsName {
		font-size: 10px;
		color: #6F6F6F;
		text-align: center;
		width: 100%;
		line-height: 14px;
		/* margin-top: 4px; */
	}

	.zhezhaoview {
		position: absolute;
		top: 0;
		right: 66px;
		height: 100%;
		width: 15px;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), #FFF);
	}

	.price {
		width: 100%;
		color: #FF5725;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
		text-align: right;
		margin-right: 15px;
	}
</style>
