
import NB from '../js/nb.js'

import {
	pathToBase64,
	base64ToPath
} from './image-tools.js'

export default {
	GetUpload(filepath, isVoice) {
		var key = ''
		if (isVoice == true) {
			key = 'UNIAPP-' + NB.getTime() + '.wav';
		} else {
			key = 'UNIAPP-' + NB.getTime() + '.png';
		}
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			var that = this
			NB.sendRequest('Upload.GetUpload').then(info => {
				uni.hideLoading()
				//七牛上传
				if (info[0].uptype == 1) {
					// that.qiniu(key, filepath, resolve)
				}
				//阿里云上传
				if (info[0].uptype == 2) {
					that.mpServer(info[0].ali, filepath, resolve)
				}
				//腾讯云上传
				if (info[0].uptype == 3) {
					that.mpServer(info[0].txcos, filepath, resolve)
					// that.createCOS(info[0].txcos, key, filepath, resolve,
					// 	isVoice)
				}
			}).catch(data=>{
				uni.hideLoading()
			})
		});
	},
	mpServer(data, path, resolve) {
		uni.showLoading({
			title: '加载中...',
			mask: false
		});
		uni.uploadFile({
			url: getApp().globalData.mainurl + 'Upload.Upload',
			filePath: path,
			name: 'file',
			formData: {
				'uid': getApp().globalData.userinfo.id,
				'token': getApp().globalData.userinfo.token,
			},
			success(res) {
				console.log(res)
				uni.hideLoading()
				var data = JSON.parse(res.data)
				resolve(data.data.info[0].url_all)
			},fail:err=>{
				uni.hideLoading()
			}
		})
	},
	qiniu(key, filepath, resolve) {
		var that = this

		// NB.sendRequest('Upload.GetQiniuToken').then(info => {
		// 	var QiNiutoken = NB.decypt(info[0]
		// 		.token);
		// 	qiniuUploader.upload(filepath, res => {
		// 		uni.showToast({
		// 			title: '上传成功',
		// 			icon: 'none'
		// 		});
		// 		resolve(key)
		// 	}, error => {
		// 		uni.showToast({
		// 			title: '上传失败，请重试',
		// 			icon: 'none'
		// 		});
		// 		console.log('上传失败');
		// 		console.log(res);
		// 	}, {
		// 		region: 'ECN',
		// 		domain: getApp().globalData
		// 			.qiniuimageurl,
		// 		key: key,
		// 		uptoken: QiNiutoken,
		// 	});
		// })

	},
	createCOS(obj, key, filepath, resolve, isVoice) {
		// #ifdef H5
		// var cos = new COSH5({
		// 	SecretId: obj.tmpSecretId,
		// 	SecretKey: obj.tmpSecretKey,
		// 	SecurityToken: obj.sessionToken,
		// 	StartTime: obj.startTime, // 时间戳，单位秒，如：1580000000
		// 	ExpiredTime: obj.expiredTime, // 时间戳，单位秒，如：1580000900
		// });
		// #endif

		// #ifndef H5

		// var cos = new COSup({
		// 	SecretId: obj.tmpSecretId,
		// 	SecretKey: obj.tmpSecretKey,
		// 	XCosSecurityToken: obj.sessionToken,
		// 	StartTime: obj.startTime, // 时间戳，单位秒，如：1580000000
		// 	ExpiredTime: obj.expiredTime, // 时间戳，单位秒，如：1580000900
		// });
		// #endif

		this.upload(obj, key, filepath, cos, resolve, isVoice)
	},
	upload(obj, key, filepath, cos, resolve, isVoice) {
		// #ifdef H5
		var that = this
		pathToBase64(filepath)
			.then(base64 => {
				const blob = that.base64ToBlob(base64)
				var file = that.blobToFile(blob, '')
				// cos.putObject({
				// 	Bucket: obj.bucket,
				// 	Region: obj.region,
				// 	Key: key,
				// 	StorageClass: 'STANDARD',
				// 	Body: file,
				// 	onProgress: function(progressData) {
				// 		var data = JSON.stringify(progressData)
				// 		console.log(data);
				// 		if ((data.total == data.loaded) && (data.total != 0 && data.loaded != 0)) {
				// 			console.log('上传成功：' + key);
				// 			resolve(key)
				// 		}
				// 	}
				// }, function(err, data) {
				// 	console.log(err || data);
				// })
			})
			.catch(error => {
				console.error(error)
			})
		// #endif
		// #ifndef H5
		// cos.postObject({
		// 	Bucket: obj.bucket,
		// 	Region: obj.region,
		// 	Key: key,
		// 	FilePath: filepath,
		// 	onProgress: function(info) {
		// 		console.log(JSON.stringify(info));
		// 		if ((info.total == info.loaded) && (info.total != 0 && info.loaded != 0)) {
		// 			console.log('上传成功：' + key);
		// 			// var string = 'https://' + obj.bucket + '.cos.' + obj.region + '.myqcloud.com/' + key
		// 			resolve(key)
		// 		}
		// 	}
		// }, function(err, data) {
		// 	console.log(err || data);
		// });
		// #endif
	},
	base64ToBlob(base64Data) {
		let arr = base64Data.split(','),
			fileType = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			l = bstr.length,
			u8Arr = new Uint8Array(l);
		while (l--) {
			u8Arr[l] = bstr.charCodeAt(l);
		}
		return new Blob([u8Arr], {
			type: fileType
		});
	},
	blobToFile(newBlob, fileName) {
		newBlob.lastModifiedDate = new Date();
		newBlob.name = fileName;
		return newBlob;
	},

}
