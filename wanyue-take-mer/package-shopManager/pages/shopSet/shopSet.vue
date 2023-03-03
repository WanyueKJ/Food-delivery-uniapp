<template>
	<view style="margin-top: 10px;">
		<view v-for="(item,index) in data" :key="index">
			<view class="inputBackView" @click="click(index)">
				<view class="title">{{item}}</view>
				<image src="../../../static/ads-seld-right.png" mode="aspectFit" class="rightArrow" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
				firstPlatformID:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.shezhi
			})
			var shopinfo = uni.getStorageSync('shopinfo')
			// console.log(shopinfo)
			this.firstPlatformID = shopinfo.top_type_id
			if(this.firstPlatformID == 1){
				this.data = [this.i18n.shop.gongshang,this.i18n.shop.shopPics,this.i18n.shop.bank,this.i18n.shop.fuwushezhi]
				
			}else{
				this.data = [this.i18n.shop.gongshang,this.i18n.shop.shopPics,this.i18n.shop.bank,this.i18n.shop.fuwushezhi]
			}
			
		},
		methods: {
			click(index){
				if(index == 0){
					//工商信息
					uni.navigateTo({
						url:'businessPics'
					})
				}else if(index == 1){
					//店铺环境
					uni.navigateTo({
						url:'addShopPics'
					})
				}else if(index == 2){
					//开户行
					uni.navigateTo({
						url:'bank'
					})
				}else if(index == 3){
					
					//订单服务
					uni.navigateTo({
						url:'orderService'
					})
				}else if(index == 4){
					//关于店铺
					uni.navigateTo({
						url:'aboutShop'
					})
				}
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: 1px solid #E6E6E6;
		align-items: center;
	}
	.title{
		margin-left: 15px;
		font-size: 16px;
		text-align: left;
		color: #6f6f6f;
		margin-right: 50px;
	}
	.rightArrow{
		right: 20px;
		height: 16px;
		width: 16px;
		position: absolute;
	}
</style>
