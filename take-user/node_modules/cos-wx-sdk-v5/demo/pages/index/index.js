//index.js
var demoSdk = require('../../demo-sdk');
var simpleUpload = require('../../demo-no-sdk');
var postUpload = require('../../demo-post-policy');

var option = {
    data: {
        listMap: {},
        title: {
            toolsDao: '工具函数',
            bucketDao: '存储桶操作',
            objectDao: '对象操作',
            advanceObjectDao: '高级操作',
            ciObjectDao: '数据万象示例',
        },
    },
};

for (var key in demoSdk) {
    if (demoSdk.hasOwnProperty(key)) {
        var sublist = [];
        var subDemoSdk = demoSdk[key];
        for (var subkey in subDemoSdk){
            sublist.push(subkey);
            option[subkey] = subDemoSdk[subkey];
        }
        option.data.listMap[key] = sublist;
    }
}

option.postUpload = postUpload;
option.simpleUpload = simpleUpload;

//获取应用实例
Page(option);
