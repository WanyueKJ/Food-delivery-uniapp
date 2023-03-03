<template>
	<view>
		<view v-if="refundMsg" class="showView column">
			<view style="width: 100%;height: 9px;background-color: #00C1DE;">
				
			</view>
			<view style="width: calc(100% - 24px);margin-top: 20px;color: #323232;font-size: 20px;font-weight: bold;margin-left: 12px;" v-if="refundMsg.status == 7">
				{{i18n.refund.refunding}}
			</view>
			<view style="width: calc(100% - 24px);margin-top: 20px;color: #323232;font-size: 20px;font-weight: bold;margin-left: 12px;" v-if="refundMsg.status == 8">
				{{i18n.refund.refund_success}}
			</view>
			<view style="width: calc(100% - 24px);margin-top: 20px;color: #323232;font-size: 20px;font-weight: bold;margin-left: 12px;" v-if="refundMsg.status == 9">
				{{i18n.refund.refund_fail}}
			</view>
			<text style="width: calc(100% - 24px);margin-top: 5px;color: #646464;font-size: 14px;margin-left: 12px;padding-bottom: 15px;border-bottom: 1px solid #fafafa;" v-if="refundMsg.status == 9">{{i18n.refund.fail}}</text>
			<view v-for="(item,index) in array" :key="index" class="row" style="width: calc(100% - 24px);height: 40px;margin-left: 12px;" >
				<!-- :style="index == 0 ? 'margin-top: 5px' : ''" -->
				<text style="color: #646464;font-size: 14px;height: 40px;line-height: 40px;flex:1">{{item}}</text>
				<text style="color: #F30700;font-size: 18px;height: 40px;line-height: 40px;font-weight: bold;margin-right: 1px;" v-if="index == 0">{{i18n.index.moneyFuhao}}{{refundMsg.money}}</text>
				<text style="color: #323232;font-size: 14px;height: 40px;line-height: 40px;margin-right: 1px;" v-if="index == 1">余额</text>
				<text style="color: #323232;font-size: 14px;height: 40px;line-height: 40px;margin-right: 1px;" v-if="index == 2">{{refundMsg.reason}}</text>
				<text style="color: #323232;font-size: 14px;height: 40px;line-height: 40px;margin-right: 1px;" v-if="index == 3">{{refundMsg.orderno}}</text>
			</view>
			<view style="width: calc(100% - 24px);margin-top: 10px;color: #323232;font-size: 20px;font-weight: bold;margin-left: 12px;height: 45px;line-height: 45px;border-top: 1px solid #fafafa;">
				{{i18n.refund.liucheng}}
			</view>
			<view v-for="(item,j) in listArray" :key="j" class="row" style="width: calc(100% - 24px);margin-left: 12px;">
				<view class="column">
					<view class="circle_quan" v-if="j == 0">
					</view>
					<view class="circle_shi" v-else>
					</view>
					<view class="xian" v-if="j != (listArray.length - 1)">
						
					</view>
				</view>
				<view class="column" style="margin-left: 10px;margin-right: 12px;">
					<text style="color: #646464;font-size: 14px;height: 25px;line-height: 25px;font-weight: bold;">{{item.title}}</text>
					<text style="color: #646464;font-size: 12px;line-height: 22px;">{{item.des}}</text>
					<text style="color: #989898;font-size: 12px;height: 22px;line-height: 22px;padding-bottom: 15px;">{{item.time}}</text>
					
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderID:'',
				array:[],
				refundMsg:null,
				listArray:[]
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onLoad(option) {
			var that = this
			that.orderID = option.orderID
			console.log(that.orderID)
			that.http.sendAppRequest('Orders.GetRefund',{'orderid':that.orderID}).then(function(res){
				if(res.code == 0){
					that.refundMsg = res.info[0]
					that.listArray = res.info[0].list
					console.log(res.info[0])
				}
			})
			this.array = [this.i18n.refund.refund_money,this.i18n.refund.refund_account,this.i18n.refund.refund_reason,this.i18n.index.orderNum]
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #FAFAFA;
	}
	.showView{
		margin-left: 12px;
		margin-top: 10px;
		width: calc(100% - 24px);
		border-radius: 8px 8px 0px 0px;
		background-color: #FFFFFF;
		overflow: hidden;
	}
	.circle_quan{
		margin-top: 10px;
		margin-left: 12px;
		width: 4px;
		height: 4px;
		border-radius: 4px;
		border: 2px solid #00C1DE;
	}
	.circle_shi{
		margin-top: 10px;
		margin-left: 13px;
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background-color: #D8D8D8;
	}
	.xian{
		margin-top: 5px;
		margin-left: 16px;
		width: 1px;
		margin-bottom: 0;
		flex: 1;
		background-color: #D8D8D8;
	}
</style>
