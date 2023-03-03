<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.guanggao" :rightText="i18n.shop.submit" @clickRight="save"></wybar>
		<view class="tip">{{i18n.shop.pictip}}</view>
		<view class="pictures row">
			<view v-for="(item,index) in imgList" :key="index" style="margin-right: 5px;width:159px;height: 125px;align-items: center;display:flex;position: relative;margin-bottom:10px">
				<image :src="item" mode="aspectFill" style="width: 149px;height: 109px;margin-top: 8px;margin-right: 5px;"></image>
				<image v-if="!item.includes('https')" @click="delateImage(index)" src="../../static/deletepic@2x.png" style="position: absolute;right: 0;top: 0;width: 20px;height: 20px;border-radius: 10px;">
				</image>			
			</view>
			<image v-if="imgList.length < maxCount" @click="doAddImage()" src="../../static/addEnPic@2x.png" mode="aspectFit" style="width: 169px;height: 109px;margin-top: 10px;margin-bottom: 8px;"></image>	
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
				imgList:[],
				imgUrls:[],
				maxCount:1
			}
		},
		onLoad() {
			// this.getData()
		},
		methods: {
			getData(){
				var that = this
				that.http.sendRequest('MerchantStore.Read').then(function(data) {
					console.log(data)
					// if(data.code == 0){
						var dic = data.info[0]
						that.imgList = dic.environment
						that.imgUrls = dic.environment
						console.log(that.imgList)
						
					// }
				})
			},
			back(){
				uni.navigateBack()
			},
			save(){
				uni.showLoading({
					title: this.i18n.mine.shangchuanzhong,
					mask: false
				});
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.uid
					toolData.token = value.token
				}
				var index = 0
				// if(that.imgUrls.length>0){
				// 	index = that.imgList.length-that.imgUrls
				// }else{
					
				// }
				  for(let i = 0; i < that.imgList.length; i++){
					uni.uploadFile({
						url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
						filePath:that.imgList[i],
						name: 'file',
						formData: toolData,
						success(res) {
							uni.hideLoading()
							var data = JSON.parse(res.data)
							var img = data.data.info[0].url_all
							that.imgUrls.push(img)
							if(that.imgUrls.length == that.imgList.length){
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
				let param = {'banner':JSON.stringify(that.imgUrls)}
				this.http.sendRequest('Users.Update',param).then(function(data) {
					if(data.code == 0){
						uni.navigateBack()
					}
				})
			},
			delateImage(index){
				this.imgList.splice(index,1)
			},
			doAddImage(){
				var that = this
				uni.chooseImage({
					count: that.maxCount - that.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							if(that.imgList.length < 5){
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
	page{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.tip{
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
	.pictures{
		flex-wrap: wrap;
		padding-right: 15px;
		padding-left: 15px;
		margin-top: 15px;
		width: calc(100% - 30px);
		background-color: white;
	}
</style>
