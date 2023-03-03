<template>
	<view>
		<view class="inputBackView">
			<view class="title">{{i18n.shop.time}}</view>
			<view class="rightTxt">{{openDateStr}}</view>
			<image class="img" src="../../../static/ads-seld-right.png" mode="aspectFit" @click="click()"></image>
		</view>
	</view>
</template>

<script>
	export default {
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
				title:this.i18n.shop.shopTimeSet
			})
			this.weekends = [this.i18n.shop.Mon,this.i18n.shop.Thu,this.i18n.shop.Wen,this.i18n.shop.Thir,
							 this.i18n.shop.Fri,this.i18n.shop.Sat,this.i18n.shop.Sun]
			this.weekendsNumArr = [this.i18n.shop.one,this.i18n.shop.two,this.i18n.shop.three,this.i18n.shop.four,
								   this.i18n.shop.five,this.i18n.shop.six]
			// this.getData()
		},
		data() {
			return {
				dic:{},
				weekends:[],
				weekendsNumArr:[],
				openDateStr:''
			}
		},
		methods: {
			getData(){
				var that = this
				this.http.sendRequest('MerchantStore.Read').then(function(data) {
					console.log(data)
					that.dic = data.info[0]
					console.log(that.dic)
					that.dealwithDate(that.dic.open_date)
				})
			},
			dealwithDate(openDate){
				// console.log(openDate)
				if(!openDate || openDate==0){
					return
				}
				var dateArr = []
				for (let i = 0; i < openDate.length; i++) {
					var date = openDate[i]
					var str1 = this.weekends[date-1]
					dateArr.push(str1)
					// if(i == 0){
					// 	var str1 = this.weekends[date-1]
					// 	console.log(str1)
					// 	dateArr.push(str1)
					// }else{
					// 	var str2 = this.weekendsNumArr[date-1]
					// 	dateArr.push(str2)
					// }
					// if(openDate.length == 7){
					// 	var strlast = this.weekends[6]
					// 	dateArr.pop()
					// 	dateArr.push(strlast)
					// }
					console.log(dateArr)
					this.openDateStr = dateArr.join()
				}
			},
			
			click(){
				uni.navigateTo({
					url:'shopTimeEdit?param=' + JSON.stringify(this.dic)
				})
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
		/* height: 44px; */
		display: flex;
		flex-direction: row;
		background-color: white;
		align-items: center;
		margin-top: 10px;
	}
	.title{
		font-size: 16px;
		height: 44px;
		line-height: 44px;
		text-align: left;
		color: #181818;
		margin-left: 15px;
	}
	.rightTxt{
		font-size: 16px;
		text-align: right;
		color: #181818;
		margin-left: 15px;
		margin-right: 15px;
		flex: 1;
	}
	.img{
		width: 20px;
		height: 20px;
		margin-right: 20px;
	}
	
</style>
