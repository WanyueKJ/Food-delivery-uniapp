<template>
	<view>
		<wybar @clickLeft="back" :titleText="i18n.shop.pics" :rightText="i18n.mine.save" @clickRight="save"></wybar>
		<view class="tip">{{i18n.shop.pictip}}</view>
		
		<view class="pictures row">
			<view v-for="(item,index) in imgList" :key="index" style="width: 82px;height: 82px;align-items: center;justify-content: center;display: flex;position: relative;margin-bottom: 10px;">
				<image :src="item" mode="aspectFill" style="width: 64px;height: 64px;"></image>
				<image @click="delateImage(index)" src="../../static/deletepic@2x.png" class="" style="position: absolute;right: 0;top: 0;width: 20px;height: 20px;border-radius: 10px;">
				</image>			
			</view>
			<image v-if="imgList.length < 1" @click="doAddImage()" src="../../static/addpic@2x.png" mode="aspectFit" style="width: 64px;height: 64px;margin-left: 15px;margin-top: 7px;"></image>	
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
				isAdd:true,
				maxCount:1
			}
		},
		onLoad(option) {
			var arr = JSON.parse(option.picArr)
			console.log(arr)
			if(arr.length == 0){
				this.isAdd = true
			}else{
				this.isAdd = false
				this.imgUrls = this.imgUrls.concat(arr)
				this.imgList = this.imgList.concat(arr)
			}
		},
		methods: {
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
				let index = 0
				if(this.isAdd){
					index = 0
				}else{
					if(that.imgUrls.length == 0){
						index = 0
					}else{
						index = that.imgList.length - that.imgUrls.length-1	
					}
				}
				
				
				if(index < 0 && that.imgList.length >= 0){
					that.submit()
					return
				}
				console.log(index,that.imgList)
				for(let i = index; i < that.imgList.length; i++){
					uni.uploadFile({
						url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
						filePath:that.imgList[i],
						name: 'file',
						formData: toolData,
						success(res) {
							uni.hideLoading()
							var data = JSON.parse(res.data)
							
							var img = data.data.info[0].url_all
							console.log(img)
							that.imgUrls.push(img)
							if(that.imgUrls.length == that.imgList.length){
								that.submit()
							}
						},
						fail: err => {
							console.log(err)
							uni.hideLoading()
						}
					})
				  }
			},
			submit() {
				console.log("--$emit-goodsPics-->",this.imgUrls)
				uni.$emit('goodsPics',this.imgUrls)
				uni.navigateBack()
			},
			delateImage(index){
				console.log(index,this.imgList,this.imgUrls)
				if(this.add){
					this.imgList.splice(index,1)
				}else{
					this.imgList.splice(index,1)
					if(index < this.imgUrls.length){
						this.imgUrls.splice(index,1)
					}
					console.log(index,this.imgList,this.imgUrls)
				}
			},
			doAddImage(){
				var that = this
				
				uni.chooseImage({
					count: that.maxCount - that.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						console.log(that.imgList,that.imgUrls)
						
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							
							if(that.imgList.length < that.maxCount){
								that.imgList.push(path)
							}
							console.log(that.imgList,that.imgUrls)
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
		padding-left: 15px;
		height: 40px;
		font-size: 12px;
		text-align: left;
		color: #aaaaaa;
		line-height: 40px;
	}
	.pictures{
		flex-wrap: wrap;
		padding-right: 15px;
		padding-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		height: 180px;
	}
</style>
