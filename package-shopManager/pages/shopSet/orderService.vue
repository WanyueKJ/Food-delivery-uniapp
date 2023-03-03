<template>
	<view style="margin-top: 10px;">
		<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'" style="background-color: #F5F5F5;width: 100%;"
				class="column">
			<view v-for="(item,index) in list" :key="index" style="margin-top: 10px;">
				<view class="inputBackView" @click="editItem(item)">
					<view class="title">{{item.name}}</view>
					<image src="../../static/editaddress@2x.png" mode="aspectFit" class="rightArrow"></image>
				</view>
			</view>
			<view class="btn" @click="addServiceTip()">{{i18n.shop.fuwutip1}}</view>	
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				scrollHeight:0
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onShow() {
			this.getData()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.i18n.shop.fuwushezhi
			})
			var res = uni.getSystemInfoSync()
			// this.navHeight = 64+res.statusBarHeight
			this.scrollHeight = res.windowHeight
		},
		methods: {
			getData(){
				var that = this
				this.http.sendRequest('MerchantStore.IndexServe').then(function(data) {
						if(data.code == 0){
							that.list = data.info[0]
						}
				})
			},
			addServiceTip(){
				uni.navigateTo({
					url:'orderServiceEdit'
				})
			},
			editItem(item){
				uni.navigateTo({
					url:'orderServiceEdit?id=' + item.id + '&txt=' + item.name
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
		width: 100%;
		height: 100%;
	}
	.btn{
		display: flex;
		flex-direction: row;
		margin: 15px;
		background-color: #00C1DE;
		color: white;
		font-size: 16px;
		align-items: center;
		justify-content: center;
		height: 44px;
		
	}
	.inputBackView {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
	}
	.title{
		margin-left: 15px;
		font-size: 16px;
		text-align: left;
		color: #181818;
		margin-right: 50px;
		flex: 1;
	}
	.rightArrow{
		margin-right: 20px;
		height: 16px;
		width: 16px;
	}
</style>
