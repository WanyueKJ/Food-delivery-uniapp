<template>
	<view>
		<view v-if="list.length == 0" class="nothing clomun">
			<image src="../../static/noorder@2x.png" mode="aspectFit" style="width: 100px;height:60px ;"></image>
			<view style="font-size:12px;height: 20px;line-height: 20px; color:#dadada;">{{i18n.shop.nocomment}}</view>
		</view>
		<view v-else>
			<scroll-view scroll-y="true" :style="'height:' + scrollHeight + 'px;'"
				style="width: 100%;background-color: #fff;" class="column" :refresher-threshold="45"
				:refresher-triggered="refresherTriggered" :refresher-enabled="true" @refresherrefresh="refresherrefresh"
				@scrolltolower="reloadmoreData">
				<pingjia :height="scrollHeight" :typeString="0" :listArr="list"></pingjia>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import pingjia from '@/components/pingjia/pingjia.vue'
	export default {
		components: {
			pingjia
		},
		data() {
			return {
				scrollHeight: 0,
				page: 1,
				list: [],
				refresherTriggered: false
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			this.scrollHeight = res.windowHeight - 64 - res.statusBarHeight

		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.titles.pinglunDetail
			})
			
			this.getListData()
		},
		methods: {
			getListData() {
				var that = this
				var param = {
					'review_status': '0',
					'recoil_status': '0',
					'p': String(that.page)
				}
				this.http.sendRequest('MerchantStoreOrderEvaluate.Index', param).then(function(data) {
					// console.log(data)
					if (data.code == 0) {
						if (that.page == 1) {
							that.list = data.info[0]
						} else {
							var arr = data.info[0]
							that.list = that.list.contace(arr)
						}
					}
				})
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getListData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			reloadmoreData() {
				this.page++
				this.getListData()

			}

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		overflow: hidden;
	}

	.nothing {
		margin-top: 150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.classView {
		background-color: rgba(0, 0, 0, 0.2);
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.classItem {
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
		color: #181818;
		background-color: white;
		border-bottom: 1px solid #e6e6e6;
	}

	.search {
		width: 100%;
		height: 44px;
		background-color: #f5f5f5;
		color: #AAAAAA;
		padding-left: 25px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
