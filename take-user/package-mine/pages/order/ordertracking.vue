<template>
	<view style="margin-top: 10px;">
		<view v-for="(item,index) in array" :key="index" class="teacking-cell row">
			<view class="column" style="width: 56px;height: 100%;">
				<view style="margin-left: 27.5px;height: 28px;width: 1px;background-color: #EEEEEE;" v-if="index != 0">
					
				</view>
				<image src="../../../static/item-sel.png" mode="aspectFit" style="width: 18px;height: 18px;border-radius: 9px;background-color: #EEEEEE;text-align: center;color: #FFFFFF;font-size: 14px;margin-left: 20px;line-height: 22px;font-weight: bold;margin-top:28px"
				v-if="index == 0"></image>
				<view style="width: 18px;height: 18px;border-radius: 9px;background-color: #EEEEEE;text-align: center;color: #FFFFFF;font-size: 14px;margin-left: 20px;line-height: 22px;font-weight: bold;"
				:style="index == 0 ? 'margin-top:28px' : ''" v-else>
					^
				</view>
				<view style="margin-left: 27.5px;height: 28px;width: 1px;background-color: #EEEEEE;" v-if="index != (array.length - 1)">
					
				</view>
			</view>
			<view class="column" style="width: calc(100% - 74px);height: 100%;border-bottom: 1px solid #f0f0f0;">
				<view class="row" style="width: 100%;margin-top: 12px;height: 27px;">
					<text style="font-size: 16px;font-weight: bolder;color: #323232;line-height: 27px;flex: 1;">{{item.title}}</text>
					<text style="font-size: 13px;font-weight: bolder;color: #989898;line-height: 27px;margin-right: 0;">{{item.time}}</text>
				</view>
				<text style="font-size: 13px;color: #989898;line-height: 24px;margin-right: 0;">{{item.des}}</text>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array:[],
				orderID:''
			}
		},
		onLoad(option) {
			var that = this
			that.orderID = option.orderID
			console.log(that.orderID)
			that.http.sendRequest('Orders.Track',{
				'orderid':that.orderID
				}).then(function(res){
				if(res.code == 0){
					that.array = res.info
				}
			})
			// var arr = ['1','2','3','4','5']
			// this.array = arr.reverse()
			// console.log(this.array)
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		/* overflow: hidden; */
	}
	.teacking-cell{
		width: 100%;
		height: 76px;
	}
</style>
