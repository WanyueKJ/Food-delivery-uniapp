<template>
	<view>
		<view class="day">
			<view v-for="(item,index) in data" :key="index"  class="week" @click="selectedWeekday(item,index)">
				<image v-show="item.status" src="../../static/day@2x.png" mode="aspectFill"></image>
				<view class="txt1">{{item.name}}</view>
			</view>
		</view>
		<view class="inputBackView">
			<view class="title">{{i18n.shop.starttime}}</view>
			<picker @change="bindPickerChange" :value="index" :range="hours">
				<view class="rightView row">
					<view class="rightTxt">{{starttime}}</view>
					<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="img" @click="selectedStartTime()"></image>
				</view>
			</picker>
		</view>
		<view class="inputBackView">
			<view class="title">{{i18n.shop.endTime}}</view>
			<picker @change="bindPickerChange" :value="index" :range="hours">
				<view class="rightView row">
					<view class="rightTxt">{{endTime}}</view>
					<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="img" @click="selectedEndTime()"></image>
				</view>
			</picker>
		</view>
		<view class="save" @click="save()">{{i18n.mine.save}}</view>
		
		<!-- <picker-view v-show="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
		    <picker-view-column>
		         <view class="item" v-for="(item,index) in hours" :key="index">{{item}}</view>
		    </picker-view-column>
		            
		</picker-view> -->
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
				data:[],
				starttime:'00:00',
				endTime:'24:00',
				visible:false,
				isStart:true,
				indicatorStyle: `height: 50px;`,
				hours:[],
				opendatesArr:[],
				index:''
			}
		},
			
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.time
			})
			this.data = [{"name":this.i18n.shop.Mon,"status":0},
						 {"name":this.i18n.shop.Thu,"status":0},
						 {"name":this.i18n.shop.Wen,"status":0},
						 {"name":this.i18n.shop.Thir,"status":0},
						 {"name":this.i18n.shop.Fri,"status":0},
						 {"name":this.i18n.shop.Sat,"status":0},
						 {"name":this.i18n.shop.Sun,"status":0},]
			var dic = JSON.parse(e.param)
			console.log(dic)
			var opendates = dic.open_date
			if(opendates && opendates.length>0 && opendates != 0){
				this.opendatesArr = opendates
				for (let i = 0; i < opendates.length; i++) {
					var date = opendates[i]
					var dateDic = this.data[date-1]
					dateDic.status = 1
				}
			}
			
			var timeArr = dic.open_time
			if(timeArr){
				this.starttime = timeArr[0]
				this.endTime = timeArr[1]
			}
			for (let i = 1; i < 25; i++) {
				if(i<10){
					var time1 = '0'+i+':00'
					this.hours.push(time1)
					var time2 = '0'+i+':30'
					this.hours.push(time2)
				}else{
					var time1 = i+':00'
					this.hours.push(time1)
					var time2 = i+':30'
					this.hours.push(time2)
				}	
			}
		},
		
		methods: {
			selectedStartTime(){
				this.isStart = true
				this.visible = true
			},
			selectedEndTime(){
				this.isStart = false
				this.visible = true
			},
			save(){
				var timeStr = JSON.stringify([this.starttime,this.endTime])
				var dateStr = JSON.stringify(this.opendatesArr)
				var param = {'open_date':dateStr,
							 'open_time':timeStr}
				console.log(param)
				this.http.sendRequest('MerchantStore.Update',param).then(function(data) {
					if(data.code == 0){
						uni.navigateBack()
					}
				})

			},
			selectedWeekday(item,index){
				const weekend = String(index+1)
				item.status = !item.status
				if(item.status == 1){
					console.log(item.status)
					if(!this.opendatesArr.includes(weekend)){
						this.opendatesArr.push(weekend)
					}
				}else{
					console.log(item.status)
					if(this.opendatesArr.includes(weekend)){
						const pos = this.opendatesArr.indexOf(weekend)
						this.opendatesArr.splice(pos,1)
						
					}
				}
			},
			bindPickerChange: function(e) {
			    // console.log('picker发送选择改变，携带值为', e.detail.value)
			    this.index = e.detail.value
				console.log(this.isStart)
				if(this.isStart){
					this.starttime = this.hours[this.index]
				}else{
					this.endTime = this.hours[this.index]
				}
					
				
			},
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;	
	}
	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}	
	.save{
		margin-left: 15px;
		margin-right: 15px;
		font-size: 16px;
		margin-top: 200px;
		margin-bottom: 30px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		color: #ffffff;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		background-color: #00C1DE;
	}
	.day{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		margin-bottom: 20px;
	}
	.week{
		border: 1px solid #00C1DE;
		border-radius: 5px;
		width: 80px;
		height: 40px;
		margin-top: 10px;
		margin-left: 10px;
		display: flex;
		align-items: center;
		position: relative;
	}
	.txt1{
		color: #181818;
		font-size: 16px;
		text-align: center;
		position: absolute;
		width: 100%;
		align-items: center;
	}
	.week image{
		width: 80px;
		height: 40px;
	}
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
	}
	.title{
		font-size: 16px;
		text-align: left;
		color: #181818;
		margin-left: 15px;
	}
	.rightView{
		align-items: center;
		margin-left: 20px;
		margin-right: 15px;
		flex: 1;
		height: 100%;
	}
	.rightTxt{
		font-size: 16px;
		text-align: right;
		color: #181818;
		position: absolute;
		right: 55px;
	}
	.img{
		width: 20px;
		height: 20px;
		position: absolute;
		right: 20px;
	}
	
</style>
