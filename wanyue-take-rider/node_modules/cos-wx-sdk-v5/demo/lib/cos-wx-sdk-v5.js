(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["COS"] = factory();
	else
		root["COS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/tianfeng/Documents/项目/sdk/cos-wx-sdk-v5/demo/lib";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var COS = __webpack_require__(/*! ./src/cos */ "./src/cos.js");

module.exports = COS;

/***/ }),

/***/ "./lib/base64.js":
/*!***********************!*\
  !*** ./lib/base64.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
var Base64 = function (global) {
  global = global || {};
  'use strict'; // existing version for noConflict()


  var _Base64 = global.Base64;
  var version = "2.1.9"; // if node.js, we use Buffer

  var buffer; // constants

  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var b64tab = function (bin) {
    var t = {};

    for (var i = 0, l = bin.length; i < l; i++) {
      t[bin.charAt(i)] = i;
    }

    return t;
  }(b64chars);

  var fromCharCode = String.fromCharCode; // encoder stuff

  var cb_utob = function cb_utob(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
      return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    }
  };

  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

  var utob = function utob(u) {
    return u.replace(re_utob, cb_utob);
  };

  var cb_encode = function cb_encode(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
        chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
    return chars.join('');
  };

  var btoa = global.btoa ? function (b) {
    return global.btoa(b);
  } : function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };

  var _encode = buffer ? function (u) {
    return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
  } : function (u) {
    return btoa(utob(u));
  };

  var encode = function encode(u, urisafe) {
    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
  };

  var encodeURI = function encodeURI(u) {
    return encode(u, true);
  }; // decoder stuff


  var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');

  var cb_btou = function cb_btou(cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
            offset = cp - 0x10000;
        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);

      case 3:
        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

      default:
        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  };

  var btou = function btou(b) {
    return b.replace(re_btou, cb_btou);
  };

  var cb_decode = function cb_decode(cccc) {
    var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };

  var atob = global.atob ? function (a) {
    return global.atob(a);
  } : function (a) {
    return a.replace(/[\s\S]{1,4}/g, cb_decode);
  };

  var _decode = buffer ? function (a) {
    return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
  } : function (a) {
    return btou(atob(a));
  };

  var decode = function decode(a) {
    return _decode(String(a).replace(/[-_]/g, function (m0) {
      return m0 == '-' ? '+' : '/';
    }).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };

  var noConflict = function noConflict() {
    var Base64 = global.Base64;
    global.Base64 = _Base64;
    return Base64;
  }; // export Base64


  var Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    noConflict: noConflict
  };
  return Base64;
}();

module.exports = Base64;

/***/ }),

/***/ "./lib/beacon_mp.min.js":
/*!******************************!*\
  !*** ./lib/beacon_mp.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! For license information please see beacon_mp.min.js.LICENSE.txt */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 6);
  }([function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.BEACON_ATTA_REQUEST_URL = e.BEACON_ATTA_TOKEN = e.BEACON_ATTA_ID = e.BEACON_CONFIG_HTTPS_URL = e.BEACON_CONFIG_REQUEST_TIME = e.BEACON_CONFIG = e.BEACON_SENDING_IDS_KEY = e.BEACON_NORMAL_LOG_ID_KEY = e.BEACON_DRIECT_LOG_ID_KEY = e.BEACON_LASE_REPORT_TIME_KEY = e.BEACON_DEVICE_ID_KEY = e.BEACON_STORE_PREFIX = e.BEACON_LOG_ID_KEY = e.BEACON_IS_REALTIME_KEY = e.BEACON_DELAY_DEFAULT = e.BEACON_HTTPS_URL = e.BEACON_HTTP_URL = void 0, e.BEACON_HTTP_URL = "http://oth.eve.mdt.qq.com:8080/analytics/v2_upload", e.BEACON_HTTPS_URL = "https://otheve.beacon.qq.com/analytics/v2_upload", e.BEACON_DELAY_DEFAULT = 3e3, e.BEACON_IS_REALTIME_KEY = "A99", e.BEACON_LOG_ID_KEY = "A100", e.BEACON_STORE_PREFIX = "__BEACON_", e.BEACON_DEVICE_ID_KEY = "__BEACON_deviceId", e.BEACON_LASE_REPORT_TIME_KEY = "last_report_time", e.BEACON_DRIECT_LOG_ID_KEY = "direct_log_id", e.BEACON_NORMAL_LOG_ID_KEY = "normal_log_id", e.BEACON_SENDING_IDS_KEY = "sending_event_ids", e.BEACON_CONFIG = "beacon_config", e.BEACON_CONFIG_REQUEST_TIME = "beacon_config_request_time", e.BEACON_CONFIG_HTTPS_URL = "https://oth.str.beacon.qq.com/trpc.beacon.configserver.BeaconConfigService/QueryConfig", e.BEACON_ATTA_ID = "00400014144", e.BEACON_ATTA_TOKEN = "6478159937", e.BEACON_ATTA_REQUEST_URL = "https://h.trace.qq.com/kv";
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getEventId = e.replaceSymbol = e.replace = e.assert = void 0;
    var r = n(0),
        o = n(9);

    function i(t) {
      if ("string" != typeof t) return t;

      try {
        return t.replace(new RegExp("\\|", "g"), "%7C").replace(new RegExp("\\&", "g"), "%26").replace(new RegExp("\\=", "g"), "%3D").replace(new RegExp("\\+", "g"), "%2B");
      } catch (t) {
        return "";
      }
    }

    Object.defineProperty(e, "EventEmiter", {
      enumerable: !0,
      get: function get() {
        return o.EventEmiter;
      }
    }), e.assert = function (t, e) {
      if (!t) throw e instanceof Error ? e : new Error(e);
    }, e.replace = function (t, e) {
      for (var n = {}, r = 0, o = Object.keys(t); r < o.length; r++) {
        var s = o[r],
            a = t[s];
        if ("string" == typeof a) n[i(s)] = i(a);else {
          if (e) throw new Error("value mast be string  !!!!");
          n[i(String(s))] = i(String(a));
        }
      }

      return n;
    }, e.replaceSymbol = i, e.getEventId = function (t) {
      return String(t[r.BEACON_IS_REALTIME_KEY]) + String(t[r.BEACON_LOG_ID_KEY]);
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.createPipeline = void 0;

    var r = function r() {};

    e.createPipeline = function (t) {
      if (!t || !t.reduce || !t.length) throw new TypeError("createPipeline 方法需要传入至少有一个 pipe 的数组");
      return 1 === t.length ? function (e, n) {
        t[0](e, n || r);
      } : t.reduce(function (t, e) {
        return function (n, o) {
          return void 0 === o && (o = r), t(n, function (t) {
            return null == e ? void 0 : e(t, o);
          });
        };
      });
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = n(0),
        o = function () {
      function t(t, e, n, o) {
        this.requestParams = {}, this.network = o, this.requestParams.attaid = r.BEACON_ATTA_ID, this.requestParams.token = r.BEACON_ATTA_TOKEN, this.requestParams.product_id = t.appkey, this.requestParams.platform = n, this.requestParams.uin = e.deviceId, this.requestParams.model = "", this.requestParams.os = n, this.requestParams.app_version = t.appVersion, this.requestParams.sdk_version = e.sdkVersion, this.requestParams.error_stack = "";
      }

      return t.prototype.reportError = function (t, e) {
        this.requestParams._dc = Math.random(), this.requestParams.error_msg = e, this.requestParams.error_code = t, this.network.get(r.BEACON_ATTA_REQUEST_URL, {
          params: this.requestParams
        });
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Config = void 0;

    var r = function r() {};

    e.Config = r;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = n(0),
        o = function () {
      function t(t, e, n, o) {
        this.strategy = {
          isEventUpOnOff: !0,
          httpsUploadUrl: r.BEACON_HTTPS_URL,
          requestInterval: 30,
          blacklist: [],
          samplelist: []
        }, this.realSample = {}, this.appkey = "", this.appkey = t.appkey, this.storage = n;

        try {
          var i = JSON.parse(this.storage.getItem(r.BEACON_CONFIG));
          i && this.processData(i);
        } catch (t) {}

        this.needRequestConfig() && this.requestConfig(t.appVersion, e, o);
      }

      return t.prototype.requestConfig = function (t, e, n) {
        var o = this;
        this.storage.setItem(r.BEACON_CONFIG_REQUEST_TIME, Date.now().toString()), n.post(r.BEACON_CONFIG_HTTPS_URL, {
          platformId: "undefined" == typeof wx ? "3" : "4",
          mainAppKey: this.appkey,
          appVersion: t,
          sdkVersion: e.sdkVersion,
          osVersion: e.userAgent,
          model: "",
          packageName: "",
          params: {
            A3: e.deviceId
          }
        }).then(function (t) {
          if (0 == t.data.ret) try {
            var e = JSON.parse(t.data.beaconConfig);
            e && (o.processData(e), o.storage.setItem(r.BEACON_CONFIG, t.data.beaconConfig));
          } catch (t) {} else o.processData(null), o.storage.setItem(r.BEACON_CONFIG, "");
        })["catch"](function (t) {});
      }, t.prototype.processData = function (t) {
        var e, n, r, o, i;
        this.strategy.isEventUpOnOff = null !== (e = null == t ? void 0 : t.isEventUpOnOff) && void 0 !== e ? e : this.strategy.isEventUpOnOff, this.strategy.httpsUploadUrl = null !== (n = null == t ? void 0 : t.httpsUploadUrl) && void 0 !== n ? n : this.strategy.httpsUploadUrl, this.strategy.requestInterval = null !== (r = null == t ? void 0 : t.requestInterval) && void 0 !== r ? r : this.strategy.requestInterval, this.strategy.blacklist = null !== (o = null == t ? void 0 : t.blacklist) && void 0 !== o ? o : this.strategy.blacklist, this.strategy.samplelist = null !== (i = null == t ? void 0 : t.samplelist) && void 0 !== i ? i : this.strategy.samplelist;

        for (var s = 0, a = this.strategy.samplelist; s < a.length; s++) {
          var c = a[s].split(",");
          2 == c.length && (this.realSample[c[0]] = c[1]);
        }
      }, t.prototype.needRequestConfig = function () {
        var t = Number(this.storage.getItem(r.BEACON_CONFIG_REQUEST_TIME));
        return Date.now() - t > 60 * this.strategy.requestInterval * 1e3;
      }, t.prototype.getUploadUrl = function () {
        return this.strategy.httpsUploadUrl + "?appkey=" + this.appkey;
      }, t.prototype.isBlackEvent = function (t) {
        return -1 != this.strategy.blacklist.indexOf(t);
      }, t.prototype.isEventUpOnOff = function () {
        return this.strategy.isEventUpOnOff;
      }, t.prototype.isSampleEvent = function (t) {
        return !!Object.prototype.hasOwnProperty.call(this.realSample, t) && this.realSample[t] < Math.floor(Math.random() * Math.floor(1e4));
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    var _r,
        o = this && this.__extends || (_r = function r(t, e) {
      return (_r = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    }),
        i = this && this.__assign || function () {
      return (i = Object.assign || function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) {
          for (var o in e = arguments[n]) {
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    },
        s = this && this.__importDefault || function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.WeappOpts = void 0;

    var a = s(n(7)),
        c = s(n(3)),
        u = n(0),
        p = n(1),
        f = n(4),
        l = s(n(5)),
        d = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return o(e, t), e;
    }(f.Config);

    e.WeappOpts = d;

    var _ = wx || qq,
        h = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n.send = function (t, e, r) {
          if (!n.config.appkey) throw new Error("please call init before");
          n.network.post(n.strategy.getUploadUrl(), t.data).then(function (r) {
            100 == r.data.result ? n.delayTime = 1e3 * r.data.delayTime : n.delayTime = 0, e && e(t.data), n.cleanEvents(t.data.events);
          })["catch"](function (e) {
            var o = t.data.events;
            n.errorReport.reportError(e.code ? e.code.toString() : "600", e.message), r && r(t.data), n.concatEvents(o);
          });
        }, n.network = new g(), n.storage = new y(e.appkey), n.initCommonInfo(e, n), n.errorReport = new c["default"](n.config, n.commonInfo, "weapp", n.network), n.strategy = new l["default"](n.config, n.commonInfo, n.storage, n.network), n.storage.setItem(u.BEACON_SENDING_IDS_KEY, JSON.stringify([])), n.onDirectUserAction("rqd_weapp_init", {}), setTimeout(function () {
          return n.lifeCycle.emit("init");
        }, 0), n.initDelayTime = e.delay ? e.delay : 2e3, n.cycleSend(n.initDelayTime), n;
      }

      return o(e, t), e.prototype.initCommonInfo = function (t, e) {
        _.getNetworkType({
          success: function success(t) {
            e.storage.setItem("nt", t.networkType);
          }
        }), this.commonInfo = {
          deviceId: this.storage.createDeviceId(),
          language: "",
          query: "",
          userAgent: "",
          pixel: "",
          channelID: t.channelID ? String(t.channelID) : "",
          openid: t.openid ? String(t.openid) : "",
          unid: t.unionid ? String(t.unionid) : "",
          sdkVersion: "4.2.6-weapp"
        }, this.config.appVersion = t.versionCode ? String(t.versionCode) : "", this.config.strictMode = t.strictMode;
      }, e.prototype.cycleSend = function (t) {
        var e = this;
        setTimeout(function () {
          e.realSend(e.getEvents()), e.cycleSend(0 == e.delayTime ? e.initDelayTime : e.delayTime);
        }, t);
      }, e.prototype.onReport = function (t, e, n) {
        var r = [],
            o = "4.2.6-weapp_" + (n ? u.BEACON_DRIECT_LOG_ID_KEY : u.BEACON_NORMAL_LOG_ID_KEY),
            s = Number(this.storage.getItem(o));
        s = s || 1, e = i(i({}, e), {
          A99: n ? "Y" : "N",
          A100: String(s),
          A72: this.commonInfo.sdkVersion
        }), s++, this.storage.setItem(o, String(s)), r.push({
          eventCode: t,
          eventTime: Date.now().toString(),
          mapValue: p.replace(e, this.config.strictMode)
        }), n && 0 == this.delayTime ? this.realSend(r) : this.concatEvents(r);
      }, e.prototype.realSend = function (t) {
        var e, n;

        if (0 != t.length) {
          var r = this.getSystemInfo(),
              o = {
            appVersion: this.config.appVersion ? p.replaceSymbol(this.config.appVersion) : "",
            sdkVersion: "4.2.6-weapp",
            sdkId: "weapp",
            mainAppKey: this.config.appkey,
            platformId: 4,
            common: p.replace(i(i({}, this.additionalParams), {
              env: "undefined" == typeof qq ? "wechat" : "qq",
              A2: this.commonInfo.deviceId,
              A8: String(this.commonInfo.openid),
              A9: this.getSystemInfo().brand,
              A10: encodeURIComponent(r.model),
              A12: r.language,
              A23: this.commonInfo.channelID,
              A33: this.getNetworkType(),
              A50: String(this.commonInfo.unid),
              A95: r.version,
              A102: null === (n = null === (e = getCurrentPages()) || void 0 === e ? void 0 : e.pop()) || void 0 === n ? void 0 : n.route,
              A114: encodeURIComponent(r.system),
              A115: encodeURIComponent(r.platform),
              A116: r.windowWidth + "*" + r.windowHeight + "*" + r.pixelRatio,
              A117: this.getUserInfo(),
              A118: this.getLocation()
            }), !1),
            events: t
          };

          this._normalLogPipeline(o);
        }
      }, e.prototype.setUserInfo = function (t) {
        this.storage.setItem("ui", JSON.stringify(t.userInfo));
      }, e.prototype.setLocation = function (t) {
        this.storage.setItem("lt", JSON.stringify(t));
      }, e.prototype.getSystemInfo = function () {
        return _.getSystemInfoSync();
      }, e.prototype.getNetworkType = function () {
        return this.storage.getItem("nt");
      }, e.prototype.getUserInfo = function () {
        return this.storage.getItem("ui");
      }, e.prototype.getLocation = function () {
        return this.storage.getItem("lt");
      }, e.prototype.concatEvents = function (t) {
        var e = this.getLocalEvents();
        e = e || {};

        for (var n = 0, r = t; n < r.length; n++) {
          var o = r[n],
              i = p.getEventId(o.mapValue);
          this.removeSendingId(i), e[i] = o;
        }

        this.setLocalEvents(e);
      }, e.prototype.getEvents = function () {
        var t = [],
            e = [],
            n = this.getLocalEvents();
        if (!n) return t;

        try {
          e = JSON.parse(this.storage.getItem(u.BEACON_SENDING_IDS_KEY));
        } catch (t) {}

        for (var r = 0, o = Object.getOwnPropertyNames(n); r < o.length; r++) {
          var i = o[r],
              s = n[i];
          -1 == e.indexOf(i) && (t.push(s), e.push(i));
        }

        return this.storage.setItem(u.BEACON_SENDING_IDS_KEY, JSON.stringify(e)), t;
      }, e.prototype.cleanEvents = function (t) {
        for (var e = this.getLocalEvents(), n = 0, r = t; n < r.length; n++) {
          var o = r[n],
              i = p.getEventId(o.mapValue);
          this.removeSendingId(i), delete e[i];
        }

        this.setLocalEvents(e);
      }, e.prototype.setLocalEvents = function (t) {
        try {
          this.storage.setItem("BEACON_EVENT", JSON.stringify(t));
        } catch (t) {}
      }, e.prototype.getLocalEvents = function () {
        try {
          return JSON.parse(this.storage.getItem("BEACON_EVENT"));
        } catch (t) {
          return {};
        }
      }, e;
    }(a["default"]);

    e["default"] = h;

    var g = function () {
      function t() {}

      return t.prototype.get = function (t, e) {
        return new Promise(function (n, r) {
          _.request({
            method: "GET",
            data: null == e ? void 0 : e.params,
            url: t,
            success: function success(t) {
              n(t);
            },
            fail: function fail(t) {
              r(t);
            }
          });
        });
      }, t.prototype.post = function (t, e, n) {
        var r = this;
        return new Promise(function (o, i) {
          _.request({
            method: "POST",
            url: t,
            data: e,
            success: function success(t) {
              var e = {
                data: t.data,
                status: t.statusCode,
                statusText: "",
                headers: t.header,
                config: n,
                request: r
              };
              o(e);
            },
            fail: function fail(t) {
              var e = {
                message: t.errMsg,
                code: "600",
                request: r
              };
              i(e);
            }
          });
        });
      }, t;
    }(),
        y = function () {
      function t(t) {
        this.appkey = t;
      }

      return t.prototype.getItem = function (t) {
        try {
          return _.getStorageSync(this.getStoreKey(t));
        } catch (t) {
          return "";
        }
      }, t.prototype.removeItem = function (t) {
        try {
          _.removeStorageSync(this.getStoreKey(t));
        } catch (t) {}
      }, t.prototype.setItem = function (t, e) {
        try {
          _.setStorageSync(this.getStoreKey(t), e);
        } catch (t) {}
      }, t.prototype.createDeviceId = function () {
        var t = _.getStorageSync("beacon_u");

        return t && "" != t || (t = this.getRandom(36), _.setStorageSync("beacon_u", t)), t;
      }, t.prototype.getRandom = function (t) {
        return (1e6 * Date.now() + Math.floor(1e6 * Math.random())).toString(t) || "";
      }, t.prototype.getStoreKey = function (t) {
        return "beaconV2__" + this.appkey + "_" + t;
      }, t;
    }();
  }, function (t, e, n) {
    "use strict";

    var r = this && this.__createBinding || (Object.create ? function (t, e, n, r) {
      void 0 === r && (r = n), Object.defineProperty(t, r, {
        enumerable: !0,
        get: function get() {
          return e[n];
        }
      });
    } : function (t, e, n, r) {
      void 0 === r && (r = n), t[r] = e[n];
    }),
        o = this && this.__exportStar || function (t, e) {
      for (var n in t) {
        "default" === n || e.hasOwnProperty(n) || r(e, t, n);
      }
    },
        i = this && this.__importDefault || function (t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = i(n(8));
    e["default"] = s["default"], o(n(10), e), o(n(2), e), o(n(11), e), o(n(1), e);
  }, function (t, e, n) {
    "use strict";

    var r = this && this.__assign || function () {
      return (r = Object.assign || function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) {
          for (var o in e = arguments[n]) {
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = n(1),
        i = n(2),
        s = n(1),
        a = n(0),
        c = function () {
      function t(t) {
        var e = this;
        this.lifeCycle = new o.EventEmiter(), this.uploadJobQueue = [], this.additionalParams = {}, this.delayTime = 0, this._normalLogPipeline = i.createPipeline([function (t) {
          e.send({
            url: e.strategy.getUploadUrl(),
            data: t,
            method: "post",
            contentType: "application/json;charset=UTF-8"
          }, function () {
            var n = e.config.onReportSuccess;
            "function" == typeof n && n(JSON.stringify(t.events));
          }, function () {
            var n = e.config.onReportFail;
            "function" == typeof n && n(JSON.stringify(t.events));
          });
        }]), s.assert(Boolean(t.appkey), "appkey must be initial"), this.config = r({}, t);
      }

      return t.prototype.onUserAction = function (t, e) {
        this.preReport(t, e, !1);
      }, t.prototype.onDirectUserAction = function (t, e) {
        this.preReport(t, e, !0);
      }, t.prototype.preReport = function (t, e, n) {
        t ? this.strategy.isEventUpOnOff() && (this.strategy.isBlackEvent(t) || this.strategy.isSampleEvent(t) || this.onReport(t, e, n)) : this.errorReport.reportError("602", " no eventCode");
      }, t.prototype.addAdditionalParams = function (t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
          var r = n[e];
          this.additionalParams[r] = t[r];
        }
      }, t.prototype.setChannelId = function (t) {
        this.commonInfo.channelID = String(t);
      }, t.prototype.setOpenId = function (t) {
        this.commonInfo.openid = String(t);
      }, t.prototype.setUnionid = function (t) {
        this.commonInfo.unid = String(t);
      }, t.prototype.getDeviceId = function () {
        return this.commonInfo.deviceId;
      }, t.prototype.getCommonInfo = function () {
        return this.commonInfo;
      }, t.prototype.removeSendingId = function (t) {
        var e = JSON.parse(this.storage.getItem(a.BEACON_SENDING_IDS_KEY)),
            n = e.indexOf(t);
        -1 != n && (e.splice(n, 1), this.storage.setItem(a.BEACON_SENDING_IDS_KEY, JSON.stringify(e)));
      }, t;
    }();

    e["default"] = c;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.EventEmiter = void 0;

    var r = function () {
      function t() {
        var t = this;
        this.emit = function (e, n) {
          if (t) {
            var r,
                o = t.__EventsList[e];

            if (null == o ? void 0 : o.length) {
              o = o.slice();

              for (var i = 0; i < o.length; i++) {
                r = o[i];

                try {
                  var s = r.callback.apply(t, [n]);
                  if (1 === r.type && t.remove(e, r.callback), !1 === s) break;
                } catch (t) {
                  throw t;
                }
              }
            }

            return t;
          }
        }, this.__EventsList = {};
      }

      return t.prototype.indexOf = function (t, e) {
        for (var n = 0; n < t.length; n++) {
          if (t[n].callback === e) return n;
        }

        return -1;
      }, t.prototype.on = function (t, e, n) {
        if (void 0 === n && (n = 0), this) {
          var r = this.__EventsList[t];

          if (r || (r = this.__EventsList[t] = []), -1 === this.indexOf(r, e)) {
            var o = {
              name: t,
              type: n || 0,
              callback: e
            };
            return r.push(o), this;
          }

          return this;
        }
      }, t.prototype.one = function (t, e) {
        this.on(t, e, 1);
      }, t.prototype.remove = function (t, e) {
        if (this) {
          var n = this.__EventsList[t];
          if (!n) return null;

          if (!e) {
            try {
              delete this.__EventsList[t];
            } catch (t) {}

            return null;
          }

          if (n.length) {
            var r = this.indexOf(n, e);
            n.splice(r, 1);
          }

          return this;
        }
      }, t;
    }();

    e.EventEmiter = r;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, function (t, e, n) {
    "use strict";

    var r = this && this.__createBinding || (Object.create ? function (t, e, n, r) {
      void 0 === r && (r = n), Object.defineProperty(t, r, {
        enumerable: !0,
        get: function get() {
          return e[n];
        }
      });
    } : function (t, e, n, r) {
      void 0 === r && (r = n), t[r] = e[n];
    }),
        o = this && this.__exportStar || function (t, e) {
      for (var n in t) {
        "default" === n || e.hasOwnProperty(n) || r(e, t, n);
      }
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), o(n(3), e), o(n(4), e), o(n(5), e);
  }])["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/crypto.js":
/*!***********************!*\
  !*** ./lib/crypto.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 CryptoJS v3.1.2
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
var CryptoJS = CryptoJS || function (g, l) {
  var e = {},
      d = e.lib = {},
      m = function m() {},
      k = d.Base = {
    extend: function extend(a) {
      m.prototype = this;
      var c = new m();
      a && c.mixIn(a);
      c.hasOwnProperty("init") || (c.init = function () {
        c.$super.init.apply(this, arguments);
      });
      c.init.prototype = c;
      c.$super = this;
      return c;
    },
    create: function create() {
      var a = this.extend();
      a.init.apply(a, arguments);
      return a;
    },
    init: function init() {},
    mixIn: function mixIn(a) {
      for (var c in a) {
        a.hasOwnProperty(c) && (this[c] = a[c]);
      }

      a.hasOwnProperty("toString") && (this.toString = a.toString);
    },
    clone: function clone() {
      return this.init.prototype.extend(this);
    }
  },
      p = d.WordArray = k.extend({
    init: function init(a, c) {
      a = this.words = a || [];
      this.sigBytes = c != l ? c : 4 * a.length;
    },
    toString: function toString(a) {
      return (a || n).stringify(this);
    },
    concat: function concat(a) {
      var c = this.words,
          q = a.words,
          f = this.sigBytes;
      a = a.sigBytes;
      this.clamp();
      if (f % 4) for (var b = 0; b < a; b++) {
        c[f + b >>> 2] |= (q[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((f + b) % 4);
      } else if (65535 < q.length) for (b = 0; b < a; b += 4) {
        c[f + b >>> 2] = q[b >>> 2];
      } else c.push.apply(c, q);
      this.sigBytes += a;
      return this;
    },
    clamp: function clamp() {
      var a = this.words,
          c = this.sigBytes;
      a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
      a.length = g.ceil(c / 4);
    },
    clone: function clone() {
      var a = k.clone.call(this);
      a.words = this.words.slice(0);
      return a;
    },
    random: function random(a) {
      for (var c = [], b = 0; b < a; b += 4) {
        c.push(4294967296 * g.random() | 0);
      }

      return new p.init(c, a);
    }
  }),
      b = e.enc = {},
      n = b.Hex = {
    stringify: function stringify(a) {
      var c = a.words;
      a = a.sigBytes;

      for (var b = [], f = 0; f < a; f++) {
        var d = c[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
        b.push((d >>> 4).toString(16));
        b.push((d & 15).toString(16));
      }

      return b.join("");
    },
    parse: function parse(a) {
      for (var c = a.length, b = [], f = 0; f < c; f += 2) {
        b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << 24 - 4 * (f % 8);
      }

      return new p.init(b, c / 2);
    }
  },
      j = b.Latin1 = {
    stringify: function stringify(a) {
      var c = a.words;
      a = a.sigBytes;

      for (var b = [], f = 0; f < a; f++) {
        b.push(String.fromCharCode(c[f >>> 2] >>> 24 - 8 * (f % 4) & 255));
      }

      return b.join("");
    },
    parse: function parse(a) {
      for (var c = a.length, b = [], f = 0; f < c; f++) {
        b[f >>> 2] |= (a.charCodeAt(f) & 255) << 24 - 8 * (f % 4);
      }

      return new p.init(b, c);
    }
  },
      h = b.Utf8 = {
    stringify: function stringify(a) {
      try {
        return decodeURIComponent(escape(j.stringify(a)));
      } catch (c) {
        throw Error("Malformed UTF-8 data");
      }
    },
    parse: function parse(a) {
      return j.parse(unescape(encodeURIComponent(a)));
    }
  },
      r = d.BufferedBlockAlgorithm = k.extend({
    reset: function reset() {
      this._data = new p.init();
      this._nDataBytes = 0;
    },
    _append: function _append(a) {
      "string" == typeof a && (a = h.parse(a));

      this._data.concat(a);

      this._nDataBytes += a.sigBytes;
    },
    _process: function _process(a) {
      var c = this._data,
          b = c.words,
          f = c.sigBytes,
          d = this.blockSize,
          e = f / (4 * d),
          e = a ? g.ceil(e) : g.max((e | 0) - this._minBufferSize, 0);
      a = e * d;
      f = g.min(4 * a, f);

      if (a) {
        for (var k = 0; k < a; k += d) {
          this._doProcessBlock(b, k);
        }

        k = b.splice(0, a);
        c.sigBytes -= f;
      }

      return new p.init(k, f);
    },
    clone: function clone() {
      var a = k.clone.call(this);
      a._data = this._data.clone();
      return a;
    },
    _minBufferSize: 0
  });

  d.Hasher = r.extend({
    cfg: k.extend(),
    init: function init(a) {
      this.cfg = this.cfg.extend(a);
      this.reset();
    },
    reset: function reset() {
      r.reset.call(this);

      this._doReset();
    },
    update: function update(a) {
      this._append(a);

      this._process();

      return this;
    },
    finalize: function finalize(a) {
      a && this._append(a);
      return this._doFinalize();
    },
    blockSize: 16,
    _createHelper: function _createHelper(a) {
      return function (b, d) {
        return new a.init(d).finalize(b);
      };
    },
    _createHmacHelper: function _createHmacHelper(a) {
      return function (b, d) {
        return new s.HMAC.init(a, d).finalize(b);
      };
    }
  });
  var s = e.algo = {};
  return e;
}(Math);

(function () {
  var g = CryptoJS,
      l = g.lib,
      e = l.WordArray,
      d = l.Hasher,
      m = [],
      l = g.algo.SHA1 = d.extend({
    _doReset: function _doReset() {
      this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function _doProcessBlock(d, e) {
      for (var b = this._hash.words, n = b[0], j = b[1], h = b[2], g = b[3], l = b[4], a = 0; 80 > a; a++) {
        if (16 > a) m[a] = d[e + a] | 0;else {
          var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
          m[a] = c << 1 | c >>> 31;
        }
        c = (n << 5 | n >>> 27) + l + m[a];
        c = 20 > a ? c + ((j & h | ~j & g) + 1518500249) : 40 > a ? c + ((j ^ h ^ g) + 1859775393) : 60 > a ? c + ((j & h | j & g | h & g) - 1894007588) : c + ((j ^ h ^ g) - 899497514);
        l = g;
        g = h;
        h = j << 30 | j >>> 2;
        j = n;
        n = c;
      }

      b[0] = b[0] + n | 0;
      b[1] = b[1] + j | 0;
      b[2] = b[2] + h | 0;
      b[3] = b[3] + g | 0;
      b[4] = b[4] + l | 0;
    },
    _doFinalize: function _doFinalize() {
      var d = this._data,
          e = d.words,
          b = 8 * this._nDataBytes,
          g = 8 * d.sigBytes;
      e[g >>> 5] |= 128 << 24 - g % 32;
      e[(g + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
      e[(g + 64 >>> 9 << 4) + 15] = b;
      d.sigBytes = 4 * e.length;

      this._process();

      return this._hash;
    },
    clone: function clone() {
      var e = d.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    }
  });
  g.SHA1 = d._createHelper(l);
  g.HmacSHA1 = d._createHmacHelper(l);
})();

(function () {
  var g = CryptoJS,
      l = g.enc.Utf8;
  g.algo.HMAC = g.lib.Base.extend({
    init: function init(e, d) {
      e = this._hasher = new e.init();
      "string" == typeof d && (d = l.parse(d));
      var g = e.blockSize,
          k = 4 * g;
      d.sigBytes > k && (d = e.finalize(d));
      d.clamp();

      for (var p = this._oKey = d.clone(), b = this._iKey = d.clone(), n = p.words, j = b.words, h = 0; h < g; h++) {
        n[h] ^= 1549556828, j[h] ^= 909522486;
      }

      p.sigBytes = b.sigBytes = k;
      this.reset();
    },
    reset: function reset() {
      var e = this._hasher;
      e.reset();
      e.update(this._iKey);
    },
    update: function update(e) {
      this._hasher.update(e);

      return this;
    },
    finalize: function finalize(e) {
      var d = this._hasher;
      e = d.finalize(e);
      d.reset();
      return d.finalize(this._oKey.clone().concat(e));
    }
  });
})();

(function () {
  // Shortcuts
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var C_enc = C.enc;
  /**
   * Base64 encoding strategy.
   */

  var Base64 = C_enc.Base64 = {
    /**
     * Converts a word array to a Base64 string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The Base64 string.
     *
     * @static
     *
     * @example
     *
     *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
     */
    stringify: function stringify(wordArray) {
      // Shortcuts
      var words = wordArray.words;
      var sigBytes = wordArray.sigBytes;
      var map = this._map; // Clamp excess bits

      wordArray.clamp(); // Convert

      var base64Chars = [];

      for (var i = 0; i < sigBytes; i += 3) {
        var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
        var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
        var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
        var triplet = byte1 << 16 | byte2 << 8 | byte3;

        for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
          base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
        }
      } // Add padding


      var paddingChar = map.charAt(64);

      if (paddingChar) {
        while (base64Chars.length % 4) {
          base64Chars.push(paddingChar);
        }
      }

      return base64Chars.join('');
    },

    /**
     * Converts a Base64 string to a word array.
     *
     * @param {string} base64Str The Base64 string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
     */
    parse: function parse(base64Str) {
      // Shortcuts
      var base64StrLength = base64Str.length;
      var map = this._map; // Ignore padding

      var paddingChar = map.charAt(64);

      if (paddingChar) {
        var paddingIndex = base64Str.indexOf(paddingChar);

        if (paddingIndex != -1) {
          base64StrLength = paddingIndex;
        }
      } // Convert


      var words = [];
      var nBytes = 0;

      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = map.indexOf(base64Str.charAt(i - 1)) << i % 4 * 2;
          var bits2 = map.indexOf(base64Str.charAt(i)) >>> 6 - i % 4 * 2;
          words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }

      return WordArray.create(words, nBytes);
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  };
})();

module.exports = CryptoJS;

/***/ }),

/***/ "./lib/json2xml.js":
/*!*************************!*\
  !*** ./lib/json2xml.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//copyright Ryan Day 2010 <http://ryanday.org>, Joscha Feth 2013 <http://www.feth.com> [MIT Licensed]
var element_start_char = "a-zA-Z_\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
var element_non_start_char = "-.0-9\xB7\u0300-\u036F\u203F\u2040";
var element_replace = new RegExp("^([^" + element_start_char + "])|^((x|X)(m|M)(l|L))|([^" + element_start_char + element_non_start_char + "])", "g");
var not_safe_in_xml = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

var objKeys = function objKeys(obj) {
  var l = [];

  if (obj instanceof Object) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        l.push(k);
      }
    }
  }

  return l;
};

var process_to_xml = function process_to_xml(node_data, options) {
  var makeNode = function makeNode(name, content, attributes, level, hasSubNodes) {
    var indent_value = options.indent !== undefined ? options.indent : "\t";
    var indent = options.prettyPrint ? '\n' + new Array(level).join(indent_value) : '';

    if (options.removeIllegalNameCharacters) {
      name = name.replace(element_replace, '_');
    }

    var node = [indent, '<', name, attributes || ''];

    if (content && content.length > 0) {
      node.push('>');
      node.push(content);
      hasSubNodes && node.push(indent);
      node.push('</');
      node.push(name);
      node.push('>');
    } else {
      node.push('/>');
    }

    return node.join('');
  };

  return function fn(node_data, node_descriptor, level) {
    var type = _typeof(node_data);

    if (Array.isArray ? Array.isArray(node_data) : node_data instanceof Array) {
      type = 'array';
    } else if (node_data instanceof Date) {
      type = 'date';
    }

    switch (type) {
      //if value is an array create child nodes from values
      case 'array':
        var ret = [];
        node_data.map(function (v) {
          ret.push(fn(v, 1, level + 1)); //entries that are values of an array are the only ones that can be special node descriptors
        });
        options.prettyPrint && ret.push('\n');
        return ret.join('');
        break;

      case 'date':
        // cast dates to ISO 8601 date (soap likes it)
        return node_data.toJSON ? node_data.toJSON() : node_data + '';
        break;

      case 'object':
        var nodes = [];

        for (var name in node_data) {
          if (node_data.hasOwnProperty(name)) {
            if (node_data[name] instanceof Array) {
              for (var j in node_data[name]) {
                if (node_data[name].hasOwnProperty(j)) nodes.push(makeNode(name, fn(node_data[name][j], 0, level + 1), null, level + 1, objKeys(node_data[name][j]).length));
              }
            } else {
              nodes.push(makeNode(name, fn(node_data[name], 0, level + 1), null, level + 1));
            }
          }
        }

        options.prettyPrint && nodes.length > 0 && nodes.push('\n');
        return nodes.join('');
        break;

      case 'function':
        return node_data();
        break;

      default:
        return options.escape ? esc(node_data) : '' + node_data;
    }
  }(node_data, 0, 0);
};

var xml_header = function xml_header(standalone) {
  var ret = ['<?xml version="1.0" encoding="UTF-8"'];

  if (standalone) {
    ret.push(' standalone="yes"');
  }

  ret.push('?>');
  return ret.join('');
};

function esc(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(not_safe_in_xml, '');
}

var json2xml = function json2xml(obj, options) {
  if (!options) {
    options = {
      xmlHeader: {
        standalone: true
      },
      prettyPrint: true,
      indent: "  "
    };
  }

  if (typeof obj == 'string') {
    try {
      obj = JSON.parse(obj.toString());
    } catch (e) {
      return false;
    }
  }

  var xmlheader = '';
  var docType = '';

  if (options) {
    if (_typeof(options) == 'object') {
      // our config is an object
      if (options.xmlHeader) {
        // the user wants an xml header
        xmlheader = xml_header(!!options.xmlHeader.standalone);
      }

      if (typeof options.docType != 'undefined') {
        docType = '<!DOCTYPE ' + options.docType + '>';
      }
    } else {
      // our config is a boolean value, so just add xml header
      xmlheader = xml_header();
    }
  }

  options = options || {};
  var ret = [xmlheader, options.prettyPrint && docType ? '\n' : '', docType, process_to_xml(obj, options)];
  return ret.join('').replace(/\n{2,}/g, '\n').replace(/\s+$/g, '');
};

module.exports = json2xml;

/***/ }),

/***/ "./lib/md5.js":
/*!********************!*\
  !*** ./lib/md5.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* https://github.com/emn178/js-md5 */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};

  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }

  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.versions && process.versions.node;

  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }

  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  var blocks = [],
      buffer8;

  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }
  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */


  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };
  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */

  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */


  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');

    if (NODE_JS) {
      method = nodeWrap(method);
    }

    method.getCtx = method.create = function () {
      return new Md5();
    };

    method.update = function (message) {
      return method.create().update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }

    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");

    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }

      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };

    return nodeMethod;
  };
  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */


  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }

    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */


  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,
        type = _typeof(message);

    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && (message.constructor === ArrayBuffer || message.constructor.name === 'ArrayBuffer')) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }

      notString = true;
    }

    var code,
        index = 0,
        i,
        length = message.length,
        blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);

            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);

            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;

      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }

    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }

    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }

    this.finalized = true;
    var blocks = this.blocks,
        i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];

    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }

      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }

    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,
        b,
        c,
        d,
        bc,
        da,
        blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };
  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */


  Md5.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;
    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };
  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */


  Md5.prototype.toString = Md5.prototype.hex;
  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */

  Md5.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;
    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];
  };
  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */


  Md5.prototype.array = Md5.prototype.digest;
  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */

  Md5.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */


  Md5.prototype.buffer = Md5.prototype.arrayBuffer;
  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */

  Md5.prototype.base64 = function () {
    var v1,
        v2,
        v3,
        base64Str = '',
        bytes = this.array();

    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
    }

    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;

    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/request.js":
/*!************************!*\
  !*** ./lib/request.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function camSafeUrlEncode(str) {
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
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
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

;

var obj2str = function obj2str(obj, lowerCaseKey) {
  var i, key, val;
  var list = [];
  var keyList = getObjectKeys(obj);

  for (i = 0; i < keyList.length; i++) {
    key = keyList[i];
    val = obj[key] === undefined || obj[key] === null ? '' : '' + obj[key];
    key = lowerCaseKey ? camSafeUrlEncode(key).toLowerCase() : camSafeUrlEncode(key);
    val = camSafeUrlEncode(val) || '';
    list.push(key + '=' + val);
  }

  return list.join('&');
};

var request = function request(params, callback) {
  var filePath = params.filePath;
  var headers = params.headers || {};
  var url = params.url || params.Url;
  var method = params.method;
  var onProgress = params.onProgress;
  var httpDNSServiceId = params.httpDNSServiceId;
  var requestTask;

  var cb = function cb(err, response) {
    var H = response.header;
    var headers = {};
    if (H) for (var key in H) {
      if (H.hasOwnProperty(key)) headers[key.toLowerCase()] = H[key];
    }
    callback(err, {
      statusCode: response.statusCode,
      headers: headers
    }, response.data);
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
    } // 整理 postObject 参数


    var formData = {
      'key': fileKey,
      'success_action_status': 200,
      'Signature': headers.Authorization
    };
    var headerKeys = ['Cache-Control', 'Content-Type', 'Content-Disposition', 'Content-Encoding', 'Expires', 'x-cos-storage-class', 'x-cos-security-token', 'x-ci-security-token'];

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
      success: function success(response) {
        cb(null, response);
      },
      fail: function fail(response) {
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

    headers['Content-Length'] && delete headers['Content-Length'];
    var requestParams = {
      url: url,
      method: method,
      header: headers,
      dataType: 'text',
      data: params.body,
      timeout: params.timeout,
      success: function success(response) {
        cb(null, response);
      },
      fail: function fail(response) {
        cb(response.errMsg, response);
      }
    };

    if (httpDNSServiceId) {
      Object.assign(requestParams, {
        enableHttpDNS: true,
        httpDNSServiceId: httpDNSServiceId
      });
    }

    requestTask = wx.request(requestParams);
  }

  return requestTask;
};

module.exports = request;

/***/ }),

/***/ "./lib/xml2json.js":
/*!*************************!*\
  !*** ./lib/xml2json.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright 2011-2013 Abdulla Abdurakhmanov
 Original sources are available at https://code.google.com/p/x2js/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
var DOMParser = __webpack_require__(/*! @xmldom/xmldom */ "./node_modules/@xmldom/xmldom/lib/index.js").DOMParser;

var x2js = function x2js(config) {
  'use strict';

  var VERSION = "1.2.0";
  config = config || {};
  initConfigDefaults();
  initRequiredPolyfills();

  function initConfigDefaults() {
    if (config.escapeMode === undefined) {
      config.escapeMode = true;
    }

    config.attributePrefix = config.attributePrefix || "_";
    config.arrayAccessForm = config.arrayAccessForm || "none";
    config.emptyNodeForm = config.emptyNodeForm || "text";

    if (config.enableToStringFunc === undefined) {
      config.enableToStringFunc = true;
    }

    config.arrayAccessFormPaths = config.arrayAccessFormPaths || [];

    if (config.skipEmptyTextNodesForObj === undefined) {
      config.skipEmptyTextNodesForObj = true;
    }

    if (config.stripWhitespaces === undefined) {
      config.stripWhitespaces = true;
    }

    config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];

    if (config.useDoubleQuotes === undefined) {
      config.useDoubleQuotes = false;
    }

    config.xmlElementsFilter = config.xmlElementsFilter || [];
    config.jsonPropertiesFilter = config.jsonPropertiesFilter || [];

    if (config.keepCData === undefined) {
      config.keepCData = false;
    }
  }

  var DOMNodeTypes = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9
  };

  function initRequiredPolyfills() {}

  function getNodeLocalName(node) {
    var nodeLocalName = node.localName;
    if (nodeLocalName == null) // Yeah, this is IE!!
      nodeLocalName = node.baseName;
    if (nodeLocalName == null || nodeLocalName == "") // =="" is IE too
      nodeLocalName = node.nodeName;
    return nodeLocalName;
  }

  function getNodePrefix(node) {
    return node.prefix;
  }

  function escapeXmlChars(str) {
    if (typeof str == "string") return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');else return str;
  }

  function unescapeXmlChars(str) {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
  }

  function checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {
    var idx = 0;

    for (; idx < stdFiltersArrayForm.length; idx++) {
      var filterPath = stdFiltersArrayForm[idx];

      if (typeof filterPath === "string") {
        if (filterPath == path) break;
      } else if (filterPath instanceof RegExp) {
        if (filterPath.test(path)) break;
      } else if (typeof filterPath === "function") {
        if (filterPath(obj, name, path)) break;
      }
    }

    return idx != stdFiltersArrayForm.length;
  }

  function toArrayAccessForm(obj, childName, path) {
    switch (config.arrayAccessForm) {
      case "property":
        if (!(obj[childName] instanceof Array)) obj[childName + "_asArray"] = [obj[childName]];else obj[childName + "_asArray"] = obj[childName];
        break;

      /*case "none":
       break;*/
    }

    if (!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
      if (checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {
        obj[childName] = [obj[childName]];
      }
    }
  }

  function fromXmlDateTime(prop) {
    // Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
    // Improved to support full spec and optional parts
    var bits = prop.split(/[-T:+Z]/g);
    var d = new Date(bits[0], bits[1] - 1, bits[2]);
    var secondBits = bits[5].split("\.");
    d.setHours(bits[3], bits[4], secondBits[0]);
    if (secondBits.length > 1) d.setMilliseconds(secondBits[1]); // Get supplied time zone offset in minutes

    if (bits[6] && bits[7]) {
      var offsetMinutes = bits[6] * 60 + Number(bits[7]);
      var sign = /\d\d-\d\d:\d\d$/.test(prop) ? '-' : '+'; // Apply the sign

      offsetMinutes = 0 + (sign == '-' ? -1 * offsetMinutes : offsetMinutes); // Apply offset and local timezone

      d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset());
    } else if (prop.indexOf("Z", prop.length - 1) !== -1) {
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
    } // d is now a local time equivalent to the supplied time


    return d;
  }

  function checkFromXmlDateTimePaths(value, childName, fullPath) {
    if (config.datetimeAccessFormPaths.length > 0) {
      var path = fullPath.split("\.#")[0];

      if (checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {
        return fromXmlDateTime(value);
      } else return value;
    } else return value;
  }

  function checkXmlElementsFilter(obj, childType, childName, childPath) {
    if (childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {
      return checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);
    } else return true;
  }

  function parseDOMChildren(node, path) {
    if (node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
      var result = new Object();
      var nodeChildren = node.childNodes; // Alternative for firstElementChild which is not supported in some environments

      for (var cidx = 0; cidx < nodeChildren.length; cidx++) {
        var child = nodeChildren.item(cidx);

        if (child.nodeType == DOMNodeTypes.ELEMENT_NODE) {
          var childName = getNodeLocalName(child);
          result[childName] = parseDOMChildren(child, childName);
        }
      }

      return result;
    } else if (node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
      var result = new Object();
      result.__cnt = 0;
      var nodeChildren = node.childNodes; // Children nodes

      for (var cidx = 0; cidx < nodeChildren.length; cidx++) {
        var child = nodeChildren.item(cidx); // nodeChildren[cidx];

        var childName = getNodeLocalName(child);

        if (child.nodeType != DOMNodeTypes.COMMENT_NODE) {
          var childPath = path + "." + childName;

          if (checkXmlElementsFilter(result, child.nodeType, childName, childPath)) {
            result.__cnt++;

            if (result[childName] == null) {
              result[childName] = parseDOMChildren(child, childPath);
              toArrayAccessForm(result, childName, childPath);
            } else {
              if (result[childName] != null) {
                if (!(result[childName] instanceof Array)) {
                  result[childName] = [result[childName]];
                  toArrayAccessForm(result, childName, childPath);
                }
              }

              result[childName][result[childName].length] = parseDOMChildren(child, childPath);
            }
          }
        }
      } // Attributes


      for (var aidx = 0; aidx < node.attributes.length; aidx++) {
        var attr = node.attributes.item(aidx); // [aidx];

        result.__cnt++;
        result[config.attributePrefix + attr.name] = attr.value;
      } // Node namespace prefix


      var nodePrefix = getNodePrefix(node);

      if (nodePrefix != null && nodePrefix != "") {
        result.__cnt++;
        result.__prefix = nodePrefix;
      }

      if (result["#text"] != null) {
        result.__text = result["#text"];

        if (result.__text instanceof Array) {
          result.__text = result.__text.join("\n");
        } //if(config.escapeMode)
        //	result.__text = unescapeXmlChars(result.__text);


        if (config.stripWhitespaces) result.__text = result.__text.trim();
        delete result["#text"];
        if (config.arrayAccessForm == "property") delete result["#text_asArray"];
        result.__text = checkFromXmlDateTimePaths(result.__text, childName, path + "." + childName);
      }

      if (result["#cdata-section"] != null) {
        result.__cdata = result["#cdata-section"];
        delete result["#cdata-section"];
        if (config.arrayAccessForm == "property") delete result["#cdata-section_asArray"];
      }

      if (result.__cnt == 0 && config.emptyNodeForm == "text") {
        result = '';
      } else if (result.__cnt == 1 && result.__text != null) {
        result = result.__text;
      } else if (result.__cnt == 1 && result.__cdata != null && !config.keepCData) {
        result = result.__cdata;
      } else if (result.__cnt > 1 && result.__text != null && config.skipEmptyTextNodesForObj) {
        if (config.stripWhitespaces && result.__text == "" || result.__text.trim() == "") {
          delete result.__text;
        }
      }

      delete result.__cnt;

      if (config.enableToStringFunc && (result.__text != null || result.__cdata != null)) {
        result.toString = function () {
          return (this.__text != null ? this.__text : '') + (this.__cdata != null ? this.__cdata : '');
        };
      }

      return result;
    } else if (node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
      return node.nodeValue;
    }
  }

  function startTag(jsonObj, element, attrList, closed) {
    var resultStr = "<" + (jsonObj != null && jsonObj.__prefix != null ? jsonObj.__prefix + ":" : "") + element;

    if (attrList != null) {
      for (var aidx = 0; aidx < attrList.length; aidx++) {
        var attrName = attrList[aidx];
        var attrVal = jsonObj[attrName];
        if (config.escapeMode) attrVal = escapeXmlChars(attrVal);
        resultStr += " " + attrName.substr(config.attributePrefix.length) + "=";
        if (config.useDoubleQuotes) resultStr += '"' + attrVal + '"';else resultStr += "'" + attrVal + "'";
      }
    }

    if (!closed) resultStr += ">";else resultStr += "/>";
    return resultStr;
  }

  function endTag(jsonObj, elementName) {
    return "</" + (jsonObj.__prefix != null ? jsonObj.__prefix + ":" : "") + elementName + ">";
  }

  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  function jsonXmlSpecialElem(jsonObj, jsonObjField) {
    if (config.arrayAccessForm == "property" && endsWith(jsonObjField.toString(), "_asArray") || jsonObjField.toString().indexOf(config.attributePrefix) == 0 || jsonObjField.toString().indexOf("__") == 0 || jsonObj[jsonObjField] instanceof Function) return true;else return false;
  }

  function jsonXmlElemCount(jsonObj) {
    var elementsCnt = 0;

    if (jsonObj instanceof Object) {
      for (var it in jsonObj) {
        if (jsonXmlSpecialElem(jsonObj, it)) continue;
        elementsCnt++;
      }
    }

    return elementsCnt;
  }

  function checkJsonObjPropertiesFilter(jsonObj, propertyName, jsonObjPath) {
    return config.jsonPropertiesFilter.length == 0 || jsonObjPath == "" || checkInStdFiltersArrayForm(config.jsonPropertiesFilter, jsonObj, propertyName, jsonObjPath);
  }

  function parseJSONAttributes(jsonObj) {
    var attrList = [];

    if (jsonObj instanceof Object) {
      for (var ait in jsonObj) {
        if (ait.toString().indexOf("__") == -1 && ait.toString().indexOf(config.attributePrefix) == 0) {
          attrList.push(ait);
        }
      }
    }

    return attrList;
  }

  function parseJSONTextAttrs(jsonTxtObj) {
    var result = "";

    if (jsonTxtObj.__cdata != null) {
      result += "<![CDATA[" + jsonTxtObj.__cdata + "]]>";
    }

    if (jsonTxtObj.__text != null) {
      if (config.escapeMode) result += escapeXmlChars(jsonTxtObj.__text);else result += jsonTxtObj.__text;
    }

    return result;
  }

  function parseJSONTextObject(jsonTxtObj) {
    var result = "";

    if (jsonTxtObj instanceof Object) {
      result += parseJSONTextAttrs(jsonTxtObj);
    } else if (jsonTxtObj != null) {
      if (config.escapeMode) result += escapeXmlChars(jsonTxtObj);else result += jsonTxtObj;
    }

    return result;
  }

  function getJsonPropertyPath(jsonObjPath, jsonPropName) {
    if (jsonObjPath === "") {
      return jsonPropName;
    } else return jsonObjPath + "." + jsonPropName;
  }

  function parseJSONArray(jsonArrRoot, jsonArrObj, attrList, jsonObjPath) {
    var result = "";

    if (jsonArrRoot.length == 0) {
      result += startTag(jsonArrRoot, jsonArrObj, attrList, true);
    } else {
      for (var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {
        result += startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
        result += parseJSONObject(jsonArrRoot[arIdx], getJsonPropertyPath(jsonObjPath, jsonArrObj));
        result += endTag(jsonArrRoot[arIdx], jsonArrObj);
      }
    }

    return result;
  }

  function parseJSONObject(jsonObj, jsonObjPath) {
    var result = "";
    var elementsCnt = jsonXmlElemCount(jsonObj);

    if (elementsCnt > 0) {
      for (var it in jsonObj) {
        if (jsonXmlSpecialElem(jsonObj, it) || jsonObjPath != "" && !checkJsonObjPropertiesFilter(jsonObj, it, getJsonPropertyPath(jsonObjPath, it))) continue;
        var subObj = jsonObj[it];
        var attrList = parseJSONAttributes(subObj);

        if (subObj == null || subObj == undefined) {
          result += startTag(subObj, it, attrList, true);
        } else if (subObj instanceof Object) {
          if (subObj instanceof Array) {
            result += parseJSONArray(subObj, it, attrList, jsonObjPath);
          } else if (subObj instanceof Date) {
            result += startTag(subObj, it, attrList, false);
            result += subObj.toISOString();
            result += endTag(subObj, it);
          } else {
            var subObjElementsCnt = jsonXmlElemCount(subObj);

            if (subObjElementsCnt > 0 || subObj.__text != null || subObj.__cdata != null) {
              result += startTag(subObj, it, attrList, false);
              result += parseJSONObject(subObj, getJsonPropertyPath(jsonObjPath, it));
              result += endTag(subObj, it);
            } else {
              result += startTag(subObj, it, attrList, true);
            }
          }
        } else {
          result += startTag(subObj, it, attrList, false);
          result += parseJSONTextObject(subObj);
          result += endTag(subObj, it);
        }
      }
    }

    result += parseJSONTextObject(jsonObj);
    return result;
  }

  this.parseXmlString = function (xmlDocStr) {
    // var isIEParser = window.ActiveXObject || "ActiveXObject" in window;
    var isIEParser = false;

    if (xmlDocStr === undefined) {
      return null;
    }

    var xmlDoc;

    if (DOMParser) {
      var parser = new DOMParser();
      var parsererrorNS = null; // IE9+ now is here

      if (!isIEParser) {
        try {
          parsererrorNS = parser.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
        } catch (err) {
          parsererrorNS = null;
        }
      }

      try {
        xmlDoc = parser.parseFromString(xmlDocStr, "text/xml");

        if (parsererrorNS != null && xmlDoc.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
          //throw new Error('Error parsing XML: '+xmlDocStr);
          xmlDoc = null;
        }
      } catch (err) {
        xmlDoc = null;
      }
    } else {
      // IE :(
      if (xmlDocStr.indexOf("<?") == 0) {
        xmlDocStr = xmlDocStr.substr(xmlDocStr.indexOf("?>") + 2);
      }

      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(xmlDocStr);
    }

    return xmlDoc;
  };

  this.asArray = function (prop) {
    if (prop === undefined || prop == null) return [];else if (prop instanceof Array) return prop;else return [prop];
  };

  this.toXmlDateTime = function (dt) {
    if (dt instanceof Date) return dt.toISOString();else if (typeof dt === 'number') return new Date(dt).toISOString();else return null;
  };

  this.asDateTime = function (prop) {
    if (typeof prop == "string") {
      return fromXmlDateTime(prop);
    } else return prop;
  };

  this.xml2json = function (xmlDoc) {
    return parseDOMChildren(xmlDoc);
  };

  this.xml_str2json = function (xmlDocStr) {
    var xmlDoc = this.parseXmlString(xmlDocStr);
    if (xmlDoc != null) return this.xml2json(xmlDoc);else return null;
  };

  this.json2xml_str = function (jsonObj) {
    return parseJSONObject(jsonObj, "");
  };

  this.json2xml = function (jsonObj) {
    var xmlDocStr = this.json2xml_str(jsonObj);
    return this.parseXmlString(xmlDocStr);
  };

  this.getVersion = function () {
    return VERSION;
  };
};

var xml2json = function xml2json(str) {
  if (!str) return null;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(str, "text/xml");
  var x2jsObj = new x2js();
  var data = x2jsObj.xml2json(xmlDoc);

  if (data.html && data.getElementsByTagName('parsererror').length) {
    return null;
  } else {
    return data;
  }
};

var json2xml = function json2xml(data) {
  var x2jsObj = new x2js();
  return x2jsObj.json2xml(data);
};

module.exports = xml2json;

/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object')
	}
	for (var key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key]
		}
	}
	return target
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.assign = assign;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
	return input
		.replace(/\r[\n\u0085]/g, '\n')
		.replace(/[\r\u0085\u2028]/g, '\n')
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	var normalize = options.normalizeLineEndings || normalizeLineEndings;
	if (source && typeof source === 'string') {
		sax.parse(
			normalize(source),
			defaultNSMap,
			entityMap
		)
	} else {
		sax.errorHandler.error('invalid doc source')
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	}
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild (doc, el, newChild) {
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
			delete cs[cs.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild (parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else{
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else{
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild (parentNode, newChild) {
	if (newChild.parentNode) {
		newChild.parentNode.removeChild(newChild);
	}
	newChild.parentNode = parentNode;
	newChild.previousSibling = parentNode.lastChild;
	newChild.nextSibling = null;
	if (newChild.previousSibling) {
		newChild.previousSibling.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
}

Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
			this.documentElement = newChild;
		}

		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
			
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;
	
	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}
	
	var i = visibleNamespaces.length 
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		
		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node		
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}
		
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
		 */
		return buf.push(node.data
			.replace(/[<&>]/g,_xmlEncoder)
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})
		
		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeze = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze;

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({amp:'&', apos:"'", gt:'>', lt:'<', quot:'"'})

/**
 * A map of currently 241 entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
       lt: '<',
       gt: '>',
       amp: '&',
       quot: '"',
       apos: "'",
       Agrave: "À",
       Aacute: "Á",
       Acirc: "Â",
       Atilde: "Ã",
       Auml: "Ä",
       Aring: "Å",
       AElig: "Æ",
       Ccedil: "Ç",
       Egrave: "È",
       Eacute: "É",
       Ecirc: "Ê",
       Euml: "Ë",
       Igrave: "Ì",
       Iacute: "Í",
       Icirc: "Î",
       Iuml: "Ï",
       ETH: "Ð",
       Ntilde: "Ñ",
       Ograve: "Ò",
       Oacute: "Ó",
       Ocirc: "Ô",
       Otilde: "Õ",
       Ouml: "Ö",
       Oslash: "Ø",
       Ugrave: "Ù",
       Uacute: "Ú",
       Ucirc: "Û",
       Uuml: "Ü",
       Yacute: "Ý",
       THORN: "Þ",
       szlig: "ß",
       agrave: "à",
       aacute: "á",
       acirc: "â",
       atilde: "ã",
       auml: "ä",
       aring: "å",
       aelig: "æ",
       ccedil: "ç",
       egrave: "è",
       eacute: "é",
       ecirc: "ê",
       euml: "ë",
       igrave: "ì",
       iacute: "í",
       icirc: "î",
       iuml: "ï",
       eth: "ð",
       ntilde: "ñ",
       ograve: "ò",
       oacute: "ó",
       ocirc: "ô",
       otilde: "õ",
       ouml: "ö",
       oslash: "ø",
       ugrave: "ù",
       uacute: "ú",
       ucirc: "û",
       uuml: "ü",
       yacute: "ý",
       thorn: "þ",
       yuml: "ÿ",
       nbsp: "\u00a0",
       iexcl: "¡",
       cent: "¢",
       pound: "£",
       curren: "¤",
       yen: "¥",
       brvbar: "¦",
       sect: "§",
       uml: "¨",
       copy: "©",
       ordf: "ª",
       laquo: "«",
       not: "¬",
       shy: "­­",
       reg: "®",
       macr: "¯",
       deg: "°",
       plusmn: "±",
       sup2: "²",
       sup3: "³",
       acute: "´",
       micro: "µ",
       para: "¶",
       middot: "·",
       cedil: "¸",
       sup1: "¹",
       ordm: "º",
       raquo: "»",
       frac14: "¼",
       frac12: "½",
       frac34: "¾",
       iquest: "¿",
       times: "×",
       divide: "÷",
       forall: "∀",
       part: "∂",
       exist: "∃",
       empty: "∅",
       nabla: "∇",
       isin: "∈",
       notin: "∉",
       ni: "∋",
       prod: "∏",
       sum: "∑",
       minus: "−",
       lowast: "∗",
       radic: "√",
       prop: "∝",
       infin: "∞",
       ang: "∠",
       and: "∧",
       or: "∨",
       cap: "∩",
       cup: "∪",
       'int': "∫",
       there4: "∴",
       sim: "∼",
       cong: "≅",
       asymp: "≈",
       ne: "≠",
       equiv: "≡",
       le: "≤",
       ge: "≥",
       sub: "⊂",
       sup: "⊃",
       nsub: "⊄",
       sube: "⊆",
       supe: "⊇",
       oplus: "⊕",
       otimes: "⊗",
       perp: "⊥",
       sdot: "⋅",
       Alpha: "Α",
       Beta: "Β",
       Gamma: "Γ",
       Delta: "Δ",
       Epsilon: "Ε",
       Zeta: "Ζ",
       Eta: "Η",
       Theta: "Θ",
       Iota: "Ι",
       Kappa: "Κ",
       Lambda: "Λ",
       Mu: "Μ",
       Nu: "Ν",
       Xi: "Ξ",
       Omicron: "Ο",
       Pi: "Π",
       Rho: "Ρ",
       Sigma: "Σ",
       Tau: "Τ",
       Upsilon: "Υ",
       Phi: "Φ",
       Chi: "Χ",
       Psi: "Ψ",
       Omega: "Ω",
       alpha: "α",
       beta: "β",
       gamma: "γ",
       delta: "δ",
       epsilon: "ε",
       zeta: "ζ",
       eta: "η",
       theta: "θ",
       iota: "ι",
       kappa: "κ",
       lambda: "λ",
       mu: "μ",
       nu: "ν",
       xi: "ξ",
       omicron: "ο",
       pi: "π",
       rho: "ρ",
       sigmaf: "ς",
       sigma: "σ",
       tau: "τ",
       upsilon: "υ",
       phi: "φ",
       chi: "χ",
       psi: "ψ",
       omega: "ω",
       thetasym: "ϑ",
       upsih: "ϒ",
       piv: "ϖ",
       OElig: "Œ",
       oelig: "œ",
       Scaron: "Š",
       scaron: "š",
       Yuml: "Ÿ",
       fnof: "ƒ",
       circ: "ˆ",
       tilde: "˜",
       ensp: " ",
       emsp: " ",
       thinsp: " ",
       zwnj: "‌",
       zwj: "‍",
       lrm: "‎",
       rlm: "‏",
       ndash: "–",
       mdash: "—",
       lsquo: "‘",
       rsquo: "’",
       sbquo: "‚",
       ldquo: "“",
       rdquo: "”",
       bdquo: "„",
       dagger: "†",
       Dagger: "‡",
       bull: "•",
       hellip: "…",
       permil: "‰",
       prime: "′",
       Prime: "″",
       lsaquo: "‹",
       rsaquo: "›",
       oline: "‾",
       euro: "€",
       trade: "™",
       larr: "←",
       uarr: "↑",
       rarr: "→",
       darr: "↓",
       harr: "↔",
       crarr: "↵",
       lceil: "⌈",
       rceil: "⌉",
       lfloor: "⌊",
       rfloor: "⌋",
       loz: "◊",
       spades: "♠",
       clubs: "♣",
       hearts: "♥",
       diams: "♦"
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NAMESPACE = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE;

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if (Object.hasOwnProperty.call(entityMap, k)) {
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){

	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for(var prefix in localNSMap){
							domBuilder.endPrefixMapping(prefix) ;
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }

				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;


				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer),
			startIndex
		)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start, p);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start, p);
				addAttribute(attrName, value, start);
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
			case S_ATTR_SPACE:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value, start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start, p);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix)
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//}
}
function _copy(source,target){
	for(var n in source){target[n] = source[n]}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ }),

/***/ "./node_modules/mime/Mime.js":
/*!***********************************!*\
  !*** ./node_modules/mime/Mime.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();

    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] === '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = (ext[0] !== '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, '').toLowerCase();
  let ext = last.replace(/^.*\./, '').toLowerCase();

  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

module.exports = Mime;


/***/ }),

/***/ "./node_modules/mime/index.js":
/*!************************************!*\
  !*** ./node_modules/mime/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let Mime = __webpack_require__(/*! ./Mime */ "./node_modules/mime/Mime.js");
module.exports = new Mime(__webpack_require__(/*! ./types/standard */ "./node_modules/mime/types/standard.js"), __webpack_require__(/*! ./types/other */ "./node_modules/mime/types/other.js"));


/***/ }),

/***/ "./node_modules/mime/types/other.js":
/*!******************************************!*\
  !*** ./node_modules/mime/types/other.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]};

/***/ }),

/***/ "./node_modules/mime/types/standard.js":
/*!*********************************************!*\
  !*** ./node_modules/mime/types/standard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"cos-wx-sdk-v5\",\"version\":\"1.4.0\",\"description\":\"小程序 SDK for [腾讯云对象存储服务](https://cloud.tencent.com/product/cos)\",\"main\":\"demo/lib/cos-wx-sdk-v5.min.js\",\"scripts\":{\"dev\":\"cross-env NODE_ENV=development node build.js --mode=development\",\"build\":\"cross-env NODE_ENV=production node build.js --mode=production\",\"sts.js\":\"node server/sts.js\"},\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/tencentyun/cos-wx-sdk-v5.git\"},\"author\":\"carsonxu\",\"license\":\"ISC\",\"dependencies\":{\"mime\":\"^2.4.6\",\"@xmldom/xmldom\":\"^0.8.2\"},\"devDependencies\":{\"babel-core\":\"6.26.3\",\"babel-loader\":\"8.2.5\",\"@babel/preset-env\":\"7.16.11\",\"body-parser\":\"^1.18.3\",\"cross-env\":\"^7.0.3\",\"express\":\"^4.17.1\",\"qcloud-cos-sts\":\"^3.0.2\",\"terser-webpack-plugin\":\"4.2.3\",\"webpack\":\"4.46.0\",\"webpack-cli\":\"4.10.0\"}}");

/***/ }),

/***/ "./src/advance.js":
/*!************************!*\
  !*** ./src/advance.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var session = __webpack_require__(/*! ./session */ "./src/session.js");

var Async = __webpack_require__(/*! ./async */ "./src/async.js");

var EventProxy = __webpack_require__(/*! ./event */ "./src/event.js").EventProxy;

var util = __webpack_require__(/*! ./util */ "./src/util.js");

var Tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js"); // 文件分块上传全过程，暴露的分块上传接口


function sliceUploadFile(params, callback) {
  var self = this; // 如果小程序版本不支持获取文件分片内容，统一转到 简单上传 接口上传

  if (!util.canFileSlice()) {
    params.SkipTask = true;

    if (self.options.SimpleUploadMethod === 'postObject') {
      self.postObject(params, callback);
    } else {
      self.putObject(params, callback);
    }

    return;
  }

  var ep = new EventProxy();
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var FilePath = params.FilePath;
  var ChunkSize = params.ChunkSize || params.SliceSize || self.options.ChunkSize;
  var AsyncLimit = params.AsyncLimit;
  var StorageClass = params.StorageClass;
  var ServerSideEncryption = params.ServerSideEncryption;
  var FileSize;
  var onProgress;
  var onHashProgress = params.onHashProgress;
  var tracker = params.tracker;
  tracker && tracker.setParams({
    chunkSize: ChunkSize
  }); // 上传过程中出现错误，返回错误

  ep.on('error', function (err) {
    if (!self._isRunningTask(TaskId)) return;
    var _err = {
      UploadId: params.UploadData.UploadId || '',
      err: err,
      error: err
    };
    return callback(_err);
  }); // 上传分块完成，开始 uploadSliceComplete 操作

  ep.on('upload_complete', function (UploadCompleteData) {
    var _UploadCompleteData = util.extend({
      UploadId: params.UploadData.UploadId || ''
    }, UploadCompleteData);

    callback(null, _UploadCompleteData);
  }); // 上传分块完成，开始 uploadSliceComplete 操作

  ep.on('upload_slice_complete', function (UploadData) {
    uploadSliceComplete.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      UploadId: UploadData.UploadId,
      SliceList: UploadData.SliceList,
      tracker: tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      session.removeUsing(UploadData.UploadId);

      if (err) {
        onProgress(null, true);
        return ep.emit('error', err);
      }

      session.removeUploadId(UploadData.UploadId);
      onProgress({
        loaded: FileSize,
        total: FileSize
      }, true);
      ep.emit('upload_complete', data);
    });
  }); // 获取 UploadId 完成，开始上传每个分片

  ep.on('get_upload_data_finish', function (UploadData) {
    // 处理 UploadId 缓存
    var uuid = session.getFileId(params.FileStat, params.ChunkSize, Bucket, Key);
    uuid && session.saveUploadId(uuid, UploadData.UploadId, self.options.UploadIdCacheLimit); // 缓存 UploadId

    session.setUsing(UploadData.UploadId); // 标记 UploadId 为正在使用
    // 获取 UploadId

    onProgress(null, true); // 任务状态开始 uploading

    uploadSliceList.call(self, {
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      FilePath: FilePath,
      FileSize: FileSize,
      SliceSize: ChunkSize,
      AsyncLimit: AsyncLimit,
      ServerSideEncryption: ServerSideEncryption,
      UploadData: UploadData,
      onProgress: onProgress,
      tracker: tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;

      if (err) {
        onProgress(null, true);
        return ep.emit('error', err);
      }

      ep.emit('upload_slice_complete', data);
    });
  }); // 开始获取文件 UploadId，里面会视情况计算 ETag，并比对，保证文件一致性，也优化上传

  ep.on('get_file_size_finish', function () {
    onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress);

    if (params.UploadData.UploadId) {
      ep.emit('get_upload_data_finish', params.UploadData);
    } else {
      var _params = util.extend({
        TaskId: TaskId,
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        Headers: params.Headers,
        StorageClass: StorageClass,
        FilePath: FilePath,
        FileSize: FileSize,
        SliceSize: ChunkSize,
        onHashProgress: onHashProgress,
        tracker: tracker
      }, params);

      getUploadIdAndPartList.call(self, _params, function (err, UploadData) {
        if (!self._isRunningTask(TaskId)) return;
        if (err) return ep.emit('error', err);
        params.UploadData.UploadId = UploadData.UploadId;
        params.UploadData.PartList = UploadData.PartList;
        ep.emit('get_upload_data_finish', params.UploadData);
      });
    }
  }); // 获取上传文件大小

  FileSize = params.ContentLength;
  delete params.ContentLength;
  !params.Headers && (params.Headers = {});
  util.each(params.Headers, function (item, key) {
    if (key.toLowerCase() === 'content-length') {
      delete params.Headers[key];
    }
  }); // 控制分片大小

  (function () {
    var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
    var AutoChunkSize = 1024 * 1024;

    for (var i = 0; i < SIZE.length; i++) {
      AutoChunkSize = SIZE[i] * 1024 * 1024;
      if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
    }

    params.ChunkSize = params.SliceSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
  })(); // 开始上传


  if (FileSize === 0) {
    params.Body = '';
    params.ContentLength = 0;
    params.SkipTask = true;
    self.putObject(params, function (err, data) {
      if (err) {
        return callback(err);
      }

      callback(null, data);
    });
  } else {
    ep.emit('get_file_size_finish');
  }
} // 获取上传任务的 UploadId


function getUploadIdAndPartList(params, callback) {
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var StorageClass = params.StorageClass;
  var self = this; // 计算 ETag

  var ETagMap = {};
  var FileSize = params.FileSize;
  var SliceSize = params.SliceSize;
  var SliceCount = Math.ceil(FileSize / SliceSize);
  var FinishSliceCount = 0;
  var FinishSize = 0;
  var onHashProgress = util.throttleOnProgress.call(self, FileSize, params.onHashProgress);

  var getChunkETag = function getChunkETag(PartNumber, callback) {
    var start = SliceSize * (PartNumber - 1);
    var end = Math.min(start + SliceSize, FileSize);
    var ChunkSize = end - start;

    if (ETagMap[PartNumber]) {
      callback(null, {
        PartNumber: PartNumber,
        ETag: ETagMap[PartNumber],
        Size: ChunkSize
      });
    } else {
      util.fileSlice(params.FilePath, start, end, function (chunkItem) {
        try {
          var md5 = util.getFileMd5(chunkItem);
        } catch (err) {
          return callback(err);
        }

        var ETag = '"' + md5 + '"';
        ETagMap[PartNumber] = ETag;
        FinishSliceCount += 1;
        FinishSize += ChunkSize;
        callback(null, {
          PartNumber: PartNumber,
          ETag: ETag,
          Size: ChunkSize
        });
        onHashProgress({
          loaded: FinishSize,
          total: FileSize
        });
      });
    }
  }; // 通过和文件的 md5 对比，判断 UploadId 是否可用


  var isAvailableUploadList = function isAvailableUploadList(PartList, callback) {
    var PartCount = PartList.length; // 如果没有分片，通过

    if (PartCount === 0) {
      return callback(null, true);
    } // 检查分片数量


    if (PartCount > SliceCount) {
      return callback(null, false);
    } // 检查分片大小


    if (PartCount > 1) {
      var PartSliceSize = Math.max(PartList[0].Size, PartList[1].Size);

      if (PartSliceSize !== SliceSize) {
        return callback(null, false);
      }
    } // 逐个分片计算并检查 ETag 是否一致


    var next = function next(index) {
      if (index < PartCount) {
        var Part = PartList[index];
        getChunkETag(Part.PartNumber, function (err, chunk) {
          if (chunk && chunk.ETag === Part.ETag && chunk.Size === Part.Size) {
            next(index + 1);
          } else {
            callback(null, false);
          }
        });
      } else {
        callback(null, true);
      }
    };

    next(0);
  };

  var ep = new EventProxy();
  ep.on('error', function (errData) {
    if (!self._isRunningTask(TaskId)) return;
    return callback(errData);
  }); // 存在 UploadId

  ep.on('upload_id_available', function (UploadData) {
    // 转换成 map
    var map = {};
    var list = [];
    util.each(UploadData.PartList, function (item) {
      map[item.PartNumber] = item;
    });

    for (var PartNumber = 1; PartNumber <= SliceCount; PartNumber++) {
      var item = map[PartNumber];

      if (item) {
        item.PartNumber = PartNumber;
        item.Uploaded = true;
      } else {
        item = {
          PartNumber: PartNumber,
          ETag: null,
          Uploaded: false
        };
      }

      list.push(item);
    }

    UploadData.PartList = list;
    callback(null, UploadData);
  }); // 不存在 UploadId, 初始化生成 UploadId

  ep.on('no_available_upload_id', function () {
    if (!self._isRunningTask(TaskId)) return;

    var _params = util.extend({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Headers: util.clone(params.Headers),
      Query: util.clone(params.Query),
      StorageClass: StorageClass,
      calledBySdk: 'sliceUploadFile',
      tracker: params.tracker
    }, params);

    self.multipartInit(_params, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      if (err) return ep.emit('error', err);
      var UploadId = data.UploadId;

      if (!UploadId) {
        return callback({
          Message: 'no upload id'
        });
      }

      ep.emit('upload_id_available', {
        UploadId: UploadId,
        PartList: []
      });
    });
  }); // 如果已存在 UploadId，找一个可以用的 UploadId

  ep.on('has_and_check_upload_id', function (UploadIdList) {
    // 串行地，找一个内容一致的 UploadId
    UploadIdList = UploadIdList.reverse();
    Async.eachLimit(UploadIdList, 1, function (UploadId, asyncCallback) {
      if (!self._isRunningTask(TaskId)) return; // 如果正在上传，跳过

      if (session.using[UploadId]) {
        asyncCallback(); // 检查下一个 UploadId

        return;
      } // 判断 UploadId 是否可用


      wholeMultipartListPart.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadId,
        tracker: params.tracker
      }, function (err, PartListData) {
        if (!self._isRunningTask(TaskId)) return;

        if (err) {
          session.removeUsing(UploadId);
          return ep.emit('error', err);
        }

        var PartList = PartListData.PartList;
        PartList.forEach(function (item) {
          item.PartNumber *= 1;
          item.Size *= 1;
          item.ETag = item.ETag || '';
        });
        isAvailableUploadList(PartList, function (err, isAvailable) {
          if (!self._isRunningTask(TaskId)) return;
          if (err) return ep.emit('error', err);

          if (isAvailable) {
            asyncCallback({
              UploadId: UploadId,
              PartList: PartList
            }); // 马上结束
          } else {
            asyncCallback(); // 检查下一个 UploadId
          }
        });
      });
    }, function (AvailableUploadData) {
      if (!self._isRunningTask(TaskId)) return;
      onHashProgress(null, true);

      if (AvailableUploadData && AvailableUploadData.UploadId) {
        ep.emit('upload_id_available', AvailableUploadData);
      } else {
        ep.emit('no_available_upload_id');
      }
    });
  }); // 在本地缓存找可用的 UploadId

  ep.on('seek_local_avail_upload_id', function (RemoteUploadIdList) {
    // 在本地找可用的 UploadId
    var uuid = session.getFileId(params.FileStat, params.ChunkSize, Bucket, Key);
    var LocalUploadIdList = session.getUploadIdList(uuid);

    if (!uuid || !LocalUploadIdList) {
      ep.emit('has_and_check_upload_id', RemoteUploadIdList);
      return;
    }

    var next = function next(index) {
      // 如果本地找不到可用 UploadId，再一个个遍历校验远端
      if (index >= LocalUploadIdList.length) {
        ep.emit('has_and_check_upload_id', RemoteUploadIdList);
        return;
      }

      var UploadId = LocalUploadIdList[index]; // 如果不在远端 UploadId 列表里，跳过并删除

      if (!util.isInArray(RemoteUploadIdList, UploadId)) {
        session.removeUploadId(UploadId);
        next(index + 1);
        return;
      } // 如果正在上传，跳过


      if (session.using[UploadId]) {
        next(index + 1);
        return;
      } // 判断 UploadId 是否存在线上


      wholeMultipartListPart.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadId,
        tracker: params.tracker
      }, function (err, PartListData) {
        if (!self._isRunningTask(TaskId)) return;

        if (err) {
          // 如果 UploadId 获取会出错，跳过并删除
          session.removeUploadId(UploadId);
          next(index + 1);
        } else {
          // 找到可用 UploadId
          ep.emit('upload_id_available', {
            UploadId: UploadId,
            PartList: PartListData.PartList
          });
        }
      });
    };

    next(0);
  }); // 获取线上 UploadId 列表

  ep.on('get_remote_upload_id_list', function () {
    // 获取符合条件的 UploadId 列表，因为同一个文件可以有多个上传任务。
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      tracker: params.tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;

      if (err) {
        return ep.emit('error', err);
      } // 整理远端 UploadId 列表


      var RemoteUploadIdList = util.filter(data.UploadList, function (item) {
        return item.Key === Key && (!StorageClass || item.StorageClass.toUpperCase() === StorageClass.toUpperCase());
      }).reverse().map(function (item) {
        return item.UploadId || item.UploadID;
      });

      if (RemoteUploadIdList.length) {
        ep.emit('seek_local_avail_upload_id', RemoteUploadIdList);
      } else {
        // 远端没有 UploadId，清理缓存的 UploadId
        var uuid = session.getFileId(params.FileStat, params.ChunkSize, Bucket, Key),
            LocalUploadIdList;

        if (uuid && (LocalUploadIdList = session.getUploadIdList(uuid))) {
          util.each(LocalUploadIdList, function (UploadId) {
            session.removeUploadId(UploadId);
          });
        }

        ep.emit('no_available_upload_id');
      }
    });
  }); // 开始找可用 UploadId

  ep.emit('get_remote_upload_id_list');
} // 获取符合条件的全部上传任务 (条件包括 Bucket, Region, Prefix)


function wholeMultipartList(params, callback) {
  var self = this;
  var UploadList = [];
  var sendParams = {
    Bucket: params.Bucket,
    Region: params.Region,
    Prefix: params.Key,
    calledBySdk: params.calledBySdk || 'sliceUploadFile',
    tracker: params.tracker
  };

  var next = function next() {
    self.multipartList(sendParams, function (err, data) {
      if (err) return callback(err);
      UploadList.push.apply(UploadList, data.Upload || []);

      if (data.IsTruncated === 'true') {
        // 列表不完整
        sendParams.KeyMarker = data.NextKeyMarker;
        sendParams.UploadIdMarker = data.NextUploadIdMarker;
        next();
      } else {
        callback(null, {
          UploadList: UploadList
        });
      }
    });
  };

  next();
} // 获取指定上传任务的分块列表


function wholeMultipartListPart(params, callback) {
  var self = this;
  var PartList = [];
  var sendParams = {
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    UploadId: params.UploadId,
    calledBySdk: 'sliceUploadFile',
    tracker: params.tracker
  };

  var next = function next() {
    self.multipartListPart(sendParams, function (err, data) {
      if (err) return callback(err);
      PartList.push.apply(PartList, data.Part || []);

      if (data.IsTruncated === 'true') {
        // 列表不完整
        sendParams.PartNumberMarker = data.NextPartNumberMarker;
        next();
      } else {
        callback(null, {
          PartList: PartList
        });
      }
    });
  };

  next();
} // 上传文件分块，包括

/*
 UploadId (上传任务编号)
 AsyncLimit (并发量)，
 SliceList (上传的分块数组)，
 FilePath (本地文件的位置)，
 SliceSize (文件分块大小)
 FileSize (文件大小)
 onProgress (上传成功之后的回调函数)
 */


function uploadSliceList(params, cb) {
  var self = this;
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadData = params.UploadData;
  var FileSize = params.FileSize;
  var SliceSize = params.SliceSize;
  var ChunkParallel = Math.min(params.AsyncLimit || self.options.ChunkParallelLimit || 1, 256);
  var FilePath = params.FilePath;
  var SliceCount = Math.ceil(FileSize / SliceSize);
  var FinishSize = 0;
  var ServerSideEncryption = params.ServerSideEncryption;
  var needUploadSlices = util.filter(UploadData.PartList, function (SliceItem) {
    if (SliceItem['Uploaded']) {
      FinishSize += SliceItem['PartNumber'] >= SliceCount ? FileSize % SliceSize || SliceSize : SliceSize;
    }

    return !SliceItem['Uploaded'];
  });
  var _onProgress2 = params.onProgress;
  Async.eachLimit(needUploadSlices, ChunkParallel, function (SliceItem, asyncCallback) {
    if (!self._isRunningTask(TaskId)) return;
    var PartNumber = SliceItem['PartNumber'];
    var currentSize = Math.min(FileSize, SliceItem['PartNumber'] * SliceSize) - (SliceItem['PartNumber'] - 1) * SliceSize;
    var preAddSize = 0;
    uploadSliceItem.call(self, {
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      SliceSize: SliceSize,
      FileSize: FileSize,
      PartNumber: PartNumber,
      ServerSideEncryption: ServerSideEncryption,
      FilePath: FilePath,
      UploadData: UploadData,
      onProgress: function onProgress(data) {
        FinishSize += data.loaded - preAddSize;
        preAddSize = data.loaded;

        _onProgress2({
          loaded: FinishSize,
          total: FileSize
        });
      },
      tracker: params.tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;

      if (err) {
        FinishSize -= preAddSize;
      } else {
        FinishSize += currentSize - preAddSize;
        SliceItem.ETag = data.ETag;
      }

      _onProgress2({
        loaded: FinishSize,
        total: FileSize
      });

      asyncCallback(err || null, data);
    });
  }, function (err) {
    if (!self._isRunningTask(TaskId)) return;
    if (err) return cb(err);
    cb(null, {
      UploadId: UploadData.UploadId,
      SliceList: UploadData.PartList
    });
  });
} // 上传指定分片


function uploadSliceItem(params, callback) {
  var self = this;
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var FileSize = params.FileSize;
  var FilePath = params.FilePath;
  var PartNumber = params.PartNumber * 1;
  var SliceSize = params.SliceSize;
  var ServerSideEncryption = params.ServerSideEncryption;
  var UploadData = params.UploadData;
  var ChunkRetryTimes = self.options.ChunkRetryTimes + 1;
  var Headers = params.Headers || {};
  var start = SliceSize * (PartNumber - 1);
  var ContentLength = SliceSize;
  var end = start + SliceSize;

  if (end > FileSize) {
    end = FileSize;
    ContentLength = end - start;
  }

  var headersWhiteList = ['x-cos-traffic-limit', 'x-cos-mime-limit'];
  var headers = {};
  util.each(Headers, function (v, k) {
    if (headersWhiteList.indexOf(k) > -1) {
      headers[k] = v;
    }
  });
  util.fileSlice(FilePath, start, end, function (Body) {
    var md5 = util.getFileMd5(Body);
    var contentMd5 = md5 ? util.binaryBase64(md5) : null;
    var PartItem = UploadData.PartList[PartNumber - 1];
    Async.retry(ChunkRetryTimes, function (tryCallback) {
      if (!self._isRunningTask(TaskId)) return;
      self.multipartUpload({
        TaskId: TaskId,
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        ContentLength: ContentLength,
        PartNumber: PartNumber,
        UploadId: UploadData.UploadId,
        ServerSideEncryption: ServerSideEncryption,
        Body: Body,
        Headers: headers,
        onProgress: params.onProgress,
        ContentMD5: contentMd5,
        calledBySdk: 'sliceUploadFile',
        tracker: params.tracker
      }, function (err, data) {
        if (!self._isRunningTask(TaskId)) return;

        if (err) {
          return tryCallback(err);
        } else {
          PartItem.Uploaded = true;
          return tryCallback(null, data);
        }
      });
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      return callback(err, data);
    });
  });
} // 完成分块上传


function uploadSliceComplete(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadId = params.UploadId;
  var SliceList = params.SliceList;
  var self = this;
  var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
  var Parts = SliceList.map(function (item) {
    return {
      PartNumber: item.PartNumber,
      ETag: item.ETag
    };
  }); // 完成上传的请求也做重试

  Async.retry(ChunkRetryTimes, function (tryCallback) {
    self.multipartComplete({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      UploadId: UploadId,
      Parts: Parts,
      calledBySdk: 'sliceUploadFile',
      tracker: params.tracker
    }, tryCallback);
  }, function (err, data) {
    callback(err, data);
  });
} // 抛弃分块上传任务

/*
 AsyncLimit (抛弃上传任务的并发量)，
 UploadId (上传任务的编号，当 Level 为 task 时候需要)
 Level (抛弃分块上传任务的级别，task : 抛弃指定的上传任务，file ： 抛弃指定的文件对应的上传任务，其他值 ：抛弃指定Bucket 的全部上传任务)
 */


function abortUploadTask(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadId = params.UploadId;
  var Level = params.Level || 'task';
  var AsyncLimit = params.AsyncLimit;
  var self = this;
  var ep = new EventProxy();
  ep.on('error', function (errData) {
    return callback(errData);
  }); // 已经获取到需要抛弃的任务列表

  ep.on('get_abort_array', function (AbortArray) {
    abortUploadTaskArray.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Headers: params.Headers,
      AsyncLimit: AsyncLimit,
      AbortArray: AbortArray
    }, function (err, data) {
      if (err) {
        return callback(err);
      }

      callback(null, data);
    });
  });

  if (Level === 'bucket') {
    // Bucket 级别的任务抛弃，抛弃该 Bucket 下的全部上传任务
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      calledBySdk: 'abortUploadTask'
    }, function (err, data) {
      if (err) {
        return callback(err);
      }

      ep.emit('get_abort_array', data.UploadList || []);
    });
  } else if (Level === 'file') {
    // 文件级别的任务抛弃，抛弃该文件的全部上传任务
    if (!Key) return callback({
      error: 'abort_upload_task_no_key'
    });
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      calledBySdk: 'abortUploadTask'
    }, function (err, data) {
      if (err) {
        return callback(err);
      }

      ep.emit('get_abort_array', data.UploadList || []);
    });
  } else if (Level === 'task') {
    // 单个任务级别的任务抛弃，抛弃指定 UploadId 的上传任务
    if (!UploadId) return callback({
      error: 'abort_upload_task_no_id'
    });
    if (!Key) return callback({
      error: 'abort_upload_task_no_key'
    });
    ep.emit('get_abort_array', [{
      Key: Key,
      UploadId: UploadId
    }]);
  } else {
    return callback({
      error: 'abort_unknown_level'
    });
  }
} // 批量抛弃分块上传任务


function abortUploadTaskArray(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var AbortArray = params.AbortArray;
  var AsyncLimit = params.AsyncLimit || 1;
  var self = this;
  var index = 0;
  var resultList = new Array(AbortArray.length);
  Async.eachLimit(AbortArray, AsyncLimit, function (AbortItem, callback) {
    var eachIndex = index;

    if (Key && Key !== AbortItem.Key) {
      resultList[eachIndex] = {
        error: {
          KeyNotMatch: true
        }
      };
      callback(null);
      return;
    }

    var UploadId = AbortItem.UploadId || AbortItem.UploadID;
    self.multipartAbort({
      Bucket: Bucket,
      Region: Region,
      Key: AbortItem.Key,
      Headers: params.Headers,
      UploadId: UploadId
    }, function (err) {
      var task = {
        Bucket: Bucket,
        Region: Region,
        Key: AbortItem.Key,
        UploadId: UploadId
      };
      resultList[eachIndex] = {
        error: err,
        task: task
      };
      callback(null);
    });
    index++;
  }, function (err) {
    if (err) {
      return callback(err);
    }

    var successList = [];
    var errorList = [];

    for (var i = 0, len = resultList.length; i < len; i++) {
      var item = resultList[i];

      if (item['task']) {
        if (item['error']) {
          errorList.push(item['task']);
        } else {
          successList.push(item['task']);
        }
      }
    }

    return callback(null, {
      successList: successList,
      errorList: errorList
    });
  });
} // 高级上传


function uploadFile(params, callback) {
  var self = this; // 判断多大的文件使用分片上传

  var SliceSize = params.SliceSize === undefined ? self.options.SliceSize : params.SliceSize;
  var taskList = [];
  var FileSize = params.FileSize;
  var fileInfo = {
    TaskId: ''
  }; // 上传链路

  if (self.options.EnableTracker) {
    var accelerate = self.options.UseAccelerate || self.options.Domain.includes('accelerate.');
    params.tracker = new Tracker({
      bucket: params.Bucket,
      region: params.Region,
      apiName: 'uploadFile',
      fileKey: params.Key,
      fileSize: FileSize,
      accelerate: accelerate,
      deepTracker: self.options.DeepTracker,
      customId: self.options.CustomId,
      delay: self.options.TrackerDelay
    });
  } // 整理 option，用于返回给回调


  util.each(params, function (v, k) {
    if (_typeof(v) !== 'object' && typeof v !== 'function') {
      fileInfo[k] = v;
    }
  }); // 处理文件 TaskReady

  var _onTaskReady = params.onTaskReady;

  params.onTaskReady = function (tid) {
    fileInfo.TaskId = tid;
    _onTaskReady && _onTaskReady(tid);
  }; // 处理文件完成


  var _onFileFinish = params.onFileFinish;

  var onFileFinish = function onFileFinish(err, data) {
    // 格式化上报参数并上报
    params.tracker && params.tracker.formatResult(err, data);
    _onFileFinish && _onFileFinish(err, data, fileInfo);
    callback && callback(err, data);
  }; // 添加上传任务


  var simpleUploadMethod = self.options.SimpleUploadMethod === 'postObject' ? 'postObject' : 'putObject';
  var api = FileSize > SliceSize ? 'sliceUploadFile' : simpleUploadMethod;
  taskList.push({
    api: api,
    params: params,
    callback: onFileFinish
  });

  self._addTasks(taskList);
} // 批量上传文件


function uploadFiles(params, callback) {
  var self = this; // 判断多大的文件使用分片上传

  var SliceSize = params.SliceSize === undefined ? self.options.SliceSize : params.SliceSize; // 汇总返回进度

  var TotalSize = 0;
  var TotalFinish = 0;
  var onTotalProgress = util.throttleOnProgress.call(self, TotalFinish, params.onProgress); // 汇总返回回调

  var unFinishCount = params.files.length;
  var _onTotalFileFinish = params.onFileFinish;
  var resultList = Array(unFinishCount);

  var onTotalFileFinish = function onTotalFileFinish(err, data, options) {
    onTotalProgress(null, true);
    _onTotalFileFinish && _onTotalFileFinish(err, data, options);
    resultList[options.Index] = {
      options: options,
      error: err,
      data: data
    };

    if (--unFinishCount <= 0 && callback) {
      callback(null, {
        files: resultList
      });
    }
  }; // 开始处理每个文件


  var taskList = [];
  util.each(params.files, function (fileParams, index) {
    var FileSize = fileParams.FileSize;
    var fileInfo = {
      Index: index,
      TaskId: ''
    }; // 更新文件总大小

    TotalSize += FileSize; // 单个文件上传链路

    if (self.options.EnableTracker) {
      var accelerate = self.options.UseAccelerate || self.options.Domain.includes('accelerate.');
      fileParams.tracker = new Tracker({
        bucket: fileParams.Bucket,
        region: fileParams.Region,
        apiName: 'uploadFiles',
        fileKey: fileParams.Key,
        fileSize: FileSize,
        accelerate: accelerate,
        deepTracker: self.options.DeepTracker,
        customId: self.options.CustomId,
        delay: self.options.TrackerDelay
      });
    } // 整理 option，用于返回给回调


    util.each(fileParams, function (v, k) {
      if (_typeof(v) !== 'object' && typeof v !== 'function') {
        fileInfo[k] = v;
      }
    }); // 处理单个文件 TaskReady

    var _onTaskReady = fileParams.onTaskReady;

    fileParams.onTaskReady = function (tid) {
      fileInfo.TaskId = tid;
      _onTaskReady && _onTaskReady(tid);
    }; // 处理单个文件进度


    var PreAddSize = 0;
    var _onProgress = fileParams.onProgress;

    fileParams.onProgress = function (info) {
      TotalFinish = TotalFinish - PreAddSize + info.loaded;
      PreAddSize = info.loaded;
      _onProgress && _onProgress(info);
      onTotalProgress({
        loaded: TotalFinish,
        total: TotalSize
      });
    }; // 处理单个文件完成


    var _onFileFinish = fileParams.onFileFinish;

    var onFileFinish = function onFileFinish(err, data) {
      // 格式化上报参数并上报
      fileParams.tracker && fileParams.tracker.formatResult(err, data);
      _onFileFinish && _onFileFinish(err, data);
      onTotalFileFinish && onTotalFileFinish(err, data, fileInfo);
    }; // 添加上传任务


    var simpleUploadMethod = self.options.SimpleUploadMethod === 'postObject' ? 'postObject' : 'putObject';
    var api = FileSize > SliceSize ? 'sliceUploadFile' : simpleUploadMethod;
    taskList.push({
      api: api,
      params: fileParams,
      callback: onFileFinish
    });
  });

  self._addTasks(taskList);
} // 分片复制文件


function sliceCopyFile(params, callback) {
  var ep = new EventProxy();
  var self = this;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var CopySource = params.CopySource;
  var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);

  if (!m) {
    callback({
      error: 'CopySource format error'
    });
    return;
  }

  var SourceBucket = m[1];
  var SourceRegion = m[3];
  var SourceKey = decodeURIComponent(m[4]);
  var CopySliceSize = params.CopySliceSize === undefined ? self.options.CopySliceSize : params.CopySliceSize;
  CopySliceSize = Math.max(0, CopySliceSize);
  var ChunkSize = params.CopyChunkSize || this.options.CopyChunkSize;
  var ChunkParallel = this.options.CopyChunkParallelLimit;
  var FinishSize = 0;
  var FileSize;

  var _onProgress3; // 分片复制完成，开始 multipartComplete 操作


  ep.on('copy_slice_complete', function (UploadData) {
    self.multipartComplete({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      UploadId: UploadData.UploadId,
      Parts: UploadData.PartList,
      calledBySdk: 'sliceCopyFile'
    }, function (err, data) {
      if (err) {
        _onProgress3(null, true);

        return callback(err);
      }

      _onProgress3({
        loaded: FileSize,
        total: FileSize
      }, true);

      callback(null, data);
    });
  });
  ep.on('get_copy_data_finish', function (UploadData) {
    Async.eachLimit(UploadData.PartList, ChunkParallel, function (SliceItem, asyncCallback) {
      var PartNumber = SliceItem.PartNumber;
      var CopySourceRange = SliceItem.CopySourceRange;
      var currentSize = SliceItem.end - SliceItem.start;
      var preAddSize = 0;
      copySliceItem.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        CopySource: CopySource,
        UploadId: UploadData.UploadId,
        PartNumber: PartNumber,
        CopySourceRange: CopySourceRange,
        onProgress: function onProgress(data) {
          FinishSize += data.loaded - preAddSize;
          preAddSize = data.loaded;

          _onProgress3({
            loaded: FinishSize,
            total: FileSize
          });
        }
      }, function (err, data) {
        if (err) {
          return asyncCallback(err);
        }

        _onProgress3({
          loaded: FinishSize,
          total: FileSize
        });

        FinishSize += currentSize - preAddSize;
        SliceItem.ETag = data.ETag;
        asyncCallback(err || null, data);
      });
    }, function (err) {
      if (err) {
        _onProgress3(null, true);

        return callback(err);
      }

      ep.emit('copy_slice_complete', UploadData);
    });
  });
  ep.on('get_file_size_finish', function (SourceHeaders) {
    // 控制分片大小
    (function () {
      var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
      var AutoChunkSize = 1024 * 1024;

      for (var i = 0; i < SIZE.length; i++) {
        AutoChunkSize = SIZE[i] * 1024 * 1024;
        if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
      }

      params.ChunkSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
      var ChunkCount = Math.ceil(FileSize / ChunkSize);
      var list = [];

      for (var partNumber = 1; partNumber <= ChunkCount; partNumber++) {
        var start = (partNumber - 1) * ChunkSize;
        var end = partNumber * ChunkSize < FileSize ? partNumber * ChunkSize - 1 : FileSize - 1;
        var item = {
          PartNumber: partNumber,
          start: start,
          end: end,
          CopySourceRange: "bytes=" + start + "-" + end
        };
        list.push(item);
      }

      params.PartList = list;
    })();

    var TargetHeader;

    if (params.Headers['x-cos-metadata-directive'] === 'Replaced') {
      TargetHeader = params.Headers;
    } else {
      TargetHeader = SourceHeaders;
    }

    TargetHeader['x-cos-storage-class'] = params.Headers['x-cos-storage-class'] || SourceHeaders['x-cos-storage-class'];
    TargetHeader = util.clearKey(TargetHeader);
    /**
     * 对于归档存储的对象，如果未恢复副本，则不允许 Copy
     */

    if (SourceHeaders['x-cos-storage-class'] === 'ARCHIVE' || SourceHeaders['x-cos-storage-class'] === 'DEEP_ARCHIVE') {
      var restoreHeader = SourceHeaders['x-cos-restore'];

      if (!restoreHeader || restoreHeader === 'ongoing-request="true"') {
        callback({
          error: 'Unrestored archive object is not allowed to be copied'
        });
        return;
      }
    }
    /**
     * 去除一些无用的头部，规避 multipartInit 出错
     * 这些头部通常是在 putObjectCopy 时才使用
     */


    delete TargetHeader['x-cos-copy-source'];
    delete TargetHeader['x-cos-metadata-directive'];
    delete TargetHeader['x-cos-copy-source-If-Modified-Since'];
    delete TargetHeader['x-cos-copy-source-If-Unmodified-Since'];
    delete TargetHeader['x-cos-copy-source-If-Match'];
    delete TargetHeader['x-cos-copy-source-If-None-Match'];
    self.multipartInit({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Headers: TargetHeader,
      calledBySdk: 'sliceCopyFile'
    }, function (err, data) {
      if (err) {
        return callback(err);
      }

      params.UploadId = data.UploadId;
      ep.emit('get_copy_data_finish', params);
    });
  }); // 获取远端复制源文件的大小

  self.headObject({
    Bucket: SourceBucket,
    Region: SourceRegion,
    Key: SourceKey
  }, function (err, data) {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        callback({
          ErrorStatus: SourceKey + ' Not Exist'
        });
      } else {
        callback(err);
      }

      return;
    }

    FileSize = params.FileSize = data.headers['content-length'];

    if (FileSize === undefined || !FileSize) {
      callback({
        error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
      });
      return;
    }

    _onProgress3 = util.throttleOnProgress.call(self, FileSize, params.onProgress); // 开始上传

    if (FileSize <= CopySliceSize) {
      if (!params.Headers['x-cos-metadata-directive']) {
        params.Headers['x-cos-metadata-directive'] = 'Copy';
      }

      self.putObjectCopy(params, function (err, data) {
        if (err) {
          _onProgress3(null, true);

          return callback(err);
        }

        _onProgress3({
          loaded: FileSize,
          total: FileSize
        }, true);

        callback(err, data);
      });
    } else {
      var resHeaders = data.headers;
      var SourceHeaders = {
        'Cache-Control': resHeaders['cache-control'],
        'Content-Disposition': resHeaders['content-disposition'],
        'Content-Encoding': resHeaders['content-encoding'],
        'Content-Type': resHeaders['content-type'],
        'Expires': resHeaders['expires'],
        'x-cos-storage-class': resHeaders['x-cos-storage-class']
      };
      util.each(resHeaders, function (v, k) {
        var metaPrefix = 'x-cos-meta-';

        if (k.indexOf(metaPrefix) === 0 && k.length > metaPrefix.length) {
          SourceHeaders[k] = v;
        }
      });
      ep.emit('get_file_size_finish', SourceHeaders);
    }
  });
} // 复制指定分片


function copySliceItem(params, callback) {
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var CopySource = params.CopySource;
  var UploadId = params.UploadId;
  var PartNumber = params.PartNumber * 1;
  var CopySourceRange = params.CopySourceRange;
  var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
  var self = this;
  Async.retry(ChunkRetryTimes, function (tryCallback) {
    self.uploadPartCopy({
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      CopySource: CopySource,
      UploadId: UploadId,
      PartNumber: PartNumber,
      CopySourceRange: CopySourceRange,
      onProgress: params.onProgress
    }, function (err, data) {
      tryCallback(err || null, data);
    });
  }, function (err, data) {
    return callback(err, data);
  });
}

var API_MAP = {
  sliceUploadFile: sliceUploadFile,
  abortUploadTask: abortUploadTask,
  uploadFile: uploadFile,
  uploadFiles: uploadFiles,
  sliceCopyFile: sliceCopyFile
};

module.exports.init = function (COS, task) {
  task.transferToTaskMethod(API_MAP, 'sliceUploadFile');
  util.each(API_MAP, function (fn, apiName) {
    COS.prototype[apiName] = util.apiWrapper(apiName, fn);
  });
};

/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var eachLimit = function eachLimit(arr, limit, iterator, callback) {
  callback = callback || function () {};

  if (!arr.length || limit <= 0) {
    return callback();
  }

  var completed = 0;
  var started = 0;
  var running = 0;

  (function replenish() {
    if (completed >= arr.length) {
      return callback();
    }

    while (running < limit && started < arr.length) {
      started += 1;
      running += 1;
      iterator(arr[started - 1], function (err) {
        if (err) {
          callback(err);

          callback = function callback() {};
        } else {
          completed += 1;
          running -= 1;

          if (completed >= arr.length) {
            callback();
          } else {
            replenish();
          }
        }
      });
    }
  })();
};

var retry = function retry(times, iterator, callback) {
  var next = function next(index) {
    iterator(function (err, data) {
      if (err && index < times) {
        next(index + 1);
      } else {
        callback(err, data);
      }
    });
  };

  if (times < 1) {
    callback();
  } else {
    next(1);
  }
};

var async = {
  eachLimit: eachLimit,
  retry: retry
};
module.exports = async;

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var REQUEST = __webpack_require__(/*! ../lib/request */ "./lib/request.js");

var base64 = __webpack_require__(/*! ../lib/base64 */ "./lib/base64.js");

var util = __webpack_require__(/*! ./util */ "./src/util.js");

var mime = __webpack_require__(/*! mime */ "./node_modules/mime/index.js"); // Bucket 相关

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
    headers: params.Headers
  }, function (err, data) {
    if (err) return callback(err);
    var buckets = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Buckets && data.ListAllMyBucketsResult.Buckets.Bucket || [];
    buckets = util.isArray(buckets) ? buckets : [buckets];
    var owner = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Owner || {};
    callback(null, {
      Buckets: buckets,
      Owner: owner,
      statusCode: data.statusCode,
      headers: data.headers
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

  if (params['BucketAZConfig']) {
    var CreateBucketConfiguration = {
      BucketAZConfig: params.BucketAZConfig
    };
    xml = util.json2xml({
      CreateBucketConfiguration: CreateBucketConfiguration
    });
  }

  submitRequest.call(this, {
    Action: 'name/cos:PutBucket',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    body: xml
  }, function (err, data) {
    if (err) return callback(err);
    var url = getUrl({
      protocol: self.options.Protocol,
      domain: self.options.Domain,
      bucket: params.Bucket,
      region: params.Region,
      isLocation: true
    });
    callback(null, {
      Location: url,
      statusCode: data.statusCode,
      headers: data.headers
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
    method: 'HEAD'
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
    qs: reqParams
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
      headers: data.headers
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
    method: 'DELETE'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    AccessControlPolicy.AccessControlList = {
      Grant: Grants
    };
    xml = util.json2xml({
      AccessControlPolicy: AccessControlPolicy
    });
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));
  } // Grant Header 去重


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
    body: xml
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'acl'
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
      headers: data.headers
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
  var Conf = {
    CORSRule: CORSRules
  };
  if (params.ResponseVary) Conf.ResponseVary = params.ResponseVary;
  var xml = util.json2xml({
    CORSConfiguration: Conf
  });
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
    headers: headers
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'cors'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchCORSConfiguration') {
        var result = {
          CORSRules: [],
          statusCode: err.statusCode
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
      headers: data.headers
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
    action: 'cors'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode || err.statusCode,
      headers: data.headers
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
    action: 'location'
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
    callback({
      error: 'Policy format error'
    });
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
    json: true
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    rawBody: true
  }, function (err, data) {
    if (err) {
      if (err.statusCode && err.statusCode === 403) {
        return callback({
          ErrorStatus: 'Access Denied'
        });
      }

      if (err.statusCode && err.statusCode === 405) {
        return callback({
          ErrorStatus: 'Method Not Allowed'
        });
      }

      if (err.statusCode && err.statusCode === 404) {
        return callback({
          ErrorStatus: 'Policy Not Found'
        });
      }

      return callback(err);
    }

    var Policy = {};

    try {
      Policy = JSON.parse(data.body);
    } catch (e) {}

    callback(null, {
      Policy: Policy,
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'policy'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode || err.statusCode,
      headers: data.headers
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
  var xml = util.json2xml({
    Tagging: {
      TagSet: {
        Tag: Tags
      }
    }
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'tagging'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === 'NoSuchTagSet')) {
        var result = {
          Tags: [],
          statusCode: err.statusCode
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
    } catch (e) {}

    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    callback(null, {
      Tags: Tags,
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'tagging'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

function putBucketLifecycle(params, callback) {
  var LifecycleConfiguration = params['LifecycleConfiguration'] || {};
  var Rules = LifecycleConfiguration.Rules || params.Rules || [];
  Rules = util.clone(Rules);
  var xml = util.json2xml({
    LifecycleConfiguration: {
      Rule: Rules
    }
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'lifecycle'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchLifecycleConfiguration') {
        var result = {
          Rules: [],
          statusCode: err.statusCode
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
    } catch (e) {}

    Rules = util.clone(util.isArray(Rules) ? Rules : [Rules]);
    callback(null, {
      Rules: Rules,
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'lifecycle'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

function putBucketVersioning(params, callback) {
  if (!params['VersioningConfiguration']) {
    callback({
      error: 'missing param VersioningConfiguration'
    });
    return;
  }

  var VersioningConfiguration = params['VersioningConfiguration'] || {};
  var xml = util.json2xml({
    VersioningConfiguration: VersioningConfiguration
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'versioning'
  }, function (err, data) {
    if (!err) {
      !data.VersioningConfiguration && (data.VersioningConfiguration = {});
    }

    callback(err, data);
  });
}

function putBucketReplication(params, callback) {
  var ReplicationConfiguration = util.clone(params.ReplicationConfiguration);
  var xml = util.json2xml({
    ReplicationConfiguration: ReplicationConfiguration
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'replication'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'ReplicationConfigurationnotFoundError')) {
        var result = {
          ReplicationConfiguration: {
            Rules: []
          },
          statusCode: err.statusCode
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
    action: 'replication'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    callback({
      error: 'missing param WebsiteConfiguration'
    });
    return;
  }

  var WebsiteConfiguration = util.clone(params['WebsiteConfiguration'] || {});
  var RoutingRules = WebsiteConfiguration['RoutingRules'] || WebsiteConfiguration['RoutingRule'] || [];
  RoutingRules = util.isArray(RoutingRules) ? RoutingRules : [RoutingRules];
  delete WebsiteConfiguration.RoutingRule;
  delete WebsiteConfiguration.RoutingRules;
  if (RoutingRules.length) WebsiteConfiguration.RoutingRules = {
    RoutingRule: RoutingRules
  };
  var xml = util.json2xml({
    WebsiteConfiguration: WebsiteConfiguration
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'website'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error.Code === 'NoSuchWebsiteConfiguration') {
        var result = {
          WebsiteConfiguration: {},
          statusCode: err.statusCode
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
      headers: data.headers
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
    action: 'website'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    callback({
      error: 'missing param RefererConfiguration'
    });
    return;
  }

  var RefererConfiguration = util.clone(params['RefererConfiguration'] || {});
  var DomainList = RefererConfiguration['DomainList'] || {};
  var Domains = DomainList['Domains'] || DomainList['Domain'] || [];
  Domains = util.isArray(Domains) ? Domains : [Domains];
  if (Domains.length) RefererConfiguration.DomainList = {
    Domain: Domains
  };
  var xml = util.json2xml({
    RefererConfiguration: RefererConfiguration
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'referer'
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error.Code === 'NoSuchRefererConfiguration') {
        var result = {
          WebsiteConfiguration: {},
          statusCode: err.statusCode
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
      RefererConfiguration.DomainList = {
        Domains: Domains
      };
    }

    callback(null, {
      RefererConfiguration: RefererConfiguration,
      statusCode: data.statusCode,
      headers: data.headers
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
  var xml = util.json2xml({
    DomainConfiguration: {
      DomainRule: DomainRule
    }
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'domain'
  }, function (err, data) {
    if (err) return callback(err);
    var DomainRule = [];

    try {
      DomainRule = data.DomainConfiguration.DomainRule || [];
    } catch (e) {}

    DomainRule = util.clone(util.isArray(DomainRule) ? DomainRule : [DomainRule]);
    callback(null, {
      DomainRule: DomainRule,
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'domain'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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


function putBucketOrigin(params, callback) {
  var OriginConfiguration = params['OriginConfiguration'] || {};
  var OriginRule = OriginConfiguration.OriginRule || params.OriginRule || [];
  OriginRule = util.clone(OriginRule);
  var xml = util.json2xml({
    OriginConfiguration: {
      OriginRule: OriginRule
    }
  });
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'origin'
  }, function (err, data) {
    if (err) return callback(err);
    var OriginRule = [];

    try {
      OriginRule = data.OriginConfiguration.OriginRule || [];
    } catch (e) {}

    OriginRule = util.clone(util.isArray(OriginRule) ? OriginRule : [OriginRule]);
    callback(null, {
      OriginRule: OriginRule,
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'origin'
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'logging'
  }, function (err, data) {
    if (err) return callback(err);
    delete data.BucketLoggingStatus._xmlns;
    callback(null, {
      BucketLoggingStatus: data.BucketLoggingStatus,
      statusCode: data.statusCode,
      headers: data.headers
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

  if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
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
    headers: headers
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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

    if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
      var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;

      if (Object.keys(Encryption).indexOf('SSE-COS') > -1) {
        Encryption['SSECOS'] = Encryption['SSE-COS'];
        delete Encryption['SSE-COS'];
      }
    }

    callback(null, {
      InventoryConfiguration: InventoryConfiguration,
      statusCode: data.statusCode,
      headers: data.headers
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

      if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
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
      headers: data.headers
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
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
/* 全球加速 */


function putBucketAccelerate(params, callback) {
  if (!params['AccelerateConfiguration']) {
    callback({
      error: 'missing param AccelerateConfiguration'
    });
    return;
  }

  var configuration = {
    AccelerateConfiguration: params.AccelerateConfiguration || {}
  };
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
    headers: headers
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'accelerate'
  }, function (err, data) {
    if (!err) {
      !data.AccelerateConfiguration && (data.AccelerateConfiguration = {});
    }

    callback(err, data);
  });
} // Object 相关

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
    headers: params.Headers
  }, function (err, data) {
    if (err) {
      var statusCode = err.statusCode;

      if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
        return callback(null, {
          NotModified: true,
          statusCode: statusCode
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
    action: 'versions'
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
      headers: data.headers
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
  var tracker = params.tracker;
  tracker && tracker.setParams({
    signStartTime: new Date().getTime()
  });
  reqParams['response-content-type'] = params['ResponseContentType'];
  reqParams['response-content-language'] = params['ResponseContentLanguage'];
  reqParams['response-expires'] = params['ResponseExpires'];
  reqParams['response-cache-control'] = params['ResponseCacheControl'];
  reqParams['response-content-disposition'] = params['ResponseContentDisposition'];
  reqParams['response-content-encoding'] = params['ResponseContentEncoding']; // 如果用户自己传入了 output

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
    tracker: tracker
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
      headers: data.headers
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
  var onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress); // 特殊处理 Cache-Control、Content-Type，避免代理更改这两个字段导致写入到 Object 属性里

  var headers = params.Headers;
  if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
  if (!headers['Content-Type'] && !headers['content-type']) headers['Content-Type'] = mime.getType(params.Key) || 'application/octet-stream';
  var needCalcMd5 = params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5 || self.options.UploadCheckContentMd5;
  var tracker = params.tracker;
  needCalcMd5 && tracker && tracker.setParams({
    md5StartTime: new Date().getTime()
  });
  util.getBodyMd5(needCalcMd5, params.Body, function (md5) {
    if (md5) {
      tracker && tracker.setParams({
        md5EndTime: new Date().getTime()
      });
      if (self.options.UploadCheckContentMd5) headers['Content-MD5'] = util.binaryBase64(md5);
      if (params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5) headers['x-cos-meta-md5'] = md5;
    }

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
      tracker: tracker
    }, function (err, data) {
      if (err) {
        onProgress(null, true);
        return callback(err);
      }

      onProgress({
        loaded: FileSize,
        total: FileSize
      }, true);
      var url = getUrl({
        ForcePathStyle: self.options.ForcePathStyle,
        protocol: self.options.Protocol,
        domain: self.options.Domain,
        bucket: params.Bucket,
        region: !self.options.UseAccelerate ? params.Region : 'accelerate',
        object: params.Key
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
    callback({
      error: 'missing param FilePath'
    });
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
  headers['x-cos-traffic-limit'] = params['TrafficLimit']; // SSE-C

  headers['x-cos-server-side-encryption-customer-algorithm'] = params['SSECustomerAlgorithm'];
  headers['x-cos-server-side-encryption-customer-key'] = params['SSECustomerKey'];
  headers['x-cos-server-side-encryption-customer-key-MD5'] = params['SSECustomerKeyMD5']; // SSE-COS、SSE-KMS

  headers['x-cos-server-side-encryption'] = params['ServerSideEncryption'];
  headers['x-cos-server-side-encryption-cos-kms-key-id'] = params['SSEKMSKeyId'];
  headers['x-cos-server-side-encryption-context'] = params['SSEContext']; // 删除 Content-Length 避免签名错误

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
    onProgress: onProgress
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
        isLocation: true
      });
      return callback(null, {
        Location: url,
        statusCode: data.statusCode,
        headers: headers,
        ETag: ETag
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
    VersionId: params.VersionId
  }, function (err, data) {
    if (err) {
      var statusCode = err.statusCode;

      if (statusCode && statusCode === 204) {
        return callback(null, {
          statusCode: statusCode
        });
      } else if (statusCode && statusCode === 404) {
        return callback(null, {
          BucketNotFound: true,
          statusCode: statusCode
        });
      } else {
        return callback(err);
      }
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    action: 'acl'
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
      headers: data.headers
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
    AccessControlPolicy.AccessControlList = {
      Grant: Grants
    };
    xml = util.json2xml({
      AccessControlPolicy: AccessControlPolicy
    });
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.binaryBase64(util.md5(xml));
  } // Grant Header 去重


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
    body: xml
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    headers: headers
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
      headers: data.headers
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
    callback({
      error: 'CopySource format error'
    });
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
      prefix: SourceKey
    }, {
      action: 'name/cos:PutObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: params.Key
    }],
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    headers: params.Headers
  }, function (err, data) {
    if (err) return callback(err);
    var result = util.clone(data.CopyObjectResult || {});
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

function uploadPartCopy(params, callback) {
  var CopySource = params.CopySource || '';
  var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);

  if (!m) {
    callback({
      error: 'CopySource format error'
    });
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
      prefix: SourceKey
    }, {
      action: 'name/cos:PutObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: params.Key
    }],
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    qs: {
      partNumber: params['PartNumber'],
      uploadId: params['UploadId']
    },
    headers: params.Headers
  }, function (err, data) {
    if (err) return callback(err);
    var result = util.clone(data.CopyPartResult || {});
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

function deleteMultipleObject(params, callback) {
  var Objects = params.Objects || [];
  var Quiet = params.Quiet;
  Objects = util.isArray(Objects) ? Objects : [Objects];
  var xml = util.json2xml({
    Delete: {
      Object: Objects,
      Quiet: Quiet || false
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.binaryBase64(util.md5(xml));
  var Scope = util.map(Objects, function (v) {
    return {
      action: 'name/cos:DeleteObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: v.Key
    };
  });
  submitRequest.call(this, {
    Scope: Scope,
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'delete',
    headers: headers
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
      headers: data.headers
    });
    callback(null, result);
  });
}

function restoreObject(params, callback) {
  var headers = params.Headers;

  if (!params['RestoreRequest']) {
    callback({
      error: 'missing param RestoreRequest'
    });
    return;
  }

  var RestoreRequest = params.RestoreRequest || {};
  var xml = util.json2xml({
    RestoreRequest: RestoreRequest
  });
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
    headers: headers
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
  var xml = util.json2xml({
    Tagging: {
      TagSet: {
        Tag: Tags
      }
    }
  });
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
    VersionId: params.VersionId
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    VersionId: params.VersionId
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === 'NoSuchTagSet')) {
        var result = {
          Tags: [],
          statusCode: err.statusCode
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
    } catch (e) {}

    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    callback(null, {
      Tags: Tags,
      statusCode: data.statusCode,
      headers: data.headers
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
    VersionId: params.VersionId
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
} // 分块上传

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
  var tracker = params.tracker; // 特殊处理 Cache-Control、Content-Type

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
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartInit'
      });
      return callback(err);
    }

    data = util.clone(data || {});

    if (data && data.InitiateMultipartUploadResult) {
      return callback(null, util.extend(data.InitiateMultipartUploadResult, {
        statusCode: data.statusCode,
        headers: data.headers
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
    var tracker = params.tracker;
    var needCalcMd5 = self.options.UploadCheckContentMd5;
    needCalcMd5 && tracker && tracker.setParams({
      md5StartTime: new Date().getTime()
    });
    util.getBodyMd5(needCalcMd5, params.Body, function (md5) {
      if (md5) {
        params.Headers['Content-MD5'] = util.binaryBase64(md5);
        needCalcMd5 && tracker && tracker.setParams({
          md5EndTime: new Date().getTime()
        });
      }

      tracker && tracker.setParams({
        partNumber: params.PartNumber
      });
      submitRequest.call(self, {
        Action: 'name/cos:UploadPart',
        TaskId: params.TaskId,
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        qs: {
          partNumber: params['PartNumber'],
          uploadId: params['UploadId']
        },
        headers: params.Headers,
        onProgress: params.onProgress,
        body: params.Body || null,
        tracker: tracker
      }, function (err, data) {
        if (err) {
          tracker && tracker.parent && tracker.parent.setParams({
            errorNode: 'multipartUpload'
          });
          return callback(err);
        }

        callback(null, {
          ETag: util.attr(data.headers, 'etag', {}),
          statusCode: data.statusCode,
          headers: data.headers
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
  var tracker = params.tracker;

  for (var i = 0, len = Parts.length; i < len; i++) {
    if (Parts[i]['ETag'].indexOf('"') === 0) {
      continue;
    }

    Parts[i]['ETag'] = '"' + Parts[i]['ETag'] + '"';
  }

  var xml = util.json2xml({
    CompleteMultipartUpload: {
      Part: Parts
    }
  });
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
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartComplete'
      });
      return callback(err);
    }

    var url = getUrl({
      ForcePathStyle: self.options.ForcePathStyle,
      protocol: self.options.Protocol,
      domain: self.options.Domain,
      bucket: params.Bucket,
      region: params.Region,
      object: params.Key,
      isLocation: true
    });
    var CompleteMultipartUploadResult = data.CompleteMultipartUploadResult || {};
    var result = util.extend(CompleteMultipartUploadResult, {
      Location: url,
      statusCode: data.statusCode,
      headers: data.headers
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
  var tracker = params.tracker;
  tracker && tracker.setParams({
    signStartTime: new Date().getTime()
  });
  submitRequest.call(this, {
    Action: 'name/cos:ListMultipartUploads',
    ResourceKey: reqParams['prefix'],
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    qs: reqParams,
    action: 'uploads',
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartList'
      });
      return callback(err);
    }

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
      headers: data.headers
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
    qs: reqParams
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartListPart'
      });
      return callback(err);
    }

    var ListPartsResult = data.ListPartsResult || {};
    var Part = ListPartsResult.Part || [];
    Part = util.isArray(Part) ? Part : [Part];
    ListPartsResult.Part = Part;
    var result = util.clone(ListPartsResult);
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
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
    qs: reqParams
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
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
    headers: params.Headers
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
    rawBody: params.RawBody
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
    SystemClockOffset: self.options.SystemClockOffset
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
    object: params.Key
  });
  var queryParamsStr = '';

  if (params.Query) {
    queryParamsStr += util.obj2str(params.Query);
  }

  if (params.QueryString) {
    queryParamsStr += (queryParamsStr ? '&' : '') + params.QueryString;
  }

  var syncUrl = url;

  if (params.Sign !== undefined && !params.Sign) {
    queryParamsStr && (syncUrl += '?' + queryParamsStr);
    callback(null, {
      Url: syncUrl
    });
    return syncUrl;
  } // 签名加上 Host，避免跨桶访问


  var SignHost = getSignHost.call(this, {
    Bucket: params.Bucket,
    Region: params.Region,
    UseAccelerate: params.UseAccelerate,
    Url: url
  });
  var AuthData = getAuthorizationAsync.call(this, {
    Action: (params.Method || '').toUpperCase() === 'PUT' ? 'name/cos:PutObject' : 'name/cos:GetObject',
    Bucket: params.Bucket || '',
    Region: params.Region || '',
    Method: params.Method || 'get',
    Key: params.Key,
    Expires: params.Expires,
    Headers: params.Headers,
    Query: params.Query,
    SignHost: SignHost,
    ForceSignHost: params.ForceSignHost === false ? false : self.options.ForceSignHost // getObjectUrl支持传参ForceSignHost

  }, function (err, AuthData) {
    if (!callback) return;

    if (err) {
      callback(err);
      return;
    } // 兼容万象url qUrlParamList需要再encode一次


    var replaceUrlParamList = function replaceUrlParamList(url) {
      var urlParams = url.match(/q-url-param-list.*?(?=&)/g)[0];
      var encodedParams = 'q-url-param-list=' + encodeURIComponent(urlParams.replace(/q-url-param-list=/, '')).toLowerCase();
      var reg = new RegExp(urlParams, 'g');
      var replacedUrl = url.replace(reg, encodedParams);
      return replacedUrl;
    };

    var signUrl = url;
    signUrl += '?' + (AuthData.Authorization.indexOf('q-signature') > -1 ? replaceUrlParamList(AuthData.Authorization) : 'sign=' + encodeURIComponent(AuthData.Authorization));
    AuthData.SecurityToken && (signUrl += '&x-cos-security-token=' + AuthData.SecurityToken);
    AuthData.ClientIP && (signUrl += '&clientIP=' + AuthData.ClientIP);
    AuthData.ClientUA && (signUrl += '&clientUA=' + AuthData.ClientUA);
    AuthData.Token && (signUrl += '&token=' + AuthData.Token);
    queryParamsStr && (signUrl += '&' + queryParamsStr);
    setTimeout(function () {
      callback(null, {
        Url: signUrl
      });
    });
  });

  if (AuthData) {
    syncUrl += '?' + AuthData.Authorization + (AuthData.SecurityToken ? '&x-cos-security-token=' + AuthData.SecurityToken : '');
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
    ACL: ''
  };
  var GrantMap = {
    'FULL_CONTROL': 'GrantFullControl',
    'WRITE': 'GrantWrite',
    'READ': 'GrantRead',
    'READ_ACP': 'GrantReadAcp',
    'WRITE_ACP': 'GrantWriteAcp'
  };
  var AccessControlList = AccessControlPolicy && AccessControlPolicy.AccessControlList || {};
  var Grant = AccessControlList.Grant;

  if (Grant) {
    Grant = util.isArray(Grant) ? Grant : [Grant];
  }

  var PublicAcl = {
    READ: 0,
    WRITE: 0,
    FULL_CONTROL: 0
  };
  Grant && Grant.length && util.each(Grant, function (item) {
    if (item.Grantee.ID === 'qcs::cam::anyone:anyone' || item.Grantee.URI === 'http://cam.qcloud.com/groups/global/AllUsers') {
      PublicAcl[item.Permission] = 1;
    } else if (item.Grantee.ID !== AccessControlPolicy.Owner.ID) {
      result[GrantMap[item.Permission]].push('id="' + item.Grantee.ID + '"');
    }
  });

  if (PublicAcl.FULL_CONTROL || PublicAcl.WRITE && PublicAcl.READ) {
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
} // Grant 去重


function uniqGrant(str) {
  var arr = str.split(',');
  var exist = {};
  var i, item;

  for (i = 0; i < arr.length;) {
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
} // 生成操作 url


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

  domain = domain.replace(/\{\{AppId\}\}/ig, appId).replace(/\{\{Bucket\}\}/ig, shortBucket).replace(/\{\{Region\}\}/ig, region).replace(/\{\{.*?\}\}/ig, '');
  domain = domain.replace(/\{AppId\}/ig, appId).replace(/\{BucketName\}/ig, shortBucket).replace(/\{Bucket\}/ig, longBucket).replace(/\{Region\}/ig, region).replace(/\{.*?\}/ig, '');

  if (!/^[a-zA-Z]+:\/\//.test(domain)) {
    domain = protocol + '//' + domain;
  } // 去掉域名最后的斜杆


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

var getSignHost = function getSignHost(opt) {
  if (!opt.Bucket || !opt.Region) return '';
  var useAccelerate = opt.UseAccelerate === undefined ? this.options.UseAccelerate : opt.UseAccelerate;
  var url = opt.Url || getUrl({
    ForcePathStyle: this.options.ForcePathStyle,
    protocol: this.options.Protocol,
    domain: this.options.Domain,
    bucket: opt.Bucket,
    region: useAccelerate ? 'accelerate' : opt.Region
  });
  var urlHost = url.replace(/^https?:\/\/([^/]+)(\/.*)?$/, '$1');
  var standardHostReg = new RegExp('^([a-z\\d-]+-\\d+\\.)?(cos|cosv6|ci|pic)\\.([a-z\\d-]+)\\.myqcloud\\.com$');
  if (standardHostReg.test(urlHost)) return urlHost;
  return '';
}; // 异步获取签名


function getAuthorizationAsync(params, callback) {
  var headers = util.clone(params.Headers);
  var headerHost = '';
  util.each(headers, function (v, k) {
    (v === '' || ['content-type', 'cache-control'].indexOf(k.toLowerCase()) > -1) && delete headers[k];
    if (k.toLowerCase() === 'host') headerHost = v;
  }); // ForceSignHost明确传入false才不加入host签名

  var forceSignHost = params.ForceSignHost === false ? false : true; // Host 加入签名计算

  if (!headerHost && params.SignHost && forceSignHost) headers.Host = params.SignHost; // 获取凭证的回调，避免用户 callback 多次

  var cbDone = false;

  var cb = function cb(err, AuthData) {
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
  var Region = params.Region || ''; // PathName

  var KeyName = params.Action === 'name/cos:PostObject' || !params.Key ? '' : params.Key;

  if (self.options.ForcePathStyle && Bucket) {
    KeyName = Bucket + '/' + KeyName;
  }

  var Pathname = '/' + KeyName; // Action、ResourceKey

  var StsData = {};
  var Scope = params.Scope;

  if (!Scope) {
    var Action = params.Action || '';
    var ResourceKey = params.ResourceKey || params.Key || '';
    Scope = params.Scope || [{
      action: Action,
      bucket: Bucket,
      region: Region,
      prefix: ResourceKey
    }];
  }

  var ScopeKey = util.md5(JSON.stringify(Scope)); // STS

  self._StsCache = self._StsCache || [];

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

  var calcAuthByTmpKey = function calcAuthByTmpKey() {
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
      ForceSignHost: forceSignHost
    });
    var AuthData = {
      Authorization: Authorization,
      SecurityToken: StsData.SecurityToken || StsData.XCosSecurityToken || '',
      Token: StsData.Token || '',
      ClientIP: StsData.ClientIP || '',
      ClientUA: StsData.ClientUA || ''
    };
    cb(null, AuthData);
  };

  var checkAuthError = function checkAuthError(AuthData) {
    if (AuthData.Authorization) {
      // 检查签名格式
      var formatAllow = false;
      var auth = AuthData.Authorization;

      if (auth) {
        if (auth.indexOf(' ') > -1) {
          formatAllow = false;
        } else if (auth.indexOf('q-sign-algorithm=') > -1 && auth.indexOf('q-ak=') > -1 && auth.indexOf('q-sign-time=') > -1 && auth.indexOf('q-key-time=') > -1 && auth.indexOf('q-url-param-list=') > -1) {
          formatAllow = true;
        } else {
          try {
            auth = atob(auth);

            if (auth.indexOf('a=') > -1 && auth.indexOf('k=') > -1 && auth.indexOf('t=') > -1 && auth.indexOf('r=') > -1 && auth.indexOf('b=') > -1) {
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
  }; // 先判断是否有临时密钥


  if (StsData.ExpiredTime && StsData.ExpiredTime - util.getSkewTime(self.options.SystemClockOffset) / 1000 > 60) {
    // 如果缓存的临时密钥有效，并还有超过60秒有效期就直接使用
    calcAuthByTmpKey();
  } else if (self.options.getAuthorization) {
    // 外部计算签名或获取临时密钥
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
      ForceSignHost: forceSignHost
    }, function (AuthData) {
      if (typeof AuthData === 'string') {
        AuthData = {
          Authorization: AuthData
        };
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
  } else if (self.options.getSTS) {
    // 外部获取临时密钥
    self.options.getSTS.call(self, {
      Bucket: Bucket,
      Region: Region
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
  } else {
    // 内部计算获取签名
    return function () {
      var Authorization = util.getAuth({
        SecretId: params.SecretId || self.options.SecretId,
        SecretKey: params.SecretKey || self.options.SecretKey,
        Method: params.Method,
        Pathname: Pathname,
        Query: params.Query,
        Headers: headers,
        Expires: params.Expires,
        SystemClockOffset: self.options.SystemClockOffset,
        ForceSignHost: forceSignHost
      });
      var AuthData = {
        Authorization: Authorization,
        SecurityToken: self.options.SecurityToken || self.options.XCosSecurityToken
      };
      cb(null, AuthData);
      return AuthData;
    }();
  }

  return '';
} // 调整时间偏差


function allowRetry(err) {
  var allowRetry = false;
  var isTimeError = false;
  var serverDate = err.headers && (err.headers.date || err.headers.Date) || err.error && err.error.ServerTime;

  try {
    var errorCode = err.error.Code;
    var errorMessage = err.error.Message;

    if (errorCode === 'RequestTimeTooSkewed' || errorCode === 'AccessDenied' && errorMessage === 'Request has expired') {
      isTimeError = true;
    }
  } catch (e) {}

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
} // 获取签名并发起请求


function submitRequest(params, callback) {
  var self = this; // 处理 headers

  !params.headers && (params.headers = {}); // 处理 query

  !params.qs && (params.qs = {});
  params.VersionId && (params.qs.versionId = params.VersionId);
  params.qs = util.clearKey(params.qs); // 清理 undefined 和 null 字段

  params.headers && (params.headers = util.clearKey(params.headers));
  params.qs && (params.qs = util.clearKey(params.qs));
  var Query = util.clone(params.qs);
  params.action && (Query[params.action] = '');
  var paramsUrl = params.url || params.Url;
  var SignHost = params.SignHost || getSignHost.call(this, {
    Bucket: params.Bucket,
    Region: params.Region,
    Url: paramsUrl
  });
  var tracker = params.tracker;

  var next = function next(tryTimes) {
    var oldClockOffset = self.options.SystemClockOffset;
    tracker && tracker.setParams({
      signStartTime: new Date().getTime(),
      retryTimes: tryTimes - 1
    });
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
      ForceSignHost: self.options.ForceSignHost
    }, function (err, AuthData) {
      if (err) {
        callback(err);
        return;
      }

      tracker && tracker.setParams({
        signEndTime: new Date().getTime(),
        httpStartTime: new Date().getTime()
      });
      params.AuthData = AuthData;

      _submitRequest.call(self, params, function (err, data) {
        tracker && tracker.setParams({
          httpEndTime: new Date().getTime()
        });

        if (err && tryTimes < 2 && (oldClockOffset !== self.options.SystemClockOffset || allowRetry.call(self, err))) {
          if (params.headers) {
            delete params.headers.Authorization;
            delete params.headers['token'];
            delete params.headers['clientIP'];
            delete params.headers['clientUA'];
            params.headers['x-cos-security-token'] && delete params.headers['x-cos-security-token'];
            params.headers['x-ci-security-token'] && delete params.headers['x-ci-security-token'];
          }

          next(tryTimes + 1);
        } else {
          callback(err, data);
        }
      });
    });
  };

  next(1);
} // 发起请求


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
  var httpDNSServiceId = self.options.HttpDNSServiceId; // url

  if (self.options.UseAccelerate) {
    region = 'accelerate';
  }

  url = url || getUrl({
    ForcePathStyle: self.options.ForcePathStyle,
    protocol: self.options.Protocol,
    domain: self.options.Domain,
    bucket: bucket,
    region: region,
    object: object
  });

  if (params.action) {
    url = url + '?' + params.action;
  }

  if (params.qsStr) {
    if (url.indexOf('?') > -1) {
      url = url + '&' + params.qsStr;
    } else {
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
    httpDNSServiceId: httpDNSServiceId
  }; // 兼容ci接口

  var token = 'x-cos-security-token';

  if (util.isCIHost(url)) {
    token = 'x-ci-security-token';
  } // 获取签名


  opt.headers.Authorization = params.AuthData.Authorization;
  params.AuthData.Token && (opt.headers['token'] = params.AuthData.Token);
  params.AuthData.ClientIP && (opt.headers['clientIP'] = params.AuthData.ClientIP);
  params.AuthData.ClientUA && (opt.headers['clientUA'] = params.AuthData.ClientUA);
  params.AuthData.SecurityToken && (opt.headers[token] = params.AuthData.SecurityToken); // 清理 undefined 和 null 字段

  opt.headers && (opt.headers = util.clearKey(opt.headers));
  opt = util.clearKey(opt); // progress

  if (params.onProgress && typeof params.onProgress === 'function') {
    opt.onProgress = function (e) {
      if (TaskId && !self._isRunningTask(TaskId)) return;
      var loaded = e ? e.loaded : 0;
      params.onProgress({
        loaded: loaded,
        total: e.total
      });
    };
  }

  if (this.options.Timeout) {
    opt.timeout = this.options.Timeout;
  }

  self.options.ForcePathStyle && (opt.pathStyle = self.options.ForcePathStyle);
  self.emit('before-send', opt);
  var useAccelerate = opt.url.includes('accelerate.');
  var queryString = Object.keys(opt.qs).map(function (key) {
    return "".concat(key, "=").concat(opt.qs[key]);
  }).join('&');
  var fullUrl = queryString ? opt.url + '?' + queryString : opt.url;
  params.tracker && params.tracker.setParams({
    reqUrl: fullUrl,
    accelerate: useAccelerate ? 'Y' : 'N'
  }); // 分块上传时给父级tracker设置url信息

  params.tracker && params.tracker.parent && params.tracker.parent.setParams({
    reqUrl: fullUrl,
    accelerate: useAccelerate ? 'Y' : 'N'
  });
  var sender = REQUEST(opt, function (err, response, body) {
    if (err === 'abort') return; // 返回内容添加 状态码 和 headers

    var hasReturned;

    var cb = function cb(err, data) {
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
    }; // 请求错误，发生网络错误


    if (err) {
      cb({
        error: err
      });
      return;
    } // 不对 body 进行转换，body 直接挂载返回


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
    } // 请求返回码不为 200


    var statusCode = response.statusCode;
    var statusSuccess = Math.floor(statusCode / 100) === 2; // 200 202 204 206

    if (!statusSuccess) {
      cb({
        error: jsonRes.Error || jsonRes
      });
      return;
    }

    if (jsonRes.Error) {
      cb({
        error: jsonRes.Error
      });
      return;
    }

    cb(null, jsonRes);
  }); // kill task

  var killTask = function killTask(data) {
    if (data.TaskId === TaskId) {
      sender && sender.abort && sender.abort();
      self.off('inner-kill-task', killTask);
    }
  };

  TaskId && self.on('inner-kill-task', killTask);
}

var API_MAP = {
  // Bucket 相关方法
  getService: getService,
  // Bucket
  putBucket: putBucket,
  headBucket: headBucket,
  // Bucket
  getBucket: getBucket,
  deleteBucket: deleteBucket,
  putBucketAcl: putBucketAcl,
  // BucketACL
  getBucketAcl: getBucketAcl,
  putBucketCors: putBucketCors,
  // BucketCors
  getBucketCors: getBucketCors,
  deleteBucketCors: deleteBucketCors,
  getBucketLocation: getBucketLocation,
  // BucketLocation
  getBucketPolicy: getBucketPolicy,
  // BucketPolicy
  putBucketPolicy: putBucketPolicy,
  deleteBucketPolicy: deleteBucketPolicy,
  putBucketTagging: putBucketTagging,
  // BucketTagging
  getBucketTagging: getBucketTagging,
  deleteBucketTagging: deleteBucketTagging,
  putBucketLifecycle: putBucketLifecycle,
  // BucketLifecycle
  getBucketLifecycle: getBucketLifecycle,
  deleteBucketLifecycle: deleteBucketLifecycle,
  putBucketVersioning: putBucketVersioning,
  // BucketVersioning
  getBucketVersioning: getBucketVersioning,
  putBucketReplication: putBucketReplication,
  // BucketReplication
  getBucketReplication: getBucketReplication,
  deleteBucketReplication: deleteBucketReplication,
  putBucketWebsite: putBucketWebsite,
  // BucketWebsite
  getBucketWebsite: getBucketWebsite,
  deleteBucketWebsite: deleteBucketWebsite,
  putBucketReferer: putBucketReferer,
  // BucketReferer
  getBucketReferer: getBucketReferer,
  putBucketDomain: putBucketDomain,
  // BucketDomain
  getBucketDomain: getBucketDomain,
  deleteBucketDomain: deleteBucketDomain,
  putBucketOrigin: putBucketOrigin,
  // BucketOrigin
  getBucketOrigin: getBucketOrigin,
  deleteBucketOrigin: deleteBucketOrigin,
  putBucketLogging: putBucketLogging,
  // BucketLogging
  getBucketLogging: getBucketLogging,
  putBucketInventory: putBucketInventory,
  // BucketInventory
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
  getAuth: getAuth
};

module.exports.init = function (COS, task) {
  task.transferToTaskMethod(API_MAP, 'postObject');
  task.transferToTaskMethod(API_MAP, 'putObject');
  util.each(API_MAP, function (fn, apiName) {
    COS.prototype[apiName] = util.apiWrapper(apiName, fn);
  });
};

/***/ }),

/***/ "./src/cos.js":
/*!********************!*\
  !*** ./src/cos.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ./util */ "./src/util.js");

var event = __webpack_require__(/*! ./event */ "./src/event.js");

var task = __webpack_require__(/*! ./task */ "./src/task.js");

var base = __webpack_require__(/*! ./base */ "./src/base.js");

var advance = __webpack_require__(/*! ./advance */ "./src/advance.js");

var pkg = __webpack_require__(/*! ../package.json */ "./package.json");

var defaultOptions = {
  SecretId: '',
  SecretKey: '',
  SecurityToken: '',
  // 使用临时密钥需要注意自行刷新 Token
  ChunkRetryTimes: 2,
  FileParallelLimit: 3,
  ChunkParallelLimit: 3,
  ChunkSize: 1024 * 1024,
  SliceSize: 1024 * 1024,
  CopyChunkParallelLimit: 20,
  CopyChunkSize: 1024 * 1024 * 10,
  CopySliceSize: 1024 * 1024 * 10,
  MaxPartNumber: 10000,
  ProgressInterval: 1000,
  UploadQueueSize: 10000,
  Domain: '',
  ServiceDomain: '',
  Protocol: '',
  CompatibilityMode: false,
  ForcePathStyle: false,
  Timeout: 0,
  // 单位毫秒，0 代表不设置超时时间
  CorrectClockSkew: true,
  SystemClockOffset: 0,
  // 单位毫秒，ms
  UploadCheckContentMd5: false,
  UploadAddMetaMd5: false,
  UploadIdCacheLimit: 50,
  UseAccelerate: false,
  ForceSignHost: true,
  // 默认将host加入签名计算，关闭后可能导致越权风险，建议保持为true
  HttpDNSServiceId: '',
  // HttpDNS 服务商 Id,填写后代表开启 HttpDNS 服务。HttpDNS 用法详见https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html
  SimpleUploadMethod: 'postObject',
  // 高级上传内部判断需要走简单上传时，指定的上传方法，可选postObject或putObject
  EnableTracker: false,
  // 默认关闭上报 
  DeepTracker: false,
  // 上报时是否对每个分块上传做单独上报
  TrackerDelay: 5000,
  // 周期性上报，单位毫秒。0代表实时上报
  CustomId: '' // 自定义上报id

}; // 对外暴露的类

var COS = function COS(options) {
  this.options = util.extend(util.clone(defaultOptions), options || {});
  this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit);
  this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit);
  this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes);
  this.options.ChunkSize = Math.max(1024 * 1024, this.options.ChunkSize);
  this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit);
  this.options.CopyChunkSize = Math.max(1024 * 1024, this.options.CopyChunkSize);
  this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize);
  this.options.MaxPartNumber = Math.max(1024, Math.min(10000, this.options.MaxPartNumber));
  this.options.Timeout = Math.max(0, this.options.Timeout);

  if (this.options.AppId) {
    console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").');
  }

  if (this.options.SecretId && this.options.SecretId.indexOf(' ') > -1) {
    console.error('error: SecretId格式错误，请检查');
    console.error('error: SecretId format is incorrect. Please check');
  }

  if (this.options.SecretKey && this.options.SecretKey.indexOf(' ') > -1) {
    console.error('error: SecretKey格式错误，请检查');
    console.error('error: SecretKey format is incorrect. Please check');
  }

  event.init(this);
  task.init(this);
};

base.init(COS, task);
advance.init(COS, task);
COS.util = {
  md5: util.md5,
  xml2json: util.xml2json,
  json2xml: util.json2xml
};
COS.getAuthorization = util.getAuth;
COS.version = pkg.version;
module.exports = COS;

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var initEvent = function initEvent(cos) {
  var listeners = {};

  var getList = function getList(action) {
    !listeners[action] && (listeners[action] = []);
    return listeners[action];
  };

  cos.on = function (action, callback) {
    getList(action).push(callback);
  };

  cos.off = function (action, callback) {
    var list = getList(action);

    for (var i = list.length - 1; i >= 0; i--) {
      callback === list[i] && list.splice(i, 1);
    }
  };

  cos.emit = function (action, data) {
    var list = getList(action).map(function (cb) {
      return cb;
    });

    for (var i = 0; i < list.length; i++) {
      list[i](data);
    }
  };
};

var EventProxy = function EventProxy() {
  initEvent(this);
};

module.exports.init = initEvent;
module.exports.EventProxy = EventProxy;

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./src/util.js"); // 按照文件特征值，缓存 UploadId


var cacheKey = 'cos_sdk_upload_cache';
var expires = 30 * 24 * 3600;
var cache;
var timer;

var getCache = function getCache() {
  try {
    var val = JSON.parse(wx.getStorageSync(cacheKey));
  } catch (e) {}

  if (!val) val = [];
  return val;
};

var setCache = function setCache() {
  try {
    wx.setStorageSync(cacheKey, JSON.stringify(cache));
  } catch (e) {}
};

var init = function init() {
  if (cache) return;
  cache = getCache(); // 清理太老旧的数据

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
}; // 把缓存存到本地


var save = function save() {
  if (timer) return;
  timer = setTimeout(function () {
    setCache();
    timer = null;
  }, 400);
};

var mod = {
  using: {},
  // 标记 UploadId 正在使用
  setUsing: function setUsing(uuid) {
    mod.using[uuid] = true;
  },
  // 标记 UploadId 已经没在使用
  removeUsing: function removeUsing(uuid) {
    delete mod.using[uuid];
  },
  // 用上传参数生成哈希值
  getFileId: function getFileId(FileStat, ChunkSize, Bucket, Key) {
    if (FileStat.FilePath && FileStat.size && FileStat.lastModifiedTime && ChunkSize) {
      return util.md5([FileStat.FilePath].join('::')) + '-' + util.md5([FileStat.size, FileStat.mode, FileStat.lastAccessedTime, FileStat.lastModifiedTime, ChunkSize, Bucket, Key].join('::'));
    } else {
      return null;
    }
  },
  // 获取文件对应的 UploadId 列表
  getUploadIdList: function getUploadIdList(uuid) {
    if (!uuid) return null;
    init();
    var list = [];

    for (var i = 0; i < cache.length; i++) {
      if (cache[i][0] === uuid) list.push(cache[i][1]);
    }

    return list.length ? list : null;
  },
  // 缓存 UploadId
  saveUploadId: function saveUploadId(uuid, UploadId, limit) {
    init();
    if (!uuid) return; // 清理没用的 UploadId

    var part1 = uuid.substr(0, uuid.indexOf('-') + 1);

    for (var i = cache.length - 1; i >= 0; i--) {
      var item = cache[i];

      if (item[0] === uuid && item[1] === UploadId) {
        cache.splice(i, 1);
      } else if (uuid !== item[0] && item[0].indexOf(part1) === 0) {
        // 文件路径相同，但其他信息不同，说明文件改变了或上传参数（存储桶、路径、分片大小）变了，直接清理掉
        cache.splice(i, 1);
      }
    }

    cache.unshift([uuid, UploadId, Math.round(Date.now() / 1000)]);
    if (cache.length > limit) cache.splice(limit);
    save();
  },
  // UploadId 已用完，移除掉
  removeUploadId: function removeUploadId(UploadId) {
    init();
    delete mod.using[UploadId];

    for (var i = cache.length - 1; i >= 0; i--) {
      if (cache[i][1] === UploadId) cache.splice(i, 1);
    }

    save();
  }
};
module.exports = mod;

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var session = __webpack_require__(/*! ./session */ "./src/session.js");

var util = __webpack_require__(/*! ./util */ "./src/util.js");

var originApiMap = {};

var transferToTaskMethod = function transferToTaskMethod(apiMap, apiName) {
  originApiMap[apiName] = apiMap[apiName];

  apiMap[apiName] = function (params, callback) {
    if (params.SkipTask) {
      originApiMap[apiName].call(this, params, callback);
    } else {
      this._addTask(apiName, params, callback);
    }
  };
};

var initTask = function initTask(cos) {
  var queue = [];
  var tasks = {};
  var uploadingFileCount = 0;
  var nextUploadIndex = 0; // 接口返回简略的任务信息

  var formatTask = function formatTask(task) {
    var t = {
      id: task.id,
      Bucket: task.Bucket,
      Region: task.Region,
      Key: task.Key,
      FilePath: task.FilePath,
      state: task.state,
      loaded: task.loaded,
      size: task.size,
      speed: task.speed,
      percent: task.percent,
      hashPercent: task.hashPercent,
      error: task.error
    };
    if (task.FilePath) t.FilePath = task.FilePath;
    return t;
  };

  var emitListUpdate = function () {
    var timer;

    var emit = function emit() {
      timer = 0;
      cos.emit('task-list-update', {
        list: util.map(queue, formatTask)
      });
      cos.emit('list-update', {
        list: util.map(queue, formatTask)
      });
    };

    return function () {
      if (!timer) timer = setTimeout(emit);
    };
  }();

  var clearQueue = function clearQueue() {
    if (queue.length <= cos.options.UploadQueueSize) return;

    for (var i = 0; i < nextUploadIndex && // 小于当前操作的 index 才清理
    i < queue.length && // 大于队列才清理
    queue.length > cos.options.UploadQueueSize // 如果还太多，才继续清理
    ;) {
      var isActive = queue[i].state === 'waiting' || queue[i].state === 'checking' || queue[i].state === 'uploading';

      if (!queue[i] || !isActive) {
        tasks[queue[i].id] && delete tasks[queue[i].id];
        queue.splice(i, 1);
        nextUploadIndex--;
      } else {
        i++;
      }
    }

    emitListUpdate();
  };

  var startNextTask = function startNextTask() {
    // 检查是否允许增加执行进程
    if (uploadingFileCount >= cos.options.FileParallelLimit) return; // 跳过不可执行的任务

    while (queue[nextUploadIndex] && queue[nextUploadIndex].state !== 'waiting') {
      nextUploadIndex++;
    } // 检查是否已遍历结束


    if (nextUploadIndex >= queue.length) return; // 上传该遍历到的任务

    var task = queue[nextUploadIndex];
    nextUploadIndex++;
    uploadingFileCount++;
    task.state = 'checking';
    task.params.onTaskStart && task.params.onTaskStart(formatTask(task));
    !task.params.UploadData && (task.params.UploadData = {});
    var apiParams = util.formatParams(task.api, task.params);
    originApiMap[task.api].call(cos, apiParams, function (err, data) {
      if (!cos._isRunningTask(task.id)) return;

      if (task.state === 'checking' || task.state === 'uploading') {
        task.state = err ? 'error' : 'success';
        err && (task.error = err);
        uploadingFileCount--;
        emitListUpdate();
        startNextTask();
        task.callback && task.callback(err, data);

        if (task.state === 'success') {
          if (task.params) {
            delete task.params.UploadData;
            delete task.params.Body;
            delete task.params;
          }

          delete task.callback;
        }
      }

      clearQueue();
    });
    emitListUpdate(); // 异步执行下一个任务

    setTimeout(startNextTask);
  };

  var killTask = function killTask(id, switchToState) {
    var task = tasks[id];
    if (!task) return;
    var waiting = task && task.state === 'waiting';
    var running = task && (task.state === 'checking' || task.state === 'uploading');

    if (switchToState === 'canceled' && task.state !== 'canceled' || switchToState === 'paused' && waiting || switchToState === 'paused' && running) {
      if (switchToState === 'paused' && task.params.Body && typeof task.params.Body.pipe === 'function') {
        console.error('stream not support pause');
        return;
      }

      task.state = switchToState;
      cos.emit('inner-kill-task', {
        TaskId: id,
        toState: switchToState
      });

      try {
        var UploadId = task && task.params && task.params.UploadData.UploadId;
      } catch (e) {}

      if (switchToState === 'canceled' && UploadId) session.removeUsing(UploadId);
      emitListUpdate();

      if (running) {
        uploadingFileCount--;
        startNextTask();
      }

      if (switchToState === 'canceled') {
        if (task.params) {
          delete task.params.UploadData;
          delete task.params.Body;
          delete task.params;
        }

        delete task.callback;
      }
    }

    clearQueue();
  };

  cos._addTasks = function (taskList) {
    util.each(taskList, function (task) {
      cos._addTask(task.api, task.params, task.callback, true);
    });
    emitListUpdate();
  };

  cos._addTask = function (api, params, callback, ignoreAddEvent) {
    // 如果小程序版本不支持获取文件分片内容，统一转到 简单上传 接口上传
    var simpleUploadMethod = cos.options.SimpleUploadMethod === 'postObject' ? 'postObject' : 'putObject';
    if (api === 'sliceUploadFile' && !util.canFileSlice()) api = simpleUploadMethod; // 复制参数对象

    params = util.formatParams(api, params); // 生成 id

    var id = util.uuid();
    params.TaskId = id;
    params.onTaskReady && params.onTaskReady(id);
    var task = {
      // env
      params: params,
      callback: callback,
      api: api,
      index: queue.length,
      // task
      id: id,
      Bucket: params.Bucket,
      Region: params.Region,
      Key: params.Key,
      FilePath: params.FilePath || '',
      state: 'waiting',
      loaded: 0,
      size: 0,
      speed: 0,
      percent: 0,
      hashPercent: 0,
      error: null
    };
    var onHashProgress = params.onHashProgress;

    params.onHashProgress = function (info) {
      if (!cos._isRunningTask(task.id)) return;
      task.hashPercent = info.percent;
      onHashProgress && onHashProgress(info);
      emitListUpdate();
    };

    var onProgress = params.onProgress;

    params.onProgress = function (info) {
      if (!cos._isRunningTask(task.id)) return;
      task.state === 'checking' && (task.state = 'uploading');
      task.loaded = info.loaded;
      task.size = info.total;
      task.speed = info.speed;
      task.percent = info.percent;
      onProgress && onProgress(info);
      emitListUpdate();
    }; // 异步获取 filesize


    util.getFileSize(api, params, function (err, size) {
      // 开始处理上传
      if (err) {
        // 如果获取大小出错，不加入队列
        callback(err);
        return;
      } // 获取完文件大小再把任务加入队列


      tasks[id] = task;
      queue.push(task);
      task.size = size;
      !ignoreAddEvent && emitListUpdate();
      startNextTask();
      clearQueue();
    });
    return id;
  };

  cos._isRunningTask = function (id) {
    var task = tasks[id];
    return !!(task && (task.state === 'checking' || task.state === 'uploading'));
  };

  cos.getTaskList = function () {
    return util.map(queue, formatTask);
  };

  cos.cancelTask = function (id) {
    killTask(id, 'canceled');
  };

  cos.pauseTask = function (id) {
    killTask(id, 'paused');
  };

  cos.restartTask = function (id) {
    var task = tasks[id];

    if (task && (task.state === 'paused' || task.state === 'error')) {
      task.state = 'waiting';
      emitListUpdate();
      nextUploadIndex = Math.min(nextUploadIndex, task.index);
      startNextTask();
    }
  };

  cos.isUploadRunning = function () {
    return uploadingFileCount || nextUploadIndex < queue.length;
  };
};

module.exports.transferToTaskMethod = transferToTaskMethod;
module.exports.init = initTask;

/***/ }),

/***/ "./src/tracker.js":
/*!************************!*\
  !*** ./src/tracker.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var pkg = __webpack_require__(/*! ../package.json */ "./package.json");

var BeaconAction = __webpack_require__(/*! ../lib/beacon_mp.min */ "./lib/beacon_mp.min.js");

var beacon = null;

var getBeacon = function getBeacon(delay) {
  if (!beacon) {
    beacon = new BeaconAction({
      appkey: "0AND0VEVB24UBGDU",
      versionCode: pkg.version,
      channelID: 'mp_sdk',
      //渠道,选填
      openid: 'openid',
      // 用户id, 选填
      unionid: 'unid',
      //用户unionid , 类似idfv,选填
      strictMode: false,
      //严苛模式开关, 打开严苛模式会主动抛出异常, 上线请务必关闭!!!
      delay: delay,
      // 普通事件延迟上报时间(单位毫秒), 默认1000(1秒),选填
      sessionDuration: 60 * 1000 // session变更的时间间隔, 一个用户持续30分钟(默认值)没有任何上报则算另一次 session,每变更一次session上报一次启动事件(rqd_applaunched),使用毫秒(ms),最小值30秒,选填

    });
  }

  return beacon;
};

var utils = {
  // 生成uid 每个链路对应唯一一条uid
  getUid: function getUid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  },
  // 获取网络类型
  getNetType: function getNetType() {
    return new Promise(function (resolve) {
      if (wx.canIUse('getNetworkType')) {
        try {
          wx.getNetworkType({
            success: function success(res) {
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
  getSystemInfo: function getSystemInfo() {
    var defaultInfo = {
      devicePlatform: '',
      wxVersion: '',
      wxSystem: '',
      wxSdkVersion: ''
    };
    return new Promise(function (resolve) {
      if (wx.canIUse('getSystemInfo')) {
        try {
          wx.getSystemInfo({
            success: function success(res) {
              var platform = res.platform,
                  version = res.version,
                  system = res.system,
                  SDKVersion = res.SDKVersion;
              Object.assign(defaultInfo, {
                devicePlatform: platform,
                wxVersion: version,
                wxSystem: system,
                wxSdkVersion: SDKVersion
              });
              resolve(defaultInfo);
            }
          });
        } catch (e) {
          resolve({
            devicePlatform: 'can_not_get_system_info',
            wxVersion: 'can_not_get_system_info',
            wxSystem: 'can_not_get_system_info',
            wxSdkVersion: 'can_not_get_system_info'
          });
        }
      } else {
        resolve({
          devicePlatform: 'can_not_get_system_info',
          wxVersion: 'can_not_get_system_info',
          wxSystem: 'can_not_get_system_info',
          wxSdkVersion: 'can_not_get_system_info'
        });
      }
    });
  }
}; // 设备信息，只取一次值

var deviceInfo = {
  // ↓上报项
  devicePlatform: '',
  // ios/anroid/windows/mac/devtools
  wxVersion: '',
  wxSystem: '',
  wxSdkVersion: ''
};
utils.getSystemInfo().then(function (res) {
  Object.assign(deviceInfo, res);
}); // 分块上传原子方法

var sliceUploadMethods = ['multipartInit', 'multipartUpload', 'multipartComplete', 'multipartList', 'multipartListPart', 'multipartAbort'];
var uploadApi = ['putObject', 'postObject', 'appendObject', 'sliceUploadFile', 'uploadFile', 'uploadFiles'].concat(sliceUploadMethods);
var downloadApi = ['getObject'];

function getEventCode(apiName) {
  if (uploadApi.includes(apiName)) {
    return 'cos_upload';
  }

  if (downloadApi.includes(apiName)) {
    return 'cos_download';
  }

  return 'base_service';
} // 上报参数驼峰改下划线


function camel2underline(key) {
  return key.replace(/([A-Z])/g, "_$1").toLowerCase();
}

function formatParams(params) {
  var formattedParams = {};
  var allReporterKeys = ['tracePlatform', 'cossdkVersion', 'region', 'networkType', 'host', 'accelerate', 'requestPath', 'size', 'httpMd5', 'httpSign', 'httpFull', 'name', 'result', 'tookTime', 'errorNode', 'errorCode', 'errorMessage', 'errorRequestId', 'errorStatusCode', 'errorServiceName', 'errorType', 'traceId', 'bucket', 'appid', 'partNumber', 'retryTimes', 'reqUrl', 'customId', 'fullError', 'devicePlatform', 'wxVersion', 'wxSystem', 'wxSdkVersion'];
  var successKeys = ['tracePlatform', 'cossdkVersion', 'region', 'bucket', 'appid', 'networkType', 'host', 'accelerate', 'requestPath', 'partNumber', 'size', 'name', 'result', 'tookTime', 'errorRequestId', 'retryTimes', 'reqUrl', 'customId', 'devicePlatform', 'wxVersion', 'wxSystem', 'wxSdkVersion']; // 需要上报的参数字段

  var reporterKeys = params.result === 'Success' ? successKeys : allReporterKeys;

  for (var key in params) {
    if (!reporterKeys.includes(key)) continue;
    var formattedKey = camel2underline(key);
    formattedParams[formattedKey] = params[key];
  }

  return formattedParams;
} // 链路追踪器


var Tracker = /*#__PURE__*/function () {
  function Tracker(opt) {
    _classCallCheck(this, Tracker);

    var parent = opt.parent,
        traceId = opt.traceId,
        bucket = opt.bucket,
        region = opt.region,
        apiName = opt.apiName,
        fileKey = opt.fileKey,
        fileSize = opt.fileSize,
        accelerate = opt.accelerate,
        customId = opt.customId,
        delay = opt.delay,
        deepTracker = opt.deepTracker;
    var appid = bucket && bucket.substr(bucket.lastIndexOf('-') + 1) || '';
    this.parent = parent;
    this.deepTracker = deepTracker; // 上报用到的字段

    this.params = {
      // 通用字段
      cossdkVersion: pkg.version,
      region: region,
      networkType: '',
      host: '',
      accelerate: accelerate ? 'Y' : 'N',
      requestPath: fileKey || '',
      size: fileSize || -1,
      httpMd5: 0,
      // MD5耗时
      httpSign: 0,
      // 计算签名耗时
      httpFull: 0,
      // http请求耗时
      name: apiName || '',
      result: '',
      // sdk api调用结果Success、Fail
      tookTime: 0,
      // 总耗时
      errorNode: '',
      errorCode: '',
      errorMessage: '',
      errorRequestId: '',
      errorStatusCode: 0,
      errorServiceName: '',
      // 小程序补充字段
      tracePlatform: 'cos-wx-sdk-v5',
      // 上报平台=小程序
      traceId: traceId || utils.getUid(),
      // 每条上报唯一标识
      bucket: bucket,
      appid: appid,
      partNumber: 0,
      // 分块上传编号
      retryTimes: 0,
      // sdk内部发起的请求重试
      reqUrl: '',
      // 请求url
      customId: customId || '',
      // 业务id
      devicePlatform: deviceInfo.devicePlatform,
      wxVersion: deviceInfo.wxVersion,
      wxSystem: deviceInfo.wxSystem,
      wxSdkVersion: deviceInfo.wxSdkVersion,
      md5StartTime: 0,
      // md5计算开始时间
      md5EndTime: 0,
      // md5计算结束时间
      signStartTime: 0,
      // 计算签名开始时间
      signEndTime: 0,
      // 计算签名结束时间
      httpStartTime: 0,
      // 发起网络请求开始时间
      httpEndTime: 0,
      // 网路请求结束时间
      startTime: new Date().getTime(),
      // sdk api调用起始时间，不是纯网络耗时
      endTime: 0 //  sdk api调用结束时间，不是纯网络耗时

    };
    this.beacon = getBeacon(delay);
  } // 格式化sdk回调


  _createClass(Tracker, [{
    key: "formatResult",
    value: function () {
      var _formatResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, data) {
        var _err$error, _err$error2, _err$error3;

        var now, tookTime, networkType, errorCode, errorMessage, errorStatusCode, errorServiceName, requestId, errorType, exec;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                now = new Date().getTime();
                tookTime = now - this.params.startTime;
                _context.next = 4;
                return utils.getNetType();

              case 4:
                networkType = _context.sent;
                errorCode = err ? err === null || err === void 0 ? void 0 : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.Code : '';
                errorMessage = err ? err === null || err === void 0 ? void 0 : (_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.Message : '';
                errorStatusCode = err ? err === null || err === void 0 ? void 0 : err.statusCode : data.statusCode;
                errorServiceName = err ? err === null || err === void 0 ? void 0 : (_err$error3 = err.error) === null || _err$error3 === void 0 ? void 0 : _err$error3.Resource : '';
                requestId = err ? (err === null || err === void 0 ? void 0 : err.headers) && (err === null || err === void 0 ? void 0 : err.headers['x-cos-request-id']) : (data === null || data === void 0 ? void 0 : data.headers) && (data === null || data === void 0 ? void 0 : data.headers['x-cos-request-id']);
                errorType = err ? requestId ? 'Server' : 'Client' : '';
                Object.assign(this.params, {
                  tookTime: tookTime,
                  networkType: networkType,
                  httpMd5: this.params.md5EndTime - this.params.md5StartTime,
                  httpSign: this.params.signEndTime - this.params.signStartTime,
                  httpFull: this.params.httpEndTime - this.params.httpStartTime,
                  result: err ? 'Fail' : 'Success',
                  errorType: errorType,
                  errorCode: errorCode,
                  errorStatusCode: errorStatusCode,
                  errorMessage: errorMessage,
                  errorServiceName: errorServiceName,
                  errorRequestId: requestId
                });

                if (err && (!errorCode || !errorMessage)) {
                  // 暂存全量err一段时间 观察是否所有err格式都可被解析
                  this.params.fullError = err ? JSON.stringify(err) : '';
                }

                if (this.params.name === 'getObject') {
                  this.params.size = data ? data.headers && data.headers['content-length'] : -1;
                }

                if (this.params.reqUrl) {
                  try {
                    exec = /^http(s)?:\/\/(.*?)\//.exec(this.params.reqUrl);
                    this.params.host = exec[2];
                  } catch (e) {
                    this.params.host = this.params.reqUrl;
                  }
                }

                this.sendEvents();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function formatResult(_x, _x2) {
        return _formatResult.apply(this, arguments);
      }

      return formatResult;
    }() // 设置当前链路的参数

  }, {
    key: "setParams",
    value: function setParams(params) {
      Object.assign(this.params, params);
    } // 使用灯塔延时上报

  }, {
    key: "sendEvents",
    value: function sendEvents() {
      // DeepTracker模式下才会上报分块上传内部细节
      if (sliceUploadMethods.includes(this.params.name) && !this.deepTracker) {
        return;
      }

      var eventCode = getEventCode(this.params.name);
      var formattedParams = formatParams(this.params);
      console.log(eventCode, formattedParams);

      if (this.params.delay === 0) {
        // 实时上报
        this.beacon.onDirectUserAction(eventCode, formattedParams);
      } else {
        // 周期性上报
        this.beacon.onUserAction(eventCode, formattedParams);
      } // 上报结束即销毁


      this.destroy();
    } // 生成子实例，与父所属一个链路，可用于分块上传内部流程上报单个分块操作

  }, {
    key: "generateSubTracker",
    value: function generateSubTracker(subParams) {
      Object.assign(subParams, {
        parent: this,
        deepTracker: this.deepTracker,
        traceId: this.params.traceId,
        bucket: this.params.bucket,
        region: this.params.region,
        fileKey: this.params.requestPath,
        customId: this.params.customId,
        delay: this.params.delay
      });
      return new Tracker(subParams);
    } // 链路结束后销毁实例

  }, {
    key: "destroy",
    value: function destroy() {
      this.beacon = null;
      this.params = {};
    }
  }]);

  return Tracker;
}();

module.exports = Tracker;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var md5 = __webpack_require__(/*! ../lib/md5 */ "./lib/md5.js");

var CryptoJS = __webpack_require__(/*! ../lib/crypto */ "./lib/crypto.js");

var xml2json = __webpack_require__(/*! ../lib/xml2json */ "./lib/xml2json.js");

var json2xml = __webpack_require__(/*! ../lib/json2xml */ "./lib/json2xml.js");

var base64 = __webpack_require__(/*! ../lib/base64 */ "./lib/base64.js");

var btoa = base64.btoa;
var wxfs = wx.getFileSystemManager();

var Tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js");

function camSafeUrlEncode(str) {
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
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
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

;
/**
 * obj转为string
 * @param  {Object}  obj                需要转的对象，必须
 * @param  {Boolean} lowerCaseKey       key是否转为小写，默认false，非必须
 * @return {String}  data               返回字符串
 */

var obj2str = function obj2str(obj, lowerCaseKey) {
  var i, key, val;
  var list = [];
  var keyList = getObjectKeys(obj);

  for (i = 0; i < keyList.length; i++) {
    key = keyList[i];
    val = obj[key] === undefined || obj[key] === null ? '' : '' + obj[key];
    key = lowerCaseKey ? camSafeUrlEncode(key).toLowerCase() : camSafeUrlEncode(key);
    val = camSafeUrlEncode(val) || '';
    list.push(key + '=' + val);
  }

  return list.join('&');
}; // 可以签入签名的headers


var signHeaders = ['content-disposition', 'content-encoding', 'content-length', 'content-md5', 'expect', 'expires', 'host', 'if-match', 'if-modified-since', 'if-none-match', 'if-unmodified-since', 'origin', 'range', 'response-cache-control', 'response-content-disposition', 'response-content-encoding', 'response-content-language', 'response-content-type', 'response-expires', 'transfer-encoding', 'versionid'];

var getSignHeaderObj = function getSignHeaderObj(headers) {
  var signHeaderObj = {};

  for (var i in headers) {
    var key = i.toLowerCase();

    if (key.indexOf('x-cos-') > -1 || signHeaders.indexOf(key) > -1) {
      signHeaderObj[i] = headers[i];
    }
  }

  return signHeaderObj;
}; //测试用的key后面可以去掉


var getAuth = function getAuth(opt) {
  opt = opt || {};
  var SecretId = opt.SecretId;
  var SecretKey = opt.SecretKey;
  var KeyTime = opt.KeyTime;
  var method = (opt.method || opt.Method || 'get').toLowerCase();
  var queryParams = clone(opt.Query || opt.params || {});
  var headers = getSignHeaderObj(clone(opt.Headers || opt.headers || {}));
  var Key = opt.Key || '';
  var pathname;

  if (opt.UseRawKey) {
    pathname = opt.Pathname || opt.pathname || '/' + Key;
  } else {
    pathname = opt.Pathname || opt.pathname || Key;
    pathname.indexOf('/') !== 0 && (pathname = '/' + pathname);
  } // ForceSignHost明确传入false才不加入host签名


  var forceSignHost = opt.ForceSignHost === false ? false : true; // 如果有传入存储桶，那么签名默认加 Host 参与计算，避免跨桶访问

  if (!headers.Host && !headers.host && opt.Bucket && opt.Region && forceSignHost) headers.Host = opt.Bucket + '.cos.' + opt.Region + '.myqcloud.com';
  if (!SecretId) return console.error('missing param SecretId');
  if (!SecretKey) return console.error('missing param SecretKey'); // 签名有效起止时间

  var now = Math.round(getSkewTime(opt.SystemClockOffset) / 1000) - 1;
  var exp = now;
  var Expires = opt.Expires || opt.expires;

  if (Expires === undefined) {
    exp += 900; // 签名过期时间为当前 + 900s
  } else {
    exp += Expires * 1 || 0;
  } // 要用到的 Authorization 参数列表


  var qSignAlgorithm = 'sha1';
  var qAk = SecretId;
  var qSignTime = KeyTime || now + ';' + exp;
  var qKeyTime = KeyTime || now + ';' + exp;
  var qHeaderList = getObjectKeys(headers, true).join(';').toLowerCase();
  var qUrlParamList = getObjectKeys(queryParams, true).join(';').toLowerCase(); // 签名算法说明文档：https://www.qcloud.com/document/product/436/7778
  // 步骤一：计算 SignKey

  var signKey = CryptoJS.HmacSHA1(qKeyTime, SecretKey).toString(); // 步骤二：构成 FormatString

  var formatString = [method, pathname, util.obj2str(queryParams, true), util.obj2str(headers, true), ''].join('\n'); // 步骤三：计算 StringToSign

  var stringToSign = ['sha1', qSignTime, CryptoJS.SHA1(formatString).toString(), ''].join('\n'); // 步骤四：计算 Signature

  var qSignature = CryptoJS.HmacSHA1(stringToSign, signKey).toString(); // 步骤五：构造 Authorization

  var authorization = ['q-sign-algorithm=' + qSignAlgorithm, 'q-ak=' + qAk, 'q-sign-time=' + qSignTime, 'q-key-time=' + qKeyTime, 'q-header-list=' + qHeaderList, 'q-url-param-list=' + qUrlParamList, 'q-signature=' + qSignature].join('&');
  return authorization;
};

var noop = function noop() {}; // 清除对象里值为的 undefined 或 null 的属性


var clearKey = function clearKey(obj) {
  var retObj = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      retObj[key] = obj[key];
    }
  }

  return retObj;
}; // 获取文件分片


var fileSlice = function fileSlice(FilePath, start, end, callback) {
  if (FilePath) {
    wxfs.readFile({
      filePath: FilePath,
      position: start,
      length: end - start,
      success: function success(res) {
        callback(res.data);
      },
      fail: function fail() {
        callback(null);
      }
    });
  } else {
    callback(null);
  }
}; // 获取文件内容的 MD5


var getBodyMd5 = function getBodyMd5(UploadCheckContentMd5, Body, callback) {
  callback = callback || noop;

  if (UploadCheckContentMd5) {
    if (Body && Body instanceof ArrayBuffer) {
      util.getFileMd5(Body, function (err, md5) {
        callback(md5);
      });
    } else {
      callback();
    }
  } else {
    callback();
  }
}; // 获取文件 md5 值


var getFileMd5 = function getFileMd5(body, callback) {
  var hash = md5(body);
  callback && callback(hash);
  return hash;
};

function clone(obj) {
  return map(obj, function (v) {
    return _typeof(v) === 'object' && v !== null ? clone(v) : v;
  });
}

function attr(obj, name, defaultValue) {
  return obj && name in obj ? obj[name] : defaultValue;
}

function extend(target, source) {
  each(source, function (val, key) {
    target[key] = source[key];
  });
  return target;
}

function isArray(arr) {
  return arr instanceof Array;
}

function isInArray(arr, item) {
  var flag = false;

  for (var i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      flag = true;
      break;
    }
  }

  return flag;
}

function makeArray(arr) {
  return isArray(arr) ? arr : [arr];
}

function each(obj, fn) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn(obj[i], i);
    }
  }
}

function map(obj, fn) {
  var o = isArray(obj) ? [] : {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = fn(obj[i], i);
    }
  }

  return o;
}

function filter(obj, fn) {
  var iaArr = isArray(obj);
  var o = iaArr ? [] : {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (fn(obj[i], i)) {
        if (iaArr) {
          o.push(obj[i]);
        } else {
          o[i] = obj[i];
        }
      }
    }
  }

  return o;
}

var binaryBase64 = function binaryBase64(str) {
  var i,
      len,
      _char,
      res = '';

  for (i = 0, len = str.length / 2; i < len; i++) {
    _char = parseInt(str[i * 2] + str[i * 2 + 1], 16);
    res += String.fromCharCode(_char);
  }

  return btoa(res);
};

var uuid = function uuid() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};

var hasMissingParams = function hasMissingParams(apiName, params) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;

  if (apiName.indexOf('Bucket') > -1 || apiName === 'deleteMultipleObject' || apiName === 'multipartList' || apiName === 'listObjectVersions') {
    if (!Bucket) return 'Bucket';
    if (!Region) return 'Region';
  } else if (apiName.indexOf('Object') > -1 || apiName.indexOf('multipart') > -1 || apiName === 'sliceUploadFile' || apiName === 'abortUploadTask') {
    if (!Bucket) return 'Bucket';
    if (!Region) return 'Region';
    if (!Key) return 'Key';
  }

  return false;
};

var formatParams = function formatParams(apiName, params) {
  // 复制参数对象
  params = extend({}, params); // 统一处理 Headers

  if (apiName !== 'getAuth' && apiName !== 'getV4Auth' && apiName !== 'getObjectUrl') {
    var Headers = params.Headers || {};

    if (params && _typeof(params) === 'object') {
      (function () {
        for (var key in params) {
          if (params.hasOwnProperty(key) && key.indexOf('x-cos-') > -1) {
            Headers[key] = params[key];
          }
        }
      })();

      var headerMap = {
        // params headers
        'x-cos-mfa': 'MFA',
        'Content-MD5': 'ContentMD5',
        'Content-Length': 'ContentLength',
        'Content-Type': 'ContentType',
        'Expect': 'Expect',
        'Expires': 'Expires',
        'Cache-Control': 'CacheControl',
        'Content-Disposition': 'ContentDisposition',
        'Content-Encoding': 'ContentEncoding',
        'Range': 'Range',
        'If-Modified-Since': 'IfModifiedSince',
        'If-Unmodified-Since': 'IfUnmodifiedSince',
        'If-Match': 'IfMatch',
        'If-None-Match': 'IfNoneMatch',
        'x-cos-copy-source': 'CopySource',
        'x-cos-copy-source-Range': 'CopySourceRange',
        'x-cos-metadata-directive': 'MetadataDirective',
        'x-cos-copy-source-If-Modified-Since': 'CopySourceIfModifiedSince',
        'x-cos-copy-source-If-Unmodified-Since': 'CopySourceIfUnmodifiedSince',
        'x-cos-copy-source-If-Match': 'CopySourceIfMatch',
        'x-cos-copy-source-If-None-Match': 'CopySourceIfNoneMatch',
        'x-cos-acl': 'ACL',
        'x-cos-grant-read': 'GrantRead',
        'x-cos-grant-write': 'GrantWrite',
        'x-cos-grant-full-control': 'GrantFullControl',
        'x-cos-grant-read-acp': 'GrantReadAcp',
        'x-cos-grant-write-acp': 'GrantWriteAcp',
        'x-cos-storage-class': 'StorageClass',
        'x-cos-traffic-limit': 'TrafficLimit',
        'x-cos-mime-limit': 'MimeLimit',
        // SSE-C
        'x-cos-server-side-encryption-customer-algorithm': 'SSECustomerAlgorithm',
        'x-cos-server-side-encryption-customer-key': 'SSECustomerKey',
        'x-cos-server-side-encryption-customer-key-MD5': 'SSECustomerKeyMD5',
        // SSE-COS、SSE-KMS
        'x-cos-server-side-encryption': 'ServerSideEncryption',
        'x-cos-server-side-encryption-cos-kms-key-id': 'SSEKMSKeyId',
        'x-cos-server-side-encryption-context': 'SSEContext'
      };
      util.each(headerMap, function (paramKey, headerKey) {
        if (params[paramKey] !== undefined) {
          Headers[headerKey] = params[paramKey];
        }
      });
      params.Headers = clearKey(Headers);
    }
  }

  return params;
};

var apiWrapper = function apiWrapper(apiName, apiFn) {
  return function (params, callback) {
    var self = this; // 处理参数

    if (typeof params === 'function') {
      callback = params;
      params = {};
    } // 整理参数格式


    params = formatParams(apiName, params); // tracker传递

    var tracker;

    if (self.options.EnableTracker) {
      if (params.calledBySdk === 'sliceUploadFile') {
        // 分块上传内部方法使用sliceUploadFile的子链路
        tracker = params.tracker && params.tracker.generateSubTracker({
          apiName: apiName
        });
      } else if (['uploadFile', 'uploadFiles'].includes(apiName)) {
        // uploadFile、uploadFiles方法在内部处理，此处不处理
        tracker = null;
      } else {
        var fileSize = -1;

        if (params.Body) {
          fileSize = typeof params.Body === 'string' ? params.Body.length : params.Body.size || params.Body.byteLength || -1;
        }

        tracker = new Tracker({
          bucket: params.Bucket,
          region: params.Region,
          apiName: apiName,
          fileKey: params.Key,
          fileSize: fileSize,
          deepTracker: self.options.DeepTracker,
          customId: self.options.CustomId,
          delay: self.options.TrackerDelay
        });
      }
    }

    params.tracker = tracker; // 代理回调函数

    var formatResult = function formatResult(result) {
      if (result && result.headers) {
        result.headers['x-cos-request-id'] && (result.RequestId = result.headers['x-cos-request-id']);
        result.headers['x-ci-request-id'] && (result.RequestId = result.headers['x-ci-request-id']);
        result.headers['x-cos-version-id'] && (result.VersionId = result.headers['x-cos-version-id']);
        result.headers['x-cos-delete-marker'] && (result.DeleteMarker = result.headers['x-cos-delete-marker']);
      }

      return result;
    };

    var _callback = function _callback(err, data) {
      // 格式化上报参数并上报
      tracker && tracker.formatResult(err, data);
      callback && callback(formatResult(err), formatResult(data));
    };

    var checkParams = function checkParams() {
      if (apiName !== 'getService' && apiName !== 'abortUploadTask') {
        // 判断参数是否完整
        var missingResult = hasMissingParams(apiName, params);

        if (missingResult) {
          return 'missing param ' + missingResult;
        } // 判断 region 格式


        if (params.Region) {
          if (params.Region.indexOf('cos.') > -1) {
            return 'param Region should not be start with "cos."';
          } else if (!/^([a-z\d-]+)$/.test(params.Region)) {
            return 'Region format error.';
          } // 判断 region 格式


          if (!self.options.CompatibilityMode && params.Region.indexOf('-') === -1 && params.Region !== 'yfb' && params.Region !== 'default' && params.Region !== 'accelerate') {
            console.warn('warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224');
          }
        } // 兼容不带 AppId 的 Bucket


        if (params.Bucket) {
          if (!/^([a-z\d-]+)-(\d+)$/.test(params.Bucket)) {
            if (params.AppId) {
              params.Bucket = params.Bucket + '-' + params.AppId;
            } else if (self.options.AppId) {
              params.Bucket = params.Bucket + '-' + self.options.AppId;
            } else {
              return 'Bucket should format as "test-1250000000".';
            }
          }

          if (params.AppId) {
            console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).');
            delete params.AppId;
          }
        } // 如果 Key 是 / 开头，强制去掉第一个 /


        if (params.Key && params.Key.substr(0, 1) === '/') {
          params.Key = params.Key.substr(1);
        }
      }
    };

    var errMsg = checkParams();
    var isSync = apiName === 'getAuth' || apiName === 'getObjectUrl';
    var Promise = global.Promise;

    if (!isSync && Promise && !callback) {
      return new Promise(function (resolve, reject) {
        callback = function callback(err, data) {
          err ? reject(err) : resolve(data);
        };

        if (errMsg) return _callback({
          error: errMsg
        });
        apiFn.call(self, params, _callback);
      });
    } else {
      if (errMsg) return _callback({
        error: errMsg
      });
      var res = apiFn.call(self, params, _callback);
      if (isSync) return res;
    }
  };
};

var throttleOnProgress = function throttleOnProgress(total, onProgress) {
  var self = this;
  var size0 = 0;
  var size1 = 0;
  var time0 = Date.now();
  var time1;
  var timer;

  function update() {
    timer = 0;

    if (onProgress && typeof onProgress === 'function') {
      time1 = Date.now();
      var speed = Math.max(0, Math.round((size1 - size0) / ((time1 - time0) / 1000) * 100) / 100) || 0;
      var percent;

      if (size1 === 0 && total === 0) {
        percent = 1;
      } else {
        percent = Math.floor(size1 / total * 100) / 100 || 0;
      }

      time0 = time1;
      size0 = size1;

      try {
        onProgress({
          loaded: size1,
          total: total,
          speed: speed,
          percent: percent
        });
      } catch (e) {}
    }
  }

  return function (info, immediately) {
    if (info) {
      size1 = info.loaded;
      total = info.total;
    }

    if (immediately) {
      clearTimeout(timer);
      update();
    } else {
      if (timer) return;
      timer = setTimeout(update, self.options.ProgressInterval);
    }
  };
}; // 通过FilePath获取上传文件的内容


var getFileBody = function getFileBody(FilePath) {
  return new Promise(function (resolve, reject) {
    wxfs.readFile({
      filePath: FilePath,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(res) {
        reject((res === null || res === void 0 ? void 0 : res.errMsg) || '');
      }
    });
  });
};

var getFileSize = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(api, params, callback) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(api === 'postObject')) {
              _context.next = 4;
              break;
            }

            callback();
            _context.next = 21;
            break;

          case 4:
            if (!(api === 'putObject')) {
              _context.next = 20;
              break;
            }

            if (!(params.Body === undefined && params.FilePath)) {
              _context.next = 17;
              break;
            }

            _context.prev = 6;
            _context.next = 9;
            return getFileBody(params.FilePath);

          case 9:
            params.Body = _context.sent;
            _context.next = 17;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](6);
            params.Body = undefined;
            callback({
              error: "readFile error, ".concat(_context.t0)
            });
            return _context.abrupt("return");

          case 17:
            if (params.Body !== undefined) {
              params.ContentLength = params.Body.byteLength;
              callback(null, params.ContentLength);
            } else {
              callback({
                error: 'missing param Body'
              });
            }

            _context.next = 21;
            break;

          case 20:
            if (params.FilePath) {
              wxfs.stat({
                path: params.FilePath,
                success: function success(res) {
                  var stats = res.stats;
                  params.FileStat = stats;
                  params.FileStat.FilePath = params.FilePath;
                  var size = stats.isDirectory() ? 0 : stats.size;
                  params.ContentLength = size = size || 0;
                  callback(null, size);
                },
                fail: function fail(err) {
                  callback(err);
                }
              });
            } else {
              callback({
                error: 'missing param FilePath'
              });
            }

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 12]]);
  }));

  return function getFileSize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var getSkewTime = function getSkewTime(offset) {
  return Date.now() + (offset || 0);
};

var compareVersion = function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

var canFileSlice = function () {
  var systemInfo = wx.getSystemInfoSync();
  var support = compareVersion(systemInfo.SDKVersion, '2.10.0') >= 0;
  var needWarning = !support && systemInfo.platform === "devtools";
  return function () {
    if (needWarning) console.warn('当前小程序版本小于 2.10.0，不支持分片上传，请更新软件。');
    needWarning = false;
    return support;
  };
}();

var isCIHost = function isCIHost(url) {
  return /^https?:\/\/([^/]+\.)?ci\.[^/]+/.test(url);
};

var error = function error(err, opt) {
  var sourceErr = err;
  err.message = err.message || null;

  if (typeof opt === 'string') {
    err.error = opt;
    err.message = opt;
  } else if (_typeof(opt) === 'object' && opt !== null) {
    extend(err, opt);
    if (opt.code || opt.name) err.code = opt.code || opt.name;
    if (opt.message) err.message = opt.message;
    if (opt.stack) err.stack = opt.stack;
  }

  if (typeof Object.defineProperty === 'function') {
    Object.defineProperty(err, 'name', {
      writable: true,
      enumerable: false
    });
    Object.defineProperty(err, 'message', {
      enumerable: true
    });
  }

  err.name = opt && opt.name || err.name || err.code || 'Error';
  if (!err.code) err.code = err.name;
  if (!err.error) err.error = clone(sourceErr); // 兼容老的错误格式

  return err;
};

var util = {
  noop: noop,
  formatParams: formatParams,
  apiWrapper: apiWrapper,
  xml2json: xml2json,
  json2xml: json2xml,
  md5: md5,
  clearKey: clearKey,
  fileSlice: fileSlice,
  getBodyMd5: getBodyMd5,
  getFileMd5: getFileMd5,
  binaryBase64: binaryBase64,
  extend: extend,
  isArray: isArray,
  isInArray: isInArray,
  makeArray: makeArray,
  each: each,
  map: map,
  filter: filter,
  clone: clone,
  attr: attr,
  uuid: uuid,
  camSafeUrlEncode: camSafeUrlEncode,
  throttleOnProgress: throttleOnProgress,
  getFileSize: getFileSize,
  getSkewTime: getSkewTime,
  obj2str: obj2str,
  getAuth: getAuth,
  compareVersion: compareVersion,
  canFileSlice: canFileSlice,
  isCIHost: isCIHost,
  error: error
};
module.exports = util;
xml2json;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});