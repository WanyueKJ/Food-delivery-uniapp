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
							{{i18n.toher.daojiafuwu}}
						</view>
					</view>
					<!-- <image src="../../../../static/shoucang.png" mode="" style="width: 32px;height: 32px;"
						:style="'margin-right:' + weixinMenuWidth + 'px;'" @click="doXihuan()"></image> -->
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
		<view class="column" style="width: 100%;" v-if="storeArray">
			<view class="bigImage">
				<swiper class="index-banner swiper" circular="false" :indicator-dots="false" :autoplay="true"
					:interval="3000" :duration="500">
					<swiper-item class="index-banner-img" @click="bannerTo(item)" v-for="(item, index) in bannerList"
						:key="item.id">
						<image class="index-banner-img" :src="item.image" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- <view class="row" style="width: 100%;margin-top: 20px;flex-wrap: wrap;">
				<view v-for="(item,index) in itemArray" :key="index" class="classItem" @click="doClass(item,index)">
					{{item.use_name}}
				</view>
			</view> -->
			<view class="row"
				style="width: calc(100% - 30px);margin-top: 20px;flex-wrap: wrap;background-color: #FFF;margin-left: 15px;border-radius: 8px;">
				<view v-for="(item,index) in itemArray" :key="index" class="column array3Item" @click="doClass(item)">
					<image :src="item.thumb" mode="aspectFit" style="width: 40px;height: 40px;border-radius: 20px;">
					</image>
					<view style="font-size: 12px;color: #383838;margin-top: 5px;text-align: center;">
						{{item.use_name}}
					</view>
				</view>
			</view>
			<view class="recommentView column" v-if="recommend.length > 0">
				<view class="row" style="width: 100%;height: 31px;">
					<view class="row recommentView_top" style="flex-direction: row-reverse;align-items: center;">
						<view class="row" style="width: calc(100% - 135px);">
							<view v-for="(item,index) in title_option" :key="index" class="row"
								style="width: 33%;align-items: center;justify-content: center;" v-if="title_option.length > 1 && index > 0">
								<image src="../../../static/images/duigou.png" style="width: 11px;height: 11px;" mode="">
								</image>
								<view style="font-size: 11px;margin-left: 1px;color:#FF5725;">{{item}}</view>
							</view>
						</view>
					</view>
					<view class="recommentView_huanguan" v-if="title_option.length > 0">
						<image style="width: 100%;height: 100%;" src="../../../static/images/tuijian.png" mode="">
			
						</image>
						<view class="recommentView_huanguan row" style="align-items: center;justify-content: center;">
							<image src="../../../static/images/huangguan.png" style="width: 14px;height: 14px;" mode="">
							</image>
							<view class="tuijiandianpu">推荐店铺</view>
							<view style="width: 14px;height: 14px;"></view>
						</view>
			
					</view>
			
				</view>
				<view class="row" style="width: 100%;background-color: #FFF;border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;">
					<view v-for="(item,index) in recommend" :key="index" style="width: 28%;margin-left: 3.5%;margin-right: 1%;margin-top: 15px;" @click="gotoCell(item)" v-if="index < 3">
						<image :src="item.thumb" mode="aspectFill" style="width: 100%;height: 72px;border-radius: 2px;"></image>
						<view class="oneline" style="width: 100%;height: 30px;line-height: 30px;color: #383838;font-size: 13px;text-align: center;">
							{{item.use_name}}
						</view>
					</view>
				</view>
				<!-- <image class="smallImage" :src="recommend[0].thumb" mode="aspectFill" @click="gotoCell(recommend[0])">
				</image>
				<image class="smallImage" style="margin-left: 10px;" :src="recommend[1].thumb" mode="aspectFill"
					v-if="recommend.length > 1" @click="gotoCell(recommend[1])"></image> -->
			</view>
			<view style="width: 60%;height: 60px;align-items: center;line-height: 60px;padding-left: 15px;">
				{{i18n.toher.fujindianpu}}
			</view>
			<view style="width: 100%;background-color: #F5F6F7;">
				<view v-for="(item,index) in storeArray" :key="index" @click="gotoCell(item)" class="row item_back">
					<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
					<view class="column" style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;">
						<view class="item_biaoti">{{item.use_name}}</view>
						<view class="row" style="height: 28px;align-items: center;">
							<text
								style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
							<text
								style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
				
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 3px;">{{i18n.meishi.yuexiao}}{{item.monthly_sales}}</text>
						</view>
						<view style="display: flex;" v-if="item.comment.length > 0">
							<text class="item_content item_content_word">{{item.comment}}</text>
						</view>
					</view>
					<view style="color: #6f6f6f;font-size: 11px;margin-right: 10px;">
						{{item.distance}}
					</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	import storeList from '../../../../components/storeList/index.vue'

	export default {
		components: {
			storeList
		},
		data() {
			return {
				scrollHeight: 0,
				system_top: 44,
				weixinMenuWidth: 12,
				scrollHeight: 0,
				itemArray: [],
				bannerList: [],
				storeArray: null,
				recommend: [],
				title_option:[]
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
		},
		onLoad(option) {
			this.returnIndex = option.rdex
			this.requestData()
		},
		methods: {
			requestData() {
				var that = this
				that.http.sendRequest('Serve.Home', {}).then(function(res) {
					if (res.code == 0) {
						that.bannerList = res.info[0].banner
						that.itemArray = res.info[0].store_type
						that.storeArray = res.info[0].distance_store
						that.recommend = res.info[0].recommend
						that.title_option = res.info[0].title_option
					}
				})
			},
			doBack() {
				uni.navigateBack({

				})
			},
			doXihuan() {
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
								url: '../webView/webView',
							});
						}
					})
				}
			},

			doClass(item, index) {
				uni.navigateTo({
					url: '../class/class?class=' + JSON.stringify(this.itemArray) + '&index=' + index
				})
			},
			gotoCell(item) {
				uni.navigateTo({
					url: '../detaile/index?id=' + item.id
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

	.classItem {
		margin-left: 16px;
		margin-bottom: 10px;
		height: 24px;
		border-radius: 12px;
		background-color: #FFF;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: #FF5725;
		line-height: 24px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.recommentView {
		margin-top: 10px;
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 160px;
		position: relative;
		/* background: linear-gradient(180deg,#fef2ed, #ffffff 15%); */
		/* border-radius: 8px;
		overflow: hidden; */
	}

	.recommentView_top {
		margin-top: 5px;
		height: 26px;
		width: 100%;
		background-color: #FFECE4;
		border-top-right-radius: 8px;
	}

	.recommentView_huanguan {
		position: absolute;
		top: 0;
		left: 0;
		height: 31px;
		width: 135px;
		
	}

	.tuijiandianpu {
		margin-left: 3px;
		font-size: 16px;
		font-weight: bold;
		color: #FF5725;
	}

	.smallImage {
		width: calc(50% - 5px);
		border-radius: 8px;
		height: 80px;
		background-color: #FF5725;
	}

	.item_back {
		width: calc(100% - 30px);
		height: 96px;
		margin-left: 15px;
		border-radius: 8px;
		margin-bottom: 10px;
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

	.array3Item {
		width: calc(20%);
		height: 80px;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
