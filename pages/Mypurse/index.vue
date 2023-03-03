<template>
	<view class="page">
		<view class="title">{{i18n.wallet.wodeqianbao}}</view>
		<view class="centerviews column">
			<view class="zongshouru">{{i18n.wallet.zongshouru}}</view>
			<view class="yuan row">
				<view>{{info.balancetotal}}</view>
				<view style="font-size: 14px;margin-top: 15px;">元</view>
			</view>
			<view v-if="userInfo.type == 1" class="tixian" @click="tixian">{{i18n.wallet.tixian}}</view>
			<view class="row cdetail">
				<view class="cdetailcell">
					<view class="cdetailcelltitle">{{i18n.wallet.jinrishouru}}</view>
					<view class="cdetailcellprice row">
						<view>{{info.today_income}}</view>
						<view style="font-size: 14px;margin-top: 8px;">元</view>
					</view>
				</view>
				<view class="cdetailcell" style="margin-left: 20%">
					<view class="cdetailcelltitle">{{i18n.wallet.zhanghuyue}}</view>
					<view class="cdetailcellprice row">
						<view>{{info.balance}}</view>
						<view style="font-size: 14px;margin-top: 8px;">元</view>
					</view>
				</view>
			</view>
		</view>
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
				info: {
					balance: 0,
					balancetotal: 0,
					today_income: 0
				},
				userInfo: '',
				scrollH: 0,
				list: [],
				p: 1,
				time:'',
			}
		},
		onShow() {
			var day = new Date();
			this.time = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
			console.log(this.time)
			this.BalanceGetInfo()
			this.BalanceGetRecord()
		},
		onLoad() {
			this.userInfo = this.NB.user()
			this.scrollH = getApp().globalData.windowHeight - getApp().globalData.top - 44 - 284

		},
		methods: {
			scrolltolower() {
				this.p = parseInt(this.p) + 1;
				this.BalanceGetRecord()
			},
			BalanceGetRecord() {
				var that = this
				this.NB.sendRequest('Rider.Balance.GetRecord', {
					time: this.time,
					p: this.p
				}).then(data => {
					if (this.p == 1) {
						that.list = data.info
					} else {
						for (let i = 0; i < data.info.length; i++) {
							that.list.push(data.info[i]);
						}
					}
				})
			},
			BalanceGetInfo() {
				var that = this
				this.NB.sendRequest('Rider.Balance.GetInfo').then(data => {
					that.info = data.info[0]
				})
			},
			lookhistory() {
				uni.navigateTo({
					url: './history/history',
				});
			},
			tixian() {
				uni.navigateTo({
					url: './Withdrawal/index?balance=' + this.info.balance,
				});
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
