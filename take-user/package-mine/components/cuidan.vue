<template>
	<view class="uni-mask-nvue" style="align-items: center;justify-content: center;">
		<view class="white_view column">
			<view class="row" style="margin-left: 35px;width: calc(100% - 35px);height: 40px;align-items: center;">
				<view class="" style="text-align: center;flex: 1;">
					<text style="font-size: 16px;font-weight: bold;width: 100%;text-align: center;">{{i18n.order.cuidan}}</text>
				</view>
				<image :src="closeUrl" mode="aspectFit" style="width: 20px;height: 20px;margin-right: 15px;" @click="doClose()"></image>
			</view>
			<view class="text_back_view">
				<textarea class="text_view" :value="neirong" focus="true" @input="input"></textarea>
			</view>
			<view >
				<text class="bottom_button_cuidan" @click="doSubmit()">{{i18n.mine.submit}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return getApp().globalData.$t('index')
			},
		},
		data() {
			return {
				neirong:'',
				closeUrl:''
			}
		},
		created() {
			this.closeUrl = getApp().globalData.weburl + 'wy-close.png'
		},
		methods: {
			doClose() {
				this.$emit('cuidanle','')
			},
			input(e){
				this.neirong = e.detail.value
			},
			doSubmit(){
				if(this.neirong.length > 0){
					this.$emit('cuidanle',this.neirong)
				}
			}
		}
	}
</script>

<style>
	.white_view {
		width: 600rpx;
		height: 230px;
		background-color: #FFF;
		border-radius: 16px;
	}
	.text_back_view {
		margin-left: 30rpx;
		width: 540rpx;
		height: 110px;
		background-color: #F5F6F7;
		border-radius: 8px;
	}
	.text_view {
		margin-left: 10rpx;
		margin-top: 5px;
		width: 520rpx;
		height: 100px;
		font-size: 14px;
		font-weight: bold;
	}
	.bottom_button_cuidan {
		margin-left: 120rpx;
		width: 360rpx;
		height: 40px;
		border-radius: 8px;
		line-height: 40px;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
		background-color: #FF5725;
		color: #FFF;
		margin-top: 15px;
		display: inline-block;
	}
</style>