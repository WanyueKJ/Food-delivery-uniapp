function camSafeUrlEncode(str) {
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}

function getObjectKeys(obj, forKey) {
    var list = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            list.push(forKey ? camSafeUrlEncode(key).toLowerCase() : key);
        }
    }
    return list.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a === b ? 0 : (a > b ? 1 : -1);
    });
};

var obj2str = function (obj, lowerCaseKey) {
    var i, key, val;
    var list = [];
    var keyList = getObjectKeys(obj);
    for (i = 0; i < keyList.length; i++) {
        key = keyList[i];
        val = (obj[key] === undefined || obj[key] === null) ? '' : ('' + obj[key]);
        key = lowerCaseKey? camSafeUrlEncode(key).toLowerCase() : camSafeUrlEncode(key);
        val = camSafeUrlEncode(val) || '';
        list.push(key + '=' + val)
    }
    return list.join('&');
};

var request = function (params, callback) {
    var filePath = params.filePath;
    var headers = params.headers || {};
    var url = params.url || params.Url;
    var method = params.method;
    var onProgress = params.onProgress;
    var httpDNSServiceId = params.httpDNSServiceId;
    var requestTask;

    var cb = function (err, response) {
        var H = response.header
        var headers = {};
        if (H) for (var key in H) {
            if (H.hasOwnProperty(key)) headers[key.toLowerCase()] = H[key];
        }
        callback(err, {statusCode: response.statusCode, headers: headers}, response.data);
    };

    if (filePath) {
        var fileKey;
        var m = url.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/);
        if (params.pathStyle) {
            fileKey = decodeURIComponent(m[3] || '');
            url = m[1] + m[2];
        } else {
            fileKey = decodeURIComponent(m[2] + m[3] || '');
            url = m[1];
        }

        // 整理 postObject 参数
        var formData = {
            'key': fileKey,
            'success_action_status': 200,
            'Signature': headers.Authorization,
        };
        var headerKeys = [
            'Cache-Control',
            'Content-Type',
            'Content-Disposition',
            'Content-Encoding',
            'Expires',
            'x-cos-storage-class',
            'x-cos-security-token',
            'x-ci-security-token',
        ];
        for (var i in params.headers) {
            if (params.headers.hasOwnProperty(i) && (i.indexOf('x-cos-meta-') > -1 || headerKeys.indexOf(i) > -1)) {
                formData[i] = params.headers[i];
            }
        }
        headers['x-cos-acl'] && (formData.acl = headers['x-cos-acl']);
        !formData['Content-Type'] && (formData['Content-Type'] = '');

        requestTask = wx.uploadFile({
            url: url,
            method: method,
            name: 'file',
            header: headers,
            filePath: filePath,
            formData: formData,
            timeout: params.timeout,
            success: function (response) {
                cb(null, response);
            },
            fail: function (response) {
                cb(response.errMsg, response);
            }
        });
        requestTask.onProgressUpdate(function (res) {
            onProgress && onProgress({
                loaded: res.totalBytesSent,
                total: res.totalBytesExpectedToSend,
                progress: res.progress / 100
            });
        });
    } else {
        var qsStr = params.qs && obj2str(params.qs) || '';
        if (qsStr) {
            url += (url.indexOf('?') > -1 ? '&' : '?') + qsStr;
        }
        headers['Content-Length'] && (delete headers['Content-Length']);
        var requestParams = {
            url: url,
            method: method,
            header: headers,
            dataType: 'text',
            data: params.body,
            timeout: params.timeout,
            success: function (response) {
                cb(null, response);
            },
            fail: function (response) {
                cb(response.errMsg, response);
            }
        };
        if (httpDNSServiceId) {
            Object.assign(requestParams, {
                enableHttpDNS: true,
                httpDNSServiceId: httpDNSServiceId,
            });
        }
        requestTask = wx.request(requestParams);
    }

    return requestTask;
};

module.exports = request;
