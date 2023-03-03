<template>
	<view class="content">
		<view class="topLabel">已开通以下城市</view>
		<view class="cityCell" v-for="(item,index) in cityArray" :key="index" @click="changeCity(item,index)">
			{{item.name}}
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cityArray: [],
			}
		},
		onLoad() {
			var that = this
			that.http.sendRequest('City.GetList',{}).then(function(res){
				var info = res.info
				console.log(info)
				that.cityArray = info
			})
		},
		methods: {
			changeCity(item, index) {
				uni.navigateBack({

				}),
				uni.$emit('citychange', item)
			}
		}
	}
</script>

<style>
	.cityCell {
		width: 750rpx;
		height: 54px;
		margin-left: 20px;
		font-size: 15px;
		color: #323232;
		line-height: 54px;
	}
	.topLabel{
		width: 750rpx;
		height: 38px;
		margin-left: 0px;
		padding-left: 20px;
		font-size: 13px;
		font-weight: bold;
		color: #989898;
		line-height: 38px;
		background-color: #f7f7f7;
	}
</style>
