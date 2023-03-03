<template>
	<view>
		<wybar @clickLeft="back" :leftText="className"></wybar>
		<view class="row topSearch">
			<image src="../../../static/search.png" mode="aspectFit"
				style="margin-left: 10px;width: 20px;height: 20px;"></image>
			<input class="sousuokuang" :placeholder="i18n.index.search" type="text" confirm-type="search"
				@confirm="doSearch">
		</view>
		<scroll-view scroll-x="true"
			style="width: 100%;white-space: nowrap;background-color: #FFF;margin-top: 8px;height: 32px;">
			<text v-for="(item,index) in tabbar" :key="index" :class="index == tabIndex ? 'tab_sel' : 'tab_nor'"
				@click="tabbarClick(index,item)">
				{{item.use_name}}
			</text>
		</scroll-view>
		<scroll-view scroll-y="true" :style="'height:' + scrollHeigth + 'px;'"
			style="width: 100%;background-color: #f5f6f7;" class="column" :refresher-triggered="refresherTriggered"
			@scrolltolower="scrolltolower">
			<!-- @refresherrefresh="refresherrefresh" :refresher-threshold="45" :refresher-enabled="true" -->
			<view v-for="(item,index) in listArray" :key="index" @click="gotoCell(item)" class="row item_back">
				<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
				<view class="column" style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;">
					<view class="item_biaoti"> {{item.name}}</view>
					<view class="row" style="height: 28px;align-items: center;">
						<text
							style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
						<text
							style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
						<text style="font-size: 11px;color: #6f6f6f;margin-left: 8px;">({{item.sales}}) {{item.type_name}}</text>
					</view>
					<view style="display: flex;" v-if="item.evaluate.length > 0">
						<text class="item_content item_content_word">{{item.evaluate}}</text>
					</view>
				</view>
				<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;">
					{{item.distance}}
				</view>
			</view>
		</scroll-view>
		<!-- <storeList :height="scrollHeigth" :typeString="4" @gotoCell="gotoCell"></storeList> -->

	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	// import storeList from '../../../components/storeList/index.vue'

	export default {
		components: {
			wybar,
			// storeList
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
				typeid: '0',
				page:1,
				refresherTriggered: false,
				keywords:''
			}
		},
		onReady() {
			
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.scrollHeigth = getApp().globalData.windowHeight - top - 40 - 46
		},
		onLoad(option) {
			this.classID = option.id
			this.className = option.name
			this.tabbar = [{
				'id': this.classID,
				'use_name': this.i18n.meishi.quanbu
			}]
			this.typeid = this.classID
			this.requestClass()
			this.requestData()
		},
		methods: {
			doSearch(e) {
				console.log(e.detail.value)
				this.keywords = e.detail.value
				this.requestData()
			},
			requestClass() {
				var that = this
				that.http.sendRequest('FineFood.FoodType', {
					'type_id': that.classID,
					'level': 1
				}).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						for (var i = 0; i < list.length; i++) {
							that.tabbar.push(list[i])
						}
					}
				})
			},
			requestData() {
				var that = this
				that.http.sendRequest('FineFood.FoodTypeSearch', {
					'type_id': that.typeid,
					'p': that.page,
					'keywords':that.keywords
				}).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						for (var i = 0; i < list.length; i++) {
							that.listArray.push(list[i])
						}
					}
				})
			},
			back() {
				uni.navigateBack({})
			},

			tabbarClick(index, item) {
				var that = this;
				that.tabIndex = index
				that.typeid = item.id
				that.page = 1
				that.listArray = []
				that.requestData()

			},
			gotoCell(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.id
				})
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
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
		}
	}
</script>

<style>
	.topSearch {
		margin-left: 15px;
		margin-top: 10px;
		width: calc(100% - 30px);
		height: 36px;
		border-radius: 8px;
		background-color: #F5F6F7;
		align-items: center;
	}

	.sousuokuang {
		margin-left: 10px;
		margin-right: 10px;
		height: 100%;
		flex: 1;
		font-size: 14px;
		color: #181818;
	}

	.tab_sel {
		font-size: 14px;
		color: #FF5725;
		margin-top: 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 12px;
		background-color: #F5F6F7;
		border: 1px solid #FF5725;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 15px;
	}


	.tab_nor {
		font-size: 14px;
		color: #FF5725;
		/* margin-top: 8px; */
		height: 24px;
		line-height: 24px;
		border-radius: 12px;
		background-color: #F5F6F7;
		padding-left: 10px;
		padding-right: 10px;
		margin-left: 15px;
	}
	.item_back {
		width: calc(100% - 30px);
		height: 96px;
		margin-left: 15px;
		border-radius: 8px;
		margin-top: 10px;
		overflow: hidden;
		position: relative;
		background-color: #FFF;
		align-items: center;
	}
	
	
	
	.item_image {
		/* margin-top: 12px; */
		margin-left: 12px;
		width: 96px;
		height: 72px;
		border-radius: 4px;
		overflow: hidden;
		/* background-color: #ff00dd; */
	}
	
	.item_biaoti {
		/* margin-top: 8px; */
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* max-width: calc(100% - 20px); */
	}
	
	.item_content {
		text-overflow: ellipsis;
	
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	
		display: -moz-box;
		-moz-line-clamp: 3;
		-moz-box-orient: vertical;
	
		overflow-wrap: break-word;
		word-break: break-all;
		white-space: normal;
		overflow: hidden;
	}
	
	.item_content_word {
		width: auto;
		height: 20px;
		border-radius: 2px;
		background-color: #FEF0E5;
		color: #FF5725;
		font-size: 10px;
		line-height: 20px;
		padding-left: 5px;
		padding-right: 5px;
	}
</style>
