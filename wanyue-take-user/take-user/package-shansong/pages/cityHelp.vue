<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="topImageView" :style="'height:' + windowWidth*0.35 + 'px;'">
			<swiper-item v-for="(item,index) in slide" :key="index" style="width: 100%;height: 100%;overflow: hidden;border-radius: 12px;">
				<image :src="item.image" mode="scaleToFill"  style="width: 100%;height: 100%;overflow: hidden;border-radius: 12px;">
				</image>
			</swiper-item>
		</swiper>
		
		<scroll-view scroll-x="ture" class="scroll-type">
			<view v-for="(item,index) in typearray" :key="index" class="item-bbbb" @click="itemClick(item,index)">
				<view :class=" selectedIndex == index ? 'item' : 'itemNor'">
					<image class="item-img" :src="item.thumb" mode=""></image>
					<text class="item-title">{{item.name}}</text>
				</view>

			</view>
		</scroll-view>
		<view class="inputBackView">
			<textarea :value="textValue" :placeholder="placeholder" class="textView" @input="input"/>
			<scroll-view scroll-y="true" class="typeView">
				<text v-for="(item,index) in typearray[selectedIndex].list" :key="index" class="scrol-item" @click="clickToBeizhu(item,index)">{{item.name}}</text>
			</scroll-view>
		</view>
		<text class="subBtnClass" @click="doAddOrder()">{{i18n.shansong.quxiadan}}</text>
		
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
				helpType: '',
				slide: [],
				windowWidth: 0,
				selectedIndex: 0,
				typearray:[],
				textValue:'',
				placeholder:''
			}
		},
		onLoad(option) {
			var that = this
			that.windowWidth = getApp().globalData.windowWidth
			
			that.helpType = option.helpType
			console.log(option.helpType)
			if (option.helpType == 2) {
				that.placeholder = that.i18n.shansong.bangmaiTip
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.tongchengbangmai
				})
			} else if (option.helpType == 3) {
				that.placeholder = that.i18n.shansong.bangpaiTip
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.bangwopaidui
				})
			} else {
				that.placeholder = that.i18n.shansong.bangbanTip
				uni.setNavigationBarTitle({
					title: that.i18n.shansong.bangwoban
				})
			}
			that.getClassList()
		},
		methods: {
			itemClick(item, index) {
				if(this.selectedIndex != index){
					this.textValue = ''
					this.selectedIndex = index
				}
				
			},
			clickToBeizhu(item,index){
				this.textValue = this.textValue + item.name
			},
			input(e){
				this.textValue = e.detail.value
			},
			doAddOrder(){
				uni.setStorage({
					key: 'bangmaipaiban',
					data: this.textValue,
					//this.typearray[this.selectedIndex].name + 
					success() {
						
					}
				})
				uni.navigateTo({
					url:'./cityHelpAddOrder/cityHelpAddOrder?helpType=' + this.helpType
				}) 
			},
			getClassList(){
				var url = ''
				var that = this
				
				if (that.helpType == 2) {
					url = 'Helpbuy.GetCate'
				} else if (that.helpType == 3) {
					url = 'Helpqueue.GetCate'
				} else {
					url = 'Helpwork.GetCate'
				}
				that.http.sendRequest(url,{}).then(function(res){
					if(res.code == 0){
						that.typearray = res.info[0].list
						that.slide = res.info[0].slide
					}
				})
			}
		}
	}
</script>

<style>
	page {
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #f7f8f9;
	}

	.content {
		background-color: #f7f8f9;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.topImageView {
		margin-top: 10px;
		margin-left: 12px;
		width: calc(100% - 24px);
		border-radius: 12px;
		background-color: #989898;
		overflow: hidden;
	}

	.scroll-type {
		/* 		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
 */
		margin-top: 5px;
		margin-left: 12px;
		width: calc(100% - 24px);
		height: 90px;
		/* background-color: #007AFF; */
		white-space: nowrap;
		overflow-x: hidden;
	}

	.item-bbbb {
		display: inline-block;
		margin-top: 5px;
		width: 20%;
		height: 80px;
	}

	.itemNor {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.item {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		/* background-color: #FF0000; */
	}

	.item::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 4px;
		width: 28px;
		height: 4rpx;
		margin: 0 auto;
		background-image: linear-gradient(to bottom, #FF5725, #FF5725);
		border-radius: 2px;
	}

	.item-title {
		width: 100%;
		height: 28px;
		line-height: 28px;
		color: #646464;
		font-size: 14px;
		text-align: center;
	}

	.item-img {
		width: 24px;
		height: 24px;
		/* background-color: #007AFF; */
	}
	.inputBackView {
		margin-top: 10px;
		margin-left: 12px;
		width: calc(100% - 24px);
		height: 222px;
		background-color: #FFFFFF;
		border-radius: 12px;
	}
	.textView{
		margin-left: 0;
		margin-top: 10px;
		margin-left: 10px;
		/* margin-right: 10px; */
		/* padding: 10px; */
		width: calc(100% - 20px);
		height: 120px;
		color: #323232;
		line-height: 20px;
		/* background-color: #18BC37; */
	}
	.typeView{
		margin-top: 10px;
		margin-left: 12px;
		width: calc(100% - 24px);
		height: 90px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.scrol-item{
		display: inline-block;
		width: calc(25% - 12px);
		height: 24px;
		border-radius: 2px;
		background-color: #F1F1F1;
		margin-right: 12px;
		margin-top: 6px;
		margin-bottom: 6px;
		color: #989898;
		line-height: 24px;
		font-size: 12px;
		text-align: center;
	}
	.subBtnClass{
		margin-top: 60rpx;
		margin-left: 20rpx;
		width: 710rpx;
		height: 96rpx;
		border-radius: 48rpx;
		background-color: #FF5725;
		line-height: 96rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}
</style>
