<template>
	<view class="page">
		<!-- 导航栏 -->
		<navbar ref="navbar" @showdriver="showdriver" @ditu="ditu" @changestatus="changestatus"></navbar>
		<!-- 列表顶部分类 -->
		<view class="pagebar row">
			<view @click="changepageindex(index)" v-for="(item,index) in pagebars" class="bar_item">
				<view :class="selectedIndex == index?'Smain':'Snormal'">
					{{item}}
					<view class="findishnums" v-if="index == 1 && pickupArray.length > 0">
						{{pickupArray.length}}
					</view>
					<view class="findishnums" v-if="index == 2 && completedArray.length > 0">
						{{completedArray.length}}
					</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<swiper :current="selectedIndex" @change="change" @animationfinish="animationfinish" class="swiper"
			:style="'height:' + scrollH + 'px;'">
			<swiper-item>
				<scroll-view scroll-y class="scroll" :style="'height:' + scrollH + 'px;'" :show-scrollbar="false">
					<cell ref="task" @RefuseOrders="RefuseOrders" @GrabOrder="GrabOrder" :selectedIndex="selectedIndex">
					</cell>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y class="scroll" :style="'height:' + scrollH + 'px;'" :show-scrollbar="false">
					<cell ref="pick" @gotomapdetail="gotomapdetail" @StartService="StartService" @connect="connect"
						:selectedIndex="selectedIndex"></cell>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y class="scroll" :style="'height:' + scrollH + 'px;'" :show-scrollbar="false">
					<cell ref="completed" @gotomapdetail="gotomapdetail" @connect="connect"
						@serviceCompleted="serviceCompleted" :selectedIndex="selectedIndex">
					</cell>
				</scroll-view>
			</swiper-item>
		</swiper>
		<nothing v-if="selectedIndex == 0" :list="taskArray" :string="i18n.zanwuxinrenwu"></nothing>
		<nothing v-if="selectedIndex == 1" :list="pickupArray" :string="i18n.zanwudaijiequ"></nothing>
		<nothing v-if="selectedIndex == 2" :list="completedArray" :string="i18n.zanwudaiwancheng"></nothing>
		<!-- 底部按钮 -->
		<view class="bottom" :style="'height:' + safeAreaBottom + 'px;'">
			<view style="width: 100%;height: 53px;align-items: center;" class="row">
				<view class="bottom_left column" @click="set">
					<image src="../../static/image/shehzi.png"></image>
					<text>{{i18n.jiedanshezhi}}</text>
				</view>
				<view class="bottom_right row" @click="reload">
					<image src="../../static/image/shuxin.png"></image>
					<text>{{i18n.shuaxinliebiao}}</text>
				</view>
			</view>
		</view>
		<!-- 左滑我的页面 -->
		<unidrawer ref="showRight" mode="left" :mask-click="true">
			<scroll-view class="drawscroll" :style="'margin-top:' + drawtop + 'px;height:' + drawheight + 'px;'"
				scroll-y="true">
				<view class="drawscroll-header row">
					<image mode="aspectFill" src="../../static/image/touxiang.png"></image>
					<view class="drawscroll-right column">
						<view class="drawscroll-right-name oneline">{{userInfo.user_nickname}}</view>
						<view class="drawscroll-right-mobile">{{mobile}}</view>
					</view>
				</view>
				<view class="drawscroll-menu row">
					<view @click="gomymenus(index)" v-for="(item,index) in mymenu" class="drawscroll-menu-sub">
						<view class="drawscroll-menu-sub-des" v-if="index == 0">{{userInfo.orders}}</view>
						<view class="drawscroll-menu-sub-des" v-if="index == 1">{{userInfo.income}}</view>
						<view class="drawscroll-menu-sub-des" v-if="index == 2">{{userInfo.mgood}}</view>
						<view class="drawscroll-menu-sub-title oneline">{{item}}
							<image src="../../static/image/jinrujiantou.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in userlist" class="userlist" @click="gouser(index)">
					<view :style="index == 4?'margin-top: 30px;':''" class="userlist_cell row">
						<image class="userlist_cell_icon" :src="item.img"></image>
						<text>{{item.name}}</text>
						<image src="../../static/image/jinrujiantou.png" class="jiantou" mode="aspectFit"></image>
					</view>
				</view>
			</scroll-view>
		</unidrawer>
		<!-- 系统设置 -->
		<phoneset v-if="showset == true" @colseset="colseset"></phoneset>
		<!-- 抢单 -->
		<Graborders v-if="grab == true" ref="Graborders" @hidegrab="hidegrab"></Graborders>
		<!-- 4位完成码 -->
		<phoneinput v-if="showphoneCode == true" @finishcode="finishcode" @cancleinput="cancleinput"></phoneinput>
		<!-- 休息 -->
		<relaxview :nums="completedArray.length + pickupArray.length" v-if="showrelax == true"
			@relaxcancle="relaxcancle" @relaxsure="relaxsure"></relaxview>
		<relaxokview v-if="showrelaxok == true" @relaxcancle="relaxcancle"></relaxokview>
		<cancleorder v-if="showcancleorder" @ordercanclesure="ordercanclesure"></cancleorder>
	</view>
</template>

<script>
	import cell from '../../components/defaultcell/index.vue'
	import relaxokview from '../../components/relaxokview/index.vue'
	import relaxview from '../../components/relaxview/index.vue'
	import phoneinput from '../../components/phoneinput/index.vue'
	import cancleorder from '../../components/cancleorder/index.vue'
	import Graborders from '../../components/Graborders/index.vue'
	import phoneset from '../../components/phoneset/index.vue'
	import unidrawer from '../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue'
	import navbar from '../../components/navsearchbar/index.vue'
	import NP from 'number-precision'
	// #ifdef APP-PLUS
	import permision from "@/js_sdk/wa-permission/permission.js"
	const wyGaoDeModule = uni.requireNativePlugin('WY-GaoDeModule')
	// #endif
	var amapFile = require('../../js/amap-wx.130.js');
	var myAmapFun = new amapFile.AMapWX({
		key: getApp().globalData.GaoDeKey_amapkey
	});
	export default {
		components: {
			cancleorder, //取消订单
			cell, //通用cell
			navbar, //导航栏
			unidrawer, //个人中心抽屉
			phoneset, //设置电话
			Graborders, //抢单
			phoneinput, //电话输入
			relaxview, //休息
			relaxokview, //休息
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				showcancleorder: false,
				p1: 1,
				p2: 1,
				p3: 1,
				taskArray: [],
				pickupArray: [],
				completedArray: [],
				mobile: '', //显示个人中心电话178****3333
				userInfo: '', //个人信息
				showrelaxok: false, //是否显示休息界面
				showrelax: false, //是否显示休息界面
				showphoneCode: false, //是否手机验证码view
				grab: false, //抢单
				showset: false, //显示底部接单设置
				userlist: [
					 {
					img: '../../static/personimage/pingjia.png',
					name: '我的评价'
				}, {
					img: '../../static/personimage/dingdan.png',
					name: '订单统计'
				}, {
					img: '../../static/personimage/qianbao.png',
					name: '我的钱包'
				}, {
					img: '../../static/personimage/shehhzi.png',
					name: '设置'
				}], //个人中心列表
				mymenu: ['今日完成单', '今日配送费', '本月好评'], //个人中心列表
				drawtop: 0,
				drawheight: 0,
				list: [], //任务列表
				scrollH: 0,
				safeAreaBottom: 0,
				selectedIndex: 0,
				pagebars: ["新任务", "待取货", "待完成"],
				selectedID: 0,
				locationtimer: null,
				sckChatServer: ''
			}
		},
		onHide() {
			console.log('onHide ')
		},
		onReady() {
			this.userlist = [{
				img: '../../static/personimage/pingjia.png',
				name: this.i18n.wodepingjia
			}, {
				img: '../../static/personimage/dingdan.png',
				name: this.i18n.dingdantongji
			}, {
				img: '../../static/personimage/qianbao.png',
				name: this.i18n.wodeqianbao
			}, {
				img: '../../static/personimage/shehhzi.png',
				name: this.i18n.shezhi
			}] //个人中心列表
			this.mymenu = [this.i18n.jinriwanchengdan, this.i18n.jinripeisongfei, this.i18n.benyuehaoping] //个人中心列表
			this.pagebars = [this.i18n.xinrenwu, this.i18n.daiquhuo, this.i18n.daiwancheng]
		},
		onShow() {
			// console.log(getApp().globalData.GaoDeKey_amapkey)
			var that = this
			// #ifdef MP-WEIXIN
			this.getUserLocation()
			// #endif
			// #ifdef APP-PLUS
			if (this.NB.user()) {
				this.getlocation()
			}
			// #endif
			this.login()
			this.finishedThumb()
		},
		onLoad() {
			console.log('onLoad')
			uni.onNetworkStatusChange(function(res) {
				// console.log(res)
				if (res.isConnected) {
					that.login()
					that.OrdersGetList()
				}
			});
			var that = this
			// #ifdef APP-PLUS
			plus.device.setWakelock(true);
			if (!wyGaoDeModule) {
				wyGaoDeModule.initModule(getApp().globalData.GaoDeAppKey)
			}
			this.requestLocPermission()
			this.requestLocBackgroudPermission()
			// #endif

			this.drawtop = getApp().globalData.top + 44 + 50
			this.drawheight = getApp().globalData.windowHeight - this.drawtop
			this.safeAreaBottom = getApp().globalData.safeAreaBottom + 53
			this.scrollH = getApp().globalData.windowHeight - this.safeAreaBottom - getApp().globalData.top - 50 - 44

			this.locationtimer = setInterval(function() {
				uni.getStorage({
					key: 'mylocation',
					success: res => {
						that.CalculateDistance(res.data.longitude, res.data.latitude)
					}
				})
			}, 5000);
			// #ifdef APP-PLUS
			if (this.NB.user()) {
				setTimeout(function() {
					that.uploadimprofile()
				}, 2000);
				that.getclientID()
			}
			// #endif
		},
		// watch: {
		// 	showset: {
		// 		handler(newName, oldName) {
		// 			// #ifdef APP-PLUS
		// 			// this.startlocation()
		// 			// #endif
		// 		},
		// 		immediate: true
		// 	}
		// },
		methods: {
			getclientID() {
				
			},
			uploadCid(cid){
				
				// that.NB.sendRequest('Rider.Location.Set', {
				// 	lng: res.longitude,
				// 	lat: res.latitude,
				// })
			},
			uploadimprofile() {
				const info = this.NB.user()
				
			},
			ordercanclesure() {
				this.showcancleorder = false
			},
			fomatFloat(value, n) {
				var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
				var s = f.toString();
				var rs = s.indexOf('.');
				if (rs < 0) {
					s += '.';
				}
				for (var i = s.length - s.indexOf('.'); i <= n; i++) {
					s += "0";
				}
				return s;
			},
			CalculateDistance(longitude, latitude) {
				var that = this
				for (let i = 0; i < that.taskArray.length; i++) {
					var dic = that.taskArray[i]
					var l = dic.f_lng
					var t = dic.f_lat
					if (dic.type == 3 && dic.f_lng.length == 0) {
						l = dic.t_lng
						t = dic.t_lat
					}
					if (dic.type == 4 || dic.type == 5) {
						l = dic.t_lng
						t = dic.t_lat
					}

					var distance = parseInt(that.countDist(parseFloat(longitude), parseFloat(latitude), parseFloat(l),
						parseFloat(t)))

					// that.getRidingRoute(longitude, latitude, l, t).then(distance => {
					var mydistance = distance
					if (distance > 1000) {
						mydistance = that.fomatFloat(distance / 1000, 1) + 'km'
					} else {
						mydistance = NP.strip(distance) + 'm'
					}
					that.taskArray[i].myDistance = mydistance
					let allDistance = 0
					if (that.taskArray[i].extra.distance != '') {
						allDistance = parseFloat(distance) + parseFloat(that.taskArray[i].extra.distance)
						if (allDistance > 1000) {
							allDistance = that.fomatFloat(allDistance / 1000, 1) + 'km'
						} else {
							allDistance = NP.strip(allDistance) + 'm'
						}
					}
					that.taskArray[i].allDistance = allDistance
					if (that.$refs.task) {
						that.$refs.task.reload(that.taskArray)
					}

					uni.setStorage({
						key: 'taskArray',
						data: that.taskArray
					})
					// })
				}
				for (let i = 0; i < that.pickupArray.length; i++) {
					var dic = that.pickupArray[i]
					var l = dic.f_lng
					var t = dic.f_lat
					if (dic.type == 3 && dic.f_lng == '') {
						l = dic.t_lng
						t = dic.t_lat
					}
					if (dic.type == 4 || dic.type == 5) {
						l = dic.t_lng
						t = dic.t_lat
					}
					var distance = parseInt(that.countDist(parseFloat(longitude), parseFloat(latitude), parseFloat(l),
						parseFloat(t)))
					// that.getRidingRoute(longitude, latitude, l, t).then(distance => {

					var mydistance = distance
					if (distance > 1000) {
						mydistance = that.fomatFloat(distance / 1000, 1) + 'km'
					} else {
						mydistance = NP.strip(distance) + 'm'
					}
					that.pickupArray[i].myDistance = mydistance

					let allDistance = parseFloat(distance) + parseFloat(that.pickupArray[i].extra.distance)

					if (allDistance > 1000) {
						allDistance = that.fomatFloat(allDistance / 1000, 1) + 'km'
					} else {
						allDistance = NP.strip(allDistance) + 'm'
					}
					that.pickupArray[i].allDistance = allDistance
					if (that.$refs.pick) {
						that.$refs.pick.reload(that.pickupArray)
					}

					uni.setStorage({
						key: 'pickupArray',
						data: that.pickupArray
					})
					// })
				}
				for (let i = 0; i < that.completedArray.length; i++) {
					var dic = that.completedArray[i]
					var l = dic.f_lng
					var t = dic.f_lat
					if (dic.type == 3 && dic.f_lng.length == 0) {
						l = dic.t_lng
						t = dic.t_lat
					}
					if (dic.type == 4 || dic.type == 5) {
						l = dic.t_lng
						t = dic.t_lat
					}
					var distance = parseInt(that.countDist(parseFloat(longitude), parseFloat(latitude), parseFloat(l),
						parseFloat(t)))

					// that.getRidingRoute(longitude, latitude, l, t).then(distance => {
					var mydistance = distance
					if (distance > 1000) {
						mydistance = that.fomatFloat(distance / 1000, 1) + 'km'
					} else {
						mydistance = NP.strip(distance) + 'm'
					}
					that.completedArray[i].myDistance = mydistance
					let allDistance = parseFloat(distance) + parseFloat(that.completedArray[i].extra.distance)
					if (allDistance > 1000) {
						allDistance = that.fomatFloat(allDistance / 1000, 1) + 'km'
					} else {
						allDistance = NP.strip(allDistance) + 'm'
					}
					that.completedArray[i].allDistance = allDistance
					if (that.$refs.completed) {
						that.$refs.completed.reload(that.completedArray)
					}
					uni.setStorage({
						key: 'completedArray',
						data: that.completedArray
					})
					// })
				}
			},
			countDist(lng1, lat1, lng2, lat2) { //纬度1,经度1,纬度2,经度2
				var f = ((lat1 + lat2) / 2) * Math.PI / 180.0;
				var g = ((lat1 - lat2) / 2) * Math.PI / 180.0;
				var l = ((lng1 - lng2) / 2) * Math.PI / 180.0;
				var sg = Math.sin(g);
				var sl = Math.sin(l);
				var sf = Math.sin(f);
				var s, c, w, r, d, h1, h2;
				var a = 6378137.0; //地球的直径
				var fl = 1 / 298.257;
				sg = sg * sg;
				sl = sl * sl;
				sf = sf * sf;
				s = sg * (1 - sl) + (1 - sf) * sl;
				c = (1 - sg) * (1 - sl) + sf * sl;
				w = Math.atan(Math.sqrt(s / c));
				r = Math.sqrt(s * c) / w;
				d = 2 * w * a;
				h1 = (3 * r - 1) / 2 / c;
				h2 = (3 * r + 1) / 2 / s;
				var num = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg))
				return num; //返回单位:米
			},
			getRidingRoute(longitude, latitude, endlongitude, endlatitude) {
				var promise = new Promise(function(resolve, reject) {
					myAmapFun.getRidingRoute({
						origin: longitude + ',' + latitude,
						destination: endlongitude + ',' + endlatitude,
						success: function(data) {
							resolve(data.paths[0].distance)
						},
						fail: function(data) {}
					})
				})
				return promise;
			},
			getlocation() {
				console.log('单次定位开始APPPlus')
				var that = this
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						console.log('单次定位成功')
						that.showset = false
						uni.setStorage({
							key: 'mylocation',
							data: res
						})
						that.OrdersGetList()
						that.NB.sendRequest('Rider.Location.Set', {
							lng: res.longitude,
							lat: res.latitude,
						})
						that.startlocation()
					},
					fail(err) {
						console.log(err)
						that.showset = true
					}
				})
			},
			requestLocPermission() {
				var that = this
				wyGaoDeModule.requestLocPermission((res) => {
					// console.log(res)

				})
			},
			requestLocBackgroudPermission() {
				var that = this
				if (plus.os.name == 'Android') {
					wyGaoDeModule.requestLocBackgroudPermission((res) => {
						// console.log(res)
					})
				}
			},
			startlocation() {
				console.log('开始定位')
				var that = this
				wyGaoDeModule.startLocation({
					enableBackground: 1,
					interval: 5000
				}, (res) => {
					// console.log(res)
					if (res.longitude != 0) {
						uni.setStorage({
							key: 'mylocation',
							data: res
						})
						that.NB.sendRequest('Rider.Location.Set', {
							lng: res.longitude,
							lat: res.latitude,
						})
					}
				})
			},
			stopLocation() {
				wyGaoDeModule.stopLocation()
			},
			GetConfig() {
				console.log(221312123312123312)
				var that = this
				this.NB.sendRequest('Home.GetConfig').then(data => {
					// console.log(data)
					const value = uni.getStorageSync('userinfo');
					if (value && value.id > 0) {
						var chatS = data.info[0].chatserver
						that.sckChatServer = that.NB.decypt(chatS)
						that.socektMethod(that.sckChatServer)
					}
					uni.setStorage({
						key: 'Config',
						data: data.info[0]
					})
				})
			},
			reload() {
				uni.showLoading({
					title: this.i18n.shuaxinzhong,
					mask: false
				});
				this.OrdersGetList()
			},
			OrdersGetList() {
				var that = this
				for (let i = 0; i < 3; i++) {
					this.NB.sendRequest('Rider.Orders.GetList', {
						type: i + 1,
						p: 1
					}).then(data => {
						// console.log(data)
						if (i == 0) {
							uni.getStorage({
								key: 'taskArray',
								success(res) {
									for (let i = 0; i < res.data.length; i++) {
										for (let j = 0; j < data.info.length; j++) {
											if (data.info[j].id == res.data[i].id) {
												data.info[j].myDistance = res.data[i].myDistance
												data.info[j].allDistance = res.data[i].allDistance
											}
										}
									}
									that.taskArray = data.info
									if (that.$refs.task) {
										that.$refs.task.reload(that.taskArray)
									}
								},
								fail() {
									that.taskArray = data.info
									if (that.$refs.task) {
										that.$refs.task.reload(that.taskArray)
									}
								}
							})
						} else if (i == 1) {
							uni.getStorage({
								key: 'pickupArray',
								success(res) {
									for (let i = 0; i < res.data.length; i++) {
										for (let j = 0; j < data.info.length; j++) {
											if (data.info[j].id == res.data[i].id) {
												data.info[j].myDistance = res.data[i].myDistance
												data.info[j].allDistance = res.data[i].allDistance
											}
										}
									}
									that.pickupArray = data.info
									if (that.$refs.pick) {
										that.$refs.pick.reload(that.pickupArray)
									}
								},
								fail() {
									that.pickupArray = data.info
									if (that.$refs.pick) {
										that.$refs.pick.reload(that.pickupArray)
									}
								}
							})
						} else {
							uni.getStorage({
								key: 'completedArray',
								success(res) {
									for (let i = 0; i < res.data.length; i++) {
										for (let j = 0; j < data.info.length; j++) {
											if (data.info[j].id == res.data[i].id) {
												data.info[j].myDistance = res.data[i].myDistance
												data.info[j].allDistance = res.data[i].allDistance
											}
										}
									}
									that.completedArray = data.info
									if (that.$refs.completed) {
										that.$refs.completed.reload(that.completedArray)
									}
									uni.hideLoading()
								},
								fail() {
									that.completedArray = data.info
									if (that.$refs.completed) {
										that.$refs.completed.reload(that.completedArray)
									}
									uni.hideLoading()
								}
							})
							uni.getStorage({
								key: 'mylocation',
								success: res => {
									that.CalculateDistance(res.data.longitude, res.data.latitude)
								}
							})
						}
					})
				}
			},
			GetBaseInfo() {
				var that = this
				this.NB.sendRequest('Rider.User.GetBaseInfo').then(data => {
					that.userInfo = that.NB.user()
					that.userInfo.isrest = data.info[0].isrest
					that.userInfo.balance = data.info[0].balance
					that.userInfo.balancetotal = data.info[0].balancetotal
					that.userInfo.income = data.info[0].income
					that.userInfo.orders = data.info[0].orders
					that.userInfo.star = data.info[0].star
					that.userInfo.evaluates = data.info[0].evaluates
					that.userInfo.average = data.info[0].average
					that.userInfo.bad = data.info[0].bad
					that.userInfo.mgood = data.info[0].mgood
					that.userInfo.good = data.info[0].good
					var reg = /^(\d{3})\d{4}(\d{4})$/;
					that.mobile = that.userInfo.mobile.replace(reg, "$1****$2");
					uni.setStorage({
						key: 'userinfo',
						data: that.userInfo,
						success: function() {}
					});
				})
			},
			getUserLocation() {
				var that = this
				uni.startLocationUpdateBackground({
					type: 'wgs84',
					success: () => {
						that.showset = false
						uni.startLocationUpdate({
							type: 'wgs84',
							success: () => {
								const _locationChangeFn = function(res) {
									uni.setStorage({
										key: 'mylocation',
										data: res
									})
									that.NB.sendRequest('Rider.Location.Set', {
										lng: res.longitude,
										lat: res.latitude,
									})
								}
								uni.onLocationChange(_locationChangeFn)
							}
						})
					},
					fail: (err) => {
						that.showset = true
						console.log('startLocationUpdateBackground',JSON.stringify(err))
					}
				})
			},
			//联系
			connect(item) {

				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				var tonum = item.recip_phone;

				if (item.type < 3 && item.status == 3) {
					tonum = item.pick_phone
				}
				if (item.type == 6) {
					tonum = item.pick_phone
				}
				// console.log(item)
				uni.makePhoneCall({
					phoneNumber: tonum,
					success: (res) => {

					},
					// 失败回调
					fail: (res) => {
						// console.log('调用失败!', JSON.stringify(res))
					}
				})

			},
			cancleinput() {
				this.showphoneCode = false
			},
			finishcode(code) {

				uni.showLoading({
					title: '',
					mask: false
				});
				var that = this
				this.NB.sendRequest('Rider.Orders.Complete', {
					oid: this.selectedID,
					code: code
				}, true).then(function(data) {

					that.OrdersGetList()
					that.showphoneCode = false
				})
			},
			//服务完成
			serviceCompleted(item) {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				this.selectedID = item.id
				this.showphoneCode = true
			},
			//拒绝接单
			RefuseOrders(item) {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				var that = this
				this.NB.sendRequest('Rider.Orders.Refuse', {
					oid: item.id
				}, true).then(function(data) {

					that.OrdersGetList()
				})
			},
			hidegrab() {
				this.grab = false
				this.OrdersGetList()
			},
			//抢单
			GrabOrder(item) {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				var that = this
				this.grab = true
				setTimeout(() => {
					that.NB.sendRequest('Rider.Orders.Grap', {
						oid: item.id
					}).then(function(data) {
						that.$refs.Graborders.success()
						uni.showToast({
							title: data.msg,
							icon: 'none'
						})
						that.selectedIndex = 1
					}).catch(function(data) {
						that.$refs.Graborders.getresult()
					})
				}, 3000)

			},
			//开始服务
			StartService(item) {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				var that = this
				this.selectedID = item.id
				uni.navigateTo({
					url: '../uploadphoto/index',
				});
			},
			finishedThumb() {
				var that = this
				uni.getStorage({
					key: 'finishthumb',
					success(res) {
						if (res.data.length > 0) {
							that.NB.sendRequest('Rider.Orders.Start', {
								oid: that.selectedID,
								thumbs: JSON.stringify(res.data),
							}, true).then(function(data) {
								uni.setStorage({
									key: 'finishthumb',
									data: ''
								})
								that.OrdersGetList()
								that.selectedIndex = 2
							}).catch(data => {
								uni.setStorage({
									key: 'finishthumb',
									data: ''
								})
							})
						}
					}
				})
			},
			//详情
			gotomapdetail(item) {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				uni.navigateTo({
					url: '../detailmap/index?oid=' + item.id,
				});
			},
			gomymenus(index) {
				if (index == 0) {
					uni.navigateTo({
						url: '../Orderstatistics/index?index=1',
					});
				}
				if (index == 1) {
					uni.navigateTo({
						url: '../Mypurse/index',
					});
				}
				if (index == 2) {
					uni.navigateTo({
						url: '../mycomment/index',
					});
				}
			},
			gouser(index) {
				
				if (index == 0) {
					uni.navigateTo({
						url: '../mycomment/index',
					});
				}
				if (index == 1) {
					uni.navigateTo({
						url: '../Orderstatistics/index',
					});
				}
				if (index == 2) {
					uni.navigateTo({
						url: '../Mypurse/index',
					});
				}
				if (index == 3) {
					uni.navigateTo({
						url: '../set/index',
					});
				}
				
			},
			ditu() {
				if (this.userInfo.isrest == 1) {
					uni.showToast({
						title: this.i18n.xiuxizhong,
						icon: 'none'
					});
					return
				}
				if (this.pickupArray.length == 0 && this.completedArray.length == 0) {
					uni.showToast({
						title: this.i18n.zanwurenwu,
						icon: 'none'
					});
					return
				}
				var array = this.completedArray.concat(this.pickupArray)
				uni.setStorage({
					key: 'alltaskarray',
					data: array,
					success() {
						uni.navigateTo({
							url: '../Missionmap/index',
						});
					}
				})
			},
			relaxcancle() {
				this.$refs.navbar.getstatus()
				this.showrelaxok = false
				this.showrelax = false
			},
			UpRest() {
				var that = this
				var isrest = 0
				if (this.userInfo.isrest == 0) {
					isrest = 1
				}
				uni.showLoading({
					title: '',
					mask: false
				});
				this.NB.sendRequest('Rider.User.UpRest', {
					rest: isrest
				}).then(data => {
					// console.log(data)
					that.showrelax = false
					that.GetBaseInfo()
					if (isrest == 1) {
						that.showrelaxok = true
					}
					that.$refs.navbar.changedata(isrest)
				})
			},
			relaxsure() {
				this.showrelax = false
				this.$refs.navbar.getstatus()
				this.showrelaxok = false
				this.showrelax = false
				console.log('relaxsure')
				// this.UpRest()
			},
			changestatus() {
				if (this.userInfo.isrest == 0) {
					if (this.completedArray.length > 0 || this.pickupArray.length > 0) {

						this.showrelax = true
						return
					}
					this.UpRest()
				} else {
					this.UpRest()
				}
			},
			colseset() {
				this.showset = false
			},
			set() {
				this.showset = true
				// this.onPlayAudio(1)
			},
			showdriver() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			},
			changepageindex(index) {
				this.selectedIndex = index
			},
			change(e) {
				// this.selectedIndex = e.detail.current
			},
			animationfinish(e) {
				this.selectedIndex = e.detail.current
				// this.OrdersGetList()
			},
			login() {
				var that = this
				if (!this.NB.user()) {
					uni.reLaunch({
						url: '../login/login'
					})
				} else {
					this.NB.checktoken().then(res => {
						that.GetBaseInfo()
						that.OrdersGetList()
						this.GetConfig()
					}).catch(data => {
						uni.reLaunch({
							url: '../login/login'
						})
					})
				}
			},
			socektMethod(chatServer) {
				console.log(chatServer)

				var that = this
				if (!this.NB.user()) {
					return
				}

				var socketTask = uni.connectSocket({
					url: chatServer,
					success: () => {
						console.log('socket链接成gong')
					}
				});
				socketTask.onOpen(function(res) {
					console.log('WebSocket连接已打开！', res);
					// that.onSendJoinSocket()
					console.log('faxiaoxile')
					var value = uni.getStorageSync('userinfo');
					var mmmm = {
						action: 'join',
						uid: value.id,
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
					uni.closeSocket();
					socketTask = null;
					setTimeout(() => {
						that.socektMethod(that.sckChatServer)
					}, 3000)
				});
				socketTask.onMessage(function(res) {
					var msg = JSON.parse(res.data)
					console.log('收到服务器内容：', msg);
					// uni.showModal({
					// 	content: msg.action,
					// 	showCancel: false
					// });
					//新订单（待接单）
					if (msg.action == 'orders_new') {
						console.log('新订单（待接单）')
						that.onPlayAudio(1)
					}
					//新指派订单（已接单）
					if (msg.action == 'orders_dispatch') {
						console.log('新指派订单（已接单）')
						that.onPlayAudio(2)
					}
					//转单通知
					if (msg.action == 'orders_trans') {
						console.log('转单通知')
						if (msg.type == 1) {
							//1 转单申请成功 
							that.onPlayAudio(3)
						} else if (msg.type == 3) {
							//3转单申请失败
							that.onPlayAudio(4)
						}
					}
					//订单申请退款，取消服务
					if (msg.action == 'orders_refund') {
						console.log('订单申请退款，取消服务')
						that.onPlayAudio(5)
					}
				});
				// uni.onSocketOpen(function(res) {
				// 	console.log('WebSocket连接已打开！', res);
				// 	that.onSendJoinSocket()
				// });
				// uni.onSocketError(function(res) {
				// 	console.log('WebSocket连接打开失败，请检查！', res);
				// 	// uni.showModal({
				// 	// 	content: JSON.stringify(res),
				// 	// 	showCancel: false
				// 	// });
				// 	uni.closeSocket();
				// 	socketTask = null;
				// 	setTimeout(() => {
				// 		that.socektMethod(that.sckChatServer)
				// 	}, 3000)
				// });
				// uni.onSocketClose(function (res) {
				//     console.log('WebSocket 已关闭！');
				// 	socketTask = null;
				// 	setTimeout(() => {
				// 		that.socektMethod(that.sckChatServer)
				// 	}, 3000)
				// });
				// uni.onSocketMessage(function(res) {
				// 	var msg = JSON.parse(res.data)
				// 	console.log('收到服务器内容：', msg);
				// 	// uni.showModal({
				// 	// 	content: msg.action,
				// 	// 	showCancel: false
				// 	// });
				// 	//新订单（待接单）
				// 	if (msg.action == 'orders_new') {
				// 		console.log('新订单（待接单）')
				// 		that.onPlayAudio(1)
				// 	}
				// 	//新指派订单（已接单）
				// 	if (msg.action == 'orders_dispatch') {
				// 		console.log('新指派订单（已接单）')
				// 		that.onPlayAudio(2)
				// 	}
				// 	//转单通知
				// 	if (msg.action == 'orders_trans') {
				// 		console.log('转单通知')
				// 		if (msg.type == 1) {
				// 			//1 转单申请成功 
				// 			that.onPlayAudio(3)
				// 		} else if (msg.type == 3) {
				// 			//3转单申请失败
				// 			that.onPlayAudio(4)
				// 		}
				// 	}
				// 	//订单申请退款，取消服务
				// 	if (msg.action == 'orders_refund') {
				// 		console.log('订单申请退款，取消服务')
				// 		that.onPlayAudio(5)
				// 	}
				// });
			},
			onSendJoinSocket() {
				console.log('faxiaoxile')
				var value = uni.getStorageSync('userinfo');
				var mmmm = {
					action: 'join',
					uid: value.id,
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
			onPlayAudio(type) {
				this.OrdersGetList();
				var audio = null;
				// audio = uni.createInnerAudioContext();
				audio = uni.getBackgroundAudioManager();
				audio.title = this.i18n.yuyinbobao;
				audio.singer = this.i18n.login.title;
				// audio.sessionCategory = 'playback'; 
				// #ifdef APP-PLUS
				if (type == 1) {
					audio.src = '../../static/music/xindan-m.mp3';
				} else if (type == 2) {
					audio.src = '../../static/music/paidan-m.mp3';
				} else if (type == 3) {
					audio.src = '../../static/music/zhuandanSucs-m.mp3';
				} else if (type == 4) {
					audio.src = '../../static/music/zhuandanFail-m.mp3';
				} else if (type == 5) {
					audio.src = '../../static/music/tuikuanCacle-m.mp3';
				}
				// #endif
				
				audio.play();
				audio.onEnded(function(res) {
					audio = null;
				})
			}
		},
	}
</script>

<style>
	@import url("./index.css");
</style>
