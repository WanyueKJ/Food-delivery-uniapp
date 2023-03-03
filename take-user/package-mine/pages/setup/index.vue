<template>
	<view>
		<wybar @clickLeft="back" :leftText="i18n.set"></wybar>
		<view class="wrap">
			<view v-for="(item,index) in array" :key="index" class="section row" @click="click(index)">
				<view class="title">{{item}}</view>
				<image src="../../../static/static/assets/right.svg" style="width: 15px;height: 15px;margin-right: 10px;" mode=""></image>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<!-- <view class="section row">
				<view class="title" style="flex:1;">未读消息订阅</view>
				<switch @change="switchChange" style="transform:scale(0.7);margin-right: 10px;" :disabled="isDingyue"
					:checked="isDingyue" />
			</view> -->
			<!-- #endif -->
		</view>
		<view class="quit" @click="logout">{{i18n.mine.loginOut}}</view>
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
				version: '',
				cacheSize: 0,
				array: [],
				isDingyue: false
			}
		},
		onLoad() {
			this.version = getApp().globalData.version
			this.getcache()
			this.array = [this.i18n.yilou.zhanghaobangding, this.i18n.mine.zhuxiaozhanghao]


		},
		onShow() {
			var that = this
			uni.getSetting({
				withSubscriptions: true,
				success(res) {
					console.log(res.subscriptionsSetting.itemSettings)
					const dic = res.subscriptionsSetting.itemSettings
					let id = 't2uIrxRh-MtiUe4dG7rnKGH700Gf__PCimlkxwjG5RU'
					if (dic && dic[id] == 'accept') {
						that.isDingyue = true
					} else {
						that.isDingyue = false
					}
				}
			})
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			},
			click(index) {
				var that = this
				if (index == 0) {
					uni.navigateTo({
						url: 'bindV'
					})
				} else if (index == 1) {

					uni.showModal({
						title: '',
						content: that.i18n.mine.zhuxiaoTip,
						showCancel: true,
						cancelText: that.i18n.mine.zhuxiaoBtn2,
						confirmText: that.i18n.mine.zhuxiaoBtn1,
						confirmColor: '#007AFF',
						cancelColor: '#FC494A',
						success: res => {
							if (res.confirm) {
								that.requestDelate()
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}


			},
			getcache() {},
			clearCache() {
				if (this.cacheSize == 0) {
					return
				}
				uni.showModal({
					title: '',
					content: '确定清理缓存吗？',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确认',
					confirmColor: '#FF5725',
					cancelColor: '#000',
					success: res => {
						if (res.confirm) {
							var that = this
							uni.showLoading({
								title: '清理中...',
								mask: false
							});
							setTimeout(() => {
								uni.hideLoading()
								that.cacheSize = 0
								uni.clearStorage()
								uni.showToast({
									title: '已清理缓存',
									icon: 'none'
								});
							}, 1000)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			requestDelate() {
				var that = this

				that.http.sendRequest('User.WriteOff', {}).then(function(res) {
					if (res.code == 0) {
						uni.clearStorageSync();
						getApp().globalData.userinfo = ''
						uni.$TUIKit.logout()
						uni.$TUIKit.destroy()
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
							uni.$TUIKit.logout()
							// uni.$TUIKit.destroy()
							getApp().globalData.userinfo = ''
							that.http.sendRequest('User.LogOut', {}).then(function(res) {})
							setTimeout(function() {
								uni.reLaunch({
									url: '../../../pages/index/index'
								})
							}, 500);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			switchChange(e) {
				// #ifdef MP-WEIXIN
				if(this.isDingyue){
					uni.openSetting()
				}else{
					uni.requestSubscribeMessage({
						tmplIds: ['t2uIrxRh-MtiUe4dG7rnKGH700Gf__PCimlkxwjG5RU'],
						success(res) {
							console.log(res)
						},
						fail(err) {
							console.log(err)
						}
					})
				}
				
				// #endif

			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
