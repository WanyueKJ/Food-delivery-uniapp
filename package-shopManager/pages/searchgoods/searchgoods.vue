<template>
	<view>
		<view class="topImageView" :style="'height:' + topHeight + 'px;'">
			<view class="nav" :style="'margin-top:' + marginTopHeight + 'px;'">
				<image class="backimg" src="../../../static/whiteback@2x.png" mode="aspectFit" @click="back()"></image>
				<text class="nav_title">{{i18n.shop.searchTitle}}</text>
			</view>
			<!-- 搜索 -->
			<view class="row" style="width: 100%;height: 60px;">
				<view class="search">
					<image src="../../static/search.png" mode="aspectFit"
						style="margin-left: 15px;margin-top: 6px; width: 20px;height: 20px;"></image>
					<input class="search_input" confirm-type="search" type="text" :value="keyStr" @input="search"
						:placeholder="i18n.shop.searchtip" focus />
				</view>
			</view>
		</view>
		<view v-if="listArr.length == 0" class="nothing clomun">
			<image src="../../../static/noorder@2x.png" mode="aspectFit" style="width: 100px;height:60px ;"></image>
			<view style="font-size:12px;height: 20px;line-height: 20px; color:#dadada;">{{i18n.shop.nodata}}</view>
		</view>
		<view v-else class="goodslist" :style="'height:' + scrollHeight + 'px;'">
			<scroll-view id="shangpin" scroll-y="true" style="width:100%;height: 100%;" :scroll-into-view="toView"
				:refresher-threshold="45" :refresher-triggered="refresherTriggered" :refresher-enabled="true"
				@refresherrefresh="refresherrefresh" @scrolltolower="reloadmoreData">
				<view v-for="(item,index) in listArr" :key="index" style="width: 100%;" :id="'header' + index"
					class="cell row">
					<image :src="item.image" mode="aspectFill" class="cell_thumb"></image>
					<view v-show="!item.is_show" class="xiajiatip">{{i18n.shop.xiajia2}}</view>
					<view class="column" style="width: calc(100% - 100px);">
						<view class="nameLbale oneline">{{item.use_name}}</view>
						<view class="row store_label">
							<text style="margin-right: 5px;">{{i18n.shop.sales}}：{{item.sales}}</text>
							<view v-if="showKucun" style="color: #6F6F6F;font-size: 11px;">{{i18n.shop.kucun}}：{{item.repertory}}</view>
							
							<!-- <text>{{i18n.shop.kucun}}：{{item.repertory}}</text> -->
						</view>
						<view style="margin-left: 8px;color: #EF6B2A; align-items: center;flex: 1;font-size: 14px;">
							{{i18n.index.moneyFuhao}} {{item.price}}
						</view>
						<view v-if="item.is_show" class="xiajia" @click="xiajia(item)">{{i18n.shop.xiajia}}</view>
						<view v-else class="xiajia" @click="shangjia(item)">{{i18n.shop.shangjia}}</view>
						<view class="rightedit" @click="edit(item)">{{i18n.shop.edit}}</view>
					</view>
				</view>
			</scroll-view>
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
				scrollHeight: 0,
				topHeight:0,
				marginTopHeight:0,
				refresherTriggered: false,
				toView: '',
				keyStr: '',
				listArr: [],
				page: 1,
				showClearIcon:false,
				showKucun:false
			}
		},
		onLoad() {
			var res = uni.getSystemInfoSync()
			this.marginTopHeight = getApp().globalData.menuButtonHeight + getApp().globalData.statusBarHeight
			this.topHeight = this.marginTopHeight + 60 + 44
			this.scrollHeight = res.windowHeight - this.topHeight
		},
		onShow() {
			var shopinfo = uni.getStorageSync('shopinfo')
			// console.log(shopinfo)
			var platformID = shopinfo.top_type_id
			if (parseInt(platformID) == 5) {
				this.showKucun = true
			}else{
				this.showKucun = false
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			getSearchData() {
				var that = this
				var param = {
					'p': this.page,
					'keywords': this.keyStr
				}
				this.http.sendRequest('MerchantStoreProduct.Search', param).then(function(data) {
					if (data.code == 0) {
						if (that.page == 1) {
							that.listArr = data.info[0]
						} else {
							that.listArr = that.listArr.concat(data.info[0])
						}

					}
				})
			},
			search(res) {
				this.keyStr = res.detail.value
				// if (this.keyStr.length > 0) {
				//     this.showClearIcon = true;
				// } else {
				//     this.showClearIcon = false;
				// }
				this.getSearchData()

			},
			clearIcon() {
			    this.keyStr = '';
			    this.showClearIcon = false;
			},
			edit(item) {
				uni.navigateTo({
					url: '../goodsManager/addGoods?productID=' + item.id
				})
			},
			xiajia(item) {
				//下架
				console.log(111, item.id)
				var that = this
				var param = {
					'is_show': '0',
					'id': item.id
				}
				this.http.sendRequest('MerchantStoreProduct.Status', param).then(function(data) {
					if (data.code == 0) {
						that.getListData()
					}
				})
			},
			shangjia(item) {
				//上架
				console.log(222, item.id)
				var that = this
				var param = {
					'is_show': '1',
					'id': item.id
				}
				this.http.sendRequest('MerchantStoreProduct.Status', param).then(function(data) {
					if (data.code == 0) {
						that.getListData()
					}
				})
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.page = 1
				this.getSearchData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			reloadmoreData() {
				this.page++
				//this.p = parseInt(this.p) + 1;
				this.getSearchData()

			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}

	.xiajiatip {
		position: absolute;
		text-align: center;
		color: white;
		background-color: rgba(0, 0, 0, 0.3);
		font-size: 14px;
		line-height: 30px;
		margin-left: 15px;
		width: 76px;
		height: 30px;
		top: 25px;
	}
	.nothing {
		margin-top:150px;
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.xiajia {
		position: absolute;
		right: 15px;
		width: 70px;
		height: 26px;
		border: 0.5px solid #00c1de;
		border-radius: 1px;
		font-size: 14px;
		text-align: center;
		color: #00c1de;
		line-height: 26px;
		bottom: 10px;
	}

	.rightedit {
		bottom: 10px;
		width: 70px;
		position: absolute;
		right: 100px;
		height: 26px;
		border: 0.5px solid #00c1de;
		border-radius: 1px;
		font-size: 14px;
		text-align: center;
		color: #00c1de;
		line-height: 26px;
	}

	.cell {
		width: 100%;
		height: 115px;
		margin-bottom: 12px;
		position: relative;
		border-bottom: 1px solid #E6E6E6;
	}

	.cell_thumb {
		margin-left: 15px;
		margin-top: 15px;
		width: 76px;
		height: 76px;
		border-radius: 4px;
	}

	.nameLbale {
		margin-left: 8px;
		margin-top: 15px;
		height: 20px;
		color: #181818;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}


	.store_label {
		margin-left: 8px;
		margin-top: 4px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		width: calc(100% - 15px);
		align-items: center;
	}

	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
	}

	.goodslist {
		width: 100%;

	}

	.backimg {
		width: 20px;
		height: 20px;
		margin-left: 15px;

	}

	.topImageView {
		width: 100%;
		overflow: hidden;
		background-color: #2F3E51;
		/* position: relative; */
		background-size: 100% auto;
	}

	.nav {
		display: flex;
		align-items: center;
		height: 44px;
		width: 100%;
		border-bottom: 1px solid #383838;
	}

	.nav_title {
		width: 50%;
		margin-left: 17%;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}

	.search {
		background-color: white;
		height: 32px;
		margin: 15px;
		border-radius: 16px;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.search_input {
		flex: 1;
		height: 32px;
		margin-left: 15px;
	}
</style>
