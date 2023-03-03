var COS = require('./lib/cos-wx-sdk-v5');
var wxfs = wx.getFileSystemManager();
var config = require('./config');
// 这里替换成自己的Uin （账号ID查询：https://console.cloud.tencent.com/developer）
config.Uin = '10001';

/**
 * 测试须知
 * 需要本地准备一个名为 5m.zip,大小为5mb的文件进行初始化上传
**/

var util = {
    createFile: function (options, filePath) {
        var buffer = new ArrayBuffer(options.size || 0);
        var arr = new Uint8Array(buffer);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
        var opt = {};
        options.type && (opt.type = options.type);
        if (filePath) {
            try {
                wxfs.statSync(filePath);
            } catch (e) {
                try {
                    wxfs.writeFileSync(filePath, buffer);
                } catch (e) {
                }
            }
        }
        return buffer;
    },
    str2buf: function (str) {
        var size = str.length;
        var buffer = new ArrayBuffer(size || 0);
        var arr = new Uint8Array(buffer);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = str[i];
        }
        return buffer;
    },
};

// var clearDir = function () {
//     var list = wxfs.readdirSync(wx.env.USER_DATA_PATH);
//     list.forEach(function (filename) {
//         try {
//             wxfs.unlinkSync(wx.env.USER_DATA_PATH + '/' + filename);
//         } catch (e) {}
//     });
// };
// clearDir();

function camSafeUrlEncode(str) {
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}

var getAuthorization = function (options, callback) {
    wx.request({
        method: 'GET',
        url: config.stsUrl, // 服务端签名，参考 server 目录下的两个签名例子
        dataType: 'json',
        success: function(result) {
            var data = result.data;
            var credentials = data && data.credentials;
            if (!data || !credentials) return console.error('credentials invalid');
            callback({
                TmpSecretId: credentials.tmpSecretId,
                TmpSecretKey: credentials.tmpSecretKey,
                XCosSecurityToken: credentials.sessionToken,
                StartTime: data.startTime, // 时间戳，单位秒，如：1580000000，建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
            });
        }
    });
};
var dataURItoUploadBody = function (dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return ab;
};

var serial = function (list, fn, cb) {
    var next = function (i) {
        if (i >= list.length) return cb && cb();
        var loaded = false;
        fn(list[i], i, function () {
            if (loaded) {
                throw new Error('done() 被重复调用');
                return;
            }
            loaded = true;
            next(i + 1);
        });
    };
    next(0);
};

var test;
var testFile = {};
var group = (function (name, fn) {
    // 按顺序执行每个 group
    var groupQueue = [];
    var successCount = 0;
    var errorCount = 0;
    var errorList = [];
    var startTest = function () {
        serial(groupQueue, function (groupItem, groupIndex, nextGroup) {
            // 按顺序执行每个 group
            var testQueue = [];
            test = function (name, fn) {
                testQueue.push([name, fn]);
            };
            console.log((groupIndex + 1) + ' ' + groupItem[0])
            groupItem[1]();
            setTimeout(function () {
                serial(testQueue, function (testItem, testIndex, nextTest) {
                    var assert = {
                        ok: function (result, msg) {
                            result ? successCount++ : errorCount++;
                            var message = ['  ' + (groupIndex + 1) + '.' + (testIndex + 1), result ? '[success]' : '[error]', msg || ''];
                            console[result ? 'info' : 'error'](message.join(' '));
                        },
                        equal: function (a, b, msg) {
                            assert.ok(a === b, msg);
                        },
                    };
                    testItem[1](nextTest, assert);
                }, nextGroup);
            });
        }, function () {
            console.log('test complete! total ' + (successCount + errorCount) + ' cases, ' + errorCount + ' error.');
            if (errorList.length) {
                errorList.forEach(function (item) {
                    console.error(item);
                })
            }
        });
    };
    wx.chooseMessageFile({
        count: 10,
        type: 'all',
        success: function(res) {
            res.tempFiles && res.tempFiles.forEach(v => {
                testFile[v.name] = v.path;
            });
            startTest();
        },
    });
    return function (name, fn) {
        groupQueue.push([name, fn]);
    }
})();

var request = function (opt, callback) {
    wx.request({
        method: opt.method,
        url: opt.url,
        header: opt.headers,
        dataType: 'text',
        data: opt.body,
        timeout: opt.timeout,
        success: function (response) {
            callback(null, response, response.data);
        },
        fail: function (response) {
            callback(response.errMsg, response, response.body);
        },
    });
};

var cos = new COS({
    // 必选参数
    getAuthorization: getAuthorization,
    // 可选参数
    FileParallelLimit: 3,    // 控制文件上传并发数
    ChunkParallelLimit: 3,   // 控制单个文件下分片上传并发数
    ChunkSize: 1024 * 1024,  // 控制分片大小，单位 B
    ProgressInterval: 1,  // 控制 onProgress 回调的间隔
    ChunkRetryTimes: 3,   // 控制文件切片后单片上传失败后重试次数
    UploadCheckContentMd5: true,   // 上传过程计算 Content-MD5
});

var AppId = config.AppId;
var Bucket = config.Bucket;
var BucketShortName = Bucket;
var BucketLongName = Bucket + '-' + AppId;
var TaskId;

var match = config.Bucket.match(/^(.+)-(\d+)$/);
if (match) {
    BucketLongName = config.Bucket;
    BucketShortName = match[1];
    AppId = match[2];
}

function comparePlainObject(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (var key in a) {
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            if (!comparePlainObject(a[key], b[key])) {
                return false;
            }
        } else if (a[key] != b[key]) {
            return false;
        }
    }
    return true;
}

function prepareBigObject(needHeaders, callback) {
    var filename = 'bigger.zip';
    var content = util.createFile({size: 1024 * 1024 * 10});
    // 调用方法
    var params = {
        Bucket: config.Bucket,
        Region: config.Region,
        Key: filename,
        Body: content,
        ContentLength: content.length,
    };
    if (needHeaders) {
        params.ContentType = 'text/html';
        params.CacheControl = 'max-age=7200';
        params.ContentDisposition = 'inline;filename=hello.jpg';
        params.ContentEncoding = 'gzip';
        params.Expires = (new Date()).toGMTString();
        params.Headers = {
            'x-cos-meta-test': 'xxx'
        };
    }
    cos.putObject(params, function (err) {
        if (err) return console.error('prepareBigObject err', err);
        callback();
    });
}

function prepareBucket() {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

group('getAuth()', function () {
    test('getAuth()', function (done, assert) {
        var content = Date.now().toString();
        var key = '1.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Body: content,
        }, function (err, data) {
            cos.options.getAuthorization({
                Method: 'get',
                Key: key,
                Scope: [{
                    action: 'GetObject',
                    bucket: config.Bucket,
                    region: config.Region,
                    prefix: key,
                }],
            }, function (AuthData) {
                if (typeof AuthData === 'string') {
                    AuthData = {Authorization: AuthData};
                }
                if (!AuthData.Authorization) {
                    AuthData.Authorization = COS.getAuthorization({
                        SecretId: AuthData.TmpSecretId,
                        SecretKey: AuthData.TmpSecretKey,
                        Method: 'get',
                        Key: key,
                        SystemClockOffset: cos.options.SystemClockOffset,
                    });
                }
                var link = 'http://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com' + '/' +
                    camSafeUrlEncode(key).replace(/%2F/g, '/') + '?' + AuthData.Authorization +
                    (AuthData.XCosSecurityToken ? '&x-cos-security-token=' + AuthData.XCosSecurityToken : '');
                request({
                    url: link,
                }, function (err, response, body) {
                    assert.ok(response.statusCode === 200);
                    assert.ok(body === content);
                    done();
                });
            });
        });
    });
});

group('getObjectUrl()', function () {
    test('getObjectUrl()', function (done, assert) {
        var content = Date.now().toString();
        var key = '1.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Body: content,
        }, function (err, data) {
            cos.getObjectUrl({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: key,
            }, function (err, data) {
                request({
                    url: data.Url,
                }, function (err, response, body) {
                    assert.ok(!err, '文件获取出错');
                    assert.ok(response.statusCode === 200, '获取文件 200');
                    assert.ok(body.toString() === content, '通过获取签名能正常获取文件');
                    done();
                });
            });
        });
    });
});

group('auth check', function () {
    test('auth check', function (done, assert) {
        cos.getBucket({
            Bucket: config.Bucket,
            Region: config.Region,
            Prefix: 'aksjhdlash sajlhj!@#$%^&*()_+=-[]{}\';:"/.<>?.,??sadasd#/.,/~`',
            Headers: {
                'x-cos-test': 'aksjhdlash sajlhj!@#$%^&*()_+=-[]{}\';:\"/.<>?.,??sadasd#/.,/~`',
            },
        }, function (err, data) {
            assert.ok(!err);
            done();
        });
    });
});

group('getBucket()', function () {
    test('正常获取 bucket 里的文件列表', function (done, assert) {
        prepareBucket().then(function () {
            cos.getBucket({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                assert.equal(true, data.Name === BucketLongName);
                assert.equal(data.Contents.constructor, Array);
                done();
            });
        }).catch(function () {
            assert.equal(false);
            done();
        });
    });
});

group('putObject(),cancelTask()', function () {
    test('putObject(),cancelTask()', function (done, assert) {
        var filename = '10m.zip';
        var alive = false;
        var canceled = false;
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Body: util.createFile({size: 1024 * 1024 * 10}),
            onTaskReady: function (taskId) {
                TaskId = taskId;
            },
            onProgress: function (info) {
                alive = true;
                if (!canceled) {
                    setTimeout(function () {
                        cos.cancelTask(TaskId);
                        alive = false;
                        canceled = true;
                        setTimeout(function () {
                            assert.ok(!alive, '取消上传已经生效');
                            done();
                        }, 1200);
                    }, 1200);
                }
            }
        }, function (err, data) {
            alive = true;
        });
    });
});

group('sliceUploadFile() 完整上传文件', function () {
    test('sliceUploadFile() 完整上传文件', function (done, assert) {
        var lastPercent;
        var filename = '5m.zip';
        var fileSize = 1024 * 1024 * 5;
        cos.abortUploadTask({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Level: 'file',
        }, function () {
            cos.sliceUploadFile({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
                FilePath: testFile[filename],
                onTaskReady: function (taskId) {
                    TaskId = taskId;
                },
                onProgress: function (info) {
                    lastPercent = info.percent;
                }
            }, function (err, data) {
                assert.ok(data.ETag.length > 0);
                cos.headObject({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: filename,
                }, function (err, data) {
                    assert.ok(data && data.headers && data.headers.etag && data.headers.etag.length > 0, '文件已上传成功');
                    assert.ok(data && data.headers && parseInt(data.headers['content-length'] || 0) === fileSize, '文件大小一致');
                    done();
                });
            });
        });
    });
});

group('sliceUploadFile(),pauseTask(),restartTask()', function () {
    test('sliceUploadFile(),pauseTask(),restartTask()', function (done, assert) {
        var filename = '5m.zip';
        var paused = false;
        var restarted = false;
        cos.abortUploadTask({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Level: 'file',
        }, function (err, data) {
            cos.sliceUploadFile({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
                FilePath: testFile[filename],
                onTaskReady: function (taskId) {
                    TaskId = taskId;
                },
                onProgress: function (info) {
                    if (!paused && info.percent > 0.6) {
                        cos.pauseTask(TaskId);
                        paused = true;
                        setTimeout(function () {
                            restarted = true;
                            cos.restartTask(TaskId);
                        }, 1000);
                    }
                    if (paused && restarted) {
                        if (info.percent === 0) return;
                        if (!info.percent > 0.3) {
                            console.log(info.percent);
                        }
                        assert.ok(info.percent > 0.3, '暂停和重试成功');
                        cos.cancelTask(TaskId);
                        done();
                    }
                }
            }, function (err, data) {
                paused = true;
            });
        });
    });
});

group('sliceUploadFile(),cancelTask()', function () {
    test('sliceUploadFile(),cancelTask()', function (done, assert) {
        var filename = '5m.zip';
        var blob = util.createFile({size: 1024 * 1024 * 5});
        var alive = false;
        var canceled = false;
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            FilePath: testFile[filename],
            onTaskReady: function (taskId) {
                TaskId = taskId;
            },
            onProgress: function (info) {
                alive = true;
                if (!canceled) {
                    cos.cancelTask(TaskId);
                    alive = false;
                    canceled = true;
                    setTimeout(function () {
                        assert.ok(!alive, '取消上传已经生效');
                        done();
                    }, 1200);
                }
            }
        }, function (err, data) {
            alive = true;
        });
    });
});

group('abortUploadTask()', function () {
    test('abortUploadTask(),Level=task', function (done, assert) {
        var filename = '1m.zip';
        cos.multipartInit({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
        }, function (err, data) {
            cos.abortUploadTask({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
                Level: 'task',
                UploadId: data.UploadId,
            }, function (err, data) {
                var nameExist = false;
                data.successList.forEach(function (item) {
                    if (filename === item.Key) {
                        nameExist = true;
                    }
                });
                assert.ok(data.successList.length >= 1, '成功取消单个分片任务');
                assert.ok(nameExist, '成功取消单个分片任务');
                done();
            });
        });
    });
    test('abortUploadTask(),Level=file', function (done, assert) {
        var filename = '1m.zip';
        cos.multipartInit({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
        }, function (err, data) {
            cos.abortUploadTask({
                Bucket: config.Bucket,
                Region: config.Region,
                Level: 'file',
                Key: filename,
            }, function (err, data) {
                assert.ok(data.successList.length >= 1, '成功舍弃单个文件下的所有分片任务');
                assert.ok(data.successList[0] && data.successList[0].Key === filename, '成功舍弃单个文件的所有分片任务');
                done();
            });
        });
    });

    test('abortUploadTask(),Level=bucket', function (done, assert) {
        var filename = '1m.zip';
        cos.multipartInit({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
        }, function (err, data) {
            cos.abortUploadTask({
                Bucket: config.Bucket,
                Region: config.Region,
                Level: 'bucket',
            }, function (err, data) {
                var nameExist = false;
                data.successList.forEach(function (item) {
                    if (filename === item.Key) {
                        nameExist = true;
                    }
                });
                assert.ok(data.successList.length >= 1, '成功舍弃Bucket下所有分片任务');
                assert.ok(nameExist, '成功舍弃Bucket下所有分片任务');
                done();
            });
        });
    });
});

group('headBucket()', function () {
    test('headBucket()', function (done, assert) {
        cos.headBucket({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.ok(data, '正常获取 head bucket');
            done();
        });
    });

    test('headBucket() not exist', function (done, assert) {
        cos.headBucket({
            Bucket: config.Bucket + Date.now().toString(36),
            Region: config.Region
        }, function (err, data) {
            assert.ok(err, 'bucket 不存在');
            done();
        });
    });

    test('deleteBucket()', function (done, assert) {
        cos.deleteBucket({
            Bucket: config.Bucket + Date.now().toString(36),
            Region: config.Region
        }, function (err, data) {
            assert.ok(err, '正常获取 head bucket');
            done();
        });
    });

    test('getBucket()', function (done, assert) {
        cos.getBucket({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.equal(true, data.Name === BucketLongName, '能列出 bucket');
            assert.equal(data.Contents.constructor, Array, '正常获取 bucket 里的文件列表');
            done();
        });
    });
});

group('putObject()', function () {
    test('putObject()', function (done, assert) {
        var filename = '1.txt';
        var getObjectETag = function (callback) {
            setTimeout(function () {
                cos.headObject({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: filename,
                }, function (err, data) {
                    callback(data && data.headers && data.headers.etag);
                });
            }, 2000);
        };
        var content = Date.now().toString();
        var lastPercent = 0;
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Body: util.str2buf(content),
            onProgress: function (info) {
                lastPercent = info.percent;
            },
        }, function (err, data) {
            if (err) throw err;
            assert.ok(data && data.ETag, 'putObject 有返回 ETag');
            getObjectETag(function (ETag) {
                assert.ok(data.ETag === ETag, 'ArrayBuffer 创建 object');
                done();
            });
        });
    });

    test('putObject(),string', function (done, assert) {
        var filename = '1.txt';
        var content = '中文_' + Date.now().toString(36);
        var content = '中文';
        var lastPercent = 0;
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Body: content,
            onProgress: function (info) {
                lastPercent = info.percent;
            },
        }, function (err, data) {
            if (err) throw err;
            var ETag = data && data.ETag;
            assert.ok(ETag, 'putObject 有返回 ETag');
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
            }, function (err, data) {
                assert.ok(data.Body && data.Body === content && (data.headers && data.headers.etag) === ETag);
                done();
            });
        });
    });
    test('putObject(),string,empty', function (done, assert) {
        var content = '';
        var lastPercent = 0;
        var Key = '1.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: content,
            onProgress: function (info) {
                lastPercent = info.percent;
            },
        }, function (err, data) {
            if (err) throw err;
            var ETag = data && data.ETag;
            assert.ok(ETag, 'putObject 有返回 ETag');
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
            }, function (err, data) {
                assert.ok(data.Body === content && (data.headers && data.headers.etag) === ETag);
                done();
            });
        });
    });
    test('putObject(),特殊二进制字符 ArrayBuffer md5', function (done, assert) {
        var lastPercent = 0;
        var Key = '1.mp4';
        var buf = new ArrayBuffer(8);
        var arr = new Uint8Array(buf);
        [0xe8,0xaf,0xb4,0x2e,0x70,0x72,0x70,0x72].forEach((v, i) => arr[i] = v);
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: buf,
            onProgress: function (info) {
                lastPercent = info.percent;
            },
        }, function (err, data) {
            if (err) throw err;
            var ETag = data && data.ETag;
            assert.ok(ETag, 'putObject 有返回 ETag');
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
            }, function (err, data) {
                var isSame = unescape(encodeURIComponent(data.Body)).split(0).every((v, i) => v.charCodeAt(0) === arr[i]);
                assert.ok(isSame && (data.headers && data.headers.etag) === ETag);
                done();
            });
        });
    });
    test('putObject(),特殊二进制字符 中文 string md5', function (done, assert) {
        var Key = '1.txt';
        var content = '中文';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: content,
        }, function (err, data) {
            if (err) throw err;
            var ETag = data && data.ETag;
            assert.ok(ETag, 'putObject 有返回 ETag');
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
            }, function (err, data) {
                var isSame = content === data.Body;
                assert.ok(isSame && (data.headers && data.headers.etag) === ETag);
                done();
            });
        });
    });
    test('putObject(),特殊二进制字符 unescape string md5', function (done, assert) {
        var Key = '1.txt';
        var content = unescape(encodeURIComponent('中文'));
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: content,
        }, function (err, data) {
            if (err) throw err;
            var ETag = data && data.ETag;
            assert.ok(ETag, 'putObject 有返回 ETag');
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
            }, function (err, data) {
                var isSame = content === data.Body;
                assert.ok(isSame && (data.headers && data.headers.etag) === ETag);
                done();
            });
        });
    });
});

group('getObject()', function () {
    test('getObject() body', function (done, assert) {
        var key = '1.txt';
        var content = Date.now().toString();
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Body: content,
        }, function (err, data) {
            cos.getObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: key
            }, function (err, data) {
                if (err) throw err;
                var objectContent = data.Body.toString();
                assert.ok(data.headers['content-length'] === '' + content.length);
                assert.ok(objectContent === content);
                done();
            });
        });
    });
});

group('Key 特殊字符', function () {
    test('Key 特殊字符', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '(!\'*) "#$%&+,-./0123456789:;<=>@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
            Body: Date.now().toString()
        }, function (err, data) {
            if (err) throw err;
            assert.ok(data, 'putObject 特殊字符的 Key 能通过');
            done();
        });
    });
});

group('putObjectCopy() 1', function () {
    test('putObjectCopy() 1', function (done, assert) {
        var content = Date.now().toString(36);
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.txt',
            Body: content,
        }, function (err, data) {
            var ETag = data.ETag;
            cos.deleteObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.copy.txt',
            }, function (err, data) {
                cos.putObjectCopy({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: '1.copy.txt',
                    CopySource: BucketLongName + '.cos.' + config.Region + '.myqcloud.com/1.txt',
                }, function (err, data) {
                    cos.headObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: '1.copy.txt',
                    }, function (err, data) {
                        assert.ok(data.headers && data.headers.etag === ETag, '成功复制文件');
                        done();
                    });
                });
            });
        });
    });
});

group('putObjectCopy()', function () {
    var filename = '1.txt';
    test('正常复制 object', function (done, assert) {
        cos.putObjectCopy({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.copy.txt',
            CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + filename,
        }, function (err, data) {
            assert.ok(!err);
            assert.ok(data.ETag.length > 0);
            done();
        });
    });
    test('捕获 object 异常', function (done, assert) {
        var errFileName = '12345.txt';
        cos.putObjectCopy({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.copy.txt',
            CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + errFileName,
        }, function (err, data) {
            assert.equal(true, err.statusCode === 404);
            assert.equal(true, err.error.Code === 'NoSuchKey')
            done();
        });
    });
});

group('sliceCopyFile()', function () {
    var filename = 'bigger.zip';
    var Key = 'bigger.copy.zip';
    test('正常分片复制 object', function (done, assert) {
        prepareBigObject(true, function () {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
            }, function (err, data1) {
                if (err) throw err;
                cos.sliceCopyFile({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: Key,
                    CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/'+ filename,
                    SliceSize: 5 * 1024 * 1024,
                },function (err, data) {
                    if (err) throw err;
                    assert.ok(data.ETag.length > 0);
                    cos.headObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: Key,
                    }, function (err, data2) {
                        if (err) throw err;
                        delete data1.VersionId;
                        delete data2.VersionId;
                        delete data1.headers['x-cos-request-id'];
                        delete data2.headers['x-cos-request-id'];
                        delete data1.headers['x-cos-version-id'];
                        delete data2.headers['x-cos-version-id'];
                        delete data1.headers['last-modified'];
                        delete data2.headers['last-modified'];
                        delete data1.headers['date'];
                        delete data2.headers['date'];
                        delete data1.headers['etag'];
                        delete data2.headers['etag'];
                        delete data1.ETag;
                        delete data2.ETag;
                        assert.ok(comparePlainObject(data1, data2));
                        done();
                    });
                });
            });
        });
    });
    test('单片复制 object', function (done, assert) {
        setTimeout(function () {
            prepareBigObject(true, function () {
                cos.headObject({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: filename,
                }, function (err, data1) {
                    if (err) throw err;
                    cos.sliceCopyFile({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: Key,
                        CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + filename,
                        SliceSize: 10 * 1024 * 1024,
                    }, function (err, data) {
                        if (err) throw err;
                        assert.ok(data.ETag.length > 0);
                        setTimeout(function () {
                            cos.headObject({
                                Bucket: config.Bucket,
                                Region: config.Region,
                                Key: Key,
                            }, function (err, data2) {
                                if (err) throw err;
                                delete data1.VersionId;
                                delete data2.VersionId;
                                delete data1.headers['x-cos-request-id'];
                                delete data2.headers['x-cos-request-id'];
                                delete data1.headers['x-cos-version-id'];
                                delete data2.headers['x-cos-version-id'];
                                delete data1.headers['last-modified'];
                                delete data2.headers['last-modified'];
                                delete data1.headers['date'];
                                delete data2.headers['date'];
                                assert.ok(comparePlainObject(data1, data2));
                                done();
                            });
                        }, 2000);
                    });
                });
            });
        }, 2000);
    });
});

group('deleteMultipleObject', function () {
    test('deleteMultipleObject()', function (done, assert) {
        var content = Date.now().toString(36);
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.txt',
            Body: content,
        }, function (err, data) {
            cos.putObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '2.txt',
                Body: content,
            }, function (err, data) {
                cos.deleteMultipleObject({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Objects: [
                        {Key: '1.txt'},
                        {Key: '2.txt'},
                    ],
                }, function (err, data) {
                    assert.ok(data.Deleted.length === 2);
                    cos.headObject({
                        Bucket: config.Bucket,
                        Region: config.Region,
                        Key: '1.txt',
                    }, function (err, data) {
                        assert.ok(err.statusCode === 404, '1.txt 删除成功');
                        cos.headObject({
                            Bucket: config.Bucket,
                            Region: config.Region,
                            Key: '2.txt',
                        }, function (err, data) {
                            assert.ok(err.statusCode === 404, '2.txt 删除成功');
                            done();
                        });
                    });
                });
            });
        });
    });
});

group('BucketAcl', function () {
    var AccessControlPolicy = {
        "Owner": {
            "ID": 'qcs::cam::uin/10001:uin/10001' // 10001 是 QQ 号
        },
        "Grants": [{
            "Grantee": {
                "ID": "qcs::cam::uin/10002:uin/10002", // 10002 是 QQ 号
            },
            "Permission": "READ"
        }]
    };
    var AccessControlPolicy2 = {
        "Owner": {
            "ID": 'qcs::cam::uin/10001:uin/10001' // 10001 是 QQ 号
        },
        "Grant": {
            "Grantee": {
                "ID": "qcs::cam::uin/10002:uin/10002", // 10002 是 QQ 号
            },
            "Permission": "READ"
        }
    };
    test('putBucketAcl() header ACL:private', function (done, assert) {
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            ACL: 'private'
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                AccessControlPolicy.Owner.ID = data.Owner.ID;
                AccessControlPolicy2.Owner.ID = data.Owner.ID;
                assert.ok(data.ACL === 'private' || data.ACL === 'default');
                done();
            });
        });
    });
    test('putBucketAcl() header ACL:public-read', function (done, assert) {
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            ACL: 'public-read',
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.ACL === 'public-read');
                done();
            });
        });
    });
    test('putBucketAcl() header ACL:public-read-write', function (done, assert) {
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            ACL: 'public-read-write',
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.ACL === 'public-read-write');
                done();
            });
        });
    });
    test('putBucketAcl() header GrantRead:1001,1002', function (done, assert) {
        var GrantRead = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantRead: GrantRead,
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.GrantRead = GrantRead);
                done();
            });
        });
    });
    test('putBucketAcl() header GrantWrite:1001,1002', function (done, assert) {
        var GrantWrite = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantWrite: GrantWrite,
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.GrantWrite = GrantWrite);
                done();
            });
        });
    });
    test('putBucketAcl() header GrantFullControl:1001,1002', function (done, assert) {
        var GrantFullControl = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantFullControl: GrantFullControl,
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.GrantFullControl = GrantFullControl);
                done();
            });
        });
    });
    test('putBucketAcl() header ACL:public-read, GrantFullControl:1001,1002', function (done, assert) {
        var GrantFullControl = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantFullControl: GrantFullControl,
            ACL: 'public-read',
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.GrantFullControl = GrantFullControl);
                assert.ok(data.ACL === 'public-read');
                done();
            });
        });
    });
    test('putBucketAcl() xml', function (done, assert) {
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            AccessControlPolicy: AccessControlPolicy
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.Grants.length === 1);
                assert.ok(data.Grants[0] && data.Grants[0].Grantee.ID === 'qcs::cam::uin/10002:uin/10002', '设置 AccessControlPolicy ID 正确');
                assert.ok(data.Grants[0] && data.Grants[0].Permission === 'READ', '设置 AccessControlPolicy Permission 正确');
                done();
            });
        });
    });
    test('putBucketAcl() xml2', function (done, assert) {
        cos.putBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            AccessControlPolicy: AccessControlPolicy2,
        }, function (err, data) {
            assert.ok(!err, 'putBucketAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region}, function (err, data) {
                assert.ok(data.Grants.length === 1);
                assert.ok(data.Grants[0] && data.Grants[0].Grantee.ID === 'qcs::cam::uin/10002:uin/10002');
                assert.ok(data.Grants[0] && data.Grants[0].Permission === 'READ');
                done();
            });
        });
    });
    test('putBucketAcl() decodeAcl', function (done, assert) {
        cos.getBucketAcl({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            cos.putBucketAcl({
                Bucket: config.Bucket,
                Region: config.Region,
                GrantFullControl: data.GrantFullControl,
                GrantWrite: data.GrantWrite,
                GrantRead: data.GrantRead,
                ACL: data.ACL,
            }, function (err, data) {
                assert.ok(data);
                done();
            });
        });
    });
});

group('ObjectAcl', function () {
    var AccessControlPolicy = {
        "Owner": {
            "ID": 'qcs::cam::uin/10001:uin/10001' // 10001 是 QQ 号
        },
        "Grants": [{
            "Grantee": {
                "ID": "qcs::cam::uin/10002:uin/10002", // 10002 是 QQ 号
            },
            "Permission": "READ"
        }]
    };
    var AccessControlPolicy2 = {
        "Owner": {
            "ID": 'qcs::cam::uin/10001:uin/10001' // 10001 是 QQ 号
        },
        "Grant": {
            "Grantee": {
                "ID": "qcs::cam::uin/10002:uin/10002", // 10002 是 QQ 号
            },
            "Permission": "READ"
        }
    };
    test('putObjectAcl() header ACL:private', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.txt',
            Body: 'hello!',
        }, function (err, data) {
            assert.ok(!err);
            cos.putObjectAcl({
                Bucket: config.Bucket,
                Region: config.Region,
                ACL: 'private',
                Key: '1.txt',
            }, function (err, data) {
                assert.ok(!err, 'putObjectAcl 成功');
                cos.getObjectAcl({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: '1.txt'
                }, function (err, data) {
                    assert.ok(data.ACL = 'private');
                    AccessControlPolicy.Owner.ID = data.Owner.ID;
                    AccessControlPolicy2.Owner.ID = data.Owner.ID;
                    assert.ok(data.Grants.length === 1);
                    done();
                });
            });
        });
    });
    test('putObjectAcl() header ACL:default', function (done, assert) {
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            ACL: 'default',
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.txt'
            }, function (err, data) {
                assert.ok(data.ACL = 'default');
                done();
            });
        });
    });
    test('putObjectAcl() header ACL:public-read', function (done, assert) {
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            ACL: 'public-read',
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
                assert.ok(data.ACL = 'public-read');
                done();
            });
        });
    });
    // Object 不再支持修改写权限
    // test('putObjectAcl() header ACL:public-read-write', function (done, assert) {
    //     cos.putObjectAcl({
    //         Bucket: config.Bucket,
    //         Region: config.Region,
    //         ACL: 'public-read-write',
    //         Key: '1.txt',
    //     }, function (err, data) {
    //         assert.ok(!err, 'putObjectAcl 成功');
    //         cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
    //             assert.ok(data.ACL = 'public-read-write');
    //             done();
    //         });
    //     });
    // });
    test('putObjectAcl() header GrantRead:1001,1002', function (done, assert) {
        var GrantRead = 'id="qcs::cam::uin/1001:uin/1001",id="qcs::cam::uin/1002:uin/1002"';
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantRead: GrantRead,
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
                assert.ok(data.GrantRead = GrantRead);
                done();
            });
        });
    });
    // Object 不再支持修改写权限
    // test('putObjectAcl() header GrantWrite:1001,1002', function (done, assert) {
    //     var GrantWrite = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
    //     cos.putObjectAcl({
    //         Bucket: config.Bucket,
    //         Region: config.Region,
    //         GrantWrite: GrantWrite,
    //         Key: '1.txt',
    //     }, function (err, data) {
    //         assert.ok(!err, 'putObjectAcl 成功');
    //         cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
    //             assert.ok(data.GrantWrite = GrantWrite);
    //             done();
    //         });
    //     });
    // });
    test('putObjectAcl() header GrantFullControl:1001,1002', function (done, assert) {
        var GrantFullControl = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantFullControl: GrantFullControl,
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
                assert.ok(data.GrantFullControl = GrantFullControl);
                done();
            });
        });
    });
    test('putObjectAcl() header ACL:public-read, GrantRead:1001,1002', function (done, assert) {
        var GrantFullControl = 'id="qcs::cam::uin/1001:uin/1001", id="qcs::cam::uin/1002:uin/1002"';
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            GrantFullControl: GrantFullControl,
            ACL: 'public-read',
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
                assert.ok(data.GrantFullControl = GrantFullControl);
                assert.ok(data.ACL = 'public-read');
                done();
            });
        });
    });
    test('putObjectAcl() xml', function (done, assert) {
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            AccessControlPolicy: AccessControlPolicy,
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getBucketAcl({Bucket: config.Bucket, Region: config.Region, Key: '1.txt'}, function (err, data) {
                assert.ok(data.Grants.length === 1);
                assert.ok(data.Grants[0] && data.Grants[0].Grantee.ID === 'qcs::cam::uin/10002:uin/10002', '设置 AccessControlPolicy ID 正确');
                assert.ok(data.Grants[0] && data.Grants[0].Permission === 'READ', '设置 AccessControlPolicy Permission 正确');
                done();
            });
        });
    });
    test('putObjectAcl() xml2', function (done, assert) {
        cos.putObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            AccessControlPolicy: AccessControlPolicy2,
            Key: '1.txt',
        }, function (err, data) {
            assert.ok(!err, 'putObjectAcl 成功');
            cos.getObjectAcl({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.txt'
            }, function (err, data) {
                assert.ok(data.Grants.length === 1);
                assert.ok(data.Grants[0] && data.Grants[0].Grantee.ID === 'qcs::cam::uin/10002:uin/10002', 'ID 正确');
                assert.ok(data.Grants[0] && data.Grants[0].Permission === 'READ', 'Permission 正确');
                done();
            });
        });
    });
    test('putObjectAcl() decodeAcl', function (done, assert) {
        cos.getObjectAcl({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.txt'
        }, function (err, data) {
            cos.putObjectAcl({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.txt',
                GrantFullControl: data.GrantFullControl,
                GrantWrite: data.GrantWrite,
                GrantRead: data.GrantRead,
                ACL: data.ACL,
            }, function (err, data) {
                assert.ok(data);
                done();
            });
        });
    });
});

group('BucketCors', function () {
    var CORSRules = [{
        "AllowedOrigins": ["*"],
        "AllowedMethods": ["GET", "POST", "PUT", "DELETE", "HEAD"],
        "AllowedHeaders": ["*", 'test-' + Date.now().toString(36)],
        "ExposeHeaders": [
            'etag',
            'date',
            'content-length',
            'expires',
            'cache-control',
            'content-disposition',
            'content-encoding',
            'x-cos-acl',
            'x-cos-version-id',
            'x-cos-request-id',
            'x-cos-delete-marker',
            'x-cos-server-side-encryption',
            'x-cos-storage-class',
            'x-cos-acl',
            'x-cos-meta-test',
            'x-cos-tagging-count',
        ],
        "MaxAgeSeconds": "5"
    }];
    var CORSRulesMulti = [{
        "AllowedOrigins": ["*"],
        "AllowedMethods": ["GET", "POST", "PUT", "DELETE", "HEAD"],
        "AllowedHeaders": ["*"],
        "ExposeHeaders": ["ETag", "Date", "Content-Length", "x-cos-acl", "x-cos-version-id", "x-cos-request-id", "x-cos-delete-marker", "x-cos-server-side-encryption"],
        "MaxAgeSeconds": "5"
    }, {
        "AllowedOrigins": ["http://qq.com", "http://qcloud.com"],
        "AllowedMethods": ["GET", "POST", "PUT", "DELETE", "HEAD"],
        "AllowedHeaders": ["*"],
        "ExposeHeaders": ["ETag", "Date", "Content-Length", "x-cos-acl", "x-cos-version-id", "x-cos-request-id", "x-cos-delete-marker", "x-cos-server-side-encryption"],
        "MaxAgeSeconds": "5"
    }];
    test('putBucketCors() old CORSConfiguration', function (done, assert) {
        CORSRules[0].AllowedHeaders[1] = 'test-' + Date.now().toString(36);
        cos.putBucketCors({
            Bucket: config.Bucket,
            Region: config.Region,
            CORSConfiguration: {
                CORSRules: CORSRules
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketCors({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(CORSRules, data.CORSRules));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketCors() multi', function (done, assert) {
        cos.putBucketCors({
            Bucket: config.Bucket,
            Region: config.Region,
            CORSConfiguration: {
                CORSRules: CORSRulesMulti
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketCors({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(CORSRulesMulti, data.CORSRules));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketCors() old CORSRules', function (done, assert) {
        CORSRules[0].AllowedHeaders[1] = 'test-' + Date.now().toString(36);
        cos.putBucketCors({
            Bucket: config.Bucket,
            Region: config.Region,
            CORSRules: CORSRules
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketCors({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(CORSRules, data.CORSRules));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketCors(),getBucketCors()', function (done, assert) {
        CORSRules[0].AllowedHeaders = ['*'];
        cos.putBucketCors({
            Bucket: config.Bucket,
            Region: config.Region,
            CORSConfiguration: {
                CORSRules: CORSRules
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketCors({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(CORSRules, data.CORSRules));
                    done();
                });
            }, 2000);
        });
    });
});

group('BucketTagging', function () {
    var Tags = [
        {Key: "k1", Value: "v1"}
    ];
    var TagsMulti = [
        {Key: "k1", Value: "v1"},
        {Key: "k2", Value: "v2"},
    ];
    test('putBucketTagging(),getBucketTagging()', function (done, assert) {
        Tags[0].Value = Date.now().toString(36);
        cos.putBucketTagging({
            Bucket: config.Bucket,
            Region: config.Region,
            Tagging: {
                Tags: Tags
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketTagging({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(Tags, data.Tags));
                    done();
                });
            }, 1000);
        });
    });
    test('deleteBucketTagging()', function (done, assert) {
        cos.deleteBucketTagging({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketTagging({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject([], data.Tags));
                    done();
                });
            }, 1000);
        });
    });
    test('putBucketTagging() multi', function (done, assert) {
        Tags[0].Value = Date.now().toString(36);
        cos.putBucketTagging({
            Bucket: config.Bucket,
            Region: config.Region,
            Tagging: {
                Tags: TagsMulti
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketTagging({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(TagsMulti, data.Tags));
                    done();
                });
            }, 1000);
        });
    });
});

group('BucketPolicy', function () {
    var Prefix = Date.now().toString(36);
    var Policy = {
        "version": "2.0",
        "principal": {"qcs": ["qcs::cam::uin/10001:uin/10001"]}, // 这里的 10001 是 QQ 号
        "statement": [{
            "effect": "allow",
            "action": [
                "name/cos:GetBucket",
                "name/cos:PutObject",
                "name/cos:PostObject",
                "name/cos:PutObjectCopy",
                "name/cos:InitiateMultipartUpload",
                "name/cos:UploadPart",
                "name/cos:UploadPartCopy",
                "name/cos:CompleteMultipartUpload",
                "name/cos:AbortMultipartUpload",
                "name/cos:AppendObject"
            ],
            "resource": ["qcs::cos:" + config.Region + ":uid/" + AppId + ":" + BucketLongName + ".cos." + config.Region + ".myqcloud.com//" + AppId + "/" + BucketShortName + "/" + Prefix + "/*"] // 1250000000 是 appid
        }]
    };
    test('putBucketPolicy(),getBucketPolicy()', function (done, assert) {
        cos.putBucketPolicy({
            Bucket: config.Bucket,
            Region: config.Region,
            Policy: Policy
        }, function (err, data) {
            assert.ok(!err);
            cos.getBucketPolicy({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                assert.ok(Policy, data.Policy);
                done();
            });
        });
    });
    test('putBucketPolicy() s3', function (done, assert) {
        cos.putBucketPolicy({
            Bucket: config.Bucket,
            Region: config.Region,
            Policy: JSON.stringify(Policy)
        }, function (err, data) {
            assert.ok(!err);
            cos.getBucketPolicy({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                assert.ok(Policy, data.Policy);
                done();
            });
        });
    });
});

group('BucketLocation', function () {
    test('getBucketLocation()', function (done, assert) {
        cos.getBucketLocation({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            var map1 = {
                'tianjin': 'ap-beijing-1',
                'cn-south-2': 'ap-guangzhou-2',
                'cn-south': 'ap-guangzhou',
                'cn-east': 'ap-shanghai',
                'cn-southwest': 'ap-chengdu',
            };
            var map2 = {
                'ap-beijing-1': 'tianjin',
                'ap-guangzhou-2': 'cn-south-2',
                'ap-guangzhou': 'cn-south',
                'ap-shanghai': 'cn-east',
                'ap-chengdu': 'cn-southwest',
            };
            assert.ok(data.LocationConstraint === config.Region || data.LocationConstraint === map1[config.Region] ||
                data.LocationConstraint === map2[config.Region]);
            done();
        });
    });
});

group('BucketLifecycle', function () {
    var Rules = [{
        'ID': '1',
        'Filter': {
            'Prefix': 'test_' + Date.now().toString(36),
        },
        'Status': 'Enabled',
        'Transition': {
            'Date': '2018-07-29T16:00:00.000Z',
            'StorageClass': 'STANDARD_IA'
        }
    }];
    var RulesMulti = [{
        'ID': '1',
        'Filter': {
            'Prefix': 'test1_' + Date.now().toString(36),
        },
        'Status': 'Enabled',
        'Transition': {
            'Date': '2018-07-29T16:00:00.000Z',
            'StorageClass': 'STANDARD_IA'
        }
    }, {
        'ID': '2',
        'Filter': {
            'Prefix': 'test2_' + Date.now().toString(36),
        },
        'Status': 'Enabled',
        'Transition': {
            'Date': '2018-07-29T16:00:00.000Z',
            'StorageClass': 'STANDARD_IA'
        }
    }];
    test('deleteBucketLifecycle()', function (done, assert) {
        cos.deleteBucketLifecycle({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketLifecycle({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject([], data.Rules));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketLifecycle(),getBucketLifecycle()', function (done, assert) {
        Rules[0].Filter.Prefix = 'test_' + Date.now().toString(36);
        cos.putBucketLifecycle({
            Bucket: config.Bucket,
            Region: config.Region,
            LifecycleConfiguration: {
                Rules: Rules
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketLifecycle({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(Rules, data && data.Rules));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketLifecycle() multi', function (done, assert) {
        Rules[0].Filter.Prefix = 'test_' + Date.now().toString(36);
        cos.putBucketLifecycle({
            Bucket: config.Bucket,
            Region: config.Region,
            LifecycleConfiguration: {
                Rules: RulesMulti
            }
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketLifecycle({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(RulesMulti, data.Rules));
                    done();
                });
            }, 2000);
        });
    });
});

group('BucketWebsite', function () {
    var RoutingRules = [{
        Condition: {
            HttpErrorCodeReturnedEquals: "404"
        },
        Redirect: {
            Protocol: "https",
            ReplaceKeyWith: "404.html"
        }
    }, {
        Condition: {
            KeyPrefixEquals: "docs/"
        },
        Redirect: {
            Protocol: "https",
            ReplaceKeyPrefixWith: "documents/"
        }
    }, {
        Condition: {
            KeyPrefixEquals: "img/"
        },
        Redirect: {
            Protocol: "https",
            ReplaceKeyWith: "picture.jpg"
        }
    }];
    var WebsiteConfiguration = {
        IndexDocument: {
            Suffix: "index.html"
        },
        RedirectAllRequestsTo: {
            Protocol: "https"
        },
        ErrorDocument: {
            Key: "error.html"
        },
    };
    test('putBucketWebsite(),getBucketWebsite()', function (done, assert) {
        cos.putBucketWebsite({
            Bucket: config.Bucket,
            Region: config.Region,
            WebsiteConfiguration: WebsiteConfiguration
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketWebsite({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(WebsiteConfiguration, data.WebsiteConfiguration));
                    done();
                });
            }, 2000);
        });
    });
    test('putBucketWebsite() multi RoutingRules', function (done, assert) {
        WebsiteConfiguration.RoutingRules = RoutingRules;
        cos.putBucketWebsite({
            Bucket: config.Bucket,
            Region: config.Region,
            WebsiteConfiguration: WebsiteConfiguration
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketWebsite({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(WebsiteConfiguration, data.WebsiteConfiguration));
                    done();
                });
            }, 2000);
        });
    });
    test('deleteBucketWebsite()', function (done, assert) {
        cos.deleteBucketWebsite({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketWebsite({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject({}, data.WebsiteConfiguration));
                    done();
                });
            }, 2000);
        });
    });
});

group('BucketDomain', function () {
    var DomainRule = [{
        Status: "DISABLED",
        Name: "www.testDomain1.com",
        Type: "REST"
    },
        {
            Status: "DISABLED",
            Name: "www.testDomain2.com",
            Type: "WEBSITE"
        }];
    test('putBucketDomain(),getBucketDomain()', function (done, assert) {
        cos.putBucketDomain({
            Bucket: config.Bucket,
            Region: config.Region,
            DomainRule: DomainRule
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketDomain({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject(DomainRule, data.DomainRule));
                    done();
                });
            }, 2000);
        });
    });
    // test('putBucketDomain() multi', function (done, assert) {
    //     cos.putBucketDomain({
    //         Bucket: config.Bucket,
    //         Region: config.Region,
    //         DomainRule: DomainRuleMulti
    //     }, function (err, data) {
    //         assert.ok(!err);
    //         setTimeout(function () {
    //             cos.getBucketDomain({
    //                 Bucket: config.Bucket,
    //                 Region: config.Region
    //             }, function (err, data) {
    //                 assert.ok(comparePlainObject(DomainRuleMulti, data.DomainRule));
    //                 done();
    //             });
    //         }, 2000);
    //     });
    // });
    test('deleteBucketDomain()', function (done, assert) {
        cos.deleteBucketDomain({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketDomain({
                    Bucket: config.Bucket,
                    Region: config.Region
                }, function (err, data) {
                    assert.ok(comparePlainObject([], data.DomainRule));
                    done();
                });
            }, 2000);
        });
    });
});

group('params check Region', function () {
    test('params check', function (done, assert) {
        cos.headBucket({
            Bucket: config.Bucket,
            Region: 'cos.ap-guangzhou'
        }, function (err, data) {
            assert.ok(err.error === 'param Region should not be start with "cos."');
            done();
        });
    });
    test('params check Region', function (done, assert) {
        cos.headBucket({
            Bucket: config.Bucket,
            Region: 'gz'
        }, function (err, data) {
            assert.ok(err);
            done();
        });
    });
});

group('Key 特殊字符处理', function () {
    test('Key 特殊字符处理', function (done, assert) {
        var Key = '中文→↓←→↖↗↙↘! $&\'()+,-.0123456789=@ABCDEFGHIJKLMNOPQRSTUV？WXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~.jpg';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: 'hello',
        }, function (err, data) {
            assert.ok(!err);
            cos.deleteObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
                Body: 'hello',
            }, function (err, data) {
                assert.ok(!err);
                cos.deleteMultipleObject({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Objects: {
                        Key: Key,
                    },
                }, function (err, data) {
                    assert.ok(!err);
                    done();
                });
            });
        });
    });
});

group('Bucket 格式有误', function () {
    test('Bucket 带有中文', function (done, assert) {
        cos.headBucket({
            Bucket: '中文-1250000000',
            Region: config.Region,
        }, function (err, data) {
            assert.ok(err && err.error === 'Bucket should format as "test-1250000000".');
            done();
        });
    });
    test('Bucket 带有 /', function (done, assert) {
        cos.headBucket({
            Bucket: 'te/st-1250000000',
            Region: config.Region,
        }, function (err, data) {
            assert.ok(err && err.error === 'Bucket should format as "test-1250000000".');
            done();
        });
    });
    test('Bucket 带有 .', function (done, assert) {
        cos.headBucket({
            Bucket: 'te.st-1250000000',
            Region: config.Region,
        }, function (err, data) {
            assert.ok(err && err.error === 'Bucket should format as "test-1250000000".');
            done();
        });
    });
    test('Bucket 带有 :', function (done, assert) {
        cos.headBucket({
            Bucket: 'te:st-1250000000',
            Region: config.Region,
        }, function (err, data) {
            assert.ok(err && err.error === 'Bucket should format as "test-1250000000".');
            done();
        });
    });
});

group('Region 格式有误', function () {
    test('Region 带有中文', function (done, assert) {
        cos.headBucket({
            Bucket: 'test-1250000000',
            Region: '中文',
        }, function (err, data) {
            assert.ok(err && err.error === 'Region format error.');
            done();
        });
    });
    test('Region 带有 /', function (done, assert) {
        cos.headBucket({
            Bucket: 'test-1250000000',
            Region: 'test/',
        }, function (err, data) {
            assert.ok(err && err.error === 'Region format error.');
            done();
        });
    });
    test('Region 带有 :', function (done, assert) {
        cos.headBucket({
            Bucket: 'test-1250000000',
            Region: 'test:',
        }, function (err, data) {
            assert.ok(err && err.error === 'Region format error.');
            done();
        });
    });
});

group('复制文件', function () {
    test('sliceCopyFile() 正常分片复制', function (done, assert) {
        var filename = '10m.zip';
        var Key = '10m.copy.zip';
        var blob = util.createFile({size: 1024 * 1024 * 10});
        var lastPercent;
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            Body: blob,
        }, function (err, data) {
            cos.sliceCopyFile({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: Key,
                CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + filename,
                SliceSize: 5 * 1024 * 1024,
                onProgress: function (info) {
                    lastPercent = info.percent;
                }
            }, function (err, data) {
                assert.ok(data && data.ETag, '成功进行分片复制');
                done();
            });
        });
    });

    test('sliceCopyFile() 单片复制', function (done, assert) {
        var filename = '10m.zip';
        var Key = '10m.copy.zip';
        cos.sliceCopyFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            CopySource: config.Bucket + '.cos.' + config.Region + '.myqcloud.com/' + filename,
            SliceSize: 10 * 1024 * 1024,
        }, function (err, data) {
            if (err) throw err;
            assert.ok(data && data.ETag, '成功进行单片复制');
            done();
        });
    });
});

group('putObject 中文 Content-MD5', function () {
    var fileBlob = dataURItoUploadBody('data:text/plain;base64,5Lit5paH');
    // 这里两个用户正式测试的时候需要给 putObject 计算并加上 Content-MD5 字段
    test('putObject 中文文件内容 带 Content-MD5', function (done, assert) {
        var Key = '中文.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: fileBlob,
        }, function (err, data) {
            assert.ok(data && data.ETag, '成功进行上传');
            done();
        });
    });
    test('putObject 中文字符串 带 Content-MD5', function (done, assert) {
        var Key = '中文.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: Key,
            Body: '中文',
        }, function (err, data) {
            assert.ok(data && data.ETag, '成功进行上传');
            done();
        });
    });
});

group('deleteMultipleObject Key 带中文字符', function () {
    test('deleteMultipleObject Key 带中文字符', function (done, assert) {
        cos.deleteMultipleObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Objects: [
                {Key: '中文/中文.txt'},
                {Key: '中文/中文.zip', VersionId: 'MTg0NDY3NDI1MzM4NzM0ODA2MTI'},
                {Key: unescape(encodeURIComponent('中文'))},
                {Key: unescape('%e8%af%b4%2e%70%72%70%72')},
            ]
        }, function (err, data) {
            assert.ok(!err, '成功进行批量删除');
            done();
        });
    });
});

group('upload Content-Type', function () {
    // putObject
    test('putObject string Content-Type null -> text/plain', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.zip',
            Body: '12345',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.zip',
            }, function (err, data) {
                assert.ok(data.headers['content-type'] === 'application/zip', 'Content-Type 正确');
                done();
            });
        });
    });
    test('putObject string Content-Type text/xml -> text/xml', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.zip',
            ContentType: 'text/xml',
            Body: util.createFile({size: 1}),
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.zip',
            }, function (err, data) {
                assert.ok(data.headers['content-type'] === 'text/xml', 'Content-Type 正确');
                done();
            });
        });
    });
    test('putObject empty blob Content-Type null application/octet-stream', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1',
            Body: '1234',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1',
            }, function (err, data) {
                assert.ok(data.headers['content-type'] === 'application/octet-stream', 'Content-Type 正确');
                done();
            });
        });
    });
    // sliceUploadFile
    test('sliceUploadFile string Content-Type text/xml -> text/xml', function (done, assert) {
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1.zip',
            ContentType: 'text/xml',
            Body: util.createFile({size: 1, type: 'text/html'}),
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1.zip',
            }, function (err, data) {
                assert.ok(data.headers['content-type'] === 'text/xml', 'Content-Type 正确');
                done();
            });
        });
    });
    test('sliceUploadFile ArrayBuffer Content-Type null application/octet-stream', function (done, assert) {
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1',
            Body: '1234',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1',
            }, function (err, data) {
                assert.ok(data.headers['content-type'] === 'application/octet-stream', 'Content-Type 正确');
                done();
            });
        });
    });
});

group('Cache-Control', function () {
    // putObject
    test('putObject Cache-Control: null -> Cache-Control: null or max-age=259200', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1m.zip',
            Body: '',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1m.zip',
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === undefined || data.headers['cache-control'] === 'max-age=259200', 'cache-control 正确');
                done();
            });
        });
    });
    test('putObject Cache-Control: max-age=7200 -> Cache-Control: max-age=7200', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1m.zip',
            Body: '',
            CacheControl: 'max-age=7200',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1m.zip',
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === 'max-age=7200', 'cache-control 正确');
                done();
            });
        });
    });
    test('putObject Cache-Control: no-cache -> Cache-Control: no-cache', function (done, assert) {
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: '1m.zip',
            Body: '',
            CacheControl: 'no-cache',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: '1m.zip',
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === 'no-cache' || data.headers['cache-control'] === 'no-cache, max-age=259200', 'cache-control 正确');
                done();
            });
        });
    });
    // sliceUploadFile
    test('sliceUploadFile Cache-Control: null -> Cache-Control: null or max-age=259200', function (done, assert) {
        var filename = '1.txt';
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            FilePath: testFile[filename],
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === undefined || data.headers['cache-control'] === 'max-age=259200', 'cache-control 正确');
                done();
            });
        });
    });
    test('sliceUploadFile Cache-Control: max-age=7200 -> Cache-Control: max-age=7200', function (done, assert) {
        var filename = '1.txt';
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            FilePath: testFile[filename],
            CacheControl: 'max-age=7200',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === 'max-age=7200', 'cache-control 正确');
                done();
            });
        });
    });
    test('sliceUploadFile Cache-Control: no-cache -> Cache-Control: no-cache', function (done, assert) {
        var filename = '1.txt';
        var fileSize = 1024;
        var filePath = wx.env.USER_DATA_PATH + '/' + filename;
        util.createFile({size: fileSize}, filePath);
        cos.sliceUploadFile({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: filename,
            FilePath: testFile[filename],
            CacheControl: 'no-cache',
        }, function (err, data) {
            cos.headObject({
                Bucket: config.Bucket,
                Region: config.Region,
                Key: filename,
            }, function (err, data) {
                assert.ok(data.headers['cache-control'] === 'no-cache' || data.headers['cache-control'] === 'no-cache, max-age=259200', 'cache-control 正确');
                done();
            });
        });
    });
});

group('BucketLogging', function () {
    var TargetBucket = config.Bucket;
    var TargetPrefix = 'bucket-logging-prefix' + Date.now().toString(36) + '/';
    var BucketLoggingStatus = {
        LoggingEnabled: {
            TargetBucket: TargetBucket,
            TargetPrefix: TargetPrefix
        }
    };

    test('putBucketLogging(), getBucketLogging()', function (done, assert) {
        cos.putBucketLogging({
            Bucket: config.Bucket,
            Region: config.Region,
            BucketLoggingStatus: BucketLoggingStatus
        }, function (err, data) {
            assert.ok(!err);
            cos.getBucketLogging({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                delete data.BucketLoggingStatus._xmlns;
                assert.ok(comparePlainObject(BucketLoggingStatus, data.BucketLoggingStatus));
                done();
            });
        });
    });

    test('putBucketLogging() 删除 logging 配置', function (done, assert) {
        cos.putBucketLogging({
            Bucket: config.Bucket,
            Region: config.Region,
            BucketLoggingStatus: ''
        }, function (err, data) {
            assert.ok(!err);
            cos.getBucketLogging({
                Bucket: config.Bucket,
                Region: config.Region
            }, function (err, data) {
                delete data.BucketLoggingStatus._xmlns;
                assert.ok(comparePlainObject(data.BucketLoggingStatus, {}));
                done();
            });
        });
    });
});

group('BucketInventory', function () {
    var TargetBucket = config.Bucket;
    var InventoryConfiguration = {
        Id: 'inventory_test',
        IsEnabled: 'true',
        Destination: {
            COSBucketDestination: {
                Format: 'CSV',
                AccountId: config.Uin,
                Bucket: 'qcs::cos:' + config.Region + '::' + TargetBucket,
                Prefix: 'inventory_prefix_1',
                Encryption: {
                    SSECOS: ''
                }
            }
        },
        Schedule: {
            Frequency: 'Daily'
        },
        Filter: {
            Prefix: 'myPrefix'
        },
        IncludedObjectVersions: 'All',
        OptionalFields: [
            'Size'
        ]
    };

    var InventoryConfigurationNoEncryption = {
        Id: 'inventory_test',
        IsEnabled: 'true',
        Destination: {
            COSBucketDestination: {
                Format: 'CSV',
                AccountId: config.Uin,
                Bucket: 'qcs::cos:' + config.Region + '::' + TargetBucket,
                Prefix: 'inventory_prefix_1'
            }
        },
        Schedule: {
            Frequency: 'Daily'
        },
        Filter: {
            Prefix: 'myPrefix'
        },
        IncludedObjectVersions: 'All',
        OptionalFields: [
            'Size'
        ]
    };

    test('putBucketInventory(), getBucketInventory()', function (done, assert) {
        cos.putBucketInventory({
            Bucket: config.Bucket,
            Region: config.Region,
            Id: InventoryConfiguration.Id,
            InventoryConfiguration: InventoryConfiguration
        }, function (err, data) {
            assert.ok(!err);

            cos.getBucketInventory({
                Bucket: config.Bucket,
                Region: config.Region,
                Id: InventoryConfiguration.Id
            }, function (err, data) {
                assert.ok(comparePlainObject(InventoryConfiguration, data.InventoryConfiguration));
                done();
            });
        });
    });

    test('listBucketInventory()', function (done, assert) {
        cos.listBucketInventory({
            Bucket: config.Bucket,
            Region: config.Region
        }, function (err, data) {
            var targetInventory;
            data.InventoryConfigurations.forEach(function (item) {
                if (item.Id === InventoryConfiguration.Id) {
                    targetInventory = item;
                }
            });
            assert.ok(comparePlainObject(InventoryConfiguration, targetInventory));
            assert.ok(data.IsTruncated === 'false' || data.IsTruncated === 'true');
            done();
        });
    });

    test('putBucketInventory() 不设置 SSECOS', function (done, assert) {
        cos.putBucketInventory({
            Bucket: config.Bucket,
            Region: config.Region,
            Id: InventoryConfigurationNoEncryption.Id,
            InventoryConfiguration: InventoryConfigurationNoEncryption
        }, function (err, data) {
            assert.ok(!err);

            cos.getBucketInventory({
                Bucket: config.Bucket,
                Region: config.Region,
                Id: InventoryConfigurationNoEncryption.Id
            }, function (err, data) {
                assert.ok(comparePlainObject(InventoryConfigurationNoEncryption, data.InventoryConfiguration));
                done();
            });
        });
    });

    test('deleteBucketInventory()', function (done, assert) {
        cos.deleteBucketInventory({
            Bucket: config.Bucket,
            Region: config.Region,
            Id: InventoryConfiguration.Id
        }, function (err, data) {
            assert.ok(!err);
            cos.getBucketInventory({
                Bucket: config.Bucket,
                Region: config.Region,
                Id: InventoryConfiguration.Id
            }, function (err, data) {
                assert.ok(err && err.statusCode === 404);
                done();
            });
        });
    });
});


var tagging2str = (obj) => {
    var arr = [];
    obj.forEach(v => arr.push(v.Key + '=' + encodeURIComponent(v.Value)))
    return arr.join('&');
}
group('上传带 tagging', function () {
    var Tags = [
        {Key: "k1", Value: "v1"},
        {Key: "k2", Value: "v2"},
    ];
    var key = '1.txt';

    test('putObject 带 x-cos-tagging', function (done, assert) {
        Tags[0].Value = Date.now().toString(36);
        var tagStr = tagging2str(Tags);
        // 调用方法
        cos.putObject({
            Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
            Region: config.Region,
            Key: key,
            Body: 'hello!',
            Headers: {
                'x-cos-tagging': tagStr,
            },
        }, function (err1, data1) {
            cos.headObject({
                Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
                Region: config.Region,
                Key: key,
            }, function (err2, data2) {
                var taggingCount = data2 && data2.headers['x-cos-tagging-count'];
                assert.ok(taggingCount === '2', '返回 x-cos-tagging-count: ' + taggingCount);
                cos.getObjectTagging({
                    Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
                    Region: config.Region,
                    Key: key,
                }, function (err3, data3) {
                    assert.ok(comparePlainObject(Tags, data3.Tags));
                    done();
                });
            });
        });
    });

    // test('sliceUploadFile 带 x-cos-tagging', function (done, assert) {
    //     Tags[0].Value = Date.now().toString(36);
    //     var tagStr = tagging2str(Tags);
    //     // 调用方法
    //     cos.sliceUploadFile({
    //         Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
    //         Region: config.Region,
    //         Key: key,
    //         Body: 'hello!',
    //         Headers: {
    //             'x-cos-tagging': tagStr,
    //         },
    //     }, function (err1, data1) {
    //         cos.headObject({
    //             Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
    //             Region: config.Region,
    //             Key: key,
    //         }, function (err2, data2) {
    //             var taggingCount = data2 && data2.headers['x-cos-tagging-count'];
    //             assert.ok(taggingCount === '1', '返回 x-cos-tagging-count: ' + taggingCount);
    //             cos.getObjectTagging({
    //                 Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
    //                 Region: config.Region,
    //                 Key: key,
    //             }, function (err3, data3) {
    //                 assert.ok(data3 && data3.Tags && comparePlainObject(Tags, data3.Tags));
    //                 done();
    //             });
    //         });
    //     });
    // });
});

group('ObjectTagging', function () {
    var key = '1.txt';
    var Tags = [
        {Key: "k1", Value: "v1"},
        {Key: "k2", Value: "v2"},
    ];
    test('putObjectTagging(),getObjectTagging()', function (done, assert) {
        Tags[0].Value = Date.now().toString(36);
        cos.putObjectTagging({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Tagging: {
                Tags: Tags
            },
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getObjectTagging({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: key,
                }, function (err, data) {
                    assert.ok(comparePlainObject(Tags, data.Tags));
                    done();
                });
            }, 1000);
        });
    });
    test('deleteObjectTagging()', function (done, assert) {
        cos.deleteObjectTagging({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getObjectTagging({
                    Bucket: config.Bucket,
                    Region: config.Region,
                    Key: key,
                }, function (err, data) {
                    assert.ok(comparePlainObject([], data.Tags));
                    done();
                });
            }, 1000);
        });
    });
});

group('getBucketAccelerate', function () {
    test('putBucketAccelerate(),getBucketAccelerate() Enabled', function (done, assert) {
        cos.putBucketAccelerate({
            Bucket: config.Bucket,
            Region: config.Region,
            AccelerateConfiguration: {
                Status: 'Enabled', // Suspended、Enabled
            },
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketAccelerate({
                    Bucket: config.Bucket,
                    Region: config.Region,
                }, function (err2, data2) {
                    assert.ok(data2 && data2.AccelerateConfiguration && data2.AccelerateConfiguration.Status === 'Enabled');
                    done();
                });
            }, 2000);
        });
    });

    test('putBucketAccelerate(),getBucketAccelerate() Suspended', function (done, assert) {
        cos.putBucketAccelerate({
            Bucket: config.Bucket,
            Region: config.Region,
            AccelerateConfiguration: {
                Status: 'Suspended', // Suspended、Enabled
            },
        }, function (err, data) {
            assert.ok(!err);
            setTimeout(function () {
                cos.getBucketAccelerate({
                    Bucket: config.Bucket,
                    Region: config.Region,
                }, function (err2, data2) {
                    assert.ok(data2 && data2.AccelerateConfiguration && data2.AccelerateConfiguration.Status === 'Suspended');
                    done();
                });
            }, 1000);
        });
    });
});
// 小程序没有 Promise
// group('Promise', function () {
//
//     test('Promise() getService', function (done, assert) {
//         cos.getService().then(function (data) {
//             assert.ok(data);
//             done();
//         }).catch(function (err) {
//             assert.ok(false);
//             done();
//         });
//     });
//
//     test('Promise() getService region', function (done, assert) {
//         cos.getService({
//             Region: config.Region,
//         }).then(function (data) {
//             assert.ok(data);
//             done();
//         }).catch(function (err) {
//             assert.ok(false);
//             done();
//         });
//     });
//
//     test('Promise() getObjectUrl', function (done, assert) {
//         var res = cos.getObjectUrl({
//             Bucket: config.Bucket,
//             Region: config.Region,
//             Key: '123.txt',
//         });
//         assert.ok(!res.then);
//         done();
//     });
//
//     test('Promise() headBucket', function (done, assert) {
//         cos.headBucket({
//             Bucket: config.Bucket,
//             Region: config.Region,
//         }).then(function (data) {
//             assert.ok(data);
//             done();
//         }).catch(function () {
//             assert.ok(false);
//             done();
//         });
//     });
//
//     test('headBucket callback', function (done, assert) {
//         var res = cos.headBucket({
//             Bucket: config.Bucket,
//             Region: config.Region,
//         }, function (err, data) {
//             assert.ok(!err && data);
//             done();
//         });
//         assert.ok(!res);
//     });
//
//     test('Promise() headBucket error', function (done, assert) {
//         cos.headBucket({
//             Bucket: config.Bucket,
//             Region: config.Region + '/',
//         }).then(function (data) {
//             assert.ok(!data);
//             done();
//         }).catch(function (err) {
//             assert.ok(err && err.error === 'Region format error.');
//             done();
//         });
//     });
// });

group('Query 的键值带有特殊字符', function () {
    test('getAuth()', function (done, assert) {
        var content = Date.now().toString();
        var key = '1.txt';
        cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Body: content,
        }, function (err, data) {
            var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,./;\'[]\\-=0987654321`~!@#$%^&*()_+{}|":>?<';
            var qs = {};
            qs[str] = str;

            cos.options.getAuthorization({
                Method: 'get',
                Key: key,
                Scope: [{
                    action: 'GetObject',
                    bucket: config.Bucket,
                    region: config.Region,
                    prefix: key,
                }],
            }, function (AuthData) {
                if (typeof AuthData === 'string') {
                    AuthData = {Authorization: AuthData};
                }
                if (!AuthData.Authorization) {
                    AuthData.Authorization = COS.getAuthorization({
                        SecretId: AuthData.TmpSecretId,
                        SecretKey: AuthData.TmpSecretKey,
                        Method: 'get',
                        Key: key,
                        SystemClockOffset: cos.options.SystemClockOffset,
                    });
                }
                var link = 'http://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com' + '/' +
                    camSafeUrlEncode(key).replace(/%2F/g, '/') +
                    '?sign=' + camSafeUrlEncode(AuthData.Authorization) +
                    (AuthData.XCosSecurityToken ? '&x-cos-security-token=' + AuthData.XCosSecurityToken : '') +
                    '&' + camSafeUrlEncode(str) + '=' + camSafeUrlEncode(str);
                request({
                    method: 'GET',
                    url: link,
                }, function (err, response, body) {
                    assert.ok(response.statusCode === 200);
                    assert.ok(body === content);
                    done();
                });
            });
        });
    });
});

group('appendObject', function () {
    test('appendObject()', function (done, assert) {
        cos.headObject({
            Bucket: config.Bucket, // Bucket 格式：test-1250000000
            Region: config.Region,
            Key: 'append.txt', /* 必须 */
        }, function(err, data) {
            assert.ok(!err);
            if (err) return console.log(err);
            // 首先取到要追加的文件当前长度，即需要上送的Position
            var position = data.headers['content-length'];
            cos.appendObject({
                Bucket: config.Bucket, // Bucket 格式：test-1250000000
                Region: config.Region,
                Key: 'append.txt', /* 必须 */
                Body: '66666',
                Position: position,
            },
            function(err, data) {
                assert.ok(!err);
                done();
            })
        });
    });
});

group('数据万象', function () {
    test('describeMediaBuckets()', function (done, assert) {
        var host = 'ci.' + config.Region + '.myqcloud.com';
        var url = 'https://' + host + '/mediabucket';
        cos.request({
            Bucket: config.Bucket,
            Region: config.Region,
            Method: 'GET',
            Key: 'mediabucket', /** 固定值，必须 */
            Url: url,
            Query: {
                pageNumber: '1', /** 第几页，非必须 */
                pageSize: '10', /** 每页个数，非必须 */
                // regions: 'ap-chengdu', /** 地域信息，例如'ap-beijing'，支持多个值用逗号分隔如'ap-shanghai,ap-beijing'，非必须 */
                // bucketNames: 'test-1250000000', /** 存储桶名称，精确搜索，例如'test-1250000000'，支持多个值用逗号分隔如'test1-1250000000,test2-1250000000'，非必须 */
                // bucketName: 'test', /** 存储桶名称前缀，前缀搜索，例如'test'，支持多个值用逗号分隔如'test1,test2'，非必须 */
            }
        },
        function(err, data){
            assert.ok(!err);
            done();
        });
    });
    test('getMediaInfo()', function (done, assert) {
        cos.request({
            Bucket: config.Bucket,
            Region: config.Region,
            Method: 'GET',
            Key: 'test.mp4',
            Query: {
                'ci-process': 'videoinfo' /** 固定值，必须 */
            }
        },
        function(err, data){
            assert.ok(!err);
            done();
        });
    });
    test('getSnapshot()', function (done, assert) {
        cos.request({
            Bucket: config.Bucket,
            Region: config.Region,
            Method: 'GET',
            Key: 'test.mp4',
            Query: {
                'ci-process': 'snapshot', /** 固定值，必须 */
                time: 1, /** 截图的时间点，单位为秒，必须 */
                // width: 0, /** 截图的宽，非必须 */
                // height: 0, /** 截图的高，非必须 */
                // format: 'jpg', /** 截图的格式，支持 jpg 和 png，默认 jpg，非必须 */
                // rotate: 'auto', /** 图片旋转方式，默认为'auto'，非必须 */
                // mode: 'exactframe', /** 截帧方式，默认为'exactframe'，非必须 */
            },
            RawBody: true,
        },
        function(err, data){
            assert.ok(!err);
            done();
        });
    });
  });
