<template>
	<view>
		<view class="topview row">
			<view @click="showriqi" class="row" style="align-items: center;">
				<view class="topview-date">{{date}}</view>
				<image src="../../../static/image/jiantouxiaxia.png" class="jiantou" mode="aspectFit"></image>
			</view>
			<view class="nums row">
				<view>{{i18n.wallet.zhichu + ' ¥' + expenditure}}</view>
				<view style="margin-left: 10px;">{{i18n.wallet.shouru + ' ¥' + income}}</view>
			</view>
		</view>
		<scroll-view v-if="showDate == false" scroll-y :style="'height:' + scrollH + 'px;'" class="scroll"
			@scrolltolower="scrolltolower">
			<view v-for="(item,index) in list" class="monthcell column">
				<view class="row cellroe">
					<view class="month">{{item.action_txt}}</view>
					<view v-if="item.type == 1" class="moths">{{'+' + item.total}}</view>
					<view v-if="item.type == 2" class="moths">{{'-' + item.total}}</view>
				</view>
				<view class="row cellroe">
					<view class="mouthtimes">{{item.add_time}}</view>
					<view class="mothsprice">{{i18n.wallet.yue + item.balance}}</view>
				</view>
			</view>
			<nothing :list="list"></nothing>
		</scroll-view>
		<view v-if="showDate == true" class="alldateview" @click="alldate">
			<view class="alldateviewbtn">{{i18n.wallet.quanburiqi}}</view>
			<!-- <image src="../image/jiantouxiaxia.png" mode="aspectFit"></image> -->
		</view>
		<view v-if="showDate == true">
			<z-calendar @on-selected="onselected" :firstDayOfWeek="1" v-model="checkDate"></z-calendar>
		</view>

	</view>
</template>

<script>
	import ZCalendar from "../../../components/z-calendar/z-calendar.vue";
	export default {
		components: {
			ZCalendar,
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				expenditure: 0.0,
				income: 0.0,
				showDate: false,
				checkDate: new Date(),
				scrollH: 0,
				date: '全部日期',
				status: true,
				list: []
			}
		},
		onReady() {
			this.date = this.i18n.wallet.quanburiqi	
			uni.setNavigationBarTitle({
				 title:this.i18n.wallet.historyZhangdan
			});
		},
		onLoad() {
			this.scrollH = getApp().globalData.windowHeight - getApp().globalData.top - 44 - 60
			this.BalanceGetRecord('')
		},
		methods: {
			scrolltolower() {
				this.p = parseInt(this.p) + 1;
				this.BalanceGetRecord()
			},
			BalanceGetRecord() {
				
				var Stime = ''
				if (this.date != this.i18n.wallet.quanburiqi) {
					Stime = this.date
				}
				var that = this
				that.income = 0.0
				that.NB.sendRequest('Rider.Balance.GetRecord', {
					'time': Stime,
					'p': that.p
				}).then(data => {
					that.list = []
					// if (this.p == 1) {
					that.list = data.info
					// } else {
					// 	for (let i = 0; i < data.info.length; i++) {
					// 		that.list.push(data.info[i]);
					// 	}
					// }
					for (let i = 0; i < data.info.length; i++) {
						var dic = data.info[i]
						
						if (parseInt(dic.type) == 1) {
							const totalV = parseFloat(dic.total)
							console.log(that.income)
							that.income += totalV
							console.log(that.income)
							
						} else {
							that.expenditure += parseFloat(dic.total)
							
						}
					}
					that.income = that.income.toFixed(2)
					console.log(that.income)
					that.expenditure = that.expenditure.toFixed(2)
					console.log(that.expenditure)
				})
			},
			alldate() {
				this.showDate = false
				this.date = this.i18n.wallet.quanburiqi
			},
			showriqi() {
				this.showDate = !this.showDate
			},
			onselected(date) {
				this.showDate = false
				this.date = date
				this.BalanceGetRecord()
			}

		}
	}
</script>

<style>
	@import url("../index.css");

	.alldateviewbtn {
		width: 104px;
		height: 38px;
		border-radius: 4px;
		border: 1px solid rgba(255, 76, 41, 1);
		background-color: rgba(255, 237, 233, 1);
		text-align: center;
		line-height: 39px;
		color: #FF5725;
		margin-left: 15px;
	}

	.alldateview image {
		width: 20px;
		height: 20px;
	}

	.alldateview {
		display: flex;
		align-items: center;
		width: 100%;
		height: 60px;
		background-color: #FFFFFF;
	}

	.scroll {
		display: flex;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 0;
	}

	.monthcell {
		width: 100%;
		height: 70px;
		border-top: 1px solid rgba(240, 240, 240, 1);
		background-color: #FFFFFF;
	}

	.nums {
		position: absolute;
		right: 15px;
		color: rgba(50, 50, 50, 1);
		font-size: 12px;
	}

	.jiantou {
		width: 20px;
		height: 20px;
		margin-top: 2px;
	}

	.topview-date {
		color: rgba(50, 50, 50, 1);
		margin-left: 15px;
		margin-right: 5px;
	}

	.topview {
		display: flex;
		position: relative;
		width: 100%;
		background-color: #F5F5F5;
		height: 60px;
		align-items: center;
	}
</style>
