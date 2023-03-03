import md5_js from './md5.js'

export default {
	user() {
		return uni.getStorageSync('userinfo')
	},	
	sendRequest(url, data, showtoast) {
		
		var promise = new Promise(function(resolve, reject) {
			if (showtoast){
				// #ifdef APP-PLUS
				plus.nativeUI.showWaiting()
				// #endif
				// #ifndef APP-PLUS
				uni.showLoading({
					title: ' '
				})
				// #endif
			}
			
			const value = uni.getStorageSync('userinfo');
			
			var toolData = {
				lat:'0',
				lng:'0'
			}
			if (value) {
				toolData.uid = value.id
				toolData.token = value.token	
			}
			var loaction = uni.getStorageSync('userlocation');
			// console.log(value)
			if (loaction) {
				toolData.lat = loaction.lat
				toolData.lng = loaction.lng	
			}
			const cityid = uni.getStorageSync('cityid')
			if(cityid){
				toolData.cityid = cityid
			}
			const system_info = uni.getStorageSync('system_info')
			var lag = system_info.language ? system_info.language : 'th-TH'
			// #ifdef APP-PLUS
			lag = system_info.appLanguage ? system_info.appLanguage : 'th-TH'
			// #endif
			// console.log(lag)
			const cur_lang = lag.indexOf('zh') != -1 ? toolData.lang ='zh' : toolData.lang ='th'
			getApp().globalData.language = toolData.lang
			// #ifdef MP-WEIXIN
			toolData.source = 3
			// #endif
			// #ifdef APP-PLUS
			if(getApp().globalData.platform == 'ios'){
				toolData.source = 2
			}else if(getApp().globalData.platform == 'android'){
				toolData.source = 1
			}
			// #endif
			console.log(toolData)
			console.log(">------>"+getApp().globalData.weburl + 'api/?s=App.' + url+">------>",data,Object.assign(toolData, data))
			
			uni.request({
				url: getApp().globalData.weburl + 'api/?s=App.' + url,
				data: Object.assign(toolData, data),
				success: function(res) {
					console.log("<-------<"+getApp().globalData.weburl + 'api/?s=App.' + url+"<--------<",res);
					// #ifdef APP-PLUS
					plus.nativeUI.closeWaiting()
					// #endif
					// #ifndef APP-PLUS
					uni.hideLoading();
					// #endif
					// console.log(JSON.stringify(res),url);
					

					if (res.data.ret == 200) {
						if (res.data.data.code == 0){
							resolve(res.data.data);
						} else{
							uni.showToast({
								title:res.data.data.msg,
								icon:'none'
							})
							
							if(res.data.data.code == 1002) {
								resolve(res.data.data);
							} else if (res.data.data.code == 700) {
								// uni.navigateTo({
								// 	url:'/pages/login/login'
								// })
								resolve(res.data.data);
								
							}else if (res.data.data.code == 400) {
								// uni.navigateTo({
								// 	url:'/pages/login/login'
								// })
								resolve(res.data.data);
								
							}
						}
						

					} else {
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							icon:'none'
						})
						
					}

				},
				fail: function(error) {
					console.log(error)
					// #ifdef APP-PLUS
					plus.nativeUI.closeWaiting()
					// #endif
					// #ifndef APP-PLUS
					uni.hideLoading();
					// #endif

				},
				complete:function(res){
					// console.log(res)
				}
			})
		})
		return promise;
	},
	decypt(code) {
		var newcode = '';
		var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&*'
		for (var i = 0; i < code.length; i++) {
			var codeIteam = code[i];
			for (var j = 0; j < str.length; j++) {
				var stringIteam = str[j];
				if (codeIteam == stringIteam) {
					if (j == 0) {
						newcode += str[str.length - 1];
					} else {
						newcode += str[j - 1];
					}
				}
			}
		}
		return newcode;
	},
	sort2url(arr1) {
		var newkey = Object.keys(arr1).sort();
		var newObj = {};
		for (var i = 0; i < newkey.length; i++) {
			newObj[newkey[i]] = arr1[newkey[i]];
		}
		var text = "";
		for (var index in newObj) {
			text = text + index + "=" + newObj[index] + "&";
		}
		text = text.substr(0, text.length - 1);
		text += '&' + '400d069a791d51ada8af3e6c2979bcd7';
		return md5_js(text);
	},
	getQueryString(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	},
	checktoken() {
			var promise = new Promise(function(resolve, reject) {
				const value = uni.getStorageSync('userinfo');
				if (value == '' || value.token == undefined || value == '') {
					uni.hideLoading()
					resolve(0);
				} else {
					uni.request({
						url: getApp().globalData.weburl + 'api/?s=App.User.Iftoken',
						method: 'POST',
						data: {
							'uid': value.id,
							'token': value.token
						},
						success: res => {
							console.log(res)
							uni.hideLoading()
							if (res.data.data.code == 0) {
								resolve(0)
							} else {
								reject(res.data.data.msg)
							}
						},
						fail: () => {uni.hideLoading()},
						complete: () => {uni.hideLoading()}
					});
				}
			})
			
			return promise;
		},
		
}
// module.exports.sendRequest = sendRequest;
