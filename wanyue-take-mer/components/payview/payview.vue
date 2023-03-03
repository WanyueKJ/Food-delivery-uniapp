<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @touchmove.stop.prevent="maskMoveHandle">
		<view style="width: 750rpx;position: absolute;top:0;" :style="'height:' + (windowHeight-340) + 'px;'"
			@click="doClose(0)">

		</view>
		<view class="showView">
			<view class="heaerView">
				<text class="titleText" style="font-size: 22px;line-height: 70px;">{{i18n.index.moneyFuhao}}</text>
				<text class="titleText">{{money}}</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose(0)"></image>
				
			</view>
			<view @click="payTypeClick(item,index)" v-for="(item,index) in payTypeList" :key="index" class="row"
				style="width: 750rpx;height: 122rpx;border-bottom: 1px solid #ECECEC;position: relative;">
				<image :src="item.thumb" mode="" class="payType-item-image"></image>
				<text class="payType-item-name">{{item.name}}</text>
				<text class="item-yue-label" v-if="item.id == 0">{{'余额: ¥' + item.balance}}</text>
				<image src="/static/item-sel.png" mode="" class="payType-item-Btn" v-if="selectIndex == index"></image>
				<image src="/static/item-nor.png" mode="" class="payType-item-Btn" v-else></image>
			</view>
			<text class="subBtnClass" @click="doClose(1)">{{i18n.index.paynow}}</text>
		</view>

	</view>

</template>

<script>
	import http from '../../toolClass/WYToolClass.js'

	export default {
		data() {
			return {
				windowHeight: 0,
				payTypeList: [],
				selectIndex: 0
			}
		},
		props: {
			money: {
				type: String,
			},
			type: {
				type: String,
				default: '0'
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		watch: {
			money(val) {
				this.money = val;
				console.log(val)
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			//类型 1充值 2下单
			http.sendAppRequest('Orders.GetPayList', {
				'type': that.type
			}).then(function(res) {
				that.payTypeList = res.info
			})
		},
		methods: {
			doClose(e) {
				if (e == 1) {
					this.$emit('closePayView', this.payTypeList[this.selectIndex])
				} else {
					this.$emit('closePayView', e)
				}
			},
			payTypeClick(item, index) {
				this.selectIndex = index
			},
			maskMoveHandle() {

			}

		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 680rpx;
		border-radius: 16px 16px 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	.heaerView {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 128rpx;
		width: 750rpx;
		border-bottom: 1px solid #ECECEC;
	}

	.titleText {
		height: 128rpx;
		line-height: 128rpx;
		color: #323232;
		font-size: 34px;
		font-weight: bold;
	}

	.payType-item-image {
		margin-left: 12px;
		width: 26px;
		height: 26px;
		margin-top: 17px;
	}

	.payType-item-name {
		margin-left: 12px;
		/* width: 100px; */
		height: 60px;
		line-height: 60px;
		color: #323232;
		font-size: 16px;
		flex: 1;
	}

	.item-yue-label {
		height: 60px;
		line-height: 60px;
		color: #646464;
		font-size: 12px;
		margin-right: 10px;
	}

	.payType-item-Btn {
		/* position: absolute; */
		margin-right: 24rpx;
		margin-top: 42rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.subBtnClass {
		position: absolute;
		bottom: 40px;
		margin-left: 24rpx;
		width: 702rpx;
		height: 40px;
		border-radius: 3px;
		background-color:#00C1DE;
		line-height: 40px;
		color: #FFFFFF;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
	}
	.closeBtn{
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		margin-top: 34rpx;
		right: 20rpx;
		/* margin-left: 40rpx; */
		/* background-color: #007AFF; */
	}
</style>
