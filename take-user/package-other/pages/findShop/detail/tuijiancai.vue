<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.toher.tuijiancai"></wybar>
		<view class="column" style="margin-top: 10px;width: 100%;background-color: #FFF;">
			<view class="row nameBackView">
				<view class="" style="font-size: 15px;">
					{{i18n.toher.caiming}}
				</view>
				<input type="text" :value="nameStr" @input="input" :placeholder="i18n.toher.caimingTip" style="margin-left: 10px;height: 100%;font-size: 13px;margin-right: 10px;flex: 1;">
			</view>
			<view class="row" style="flex-wrap: wrap;margin-left: 30rpx;width: 690rpx">
				<view v-for="(item,index) in imgList" :key="index" style="width: 172.5rpx;height: 172.5rpx;align-items: center;justify-content: center;display: flex;position: relative;margin-top: 10rpx;margin-bottom: 10rpx;">
					<image :src="item" mode="aspectFill" style="width: 155rpx;height: 155rpx;border-radius: 8rpx;"></image>
					<image @click="delateImage(index)" src="../../../static/images/delate.png" class="" style="position: absolute;right: 0;top: 0;width: 32rpx;height: 32rpx;border-radius: 16rpx;">
						
					</image>
				</view>
				<view class="column" style="align-items: center;justify-content: center;width: 172.5rpx;height: 172.5rpx;margin-top: 10rpx;margin-bottom: 10rpx;" v-if="imgList.length < 9" @click="doAddImage()">
					<view class="addBtn column" style="width: 155rpx;height: 155rpx;border-radius: 8rpx;">
						<image src="../../../static/images/picUp-t.png" mode="aspectFit" style="width: 28px;height: 28px;"></image>
						<view class="" style="font-size: 12px;color: #989898;">
							{{i18n.mine.shangchuantupian}}
						</view>
					</view>

				</view>
				
			</view>
			
		</view>
	<view class="save" :style="'color:' + rightColor + ';'"  @click="submit()">提交</view>
	</view>
</template>

<script>
	import wybar from "@/components/wybar/wyBar.vue"
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
				
		},
		onLoad(option) {
			this.storeID = option.id
			
		},
		data() {
			return {
				rightColor:'#AAA',
				imgList:[],
				nameStr:'',
				storeID:''
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			input(e){
				console.log(e.detail.value)
				this.nameStr = e.detail.value
				this.checkStatus()
			},
			submit(){
				if(this.rightColor == '#FF5725'){
					console.log(12121312)
					var linkList = []
					var that = this
					const value = uni.getStorageSync('userinfo');
					var toolData = {}
					if (value) {
						toolData.uid = value.id
						toolData.token = value.token
					}
					if (this.imgList.length > 0) {
						
						for (var i = 0; i < this.imgList.length; i++) {
							
							uni.uploadFile({
								url: getApp().globalData.weburl + 'api/?s=App.Upload.Upload',
								filePath: this.imgList[i],
								name: 'file',
								formData: toolData,
								success(res) {
									console.log(res)
									uni.hideLoading()
									var data = JSON.parse(res.data)
									linkList.push(data.data.info[0].url)
									if (linkList.length == that.imgList.length) {
										that.tujiancai(linkList)
									}
									
								},
								fail: err => {
									uni.hideLoading()
								}
							})
						}
						
					}else{
						that.tujiancai(linkList)
					}
				}
			},
			tujiancai(list){
				var that = this
				that.http.sendRequest('LookingShop.ProductSave', {
					store_id:that.storeID,
					name:that.nameStr,
					image:JSON.stringify(list)
				}).then(function(res) {
					if (res.code == 0) {
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
						setTimeout(function() {
							uni.$emit('reloadtjczd')
							that.back()
						}, 10);
					}
				})
			},
			delateImage(index){
				this.imgList.splice(index,1)
				this.checkStatus()
			},
			doAddImage(){
				var that = this
				uni.chooseImage({
					count: 9 - that.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							if(that.imgList.length < 9){
								that.imgList.push(path)
							}
							
						}
						that.checkStatus()
					}
				})
			},
			checkStatus(){
				if(this.nameStr.length > 0 && this.imgList.length > 0)	{
					this.rightColor = '#FF5725'
				}else{
					this.rightColor = '#AAA'
				}
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F6F7;
		overflow: hidden;
	}
	.nameBackView {
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 45px;
		line-height: 45px;
		align-items: center;
		border-bottom: 0.5px solid #D6DADE;
	}
	.addBtn {
		align-items: center;
		justify-content: center;
		border: 1px dashed #989898;
	}
	.save{
		position: absolute;
		left: 15px;
		right: 15px;
		font-size: 16px;
		bottom: 30px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		background-color: #FFF;
	}
</style>
