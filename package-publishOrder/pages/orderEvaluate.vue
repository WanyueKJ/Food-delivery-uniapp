<template>
	<view class="content">
		<view style="width: 750rpx;background-color: #FFFFFF;position: relative;"
			:style="'height:' + statusBarHeight + 'px;'">
			
			<view class="row" style="width: 750rpx;height: 48px;position: absolute;bottom: 0;">
				<image src="../../static/back-left.png" mode="aspectFit" style="margin-left: 24rpx;margin-top: 19rpx;width: 60rpx;height: 60rpx;" @click="doBack()"></image>
				<view
					style="margin-left: 15px;height: 48px;font-size: 18px;line-height: 48px;color: #323232;font-weight: bold;width: 250rpx;flex: 1;">{{i18n.titles.orderevalute}}</view>
					<!-- #ifdef APP-PLUS -->
					<text style="margin-right: 15px;height: 48px;font-size: 16px;line-height: 48px;color: #00C1DE;font-weight: bold;width: 120rpx;text-align: center;" @click="doSubmit()">{{i18n.shop.submit}}</text>
					<!-- #endif -->
					
			</view>
		
		</view>
		<view class="column" style="margin-left: 15px;width: calc(100% - 30px);margin-top: 10px;height: 285px;background-color: #FFF;border-radius: 8px;">
			<view class="row" style="width: 100%;height: 40px;">
				<text style="margin-left: 12px;height: 40px;line-height: 40px;color: #323232;font-weight: bold;">{{i18n.index.orderpeisong}}</text>
				<starV size = 40 @change="onChange" :disabled = "false" :value = 0 style="margin-left: 10px;padding-top: 9px;"></starV>
				
			</view>
			<view class="textView-eva-back">
				<textarea class="textarea-eva"  :value="word" :placeholder="i18n.postorder.evaluetrans" @input="input"/>
			</view>
		</view>
	</view>
</template>

<script>
	// import starV from '../../../components/rate-star/rate.vue'
	import starV from '../../components/banxing/merbanStar.vue'
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
				word:'',
				star:0,
				shopImglist:[]
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
			
		},
		methods: {
			doBack(){
				uni.navigateBack({
					
				})
			},
			onChange(e){
				console.log(e)
				this.star = e.value
			},
			doSubmit(){
				var that = this
				that.http.sendAppRequest('Orders.Evaluate',{
					'orderid':that.orderID,
					'star':that.star,
					'content':that.word
					}).then(function(res){
					if(res.code == 0){
						uni.navigateBack({
							
						})
					}
				})
			},
			input(e){
				this.word = e.detail.value
			},
			doDelateShopImage(index){
				this.shopImglist.splice(index,1)
			},
			doAddImage(index){
				var that = this
				if(index == 0){
					uni.chooseImage({
						count: 5 - that.shopImglist.length,
						sizeType: ['original', 'compressed'],
						sourceType: ['album', 'camera'],
						success: function(res) {
							let tempFilePaths = res.tempFilePaths;
							for (var i = 0; i < tempFilePaths.length; i++) {
								var path = tempFilePaths[i];
								if(that.shopImglist.length < 5){
									that.shopImglist.push(path)
								}
								
							}
							
						}
					})
				}
				
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5f6f7;
		/* overflow: hidden; */
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.textView-eva-back{
		margin-left: 12px;
		/* margin-top: 10px; */
		width: calc(100% - 24px);
		height: 122px;
		border-radius: 4px;
		background-color: #FAFAFA;
	}
	.textarea-eva{
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
		background-color: #00C1DE;
		text-align: center;
		margin-top: 40px;
		/* position: absolute;
		bottom: 60px; */
	}
</style>
