<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.yilou.zhanghaobangding"></wybar>
		<view class="wrap">
			<view v-for="(item,index) in array" :key="index" class="section"
				:style="index == 0 ? 'margin-top:10px;' : ''">
				<!-- <view class="title">{{showmobile}}</view> -->
				<view class="title">{{item.name}}</view>
				<view class="row" style="margin-right: 15px;align-items: center;" @click="click(item)">
					<view class="" style="font-size: 16px;margin-right: 10px;"
						:style="item.status == 1 ? 'color:#FF5725;' : 'color:#AAA;'">
						{{item.status_txt}}
					</view>
					<image src="../../../static/static/assets/right.svg" mode=""
						style="margin-right: 0;width: 15px;height: 15px;"></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import wybar from '../../../components/wybar/wyBar.vue'
	export default {
		components: {
			wybar
		},
		computed: {
			i18n() {
				return this.$t('index')
			},
		},
		data() {
			return {
				showmobile: '',
				array: []
			}
		},
		onLoad() {
			this.requestData()
			// const value = uni.getStorageSync('userinfo');
			// var mobile = value.mobile
			// if (mobile.length > 0) {
			// 	that.showmobile = that.mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
			// }
		},
		methods: {
			requestData() {
				var that = this

				that.http.sendRequest('User.ThirdList', {}).then(function(res) {
					if (res.code == 0) {
						that.array = res.info[0]
						for (let i = 0; i < that.array.length; i++) {
							if (that.array[i].type == -1) {
								that.showmobile = that.array[i].status_txt
								// var mobile = that.array[i].value
								// if (mobile.length > 0) {
								// 	that.showmobile = that.mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
								// }
							}
						}
					}

				})
			},
			back() {
				uni.navigateBack({

				})
			},
			click(item) {
				var that = this
				const index = item.type
				//三方类型 第三方标识,-1手机号，1QQ，2微信，3新浪，4facebook，5twitter 6抖音 7line 8Google
				if (index == -1) {
					if (item.status == 0) {
						uni.navigateTo({
							url: '/package-mine/pages/editAvatarAndName/editPhone',
						});
					} else {
						uni.showModal({
							title: that.i18n.yilou.genghuanbangdingphone,
							content: that.i18n.yilou.dangqianbangdingphone + item.status_txt,
							showCancel: true,
							cancelText: that.i18n.cancel,
							confirmText: that.i18n.sure,
							confirmColor: '#206CFE',
							cancelColor: '#206CFE',
							success: res => {
								if (res.confirm) {
									uni.navigateTo({
										url: '/package-mine/pages/editAvatarAndName/editPhone',
									});
								}
							},
							fail: () => {},
							complete: () => {}
						});
					}
				} else if (index == 2) {
					if (item.status == 0) {
						uni.showLoading({
							title: '...',
							mask: false
						});
						uni.login({
							success: res => {
								uni.hideLoading();
								that.http.sendRequest('Login.getUnionid', {
									'code': res.code
								}).then(function(res) {
									var openid = res.info[0].openid;
									that.bindWx(openid)
								})
								// uni.request({
								// 	url: getApp().globalData.weburl + "api/?s=App.Login.getUnionid",
								// 	method: 'GET',
								// 	data: {
								// 		'code': res.code
								// 	},
								// 	success: function(res2) {
								// 		var openid = res2.data.data.openid;
								// 		that.bindWx(openid)
								// 	},
								// 	fail() {
								// 		uni.hideLoading()
								// 	}
								// });
							},
							fail: () => {
								uni.hideLoading();
							},
						});
					} else {
						uni.showModal({
							title: '',
							content: that.i18n.yilou.shifoujiechu + that.i18n.yilou.bangding + '?',
							showCancel: true,
							cancelText: that.i18n.cancel,
							confirmText: that.i18n.sure,
							confirmColor: '#206CFE',
							cancelColor: '#206CFE',
							success: res => {
								if (res.confirm) {
									that.http.sendRequest('User.RemoveBindByThird', {
										'type': 2
									}).then(info => {
										that.requestData()
									})
								}
							},
							fail: () => {},
							complete: () => {}
						});
					}
					// uni.showModal({
					// 	title: '温馨提示',
					// 	content: '绑定、解绑操作请使用App操作',
					// 	showCancel: false,
					// 	confirmText: '确认',
					// 	confirmColor: '#206CFE',
					// 	cancelColor: '#206CFE',
					// 	success: res => {
					// 		if (res.confirm) {

					// 		}
					// 	},
					// 	fail: () => {},
					// 	complete: () => {}
					// });

				} else if (index == 7) {


				} else if (index == 8) {


				}


			},
			bindWx(openid) {
				var that = this
				wx.getUserProfile({
					desc: that.i18n.login.wxLogin, // 这个参数是必须的
					success: res => {
						var data = JSON.parse(res.rawData)
						let sign = that.http.sort2url({
							'openid': that.openid,
							'type': 2
						});
						uni.login({
							provider: 'weixin',
							success: res => {
								var dic = {
									'type': 2,
									'openid': that.openid,
									'sign': sign,
									'avatar': data.avatarUrl,
									'nicename': data.nickName
								}
								console.log(dic)
								that.http.sendRequest('User.BindByThird', dic).then(
									info => {
										that.requestData()
										uni.hideLoading()
									})
							},
							fail(err) {
								uni.hideLoading()
							}
						})
					},
					fail() {
						uni.hideLoading()
					}
				})
			},
			requestDelate() {
				var that = this

				that.http.sendRequest('User.WriteOff', {}).then(function(res) {
					if (res.code == 0) {
						uni.clearStorageSync();
						getApp().globalData.userinfo = ''
						uni.showModal({
							title: that.i18n.mine.zhuxiaoSucess,
							content: '',
							showCancel: true,
							cancelText: that.i18n.mine.zhidaole,
							// confirmColor: '#FF5725',
							// cancelColor: '#206CFE',
							success: res => {
								uni.reLaunch({
									url: '../../../pages/index/index'
								})
							},
							fail: () => {},
							complete: () => {}
						});
					}

				})

			},
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
							uni.reLaunch({
								url: '../../../pages/index/index'
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
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

	.section {
		width: 100%;
		background-color: #FFF;
		display: flex;
		flex-direction: row;
		height: 52px;
		border-bottom: 1px solid #f5f6f7;
		align-items: center;
	}

	.title {
		font-size: 16px;
		color: #181818;
		flex: 1;
		margin-left: 15px;
	}
</style>
