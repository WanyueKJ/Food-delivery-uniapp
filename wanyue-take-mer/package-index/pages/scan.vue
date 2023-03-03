<template>
	<view>
		<camera device-position="back" flash="off" mode="scanCode" @scancode="scancode" @error="error"
			:style="'height:' +windowHeight + 'px;width:' + windowWidth + 'px;'"></camera>
		<!-- <view style="width: 375px; height: 730px; background-color: black;"></view> -->
		<view class="tip">{{i18n.index.scantip}}</view>
		<view class="top row">
			<view class="scancode">
				<text class="scan">{{i18n.index.scanT}}</text>
				<view class="content_img"></view>
			</view>
			<view class="quan" @click="inputCode()">
				<text class="scan">{{i18n.index.quan}}</text>
				<view class="content_img2"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		data() {
			return {
				windowHeight:0,
				windowWidth:0
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.i18n.index.scanT
			})
			const res = uni.getSystemInfoSync()
			this.windowHeight = res.windowHeight
			this.windowWidth = res.windowWidth
		},
		methods: {
			inputCode() {
				uni.navigateTo({
					url: 'surecode'
				})
			},
			scancode(e) {
				console.log("success1:" + JSON.stringify(e));
				var code = e.detail.message
				var param = {
					'verify_code': code
				}
				this.http.sendRequest('MerchantOrder.VerificationSheet', param).then(function(data) {
					console.log(data)
					if (data.code == 0) {
						uni.showToast({
							title: data.msg,
							icon: '',
							duration: 500
						})
						setTimeout(function() {
							uni.navigateBack()
						}, 2000);
					}
				})
			},
			error(e) {
				console.log(e.detail)
			}

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.top {
		display: flex;
		flex-direction: row;
		position: absolute;
		width: 100%;
		height: 60px;
		bottom: 100px;
		/* background-color: black; */
	    align-items: center;
		/* justify-content: center; */
	}

	.tip {
		display: flex;
		flex-direction: row;
		position: absolute;
		width: 100%;
		height: 20px;
		color: #ffffff;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		bottom: 200px;
		
	}
	.scancode {
		width: 90px;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-left: 97px;
		align-items: center;
		justify-content: center;
	}

	.scan {
		height: 21px;
		font-size: 15px;
		text-align: center;
		color: #ffffff;
		line-height: 21px;
	}

	.content_img {
		margin-top: 0;
		width: 5px;
		height: 5px;
		border-radius: 2.5px;
		background-color: white;
	}
	
	.quan {
		/* width: 90px;
		height: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: row;
		background-color: yellow; */
		width: 90px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.content_img2 {
		margin-top: 0;
		width: 5px;
		height: 5px;
		border-radius: 2.5px;
		
	}
	.quantxt {
		height: 20px;
		font-size: 15px;
		text-align: center;
		color: #ffffff;
		line-height: 20px;
	}
</style>
