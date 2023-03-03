<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="titleText">{{i18n.shansong.wupinxinxi}}</text>
				<image src="/static/wy-close.png" class="closeBtn" @click="doClose(0)"></image>
			</view>
			<view class="contentView">
				<text class="leftLabel">{{i18n.shansong.pinlei}}</text>
				<scroll-view scroll-y="true" class="scroll">
					<text v-for="(item,index) in typeArray" :key="index" class="scrol-item"
						@click="doSelcted(item,index)"
						:style=" selectIndex != index ? 'border:2rpx solid #D9D9D9;background-color: #FFFFFF;color: #646464;' : 'border:2rpx solid #FF4C29;background-color: #FFEDE9;color: #FF4C29;'">{{item.name}}</text>
				</scroll-view>
				<text class="leftLabel" style="margin-top: 20rpx;">{{i18n.shansong.zhongliang}}</text>
				<text class="titleText" style="height: 30rpx;line-height: 30rpx;">{{weight}}KG</text>
				<view class="sliderBacKView">
					<text class="sliderL">1KG</text>
					<slider style="margin-top: 10rpx;flex-shrink: 0; width: 450rpx;" min="1" max="25" :value="weight"
						@change="sliderChange" activeColor="#FF5725" backgroundColor="#F3F3F3" block-color="#FFFFFF"
						block-size="26" />
					<text class="sliderL">25KG</text>
				</view>
				<view class="sliderBacKView" style="background-color: #FFF6F4;border-radius: 3px;">
					<!-- #ifdef APP-PLUS -->
					<image src="../../../static/tip-tongzhi.png" class="tipimage"></image>
					<!-- #endif -->
					
					<text class="tipText">{{'<'}}{{i18n.shansong.setZLTip}}</text>
				</view>
				<text class="subBtnClass" @click="doClose(1)">{{i18n.sure}}</text>
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
				selectIndex: 0,
				typeArray: [],
				weight: '1'
			}
		},
		props: {
			type: {
				type: Number,
				default: 0
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			// this.typeArray = ['食品饮料','水果生鲜','数码家电','数码家电','数码家电','数码家电','数码家电','其他'];
			http.sendRequest('Helpsend.GetCate', {}).then(function(res) {
				if (res.code == 0) {
					that.typeArray = res.info
					console.log(that.typeArray)
				}
			})
		},
		methods: {
			doClose(e) {
				if (e == 0) {
					uni.$emit('wupinMsgSelcted', 0)
				} else {
					uni.$emit('wupinMsgSelcted', {
						'type': this.typeArray[this.selectIndex],
						'weight': this.weight
					})
				}

			},
			doSelcted(item, index) {
				this.selectIndex = index;
			},
			sliderChange(e) {
				this.weight = e.detail.value
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
		height: 108rpx;
		/* border-bottom: 1px solid #f0f0f0; */
	}

	.titleText {
		height: 108rpx;
		line-height: 108rpx;
		/* left: 160rpx; */
		width: 750rpx;
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
		top: 34rpx;
		right: 20rpx;
		/* background-color: #007AFF; */
	}

	.contentView {
		position: relative;
		display: flex;
		flex-direction: column;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
		height: 692rpx;
		/* background-color: #18BC37; */
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
		height: 180rpx;
		margin-top: 10rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.scrol-item {
		display: inline-block;
		width: 160rpx;
		height: 60rpx;
		border-radius: 6rpx;
		border-color: #D9D9D9;
		border-width: 2rpx;
		background-color: #FFFFFF;
		margin-right: 10rpx;
		margin-top: 16rpx;
		color: #646464;
		line-height: 60rpx;
		font-size: 24rpx;
		text-align: center;
	}

	.sliderBacKView {
		display: flex;
		flex-direction: row;
		margin-left: 20rpx;
		margin-top: 5rpx;
		width: 710rpx;
		height: 80rpx;
		/* background-color: #007AFF; */
	}

	.sliderL {
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #989898;
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
		/* position: absolute; */
		margin-top: 80rpx;
		bottom: 40rpx;
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
