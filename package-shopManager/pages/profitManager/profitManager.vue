<template>
	<view>
		<view class="bg clomun">
			<view class="tab_nor">
				<text
					style="margin-top:10px;color: white;font-size: 15px;font-weight: bold;">{{i18n.shop.allShouru}}</text>
				<view style="color:white;font-size: 30px;">{{profit}}<text
						style="font-size: 13px;">{{i18n.index.moneyUnit}}</text></view>
			</view>
			<view class="row tixian">
				<view class="tab_nor">
					<view style="font-size:14px ;">{{i18n.shop.ketixian}}</view>
					<view style="font-size:18px">{{withdrawal}}<text
							style="font-size: 14px;">{{i18n.index.moneyUnit}}</text></view>
				</view>
				<view class="tab_nor">
					<view style="font-size:14px ;">{{i18n.shop.daitixian}}</view>
					<view style="font-size:18px">{{unWithdrawal}}<text
							style="font-size: 14px;">{{i18n.index.moneyUnit}}</text></view>
				</view>
			</view>
			<view class="tixianbtn" @click="tixian()">{{i18n.shop.tixian}}</view>
		</view>
	
		
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			// const years = []
			// const startYear1 = date.getFullYear()
			// const months1 = []
			// const startMonth1 = date.getMonth() + 1
			// for (let i = 1990; i <= startYear1; i++) {
			//     years1.push(i)
			// }
			// for (let i = 1; i <= 12; i++) {
			//     months1.push(i)
			// }
			return {
				data: [],
				date: currentDate,
				isShow: false,
				scrollHeight: 0,
				detailData: [],
				checkDate: currentDate,
				profit: '',
				withdrawal: '',//可提现
				freight_free: '', //运费减免
				unWithdrawal: '',
				page: 1,
				refresherTriggered: false,
				// startYear:startYear1,
				// startMonth:startMonth1,
				// value: [9999, startMonth1 - 1],
				// indicatorStyle: `height: 50px;`
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.shop.shouyi
			})
			var res = uni.getSystemInfoSync()
			this.navHeight = 64 + res.statusBarHeight
			this.scrollHeight = res.windowHeight - this.navHeight - 210
			this.data = [this.i18n.shop.tixian_time, this.i18n.shop.tixian_money, this.i18n.shop.tixian_account, this.i18n
				.shop.tixian_status
			]
			this.getData()
			this.getListData()
		},
		methods: {
			getData() {
				var that = this
				this.http.sendRequest('Earnings.IncomeStatistics').then(function(data) {
					if (data.code == 0) {
						var dic = data.info
						// console.log(dic)
						that.profit = dic.all_price
						that.withdrawal = dic.for_withdrawal
						that.unWithdrawal = dic.unread_price
					}
				})
			},
			getListData() {
				// var that = this
				// var param = {'p':String(this.page),
				// 			 'start_time':this.checkDate}
				// this.http.sendRequest('Earnings.Index',param).then(function(data) {
				// 	if (data.code == 0) {
				// 		var list = data.info[0]
				// 		if(that.page == 1){
				// 			that.detailData = data.info[0]
				// 		}else{
				// 			for (let i = 0; i < list.length; i++) {
				// 				that.detailData.push(list[i])
				// 			}
				// 		}
				// 		// console.log(that.detailData)
				// 	}
				// })
			},
			tixian() {
				uni.navigateTo({
					url: 'tixian?param=' + this.withdrawal
				})
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getListData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			reloadmoreData() {
				this.page++
				//this.p = parseInt(this.p) + 1;
				this.getListData()

			},
			showTime() {
				this.isShow = true
			},
			// bindChange: function (e) {
			// 	console.log(e)
			// 	this.show = false
			// 	this.startYear = this.years[val[0]]
			// 	this.startMonth = this.months[val[1]]  
			// },
			bindDateChange: function(e) {
				this.checkDate = e.detail.value
				this.page = 1
				this.getListData()
				console.log(this.checkDate)
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				// let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				// day = day > 9 ? day : '0' + day;
				// return `${year}-${month}-${day}`;
				return `${year}-${month}`;
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #ffffff;
	}
	.nothing {
		margin-top:150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.picker-view {
		width: 750rpx;
		height: 600rpx;

	}

	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.recordtitle {
		width: 100%;
		height: 44px;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
	}

	.title2 {
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: row;
		position: relative;
		justify-content: center;
		align-items: center;
		font-size: 13px;
	}

	.rightView {
		align-items: center;
		margin-left: 15px;
		margin-right: 15px;
		height: 100%;
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

	.title1 {
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		flex: 1;
	}

	.time {
		margin-left: 15px;
		text-align: right;
		color: #383838;
		font-size: 14px;
	}

	.tixianbtn {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 30px;
		right: 30px;
		width: 80px;
		height: 30px;
		background: #00c1de;
		border-radius: 1px;
		font-size: 14px;
		text-align: center;
		color: #ffffff;
		line-height: 20px;
	}

	.tixian {
		margin-top: 10px;
		color: white;
	}

	.bg {
		margin: 15px;
		background-color: #2C3E54;
		border-radius: 4px;
		height: 150px;
	}

	.tab_nor {
		font-size: 15px;
		color: white;
		display: flex;
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 15px;
		flex-direction: column;
		position: relative;
		justify-content: center;

	}
</style>
