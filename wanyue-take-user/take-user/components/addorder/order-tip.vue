<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="cancleBtn" @click="doClose(0)">{{i18n.cancel}}</text>
				<text class="titleText">{{i18n.shansong.jiaxiaofei}}</text>
				<text class="closeBtn" @click="doClose(1)">{{i18n.sure}}</text>			
			</view>
			<view class="contentView">
				<view scroll-y="true" class="scroll">
					<text v-for="(item,index) in typeArray" :key="index" class="scrol-item" @click="doSelcted(item,index)" :style=" selectIndex != index ? 'border:2rpx solid  #D9D9D9;background-color: #FFFFFF;color: #646464;' : 'border:2rpx solid  #FF5725;background-color: #FFEDE9;color: #FF5725;'">{{item.name}}</text>
				</view>
				
				<view class="bot-input-Class">
					<text class="bot-Text">{{i18n.shansong.qitajine}}</text>
					<image src="/static/warning.png" mode="" class="bot-image"></image>
					<text class="bot-Text" style="font-size: 24rpx;color: #989898;margin-left: 10rpx;">{{i18n.shansong.zuigao}}100</text>
					<text class="bot-Text" style="position: absolute; right: 100rpx;color: #323232;">¥</text>
					<input class="bot-Iput" type="number" :value="inputMoney" :placeholder="i18n.shansong.xiaofei" @input="input" maxlength="3" />
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/toolClass/WYToolClass.js'
	
	export default {
		computed: {
			i18n() {
				return getApp().globalData.$t('index')
			},
		},
		data() {
			return {
				windowHeight: 0,
				selectIndex:999999,
				typeArray:[],
				money:0,
				inputMoney:''
			}
		},
		props: {
			type: {
				type: Number,
				default: 0
			},
		},
		created() {
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			// this.typeArray = ['不加了','2元','5元','10元'];
			http.sendRequest('Tip.GetRule',{}).then(function(res){
				if(res.code == 0){
					that.typeArray = res.info
					console.log(that.typeArray)
				}
			})
		},
		methods:{
			doClose(e){
				if(e == 0){
					if(this.type == 9999){
						this.$emit('tipMoneyAdd', 0)
					}else{
						uni.$emit('tipMoneyAdd', 0)
					}
					
				}else{
					if(this.money > 0){
						if(this.type == 9999){
							this.$emit('tipMoneyAdd', this.money)
						}else{
							uni.$emit('tipMoneyAdd', this.money)
						}
					}else if(this.inputMoney > 0){
						
						if(this.type == 9999){
							this.$emit('tipMoneyAdd', this.inputMoney)
						}else{
							uni.$emit('tipMoneyAdd', this.inputMoney)
						}
						
					}else{
						if(this.type == 9999){
							this.$emit('tipMoneyAdd', 0)
						}else{
							uni.$emit('tipMoneyAdd', 0)
						}
					}
				}
				
			},
			doSelcted(item,index){
				this.selectIndex = index;
				if(index == 0){
					this.money = 0
				}else{
					this.money = item.money
				}
				this.inputMoney = ''
				uni.hideKeyboard()
			},
			input(e){
				if(e.detail.value > 100){
					this.inputMoney = '100'
				}else{
					this.inputMoney = e.detail.value
				}
				this.selectIndex = 999999
				this.money = 0
			},
			dsfsdffsds(){}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 480rpx;
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.heaerView{
		display: flex;
		flex-direction: row;
		height: 108rpx;
		/* border-bottom: 1px solid #f0f0f0; */
	}
	.cancleBtn{
		position: absolute;
		height: 40rpx;
		margin-top: 34rpx;
		margin-left: 20rpx;
		line-height: 40rpx;
		color: #989898;
		font-size: 34rpx;
		/* background-color: #007AFF; */
	}
	.titleText{
		height: 108rpx;
		line-height: 108rpx;
		margin-left: 160rpx;
		width: 430rpx;
		color: #323232;
		font-size: 18px;
		font-weight: bold;
		display:inline-block;
		text-align: center;
	}
	.closeBtn{
		position: absolute;
		height: 40rpx;
		margin-top: 34rpx;
		right: 20rpx;
		line-height: 40rpx;
		color: #323232;
		font-size: 34rpx;	
		}
	.contentView{
		display: flex;
		flex-direction: column;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
	}
	.scroll {
		margin-left: 20rpx;
		width: 710rpx;
		height: 200rpx;
		margin-top: 10rpx;
		/* position: absolute; */
		/* background-color: #FF5625; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		/* white-space: nowrap;
		display: flex;
		justify-content: flex-start; */
	}
	.scrol-item{
		/* display: inline-block; */
		width: 222rpx;
		height: 80rpx;
		border-radius: 6rpx;
		border-color: #D9D9D9;
		border-width: 2rpx;
		background-color: #FFFFFF;
		margin-right: 10rpx;
		margin-top: 12rpx;
		color: #646464;
		line-height: 80rpx;
		font-size: 24rpx;
		text-align: center;
	}
	
	.bot-input-Class{
		margin-top: 20rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 80rpx;
		border-radius: 8rpx;
		border-color: #FF5725;
		border-width: 2rpx;
		display: flex;
		flex-direction: row;
		
	}
	.bot-Text{
		margin-left: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #FF5725;
	}
	.bot-image{
		margin-left: 20rpx;
		height: 28rpx;
		margin-top: 26rpx;
		width: 28rpx;
		color: #FF5725;
	}
	.bot-Iput{
		position: absolute;
		margin-top:0;
		width: 80rpx;
		right: 0;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #323232;
		/* background-color: #007AFF; */
	}
</style>
