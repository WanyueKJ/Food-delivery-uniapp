<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="titleText">选择优惠券</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose(2)"></image>
			</view>
			<view class="contentView">
				<view class="typeView">
					<text class="typeLabel" :style="isSel ? 'font-weight: bold;color: #323232' : 'color: #989898'"
						@click="typeSelect(1)">{{i18n.shansong.keyongCoupon}}({{nums}})</text>
					<text class="typeLabel" :style="!isSel ? 'font-weight: bold;color: #323232' : 'color: #989898'"
						@click="typeSelect(0)">{{i18n.shansong.bukeyongCoupon}}({{noNums}})</text>
				</view>
				<image src="" mode="aspectFit"
					style="width: 480rpx;height: 352rpx;margin-left: 135rpx;margin-top: 50rpx;"
					v-if="couponArray.length == 0 && isSel"></image>
				<image src="" mode="aspectFit"
					style="width: 480rpx;height: 352rpx;margin-left: 135rpx;margin-top: 50rpx;"
					v-if="couponNoA.length == 0 && !isSel"></image>

				<scroll-view scroll-y="true" class="scroll">
					<view class="couponCell" v-for="(item,index) in couponArray" @click="doSelectCoupon(item,index)"
						v-if="isSel && couponArray.length > 0">
						<view class="zhanweiWhite"></view>
						<view class="coupon-leftView">
							<view class="coupon-leftView-priceView" :style="isSel? 'color:#FF5725' : 'color:#989898'">
								<view style="font-size: 12px;font-weight: 400;" >¥</view>
								{{item.limit_money}}
							</view>
							<view class="" style="font-size: 12px;color: #FF5725;margin-top: 5px;">
								{{item.limit_type}}
							</view>
						</view>
						<image mode="" class="lineImageView"></image>
						<view class="coupon-MiddelView">
							<text class="coupon-MiddelView-nameL"
								:style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.name}}</text>
							<text class="coupon-MiddelView-msgL"
								:style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.remark}}</text>
							<!-- <text class="coupon-MiddelView-msgL oneline" :style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.text_limit}}</text> -->
						</view>
						<image :src="Math.floor(yixuanID) == Math.floor(item.id) ? '/static/item-sel.png' : '/static/item-nor.png'" mode=""
							class="coupon-select_image" v-if="isSel"></image>

					</view>
					<view class="couponCell" v-for="(item,index) in couponNoA" v-if="!isSel && couponNoA.length > 0">
						<view class="zhanweiWhite"></view>
						<view class="coupon-leftView">
							<view class="coupon-leftView-priceView" :style="isSel? 'color:#FF5725' : 'color:#989898'">
								<view style="font-size: 12px;font-weight: 400;" >¥</view>
								{{item.limit_money}}
							</view>
							<view class="" style="font-size: 12px;margin-top: 5px;">
								{{item.limit_type}}
							</view>
						</view>
						<image src="" mode="" class="lineImageView"></image>
						<view class="coupon-MiddelView">
							<text class="coupon-MiddelView-nameL"
								:style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.name}}</text>
							<text class="coupon-MiddelView-msgL"
								:style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.remark}}</text>
							<!-- <text class="coupon-MiddelView-msgL oneline" :style="isSel? 'color:#FF5725' : 'color:#989898'">{{item.text_limit}}</text> -->
						</view>


					</view>
					<view class="couponCell" style="height: 80rpx; background-color: #FFFFFF;"
						@click="doSelectCoupon({id:'0'},999999)" v-if="isSel && couponArray.length > 0">
						<text
							style="height: 80rpx;line-height: 80rpx; color: #1e1e1e;font-size: 28rpx;">{{i18n.shansong.bushiyongConpon}}</text>
						<image :src="Math.floor(yixuanID) == 0 ? '/static/item-sel.png' : '/static/item-nor.png'" mode=""
							class="coupon-select_image" style="margin-top: 24rpx;"></image>
					</view>
				</scroll-view>
				<text class="subBtnClass" @click="doClose(1)" v-if="isSel">{{i18n.sure}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/toolClass/WYToolClass.js'

	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				couponArray: [],
				couponNoA: [],
				nums: 0,
				noNums: 0,
				isSel: 1,
				selectIndex: 999999
			}
		},
		props: {
			money: {
				type: Number,
			},
			storeID: {
				type: String,
				default: ''
			},
			yixuanID: {
				type: String,
				default: '0'
			},
		},
		created() {
			this.windowHeight = getApp().globalData.windowHeight
			this.getCouponNums()
			this.getCouponList()
			// this.nums = 3
			// this.noNums = 6
			// this.couponArray = ['平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6','平台通用券 ¥6'];
			// this.couponNoA = ['','','']
		},
		methods: {
			doClose(e) {
				if (e == 2) {
					this.$emit('couponSelcted', 'close')
				} else {
					if (this.selectIndex == 999999) {
						this.$emit('couponSelcted', 0)
					} else {
						this.$emit('couponSelcted', this.couponArray[this.selectIndex])
					}
				}


			},
			doSelcted(item, index) {
				this.selectIndex = index;
			},
			typeSelect(e) {
				this.isSel = e
				this.getCouponList()
			},
			doSelectCoupon(item, index) {
				console.log(item, index)
				var that = this
				if (that.isSel) {
					that.yixuanID = item.id
					that.selectIndex = index
					console.log(that.selectIndex,that.yixuanID)
				}
			},
			getCouponList() {
				var that = this

				http.sendRequest('Couponuser.GetStoreCoupon', {
					'usetype': that.isSel ? '1' : '2',
					'money': that.money,
					'store_id': that.storeID,
				}).then(function(res) {
					if (res.code == 0) {
						if (that.isSel) {
							// if (that.page == 1) {
							that.couponArray = res.info[0]
							// } else {
							// 	that.couponArray = that.couponArray.concat(res.info)
							// }
						} else {
							// if (that.page == 1) {
							that.couponNoA = res.info[0]
							// } else {
							// 	that.couponNoA = that.couponNoA.concat(res.info)
							// }
						}

					}
				})


			},
			getCouponNums() {
				var that = this

				http.sendRequest('Couponuser.GetNums', {
					'money': that.money,
					'type': 6,
					'store_id':that.storeID
				}).then(function(res) {
					console.log(res)
					if (res.code == 0) {
						that.nums = res.info[0].ok
						that.noNums = res.info[0].no
					}
				})


			},
			dsfsdffsds() {}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 800rpx;
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	.heaerView {
		display: flex;
		flex-direction: row;
		height: 90rpx;
		
		border-bottom: 1px solid #f0f0f0;
	}

	.titleText {
		height: 108rpx;
		line-height: 108rpx;
		margin-left: 160rpx;
		width: 430rpx;
		color: #323232;
		font-size: 36rpx;
		font-weight: bold;
		display: inline-block;
		text-align: center;
	}

	.closeBtn {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		margin-top: 32rpx;
		right: 20rpx;
		/* background-color: #007AFF; */
	}

	.contentView {
		display: flex;
		flex-direction: column;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
	}

	.typeView {
		width: 750rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
	}

	.typeLabel {
		width: 375rpx;
		text-align: center;
		height: 60rpx;
		line-height: 65rpx;
		font-size: 28rpx;
		color: #989898;
		margin-left: 0;
	}

	.leftLabel {
		margin-left: 20rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #323232;
	}

	.scroll {
		margin-left: 20rpx;
		width: 710rpx;
		height: 480rpx;
		margin-top: 10rpx;
		/* position: absolute; */
		/* background-color: #FF5625; */
		/* flex-wrap: wrap; */
		/* white-space: nowrap;
		display: flex;
		justify-content: flex-start; */
	}

	.couponCell {
		width: 710rpx;
		height: 160rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		background-color: #FEF0E5;
		position: relative;
		display: flex;
		flex-direction: row;
	}

	.zhanweiWhite {
		position: absolute;
		left: -10rpx;
		top: 70rpx;
		height: 20rpx;
		width: 20rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
	}

	.coupon-leftView {
		width: 160rpx;
		height: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: #007AFF; */
	}

	.coupon-leftView-typeL {
		display: flex;
		width: 104rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		text-align: center;
		color: #FF5725;
		border-radius: 8rpx 0 8rpx 0;
		/* background-color: #FFDAD3; */
		left: 0;
	}

	.coupon-leftView-priceView {
		width: 100%;
		display: flex;
		flex-direction: row;
		/* align-items: flex-end; */
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-weight: bold;
	}

	.coupon-leftView-priceL {
		height: 96rpx;
		line-height: 96rpx;
		font-size: 64rpx;
		font-weight: bold;
		text-align: center;
		color: #FF5725;
	}

	.lineImageView {
		margin-left: 0;
		margin-top: 0px;
		height: 160rpx;
		width: 2rpx;
		background-color: rgba(255,87,37,0.3);
	}

	.coupon-MiddelView {
		margin-left: 0;
		margin-top: 0px;
		height: 160rpx;
		width: 400rpx;
		/* background-color: #007AFF; */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.coupon-MiddelView-nameL {
		margin-left: 20rpx;
		/* margin-top: 20rpx; */
		height: 40rpx;
		line-height: 40rpx;
		color: #FF5725;
		/* width: 240rpx; */
		font-size: 14px;
		font-weight: bold;
	}

	.coupon-select_image {
		position: absolute;
		right: 24rpx;
		width: 32rpx;
		height: 32rpx;
		margin-top: 64rpx;
	}

	.coupon-MiddelView-msgL {
		margin-left: 20rpx;
		margin-top: 5px;
		height: 40rpx;
		line-height: 40rpx;
		color: #FF5725;
		font-size: 12px;
	}

	.tipimage {
		margin-left: 20rpx;
		width: 28rpx;
		height: 28rpx;
		margin-top: 26rpx;
	}

	.tipText {
		margin-left: 10rpx;
		margin-top: 20rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #FF5725;
	}

	.subBtnClass {
		margin-top: 20rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 96rpx;
		border-radius: 48rpx;
		background-color: #FF5725;
		line-height: 96rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}
</style>
