<template>
	<view class="page">
		<view class="nameview row">
			<view class="nameview-text">{{i18n.wallet.tixianzhi}}</view>
			<input v-model="realname" class="inputclass" :placeholder="i18n.wallet.qingtianxiezhenshixingming" />
		</view>
		<view class="moneyview column">
			<view class="nowmoney row">
				<view style="margin-left: 15px;">{{i18n.wallet.dangqianjine + ' ¥' + balance}}</view>
			</view>
			<view class="inputviewmoney row">
				<view>¥</view>
				<input class="takeinput" v-model="takemoney" type="number" />
				<view @click="tixianall" class="tixian">{{i18n.wallet.quanbutixian}}</view>
			</view>
		</view>
		<view @click="showtypeview" class="nameview row">
			<view class="nameview-text">{{i18n.wallet.tixianzhi}}</view>
			<view class="type">{{type}}</view>
			<image src="../image/jiantouxiaxia.png"></image>
		</view>
		<view v-if="type.length > 0" class="nameview row">
			<view v-if="type == i18n.wallet.weixin" class="nameview-text">{{i18n.wallet.weixinhao}}</view>
			<view v-if="type == i18n.wallet.zhifubao" class="nameview-text">{{i18n.wallet.zhifubaozhanghao}}</view>
			<view v-if="type == i18n.wallet.yinhang" class="nameview-text">{{i18n.wallet.yinhangkahao}}</view>
			<input v-model="number" class="inputclass" :placeholder="i18n.wallet.qingtianxiezhanghao" />
		</view>
		<view @click="CashSet" class="btn">{{i18n.wallet.tixian}}</view>
		<view class="picker-view" v-if="visible">
			<view class="pickertop row">
				<view @click="cancle" class="cancle">{{i18n.wallet.cancel}}</view>
				<view @click="sure" class="sure">{{i18n.wallet.sure}}</view>
			</view>
			<picker-view class="picker" @change="bindChange">
				<picker-view-column>
					<view class="pickcell" v-for="(item,index) in typeArray">{{item}}</view>
				</picker-view-column>
			</picker-view>
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
				balance: 0,
				number: '',
				typeArray: ['微信', '支付宝', '银行卡'],
				visible: false,
				takemoney: '',
				realname: '',
				type: '',
				selectedindex: 0,
			}
		},
		onLoad(option) {
			this.balance = option.balance
			this.typeArray = [
				this.i18n.wallet.weixin,
				this.i18n.wallet.zhifubao,
				this.i18n.wallet.yinhang,
			]
			uni.setNavigationBarTitle({
				 title:this.i18n.wallet.tixian
			});
		},
		methods: {
			CashSet() {
				var type = 0
				if (this.type == this.i18n.wallet.zhifubao) {
					type = 1
				}
				if (this.type == this.i18n.wallet.weixin) {
					type = 2
				}
				if (this.type == this.i18n.wallet.yinhang) {
					type = 3
				}
				var that = this
				this.NB.sendRequest('Rider.Cash.Set', {
					type: type,
					money:this.takemoney,
					account: this.number,
					name:this.realname
				}).then(data => {
					uni.showModal({
						title: this.i18n.wallet.tishi,
						content: this.i18n.wallet.tixianSucsTip,
						showCancel: false,
						cancelText: '',
						confirmText: this.i18n.wallet.wozhidaole,
						confirmColor:'#FF5725',
						success: res => {
							if (res.confirm){
								uni.navigateBack({
									delta: 1
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}).catch(data=>{
					uni.showToast({
						title: data.msg,
						icon:'none'
					});
				})
			},
			cancle() {
				this.visible = false
			},
			sure() {
				this.visible = false
				this.type = this.typeArray[this.selectedindex]
			},
			bindChange(e) {
				this.number = ''
				this.selectedindex = e.detail.value
			},
			tixianall() {
				this.takemoney = this.balance
			},
			showtypeview() {
				this.visible = !this.visible
			},
		}
	}
</script>

<style>
	.cancle {
		color: rgba(152, 152, 152, 1);
		font-size: 16px;
		height: 40px;
		margin-top: 10px;
		line-height: 40px;
		margin-left: 15px;
	}

	.sure {
		position: absolute;
		right: 15px;
		color: rgba(50, 50, 50, 1);
		font-size: 16px;
		height: 40px;
		margin-top: 10px;
		line-height: 40px;

	}

	.pickertop {
		position: relative;
		align-items: center;
	}

	.picker {
		width: 100%;
		height: 260px;
		background-color: #FFFFFF;
	}

	.pickcell {
		width: 100%;
		height: 40px;
		text-align: center;
	}

	.picker-view {
		width: 100%;
		height: 300px;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
	}

	.btn {
		margin-top: 40px;
		height: 44px;
		line-height: 44px;
		width: calc(100% - 30px);
		margin-left: 15px;
		border-radius: 4px;
		text-align: center;
		color: #FFFFFF;
		background-color: #FF5725;
	}

	.page {
		width: 100%;
		height: 100%;
		background-color: rgba(247, 247, 247, 1);
	}

	.takeinput {
		margin-left: 10px;
		font-size: 26px;
	}

	.tixian {
		position: absolute;
		right: 15px;
		color: #FF5725;
		font-size: 13px;
		height: 20px;
		line-height: 30px;
	}

	.inputviewmoney {
		color: rgba(50, 50, 50, 1);
		font-size: 22px;
		margin-left: 15px;
		height: 66px;
		position: relative;
		align-items: center;
	}

	.moneyview {
		width: 100%;
		height: 116px;
		border-bottom: 10px solid rgba(247, 247, 247, 1);
		color: rgba(50, 50, 50, 1);
		font-size: 14px;
		background-color: #FFFFFF;
	}

	.nowmoney {

		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid rgba(247, 247, 247, 1);
	}

	.inputclass {
		margin-left: 60px;
		height: 50px;
		line-height: 50px;
		width: calc(100% - 170px);
	}

	.nameview-text {
		margin-left: 15px;
	}

	.type {
		/* position: absolute; */
		height: 50px;
		line-height: 50px;
		color: rgba(50, 50, 50, 1);
		font-size: 14px;
		margin-left: 60px;
	}

	.nameview {
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 10px solid rgba(247, 247, 247, 1);
		border-top: 1px solid rgba(247, 247, 247, 1);
		background-color: #FFFFFF;
	}

	.nameview image {
		position: absolute;
		margin-top: 15px;
		right: 15px;
		width: 20px;
		height: 20px;
	}
</style>
