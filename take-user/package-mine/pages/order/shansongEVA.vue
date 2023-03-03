<template>
	<view class="content" v-if="orderMsg">
		<view style="width: 100%;background-color: #FFFFFF;position: relative;"
			:style="'height:' + statusBarHeight + 'px;'">

			<view class="row" style="width: 100%;height: 48px;position: absolute;bottom: 0;">
				<image src="../../../static/back-left.png" mode="aspectFit"
					style="margin-left: 24rpx;margin-top: 19rpx;width: 60rpx;height: 60rpx;" @click="doBack()"></image>
				<view
					style="margin-left: 15px;height: 48px;font-size: 18px;line-height: 48px;color: #323232;font-weight: bold;width: 250rpx;flex: 1;">
					{{i18n.meishi.pingjia}}</view>
				<!-- #ifdef APP-PLUS -->
				<text
					style="margin-right: 15px;height: 48px;font-size: 16px;line-height: 48px;color: #FF5725;font-weight: bold;width: 120rpx;text-align: center;"
					@click="doSubmit()">{{i18n.mine.submit}}</text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<text
					style="height: 48px;font-size: 16px;line-height: 48px;color: #FF5725;font-weight: bold;width: 80rpx;text-align: center;"
					:style="'margin-right:' + (menuButtonWidth + 5) + 'px;'"
					@click="doSubmit()">{{i18n.mine.submit}}</text>
				<!-- #endif -->
			</view>

		</view>
		<view class="column"
			style="margin-left: 15px;width: calc(100% - 30px);margin-top: 10px;height: 285px;background-color: #FFF;border-radius: 8px;">
			<view class="row"
				style="margin-left: 15px;width: calc(100% - 30px);height: 42px;border-bottom: 1px solid #f5f6f7;line-height: 42px;">
				<view class="" style="font-size: 16px;font-weight: bold;flex: 1;">
					{{i18n.order.duiqishoumanyi}}
				</view>
				<!-- <view class="" style="font-size: 14px;color: #6F6F6F;"
					:style="rider_anonymous == 1 ? 'color:#FF5725;' : ''" @click="qishouniming()">
					{{i18n.order.nimingEVA}}
				</view> -->
			</view>
			<view class="row" style="margin-left: 15px;width: calc(100% - 30px);height: 70px;align-items: center;">
				<image :src="orderMsg.rinfo.avatar" mode="aspectFill"
					style="width: 56px;height: 43px;border-radius: 2px;"></image>
				<view class="column" style="margin-left: 8px;">
					<view class="" style="font-size: 14px;color: #FF5725;">
						{{orderMsg.rinfo.user_nickname}}
					</view>
					<view class="" style="font-size: 12px;color: #6f6f6f;">
						{{orderMsg.forecast_time}}
					</view>
				</view>
			</view>
			<view class="" style="width: 100%;">
				<view class="row" style="width: 100%;height: 40px; align-items: center;">
					<view
						style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;">{{i18n.toher.zongti}}</view>
					<starV size=40 @change="onChange" :disabled="false"
						style="margin-left: 10px;"></starV>
				
				</view>
			</view>
			
			<view class="textView-eva-back">
				<textarea class="textarea-eva" :value="word" :placeholder="i18n.order.xiepeisongpingjia"
					@input="input" />
			</view>
		</view>
		

	</view>
</template>

<script>
	// import starV from '../../../components/rate-star/rate.vue'
	import starV from '../../../components/banxing/banStar.vue'
	export default {
		components: {
			starV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				windowWidth: 0,
				statusBarHeight: 0,
				orderID: '',
				menuButtonWidth: 0,
				word: '',
				star: 0,
				shopImglist: [],
				orderMsg: null,
				rider_star: '5',
				rider_anonymous: 0,
				order_pics: [],
				comment: '',
				order_overall_star: '5',
				order_taste_star: '5',
				order_packaging_star: '5',
				order_distribution_star: '5',
				order_anonymous: 0,
				product_json: []
			}
		},
		onLoad(option) {
			var res = uni.getSystemInfoSync()
			var that = this
			that.orderID = option.orderID
			that.windowHeight = res.windowHeight
			that.windowWidth = res.windowWidth
			that.statusBarHeight = getApp().globalData.top + 48
			that.menuButtonWidth = getApp().globalData.menuButtonWidth
			that.requestOrderDeatiles()
		},
		methods: {
			requestOrderDeatiles() {
				var that = this
				that.http.sendRequest('Orders.GetDetail', {
					'orderid': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						that.orderMsg = res.info[0]
						// that.orderType = that.orderMsg.type
						console.log(that.orderMsg)
						
					}
				})
			},
			doBack() {
				uni.navigateBack({

				})
			},
			onChange(e) {
				console.log(e)
				// if (e.tagstr == 'qishou') {
					this.rider_star = e.value
				// }
				// if (e.tagstr == 'zongti') {
				// 	this.order_overall_star = e.value
				// }
				// if (e.tagstr == 'kouwei') {
				// 	this.order_taste_star = e.value
				// }
				// if (e.tagstr == 'baozhuang') {
				// 	this.order_packaging_star = e.value
				// }
				// if (e.tagstr == 'peisong') {
				// 	this.order_distribution_star = e.value
				// }

			},
			shangjianiming() {
				if (this.order_anonymous == 1) {
					this.order_anonymous = 0
				} else {
					this.order_anonymous = 1
				}
			},
			qishouniming() {
				if (this.rider_anonymous == 1) {
					this.rider_anonymous = 0
				} else {
					this.rider_anonymous = 1
				}
			},
			doSubmit() {
				var that = this
				that.http.sendRequest('Orders.Evaluate', {
					'orderid': that.orderID,
					'star': that.rider_star,
					'content':that.word,
					'rider_anonymous':that.rider_anonymous,
				}).then(function(res) {
					if (res.code == 0) {
						that.doBack()
					}
				})
			},
			input(e) {
				this.word = e.detail.value
			},
		
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5f6f7;
		/* overflow: hidden; */
	}

	.content {
		width: 100%;
		height: 100%;
	}

	.textView-eva-back {
		margin-left: 12px;
		/* margin-top: 10px; */
		width: calc(100% - 24px);
		height: 122px;
		border-radius: 4px;
		background-color: #FAFAFA;
	}

	.textarea-eva {
		/* padding: 10px 10px; */
		margin-top: 10px;
		margin-left: 10px;
		width: calc(100% - 20px);
		font-size: 15px;
		line-height: 15px;
		height: 122px;
		color: #323232;
	}

	.submit {
		width: calc(100% - 50px);
		margin-left: 25px;
		height: 42px;
		line-height: 42px;
		border-radius: 21px;
		font-size: 18px;
		color: #FFFFFF;
		background-color: #FF5725;
		text-align: center;
		margin-top: 40px;
		/* position: absolute;
		bottom: 60px; */
	}
</style>
