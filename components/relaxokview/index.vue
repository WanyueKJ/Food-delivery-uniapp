<template>
	<view class="uni-mask">
		<view class="setview">
			<view class="settop">
				<view class="settitle">{{i18n.set.xiuxizhuyianquan}}</view>
				<view class="closeview" @click="close">
					<image src="../../static/image/guanbi.png" class="guanbiimage"></image>
				</view>
			</view>
			<view class="setmessage row">
				<view
					style="width: 50%;height: 100%;justify-content: center;align-items: center;color: rgba(255,255,255,1);"
					class="column">
					<view class="nin">{{userInfo.orders}}</view>
					<view class="tit">{{i18n.jinriwanchengdan}}</view>
				</view>
				<view
					style="width: 50%;height: 100%;justify-content: center;align-items: center;color: rgba(255,255,255,1);"
					class="column">
					<view class="nin row">{{userInfo.income}}
						<view class="yuan">¥</view>
					</view>
					<view class="tit">{{i18n.jinripeisongfei}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:'',
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		created() {
			var that = this
			this.NB.sendRequest('Rider.User.GetBaseInfo').then(info => {	
				that.userInfo = that.NB.user()
				that.userInfo.balance = info[0].balance
				that.userInfo.balancetotal = info[0].balancetotal
				that.userInfo.income = info[0].income
				that.userInfo.orders = info[0].orders
				that.userInfo.star = info[0].star
				that.userInfo.evaluates = info[0].evaluates
				that.userInfo.average = info[0].average
				that.userInfo.bad = info[0].bad
				that.userInfo.mgood = info[0].mgood
				that.userInfo.good = info[0].good
				uni.setStorage({
					key: 'userinfo',
					data: that.userInfo,
					success: function() {}
				});
			})
		},
		methods: {
			close() {
				this.$emit('relaxcancle')
			},
		}
	}
</script>

<style>
	.yuan{
		font-size: 14px;
		margin-top: 2px;
	}
	.nin {
		height: 20px;
		line-height: 20px;
		font-size: 24px;
		font-weight: bolder;
	}

	.tit {
		margin-top: 20px;
		font-size: 14px;
		font-weight: bold;
	}

	.setmessage {
		height: 120px;
		width: calc(100% - 40px);
		margin-left: 20px;
		border-radius: 8px;
		background: linear-gradient(to left, rgba(254, 131, 40, 1), rgba(255, 75, 33, 1));

	}

	.setlist {
		margin-top: 20px;
		width: calc(100% - 20px);
		margin-left: 10px;
	}

	.setbtn {
		position: absolute;
		right: 0;
		width: 56px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		color: #FF5725;
		font-size: 14px;
		border: 1px solid #FF5725;

	}

	.set1 {
		position: relative;
		height: 60px;
		line-height: 60px;
		color: #323232;
		font-size: 16px;
		font-weight: bold;
		align-items: center;
	}

	.closeview {
		width: 60px;
		height: 60px;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.settop {
		height: 60px;
		align-items: center;
	}

	.guanbiimage {
		width: 16px;
		height: 16px;
	}

	.settitle {
		margin-left: 20px;
		height: 60px;
		line-height: 60px;
		color: #323232;
		text-align: left;
		font-size: 16px;
		font-weight: bold;
	}

	.setview {
		width: 100%;
		height: 219px;
		border-radius: 16px 16px 0 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
</style>
