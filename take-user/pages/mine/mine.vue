<template>
	<view>
		<view class="vague_bg">
			<image :src="mine_bg" mode="aspectFill" style="width: 100%;height: 100%;"></image>
			<view class="row" @click="edit()" style="position: absolute;left: 0;right: 0;top: 0;bottom: 0;">
				<image v-if="userInfo.id > 0" :src="userInfo.avatar" mode="aspectFill" class="avatar"></image>
				<image v-else src="../../static/mine/icon_avatar_placeholder.png" mode="aspectFill" class="avatar">
				</image>
			
				<view class="column" style="flex: 1;margin-left: 12px;margin-top: 68.5px;">
					<view v-if="userInfo.id > 0" class="name">{{userInfo.user_nickname}}</view>
					<view v-else class="name">{{i18n.mine.qingdenglu}}</view>
					
				</view>
			</view>
		</view>
		
		

		<view class="item_view row">
			<view v-for="(item,index) in gzArray" :key="index" class="column item" @click="gotolist(item.id)">
				<image :src="item.thumb" mode="aspectFit"
					style="width: 28px;height: 28px;">
				</image>
				<view style="font-size: 12px;color: #1C1D20;margin-top: 3px;">
					{{item.name}}
				</view>
			</view>
		</view>


		<view style="width: 100%;margin-bottom: 10px;">
			<view v-for="(item,index) in fwArray" :key="index" class="cell" @click="gotolist(item.id)">
				<image :src="item.thumb" mode="aspectFit"
					style="width: 26px;height: 26px;margin-left: 15px;">
				</image>
				<view style="margin-left: 8px;flex: 1;">
					{{item.name}}
				</view>
				<image src="../../static/static/assets/right.svg" style="width: 16px;height: 16px;margin-right: 12px;" mode=""></image>
			</view>

		</view>

		<view style="width: 100%;margin-bottom: 10px;">
			<view v-for="(item,index) in swArray" :key="index" class="cell" @click="gotolist(item.id)">
				<image :src="item.thumb" mode="aspectFit"
					style="width: 26px;height: 26px;margin-left: 15px;">
				</image>
				<view style="margin-left: 8px;flex: 1;">
					{{item.name}}
				</view>
				<image src="../../static/static/assets/right.svg" style="width: 16px;height: 16px;margin-right: 12px;" mode=""></image>

			</view>
			<view class="quit" @click="logout">{{i18n.mine.loginOut}}</view>
		</view>
		
		
	</view>

</template>

<script>
	export default {

		data() {
			return {
				userInfo: '',
				top: 0,
				windowHeight: 0,
				gzArray: [],
				fwArray: [],
				swArray: [],
				mine_bg:''
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			
		},
		onShareTimeline: function(res) {},
		onShareAppMessage: function(res) {},
		onShow() {
			console.log('onshow')
			var that = this
			this.userInfo = this.http.user()
			this.http.checktoken((successFun) => {
				console.log(successFun)
				if (successFun == 0) {
					that.firstlogin()
					return
				}
				that.userInfo = ''
				console.log('登录失效')
				that.login()
			});

			setTimeout(() => {
				this.getData()
			}, 0)
		},
		onLoad() {
			this.mine_bg = getApp().globalData.weburl + '/images/mine_bg.png'
		},
		methods: {
			logout() {
							var that = this
							uni.showModal({
								title: that.i18n.mine.logoutTip,
								content: '',
								showCancel: true,
								cancelText: that.i18n.cancel,
								confirmText: that.i18n.sure,
								// confirmColor: '#FF5725',
								// cancelColor: '#206CFE',
								success: res => {
									if (res.confirm) {
										uni.clearStorageSync();
										getApp().globalData.userinfo = ''
										that.http.sendRequest('User.LogOut', {}).then(function(res) {})
										setTimeout(function() {
											uni.reLaunch({
												url: '/package-meishi/pages/index/index'
											})
										}, 500);
									}
								},
								fail: () => {},
								complete: () => {}
							});
						},
			login() {
				var that = this
				
				uni.navigateTo({
					url: '../login/login',
				});
				
			},
			checktoken(success) {
				var that = this
				that.http.sendRequest('User.Iftoken', {}).then(function(info) {
					if (info.info[0].id == 0) {
						that.userInfo = null
					}
				})
			},
			edit() {
				if (this.userInfo.id > 0) {
					uni.navigateTo({
						url: '../../package-mine/pages/editAvatarAndName/index'
					});
				} else {
					console.log(2222222);
					this.login()
				}
			},
			orderItemClick(index) {
				uni.setStorage({
					key: 'mineChangeOrderType',
					data: index,
					success() {
						console.log(index)
						uni.switchTab({
							url: '../order/order'
						})
					}
				})
			},
			doxihuan() {
				if (this.userInfo.id > 0) {
					console.log('xihuan')
					uni.navigateTo({
						url: '../../package-mine/pages/xihuan/xihuan'
					})
				} else {
					console.log(2222222);
					this.login()
				}

			},
			gotolist(index) {
				
				if (this.userInfo.id > 0) {
					if (index == 1) {
						uni.navigateTo({
							url: '../../package-mine/pages/address/address?adsType=2&fromW=mineas'
						})
					} else if (index == 2) {
						uni.switchTab({
							url: '/pages/order/order'
						});
					} else if (index == 3) {
						uni.navigateTo({
							url: '../../package-mine/pages/order/daipingjia/daipingjia'
						})
					} else if (index == 4) {
						uni.navigateTo({
							url: '../../package-mine/pages/xihuan/xihuan'
						})
					} else if (index == 9) {
						var url = getApp().globalData.weburl + 'appapi/help/index?lang=' + getApp().globalData.language
						uni.setStorage({
							key: 'weburl',
							data: url,
							success() {
								uni.navigateTo({
									url: '/pages/webView/webView',
								});
							}
						})
						console.log(211212)
						// uni.navigateTo({
						// 	url: '../../package-mine/pages/help/help'
						// })
					} else if (index == 11) {
						uni.navigateTo({
							url: '../../package-mine/pages/setup/index'
						})
					} else if (index == 5 || index == 6 || index == 7) {
						var that = this
						var type;
						if(index == 5){
							type = 1
						}else if(index == 6){
							type = 3
						}else {
							type = 2
						}
						that.http.sendRequest('MerchantEnter.Read', {
							'type': type
						}).then(function(res) {
							if (res.code == 0) {
								const info = res.info[0]
								if (info.status == -2) {
									uni.navigateTo({
										url: '../../package-mine/pages/apply/apply?title=' + that.i18n.mine
											.shanghuruzhu +
											'&type=' + (type - 1)
									})
								} else {
									uni.showToast({
										title: that.i18n.yilou.wuchongfu,
										icon: 'none'
									})
								}
							}

						})


					}
				
					else if (index == 8) {

						uni.navigateTo({
							url: '../../package-mine/pages/Consultingfeedback/index'
						});
					}else if (index == 10) {

						var url = getApp().globalData.service_url_kefu
						uni.setStorage({
							key: 'weburl',
							data: url,
							success() {
								uni.navigateTo({
									url: '/pages/webView/webView',
								});
							}
						})
					}
				} else {
					console.log(2222222);
					this.login()
				}

			},
			doStore(item, index) {
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
			},
			doRecharge() {
				if (!this.userInfo || this.userInfo.id == 0) {
					
					uni.navigateTo({
						url: '../login/login',
					});
					
					return
				}
				uni.navigateTo({
					url: './recharge/recharge'
				})
			},
			doMinewallet() {
				if (!this.userInfo || this.userInfo.id == 0) {
					
					uni.navigateTo({
						url: '../login/login',
					});
					
					return
				}
				uni.navigateTo({
					url: './wallet/wallet?money=' + this.userInfo.balance
				})
			},
			getData() {
				var that = this
				that.http.sendRequest('User.GetBaseInfo', {}).then(function(res) {
					if (res.code == 0) {
						var info = res.info[0]
						// that.list = info.list
						// that.order = info.orders
						// if (that.userInfo.avatar) {
						that.gzArray = info.one
						that.fwArray = info.two
						that.swArray = info.three
						that.userInfo.avatar = String(info.avatar)
						that.userInfo.user_nickname = info.user_nickname
						that.userInfo.sex = info.sex
						that.userInfo.mobile = info.mobile
						that.userInfo.balance = info.balance
						that.userInfo.welcome = info.welcome
						uni.setStorage({
							key: 'userinfo',
							data: that.userInfo
						})
						// that.getLikeList()
					} else if (res.code == 700) {
						console.log(21321321321123123132123123123132)
						that.userInfo = null
						uni.setStorage({
							key: 'userinfo',
							data: {}
						})
						that.login()
					}

					// }
				})

			},
			getLikeList() {
				var that = this
				that.http.sendRequest('MerchantStoreLike.Index', {
					'p': 1
				}).then(function(res) {
					// that.listArray = res.info
					if (res.code == 0) {
						that.xihuanList = res.info[0]
					}

				})
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.getData()
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F6F7;
	}

	.vague_bg {
		width: 100%;
		height: 150px;
		display: flex;
		flex-direction: row;
		position: relative;
		background: linear-gradient(to right, #FF8D58, #FF5D37);
		/* align-items: center; */
	}

	.avatar {
		margin-top: 68.5px;
		margin-left: 15px;
		width: 63px;
		height: 63px;
		border-radius: 31.5px;
		border: rgba(255, 255, 255, 0.25) solid 1.5px;
		
	}

	.name {
		margin-top: 5px;
		/*margin-left: 20px;
		line-height: 60px;
		height: 60px; */
		color: #FFF;
		font-size: 18px;
		font-weight: bold;
	}

	.rightImage {
		position: absolute;
		top: 136px;
		right: 16.5px;
		width: 16px;
		height: 16px;
	}

	.item_view {
		margin-bottom: 10px;
		width: 100%;
		height: 80px;
		/* justify-content: space-between; */
		background-color: #FFF;
	}


	.item-topview-title {
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		color: #181818;
		font-weight: bold;
		margin-left: 15px;
	}

	.xihuanImage {
		height: 100%;
		border-radius: 4px;
		background-color: #FF5725;
		width: calc(25% - 16px);
		margin-right: 8px;
	}

	.itemContentv {
		/* margin-left: 15px;
		width: calc(100% - 15px); */
		width: 100%;
		height: 80px;
		align-items: center;
	}

	.item {
		width: 25%;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 55px;
		background-color: #FFF;
		color: #1C1D20;
		font-size: 16px;
	}
	
	
	.quit {
		width: calc(100% - 50px);
		height: 40px;
		line-height: 40px;
		text-align: center;
		
		font-size: 19px;
		/* font-weight: bold; */
		border-radius: 90px;
		color: #FF5725;
		border:1px solid #FF5725;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
/* 		position: absolute;
 */		/* border-color: #FF5725;
		border */
		/* bottom: 30px; */
	}
</style>
