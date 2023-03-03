<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.mine.zuji"></wybar>
		<view class="" style="margin-left: 25%;margin-top: 100px;width: 50%;" v-if="listArray.length == 0">
			<image src="../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
			<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
				还没有浏览记录
			</view>
		</view>
		<view class="" style="width: 100%;" v-else>
			<scroll-view scroll-y="true" :style="'height:' + scrollHeigth + 'px;'"
				style="width: 100%;background-color: #f5f6f7;" class="column" :refresher-triggered="refresherTriggered"
				@scrolltolower="scrolltolower" :refresher-enabled="true" :refresher-threshold="45"
				@refresherrefresh="refresherrefresh">
				
				<view v-for="(item,index) in listArray" :key="index" @click="gotoCell(item)" class="row"
					style="width: 100%;height: 96px;margin-top: 10px;">
					<view style="width: 27px;height: 100%;align-items: center;display: flex;" v-if="isEdit">
						<image
							:src="editArray.indexOf(item.id) != -1 ? '../../../static/item-sel.png' : '../../../static/item-nor.png'"
							mode="aspectFit" style="margin-left: 10px;width: 16px;height: 16px;"
							@click.stop="doSelecd(item.id)">
						</image>
					</view>
					<view class="item_back row">
						<image mode="aspectFill" class="item_image" :src="item.store.thumb"></image>
						<view class="column"
							style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;margin-right: 15px;">
							<view class="item_biaoti">{{item.store.use_name}}</view>
							<view class="row" style="height: 28px;align-items: center;">
								<image src="../../../static/meishi/pingfen.png" mode="" style="width: 10px;height: 10px;">
								</image>
								<text
									style="font-size: 12px;font-weight: bold;color: #FFBF47;margin-left: 3px;">{{item.store.stars}}</text>
							</view>
							<view class="row" style="align-items: center;">
								<view class="item_content item_content_word" style="flex: 1;">
									{{item.store.type_name + item.store.circle_name}}
								</view>
								<view class="item_content_word">
									{{item.updatetime}}
								</view>
							</view>
						</view>
					</view>
			
				</view>
			
			</scroll-view>
			<view style="width: 100%;height: 1px;background-color: rgba(50, 50, 50, 0.1);">
			
			</view>
			<view class="row" style="width: 100%;height: 100px;background-color: #FFF;">
				<blockquote style="width: 100%;display: flex;flex-direction: row;" v-if="isEdit">
					<view class="row" style="width: 70px;height: 49px;align-items: center;margin-top: 15px;" v-if="isEdit">
						<image :src="isAll ? '../../../static/item-sel.png' : '../../../static/item-nor.png'"
							mode="aspectFit" style="margin-left: 10px;width: 16px;height: 16px;" @click="doSelecdAll()">
						</image>
						<view style="margin-left: 5px;font-size: 14px;color: #6F6F6F;">
							{{i18n.yilou.quanxuan}}
						</view>
					</view>
					<view class="save" @click="doDelate()" style="width: calc(100% - 100px);">
						{{i18n.mine.shanchu}}
					</view>
				</blockquote>
				<blockquote style="width: 100%;" v-else>
					<view class="save" @click="doEdit()">
						{{i18n.mine.bianji}}
					</view>
				</blockquote>
			</view>
		</view>
		

	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
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
				scrollHeigth: 0,
				page: 1,
				refresherTriggered: 0,
				editArray: [],
				isEdit: false,
				isAll: false
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();
			var top = 44
			if (parseInt(res.safeArea.top) > top) {
				top = parseInt(res.safeArea.top)
			}
			// #ifdef APP-PLUS
			this.scrollHeigth = getApp().globalData.windowHeight - (top + 120)

			// #endif
			// #ifdef MP-WEIXIN
			this.scrollHeigth = getApp().globalData.windowHeight - (top + 80)

			// #endif		},
			onLoad() {
					this.requestData()
				},
				methods: {
					back() {
						uni.navigateBack({

						})
					},
					requestData() {
						var that = this
						that.http.sendRequest('MerchantStoreFoot.Index', {
							'p': that.page
						}).then(function(res) {
							// that.listArray = res.info
							if (res.code == 0) {
								if (that.page == 1) {
									that.listArray = res.info[0]
								} else {
									that.listArray = that.listArray.concat(res.info[0])
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
					// doSelecd(index) {
					// 	if (this.editArray.indexOf(index) != -1) {
					// 		for (let i = 0; i < this.editArray.length; i++) {
					// 			const obj = this.editArray[i]
					// 			if (obj == index) {
					// 				this.editArray.splice(i, 1)
					// 			}

					// 		}
					// 	} else {
					// 		this.editArray.push(index)
					// 	}
					// 	if (this.editArray.length == this.listArray.length) {
					// 		this.isAll = true
					// 	} else {
					// 		this.isAll = false
					// 	}
					// },
					doSelecd(index) {
						if (this.editArray.indexOf(index) != -1) {
							for (let i = 0; i < this.editArray.length; i++) {
								const obj = this.editArray[i]
								if (obj == index) {
									this.editArray.splice(i, 1)
								}

							}
						} else {
							this.editArray.push(index)
						}
						if (this.editArray.length == this.listArray.length) {
							this.isAll = true
						} else {
							this.isAll = false
						}
					},
					doSelecdAll() {
						this.isAll = !this.isAll
						this.editArray = []
						if (this.isAll) {
							for (let i = 0; i < this.listArray.length; i++) {
								this.editArray.push(this.listArray[i].id)
							}
						}
						console.log(this.editArray,this.listArray,this.isAll)
					},
					doEdit() {
						this.isEdit = true
					},
					doDelate() {
						var that = this
						if (that.editArray.length > 0) {

							that.http.sendRequest('MerchantStoreFoot.ListDelete', {
								'json_id': JSON.stringify(that.editArray)
							}).then(function(res) {
								// that.listArray = res.info
								if (res.code == 0) {
									for (let i = 0; i < that.editArray.length; i++) {
										const index = that.editArray[i]
										for (let j = 0; j < that.listArray.length; j++) {
											if (that.listArray[j].id == index) {
												that.listArray.splice(j, 1)
											}
										}
									}
									that.editArray = []
									that.isEdit = false
								}

							})
						} else {
							that.isEdit = false
						}


					},
					gotoCell(item) {
						//店铺总类型 1:美食 2:闪送 3:服务 4:找店 5:超市 6:生鲜 7:送药 8:家政
						if (item.store.top_type_id == 1) {
							uni.navigateTo({
								url: '/package-meishi/pages/store/store?id=' + item.store.id
							})
						} else if (item.store.top_type_id == 3) {
							uni.navigateTo({
								url: '/package-other/pages/service/detaile/index?id=' + item.store.id
							})
						} else if (item.store.top_type_id == 4) {
							uni.navigateTo({
								url: '/package-other/pages/findShop/detail/index?id=' + item.store.id
							})
						} else {
							uni.navigateTo({
								url: '/package-other/pages/market/store/store?id=' + item.store.id
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
		overflow: hidden;
	}

	.item_back {
		width: calc(100% - 30px);
		height: 96px;
		margin-left: 15px;
		border-radius: 8px;
		/* margin-top: 10px; */
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
		background-color: #eee;
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
		/* border-radius: 2px; */
		/* background-color: #FEF8E3; */
		color: #6F6F6F;
		font-size: 11px;
		line-height: 20px;
		/* padding-left: 5px;
		padding-right: 5px; */
	}

	.save {
		margin-left: 15px;
		margin-top: 15px;
		width: calc(100% - 30px);
		height: 49px;
		line-height: 49px;
		border-radius: 8px;
		color: #FFF;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		background-color: #FF5725;

	}
</style>
