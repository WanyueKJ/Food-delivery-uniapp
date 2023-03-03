<template>
	<view>
		<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
		<view class="row" style="width: 100%;height: 40px;align-items: center;">
			<image @tap="onClickLeft" src="../../static/back-left.png" mode="aspectFit" style="width: 32px;height: 32px;margin-left: 12px;"></image>
			<view @tap="onClickLeft" style="margin-left: 5px;color: #FF5725;font-size: 16px;">
				{{leftText}}
			</view>
			<view class="" style="flex: 1;">
				
			</view>
			<view @tap="onClickRight" class="" v-if="rightText.length > 0" style="font-size: 14px;font-weight: bold;" :style="'color:' + rightcolor + ';margin-right: ' + wxWidth + 'px;'">
				{{rightText}}
			</view>
			<image @tap="onClickRight" class="" v-if="rightIcon.length > 0" mode="aspectFit" :src="rightIcon" style="width: 32px;height: 32px;" :style="'color:' + rightcolor + ';margin-right: ' + wxWidth + 'px;'">
				
			</image>
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
			
			if(parseInt(res.safeArea.top) > this.system_top){
				this.system_top = parseInt(res.safeArea.top)
			}
			
			// if (parseInt(res.safeArea.top) == 20) {
			// 	this.system_top = 44;
			// } 
			console.log(this.system_top)
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
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
				default: "#FF5725"
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

</style>
