Page({
    data: {
        type: 'image',
        url: '',
        showPreview: false,
    },
    onShareAppMessage: function (res) {
        var typeMap = {
            image: '图片',
            video: '视频',
        };
        var data = {
            title: 'COS 上传示例 - 预览' + (typeMap[this.data.type] || '文件'),
            path: this.route + '?type=' + this.data.type + '&url=' + encodeURIComponent(this.data.url),
        };
        if (this.data.type === 'image') {
            data.imageUrl = this.data.url;
        }
        return data;
    },
    onShow() {
        this.setData({showPreview: false});
        this.setData({
            type: this.options.type || 'image',
            url: decodeURIComponent(this.options.url) || '',
        });
    },
    showPreviewBox() {
        this.setData({showPreview: true});
    },
    copyLink() {
        wx.setClipboardData({
            data: this.data.url || '',
            success: function () {
                wx.showToast({title: '复制成功', icon: 'success', duration: 2000});
            },
            fail: function () {
                wx.showToast({title: '复制失败', icon: 'error', duration: 2000});
            },
        });
    },
    saveImage() {
        wx.downloadFile({
            url: this.data.url,
            success: function(res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                if (res.statusCode === 200) {
                    wx.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                    });
                }
            }
        });
    },
});