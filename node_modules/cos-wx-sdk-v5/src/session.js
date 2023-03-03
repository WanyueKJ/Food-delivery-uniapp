var util = require('./util');

// 按照文件特征值，缓存 UploadId
var cacheKey = 'cos_sdk_upload_cache';
var expires = 30 * 24 * 3600;
var cache;
var timer;

var getCache = function () {
    try {
        var val = JSON.parse(wx.getStorageSync(cacheKey));
    } catch (e) {
    }
    if (!val) val = [];
    return val;
};
var setCache = function () {
    try {
        wx.setStorageSync(cacheKey, JSON.stringify(cache))
    } catch (e) {
    }
};

var init = function () {
    if (cache) return;
    cache = getCache();
    // 清理太老旧的数据
    var changed = false;
    var now = Math.round(Date.now() / 1000);
    for (var i = cache.length - 1; i >= 0; i--) {
        var mtime = cache[i][2];
        if (!mtime || mtime + expires < now) {
            cache.splice(i, 1);
            changed = true;
        }
    }
    changed && setCache();
};

// 把缓存存到本地
var save = function () {
    if (timer) return;
    timer = setTimeout(function () {
        setCache();
        timer = null;
    }, 400);
};

var mod = {
    using: {},
    // 标记 UploadId 正在使用
    setUsing: function (uuid) {
        mod.using[uuid] = true;
    },
    // 标记 UploadId 已经没在使用
    removeUsing: function (uuid) {
        delete mod.using[uuid];
    },
    // 用上传参数生成哈希值
    getFileId: function (FileStat, ChunkSize, Bucket, Key) {
        if (FileStat.FilePath && FileStat.size && FileStat.lastModifiedTime && ChunkSize) {
            return util.md5([FileStat.FilePath].join('::')) + '-' + util.md5([FileStat.size, FileStat.mode, FileStat.lastAccessedTime, FileStat.lastModifiedTime, ChunkSize, Bucket, Key].join('::'));
        } else {
            return null;
        }
    },
    // 获取文件对应的 UploadId 列表
    getUploadIdList: function (uuid) {
        if (!uuid) return null;
        init();
        var list = [];
        for (var i = 0; i < cache.length; i++) {
            if (cache[i][0] === uuid)
                list.push(cache[i][1]);
        }
        return list.length ? list : null;
    },
    // 缓存 UploadId
    saveUploadId: function (uuid, UploadId, limit) {
        init();
        if (!uuid) return;
        // 清理没用的 UploadId
        var part1 = uuid.substr(0, uuid.indexOf('-') + 1);
        for (var i = cache.length - 1; i >= 0; i--) {
            var item = cache[i];
            if (item[0] === uuid && item[1] === UploadId) {
                cache.splice(i, 1);
            } else if (uuid !== item[0] && item[0].indexOf(part1) === 0) { // 文件路径相同，但其他信息不同，说明文件改变了或上传参数（存储桶、路径、分片大小）变了，直接清理掉
                cache.splice(i, 1);
            }
        }
        cache.unshift([uuid, UploadId, Math.round(Date.now() / 1000)]);
        if (cache.length > limit) cache.splice(limit);
        save();
    },
    // UploadId 已用完，移除掉
    removeUploadId: function (UploadId) {
        init();
        delete mod.using[UploadId];
        for (var i = cache.length - 1; i >= 0; i--) {
            if (cache[i][1] === UploadId) cache.splice(i, 1)
        }
        save();
    },
};

module.exports = mod;
