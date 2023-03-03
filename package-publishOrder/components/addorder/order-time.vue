<template>
	<view class="uni-mask-nvue" :style="'height:' + windowHeight + 'px;'" @click="dsfsdffsds()">
		<view class="showView">
			<view class="heaerView">
				<text class="titleText">{{i18n.postorder.qujiantime}}</text>
				<image src="/static/wy-close.png" mode="" class="closeBtn" @click="doClose"></image>
			</view>
			<view class="contentView" v-if="timeArray.length > 0">
				<view class="leftView">
					<text v-for="(item,index) in timeArray" :key="index" class="leftItem" @click="cliclDay(index)" :style=" selectIndex == index ? 'background-color:#ffffff' : 'background-color:#f9f9f9'">{{item.name}}</text>
				</view>
				<scroll-view scroll-y="1" class="rightView">
					<text v-for="(item,index) in timeArray[selectIndex].list" :key="index" class="timeLabelItem oneline" @click="cliclTime(item)" :style=" (selectIndex == 0 && index == 0) ? 'color:#00C1DE' : 'color:#323232'">{{item.time}}</text>
				</scroll-view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import http from '../../../toolClass/WYToolClass.js'
	export default {
		data() {
			return {
				windowHeight: 0,
				selectIndex:0,
				timeArray:[],
				titleStr:'',
				currentTime:{}
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		props: {
			
		},
		created() {
			this.getCurrentTime()
			var that = this
			that.windowHeight = getApp().globalData.windowHeight
			http.sendAppRequest('Helpsend.GetTimes').then(function(res){
				if(res.code == 0){
					var arr = res.info
					var dic = arr[0]
					var list = dic.list
					//添加立即取件
					list.unshift(that.currentTime)
					// console.log(res.info)
					that.timeArray = res.info
					// console.log(that.timeArray)
					that.$forceUpdate()
				}
			})
		},
		methods:{
			cliclDay(e){
				this.selectIndex = e
			},
			doClose(){
				this.$emit('timeSelcted', 0)
			},
			cliclTime(item){
				if(this.selectIndex == 0){
					item.tian = this.i18n.postorder.today
				}else{
					item.tian = this.i18n.postorder.tommow
				}
				this.$emit('timeSelcted', item)
			},
			getCurrentTime(){
				var date = new Date()
				var hour = date.getHours()
				var min = date.getMinutes()
				var time = String(hour)+':'+String(min)
				// var servertime = date.getTime()
				this.currentTime = {"time":this.i18n.postorder.qujian,"servetime":'0'}
				// console.log(servertime)
				// console.log(time)
				
				
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
</style>
