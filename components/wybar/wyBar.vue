<template>
	<view style="background-color:white">
		<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
		<view class="row" style="width: 100%;height: 40px;align-items: center;">
			<view class="leftClick" @tap="onClickLeft">
				<image src="../../static/back-left.png" mode="aspectFit" style="margin-top: 10px; width: 20px;height: 20px;margin-left: 1px;"></image>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view style="margin-left: 65px;color: #333333;font-size: 16px;">
				{{titleText}}
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view style="margin-left: 15px;color: #333333;font-size: 16px;text-align: left">
				{{titleText}}
			</view>
			<!-- #endif -->
			<view class="" style="flex: 1;">
				
			</view>
			<view @tap="onClickRight" class="" v-if="rightText.length > 0" style="font-size: 14px;font-weight: bold;" :style="'color:' + rightcolor + ';margin-right: ' + wxWidth + 'px;'">
				{{rightText}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "wyBar",
		data() {
			return {
				system_top: 44,
				wxWidth:15
			};
		},
		created() {
			const res = uni.getSystemInfoSync();
			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			this.wxWidth = weinfo.width + 15
			// #endif
			if(parseInt(res.safeArea.top) > this.system_top){
				this.system_top = parseInt(res.safeArea.top)
			}
			
			// if (parseInt(res.safeArea.top) == 20) {
			// 	this.system_top = 44;
			// } 
			// console.log(this.system_top)
		},
		props: {
			
			titleText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: "../../static/back-left.png"
			},
			rightIcon: {
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: "#FFFFFF"
			},
			rightcolor: {
				type: String,
				default: "#00C1DE"
			},
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			
		},
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight() {
				this.$emit("clickRight");
			},
			
		}
	}
</script>

<style>

.leftClick{
	margin-left:12px;
	width: 60px;
	height:40px;
}
</style>
