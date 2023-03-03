<template>
	<view>
		<template v-if="storeInfo">
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + backHeight + 'px;'">

			
			<view class="topView">
				<swiper class="topThumb swiper" circular="false" indicator-dots="true" autoplay="true">
					
					<swiper-item  style="width: 100%;height: 100%;" v-for="(item, index) in storeInfo.environment"
						:key="item.id">
						<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
					</swiper-item>
					
				</swiper>
				<!-- <image :src="storeInfo.thumb" mode="aspectFill" class="topThumb"></image> -->
				<view class="topView-header">
				
					<!-- #ifndef MP-WEIXIN -->
					<view class="row"
						style="margin-left: 12px;width: calc(100% - 24px);height: 40px;padding-top: 48px;align-items: center;">
					<!-- #endif -->
					
						<image class="topView-header-image" src="../../../static/back-left.png" mode="aspectFit"
							@click="doback()"></image>
						<view
							style="flex:1;margin-left: 12px;height: 32px;border-radius: 8px;background-color: rgba(245,246,247,0.6);margin-right: 10px;"
							@click="dosearch()">

						</view>
						
						
					</view>
				</view>
				<view class="status_yingye" v-if="storeInfo.operating_state == 1">
					{{i18n.meishi.yingye}}
				</view>
				<view class="status_yingye" v-else>
					{{i18n.order.xiuxizhong}}
				</view>
				<image :src="storeInfo.thumb" mode="aspectFill" class="storeIcon"></image>
				<view style="width: 100%;background-color: #FFF;">
					<view class="oneline store_name">
						{{storeInfo.name}}
					</view>
					<view class="row store_label">
						<image src="../../../static/meishi/pingfen.png" mode=""></image>
						<text
							style="color: #FFBF47;font-size: 12px;font-weight: bold;margin-right: 5px;">{{storeInfo.stars}}</text>
						<image src="../../../static/meishi/yuexiao.png" mode=""></image>
						<text style="margin-right: 5px;">{{i18n.meishi.yuexiao}} {{storeInfo.month_sales}}</text>
						<image src="../../../static/meishi/time.png" mode=""></image>
						<text>{{i18n.meishi.peisongshijian}} {{storeInfo.time}}</text>
					</view>
					<!-- <view class="row" style="margin-left: 15px;width: calc(100% - 30px);flex-wrap: wrap;">
						<view class="store_label_label" @click="doRank()">
							{{storeInfo.circle_ranking}}
						</view>
					</view> -->

					
					<view class="row" style="width: 100%;height: 40px;">
						<view v-for="(item,index) in tabbar" :key="index"
							:class="index == tabIndex ? 'tab_sel' : 'tab_nor'" @click="tabbarClick(index)">
							{{item}}
						</view>
					</view>
				</view>

			</view>
			<swiper style="width: 100%;background-color: #f5f6f7;" :style="'height:' + scrollHeight + 'px;'"
				@animationfinish="animationfinish" :current="tabIndex" v-if="storeInfo.id">
				<swiper-item>
					<diancai ref="diancai" :height="scrollHeight" :storeMsg="storeInfo" @showGuigeView="showGuigeView"
						@gerstoremsg="gerstoremsg"></diancai>
				</swiper-item>
				<swiper-item>
					<evaView :height="scrollHeight" :storeMsg="storeInfo"></evaView>
				</swiper-item>
				<swiper-item>
					<sjMsg :height="scrollHeight" :storeMsg="storeInfo"></sjMsg>
				</swiper-item>
			</swiper>
		</scroll-view>
		<view v-if="storeInfo && storeInfo.operating_state == 1"
			style="width: 100%;height: 80px;background-color: #FFF;position: absolute;left:0;bottom: 0;">
			<view class="row cart">
				<view class="numsLabel2">
					{{storeInfo.cart.count}}
				</view>
				<view style="font-size: 14px;flex: 1;text-align: center;" @click="doCart()">
					{{i18n.meishi.chakangouwuche}}
				</view>
				<view style="font-size: 12px;">
					¥
				</view>
				<view style="font-size: 16px;margin-right: 18px;margin-left: 3px;">
					{{storeInfo.cart.price}}
				</view>
			</view>
		</view>
		<view v-if="storeInfo && storeInfo.operating_state != 1"
			style="width: 100%;height: 80px;background-color: #FFF;position: absolute;left:0;bottom: 0;">
			<view class="row cart" style="background-color: #CCCCCC;justify-content: center;">
				本店休息啦
			</view>
		</view>
		<guigeV v-if="isShowGuige" :goodsMsg="clickGoods" @changeCartNums="changeCartNums" @closeGuige="closeGuige">
		</guigeV>
		</template>
	</view>
</template>

<script>
	import diancai from "@/package-meishi/components/diancai/index.vue"
	import evaView from "@/package-meishi/components/pingjia/index.vue"
	import sjMsg from "@/package-meishi/components/shangjiaMsg/index.vue"
	import guigeV from "@/package-meishi/components/guige/index.vue"

	export default {
		components: {
			diancai,
			evaView,
			sjMsg,
			guigeV
		},
		data() {
			return {
				storeID: '',
				system_top: 24,
				weixinMenuWidth: 0,
				weixinMenutop: 0,
				weixinMenuheight: 0,
				itemArray: [],
				scrollHeight: 0,
				backHeight: 0,
				tabbar: [],
				tabIndex: 0,
				storeInfo: null,
				isShowGuige: false,
				clickGoods: null,

			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();

			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			this.weixinMenuWidth = weinfo.width
			this.weixinMenutop = weinfo.top
			this.weixinMenuheight = weinfo.height
			// #endif
			this.system_top = parseInt(res.safeArea.top)
			this.scrollHeight = res.windowHeight - 60 - this.system_top - 80
			this.backHeight = res.windowHeight - 80
		},
		onLoad(option) {
			this.storeID = option.id
			console.log(this.storeID)
		},
		onShow() {
			if(this.$refs.diancai){
				this.$refs.diancai.requestData()
			}
			this.requestData()
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		methods: {
			requestData() {
				var that = this
				that.http.sendRequest('FineFood.GetStoreDetail', {
					'id': that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						setTimeout(function() {
							that.storeInfo = res.info[0]
							console.log("-->",that.storeInfo)
							that.tabbar = [that.i18n.meishi.diancai, that.i18n.meishi.pingjia + that
								.storeInfo.evaluate_count, that.i18n.meishi.shangjia 
							]
						}, 10);


					}
				})
			},
			doback() {
				uni.navigateBack({

				})
			},
			tabbarClick(index) {
				this.tabIndex = index
			},
			animationfinish(e) {
				this.tabIndex = e.detail.current
			},
			doRank() {
				uni.navigateTo({
					url: '../../../pages/rank/rank?type=meishi'
				})
			},
			doCollected(type) {
				var that = this
				if (type == 0) {
					that.http.sendRequest('MerchantStoreLike.Save', {
						'store_id': that.storeID
					}).then(function(res) {
						if (res.code == 0) {
							setTimeout(function() {
								that.storeInfo.is_like = res.info[0].id
							}, 10);
						}
					})
				} else {
					that.http.sendRequest('MerchantStoreLike.ListDelete', {
						'json_id': JSON.stringify([that.storeInfo.is_like])
					}).then(function(res) {
						// that.listArray = res.info
						if (res.code == 0) {
							that.storeInfo.is_like = 0
						}

					})
				}

			},
			doMessage() {
				const uid = this.storeInfo.service.im_uid //'users_3'//
				uni.navigateTo({
					url: `/pages/TUI-Chat/chat?conversationID=C2C${uid}`
				})
			},
			showGuigeView(item) {
				this.clickGoods = item
				this.isShowGuige = true
			},
			changeCartNums(item, count, pid) {
				console.log(item)
				this.$refs.diancai.changeCartNums(item, count, pid)
				this.gerstoremsg()
			},
			closeGuige() {
				this.isShowGuige = false
			},
			dosearch() {
				uni.navigateTo({
					url: '../search/index'
				})
			},
			doCart() {
				if (this.storeInfo.cart.count > 0) {
					uni.navigateTo({
						url: '../cart/index?top_type=1&type=meishi&store=' + JSON.stringify(this.storeInfo)
					})
				}

			},
			gerstoremsg() {
				var that = this
				that.http.sendRequest('FineFood.GetStoreDetail', {
					'id': that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						var dic = res.info[0]
						that.storeInfo.cart.count = dic.cart.count
						that.storeInfo.cart.price = dic.cart.price
					}
				})
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #f5f6f7;
	}

	.topView {
		margin-top: 0;
		width: 100%;
		background-color: #FFF;
		position: relative;
	}

	.topThumb {
		width: 100%;
		height: 150px;
		background-color: #FF5725;
	}

	.topView-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 150px;
		/* background-size: 100% 100%; */
		/*  */
		/* background-color: #F0d; */
	}

	.topView-header-image {
		width: 32px;
		height: 32px;
		background-color: #FFF;
		border-radius: 16px;
	}

	.storeIcon {
		position: absolute;
		top: 138px;
		right: 16px;
		width: 100px;
		height: 75px;
		border-radius: 4px;
		overflow: hidden;
		/* background-color: #FFDDEE; */
	}

	.status_yingye {
		position: absolute;
		top: 139px;
		left: 16px;
		height: 20px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		color: #FFF;
		background-color: #FF5725;
		font-size: 11px;
		font-weight: bold;
		line-height: 20px;
	}

	.store_name {
		margin-left: 15px;
		margin-top: 16px;
		height: 25px;
		line-height: 25px;
		font-size: 18px;
		font-weight: bold;
		color: #181818;
		width: calc(100% - 120px);
	}

	.store_label {
		margin-left: 15px;
		margin-top: 8px;
		line-height: 15px;
		font-size: 11px;
		color: #6F6F6F;
		width: calc(100% - 120px);
		align-items: center;
	}

	.store_label image {
		width: 10px;
		height: 10px;
		margin-right: 2px;
	}

	.store_label_label {
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
	}

	.store_label_coupon {
		height: 16px;
		border-radius: 2px;
		padding-left: 5px;
		padding-right: 5px;
		border: 0.5px solid #FF4C4C;
		color: #FF4C4C;
		font-size: 10px;
		line-height: 16px;
		margin-top: 4px;
		margin-right: 10px;
	}

	.tab_sel {
		margin-top: 10px;
		font-size: 16px;
		font-weight: bold;
		color: #181818;
		margin-left: 15px;
		margin-right: 35px;
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
		margin-top: 10px;
		font-size: 14px;
		/* font-weight: bold; */
		color: #6f6f6f;
		margin-left: 15px;
		margin-right: 35px;
		position: relative;
		height: 30px;
	}

	.numsLabel2 {
		margin-left: 18px;
		font-size: 16px;
		width: 25px;
		height: 25px;
		border-radius: 12.5px;
		border: 1px solid #FFF;
		line-height: 25px;
		text-align: center;
	}


	.cart {
		margin-top: 15px;
		margin-left: 15px;
		width: calc(100% - 30px);
		background-color: #FF5725;
		border-radius: 8px;
		font-weight: bold;
		line-height: 50px;
		height: 50px;
		align-items: center;
		color: #FFF;
	}
</style>
