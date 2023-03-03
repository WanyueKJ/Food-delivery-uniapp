<template>
	<view>
		<view class="topImageView" :style="'height:' + topHeight + 'px;'">
			<view class="nav row" :style="'margin-top:' + marginTopHeight + 'px;'">
				
				<text class="nav_title">{{i18n.index.orderM}}</text>
				
			</view>
			<view class="row" style="width: 100%;height: 80px;">
				<view class="tab_sel" @click="tabbarClick(0)">
					<view>{{waitNum}}</view>
					<view>{{i18n.index.waitreceive}}</view>
					<image v-show="tabIndex==0" class="content_img" src="../../static/homeuparrow@2x.png"
						mode="aspectFit"></image>
				</view>
				<view class="tab_sel" @click="tabbarClick(1)">
					<view>{{nottransportNum}}</view>
					<view>{{i18n.index.waitsong}}</view>
					<image v-show="tabIndex==1" class="content_img" src="../../static/homeuparrow@2x.png"
						mode="aspectFit"></image>
				</view>
				<view class="tab_sel" @click="tabbarClick(2)">
					<view>{{transportingNum}}</view>
					<view>{{i18n.index.songing}}</view>
					<image v-show="tabIndex==2" class="content_img" src="../../static/homeuparrow@2x.png"
						mode="aspectFit"></image>
				</view>
				<view class="tab_sel" @click="tabbarClick(3)">
					<view>{{doneNum}}</view>
					<view>{{i18n.index.done}}</view>
					<image v-show="tabIndex==3" class="content_img" src="../../static/homeuparrow@2x.png"
						mode="aspectFit"></image>
				</view>
				<view class="tab_sel" @click="tabbarClick(4)">
					<view>{{refundNum}}</view>
					<view>{{i18n.index.refund}}</view>
					<image v-show="tabIndex==4" class="content_img" src="../../static/homeuparrow@2x.png"
						mode="aspectFit"></image>
				</view>
				<!-- 安卓手机for循环形式无法读取订单个数，所以注释掉 -->
				<!-- <view v-for="(item,index) in tabbar" :key="index" class="tab_sel"
						@click="tabbarClick(index)">
							<view>{{item.number}}</view>
							<view>{{item.name}}</view> 
							<image v-show="index == tabIndex" class="content_img" src="../../static/home/homeuparrow@2x.png" mode="aspectFit"></image>
					</view> -->
			</view>
		</view>
		<block v-if="islogin">
			<swiper style="width: 100%;background-color: #f5f6f7;" :style="'height:' + scrollHeight + 'px;'"
				@animationfinish="animationfinish" :current="tabIndex">
				<swiper-item>
					<orderListV ref="waitReceive" :islogin="islogin" :height="scrollHeight" :typeString="1"
						@cellItemClick="cellItemClick">
					</orderListV>
				</swiper-item>
				<swiper-item>
					<orderListV ref="waitRider" :islogin="islogin" :height="scrollHeight" :typeString="2"
						@cellItemClick="cellItemClick">
					</orderListV>
				</swiper-item>
				<swiper-item>
					<orderListV ref="ridering" :islogin="islogin" :height="scrollHeight" :typeString="3"
						@cellItemClick="cellItemClick">
					</orderListV>
				</swiper-item>
				<swiper-item>
					<orderListV ref="orderDone" :islogin="islogin" :height="scrollHeight" :typeString="4"
						@cellItemClick="cellItemClick">
					</orderListV>
				</swiper-item>
				<swiper-item>
					<orderListV ref="orderRefund" :islogin="islogin" :height="scrollHeight" :typeString="5"
						@cellItemClick="cellItemClick">
					</orderListV>
				</swiper-item>
			</swiper>
		</block>
		<block v-else>
			<view class="logintip" @click="login()">{{i18n.mine.logintip}}</view>
		</block>
	</view>
</template>

<script>
	import orderListV from '@/components/orderlist/orderListView.vue'
	// #ifdef APP-PLUS
	import printer from "@/common/util/printer.js"
	let printModule = uni.requireNativePlugin("PrintModule")
	let globalEvent = uni.requireNativePlugin('globalEvent');
	var platform = uni.getSystemInfoSync().platform
	// #endif
	var amapFile = require('../../libs/amap-wx.130.js'); //如：..­/..­/libs/amap-wx.js
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.amapKey
	});
	export default {
		components: {
			orderListV
		},
		data() {
			return {
				islogin: false,
				scrollHeight: 0,
				tabbar: [],
				tabIndex: 0,
				orderNumberDic: {},
				curAdsMsg: {
					name: '',
					desc: ''
				},
				sckChatServer: '',
				nottransportNum: '0',
				transportingNum: '0',
				doneNum: '0',
				refundNum: '0',
				waitNum: '0',
				topHeight: 0,
				marginTopHeight: 0,
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		onReady() {
			var res = uni.getSystemInfoSync()
			this.marginTopHeight =   getApp().globalData.statusBarHeight
			this.topHeight = this.marginTopHeight + 44 + 80
			this.scrollHeight = res.windowHeight - this.topHeight
			this.tabbar = [this.i18n.index.waitreceive, this.i18n.index.waitsong,
				this.i18n.index.songing, this.i18n.index.done, this.i18n.index.refund
			]
			console.log('onready')
		},
		onShow() {
			console.log('onshow')
			var value = uni.getStorageSync('userinfo')
			console.log(value)
			if (value && value.uid > 0) {
				this.islogin = true
				this.requestCount()
				
			} else {
				this.islogin = false
			}
			// console.log(this.islogin)
		},
		onLoad() {
			var value = uni.getStorageSync('userinfo')
			// console.log(value)
			if (value && value.uid > 0) {
				this.getHomeConfig()
				this.islogin = true
				// #ifdef APP-PLUS
				this.getclientID()
				// #endif
			} else {
				uni.reLaunch({
					url: '../login/login'
				})
				// this.islogin = false
			}
			//获取定位许可
			this.getLocationsss()
			if (this.islogin) {
				this.requestCount()
				// #ifdef APP-PLUS
				 this.getclientID()
				if(getApp().globalData.platform == 'android'){
					this.initListeners()
					this.init()
				}
				
				// #endif
			}else{
				// #ifdef APP-PLUS
				if(getApp().globalData.platform == 'android'){
					this.deInit()
				}
				// #endif
			}
			var that = this
			uni.$on('updateOrderCount', (param) => {
				that.requestCount()
			})
			
			uni.$on('refreshList', (param) => {
				this.tabbarClick(0)
				this.tabbarClick(1)
				this.tabbarClick(2)
				this.tabbarClick(3)
				this.tabbarClick(4)
				that.requestCount()
			})
			
			
		},
		onUnload() {
			uni.$off('updateOrderCount')
		},
		methods: {
			getclientID() {
				var that = this
				uni.getPushClientId({
					success: (res) => {
						console.log('111111111', res.cid);
						that.uploadCid(res.cid)
					},
					fail(err) {
						console.log('2222222', err)
					},
					complete: (res) => {
						console.log('111111', res);
					},
				})
			},
			uploadCid(cid){
				var that = this
				that.http.sendRequest('Push.Update', {
					'cid': cid
				}).then(function(res) {})
			},
			
			requestCount() {
				var that = this
				this.http.sendRequest('MerchantOrder.GetNumber').then(function(data) {
					if (data.code == 0) {
						that.islogin = true
						var dic = data.info[0]
						// console.log(dic)
						that.waitNum = dic.type1
						that.nottransportNum = dic.type2
						that.transportingNum = dic.type3
						that.doneNum = dic.type4
						that.refundNum = dic.type5
					} else if (data.code == 700) {
						that.islogin = false
					}
				})
			},

			// socket
			getHomeConfig() {
				var that = this
				this.http.sendAppRequest('Home.GetConfig').then(data => {
					// console.log(data)
					const value = uni.getStorageSync('userinfo');
					console.log(value.token)
					if (value && value.uid > 0) {
						var chatS = data.info[0].chatserver
						that.sckChatServer = that.http.decypt(chatS)
						that.socektMethod(that.sckChatServer)
					}
					uni.setStorage({
						key: 'Config',
						data: data.info[0]
					})
				})
			},
			socektMethod(chatServer) {
				console.log(chatServer)
				var that = this
				if (!this.islogin) {
					return
				}
				var socketTask = uni.connectSocket({
					url: chatServer,
					success: () => {
						console.log('socket链接成gong')
						// that.onSendJoinSocket()
					}
				});
				socketTask.onOpen(function(res) {
					console.log('WebSocket连接已打开！', res);
					var value = uni.getStorageSync('userinfo');
					var mmmm = {
						action: 'mer_join',
						uid: value.uid,
						token: value.token,
					};
					socketTask.send({
						data: JSON.stringify(mmmm),
						success: (res) => {
							console.log('fasongchengggggg ')
						},
						fail: (error) => {
							console.log(error)
						}
					 })
				});
				socketTask.onError(function(res) {
					console.log('WebSocket连接打开失败，请检查！', res);
					// uni.showModal({
					// 	content: JSON.stringify(res),
					// 	showCancel: false
					// });
					socketTask.close();
					socketTask = null;
					// setTimeout(() => {
					// 	that.socektMethod(that.sckChatServer)
					// }, 3000)
				});
				socketTask.onClose(function(res) {
					console.log('WebSocket 已关闭！');
					
					socketTask = null;
					// setTimeout(() => {
					// 	that.socektMethod(that.sckChatServer)
					// }, 3000)
				});
				socketTask.onMessage(function(res) {
					var msg = JSON.parse(res.data)
					console.log('收到服务器内容：', msg);
					if (msg.action == 'joinRoomBack') {
						 console.log('加入房间状态:'+msg.success)
					}
					//新订单（待接单）
					if (msg.action == 'orders_new') {
						console.log('新订单（待接单）')
						that.onPlayAudio(1)
						that.requestCount()
						that.$refs.waitReceive.updateData(1)
						if(getApp().globalData.platform == 'android'){
							that.getOrderData(msg.data.order_id)
						}
						
						
					}
					
				});
			},
			//获取小票打印数据
			getOrderData(orderid) {
				// let self = this
				// this.http.sendRequest('MerchantOrder.GetOrderPrintData', {
				// 	'id': orderid
				// }).then(function(data) {
				// 	if (data.code == 0) {
				// 		var order = data.info[0]
				// 		if (parseInt(order.store.auto_print) == 1) {
				// 			console.log(order)
				// 			order.app_name = self.i18n.index.appname
				// 			// console.error('==========')
				// 			let printHexString = printer.getPrintHexString(order)
				// 			// console.error('---------')
				// 			// console.log(printHexString)
				// 			printModule.send(printHexString)
				// 		}

				// 	}
				// })
			},
			//新订单声音
			onPlayAudio(type) {
				var shopinfo = uni.getStorageSync('shopinfo')
				if (shopinfo.tohes == 0) {
					return
				}

				var audio = null;
				// audio = uni.createInnerAudioContext();
				audio = uni.getBackgroundAudioManager();
				audio.title = this.i18n.index.yuyinbobao;
				audio.singer = this.i18n.index.title;
				// https://testrun.sdwanyue.com/uniapp/music/paidan-m.mp3
				// audio.sessionCategory = 'playback'; 
				audio.src = getApp().globalData.weburl + 'uniapp/music/mer-neworder.mp3';
				// // #ifdef APP-PLUS
				// if (type == 1) {
				// 	audio.src = '../../static/music/mer-neworder.mp3';
				// } 
				// // #endif
				// // #ifdef MP-WEIXIN
				// if (type == 1) {
				// 	audio.src = getApp().globalData.weburl + 'uniapp/music/mer-neworder.mp3';
				// }
				// // #endif

				audio.play();
				audio.onEnded(function(res) {
					audio = null;
				})
			},
			onSendJoinSocket() {
				console.log('faxiaoxile')
				var value = uni.getStorageSync('userinfo');
				var mmmm = {
					action: 'mer_join',
					uid: value.uid,
					token: value.token,
				};
				uni.sendSocketMessage({
					data: JSON.stringify(mmmm),
					success: (res) => {
						console.log('fasongchengggggg ')
					},
					fail: (error) => {
						console.log(error)
					}
				})
			},
			// 小票打印机相关
			initListeners() {
				globalEvent.addEventListener('Init', (ret) => {
					console.log(ret)
				})
				globalEvent.addEventListener('PrinterState', (ret) => {
					console.log(ret)
				})
				globalEvent.addEventListener('SendRawData', (ret) => {
					console.log(ret)
				})
				globalEvent.addEventListener('DeInit', (ret) => {
					console.log(ret)
				})
			},
			widthOfString() {
				let str = " "
				let width = printer.widthOfString(str)
				// console.log("width:" + width)
			},
			init() {
				// #ifdef APP-PLUS
				printModule.init()
				// #endif
			},
			getPrinterState() {
				// #ifdef APP-PLUS
				printModule.getPrinterState()
				// if (getApp().platform == 'android') {
				// 	
				// }
				// #endif
			},
			deInit() {
				// #ifdef APP-PLUS
				printModule.deInit()
				// if (getApp().platform == 'android') {
					
				// }
				// #endif
			},
			send() {
				// #ifdef APP-PLUS
				let printHexString = printer.getPrintHexString("")
				printModule.send(printHexString)
				// if (getApp().platform == 'android') {
					
				// }
				// #endif

			},
			cellItemClick(item, index) {
				console.log(index)
				uni.navigateTo({
					url: '../../package-index/pages/indexOrderDetail?id=' + item.id
				})
				
			},
			doZiti() {
				if (this.islogin) {
					uni.navigateTo({
						url: '../../package-index/pages/ziti'
					})
				} else {
					uni.navigateTo({
						url: '../login/login'
					})
				}

			},
			doScan() {
				if (this.islogin) {
					// #ifdef APP-PLUS
					uni.navigateTo({
						url: '../../package-index/pages/scanQRCode'
					})
					// #endif
					// #ifdef MP-WEIXIN
					uni.navigateTo({
						url: '../../package-index/pages/scan'
					})
					// #endif
				} else {
					uni.navigateTo({
						url: '../login/login'
					})
				}
			},
			login() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			getLocationsss() {
				var that = this
				console.log('getLocationsss')
				myAmapFun.getRegeo({
					success: function(data) {
						console.log(data)
					},
					fail: function(info) {
							console.log(info)
						}
					})
			},
			tabbarClick(index) {
				this.tabIndex = index
				if (index == 0) {
					this.$refs.waitReceive.updateData(1)
				} else if (index == 1) {
					this.$refs.waitRider.updateData(2)
				} else if (index == 2) {
					this.$refs.ridering.updateData(3)
				} else if (index == 3) {
					this.$refs.orderDone.updateData(4)
				} else if (index == 4) {
					this.$refs.orderRefund.updateData(5)
				}
				
				this.requestCount()
			},
			animationfinish(e) {
				this.tabIndex = e.detail.current
			},
			// gotoCell(item) {
			// 	uni.navigateTo({
			// 		url: '/package-meishi/pages/store/store?id=' + item.id
			// 	})
			// },

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: #fcfcfc;
	}

	.logintip {
		width: 120px;
		height: 40px;
		border-radius: 20px;
		background-color: #00C1DE;
		color: white;
		font-size: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: calc(50% - 40px);
		margin-left: calc(50% - 60px);
	}

	.topImageView {
		width: 100%;
		overflow: hidden;
		background-color: #303F50;
		/* position: relative; */
		background-size: 100% auto;
	}

	.nav {
		display: flex;
		align-items: center;
		height: 44px;
		border-bottom: 1px solid #383838;
	}

	.nav_left {
		margin-left: 15px;
		width: 32px;
		height: 32px;
	}

	.nav_title {
		width: 40%;
		margin: auto;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 16px;
		text-align: center;
	}

	.nav_right {
		position: absolute;
		right: 15px;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 14px;
	}

	.nav_right_mp {
		position: absolute;
		right: 40px;
		height: 20px;
		line-height: 20px;
		color: white;
		font-size: 14px;
	}

	.content_img {
		position: absolute;
		left: calc(50% - 6.5px);
		bottom: 0;
		width: 13px;
		height: 8px;
	}

	.tab_sel {
		font-size: 16px;
		font-weight: bold;
		color: white;
		width: 20%;
		height: 100%;
		display: flex;
		flex-direction: column;
		/* margin-left: 15px;
		margin-right: 4px; */
		position: relative;
		/* height: 30px; */
		justify-content: center;
		align-items: center;

	}

	/* .tab_sel::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 25%;
		height: 2px;
		border-radius: 1px;
		width: 50%;
		background: url('@/static/home-down-z.png'); 
	} */

	.tab_nor {
		font-size: 14px;
		/* font-weight: bold; */
		color: #383838;
		margin-left: 15px;
		margin-right: 4px;
		position: relative;
		height: 30px;
	}
</style>
