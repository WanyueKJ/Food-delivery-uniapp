<template>
	<view class="content" v-if="orderMsg">
		<view style="width: 100%;background-color: #FFFFFF;position: relative;"
			:style="'height:' + statusBarHeight + 'px;'">

			<view class="row" style="width: 100%;height: 48px;position: absolute;bottom: 0;">
				<image src="../../../static/back-left.png" mode="aspectFit"
					style="margin-left: 24rpx;margin-top: 19rpx;width: 60rpx;height: 60rpx;" @click="doBack()"></image>
				<view
					style="margin-left: 15px;height: 48px;font-size: 18px;line-height: 48px;color: #323232;font-weight: bold;width: 250rpx;flex: 1;">
					{{i18n.meishi.pingjia}}
				</view>
				<!-- #ifdef APP-PLUS -->
				<text
					style="margin-right: 15px;height: 48px;font-size: 16px;line-height: 48px;color: #FF5725;font-weight: bold;width: 120rpx;text-align: center;"
					@click="doSubmit()">{{i18n.mine.submit}}</text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<text
					style="height: 48px;font-size: 16px;line-height: 48px;color: #FF5725;font-weight: bold;width: 80rpx;text-align: center;"
					:style="'margin-right:' + (menuButtonWidth + 5) + 'px;'"
					@click="doSubmit()">{{i18n.mine.submit}}</text>
				<!-- #endif -->
			</view>

		</view>
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + (windowHeight - statusBarHeight) + 'px;'">
			
			<view class="" style="width: 100%;">
				<view class="column"
					style="margin-left: 15px;width: calc(100% - 30px);margin-top: 10px;min-height: 285px;background-color: #FFF;border-radius: 8px;">
					<view class="row"
						style="margin-left: 15px;width: calc(100% - 30px);height: 42px;border-bottom: 1px solid #f5f6f7;line-height: 42px;">
						<view class="" style="font-size: 16px;font-weight: bold;flex: 1;">
							{{i18n.order.shangjiamanyi}}
						</view>
						<view class="" style="font-size: 14px;color: #6F6F6F;"
							:style="order_anonymous == 1 ? 'color:#FF5725;' : ''" @click="shangjianiming()">
							{{i18n.order.nimingEVA}}
						</view>
					</view>
					<view class="row" style="margin-left: 15px;width: calc(100% - 30px);height: 70px;align-items: center;">
						<image :src="orderMsg.store.thumb" mode="aspectFill"
							style="width: 56px;height: 43px;border-radius: 2px;"></image>
						<view class="column" style="margin-left: 8px;">
							<view class="" style="font-size: 14px;color: #181818;">
								{{orderMsg.store.use_name}}
							</view>
			
						</view>
					</view>
					<view class="row" style="width: 100%;height: 40px;">
						<text
							style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;">{{i18n.toher.zongti}}</text>
						<starV tagstr="zongti" size=40 @change="onChange" :disabled="false" :value="order_overall_star"
							style="margin-left: 10px;padding-top: 9px;"></starV>
						<text style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;font-weight: bold;" v-if="order_overall_star > 0">{{evaWordList[Math.floor(order_overall_star == 0.5 ? order_overall_star : order_overall_star-1)]}}</text>
					</view>
					<view class="" style="width: 100%;" >
						<view class="row" style="width: 100%;height: 40px;">
							<text
								style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;">态度</text>
							<starV size=40 @change="onChange" :disabled="false" :value="order_taste_star"
								style="margin-left: 10px;padding-top: 9px;" tagstr="kouwei"></starV>
							<text style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;font-weight: bold;" v-if="order_taste_star > 0">{{evaWordList[Math.floor(order_taste_star == 0.5 ? order_taste_star : order_taste_star)]}}</text>
								
						</view>
			
						<view class="row" style="width: 100%;height: 40px;">
							<text
								style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;">质量</text>
							<starV size=40 @change="onChange" :disabled="false" :value="order_packaging_star"
								style="margin-left: 10px;padding-top: 9px;" tagstr="baozhuang"></starV>
							<text style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;font-weight: bold;" v-if="order_packaging_star > 0">{{evaWordList[Math.floor(order_packaging_star == 0.5 ? order_packaging_star : order_packaging_star)]}}</text>
			
						</view>
						
					</view>
			
					<view class="textView-eva-back" style="height: auto;"
						>
						
						<textarea show-confirm-bar="false" class="textarea-eva" style="height: 90px;" :value="comment"
							placeholder="评价店铺，帮助更多想买的人" @input="inputsj" @focus="goodsFocus" />
						<view class="row" style="width: 100%;align-items: center;flex-wrap: wrap;margin-top: 10px;">
							<view style="justify-content: center;align-items: center;position: relative;display: flex;"
								:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'" v-if="videodic.url">
								<image :src="videodic.thumb" mode="aspectFill" style="border-radius:4px;"
									:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth-12) + 'px;'">
								</image>
								<image src="../../static/images/delate.png" mode=""
									style="position: absolute;width:12px;height:12px;right: 0;top: 0;"
									@click="doDelateVideo()">
								</image>
								<view class="videoDuration" >
									<image src="../../../static/meishi/play.png" style="width: 8px;height: 8px;margin-top: 4px;margin-right: 3px;" mode=""></image>
									{{videodic.duration}}
								</view>
							</view>
							<view v-for="(item,index) in shopImglist" :key="index"
								style="justify-content: center;align-items: center;position: relative;display: flex;"
								:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'">
								<image :src="item" mode="aspectFill" style="border-radius:4px;"
									:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth-12) + 'px;'">
								</image>
								<image src="../../static/images/delate.png" mode=""
									style="position: absolute;width:12px;height:12px;right: 0;top: 0;"
									@click="doDelateShopImage(index)">
								</image>
							</view>
							<view class="column" style="justify-content: center;align-items: center;"
								:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'"
								@click="doAddImage('shangjia')" v-if="shopImglist.length < 9">
								<image src="../../static/images/addpic.png" mode="aspectFit"
									:style="'width:' + (picWidth - 12) + 'px;height:' + (picWidth - 12) + 'px;'"></image>
					
							</view>
							<view class="column" style="justify-content: center;align-items: center;"
								:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'"
								@click="doSelctedVideo('shangjia')" v-if="!videodic.url">
								<image src="../../static/images/addvideo.png" mode="aspectFit"
									:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth - 12) + 'px;'"></image>
					
							</view>
						</view>
					</view>
					<view v-for="(item,index) in orderMsg.product_cart" :key="index"
						style="width: 100%;margin-bottom: 20px;">
						<view class="row" style="width: 100%;height: 80px;align-items: center;">
							<image :src="item.product.image" mode="aspectFill"
								style="width: 50px;height: 50px;border-radius: 4px;margin-left: 10px;"></image>
							<view class="column" style="margin-left: 10px;justify-content: center;">
								<view class="" style="font-size: 14px;">
									{{item.product.use_name}}
								</view>
								<view class="row" style="margin-top: 8px;">
									<view class="row" style="align-items: center;margin-right: 20px;"
										@click="onclickmanyi(index+10000,1)">
										<image
											:src="1 == product_json[index].tags ? '../../static/images/manyi-s.png' : '../../static/images/manyi-n.png'"
											mode="" style="width: 21px;height: 21px;"></image>
										<view class="" style="font-size: 12px;margin-left: 5px;color: #323232;">
											满意
										</view>
									</view>
					
									<view class="row" style="align-items: center;margin-right: 20px;"
										@click="onclickmanyi(index+10000,0)">
										<image
											:src="0 == product_json[index].tags ? '../../static/images/zhongdeng-s.png' : '../../static/images/zhongdeng-n.png'"
											mode="" style="width: 21px;height: 21px;"></image>
										<view class="" style="font-size: 12px;margin-left: 5px;color: #323232;">
											中等
										</view>
									</view>
					
									<view class="row" style="align-items: center;margin-right: 20px;"
										@click="onclickmanyi(index+10000,-1)">
										<image
											:src="-1 == product_json[index].tags ? '../../static/images/bumanyi-s.png' : '../../static/images/bumanyi-n.png'"
											mode="" style="width: 21px;height: 21px;"></image>
										<view class="" style="font-size: 12px;margin-left: 5px;color: #323232;">
											不满意
										</view>
									</view>
					
								</view>
							</view>
					
						</view>
						<view class="textView-eva-back" style="height: auto;"
							>
							<textarea show-confirm-bar="false" class="textarea-eva" style="padding-top: 5px;" :style="(product_json[index].tags != 2) ? 'height: 90px;' : 'height: 30px;'" :id="index+10000"
								@input="inputProduct" placeholder="评价商品，帮助更多想买的人" />
							<view class="row"
								style="width: 100%;align-items: center;flex-wrap: wrap;margin-top: 10px;" v-if="product_json[index].tags != 2">
								<view
									style="justify-content: center;align-items: center;position: relative;display: flex;"
									:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'"
									v-if="product_json[index].video.url">
									<image :src="product_json[index].video.thumb" mode="aspectFill"
										style="border-radius:4px;"
										:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth-12) + 'px;'">
									</image>
									<image src="../../static/images/delate.png" mode=""
										style="position: absolute;width:12px;height:12px;right: 0;top: 0;"
										@click="doDelateProductVideo(index_j,index+10000)">
									</image>
									<view class="videoDuration">
										<image src="../../../static/meishi/play.png"
											style="width: 8px;height: 8px;margin-top: 4px;margin-right: 3px;"
											mode="">
										</image>
										{{product_json[index].video.duration}}
									</view>
								</view>
								<view v-for="(item,index_j) in product_json[index].pics" :key="index_j"
									style="justify-content: center;align-items: center;position: relative;display: flex;"
									:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'">
									<image :src="item" mode="aspectFill" style="border-radius:4px;"
										:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth-12) + 'px;'">
									</image>
									<image src="../../static/images/delate.png" mode=""
										style="position: absolute;width:12px;height:12px;right: 0;top: 0;"
										@click="doDelateProductImage(index_j,index+10000)">
									</image>
								</view>
								<view class="column" style="justify-content: center;align-items: center;"
									:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'"
									@click="doAddImage(index+10000)" v-if="shopImglist.length < 9">
									<image src="../../static/images/addpic.png" mode="aspectFit"
										:style="'width:' + (picWidth - 12) + 'px;height:' + (picWidth - 12) + 'px;'">
									</image>
								</view>
								<view class="column" style="justify-content: center;align-items: center;"
									:style="'width:' + picWidth + 'px;height:' + picWidth + 'px;'"
									@click="doSelctedVideo(index+10000)" v-if="!product_json[index].video.url">
									<image src="../../static/images/addvideo.png" mode="aspectFit"
										:style="'width:' + (picWidth-12) + 'px;height:' + (picWidth - 12) + 'px;'">
									</image>
					
								</view>
							</view>
						</view>
						
					
					</view>
			
			
					<view class="" style="width: 100%;height: 20px;">
			
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	// import starV from '../../../components/rate-star/rate.vue'
	import starV from '../../../components/banxing/banStar.vue'
	export default {
		components: {
			starV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				windowWidth: 0,
				statusBarHeight: 0,
				orderID: '',
				menuButtonWidth: 0,
				word: '',
				star: 0,
				shopImglist: [],
				orderMsg: null,
				rider_star: 0,
				rider_anonymous: 0,
				order_pics: [],
				comment: '',
				order_overall_star: 0,
				order_taste_star: 0,
				order_packaging_star: 0,
				order_distribution_star: 0,
				order_anonymous: 0,
				product_json: [],
				evaWordList:['非常差','差','一般','满意','非常满意'],
				picWidth: 0,
				videodic:{}
			}
		},
		onLoad(option) {
			var res = uni.getSystemInfoSync()
			var that = this
			that.orderID = option.orderID
			that.windowHeight = res.windowHeight
			that.windowWidth = res.windowWidth
			that.statusBarHeight = getApp().globalData.top + 48
			that.menuButtonWidth = getApp().globalData.menuButtonWidth
			that.picWidth = (res.windowWidth - 54) * 0.25
			that.requestOrderDeatiles()
			
		},
		methods: {
			requestOrderDeatiles() {
				var that = this
				that.http.sendRequest('MerchantStoreOrderEvaluate.GetEvaluate', {
					'id': that.orderID
				}).then(function(res) {
					if (res.code == 0) {
						that.orderMsg = res.info[0]
						// that.orderType = that.orderMsg.type
						console.log(that.orderMsg)
						for (var i = 0; i < that.orderMsg.product_cart.length; i++) {
							const pp = that.orderMsg.product_cart[i]
							var dic = {}
							dic.index = i + 10000
							dic.id = pp.product_id
							dic.product_attr_id = pp.product_attr_id
							dic.comment = ''
							dic.pics = []
							dic.tags = 2
							dic.video = {}
							that.product_json.push(dic)
						}
					} else {
						setTimeout(function() {
							that.doBack()
						}, 1000);
					}
				})
			},
			doBack() {
				uni.navigateBack({

				})
			},
			onChange(e) {
				console.log(e)
				if (e.tagstr == 'qishou') {
					this.star = e.value
				}
				if (e.tagstr == 'zongti') {
					this.order_overall_star = e.value
				}
				if (e.tagstr == 'kouwei') {
					this.order_taste_star = e.value
				}
				if (e.tagstr == 'baozhuang') {
					this.order_packaging_star = e.value
				}
				if (e.tagstr == 'peisong') {
					this.order_distribution_star = e.value
				}

			},
			shangjianiming() {
				if (this.order_anonymous == 1) {
					this.order_anonymous = 0
				} else {
					this.order_anonymous = 1
				}
			},
			qishouniming() {
				if (this.rider_anonymous == 1) {
					this.rider_anonymous = 0
				} else {
					this.rider_anonymous = 1
				}
			},
			doSubmit() {
				// console.log(this.product_json)
				// return
				var that = this
				that.http.sendRequest('MerchantStoreOrderEvaluate.Save', {
					'id': that.orderID,
					'rider_id': that.orderMsg.rider.id,
					'rider_star': that.star,
					'rider_comment': that.word,
					'rider_anonymous': that.rider_anonymous,
					'order_id': that.orderID,
					'order_pics': JSON.stringify(that.shopImglist),
					'comment': that.comment,
					'order_overall_star': that.order_overall_star,
					'order_taste_star': that.order_taste_star,
					'order_packaging_star': that.order_packaging_star,
					'order_distribution_star': that.order_distribution_star,
					'order_anonymous': that.order_anonymous,
					'product_json': JSON.stringify(that.product_json),
					'order_video': that.videodic.url ? JSON.stringify(that.videodic) : ''
				}).then(function(res) {
					if (res.code == 0) {
						that.doBack()
					}
				})
			},
			input(e) {
				this.word = e.detail.value
			},
			inputsj(e) {
				this.comment = e.detail.value
			},
			inputProduct(e) {
				var that = this
				console.log(e.detail.value, e.target.id)
				for (var i = 0; i < that.product_json.length; i++) {
					if (that.product_json[i].index == e.target.id) {
						that.product_json[i].comment = e.detail.value
						if(that.product_json[i].tags == 2){
							that.product_json[i].tags = 1
							that.$forceUpdate()
						}
					}
				}
			},
			onclickmanyi(id, mmmmm) {
				var that = this
			
				for (var i = 0; i < that.product_json.length; i++) {
					if (that.product_json[i].index == id) {
						that.product_json[i].tags = mmmmm
					}
				}
			},
			doDelateShopImage(index) {
				this.shopImglist.splice(index, 1)
			},
			doDelateProductImage(index, id) {
				var that = this
				for (var i = 0; i < that.product_json.length; i++) {
					if (that.product_json[i].index == id) {
						that.product_json[i].pics.splice(index, 1)
					}
				}
			},
			doAddImage(index) {
				console.log(index)
				var that = this
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						for (var i = 0; i < tempFilePaths.length; i++) {
							var path = tempFilePaths[i];
							if (index == 'shangjia') {
								if (that.shopImglist.length < 9) {
									that.uploadImageToservice(path, 'shangjia')
									// that.shopImglist.push(path)
								}
							} else {
								that.uploadImageToservice(path, index)
							}


						}

					}
				})


			},
			uploadImageToservice(path, id) {
				uni.showLoading({
					title: ' '
				})
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.id
					toolData.token = value.token
				}
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=App.Upload.Upload',
					filePath: path,
					name: 'file',
					formData: toolData,
					success(res) {
						console.log(res)
						uni.hideLoading()
						var data = JSON.parse(res.data)
						const url_all = data.data.info[0].url_all
						if (id == 'shangjia') {
							that.shopImglist.push(url_all)
						} else {
							console.log(id,that.product_json)
							for (var i = 0; i < that.product_json.length; i++) {
								if (that.product_json[i].index == id) {
									that.product_json[i].pics.push(url_all)
								}
							}
						}

					},
					fail: err => {
						uni.hideLoading()
					}
				})
			},
			goodsFocus(e){
				console.log(e.detail.height)
				// if(res.height < 0){
					that.bottomSpace = e.detail.height
				// }
			},
			productClick(item){
				console.log(item)
				this.comment = this.comment + '#' + item.product.use_name + '#'
			},
			doSelctedVideo(id) {
				var that = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						console.log(res)
						// #ifdef H5
						that.videodic = {
							duration: res.duration,
							path: res.tempFilePath,
							thumb: '',
							height: res.height > 0 ? res.height : 200,
							width: res.width > 0 ? res.width : 200
						}
						// that.imageArray = []
						// #endif
						// #ifndef H5
						if (res.duration > 0) {
			
							var thumb = '../../../static/logo.png';
							if(res.thumbTempFilePath){
								thumb = res.thumbTempFilePath
							}
							var min = Math.floor(res.duration / 60)
							if (min < 10) {
								min = '0' + min
							}
							var secronds = res.duration % 60
							if (secronds < 10) {
								secronds = '0' + secronds
							}
							var duration = min + ':' + secronds
			
							that.uploadVideoToservice(res.tempFilePath, id, duration, thumb)
						} else {
							uni.showToast({
								title: '请上传正确的视频',
								icon: 'none'
							})
						}
						// #endif
					}
				});
			},
			uploadVideoToservice(path, id, duration, thumb) {
				uni.showLoading({
					title: ' '
				})
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.id
					toolData.token = value.token
				}
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=App.Upload.Upload',
					filePath: path,
					name: 'file',
					formData: toolData,
					success(res) {
						console.log(res)
						uni.hideLoading()
						var data = JSON.parse(res.data)
						const url_all = data.data.info[0].url_all
						console.log(id, that.product_json)
						if (id == 'shangjia') {
							that.videodic.thumb = thumb
							that.videodic.path = url_all
							that.videodic.url = data.data.info[0].url
							that.videodic.duration = duration
							that.$forceUpdate()
						} else {
							for (var i = 0; i < that.product_json.length; i++) {
								if (that.product_json[i].index == id) {
									that.product_json[i].video.thumb = thumb
									that.product_json[i].video.path = url_all
									that.product_json[i].video.url = data.data.info[0].url
									that.product_json[i].video.duration = duration
									that.$forceUpdate()
								}
							}
						}
						
					},
					fail: err => {
						uni.hideLoading()
					}
				})
			},
			doDelateProductVideo(index, id) {
				var that = this
				for (var i = 0; i < that.product_json.length; i++) {
					if (that.product_json[i].index == id) {
						that.product_json[i].video = {}
						that.$forceUpdate()
					}
				}
			},
			doDelateVideo(){
				this.videodic = {}
				this.$forceUpdate()
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5f6f7;
		overflow: hidden;
	}

	.content {
		width: 100%;
		height: 100%;
	}

	.textView-eva-back {
		margin-left: 12px;
		/* margin-top: 10px; */
		width: calc(100% - 24px);
		height: 122px;
		border-radius: 4px;
		background-color: #F9F9F9;
	}

	.textarea-eva {
		/* padding: 10px 10px; */
		margin-top: 10px;
		margin-left: 10px;
		width: calc(100% - 20px);
		font-size: 15px;
		line-height: 15px;
		height: 122px;
		color: #323232;
	}

	.submit {
		width: calc(100% - 50px);
		margin-left: 25px;
		height: 42px;
		line-height: 42px;
		border-radius: 21px;
		font-size: 18px;
		color: #FFFFFF;
		background-color: #FF5725;
		text-align: center;
		margin-top: 40px;
		/* position: absolute;
		bottom: 60px; */
	}
	.goodsBack {
		background-color: #F9F9F9;
		border-radius: 2px;
		margin-left: 12px;
		align-items: center;
	
	}
	.lable_view {
		left: 0;
		width: 100%;
		height: 55px;
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
	}
	.lable_view_content {
		margin-top: 5px;
		width: 100%;
		height: 50px;
		background-color: #FFF;
		display: flex;
		flex-direction: row;
		box-shadow: 0px 0px 5px 5px rgba(50, 50, 59, 0.1);
		align-items: center;
	}
	.productName {
		height: 100%;
		margin-right: 10px;
		padding-left: 12px;
		padding-right: 12px;
		border-radius: 6px;
		border: 1px solid #FF5725;
		line-height: 100%;
		font-size: 13px;
		color: #FF5725;
	}
	.videoDuration {
		position: absolute;
		padding-left: 5px;
		padding-right: 5px;
		left: 10px;
		bottom: 10px;
		height: 16px;
		line-height: 16px;
		border-radius: 8px;
		background-color: rgba(0, 0, 0, 0.3);
		color: #FFF;
		font-size: 10px;
	}
</style>
