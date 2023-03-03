const { listToMatrix } = require('../../lib/util.js');
var COS = require('../../lib/cos-wx-sdk-v5.js');
const config = require('../../config.js');
const util = require('../../lib/util.js');


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

Page({
    data: {
        // 相册列表数据
        albumList: [],

        // 图片布局列表（二维数组，由`albumList`计算而得）
        layoutList: [],

        // 布局列数
        layoutColumnSize: 3,

        // 是否显示loading
        showLoading: false,

        // loading提示语
        loadingMessage: '',

        // 是否显示toast
        showToast: false,

        // 提示消息
        toastMessage: '',

        // 是否显示动作命令
        showActionsSheet: false,

        // 当前操作的图片
        imageInAction: '',

        // 图片预览模式
        previewMode: false,

        // 当前预览索引
        previewIndex: 0,

        // 切换动画的时间
        slideDuration: 400,
    },
    onShareAppMessage: function (res) {
        return {
            title: 'COS 上传示例 - 共享相册',
            path: this.route,
        }
    },

    // 显示loading提示
    showLoading(loadingMessage) {
        this.setData({ showLoading: true, loadingMessage });
    },

    // 隐藏loading提示
    hideLoading() {
        this.setData({ showLoading: false, loadingMessage: '' });
    },

    // 显示toast消息
    showToast(toastMessage) {
        this.setData({ showToast: true, toastMessage });
    },

    // 隐藏toast消息
    hideToast() {
        this.setData({ showToast: false, toastMessage: '' });
    },

    // 隐藏动作列表
    hideActionSheet() {
        this.setData({ showActionsSheet: false, imageInAction: '' });
    },

    onLoad() {
        var self = this;
        this.renderAlbumList();
        this.getAlbumList(function (list) {
            list = self.data.albumList.concat(list || {});
            if (!list.length) {
                list = [];
            }
            list = list.reverse();
            self.setData({ 'albumList': list });
            self.renderAlbumList();
        });
    },

    // 获取相册列表
    getAlbumList(callback) {
        this.showLoading('加载列表中…');
        setTimeout(() => this.hideLoading(), 1000);
        cos.getBucket({
            Bucket: config.Bucket,
            Region: config.Region,
            Prefix: config.albumDir
        }, function (err, data) {
            if (data) {
                var list = (data && data.Contents || [])
                    .map((v) => 'https://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + util.camSafeUrlEncode(v.Key).replace(/%2F/g, '/'))
                    .filter((v) => /\.(jpg|png|gif)$/.test(v));
                callback(list);
            } else {
                callback([]);
            }
        });
    },

    // 渲染相册列表
    renderAlbumList() {
        let layoutColumnSize = this.data.layoutColumnSize;
        let layoutList = [];
        var imageList = [].concat(this.data.albumList);
        imageList.unshift({type:'add'});
        layoutList = listToMatrix(imageList, layoutColumnSize);
        this.setData({ layoutList });
    },

    // 从相册选择照片或拍摄照片
    chooseImage() {
        var self = this;
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                this.showLoading('正在上传图片…');
                res.tempFilePaths.forEach(function (filePath) {
                    var Key = config.albumDir + util.getRandFileName(filePath);
                    filePath && cos.postObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: Key,
                        FilePath: filePath
                    }, function (err, data) {
                        if (data) {
                            let albumList = self.data.albumList;
                            albumList.unshift('https://' + data.Location);
                            self.setData({ albumList });
                            self.renderAlbumList();
                        }
                        self.hideLoading();
                    });
                });
            },
        });
    },

    // 进入预览模式
    enterPreviewMode(event) {
        var self = this;
        if (this.data.showActionsSheet) {
            return;
        }
        let imageUrl = event.target.dataset.src;
        let previewIndex = this.data.albumList.indexOf(imageUrl);

        this.setData({ slideDuration: 0 });
        setTimeout(function () {
            self.setData({ previewMode: true, previewIndex: previewIndex});
            setTimeout(function () {
                self.setData({ slideDuration: 400 });
            }, 400);
        });
    },

    // 退出预览模式
    leavePreviewMode() {
        this.setData({ previewMode: false, previewIndex: 0 });
    },

    // 显示可操作命令
    showActions(event) {
        this.setData({ showActionsSheet: true, imageInAction: event.target.dataset.src });
    },

    // 下载图片
    downloadImage() {
        this.showLoading('正在保存图片…');
        console.log('download_image_url', this.data.imageInAction);

        wx.downloadFile({
            url: this.data.imageInAction,
            type: 'image',
            success: (resp) => {
                wx.saveFile({
                    tempFilePath: resp.tempFilePath,
                    success: (resp) => {
                        this.showToast('图片保存成功');
                    },
                    fail: (resp) => {
                        console.log('fail', resp);
                    },
                    complete: (resp) => {
                        console.log('complete', resp);
                        this.hideLoading();
                    },
                });
            },

            fail: (resp) => {
                console.log('fail', resp);
            },
        });

        this.setData({ showActionsSheet: false, imageInAction: '' });
    },

    // 删除图片
    deleteImage() {
        let imageUrl = this.data.imageInAction;
        var m = imageUrl.match(/^https:\/\/[^\/]+\/([^#?]+)/);
        var Key = m && m[1] || '';
        if (Key) {
            this.showLoading('正在删除图片…');
            this.setData({ showActionsSheet: false, imageInAction: '' });
            cos.deleteObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
            }, (err, data)=>{
                if (data) {
                    let index = this.data.albumList.indexOf(imageUrl);
                    if (~index) {
                        let albumList = this.data.albumList;
                        albumList.splice(index, 1);
                        this.setData({ albumList });
                        this.renderAlbumList();
                    }
                    this.showToast('图片删除成功');
                } else {
                    this.showToast('图片删除失败');
                }
                this.hideLoading();
            });
        }
    },
});
