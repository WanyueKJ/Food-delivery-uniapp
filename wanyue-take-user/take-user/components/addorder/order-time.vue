<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="titleText">{{titleStr}}</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose"></image>
			</view>
			<view class="contentView" v-if="timeArray.length > 0">
				<view class="leftView">
					<text v-for="(item,index) in timeArray" :key="index" class="leftItem" @click="cliclDay(index)" :style=" selectIndex == index ? 'background-color:#ffffff' : 'background-color:#f9f9f9'">{{item.name}}</text>
				</view>
				<scroll-view scroll-y="1" class="rightView">
					<text v-for="(item,index) in timeArray[selectIndex].list" :key="index" class="timeLabelItem onelinele" @click="cliclTime(item)" :style=" (selectIndex == 0 && index == 0) ? 'color:#FF5725' : 'color:#323232'">{{item.time}}</text>
				</scroll-view>
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
				selectIndex:0,
				timeArray:[],
				titleStr:''
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
			console.log(that.type)
			var url = ''
			if(that.type == 3){
				that.titleStr = that.i18n.meishi.songdashijian
				url = 'Helpbuy.GetTimes'
			}else if(that.type == 4){
				that.titleStr = that.i18n.shansong.paiduishijian
				url = 'Helpqueue.GetTimes'
			}else if(that.type == 5){
				that.titleStr = that.i18n.shansong.bangbanshijian
				url = 'Helpwork.GetTimes'
			}else{
				that.titleStr = that.i18n.shansong.qujianshijian
				url = 'Helpsend.GetTimes'
			}
			http.sendRequest(url,{}).then(function(res){
				if(res.code == 0){
					that.timeArray = res.info
					console.log(that.timeArray)
					that.$forceUpdate()
				}
			})
		},
		methods:{
			cliclDay(e){
				this.selectIndex = e
			},
			doClose(){
				uni.$emit('timeSelcted', 0)
			},
			cliclTime(item){
				var that = this
				if(that.selectIndex == 0){
					item.tian = that.i18n.shansong.jintian
				}else{
					item.tian = that.i18n.shansong.mingtian
				}
				uni.$emit('timeSelcted', item)
			},
			dsfsdffsds(){}
		}
	}
</script>

<style>
	.showView {
		width: 750rpx;
		height: 800rpx;
		border-radius: 32rpx 32rpx 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.heaerView{
		display: flex;
		flex-direction: row;
		height: 108rpx;
		border-bottom: 1px solid #f0f0f0;
	}
	.titleText{
		height: 108rpx;
		line-height: 108rpx;
		margin-left: 160rpx;
		width: 430rpx;
		color: #323232;
		font-size: 36rpx;
		font-weight: bold;
		display:inline-block;
		text-align: center;
	}
	.closeBtn{
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		margin-top: 34rpx;
		right: 20rpx;
		/* margin-left: 40rpx; */
		/* background-color: #007AFF; */
	}
	.contentView{
		display: flex;
		flex-direction: row;
		/* top: 54px; */
		bottom: 0px;
		width: 750rpx;
		left: 0;
	}
	.leftView{
		margin-left: 0;
		width: 200rpx;
		background-color: #F9F9F9;
		height: 692rpx;
		display: flex;
		flex-direction: column;
	}
	.leftItem{
		width: 200rpx;
		height: 100rpx;
		line-height: 100rpx;
		color: #323232;
		font-size: 15px;
		font-weight: bold;
		text-align: center;
	}
	.rightView{
		margin-left: 40rpx;
		width: 480rpx;
		height: 692rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	.timeLabelItem{
		width: 480rpx;
		height: 100rpx;
		line-height: 100rpx;
		color: #323232;
		font-size: 16px;
	}
	.onelinele {
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		/* white-space: nowrap; */
		word-wrap: break-word;
		lines: 1;
		white-space: nowrap;
	
	}
	
</style>
