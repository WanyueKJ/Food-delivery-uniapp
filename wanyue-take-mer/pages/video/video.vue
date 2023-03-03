<template>
	<view style="width: 100%;height: 100%;">
		<video :src="urlStr" style="width: 100%;height: 100%;" autoplay="true" v-if="urlStr">
			<cover-view src="../../static/wy-close.png" class="closeBtn" @click.stop="doback()">
				<cover-image src="../../static/wy-close.png" @click.stop="doback()" style="width: 14px;height: 14px;margin-left: 8px;margin-top: 8px;" mode=""></cover-image>
			</cover-view>
		</video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlStr:null
			}
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key: 'videourl',
				success: res => {
					that.urlStr = res.data
					console.log(res)
				}
			})
		},
		methods: {
			doback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: black;
	}
	.closeBtn{
		margin-left: 15px;
		margin-top: 40px;
		width: 30px;
		height: 30px;
		background-color: #FFF;
		border-radius: 15px;
		/* padding: 8px; */
	}
</style>
