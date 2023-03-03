<template>
	<view>
		<wybar @clickLeft="back" :leftText="titleStr"></wybar>
		<scroll-view scroll-y="true" style="width: 100%;background-color: #FFFFFF;"
			:style="'height:' + scrollHeight + 'px;'" :refresher-triggered="refresherTriggered"
			@scrolltolower="scrolltolower" :refresher-enabled="true" :refresher-threshold="45"
			@refresherrefresh="refresherrefresh">
			<view v-for="(item,index) in array" :key="index" class="cell row" @click="click(item)">
				<image :src="item.thumbnail" mode="aspectFill" style="width: 125px;height: 94px;border-radius: 4px;"></image>
				<view class="column" style="height: 94px;width: calc(100% - 135px);margin-left: 8px;">
					<view class="threeLine" style="font-size: 14px;font-weight: bold;flex: 1;width: 100%;">
						{{item.post_title}}
					</view>
					<view class="" style="color: #6f6f6f;font-size: 12px;line-height: 18px;">
						{{item.update_time}}
					</view>
				</view>
			</view>
		</scroll-view>
		

	</view>
</template>

<script>
	import wybar from "@/components/wybar/wyBar.vue"
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				array: [],
				titleStr: '',
				scrollHeight: 0,
				page: 1,
				refresherTriggered: 0,
				zID:''
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = getApp().globalData.windowHeight - (top + 40)
		},
		onLoad(option) {
			this.titleStr = option.title
			this.zID = option.id
			this.requestData()
		},
		methods: {
			requestData(){
				var that = this
				that.http.sendRequest('LookingShop.SpecialCategory', {
					'id': that.zID,
					'p': that.page
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						if (that.page == 1) {
							that.array = res.info[0]
						} else {
							that.array = that.array.concat(res.info[0])
						}
					}
				
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
			click(item){
				uni.setStorage({
					key: 'weburl',
					data: item.href,
					success() {
						uni.navigateTo({
							url: '/pages/webView/webView',
						});
					}
				})
			},
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;

	}

	.cell {
		height: 130px;
		width: calc(100% - 30px);
		margin-left: 15px;

		border-bottom: 1px solid #F5F5F5;
		align-items: center;


	}
	.threeLine{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
