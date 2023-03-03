var COS = require('./cos-wx-sdk-v5');
var config = require('../config');
var cos = new COS({
    getAuthorization: function (options, callback) {
        wx.request({
            method: 'GET',
            url: config.stsUrl, // 服务端签名，参考 server 目录下的两个签名例子
            dataType: 'json',
            success: function (result) {
                var data = result.data;
                callback({
                    TmpSecretId: data.credentials && data.credentials.tmpSecretId,
                    TmpSecretKey: data.credentials && data.credentials.tmpSecretKey,
                    XCosSecurityToken: data.credentials && data.credentials.sessionToken,
                    ExpiredTime: data.expiredTime,
                });
            }
        });
    },
});

module.exports = cos;