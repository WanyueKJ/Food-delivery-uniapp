<template>
	<view>
		<view class="row" style="width: 100%;margin-top: 8px;height: 48px;background-color: #FFFFFF;">
			<text style="margin-left: 12px;height: 48px;line-height: 48px;color: #323232;font-size: 16px;flex: 1;">退款金额:</text>
			<text style="margin-right: 12px;height: 48px;line-height: 48px;color: #FF0B00;font-size: 16px;font-weight: bold;">{{'¥ ' + orderMoney}}</text>
		</view>
		<view class="column" style="width: 100%;margin-top: 8px;background-color: #FFFFFF;">
			<view style="width: 100%;height: 48px;background-color: #FFFFFF;border-bottom: 1px solid #fafafa;">
				<text style="margin-left: 12px;height: 48px;line-height: 48px;color: #323232;font-size: 16px;">退款原因</text>
			</view>
			<view v-for="(item,index) in reasonArray" :key="index" class="row" style="width: 100%;height: 40px;">
				<text style="margin-left: 12px;height: 40px;line-height: 40px;color: #646464;font-size: 15px;flex: 1;">{{item.name}}</text>
				<image src="../../../../static/item-sel.png" mode="aspectFit" style="margin-right: 12px;margin-top: 10px;height: 20px;width: 20px;" v-if="index == selectIndex" @click="itemSelected(item,index)"></image>
				<image src="../../../../static/item-nor.png" mode="aspectFit" style="margin-right: 12px;margin-top: 10px;height: 20px;width: 20px;" v-else @click="itemSelected(item,index)"></image>
				
			</view>
		</view>
		<view class="submit" @click="submitApply()">提交申请</view>
		<view class="successView column" v-if="isSucs">
			<image style="width: 68px;height: 68px;background-color: #02CC88;border-radius: 34px;margin-top: 30px;" src="../../../static/images/order/refund-scs.png" mode="aspectFit">
			</image>
			<view style="width: 100%;margin-top: 20px;color: #323232;font-size: 22px;font-weight: bold;text-align: center;">
				提交成功
			</view>
			<text style="width: 100%;margin-top: 30px;color: #646464;font-size: 16px;text-align: center;line-height: 25px;">{{'退款金额：¥' + orderMoney}}
			{{'订单编号：'+ orderNum}}</text>
			<view class="row" style="width: 100%;margin-top: 30px;height: 34px;justify-content: center;">
				<view @click="doDetailes()" style="width: 100px;color: #FC6524;font-size: 14px;text-align: center;line-height: 34px;height: 34px;border-radius: 17px;border: 1px solid #FC6524;margin-right: 20px;">
					退款详情
				</view>
				<view @click="doBack()" style="width: 100px;color: #646464;font-size: 14px;text-align: center;line-height: 34px;height: 34px;border-radius: 17px;border: 1px solid #CCCCCC;">
					返回首页
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reasonArray:[],
				selectIndex:99999,
				isSucs:0,
				orderID:'',
				orderNum:'',
				orderMoney:''
			}
		},
		onLoad(option) {
			var that = this
			that.orderID = option.orderID
			that.orderNum = option.orderno
			that.orderMoney = option.money
			
			that.http.sendRequest('Orders.GetRefundReason',{'orderid':that.orderID}).then(function(res){
				if(res.code == 0){
					that.reasonArray = res.info
				}
			})
		},
		methods: {
			itemSelected(item,index){
				this.selectIndex = index
			},
			submitApply(){
				
				var that = this
				that.http.sendRequest('Orders.Refund',{'orderid':that.orderID,'reason':that.reasonArray[that.selectIndex].name}).then(function(res){
					if(res.code == 0){
						that.isSucs = 1
					}
				})
			},
			doDetailes(){
				console.log(1121212121)
				uni.navigateTo({
					url:'./refundDetails?orderID=' + this.orderID
				})
			},
			doBack(){
				uni.switchTab({
					url:'../order'
				})
				
			}
			
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
		overflow: hidden;
	}
	.submit {
		width: calc(100% - 24px);
		margin-left: 12px;
		height: 42px;
		line-height: 42px;
		border-radius: 21px;
		font-size: 18px;
		color: #FFFFFF;
		background-color: #FF5725;
		text-align: center;
		position: absolute;
		bottom: 60px;
	}
	.successView{
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		align-items: center;
	}
</style>
