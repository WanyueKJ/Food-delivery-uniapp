<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.mine.daipingjia"></wybar>
		<view class="" style="margin-left: 25%;margin-top: 100px;width: 50%;" v-if="listArray.length == 0">
			<image src="../../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
			<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
				还没有待评价订单
			</view>
		</view>
		<view class="" style="width: 100%;" v-else>
			<scroll-view scroll-y="true" :style="'height:' + scrollHeigth + 'px;'"
				style="width: 100%;background-color: #f5f6f7;" class="column" :refresher-triggered="refresherTriggered"
				@scrolltolower="scrolltolower" :refresher-enabled="true" :refresher-threshold="45"
				@refresherrefresh="refresherrefresh" >
				
				<view v-for="(item,index) in listArray" :key="index" class="column"
					style="width: calc(100% - 30px);height: 181px;margin-top: 10px;background-color: #FFF;border-radius: 8px;margin-left: 15px;">
					<view class="row typeView">
						<view class="item_biaoti" style="flex: 1;">
							{{item.title_txt}}
						</view>
						<view style="font-size: 12px;color: #FF5725;">
							{{i18n.mine.daipingjia}}
						</view>
					</view>
			
					<view class="item_back row">
						<image src="../../../../static/shansong.png" mode="aspectFill" class="item_image"
							v-if="item.order_type == 0"></image>
						<image :src="item.image" mode="aspectFill" class="item_image" v-else></image>
						<view class="column"
							style="margin-left: 8px;overflow: hidden;flex: 1;margin-right: 15px;">
							<view class="item_content_word" v-if="item.order_type == 0">
								{{i18n.mine.shouhuodizhi}}：{{item.t_name}}
							</view>
							<view class="item_content_word" v-else>
								{{i18n.mine.shangpinshuliang}}：{{i18n.order.gong}}{{item.total_num}}{{i18n.order.jian}}
							</view>
							<view class="item_content_word">
								{{i18n.mine.dingdanzongjia}}：¥ {{item.pay_price}}
							</view>
							<view class="item_content_word">
								{{i18n.mine.xiadanshijian}}：{{item.addtime}}
							</view>
						</view>
					</view>
					<view class="bottomView">
						<view @click="btnClick(item,indexB)" v-for="(obj,indexB) in btnArray" :key="indexB" class="bot-btn"
							:class="indexB == 0 ? 'bot-btn-r' : 'bot-btn-l'">
							{{obj}}
						</view>
					</view>
			
				</view>
			
			</scroll-view>
			<view style="width: 100%;height: 1px;background-color: rgba(50, 50, 50, 0.1);">
			
			</view>
			<view class="row" style="width: 100%;height: 100px;background-color: #FFF;" v-if="listArray.length > 0">
				<view class="save" @click="doClear()">
					{{i18n.mine.clear}}
				</view>
			
			</view>
		</view>
		

	</view>
</template>

<script>
	import wybar from '../../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				listArray: [],
				scrollHeigth: 0,
				page: 1,
				refresherTriggered: 0,
				btnArray: []
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			// #ifdef APP-PLUS
			this.scrollHeigth = getApp().globalData.windowHeight - (top + 120)

			// #endif
			// #ifdef MP-WEIXIN
			this.scrollHeigth = getApp().globalData.windowHeight - (top + 80)

			// #endif			
			this.btnArray = [this.i18n.mine.zailaiyidan, this.i18n.meishi.pingjia]
		},
		onLoad() {
			this.requestData()
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			requestData() {
				var that = this
				that.http.sendRequest('MerchantStoreOrder.GetToEvaluate', {
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
			doClear() {
				
				var that = this
				that.http.sendRequest('MerchantStoreOrder.CancelToBeEvaluated', {}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						that.listArray = []
					}
				})
				
			},
			btnClick(item, index) {
				if (index == 1) {
					if (item.order_type == 0) {
						uni.navigateTo({
							url: '../shansongEVA?orderID=' + item.id
						})
					} else {
						if (item.top_type_id == 1) {
							uni.navigateTo({
								url: '../orderEvaluate?orderID=' + item.id
							})
						} else if (item.top_type_id == 3) {
							uni.navigateTo({
								url: '../fuwuEVA?orderID=' + item.id
							})
						} else if (item.top_type_id == 2) {
						
						} else if (item.top_type_id == 4) {
						
						} else {
							uni.navigateTo({
								url: '../marketEVA?orderID=' + item.id
							})
						}
						
					}

				} else {
					var that = this
					if (item.order_type == 0) {
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
										url: '/package-other/pages/service/fuwuxiangqing/index?id=' + item
											.store_id
									})
								} else if (item.top_type_id == 2) {

								} else if (item.top_type_id == 4) {

								} else {
									uni.navigateTo({
										url: '/package-other/pages/market/store/store?id=' + item
											.store_id +
											'&type=' + item.top_type_id
									})
								}
							}

						})
					}
				}
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.typeView {
		margin-left: 12px;
		width: calc(100% - 24px);
		height: 45px;
		border-bottom: #D6DADE solid 1px;
		align-items: center;
	}

	.item_back {
		width: calc(100% - 30px);
		height: 86px;
		margin-left: 15px;
		border-radius: 8px;
		/* margin-top: 10px; */
		overflow: hidden;
		position: relative;
		background-color: #FFF;
		align-items: center;
	}



	.item_image {
		/* margin-top: 12px; */
		/* margin-left: 8px; */
		width: 64px;
		height: 64px;
		border-radius: 2px;
		overflow: hidden;
		background-color: #f5f6f7;
	}

	.item_biaoti {
		/* margin-top: 8px; */
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* max-width: calc(100% - 20px); */
	}

	.item_content {
		text-overflow: ellipsis;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		display: -moz-box;
		-moz-line-clamp: 3;
		-moz-box-orient: vertical;

		overflow-wrap: break-word;
		word-break: break-all;
		white-space: normal;
		overflow: hidden;
	}

	.item_content_word {
		width: auto;
		height: 20px;
		/* border-radius: 2px; */
		/* background-color: #FEF8E3; */
		color: #6F6F6F;
		font-size: 11px;
		line-height: 20px;
		/* padding-left: 5px;
		padding-right: 5px; */
	}

	.bottomView {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}

	.bot-btn {
		width: 84px;
		height: 28px;
		font-size: 12px;
		text-align: center;
		line-height: 28px;
		border-radius: 4px;
		margin-right: 12px;
	}

	.bot-btn-r {
		background-color: #FF5725;
		color: #FFF;
	}

	.bot-btn-l {
		color: #6F6F6F;
		border: #D6DADE solid 1px;
	}

	.save {
		margin-left: 15px;
		margin-top: 15px;
		width: calc(100% - 30px);
		height: 49px;
		line-height: 49px;
		border-radius: 8px;
		color: #FFF;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		background-color: #FF5725;

	}
</style>
