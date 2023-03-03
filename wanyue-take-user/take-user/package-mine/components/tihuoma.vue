<template>
	<view class="uni-mask-nvue" style="align-items: center;justify-content: center;">
		<view class="white_view column">
			<view class="row" style="margin-left: 35px;width: calc(100% - 35px);height: 40px;align-items: center;">
				<view class="" style="font-size: 16px;font-weight: bold;text-align: center;flex: 1;">
					{{i18n.yilou.tihuoma}}
				</view>
				<image src="../../static/wy-close.png" mode="" style="width: 20px;height: 20px;margin-right: 15px;"
					@click="doClose()"></image>
			</view>
			<view class="" style="width: 180px;height: 180px;margin-top: 20px;">
				<canvas canvas-id="qrcode" style="width: 180px; height: 180px;"></canvas>
			</view>
			<!-- <image src="" mode="" style="width: 180px;height: 180px;"></image> -->
			<view class="" style="font-size: 16px;font-weight: bold;text-align: center;flex: 1;height: 50px;line-height: 50px;">
				{{orderMsg.verify_code}}
			</view>
		</view>

	</view>
</template>

<script>
	import uQRCode from "@/package-mine/components/uqrcode.js"
	export default {
		computed: {
			i18n() {
				return getApp().globalData.$t('index')
			},
		},
		props: {
			orderMsg: {
				//亮星星
				type: Object,
				default: null
			},
		},
		data() {
			return {

			}
		},
		created() {
			var that = this
			setTimeout(function() {
				// async loadList() {
					uQRCode.make({
						canvasId: 'qrcode',
						componentInstance: that,
						text: that.orderMsg.verify_code,
						size: 180,
						margin: 0,
						backgroundColor: '#ffffff', //背景颜色
						foregroundColor: '#000000',
						fileType: 'jpg',
						correctLevel: uQRCode.defaults.correctLevel,
					}).then(res => {
						console.log(res)
					})
				
			}, 500);
		},
		methods: {
			doClose() {
				this.$emit('cuidanle', '')
			},

		}
	}
</script>

<style>
	.white_view {
		width: 80%;
		/* height: 230px; */
		background-color: #FFF;
		border-radius: 16px;
		align-items: center;
	}

	.text_back_view {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 110px;
		background-color: #F5F6F7;
		border-radius: 8px;
	}

	.text_view {
		margin-left: 5px;
		margin-top: 5px;
		width: calc(100% - 10px);
		height: 100px;
		font-size: 14px;
		font-weight: bold;
	}

	.bottom_button {
		margin-left: 20%;
		width: 60%;
		height: 40px;
		border-radius: 8px;
		line-height: 40px;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
		background-color: #FF5725;
		color: #FFF;
		margin-top: 15px;
	}
</style>
