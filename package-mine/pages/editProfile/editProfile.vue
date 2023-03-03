<template>
	<view>
		<scroll-view scroll-y :style="'height:' + windowHeight + 'px'">
			<view class="list_cell" @click="changeLogo()">
				<text class="list_cell_title">{{i18n.mine.shoplogo}}</text>
				<image :src="thumbPath" mode="aspectFill" class="list_cell_avatar"></image>
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right1"></image>
			</view>
			<view class="list_cell2" @click="changeName()">
				<text class="list_cell_title">{{i18n.mine.shopName}}</text>
				<text class="list_cell_right_txt">{{shopName}}</text>
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			</view>
			<view class="list_cell2" @click="changePhone()">
				<text class="list_cell_title">{{i18n.mine.shopphone}}</text>
				<text class="list_cell_right_txt">{{shopPhone}}</text>
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			</view>
			<view class="list_cell2">
				<text class="list_cell_title">{{i18n.mine.shoptype}}</text>
				<text class="list_cell_right_txt">{{shopType}}</text>
				<image src="" mode="aspectFit" class="list_cell_right"></image>
			</view>
			<view class="list_cell2" @click="changeShopAddress()">
				<text class="list_cell_title">{{i18n.mine.shopaddress}}</text>
				<text class="list_cell_right_txt">{{address}}</text>
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			</view>
			<view class="bottomBtn" @click="save()">{{i18n.mine.save}}</view>
		</scroll-view>
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
				userInfo: '',
				menuButtonHeight: 32,
				top: 0,
				windowHeight: 0,
				shopName: '',
				shopPhone: '',
				shopType: '',
				address: '',
				selectImage: '',
				shoplogo: '',
				shopTypeID: '',
				firstTypeID: '',
				thumbPath: '',
				addressDic: '',
				lat:'',
				lng:'',
				isChangeImage: 0,
				// name_th:''
			}
		},
		onShareTimeline: function(res) {},
		onShareAppMessage: function(res) {},

		onLoad(option) {
			this.top = getApp().globalData.top
			this.menuButtonHeight = getApp().globalData.menuButtonHeight
			// #ifdef MP-WEIXIN
			this.windowHeight = getApp().globalData.screenHeight - 44
			// #endif
			// #ifdef APP-PLUS
			this.windowHeight = getApp().globalData.screenHeight - 49
			// #endif
			uni.setNavigationBarTitle({
				title: this.i18n.mine.profile
			})
			if (option.info) {
				let data = JSON.parse(option.info)
				console.log(data)
				this.configureData(data)
			} else {
				this.getData()
			}

			uni.$on('namechange', (param,name_th) => {
				this.shopName = param
				// this.name_th = name_th
			})
			uni.$on('phonechange', (param) => {
				this.shopPhone = param
			})
			var that = this
			uni.$on('userChangeShopType', (param) => {
				console.log(param)
				that.shopTypeID = param.secondID
				that.shopType = param.firstName + '-' + param.secondName
				that.firstTypeID = param.firstID
			})
			uni.$on('updateAddress', (param) => {
				console.log(param)
				that.address = param.address + param.detailAddress
				that.lng = param.lng
				that.lat = param.lat
			})
		},
		onUnload() {
			uni.$off('namechange')
			uni.$off('phonechange')
			uni.$off('userChangeShopType')
			uni.$off('updateAddress')
		},
		methods: {
			changeLogo() {
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						var path = tempFilePaths[0];
						// console.log(path)
						that.thumbPath = path
						that.isChangeImage = 1
					},
				});
			},
			changeName() {
				uni.navigateTo({
					url: './editName?type=1&content=' + this.shopName + '&name_th=' + "",
				})
			},
			changePhone() {
				uni.navigateTo({
					url: 'editName?type=2&content=' + this.shopPhone,
				})
			},
			changeShopType() {
				uni.navigateTo({
					url: 'shopType'
				})
			},
			changeShopAddress() {
				uni.navigateTo({
					url: '../address/address?content=' + this.address,
				})
			},
			save() {
				uni.showLoading({
					title: this.i18n.mine.shangchuanzhong,
					mask: false
				});
				if (this.isChangeImage) {
					this.uploadImageToservice()
				} else {
					this.doSave()
				}
			},
			uploadImageToservice() {
				// var imgsList = [this.thumbPath]
				// this.http.sendUploadImages(imgsList).then(function(data) {
				// 	console.log(data)
				// })
				// return
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.uid
					toolData.token = value.token
				}
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
					filePath: that.thumbPath,
					name: 'file',
					formData: toolData,
					success(res) {
						console.log(res)
						uni.hideLoading()
						var data = JSON.parse(res.data)
						that.shoplogo = data.data.info[0].url_all
						that.doSave()
					},
					fail: err => {
						uni.hideLoading()
					}
				})
			},
			doSave() {
				var that = this
				var param = {}
				if(this.shopName.length>0){
					param.name = this.shopName
				}
				if(this.shopPhone.length>0){
					param.phone = this.shopPhone
				}
				if(this.address.length>0){
					param.address = this.address
				}
				if(this.shoplogo.length>0){
					param.thumb = this.shoplogo
				}
				if(this.lng.length>0){
					param.lng = this.lng
				}
				if(this.lat.length>0){
					param.lat = this.lat
				}
				// if(this.name_th.length>0){
				// 	param.th_name = this.name_th
				// }
				param.type_id = this.shopTypeID
				console.log(param)
				uni.hideLoading()
				that.http.sendRequest('Users.Update', param).then(function(res) {
					if (res.code == 0) {
						that.addressDic = {
							'address': that.address,
							'lng': that.lng,
							'lat': that.lat,
						}
						uni.setStorage({
							key: 'shopAddress',
							data: that.addressDic,
							success: function() {
								console.log('地址存储成功' + that.addressDic)
							}
						});
						
						// promise.then(function(imResponse) {
							// console.log(imResponse.data); // 更新资料成功
							console.log('更新资料成功'); // 
						// }).catch(function(imError) {
						// 	console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
						// });				
						uni.navigateBack()
					}
				})
			},
			configureData(data) {
				this.userInfo = data
				this.shopName = data.name
				this.shoplogo = data.thumb
				this.shopPhone = data.phone
				this.shopType = data.type_name
				this.address = data.address
				this.thumbPath = data.thumb
				this.lng = data.lng
				this.lat = data.lat
				this.shopTypeID = data.type_id
				// this.name_th = data.th_name
			},
			getData() {
				var that = this
				that.http.sendRequest('Users.Home').then(data => {
					// console.log(data)
					if (data.code == 700) {
						that.islogin = false
					} else {
						var dic = data.info[0]
						that.configureData(dic)
					}
				})
			}

		},
	}
</script>

<style>
	.list_cell_avatar {
		right: 40px;
		width: 30px;
		height: 30px;
		position: absolute;
		border-radius: 15px;
		
	}

	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
	}

	.logout {
		margin: 30px;
		/* width: calc(100%-60px); */
		height: 48px;
		border-radius: 24px;
		background-color: #00C1DE;
		font-size: 15px;
		color: white;
		text-align: center;
		line-height: 48px;

	}

	.bottomBtn {
		height: 48px;
		margin-left: 15px;
		margin-top: 50px;
		margin-right: 15px;
		background-color: #00C1DE;
		color: white;
		display: flex;
		flex-direction: row;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		width: calc(100% - 30px);
	}

	.list {
		width: calc(100% - 30px);
		margin-left: 15px;
		height: auto;
		min-height: 200px;
		margin-bottom: 20px;
		background-color: #FFFFFF;
		border-radius: 7px;
	}

	.list_cell {
		width: 100%;
		height: 55px;
		margin-top: 20px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
	}
	
	.list_cell2 {
		width: 100%;
		/* height: 55px; */
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
		border-bottom: 1px solid #e6e6e6;
	}
	
	.list_cell_title {
		color: #4A4A4A;
		font-size: 16px;
		margin-left: 10px;
		height: 44px;
		line-height: 44px;
	}

	.list_cell_right {
		display: flex;
		margin-right: 15px;
		width: 20px;
		height: 20px;
	}
	.list_cell_right1 {
		display: flex;
		right: 15px;
		width: 20px;
		height: 20px;
		position: absolute;
	}
	.list_cell_right_txt {
		margin-left: 15px;
		margin-right: 15px;
		display: flex;
		flex-direction: row-reverse;
		flex: 1;
		color: #4A4A4A;
		font-size: 16px;
	}


	
	


	

	
</style>
