<template>
	<view>
		<view class="row" style="width: 100%;height: 150px;position: relative;">
			<swiper class="topThumb swiper" circular="false" indicator-dots="true" autoplay="true">
				<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in storeMsg.environment"
					:key="index">
					<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<image class="topView-header-image" src="../../../../static/back-left.png" mode="aspectFit"
				@click="doback()"></image>
		</view>
		<view class="store_name">
			{{storeMsg.use_name}}
		</view>
		<view class="row" style="width: 100%;margin-top: 15px;height: 15px;">
			<image src="../../../../static/meishi/pingfen.png" mode="aspectFit"
				style="margin-left: 15px;width:11px;height:11px;margin-top: 1px;"></image>
			<view style="margin-left: 3px;font-size:12px;color:#FFBF47;line-height: 15px;height: 15px;">
				{{storeMsg.stars}}
			</view>
			<view style="margin-left: 10px;font-size:12px;margin-right: 15px;line-height: 15px;height: 15px;">
				{{storeMsg.remark + i18n.meishi.pingjia}}
			</view>
		</view>

		<view class="row" style="width: 100%;margin-top: 15px;height: auto;height: 30px;">
			<image src="../../../../static/meishi/shangjia-ads.png" mode="aspectFit"
				style="margin-left: 15px;width:11px;height:11px;margin-top: 1px;"></image>
			<view style="margin-left: 4px;font-size:12px;margin-right: 15px;line-height: 15px;height: 15px;flex: 1;">
				{{storeMsg.address}}
			</view>
		</view>

		<view class="row" style="width: 100%;height: 15px;">
			<image src="../../../../static/meishi/shangjia-time.png" mode="aspectFit"
				style="margin-left: 15px;width:11px;height:11px;margin-top: 1px;"></image>
			<view style="margin-left: 3px;font-size:12px;margin-right: 15px;line-height: 15px;height: 15px;">
				{{storeMsg.open_date + ' ' + storeMsg.open_time}}
			</view>
		</view>

		<view class="row" style="width: 100%;height: 40px;margin-top: 15px;">
			<view v-for="(item,index) in tabbar" :key="index" :class="index == tabIndex ? 'tab_sel' : 'tab_nor'"
				@click="tabbarClick(index)">
				{{item}}
			</view>
		</view>
		<view class="" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'" v-if="tabIndex == 0" >
			<view class="row" style="width: calc(100% - 30px);margin-left: 15px;flex-wrap: wrap;margin-bottom: 10px;">
				<view v-for="(item,index) in evatabbar" :key="index"
					:class="index == selectIndex ? 'tabbar_sel' : 'tabbar_nor'" @click="evatabbarClick(index)">
					{{item}}
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height:' + (scrollHeight-50) + 'px;'" style="width: 100%;"
				:refresher-triggered="refresherTriggered" @scrolltolower="scrolltolower">
				<view class="" style="margin-left: 25%;margin-top: 50px;width: 50%;" v-if="listArray.length == 0">
					<image src="../../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
					<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;">
						暂无评价
					</view>
				</view>
				<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-else>
					<view class="row" style="width: 100%;height: 75px;">
						<image :src="item.user.avatar" mode="aspectFill" class="iconImage" v-if="item.is_anonymous != 1">
						</image>
						<image src="../../../../static/logo.png" mode="aspectFill" class="iconImage" v-else></image>
			
						<view class="nameTimeView colum">
							<view class="userNickeName" v-if="item.is_anonymous != 1">
								{{item.user.user_nickname}}
							</view>
							<view class="userNickeName" v-else>
								{{i18n.yilou.nimingyonghu}}
							</view>
							<view class="userNickeName" style="color: #646464;font-size: 12px;">
								{{item.addtime}}
							</view>
						</view>
					</view>
					<view class="row" style="margin-left: 15px;height: 30px;align-items: center;">
						<starV size=30 disabled=true :value="item.overall_star"></starV>
						<text style="font-size: 13px;color: #646464;">{{item.overall_star_txt}}</text>
					</view>
					<view class="textContent">
						{{item.comment}}
					</view>
					<view class="middle-Content"
						v-if="(item.video && item.video.url && item.pics.length == 0) || (!item.video.url && item.pics.length == 1)">
						<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png"
								style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>
						</view>
						<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView" style="width: 66%;"
							v-else>
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item.pics)"></image>
						</view>
			
					</view>
					<view class="middle-Content" v-else>
						<view class="picBackView" v-if="item.video && item.video.url">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image @click.stop="showBigVideo(item.video.url)" src="../../../../static/eva-play.png"
								style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
						</view>
						<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView">
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item.pics)"></image>
						</view>
			
					</view>
					<view class="textContent" style="font-size: 12px;background-color: #F5F6F7;border-radius: 4px;"
						v-if="item.reply.merchant_reply_content">
						<view style="color: #FF5725;margin-left: 8px;margin-top: 8px;">
							{{i18n.yilou.shangjiahuifu+'（' + item.reply.merchant_reply_time + '）'}}
						</view>
						<view style="color: #383838;margin-left: 8px;margin-top: 8px;padding-bottom: 8px;">
							{{item.reply.merchant_reply_content}}
						</view>
			
					</view>
					<view class="bottomView row">
						<view style="flex: 1;"></view>
						<view class="row" style="margin-right: 15px;align-items: center;" v-if="item.is_like == 1"
							@click.stop="doLike(item,0)">
							<image src="../../../../static/meishi/zan-sel.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #FF5725;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view>
						<view class="row" style="margin-right: 15px;align-items: center;" v-else
							@click.stop="doLike(item,1)">
							<image src="../../../../static/meishi/zan-nor.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #666666;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view :height="scrollHeight" v-if="tabIndex == 1" style="width: 100%;">
			<view class="store_name" style="font-size: 14px;font-weight: 400;">
				{{storeMsg.about}}
			</view>
		</view>

	</view>
</template>

<script>
	import starV from '@/components/banxing/banStar.vue'

	export default {
		components: {
			starV
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				tabbar: [],
				tabIndex: 0,
				scrollHeight: 0,
				listArray: [],
				page: 1,
				storeMsg: null,
				refresherTriggered: false,
				selectIndex:0,
				evatabbar:[]
			}
		},
		onReady() {
			const res = uni.getSystemInfoSync();

			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			// #endif
			this.system_top = parseInt(res.safeArea.top)
			this.scrollHeight = res.windowHeight - 75 - this.system_top
			this.tabbar = [this.i18n.meishi.pingjia, this.i18n.toher.guanyu]
		},
		onLoad(option) {
			var that = this
			that.storeMsg = JSON.parse(option.storeMsg)
			that.requestData()
			
			that.http.sendRequest('MerchantStoreOrderEvaluate.GetNumber', {
				'store_id': that.storeMsg.id
			}).then(function(res) {
				if (res.code == 0) {
					const dic = res.info[0]
					that.evatabbar = ['全部 ' + dic.all, '满意 ' + dic.good,'中等 ' + dic.medium,'不满意 ' + dic.poor,'有图 ' + dic.figure]
					that.requestData()
				}
			})
		},
		methods: {
			doback() {
				uni.navigateBack()
			},
			tabbarClick(index) {
				this.tabIndex = index
			},
			showBigImage(index, list) {
				uni.previewImage({
					current: index,
					urls: list,
				})
			},
			scrolltolower() {
				console.log('滚动到底部');
				var that = this
				that.page++
				that.requestData()
			},
			requestData() {
				// 0:全部(默认) 1:最新 2:有图 3:好评 4:差评 5:中评
				var that = this
				var type = 0;
				if (that.selectIndex == 0) {
					type = 0
				} else if (that.selectIndex == 1) {
					type = 3
				} else if (that.selectIndex == 2) {
					type = 5
				} else if (that.selectIndex == 3) {
					type = 4
				} else{
					type = 2
				}
				that.http.sendRequest('MerchantStoreOrderEvaluate.OrderIndex', {
					'type': type,
					'store_id': that.storeMsg.id,
					'product_id': '',
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
			doLike(item, status) {

				this.http.sendRequest('MerchantStoreOrderEvaluate.SetLike', {
					'id': item.id,
					'status': status,
				}).then(function(res) {
					const info = res.info[0]
					if (res.code == 0) {
						item.is_like = info.status
						item.like = info.count
					}
				})
			},
			evatabbarClick(index){
				this.selectIndex = index
				this.page = 1
				this.requestData()
			},
			
			showBigVideo(url){
				console.log(url)
				uni.setStorage({
					key: 'videourl',
					data: url,
					success() {
						uni.navigateTo({
							url:'/pages/video/video'
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
	}

	.topView-header-image {
		position: absolute;
		left: 15px;
		top: 52px;
		width: 32px;
		height: 32px;
		background-color: #FFF;
		border-radius: 16px;
	}

	.store_name {
		margin-left: 15px;
		margin-top: 15px;
		width: calc(100% - 30px);
		line-height: 25px;
		font-size: 18px;
		font-weight: bold;
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

	.tabbar_sel {
		height: 29px;
		border-radius: 2px;
		font-size: 12px;
		color: #FFF;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #FF5725;
		margin-right: 8px;
		line-height: 29px;
		margin-top: 10.5px;
	}

	.tabbar_nor {
		height: 29px;
		border-radius: 2px;
		font-size: 12px;
		color: #646464;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #FEF0E5;
		margin-right: 8px;
		line-height: 29px;
		margin-top: 10.5px;
	}

	.cellContentView {
		width: 100%;
		background-color: #FFFFFF;
		margin-bottom: 1px;
	}

	.iconImage {
		margin-left: 15px;
		margin-top: 20px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		/* background-color: #007AFF; */
	}

	.nameTimeView {
		margin-left: 8px;
		margin-top: 20px;
		height: 40px;
		flex: 1;
	}

	.userNickeName {
		height: 20px;
		line-height: 20px;
		font-size: 15px;
		color: #343434;
	}

	.textContent {
		margin-left: 15px;
		width: calc(100% - 30px);
		line-height: 20px;
		font-size: 14px;
		color: #181818;
	}

	.middle-Content {
		margin-left: 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-top: 10px;
	}

	.picBackView {
		width: calc(33.3% - 3px);
		border-radius: 8px;
		margin-bottom: 5px;
		overflow: hidden;
		position: relative;
		/* height: 0;
		padding-bottom: calc(33.3% - 3px);
		background-color: #007AFF;
		background-size: calc(100%) calc(100%); */

	}

	.pic-image {

		width: 100%;
		height: 100%;
		padding-bottom: calc(100%);
	}

	.topThumb {
		width: 100%;
		height: 100%;
		/* background-color: #FF5725; */
		overflow: hidden;
	}

	.babckback {
		position: absolute;
		left: 12px;
		width: calc(100% - 24px);
		height: 40px;
		top: 48px;
		align-items: center;
	}

	.bottomView {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 45px;
		align-items: center;
		border-bottom: 1px solid #D6DADE;
	}

	.picBackView:not(:nth-child(3n)) {
		margin-right: 4.5px;
	}
</style>
