<template>
	<view class="uni-mask" :style="'height:' + windowheight + 'px;'">
		<view class="codeview">
			<text class="codetext">{{title}}</text>
			<view class="inputrow row" :style="surebtntitle == i18n.sure?'justify-content: center;':''">
				<text v-if="surebtntitle == i18n.order.zhuandan" @click="cancle" class="canclebtn">{{i18n.cancel}}</text>
				<text v-if="surebtntitle == i18n.order.zhuandan" @click="sure" class="surebtn">{{surebtntitle}}</text>
				<text v-if="surebtntitle == i18n.sure" @click="sure" class="surebtn2">{{surebtntitle}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default:''
			},
			surebtntitle: {
				type: String,
				default:'转单'
			},
		},
		computed: {
			i18n() {
				return getApp().globalData.$t('index')
			},
		},
		data() {
			return {
				windowheight: 0,
			}
		},
		created() {
			this.windowheight = getApp().globalData.windowHeight

		},
		methods: {
			cancle() {
				this.$emit('relaxcancle')
			},
			sure() {
				this.$emit('relaxsure')
			}
		}
	}
</script>

<style>
	.uni-mask {
		position: fixed;
		z-index: 999;
		width: 750rpx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.canclebtn {
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 21px;
		background-color: rgba(209, 209, 209, 1);
	}

	.surebtn {
		position: absolute;
		right: 0;
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 21px;
		background-color: #FF5725;
	}
	
	.surebtn2 {
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 21px;
		background-color: #FF5725;
	}

	.inputrow {
		position: relative;
		margin-top: 30px;
		width: 454rpx;
		margin-left: 60rpx;
		height: 60px;
		align-items: center;
	}

	.codetext {
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		font-weight: bold;
		height: 50px;
		width: 454rpx;
		margin-left: 60rpx;
		margin-top: 40px;
	}

	.codeview {
		width: 574rpx;
		height: 196px;
		background-color: #FFFFFF;
		border-radius: 8px;
	}
	
</style>
