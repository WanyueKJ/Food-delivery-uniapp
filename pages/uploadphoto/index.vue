<template>
	<view>
		<view class="title">{{i18n.set.upPhotoTip}}</view>
		<view class="images row">
			<view v-for="(item,index) in tempFilePaths" class="row photos">
				<image @click="showthumb(index)" class="uploadback" :src="item"></image>
			</view>
			<image @click="upload" class="uploadback" src="../../static/image/shangchuantupian.png"></image>
		</view>
		<view class="uploadbtn" @click="uploadok">{{i18n.set.querenshangchuan}}</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},

		data() {
			return {
				tempFilePaths: [],
				thumbs: [],
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.set.tupianshangchuan
			})
		},
		methods: {
			showthumb(index) {
				uni.previewImage({
					current: index,
					urls: this.tempFilePaths
				})
			},

			uploadok() {
				if (this.tempFilePaths.length == 0) {
					uni.showToast({
						title: this.i18n.set.zhishaoyizhang,
						icon: 'none'
					});
					return
				}
				var that = this
				uni.showLoading({})
				for (let i = 0; i < this.tempFilePaths.length; i++) {
					uni.uploadFile({
						url: getApp().globalData.mainurl + 'Rider.Upload.Upload',
						filePath: this.tempFilePaths[i],
						name: 'file',
						formData: {},
						success(res) {
							var data = JSON.parse(res.data)
							if (data.data.code == 0) {
								that.thumbs.push(data.data.info[0].url_all)
								if (that.thumbs.length == that.tempFilePaths.length) {
									uni.hideLoading()
									uni.showToast({
										title: that.i18n.set.upSucess,
										icon: 'none'
									});
									setTimeout(() => {
										uni.setStorage({
											key: 'finishthumb',
											data: that.thumbs,
											success() {
												uni.navigateBack({
													delta: 1
												});
											}
										})
									}, 1000)
								}
							} else {
								uni.hideLoading()
								uni.showToast({
									title: data.data.msg,
									icon: 'none'
								});
							}
						},
						fail: err => {
							uni.hideLoading()
						}
					})
				}
			},
			upload() {
				console.log(this.tempFilePaths)
				let that = this;
				if (that.tempFilePaths.length > 2) {
					uni.showToast({
						title: that.i18n.set.zuiduosanzhang,
						icon: 'none'
					});
					return
				}
				
				uni.chooseImage({
					count: 3,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						for (let i = 0; i < res.tempFilePaths.length; i++) {
							if (that.tempFilePaths.length > 2) {
								return
							}
							that.tempFilePaths.push(res.tempFilePaths[i])
						}
					},
				});
			}
		}
	}
</script>

<style>
	.uploadbtn {
		background-color: #FF5725;
		height: 44px;
		font-size: 16px;
		color: #FFFFFF;
		line-height: 44px;
		width: calc(100% - 30px);
		margin-left: 15px;
		position: absolute;
		bottom: 20px;
		border-radius: 4px;
		text-align: center;
	}

	.images {
		margin-left: 15px;
		margin-top: 20px;
	}

	.uploadback {
		width: 76px;
		height: 76px;
		margin-right: 10px;
	}

	page {
		width: 100%;
		height: 100%;
		background-color: rgba(247, 247, 247, 100);
	}

	.title {
		color: rgba(152, 152, 152, 1);
		font-size: 13px;
		width: calc(100% - 30px);
		margin-left: 15px;
		margin-top: 20px;
		font-size: 13px;
	}
</style>
