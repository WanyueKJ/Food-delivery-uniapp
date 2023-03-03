<template>
	<view style="margin-top: 10px;">
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
			style="background-color: #F5F5F5; height: 100%;width: 100%;" class="column">
			<view class="inputBackView">
				<view class="title">{{i18n.shop.name2}}</view>
				<input type="text" class="inputV" :value="name" :disabled="true" />
			</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.cerNum}}</view>
				<input type="text" class="inputV" :value="cerNum" :disabled="true" />
			</view>
			<view class="inputBackView" style="height: 97px;">
				<view class="title">{{i18n.shop.cerPics}}</view>
				<image :src="cerPic1" mode="aspectFit" class="pics" @click="previewImage(cerPic1)"></image>
				<image :src="cerPic2" mode="aspectFit" class="pics" @click="previewImage(cerPic2)"></image>
			</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.registerID}}</view>
				<input type="text" class="inputV" :value="registerID" :disabled="true" />
			</view>
			<view class="inputBackView" style="height: 97px;">
				<view class="title">{{i18n.shop.yingyePic}}</view>
				<image :src="yingyePic" mode="aspectFit" class="pics" @click="previewImage(yingyePic)"></image>
			</view>
			<view class="inputBackView">
				<view class="title">{{i18n.shop.licenseID}}</view>
				<input type="text" class="inputV" :value="licenseID" :disabled="true" />
			</view>
			<view class="inputBackView" style="height: 97px;">
				<view class="title">{{i18n.shop.licensePic}}</view>
				<image :src="licensePic" mode="aspectFit" class="pics" @click="previewImage(licensePic)"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 0,
				name: '',
				cerNum: '',
				cerPic1: '',
				cerPic2: '',
				registerID: '',
				licenseID: '',
				licensePic: '',
				yingyePic: ''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},

		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.shop.gongshang
			})
			var res = uni.getSystemInfoSync()
			var navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight - navHeight
			this.getData()
		},
		methods: {
			getData() {
				var that = this
				this.http.sendRequest('MerchantStore.ReadIndustry').then(function(data) {
					console.log(data)
					var dic = data.info[0]
					that.name = dic.name
					that.cerNum = dic.id_card
					that.licenseID = dic.license_number
					that.registerID = dic.registr_id
					that.cerPic1 = dic.id_card_image[0]
					that.cerPic2 = dic.id_card_image[1]
					that.licensePic = dic.license_image[0],
						that.yingyePic = dic.business_image[0]
				})
			},
			previewImage(url) {
				var that = this
				uni.previewImage({
					urls: [url],
					current: 0
				});
			}

		}
	}
</script>

<style>
	page {
		background-color: #f5f5f5;
		width: 100%;
		height: 100%;
	}

	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
	}

	.pics {
		width: 100px;
		height: 60px;
		margin-right: 10px;
		margin-left: 15px;
	}

	.inputBackView2 {
		width: 100%;
		height: 94px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
	}

	.title {
		margin-left: 15px;
		font-size: 16px;
		text-align: left;
		color: #6F6F6F;
	}

	.inputV {
		height: 44px;
		line-height: 44px;
		top: 0;
		font-size: 14px;
		margin-left: 35px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		margin-right: 15px;
		flex: 1;
	}
</style>
