<template>
	<view>
		<view class="row topView" :style="'height:' + (statusBarHeight+menuButtonHeight+44) + 'px;'">
			<view class="searchbackView row">
				<image src="../../../static/search.png" mode="aspectFit" style="width: 15px;height: 15px;margin-top: 7.5px;margin-left: 7.5px;"></image>
				<input @input="input()" class="searchInput" type="text" :value="searchString" :placeholder="i18n.order.sousuotip2" confirm-type="search" @confirm="search"/>
			</view>
			<view class="cancleBtn" @click="doBack()">
				{{i18n.cancel}}
			</view>
		</view>
		<orderListV ref="orderListV" typeString="0" :isSearch="true" :height="scrollHeight" :searchString="searchString" @cellItemClick="cellItemClick" @doPingjia="doPingjia">
				
				
		</orderListV>
	</view>
</template>

<script>
	import orderListV from '../../../components/orderlist/orderListView.vue'
	export default {
		components:{
			orderListV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				searchString:'',
				windowWidth: 0,
				windowHeight: 0,
				statusBarHeight: 0,
				scrollHeight: 0,
				menuButtonHeight: 0,
			}
		},
		onLoad() {
			this.statusBarHeight = getApp().globalData.top
			this.menuButtonHeight = getApp().globalData.menuButtonHeight
			console.log(this.statusBarHeight, this.menuButtonHeight)
			var res = uni.getSystemInfoSync()
			this.windowWidth = getApp().globalData.windowWidth
			this.windowHeight = res.windowHeight
			this.scrollHeight = this.windowHeight - this.statusBarHeight - this.menuButtonHeight - 44
		},
		methods: {
			
			doBack(){
				uni.navigateBack({
					
				})
			},
			input(e){
				this.searchString=e.detail.value
			},
			cellItemClick(item,index){
				if(item.status == 3){
					uni.navigateTo({
						url:'./order-map-detaile?order=' + item.id + '&top_type_id=' + item.top_type_id
					})
				}else{
					uni.navigateTo({
						url:'./orderdetail?order=' + item.id + '&top_type_id=' + item.top_type_id
 					})
				} 
			},
			doPingjia(item){
				uni.navigateTo({
					url:'./orderEvaluate?orderID=' + item.id
				})
			},
			search(e){
				this.$refs.orderListV.doSearch(e.detail.value)
				uni.hideKeyboard()
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #FAFAFA;
	}
	.topView{
		width: 100%;
		position: relative;
	}
	.searchbackView{
		position: absolute;
		margin-left: 12px;
		bottom: 5px;
		height: 30px;
		background-color: #efeef2;
		border-radius: 15px;
		width: calc(100% - 74px);
	}
	.searchInput{
		margin-left: 5px;
		width: calc(100% - 45px);
		height: 100%;
		line-height: 30px;
		font-size: 15px;
		color: #323232;
	}
	.cancleBtn{
		position: absolute;
		bottom: 5px;
		right: 0px;
		width: 50px;
		height: 30px;
		line-height: 30px;
		font-size: 15px;
		color: #989898;
		text-align: center;
	}
</style>
