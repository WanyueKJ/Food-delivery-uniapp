import md5_js from './md5.js'

export default {
	user() {
		return uni.getStorageSync('userinfo')
	},	
	sendRequest(url, data) {
		console.log(">--->",url,data)
		var promise = new Promise(function(resolve, reject) {
			// uni.showLoading({
			// 	title: ' '
			// })
			const value = uni.getStorageSync('userinfo');
			// console.log(value)
			var toolData = {
				lat:'0',
				lng:'0'
			}
			if (value) {
				toolData.uid = value.uid
				toolData.token = value.token	
			}
			var loaction = uni.getStorageSync('shopAddress');
			
			if (loaction) {
				toolData.lat = loaction.lat
				toolData.lng = loaction.lng	
			}
			// const cityid = uni.getStorageSync('cityid')
			// if(cityid){
			// 	toolData.cityid = cityid
			// }
			toolData.cityid = '1'
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
			// console.log(data,toolData)
			uni.request({
				url: getApp().globalData.weburl + 'api/?s=Merchant.' + url,
				data: Object.assign(toolData, data),
				success: function(res) {
					console.log("<----<",url,res)
					// uni.hideLoading();
					  console.log(res)
					if (res.data.ret == 200) {
						if (res.data.data.code == 0 || !res.data.data.code){
							resolve(res.data.data);
						} else{
							uni.showToast({
								title:res.data.data.msg,
								duration: 2000,
								icon:'none'
								
							})
							if(res.data.data.code == 1002 || res.data.data.code == 700) {
								resolve(res.data.data);
								uni.setStorage({
									key:'userinfo',
									data:''
								})
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
					// uni.hideLoading();

				},
				complete:function(res){
					
					console.log('complete',res)
				}
			})
		})
		return promise;
	},
	//适用于接口带有APP.
	sendAppRequest(url, data) {
		
		var promise = new Promise(function(resolve, reject) {
			// uni.showLoading({
			// 	title: ' '
			// })
			const value = uni.getStorageSync('userinfo');
			// console.log(value)
			var toolData = {
				lat:'0',
				lng:'0'
			}
			if (value) {
				toolData.uid = value.uid
				toolData.token = value.token	
			}
			var loaction = uni.getStorageSync('shopAddress');
			
			if (loaction) {
				toolData.lat = loaction.lat
				toolData.lng = loaction.lng	
			}
			toolData.cityid = '1'
			// const cityid = uni.getStorageSync('cityid')
			// if(cityid){
			// 	toolData.cityid = cityid
			// }
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
			// console.log(data,toolData)
			uni.request({
				url: getApp().globalData.weburl + 'api/?s=App.' + url,
				data: Object.assign(toolData, data),
				success: function(res) {
					// uni.hideLoading();
					// console.log(JSON.stringify(res));
					if (res.data.ret == 200) {
						if (res.data.data.code == 0){
							resolve(res.data.data);
						} else{
							uni.showToast({
								title:res.data.data.msg,
								duration: 2000,
								icon:'none'
							})
							// plus.nativeUI.toast(res.data.data.msg,{type:'richtext',
							// 	duration:'2000',
							// 	verticalAlign:'center',
							// 	richTextStyle:{
							// 		align:'center'
							// 	}
							// })
							
							if(res.data.data.code == 1002) {
								resolve(res.data.data);
							} else if (res.data.data.code == 700) {
								// uni.setStorage({
								// 	key:'userinfo',
								// 	data:''
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
					console.log('error:' + error)
					// uni.hideLoading();
	
				},
				complete:function(res){
					//console.log(res)
				}
			})
		})
		return promise;
	},
	
	
	//上传
	
	sendUploadImages(imgsList){
		var promise = new Promise(function(resolve, reject) {
			var that = this
			const value = uni.getStorageSync('userinfo');
			var toolData = {}
			if (value) {
				toolData.uid = value.uid
				toolData.token = value.token
			}
			console.log(imgsList)
			let imgs = imgsList.map((value, index) => {
				return {
					name: 'images' + index,
					url: value
				};
			});
			console.log(imgs)
			var imgUrlArr = []
			for (let i = 0; i < imgs.length; i++) {
				uni.uploadFile({
					url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',
					filePath: imgs[i].url,
					name: imgs[i].name,
					formData: toolData,
					success(res) {
						console.log(res)
						// uni.hideLoading()
						var data = JSON.parse(res.data)
						var img = data.data.info[0].url_all
						imgUrlArr.push(img)
						if(imgUrlArr.length == imgsList.length){
							resolve(imgUrlArr)
						}
					},
					fail: err => {
						// uni.hideLoading()
					}
				})
			}
		})
		return promise
		
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
							'uid': value.uid,
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
