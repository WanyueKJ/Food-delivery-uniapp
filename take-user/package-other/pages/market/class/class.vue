<template>
	<view>
		<wybar @clickLeft="back" :leftText="className"></wybar>
		<view class="row topSearch">
			<image src="../../../../static/search.png" mode="aspectFit"
				style="margin-left: 10px;width: 20px;height: 20px;"></image>
			<input class="sousuokuang" :placeholder="i18n.index.search" type="text" confirm-type="search"
				@confirm="doSearch">
		</view>
		<scroll-view scroll-y="true" style="width: 100%;background-color: #F5F6F7;"
			:style="'height:' + scrollHeigth + 'px;'" :refresher-triggered="refresherTriggered"
			@scrolltolower="scrolltolower">
			<view v-for="(item,index) in listArray" :key="index" class="shopBack" @click="gotoCell(item)">
				<image :src="item.thumb" mode="aspectFill" class="shopThumb"></image>
				<view class="shopRightView">
					<view class="shopName oneline">
						{{item.use_name}}
					</view>

					<view class="row" style="width: 100%;margin-top: 7px;align-items: center;">
						
						<text
							style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
						<text
							style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
			
						<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.meishi.yuexiao}} {{item.monthly_sales}}</text>

						<view style="font-size: 11px;color: #6f6f6f;margin-left: 3px;flex: 1;text-align: right;">
							{{item.time}} {{item.distance}}
						</view>
					</view>
					<view class="" style="font-size: 11px;color: #6f6f6f;">
						起送 ¥{{item.up_to_send}}
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import wybar from '@/components/wybar/wyBar.vue'

	export default {
		components: {
			wybar,
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				listArray: [],
				tabbar: [],
				tabIndex: 0,
				scrollHeigth: 0,
				classID: '',
				className: '',
				type:5,
				keywords:'',
				refresherTriggered: false,
				page:1
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.scrollHeigth = getApp().globalData.windowHeight - top - 56
		},
		onLoad(option) {
			this.classID = option.id
			this.className = option.name
			this.type = option.type
			this.requestData()
		},
		methods: {
			back() {
				uni.navigateBack({})
			},

			gotoCell(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.id + '&type=' + this.type
				})
			},
			doSearch(e) {
				console.log(e.detail.value)
				this.keywords = e.detail.value
				this.requestData()
			},
			requestData(dic) {
				var that = this
				
				that.http.sendRequest('Supermarket.SearchStore', {'type_id':that.classID,'keywords':that.keywords,'p':that.page}).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						if(that.page == 1){
							that.listArray = []
						}
						for (var i = 0; i < list.length; i++) {
							that.listArray.push(list[i])
						}
					}
				})
			},
			refresherrefresh() {
				var that = this
				that.page = 1
			
				that.refresherTriggered = true;
				that.requestData()
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 1000);
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
		overflow: hidden;
	}

	.topSearch {
		margin-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		height: 36px;
		border-radius: 8px;
		background-color: #F5F6F7;
		align-items: center;
		margin-bottom: 10px;
	}

	.sousuokuang {
		margin-left: 10px;
		margin-right: 10px;
		height: 100%;
		flex: 1;
		font-size: 14px;
		color: #181818;
	}

	.shopBack {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 96px;
		margin-top: 10px;
		background-color: #FFF;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.shopThumb {
		margin-left: 12px;
		width: 96px;
		height: 72px;
		border-radius: 4px;
		background-color: #FF5725;
	}

	.shopRightView {
		margin-left: 6px;
		height: 72px;
		display: flex;
		flex-direction: column;
		margin-right: 10px;
		flex: 1;
	}

	.shopName {
		height: 22px;
		width: 100%;
		line-height: 22px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
	}

	.shopClassName {
		margin-top: 1px;
		height: 18px;
		line-height: 18px;
		border: 0.5px solid #D6DADE;
		border-radius: 2px;
		font-size: 10px;
		color: #6f6f6f;
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
