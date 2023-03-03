
const pkg = require('../package.json');
const BeaconAction = require('../lib/beacon_mp.min');
let beacon = null;

const getBeacon = (delay) => {
  if (!beacon) {
    beacon = new BeaconAction({
      appkey: "0AND0VEVB24UBGDU",
      versionCode: pkg.version,
      channelID: 'mp_sdk', //渠道,选填
      openid: 'openid', // 用户id, 选填
      unionid: 'unid',//用户unionid , 类似idfv,选填
      strictMode: false,//严苛模式开关, 打开严苛模式会主动抛出异常, 上线请务必关闭!!!
      delay, // 普通事件延迟上报时间(单位毫秒), 默认1000(1秒),选填
      sessionDuration: 60 * 1000,// session变更的时间间隔, 一个用户持续30分钟(默认值)没有任何上报则算另一次 session,每变更一次session上报一次启动事件(rqd_applaunched),使用毫秒(ms),最小值30秒,选填
    });
  }
  return beacon;
};

const utils = {
    // 生成uid 每个链路对应唯一一条uid
    getUid() {
      var S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    // 获取网络类型
    getNetType() {
      return new Promise(resolve => {
        if (wx.canIUse('getNetworkType')) {
          try {
            wx.getNetworkType({
              success (res) {
                resolve(res.networkType);
              }
            });
          } catch (e) {
            resolve('can_not_get_network_type');
          }
        } else {
          resolve('can_not_get_network_type');
        }
      });
    },
    // 获取系统信息
    getSystemInfo() {
      const defaultInfo = {
        devicePlatform: '',
        wxVersion: '',
        wxSystem: '',
        wxSdkVersion: '',
      };
      return new Promise(resolve => {
        if (wx.canIUse('getSystemInfo')) {
          try {
            wx.getSystemInfo({
              success(res) {
                const { platform, version, system, SDKVersion } = res;
                Object.assign(defaultInfo, {
                  devicePlatform: platform,
                  wxVersion: version,
                  wxSystem: system,
                  wxSdkVersion: SDKVersion,
                });
                resolve(defaultInfo);
              }
            })
          } catch (e) {
            resolve({
              devicePlatform: 'can_not_get_system_info',
              wxVersion: 'can_not_get_system_info',
              wxSystem: 'can_not_get_system_info',
              wxSdkVersion: 'can_not_get_system_info',
            });
          }
        } else {
          resolve({
            devicePlatform: 'can_not_get_system_info',
            wxVersion: 'can_not_get_system_info',
            wxSystem: 'can_not_get_system_info',
            wxSdkVersion: 'can_not_get_system_info',
          });
        }
      });
    },
};

// 设备信息，只取一次值
const deviceInfo = {
  // ↓上报项
  devicePlatform: '',  // ios/anroid/windows/mac/devtools
  wxVersion: '',
  wxSystem: '',
  wxSdkVersion: '',
};
utils.getSystemInfo().then(res => {
  Object.assign(deviceInfo, res);
});


// 分块上传原子方法
const sliceUploadMethods = ['multipartInit', 'multipartUpload', 'multipartComplete', 'multipartList', 'multipartListPart', 'multipartAbort'];

const uploadApi = ['putObject', 'postObject', 'appendObject', 'sliceUploadFile', 'uploadFile', 'uploadFiles'].concat(sliceUploadMethods);
const downloadApi = ['getObject'];

function getEventCode(apiName) {
  if (uploadApi.includes(apiName)) {
    return 'cos_upload';
  }
  if (downloadApi.includes(apiName)) {
    return 'cos_download';
  }
  return 'base_service';
}

// 上报参数驼峰改下划线
function camel2underline(key) {
  return key.replace(/([A-Z])/g,"_$1").toLowerCase();
}
function formatParams(params) {
  const formattedParams = {};
  const allReporterKeys = ['tracePlatform', 'cossdkVersion', 'region', 'networkType', 'host', 'accelerate', 'requestPath', 'size', 'httpMd5',
  'httpSign', 'httpFull', 'name', 'result', 'tookTime', 'errorNode', 'errorCode', 'errorMessage', 'errorRequestId', 'errorStatusCode', 'errorServiceName',
  'errorType', 'traceId', 'bucket', 'appid', 'partNumber', 'retryTimes', 'reqUrl', 'customId', 'fullError',
  'devicePlatform', 'wxVersion', 'wxSystem', 'wxSdkVersion'];
  const successKeys = ['tracePlatform', 'cossdkVersion', 'region', 'bucket', 'appid', 'networkType', 'host', 'accelerate', 'requestPath',
    'partNumber', 'size', 'name', 'result', 'tookTime', 'errorRequestId', 'retryTimes', 'reqUrl', 'customId',
    'devicePlatform', 'wxVersion', 'wxSystem', 'wxSdkVersion'];
  // 需要上报的参数字段
  const reporterKeys = params.result === 'Success' ? successKeys : allReporterKeys;
  for (let key in params) {
    if (!reporterKeys.includes(key)) continue;
    const formattedKey = camel2underline(key);
    formattedParams[formattedKey] = params[key];
  }
  return formattedParams;
}

// 链路追踪器
class Tracker {
  constructor(opt) {
    const { parent, traceId, bucket, region, apiName, fileKey, fileSize, accelerate, customId, delay, deepTracker } = opt;
    const appid = bucket && bucket.substr(bucket.lastIndexOf('-') + 1) || '';
    this.parent = parent;
    this.deepTracker = deepTracker;
    // 上报用到的字段
    this.params = {
      // 通用字段
      cossdkVersion: pkg.version,
      region,
      networkType: '',
      host: '',
      accelerate: accelerate ? 'Y' : 'N',
      requestPath: fileKey || '',
      size: fileSize || -1,
      httpMd5: 0, // MD5耗时
      httpSign: 0, // 计算签名耗时
      httpFull: 0, // http请求耗时
      name: apiName || '',
      result: '', // sdk api调用结果Success、Fail
      tookTime: 0, // 总耗时
      errorNode: '',
      errorCode: '',
      errorMessage: '',
      errorRequestId: '',
      errorStatusCode: 0,
      errorServiceName: '',

      // 小程序补充字段
      tracePlatform: 'cos-wx-sdk-v5', // 上报平台=小程序
      traceId: traceId || utils.getUid(), // 每条上报唯一标识
      bucket,
      appid,
      partNumber: 0, // 分块上传编号
      retryTimes: 0, // sdk内部发起的请求重试
      reqUrl: '', // 请求url
      customId: customId || '', // 业务id
      devicePlatform: deviceInfo.devicePlatform,
      wxVersion: deviceInfo.wxVersion,
      wxSystem: deviceInfo.wxSystem,
      wxSdkVersion: deviceInfo.wxSdkVersion,

      md5StartTime: 0, // md5计算开始时间
      md5EndTime: 0, // md5计算结束时间
      signStartTime: 0, // 计算签名开始时间
      signEndTime: 0, // 计算签名结束时间
      httpStartTime: 0, // 发起网络请求开始时间
      httpEndTime: 0, // 网路请求结束时间
      startTime: new Date().getTime(), // sdk api调用起始时间，不是纯网络耗时
      endTime: 0, //  sdk api调用结束时间，不是纯网络耗时
    };
    this.beacon = getBeacon(delay);
  }

  // 格式化sdk回调
  async formatResult(err, data) {
    const now = new Date().getTime();
    const tookTime = now - this.params.startTime;
    const networkType = await utils.getNetType();
    const errorCode = err ? err?.error?.Code : '';
    const errorMessage = err ? err?.error?.Message : '';
    const errorStatusCode = err ? err?.statusCode : data.statusCode;
    const errorServiceName = err ? err?.error?.Resource : '';
    const requestId = err ? (err?.headers && err?.headers['x-cos-request-id']) : (data?.headers && data?.headers['x-cos-request-id']);
    const errorType = err ? (requestId ? 'Server' : 'Client'): '';
    Object.assign(this.params, {
      tookTime,
      networkType,
      httpMd5: this.params.md5EndTime - this.params.md5StartTime,
      httpSign: this.params.signEndTime - this.params.signStartTime,
      httpFull: this.params.httpEndTime - this.params.httpStartTime,
      result: err ? 'Fail' : 'Success',
      errorType,
      errorCode,
      errorStatusCode,
      errorMessage,
      errorServiceName,
      errorRequestId: requestId,
    });
    if (err && (!errorCode || !errorMessage)) {
      // 暂存全量err一段时间 观察是否所有err格式都可被解析
      this.params.fullError = err ? JSON.stringify(err) : '';
    }
    if (this.params.name === 'getObject') {
      this.params.size = data ? (data.headers && data.headers['content-length']) : -1;
    }
    if (this.params.reqUrl) {
      try {
        const exec = /^http(s)?:\/\/(.*?)\//.exec(this.params.reqUrl);
        this.params.host = exec[2];
      } catch (e) {
        this.params.host = this.params.reqUrl;
      }
    }
    this.sendEvents();
  }

  // 设置当前链路的参数
  setParams(params) {
    Object.assign(this.params, params);
  }

  // 使用灯塔延时上报
  sendEvents() {
    // DeepTracker模式下才会上报分块上传内部细节
    if (sliceUploadMethods.includes(this.params.name) && !this.deepTracker) {
      return;
    }
    const eventCode = getEventCode(this.params.name);
    const formattedParams = formatParams(this.params);
    console.log(eventCode, formattedParams);
    if (this.params.delay === 0) {
      // 实时上报
      this.beacon.onDirectUserAction(eventCode, formattedParams);
    } else {
      // 周期性上报
      this.beacon.onUserAction(eventCode, formattedParams);
    }
    // 上报结束即销毁
    this.destroy();
  }

  // 生成子实例，与父所属一个链路，可用于分块上传内部流程上报单个分块操作
  generateSubTracker(subParams) {
    Object.assign(subParams, {
      parent: this,
      deepTracker: this.deepTracker,
      traceId: this.params.traceId,
      bucket: this.params.bucket,
      region: this.params.region,
      fileKey: this.params.requestPath,
      customId: this.params.customId,
      delay: this.params.delay,
    });
    return new Tracker(subParams);
  }

  // 链路结束后销毁实例
  destroy() {
    this.beacon = null;
    this.params = {};
  }
}

module.exports = Tracker;