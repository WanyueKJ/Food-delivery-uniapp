<template>
	<view>
		<wybar @clickLeft="back"></wybar>
		<view class="tip">
			{{i18n.mine.editNameTip}}
		</view>

		<view class="inputback">
			<input type="text" @input="input" :value="nickName" class="input">
		</view>

		<view class="save" @click="doSave()">
			{{i18n.mine.querenxiugai}}
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
				userInfo: {},
				nickName: ''
			}
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key: 'userinfo',
				success: res => {
					that.nickName = res.data.user_nickname
					console.log(res)
				}
			})
		},
		methods: {
			back() {
				console.log("-->back");
				uni.navigateBack()
			},
			input(e) {
				this.nickName = e.detail.value
				console.log(e.detail.value)
			},
			doSave() {
				var that = this
				var dic = {}
				dic.fields = JSON.stringify({
					'user_nickname': that.nickName,
				})

				uni.hideLoading()
				that.http.sendRequest('User.UpUserInfo', dic).then(function(res) {
					console.log(res)
					if (res.code == 0) {
						// 修改个人标配资料
						// let promise = uni.$TUIKit.updateMyProfile({
						//   nick: that.nickName,
						// });
						 
						// promise.then(function(imResponse) {
						  // console.log(imResponse.data); // 更新资料成功
						// }).catch(function(imError) {
						//   console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
						// });
						setTimeout(function() {
							that.back()
						}, 1000);
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
		background-color: #f5f6f7;
	}

	.tip {
		margin-left: 15px;
		width: calc(100% - 30px);
		margin-top: 30px;
		font-size: 24px;
		font-weight: bold;
		color: #FF5725;
	}

	.inputback {
		margin-left: 15px;
		width: calc(100% - 30px);
		margin-top: 20px;
		height: 60px;
		border-radius: 8px;
		background-color: #FFF;
	}

	.input {
		margin-left: 15px;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		font-weight: bold;
		color: #FF5725;
		width: calc(100% - 30px);
	}

	.save {
		left: 15px;
		width: calc(100% - 30px);
		height: 49px;
		border-radius: 8px;
		color: #FFF;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		background-color: #FF5725;
		position: absolute;
		bottom: 50px;
		line-height: 49px;
	}
</style>
