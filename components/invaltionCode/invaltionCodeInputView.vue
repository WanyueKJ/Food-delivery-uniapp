<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="nothingTouch()"
		style="align-items: center;justify-content: center;">
		<view class="column" style="width: 630rpx;height: 430rpx;background-color: #FFFFFF;border-radius: 30rpx;">
			<view class="row" style="width: 630rpx;height: 132rpx;align-items: center;">
				<text class="biaotiFrame">请填写邀请码</text>
				<image src="../../static/wy-close.png" mode="aspectFit" style="width: 40rpx;height: 40rpx;margin-left: 25rpx;" @click="doHide()"></image>
			</view>
			<input type="number" placeholder="输入好友给您的邀请码" :value="code" class="inputFrame" @input="codeInput"/>
			<text class="subBtnFrame" @click="doSubMit()">确定</text>
		</view>

	</view>

</template>

<script>
	import http from '../../toolClass/WYToolClass.js'

	export default {
		data() {
			return {
				windowHeight: 0,
				code:''
			}
		},
		props: {

		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight

		},
		methods: {
			nothingTouch() {
				uni.hideKeyboard()
			},
			doHide() {
				this.$emit('hideInputCode')
			},
			codeInput(e){
				this.code = e.detail.value
			},
			doSubMit(){
				var that = this
				if(that.code.length > 0){
					const value = uni.getStorageSync('userinfo');
					let sign = http.sort2url({
						'code': that.code,
						'uid': value.id
					});
					http.sendRequest('Agent.Set',{
						'code': that.code,
						'sign':sign
					}).then(function(res){
						if(res.code == 0){
							uni.showToast({
								title:'绑定成功',
								duration:2000
							})
							that.doHide()
						}
					})
				}
			}
		}
	}
</script>

<style>
	.biaotiFrame {
		margin-left: 100rpx;
		width: 430rpx;
		height: 132rpx;
		line-height: 132rpx;
		color: #323232;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
	}
	.inputFrame{
		margin-top: 16rpx;
		margin-left: 48rpx;
		width: 534rpx;
		height: 72rpx;
		border-radius: 8rpx;
		background-color: #F4F4F4;
		font-size: 14px;
		line-height: 72rpx;
		color: #323232;
		padding-left: 20rpx;
	}
	.subBtnFrame{
		margin-top: 64rpx;
		margin-left: 48rpx;
		width: 534rpx;
		height: 90rpx;
		border-radius: 8rpx;
		background-color: #F4F4F4;
		font-size: 16px;
		font-weight: bold;
		line-height: 90rpx;
		color: #FFFFFF;
		text-align: center;
		background-color: #7900B2;
	}
</style>
