<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.toher.xiedianping"></wybar>
		<view class="column" style="margin-top: 10px;width: 100%;background-color: #FFF;">
			<view class="row nameBackView oneline" style="font-size: 18px;font-weight: bold;">
				{{storeName}}
			</view>
			<!-- <view class="row xingBack" style="margin-top: 8px;">
				<view class="" style="margin-right: 10px;">
					{{i18n.toher.zongti}}
				</view>
				<starv style="padding-top: 5px;" size=30 @change="onChange()" :disabled="false" tagstr="0"
					:value="zongtiV"></starv>
			</view> -->
			<view v-for="(item,index) in starArray" :key="index" class="row xingBack">
				<view class="" style="margin-right: 20px;">
					{{item.use_name}}
				</view>
				<starv style="padding-top: 8px;" size=38 @change="onChange" :disabled="false" :tagstr="index+'star'"
					value="5"></starv>
			</view>
			<!-- <view class="row xingBack">
				<view class="" style="margin-right: 10px;">
					{{i18n.meishi.kouwei}}
				</view>
				<starv style="padding-top: 5px;" size=30 @change="onChange()" :disabled="false" tagstr="1"
					:value="kouweiV"></starv>
			</view>
			<view class="row xingBack">
				<view class="" style="margin-right: 10px;">
					{{i18n.index.fuwu}}
				</view>
				<starv style="padding-top: 5px;" size=30 @change="onChange()" :disabled="false" tagstr="2" :value="fuwuV">
				</starv>
			</view> -->
			<view class="column"
				style="width: calc(100% - 30px);margin-left: 15px;background-color: #f5f6f7;border-radius: 4px;margin-top: 10px;">
				<textarea name="" id="" cols="30" rows="10" :placeholder="i18n.toher.xiepingjiaTips"
					style="margin-left: 30rpx;margin-top: 20rpx;width: 630rpx;height: 100px;" @input="input"></textarea>
				<view class="row" style="flex-wrap: wrap;margin-left: 30rpx;width: 630rpx;margin-top: 10px;">
					<view v-for="(item,index) in imgList" :key="index"
						style="width: 210rpx;height: 210rpx;align-items: center;justify-content: center;display: flex;position: relative;margin-top: 10rpx;margin-bottom: 10rpx;">
						<image :src="item" mode="aspectFill" style="width: 195rpx;height: 195rpx;border-radius: 8rpx;">
						</image>
						<image @click="delateImage(index)" src="../../../static/images/delate.png" class=""
							style="position: absolute;right: 0;top: 0;width: 32rpx;height: 32rpx;border-radius: 16rpx;">

						</image>
					</view>
					<view class="column"
						style="align-items: center;justify-content: center;width: 210rpx;height: 210rpx;margin-top: 10rpx;margin-bottom: 10rpx;"
						v-if="imgList.length < 9" @click="doAddImage()">
						<view class="addBtn column" style="width: 195rpx;height: 195rpx;border-radius: 8rpx;">
							<image src="../../../static/images/picUp-t.png" mode="aspectFit"
								style="width: 28px;height: 28px;"></image>
							<view class="" style="font-size: 12px;color: #989898;">
								{{i18n.mine.shangchuantupian}}
							</view>
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
	import starv from "@/components/banxing/banStar.vue"
	export default {
		components: {
			wybar,
			starv
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
			this.storeName = option.name
			this.getstartype()
		},
		data() {
			return {
				rightColor: '#AAA',
				imgList: [],
				storeName: '',
				zongtiV: 5,
				kouweiV: 5,
				fuwuV: 5,
				storeID: '',
				commentStr:'',
				starArray:[]
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			getstartype() {
				var that = this
				that.http.sendRequest('LookingShop.GetEvaluateOptions', {
					store_id: that.storeID,
				}).then(function(res) {
					if (res.code == 0) {
						that.starArray = res.info[0]
					}
				})
			},
			submit() {
				if (this.rightColor == '#FF5725') {
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
										that.xiedianping(linkList)
									}

								},
								fail: err => {
									uni.hideLoading()
								}
							})
						}

					} else {
						that.xiedianping(linkList)
					}
				}
			},
			input(e){
				this.commentStr = e.detail.value
				this.checkStatus()
			},
			xiedianping(list) {
				var that = this
				var dic = {
					store_id: that.storeID,
					comment: that.commentStr,
					pics: JSON.stringify(list)
				}
				if(that.starArray.length == 3){
					dic.overall_star = that.zongtiV,
					dic.taste_score = that.kouweiV,
					dic.service_score = that.fuwuV
				}else if(that.starArray.length == 2){
					dic.overall_star = that.zongtiV,
					dic.taste_score = that.kouweiV
				}else if(that.starArray.length == 1){
					dic.overall_star = that.zongtiV
				}else{
					
				}
				that.http.sendRequest('LookingShop.ReplySave', dic).then(function(res) {
					console.log(res)
					if (res.code == 0) {
						uni.showToast({
							title:res.msg,
							icon:"none"
						})
						setTimeout(function() {
							uni.$emit('reloadevazd')
							that.back()
						}, 10);
						
					}
				})
			},
			delateImage(index) {
				this.imgList.splice(index, 1)
				this.checkStatus()
			},
			doAddImage() {
				var that = this
				uni.chooseImage({
					count: 9 - that.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							if (that.imgList.length < 9) {
								that.imgList.push(path)
							}

						}
						that.checkStatus()
					}
				})
			},
			checkStatus() {
				if (this.commentStr.length > 0) {
					this.rightColor = '#FF5725'
				} else {
					this.rightColor = '#AAA'
				}
			},
			onChange(e) {
				console.log(e)
				if (e.tagstr == '0star') {
					this.zongtiV = e.value
				} else if (e.tagstr == '1star') {
					this.kouweiV = e.value
				} else {
					this.fuwuV = e.value
				}
				console.log(this.zongtiV, this.kouweiV, this.fuwuV)
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
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

	.xingBack {
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 38px;
		line-height: 38px;
		font-size: 14px;
		align-items: center;
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
		background-color: #f5f6f7;
	}
</style>
