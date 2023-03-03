<template>
	<view>
		<view class="middleview">
			<view class="title1">{{i18n.shop.orderrecord}}</view>
			<view class="rightView row">
				<view class="time">{{checkDate}}</view>
				<image style="width: 20px;height: 20px;" v-if="isShow" src="../../../static/shang.png"
					mode="aspectFit"></image>
				<image style="width: 20px;height: 20px;" v-else src="../../../static/xia.png" mode="aspectFit" @click="showTime()">
				</image>
			</view>
		</view>
		<view style="background-color: #f5f5f5;width: 100%;height: 10px; "></view>
		<!--  -->
		<!-- <z-calendar v-if="isShow" @on-selected="clickActive" :value="currentDate"></z-calendar> -->
		<zui-calendar v-if="isShow" @click-active="clickActive"></zui-calendar>
		
		<block  v-if="!isShow">
			<view class="row recordtitle">
				<view v-for="(item,index) in data" :key="index" class="title2">
					<view style="color: #aaa;">{{item}}</view>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
				style="background-color: #fff;width: 100%;" class="column" :refresher-threshold="45"
				:refresher-triggered="refresherTriggered" :refresher-enabled="true" @refresherrefresh="refresherrefresh"
				@scrolltolower="reloadmoreData">
				<view v-if="detailData.length == 0" class="nothing clomun">
					<image src="../../../static/noorder@2x.png" mode="aspectFit" style="width: 100px;height:60px ;"></image>
					<view style="font-size:12px;height: 20px;line-height: 20px; color:#dadada;">{{i18n.shop.noorderdata}}</view>
				</view>
				<view v-else v-for="(item,index) in detailData" :key="index" class="row recordtitle">
					<view class="title2" style="color: #383838;">{{item.addtime}}</view>
					<view class="title2" style="color: #383838;">{{item.pay_price}}</view>
					<view class="title2" style="color: #383838;">{{item.total_num}}</view>
					<!-- 1,2,3,5(进行中) 4已入账 6已退款 7取消-->
					<view v-if="item.status==6 || item.status==7" class="title2" style=" color: #F40404;">{{item.status_txt}}</view>
					<view v-if="item.status==1 || item.status==2 || item.status==3 ||item.status==5" class="title2" style=" color: #FFB510;">{{item.status_txt}}</view>
					<view v-if="item.status==4" class="title2" style=" color: #383838;">{{item.status_txt}}</view>	
				</view>
			</scroll-view>
		</block>
		
		<!-- list="list" :extraData="extraData" -->
	</view>
</template>

<script>
	// import ZCalendar from '@/components/z-calendar/z-calendar.vue'
	export default {
		data() {
			return {
				isShow:false,
				page: 1,
				refresherTriggered: false,
				detailData:[],
				checkDate:'',
				scrollHeight:0,
				currentDate:0
			}
		},
		components:{
			// ZCalendar
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.duizhang
			})
			var res = uni.getSystemInfoSync()
			this.navHeight = 64+res.statusBarHeight
			this.scrollHeight = res.windowHeight-118
			// this.weekends = [this.i18n.shop.Sun,this.i18n.shop.Mon,this.i18n.shop.Thu,this.i18n.shop.Wen,this.i18n.shop.Thir,
			// 				 this.i18n.shop.Fri,this.i18n.shop.Sat]
			this.data = [this.i18n.shop.ordertime,this.i18n.shop.ordermoney,this.i18n.shop.goodsnum,this.i18n.shop.tixian_status]
			this.checkDate = this.getDate()
			this.getListData()
		},
		methods: {
			getListData(){
				var that = this
				var param = {'p':String(this.page),
							 'start_time':this.checkDate}
				this.http.sendRequest('Earnings.Reconciliation',param).then(function(data) {
					if (data.code == 0) {
						var list = data.info
						if(that.page == 1){
							that.detailData = list
						}else{
							that.detailData = that.detailData.contact(list)
							
						}
						console.log(that.detailData)
					}
				})
			},
			showTime(){
				this.isShow = true
			},
			 // 点击日数方法
			// clickActive(date){
			// 	this.currentDate = date
			// 	this.isShow = false
			// 	var year = String(date.getFullYear())
			// 	var month = String(date.getMonth()+1)
			// 	var day = String(date.getDate()) 
			// 	this.checkDate = year + '-' + month + '-' + day
			// 	// console.log(date)
			// 	// console.log(date.getFullYear(),date.getMonth()+1,date.getDate())
			// 	this.page = 1
			// 	this.getListData()
			// },
			clickActive({year, month, date, index}){
				this.isShow = false
				this.checkDate = date
				this.page = 1
				this.getListData()
			},
			getDate() {
				const date = new Date();
				this.currentDate = date
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
				// return `${year}-${month}`;
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000)
				this.page = 1
				this.getListData()
			},
			reloadmoreData() {
				this.page++
				//this.p = parseInt(this.p) + 1;
				this.getListData()
			
			}

		}
	}
</script>

<style>
	.page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.nothing {
		margin-top:150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.recordtitle{
		width: 100%;
		height: 44px;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
	}
	.middleview {
		width: calc(100% - 30px);
		margin-left: 15px;
		margin-right: 15px;
		height: 44px;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.rightView {
		align-items: center;
		margin-left: 15px;
		margin-right: 15px;
		height: 100%;
	}
	.title2{
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: row;
		position: relative;
		justify-content: center;
		align-items: center;
	}
	.title1 {
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		flex: 1;
	}
	.time{
		margin-left: 15px;
		margin-right: 5px;
		flex: 1;
		text-align: right;
		color: #383838;
		font-size: 14px;
	}
	.rightImg{
		width: 20px;
		height: 20px;
		margin-right: 20px;
	}
</style>
