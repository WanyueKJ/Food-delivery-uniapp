<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.bangzhufankui"></wybar>
		<view class="wrap">
			<view v-for="(item,index) in array" :key="index" class="section row" @click="click(index)" style="margin-bottom: 10px;">
				<view class="title">{{item}}</view>
				<image src="../../../static/ads-seld-right.png" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				array: []
			}
		},
		onLoad() {
			this.array = [this.i18n.mine.bangzhufankui, this.i18n.mine.bangzhufankui, this.i18n.mine.bangzhufankui]
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			click(index) {

				var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + ID + '&lang=' + getApp().globalData.language
				uni.setStorage({
					key: 'weburl',
					data: url,
					success() {
						uni.navigateTo({
							url: '../../../pages/webView/webView',
						});
					}
				})

			},

		}
	}
</script>

<style>
	@import url("../setup/index.css");
</style>
