import md5_js from './md5.js'

export default {
	user() {
		return uni.getStorageSync('userinfo')
	},
	sendRequest(url, data, toast) {
		var promise = new Promise(function(resolve, reject) {
			const value = uni.getStorageSync('userinfo');
			var toolData = {}
			// #ifdef APP-PLUS
			if (uni.getSystemInfoSync().platform == 'ios') {
				toolData.source = 2
			} else {
				toolData.source = 1
			}
			// #endif
			// #ifdef MP-WEIXIN
			toolData.source = 3
			// #endif
			if (value) {
				toolData.uid = value.id
				toolData.token = value.token
				toolData.cityid = value.cityid
			}
			const system_info = uni.getStorageSync('system_info')
			var lag = system_info.language ? system_info.language : 'th-TH'
			// #ifdef APP-PLUS
			lag = system_info.appLanguage ? system_info.appLanguage : 'th-TH'
			// #endif
			const cur_lang = lag.indexOf('zh') != -1 ? toolData.lang ='zh' : toolData.lang ='th'
			console.log("--->",url,Object.assign(toolData, data))
			uni.request({
				url: getApp().globalData.mainurl + url,
				data: Object.assign(toolData, data),
				success: function(res) {
					console.log("<----",url,res)
					setTimeout(() => {
						uni.hideLoading();
					}, 400)
					if (toast) {
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none'
						})
					}
					if (res.data.ret == 200) {
						if (res.data.data.code == 0) {
							resolve(res.data.data)
						} else {
							reject(res.data.data)
						}
					} else {
						console.log(res.data)
						// uni.showToast({
						// 	title: res.data.msg,
						// 	icon: 'none'
						// })
					}
				},
				fail: function(err) {
					console.log(err)
					uni.hideLoading();
				}
			})
		})
		return promise;
	},
	checktoken() {
		var promise = new Promise(function(resolve, reject) {
			const value = uni.getStorageSync('userinfo');

			uni.request({
				url: getApp().globalData.mainurl + 'Rider.User.Iftoken',
				method: 'POST',
				data: {
					'uid': value.id,
					'token': value.token
				},
				success: res => {
					uni.hideLoading()
					if (res.data.data.code == 0) {
						resolve(res.data.data)
					} else {
						reject(res.data.data)
					}
				},
				fail: () => {
					uni.hideLoading()
				},
				complete: () => {
					uni.hideLoading()
				}
			});
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
	formatRichText(html) {
		if (html == undefined) {
			return ''
		}
		let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
			match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
			match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
			match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
			return match;
		});
		newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
			match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
				'max-width:100%;');
			return match;
		});
		newContent = newContent.replace(/<br[^>]*\/>/gi, '');
		newContent = newContent.replace(/\<img/gi,
			'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
		return newContent;
	},
	getTime() {
		return new Date().getTime();
	},
	wgs84togcj02(lng, lat) {
		//定义一些常量
		var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
		var PI = 3.1415926535897932384626;
		var a = 6378245.0;
		var ee = 0.00669342162296594323;
		var dlat = this.transformlat(lng - 105.0, lat - 35.0);
		var dlng = this.transformlng(lng - 105.0, lat - 35.0);
		var radlat = lat / 180.0 * PI;
		var magic = Math.sin(radlat);
		magic = 1 - ee * magic * magic;
		var sqrtmagic = Math.sqrt(magic);
		dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
		dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
		var mglat = lat + dlat;
		var mglng = lng + dlng;
		return [mglng, mglat]
	},
	transformlat(lng, lat) {
		//定义一些常量
		var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
		var PI = 3.1415926535897932384626;
		var a = 6378245.0;
		var ee = 0.00669342162296594323;
	    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
	    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
	    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
	    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
	    return ret
	},
	transformlng(lng, lat) {
		//定义一些常量
		var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
		var PI = 3.1415926535897932384626;
		var a = 6378245.0;
		var ee = 0.00669342162296594323;
	    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
	    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
	    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
	    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
	    return ret
	},
	//微信内H5支付
	isweixinH5() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			console.log('微信浏览器')
			return true;
		} else {
			return false;
		}
	},
	getRequestParams() {
		let url = window.location.href;
		let requestParams = {};
		if (url.indexOf("?") !== -1) {
			let str = url.substr(url.indexOf("?") + 1)
			let strs = str.split("&"); //将字符串内容以&分隔为一个数组
			for (let i = 0; i < strs.length; i++) {
				requestParams[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
			}
		}
		return requestParams;
	},
	isAndroidOrIOS() {
		let type = uni.getSystemInfoSync().platform
		var a = ''
		switch (type) {
			case 'android':
				a = 'Android'
				break;
			case 'ios':
				a = 'iOS'
				break;
			default:
				a = 'Other'
				break;
		}
		return a
	},
	GetWechatAuth() {
		location.href = getApp().globalData.mainurl + 'Login.GetWechatAuth&backurl=' + encodeURIComponent(location
			.href)
	},
	getOpenid(code) {
		return new Promise((resolve, reject) => {
			const value = uni.getStorageSync('userinfo');
			uni.request({
				url: getApp().globalData.mainurl + 'Login.GetWechatInfo',
				method: 'GET',
				data: {
					'uid': value.id,
					'token': value.token,
					'code': code
				},
				success: res => {
					if (res.data.data.code == 0) {
						var openid = res.data.data.info[0].openid
						getApp().globalData.openid = openid
						uni.setStorage({
							key: 'openid',
							data: openid
						})
						resolve(openid)
					} else {
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none'
						});
					}

				},
			});
		});
	},
}
