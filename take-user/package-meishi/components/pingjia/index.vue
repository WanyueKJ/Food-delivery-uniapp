<template>
	<view>
		<view :style="'height:' + height + 'px;'" style="width: 100%;background-color: #FFF;" class="column">
			<view class="row" style="width: 100%;height: 55px;align-items: center;">
				<view style="margin-left: 15px;font-size: 24px;font-weight: bold;color: #FF7E07;">
					{{storeMsg.evaluate.stars}}
				</view>
				<view class="column" style="flex: 1;margin-left: 10px;">
					<view style="font-size: 12px;color: #868686;">
						总体评分
					</view>
					<starV size=30 @change="onChange" disabled=true :value="storeMsg.evaluate.stars"></starV>

				</view>
				<view class="column" style="margin-right: 15px;">
					<view style="font-size: 12px;color: #868686;">
						{{i18n.meishi.kouwei}}
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{storeMsg.evaluate.taste_star}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;">
						{{i18n.meishi.baozhuang}}
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{storeMsg.evaluate.packaging_star}}
					</view>
				</view>
				<view class="column" style="margin-right: 15px;margin-left: 15px;">
					<view style="font-size: 12px;color: #868686;">
						{{i18n.meishi.peisongmanyidu}}
					</view>
					<view style="font-size: 14px;color: #323232;font-weight: bold;">
						{{storeMsg.evaluate.distribution_star}}
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 8px;background-color: #f5f6f7;"></view>
			<view class="row" style="width: calc(100% - 30px);margin-left: 15px;flex-wrap: wrap;margin-bottom: 10px;">
				<view v-for="(item,index) in tabbar" :key="index"
					:class="index == selectIndex ? 'tabbar_sel' : 'tabbar_nor'" @click="tabbarClick(index)">
					{{item}}
				</view>
			</view>
			
			<scroll-view scroll-y="true" :style="'height:' + (height - 105) + 'px;'"
				style="width: 100%;background-color: #f5f6f7;" class="column" :refresher-triggered="refresherTriggered"
				@scrolltolower="scrolltolower">
				<view class="" style="margin-left: 25%;margin-top: 50px;width: 50%;" v-if="listArray.length == 0">
					<image src="../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
					<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;margin-top: -40px;">
						暂无评价
					</view>
				</view>
				<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-else>
					<view class="row" style="width: 100%;height: 75px;" v-if="item.is_anonymous != 1">
						<image :src="item.user.avatar" mode="aspectFill" class="iconImage"></image>
						<view class="nameTimeView colum">
							<view class="userNickeName">
								{{item.user.user_nickname}}
							</view>
							<view class="userNickeName" style="color: #646464;font-size: 12px;">
								{{item.addtime}}
							</view>
						</view>

					</view>
					<view class="row" style="width: 100%;height: 75px;" v-else>
						<image src="../../../static/logo.png" mode="aspectFill" class="iconImage"
							></image>
						<view class="nameTimeView colum">
							<view class="userNickeName">
								{{i18n.yilou.nimingyonghu}}
							</view>
							<view class="userNickeName" style="color: #646464;font-size: 12px;">
								{{item.addtime}}
							</view>
						</view>

					</view>
					<view class="row" style="margin-left: 15px;height: 30px;align-items: center;">
						<starV size=30 @change="onChange" disabled=true :value="item.overall_star"></starV>
						<text style="font-size: 13px;color: #646464;">{{item.overall_star_txt}}</text>
					</view>
					<view class="textContent">
						{{item.comment}}
					</view>
					<view class="middle-Content" v-if="(item.video && item.video.url && item.pics.length == 0) || (!item.video.url && item.pics.length == 1)">
						<view class="picBackView" v-if="item.video && item.video.url" style="width: 66%;">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)" style="position: absolute;right: 7px;top: 7px;width: 20px;height: 20px;" mode=""></image>	
						</view>
						<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView" style="width: 66%;" v-else>
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item.pics)"></image>
						</view>

					</view>
					<view class="middle-Content" v-else>
						<view class="picBackView" v-if="item.video && item.video.url">
							<image :src="item.video.thumb" mode="aspectFill" class="pic-image"
								@click.stop="showBigVideo(item.video.url)"></image>
							<image src="../../../static/eva-play.png" @click.stop="showBigVideo(item.video.url)" style="position: absolute;right: 6px;top: 6px;width: 20px;height: 20px;" mode=""></image>
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
							<image src="../../../static/meishi/zan-sel.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #FF5725;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view>
						<view class="row" style="margin-right: 15px;align-items: center;" v-else
							@click.stop="doLike(item,1)">
							<image src="../../../static/meishi/zan-nor.png" mode="" style="width: 20px;height: 20px;">
							</image>
							<view style="color: #666666;margin-left: 5px;font-size: 14px;font-weight: bold;">
								{{item.like}}
							</view>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import http from '../../../toolClass/WYToolClass.js'
	import starV from '@/components/banxing/banStar.vue'
	export default {
		components: {
			starV
		},
		data() {
			return {
				selectIndex: 0,
				tabbar: [],
				listArray: [],
				refresherTriggered: 0,
				page: 1
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		props: {
			height: {
				type: Number,
				default: 0
			},
			storeMsg: {
				type: Object,
				default: null
			}
		},
		created() {
			var that = this
			// that.tabbar = [this.i18n.meishi.quanbupinglun + ' 100',this.i18n.meishi.zuixinpinglun,this.i18n.meishi.youtu + ' 11',this.i18n.meishi.haoping + ' 99',this.i18n.meishi.chaping + ' 3',]
			// that.windowHeight = getApp().globalData.windowHeight
			// console.log(that.type)
			// var url = ''
			// if(that.type == 3){
			// 	that.titleStr = '送达时间'
			// 	url = 'Helpbuy.GetTimes'
			// }else if(that.type == 4){
			// 	that.titleStr = '排队时间'
			// 	url = 'Helpqueue.GetTimes'
			// }else if(that.type == 5){
			// 	that.titleStr = '帮办时间'
			// 	url = 'Helpwork.GetTimes'
			// }else{
			// 	that.titleStr = '取件时间'
			// 	url = 'Helpsend.GetTimes'
			// }
			that.http.sendRequest('MerchantStoreOrderEvaluate.GetNumber', {
				'store_id': that.storeMsg.id
			}).then(function(res) {
				if (res.code == 0) {
					const dic = res.info[0]
					console.log(dic)
					that.tabbar = ['全部 ' + dic.all, '最新 ' + dic.new,'好评 ' + dic.good,'差评 ' + dic.poor, '有图 ' + dic.figure]
					that.requestData()
				}
			})

		},
		methods: {
			tabbarClick(index) {
				this.listArray = []
				this.$forceUpdate()
				this.selectIndex = index
				this.page = 1
				this.requestData()
			}, 
			doDetailes(item, index) {

			},
			showBigImage(index, list) {
				uni.previewImage({
					current: index,
					urls: list,
				})

			},
			onChange() {

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
			requestData() {
				// 0:全部(默认) 1:最新 3:好评 4:差评 2:有图 
				// 0:全部(默认) 1:最新 2:有图 3:好评 4:差评
				var that = this
				var type = 0;
				if (that.selectIndex == 0) {
					type = 0
				} else if (that.selectIndex == 1) {
					type = 1
				} else if (that.selectIndex == 2) {
					type = 3
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
							that.$forceUpdate()
						} else {
							that.listArray = that.listArray.concat(res.info[0])
						}
					}

				})
			},
			doLike(item, status) {

				this.http.sendRequest('MerchantStoreOrderEvaluate.SetOrderLike', {
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

	/* .middle-Content::after {
		content: "";
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 1px;
		background-color: #F0F0F0;
	} */
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

	.bottomView {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 45px;
		align-items: center;
		border-bottom: 1px solid #D6DADE;
	}

	/* .image:last-child {
	    margin-right: auto;
	} */
	.picBackView:not(:nth-child(3n)) {
		margin-right: 4.5px;
	}
</style>
