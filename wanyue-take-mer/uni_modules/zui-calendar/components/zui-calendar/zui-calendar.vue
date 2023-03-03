<template>
	<view>
		<view class="date-box">
			<view class="box-list" :style="{'margin-bottom' : list.length > 0 ? '20rpx' : '0'}">
				<view class="date-top">
					<view class="icon left-icon" @click="LastYear">
						<view class="iconfont icon-jiantou_xiangzuoliangci"></view>
					</view>
					<view class="conter-text">
						<view class="icon left-icon" @click="LastMonth">
							<view class="iconfont icon-xiangzuo1"></view>
						</view>
						<text class="month">{{year}}-{{month}}</text>
						<view class="icon rigth-icon" @click="NextMonth">
							<view class="iconfont icon-xiangyou1"></view>
						</view>
					</view>
					<view class="icon rigth-icon" @click="NextYear">
						<view class="iconfont icon-jiantou_xiangyouliangci"></view>
					</view>
				</view>
				<view class="date-week">
					<view class="week-item" v-for="item in weekList" :key="item"><text>周{{item}}</text></view>
				</view>
				<view class="day-content" :style="{height: isOpen ? '100rpx' : 'auto'}" v-if="dayList.length > 0">
					<view class="day-item day-month" v-if="!isOpen"><text>{{month < 10 ? `0${month}` : month}}</text></view>
					<view 
						class="day-item" 
						v-for="(item, index) in dayList"
						:key="index"
						:data-index="index"
						@click="toActive(item, index)">
						<text class="day-text" v-if="item.day" :class="{ 'actives' : item.day === day }" >{{item.day ? item.day : ''}}</text>
						<text class="value-text" v-if="item.data.status">{{item.data.value}}</text>
						<text class="value-text text-red" v-else>{{item.data.value}}</text>
						<text class="day-dot" v-if="item.data.dot && item.data.active"></text>
						<text class="day-dot dot-gray" v-if="item.data.dot && !item.data.active"></text>
					</view>
				</view>
				<view style="width: 100%;"  v-if="isShrink">
					<view class="toggle" v-if="isOpen" @click="toShrinkClose">
						<view class="iconfont icon-shousuo"></view>
					</view>
					<view class="toggle" v-else @click="toShrink">
						<view class="iconfont icon-zhankai"></view>
					</view>
				</view>
			</view>
			<slot name="task">
			<view class="task-box" v-if="list.length > 0">
				<view class="task-item" v-for="(item, index) in list" :key="index" @click="toTask(item, index)">
					<view class="avatar-box">
						<view class="avatar">
							 <image :src="item.avatar"></image>
						</view>
						<view class="title-box">
							<view class="title"><text>{{item.title}}</text></view>
							<view class="date"><text class="branch">时间：{{item.time}}</text><text>{{item.details}}</text></view>
						</view>
					</view>
					<view class="time"><text>{{item.date}}</text></view>
				</view>
			</view>
			</slot>
		</view>
		<view class="modal" v-if="show">
			<view class="mask" @click="close" v-if="closeOnClickOverlay"></view>
			<view class="z-content">
				<view class="modal-content">
					<view class="z-modal" :style="{width: width}">
						<view class="modal-title"><slot name="title"><text>{{title}}</text></slot></view>
						<view class="z-modal-content"><slot name="content"><text>{{content}}</text></slot></view>
						<view class="line"></view>
						<view class="modal-foot">
							<slot name="footer">
								<view class="cancel" @click="cancel" v-if="showCancelButton">
									<text :style="{color: cancelColor}">{{cancelText}}</text>
								</view>
								<view class="foot-line" v-if="showCancelButton && showConfirmButton"></view>
								<view class="confirm" @click="confirm" v-if="showConfirmButton">
									<text :style="{color: confirmColor}">{{confirmText}}</text>
								</view>
							</slot>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'zyfDate',
		props:{
			list:{
				type: Array,
				default: () => {
					return []
				}
			},
			weekList:{
				type:Array,
				default:() => ['日', '一', '二', '三', '四', '五', '六']
			},
			date:{
				type:Object,
				default:() => {
					return {
						year: new Date().getFullYear(),
						month: parseInt(new Date().getMonth() + 1),
						day: parseInt(new Date().getDate())
					}
				}
			},
			extraData: {
				type: Array,
				default: ()=> {
					return [{date: '2022-7-20', value: '签到', status: true, dot: true, active: false},{date: '2022-7-19', value: '未签到', status: false, dot: true, active: true}] // {date: '2020-6-3', value: '签到', dot: true, active: true}
				}
			},

			show:{
				type: Boolean,
				default: false
			},
			
			title:{
				type: String,
				default: ''
			},
			
			content:{
				type: String,
				default: '--'
			},
			
			confirmText:{
				type: String,
				default: '确认'
			},
			
			cancelText:{
				type: String,
				default: '取消'
			},
			
			showConfirmButton:{
				type: Boolean,
				default: true
			},
			
			showCancelButton:{
				type: Boolean,
				default: false
			},
			
			confirmColor:{
				type: String,
				default: '#2979ff'
			},
			
			cancelColor:{
				type: String,
				default: '#606266'
			},
			
			closeOnClickOverlay:{
				type: Boolean,
				default: true
			},
			
			width:{
				type: [Number,String],
				default: '650rpx'
			},
			isShrink:{
				type: Boolean,
				default: false
			},
			isUnfold:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				dayList:[],
				year: 2022,
				month: 10,
				day: 10,
				isOpen: false
			}
		},
		onLoad() {
			
		},
		created() {
			this.isOpen = this.isUnfold
			const { year, month, day  } = this.date
			this.year = year
			this.month = month
			this.day = day
			this.initTime()
			this.initApi(this.year, this.month)
		},
		onNavigationBarButtonTap(e){
			console.log(e)
			uni.showToast({
				title: '分享',
				duration: 2000
			});
		},
		methods: {
			initTime(){
				const { year, month, day } = this.getTiemNowDate()
				this.year = year
				this.month = month
				this.day = day
				//console.log('今日时间为：' + this.year + '-' + this.month + '-' +this.day )
			},
			toShrink(){
				let falg = null
				const dateArr = this.getTime();
				const line = dateArr.map((item,index) => {
					if((index % 7) && this.day == item.day){
						falg = Math.floor(index/7)
						return Math.floor(index/7)
					}
				})
				this.dayList = dateArr.slice(falg * 7, (falg + 1) * 7)
				this.isOpen = true
			},
			toShrinkClose(){
				this.dayList = this.getTime()
				this.isOpen = false
			},
			getTiemNowDate(){
				var date 	= new Date()
				var year 	= date.getFullYear()
				var month = parseInt(date.getMonth() + 1)
				var day 	= date.getDate()
				if(month < 10){
					month = '0' + month
				}
				
				if(day < 10){
					day = '0' + day
				}
				
				const resultDate = {
					year:year,
					month: parseInt(month),
					day:parseInt(day)
				}
				
				return resultDate
			},
			
			initApi(year, month) {
				if(this.isShrink && this.isOpen){
					this.toShrink()
				} else {
					
					this.dayList = this.getTime(year, month)
				}
			},
			getTime(year, month){
				return this.creatDayList(year, month)
			},
			creatDayList(year, month){
				const count = this.getDayNum(year, month)
				const week = new Date(year + '/' + month + '/1').getDay()
				let list = []
				for(let i = 1; i <= count; i++ ){
					let data = {};
					for(let item of this.extraData){
						let dateString = item.date;
						let dateArr = dateString.indexOf('-') !== -1 ? dateString.split('-') : dateString.indexOf('/') !== -1 ? dateString.split('/') :  [];
						if(dateArr.length === 3 && Number(dateArr[0]) === Number(this.year) && Number(dateArr[1]) === Number(this.month) && Number(dateArr[2]) === Number(i)){
							data = item
						}
					}
					
					let obj = {	day:i, data }
					list.push(obj)
				}
				for(let i = 0; i < week; i++){
					// list.unshift(this.getDayNum(year, month - 1) -i)
					list.unshift({ day:null, data:{}})
				}
				return list
			},
			
			getDayNum(year, month){
				let dayNum = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
				if((year % 4 !== 0) && (year % 100 === 0) || (year % 400 !== 0)){
					dayNum[1] = 28
				}
				return dayNum[month - 1]
			},
			
			toActive(item, index){
				this.day = item.day
				this.$emit('click-active', {year:this.year, month:this.month, day:item.day, date:this.year + '-' + this.month + '-' +this.day, index: index})
			},
			
			toTask(item, index){
				this.$emit('click-task', {row: item, index: index})
			},
			
			LastMonth(){
				if(this.month > 1){
					this.month = this.month - 1
					this.initApi(this.year, this.month)
				} else {
					this.LastYear(false)
					this.month = 12
					this.initApi(this.year, this.month)
				}
				
			},
			
			NextMonth(){
				if(this.month < 12){
					this.month = this.month + 1
				} else {
					this.NextYear(false)
					this.month = 1
				}
				this.initApi(this.year, this.month)
			},
			
			LastYear(flag = true){
				if(this.year > 2000){
					this.year = this.year - 1
					if(flag){
						this.initApi(this.year, this.month)
					}
					
				}
			},
			
			NextYear(flag = true){
				this.year = this.year + 1
				this.initApi(this.year, this.month)
			},
			
			confirm(){
				this.$emit('confirm')
			},
			
			cancel(){
				this.$emit('cancel')
			},
			
			close(){
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "iconfont.css";
	.date-box{
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 20rpx;
		.box-list{
			background-color: white;
			border-radius: 20rpx;
			.date-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 20rpx;
				.icon{
					width: 50rpx;
					height: 50rpx;
					line-height: 50rpx;
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
				.conter-text{
					font-size: 32rpx;
					font-weight: bold;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					.month{
						padding: 0 40rpx;
					}
				}
			}
			.date-week{
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;
				padding: 20rpx;
				border-bottom: 1rpx solid #f3f4f6;
				.week-item{
					display: flex;
					justify-content: center;
					align-items: center;
					width: calc(100%/7);
					height: 52rpx;
					text-align: center;
					font-size: 30rpx;
					color: #909193;
				}
			}
			.day-content{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				padding: 10rpx 20rpx;
				position: relative;
				.day-item{
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;
					width: calc(100%/7);
					height: 95rpx;
					text-align: center;
					font-size: 32rpx;
					z-index: 2;
					position: relative;
					.day-text{
						width: 65rpx;
						height: 65rpx;
						line-height: 65rpx;
						// margin-bottom: 5rpx;
						&.actives{
							color: #fff;
							box-sizing: border-box;
							background-color: #2b85e4;
							border-radius: 6rpx;
							border-radius: 50%;
						}
					}
					.value-text{
						font-size: 24rpx;
						color: #18b566;
						&.text-red {
							color: #dd6161;
						}
					}
					.day-dot{
						margin-top: 5rpx;
						background: #dd6161;
						border-radius: 50%;
						padding: 6rpx;
						position: absolute;
						bottom: 36rpx;
						&.dot-gray {
							background: #18b566;
						}
					}
				}
				.day-month{
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					// color: rgba(231,232,234,.83);
					font-size: 200px;
					font-weight: 700;
					color: #999;
					opacity: .1;
					text-align: center;
					line-height: 1;
					z-index: 1;
				}
			}
			.toggle{
				position: relative;
				padding: 10rpx 0;
				margin: 10rpx 20rpx 0;
				display: flex;
				justify-content: center;
				&:before{
					width: calc(50% - 30rpx);
					border-top: solid 1px #EAEAEA;
					content: '';
					display: block;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
				&:after{
					width: calc(50% - 30rpx);
					border-top: solid 1px #EAEAEA;
					content: '';
					display: block;
					position: absolute;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
				}
			}
		}
		.task-box{
			display: flex;
			flex-direction: column;
			.task-item{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				background-color: white;
				padding: 20rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				.avatar-box{
					display: flex;
					.avatar{
						width: 100rpx;
						height: 100rpx;
						margin-right: 20rpx;
						border-radius: 50%;
						image{
							width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
						}
					}
					.title-box{
						display: flex;
						flex-direction: column;
						align-content: space-between;
						.title{
							font-size: 30rpx;
							color: #303133;
							margin-bottom: 15rpx;
						}
						.date{
							font-size: 26rpx;
							color: #909193;
							.branch{
								margin-right: 15rpx;
							}
						}
					}
				}
			}
		}
	}
	.modal{
		display: flex;
		flex-direction: column;
		flex: 1;
		.mask{
			transition-duration: 450ms;
			transition-timing-function: ease-out;
			position: fixed;
			inset: 0px;
			z-index: 10070;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.z-content{
			z-index: 10075;
			position: fixed;
			display: flex;
			align-items: center;
			justify-content: center;
			inset: 0px;
			.modal-content{
				border-radius: 6px;
				overflow: hidden;
				margin-top: 0px;
				// height: 200px;
				background-color: #fff;
				position: relative;
				.z-modal{
					width: 289px;
					border-radius: 6px;
					overflow: hidden;
					.modal-title{
						font-size: 16px;
						font-weight: 700;
						color: #606266;
						text-align: center;
						padding-top: 25px;
					}
					.z-modal-content{
						padding: 12px 25px 25px 25px;
						display: flex;
						flex-direction: row;
						justify-content: center;
						font-size: 15px;
						color: #606266;
					}
					.line{
						margin: 0px;
						border-bottom: 1px solid rgb(214, 215, 217);
						width: 100%;
						transform: scaleY(0.5);
						border-top-color: rgb(214, 215, 217);
						border-right-color: rgb(214, 215, 217);
						border-left-color: rgb(214, 215, 217);
						vertical-align: middle;
					}
					.modal-foot{
						display: flex;
						flex-direction: row;
						font-size: 16px;
						text-align: center;
						color: rgb(96, 98, 102);
						.cancel{
							flex: 1;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							height: 48px;
						}
						.foot-line{
							margin: 0px;
							border-left: 1px solid rgb(214, 215, 217);
							height: 48px;
							transform: scaleX(0.5);
							border-top-color: rgb(214, 215, 217);
							border-right-color: rgb(214, 215, 217);
							border-bottom-color: rgb(214, 215, 217);
						}
						.confirm{
							flex: 1;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							height: 48px;
							text{
								color: rgb(41, 121, 255);
							}
						}
					}
				}
				
			}
		}
	}
</style>
