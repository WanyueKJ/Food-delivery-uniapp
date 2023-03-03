<template>
	<scroll-view scroll-y :style="'height:' + windowHeight + 'px;'">
		<view class="vague_bg" :style="'height:' + topHeight + 'px;'">
			<view :style="'height:' + marginTopHeight + 'px;'" style="width: 100%;"></view>
			<view class="name_avatar clomun">
				<image v-if="islogin" :src="thumb" mode="aspectFill" class="avatar"></image>
				<image v-else src="../../static/mine/icon_avatar_placeholder.png" mode="aspectFill" class="avatar"
					@click="login()"></image>
				<view v-if="islogin" class="name">{{shopname}}</view>
				<view v-else class="name">{{i18n.mine.logintip}}</view>
				<view class="shop-staus row" @click="changeShopStatus">
					<text>{{shopstatus}} ></text>
				</view>
			</view>
		</view>
		<!-- 资料编辑 -->
		<view class="list_cell" @click="gotoProfile()">
			<image src="../../static/mine/mine-profile@2x.png" mode="aspectFit" class="list_cell_icon"></image>
			<text class="list_cell_title">{{i18n.mine.profile}}</text>
			<image src="../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
		</view>

		
		<!-- 通知 开启-->
		<view v-if="openVoice" class="list_cell2" @click="voiceSet(0)">
			<image src="../../static/mine/mine-msg@2x.png" mode="aspectFit" class="list_cell_icon"></image>
			<text class="list_cell3_title">{{i18n.mine.voiceset}}</text>
			<text class="list_cell3_right_txt">{{i18n.mine.kaiqi}}</text>
		</view>
		<!-- 通知 关闭-->
		<view v-else class="list_cell3" @click="voiceSet(1)">
			<view class="list_cell3_top">
				<image src="../../static/mine/mine-msg@2x.png" mode="aspectFit" class="list_cell3_icon"></image>
				<text class="list_cell3_title">{{i18n.mine.voiceset}}</text>
				<text class="list_cell3_right_txt" style="color: #a8a8a8;">{{i18n.mine.nokaiqi}}</text>
			</view>
			<text class="voiceTipTxt">{{i18n.mine.closetip}}</text>
		</view>
		<!-- 关于我们 -->
		<view class="list_cell" @click="gotolist(1)">
			<image src="../../static/mine/aboutus@2x.png" mode="aspectFit" class="list_cell_icon"></image>
			<text class="list_cell_title">{{i18n.mine.about}}</text>
			<image src="../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			<view class="line"></view>
		</view>
		<!-- 协议 -->
		<view class="list_cell2" @click="gotolist(2)">
			<image src="../../static/mine/mine-user@2x.png" mode="aspectFit" class="list_cell_icon"></image>
			<text class="list_cell_title">{{i18n.mine.userxieyi}}</text>
			<image src="../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			<view class="line"></view>
		</view>
		<!-- 隐私政策 -->
		<view class="list_cell2" @click="gotolist(3)">
			<image src="../../static/mine/mine-yinsi@2x.png" mode="aspectFit" class="list_cell_icon"></image>
			<text class="list_cell_title">{{i18n.mine.yinsi}}</text>
			<image src="../../static/ads-seld-right.png" mode="aspectFit" class="list_cell_right"></image>
			<view class="line"></view>
		</view>
		<!-- 退出账号 -->
		<view v-if="islogin">
			<button @click="logout()" class="logout">{{i18n.mine.loginOut}}</button>
		</view>
		<view style="height: 60px;"></view>
	</scroll-view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				userInfo: {},
				shopInfo: {},
				shopstatus: '',
				marginTopHeight: 0,
				windowHeight: 0,
				refresherTriggered: false,
				islogin: false,
				openVoice: false,
				statusList: [],
				statusType: 0,
				shopid: '',
				autoPrint: 0,
				receive: 0,
				thumb: '',
				phone: '',
				shopname: '',
				address: '',
				type_name: '',
				type_id: '',
				shopID: '',
				lng: '',
				lat: '',
				autoPrint_yilian:0
			}
		},
		onShareTimeline: function(res) {},
		onShareAppMessage: function(res) {},
		onShow() {
			const value = uni.getStorageSync('userinfo');
			console.log(value)
			getApp().globalData.userinfo = value
			this.thumb = '../../static/mine/icon_avatar_placeholder.png'
			if (value.uid > 0) {
				this.islogin = true
				this.shopID = value.store_id
				// this.getData()
				setTimeout(() => {
					this.getData()
				}, 10)
			} else {
				this.islogin = false
			}
		},
		onLoad() {
			var res = uni.getSystemInfoSync()
			this.marginTopHeight = getApp().globalData.menuButtonHeight + getApp().globalData.statusBarHeight
			this.topHeight = this.marginTopHeight + 210
			this.windowHeight = res.windowHeight 
			this.statusList = [this.i18n.mine.shopclose, this.i18n.mine.shopopen]
			this.shopstatus = this.statusList[0]
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			changeShopStatus() {
				if (!this.islogin) {
					this.login()
					return
				}
				var that = this
				uni.showActionSheet({
					title: this.i18n.mine.changeshopstatus,
					itemList: that.statusList,
					success: res => {
						console.log(res.tapIndex)
						that.shopstatus = that.statusList[res.tapIndex]
						that.statusType = res.tapIndex
						that.updateStatus()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			updateStatus() {
				var that = this
				var param = {
					'operating_state': this.statusType
				}
				this.http.sendRequest('Users.Update', param).then(function(res) {
					if (res.code == 0) {
						that.shopstatus = that.statusList[that.statusType]
						that.statusType = this.statusType
					} else {

					}
				})
			},
			logout() {
				this.islogin = false
				uni.clearStorageSync();
				this.http.sendRequest('Users.LogOut', {}).then(function(res) {})
				
				
			},
			gotoProfile() {
				if (!this.islogin) {
					this.login()
					return
				}
				let data = JSON.stringify(this.shopInfo)
				uni.navigateTo({
					url: '../../package-mine/pages/editProfile/editProfile?info=' + data
				})
			},
			gotoPrintset() {
				if (!this.islogin) {
					this.login()
					return
				}
				uni.navigateTo({
					url:'../../package-mine/pages/print/cloundprint?type=1'
				})
			},
			voiceSet(status) {
				if (!this.islogin) {
					this.login()
					return
				}
				var that = this
				var param = {
					'tohes': String(status)
				}
				this.http.sendRequest('Users.Update', param).then(function(res) {
					if (res.code == 0) {
						if (status == 0) {
							that.openVoice = false
						} else {
							that.openVoice = true
						}
						that.getData()
					} else {

					}
				})
			},
			changeAutoReceive() {
				if (!this.islogin) {
					this.login()
					return
				}
				this.receive = !this.receive
				var status = ''
				if (this.receive) {
					status = '1'
				} else {
					status = '0'
				}
				var param = {
					'automatic_order': status
				}
				var that = this
				this.http.sendRequest('Users.Update', param).then(function(res) {
					if (res.code == 0) {
						that.getData()
					} else {
						this.receive = !this.receive
					}
				})
			},
			gotolist(ID) {
				if (!this.islogin) {
					this.login()
					return
				}
				// console.log(ID)
				var that = this
				// this.checktoken((successFun) => {
				// if (successFun == 0) {
				//关于我们
				if (ID == 1) {
					// var url = getApp().globalData.weburl + 'appapi/page/detail?id=1&lang=zh-cn';
					var url = getApp().globalData.weburl + 'appapi/page/detail?id=' + ID
					uni.setStorage({
						key: 'weburl',
						data: url,
						success() {
							uni.navigateTo({
								url: '../webView/webView',
							});
						}
					})
				}
				//用户协议
				if (ID == 2) {
					// var url = 'appapi/page/detail?id=4'
					var url = getApp().globalData.weburl + 'appapi/page/detail?id=3'
					uni.setStorage({
						key: 'weburl',
						data: url,
						success() {
							uni.navigateTo({
								url: '../webView/webView'
							});
						}
					})
				}
				//隐私政策
				if (ID == 3) {
					var url = getApp().globalData.weburl + 'appapi/page/detail?id=5'
					uni.setStorage({
						key: 'weburl',
						data: url,
						success() {
							uni.navigateTo({
								url: '../webView/webView'
							});
						}
					})
				}

				// }
				// });
			},

			getData() {
				var that = this
				that.http.sendRequest('Users.Home').then(data => {
					console.log(data)
					if (data.code == 700) {
						that.islogin = false
						uni.setStorage({
							key: 'shopinfo',
							data: '',
							success: function() {

							}
						});
						uni.setStorage({
							key: 'userinfo',
							data: '',
							success: function() {

							}
						})
					} else {
						that.islogin = true
						that.shopInfo = data.info[0]
						that.autoPrint = parseInt(data.info[0].sm_auto_print)
						that.autoPrint_yilian = parseInt(data.info[0].auto_print)
						that.receive = parseInt(data.info[0].automatic_order)
						if (data.info[0].operating_state == 1) {
							that.shopstatus = that.statusList[1]
						} else {
							that.shopstatus = that.statusList[0]
						}
						that.openVoice = parseInt(data.info[0].tohes)
						that.shopname = data.info[0].name
						that.address = data.info[0].address
						that.type_name = data.info[0].type_name
						that.type_id = data.info[0].type_id
						that.phone = data.info[0].phone
						that.thumb = data.info[0].thumb
						that.lng = data.info[0].lng
						that.lat = data.info[0].lat
						uni.setStorage({
							key: 'shopinfo',
							data: that.shopInfo,
							success: function() {
								console.log('店铺信息存储成功')
							}
						})
					}

				})
			}
			// refresherrefresh() {
			// 	if(!this.islogin){
			// 		this.login()
			// 		return
			// 	}
			// 	this.refresherTriggered = true;
			// 	this.getData()
			// 	setTimeout(() => {
			// 		this.refresherTriggered = false;
			// 	}, 1000);
			// },
		}
	}
</script>

<style>
	/* @import url("./mine.css"); */
	.mine-switch{
		margin-right: 15px;
		width: 40px;
		height: 35px;
		scale: 0.7;
	}
	.line{
		position: absolute;
		left: 15px;
		right: 15px;
		background-color: #f0f0f0;
		bottom: 0;
		height: 1px;
	}
	.logout{
		margin-left: 30px;
		margin-right: 30px;
		margin-top: 50px;
		margin-bottom: 60px;
		/* width: calc(100%-60px); */
		height: 48px;
		border-radius: 24px;
		background-color: #00C1DE;
		font-size: 15px;
		color: white;
		text-align: center;
		line-height: 48px;
		
	}
	.bottomBtn{
		height: 90px;
		padding: 30px;
		background-color: red;
	}
	.list{
		width: calc(100% - 30px);
		margin-left: 15px;
		height: auto;
		min-height: 200px;
		margin-bottom: 20px;
		background-color: #FFFFFF;
		border-radius: 7px;
	}
	.list_cell{
		width: 100%;
		height: 55px;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
	}
	.list_cell_icon{
		width: 22px;
		height: 22px;
		margin-left: 20px;
	}
	.list_cell_title{
		color: #4A4A4A;
		font-size: 16px;
		margin-left: 10px;
		margin-right: 10px;
		display: flex;
		flex: 1;
		/* height: 20px;
		line-height: 20px; */
	}
	.list_cell_title_voice{
		color: #4A4A4A;
		font-size: 16px;
		margin-left: 10px;
		margin-right: 10px;
		display: flex;
		flex: 1;
		/* height: 20px;
		line-height: 20px; */
	}
	.list_cell_right{
		position: absolute;
		right: 12px;
		width: 20px;
		height: 20px;
	}
	.list_cell_right_switch{
		position: absolute;
		right: 32px;
		width: 20px;
		height: 20px;
	}
	.list_cell2{
		width: 100%;
		height: 55px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
	}
	.list_cell4{
		width: 100%;
		/* height: 55px; */
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		background-color: white;
	}
	
	.list_cell3{
		width: 100%;
		/* height: 85px; */
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		position: relative;
		background-color: white;
	}
	.list_cell3_top{
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.list_cell3_icon{
		width: 22px;
		height: 22px;
		margin-left: 20px;
		
	}
	.list_cell3_title{
		color: #4A4A4A;
		font-size: 16px;
		margin-left: 10px;
		display: flex;
		flex: 1;
		margin-right: 10px;
		/* height: 20px;
		line-height: 20px; */
		
	}
	.list_cell3_right_txt{
		/* position: absolute; */
		margin-right: 20px;
		color: #4A4A4A;
		font-size: 16px;
		/* line-height: 20px; */
		
	}
	.list_cell_right_txt{
		position: absolute;
		right: 20px;
		color: #4A4A4A;
		font-size: 16px;
		line-height: 20px;
	}
	/* .voiceTip{
		background-color: white;
		height: 50px;
	} */
	.voiceTipTxt{
		background-color: white;
		color: #a8a8a8;
		font-size: 12px;
		margin-right: 20px;
		margin-left: 52px;
		margin-bottom: 10px;
	}
	.voiceTip text{
		color: #4A4A4A;
		font-size: 12px;
		right: 20px;
		left: 30px;
	}
	.menu{
		width: calc(100% - 30px);
		margin-left: 15px;
		height: 86px;
		border-radius: 8px;
		background-color: #FFFFFF;
		margin-bottom: 15px;
	}
	
	.vague_bg {
		width: 100%;
		background: url(../../package-mine/static/personhome.png);
		background-size: cover;
		box-sizing: border-box;
	}
	
	.name_avatar {
		width: 100%;
		margin-top: 10px;
		height: 210px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.avatar {
		width: 64px;
		height: 64px;
		border-radius: 32px;
		/* border: 2px solid #FFFFFF; */
		margin-top: 15px;
		/* background-color: #F9F9F9; */
		/* box-shadow: 1px 1px 1px 1px rgba(150, 150, 150, 0.1); */
	}
	
	.name {
		color: #1E1E1E;
		font-size: 18px;
		font-weight: bolder;
		/* height: 30px; */
		margin-top: 15px;
		width: 100%;
		text-align: center;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		word-break: break-all;
		word-wrap: break-word;
	}
	.shop-staus{
		margin-top: 15px;
		width: 100px;
		height: 30px;
		font-size: 14px;
		border-radius: 15px;
		border: 1px solid white;
		align-items: center;
		justify-content: center;
		color: white;
	}
	
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #F1F6FD;
	}
	
	
	.navtion {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.navtion_title {
		color: #1E1E1E;
		font-size: 18px;
		text-align: center;
		height: 32px;
		line-height: 32px;
	}
	
</style>
