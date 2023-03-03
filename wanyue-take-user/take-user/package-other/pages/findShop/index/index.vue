<template>
	<view>
		<view class="top">
			<view style="background: linear-gradient(to right, #FF8D58, #FF5D37);width: 100%;height: 118px;">
				<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
				<view class="row" style="width: 100%;height: 40px;align-items: center;">
					<image @click="doBack()" src="../../../../static/back-white.png" mode="aspectFit"
						style="width: 32px;height: 32px;margin-left: 12px;"></image>
					<view style="margin-left: 5px;flex: 1;" class="column">
						<view style="color: #FFF;font-size: 18px;font-weight: bold;height: 20px;line-height: 20px;">
							发现好店
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
		<view class="column" style="width: 100%;" v-if="nearArray">
			<swiper
				style="width: calc(100% - 30px);margin-left: 15px;background-color: #fff;border-radius: 8px;padding-bottom: 10px;">
				<swiper-item v-for="(item,index) in itemArray" :key="index" class="row"
					style="width: 100%;display: inline-block;">
					<view class="row" style="flex-wrap: wrap;width: 100%;height: 100%;">
						<view v-for="(obj,i) in item" class="column array3Item" @click="doClass(obj)">
							<image :src="obj.thumb" mode="aspectFit"
								style="width: 40px;height: 40px;border-radius: 20px;background-color: #FFFFFF;">
							</image>
							<view style="font-size: 12px;color: #181818;margin-top: 3px;text-align: center;">
								{{obj.use_name}}
							</view>
						</view>
					</view>
				</swiper-item>
			
			</swiper>
			<!-- <scroll-view scroll-x="true" style="width: 100%;height: 160px;margin-top: 10px;white-space: nowrap;"
				class="row">
				<view v-for="(item,index) in itemArray" :key="index" class="row" @click="doMeishiClass(item)"
					style="width: calc(100% - 30px);height: 100%;display: inline-block;margin-left: 15px;">
					<view class="row" style="flex-wrap: wrap;width: 100%;height: 100%;">
						<view v-for="(obj,i) in item" class="column array3Item">
							<image src="../../../../static/logo.png" mode="aspectFit" style="width: 40px;height: 40px;border-radius: 20px;background-color: #FFFFFF;">
							</image>
							<view
								style="font-size: 14px;font-weight: bold;color: #383838;margin-top: 6px;text-align: center;">
								123
							</view>
						</view>
					</view>
			
				</view>
			</scroll-view> -->
			
			
			
			<view class="column"
				style="width: calc(100% - 30px);margin-left: 15px;background-color: #FFF;border-radius: 8px;margin-top: 10px;" v-if="special.length > 0">
				<view class=""
					style="width: calc(100% - 20px);margin-left: 10px;height: 50px;line-height: 50px;font-size: 17px;font-weight: bold;">
					每日专题<text style="font-size: 13px;color: #AAAAAA;margin-top: 5px;margin-left: 10px;font-weight: 400;">带你了解当地风土人情</text>
				</view>
				<view class="row" style="width: 100%;flex-wrap: wrap;">
					<view class="" v-for="(item, index) in special" @click="doZhuanti(item,index)" style="margin-left: 10px;width: calc(50% - 10px);height: 70px;border-radius: 8px;position: relative;overflow: hidden;margin-bottom: 10px;">
						<image :src="item.thumb" mode="aspectFill"
							style="width: 100%;height: 100%;"></image>
						<view class="oneline" style="font-size: 14px;color: #FFF;top: 8px;left: 7px;width: calc(100% - 20px);position: absolute;">
							{{item.name}}
						</view>
					</view>
				</view>
				<!-- <view style="" v-for="(item, index) in special" @click="doZhuanti(item,index)">
					
				</view> -->
			</view>
			<view class="column"
				style="width: calc(100% - 30px);margin-left: 15px;height: 160px;background-color: #FFF;border-radius: 8px;margin-top: 10px;" v-if="beer_and_skittles.length > 0">
				<view class=""
					style="width: calc(100% - 20px);margin-left: 10px;height: 50px;line-height: 50px;font-size: 17px;font-weight: bold;">
					推荐好店<text style="font-size: 13px;color: #AAAAAA;margin-top: 5px;margin-left: 10px;font-weight: 400;">网红打卡</text>
				</view>
				<view class="row" style="width: 100%;margin-top: 10px;height: 70px;align-items: center;" >
					<view v-for="(item,index) in beer_and_skittles" :key="index" class="column" style="width: calc(33.3% - 16.6px);margin-left: 10px;margin-right: 5px;" @click="gotoCell(item)">
						<image :src="item.thumb" mode="aspectFill"
							style="width: 100%;border-radius: 4px;height: 72px;"></image>
						<view class="oneline" style="width: 100%;margin-top: 6px;">
							{{item.use_name}}
						</view>
					</view>
					
			
				</view>
			
			</view>
			<view class="bigImage">
				<swiper class="index-banner swiper" circular="false" :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration">
					<swiper-item class="index-banner-img" @click="bannerTo(item)" v-for="(item, index) in bannerList"
						:key="item.id">
						<image class="index-banner-img" :src="item.image" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="row" style="width: 100%;height: 60px;background-color: #f5f6f7;align-items: center;">
				<view v-for="(item,index) in tabbar" :key="index" :class="index == tabIndex ? 'tab_sel' : 'tab_nor'"
					@click="tabbarClick(index)">
					{{item}}
				</view>
			
			</view>
			<view class="column" style="width: 100%;" v-if="tabIndex == 0">
				<view v-for="(item,index) in tuijianArray" :key="index" @click="gotoCell(item)" class="row item_back">
					<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
					<view class="column" style="margin-left: 8px;overflow: hidden;height: 86px;flex: 1;margin-top: 12px;">
						<view class="item_biaoti">{{item.name}}</view>
						<view class="row" style="height: 28px;align-items: center;">
							<text
								style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
							<text style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;margin-top: 2px;">{{i18n.rank.renjun}} {{item.per_capita}}</text>
						</view>
						<view class="row" style="height: 28px;font-size: 11px;color: #6f6f6f;">
							{{item.circle_name}}
						</view>
						<view style="display: flex;" v-if="item.comment.length > 0">
							<text class="item_content item_content_word">{{item.comment}}</text>
						</view>
					</view>
					<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;margin-top: 35px;">
						{{item.distance}}
					</view>
				</view>
			</view>
			<view class="column" style="width: 100%;" v-if="tabIndex == 1">
				<view v-for="(item,index) in nearArray" :key="index" @click="gotoCell(item)" class="row item_back">
					<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
					<view class="column" style="margin-left: 8px;overflow: hidden;height: 86px;flex: 1;margin-top: 12px;">
						<view class="item_biaoti">{{item.name}}</view>
						<view class="row" style="height: 28px;align-items: center;">
							<text
								style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
							<text
								style="font-size: 12px;color: #FF5725;margin-left: 3px;margin-right: 3px;">分</text>
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.rank.renjun}} {{item.per_capita}}</text>
						</view>
						<view class="row" style="height: 28px;font-size: 11px;color: #6f6f6f;">
							{{item.circle_name}}
						</view>
						<view style="display: flex;" v-if="item.comment.length > 0">
							<text class="item_content item_content_word">{{item.comment}}</text>
						</view>
					</view>
					<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;margin-top: 35px;">
						{{item.distance}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				system_top: 44,
				weixinMenuWidth: 12,
				scrollHeight: 0,
				itemArray: [],
				bannerList: [],
				tabbar: [],
				tuijianArray: [],
				nearArray: null,
				special: [],
				beer_and_skittles: []
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
			this.tabbar = [this.i18n.toher.tuijian, this.i18n.toher.fujin]
		},
		onLoad(option) {
			this.returnIndex = option.rdex
			this.requestData()
		},
		methods: {
			requestData() {
				var that = this
				that.http.sendRequest('LookingShop.Home', {}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						that.bannerList = info.banner
						that.tuijianArray = info.recommend
						that.nearArray = info.distance_store
						that.special = info.special
						that.beer_and_skittles = info.beer_and_skittles

						const a = info.store_type
						var page;
						if (a.length % 10 == 0) {
							page = a.length / 10
						} else {
							page = parseInt(a.length / 10) + 1
						}
						for (let i = 0; i < page; i++) {
							var aa = [];
							for (let j = 0; j < 10; j++) {
								if ((j + i * 10) < a.length) {
									aa.push(a[j + i * 10])
								}
							}
							that.itemArray.push(aa)
						}
						console.log(that.itemArray)
					}
				})

				// if(that.array3.length % 8 == 0)
				// that.array3Page
			},
			tabbarClick(index) {
				this.tabIndex = index
			},
			doZhuanti(item, index) {
				uni.navigateTo({
					url: '../zhuanti/index?title=' + item.name + '&id=' + item.id
				})
			},
			doClass(item) {
				uni.navigateTo({
					url: '../class/index?name=' + item.use_name + '&id=' + item.id
				})
			},
			gotoCell(item) {
				uni.navigateTo({
					url: '../detail/index?id=' + item.id
				})
			},
			doBack() {
				uni.navigateBack()
			},
			doSearch() {
				uni.navigateTo({
					url: '../search/index'
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
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #f5f6f7;
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

	.array3Item {
		width: 20%;
		/* margin-right: 8px; */
		height: 80px;
		border-radius: 8px;
		justify-content: center;
		align-items: center;
		/* margin-bottom: 10px; */		
	}

	.bigImage {
		margin-left: 15px;
		width: calc(100% - 30px);
		border-radius: 8px;
		height: 92px;
		background-color: #FF5725;
		transform: translateY(0);
		overflow: hidden;
		margin-top: 10px;
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

	.tab_sel {
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		margin-left: 15px;
		margin-right: 4px;
		position: relative;
		height: 30px;
		justify-content: center;
	}

	.tab_sel::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 25%;

		height: 2px;
		border-radius: 1px;
		width: 50%;
		background-color: #FF5725;
	}

	.tab_nor {
		font-size: 14px;
		/* font-weight: bold; */
		color: #383838;
		margin-left: 15px;
		margin-right: 4px;
		position: relative;
		height: 30px;
	}

	.item_back {
		width: calc(100% - 30px);
		height: 106px;
		margin-left: 15px;
		border-radius: 8px;
		margin-bottom: 10px;
		overflow: hidden;
		position: relative;
		background-color: #FFF;
		/* align-items: center; */
	}



	.item_image {
		margin-top: 12px;
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
