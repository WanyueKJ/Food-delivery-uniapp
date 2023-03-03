<template>
	<view>
		<view class="topImageView">
			<view class="nav row">
				<image class="nav_left" @click="back()" src="../../static/whiteback@2x.png" mode="aspectFit"></image>
				<text class="nav_title">{{i18n.index.ziti}}</text>
			</view>
		</view>
		<orderListV ref="zitilist" :height="scrollHeight" :typeString="6" @cellItemClick="cellItemClick">
		</orderListV>
	</view>
</template>

<script>
	import orderListV from '../../components/orderlist/orderListView.vue'
	export default {
		components: {
			orderListV
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		data() {
			return {
				scrollHeight: 0,
			}
		},
		onReady() {
			console.log('onready')
			var res = uni.getSystemInfoSync()
			this.scrollHeight = res.windowHeight - 84
			var that = this
			setTimeout(function() {
				that.$refs.zitilist.updateData(6)
			}, 100);
		},
		
		methods: {
			back() {
				uni.navigateBack()
			},
			cellItemClick(item, index) {
				console.log(index)
				uni.navigateTo({
					url: 'indexOrderDetail?id=' + item.id
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}

	.topImageView {
		width: 100%;
		overflow: hidden;
		height: 84px;
		background-color: #303F50;
		/* position: relative; */
		background-size: 100% auto;
	}

	.nav {
		display: flex;
		align-items: center;
		height: 44px;
		margin-top: 40px;
		border-bottom: 1px solid #383838;
	}

	.nav_left {
		margin-left: 15px;
		width: 20px;
		height: 20px;
	}

	.nav_title {
		width: 40%;
		margin-left: 20%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}
</style>
