import NB from './nb.js'
var nickName = null
var avatar = null
export default {
	login() {
		var that = this
		var promise = new Promise(function(resolve, reject) {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			// #ifdef MP-WEIXIN
			wx.getUserProfile({
				desc: '获取您的用户信息', // 这个参数是必须的
				success: res => {
					var data = JSON.parse(res.rawData)
					that.nickName = data.nickName
					that.avatar = data.avatarUrl
					uni.login({
						provider: 'weixin',
						success: res => {
							that.getUnionid(res.code, resolve, 2)
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
			// #endif
			// #ifdef MP-TOUTIAO	
			tt.login({
				force: true,
				success(res) {
					tt.getUserInfo({
						withCredentials: true,
						success(userres) {
							uni.hideLoading()
							that.nickName = userres.userInfo.nickName
							that.avatar = userres.userInfo.avatarUrl
							that.getUnionid(res.code, resolve, 6)
						},
						fail(res) {
							uni.showModal({
								title: '未获取到用户信息权限',
								content: '请去设置打开用户信息权限',
								showCancel: true,
								cancelText: '取消',
								confirmText: '确定',
								success: res => {
									if (res.confirm) {
										uni.openSetting({})
									}
								},
								fail: () => {},
								complete: () => {}
							});
							uni.hideLoading()
							console.log(res)
							console.log(`getUserInfo 调用失败`);
						},
					});
				},
				fail(res) {
					uni.hideLoading()
					console.log(`login 调用失败`);
				},
			});
			// #endif
		})
		return promise;
	},
	getUnionid(code, resolve, type) {
		var that = this
		var url = ''
		if (type == 2) {
			url = getApp().globalData.mainurl + "App.Login.GetUnionid"
		} else {
			url = getApp().globalData.mainurl + "App.Login.GetUnionidByDy"
		}
		uni.request({
			url: url,
			method: 'POST',
			data: {
				'code': code,
			},
			success: function(res) {
				console.log(res)
				uni.hideLoading()
				if (res.data.data.errode) {
					uni.showToast({
						title: res.data.data.errmsg,
						icon: 'none'
					});
					return
				}
				if (type == 2) {
					uni.setStorage({
						key: 'openid',
						data: res.data.data.openid
					});
					that.thirdlogin(res.data.data.unionid, type, resolve)
				} else {
					uni.setStorage({
						key: 'openid',
						data: res.data.data.data.openid
					});
					that.thirdlogin(res.data.data.data.unionid, type, resolve)
				}
			},
			fail(err) {
				uni.hideLoading()
				console.log(err)
			}
		})
	},
	thirdlogin(openid, type, resolve) {
		uni.showLoading({
			title: '',
			mask: true
		});
		let sign = NB.sort2url({
			'openid': openid,
			'type': type
		});
		var dic = {}
		dic.nicename = this.nickName
		dic.avatar = this.avatar
		dic.openid = openid
		dic.type = type
		dic.sign = sign
		NB.sendRequest('Login.LoginByThird', dic).then(info => {
		
			uni.hideLoading()
			console.log(info)
			uni.showToast({
				title: '登录成功',
				icon: 'none'
			});
			this.saveLocal(info[0], resolve)
		})
	},
	saveLocal(info, resolve) {
		getApp().globalData.userinfo = info
		uni.setStorage({
			key: 'userinfo',
			data: info,
			success() {
				resolve(info)
			}
		});
	},
}
