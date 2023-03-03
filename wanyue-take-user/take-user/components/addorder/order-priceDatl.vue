<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="cancleBtn" @click="doguize()">{{i18n.shansong.jifeiguize}}</text>
				<text class="titleText">{{i18n.shansong.jiagemingxi}}</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose(1)"></image>		
			</view>
			<view class="contentView">
				<view class="prcieSingleItem" style="margin-top: 20rpx;">
					<text class="leftNameLabel">{{i18n.shansong.jichufuwufei + priceDic.money_basic_txt}}</text>
					<text class="rightPriceLabel">¥ {{priceDic.money_basic}}</text>
				</view>
				<view class="prcieSingleItem">
					<text class="leftNameLabel">{{i18n.shansong.shijianfujiafei}}</text>
					<text class="rightPriceLabel">¥ {{priceDic.money_time}}</text>
				</view>
				<view class="prcieSingleItem" v-if="priceDic.money_distance > 0">
					<text class="leftNameLabel">{{i18n.shansong.julifujifei + priceDic.money_distance_txt}}</text>
					<text class="rightPriceLabel">¥ {{priceDic.money_distance}}</text>
				</view>
				<view class="prcieSingleItem" style="border-bottom: 2rpx solid #f0f0f0; height: 80rpx;" v-if="priceDic.money_weight > 0">
					<text class="leftNameLabel">{{i18n.shansong.zhongliangfujiafei + priceDic.money_weight_txt}}</text>
					<text class="rightPriceLabel">¥ {{priceDic.money_weight}}</text>
				</view>
				<view class="prcieSingleItem" style="border-bottom: 2rpx solid #f0f0f0; height: 80rpx;" v-if="priceDic.money_fuwu > 0">
					<text class="leftNameLabel">{{i18n.shansong.yufufuwufei}}</text>
					<text class="rightPriceLabel">¥ {{priceDic.money_fuwu}}</text>
				</view>
				<view class="prcieSingleItem" style="margin-top: 20rpx;">
					<text class="leftNameLabel">{{i18n.meishi.youhuiquan}}</text>
					<text class="rightPriceLabel" v-if="priceDic.money_coupon > 0">- ¥ {{priceDic.money_coupon}}</text>
					<text class="rightPriceLabel" v-else>¥ 0</text>
				</view>
				<view class="prcieSingleItem">
					<text class="leftNameLabel">{{i18n.shansong.xiaofei}}</text>
					<text class="rightPriceLabel" v-if="priceDic.money_small > 0">¥ {{priceDic.money_small}}</text>
					<text class="rightPriceLabel" v-else>¥ 0</text>
				</view>
				<view class="prcieSingleItem" style="margin-top: 20rpx;">
					<text class="leftNameLabel"></text>
					<text class="rightPriceLabel" style="font-size: 16px;margin-right: 2rpx;">{{i18n.shansong.heji}}</text>
					<text class="rightPriceLabel" style="margin-right: 2rpx;color: #FF0B00;">¥</text>
					<text class="rightPriceLabel" style="font-size: 24px;color: #FF0B00;">{{priceNum}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/toolClass/WYToolClass.js'
	export default {
		computed: {
			i18n() {
				return getApp().globalData.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
			}
		},
		props: {
			priceDic: {
				type: Object,
				default: {}
			},
			priceNum: {
				type: Number,
				default: 0
			},
			type: {
				type: Number,
				default: 0
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			console.log(that.priceDic)
		},
		methods:{
			
			doClose(){
				uni.$emit('priceDatlHide', 0)
			},
			doguize(){
				var url = getApp().globalData.weburl + 'appapi/page/detail?id=28&lang=' + getApp().globalData.language
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '/pages/webView/webView'
						});
					}
				})
			},
			dsfsdffsds(){}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		min-height: 400rpx;
		/* height: 620rpx; */
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.heaerView{
		display: flex;
		flex-direction: row;
		height: 108rpx;
		border-bottom: 2rpx solid #f0f0f0;
	}
	.cancleBtn{
		position: absolute;
		height: 40rpx;
		margin-top: 34rpx;
		margin-left: 20rpx;
		line-height: 40rpx;
		color: #FF5725;
		font-size: 28rpx;
		/* background-color: #007AFF; */
	}
	.titleText{
		height: 108rpx;
		line-height: 108rpx;
		margin-left: 160rpx;
		width: 430rpx;
		color: #323232;
		font-size: 18px;
		font-weight: bold;
		display:inline-block;
		text-align: center;
	}
	.closeBtn{
		position: absolute;
		height: 40rpx;
		width: 40rpx;
		margin-top: 34rpx;
		right: 20rpx;
		}
	.contentView{
		display: flex;
		flex-direction: column;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
	}
	.prcieSingleItem{
		width: 750rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
	}
	.leftNameLabel{
		height: 60rpx;
		font-size: 14px;
		line-height: 60rpx;
		color: #646464;
		margin-left: 24rpx;
		flex: 1;
	}
	.rightPriceLabel{
		height: 60rpx;
		font-size: 14px;
		font-weight: bold;
		line-height: 60rpx;
		color: #323232;
		margin-right: 24rpx;
	}
</style>
