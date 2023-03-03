<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view scroll-y="true" style="width: 100%;" :style="'height:' + scrollHeight + 'px;'" v-if="storeMsg">
			<view class="topView">
				<swiper class="topThumb swiper" circular="false" indicator-dots="true" autoplay="true">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item, index) in storeMsg.banner"
						:key="item.id">
						<image style="width: 100%;height: 100%;" :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				<view class="topView-header">
					<!-- #ifdef MP-WEIXIN -->
					<view class="row"
						style="margin-left: 12px;width: calc(100% - 24px);align-items: center;" 
						:style="'height:' + weixinMenuheight + 'px;padding-top:' + weixinMenutop + 'px;'">
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<view class="row"
						style="margin-left: 12px;width: calc(100% - 24px);height: 40px;padding-top: 48px;align-items: center;">
					<!-- #endif -->
					<!-- <view class="row"
						style="margin-left: 12px;width: calc(100% - 24px);height: 40px;padding-top: 48px;align-items: center;"> -->
						<image class="topView-header-image" src="../../../../static/back-left.png" mode="aspectFit"
							@click="doback()"></image>
						<view style="flex: 1;">

						</view>

						<!-- #ifdef MP-WEIXIN -->
						<image src="../../../static/images/xihuan.png" mode="" style="width: 32px;height: 32px;"
							:style="'margin-right:' + weixinMenuWidth + 'px;'" @click="doCollected(0)"
							v-if="storeMsg.is_like == 0"></image>
						<image src="../../../../static/xihuan_sel.png" mode="" style="width: 32px;height: 32px;"
							:style="'margin-right:' + weixinMenuWidth + 'px;'" @click="doCollected(1)" v-else></image>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS -->
						<image src="../../../static/images/xihuan.png" mode=""
							style="width: 32px;height: 32px;margin-right: 10px;" @click="doCollected(0)"
							v-if="storeMsg.is_like == 0"></image>
						<image src="../../../../static/xihuan_sel.png" mode=""
							style="width: 32px;height: 32px;margin-right: 10px;" @click="doCollected(1)" v-else></image>
						<image src="../../../static/images/share.png" mode="" style="width: 32px;height: 32px;"
							:style="'margin-right:' + weixinMenuWidth + 'px;'" @click="doShare()"></image>
						<!-- #endif -->

					</view>
				</view>

				<view class="yinyingview" style="">
					<view class="row" style="width: 100%;margin-top: 10px;width: 100%;align-items: center;">
						<view class="oneline store_name">
							{{storeMsg.use_name}}
						</view>
						<view class="row bangwosong" @click="doBangmai()">
							<image src="../../../static/images/bangmai.png" mode=""
								style="margin-left: 5px;width: 16px;height: 16px;"></image>
							{{i18n.shansong.bangwomai}}
						</view>
					</view>


					<view class="row" style="margin-left: 15px;width: calc(100% - 15px);align-items: center;">
						<starv size=30 disabled=true :value="storeMsg.stars"></starv>
						<text style="font-size: 12px;">{{storeMsg.stars}}{{i18n.toher.fen}}</text>
						<text
							style="font-size: 12px;font-weight: bold;margin-left: 15px;">{{storeMsg.per_capita}}/{{i18n.toher.ren}}</text>
					</view>

					<view class="row"
						style="margin-left: 15px;width: calc(100% - 15px);align-items: center;margin-top: 10px;">
						<image src="../../../static/images/kouwei.png" mode="" style="width: 12px;height: 12px;">
						</image>
						<view style="font-size: 11px;font-weight: bold;color: #323232;">
							{{i18n.meishi.kouwei}}:{{storeMsg.taste_score}}
						</view>

						<image src="../../../static/images/huanjing.png" mode=""
							style="width: 12px;height: 12px;margin-left: 5px;"></image>
						<view style="font-size: 11px;font-weight: bold;color: #323232;">
							{{i18n.toher.huanjing}}:{{storeMsg.environment_score}}
						</view>

						<image src="../../../static/images/fuwu.png" mode=""
							style="width: 12px;height: 12px;margin-left: 5px;"></image>
						<view style="font-size: 11px;font-weight: bold;color: #323232;">
							{{i18n.index.fuwu}}:{{storeMsg.service_score}}
						</view>
					</view>
					<view class="store_label" @click="dorank()">
						{{storeMsg.circle_name}}
					</view>
					<view class="row"
						style="margin-left: 15px;width: calc(100% - 15px);align-items: center;margin-top: 10px;margin-bottom: 25px;">
						<image src="../../../static/images/dingwei.png" mode="" style="width: 12px;height: 12px;">
						</image>
						<view class="oneline"
							style="font-size: 11px;font-weight: bold;color: #676767;width: calc(100% - 60px);">
							{{storeMsg.address}}
						</view>
						<view class="wenluka" @click="doWenluka()">
							{{i18n.toher.wenluka}}
						</view>
					</view>
				</view>


			</view>
			<view style="width: 100%;height: 8px;background-color: #F5F6F7;margin-top: 115px;"></view>
			<view class="column" style="width: 100%;height: 150px;">
				<view class="store_name" style="margin-top: 15px;">
					{{i18n.toher.tuijiancai}}<text style="color: #FF5725;">({{storeMsg.recommend.count}})</text>
				</view>
				<scroll-view scroll-x="true" class=""
					style="width: calc(100% - 30px);height: 80px;white-space: nowrap;margin-left: 15px;">
					<view v-for="(item,index) in storeMsg.recommend.list" :key="index"
						style="width: 80px;height: 80px;margin-right: 8px;justify-content: center;flex-direction: column;display: inline-block;">
						<image :src="item.image" mode="aspectFill" style="width: 80px;height: 56px;border-radius: 8px;">
						</image>
						<view style="font-size: 12px;width: 100%;text-align: center;">
							{{item.use_name}}
						</view>
					</view>
				</scroll-view>
			</view>

			<view style="width: 100%;height: 8px;background-color: #F5F6F7;"></view>
			<view class="column" style="width: 100%;height: 150px;">
				<view class="store_name" style="margin-top: 15px;">
					{{i18n.toher.jingxuanpingjia}}<text style="color: #FF5725;">({{jingxuannums}})</text>
				</view>
				<view class="" style="margin-left: 25%;margin-top: 50px;width: 50%;" v-if="listArray.length == 0">
					<image src="../../../../static/nothing.png" mode="widthFix" style="width: 100%;"></image>
					<view class="" style="text-align: center;width: 100%;font-size: 14px;color: #969696;">
						暂无评价
					</view>
				</view>
				<view v-for="(item,index) in listArray" :key="index" class="cellContentView" v-else>
					<view class="row" style="width: 100%;height: 75px;">
						<image :src="item.user.avatar" mode="aspectFill" class="iconImage"
							v-if="item.is_anonymous != 1">
						</image>
						<image src="../../../../static/logo.png" mode="aspectFill" class="iconImage" v-else>
						</image>
						<view class="nameTimeView colum">
							<view class="userNickeName" v-if="item.is_anonymous != 1">
								{{item.user.user_nickname}}
							</view>
							<view class="userNickeName" v-else>
								{{i18n.yilou.nimingyonghu}}
							</view>
							<view class="userNickeName" style="font-size: 12px;font-weight: 400;color: #FF5725;">
								{{i18n.yilou.fabuyu}} {{item.addtime}}
							</view>
							<view class="row" style="align-items: center;">
								<view style="font-size: 12px;margin-right: 5px;">
									{{i18n.yilou.dafen}}{{item.overall_star}}
								</view>
								<starv size=22 disabled=true :value="item.overall_star"></starv>

								<view style="flex: 1;"></view>
								<image src="../../../../static/meishi/zan-nor.png" mode="aspectFit"
									style="width: 16px;height: 16px;" v-if="item.is_like == 0" @click="doLike(item,1)">
								</image>
								<view style="font-size: 12px;color: #AAAAAA;margin-right: 15px;"
									v-if="item.is_like == 0" @click="doLike(item,1)">
									{{item.like}}
								</view>
								<image src="../../../../static/meishi/zan-sel.png" mode="aspectFit"
									style="width: 16px;height: 16px;" v-if="item.is_like == 1" @click="doLike(item,0)">
								</image>
								<view style="font-size: 12px;color: #FF5725;margin-right: 15px;"
									v-if="item.is_like == 1" @click="doLike(item,0)">
									{{item.like}}
								</view>
							</view>

						</view>

					</view>

					<view class="textContent">
						{{item.comment}}
					</view>
					<view class="middle-Content">

						<view v-for="(url,index_i) in item.pics" :key="index_i" class="picBackView" v-if="index != 1">
							<image :src="url" mode="aspectFill" class="pic-image"
								@click.stop="showBigImage(index_i,item.pics)"></image>
						</view>

					</view>
				</view>
			</view>
		</scroll-view>


		<view class="bottomView">
			<view class="bottomView-c row">
				<view @click="bottomBtnCLick(index)" v-for="(item,index) in botlist" :key="index" class="column"
					style="justify-content: center;align-items: center;">
					<image :src="item.img" mode="aspectFit" style="width: 24px;height: 24px;"></image>
					<view class="" style="font-size: 11px;color: #6F6F6F;" v-if="index == 0 && storeMsg.card == 1">
						{{i18n.toher.yidaka}}
					</view>
					<view class="" style="font-size: 11px;color: #6F6F6F;" v-else>
						{{item.name}}
					</view>
				</view>
			</view>
			
		</view>

		<dakaResult :sucess="dakaRes" v-if="isSHowDaka" @hideDaka="hideDaka"></dakaResult>
		<view class="uni-mask" v-if="h5share" @click="hideShare()">
			<view class="column"
				style="position: absolute;left: 0;bottom: 0;width: 100%;height: 150px;background-color: #fff;border-radius: 10px 0;">
				<view class=""
					style="height: 40px;line-height: 40px;margin-left: 15px;font-size: 14px;font-weight: bold;">
					{{i18n.yilou.shareTips}}
				</view>
				<a href="https://take.sdwanyue.com/" class="bottom_button" style="background-color: #FF5725;color: #FFF;">{{i18n.yilou.qianwangxiazai}}</a>
				<!-- <view class="bottom_button" style="background-color: #FF5725;color: #FFF;" @click.stop="dodownload()">
					{{i18n.yilou.qianwangxiazai}}
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import starv from "@/components/banxing/banStar.vue"
	import dakaResult from "@/package-other/components/daka/index.vue"
	var amapFile = require('@/libs/amap-wx.130.js'); //如：..­/..­/libs/amap-wx.js
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});

	export default {
		components: {
			starv,
			dakaResult,
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				system_top: 44,
				weixinMenuWidth: 12,
				weixinMenutop: 0,
				weixinMenuheight: 0,
				itemArray: [],
				scrollHeight: 0,
				isLiuhai: false,
				botlist: [],
				curAdsMsg: {},
				isSHowDaka: false,
				dakaRes: false,
				storeID: '',
				storeMsg: null,
				page: 1,
				listArray: [],
				jingxuannums: 0,
				h5share: false,
				weburl:''
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			this.isLiuhai = plus.navigator.hasNotchInScreen()
			// #endif
			const res = uni.getSystemInfoSync();

			// #ifdef MP-WEIXIN
			let weinfo = uni.getMenuButtonBoundingClientRect();
			this.weixinMenuWidth = weinfo.width + 12
			this.weixinMenutop = weinfo.top
			this.weixinMenuheight = weinfo.height
			if (res.statusBarHeight >= 44) {
				this.isLiuhai = true
			} else {
				this.isLiuhai = false
			}
			// #endif
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - 80
			this.botlist = [{
					name: this.i18n.toher.daka,
					img: '../../../static/images/daka.png'
				},
				{
					name: this.i18n.toher.tuijian,
					img: '../../../static/images/tuijiancai.png'
				},
				{
					name: this.i18n.toher.chuanzhaopian,
					img: '../../../static/images/picUp.png'
				},
				{
					name: this.i18n.toher.xiedianping,
					img: '../../../static/images/xiedianping.png'
				}
			]
		},
		onLoad(option) {
			this.storeID = option.id
			this.requestData()
			this.requestEVA()
			this.requestNums()
			// #ifdef MP-WEIXIN
			wx.showShareMenu({
				withShareTicket: true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus: ["shareAppMessage"]
			})
			// #endif
			var that = this
			uni.$on('reloadevazd', function() {
				console.log('reloadevazd')
				that.requestEVA()
				that.requestNums()
			})
			uni.$on('reloadtjczd', function() {
				console.log('reloadtjczd')
				that.requestData()
			})
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '万岳外卖', //分享的名称
				path: '',
				mpId: 'wx88ce0419d182313c' //此处配置微信小程序的AppId
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: '万岳外卖',
				type: 0,
				summary: "",
			}
		},
		methods: {

			requestNums() {
				var that = this
				that.http.sendRequest('MerchantStoreOrderEvaluate.GetProductNumber', {
					'store_id': that.storeID,
					'product_id': ''
				}).then(function(res) {
					if (res.code == 0) {
						const dic = res.info[0]
						that.jingxuannums = dic.good
					}
				})
			},
			requestData() {
				var that = this
				that.http.sendRequest('LookingShop.GetStoreDetail', {
					store_id: that.storeID
				}).then(function(res) {
					if (res.code == 0) {
						that.storeMsg = res.info[0]
					}
				})
			},
			doback() {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				uni.navigateBack({

				})
			},
			doWenluka() {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				uni.navigateTo({
					url: '../wenluka/index?name=' + this.storeMsg.use_name + '&ads=' + this.storeMsg.address
				})
			},
			doBangmai() {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					
					return
				}
				
				var loaction = uni.getStorageSync('userlocation');
				var foads = {}
				foads.addr = this.storeMsg.address
				foads.place = ''
				foads.name = this.storeMsg.use_name
				foads.mobile = ''
				foads.lat = this.storeMsg.lat
				foads.lng = this.storeMsg.lng
				uni.navigateTo({
					url: '/package-shansong/pages/cityHelpAddOrder/cityHelpAddOrder?helpType=2&from=find&fromads=' +
						JSON.stringify(foads)
					// url: '../../../../package-shansong/pages/addOrder/addOrder?fromads=' + JSON.stringify(foads) +
					// 	'&toads=' + JSON
					// 	.stringify(loaction) + '&type=1'
				})
			},
			bottomBtnCLick(index) {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				
				if (index == 0) {
					//打卡
					if (this.storeMsg.card == 0) {
						this.getLocationsss(true)
					}

				} else if (index == 1) {
					//推荐
					uni.navigateTo({
						url: 'tuijiancai?id=' + this.storeID + '&name=' + this.storeMsg.use_name
					})
				} else if (index == 2) {
					//传照片
					uni.navigateTo({
						url: 'chuanzhaopian?id=' + this.storeID + '&name=' + this.storeMsg.use_name
					})
				} else {
					//写点评
					uni.navigateTo({
						url: 'xiepingjia?id=' + this.storeID + '&name=' + this.storeMsg.use_name
					})
				}
			},
			getLocationsss(isDaka) {
				var that = this
				console.log('getLocationsss')
				myAmapFun.getRegeo({
					success: function(data) {
						// console.log(data[0]);
						that.curAdsMsg = {
							"place": data[0].name,
							'lat': data[0].latitude,
							'lng': data[0].longitude,
							'store_id': that.storeID
						};

						console.log(that.curAdsMsg)
						if (isDaka) {
							that.requestDaka(that.curAdsMsg)
						}
					},
					fail: function(info) {
						//失败回调
						console.log('失败回调' + JSON.stringify(info))
						if (isDaka) {
							that.isSHowDaka = true
							that.dakaRes = false
						}
					}

				})


			},
			requestDaka(dic) {
				// #ifdef H5
				return
				// #endif
				var that = this
				const value = uni.getStorageSync('userinfo');

				if (value) {
					dic.uid = value.id
					dic.token = value.token
				} else {
					return
				}

				uni.request({
					url: getApp().globalData.weburl + 'api/?s=App.LookingShop.PunchCard',
					data: dic,
					success: function(res) {
						// #ifdef APP-PLUS
						plus.nativeUI.closeWaiting()
						// #endif
						// #ifndef APP-PLUS
						uni.hideLoading();
						// #endif

						// console.log(JSON.stringify(res),url);
						// console.log(res);

						if (res.data.ret == 200) {
							if (res.data.data.code == 0) {
								that.dakaRes = true
								that.isSHowDaka = true
								that.storeMsg.card = 1
							} else {
								that.isSHowDaka = true
								that.dakaRes = false
							}


						} else {
							that.isSHowDaka = true
							that.dakaRes = false
						}

					},
					fail: function(error) {
						
						// #ifdef APP-PLUS
						plus.nativeUI.closeWaiting()
						// #endif
						// #ifndef APP-PLUS
						uni.hideLoading();
						// #endif
						that.isSHowDaka = true
						that.dakaRes = false
					},
					complete: function(res) {
						// console.log(res)
					}
				})
				// that.http.sendRequest('LookingShop.PunchCard', dic).then(function(res) {
				// 	if (res.code == 0) {
				// 		that.dakaRes = true
				// 		that.isSHowDaka = true
				// 		that.storeMsg.card = 1
				// 	} else {
				// 		that.isSHowDaka = true
				// 		that.dakaRes = false
				// 	}
				// })

			},
			hideDaka() {

				this.isSHowDaka = false
			},
			doCollected(type) {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				
				console.log(type)
				var that = this
				if (type == 0) {
					that.http.sendRequest('MerchantStoreLike.Save', {
						'store_id': that.storeID
					}).then(function(res) {
						if (res.code == 0) {
							console.log(res)
							that.storeMsg.is_like = 1

						}
					})
				} else {
					that.http.sendRequest('MerchantStoreLike.ListDelete', {
						'json_id': JSON.stringify([that.storeID])
					}).then(function(res) {
						// that.listArray = res.info
						if (res.code == 0) {
							that.storeMsg.is_like = 0
						}

					})
				}

			},
			requestEVA() {
				var that = this
				that.http.sendRequest('MerchantStoreOrderEvaluate.Index', {
					'type': 3,
					'store_id': that.storeID,
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
				that.requestEVA()
			},
			doLike(item, status) {
				// #ifdef H5
				this.h5share = true
				return
				// #endif
				if (!this.http.user().id || this.http.user().id == 0) {
					uni.navigateTo({
						url: '../../../../pages/login/login'
					})
					return
				}
				
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
			dorank() {
				// #ifdef H5
				return
				// #endif
				uni.navigateTo({
					url: '/pages/rank/rank?type=zhaodian'
				})
			},
			doShare() {
				// #ifdef H5
				this.h5share = true
				// #endif
				// #ifdef APP-PLUS
				uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 0,
					href: getApp().globalData.weburl + 'UNIAPP/#/package-other/pages/findShop/detail/index?id=' +
						this.storeID,
					title: "万岳外卖",
					summary: "随看随点不愁选，即点即达不久等",
					imageUrl: getApp().globalData.weburl + '/logo2.png',

					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				// #endif
			},
			hideShare() {
				this.h5share = false
			},
			dodownload() {
				window.location.href = getApp().globalData.weburl;
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #FFF;
		overflow: hidden;
	}

	.topView {
		margin-top: 0;
		width: 100%;
		background-color: #FFF;
		position: relative;
	}

	.topThumb {
		width: 100%;
		height: 170px;
		/* background-color: #FF5725; */
		border-radius: 0 0 20px 20px;
		overflow: hidden;
	}

	.topView-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 170px;
		/* background-image: url(); */
		/* background-color: #F0d; */
		/* border-radius: 0 0 20px 20px; */
		/* overflow: hidden; */
		/* background-size: 100% 100%; */
	}

	.topView-header-image {
		width: 32px;
		height: 32px;
		background-color: #FFF;
		border-radius: 16px;
	}

	.yinyingview {
		width: calc(100% - 30px);
		min-height: 120px;
		background-color: #FFF;
		margin-left: 15px;
		position: absolute;
		top: 100px;
		border-radius: 8px;
		-moz-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		-webkit-box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
		box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.04);
	}

	.store_name {
		margin-left: 15px;
		height: 35px;
		line-height: 35px;
		font-size: 18px;
		font-weight: bold;
		color: #FF5725;
		width: calc(100% - 95px);
	}

	.bangwosong {
		width: 66px;
		height: 26px;
		border-radius: 4px;
		background-color: rgba(247, 33, 33, 0.1);
		font-size: 12px;
		line-height: 26px;
		color: #FF8355;
		margin-right: 12px;
		align-items: center;
	}

	.wenluka {
		width: 44px;
		height: 22px;
		text-align: center;
		border-radius: 4px;
		background-color: #FEF0E5;
		font-size: 10px;
		line-height: 22px;
		color: #FF5725;
		margin-right: 12px;
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
		margin-top: 10px;
		margin-left: 63px;
		width: calc(100% - 78px);
		line-height: 20px;
		font-size: 14px;
		color: #181818;
	}

	.middle-Content {
		margin-left: 63px;
		width: calc(100% - 78px);
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-top: 10px;
	}

	.middle-Content::after {
		content: "";
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 1px;
		background-color: #F0F0F0;
	}

	.picBackView {
		width: calc(33.3% - 3px);
		border-radius: 8px;
		margin-bottom: 5px;
		overflow: hidden;
		position: relative;
		margin-right: 3px;
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
		width: 100%;
		height: 80px;
		background-color: rgba(0, 0, 0, 0);
		/* align-items: center;
		justify-content: space-around;
		background-color: #FFF;
		box-shadow: 0px 0px 5px 5px rgba(50, 50, 59, 0.1); */
		
	}
	.bottomView-c {
		margin-top: 5px;
		width: 100%;
		height: 75px;
		align-items: center;
		justify-content: space-around;
		background-color: #FFF;
		box-shadow: 0px 0px 5px 5px rgba(50, 50, 59, 0.05);
	}
	.bottom_button {
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 49px;
		border-radius: 8px;
		line-height: 49px;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}
</style>
