<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.shopPic" :rightText="i18n.shop.submit" @clickRight="save">
		</wybar>
		<view class="tip">{{i18n.shop.pictip1}}<text style="color:#F40404 ;">({{i18n.shop.pictip2}})</text></view>
		<view class="pictures row">
			<view v-for="(item,index) in imgList" :key="index"
				style="margin-right: 5px;width:159px;height: 125px;align-items: center;display:flex;position: relative;margin-bottom:10px">
				<image :src="item" @click="showBigImg(index)" mode="aspectFill"
					style="width: 149px;height: 109px;margin-top: 8px;margin-right: 5px;"></image>
				<image @click="delateImage(index)" src="../../static/deletepic@2x.png"
					style="position: absolute;right: 0;top: 0;width: 20px;height: 20px;border-radius: 10px;">
				</image>
			</view>
			<image v-if="imgList.length < maxCount" @click="doAddImage()" src="../../static/addEnPic@2x.png"
				mode="aspectFit" style="width: 149px;height: 109px;margin-top: 10px;margin-bottom: 8px;"></image>
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
				imgList: [],
				imgUrls: [],
				maxCount: 5
			}
		},
		onShow() {
			// this.getData()
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				var that = this
				that.http.sendRequest('MerchantStore.Read').then(function(data) {
					// console.log(data)
					var dic = data.info[0]
					var list = dic.environment
					// console.log(list)
					// if(list.length > 0){
					that.imgList = list
					// that.imgUrls = list
					for (let i = 0; i < list.length; i++) {
						that.imgUrls.push(list[i])
					}
					// }
					// console.log(that.imgList)
					// console.log(that.imgUrls)
				})
			},
			back() {
				uni.navigateBack()
			},
			save() {
				if (this.imgList.length == 0) {
					uni.showLoading({
						title:this.i18n.shop.pictip
					})
					setTimeout(function () {
						uni.hideLoading();
					}, 2000)
					return
				}
				
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.uid
					toolData.token = value.token
				}
				var index = 0
				if (that.imgUrls.length > 0) {
					index = that.imgUrls.length
				}
				if(index>=that.imgList.length){
					uni.navigateBack()
					return
				}
				uni.showLoading({
					title: this.i18n.mine.shangchuanzhong,
					mask: false
				});
				for (let i = index; i < that.imgList.length; i++) {
					uni.uploadFile({
						url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
						filePath: that.imgList[i],
						name: 'file',
						formData: toolData,
						success(res) {
							uni.hideLoading()
							var data = JSON.parse(res.data)
							var img = data.data.info[0].url_all
							that.imgUrls.push(img)
							if (that.imgUrls.length == that.imgList.length) {
								that.submit()
							}
						},
						fail: err => {
							uni.hideLoading()
						}
					})
				}
			},
			submit() {
				var that = this
				let param = {
					'environment': JSON.stringify(that.imgUrls)
				}
				this.http.sendRequest('MerchantStore.Update', param).then(function(data) {
					if (data.code == 0) {
						uni.navigateBack()
					}
				})
			},
			delateImage(index) {
				var that = this
				uni.showModal({
									title: '',
									content: that.i18n.shop.deletetip,
									success: function (res) {
										if (res.confirm) {
											that.delete(index)
										} else if (res.cancel) {
											
										}
									}			
				});

				
			},
			delete(index){
				var that = this
				if(that.imgUrls.length > index){
					that.imgUrls.splice(index, 1)
					console.log(that.imgUrls)
					let param = {
						'environment': JSON.stringify(that.imgUrls)
					}
					this.http.sendRequest('MerchantStore.Update', param).then(function(data) {
						if (data.code == 0) {
							that.imgList.splice(index, 1)
						}
					})
				}else{
					that.imgList.splice(index, 1)
				}
			},
			showBigImg(index) {
				var that = this
				uni.previewImage({
					urls: that.imgList,
					current: index
				});
			},
			doAddImage() {
				var that = this
				uni.chooseImage({
					count: that.maxCount - that.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							if (that.imgList.length < 5) {
								that.imgList.push(path)

							}
						}
					}
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.tip {
		margin-left: 15px;
		/* height: 40px; */
		margin-top: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 12px;
		text-align: left;
		color: #aaaaaa;
	}

	.pictures {
		flex-wrap: wrap;
		padding-right: 15px;
		padding-left: 15px;
		margin-top: 15px;
		width: calc(100% - 30px);
		background-color: white;
	}
</style>
