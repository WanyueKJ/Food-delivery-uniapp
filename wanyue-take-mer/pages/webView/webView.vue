<template>
	<view>
		<web-view :src="urlStr"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlStr:''
			}
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key: 'weburl',
				success: res => {
					that.urlStr = res.data
					console.log(res)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
