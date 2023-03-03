'use strict';
var REQUEST = require('../lib/request');
var base64 = require('../lib/base64');
var util = require('./util');
var mime = require('mime');


// Bucket 相关

/**
 * 获取用户的 bucket 列表
 * @param  {Object}  params         回调函数，必须，下面为参数列表
 * 无特殊参数
 * @param  {Function}  callback     回调函数，必须
 */
function getService(params, callback) {

    if (typeof params === 'function') {
        callback = params;
        params = {};
    }
    var protocol = 'https:';
    var domain = this.options.ServiceDomain;
    var region = params.Region;
    if (domain) {
        domain = domain.replace(/\{\{Region\}\}/ig, region || '').replace(/\{\{.*?\}\}/ig, '');
        if (!/^[a-zA-Z]+:\/\//.test(domain)) {
            domain = protocol + '//' + domain;
        }
        if (domain.slice(-1) === '/') {
            domain = domain.slice(0, -1);
        }
    } else if (region) {
        domain = protocol + '//cos.' + region + '.myqcloud.com';
    } else {
        domain = protocol + '//service.cos.myqcloud.com';
    }

    var SignHost = '';
    var standardHost = region ? 'cos.' + region + '.myqcloud.com' : 'service.cos.myqcloud.com';
    var urlHost = domain.replace(/^https?:\/\/([^/]+)(\/.*)?$/, '$1');
    if (standardHost === urlHost) SignHost = standardHost;

    submitRequest.call(this, {
        Action: 'name/cos:GetService',
        url: domain,
        method: 'GET',
        headers: params.Headers,
    }, function (err, data) {
        if (err) return callback(err);
        var buckets = (data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Buckets
            && data.ListAllMyBucketsResult.Buckets.Bucket) || [];
        buckets = util.isArray(buckets) ? buckets : [buckets];
        var owner = (data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Owner) || {};
        callback(null, {
            Buckets: buckets,
            Owner: owner,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 创建 Bucket，并初始化访问权限
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
 *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {String}  data.Location             操作地址
 */
function putBucket(params, callback) {

    var self = this;

    var xml = '';
    if(params['BucketAZConfig']){
        var CreateBucketConfiguration = {
            BucketAZConfig: params.BucketAZConfig
        };
        xml = util.json2xml({CreateBucketConfiguration: CreateBucketConfiguration});
    }

    submitRequest.call(this, {
        Action: 'name/cos:PutBucket',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        body: xml,
    }, function (err, data) {
        if (err) return callback(err);
        var url = getUrl({
            protocol: self.options.Protocol,
            domain: self.options.Domain,
            bucket: params.Bucket,
            region: params.Region,
            isLocation: true,
        });
        callback(null, {
            Location: url,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 查看是否存在该Bucket，是否有权限访问
 * @param  {Object}  params                     参数对象，必须
 *     @param  {String}  params.Bucket          Bucket名称，必须
 *     @param  {String}  params.Region          地域名称，必须
 * @param  {Function}  callback                 回调函数，必须
 * @return  {Object}  err                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                      返回的数据
 *     @return  {Boolean}  data.BucketExist     Bucket是否存在
 *     @return  {Boolean}  data.BucketAuth      是否有 Bucket 的访问权限
 */
function headBucket(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:HeadBucket',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        method: 'HEAD',
    }, function (err, data) {
        callback(err, data);
    });
}

/**
 * 获取 Bucket 下的 object 列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Prefix              前缀匹配，用来规定返回的文件前缀地址，非必须
 *     @param  {String}  params.Delimiter           定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，非必须
 *     @param  {String}  params.Marker              默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
 *     @param  {String}  params.MaxKeys             单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.EncodingType        规定返回值的编码方式，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.ListBucketResult     返回的 object 列表信息
 */
function getBucket(params, callback) {
    var reqParams = {};
    reqParams['prefix'] = params['Prefix'] || '';
    reqParams['delimiter'] = params['Delimiter'];
    reqParams['marker'] = params['Marker'];
    reqParams['max-keys'] = params['MaxKeys'];
    reqParams['encoding-type'] = params['EncodingType'];

    submitRequest.call(this, {
        Action: 'name/cos:GetBucket',
        ResourceKey: reqParams['prefix'],
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        qs: reqParams,
    }, function (err, data) {
        if (err) return callback(err);
        var ListBucketResult = data.ListBucketResult || {};
        var Contents = ListBucketResult.Contents || [];
        var CommonPrefixes = ListBucketResult.CommonPrefixes || [];

        Contents = util.isArray(Contents) ? Contents : [Contents];
        CommonPrefixes = util.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];

        var result = util.clone(ListBucketResult);
        util.extend(result, {
            Contents: Contents,
            CommonPrefixes: CommonPrefixes,
            statusCode: data.statusCode,
            headers: data.headers,
        });

        callback(null, result);
    });
}

/**
 * 删除 Bucket
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 *     @return  {String}  data.Location     操作地址
 */
function deleteBucket(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucket',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        method: 'DELETE',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
 *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 */
function putBucketAcl(params, callback) {
    var headers = params.Headers;

    var xml = '';
    if (params['AccessControlPolicy']) {
        var AccessControlPolicy = util.clone(params['AccessControlPolicy'] || {});
        var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
        Grants = util.isArray(Grants) ? Grants : [Grants];
        delete AccessControlPolicy.Grant;
        delete AccessControlPolicy.Grants;
        AccessControlPolicy.AccessControlList = {Grant: Grants};
        xml = util.json2xml({AccessControlPolicy: AccessControlPolicy});

        headers['Content-Type'] = 'application/xml';
        headers['Content-MD5'] = util.binaryBase64(util.md5(xml));
    }

    // Grant Header 去重
    util.each(headers, function (val, key) {
        if (key.indexOf('x-cos-grant-') === 0) {
            headers[key] = uniqGrant(headers[key]);
        }
    });

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketACL',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: headers,
        action: 'acl',
        body: xml,
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.AccessControlPolicy  访问权限信息
 */
function getBucketAcl(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketACL',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'acl',
    }, function (err, data) {
        if (err) return callback(err);
        var AccessControlPolicy = data.AccessControlPolicy || {};
        var Owner = AccessControlPolicy.Owner || {};
        var Grant = AccessControlPolicy.AccessControlList.Grant || [];
        Grant = util.isArray(Grant) ? Grant : [Grant];
        var result = decodeAcl(AccessControlPolicy);
        if (data.headers && data.headers['x-cos-acl']) {
            result.ACL = data.headers['x-cos-acl'];
        }
        result = util.extend(result, {
            Owner: Owner,
            Grants: Grant,
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

/**
 * 设置 Bucket 的 跨域设置
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {Object}  params.CORSConfiguration       相关的跨域设置，必须
 * @param  {Array}  params.CORSConfiguration.CORSRules  对应的跨域规则
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回的数据
 */
function putBucketCors(params, callback) {

    var CORSConfiguration = params['CORSConfiguration'] || {};
    var CORSRules = CORSConfiguration['CORSRules'] || params['CORSRules'] || [];
    CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
    util.each(CORSRules, function (rule) {
        util.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key) {
            var sKey = key + 's';
            var val = rule[sKey] || rule[key] || [];
            delete rule[sKey];
            rule[key] = util.isArray(val) ? val : [val];
        });
    });

    var Conf = {CORSRule: CORSRules};
    if (params.ResponseVary) Conf.ResponseVary = params.ResponseVary;

    var xml = util.json2xml({CORSConfiguration: Conf});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketCORS',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'cors',
        headers: headers,
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的 跨域设置
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.CORSRules            Bucket的跨域设置
 */
function getBucketCors(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketCORS',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'cors',
    }, function (err, data) {
        if (err) {
            if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchCORSConfiguration') {
                var result = {
                    CORSRules: [],
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }
        var CORSConfiguration = data.CORSConfiguration || {};
        var CORSRules = CORSConfiguration.CORSRules || CORSConfiguration.CORSRule || [];
        CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
        var ResponseVary = CORSConfiguration.ResponseVary;

        util.each(CORSRules, function (rule) {
            util.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key) {
                var sKey = key + 's';
                var val = rule[sKey] || rule[key] || [];
                delete rule[key];
                rule[sKey] = util.isArray(val) ? val : [val];
            });
        });

        callback(null, {
            CORSRules: CORSRules,
            ResponseVary: ResponseVary,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 的 跨域设置
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 */
function deleteBucketCors(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketCORS',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'cors',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode || err.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的 地域信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据，包含地域信息 LocationConstraint
 */
function getBucketLocation(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketLocation',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'location',
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, data);
    });
}

function putBucketPolicy(params, callback) {
    var Policy = params['Policy'];
    var PolicyStr = Policy;
    try {
        if (typeof Policy === 'string') {
            Policy = JSON.parse(PolicyStr);
        } else {
            PolicyStr = JSON.stringify(Policy);
        }
    } catch (e) {
        callback({error: 'Policy format error'});
    }

    var headers = params.Headers;
    headers['Content-Type'] = 'application/json';
    headers['Content-MD5'] = util.binaryBase64(util.md5(PolicyStr));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketPolicy',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        action: 'policy',
        body: PolicyStr,
        headers: headers,
        json: true,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的读取权限策略
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketPolicy(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketPolicy',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'policy',
        rawBody: true,
    }, function (err, data) {
        if (err) {
            if (err.statusCode && err.statusCode === 403) {
                return callback({ErrorStatus: 'Access Denied'});
            }
            if (err.statusCode && err.statusCode === 405) {
                return callback({ErrorStatus: 'Method Not Allowed'});
            }
            if (err.statusCode && err.statusCode === 404) {
                return callback({ErrorStatus: 'Policy Not Found'});
            }
            return callback(err);
        }
        var Policy = {};
        try {
            Policy = JSON.parse(data.body);
        } catch (e) {
        }
        callback(null, {
            Policy: Policy,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 的 跨域设置
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 */
function deleteBucketPolicy(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketPolicy',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'policy',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode || err.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 的标签
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {Array}   params.TagSet  标签设置，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function putBucketTagging(params, callback) {

    var Tagging = params['Tagging'] || {};
    var Tags = Tagging.TagSet || Tagging.Tags || params['Tags'] || [];
    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    var xml = util.json2xml({Tagging: {TagSet: {Tag: Tags}}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketTagging',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'tagging',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketTagging(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketTagging',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'tagging',
    }, function (err, data) {
        if (err) {
            if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === 'NoSuchTagSet')) {
                var result = {
                    Tags: [],
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }
        var Tags = [];
        try {
            Tags = data.Tagging.TagSet.Tag || [];
        } catch (e) {
        }
        Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
        callback(null, {
            Tags: Tags,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 的 标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function deleteBucketTagging(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketTagging',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'tagging',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function putBucketLifecycle(params, callback) {

    var LifecycleConfiguration = params['LifecycleConfiguration'] || {};
    var Rules = LifecycleConfiguration.Rules || params.Rules || [];
    Rules = util.clone(Rules);
    var xml = util.json2xml({LifecycleConfiguration: {Rule: Rules}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketLifecycle',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'lifecycle',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function getBucketLifecycle(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketLifecycle',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'lifecycle',
    }, function (err, data) {
        if (err) {
            if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchLifecycleConfiguration') {
                var result = {
                    Rules: [],
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }
        var Rules = [];
        try {
            Rules = data.LifecycleConfiguration.Rule || [];
        } catch (e) {
        }
        Rules = util.clone(util.isArray(Rules) ? Rules : [Rules]);
        callback(null, {
            Rules: Rules,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function deleteBucketLifecycle(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketLifecycle',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'lifecycle',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function putBucketVersioning(params, callback) {

    if (!params['VersioningConfiguration']) {
        callback({error: 'missing param VersioningConfiguration'});
        return;
    }
    var VersioningConfiguration = params['VersioningConfiguration'] || {};
    var xml = util.json2xml({VersioningConfiguration: VersioningConfiguration});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketVersioning',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'versioning',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function getBucketVersioning(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketVersioning',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'versioning',
    }, function (err, data) {
        if (!err) {
            !data.VersioningConfiguration && (data.VersioningConfiguration = {});
        }
        callback(err, data);
    });
}

function putBucketReplication(params, callback) {
    var ReplicationConfiguration = util.clone(params.ReplicationConfiguration);
    var xml = util.json2xml({ReplicationConfiguration: ReplicationConfiguration});
    xml = xml.replace(/<(\/?)Rules>/ig, '<$1Rule>');
    xml = xml.replace(/<(\/?)Tags>/ig, '<$1Tag>');

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketReplication',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'replication',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function getBucketReplication(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketReplication',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'replication',
    }, function (err, data) {
        if (err) {
            if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'ReplicationConfigurationnotFoundError')) {
                var result = {
                    ReplicationConfiguration: {Rules: []},
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }
        if (!err) {
            !data.ReplicationConfiguration && (data.ReplicationConfiguration = {});
        }
        if (data.ReplicationConfiguration.Rule) {
            data.ReplicationConfiguration.Rules = data.ReplicationConfiguration.Rule;
            delete data.ReplicationConfiguration.Rule;
        }
        callback(err, data);
    });
}

function deleteBucketReplication(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketReplication',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'replication',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 静态网站配置信息
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {Object}  params.WebsiteConfiguration                        地域名称，必须
 *         @param  {Object}   WebsiteConfiguration.IndexDocument            索引文档，必须
 *         @param  {Object}   WebsiteConfiguration.ErrorDocument            错误文档，非必须
 *         @param  {Object}   WebsiteConfiguration.RedirectAllRequestsTo    重定向所有请求，非必须
 *         @param  {Array}   params.RoutingRules                            重定向规则，非必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketWebsite(params, callback) {

    if (!params['WebsiteConfiguration']) {
        callback({ error: 'missing param WebsiteConfiguration' });
        return;
    }

    var WebsiteConfiguration = util.clone(params['WebsiteConfiguration'] || {});
    var RoutingRules = WebsiteConfiguration['RoutingRules'] || WebsiteConfiguration['RoutingRule'] || [];
    RoutingRules = util.isArray(RoutingRules) ? RoutingRules : [RoutingRules];
    delete WebsiteConfiguration.RoutingRule;
    delete WebsiteConfiguration.RoutingRules;
    if (RoutingRules.length) WebsiteConfiguration.RoutingRules = { RoutingRule: RoutingRules };
    var xml = util.json2xml({ WebsiteConfiguration: WebsiteConfiguration });

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketWebsite',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'website',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的静态网站配置信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketWebsite(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketWebsite',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        action: 'website',
    }, function (err, data) {
        if (err) {
            if(err.statusCode === 404 && err.error.Code === 'NoSuchWebsiteConfiguration'){
                var result = {
                    WebsiteConfiguration: {},
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }

        var WebsiteConfiguration = data.WebsiteConfiguration || {};
        if (WebsiteConfiguration['RoutingRules']) {
            var RoutingRules = util.clone(WebsiteConfiguration['RoutingRules'].RoutingRule || []);
            RoutingRules = util.makeArray(RoutingRules);
            WebsiteConfiguration.RoutingRules = RoutingRules;
        }

        callback(null, {
            WebsiteConfiguration: WebsiteConfiguration,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 的静态网站配置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketWebsite(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketWebsite',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'website',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 的防盗链白名单或者黑名单
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {Object}  params.RefererConfiguration                        地域名称，必须
 *         @param  {String}   RefererConfiguration.Status                   是否开启防盗链，枚举值：Enabled、Disabled
 *         @param  {String}   RefererConfiguration.RefererType              防盗链类型，枚举值：Black-List、White-List，必须
 *         @param  {Array}   RefererConfiguration.DomianList.Domain         生效域名，必须
 *         @param  {String}   RefererConfiguration.EmptyReferConfiguration  ，非必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketReferer(params, callback) {

    if (!params['RefererConfiguration']) {
        callback({ error: 'missing param RefererConfiguration' });
        return;
    }

    var RefererConfiguration = util.clone(params['RefererConfiguration'] || {});
    var DomainList = RefererConfiguration['DomainList'] || {};
    var Domains = DomainList['Domains'] || DomainList['Domain'] || [];
    Domains = util.isArray(Domains) ? Domains : [Domains];
    if (Domains.length) RefererConfiguration.DomainList = {Domain: Domains};
    var xml = util.json2xml({ RefererConfiguration: RefererConfiguration });

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketReferer',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'referer',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的防盗链白名单或者黑名单
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketReferer(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketReferer',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        action: 'referer',
    }, function (err, data) {
        if (err) {
            if(err.statusCode === 404 && err.error.Code === 'NoSuchRefererConfiguration'){
                var result = {
                    WebsiteConfiguration: {},
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }

        var RefererConfiguration = data.RefererConfiguration || {};
        if (RefererConfiguration['DomainList']) {
          var Domains = util.makeArray(RefererConfiguration['DomainList'].Domain || []);
          RefererConfiguration.DomainList = {Domains: Domains};
        }

        callback(null, {
            RefererConfiguration: RefererConfiguration,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 自定义域名
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketDomain(params, callback) {

    var DomainConfiguration = params['DomainConfiguration'] || {};
    var DomainRule = DomainConfiguration.DomainRule || params.DomainRule || [];
    DomainRule = util.clone(DomainRule);
    var xml = util.json2xml({DomainConfiguration: {DomainRule: DomainRule}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketDomain',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'domain',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的自定义域名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketDomain(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketDomain',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'domain',
    }, function (err, data) {
        if (err) return callback(err);

        var DomainRule = [];
        try {
            DomainRule = data.DomainConfiguration.DomainRule || [];
        } catch (e) {
        }
        DomainRule = util.clone(util.isArray(DomainRule) ? DomainRule : [DomainRule]);
        callback(null, {
            DomainRule: DomainRule,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 自定义域名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketDomain(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketDomain',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'domain',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 的回源
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketOrigin(params, callback){
    var OriginConfiguration = params['OriginConfiguration'] || {};
    var OriginRule = OriginConfiguration.OriginRule || params.OriginRule || [];
    OriginRule = util.clone(OriginRule);
    var xml = util.json2xml({OriginConfiguration: {OriginRule: OriginRule}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketOrigin',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'origin',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的回源
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketOrigin(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketOrigin',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'origin',
    }, function (err, data) {
        if (err) return callback(err);

        var OriginRule = [];
        try {
            OriginRule = data.OriginConfiguration.OriginRule || [];
        } catch (e) {
        }
        OriginRule = util.clone(util.isArray(OriginRule) ? OriginRule : [OriginRule]);
        callback(null, {
            OriginRule: OriginRule,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Bucket 的回源
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketOrigin(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketOrigin',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'origin',
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 设置 Bucket 的日志记录
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {(Object|String)}  params.BucketLoggingStatus                         说明日志记录配置的状态，如果无子节点信息则意为关闭日志记录，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketLogging(params, callback) {
    var xml = util.json2xml({
        BucketLoggingStatus: params['BucketLoggingStatus'] || ''
    });

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketLogging',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'logging',
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的日志记录
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketLogging(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketLogging',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'logging',
    }, function (err, data) {
        if (err) return callback(err);
        delete data.BucketLoggingStatus._xmlns;
        callback(null, {
            BucketLoggingStatus: data.BucketLoggingStatus,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 创建/编辑 Bucket 的清单任务
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {String}  params.Id                                          清单任务的名称，必须
 *     @param  {Object}  params.InventoryConfiguration                      包含清单的配置参数，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketInventory(params, callback) {
    var InventoryConfiguration = util.clone(params['InventoryConfiguration']);

    if (InventoryConfiguration.OptionalFields) {
        var Field = InventoryConfiguration.OptionalFields || [];
        InventoryConfiguration.OptionalFields = {
            Field: Field
        };
    }

    if (InventoryConfiguration.Destination
        && InventoryConfiguration.Destination.COSBucketDestination
        && InventoryConfiguration.Destination.COSBucketDestination.Encryption
    ) {
        var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
        if (Object.keys(Encryption).indexOf('SSECOS') > -1) {
            Encryption['SSE-COS'] = Encryption['SSECOS'];
            delete Encryption['SSECOS'];
        }
    }

    var xml = util.json2xml({
        InventoryConfiguration: InventoryConfiguration
    });

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:PutBucketInventory',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'inventory',
        qs: {
            id: params['Id']
        },
        headers: headers,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的清单任务信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Id      清单任务的名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketInventory(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:GetBucketInventory',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'inventory',
        qs: {
            id: params['Id']
        }
    }, function (err, data) {
        if (err) return callback(err);

        var InventoryConfiguration = data['InventoryConfiguration'];
        if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
            var Field = InventoryConfiguration.OptionalFields.Field;
            if (!util.isArray(Field)) {
                Field = [Field];
            }
            InventoryConfiguration.OptionalFields = Field;
        }
        if (InventoryConfiguration.Destination
            && InventoryConfiguration.Destination.COSBucketDestination
            && InventoryConfiguration.Destination.COSBucketDestination.Encryption
        ) {
            var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
            if (Object.keys(Encryption).indexOf('SSE-COS') > -1) {
                Encryption['SSECOS'] = Encryption['SSE-COS'];
                delete Encryption['SSE-COS'];
            }
        }

        callback(null, {
            InventoryConfiguration: InventoryConfiguration,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Bucket 的清单任务信息
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {String}  params.ContinuationToken       当 COS 响应体中 IsTruncated 为 true，且 NextContinuationToken 节点中存在参数值时，您可以将这个参数作为 continuation-token 参数值，以获取下一页的清单任务信息，非必须
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回数据
 */
function listBucketInventory(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:ListBucketInventory',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'inventory',
        qs: {
            'continuation-token': params['ContinuationToken']
        }
    }, function (err, data) {
        if (err) return callback(err);
        var ListInventoryConfigurationResult = data['ListInventoryConfigurationResult'];
        var InventoryConfigurations = ListInventoryConfigurationResult.InventoryConfiguration || [];
        InventoryConfigurations = util.isArray(InventoryConfigurations) ? InventoryConfigurations : [InventoryConfigurations];
        delete ListInventoryConfigurationResult['InventoryConfiguration'];
        util.each(InventoryConfigurations, function (InventoryConfiguration) {
            if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
                var Field = InventoryConfiguration.OptionalFields.Field;
                if (!util.isArray(Field)) {
                    Field = [Field];
                }
                InventoryConfiguration.OptionalFields = Field;
            }

            if (InventoryConfiguration.Destination
                && InventoryConfiguration.Destination.COSBucketDestination
                && InventoryConfiguration.Destination.COSBucketDestination.Encryption
            ) {
                var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
                if (Object.keys(Encryption).indexOf('SSE-COS') > -1) {
                    Encryption['SSECOS'] = Encryption['SSE-COS'];
                    delete Encryption['SSE-COS'];
                }
            }
        });
        ListInventoryConfigurationResult.InventoryConfigurations = InventoryConfigurations;
        util.extend(ListInventoryConfigurationResult, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, ListInventoryConfigurationResult);
    });
}

/**
 * 删除 Bucket 的清单任务
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Id      清单任务的名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketInventory(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteBucketInventory',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'inventory',
        qs: {
            id: params['Id']
        }
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/* 全球加速 */
function putBucketAccelerate(params, callback) {

    if (!params['AccelerateConfiguration']) {
        callback({error: 'missing param AccelerateConfiguration'});
        return;
    }

    var configuration = { AccelerateConfiguration: params.AccelerateConfiguration || {} };

    var xml = util.json2xml(configuration);

    var headers = {};
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Interface: 'putBucketAccelerate',
        Action: 'name/cos:PutBucketAccelerate',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'accelerate',
        headers: headers,
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

function getBucketAccelerate(params, callback) {
    submitRequest.call(this, {
        Interface: 'getBucketAccelerate',
        Action: 'name/cos:GetBucketAccelerate',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        action: 'accelerate',
    }, function (err, data) {
        if (!err) {
            !data.AccelerateConfiguration && (data.AccelerateConfiguration = {});
        }
        callback(err, data);
    });
}

// Object 相关

/**
 * 取回对应Object的元数据，Head的权限与Get的权限一致
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Key                 文件名称，必须
 *     @param  {String}  params.IfModifiedSince     当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          为指定 object 的元数据，如果设置了 IfModifiedSince ，且文件未修改，则返回一个对象，NotModified 属性为 true
 *     @return  {Boolean}  data.NotModified         是否在 IfModifiedSince 时间点之后未修改该 object，则为 true
 */
function headObject(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:HeadObject',
        method: 'HEAD',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        VersionId: params.VersionId,
        headers: params.Headers,
    }, function (err, data) {
        if (err) {
            var statusCode = err.statusCode;
            if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
                return callback(null, {
                    NotModified: true,
                    statusCode: statusCode,
                });
            }
            return callback(err);
        }
        data.ETag = util.attr(data.headers, 'etag', '');
        callback(null, data);
    });
}


function listObjectVersions(params, callback) {
    var reqParams = {};
    reqParams['prefix'] = params['Prefix'] || '';
    reqParams['delimiter'] = params['Delimiter'];
    reqParams['key-marker'] = params['KeyMarker'];
    reqParams['version-id-marker'] = params['VersionIdMarker'];
    reqParams['max-keys'] = params['MaxKeys'];
    reqParams['encoding-type'] = params['EncodingType'];

    submitRequest.call(this, {
        Action: 'name/cos:GetBucketObjectVersions',
        ResourceKey: reqParams['prefix'],
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        qs: reqParams,
        action: 'versions',
    }, function (err, data) {
        if (err) return callback(err);
        var ListVersionsResult = data.ListVersionsResult || {};
        var DeleteMarkers = ListVersionsResult.DeleteMarker || [];
        DeleteMarkers = util.isArray(DeleteMarkers) ? DeleteMarkers : [DeleteMarkers];
        var Versions = ListVersionsResult.Version || [];
        Versions = util.isArray(Versions) ? Versions : [Versions];

        var result = util.clone(ListVersionsResult);
        delete result.DeleteMarker;
        delete result.Version;
        util.extend(result, {
            DeleteMarkers: DeleteMarkers,
            Versions: Versions,
            statusCode: data.statusCode,
            headers: data.headers,
        });

        callback(null, result);
    });
}

/**
 * 下载 object
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         文件名称，必须
 *     @param  {WriteStream}  params.Output                 文件写入流，非必须
 *     @param  {String}  params.IfModifiedSince             当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
 *     @param  {String}  params.IfUnmodifiedSince           如果文件修改时间早于或等于指定时间，才返回文件内容。否则返回 412 (precondition failed)，非必须
 *     @param  {String}  params.IfMatch                     当 ETag 与指定的内容一致，才返回文件。否则返回 412 (precondition failed)，非必须
 *     @param  {String}  params.IfNoneMatch                 当 ETag 与指定的内容不一致，才返回文件。否则返回304 (not modified)，非必须
 *     @param  {String}  params.ResponseContentType         设置返回头部中的 Content-Type 参数，非必须
 *     @param  {String}  params.ResponseContentLanguage     设置返回头部中的 Content-Language 参数，非必须
 *     @param  {String}  params.ResponseExpires             设置返回头部中的 Content-Expires 参数，非必须
 *     @param  {String}  params.ResponseCacheControl        设置返回头部中的 Cache-Control 参数，非必须
 *     @param  {String}  params.ResponseContentDisposition  设置返回头部中的 Content-Disposition 参数，非必须
 *     @param  {String}  params.ResponseContentEncoding     设置返回头部中的 Content-Encoding 参数，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @param  {Object}  err                                    请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @param  {Object}  data                                   为对应的 object 数据，包括 body 和 headers
 */
function getObject(params, callback) {
    var reqParams = params.Query || {};
    var reqParamsStr = params.QueryString || '';

    reqParams['response-content-type'] = params['ResponseContentType'];
    reqParams['response-content-language'] = params['ResponseContentLanguage'];
    reqParams['response-expires'] = params['ResponseExpires'];
    reqParams['response-cache-control'] = params['ResponseCacheControl'];
    reqParams['response-content-disposition'] = params['ResponseContentDisposition'];
    reqParams['response-content-encoding'] = params['ResponseContentEncoding'];

    // 如果用户自己传入了 output
    submitRequest.call(this, {
        Action: 'name/cos:GetObject',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        VersionId: params.VersionId,
        headers: params.Headers,
        qs: reqParams,
        qsStr: reqParamsStr,
        rawBody: true,
    }, function (err, data) {
        if (err) {
            var statusCode = err.statusCode;
            if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
                return callback(null, {
                    NotModified: true
                });
            }
            return callback(err);
        }
        callback(null, {
            Body: data.body,
            ETag: util.attr(data.headers, 'etag', ''),
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });

}

/**
 * 上传 object
 * @param  {Object} params                                          参数对象，必须
 *     @param  {String}  params.Bucket                              Bucket名称，必须
 *     @param  {String}  params.Region                              地域名称，必须
 *     @param  {String}  params.Key                                 文件名称，必须
 *     @param  {String}  params.Body                                上传文件的内容，只支持字符串
 *     @param  {String}  params.CacheControl                        RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition                  RFC 2616 中定义的文件名称，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentEncoding                     RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentLength                       RFC 2616 中定义的 HTTP 请求内容长度（字节），必须
 *     @param  {String}  params.ContentType                         RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expect                              当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String}  params.Expires                             RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentSha1                         RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验，非必须
 *     @param  {String}  params.ACL                                 允许用户自定义文件权限，有效值：private | public-read，非必须
 *     @param  {String}  params.GrantRead                           赋予被授权者读的权限，格式 x-cos-grant-read: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantWrite                          赋予被授权者写的权限，格式 x-cos-grant-write: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantFullControl                    赋予被授权者读写权限，格式 x-cos-grant-full-control: uin=" ",uin=" "，非必须
 *     @param  {String}  params.ServerSideEncryption               支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {Function}  params.onProgress                        上传进度回调函数
 * @param  {Function}  callback                                     回调函数，必须
 * @return  {Object}  err                                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                          为对应的 object 数据
 *     @return  {String}  data.ETag                                 为对应上传文件的 ETag 值
 */
function putObject(params, callback) {
    var self = this;
    var FileSize = params.ContentLength;
    var onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress);

    // 特殊处理 Cache-Control、Content-Type，避免代理更改这两个字段导致写入到 Object 属性里
    var headers = params.Headers;
    if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
    if (!headers['Content-Type'] && !headers['content-type']) headers['Content-Type'] = mime.getType(params.Key) || 'application/octet-stream';

    util.getBodyMd5(self.options.UploadCheckContentMd5, params.Body, function (md5) {
        if (md5) headers['Content-MD5'] = util.binaryBase64(md5);
        if (params.ContentLength !== undefined) headers['Content-Length'] = params.ContentLength;
        onProgress(null, true); // 任务状态开始 uploading
        submitRequest.call(self, {
            Action: 'name/cos:PutObject',
            TaskId: params.TaskId,
            method: 'PUT',
            Bucket: params.Bucket,
            Region: params.Region,
            Key: params.Key,
            headers: params.Headers,
            qs: params.Query,
            body: params.Body,
            onProgress: onProgress,
        }, function (err, data) {
            if (err) {
                onProgress(null, true);
                return callback(err);
            }
            onProgress({loaded: FileSize, total: FileSize}, true);
            var url = getUrl({
                ForcePathStyle: self.options.ForcePathStyle,
                protocol: self.options.Protocol,
                domain: self.options.Domain,
                bucket: params.Bucket,
                region: !self.options.UseAccelerate ? params.Region : 'accelerate',
                object: params.Key,
            });
            url = url.substr(url.indexOf('://') + 3);
            data.Location = url;
            data.ETag = util.attr(data.headers, 'etag', '');
            callback(null, data);
        });
    });
}

/**
 * 上传 object
 * @param  {Object} params                                          参数对象，必须
 *     @param  {String}  params.Bucket                              Bucket名称，必须
 *     @param  {String}  params.Region                              地域名称，必须
 *     @param  {String}  params.Key                                 文件名称，必须
 *     @param  {FilePath}  params.FilePath                          要上传的文件路径
 *     @param  {Function}  params.onProgress                        上传进度回调函数
 * @param  {Function}  callback                                     回调函数，必须
 * @return  {Object}  err                                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                          为对应的 object 数据
 *     @return  {String}  data.ETag                                 为对应上传文件的 ETag 值
 */
function postObject(params, callback) {
    var self = this;
    var headers = {};
    var filePath = params.FilePath;
    if (!filePath) {
        callback({error: 'missing param FilePath'});
        return;
    }

    headers['Cache-Control'] = params['CacheControl'];
    headers['Content-Disposition'] = params['ContentDisposition'];
    headers['Content-Encoding'] = params['ContentEncoding'];
    headers['Content-MD5'] = params['ContentMD5'];
    headers['Content-Length'] = params['ContentLength'];
    headers['Content-Type'] = params['ContentType'];
    headers['Expect'] = params['Expect'];
    headers['Expires'] = params['Expires'];
    headers['x-cos-acl'] = params['ACL'];
    headers['x-cos-grant-read'] = params['GrantRead'];
    headers['x-cos-grant-write'] = params['GrantWrite'];
    headers['x-cos-grant-full-control'] = params['GrantFullControl'];
    headers['x-cos-storage-class'] = params['StorageClass'];
    headers['x-cos-mime-limit'] = params['MimeLimit'];
    headers['x-cos-traffic-limit'] = params['TrafficLimit'];
    // SSE-C
    headers['x-cos-server-side-encryption-customer-algorithm'] = params['SSECustomerAlgorithm'];
    headers['x-cos-server-side-encryption-customer-key'] = params['SSECustomerKey'];
    headers['x-cos-server-side-encryption-customer-key-MD5'] = params['SSECustomerKeyMD5'];
    // SSE-COS、SSE-KMS
    headers['x-cos-server-side-encryption'] = params['ServerSideEncryption'];
    headers['x-cos-server-side-encryption-cos-kms-key-id'] = params['SSEKMSKeyId'];
    headers['x-cos-server-side-encryption-context'] = params['SSEContext'];

    // 删除 Content-Length 避免签名错误
    delete headers['Content-Length'];
    delete headers['content-length'];

    for (var key in params) {
        if (key.indexOf('x-cos-meta-') > -1) {
            headers[key] = params[key];
        }
    }

    var onProgress = util.throttleOnProgress.call(self, headers['Content-Length'], params.onProgress);

    submitRequest.call(this, {
        Action: 'name/cos:PostObject',
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: headers,
        qs: params.Query,
        filePath: filePath,
        TaskId: params.TaskId,
        onProgress: onProgress,
    }, function (err, data) {
        onProgress(null, true);
        if (err) return callback(err);
        if (data && data.headers) {
            var headers = data.headers;
            var ETag = headers.etag || headers.Etag || headers.ETag || '';
            var filename = filePath.substr(filePath.lastIndexOf('/') + 1);
            var url = getUrl({
                ForcePathStyle: self.options.ForcePathStyle,
                protocol: self.options.Protocol,
                domain: self.options.Domain,
                bucket: params.Bucket,
                region: params.Region,
                object: params.Key.replace(/\$\{filename\}/g, filename),
                isLocation: true,
            });

            return callback(null, {
                Location: url,
                statusCode: data.statusCode,
                headers: headers,
                ETag: ETag,
            });
        }
        callback(null, data);
    });
}

/**
 * 删除 object
 * @param  {Object}  params                     参数对象，必须
 *     @param  {String}  params.Bucket          Bucket名称，必须
 *     @param  {String}  params.Region          地域名称，必须
 *     @param  {String}  params.Key             object名称，必须
 * @param  {Function}  callback                 回调函数，必须
 * @param  {Object}  err                        请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @param  {Object}  data                       删除操作成功之后返回的数据
 */
function deleteObject(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:DeleteObject',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        VersionId: params.VersionId,
    }, function (err, data) {
        if (err) {
            var statusCode = err.statusCode;
            if (statusCode && statusCode === 204) {
                return callback(null, {statusCode: statusCode});
            } else if (statusCode && statusCode === 404) {
                return callback(null, {BucketNotFound: true, statusCode: statusCode,});
            } else {
                return callback(err);
            }
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 object 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Key                 object名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.AccessControlPolicy  权限列表
 */
function getObjectAcl(params, callback) {

    submitRequest.call(this, {
        Action: 'name/cos:GetObjectACL',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        action: 'acl',
    }, function (err, data) {
        if (err) return callback(err);
        var AccessControlPolicy = data.AccessControlPolicy || {};
        var Owner = AccessControlPolicy.Owner || {};
        var Grant = AccessControlPolicy.AccessControlList && AccessControlPolicy.AccessControlList.Grant || [];
        Grant = util.isArray(Grant) ? Grant : [Grant];
        var result = decodeAcl(AccessControlPolicy);
        if (data.headers && data.headers['x-cos-acl']) {
            result.ACL = data.headers['x-cos-acl'];
        }
        result = util.extend(result, {
            Owner: Owner,
            Grants: Grant,
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

/**
 * 设置 object 的 权限列表
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Key     object名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function putObjectAcl(params, callback) {
    var headers = params.Headers;

    var xml = '';
    if (params['AccessControlPolicy']) {
        var AccessControlPolicy = util.clone(params['AccessControlPolicy'] || {});
        var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
        Grants = util.isArray(Grants) ? Grants : [Grants];
        delete AccessControlPolicy.Grant;
        delete AccessControlPolicy.Grants;
        AccessControlPolicy.AccessControlList = {Grant: Grants};
        xml = util.json2xml({AccessControlPolicy: AccessControlPolicy});

        headers['Content-Type'] = 'application/xml';
        headers['Content-MD5'] = util.binaryBase64(util.md5(xml));
    }

    // Grant Header 去重
    util.each(headers, function (val, key) {
        if (key.indexOf('x-cos-grant-') === 0) {
            headers[key] = uniqGrant(headers[key]);
        }
    });

    submitRequest.call(this, {
        Action: 'name/cos:PutObjectACL',
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        action: 'acl',
        headers: headers,
        body: xml,
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * Options Object请求实现跨域访问的预请求。即发出一个 OPTIONS 请求给服务器以确认是否可以进行跨域操作。
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Key     object名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function optionsObject(params, callback) {

    var headers = params.Headers;
    headers['Origin'] = params['Origin'];
    headers['Access-Control-Request-Method'] = params['AccessControlRequestMethod'];
    headers['Access-Control-Request-Headers'] = params['AccessControlRequestHeaders'];

    submitRequest.call(this, {
        Action: 'name/cos:OptionsObject',
        method: 'OPTIONS',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: headers,
    }, function (err, data) {
        if (err) {
            if (err.statusCode && err.statusCode === 403) {
                return callback(null, {
                    OptionsForbidden: true,
                    statusCode: err.statusCode
                });
            }
            return callback(err);
        }

        var headers = data.headers || {};
        callback(null, {
            AccessControlAllowOrigin: headers['access-control-allow-origin'],
            AccessControlAllowMethods: headers['access-control-allow-methods'],
            AccessControlAllowHeaders: headers['access-control-allow-headers'],
            AccessControlExposeHeaders: headers['access-control-expose-headers'],
            AccessControlMaxAge: headers['access-control-max-age'],
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * @param  {Object}                                     参数列表
 *     @param  {String}  Bucket                         Bucket 名称
 *     @param  {String}  Region                         地域名称
 *     @param  {String}  Key                            文件名称
 *     @param  {String}  CopySource                     源文件URL绝对路径，可以通过versionid子资源指定历史版本
 *     @param  {String}  ACL                            允许用户自定义文件权限。有效值：private，public-read默认值：private。
 *     @param  {String}  GrantRead                      赋予被授权者读的权限，格式 x-cos-grant-read: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  GrantWrite                     赋予被授权者写的权限，格式 x-cos-grant-write: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  GrantFullControl               赋予被授权者读写权限，格式 x-cos-grant-full-control: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  MetadataDirective              是否拷贝元数据，枚举值：Copy, Replaced，默认值Copy。假如标记为Copy，忽略Header中的用户元数据信息直接复制；假如标记为Replaced，按Header信息修改元数据。当目标路径和原路径一致，即用户试图修改元数据时，必须为Replaced
 *     @param  {String}  CopySourceIfModifiedSince      当Object在指定时间后被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-None-Match一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfUnmodifiedSince    当Object在指定时间后未被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-Match一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfMatch              当Object的ETag和给定一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Unmodified-Since一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfNoneMatch          当Object的ETag和给定不一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Modified-Since一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  StorageClass                   存储级别，枚举值：存储级别，枚举值：Standard, Standard_IA，Archive；默认值：Standard
 *     @param  {String}  CacheControl                   指定所有缓存机制在整个请求/响应链中必须服从的指令。
 *     @param  {String}  ContentDisposition             MIME 协议的扩展，MIME 协议指示 MIME 用户代理如何显示附加的文件
 *     @param  {String}  ContentEncoding                HTTP 中用来对「采用何种编码格式传输正文」进行协定的一对头部字段
 *     @param  {String}  ContentLength                  设置响应消息的实体内容的大小，单位为字节
 *     @param  {String}  ContentType                    RFC 2616 中定义的 HTTP 请求内容类型（MIME），例如text/plain
 *     @param  {String}  Expect                         请求的特定的服务器行为
 *     @param  {String}  Expires                        响应过期的日期和时间
 *     @param  {String}  params.ServerSideEncryption   支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {String}  ContentLanguage                指定内容语言
 *     @param  {String}  x-cos-meta-*                   允许用户自定义的头部信息，将作为 Object 元数据返回。大小限制2K。
 */
function putObjectCopy(params, callback) {

    // 特殊处理 Cache-Control
    var headers = params.Headers;
    if (!headers['Cache-Control'] && !!headers['cache-control']) headers['Cache-Control'] = '';

    var CopySource = params.CopySource || '';
    var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);
    if (!m) {
        callback({error: 'CopySource format error'});
        return;
    }

    var SourceBucket = m[1];
    var SourceRegion = m[3];
    var SourceKey = decodeURIComponent(m[4]);

    submitRequest.call(this, {
        Scope: [{
            action: 'name/cos:GetObject',
            bucket: SourceBucket,
            region: SourceRegion,
            prefix: SourceKey,
        }, {
            action: 'name/cos:PutObject',
            bucket: params.Bucket,
            region: params.Region,
            prefix: params.Key,
        }],
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        VersionId: params.VersionId,
        headers: params.Headers,
    }, function (err, data) {
        if (err) return callback(err);
        var result = util.clone(data.CopyObjectResult || {});
        util.extend(result, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

function uploadPartCopy(params, callback) {

    var CopySource = params.CopySource || '';
    var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);
    if (!m) {
        callback({error: 'CopySource format error'});
        return;
    }

    var SourceBucket = m[1];
    var SourceRegion = m[3];
    var SourceKey = decodeURIComponent(m[4]);

    submitRequest.call(this, {
        Scope: [{
            action: 'name/cos:GetObject',
            bucket: SourceBucket,
            region: SourceRegion,
            prefix: SourceKey,
        }, {
            action: 'name/cos:PutObject',
            bucket: params.Bucket,
            region: params.Region,
            prefix: params.Key,
        }],
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        VersionId: params.VersionId,
        qs: {
            partNumber: params['PartNumber'],
            uploadId: params['UploadId'],
        },
        headers: params.Headers,
    }, function (err, data) {
        if (err) return callback(err);
        var result = util.clone(data.CopyPartResult || {});
        util.extend(result, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

function deleteMultipleObject(params, callback) {
    var Objects = params.Objects || [];
    var Quiet = params.Quiet;
    Objects = util.isArray(Objects) ? Objects : [Objects];

    var xml = util.json2xml({Delete: {Object: Objects, Quiet: Quiet || false}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    var Scope = util.map(Objects, function (v) {
        return {
            action: 'name/cos:DeleteObject',
            bucket: params.Bucket,
            region: params.Region,
            prefix: v.Key,
        };
    });

    submitRequest.call(this, {
        Scope: Scope,
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        body: xml,
        action: 'delete',
        headers: headers,
    }, function (err, data) {
        if (err) return callback(err);
        var DeleteResult = data.DeleteResult || {};
        var Deleted = DeleteResult.Deleted || [];
        var Errors = DeleteResult.Error || [];

        Deleted = util.isArray(Deleted) ? Deleted : [Deleted];
        Errors = util.isArray(Errors) ? Errors : [Errors];

        var result = util.clone(DeleteResult);
        util.extend(result, {
            Error: Errors,
            Deleted: Deleted,
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

function restoreObject(params, callback) {
    var headers = params.Headers;
    if (!params['RestoreRequest']) {
        callback({error: 'missing param RestoreRequest'});
        return;
    }

    var RestoreRequest = params.RestoreRequest || {};
    var xml = util.json2xml({RestoreRequest: RestoreRequest});

    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:RestoreObject',
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        VersionId: params.VersionId,
        body: xml,
        action: 'restore',
        headers: headers,
    }, function (err, data) {
        callback(err, data);
    });
}

/**
 * 设置 Object 的标签
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Object名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {Array}   params.TagSet  标签设置，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回数据
 */
function putObjectTagging(params, callback) {

    var Tagging = params['Tagging'] || {};
    var Tags = Tagging.TagSet || Tagging.Tags || params['Tags'] || [];
    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    var xml = util.json2xml({Tagging: {TagSet: {Tag: Tags}}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Interface: 'putObjectTagging',
        Action: 'name/cos:PutObjectTagging',
        method: 'PUT',
        Bucket: params.Bucket,
        Key: params.Key,
        Region: params.Region,
        body: xml,
        action: 'tagging',
        headers: headers,
        VersionId: params.VersionId,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 获取 Object 的标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回数据
 */
function getObjectTagging(params, callback) {

    submitRequest.call(this, {
        Interface: 'getObjectTagging',
        Action: 'name/cos:GetObjectTagging',
        method: 'GET',
        Key: params.Key,
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        action: 'tagging',
        VersionId: params.VersionId,
    }, function (err, data) {
        if (err) {
            if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === 'NoSuchTagSet')) {
                var result = {
                    Tags: [],
                    statusCode: err.statusCode,
                };
                err.headers && (result.headers = err.headers);
                callback(null, result);
            } else {
                callback(err);
            }
            return;
        }
        var Tags = [];
        try {
            Tags = data.Tagging.TagSet.Tag || [];
        } catch (e) {
        }
        Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
        callback(null, {
            Tags: Tags,
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 删除 Object 的 标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Object名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回的数据
 */
function deleteObjectTagging(params, callback) {
    submitRequest.call(this, {
        Interface: 'deleteObjectTagging',
        Action: 'name/cos:DeleteObjectTagging',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        action: 'tagging',
        VersionId: params.VersionId,
    }, function (err, data) {
        if (err && err.statusCode === 204) {
            return callback(null, {statusCode: err.statusCode});
        } else if (err) {
            return callback(err);
        }
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}


// 分块上传


/**
 * 初始化分块上传
 * @param  {Object}  params                                     参数对象，必须
 *     @param  {String}  params.Bucket                          Bucket名称，必须
 *     @param  {String}  params.Region                          地域名称，必须
 *     @param  {String}  params.Key                             object名称，必须
 *     @param  {String}  params.UploadId                        object名称，必须
 *     @param  {String}  params.CacheControl                    RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition              RFC 2616 中定义的文件名称，将作为 Object 元数据保存    ，非必须
 *     @param  {String}  params.ContentEncoding                 RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentType                     RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expires                         RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ACL                             允许用户自定义文件权限，非必须
 *     @param  {String}  params.GrantRead                       赋予被授权者读的权限 ，非必须
 *     @param  {String}  params.GrantWrite                      赋予被授权者写的权限 ，非必须
 *     @param  {String}  params.GrantFullControl                赋予被授权者读写权限 ，非必须
 *     @param  {String}  params.StorageClass                    设置Object的存储级别，枚举值：Standard，Standard_IA，Archive，非必须
 *     @param  {String}  params.ServerSideEncryption           支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 * @param  {Function}  callback                                 回调函数，必须
 * @return  {Object}  err                                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                      返回的数据
 */
function multipartInit(params, callback) {

    var self = this;
    var headers = params.Headers;

    // 特殊处理 Cache-Control、Content-Type
    if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
    if (!headers['Content-Type'] && !headers['content-type']) headers['Content-Type'] = mime.getType(params.Key) || 'application/octet-stream';

    submitRequest.call(self, {
        Action: 'name/cos:InitiateMultipartUpload',
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        action: 'uploads',
        headers: params.Headers,
        qs: params.Query,
    }, function (err, data) {
        if (err) return callback(err);
        data = util.clone(data || {});
        if (data && data.InitiateMultipartUploadResult) {
            return callback(null, util.extend(data.InitiateMultipartUploadResult, {
                statusCode: data.statusCode,
                headers: data.headers,
            }));
        }
        callback(null, data);
    });
}

/**
 * 分块上传
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         object名称，必须
 *     @param  {String}  params.Body                        上传文件对象或字符串
 *     @param  {String} params.ContentLength                RFC 2616 中定义的 HTTP 请求内容长度（字节），非必须
 *     @param  {String} params.Expect                       当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String} params.ServerSideEncryption         支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {String} params.ContentSha1                  RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验值，非必须
 * @param  {Function}  callback                             回调函数，必须
 *     @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}  data                              返回的数据
 *     @return  {Object}  data.ETag                         返回的文件分块 sha1 值
 */
function multipartUpload(params, callback) {

    var self = this;
    util.getFileSize('multipartUpload', params, function () {
        util.getBodyMd5(self.options.UploadCheckContentMd5, params.Body, function (md5) {
            if (md5) params.Headers['Content-MD5'] = util.binaryBase64(md5);
            submitRequest.call(self, {
                Action: 'name/cos:UploadPart',
                TaskId: params.TaskId,
                method: 'PUT',
                Bucket: params.Bucket,
                Region: params.Region,
                Key: params.Key,
                qs: {
                    partNumber: params['PartNumber'],
                    uploadId: params['UploadId'],
                },
                headers: params.Headers,
                onProgress: params.onProgress,
                body: params.Body || null
            }, function (err, data) {
                if (err) return callback(err);
                callback(null, {
                    ETag: util.attr(data.headers, 'etag', {}),
                    statusCode: data.statusCode,
                    headers: data.headers,
                });
            });
        });
    });

}

/**
 * 完成分块上传
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {String}  params.Key                     object名称，必须
 *     @param  {Array}   params.Parts                   分块信息列表，必须
 *     @param  {String}  params.Parts[i].PartNumber     块编号，必须
 *     @param  {String}  params.Parts[i].ETag           分块的 sha1 校验值
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回的数据
 *     @return  {Object}  data.CompleteMultipartUpload  完成分块上传后的文件信息，包括Location, Bucket, Key 和 ETag
 */
function multipartComplete(params, callback) {
    var self = this;

    var UploadId = params.UploadId;

    var Parts = params['Parts'];

    for (var i = 0, len = Parts.length; i < len; i++) {
        if (Parts[i]['ETag'].indexOf('"') === 0) {
            continue;
        }
        Parts[i]['ETag'] = '"' + Parts[i]['ETag'] + '"';
    }

    var xml = util.json2xml({CompleteMultipartUpload: {Part: Parts}});

    var headers = params.Headers;
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));

    submitRequest.call(this, {
        Action: 'name/cos:CompleteMultipartUpload',
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        qs: {
            uploadId: UploadId
        },
        body: xml,
        headers: headers,
    }, function (err, data) {
        if (err) return callback(err);
        var url = getUrl({
            ForcePathStyle: self.options.ForcePathStyle,
            protocol: self.options.Protocol,
            domain: self.options.Domain,
            bucket: params.Bucket,
            region: params.Region,
            object: params.Key,
            isLocation: true,
        });
        var CompleteMultipartUploadResult = data.CompleteMultipartUploadResult || {};
        var result = util.extend(CompleteMultipartUploadResult, {
            Location: url,
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

/**
 * 分块上传任务列表查询
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Delimiter                   定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，定义为Common Prefix，然后列出所有Common Prefix。如果没有Prefix，则从路径起点开始，非必须
 *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
 *     @param  {String}  params.Prefix                      前缀匹配，用来规定返回的文件前缀地址，非必须
 *     @param  {String}  params.MaxUploads                  单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.KeyMarker                   与upload-id-marker一起使用 </Br>当upload-id-marker未被指定时，ObjectName字母顺序大于key-marker的条目将被列出 </Br>当upload-id-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
 *     @param  {String}  params.UploadIdMarker              与key-marker一起使用 </Br>当key-marker未被指定时，upload-id-marker将被忽略 </Br>当key-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                  返回的数据
 *     @return  {Object}  data.ListMultipartUploadsResult   分块上传任务信息
 */
function multipartList(params, callback) {
    var reqParams = {};

    reqParams['delimiter'] = params['Delimiter'];
    reqParams['encoding-type'] = params['EncodingType'];
    reqParams['prefix'] = params['Prefix'] || '';

    reqParams['max-uploads'] = params['MaxUploads'];

    reqParams['key-marker'] = params['KeyMarker'];
    reqParams['upload-id-marker'] = params['UploadIdMarker'];

    reqParams = util.clearKey(reqParams);

    submitRequest.call(this, {
        Action: 'name/cos:ListMultipartUploads',
        ResourceKey: reqParams['prefix'],
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        headers: params.Headers,
        qs: reqParams,
        action: 'uploads',
    }, function (err, data) {
        if (err) return callback(err);

        if (data && data.ListMultipartUploadsResult) {
            var Upload = data.ListMultipartUploadsResult.Upload || [];

            var CommonPrefixes = data.ListMultipartUploadsResult.CommonPrefixes || [];

            CommonPrefixes = util.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];
            Upload = util.isArray(Upload) ? Upload : [Upload];

            data.ListMultipartUploadsResult.Upload = Upload;
            data.ListMultipartUploadsResult.CommonPrefixes = CommonPrefixes;
        }
        var result = util.clone(data.ListMultipartUploadsResult || {});
        util.extend(result, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

/**
 * 上传的分块列表查询
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         object名称，必须
 *     @param  {String}  params.UploadId                    标示本次分块上传的ID，必须
 *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
 *     @param  {String}  params.MaxParts                    单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.PartNumberMarker            默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                  返回的数据
 *     @return  {Object}  data.ListMultipartUploadsResult   分块信息
 */
function multipartListPart(params, callback) {
    var reqParams = {};

    reqParams['uploadId'] = params['UploadId'];
    reqParams['encoding-type'] = params['EncodingType'];
    reqParams['max-parts'] = params['MaxParts'];
    reqParams['part-number-marker'] = params['PartNumberMarker'];

    submitRequest.call(this, {
        Action: 'name/cos:ListParts',
        method: 'GET',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        qs: reqParams,
    }, function (err, data) {
        if (err) return callback(err);
        var ListPartsResult = data.ListPartsResult || {};
        var Part = ListPartsResult.Part || [];
        Part = util.isArray(Part) ? Part : [Part];

        ListPartsResult.Part = Part;
        var result = util.clone(ListPartsResult);
        util.extend(result, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
        callback(null, result);
    });
}

/**
 * 抛弃分块上传
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 *     @param  {String}  params.UploadId    标示本次分块上传的ID，必须
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
function multipartAbort(params, callback) {
    var reqParams = {};

    reqParams['uploadId'] = params['UploadId'];
    submitRequest.call(this, {
        Action: 'name/cos:AbortMultipartUpload',
        method: 'DELETE',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        headers: params.Headers,
        qs: reqParams,
    }, function (err, data) {
        if (err) return callback(err);
        callback(null, {
            statusCode: data.statusCode,
            headers: data.headers,
        });
    });
}

/**
 * 追加上传
 * @param  {Object}  params                                         参数对象，必须
 *     @param  {String}  params.Bucket                              Bucket名称，必须
 *     @param  {String}  params.Region                              地域名称，必须
 *     @param  {String}  params.Key                                 object名称，必须
 *     @param  {String}  params.Body                上传文件的内容，只支持字符串
 *     @param  {Number}  params.Position                            追加操作的起始点，单位为字节，必须
 *     @param  {String}  params.CacheControl                        RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition                  RFC 2616 中定义的文件名称，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentEncoding                     RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentLength                       RFC 2616 中定义的 HTTP 请求内容长度（字节），必须
 *     @param  {String}  params.ContentType                         RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expect                              当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String}  params.Expires                             RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ACL                                 允许用户自定义文件权限，有效值：private | public-read，非必须
 *     @param  {String}  params.GrantRead                           赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantReadAcp                        赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantWriteAcp                       赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantFullControl                    赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.StorageClass                        设置对象的存储级别，枚举值：STANDARD、STANDARD_IA、ARCHIVE，默认值：STANDARD，非必须
 *     @param  {String}  params.x-cos-meta-*                        允许用户自定义的头部信息，将作为对象的元数据保存。大小限制2KB，非必须
 *     @param  {String}  params.ContentSha1                         RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验，非必须
 *     @param  {String}  params.ServerSideEncryption                支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 * @param  {Function}  callback                                     回调函数，必须
 *     @return  {Object}    err                                     请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data                                    返回的数据
 */
 function appendObject(params, callback) {
    submitRequest.call(this, {
        Action: 'name/cos:AppendObject',
        method: 'POST',
        Bucket: params.Bucket,
        Region: params.Region,
        action: 'append',
        Key: params.Key,
        body: params.Body,
        qs: {
          position: params.Position
        },
        headers: params.Headers,
    }, function (err, data) {
          if (err) return callback(err);
          callback(null, data);
    });
}


/**
 * cos 内置请求
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
 function request(params, callback) {
    submitRequest.call(this, {
        method: params.Method,
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        action: params.Action,
        headers: params.Headers,
        qs: params.Query,
        body: params.Body,
        Url: params.Url,
        rawBody: params.RawBody,
    }, function (err, data) {
        if (err) return callback(err);
        if (data && data.body) {
            data.Body = data.body;
            delete data.body;
        }
        callback(err, data);
    });
}

/**
 * 获取签名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Method  请求方法，必须
 *     @param  {String}  params.Key     object名称，必须
 *     @param  {String}  params.Expires 名超时时间，单位秒，可选
 * @return  {String}  data              返回签名字符串
 */
function getAuth(params) {
    var self = this;
    return util.getAuth({
        SecretId: params.SecretId || this.options.SecretId || '',
        SecretKey: params.SecretKey || this.options.SecretKey || '',
        Bucket: params.Bucket,
        Region: params.Region,
        Method: params.Method,
        Key: params.Key,
        Query: params.Query,
        Headers: params.Headers,
        Expires: params.Expires,
        SystemClockOffset: self.options.SystemClockOffset,
    });
}

/**
 * 获取文件下载链接
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 *     @param  {String}  params.Method      请求的方法，可选
 *     @param  {String}  params.Expires     签名超时时间，单位秒，可选
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
function getObjectUrl(params, callback) {
    var self = this;
    var useAccelerate = params.UseAccelerate === undefined ? self.options.UseAccelerate : params.UseAccelerate;
    var url = getUrl({
        ForcePathStyle: self.options.ForcePathStyle,
        protocol: params.Protocol || self.options.Protocol,
        domain: params.Domain || self.options.Domain,
        bucket: params.Bucket,
        region: useAccelerate ? 'accelerate' : params.Region,
        object: params.Key,
    });

    var queryParamsStr = '';
    if(params.Query){
        queryParamsStr += util.obj2str(params.Query);
    }
    if(params.QueryString){
        queryParamsStr += (queryParamsStr ? '&' : '') + params.QueryString;
    }

    var syncUrl = url;
    if (params.Sign !== undefined && !params.Sign) {
        queryParamsStr && (syncUrl += '?' + queryParamsStr);
        callback(null, {Url: syncUrl});
        return syncUrl;
    }

    // 签名加上 Host，避免跨桶访问
    var SignHost = getSignHost.call(this, {Bucket: params.Bucket, Region: params.Region, UseAccelerate: params.UseAccelerate, Url: url});
    var AuthData = getAuthorizationAsync.call(this, {
        Action: ((params.Method || '').toUpperCase() === 'PUT' ? 'name/cos:PutObject' : 'name/cos:GetObject'),
        Bucket: params.Bucket || '',
        Region: params.Region || '',
        Method: params.Method || 'get',
        Key: params.Key,
        Expires: params.Expires,
        Headers: params.Headers,
        Query: params.Query,
        SignHost: SignHost,
        ForceSignHost: params.ForceSignHost === false ? false : self.options.ForceSignHost, // getObjectUrl支持传参ForceSignHost
    }, function (err, AuthData) {
        if (!callback) return;
        if (err) {
            callback(err);
            return;
        }

        // 兼容万象url qUrlParamList需要再encode一次
        var replaceUrlParamList = function(url) {
            var urlParams = url.match(/q-url-param-list.*?(?=&)/g)[0];
            var encodedParams = 'q-url-param-list=' + encodeURIComponent(urlParams.replace(/q-url-param-list=/, '')).toLowerCase();
            var reg = new RegExp(urlParams, 'g');
            var replacedUrl = url.replace(reg, encodedParams);
            return replacedUrl;
        }

        var signUrl = url;
        signUrl += '?' + (AuthData.Authorization.indexOf('q-signature') > -1 ?
            replaceUrlParamList(AuthData.Authorization) : 'sign=' + encodeURIComponent(AuthData.Authorization));
        AuthData.SecurityToken && (signUrl += '&x-cos-security-token=' + AuthData.SecurityToken);
        AuthData.ClientIP && (signUrl += '&clientIP=' + AuthData.ClientIP);
        AuthData.ClientUA && (signUrl += '&clientUA=' + AuthData.ClientUA);
        AuthData.Token && (signUrl += '&token=' + AuthData.Token);
        queryParamsStr && (signUrl += '&' + queryParamsStr);
        setTimeout(function () {
            callback(null, {Url: signUrl});
        });
    });

    if (AuthData) {
        syncUrl += '?' + AuthData.Authorization +
            (AuthData.SecurityToken ? '&x-cos-security-token=' + AuthData.SecurityToken : '');
        queryParamsStr && (syncUrl += '&' + queryParamsStr);
    } else {
        queryParamsStr && (syncUrl += '?' + queryParamsStr);
    }
    return syncUrl;
}


/**
 * 私有方法
 */
function decodeAcl(AccessControlPolicy) {
    var result = {
        GrantFullControl: [],
        GrantWrite: [],
        GrantRead: [],
        GrantReadAcp: [],
        GrantWriteAcp: [],
        ACL: '',
    };
    var GrantMap = {
        'FULL_CONTROL': 'GrantFullControl',
        'WRITE': 'GrantWrite',
        'READ': 'GrantRead',
        'READ_ACP': 'GrantReadAcp',
        'WRITE_ACP': 'GrantWriteAcp',
    };
    var AccessControlList = AccessControlPolicy && AccessControlPolicy.AccessControlList || {};
    var Grant = AccessControlList.Grant;
    if (Grant) {
        Grant = util.isArray(Grant) ? Grant : [Grant];
    }
    var PublicAcl = {READ: 0, WRITE: 0, FULL_CONTROL: 0};
    Grant && Grant.length && util.each(Grant, function (item) {
        if (item.Grantee.ID === 'qcs::cam::anyone:anyone' || item.Grantee.URI === 'http://cam.qcloud.com/groups/global/AllUsers') {
            PublicAcl[item.Permission] = 1;
        } else if (item.Grantee.ID !== AccessControlPolicy.Owner.ID) {
            result[GrantMap[item.Permission]].push('id="' + item.Grantee.ID + '"');
        }
    });
    if (PublicAcl.FULL_CONTROL || (PublicAcl.WRITE && PublicAcl.READ)) {
        result.ACL = 'public-read-write';
    } else if (PublicAcl.READ) {
        result.ACL = 'public-read';
    } else {
        result.ACL = 'private';
    }
    util.each(GrantMap, function (item) {
        result[item] = uniqGrant(result[item].join(','));
    });
    return result;
}

// Grant 去重
function uniqGrant(str) {
    var arr = str.split(',');
    var exist = {};
    var i, item;
    for (i = 0; i < arr.length; ) {
        item = arr[i].trim();
        if (exist[item]) {
            arr.splice(i, 1);
        } else {
            exist[item] = true;
            arr[i] = item;
            i++;
        }
    }
    return arr.join(',');
}

// 生成操作 url
function getUrl(params) {
    var longBucket = params.bucket;
    var shortBucket = longBucket.substr(0, longBucket.lastIndexOf('-'));
    var appId = longBucket.substr(longBucket.lastIndexOf('-') + 1);
    var domain = params.domain;
    var region = params.region;
    var object = params.object;
    var protocol = 'https:';
    if (!domain) {
        if (['cn-south', 'cn-south-2', 'cn-north', 'cn-east', 'cn-southwest', 'sg'].indexOf(region) > -1) {
            domain = '{Region}.myqcloud.com';
        } else {
            domain = 'cos.{Region}.myqcloud.com';
        }
        if (!params.ForcePathStyle) {
            domain = '{Bucket}.' + domain;
        }
    }
    domain = domain.replace(/\{\{AppId\}\}/ig, appId)
        .replace(/\{\{Bucket\}\}/ig, shortBucket)
        .replace(/\{\{Region\}\}/ig, region)
        .replace(/\{\{.*?\}\}/ig, '');
    domain = domain.replace(/\{AppId\}/ig, appId)
        .replace(/\{BucketName\}/ig, shortBucket)
        .replace(/\{Bucket\}/ig, longBucket)
        .replace(/\{Region\}/ig, region)
        .replace(/\{.*?\}/ig, '');
    if (!/^[a-zA-Z]+:\/\//.test(domain)) {
        domain = protocol + '//' + domain;
    }

    // 去掉域名最后的斜杆
    if (domain.slice(-1) === '/') {
        domain = domain.slice(0, -1);
    }
    var url = domain;

    if (params.ForcePathStyle) {
        url += '/' + longBucket;
    }
    url += '/';
    if (object) {
        url += util.camSafeUrlEncode(object).replace(/%2F/g, '/');
    }

    if (params.isLocation) {
        url = url.replace(/^https?:\/\//, '');
    }
    return url;
}

var getSignHost = function (opt) {
    if (!opt.Bucket || !opt.Region) return '';
    var useAccelerate = opt.UseAccelerate === undefined ? this.options.UseAccelerate : opt.UseAccelerate;
    var url = opt.Url || getUrl({
        ForcePathStyle: this.options.ForcePathStyle,
        protocol: this.options.Protocol,
        domain: this.options.Domain,
        bucket: opt.Bucket,
        region: useAccelerate ? 'accelerate' : opt.Region,
    });
    var urlHost = url.replace(/^https?:\/\/([^/]+)(\/.*)?$/, '$1');
    var standardHostReg = new RegExp('^([a-z\\d-]+-\\d+\\.)?(cos|cosv6|ci|pic)\\.([a-z\\d-]+)\\.myqcloud\\.com$');
    if (standardHostReg.test(urlHost)) return urlHost;
    return '';
}

// 异步获取签名
function getAuthorizationAsync(params, callback) {
    var headers = util.clone(params.Headers);
    var headerHost = '';
    util.each(headers, function (v, k) {
        (v === '' || ['content-type', 'cache-control'].indexOf(k.toLowerCase()) > -1) && delete headers[k];
        if (k.toLowerCase() === 'host') headerHost = v;
    });

    // ForceSignHost明确传入false才不加入host签名
    var forceSignHost = params.ForceSignHost === false ? false : true;
    // Host 加入签名计算
    if (!headerHost && params.SignHost && forceSignHost) headers.Host = params.SignHost;

    // 获取凭证的回调，避免用户 callback 多次
    var cbDone = false;
    var cb = function (err, AuthData) {
        if (cbDone) return;
        cbDone = true;
        if (AuthData && AuthData.XCosSecurityToken && !AuthData.SecurityToken) {
            AuthData = util.clone(AuthData);
            AuthData.SecurityToken = AuthData.XCosSecurityToken;
            delete AuthData.XCosSecurityToken;
        }
        callback && callback(err, AuthData);
    };

    var self = this;
    var Bucket = params.Bucket || '';
    var Region = params.Region || '';

    // PathName
    var KeyName = params.Action === 'name/cos:PostObject' || !params.Key ? '' : params.Key;
    if (self.options.ForcePathStyle && Bucket) {
        KeyName = Bucket + '/' + KeyName;
    }
    var Pathname = '/' + KeyName;

    // Action、ResourceKey
    var StsData = {};
    var Scope = params.Scope;
    if (!Scope) {
        var Action = params.Action || '';
        var ResourceKey = params.ResourceKey || params.Key || '';
        Scope = params.Scope || [{
            action: Action,
            bucket: Bucket,
            region: Region,
            prefix: ResourceKey,
        }];
    }
    var ScopeKey  = util.md5(JSON.stringify(Scope));

    // STS
    self._StsCache = self._StsCache ||[];
    (function () {
        var i, AuthData;
        for (i = self._StsCache.length - 1; i >= 0; i--) {
            AuthData = self._StsCache[i];
            var compareTime = Math.round(util.getSkewTime(self.options.SystemClockOffset) / 1000) + 30;
            if (AuthData.StartTime && compareTime < AuthData.StartTime || compareTime >= AuthData.ExpiredTime) {
                self._StsCache.splice(i, 1);
                continue;
            }
            if (!AuthData.ScopeLimit || AuthData.ScopeLimit && AuthData.ScopeKey === ScopeKey) {
                StsData = AuthData;
                break;
            }
        }
    })();

    var calcAuthByTmpKey = function () {
        var KeyTime = '';
        if (StsData.StartTime && params.Expires) {
            KeyTime = StsData.StartTime + ';' + (StsData.StartTime + params.Expires * 1);
        } else if (StsData.StartTime && StsData.ExpiredTime) {
            KeyTime = StsData.StartTime + ';' + StsData.ExpiredTime;
        }
        var Authorization = util.getAuth({
            SecretId: StsData.TmpSecretId,
            SecretKey: StsData.TmpSecretKey,
            Method: params.Method,
            Pathname: Pathname,
            Query: params.Query,
            Headers: headers,
            Expires: params.Expires,
            SystemClockOffset: self.options.SystemClockOffset,
            KeyTime: KeyTime,
            ForceSignHost: forceSignHost,
        });
        var AuthData = {
            Authorization: Authorization,
            SecurityToken: StsData.SecurityToken || StsData.XCosSecurityToken || '',
            Token: StsData.Token || '',
            ClientIP: StsData.ClientIP || '',
            ClientUA: StsData.ClientUA || '',
        };
        cb(null, AuthData);
    };

    var checkAuthError = function (AuthData) {
      if (AuthData.Authorization) {
          // 检查签名格式
          var formatAllow = false;
          var auth = AuthData.Authorization;
          if (auth) {
              if (auth.indexOf(' ') > -1) {
                  formatAllow = false;
              } else if (auth.indexOf('q-sign-algorithm=') > -1 &&
                  auth.indexOf('q-ak=') > -1 &&
                  auth.indexOf('q-sign-time=') > -1 &&
                  auth.indexOf('q-key-time=') > -1 &&
                  auth.indexOf('q-url-param-list=') > -1) {
                  formatAllow = true;
              } else {
                  try {
                      auth = atob(auth);
                      if (auth.indexOf('a=') > -1 &&
                          auth.indexOf('k=') > -1 &&
                          auth.indexOf('t=') > -1 &&
                          auth.indexOf('r=') > -1 &&
                          auth.indexOf('b=') > -1) {
                          formatAllow = true;
                      }
                  } catch (e) {}
              }
          }
          if (!formatAllow) return util.error(new Error('getAuthorization callback params format error'));
      } else {
          if (!AuthData.TmpSecretId) return util.error(new Error('getAuthorization callback params missing "TmpSecretId"'));
          if (!AuthData.TmpSecretKey) return util.error(new Error('getAuthorization callback params missing "TmpSecretKey"'));
          if (!AuthData.SecurityToken && !AuthData.XCosSecurityToken) return util.error(new Error('getAuthorization callback params missing "SecurityToken"'));
          if (!AuthData.ExpiredTime) return util.error(new Error('getAuthorization callback params missing "ExpiredTime"'));
          if (AuthData.ExpiredTime && AuthData.ExpiredTime.toString().length !== 10) return util.error(new Error('getAuthorization callback params "ExpiredTime" should be 10 digits'));
          if (AuthData.StartTime && AuthData.StartTime.toString().length !== 10) return util.error(new Error('getAuthorization callback params "StartTime" should be 10 StartTime'));
      }
      return false;
  };

    // 先判断是否有临时密钥
    if (StsData.ExpiredTime && StsData.ExpiredTime - (util.getSkewTime(self.options.SystemClockOffset) / 1000) > 60) { // 如果缓存的临时密钥有效，并还有超过60秒有效期就直接使用
        calcAuthByTmpKey();
    } else if (self.options.getAuthorization) { // 外部计算签名或获取临时密钥
        self.options.getAuthorization.call(self, {
            Bucket: Bucket,
            Region: Region,
            Method: params.Method,
            Key: KeyName,
            Pathname: Pathname,
            Query: params.Query,
            Headers: headers,
            Scope: Scope,
            SystemClockOffset: self.options.SystemClockOffset,
            ForceSignHost: forceSignHost,
        }, function (AuthData) {
            if (typeof AuthData === 'string') {
                AuthData = {Authorization: AuthData};
            }
            var AuthError = checkAuthError(AuthData);
            if (AuthError) return cb(AuthError);
            if (AuthData.Authorization) {
                cb(null, AuthData);
            } else {
                StsData = AuthData || {};
                StsData.Scope = Scope;
                StsData.ScopeKey = ScopeKey;
                self._StsCache.push(StsData);
                calcAuthByTmpKey();
            }
        });
    } else if (self.options.getSTS) { // 外部获取临时密钥
        self.options.getSTS.call(self, {
            Bucket: Bucket,
            Region: Region,
        }, function (data) {
            StsData = data || {};
            StsData.Scope = Scope;
            StsData.ScopeKey = ScopeKey;
            if (!StsData.TmpSecretId) StsData.TmpSecretId = StsData.SecretId;
            if (!StsData.TmpSecretKey) StsData.TmpSecretKey = StsData.SecretKey;
            var AuthError = checkAuthError(StsData);
            if (AuthError) return cb(AuthError);
            self._StsCache.push(StsData);
            calcAuthByTmpKey();
        });
    } else { // 内部计算获取签名
        return (function () {
            var Authorization = util.getAuth({
                SecretId: params.SecretId || self.options.SecretId,
                SecretKey: params.SecretKey || self.options.SecretKey,
                Method: params.Method,
                Pathname: Pathname,
                Query: params.Query,
                Headers: headers,
                Expires: params.Expires,
                SystemClockOffset: self.options.SystemClockOffset,
                ForceSignHost: forceSignHost,
            });
            var AuthData = {
                Authorization: Authorization,
                SecurityToken: self.options.SecurityToken || self.options.XCosSecurityToken,
            };
            cb(null, AuthData);
            return AuthData;
        })();
    }
    return '';
}

// 调整时间偏差
function allowRetry(err) {
    var allowRetry = false;
    var isTimeError = false;
    var serverDate = (err.headers && (err.headers.date || err.headers.Date)) || (err.error && err.error.ServerTime);
    try {
        var errorCode = err.error.Code;
        var errorMessage = err.error.Message;
        if (errorCode === 'RequestTimeTooSkewed' ||
            (errorCode === 'AccessDenied' && errorMessage === 'Request has expired')) {
            isTimeError = true;
        }
    } catch (e) {
    }
    if (err) {
        if (isTimeError && serverDate) {
            var serverTime = Date.parse(serverDate);
            if (this.options.CorrectClockSkew && Math.abs(util.getSkewTime(this.options.SystemClockOffset) - serverTime) >= 30000) {
                console.error('error: Local time is too skewed.');
                this.options.SystemClockOffset = serverTime - Date.now();
                allowRetry = true;
            }
        } else if (Math.floor(err.statusCode / 100) === 5) {
            allowRetry = true;
        }
    }
    return allowRetry;
}

// 获取签名并发起请求
function submitRequest(params, callback) {
    var self = this;

    // 处理 headers
    !params.headers && (params.headers = {});

    // 处理 query
    !params.qs && (params.qs = {});
    params.VersionId && (params.qs.versionId = params.VersionId);
    params.qs = util.clearKey(params.qs);

    // 清理 undefined 和 null 字段
    params.headers && (params.headers = util.clearKey(params.headers));
    params.qs && (params.qs = util.clearKey(params.qs));

    var Query = util.clone(params.qs);
    params.action && (Query[params.action] = '');

    var paramsUrl = params.url || params.Url;
    var SignHost = params.SignHost || getSignHost.call(this, {Bucket: params.Bucket, Region: params.Region, Url: paramsUrl});
    var next = function (tryTimes) {
        var oldClockOffset = self.options.SystemClockOffset;
        getAuthorizationAsync.call(self, {
            Bucket: params.Bucket || '',
            Region: params.Region || '',
            Method: params.method,
            Key: params.Key,
            Query: Query,
            Headers: params.headers,
            SignHost: SignHost,
            Action: params.Action,
            ResourceKey: params.ResourceKey,
            Scope: params.Scope,
            ForceSignHost: self.options.ForceSignHost,
        }, function (err, AuthData) {
            if (err) {
                callback(err);
                return;
            }
            params.AuthData = AuthData;
            _submitRequest.call(self, params, function (err, data) {
                if (err && tryTimes < 2 && (oldClockOffset !== self.options.SystemClockOffset || allowRetry.call(self, err))) {
                    if (params.headers) {
                        delete params.headers.Authorization;
                        delete params.headers['token'];
                        delete params.headers['clientIP'];
                        delete params.headers['clientUA'];
                        delete params.headers['x-cos-security-token'];
                    }
                    next(tryTimes + 1);
                } else {
                    callback(err, data);
                }
            });
        });
    };
    next(1);

}

// 发起请求
function _submitRequest(params, callback) {
    var self = this;
    var TaskId = params.TaskId;
    if (TaskId && !self._isRunningTask(TaskId)) return;

    var bucket = params.Bucket;
    var region = params.Region;
    var object = params.Key;
    var method = params.method || 'GET';
    var url = params.url || params.Url;
    var body = params.body;
    var json = params.json;
    var rawBody = params.rawBody;

    // url
    if (self.options.UseAccelerate) {
        region = 'accelerate';
    }
    url = url || getUrl({
        ForcePathStyle: self.options.ForcePathStyle,
        protocol: self.options.Protocol,
        domain: self.options.Domain,
        bucket: bucket,
        region: region,
        object: object,
    });
    if (params.action) {
        url = url + '?' + params.action;
    }
    if (params.qsStr) {
        if(url.indexOf('?') > -1){
          url = url + '&' + params.qsStr;
        }else{
          url = url + '?' + params.qsStr;
        }
    }

    var opt = {
        method: method,
        url: url,
        headers: params.headers,
        qs: params.qs,
        filePath: params.filePath,
        body: body,
        json: json,
    };

    // 兼容ci接口
    var token = 'x-cos-security-token';
    if (util.isCIHost(url)) {
        token = 'x-ci-security-token';
    }

    // 获取签名
    opt.headers.Authorization = params.AuthData.Authorization;
    params.AuthData.Token && (opt.headers['token'] = params.AuthData.Token);
    params.AuthData.ClientIP && (opt.headers['clientIP'] = params.AuthData.ClientIP);
    params.AuthData.ClientUA && (opt.headers['clientUA'] = params.AuthData.ClientUA);
    params.AuthData.SecurityToken && (opt.headers[token] = params.AuthData.SecurityToken);

    // 清理 undefined 和 null 字段
    opt.headers && (opt.headers = util.clearKey(opt.headers));
    opt = util.clearKey(opt);

    // progress
    if (params.onProgress && typeof params.onProgress === 'function') {
        opt.onProgress = function (e) {
            if (TaskId && !self._isRunningTask(TaskId)) return;
            var loaded = e ? e.loaded : 0;
            params.onProgress({loaded: loaded, total: e.total});
        };
    }
    if (this.options.Timeout) {
        opt.timeout = this.options.Timeout;
    }

    self.options.ForcePathStyle && (opt.pathStyle = self.options.ForcePathStyle);
    self.emit('before-send', opt);
    var sender = REQUEST(opt, function (err, response, body) {
        if (err === 'abort') return;

        // 返回内容添加 状态码 和 headers
        var hasReturned;
        var cb = function (err, data) {
            TaskId && self.off('inner-kill-task', killTask);
            if (hasReturned) return;
            hasReturned = true;
            var attrs = {};
            response && response.statusCode && (attrs.statusCode = response.statusCode);
            response && response.headers && (attrs.headers = response.headers);

            if (err) {
                err = util.extend(err || {}, attrs);
                callback(err, null);
            } else {
                data = util.extend(data || {}, attrs);
                callback(null, data);
            }
            sender = null;
        };

        // 请求错误，发生网络错误
        if (err) {
            cb({error: err});
            return;
        }

        // 不对 body 进行转换，body 直接挂载返回
        var jsonRes;
        if (rawBody) {
            jsonRes = {};
            jsonRes.body = body;
        } else {
            try {
                jsonRes = body && body.indexOf('<') > -1 && body.indexOf('>') > -1 && util.xml2json(body) || {};
            } catch (e) {
                jsonRes = body || {};
            }
        }

        // 请求返回码不为 200
        var statusCode = response.statusCode;
        var statusSuccess = Math.floor(statusCode / 100) === 2; // 200 202 204 206
        if (!statusSuccess) {
            cb({error: jsonRes.Error || jsonRes});
            return;
        }

        if (jsonRes.Error) {
            cb({error: jsonRes.Error});
            return;
        }
        cb(null, jsonRes);
    });

    // kill task
    var killTask = function (data) {
        if (data.TaskId === TaskId) {
            sender && sender.abort && sender.abort();
            self.off('inner-kill-task', killTask);
        }
    };
    TaskId && self.on('inner-kill-task', killTask);

}


var API_MAP = {
    // Bucket 相关方法
    getService: getService,                      // Bucket
    putBucket: putBucket,
    headBucket: headBucket,                      // Bucket
    getBucket: getBucket,
    deleteBucket: deleteBucket,
    putBucketAcl: putBucketAcl,                  // BucketACL
    getBucketAcl: getBucketAcl,
    putBucketCors: putBucketCors,                // BucketCors
    getBucketCors: getBucketCors,
    deleteBucketCors: deleteBucketCors,
    getBucketLocation: getBucketLocation,        // BucketLocation
    getBucketPolicy: getBucketPolicy,            // BucketPolicy
    putBucketPolicy: putBucketPolicy,
    deleteBucketPolicy: deleteBucketPolicy,
    putBucketTagging: putBucketTagging,          // BucketTagging
    getBucketTagging: getBucketTagging,
    deleteBucketTagging: deleteBucketTagging,
    putBucketLifecycle: putBucketLifecycle,      // BucketLifecycle
    getBucketLifecycle: getBucketLifecycle,
    deleteBucketLifecycle: deleteBucketLifecycle,
    putBucketVersioning: putBucketVersioning,    // BucketVersioning
    getBucketVersioning: getBucketVersioning,
    putBucketReplication: putBucketReplication,  // BucketReplication
    getBucketReplication: getBucketReplication,
    deleteBucketReplication: deleteBucketReplication,
    putBucketWebsite: putBucketWebsite,          // BucketWebsite
    getBucketWebsite: getBucketWebsite,
    deleteBucketWebsite: deleteBucketWebsite,
    putBucketReferer: putBucketReferer,          // BucketReferer
    getBucketReferer: getBucketReferer,
    putBucketDomain: putBucketDomain,            // BucketDomain
    getBucketDomain: getBucketDomain,
    deleteBucketDomain: deleteBucketDomain,
    putBucketOrigin: putBucketOrigin,            // BucketOrigin
    getBucketOrigin: getBucketOrigin,
    deleteBucketOrigin: deleteBucketOrigin,
    putBucketLogging: putBucketLogging,             // BucketLogging
    getBucketLogging: getBucketLogging,
    putBucketInventory: putBucketInventory,         // BucketInventory
    getBucketInventory: getBucketInventory,
    listBucketInventory: listBucketInventory,
    deleteBucketInventory: deleteBucketInventory,
    putBucketAccelerate: putBucketAccelerate,
    getBucketAccelerate: getBucketAccelerate,

    // Object 相关方法
    getObject: getObject,
    headObject: headObject,
    listObjectVersions: listObjectVersions,
    putObject: putObject,
    postObject: postObject,
    deleteObject: deleteObject,
    getObjectAcl: getObjectAcl,
    putObjectAcl: putObjectAcl,
    optionsObject: optionsObject,
    putObjectCopy: putObjectCopy,
    deleteMultipleObject: deleteMultipleObject,
    restoreObject: restoreObject,
    putObjectTagging: putObjectTagging,
    getObjectTagging: getObjectTagging,
    deleteObjectTagging: deleteObjectTagging,
    appendObject: appendObject,

    // 分块上传相关方法
    uploadPartCopy: uploadPartCopy,
    multipartInit: multipartInit,
    multipartUpload: multipartUpload,
    multipartComplete: multipartComplete,
    multipartList: multipartList,
    multipartListPart: multipartListPart,
    multipartAbort: multipartAbort,

    // 工具方法
    request: request,
    getObjectUrl: getObjectUrl,
    getAuth: getAuth,
};

module.exports.init = function (COS, task) {
    task.transferToTaskMethod(API_MAP, 'postObject');
    task.transferToTaskMethod(API_MAP, 'putObject');
    util.each(API_MAP, function (fn, apiName) {
        COS.prototype[apiName] = util.apiWrapper(apiName, fn);
    });
};
