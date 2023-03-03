var util = require('../../lib/util');
var config = require('../../config');
var cos = require('../../lib/cos');

Page({
    onLoad: function () {
    },
    onShareAppMessage: function (res) {
        return {
            title: 'COS 上传示例',
            path: this.route,
        }
    },
    // 前往相册页
    uploadImage() {
        wx.chooseImage({
            count: 1,
            camera: 'back',
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var filePath = res.tempFilePaths[0];
                if (filePath) {
                    var Key = util.getRandFileName(filePath);
                    wx.showLoading({title: '正在上传...'});
                    cos.postObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: Key,
                        FilePath: filePath,
                    }, function (err, data) {
                        wx.hideLoading();
                        if (data && data.Location) {
                            wx.navigateTo({url: '../preview/preview?type=image&url=' + encodeURIComponent('https://' + data.Location)});
                        } else {
                            wx.showToast({title: '上传失败', icon: 'error', duration: 2000});
                        }
                    });
                }
            }
        })
    },
    // 前往相册页
    uploadVideo() {
        wx.chooseVideo({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
                var filePath = res.tempFilePath;
                if (filePath) {
                    var Key = util.getRandFileName(filePath);
                    wx.showLoading({title: '正在上传...'});
                    cos.postObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: Key,
                        FilePath: filePath,
                    }, function (err, data) {
                        wx.hideLoading();
                        if (data && data.Location) {
                            wx.navigateTo({url: '../preview/preview?type=video&url=' + encodeURIComponent('https://' + data.Location)});
                        } else {
                            wx.showToast({title: '上传失败', icon: 'error', duration: 2000});
                        }
                    });
                }
            }
        });
    },
    // 前往相册页
    gotoAlbum() {
        wx.navigateTo({url: '../album/album'});
    },
});
