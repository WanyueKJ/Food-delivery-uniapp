<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.search"></wybar>
		<view class="row topSearch">
			<image src="../../../../static/search.png" mode="aspectFit"
				style="margin-left: 10px;width: 20px;height: 20px;"></image>
			<input class="sousuokuang" :placeholder="i18n.index.search" type="text" confirm-type="search"
				@confirm="doSearch">
		</view>
		<blockquote v-if="listArray.length > 0">
			<view class="row" style="width: 100%;height: 40px;background-color: #FFF;justify-content: space-around;">
				<view v-for="(item,index) in tabbar" :key="index" :class="index == tabIndex ? 'tab_sel' : 'tab_nor'"
					@click="tabbarClick(index)">
					{{item}}
				</view>
			</view>
			<scroll-view scroll-y="true" style="width: 100%;background-color: #f5f6f7;"
				:style="'height:' + scrollHeigth + 'px;'" :refresher-triggered="refresherTriggered"
				@scrolltolower="scrolltolower">

				<view v-for="(item,j) in listArray" :key="j" class="column cellBack">
					<view class="cell row" @click="gotoStore(item)">
						<image mode="aspectFill" class="cell_thumb" :src="item.thumb"></image>
						<view class="column"
							style="margin-left: 8px;overflow: hidden;height: 100px;flex: 1;margin-top: 12px;">
							<view class="nameLbale">{{item.name}}</view>
							<view class="row" style="align-items: center;">
								<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.dianping}} {{item.comment_count}}</text>
								<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.renjun}} {{item.per_capita}}</text>
							</view>
							<view class="row" style="font-size: 11px;color: #6f6f6f;align-items: center;">
								
								<text
									style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
								<text
									style="font-size: 12px;color: #FF5725;margin-left: 3px;margin-right: 3px;">分</text>
								{{item.circle_name}} {{item.type_name}}
							</view>
							<view style="display: flex;">
								<text class="goods_label" @click.stop="dorank()">{{item.circle_name}} {{item.rank}}</text>
							</view>
							<view style="display: flex;margin-top: 5px;" v-if="item.comment.length > 0">
								<text class="item_content item_content_word">{{item.comment}}</text>
							</view>
						</view>
						<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;margin-top: 35px;">
							{{item.distance}}
						</view>
					</view>


				</view>
			</scroll-view>
		</blockquote>
		<blockquote v-else>
			<view style="width: 100%;margin-top: 30%;text-align: center;font-size: 16px;color: #a8a8a8;">
				{{i18n.meishi.wujilu}}
			</view>
		</blockquote>
	</view>
</template>

<script>
	import wybar from '@/components/wybar/wyBar.vue'
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
				listArray: [],
				tabbar: [],
				tabIndex: 0,
				scrollHeigth: 0,
				page: 1,
				refresherTriggered: false,
				keywords: '',
				curDESC: {
					'overall': 'DESC'
				}
			}
		},
		onReady() {
			this.tabbar = [this.i18n.meishi.zonghe, this.i18n.meishi.juli, this.i18n.meishi
				.pingfen
			]
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			this.scrollHeigth = getApp().globalData.windowHeight - top - 40 - 46
		},
		onLoad() {

		},
		methods: {
			back() {
				uni.navigateBack({})
			},
			doSearch(e) {
				console.log(e.detail.value)
				this.page = 1
				this.keywords = e.detail.value
				this.requestData(this.curDESC)
			},
			tabbarClick(index) {
				var that = this;
				that.page = 1
				that.tabIndex = index

				if (index == 0) {
					that.curDESC = {
						'overall': 'DESC'
					}
				} else if (index == 2) {
					that.curDESC = {
						'distanc': 'ASC'
					}
				} else {
					that.curDESC = {
						'evaluate': 'ASC'
					}
				}

				that.requestData(that.curDESC)
			},
			refresherrefresh() {
				var that = this
				that.page = 1

				that.refresherTriggered = true;
				that.requestData(that.curDESC)
				console.log('自定义下拉刷新被触发');
				setTimeout(() => {
					that.refresherTriggered = false;
				}, 1000);
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData(that.curDESC)
			},
			requestData(dic) {
				var that = this
				dic.p = that.page
				dic.keywords = that.keywords
				// dic.circle_id = 0
				that.http.sendRequest('LookingShop.Search', dic).then(function(res) {
					if (res.code == 0) {
						var list = res.info[0]
						if (that.page == 1) {
							that.listArray = []
						}
						for (var i = 0; i < list.length; i++) {
							that.listArray.push(list[i])
						}
					}
				})
			},
			gotoStore(store) {
				uni.navigateTo({
					url: '../detail/index?id=' + store.id
				})
			},
			dorank() {
				uni.navigateTo({
					url: '/pages/rank/rank?type=zhaodian'
				})
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
		height: 40px;
		line-height: 40px;
		position: relative;
	}

	/* .tab_sel::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 25%;
	
		height: 2px;
		border-radius: 1px;
		width: 50%;
		background-color: #FF5725;
	} */

	.tab_nor {
		font-size: 14px;
		/* font-weight: bold; */
		color: #181818;
		height: 40px;
		line-height: 40px;
		position: relative;
	}

	.cellBack {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 134px;
		background-color: #fff;
		margin-top: 10px;
		border-radius: 8px;
		overflow: hidden;
	}

	.cell {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.cell_thumb {
		background-color: #06f;
		margin-left: 12px;
		width: 110px;
		height: 83px;
		border-radius: 4px;
		margin-top: 12px;
	}

	.nameLbale {
		/* margin-left: 8px; */
		height: 20px;
		color: #181818;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}

	.goods_label {
		/* margin-left: 8px; */
		height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		color: #FFF;
		background-color: #FEF0E5;
		color: #FF5725;
		font-size: 10px;
		font-weight: bold;
		line-height: 20px;
		margin-top: 4px;
		margin-right: 10px;
		width: auto;
	}

	.store_label {
		margin-left: 8px;
		margin-top: 4px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		height: 15px;
		width: calc(100% - 15px);
		align-items: center;
		flex-direction: wrap;
	}

	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
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
