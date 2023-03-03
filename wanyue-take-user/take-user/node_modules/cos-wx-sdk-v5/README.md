## 快速入门

微信小程序 SDK for [腾讯云对象存储服务](https://cloud.tencent.com/product/cos)

### 一、前期准备

1. 到 (COS对象存储控制台)[https://console.cloud.tencent.com/cos4] 创建存储桶，得到 Bucket（存储桶名称） 和 Region（地域名称）
2. 到 (控制台密钥管理)[https://console.cloud.tencent.com/capi] 获取您的项目 SecretId 和 SecretKey

### 二、计算签名

由于签名计算放在前端会暴露 SecretId 和 SecretKey，我们把签名计算过程放在后端实现，前段通过 ajax 向后端获取签名结果，正式部署时请再后端加一层自己网站本身的权限检验。

这里提供 [PHP 和 NodeJS 的签名例子](https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/)，其他语言，请参照对应的 [XML SDK](https://cloud.tencent.com/document/product/436/6474)

### 三、上传例子

1. 把 demo/lib/cos-wx-sdk-v5.js 复制到自己小程序项目代码里，在需要上传文件的地方贴以下代码

```javascript

// 存储桶名称，由bucketname-appid 组成，appid必须填入，可以在COS控制台查看存储桶名称。 https://console.cloud.tencent.com/cos5/bucket
var Bucket = 'test-1250000000';
// 存储桶Region可以在COS控制台指定存储桶的概览页查看 https://console.cloud.tencent.com/cos5/bucket/ 
// 关于地域的详情见 https://cloud.tencent.com/document/product/436/6224
var Region = 'ap-guangzhou';

// 初始化实例
var cos = new COS({
    getAuthorization: function (options, callback) {
        // 异步获取签名
        wx.request({
            url: 'https://example.com/sts.php', // 步骤二提供的签名接口
            data: {
                Method: options.Method,
                Key: options.Key
            },
            dataType: 'text',
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
    }
});

// 选择文件
wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original'], // 可以指定是原图还是压缩图，默认用原图
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        var filePath = res.tempFiles[0].path;
        var filename = filePath.substr(filePath.lastIndexOf('/') + 1);
        cos.postObject({
            Bucket: Bucket,
            Region: Region,
            Key: filename,
            FilePath: filePath,
            onProgress: function (info) {
                console.log(JSON.stringify(info));
            }
        }, function (err, data) {
            console.log(err || data);
        });
    }
});
```

## 说明文档 

[使用例子](demo/demo-sdk.js)

[快速入门](https://cloud.tencent.com/document/product/436/31953)

[接口文档](https://cloud.tencent.com/document/product/436/31953)
