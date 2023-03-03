<template>
	<view style="width: 100%; overflow-x: hidden;">
		<view class="top">
			<view style="background: linear-gradient(to right, #FF8D58, #FF5D37);width: 100%;height: 128px;">
				<view style="width: 100%;" :style="'height:' + system_top + 'px;'"></view>
				<view class="address_2 row" @click="doShowAddress()">
										<image src="/static/home/home-ads.png" style="width: 14px;height: 14px;margin-left: 15px;"
											mode="aspectFit"></image>
										<view>
											{{curAdsMsg.addr}}
											<!-- {{curAdsMsg.name + ' ' + curAdsMsg.mobile}} -->
										</view>
										<image src="/static/ads-seld-right.png" style="width: 15px;height: 15px;margin-left: 5px;"
											mode=""></image>
									</view>
					
				
			</view>
			<view class="row topSearchBtn" @click="doSearch()">
				<image src="../../../static/search.png" mode="aspectFit"
					style="margin-left: 10px;width: 20px;height: 20px;"></image>
				<view style="margin-left: 10px;font-size: 14px;color: #6F6F6F;">
					{{i18n.index.search}}
				</view>
			</view>
		</view>
		<!-- <image class="bigImage" src="" mode=""></image> -->
		<view class="column" style="width: 100%;" v-if="nearArray">
			<view class="bigImage">
				<swiper class="index-banner swiper" circular="false" indicator-dots="true" autoplay="true"
					>
					<swiper-item class="index-banner-img" @click="bannerTo(item)" v-for="(item, index) in bannerList"
						:key="item.id">
						<image class="index-banner-img" :src="item.image" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			
			<scroll-view scroll-x="true"
				style="width: 100%;height: 248px;white-space: nowrap;background-color: #FFF;margin-top: 20px;border-radius: 12px;" class="row">
				<view v-for="(item,index) in itemArray" :key="index" class="row"
					style="width: 100%;height: 100%;display: inline-block;">
					<view class="row" style="flex-wrap: wrap;width: 100%;height: 124px;">
						<view v-for="(obj,i) in item" class="column array3Item" :style="i % 4 == 0 ? 'margin-left: 15px;' : ''" @click="doMeishiClass(obj)">
							<image src="../../static/images/class-bg.png" style="width: 100%;"  :style="'height:' + classBtnHeight + 'px;'" mode="aspectFill"></image>
							<view class="array3Item_view column" :style="'height:' + classBtnHeight + 'px;'">
								<image :src="obj.thumb" mode="aspectFit" style="width: 70%;height: 62.2%;">
								</image>
								<view
									class="array3Item_name">
									{{obj.use_name}}
								</view>
							</view>
						</view>
					</view>
			
				</view>
			</scroll-view>
			<view style="width: 60%;height: 60px;align-items: center;line-height: 60px;padding-left: 15px;">
				{{i18n.meishi.fujin}}
			</view>
			<view style="width: 100%;background-color: #F5F6F7;">
				<view v-for="(item,index) in nearArray" :key="index" @click="gotoCell(item)" class="row item_back">
					<image mode="aspectFill" class="item_image" :src="item.thumb"></image>
					<view class="column" style="margin-left: 8px;overflow: hidden;height: 72px;flex: 1;">
						<view class="item_biaoti">{{item.name}}</view>
						<view class="row" style="height: 28px;align-items: center;">
							<text
								style="font-size: 14px;font-weight: bold;color: #FF5725;margin-left: 3px;">{{item.stars}}</text>
							<text
								style="font-size: 12px;color: #FF5725;margin-left: 3px;">分</text>
							<text style="font-size: 11px;color: #6f6f6f;margin-left: 8px;">({{item.comment_count}})  {{item.type_name}}</text>
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
		
<botAds :latitude="latitude" :longitude="longitude" :curads="curAdsMsg" v-if="showBotAds && !noLocation"
			@closeAdsView="closeAdsView"></botAds>
		<topAds :latitude="latitude" :longitude="longitude" :curads="curAdsMsg" v-if="showTopAds"
			@closeAdsView="closeAdsView"></topAds>
	</view>
</template>

<script>
	// import storeList from '../../../components/storeList/index.vue'
	import botAds from "@/components/homeAds/bottom.vue"
	import topAds from "@/components/homeAds/top.vue"
	var amapFile = require('@/libs/amap-wx.130.js'); //如：..­/..­/libs/amap-wx.js
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});
	export default {
		components: {
			// storeList
			botAds,
			topAds
		},
		data() {
			return {
				returnIndex: 1,
				system_top: 44,
				weixinMenuWidth: 12,
				itemArray: [],
				scrollHeight: 0,
				bannerList: [],
				recommend: [],
				nearArray: null,
				curAdsMsg: {
					place: '',
					addr: '',
					lat:'',
					lng:''
				},
				classBtnHeight:0,
				middle_banner:[],
				curAdsMsg: {
					place: '',
					addr: '',
					lat: '',
					lng: ''
				},
				latitude: '0',
				longitude: '0',
				showBotAds: false,
				showTopAds: false,
				noLocation: false,
				onhidden: false,
				forgotShowBotAds: false
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		
		onPullDownRefresh() {
			// uni.startPullDownRefresh();
				console.log('refresh');
			this.requestData();
			},
		onReady() {
			const res = uni.getSystemInfoSync();

			
			if (parseInt(res.safeArea.top) > this.system_top) {
				this.system_top = parseInt(res.safeArea.top)
			}
			this.scrollHeight = res.windowHeight - 60 - this.system_top
			this.classBtnHeight = ((res.windowWidth - 30)/4 - 8.1) * 1.12
		},
		onUnload() {
			uni.$off('chooseAddressSucess')
		},
		onShow() {
			if (this.noLocation == true) {
				this.getLocationsss()
			}
			if (this.forgotShowBotAds && this.onhidden) {
				this.forgotShowBotAds = false
				this.showBotAds = true
			}
			this.onhidden = false
			// this.requestData()
		},
		onHide() {
			this.onhidden = true
			console.log('onhideindex')
		},
		onLoad(option) {
			console.log("----onLoad--->");
			var that = this;
			this.returnIndex = option.rdex
			
			uni.getStorage({
				key:'userlocation',
				success: (res) => {
					this.curAdsMsg = res.data
					console.log("-userloaction-->",res);
					
				},
				fail() {
					
				}
			})
			// #ifndef H5
			
			that.requestData()
			that.getLocationsss()
			// #endif
			uni.$on('chooseAddressSucess', function(msg) {
				console.log(msg)
				that.closeAdsView(msg)
			})
		},
		methods: {
			getLocationsss() {
			
				var that = this
				console.log('getLocationsss')
				myAmapFun.getRegeo({
					success: function(data) {
						that.noLocation = false
						uni.showTabBar()
						that.curAdsMsg.place = data[0].desc
						that.curAdsMsg.addr = data[0].name
						that.curAdsMsg.lat = data[0].latitude
						that.curAdsMsg.lng = data[0].longitude
						that.latitude = data[0].latitude
						that.longitude = data[0].longitude
						uni.setStorageSync('latitude', that.latitude)
						uni.setStorageSync('longitude', that.longitude)
						const value = uni.getStorageSync('userinfo');
						// console.log(value);
			
						if (value && value.id && value.token) {
							that.checkLocation()
						} else {
							that.closeAdsView(0)
							setTimeout(function() {
								uni.setStorage({
									key: 'userlocation',
									data: that.curAdsMsg,
									success() {
			
										// that.$refs.storeList0.requestData()
										// that.$refs.storeList1.requestData()
										// that.$refs.storeList2.requestData()
										// that.$refs.storeList3.requestData()
										that.requestData();
									}
								})
							}, 500);
						}
			
					},
					fail: function(info) {
						that.showNoLocationAlert()
						//失败回调
						console.log('失败回调' + JSON.stringify(info))
						// if (info.errCode == 0) {
						that.noLocation = true
						// uni.showTabBar()
						that.showNoLocationAlert()
						// }
					}
			
				})
			
			
			},
			
			showNoLocationAlert() {
							var that = this
							uni.showModal({
								title: that.i18n.kaiqidingweifuwu,
								content: that.i18n.kaiqidingweitishi,
								showCancel: true,
								cancelText: that.i18n.cancel,
								confirmText: that.i18n.qushezhi,
								success: res => {
									uni.showTabBar()
									if (res.confirm) {
										// #ifdef MP-WEIXIN
										wx.openSetting()
										// #endif
										// #ifdef APP-PLUS
										if (getApp().globalData.platform == 'ios') {
											plus.runtime.openURL("app-settings://");
										} else if (getApp().globalData.platform == 'android') {
											var main = plus.android.runtimeMainActivity();
											var Intent = plus.android.importClass("android.content.Intent");
											var mIntent = new Intent('android.settings.WIRELESS_SETTINGS');
											main.startActivity(mIntent);
										}
										// #endif
									}
									// that.showNoLocationAlert()
								},
								fail: () => {
									uni.showTabBar()
								},
								complete: () => {}
							});
							},
			checkLocation() {
				console.log('checkLocation')
			
				var that = this
				that.http.sendRequest('Addr.CheckNewAddress', {
					'lng': that.longitude,
					'lat': that.latitude,
					'place': that.curAdsMsg.place
				}).then(function(res) {
					if (res.code == 0) {
						var a = res.info[0]
			
						if (a.addr == 0) {
							console.log('1111111111', that.onhidden)
							if (that.onhidden) {
								that.forgotShowBotAds = true
							} else {
								that.forgotShowBotAds = false
								that.showBotAds = true
							}
						} else {
							that.curAdsMsg = a.addr
							that.closeAdsView(0)
							setTimeout(function() {
								uni.setStorage({
									key: 'userlocation',
									data: that.curAdsMsg,
									success() {
			
										// that.$refs.storeList0.requestData()
										// that.$refs.storeList1.requestData()
										// that.$refs.storeList2.requestData()
										// that.$refs.storeList3.requestData()
									}
								})
							}, 500);
			
						}
			
					}
				})
			},
			doShowAddress() {
				this.showTopAds = true
				uni.hideTabBar() 
			},
			closeAdsView(e) {
				uni.showTabBar({
					success: res => {
						console.log(res)
					},
					fail: (error) => {
						console.log('fail', error)
					}
				})
			
				var that = this
				that.showBotAds = false
				that.showTopAds = false
				if (e != 0) {
					that.curAdsMsg = e
					// console.log(e)
					setTimeout(function() {
						uni.setStorage({
							key: 'userlocation',
							data: e,
							success() {
								console.log(2121212121)
			
								// that.$refs.storeList0.requestData()
								// that.$refs.storeList1.requestData()
								// that.$refs.storeList2.requestData()
								// that.$refs.storeList3.requestData()
							}
			
						})
					}, 500);
				}
			},
			requestData() {
				var that = this
				that.http.sendRequest('FineFood.Home', {}).then(function(res) {
					if (res.code == 0) {
						uni.stopPullDownRefresh();
						that.bannerList = res.info[0].banner
						that.recommend = res.info[0].recommend
						that.nearArray = res.info[0].distance_store
						that.middle_banner = res.info[0].middle_banner
						var a = res.info[0].store_type
						console.log("-a->",a)
						that.itemArray = [];
						var page;
						if (a.length % 8 == 0) {
							page = a.length / 8
						} else {
							page = parseInt(a.length / 8) + 1
						}
						console.log("-page->",page)
						for (let i = 0; i < page; i++) {
							var aa = [];
							for (let j = 0; j < 8; j++) {
								if ((j + i * 8) < a.length) {
									aa.push(a[j + i * 8])
								}
							}
							console.log("-aa->",aa)
							that.itemArray.push(aa)
						}
						
						console.log("-->",that.itemArray)
					}
					uni.stopPullDownRefresh();
				})


				// if(that.array3.length % 8 == 0)
				// that.array3Page
			},
			doBack() {
				uni.navigateBack({
					delta: 3
				})
			},
			gotoCell(item) {
				uni.navigateTo({
					url: '../store/store?id=' + item.id
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
			doSearch() {
				uni.navigateTo({
					url: '../search/index'
				})
			},
			doMeishiClass(item) {
				uni.navigateTo({
					url: '../class/class?id=' + item.id + '&name=' + item.use_name
				})
			},
			doCollection() {
				if (!this.http.user().id || this.http.user().id == 0) {
					
					uni.navigateTo({
						url: '../../../pages/login/login'
					})
					
					return
				}
				uni.navigateTo({
					url: '../../../package-mine/pages/xihuan/xihuan'
				})
			},
			dorank(){
				uni.navigateTo({
					url:'/pages/rank/rank?type=meishi'
				})
			},
			doRecomment(){
				uni.navigateTo({
					url:'../recomentStore/index'
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
		height: 160px;
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

	.smallImg_back {
		margin-top: 10px;
		margin-left: 15px;
		width: calc(100% - 30px);
		height: 126px;
	}

	.small_view {
		width: calc(50% - 5px);
		border-radius: 8px;
		height: 100%;
		background-color: #FFF;
	}
	.smallview_title {
		margin-left: 10px;
		font-size: 15px;
		font-weight: bold;
		color: #383838;
		margin-top: 5px;
	}
	.smallview_des {
		margin-left: 10px;
		font-size: 11px;
		color: #A8A8A8;
	}
	.smallImage_image {
		margin-left: 10px;
		width: calc(100% - 20px);
		height: 70px;
		margin-top: 5px;
		background-color: #FF5725;
		border-radius: 6px;
	}
	.array3Item {
		margin-top: 10px;
		width: calc((100% - 30px)/4 - 8.1px);
		margin-right: 8px;
		/* height: 90px; */
		border-radius: 8px;
		justify-content: center;
		/* align-items: center; */
		margin-bottom: 10px;
		background-color: #FFF;
		border-radius: 8px;
		position: relative;
	}
	.array3Item_view {
		width: 100%;
		/* height: 100%; */
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		position: absolute;
		left: 0;
		top: 0;
	}
	.array3Item_name {
		font-size: 14px;
		font-weight: bold;
		color: #383838;
		flex: 1;
		display: flex;
		align-items: center;
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
	
	.address_2 {
			margin-left: 5px;
			height: 22px;
			color: #FFF;
			font-size: 15px;
			font-weight: bold;
			line-height: 22px;
			width: 100%;
			align-items: center;
			margin-top: 12px;
		}

</style>
