<template>
	<view>
		<view class="topImageView">
			<view class="nav row" :style="'margin-top:' + marginTopHeight + 'px;'">
				<text class="nav_title">{{i18n.tabBar.shopManager}}</text>
			</view>
			<view class="row" style="width: 100%;">				
				<view v-for="(item,index) in tabbar" :key="index" class="tab_nor">
					<view style="margin-top: 15px;height:40px; font-size: 13px;font-weight: bold;color:#A7AFBC;">{{item.name}}</view>
					<view style="margin-top: 4px;text-align: left; font-size: 20px;font-weight: bold;color: white;">{{item.number}}</view> 
				</view>
			</view>
		</view>
		<view class="subtitle">{{i18n.shop.shezhi}}</view>
		<view class="row" style="width: 100%;height: 80px;">
			<view v-for="(item,index) in shezhiArr" :key="index" class="fenlei" @click="shezhiClick(index)">
				<image :src="item.image" mode="aspectFit" style="width: 32px;height: 32px"></image>
				<view style="font-size: 13px;color: #6F6F6F;text-align: center;">{{item.name}}</view> 
			</view>
		</view>
		<view class="subtitle">{{i18n.shop.yunying}}</view>
		<view class="row" style="width: 100%;">
			<view v-for="(item,index) in yunyingArr" :key="index" class="fenlei" @click="itemClick(index)">
				<image :src="item.image" mode="aspectFit" style="margin-top: 15px; width: 32px;height: 32px"></image>
				<view style="margin-top:5px;height:40px;font-size: 13px;color: #6F6F6F;text-align: center;">{{item.name}}</view> 
			</view>
			<view class="fenlei" @click="clickShouyi()">
							<image src="../../static/shopM/shouyi@2x.png" mode="aspectFit" style="margin-top: 15px; width: 32px;height: 32px"></image>
							<view style="margin-top:5px;height:40px;font-size: 13px;color: #6F6F6F;text-align: center;">{{i18n.shop.shouyi}}</view> 
						</view>
		</view>
		<view class="row" style="width: 100%;height: 80px;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 0,
				tabbar: [],
				tabIndex: 0,
				shezhiArr:[],
				yunyingArr:[],
				islogin:false,
				marginTopHeight:0
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onReady() {
			this.marginTopHeight = getApp().globalData.menuButtonHeight + getApp().globalData.statusBarHeight						
			this.tabbar = [{'name':this.i18n.shop.yingyeer,'number':0},
						   {'name':this.i18n.shop.ordernumber,'number':0}]
			this.shezhiArr = [{'name':this.i18n.shop.guanli,'image':'../../static/shopM/guanli@2x.png'},
								{'name':this.i18n.shop.shezhi,'image':'../../static/shopM/set@2x.png'}]
			this.yunyingArr = [{'name':this.i18n.shop.time,'image':'../../static/shopM/time@2x.png'},
								]								
		},
		onShow() {
			const value = uni.getStorageSync('userinfo');
			if (value && value.uid > 0) {
				this.islogin = true
				this.getOrderData()
			}else{
				this.tabbar[0].number = 0
				this.tabbar[1].number = 0
			}
		},
		onLoad() {
			
		},
		methods:{
			getOrderData(){
				var that = this
				this.http.sendRequest('MerchantStore.OrderStatistics').then(function(data) {
					if(data.code == 0){
						var dic = data.info[0]
						that.tabbar[0].number = dic.price
						that.tabbar[1].number = dic.count
					}
				})
			},
			shezhiClick(index){
				if(!this.islogin){
					uni.navigateTo({
						url:'../login/login'
					})
					
				}else{
					if(index == 0){
						//商品管理
						uni.navigateTo({
							url:'../../package-shopManager/pages/goodsManager/goodsManager'
						})
					}else{
						//店铺设置
						uni.navigateTo({
							url:'../../package-shopManager/pages/shopSet/shopSet'
						})
					}
				}
				
			},
			itemClick(index){
				if(!this.islogin){
					uni.navigateTo({
						url:'../login/login'
					})
					
				}else{
					if(index == 0){
						//营业时间
						uni.navigateTo({
							url:'../../package-shopManager/pages/shopTime/shopTime'
						})
					}else if(index == 1){
						//评论管理
						uni.navigateTo({
							url:'../../package-shopManager/pages/commentManager/commentManager'
						})
					}else if(index == 2){
						//优惠券
						uni.navigateTo({
							url:'../../package-shopManager/pages/youhuiquan/youhuiquan'
						})
					}else{
						//订单对账
						uni.navigateTo({
							url:'../../package-shopManager/pages/verifyAccount/verifyAccount'
						})
					}
				}
				
			},
			//收益管理
			clickShouyi(){
				if(!this.islogin){
					uni.navigateTo({
						url:'../login/login'
					})
	
				}else{
					uni.navigateTo({
						url:'../../package-shopManager/pages/profitManager/profitManager'
					})
				}
				
			}
			
			
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}
	.fenlei{
		display: flex;
		flex-direction: column;
		width: 25%;
		height: 100%;
		position: relative;
		justify-content: center;
		align-items: center;
	}
	.subtitle{
		margin-top: 15px;
		margin-left: 15px;
		color:#181818 ;
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
		height: 30px;
	}
	.topImageView {
		width: 100%;
		overflow: hidden;
		background-color: #2F3E51;
		/* position: relative; */
		background-size: 100% auto;
	}
	.nav{
		display: flex;
		align-items: center;
		height: 44px;
		border-bottom: 1px solid #383838;
	}
	.nav_title{
		width: 50%;
		margin-left:25%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}
	
	.tab_nor {
		width: 50%;
		/* height: 100%; */
		display: flex;
		flex-direction: column;
		position: relative;
		/* height: 30px; */
		/* justify-content: center; */
		align-items: center;
	}
	
</style>