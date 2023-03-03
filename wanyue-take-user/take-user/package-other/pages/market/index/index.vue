<template>
	<view>
		<view class="top">
			<view style="background: linear-gradient(to right, #FF8D58, #FF5D37);width: 100%;height: 118px;">
				<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
				<view class="row" style="width: 100%;height: 40px;align-items: center;">
					<image @click="doBack()" src="../../../../static/back-white.png" mode="aspectFit"
						style="width: 32px;height: 32px;margin-left: 12px;"></image>
					<view style="margin-left: 5px;flex: 1;" class="column">
						<view style="color: #FFF;font-size: 16px;font-weight: bold;height: 20px;line-height: 20px;">
							{{titlestr}}
						</view>
					</view>
				</view>
			</view>
			<view class="row topSearchBtn" @click="doSearch()">
				<image src="../../../../static/search.png" mode="aspectFit"
					style="margin-left: 10px;width: 20px;height: 20px;"></image>
				<view style="margin-left: 10px;font-size: 14px;color: #6F6F6F;">
					{{i18n.index.search}}
				</view>
			</view>
		</view>
		<view class="column" style="width: 100%;" v-if="distance_store">
			<view class="bigImage">
				<swiper class="index-banner swiper" circular="false" indicator-dots="true" autoplay="true">
					<swiper-item class="index-banner-img" @click="bannerTo(item)" v-for="(item, index) in bannerList"
						:key="item.id">
						<image class="index-banner-img" :src="item.image" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="row" style="width: 100%;margin-top: 20px;flex-wrap: wrap;">
				<view v-for="(item,index) in itemArray" :key="index" class="column array3Item" @click="doClass(item)">
					<image :src="item.thumb" mode="aspectFit" style="width: 50px;height: 50px;border-radius: 20px;">
					</image>
					<view class="oneline" style="font-size: 12px;color: #383838;margin-top: 6px;text-align: center;width: 50px;">
						{{item.use_name}}
					</view>
				</view>
			</view>
			<view class="column"
				style="width: calc(100% - 30px);margin-left: 15px;background-color: #FFF;border-radius: 8px;margin-top: 10px;" v-if="recommend.length > 0">
				<view class=""
					style="width: calc(100% - 20px);margin-left: 10px;height: 50px;line-height: 50px;font-size: 17px;font-weight: bold;">
					{{chinaMark}}
				</view>
				<view class="row" style="width: 100%;flex-wrap: wrap;">
					<view class="" v-for="(item, index) in recommend" @click="doStore(item)" style="margin-left: 6px;width: calc(33.33% - 8px);height: 146px;border-radius: 8px;position: relative;overflow: hidden;margin-bottom: 10px;background-color: #F9F9F9;">
						<image :src="item.thumb" mode="aspectFill"
							style="width: 100%;height: 84px;"></image>
						<view class="oneline" style="font-size: 14px;color: #333;margin-top: 2px;margin-left: 5px;width: calc(100% - 10px);font-weight: bold;">
							{{item.name}}
						</view>
						<view class="row" style="margin-left: 5px;width: calc(100% - 10px);align-items: center;">
							<view class="grayword oneline"> 
								{{item.type_name}}
							</view>
							<view class="" style="width: 1px;height: 8px;background-color: #989898;margin-left: 3px;margin-right: 3px;">
								
							</view>
							<view class="grayword" style="flex: 1;">
								{{item.distance}}
							</view>
						</view>
						<view class="row" style="margin-left: 5px;width: calc(100% - 10px);align-items: center;">
							<view class="grayword" style="flex: 1;">
								月销{{item.month_sales}}
							</view>
							
							<view class="" style="font-size: 12px;font-weight: bold;color: #FF5725;">
								{{item.stars}}分
							</view>
						</view>
					</view>
				</view>
				<!-- <view style="" v-for="(item, index) in special" @click="doZhuanti(item,index)">
					
				</view> -->
			</view>
			<view class="column"
				style="width: calc(100% - 30px);margin-left: 15px;background-color: #FFF;border-radius: 8px;margin-top: 10px;" v-if="recommend.length > 0">
				<view class=""
					style="width: calc(100% - 20px);margin-left: 10px;height: 50px;line-height: 50px;font-size: 17px;font-weight: bold;">
					{{goodgoods}}
				</view>
				<view class="row" style="width: 100%;flex-wrap: wrap;">
					<view class="" v-for="(item, index) in hotArray" @click="gotoGoods(item)" style="margin-left: 6px;width: calc(25% - 7.5px);margin-bottom: 10px;">
						<image :src="item.image" mode="aspectFill"
							style="width: 100%;border-radius: 4px;" :style="'height: ' + imgWidth + 'px;'"></image>
						<view class="oneline" style="font-size: 12px;color: #333;margin-top: 2px;margin-left: 5px;width: calc(100% - 10px);font-weight: bold;">
							{{item.use_name}}
						</view>
						<view class="" style="font-size: 13px;font-weight: bold;color: #FF5725;">
							¥ {{item.use_price}}
						</view>
					</view>
				</view>
				<!-- <view style="" v-for="(item, index) in special" @click="doZhuanti(item,index)">
					
				</view> -->
			</view>
			
			<view style="width: 100%;height: 60px;display: flex;">
				<view class="shopTitle">
					附近商店
				</view>
			</view>
			<view class="sectionBack">
				<view v-for="(item,index) in distance_store" :key="index" class="shopBack" @click="gotoCell(item)">
					<image :src="item.thumb" mode="aspectFill" class="shopThumb"></image>
					<view class="shopRightView">
						<view class="shopName oneline">
							{{item.use_name}}
						</view>
			
						<view class="row" style="width: 100%;margin-top: 2px;align-items: center;">
							<text
								style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
							<text
								style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">起送 ¥{{item.up_to_send}}</text>
							<!-- <text style="font-size: 11px;color: #FF5725;margin-left: 3px;" v-else>免费配送</text> -->
							<view class="oneline" style="font-size: 11px;color: #6f6f6f;margin-left: 3px;flex: 1;text-align: right;">
								{{item.time}} {{item.distance}}
							</view>
						</view>
						
						<view class="" style="display: flex;margin-top: 5px;">
							<text class="shopClassName">
								{{item.type_name}}
							</text>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				titlestr: '',
				chinaMark: '',
				goodgoods:'',
				system_top: 44,
				weixinMenuWidth: 12,
				scrollHeight: 0,
				imgWidth: 0,
				itemArray: [],
				bannerList: [],
				recommend: [],
				hotArray: [],
				type: '',
				distance_store: null

			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			const res = uni.getSystemInfoSync();

			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			this.weixinMenuWidth = weinfo.width + 12
			// #endif
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - 60 - this.system_top
			this.imgWidth = (res.windowWidth - 30) * 0.25 - 7.5
		},
		onLoad(option) {
			this.type = option.type
			if (this.type == 5) {
				this.titlestr = '超市便利'
				this.chinaMark = '优选好店'
				this.goodgoods = '热销商品'
			} else if (this.type == 6) {
				this.titlestr = '生鲜菜场'
				this.chinaMark = '优选好店'
				this.goodgoods = '好货精选'
			} else if (this.type == 7) {
				this.titlestr = '万岳买药'
				this.chinaMark = '严选药店'
				this.goodgoods = '常用药品'
			} else if (this.type == 8) {
				this.titlestr = '生活服务'
				this.chinaMark = '优选商户'
				this.goodgoods = '热销服务'
			}
			this.requestData()
		},
		methods: {
			requestData() {

				var that = this
				that.http.sendRequest('Supermarket.Home', {
					'type_id': that.type
				}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.bannerList = info.banner
						that.itemArray = info.store_type
						that.recommend = info.recommend
						that.hotArray = info.recommend_product
						that.distance_store = info.distance_store
					}
				})
			},
			doBack() {
				uni.navigateBack({

				})
			},
			doSearch() {
				uni.navigateTo({
					url: '../search/goods?type=' + this.type
				})
			},
			bannerTo(item) {
				if (item.url.length > 6) {
					uni.setStorage({
						key: 'weburl',
						data: item.url,
						success() {
							uni.navigateTo({
								url: '/pages/webView/webView',
							});
						}
					})
				}
			},

			doClass(item) {
				uni.navigateTo({
					url: '../class/class?id=' + item.id + '&name=' + item.use_name + '&type=' + this.type
				})
			},
			gotoCell(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.id + '&type=' + this.type
				})
			},
			doxihuan() {
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				uni.navigateTo({
					url: '/package-mine/pages/xihuan/xihuan'
				})
			},
			gotoGoods(item) {
				uni.navigateTo({
					url: '../goodsDetaile/index?id=' + item.id + '&type=' + this.type
				})
			},
			doStore(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.id + '&type=' + this.type
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
		overflow-x: hidden;
	}

	.top {
		width: 100%;
		height: 150px;
		position: relative;

	}

	.topSearchBtn {
		position: absolute;
		left: 15px;
		right: 15px;
		bottom: 15px;
		height: 40px;
		border-radius: 8px;
		background-color: #FFF;
		/* box-shadow: rgba(50,50,59,0.1) 10px 10px; */
		-moz-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		-webkit-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		align-items: center;
	}

	.bigImage {
		margin-left: 15px;
		width: calc(100% - 30px);
		border-radius: 8px;
		height: 130px;
		background-color: #FF5725;
		transform: translateY(0);
		overflow: hidden;
	}

	.index-banner-img {
		width: 100%;
		height: 100%;
		border-radius: 8px;

	}

	.index-banner image {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	.array3Item {
		width: calc(20%);
		height: 80px;
		justify-content: center;
		align-items: center;
	}

	.sectionTitle {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		font-weight: bold;
		margin-top: 10px;
		padding-left: 15px;
		position: relative;
	}

	.shopTitle {
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		font-weight: bold;
		margin-top: 10px;
		margin-left: 15px;
		position: relative;
	}

	.shopTitle::after {
		content: "";
		position: absolute;
		left: calc(50% - 6px);
		bottom: 5px;
		width: 12px;
		height: 2px;
		border-radius: 1px;
		background-color: #FF5725;
	}

	.sectionBack {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.chinaMarket {
		height: 82px;
		border-radius: 4px;
		width: calc(33.33% - 5.7px);
		background-color: #FF5725;
	}

	.chinaMarket:not(:nth-child(3n)) {
		margin-right: 8px;
	}

	.hotMarket {
		border-radius: 4px;
		width: calc(25% - 3.75px);
		background-color: #FF5725;
		/* height: 0; */
		/* padding-bottom: calc(25% - 3.75px); */
		margin-bottom: 10px;
		overflow: hidden;
		position: relative;
	}

	.hotMarket:not(:nth-child(4n)) {
		margin-right: 5px;
	}

	.shopBack {
		width: 100%;
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
		color: #131313;
	}

	.shopClassName {
		
		height: 18px;
		line-height: 18px;
		border: 0.5px solid #D6DADE;
		border-radius: 2px;
		font-size: 10px;
		color: #6f6f6f;
		padding-left: 8px;
		padding-right: 8px;
	}
	.grayword {
		color: #6F6F6F;
		font-size: 11px;
	}
</style>
