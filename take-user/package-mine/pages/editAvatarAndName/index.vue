<template>
	<view>
		<wybar @clickLeft="back" ></wybar>
		<image class="user-avatar" :src="avatarPath" mode="aspectFill" @click="photo">
		</image>

		
		<view class="row cesex" @click="editName()">
			<view class="column" style="margin-left: 15px;flex: 1;">
				<view class="label1">
					{{i18n.mine.nicheng}}
				</view>
				<view class="label2">
					{{user_nickname}}
				</view>
			</view>
			<image src="../../../static/ads-seld-right.png" mode="" style="width: 16px;height: 16px;margin-right: 15px"></image>
			
		</view>
		
		<view class="row cesex" @click="editPhone()">
			<view class="column" style="margin-left: 15px;flex: 1;">
				<view class="label1">
					{{i18n.mine.dianhua}}
				</view>
				<view class="label2">
					{{userinfo.mobile}}
				</view>
			</view>
			<image src="../../../static/ads-seld-right.png" mode="" style="width: 16px;height: 16px;margin-right: 15px"></image>
			
		</view>
		<view class="row cesex" @click="changesex()">
			<view class="column" style="margin-left: 15px;flex: 1;">
				<view class="label1">
					{{i18n.mine.xingbie}}
				</view>
			</view>
			<view class="label2">
				{{sex}}
			</view>
			<image src="../../../static/ads-seld-right.png" mode="" style="width: 16px;height: 16px;margin-right: 15px"></image>
			
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
				sex: '',
				userinfo: {},
				avatarPath: '', //头像路径
				avatar: '',
				user_nickname: '', //昵称
				sexlist: [],
				sexindex: 0,
				isChangeImage: 0
			}
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userinfo');
			console.log(this.userinfo)
			getApp().globalData.userinfo = this.userinfo
			if (this.userinfo.sex == 1) {
				this.sex = this.i18n.mine.nan
				this.sexindex = 1
			} else {
				this.sex = this.i18n.mine.nv
				this.sexindex = 2
			}
			this.avatarPath = this.userinfo.avatar
			this.avatar = this.userinfo.avatar
			this.user_nickname = this.userinfo.user_nickname
		},
		onLoad(option) {
			this.sexlist = [this.i18n.mine.nv,this.i18n.mine.nan]
			
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			changesex() {
				var that = this
				uni.showActionSheet({
					itemList: that.sexlist,
					success: res => {
						console.log(res.tapIndex)
						that.sex = that.sexlist[res.tapIndex]
						that.sexindex = res.tapIndex
						that.doSave({'sex':that.sexindex == 0 ? 2 : 1})
					},
					fail: () => {},
					complete: () => {}
				});
			},
			photo() {
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						let tempFilePaths = res.tempFilePaths;
						var path = tempFilePaths[0];
						console.log(path)
						that.avatarPath = path
						that.isChangeImage = 1
						that.uploadImageToservice()
						// that.COS.GetUpload(path, false).then(res => {
						// 	that.avatarPath = path
						// 	that.avatar = res
						// })
					},
				});
			},
			getTime() {
				return new Date().getTime();
			},
			getUserNickname(e) {
				this.user_nickname = e.detail.value;
			},
			saveEdit() {
				uni.showLoading({
					title: this.i18n.mine.shangchuanzhong,
					mask: false
				});
				if (this.isChangeImage) {
					this.uploadImageToservice()
				} else {
					this.doSave()
				}

			},
			uploadImageToservice() {
				var that = this
				const value = uni.getStorageSync('userinfo');
				var toolData = {}
				if (value) {
					toolData.uid = value.id
					toolData.token = value.token
				}
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=App.Upload.Upload',
					filePath: that.avatarPath,
					name: 'file',
					formData: toolData,
					success(res) {
						console.log(res)
						uni.hideLoading()
						var data = JSON.parse(res.data)
						that.avatar = data.data.info[0].url_all
						
						// 修改个人标配资料
						
						
						that.doSave({'avatar': that.avatar})
					},
					fail: err => {
						uni.hideLoading()
					}
				})
			},
			doSave(msg) {

				if (this.sexindex == 0) {
					this.sexindex = 2
				}
				var that = this
				var dic = {}
				dic.fields = JSON.stringify(msg)
				// {
				// 	// 'user_nickname': that.user_nickname,
				// 	// 'avatar': that.avatar,
				// 	'sex':that.sexindex
				// }
				uni.hideLoading()
				that.http.sendRequest('User.UpUserInfo', dic).then(function(res) {
					console.log(res)
					if (res.code == 0) {
						// setTimeout(function() {
						// 	let pages = getCurrentPages();
						// 	if (pages.length == 1) {
						// 		uni.reLaunch({
						// 			url: '../../index/index'
						// 		})
						// 	} else {
						// 		let beforePage = pages[pages
						// 			.length - 2];
						// 		uni.navigateBack({
						// 			delta: 1
						// 		})
						// 	}
						// }, 1000);
					}
				})
			},
			editName(){
				console.log(11111)
				uni.navigateTo({
					url:'./editName'
				})
			},
			editPhone(){
				console.log(11111)
				uni.navigateTo({
					url:'./editPhone'
				})
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
