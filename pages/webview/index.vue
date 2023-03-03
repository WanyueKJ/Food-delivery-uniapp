<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key: 'weburl',
				success: res => {
					that.url = res.data
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
</style>
