"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***********************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".oneline": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        5
      ],
      "WebkitLineClamp": [
        1,
        0,
        0,
        5
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        5
      ],
      "WebkitBoxOrient": [
        "vertical",
        0,
        0,
        5
      ],
      "wordWrap": [
        "break-word",
        0,
        0,
        5
      ],
      "lines": [
        1,
        0,
        0,
        5
      ],
      "whiteSpace": [
        "nowrap",
        0,
        0,
        5
      ]
    }
  },
  ".uni-mask": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        6
      ],
      "zIndex": [
        999,
        0,
        0,
        6
      ],
      "width": [
        100,
        0,
        0,
        6
      ],
      "height": [
        100,
        0,
        0,
        6
      ],
      "top": [
        0,
        0,
        0,
        6
      ],
      "right": [
        0,
        0,
        0,
        6
      ],
      "bottom": [
        0,
        0,
        0,
        6
      ],
      "left": [
        0,
        0,
        0,
        6
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.2)",
        0,
        0,
        6
      ],
      "display": [
        "flex",
        0,
        0,
        6
      ],
      "justifyContent": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".uni-mask-nvue": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        7
      ],
      "zIndex": [
        999,
        0,
        0,
        7
      ],
      "width": [
        "750rpx",
        0,
        0,
        7
      ],
      "top": [
        0,
        0,
        0,
        7
      ],
      "right": [
        0,
        0,
        0,
        7
      ],
      "bottom": [
        0,
        0,
        0,
        7
      ],
      "left": [
        0,
        0,
        0,
        7
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.2)",
        0,
        0,
        7
      ],
      "display": [
        "flex",
        0,
        0,
        7
      ],
      "alignItems": [
        "center",
        0,
        0,
        7
      ],
      "justifyContent": [
        "center",
        0,
        0,
        7
      ]
    }
  },
  ".row": {
    "": {
      "display": [
        "flex",
        0,
        0,
        8
      ],
      "flexDirection": [
        "row",
        0,
        0,
        8
      ]
    }
  },
  ".column": {
    "": {
      "display": [
        "flex",
        0,
        0,
        9
      ],
      "flexDirection": [
        "column",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/*!********************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/toolClass/WYToolClass.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ 13));\nvar _default = {\n  user: function user() {\n    return uni.getStorageSync('userinfo');\n  },\n  sendRequest: function sendRequest(url, data, showtoast) {\n    var promise = new Promise(function (resolve, reject) {\n      if (showtoast) {\n        plus.nativeUI.showWaiting();\n      }\n      var value = uni.getStorageSync('userinfo');\n      var toolData = {\n        lat: '0',\n        lng: '0'\n      };\n      if (value) {\n        toolData.uid = value.id;\n        toolData.token = value.token;\n      }\n      var loaction = uni.getStorageSync('userlocation');\n      // console.log(value)\n      if (loaction) {\n        toolData.lat = loaction.lat;\n        toolData.lng = loaction.lng;\n      }\n      var cityid = uni.getStorageSync('cityid');\n      if (cityid) {\n        toolData.cityid = cityid;\n      }\n      var system_info = uni.getStorageSync('system_info');\n      var lag = system_info.language ? system_info.language : 'th-TH';\n      lag = system_info.appLanguage ? system_info.appLanguage : 'th-TH';\n\n      // console.log(lag)\n      var cur_lang = lag.indexOf('zh') != -1 ? toolData.lang = 'zh' : toolData.lang = 'th';\n      getApp().globalData.language = toolData.lang;\n      if (getApp().globalData.platform == 'ios') {\n        toolData.source = 2;\n      } else if (getApp().globalData.platform == 'android') {\n        toolData.source = 1;\n      }\n      __f__(\"log\", toolData, \" at toolClass/WYToolClass.js:59\");\n      __f__(\"log\", \">------>\" + getApp().globalData.weburl + 'api/?s=App.' + url + \">------>\", data, Object.assign(toolData, data), \" at toolClass/WYToolClass.js:60\");\n      uni.request({\n        url: getApp().globalData.weburl + 'api/?s=App.' + url,\n        data: Object.assign(toolData, data),\n        success: function success(res) {\n          __f__(\"log\", \"<-------<\" + getApp().globalData.weburl + 'api/?s=App.' + url + \"<--------<\", res, \" at toolClass/WYToolClass.js:66\");\n          plus.nativeUI.closeWaiting();\n\n          // console.log(JSON.stringify(res),url);\n\n          if (res.data.ret == 200) {\n            if (res.data.data.code == 0) {\n              resolve(res.data.data);\n            } else {\n              uni.showToast({\n                title: res.data.data.msg,\n                icon: 'none'\n              });\n              if (res.data.data.code == 1002) {\n                resolve(res.data.data);\n              } else if (res.data.data.code == 700) {\n                // uni.navigateTo({\n                // \turl:'/pages/login/login'\n                // })\n                resolve(res.data.data);\n              } else if (res.data.data.code == 400) {\n                // uni.navigateTo({\n                // \turl:'/pages/login/login'\n                // })\n                resolve(res.data.data);\n              }\n            }\n          } else {\n            uni.showToast({\n              title: res.data.msg,\n              duration: 2000,\n              icon: 'none'\n            });\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"log\", error, \" at toolClass/WYToolClass.js:114\");\n          plus.nativeUI.closeWaiting();\n        },\n        complete: function complete(res) {\n          // console.log(res)\n        }\n      });\n    });\n    return promise;\n  },\n  decypt: function decypt(code) {\n    var newcode = '';\n    var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&*';\n    for (var i = 0; i < code.length; i++) {\n      var codeIteam = code[i];\n      for (var j = 0; j < str.length; j++) {\n        var stringIteam = str[j];\n        if (codeIteam == stringIteam) {\n          if (j == 0) {\n            newcode += str[str.length - 1];\n          } else {\n            newcode += str[j - 1];\n          }\n        }\n      }\n    }\n    return newcode;\n  },\n  sort2url: function sort2url(arr1) {\n    var newkey = Object.keys(arr1).sort();\n    var newObj = {};\n    for (var i = 0; i < newkey.length; i++) {\n      newObj[newkey[i]] = arr1[newkey[i]];\n    }\n    var text = \"\";\n    for (var index in newObj) {\n      text = text + index + \"=\" + newObj[index] + \"&\";\n    }\n    text = text.substr(0, text.length - 1);\n    text += '&' + '400d069a791d51ada8af3e6c2979bcd7';\n    return (0, _md.default)(text);\n  },\n  getQueryString: function getQueryString(name) {\n    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');\n    var r = window.location.search.substr(1).match(reg);\n    if (r != null) {\n      return unescape(r[2]);\n    }\n    return null;\n  },\n  checktoken: function checktoken() {\n    var promise = new Promise(function (resolve, reject) {\n      var value = uni.getStorageSync('userinfo');\n      if (value == '' || value.token == undefined || value == '') {\n        uni.hideLoading();\n        resolve(0);\n      } else {\n        uni.request({\n          url: getApp().globalData.weburl + 'api/?s=App.User.Iftoken',\n          method: 'POST',\n          data: {\n            'uid': value.id,\n            'token': value.token\n          },\n          success: function success(res) {\n            __f__(\"log\", res, \" at toolClass/WYToolClass.js:185\");\n            uni.hideLoading();\n            if (res.data.data.code == 0) {\n              resolve(0);\n            } else {\n              reject(res.data.data.msg);\n            }\n          },\n          fail: function fail() {\n            uni.hideLoading();\n          },\n          complete: function complete() {\n            uni.hideLoading();\n          }\n        });\n      }\n    });\n    return promise;\n  }\n}; // module.exports.sendRequest = sendRequest;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdG9vbENsYXNzL1dZVG9vbENsYXNzLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsInNlbmRSZXF1ZXN0IiwidXJsIiwiZGF0YSIsInNob3d0b2FzdCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBsdXMiLCJuYXRpdmVVSSIsInNob3dXYWl0aW5nIiwidmFsdWUiLCJ0b29sRGF0YSIsImxhdCIsImxuZyIsInVpZCIsImlkIiwidG9rZW4iLCJsb2FjdGlvbiIsImNpdHlpZCIsInN5c3RlbV9pbmZvIiwibGFnIiwibGFuZ3VhZ2UiLCJhcHBMYW5ndWFnZSIsImN1cl9sYW5nIiwiaW5kZXhPZiIsImxhbmciLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwicGxhdGZvcm0iLCJzb3VyY2UiLCJ3ZWJ1cmwiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsImNsb3NlV2FpdGluZyIsInJldCIsImNvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm1zZyIsImljb24iLCJkdXJhdGlvbiIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiZGVjeXB0IiwibmV3Y29kZSIsInN0ciIsImkiLCJsZW5ndGgiLCJjb2RlSXRlYW0iLCJqIiwic3RyaW5nSXRlYW0iLCJzb3J0MnVybCIsImFycjEiLCJuZXdrZXkiLCJrZXlzIiwic29ydCIsIm5ld09iaiIsInRleHQiLCJpbmRleCIsInN1YnN0ciIsIm1kNV9qcyIsImdldFF1ZXJ5U3RyaW5nIiwibmFtZSIsInJlZyIsIlJlZ0V4cCIsInIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm1hdGNoIiwidW5lc2NhcGUiLCJjaGVja3Rva2VuIiwidW5kZWZpbmVkIiwiaGlkZUxvYWRpbmciLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE2QixlQUVkO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFP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QyxDQUFDO0lBRUYsT0FBTzFFLE9BQU87RUFDZjtBQUVGLENBQUMsRUFDRDtBQUFBLDJCIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNV9qcyBmcm9tICcuL21kNS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR1c2VyKCkge1xyXG5cdFx0cmV0dXJuIHVuaS5nZXRTdG9yYWdlU3luYygndXNlcmluZm8nKVxyXG5cdH0sXHRcclxuXHRzZW5kUmVxdWVzdCh1cmwsIGRhdGEsIHNob3d0b2FzdCkge1xyXG5cdFx0XHJcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRpZiAoc2hvd3RvYXN0KXtcclxuXHJcblx0XHRcdFx0cGx1cy5uYXRpdmVVSS5zaG93V2FpdGluZygpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyaW5mbycpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHRvb2xEYXRhID0ge1xyXG5cdFx0XHRcdGxhdDonMCcsXHJcblx0XHRcdFx0bG5nOicwJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRvb2xEYXRhLnVpZCA9IHZhbHVlLmlkXHJcblx0XHRcdFx0dG9vbERhdGEudG9rZW4gPSB2YWx1ZS50b2tlblx0XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGxvYWN0aW9uID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VybG9jYXRpb24nKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdGlmIChsb2FjdGlvbikge1xyXG5cdFx0XHRcdHRvb2xEYXRhLmxhdCA9IGxvYWN0aW9uLmxhdFxyXG5cdFx0XHRcdHRvb2xEYXRhLmxuZyA9IGxvYWN0aW9uLmxuZ1x0XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY2l0eWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdjaXR5aWQnKVxyXG5cdFx0XHRpZihjaXR5aWQpe1xyXG5cdFx0XHRcdHRvb2xEYXRhLmNpdHlpZCA9IGNpdHlpZFxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHN5c3RlbV9pbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdzeXN0ZW1faW5mbycpXHJcblx0XHRcdHZhciBsYWcgPSBzeXN0ZW1faW5mby5sYW5ndWFnZSA/IHN5c3RlbV9pbmZvLmxhbmd1YWdlIDogJ3RoLVRIJ1xyXG5cclxuXHRcdFx0bGFnID0gc3lzdGVtX2luZm8uYXBwTGFuZ3VhZ2UgPyBzeXN0ZW1faW5mby5hcHBMYW5ndWFnZSA6ICd0aC1USCdcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGxhZylcclxuXHRcdFx0Y29uc3QgY3VyX2xhbmcgPSBsYWcuaW5kZXhPZignemgnKSAhPSAtMSA/IHRvb2xEYXRhLmxhbmcgPSd6aCcgOiB0b29sRGF0YS5sYW5nID0ndGgnXHJcblx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEubGFuZ3VhZ2UgPSB0b29sRGF0YS5sYW5nXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRpZihnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXRmb3JtID09ICdpb3MnKXtcclxuXHRcdFx0XHR0b29sRGF0YS5zb3VyY2UgPSAyXHJcblx0XHRcdH1lbHNlIGlmKGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcclxuXHRcdFx0XHR0b29sRGF0YS5zb3VyY2UgPSAxXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHRvb2xEYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIj4tLS0tLS0+XCIrZ2V0QXBwKCkuZ2xvYmFsRGF0YS53ZWJ1cmwgKyAnYXBpLz9zPUFwcC4nICsgdXJsK1wiPi0tLS0tLT5cIixkYXRhLE9iamVjdC5hc3NpZ24odG9vbERhdGEsIGRhdGEpKVxyXG5cdFx0XHRcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS53ZWJ1cmwgKyAnYXBpLz9zPUFwcC4nICsgdXJsLFxyXG5cdFx0XHRcdGRhdGE6IE9iamVjdC5hc3NpZ24odG9vbERhdGEsIGRhdGEpLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCI8LS0tLS0tLTxcIitnZXRBcHAoKS5nbG9iYWxEYXRhLndlYnVybCArICdhcGkvP3M9QXBwLicgKyB1cmwrXCI8LS0tLS0tLS08XCIscmVzKTtcclxuXHJcblx0XHRcdFx0XHRwbHVzLm5hdGl2ZVVJLmNsb3NlV2FpdGluZygpXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSx1cmwpO1xyXG5cdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLnJldCA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmRhdGEuY29kZSA9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMTAwMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5kYXRhLmRhdGEuY29kZSA9PSA3MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0dXJsOicvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChyZXMuZGF0YS5kYXRhLmNvZGUgPT0gNDAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblxyXG5cdFx0XHRcdFx0cGx1cy5uYXRpdmVVSS5jbG9zZVdhaXRpbmcoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjb21wbGV0ZTpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHR9LFxyXG5cdGRlY3lwdChjb2RlKSB7XHJcblx0XHR2YXIgbmV3Y29kZSA9ICcnO1xyXG5cdFx0dmFyIHN0ciA9ICcxZWN4WHlMUkIuQ09kckFpOnEwOVo2MmFzaC1RR244VkZOSWxiPWZNL0Q3NFdqU19FVXpZdXc/SG1UUHZrSjNvdEs1Z3AmKidcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29kZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY29kZUl0ZWFtID0gY29kZVtpXTtcclxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHR2YXIgc3RyaW5nSXRlYW0gPSBzdHJbal07XHJcblx0XHRcdFx0aWYgKGNvZGVJdGVhbSA9PSBzdHJpbmdJdGVhbSkge1xyXG5cdFx0XHRcdFx0aWYgKGogPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRuZXdjb2RlICs9IHN0cltzdHIubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdjb2RlICs9IHN0cltqIC0gMV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3Y29kZTtcclxuXHR9LFxyXG5cdHNvcnQydXJsKGFycjEpIHtcclxuXHRcdHZhciBuZXdrZXkgPSBPYmplY3Qua2V5cyhhcnIxKS5zb3J0KCk7XHJcblx0XHR2YXIgbmV3T2JqID0ge307XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld2tleS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXdPYmpbbmV3a2V5W2ldXSA9IGFycjFbbmV3a2V5W2ldXTtcclxuXHRcdH1cclxuXHRcdHZhciB0ZXh0ID0gXCJcIjtcclxuXHRcdGZvciAodmFyIGluZGV4IGluIG5ld09iaikge1xyXG5cdFx0XHR0ZXh0ID0gdGV4dCArIGluZGV4ICsgXCI9XCIgKyBuZXdPYmpbaW5kZXhdICsgXCImXCI7XHJcblx0XHR9XHJcblx0XHR0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgdGV4dC5sZW5ndGggLSAxKTtcclxuXHRcdHRleHQgKz0gJyYnICsgJzQwMGQwNjlhNzkxZDUxYWRhOGFmM2U2YzI5NzliY2Q3JztcclxuXHRcdHJldHVybiBtZDVfanModGV4dCk7XHJcblx0fSxcclxuXHRnZXRRdWVyeVN0cmluZyhuYW1lKSB7XHJcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKF58JiknICsgbmFtZSArICc9KFteJl0qKSgmfCQpJywgJ2knKTtcclxuXHRcdHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuXHRcdGlmIChyICE9IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHVuZXNjYXBlKHJbMl0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSxcclxuXHRjaGVja3Rva2VuKCkge1xyXG5cdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyaW5mbycpO1xyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZS50b2tlbiA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRyZXNvbHZlKDApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS53ZWJ1cmwgKyAnYXBpLz9zPUFwcC5Vc2VyLklmdG9rZW4nLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdCd1aWQnOiB2YWx1ZS5pZCxcclxuXHRcdFx0XHRcdFx0XHQndG9rZW4nOiB2YWx1ZS50b2tlblxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgwKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEuZGF0YS5tc2cpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7dW5pLmhpZGVMb2FkaW5nKCl9LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge3VuaS5oaWRlTG9hZGluZygpfVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHR9LFxyXG5cdFx0XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMuc2VuZFJlcXVlc3QgPSBzZW5kUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/toolClass/md5.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 15);\n/**\r\n * [js-md5]{@link https://github.com/emn178/js-md5}\r\n *\r\n * @namespace md5\r\n * @version 0.7.3\r\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\r\n * @copyright Chen, Yi-Cyuan 2014-2017\r\n * @license MIT\r\n */\n(function () {\n  'use strict';\n\n  var ERROR = 'input is invalid type';\n  var WINDOW = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object';\n  var root = WINDOW ? window : {};\n  if (root.JS_MD5_NO_WINDOW) {\n    WINDOW = false;\n  }\n  var WEB_WORKER = !WINDOW && (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === 'object';\n  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === \"undefined\" ? \"undefined\" : _typeof(process)) === 'object' && process.versions && process.versions.node;\n  if (NODE_JS) {\n    root = global;\n  } else if (WEB_WORKER) {\n    root = self;\n  }\n  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;\n  var AMD =  true && __webpack_require__(/*! !webpack amd options */ 16);\n  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';\n  var HEX_CHARS = '0123456789abcdef'.split('');\n  var EXTRA = [128, 32768, 8388608, -2147483648];\n  var SHIFT = [0, 8, 16, 24];\n  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];\n  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');\n  var blocks = [],\n    buffer8;\n  if (ARRAY_BUFFER) {\n    var buffer = new ArrayBuffer(68);\n    buffer8 = new Uint8Array(buffer);\n    blocks = new Uint32Array(buffer);\n  }\n  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {\n    Array.isArray = function (obj) {\n      return Object.prototype.toString.call(obj) === '[object Array]';\n    };\n  }\n  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {\n    ArrayBuffer.isView = function (obj) {\n      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;\n    };\n  }\n\n  /**\r\n   * @method hex\r\n   * @memberof md5\r\n   * @description Output hash as hex string\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {String} Hex string\r\n   * @example\r\n   * md5.hex('The quick brown fox jumps over the lazy dog');\r\n   * // equal to\r\n   * md5('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method digest\r\n   * @memberof md5\r\n   * @description Output hash as bytes array\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Array} Bytes array\r\n   * @example\r\n   * md5.digest('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method array\r\n   * @memberof md5\r\n   * @description Output hash as bytes array\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Array} Bytes array\r\n   * @example\r\n   * md5.array('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method arrayBuffer\r\n   * @memberof md5\r\n   * @description Output hash as ArrayBuffer\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @example\r\n   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method buffer\r\n   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.\r\n   * @memberof md5\r\n   * @description Output hash as ArrayBuffer\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @example\r\n   * md5.buffer('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method base64\r\n   * @memberof md5\r\n   * @description Output hash as base64 string\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {String} base64 string\r\n   * @example\r\n   * md5.base64('The quick brown fox jumps over the lazy dog');\r\n   */\n  var createOutputMethod = function createOutputMethod(outputType) {\n    return function (message) {\n      return new Md5(true).update(message)[outputType]();\n    };\n  };\n\n  /**\r\n   * @method create\r\n   * @memberof md5\r\n   * @description Create Md5 object\r\n   * @returns {Md5} Md5 object.\r\n   * @example\r\n   * var hash = md5.create();\r\n   */\n  /**\r\n   * @method update\r\n   * @memberof md5\r\n   * @description Create and update Md5 object\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Md5} Md5 object.\r\n   * @example\r\n   * var hash = md5.update('The quick brown fox jumps over the lazy dog');\r\n   * // equal to\r\n   * var hash = md5.create();\r\n   * hash.update('The quick brown fox jumps over the lazy dog');\r\n   */\n  var createMethod = function createMethod() {\n    var method = createOutputMethod('hex');\n    if (NODE_JS) {\n      method = nodeWrap(method);\n    }\n    method.create = function () {\n      return new Md5();\n    };\n    method.update = function (message) {\n      return method.create().update(message);\n    };\n    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {\n      var type = OUTPUT_TYPES[i];\n      method[type] = createOutputMethod(type);\n    }\n    return method;\n  };\n  var nodeWrap = function nodeWrap(method) {\n    var crypto = eval(\"require('crypto')\");\n    var Buffer = eval(\"require('buffer').Buffer\");\n    var nodeMethod = function nodeMethod(message) {\n      if (typeof message === 'string') {\n        return crypto.createHash('md5').update(message, 'utf8').digest('hex');\n      } else {\n        if (message === null || message === undefined) {\n          throw ERROR;\n        } else if (message.constructor === ArrayBuffer) {\n          message = new Uint8Array(message);\n        }\n      }\n      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {\n        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');\n      } else {\n        return method(message);\n      }\n    };\n    return nodeMethod;\n  };\n\n  /**\r\n   * Md5 class\r\n   * @class Md5\r\n   * @description This is internal class.\r\n   * @see {@link md5.create}\r\n   */\n  function Md5(sharedMemory) {\n    if (sharedMemory) {\n      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      this.blocks = blocks;\n      this.buffer8 = buffer8;\n    } else {\n      if (ARRAY_BUFFER) {\n        var buffer = new ArrayBuffer(68);\n        this.buffer8 = new Uint8Array(buffer);\n        this.blocks = new Uint32Array(buffer);\n      } else {\n        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n      }\n    }\n    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;\n    this.finalized = this.hashed = false;\n    this.first = true;\n  }\n\n  /**\r\n   * @method update\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Update hash\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Md5} Md5 object.\r\n   * @see {@link md5.update}\r\n   */\n  Md5.prototype.update = function (message) {\n    if (this.finalized) {\n      return;\n    }\n    var notString,\n      type = _typeof(message);\n    if (type !== 'string') {\n      if (type === 'object') {\n        if (message === null) {\n          throw ERROR;\n        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {\n          message = new Uint8Array(message);\n        } else if (!Array.isArray(message)) {\n          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {\n            throw ERROR;\n          }\n        }\n      } else {\n        throw ERROR;\n      }\n      notString = true;\n    }\n    var code,\n      index = 0,\n      i,\n      length = message.length,\n      blocks = this.blocks;\n    var buffer8 = this.buffer8;\n    while (index < length) {\n      if (this.hashed) {\n        this.hashed = false;\n        blocks[0] = blocks[16];\n        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      }\n      if (notString) {\n        if (ARRAY_BUFFER) {\n          for (i = this.start; index < length && i < 64; ++index) {\n            buffer8[i++] = message[index];\n          }\n        } else {\n          for (i = this.start; index < length && i < 64; ++index) {\n            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];\n          }\n        }\n      } else {\n        if (ARRAY_BUFFER) {\n          for (i = this.start; index < length && i < 64; ++index) {\n            code = message.charCodeAt(index);\n            if (code < 0x80) {\n              buffer8[i++] = code;\n            } else if (code < 0x800) {\n              buffer8[i++] = 0xc0 | code >> 6;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            } else if (code < 0xd800 || code >= 0xe000) {\n              buffer8[i++] = 0xe0 | code >> 12;\n              buffer8[i++] = 0x80 | code >> 6 & 0x3f;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            } else {\n              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);\n              buffer8[i++] = 0xf0 | code >> 18;\n              buffer8[i++] = 0x80 | code >> 12 & 0x3f;\n              buffer8[i++] = 0x80 | code >> 6 & 0x3f;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            }\n          }\n        } else {\n          for (i = this.start; index < length && i < 64; ++index) {\n            code = message.charCodeAt(index);\n            if (code < 0x80) {\n              blocks[i >> 2] |= code << SHIFT[i++ & 3];\n            } else if (code < 0x800) {\n              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            } else if (code < 0xd800 || code >= 0xe000) {\n              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            } else {\n              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);\n              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            }\n          }\n        }\n      }\n      this.lastByteIndex = i;\n      this.bytes += i - this.start;\n      if (i >= 64) {\n        this.start = i - 64;\n        this.hash();\n        this.hashed = true;\n      } else {\n        this.start = i;\n      }\n    }\n    if (this.bytes > 4294967295) {\n      this.hBytes += this.bytes / 4294967296 << 0;\n      this.bytes = this.bytes % 4294967296;\n    }\n    return this;\n  };\n  Md5.prototype.finalize = function () {\n    if (this.finalized) {\n      return;\n    }\n    this.finalized = true;\n    var blocks = this.blocks,\n      i = this.lastByteIndex;\n    blocks[i >> 2] |= EXTRA[i & 3];\n    if (i >= 56) {\n      if (!this.hashed) {\n        this.hash();\n      }\n      blocks[0] = blocks[16];\n      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n    }\n    blocks[14] = this.bytes << 3;\n    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;\n    this.hash();\n  };\n  Md5.prototype.hash = function () {\n    var a,\n      b,\n      c,\n      d,\n      bc,\n      da,\n      blocks = this.blocks;\n    if (this.first) {\n      a = blocks[0] - 680876937;\n      a = (a << 7 | a >>> 25) - 271733879 << 0;\n      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;\n      d = (d << 12 | d >>> 20) + a << 0;\n      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;\n      c = (c << 17 | c >>> 15) + d << 0;\n      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;\n      b = (b << 22 | b >>> 10) + c << 0;\n    } else {\n      a = this.h0;\n      b = this.h1;\n      c = this.h2;\n      d = this.h3;\n      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;\n      a = (a << 7 | a >>> 25) + b << 0;\n      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;\n      d = (d << 12 | d >>> 20) + a << 0;\n      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;\n      c = (c << 17 | c >>> 15) + d << 0;\n      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;\n      b = (b << 22 | b >>> 10) + c << 0;\n    }\n    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;\n    b = (b << 20 | b >>> 12) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[5] - 378558;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[8] - 2022574463;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[11] + 1839030562;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[14] - 35309556;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[1] - 1530992060;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[4] + 1272893353;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[7] - 155497632;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[10] - 1094730640;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[13] + 681279174;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[0] - 358537222;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[3] - 722521979;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[6] + 76029189;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[9] - 640364487;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[12] - 421815835;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[15] + 530742520;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[2] - 995338651;\n    b = (b << 23 | b >>> 9) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[0] - 198630844;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[5] - 57434055;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[10] - 1051523;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[15] - 30611744;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[4] - 145523070;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[2] + 718787259;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[9] - 343485551;\n    b = (b << 21 | b >>> 11) + c << 0;\n    if (this.first) {\n      this.h0 = a + 1732584193 << 0;\n      this.h1 = b - 271733879 << 0;\n      this.h2 = c - 1732584194 << 0;\n      this.h3 = d + 271733878 << 0;\n      this.first = false;\n    } else {\n      this.h0 = this.h0 + a << 0;\n      this.h1 = this.h1 + b << 0;\n      this.h2 = this.h2 + c << 0;\n      this.h3 = this.h3 + d << 0;\n    }\n  };\n\n  /**\r\n   * @method hex\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as hex string\r\n   * @returns {String} Hex string\r\n   * @see {@link md5.hex}\r\n   * @example\r\n   * hash.hex();\r\n   */\n  Md5.prototype.hex = function () {\n    this.finalize();\n    var h0 = this.h0,\n      h1 = this.h1,\n      h2 = this.h2,\n      h3 = this.h3;\n    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];\n  };\n\n  /**\r\n   * @method toString\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as hex string\r\n   * @returns {String} Hex string\r\n   * @see {@link md5.hex}\r\n   * @example\r\n   * hash.toString();\r\n   */\n  Md5.prototype.toString = Md5.prototype.hex;\n\n  /**\r\n   * @method digest\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as bytes array\r\n   * @returns {Array} Bytes array\r\n   * @see {@link md5.digest}\r\n   * @example\r\n   * hash.digest();\r\n   */\n  Md5.prototype.digest = function () {\n    this.finalize();\n    var h0 = this.h0,\n      h1 = this.h1,\n      h2 = this.h2,\n      h3 = this.h3;\n    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];\n  };\n\n  /**\r\n   * @method array\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as bytes array\r\n   * @returns {Array} Bytes array\r\n   * @see {@link md5.array}\r\n   * @example\r\n   * hash.array();\r\n   */\n  Md5.prototype.array = Md5.prototype.digest;\n\n  /**\r\n   * @method arrayBuffer\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as ArrayBuffer\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @see {@link md5.arrayBuffer}\r\n   * @example\r\n   * hash.arrayBuffer();\r\n   */\n  Md5.prototype.arrayBuffer = function () {\n    this.finalize();\n    var buffer = new ArrayBuffer(16);\n    var blocks = new Uint32Array(buffer);\n    blocks[0] = this.h0;\n    blocks[1] = this.h1;\n    blocks[2] = this.h2;\n    blocks[3] = this.h3;\n    return buffer;\n  };\n\n  /**\r\n   * @method buffer\r\n   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as ArrayBuffer\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @see {@link md5.buffer}\r\n   * @example\r\n   * hash.buffer();\r\n   */\n  Md5.prototype.buffer = Md5.prototype.arrayBuffer;\n\n  /**\r\n   * @method base64\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as base64 string\r\n   * @returns {String} base64 string\r\n   * @see {@link md5.base64}\r\n   * @example\r\n   * hash.base64();\r\n   */\n  Md5.prototype.base64 = function () {\n    var v1,\n      v2,\n      v3,\n      base64Str = '',\n      bytes = this.array();\n    for (var i = 0; i < 15;) {\n      v1 = bytes[i++];\n      v2 = bytes[i++];\n      v3 = bytes[i++];\n      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];\n    }\n    v1 = bytes[i];\n    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';\n    return base64Str;\n  };\n  var exports = createMethod();\n  if (COMMON_JS) {\n    module.exports = exports;\n  } else {\n    /**\r\n     * @method md5\b\r\n     * @description Md5 hash function, export to global in browsers.\r\n     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n     * @returns {String} md5 hashes\r\n     * @example\r\n     * md5(''); // d41d8cd98f00b204e9800998ecf8427e\r\n     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6\r\n     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0\r\n     *\r\n     * // It also supports UTF-8 encoding\r\n     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07\r\n     *\r\n     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`\r\n     * md5([]); // d41d8cd98f00b204e9800998ecf8427e\r\n     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e\r\n     */\n    root.md5 = exports;\n    if (AMD) {\n      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n        return exports;\n      }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n  }\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/module.js */ 14)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdG9vbENsYXNzL21kNS5qcyJdLCJuYW1lcyI6WyJFUlJPUiIsIldJTkRPVyIsIndpbmRvdyIsInJvb3QiLCJKU19NRDVfTk9fV0lORE9XIiwiV0VCX1dPUktFUiIsInNlbGYiLCJOT0RFX0pTIiwiSlNfTUQ1X05PX05PREVfSlMiLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJub2RlIiwiZ2xvYmFsIiwiQ09NTU9OX0pTIiwiSlNfTUQ1X05PX0NPTU1PTl9KUyIsIm1vZHVsZSIsImV4cG9ydHMiLCJBTUQiLCJkZWZpbmUiLCJBUlJBWV9CVUZGRVIiLCJKU19NRDVfTk9fQVJSQVlfQlVGRkVSIiwiQXJyYXlCdWZmZXIiLCJIRVhfQ0hBUlMiLCJzcGxpdCIsIkVYVFJBIiwiU0hJRlQiLCJPVVRQVVRfVFlQRVMiLCJCQVNFNjRfRU5DT0RFX0NIQVIiLCJibG9ja3MiLCJidWZmZXI4IiwiYnVmZmVyIiwiVWludDhBcnJheSIsIlVpbnQzMkFycmF5IiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiSlNfTUQ1X05PX0FSUkFZX0JVRkZFUl9JU19WSUVXIiwiaXNWaWV3IiwiY29uc3RydWN0b3IiLCJjcmVhdGVPdXRwdXRNZXRob2QiLCJvdXRwdXRUeXBlIiwibWVzc2FnZSIsIk1kNSIsInVwZGF0ZSIsImNyZWF0ZU1ldGhvZCIsIm1ldGhvZCIsIm5vZGVXcmFwIiwiY3JlYXRlIiwiaSIsImxlbmd0aCIsInR5cGUiLCJjcnlwdG8iLCJldmFsIiwiQnVmZmVyIiwibm9kZU1ldGhvZCIsImNyZWF0ZUhhc2giLCJkaWdlc3QiLCJ1bmRlZmluZWQiLCJzaGFyZWRNZW1vcnkiLCJoMCIsImgxIiwiaDIiLCJoMyIsInN0YXJ0IiwiYnl0ZXMiLCJoQnl0ZXMiLCJmaW5hbGl6ZWQiLCJoYXNoZWQiLCJmaXJzdCIsIm5vdFN0cmluZyIsImNvZGUiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJsYXN0Qnl0ZUluZGV4IiwiaGFzaCIsImZpbmFsaXplIiwiYSIsImIiLCJjIiwiZCIsImJjIiwiZGEiLCJoZXgiLCJhcnJheSIsImFycmF5QnVmZmVyIiwiYmFzZTY0IiwidjEiLCJ2MiIsInYzIiwiYmFzZTY0U3RyIiwibWQ1Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFZO0VBQ1gsWUFBWTs7RUFFWixJQUFJQSxLQUFLLEdBQUcsdUJBQXVCO0VBQ25DLElBQUlDLE1BQU0sR0FBRyxRQUFPQyxNQUFNLHlDQUFOQSxNQUFNLE9BQUssUUFBUTtFQUN2QyxJQUFJQyxJQUFJLEdBQUdGLE1BQU0sR0FBR0MsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMvQixJQUFJQyxJQUFJLENBQUNDLGdCQUFnQixFQUFFO0lBQ3pCSCxNQUFNLEdBQUcsS0FBSztFQUNoQjtFQUNBLElBQUlJLFVBQVUsR0FBRyxDQUFDSixNQUFNLElBQUksUUFBT0ssSUFBSSx5Q0FBSkEsSUFBSSxPQUFLLFFBQVE7RUFDcEQsSUFBSUMsT0FBTyxHQUFHLENBQUNKLElBQUksQ0FBQ0ssaUJBQWlCLElBQUksUUFBT0MsT0FBTyx5Q0FBUEEsT0FBTyxPQUFLLFFBQVEsSUFBSUEsT0FBTyxDQUFDQyxRQUFRLElBQUlELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO0VBQ2pILElBQUlKLE9BQU8sRUFBRTtJQUNYSixJQUFJLEdBQUdTLE1BQU07RUFDZixDQUFDLE1BQU0sSUFBSVAsVUFBVSxFQUFFO0lBQ3JCRixJQUFJLEdBQUdHLElBQUk7RUFDYjtFQUNBLElBQUlPLFNBQVMsR0FBRyxDQUFDVixJQUFJLENBQUNXLG1CQUFtQixJQUFJLE9BQWEsdUJBQU5DLE1BQU0sT0FBSyxRQUFRLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTztFQUN6RixJQUFJQyxHQUFHLEdBQUcsS0FBNEIsSUFBSUMsbURBQVU7RUFDcEQsSUFBSUMsWUFBWSxHQUFHLENBQUNoQixJQUFJLENBQUNp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LEdBQUcsSUFBSSxDQUFDLEdBQ2xEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDLEdBQzFEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQzNEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQzNEMUMsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRzNDLFNBQVMsQ0FBQzJDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FDbEQzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsR0FDMUQzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FDM0QzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FDM0QzQyxTQUFTLENBQUU0QyxFQUFFLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxHQUFHNUMsU0FBUyxDQUFDNEMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUNsRDVDLFNBQVMsQ0FBRTRDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQUc1QyxTQUFTLENBQUU0QyxFQUFFLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxHQUMxRDVDLFNBQVMs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Q0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWIsSUFBSSxDQUFDMkYsR0FBRyxHQUFHOUUsT0FBTztJQUNsQixJQUFJQyxHQUFHLEVBQUU7TUFDUEMsbUNBQU8sWUFBWTtRQUNqQixPQUFPRixPQUFPO01BQ2hCLENBQUM7QUFBQSxvR0FBQztJQUNKO0VBQ0Y7QUFDRixDQUFDLEdBQUcsQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBbanMtbWQ1XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZW1uMTc4L2pzLW1kNX1cclxuICpcclxuICogQG5hbWVzcGFjZSBtZDVcclxuICogQHZlcnNpb24gMC43LjNcclxuICogQGF1dGhvciBDaGVuLCBZaS1DeXVhbiBbZW1uMTc4QGdtYWlsLmNvbV1cclxuICogQGNvcHlyaWdodCBDaGVuLCBZaS1DeXVhbiAyMDE0LTIwMTdcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIEVSUk9SID0gJ2lucHV0IGlzIGludmFsaWQgdHlwZSc7XHJcbiAgdmFyIFdJTkRPVyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xyXG4gIHZhciByb290ID0gV0lORE9XID8gd2luZG93IDoge307XHJcbiAgaWYgKHJvb3QuSlNfTUQ1X05PX1dJTkRPVykge1xyXG4gICAgV0lORE9XID0gZmFsc2U7XHJcbiAgfVxyXG4gIHZhciBXRUJfV09SS0VSID0gIVdJTkRPVyAmJiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCc7XHJcbiAgdmFyIE5PREVfSlMgPSAhcm9vdC5KU19NRDVfTk9fTk9ERV9KUyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XHJcbiAgaWYgKE5PREVfSlMpIHtcclxuICAgIHJvb3QgPSBnbG9iYWw7XHJcbiAgfSBlbHNlIGlmIChXRUJfV09SS0VSKSB7XHJcbiAgICByb290ID0gc2VsZjtcclxuICB9XHJcbiAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX01ENV9OT19DT01NT05fSlMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHM7XHJcbiAgdmFyIEFNRCA9IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZDtcclxuICB2YXIgQVJSQVlfQlVGRkVSID0gIXJvb3QuSlNfTUQ1X05PX0FSUkFZX0JVRkZFUiAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xyXG4gIHZhciBIRVhfQ0hBUlMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xyXG4gIHZhciBFWFRSQSA9IFsxMjgsIDMyNzY4LCA4Mzg4NjA4LCAtMjE0NzQ4MzY0OF07XHJcbiAgdmFyIFNISUZUID0gWzAsIDgsIDE2LCAyNF07XHJcbiAgdmFyIE9VVFBVVF9UWVBFUyA9IFsnaGV4JywgJ2FycmF5JywgJ2RpZ2VzdCcsICdidWZmZXInLCAnYXJyYXlCdWZmZXInLCAnYmFzZTY0J107XHJcbiAgdmFyIEJBU0U2NF9FTkNPREVfQ0hBUiA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XHJcblxyXG4gIHZhciBibG9ja3MgPSBbXSwgYnVmZmVyODtcclxuICBpZiAoQVJSQVlfQlVGRkVSKSB7XHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcclxuICAgIGJ1ZmZlcjggPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgfVxyXG5cclxuICBpZiAocm9vdC5KU19NRDVfTk9fTk9ERV9KUyB8fCAhQXJyYXkuaXNBcnJheSkge1xyXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChBUlJBWV9CVUZGRVIgJiYgKHJvb3QuSlNfTUQ1X05PX0FSUkFZX0JVRkZFUl9JU19WSUVXIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XHJcbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouYnVmZmVyICYmIG9iai5idWZmZXIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGV4XHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBoZXggc3RyaW5nXHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBIZXggc3RyaW5nXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBtZDUuaGV4KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICogLy8gZXF1YWwgdG9cclxuICAgKiBtZDUoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpZ2VzdFxyXG4gICAqIEBtZW1iZXJvZiBtZDVcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgYnl0ZXMgYXJyYXlcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQnl0ZXMgYXJyYXlcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5kaWdlc3QoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5XHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBieXRlcyBhcnJheVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogbWQ1LmFycmF5KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhcnJheUJ1ZmZlclxyXG4gICAqIEBtZW1iZXJvZiBtZDVcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgQXJyYXlCdWZmZXJcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5hcnJheUJ1ZmZlcignVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYnVmZmVyXHJcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtYXliZSBjb25mdXNlIHdpdGggQnVmZmVyIGluIG5vZGUuanMuIFBsZWFzZSB1c2UgYXJyYXlCdWZmZXIgaW5zdGVhZC5cclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIEFycmF5QnVmZmVyXHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IEFycmF5QnVmZmVyXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBtZDUuYnVmZmVyKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBiYXNlNjRcclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJhc2U2NCBzdHJpbmdcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IGJhc2U2NCBzdHJpbmdcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5iYXNlNjQoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICB2YXIgY3JlYXRlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKG91dHB1dFR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gbmV3IE1kNSh0cnVlKS51cGRhdGUobWVzc2FnZSlbb3V0cHV0VHlwZV0oKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcmVhdGVcclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBNZDUgb2JqZWN0XHJcbiAgICogQHJldHVybnMge01kNX0gTWQ1IG9iamVjdC5cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHZhciBoYXNoID0gbWQ1LmNyZWF0ZSgpO1xyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXBkYXRlXHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYW5kIHVwZGF0ZSBNZDUgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7TWQ1fSBNZDUgb2JqZWN0LlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogdmFyIGhhc2ggPSBtZDUudXBkYXRlKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICogLy8gZXF1YWwgdG9cclxuICAgKiB2YXIgaGFzaCA9IG1kNS5jcmVhdGUoKTtcclxuICAgKiBoYXNoLnVwZGF0ZSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xyXG4gICAqL1xyXG4gIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlT3V0cHV0TWV0aG9kKCdoZXgnKTtcclxuICAgIGlmIChOT0RFX0pTKSB7XHJcbiAgICAgIG1ldGhvZCA9IG5vZGVXcmFwKG1ldGhvZCk7XHJcbiAgICB9XHJcbiAgICBtZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gbmV3IE1kNSgpO1xyXG4gICAgfTtcclxuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZSgpLnVwZGF0ZShtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB2YXIgdHlwZSA9IE9VVFBVVF9UWVBFU1tpXTtcclxuICAgICAgbWV0aG9kW3R5cGVdID0gY3JlYXRlT3V0cHV0TWV0aG9kKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1ldGhvZDtcclxuICB9O1xyXG5cclxuICB2YXIgbm9kZVdyYXAgPSBmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICB2YXIgY3J5cHRvID0gZXZhbChcInJlcXVpcmUoJ2NyeXB0bycpXCIpO1xyXG4gICAgdmFyIEJ1ZmZlciA9IGV2YWwoXCJyZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcIik7XHJcbiAgICB2YXIgbm9kZU1ldGhvZCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShtZXNzYWdlLCAndXRmOCcpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aHJvdyBFUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSB8fFxyXG4gICAgICAgIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKG5ldyBCdWZmZXIobWVzc2FnZSkpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZChtZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBub2RlTWV0aG9kO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogTWQ1IGNsYXNzXHJcbiAgICogQGNsYXNzIE1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIGludGVybmFsIGNsYXNzLlxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5jcmVhdGV9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gTWQ1KHNoYXJlZE1lbW9yeSkge1xyXG4gICAgaWYgKHNoYXJlZE1lbW9yeSkge1xyXG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cclxuICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cclxuICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcclxuICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XHJcbiAgICAgIHRoaXMuYnVmZmVyOCA9IGJ1ZmZlcjg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig2OCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmxvY2tzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmgwID0gdGhpcy5oMSA9IHRoaXMuaDIgPSB0aGlzLmgzID0gdGhpcy5zdGFydCA9IHRoaXMuYnl0ZXMgPSB0aGlzLmhCeXRlcyA9IDA7XHJcbiAgICB0aGlzLmZpbmFsaXplZCA9IHRoaXMuaGFzaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXBkYXRlXHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBVcGRhdGUgaGFzaFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICogQHJldHVybnMge01kNX0gTWQ1IG9iamVjdC5cclxuICAgKiBAc2VlIHtAbGluayBtZDUudXBkYXRlfVxyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5vdFN0cmluZywgdHlwZSA9IHR5cGVvZiBtZXNzYWdlO1xyXG4gICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSB7XHJcbiAgICAgICAgICB0aHJvdyBFUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKEFSUkFZX0JVRkZFUiAmJiBtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpIHtcclxuICAgICAgICAgIGlmICghQVJSQVlfQlVGRkVSIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVSUk9SO1xyXG4gICAgICB9XHJcbiAgICAgIG5vdFN0cmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY29kZSwgaW5kZXggPSAwLCBpLCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aCwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XHJcbiAgICB2YXIgYnVmZmVyOCA9IHRoaXMuYnVmZmVyODtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzaGVkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNoZWQgPSBmYWxzZTtcclxuICAgICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdO1xyXG4gICAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxyXG4gICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XHJcbiAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobm90U3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKEFSUkFZX0JVRkZFUikge1xyXG4gICAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IG1lc3NhZ2VbaW5kZXhdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgNjQ7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBUlJBWV9CVUZGRVIpIHtcclxuICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gY29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweGMwIHwgKGNvZGUgPj4gNik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8IChjb2RlICYgMHgzZik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ZTAgfCAoY29kZSA+PiAxMik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M2YpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcclxuICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweGYwIHwgKGNvZGUgPj4gMTgpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoKGNvZGUgPj4gMTIpICYgMHgzZik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M2YpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gY29kZSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweGQ4MDAgfHwgY29kZSA+PSAweGUwMDApIHtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhlMCB8IChjb2RlID4+IDEyKSkgPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKG1lc3NhZ2UuY2hhckNvZGVBdCgrK2luZGV4KSAmIDB4M2ZmKSk7XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ZjAgfCAoY29kZSA+PiAxOCkpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdEJ5dGVJbmRleCA9IGk7XHJcbiAgICAgIHRoaXMuYnl0ZXMgKz0gaSAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgIGlmIChpID49IDY0KSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGkgLSA2NDtcclxuICAgICAgICB0aGlzLmhhc2goKTtcclxuICAgICAgICB0aGlzLmhhc2hlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ5dGVzID4gNDI5NDk2NzI5NSkge1xyXG4gICAgICB0aGlzLmhCeXRlcyArPSB0aGlzLmJ5dGVzIC8gNDI5NDk2NzI5NiA8PCAwO1xyXG4gICAgICB0aGlzLmJ5dGVzID0gdGhpcy5ieXRlcyAlIDQyOTQ5NjcyOTY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBNZDUucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgIHZhciBibG9ja3MgPSB0aGlzLmJsb2NrcywgaSA9IHRoaXMubGFzdEJ5dGVJbmRleDtcclxuICAgIGJsb2Nrc1tpID4+IDJdIHw9IEVYVFJBW2kgJiAzXTtcclxuICAgIGlmIChpID49IDU2KSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNoZWQpIHtcclxuICAgICAgICB0aGlzLmhhc2goKTtcclxuICAgICAgfVxyXG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdO1xyXG4gICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cclxuICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cclxuICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcclxuICAgIH1cclxuICAgIGJsb2Nrc1sxNF0gPSB0aGlzLmJ5dGVzIDw8IDM7XHJcbiAgICBibG9ja3NbMTVdID0gdGhpcy5oQnl0ZXMgPDwgMyB8IHRoaXMuYnl0ZXMgPj4+IDI5O1xyXG4gICAgdGhpcy5oYXNoKCk7XHJcbiAgfTtcclxuXHJcbiAgTWQ1LnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGEsIGIsIGMsIGQsIGJjLCBkYSwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlyc3QpIHtcclxuICAgICAgYSA9IGJsb2Nrc1swXSAtIDY4MDg3NjkzNztcclxuICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgLSAyNzE3MzM4NzkgPDwgMDtcclxuICAgICAgZCA9ICgtMTczMjU4NDE5NCBeIGEgJiAyMDA0MzE4MDcxKSArIGJsb2Nrc1sxXSAtIDExNzgzMDcwODtcclxuICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xyXG4gICAgICBjID0gKC0yNzE3MzM4NzkgXiAoZCAmIChhIF4gLTI3MTczMzg3OSkpKSArIGJsb2Nrc1syXSAtIDExMjY0NzgzNzU7XHJcbiAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgICAgYiA9IChhIF4gKGMgJiAoZCBeIGEpKSkgKyBibG9ja3NbM10gLSAxMzE2MjU5MjA5O1xyXG4gICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhID0gdGhpcy5oMDtcclxuICAgICAgYiA9IHRoaXMuaDE7XHJcbiAgICAgIGMgPSB0aGlzLmgyO1xyXG4gICAgICBkID0gdGhpcy5oMztcclxuICAgICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzBdIC0gNjgwODc2OTM2O1xyXG4gICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgPDwgMDtcclxuICAgICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzFdIC0gMzg5NTY0NTg2O1xyXG4gICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIDw8IDA7XHJcbiAgICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1syXSArIDYwNjEwNTgxOTtcclxuICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xyXG4gICAgICBiICs9IChhIF4gKGMgJiAoZCBeIGEpKSkgKyBibG9ja3NbM10gLSAxMDQ0NTI1MzMwO1xyXG4gICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzRdIC0gMTc2NDE4ODk3O1xyXG4gICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIDw8IDA7XHJcbiAgICBkICs9IChjIF4gKGEgJiAoYiBeIGMpKSkgKyBibG9ja3NbNV0gKyAxMjAwMDgwNDI2O1xyXG4gICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYiBeIChkICYgKGEgXiBiKSkpICsgYmxvY2tzWzZdIC0gMTQ3MzIzMTM0MTtcclxuICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGEgXiAoYyAmIChkIF4gYSkpKSArIGJsb2Nrc1s3XSAtIDQ1NzA1OTgzO1xyXG4gICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyA8PCAwO1xyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzhdICsgMTc3MDAzNTQxNjtcclxuICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzldIC0gMTk1ODQxNDQxNztcclxuICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1sxMF0gLSA0MjA2MztcclxuICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGEgXiAoYyAmIChkIF4gYSkpKSArIGJsb2Nrc1sxMV0gLSAxOTkwNDA0MTYyO1xyXG4gICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyA8PCAwO1xyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzEyXSArIDE4MDQ2MDM2ODI7XHJcbiAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGMgXiAoYSAmIChiIF4gYykpKSArIGJsb2Nrc1sxM10gLSA0MDM0MTEwMTtcclxuICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1sxNF0gLSAxNTAyMDAyMjkwO1xyXG4gICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoYSBeIChjICYgKGQgXiBhKSkpICsgYmxvY2tzWzE1XSArIDEyMzY1MzUzMjk7XHJcbiAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbMV0gLSAxNjU3OTY1MTA7XHJcbiAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1s2XSAtIDEwNjk1MDE2MzI7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1sxMV0gKyA2NDM3MTc3MTM7XHJcbiAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGEgJiAoYyBeIGQpKSkgKyBibG9ja3NbMF0gLSAzNzM4OTczMDI7XHJcbiAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbNV0gLSA3MDE1NTg2OTE7XHJcbiAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1sxMF0gKyAzODAxNjA4MztcclxuICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYSBeIChiICYgKGQgXiBhKSkpICsgYmxvY2tzWzE1XSAtIDY2MDQ3ODMzNTtcclxuICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYSAmIChjIF4gZCkpKSArIGJsb2Nrc1s0XSAtIDQwNTUzNzg0ODtcclxuICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoZCAmIChiIF4gYykpKSArIGJsb2Nrc1s5XSArIDU2ODQ0NjQzODtcclxuICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChjICYgKGEgXiBiKSkpICsgYmxvY2tzWzE0XSAtIDEwMTk4MDM2OTA7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1szXSAtIDE4NzM2Mzk2MTtcclxuICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYSAmIChjIF4gZCkpKSArIGJsb2Nrc1s4XSArIDExNjM1MzE1MDE7XHJcbiAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbMTNdIC0gMTQ0NDY4MTQ2NztcclxuICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChjICYgKGEgXiBiKSkpICsgYmxvY2tzWzJdIC0gNTE0MDM3ODQ7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1s3XSArIDE3MzUzMjg0NzM7XHJcbiAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGEgJiAoYyBeIGQpKSkgKyBibG9ja3NbMTJdIC0gMTkyNjYwNzczNDtcclxuICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcclxuICAgIGJjID0gYiBeIGM7XHJcbiAgICBhICs9IChiYyBeIGQpICsgYmxvY2tzWzVdIC0gMzc4NTU4O1xyXG4gICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiYyBeIGEpICsgYmxvY2tzWzhdIC0gMjAyMjU3NDQ2MztcclxuICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgPDwgMDtcclxuICAgIGRhID0gZCBeIGE7XHJcbiAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzExXSArIDE4MzkwMzA1NjI7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzE0XSAtIDM1MzA5NTU2O1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBiYyA9IGIgXiBjO1xyXG4gICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1sxXSAtIDE1MzA5OTIwNjA7XHJcbiAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGJjIF4gYSkgKyBibG9ja3NbNF0gKyAxMjcyODkzMzUzO1xyXG4gICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSA8PCAwO1xyXG4gICAgZGEgPSBkIF4gYTtcclxuICAgIGMgKz0gKGRhIF4gYikgKyBibG9ja3NbN10gLSAxNTU0OTc2MzI7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzEwXSAtIDEwOTQ3MzA2NDA7XHJcbiAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgPDwgMDtcclxuICAgIGJjID0gYiBeIGM7XHJcbiAgICBhICs9IChiYyBeIGQpICsgYmxvY2tzWzEzXSArIDY4MTI3OTE3NDtcclxuICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYmMgXiBhKSArIGJsb2Nrc1swXSAtIDM1ODUzNzIyMjtcclxuICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgPDwgMDtcclxuICAgIGRhID0gZCBeIGE7XHJcbiAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzNdIC0gNzIyNTIxOTc5O1xyXG4gICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoZGEgXiBjKSArIGJsb2Nrc1s2XSArIDc2MDI5MTg5O1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBiYyA9IGIgXiBjO1xyXG4gICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1s5XSAtIDY0MDM2NDQ4NztcclxuICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYmMgXiBhKSArIGJsb2Nrc1sxMl0gLSA0MjE4MTU4MzU7XHJcbiAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIDw8IDA7XHJcbiAgICBkYSA9IGQgXiBhO1xyXG4gICAgYyArPSAoZGEgXiBiKSArIGJsb2Nrc1sxNV0gKyA1MzA3NDI1MjA7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzJdIC0gOTk1MzM4NjUxO1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsgYmxvY2tzWzBdIC0gMTk4NjMwODQ0O1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzddICsgMTEyNjg5MTQxNTtcclxuICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBibG9ja3NbMTRdIC0gMTQxNjM1NDkwNTtcclxuICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBibG9ja3NbNV0gLSA1NzQzNDA1NTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBibG9ja3NbMTJdICsgMTcwMDQ4NTU3MTtcclxuICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGJsb2Nrc1szXSAtIDE4OTQ5ODY2MDY7XHJcbiAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIDw8IDA7XHJcbiAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzEwXSAtIDEwNTE1MjM7XHJcbiAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzFdIC0gMjA1NDkyMjc5OTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBibG9ja3NbOF0gKyAxODczMzEzMzU5O1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzE1XSAtIDMwNjExNzQ0O1xyXG4gICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGJsb2Nrc1s2XSAtIDE1NjAxOTgzODA7XHJcbiAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzEzXSArIDEzMDkxNTE2NDk7XHJcbiAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsgYmxvY2tzWzRdIC0gMTQ1NTIzMDcwO1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzExXSAtIDExMjAyMTAzNzk7XHJcbiAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIDw8IDA7XHJcbiAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzJdICsgNzE4Nzg3MjU5O1xyXG4gICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGJsb2Nrc1s5XSAtIDM0MzQ4NTU1MTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuXHJcbiAgICBpZiAodGhpcy5maXJzdCkge1xyXG4gICAgICB0aGlzLmgwID0gYSArIDE3MzI1ODQxOTMgPDwgMDtcclxuICAgICAgdGhpcy5oMSA9IGIgLSAyNzE3MzM4NzkgPDwgMDtcclxuICAgICAgdGhpcy5oMiA9IGMgLSAxNzMyNTg0MTk0IDw8IDA7XHJcbiAgICAgIHRoaXMuaDMgPSBkICsgMjcxNzMzODc4IDw8IDA7XHJcbiAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaDAgPSB0aGlzLmgwICsgYSA8PCAwO1xyXG4gICAgICB0aGlzLmgxID0gdGhpcy5oMSArIGIgPDwgMDtcclxuICAgICAgdGhpcy5oMiA9IHRoaXMuaDIgKyBjIDw8IDA7XHJcbiAgICAgIHRoaXMuaDMgPSB0aGlzLmgzICsgZCA8PCAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGV4XHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBoZXggc3RyaW5nXHJcbiAgICogQHJldHVybnMge1N0cmluZ30gSGV4IHN0cmluZ1xyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5oZXh9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmhleCgpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5maW5hbGl6ZSgpO1xyXG5cclxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDM7XHJcblxyXG4gICAgcmV0dXJuIEhFWF9DSEFSU1soaDAgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMCAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gOCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDAgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDE2KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMjQpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDEgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDgpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAxNikgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDI0KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gyICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiA4KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMiA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gMTYpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAyNCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMyAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gOCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDE2KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMjQpICYgMHgwRl07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gICAqIEBtZW1iZXJvZiBNZDVcclxuICAgKiBAaW5zdGFuY2VcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgaGV4IHN0cmluZ1xyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IEhleCBzdHJpbmdcclxuICAgKiBAc2VlIHtAbGluayBtZDUuaGV4fVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogaGFzaC50b1N0cmluZygpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUudG9TdHJpbmcgPSBNZDUucHJvdG90eXBlLmhleDtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaWdlc3RcclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJ5dGVzIGFycmF5XHJcbiAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5kaWdlc3R9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmRpZ2VzdCgpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5maW5hbGl6ZSgpO1xyXG5cclxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDM7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBoMCAmIDB4RkYsIChoMCA+PiA4KSAmIDB4RkYsIChoMCA+PiAxNikgJiAweEZGLCAoaDAgPj4gMjQpICYgMHhGRixcclxuICAgICAgaDEgJiAweEZGLCAoaDEgPj4gOCkgJiAweEZGLCAoaDEgPj4gMTYpICYgMHhGRiwgKGgxID4+IDI0KSAmIDB4RkYsXHJcbiAgICAgIGgyICYgMHhGRiwgKGgyID4+IDgpICYgMHhGRiwgKGgyID4+IDE2KSAmIDB4RkYsIChoMiA+PiAyNCkgJiAweEZGLFxyXG4gICAgICBoMyAmIDB4RkYsIChoMyA+PiA4KSAmIDB4RkYsIChoMyA+PiAxNikgJiAweEZGLCAoaDMgPj4gMjQpICYgMHhGRlxyXG4gICAgXTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5XHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBieXRlcyBhcnJheVxyXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQnl0ZXMgYXJyYXlcclxuICAgKiBAc2VlIHtAbGluayBtZDUuYXJyYXl9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmFycmF5KCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5hcnJheSA9IE1kNS5wcm90b3R5cGUuZGlnZXN0O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5QnVmZmVyXHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBBcnJheUJ1ZmZlclxyXG4gICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcclxuICAgKiBAc2VlIHtAbGluayBtZDUuYXJyYXlCdWZmZXJ9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmFycmF5QnVmZmVyKCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZmluYWxpemUoKTtcclxuXHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDE2KTtcclxuICAgIHZhciBibG9ja3MgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGJsb2Nrc1swXSA9IHRoaXMuaDA7XHJcbiAgICBibG9ja3NbMV0gPSB0aGlzLmgxO1xyXG4gICAgYmxvY2tzWzJdID0gdGhpcy5oMjtcclxuICAgIGJsb2Nrc1szXSA9IHRoaXMuaDM7XHJcbiAgICByZXR1cm4gYnVmZmVyO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYnVmZmVyXHJcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtYXliZSBjb25mdXNlIHdpdGggQnVmZmVyIGluIG5vZGUuanMuIFBsZWFzZSB1c2UgYXJyYXlCdWZmZXIgaW5zdGVhZC5cclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIEFycmF5QnVmZmVyXHJcbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBBcnJheUJ1ZmZlclxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5idWZmZXJ9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmJ1ZmZlcigpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuYnVmZmVyID0gTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBiYXNlNjRcclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJhc2U2NCBzdHJpbmdcclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBiYXNlNjQgc3RyaW5nXHJcbiAgICogQHNlZSB7QGxpbmsgbWQ1LmJhc2U2NH1cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGhhc2guYmFzZTY0KCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5iYXNlNjQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdjEsIHYyLCB2MywgYmFzZTY0U3RyID0gJycsIGJ5dGVzID0gdGhpcy5hcnJheSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTspIHtcclxuICAgICAgdjEgPSBieXRlc1tpKytdO1xyXG4gICAgICB2MiA9IGJ5dGVzW2krK107XHJcbiAgICAgIHYzID0gYnl0ZXNbaSsrXTtcclxuICAgICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xyXG4gICAgICAgIEJBU0U2NF9FTkNPREVfQ0hBUlsodjEgPDwgNCB8IHYyID4+PiA0KSAmIDYzXSArXHJcbiAgICAgICAgQkFTRTY0X0VOQ09ERV9DSEFSWyh2MiA8PCAyIHwgdjMgPj4+IDYpICYgNjNdICtcclxuICAgICAgICBCQVNFNjRfRU5DT0RFX0NIQVJbdjMgJiA2M107XHJcbiAgICB9XHJcbiAgICB2MSA9IGJ5dGVzW2ldO1xyXG4gICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xyXG4gICAgICBCQVNFNjRfRU5DT0RFX0NIQVJbKHYxIDw8IDQpICYgNjNdICtcclxuICAgICAgJz09JztcclxuICAgIHJldHVybiBiYXNlNjRTdHI7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGV4cG9ydHMgPSBjcmVhdGVNZXRob2QoKTtcclxuXHJcbiAgaWYgKENPTU1PTl9KUykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgbWQ1XGJcclxuICAgICAqIEBkZXNjcmlwdGlvbiBNZDUgaGFzaCBmdW5jdGlvbiwgZXhwb3J0IHRvIGdsb2JhbCBpbiBicm93c2Vycy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBtZDUgaGFzaGVzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbWQ1KCcnKTsgLy8gZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcclxuICAgICAqIG1kNSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpOyAvLyA5ZTEwN2Q5ZDM3MmJiNjgyNmJkODFkMzU0MmE0MTlkNlxyXG4gICAgICogbWQ1KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nLicpOyAvLyBlNGQ5MDljMjkwZDBmYjFjYTA2OGZmYWRkZjIyY2JkMFxyXG4gICAgICpcclxuICAgICAqIC8vIEl0IGFsc28gc3VwcG9ydHMgVVRGLTggZW5jb2RpbmdcclxuICAgICAqIG1kNSgn5Lit5paHJyk7IC8vIGE3YmFjMjIzOWZjZGNiM2EwNjc5MDNkODA3N2M0YTA3XHJcbiAgICAgKlxyXG4gICAgICogLy8gSXQgYWxzbyBzdXBwb3J0cyBieXRlIGBBcnJheWAsIGBVaW50OEFycmF5YCwgYEFycmF5QnVmZmVyYFxyXG4gICAgICogbWQ1KFtdKTsgLy8gZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcclxuICAgICAqIG1kNShuZXcgVWludDhBcnJheShbXSkpOyAvLyBkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVxyXG4gICAgICovXHJcbiAgICByb290Lm1kNSA9IGV4cG9ydHM7XHJcbiAgICBpZiAoQU1EKSB7XHJcbiAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cG9ydHM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/*!**************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payview.vue?vue&type=template&id=f5a216c0& */ 54);\n/* harmony import */ var _payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payview.vue?vue&type=script&lang=js& */ 56);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./payview.vue?vue&type=style&index=0&lang=css& */ 58).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./payview.vue?vue&type=style&index=0&lang=css& */ 58).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2fe46b78\",\n  false,\n  _payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/payview/payview.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdEQUFnRDtBQUNwRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0RBQWdEO0FBQ3pHOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcGF5dmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjVhMjE2YzAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXl2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGF5dmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9wYXl2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9wYXl2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyZmU0NmI3OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3BheXZpZXcvcGF5dmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*********************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=template&id=f5a216c0& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./payview.vue?vue&type=template&id=f5a216c0& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_template_id_f5a216c0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 55 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=template&id=f5a216c0& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["uni-mask-nvue"],
      style: "height:" + _vm.windowHeight + "px;",
      on: { touchmove: _vm.maskMoveHandle },
    },
    [
      _c("view", {
        staticStyle: { width: "750rpx", position: "absolute", top: "0" },
        style: "height:" + (_vm.windowHeight - 340) + "px;",
        on: {
          click: function ($event) {
            _vm.doClose(0)
          },
        },
      }),
      _c(
        "view",
        { staticClass: ["showView"] },
        [
          _c(
            "view",
            { staticClass: ["heaerView"] },
            [
              _c(
                "u-text",
                {
                  staticClass: ["titleText"],
                  staticStyle: { fontSize: "22px", lineHeight: "70px" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("¥")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["titleText"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.money))]
              ),
              _c("u-image", {
                staticClass: ["closeBtn"],
                attrs: { src: "/static/wy-close.png", mode: "" },
                on: {
                  click: function ($event) {
                    _vm.doClose(0)
                  },
                },
              }),
            ],
            1
          ),
          _vm._l(_vm.payTypeList, function (item, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: ["row"],
                staticStyle: {
                  width: "750rpx",
                  height: "122rpx",
                  borderBottom: "1px solid #ECECEC",
                  position: "relative",
                },
                on: {
                  click: function ($event) {
                    _vm.payTypeClick(item, index)
                  },
                },
              },
              [
                _c("u-image", {
                  staticClass: ["payType-item-image"],
                  attrs: { src: item.thumb, mode: "" },
                }),
                _c(
                  "u-text",
                  {
                    staticClass: ["payType-item-name"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(item.name))]
                ),
                item.id == 0
                  ? _c(
                      "u-text",
                      {
                        staticClass: ["item-yue-label"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.i18n.order.yue + ": ¥" + item.balance)
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm.selectIndex == index
                  ? _c("u-image", {
                      staticClass: ["payType-item-Btn"],
                      attrs: { src: "/static/item-sel.png", mode: "" },
                    })
                  : _c("u-image", {
                      staticClass: ["payType-item-Btn"],
                      attrs: { src: "/static/item-nor.png", mode: "" },
                    }),
              ],
              1
            )
          }),
          _c(
            "u-text",
            {
              staticClass: ["subBtnClass"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: {
                click: function ($event) {
                  _vm.doClose(1)
                },
              },
            },
            [_vm._v(_vm._s(_vm.i18n.order.lijizhifu))]
          ),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 56 */
/*!***************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./payview.vue?vue&type=script&lang=js& */ 57);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXl2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _WYToolClass = _interopRequireDefault(__webpack_require__(/*! ../../toolClass/WYToolClass.js */ 12));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  computed: {\n    i18n: function i18n() {\n      // return this.$t('index')\n      return getApp().globalData.$t('index'); //当然页面中就是按Vue页面里那样使用了\n    }\n  },\n  data: function data() {\n    return {\n      windowHeight: 0,\n      payTypeList: [],\n      selectIndex: 0\n    };\n  },\n  props: {\n    money: {\n      type: String\n    },\n    type: {\n      type: String,\n      default: '0'\n    }\n  },\n  watch: {\n    money: function money(val) {\n      this.money = val;\n      __f__(\"log\", val, \" at components/payview/payview.vue:58\");\n    }\n  },\n  created: function created() {\n    var that = this;\n    that.windowHeight = getApp().globalData.windowHeight;\n    //类型 1充值 2下单\n    _WYToolClass.default.sendRequest('Orders.GetPayList', {\n      'type': that.type\n    }).then(function (res) {\n      that.payTypeList = res.info;\n    });\n  },\n  methods: {\n    doClose: function doClose(e) {\n      if (e == 1) {\n        this.$emit('closePayView', this.payTypeList[this.selectIndex]);\n      } else {\n        this.$emit('closePayView', e);\n      }\n    },\n    payTypeClick: function payTypeClick(item, index) {\n      this.selectIndex = index;\n    },\n    maskMoveHandle: function maskMoveHandle() {}\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9wYXl2aWV3L3BheXZpZXcudnVlIl0sIm5hbWVzIjpbImNvbXB1dGVkIiwiaTE4biIsImRhdGEiLCJ3aW5kb3dIZWlnaHQiLCJwYXlUeXBlTGlzdCIsInNlbGVjdEluZGV4IiwicHJvcHMiLCJtb25leSIsInR5cGUiLCJkZWZhdWx0Iiwid2F0Y2giLCJjcmVhdGVkIiwidGhhdCIsImh0dHAiLCJtZXRob2RzIiwiZG9DbG9zZSIsInBheVR5cGVDbGljayIsIm1hc2tNb3ZlSGFuZGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUE7RUFDQUE7SUFDQUM7TUFDQTtNQUNBO0lBRUE7RUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBQztJQUNBO0lBQ0FBO01BQ0FBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBSDtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FJO0lBQ0E7SUFDQUM7SUFDQTtJQUNBQztNQUNBO0lBQ0E7TUFDQUQ7SUFDQTtFQUNBO0VBQ0FFO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQywyQ0FFQTtFQUVBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1tYXNrLW52dWVcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyB3aW5kb3dIZWlnaHQgKyAncHg7J1wiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwibWFza01vdmVIYW5kbGVcIj5cclxuXHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDc1MHJweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjA7XCIgOnN0eWxlPVwiJ2hlaWdodDonICsgKHdpbmRvd0hlaWdodC0zNDApICsgJ3B4OydcIlxyXG5cdFx0XHRAY2xpY2s9XCJkb0Nsb3NlKDApXCI+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNob3dWaWV3XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZXJWaWV3XCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVRleHRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjJweDtsaW5lLWhlaWdodDogNzBweDtcIj7CpTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlVGV4dFwiPnt7bW9uZXl9fTwvdGV4dD5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy93eS1jbG9zZS5wbmdcIiBtb2RlPVwiXCIgY2xhc3M9XCJjbG9zZUJ0blwiIEBjbGljaz1cImRvQ2xvc2UoMClcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IEBjbGljaz1cInBheVR5cGVDbGljayhpdGVtLGluZGV4KVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHBheVR5cGVMaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJyb3dcIlxyXG5cdFx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDtoZWlnaHQ6IDEyMnJweDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VDRUNFQztwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLnRodW1iXCIgbW9kZT1cIlwiIGNsYXNzPVwicGF5VHlwZS1pdGVtLWltYWdlXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBheVR5cGUtaXRlbS1uYW1lXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0teXVlLWxhYmVsXCIgdi1pZj1cIml0ZW0uaWQgPT0gMFwiPnt7aTE4bi5vcmRlci55dWUgKyAnOiDCpScgKyBpdGVtLmJhbGFuY2V9fTwvdGV4dD5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pdGVtLXNlbC5wbmdcIiBtb2RlPVwiXCIgY2xhc3M9XCJwYXlUeXBlLWl0ZW0tQnRuXCIgdi1pZj1cInNlbGVjdEluZGV4ID09IGluZGV4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pdGVtLW5vci5wbmdcIiBtb2RlPVwiXCIgY2xhc3M9XCJwYXlUeXBlLWl0ZW0tQnRuXCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJzdWJCdG5DbGFzc1wiIEBjbGljaz1cImRvQ2xvc2UoMSlcIj57e2kxOG4ub3JkZXIubGlqaXpoaWZ1fX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdDwvdmlldz5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBodHRwIGZyb20gJy4uLy4uL3Rvb2xDbGFzcy9XWVRvb2xDbGFzcy5qcydcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aTE4bigpIHtcclxuXHRcdFx0XHQvLyByZXR1cm4gdGhpcy4kdCgnaW5kZXgnKVxyXG5cdFx0XHRcdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLiR0KCdpbmRleCcpIC8v5b2T54S26aG16Z2i5Lit5bCx5piv5oyJVnVl6aG16Z2i6YeM6YKj5qC35L2/55So5LqGXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDAsXHJcblx0XHRcdFx0cGF5VHlwZUxpc3Q6IFtdLFxyXG5cdFx0XHRcdHNlbGVjdEluZGV4OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtb25leToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0fSxcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnMCdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdG1vbmV5KHZhbCkge1xyXG5cdFx0XHRcdHRoaXMubW9uZXkgPSB2YWw7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codmFsKVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGF0LndpbmRvd0hlaWdodCA9IGdldEFwcCgpLmdsb2JhbERhdGEud2luZG93SGVpZ2h0XHJcblx0XHRcdC8v57G75Z6LIDHlhYXlgLwgMuS4i+WNlVxyXG5cdFx0XHRodHRwLnNlbmRSZXF1ZXN0KCdPcmRlcnMuR2V0UGF5TGlzdCcsIHtcclxuXHRcdFx0XHQndHlwZSc6IHRoYXQudHlwZVxyXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHRoYXQucGF5VHlwZUxpc3QgPSByZXMuaW5mb1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZG9DbG9zZShlKSB7XHJcblx0XHRcdFx0aWYgKGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2VQYXlWaWV3JywgdGhpcy5wYXlUeXBlTGlzdFt0aGlzLnNlbGVjdEluZGV4XSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2VQYXlWaWV3JywgZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBheVR5cGVDbGljayhpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0SW5kZXggPSBpbmRleFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXNrTW92ZUhhbmRsZSgpIHtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuc2hvd1ZpZXcge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogNjgwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQuaGVhZXJWaWV3IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEyOHJweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VDRUNFQztcclxuXHR9XHJcblxyXG5cdC50aXRsZVRleHQge1xyXG5cdFx0aGVpZ2h0OiAxMjhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTI4cnB4O1xyXG5cdFx0Y29sb3I6ICMzMjMyMzI7XHJcblx0XHRmb250LXNpemU6IDM0cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5wYXlUeXBlLWl0ZW0taW1hZ2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycHg7XHJcblx0XHR3aWR0aDogMjZweDtcclxuXHRcdGhlaWdodDogMjZweDtcclxuXHRcdG1hcmdpbi10b3A6IDE3cHg7XHJcblx0fVxyXG5cclxuXHQucGF5VHlwZS1pdGVtLW5hbWUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEycHg7XHJcblx0XHQvKiB3aWR0aDogMTAwcHg7ICovXHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdGNvbG9yOiAjMzIzMjMyO1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5pdGVtLXl1ZS1sYWJlbCB7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdGNvbG9yOiAjNjQ2NDY0O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnBheVR5cGUtaXRlbS1CdG4ge1xyXG5cdFx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDQycnB4O1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5zdWJCdG5DbGFzcyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDQwcHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRycHg7XHJcblx0XHR3aWR0aDogNzAycnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjU3MjU7XHJcblx0XHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jbG9zZUJ0bntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAzNHJweDtcclxuXHRcdHJpZ2h0OiAyMHJweDtcclxuXHRcdC8qIG1hcmdpbi1sZWZ0OiA0MHJweDsgKi9cclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7ICovXHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!***********************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./payview.vue?vue&type=style&index=0&lang=css& */ 59);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_payview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/payview/payview.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".showView": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        0
      ],
      "height": [
        "680rpx",
        0,
        0,
        0
      ],
      "borderTopLeftRadius": [
        "16",
        0,
        0,
        0
      ],
      "borderTopRightRadius": [
        "16",
        0,
        0,
        0
      ],
      "borderBottomRightRadius": [
        0,
        0,
        0,
        0
      ],
      "borderBottomLeftRadius": [
        0,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        0
      ],
      "position": [
        "fixed",
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ]
    }
  },
  ".heaerView": {
    "": {
      "display": [
        "flex",
        0,
        0,
        1
      ],
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "justifyContent": [
        "center",
        0,
        0,
        1
      ],
      "height": [
        "128rpx",
        0,
        0,
        1
      ],
      "width": [
        "750rpx",
        0,
        0,
        1
      ],
      "borderBottomWidth": [
        "1",
        0,
        0,
        1
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        1
      ],
      "borderBottomColor": [
        "#ECECEC",
        0,
        0,
        1
      ]
    }
  },
  ".titleText": {
    "": {
      "height": [
        "128rpx",
        0,
        0,
        2
      ],
      "lineHeight": [
        "128rpx",
        0,
        0,
        2
      ],
      "color": [
        "#323232",
        0,
        0,
        2
      ],
      "fontSize": [
        "34",
        0,
        0,
        2
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        2
      ]
    }
  },
  ".payType-item-image": {
    "": {
      "marginLeft": [
        "12",
        0,
        0,
        3
      ],
      "width": [
        "26",
        0,
        0,
        3
      ],
      "height": [
        "26",
        0,
        0,
        3
      ],
      "marginTop": [
        "17",
        0,
        0,
        3
      ]
    }
  },
  ".payType-item-name": {
    "": {
      "marginLeft": [
        "12",
        0,
        0,
        4
      ],
      "height": [
        "60",
        0,
        0,
        4
      ],
      "lineHeight": [
        "60",
        0,
        0,
        4
      ],
      "color": [
        "#323232",
        0,
        0,
        4
      ],
      "fontSize": [
        "16",
        0,
        0,
        4
      ],
      "flex": [
        1,
        0,
        0,
        4
      ]
    }
  },
  ".item-yue-label": {
    "": {
      "height": [
        "60",
        0,
        0,
        5
      ],
      "lineHeight": [
        "60",
        0,
        0,
        5
      ],
      "color": [
        "#646464",
        0,
        0,
        5
      ],
      "fontSize": [
        "12",
        0,
        0,
        5
      ],
      "marginRight": [
        "10",
        0,
        0,
        5
      ]
    }
  },
  ".payType-item-Btn": {
    "": {
      "marginRight": [
        "24rpx",
        0,
        0,
        6
      ],
      "marginTop": [
        "42rpx",
        0,
        0,
        6
      ],
      "width": [
        "40rpx",
        0,
        0,
        6
      ],
      "height": [
        "40rpx",
        0,
        0,
        6
      ]
    }
  },
  ".subBtnClass": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        7
      ],
      "bottom": [
        "40",
        0,
        0,
        7
      ],
      "marginLeft": [
        "24rpx",
        0,
        0,
        7
      ],
      "width": [
        "702rpx",
        0,
        0,
        7
      ],
      "height": [
        "40",
        0,
        0,
        7
      ],
      "borderRadius": [
        "20",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "#FF5725",
        0,
        0,
        7
      ],
      "lineHeight": [
        "40",
        0,
        0,
        7
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "18",
        0,
        0,
        7
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        7
      ],
      "textAlign": [
        "center",
        0,
        0,
        7
      ]
    }
  },
  ".closeBtn": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        8
      ],
      "width": [
        "40rpx",
        0,
        0,
        8
      ],
      "height": [
        "40rpx",
        0,
        0,
        8
      ],
      "marginTop": [
        "34rpx",
        0,
        0,
        8
      ],
      "right": [
        "20rpx",
        0,
        0,
        8
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 60 */,
/* 61 */
/*!***************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/libs/amap-wx.130.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function AMapWX(a) {\n  this.key = a.key;\n  this.requestConfig = {\n    key: a.key,\n    s: \"rsx\",\n    platform: \"WXJS\",\n    appname: a.key,\n    sdkversion: \"1.2.0\",\n    logversion: \"2.0\"\n  };\n  this.MeRequestConfig = {\n    key: a.key,\n    serviceName: \"https://restapi.amap.com/rest/me\"\n  };\n}\nAMapWX.prototype.getWxLocation = function (a, b) {\n  wx.getLocation({\n    type: \"gcj02\",\n    success: function success(c) {\n      c = c.longitude + \",\" + c.latitude;\n      wx.setStorage({\n        key: \"userLocation\",\n        data: c\n      });\n      b(c);\n    },\n    fail: function fail(c) {\n      wx.getStorage({\n        key: \"userLocation\",\n        success: function success(d) {\n          d.data && b(d.data);\n        }\n      });\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getMEKeywordsSearch = function (a) {\n  if (!a.options) return a.fail({\n    errCode: \"0\",\n    errMsg: \"\\u7F3A\\u5C11\\u5FC5\\u8981\\u53C2\\u6570\"\n  });\n  var b = a.options,\n    c = this.MeRequestConfig,\n    d = {\n      key: c.key,\n      s: \"rsx\",\n      platform: \"WXJS\",\n      appname: a.key,\n      sdkversion: \"1.2.0\",\n      logversion: \"2.0\"\n    };\n  b.layerId && (d.layerId = b.layerId);\n  b.keywords && (d.keywords = b.keywords);\n  b.city && (d.city = b.city);\n  b.filter && (d.filter = b.filter);\n  b.sortrule && (d.sortrule = b.sortrule);\n  b.pageNum && (d.pageNum = b.pageNum);\n  b.pageSize && (d.pageSize = b.pageSize);\n  b.sig && (d.sig = b.sig);\n  wx.request({\n    url: c.serviceName + \"/cpoint/datasearch/local\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(e) {\n      (e = e.data) && e.status && \"1\" === e.status && 0 === e.code ? a.success(e.data) : a.fail({\n        errCode: \"0\",\n        errMsg: e\n      });\n    },\n    fail: function fail(e) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: e.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getMEIdSearch = function (a) {\n  if (!a.options) return a.fail({\n    errCode: \"0\",\n    errMsg: \"\\u7F3A\\u5C11\\u5FC5\\u8981\\u53C2\\u6570\"\n  });\n  var b = a.options,\n    c = this.MeRequestConfig,\n    d = {\n      key: c.key,\n      s: \"rsx\",\n      platform: \"WXJS\",\n      appname: a.key,\n      sdkversion: \"1.2.0\",\n      logversion: \"2.0\"\n    };\n  b.layerId && (d.layerId = b.layerId);\n  b.id && (d.id = b.id);\n  b.sig && (d.sig = b.sig);\n  wx.request({\n    url: c.serviceName + \"/cpoint/datasearch/id\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(e) {\n      (e = e.data) && e.status && \"1\" === e.status && 0 === e.code ? a.success(e.data) : a.fail({\n        errCode: \"0\",\n        errMsg: e\n      });\n    },\n    fail: function fail(e) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: e.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getMEPolygonSearch = function (a) {\n  if (!a.options) return a.fail({\n    errCode: \"0\",\n    errMsg: \"\\u7F3A\\u5C11\\u5FC5\\u8981\\u53C2\\u6570\"\n  });\n  var b = a.options,\n    c = this.MeRequestConfig,\n    d = {\n      key: c.key,\n      s: \"rsx\",\n      platform: \"WXJS\",\n      appname: a.key,\n      sdkversion: \"1.2.0\",\n      logversion: \"2.0\"\n    };\n  b.layerId && (d.layerId = b.layerId);\n  b.keywords && (d.keywords = b.keywords);\n  b.polygon && (d.polygon = b.polygon);\n  b.filter && (d.filter = b.filter);\n  b.sortrule && (d.sortrule = b.sortrule);\n  b.pageNum && (d.pageNum = b.pageNum);\n  b.pageSize && (d.pageSize = b.pageSize);\n  b.sig && (d.sig = b.sig);\n  wx.request({\n    url: c.serviceName + \"/cpoint/datasearch/polygon\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(e) {\n      (e = e.data) && e.status && \"1\" === e.status && 0 === e.code ? a.success(e.data) : a.fail({\n        errCode: \"0\",\n        errMsg: e\n      });\n    },\n    fail: function fail(e) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: e.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getMEaroundSearch = function (a) {\n  if (!a.options) return a.fail({\n    errCode: \"0\",\n    errMsg: \"\\u7F3A\\u5C11\\u5FC5\\u8981\\u53C2\\u6570\"\n  });\n  var b = a.options,\n    c = this.MeRequestConfig,\n    d = {\n      key: c.key,\n      s: \"rsx\",\n      platform: \"WXJS\",\n      appname: a.key,\n      sdkversion: \"1.2.0\",\n      logversion: \"2.0\"\n    };\n  b.layerId && (d.layerId = b.layerId);\n  b.keywords && (d.keywords = b.keywords);\n  b.center && (d.center = b.center);\n  b.radius && (d.radius = b.radius);\n  b.filter && (d.filter = b.filter);\n  b.sortrule && (d.sortrule = b.sortrule);\n  b.pageNum && (d.pageNum = b.pageNum);\n  b.pageSize && (d.pageSize = b.pageSize);\n  b.sig && (d.sig = b.sig);\n  wx.request({\n    url: c.serviceName + \"/cpoint/datasearch/around\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(e) {\n      (e = e.data) && e.status && \"1\" === e.status && 0 === e.code ? a.success(e.data) : a.fail({\n        errCode: \"0\",\n        errMsg: e\n      });\n    },\n    fail: function fail(e) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: e.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getGeo = function (a) {\n  var b = this.requestConfig,\n    c = a.options;\n  b = {\n    key: this.key,\n    extensions: \"all\",\n    s: b.s,\n    platform: b.platform,\n    appname: this.key,\n    sdkversion: b.sdkversion,\n    logversion: b.logversion\n  };\n  c.address && (b.address = c.address);\n  c.city && (b.city = c.city);\n  c.batch && (b.batch = c.batch);\n  c.sig && (b.sig = c.sig);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/geocode/geo\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(d) {\n      (d = d.data) && d.status && \"1\" === d.status ? a.success(d) : a.fail({\n        errCode: \"0\",\n        errMsg: d\n      });\n    },\n    fail: function fail(d) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: d.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getRegeo = function (a) {\n  function b(d) {\n    var e = c.requestConfig;\n    wx.request({\n      url: \"https://restapi.amap.com/v3/geocode/regeo\",\n      data: {\n        key: c.key,\n        location: d,\n        extensions: \"all\",\n        s: e.s,\n        platform: e.platform,\n        appname: c.key,\n        sdkversion: e.sdkversion,\n        logversion: e.logversion\n      },\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      success: function success(g) {\n        if (g.data.status && \"1\" == g.data.status) {\n          g = g.data.regeocode;\n          var h = g.addressComponent,\n            f = [],\n            k = g.roads[0].name + \"\\u9644\\u8FD1\",\n            m = d.split(\",\")[0],\n            n = d.split(\",\")[1];\n          if (g.pois && g.pois[0]) {\n            k = g.pois[0].name + \"\\u9644\\u8FD1\";\n            var l = g.pois[0].location;\n            l && (m = parseFloat(l.split(\",\")[0]), n = parseFloat(l.split(\",\")[1]));\n          }\n          h.provice && f.push(h.provice);\n          h.city && f.push(h.city);\n          h.district && f.push(h.district);\n          h.streetNumber && h.streetNumber.street && h.streetNumber.number ? (f.push(h.streetNumber.street), f.push(h.streetNumber.number)) : f.push(g.roads[0].name);\n          f = f.join(\"\");\n          a.success([{\n            iconPath: a.iconPath,\n            width: a.iconWidth,\n            height: a.iconHeight,\n            name: f,\n            desc: k,\n            longitude: m,\n            latitude: n,\n            id: 0,\n            regeocodeData: g\n          }]);\n        } else a.fail({\n          errCode: g.data.infocode,\n          errMsg: g.data.info\n        });\n      },\n      fail: function fail(g) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: g.errMsg || \"\"\n        });\n      }\n    });\n  }\n  var c = this;\n  a.location ? b(a.location) : c.getWxLocation(a, function (d) {\n    b(d);\n  });\n};\nAMapWX.prototype.getWeather = function (a) {\n  function b(g) {\n    var h = \"base\";\n    a.type && \"forecast\" == a.type && (h = \"all\");\n    wx.request({\n      url: \"https://restapi.amap.com/v3/weather/weatherInfo\",\n      data: {\n        key: d.key,\n        city: g,\n        extensions: h,\n        s: e.s,\n        platform: e.platform,\n        appname: d.key,\n        sdkversion: e.sdkversion,\n        logversion: e.logversion\n      },\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      success: function success(f) {\n        if (f.data.status && \"1\" == f.data.status) {\n          if (f.data.lives) {\n            if ((f = f.data.lives) && 0 < f.length) {\n              f = f[0];\n              var k = {\n                city: {\n                  text: \"\\u57CE\\u5E02\",\n                  data: f.city\n                },\n                weather: {\n                  text: \"\\u5929\\u6C14\",\n                  data: f.weather\n                },\n                temperature: {\n                  text: \"\\u6E29\\u5EA6\",\n                  data: f.temperature\n                },\n                winddirection: {\n                  text: \"\\u98CE\\u5411\",\n                  data: f.winddirection + \"\\u98CE\"\n                },\n                windpower: {\n                  text: \"\\u98CE\\u529B\",\n                  data: f.windpower + \"\\u7EA7\"\n                },\n                humidity: {\n                  text: \"\\u6E7F\\u5EA6\",\n                  data: f.humidity + \"%\"\n                }\n              };\n              k.liveData = f;\n              a.success(k);\n            }\n          } else f.data.forecasts && f.data.forecasts[0] && a.success({\n            forecast: f.data.forecasts[0]\n          });\n        } else a.fail({\n          errCode: f.data.infocode,\n          errMsg: f.data.info\n        });\n      },\n      fail: function fail(f) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: f.errMsg || \"\"\n        });\n      }\n    });\n  }\n  function c(g) {\n    wx.request({\n      url: \"https://restapi.amap.com/v3/geocode/regeo\",\n      data: {\n        key: d.key,\n        location: g,\n        extensions: \"all\",\n        s: e.s,\n        platform: e.platform,\n        appname: d.key,\n        sdkversion: e.sdkversion,\n        logversion: e.logversion\n      },\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      success: function success(h) {\n        if (h.data.status && \"1\" == h.data.status) {\n          h = h.data.regeocode;\n          if (h.addressComponent) var f = h.addressComponent.adcode;else h.aois && 0 < h.aois.length && (f = h.aois[0].adcode);\n          b(f);\n        } else a.fail({\n          errCode: h.data.infocode,\n          errMsg: h.data.info\n        });\n      },\n      fail: function fail(h) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: h.errMsg || \"\"\n        });\n      }\n    });\n  }\n  var d = this,\n    e = d.requestConfig;\n  a.city ? b(a.city) : d.getWxLocation(a, function (g) {\n    c(g);\n  });\n};\nAMapWX.prototype.getPoiAround = function (a) {\n  function b(e) {\n    e = {\n      key: c.key,\n      location: e,\n      s: d.s,\n      platform: d.platform,\n      appname: c.key,\n      sdkversion: d.sdkversion,\n      logversion: d.logversion\n    };\n    a.querytypes && (e.types = a.querytypes);\n    a.querykeywords && (e.keywords = a.querykeywords);\n    wx.request({\n      url: \"https://restapi.amap.com/v3/place/around\",\n      data: e,\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      success: function success(g) {\n        if (g.data.status && \"1\" == g.data.status) {\n          if ((g = g.data) && g.pois) {\n            for (var h = [], f = 0; f < g.pois.length; f++) {\n              var k = 0 == f ? a.iconPathSelected : a.iconPath;\n              h.push({\n                latitude: parseFloat(g.pois[f].location.split(\",\")[1]),\n                longitude: parseFloat(g.pois[f].location.split(\",\")[0]),\n                iconPath: k,\n                width: 22,\n                height: 32,\n                id: f,\n                name: g.pois[f].name,\n                address: g.pois[f].address\n              });\n            }\n            a.success({\n              markers: h,\n              poisData: g.pois\n            });\n          }\n        } else a.fail({\n          errCode: g.data.infocode,\n          errMsg: g.data.info\n        });\n      },\n      fail: function fail(g) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: g.errMsg || \"\"\n        });\n      }\n    });\n  }\n  var c = this,\n    d = c.requestConfig;\n  a.location ? b(a.location) : c.getWxLocation(a, function (e) {\n    b(e);\n  });\n};\nAMapWX.prototype.getStaticmap = function (a) {\n  function b(e) {\n    c.push(\"location=\" + e);\n    a.zoom && c.push(\"zoom=\" + a.zoom);\n    a.size && c.push(\"size=\" + a.size);\n    a.scale && c.push(\"scale=\" + a.scale);\n    a.markers && c.push(\"markers=\" + a.markers);\n    a.labels && c.push(\"labels=\" + a.labels);\n    a.paths && c.push(\"paths=\" + a.paths);\n    a.traffic && c.push(\"traffic=\" + a.traffic);\n    e = \"https://restapi.amap.com/v3/staticmap?\" + c.join(\"&\");\n    a.success({\n      url: e\n    });\n  }\n  var c = [];\n  c.push(\"key=\" + this.key);\n  var d = this.requestConfig;\n  c.push(\"s=\" + d.s);\n  c.push(\"platform=\" + d.platform);\n  c.push(\"appname=\" + d.appname);\n  c.push(\"sdkversion=\" + d.sdkversion);\n  c.push(\"logversion=\" + d.logversion);\n  a.location ? b(a.location) : this.getWxLocation(a, function (e) {\n    b(e);\n  });\n};\nAMapWX.prototype.getInputtips = function (a) {\n  var b = Object.assign({}, this.requestConfig);\n  a.location && (b.location = a.location);\n  a.keywords && (b.keywords = a.keywords);\n  a.type && (b.type = a.type);\n  a.city && (b.city = a.city);\n  a.citylimit && (b.citylimit = a.citylimit);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/assistant/inputtips\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(c) {\n      c && c.data && c.data.tips && a.success({\n        tips: c.data.tips\n      });\n    },\n    fail: function fail(c) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getDrivingRoute = function (a) {\n  var b = Object.assign({}, this.requestConfig);\n  a.origin && (b.origin = a.origin);\n  a.destination && (b.destination = a.destination);\n  a.strategy && (b.strategy = a.strategy);\n  a.waypoints && (b.waypoints = a.waypoints);\n  a.avoidpolygons && (b.avoidpolygons = a.avoidpolygons);\n  a.avoidroad && (b.avoidroad = a.avoidroad);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/direction/driving\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(c) {\n      c && c.data && c.data.route && a.success({\n        paths: c.data.route.paths,\n        taxi_cost: c.data.route.taxi_cost || \"\"\n      });\n    },\n    fail: function fail(c) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getWalkingRoute = function (a) {\n  var b = Object.assign({}, this.requestConfig);\n  a.origin && (b.origin = a.origin);\n  a.destination && (b.destination = a.destination);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/direction/walking\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(c) {\n      c && c.data && c.data.route && a.success({\n        paths: c.data.route.paths\n      });\n    },\n    fail: function fail(c) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getTransitRoute = function (a) {\n  var b = Object.assign({}, this.requestConfig);\n  a.origin && (b.origin = a.origin);\n  a.destination && (b.destination = a.destination);\n  a.strategy && (b.strategy = a.strategy);\n  a.city && (b.city = a.city);\n  a.cityd && (b.cityd = a.cityd);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/direction/transit/integrated\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(c) {\n      c && c.data && c.data.route && (c = c.data.route, a.success({\n        distance: c.distance || \"\",\n        taxi_cost: c.taxi_cost || \"\",\n        transits: c.transits\n      }));\n    },\n    fail: function fail(c) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nAMapWX.prototype.getRidingRoute = function (a) {\n  var b = Object.assign({}, this.requestConfig);\n  a.origin && (b.origin = a.origin);\n  a.destination && (b.destination = a.destination);\n  wx.request({\n    url: \"https://restapi.amap.com/v3/direction/riding\",\n    data: b,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\"\n    },\n    success: function success(c) {\n      c && c.data && c.data.route && a.success({\n        paths: c.data.route.paths\n      });\n    },\n    fail: function fail(c) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\"\n      });\n    }\n  });\n};\nmodule.exports.AMapWX = AMapWX;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbGlicy9hbWFwLXd4LjEzMC5qcyJdLCJuYW1lcyI6WyJBTWFwV1giLCJhIiwia2V5IiwicmVxdWVzdENvbmZpZyIsInMiLCJwbGF0Zm9ybSIsImFwcG5hbWUiLCJzZGt2ZXJzaW9uIiwibG9ndmVyc2lvbiIsIk1lUmVxdWVzdENvbmZpZyIsInNlcnZpY2VOYW1lIiwicHJvdG90eXBlIiwiZ2V0V3hMb2NhdGlvbiIsImIiLCJ3eCIsImdldExvY2F0aW9uIiwidHlwZSIsInN1Y2Nlc3MiLCJjIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJzZXRTdG9yYWdlIiwiZGF0YSIsImZhaWwiLCJnZXRTdG9yYWdlIiwiZCIsImVyckNvZGUiLCJlcnJNc2ciLCJnZXRNRUtleXdvcmRzU2VhcmNoIiwib3B0aW9ucyIsImxheWVySWQiLCJrZXl3b3JkcyIsImNpdHkiLCJmaWx0ZXIiLCJzb3J0cnVsZSIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInNpZyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJlIiwic3RhdHVzIiwiY29kZSIsImdldE1FSWRTZWFyY2giLCJpZCIsImdldE1FUG9seWdvblNlYXJjaCIsInBvbHlnb24iLCJnZXRNRWFyb3VuZFNlYXJjaCIsImNlbnRlciIsInJhZGl1cyIsImdldEdlbyIsImV4dGVuc2lvbnMiLCJhZGRyZXNzIiwiYmF0Y2giLCJnZXRSZWdlbyIsImxvY2F0aW9uIiwiZyIsInJlZ2VvY29kZSIsImgiLCJhZGRyZXNzQ29tcG9uZW50IiwiZiIsImsiLCJyb2FkcyIsIm5hbWUiLCJtIiwic3BsaXQiLCJuIiwicG9pcyIsImwiLCJwYXJzZUZsb2F0IiwicHJvdmljZSIsInB1c2giLCJkaXN0cmljdCIsInN0cmVldE51bWJlciIsInN0cmVldCIsIm51bWJlciIsImpvaW4iLCJpY29uUGF0aCIsIndpZHRoIiwiaWNvbldpZHRoIiwiaGVpZ2h0IiwiaWNvbkhlaWdodCIsImRlc2MiLCJyZWdlb2NvZGVEYXRhIiwiaW5mb2NvZGUiLCJpbmZvIiwiZ2V0V2VhdGhlciIsImxpdmVzIiwibGVuZ3RoIiwidGV4dCIsIndlYXRoZXIiLCJ0ZW1wZXJhdHVyZSIsIndpbmRkaXJlY3Rpb24iLCJ3aW5kcG93ZXIiLCJodW1pZGl0eSIsImxpdmVEYXRhIiwiZm9yZWNhc3RzIiwiZm9yZWNhc3QiLCJhZGNvZGUiLCJhb2lzIiwiZ2V0UG9pQXJvdW5kIiwicXVlcnl0eXBlcyIsInR5cGVzIiwicXVlcnlrZXl3b3JkcyIsImljb25QYXRoU2VsZWN0ZWQiLCJtYXJrZXJzIiwicG9pc0RhdGEiLCJnZXRTdGF0aWNtYXAiLCJ6b29tIiwic2l6ZSIsInNjYWxlIiwibGFiZWxzIiwicGF0aHMiLCJ0cmFmZmljIiwiZ2V0SW5wdXR0aXBzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2l0eWxpbWl0IiwidGlwcyIsImdldERyaXZpbmdSb3V0ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwic3RyYXRlZ3kiLCJ3YXlwb2ludHMiLCJhdm9pZHBvbHlnb25zIiwiYXZvaWRyb2FkIiwicm91dGUiLCJ0YXhpX2Nvc3QiLCJnZXRXYWxraW5nUm91dGUiLCJnZXRUcmFuc2l0Um91dGUiLCJjaXR5ZCIsImRpc3RhbmNlIiwidHJhbnNpdHMiLCJnZXRSaWRpbmdSb3V0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFDO0VBQUMsSUFBSSxDQUFDQyxHQUFHLEdBQUNELENBQUMsQ0FBQ0MsR0FBRztFQUFDLElBQUksQ0FBQ0MsYUFBYSxHQUFDO0lBQUNELEdBQUcsRUFBQ0QsQ0FBQyxDQUFDQyxHQUFHO0lBQUNFLENBQUMsRUFBQyxLQUFLO0lBQUNDLFFBQVEsRUFBQyxNQUFNO0lBQUNDLE9BQU8sRUFBQ0wsQ0FBQyxDQUFDQyxHQUFHO0lBQUNLLFVBQVUsRUFBQyxPQUFPO0lBQUNDLFVBQVUsRUFBQztFQUFLLENBQUM7RUFBQyxJQUFJLENBQUNDLGVBQWUsR0FBQztJQUFDUCxHQUFHLEVB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QUFDekgsQ0FBQyxDQUFDMEgsV0FBVyxLQUFHOUcsQ0FBQyxDQUFDOEcsV0FBVyxHQUFDMUgsQ0FBQyxDQUFDMEgsV0FBVyxDQUFDO0VBQUM3RyxFQUFFLENBQUN3QixPQUFPLENBQUM7SUFBQ0MsR0FBRyxFQUFDLDhDQUE4QztJQUFDakIsSUFBSSxFQUFDVCxDQUFDO0lBQUMyQixNQUFNLEVBQUMsS0FBSztJQUFDQyxNQUFNLEVBQUM7TUFBQyxjQUFjLEVBQUM7SUFBa0IsQ0FBQztJQUFDeEIsT0FBTyxFQUFDLGlCQUFTQyxDQUFDLEVBQUM7TUFBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNJLElBQUksSUFBRUosQ0FBQyxDQUFDSSxJQUFJLENBQUMwRyxLQUFLLElBQUUvSCxDQUFDLENBQUNnQixPQUFPLENBQUM7UUFBQ2lHLEtBQUssRUFBQ2hHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDMEcsS0FBSyxDQUFDZDtNQUFLLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzNGLElBQUksRUFBQyxjQUFTTCxDQUFDLEVBQUM7TUFBQ2pCLENBQUMsQ0FBQ3NCLElBQUksQ0FBQztRQUFDRyxPQUFPLEVBQUMsR0FBRztRQUFDQyxNQUFNLEVBQUNULENBQUMsQ0FBQ1MsTUFBTSxJQUFFO01BQUUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUM7QUFBQSxDQUFDO0FBQUM2RyxNQUFNLENBQUNDLE9BQU8sQ0FBQ3pJLE1BQU0sR0FBQ0EsTUFBTSIsImZpbGUiOiI2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEFNYXBXWChhKXt0aGlzLmtleT1hLmtleTt0aGlzLnJlcXVlc3RDb25maWc9e2tleTphLmtleSxzOlwicnN4XCIscGxhdGZvcm06XCJXWEpTXCIsYXBwbmFtZTphLmtleSxzZGt2ZXJzaW9uOlwiMS4yLjBcIixsb2d2ZXJzaW9uOlwiMi4wXCJ9O3RoaXMuTWVSZXF1ZXN0Q29uZmlnPXtrZXk6YS5rZXksc2VydmljZU5hbWU6XCJodHRwczovL3Jlc3RhcGkuYW1hcC5jb20vcmVzdC9tZVwifX1cclxuQU1hcFdYLnByb3RvdHlwZS5nZXRXeExvY2F0aW9uPWZ1bmN0aW9uKGEsYil7d3guZ2V0TG9jYXRpb24oe3R5cGU6XCJnY2owMlwiLHN1Y2Nlc3M6ZnVuY3Rpb24oYyl7Yz1jLmxvbmdpdHVkZStcIixcIitjLmxhdGl0dWRlO3d4LnNldFN0b3JhZ2Uoe2tleTpcInVzZXJMb2NhdGlvblwiLGRhdGE6Y30pO2IoYyl9LGZhaWw6ZnVuY3Rpb24oYyl7d3guZ2V0U3RvcmFnZSh7a2V5OlwidXNlckxvY2F0aW9uXCIsc3VjY2VzczpmdW5jdGlvbihkKXtkLmRhdGEmJmIoZC5kYXRhKX19KTthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmMuZXJyTXNnfHxcIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldE1FS2V5d29yZHNTZWFyY2g9ZnVuY3Rpb24oYSl7aWYoIWEub3B0aW9ucylyZXR1cm4gYS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzpcIlxcdTdmM2FcXHU1YzExXFx1NWZjNVxcdTg5ODFcXHU1M2MyXFx1NjU3MFwifSk7dmFyIGI9YS5vcHRpb25zLGM9dGhpcy5NZVJlcXVlc3RDb25maWcsZD17a2V5OmMua2V5LHM6XCJyc3hcIixwbGF0Zm9ybTpcIldYSlNcIixhcHBuYW1lOmEua2V5LHNka3ZlcnNpb246XCIxLjIuMFwiLGxvZ3ZlcnNpb246XCIyLjBcIn07Yi5sYXllcklkJiYoZC5sYXllcklkPWIubGF5ZXJJZCk7Yi5rZXl3b3JkcyYmKGQua2V5d29yZHM9Yi5rZXl3b3Jkcyk7Yi5jaXR5JiYoZC5jaXR5PWIuY2l0eSk7Yi5maWx0ZXImJihkLmZpbHRlcj1iLmZpbHRlcik7Yi5zb3J0cnVsZSYmKGQuc29ydHJ1bGU9Yi5zb3J0cnVsZSk7Yi5wYWdlTnVtJiYoZC5wYWdlTnVtPWIucGFnZU51bSk7Yi5wYWdlU2l6ZSYmKGQucGFnZVNpemU9Yi5wYWdlU2l6ZSk7Yi5zaWcmJihkLnNpZz1cclxuYi5zaWcpO3d4LnJlcXVlc3Qoe3VybDpjLnNlcnZpY2VOYW1lK1wiL2Nwb2ludC9kYXRhc2VhcmNoL2xvY2FsXCIsZGF0YTpkLG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihlKXsoZT1lLmRhdGEpJiZlLnN0YXR1cyYmXCIxXCI9PT1lLnN0YXR1cyYmMD09PWUuY29kZT9hLnN1Y2Nlc3MoZS5kYXRhKTphLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmV9KX0sZmFpbDpmdW5jdGlvbihlKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmUuZXJyTXNnfHxcIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldE1FSWRTZWFyY2g9ZnVuY3Rpb24oYSl7aWYoIWEub3B0aW9ucylyZXR1cm4gYS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzpcIlxcdTdmM2FcXHU1YzExXFx1NWZjNVxcdTg5ODFcXHU1M2MyXFx1NjU3MFwifSk7dmFyIGI9YS5vcHRpb25zLGM9dGhpcy5NZVJlcXVlc3RDb25maWcsZD17a2V5OmMua2V5LHM6XCJyc3hcIixwbGF0Zm9ybTpcIldYSlNcIixhcHBuYW1lOmEua2V5LHNka3ZlcnNpb246XCIxLjIuMFwiLGxvZ3ZlcnNpb246XCIyLjBcIn07Yi5sYXllcklkJiYoZC5sYXllcklkPWIubGF5ZXJJZCk7Yi5pZCYmKGQuaWQ9Yi5pZCk7Yi5zaWcmJihkLnNpZz1iLnNpZyk7d3gucmVxdWVzdCh7dXJsOmMuc2VydmljZU5hbWUrXCIvY3BvaW50L2RhdGFzZWFyY2gvaWRcIixkYXRhOmQsbWV0aG9kOlwiR0VUXCIsaGVhZGVyOntcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxzdWNjZXNzOmZ1bmN0aW9uKGUpeyhlPWUuZGF0YSkmJmUuc3RhdHVzJiZcIjFcIj09PWUuc3RhdHVzJiZcclxuMD09PWUuY29kZT9hLnN1Y2Nlc3MoZS5kYXRhKTphLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmV9KX0sZmFpbDpmdW5jdGlvbihlKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmUuZXJyTXNnfHxcIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldE1FUG9seWdvblNlYXJjaD1mdW5jdGlvbihhKXtpZighYS5vcHRpb25zKXJldHVybiBhLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOlwiXFx1N2YzYVxcdTVjMTFcXHU1ZmM1XFx1ODk4MVxcdTUzYzJcXHU2NTcwXCJ9KTt2YXIgYj1hLm9wdGlvbnMsYz10aGlzLk1lUmVxdWVzdENvbmZpZyxkPXtrZXk6Yy5rZXksczpcInJzeFwiLHBsYXRmb3JtOlwiV1hKU1wiLGFwcG5hbWU6YS5rZXksc2RrdmVyc2lvbjpcIjEuMi4wXCIsbG9ndmVyc2lvbjpcIjIuMFwifTtiLmxheWVySWQmJihkLmxheWVySWQ9Yi5sYXllcklkKTtiLmtleXdvcmRzJiYoZC5rZXl3b3Jkcz1iLmtleXdvcmRzKTtiLnBvbHlnb24mJihkLnBvbHlnb249Yi5wb2x5Z29uKTtiLmZpbHRlciYmKGQuZmlsdGVyPWIuZmlsdGVyKTtiLnNvcnRydWxlJiYoZC5zb3J0cnVsZT1iLnNvcnRydWxlKTtiLnBhZ2VOdW0mJihkLnBhZ2VOdW09Yi5wYWdlTnVtKTtiLnBhZ2VTaXplJiYoZC5wYWdlU2l6ZT1iLnBhZ2VTaXplKTtcclxuYi5zaWcmJihkLnNpZz1iLnNpZyk7d3gucmVxdWVzdCh7dXJsOmMuc2VydmljZU5hbWUrXCIvY3BvaW50L2RhdGFzZWFyY2gvcG9seWdvblwiLGRhdGE6ZCxtZXRob2Q6XCJHRVRcIixoZWFkZXI6e1wiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LHN1Y2Nlc3M6ZnVuY3Rpb24oZSl7KGU9ZS5kYXRhKSYmZS5zdGF0dXMmJlwiMVwiPT09ZS5zdGF0dXMmJjA9PT1lLmNvZGU/YS5zdWNjZXNzKGUuZGF0YSk6YS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzplfSl9LGZhaWw6ZnVuY3Rpb24oZSl7YS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzplLmVyck1zZ3x8XCJcIn0pfX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRNRWFyb3VuZFNlYXJjaD1mdW5jdGlvbihhKXtpZighYS5vcHRpb25zKXJldHVybiBhLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOlwiXFx1N2YzYVxcdTVjMTFcXHU1ZmM1XFx1ODk4MVxcdTUzYzJcXHU2NTcwXCJ9KTt2YXIgYj1hLm9wdGlvbnMsYz10aGlzLk1lUmVxdWVzdENvbmZpZyxkPXtrZXk6Yy5rZXksczpcInJzeFwiLHBsYXRmb3JtOlwiV1hKU1wiLGFwcG5hbWU6YS5rZXksc2RrdmVyc2lvbjpcIjEuMi4wXCIsbG9ndmVyc2lvbjpcIjIuMFwifTtiLmxheWVySWQmJihkLmxheWVySWQ9Yi5sYXllcklkKTtiLmtleXdvcmRzJiYoZC5rZXl3b3Jkcz1iLmtleXdvcmRzKTtiLmNlbnRlciYmKGQuY2VudGVyPWIuY2VudGVyKTtiLnJhZGl1cyYmKGQucmFkaXVzPWIucmFkaXVzKTtiLmZpbHRlciYmKGQuZmlsdGVyPWIuZmlsdGVyKTtiLnNvcnRydWxlJiYoZC5zb3J0cnVsZT1iLnNvcnRydWxlKTtiLnBhZ2VOdW0mJihkLnBhZ2VOdW09Yi5wYWdlTnVtKTtiLnBhZ2VTaXplJiZcclxuKGQucGFnZVNpemU9Yi5wYWdlU2l6ZSk7Yi5zaWcmJihkLnNpZz1iLnNpZyk7d3gucmVxdWVzdCh7dXJsOmMuc2VydmljZU5hbWUrXCIvY3BvaW50L2RhdGFzZWFyY2gvYXJvdW5kXCIsZGF0YTpkLG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihlKXsoZT1lLmRhdGEpJiZlLnN0YXR1cyYmXCIxXCI9PT1lLnN0YXR1cyYmMD09PWUuY29kZT9hLnN1Y2Nlc3MoZS5kYXRhKTphLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmV9KX0sZmFpbDpmdW5jdGlvbihlKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmUuZXJyTXNnfHxcIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldEdlbz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnJlcXVlc3RDb25maWcsYz1hLm9wdGlvbnM7Yj17a2V5OnRoaXMua2V5LGV4dGVuc2lvbnM6XCJhbGxcIixzOmIucyxwbGF0Zm9ybTpiLnBsYXRmb3JtLGFwcG5hbWU6dGhpcy5rZXksc2RrdmVyc2lvbjpiLnNka3ZlcnNpb24sbG9ndmVyc2lvbjpiLmxvZ3ZlcnNpb259O2MuYWRkcmVzcyYmKGIuYWRkcmVzcz1jLmFkZHJlc3MpO2MuY2l0eSYmKGIuY2l0eT1jLmNpdHkpO2MuYmF0Y2gmJihiLmJhdGNoPWMuYmF0Y2gpO2Muc2lnJiYoYi5zaWc9Yy5zaWcpO3d4LnJlcXVlc3Qoe3VybDpcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9nZW9jb2RlL2dlb1wiLGRhdGE6YixtZXRob2Q6XCJHRVRcIixoZWFkZXI6e1wiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LHN1Y2Nlc3M6ZnVuY3Rpb24oZCl7KGQ9ZC5kYXRhKSYmZC5zdGF0dXMmJlwiMVwiPT09ZC5zdGF0dXM/YS5zdWNjZXNzKGQpOmEuZmFpbCh7ZXJyQ29kZTpcIjBcIixcclxuZXJyTXNnOmR9KX0sZmFpbDpmdW5jdGlvbihkKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmQuZXJyTXNnfHxcIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldFJlZ2VvPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZCl7dmFyIGU9Yy5yZXF1ZXN0Q29uZmlnO3d4LnJlcXVlc3Qoe3VybDpcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9nZW9jb2RlL3JlZ2VvXCIsZGF0YTp7a2V5OmMua2V5LGxvY2F0aW9uOmQsZXh0ZW5zaW9uczpcImFsbFwiLHM6ZS5zLHBsYXRmb3JtOmUucGxhdGZvcm0sYXBwbmFtZTpjLmtleSxzZGt2ZXJzaW9uOmUuc2RrdmVyc2lvbixsb2d2ZXJzaW9uOmUubG9ndmVyc2lvbn0sbWV0aG9kOlwiR0VUXCIsaGVhZGVyOntcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxzdWNjZXNzOmZ1bmN0aW9uKGcpe2lmKGcuZGF0YS5zdGF0dXMmJlwiMVwiPT1nLmRhdGEuc3RhdHVzKXtnPWcuZGF0YS5yZWdlb2NvZGU7dmFyIGg9Zy5hZGRyZXNzQ29tcG9uZW50LGY9W10saz1nLnJvYWRzWzBdLm5hbWUrXCJcXHU5NjQ0XFx1OGZkMVwiLG09ZC5zcGxpdChcIixcIilbMF0sbj1kLnNwbGl0KFwiLFwiKVsxXTtpZihnLnBvaXMmJlxyXG5nLnBvaXNbMF0pe2s9Zy5wb2lzWzBdLm5hbWUrXCJcXHU5NjQ0XFx1OGZkMVwiO3ZhciBsPWcucG9pc1swXS5sb2NhdGlvbjtsJiYobT1wYXJzZUZsb2F0KGwuc3BsaXQoXCIsXCIpWzBdKSxuPXBhcnNlRmxvYXQobC5zcGxpdChcIixcIilbMV0pKX1oLnByb3ZpY2UmJmYucHVzaChoLnByb3ZpY2UpO2guY2l0eSYmZi5wdXNoKGguY2l0eSk7aC5kaXN0cmljdCYmZi5wdXNoKGguZGlzdHJpY3QpO2guc3RyZWV0TnVtYmVyJiZoLnN0cmVldE51bWJlci5zdHJlZXQmJmguc3RyZWV0TnVtYmVyLm51bWJlcj8oZi5wdXNoKGguc3RyZWV0TnVtYmVyLnN0cmVldCksZi5wdXNoKGguc3RyZWV0TnVtYmVyLm51bWJlcikpOmYucHVzaChnLnJvYWRzWzBdLm5hbWUpO2Y9Zi5qb2luKFwiXCIpO2Euc3VjY2Vzcyhbe2ljb25QYXRoOmEuaWNvblBhdGgsd2lkdGg6YS5pY29uV2lkdGgsaGVpZ2h0OmEuaWNvbkhlaWdodCxuYW1lOmYsZGVzYzprLGxvbmdpdHVkZTptLGxhdGl0dWRlOm4saWQ6MCxyZWdlb2NvZGVEYXRhOmd9XSl9ZWxzZSBhLmZhaWwoe2VyckNvZGU6Zy5kYXRhLmluZm9jb2RlLFxyXG5lcnJNc2c6Zy5kYXRhLmluZm99KX0sZmFpbDpmdW5jdGlvbihnKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmcuZXJyTXNnfHxcIlwifSl9fSl9dmFyIGM9dGhpczthLmxvY2F0aW9uP2IoYS5sb2NhdGlvbik6Yy5nZXRXeExvY2F0aW9uKGEsZnVuY3Rpb24oZCl7YihkKX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRXZWF0aGVyPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZyl7dmFyIGg9XCJiYXNlXCI7YS50eXBlJiZcImZvcmVjYXN0XCI9PWEudHlwZSYmKGg9XCJhbGxcIik7d3gucmVxdWVzdCh7dXJsOlwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL3dlYXRoZXIvd2VhdGhlckluZm9cIixkYXRhOntrZXk6ZC5rZXksY2l0eTpnLGV4dGVuc2lvbnM6aCxzOmUucyxwbGF0Zm9ybTplLnBsYXRmb3JtLGFwcG5hbWU6ZC5rZXksc2RrdmVyc2lvbjplLnNka3ZlcnNpb24sbG9ndmVyc2lvbjplLmxvZ3ZlcnNpb259LG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihmKXtpZihmLmRhdGEuc3RhdHVzJiZcIjFcIj09Zi5kYXRhLnN0YXR1cylpZihmLmRhdGEubGl2ZXMpe2lmKChmPWYuZGF0YS5saXZlcykmJjA8Zi5sZW5ndGgpe2Y9ZlswXTt2YXIgaz17Y2l0eTp7dGV4dDpcIlxcdTU3Y2VcXHU1ZTAyXCIsZGF0YTpmLmNpdHl9LFxyXG53ZWF0aGVyOnt0ZXh0OlwiXFx1NTkyOVxcdTZjMTRcIixkYXRhOmYud2VhdGhlcn0sdGVtcGVyYXR1cmU6e3RleHQ6XCJcXHU2ZTI5XFx1NWVhNlwiLGRhdGE6Zi50ZW1wZXJhdHVyZX0sd2luZGRpcmVjdGlvbjp7dGV4dDpcIlxcdTk4Y2VcXHU1NDExXCIsZGF0YTpmLndpbmRkaXJlY3Rpb24rXCJcXHU5OGNlXCJ9LHdpbmRwb3dlcjp7dGV4dDpcIlxcdTk4Y2VcXHU1MjliXCIsZGF0YTpmLndpbmRwb3dlcitcIlxcdTdlYTdcIn0saHVtaWRpdHk6e3RleHQ6XCJcXHU2ZTdmXFx1NWVhNlwiLGRhdGE6Zi5odW1pZGl0eStcIiVcIn19O2subGl2ZURhdGE9ZjthLnN1Y2Nlc3Moayl9fWVsc2UgZi5kYXRhLmZvcmVjYXN0cyYmZi5kYXRhLmZvcmVjYXN0c1swXSYmYS5zdWNjZXNzKHtmb3JlY2FzdDpmLmRhdGEuZm9yZWNhc3RzWzBdfSk7ZWxzZSBhLmZhaWwoe2VyckNvZGU6Zi5kYXRhLmluZm9jb2RlLGVyck1zZzpmLmRhdGEuaW5mb30pfSxmYWlsOmZ1bmN0aW9uKGYpe2EuZmFpbCh7ZXJyQ29kZTpcIjBcIixlcnJNc2c6Zi5lcnJNc2d8fFwiXCJ9KX19KX1cclxuZnVuY3Rpb24gYyhnKXt3eC5yZXF1ZXN0KHt1cmw6XCJodHRwczovL3Jlc3RhcGkuYW1hcC5jb20vdjMvZ2VvY29kZS9yZWdlb1wiLGRhdGE6e2tleTpkLmtleSxsb2NhdGlvbjpnLGV4dGVuc2lvbnM6XCJhbGxcIixzOmUucyxwbGF0Zm9ybTplLnBsYXRmb3JtLGFwcG5hbWU6ZC5rZXksc2RrdmVyc2lvbjplLnNka3ZlcnNpb24sbG9ndmVyc2lvbjplLmxvZ3ZlcnNpb259LG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihoKXtpZihoLmRhdGEuc3RhdHVzJiZcIjFcIj09aC5kYXRhLnN0YXR1cyl7aD1oLmRhdGEucmVnZW9jb2RlO2lmKGguYWRkcmVzc0NvbXBvbmVudCl2YXIgZj1oLmFkZHJlc3NDb21wb25lbnQuYWRjb2RlO2Vsc2UgaC5hb2lzJiYwPGguYW9pcy5sZW5ndGgmJihmPWguYW9pc1swXS5hZGNvZGUpO2IoZil9ZWxzZSBhLmZhaWwoe2VyckNvZGU6aC5kYXRhLmluZm9jb2RlLGVyck1zZzpoLmRhdGEuaW5mb30pfSxcclxuZmFpbDpmdW5jdGlvbihoKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmguZXJyTXNnfHxcIlwifSl9fSl9dmFyIGQ9dGhpcyxlPWQucmVxdWVzdENvbmZpZzthLmNpdHk/YihhLmNpdHkpOmQuZ2V0V3hMb2NhdGlvbihhLGZ1bmN0aW9uKGcpe2MoZyl9KX07XHJcbkFNYXBXWC5wcm90b3R5cGUuZ2V0UG9pQXJvdW5kPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZSl7ZT17a2V5OmMua2V5LGxvY2F0aW9uOmUsczpkLnMscGxhdGZvcm06ZC5wbGF0Zm9ybSxhcHBuYW1lOmMua2V5LHNka3ZlcnNpb246ZC5zZGt2ZXJzaW9uLGxvZ3ZlcnNpb246ZC5sb2d2ZXJzaW9ufTthLnF1ZXJ5dHlwZXMmJihlLnR5cGVzPWEucXVlcnl0eXBlcyk7YS5xdWVyeWtleXdvcmRzJiYoZS5rZXl3b3Jkcz1hLnF1ZXJ5a2V5d29yZHMpO3d4LnJlcXVlc3Qoe3VybDpcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9wbGFjZS9hcm91bmRcIixkYXRhOmUsbWV0aG9kOlwiR0VUXCIsaGVhZGVyOntcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxzdWNjZXNzOmZ1bmN0aW9uKGcpe2lmKGcuZGF0YS5zdGF0dXMmJlwiMVwiPT1nLmRhdGEuc3RhdHVzKXtpZigoZz1nLmRhdGEpJiZnLnBvaXMpe2Zvcih2YXIgaD1bXSxmPTA7ZjxnLnBvaXMubGVuZ3RoO2YrKyl7dmFyIGs9MD09XHJcbmY/YS5pY29uUGF0aFNlbGVjdGVkOmEuaWNvblBhdGg7aC5wdXNoKHtsYXRpdHVkZTpwYXJzZUZsb2F0KGcucG9pc1tmXS5sb2NhdGlvbi5zcGxpdChcIixcIilbMV0pLGxvbmdpdHVkZTpwYXJzZUZsb2F0KGcucG9pc1tmXS5sb2NhdGlvbi5zcGxpdChcIixcIilbMF0pLGljb25QYXRoOmssd2lkdGg6MjIsaGVpZ2h0OjMyLGlkOmYsbmFtZTpnLnBvaXNbZl0ubmFtZSxhZGRyZXNzOmcucG9pc1tmXS5hZGRyZXNzfSl9YS5zdWNjZXNzKHttYXJrZXJzOmgscG9pc0RhdGE6Zy5wb2lzfSl9fWVsc2UgYS5mYWlsKHtlcnJDb2RlOmcuZGF0YS5pbmZvY29kZSxlcnJNc2c6Zy5kYXRhLmluZm99KX0sZmFpbDpmdW5jdGlvbihnKXthLmZhaWwoe2VyckNvZGU6XCIwXCIsZXJyTXNnOmcuZXJyTXNnfHxcIlwifSl9fSl9dmFyIGM9dGhpcyxkPWMucmVxdWVzdENvbmZpZzthLmxvY2F0aW9uP2IoYS5sb2NhdGlvbik6Yy5nZXRXeExvY2F0aW9uKGEsZnVuY3Rpb24oZSl7YihlKX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRTdGF0aWNtYXA9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXtjLnB1c2goXCJsb2NhdGlvbj1cIitlKTthLnpvb20mJmMucHVzaChcInpvb209XCIrYS56b29tKTthLnNpemUmJmMucHVzaChcInNpemU9XCIrYS5zaXplKTthLnNjYWxlJiZjLnB1c2goXCJzY2FsZT1cIithLnNjYWxlKTthLm1hcmtlcnMmJmMucHVzaChcIm1hcmtlcnM9XCIrYS5tYXJrZXJzKTthLmxhYmVscyYmYy5wdXNoKFwibGFiZWxzPVwiK2EubGFiZWxzKTthLnBhdGhzJiZjLnB1c2goXCJwYXRocz1cIithLnBhdGhzKTthLnRyYWZmaWMmJmMucHVzaChcInRyYWZmaWM9XCIrYS50cmFmZmljKTtlPVwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL3N0YXRpY21hcD9cIitjLmpvaW4oXCImXCIpO2Euc3VjY2Vzcyh7dXJsOmV9KX12YXIgYz1bXTtjLnB1c2goXCJrZXk9XCIrdGhpcy5rZXkpO3ZhciBkPXRoaXMucmVxdWVzdENvbmZpZztjLnB1c2goXCJzPVwiK2Qucyk7Yy5wdXNoKFwicGxhdGZvcm09XCIrZC5wbGF0Zm9ybSk7XHJcbmMucHVzaChcImFwcG5hbWU9XCIrZC5hcHBuYW1lKTtjLnB1c2goXCJzZGt2ZXJzaW9uPVwiK2Quc2RrdmVyc2lvbik7Yy5wdXNoKFwibG9ndmVyc2lvbj1cIitkLmxvZ3ZlcnNpb24pO2EubG9jYXRpb24/YihhLmxvY2F0aW9uKTp0aGlzLmdldFd4TG9jYXRpb24oYSxmdW5jdGlvbihlKXtiKGUpfSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldElucHV0dGlwcz1mdW5jdGlvbihhKXt2YXIgYj1PYmplY3QuYXNzaWduKHt9LHRoaXMucmVxdWVzdENvbmZpZyk7YS5sb2NhdGlvbiYmKGIubG9jYXRpb249YS5sb2NhdGlvbik7YS5rZXl3b3JkcyYmKGIua2V5d29yZHM9YS5rZXl3b3Jkcyk7YS50eXBlJiYoYi50eXBlPWEudHlwZSk7YS5jaXR5JiYoYi5jaXR5PWEuY2l0eSk7YS5jaXR5bGltaXQmJihiLmNpdHlsaW1pdD1hLmNpdHlsaW1pdCk7d3gucmVxdWVzdCh7dXJsOlwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2Fzc2lzdGFudC9pbnB1dHRpcHNcIixkYXRhOmIsbWV0aG9kOlwiR0VUXCIsaGVhZGVyOntcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxzdWNjZXNzOmZ1bmN0aW9uKGMpe2MmJmMuZGF0YSYmYy5kYXRhLnRpcHMmJmEuc3VjY2Vzcyh7dGlwczpjLmRhdGEudGlwc30pfSxmYWlsOmZ1bmN0aW9uKGMpe2EuZmFpbCh7ZXJyQ29kZTpcIjBcIixlcnJNc2c6Yy5lcnJNc2d8fFxyXG5cIlwifSl9fSl9O1xyXG5BTWFwV1gucHJvdG90eXBlLmdldERyaXZpbmdSb3V0ZT1mdW5jdGlvbihhKXt2YXIgYj1PYmplY3QuYXNzaWduKHt9LHRoaXMucmVxdWVzdENvbmZpZyk7YS5vcmlnaW4mJihiLm9yaWdpbj1hLm9yaWdpbik7YS5kZXN0aW5hdGlvbiYmKGIuZGVzdGluYXRpb249YS5kZXN0aW5hdGlvbik7YS5zdHJhdGVneSYmKGIuc3RyYXRlZ3k9YS5zdHJhdGVneSk7YS53YXlwb2ludHMmJihiLndheXBvaW50cz1hLndheXBvaW50cyk7YS5hdm9pZHBvbHlnb25zJiYoYi5hdm9pZHBvbHlnb25zPWEuYXZvaWRwb2x5Z29ucyk7YS5hdm9pZHJvYWQmJihiLmF2b2lkcm9hZD1hLmF2b2lkcm9hZCk7d3gucmVxdWVzdCh7dXJsOlwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2RpcmVjdGlvbi9kcml2aW5nXCIsZGF0YTpiLG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihjKXtjJiZjLmRhdGEmJmMuZGF0YS5yb3V0ZSYmYS5zdWNjZXNzKHtwYXRoczpjLmRhdGEucm91dGUucGF0aHMsXHJcbnRheGlfY29zdDpjLmRhdGEucm91dGUudGF4aV9jb3N0fHxcIlwifSl9LGZhaWw6ZnVuY3Rpb24oYyl7YS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzpjLmVyck1zZ3x8XCJcIn0pfX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRXYWxraW5nUm91dGU9ZnVuY3Rpb24oYSl7dmFyIGI9T2JqZWN0LmFzc2lnbih7fSx0aGlzLnJlcXVlc3RDb25maWcpO2Eub3JpZ2luJiYoYi5vcmlnaW49YS5vcmlnaW4pO2EuZGVzdGluYXRpb24mJihiLmRlc3RpbmF0aW9uPWEuZGVzdGluYXRpb24pO3d4LnJlcXVlc3Qoe3VybDpcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9kaXJlY3Rpb24vd2Fsa2luZ1wiLGRhdGE6YixtZXRob2Q6XCJHRVRcIixoZWFkZXI6e1wiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LHN1Y2Nlc3M6ZnVuY3Rpb24oYyl7YyYmYy5kYXRhJiZjLmRhdGEucm91dGUmJmEuc3VjY2Vzcyh7cGF0aHM6Yy5kYXRhLnJvdXRlLnBhdGhzfSl9LGZhaWw6ZnVuY3Rpb24oYyl7YS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzpjLmVyck1zZ3x8XCJcIn0pfX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRUcmFuc2l0Um91dGU9ZnVuY3Rpb24oYSl7dmFyIGI9T2JqZWN0LmFzc2lnbih7fSx0aGlzLnJlcXVlc3RDb25maWcpO2Eub3JpZ2luJiYoYi5vcmlnaW49YS5vcmlnaW4pO2EuZGVzdGluYXRpb24mJihiLmRlc3RpbmF0aW9uPWEuZGVzdGluYXRpb24pO2Euc3RyYXRlZ3kmJihiLnN0cmF0ZWd5PWEuc3RyYXRlZ3kpO2EuY2l0eSYmKGIuY2l0eT1hLmNpdHkpO2EuY2l0eWQmJihiLmNpdHlkPWEuY2l0eWQpO3d4LnJlcXVlc3Qoe3VybDpcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9kaXJlY3Rpb24vdHJhbnNpdC9pbnRlZ3JhdGVkXCIsZGF0YTpiLG1ldGhvZDpcIkdFVFwiLGhlYWRlcjp7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sc3VjY2VzczpmdW5jdGlvbihjKXtjJiZjLmRhdGEmJmMuZGF0YS5yb3V0ZSYmKGM9Yy5kYXRhLnJvdXRlLGEuc3VjY2Vzcyh7ZGlzdGFuY2U6Yy5kaXN0YW5jZXx8XCJcIix0YXhpX2Nvc3Q6Yy50YXhpX2Nvc3R8fFxyXG5cIlwiLHRyYW5zaXRzOmMudHJhbnNpdHN9KSl9LGZhaWw6ZnVuY3Rpb24oYyl7YS5mYWlsKHtlcnJDb2RlOlwiMFwiLGVyck1zZzpjLmVyck1zZ3x8XCJcIn0pfX0pfTtcclxuQU1hcFdYLnByb3RvdHlwZS5nZXRSaWRpbmdSb3V0ZT1mdW5jdGlvbihhKXt2YXIgYj1PYmplY3QuYXNzaWduKHt9LHRoaXMucmVxdWVzdENvbmZpZyk7YS5vcmlnaW4mJihiLm9yaWdpbj1hLm9yaWdpbik7YS5kZXN0aW5hdGlvbiYmKGIuZGVzdGluYXRpb249YS5kZXN0aW5hdGlvbik7d3gucmVxdWVzdCh7dXJsOlwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2RpcmVjdGlvbi9yaWRpbmdcIixkYXRhOmIsbWV0aG9kOlwiR0VUXCIsaGVhZGVyOntcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxzdWNjZXNzOmZ1bmN0aW9uKGMpe2MmJmMuZGF0YSYmYy5kYXRhLnJvdXRlJiZhLnN1Y2Nlc3Moe3BhdGhzOmMuZGF0YS5yb3V0ZS5wYXRoc30pfSxmYWlsOmZ1bmN0aW9uKGMpe2EuZmFpbCh7ZXJyQ29kZTpcIjBcIixlcnJNc2c6Yy5lcnJNc2d8fFwiXCJ9KX19KX07bW9kdWxlLmV4cG9ydHMuQU1hcFdYPUFNYXBXWDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 79 */
/*!**************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/banStar.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banStar.vue?vue&type=template&id=21df8200& */ 80);\n/* harmony import */ var _banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banStar.vue?vue&type=script&lang=js& */ 82);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"f68350b8\",\n  false,\n  _banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/banxing/banStar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDa047QUFDbE4sZ0JBQWdCLDBOQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6Ijc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9iYW5TdGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMWRmODIwMCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JhblN0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9iYW5TdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZjY4MzUwYjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9iYW54aW5nL2JhblN0YXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///79\n");

/***/ }),
/* 80 */
/*!*********************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/banStar.vue?vue&type=template&id=21df8200& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./banStar.vue?vue&type=template&id=21df8200& */ 81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_template_id_21df8200___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 81 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/banStar.vue?vue&type=template&id=21df8200& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["row"] },
    _vm._l(10, function (item, index) {
      return _c(
        "view",
        {
          key: index,
          on: {
            click: function ($event) {
              _vm.clickStars(index + 1)
            },
          },
        },
        [
          index % 2 == 0
            ? _c("u-image", {
                style: {
                  width: _vm.size / 2 + "rpx",
                  height: _vm.size + "rpx",
                },
                attrs: {
                  mode: "aspectFit",
                  src:
                    index < _vm.valueSync ? _vm.star_fill_l : _vm.star_empty_l,
                },
              })
            : _c("u-image", {
                style: {
                  width: _vm.size / 2 + "rpx",
                  height: _vm.size + "rpx",
                  "margin-right": 6 + "px",
                },
                attrs: {
                  mode: "aspectFit",
                  src:
                    index < _vm.valueSync ? _vm.star_fill_r : _vm.star_empty_r,
                },
              }),
        ],
        1
      )
    }),
    0
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 82 */
/*!***************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/banStar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./banStar.vue?vue&type=script&lang=js& */ 83);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_banStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiI4Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYW5TdGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JhblN0YXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///82\n");

/***/ }),
/* 83 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/banStar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'rate',\n  props: {\n    star_fill_l: {\n      //亮星星\n      type: [String],\n      default: __webpack_require__(/*! ./static/xingshil.png */ 84)\n    },\n    star_fill_r: {\n      //亮星星\n      type: [String],\n      default: __webpack_require__(/*! ./static/xingshir.png */ 85)\n    },\n    star_empty_l: {\n      //暗星星\n      type: [String],\n      default: __webpack_require__(/*! ./static/star-xu-l.png */ 86)\n    },\n    star_empty_r: {\n      //暗星星\n      type: [String],\n      default: __webpack_require__(/*! ./static/star-xu-r.png */ 87)\n    },\n    size: {\n      // 星星的大小\n      type: [Number, String],\n      default: 48\n    },\n    value: {\n      // 当前评分\n      type: [Number, String],\n      default: 5\n    },\n    tagstr: {\n      type: String,\n      default: ''\n    },\n    max: {\n      // 最大评分\n      type: [Number, String],\n      default: 5\n    },\n    disabled: {\n      // 是否可点击\n      type: [Boolean, String],\n      default: false\n    },\n    margin: {\n      // 星星的间距\n      type: [Number, String],\n      default: '0 5'\n    }\n  },\n  data: function data() {\n    return {\n      valueSync: 0\n    };\n  },\n  created: function created() {\n    this.valueSync = parseInt(this.value / 0.5);\n    __f__(\"log\", this.valueSync, \" at components/banxing/banStar.vue:72\");\n  },\n  methods: {\n    clickStars: function clickStars(i) {\n      if (this.disabled) {\n        __f__(\"log\", 11111111111111111, \" at components/banxing/banStar.vue:78\");\n        return;\n      }\n      var that = this;\n      that.valueSync = i;\n      that.$emit(\"change\", {\n        value: that.valueSync * 0.5,\n        tagstr: that.tagstr\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9iYW54aW5nL2JhblN0YXIudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsInN0YXJfZmlsbF9sIiwidHlwZSIsImRlZmF1bHQiLCJzdGFyX2ZpbGxfciIsInN0YXJfZW1wdHlfbCIsInN0YXJfZW1wdHlfciIsInNpemUiLCJ2YWx1ZSIsInRhZ3N0ciIsIm1heCIsImRpc2FibGVkIiwibWFyZ2luIiwiZGF0YSIsInZhbHVlU3luYyIsImNyZWF0ZWQiLCJtZXRob2RzIiwiY2xpY2tTdGFycyIsInRoYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFXQTtFQUNBQTtFQUNBQztJQUNBQztNQUNBO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBRjtNQUNBQztJQUNBO0lBQ0FFO01BQ0E7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQTtNQUNBTDtNQUNBQztJQUNBO0lBQ0FLO01BQ0E7TUFDQU47TUFDQUM7SUFDQTtJQUNBTTtNQUNBUDtNQUNBQztJQUNBO0lBQ0FPO01BQ0E7TUFDQVI7TUFDQUM7SUFDQTtJQUNBUTtNQUNBO01BQ0FUO01BQ0FDO0lBQ0E7SUFDQVM7TUFDQTtNQUNBVjtNQUNBQztJQUNBO0VBQ0E7RUFDQVU7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFFQTtRQUNBO1FBRUE7TUFDQTtNQUNBO01BQ0FDO01BQ0FBO1FBQ0FWO1FBQ0FDO01BQ0E7SUFDQTtFQUVBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI4My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInJvd1wiPlxyXG5cdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gMTBcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJjbGlja1N0YXJzKGluZGV4KzEpXCI+XHJcblx0XHRcdDxpbWFnZSBtb2RlPVwiYXNwZWN0Rml0XCIgOnN0eWxlPVwieyd3aWR0aCc6IHNpemUvMiArICdycHgnLCdoZWlnaHQnOnNpemUrJ3JweCd9XCIgdi1pZj1cImluZGV4JTIgPT0gMFwiIDpzcmM9XCIgaW5kZXggPCB2YWx1ZVN5bmMgPyBzdGFyX2ZpbGxfbCA6IHN0YXJfZW1wdHlfbFwiLz48L2ltYWdlPlxyXG5cdFx0XHQ8aW1hZ2UgIG1vZGU9XCJhc3BlY3RGaXRcIiA6c3R5bGU9XCJ7J3dpZHRoJzogc2l6ZS8yICsgJ3JweCcsJ2hlaWdodCc6c2l6ZSsncnB4JywnbWFyZ2luLXJpZ2h0Jzo2KydweCd9XCIgdi1lbHNlIDpzcmM9XCIgaW5kZXggPCB2YWx1ZVN5bmMgPyBzdGFyX2ZpbGxfciA6IHN0YXJfZW1wdHlfclwiLz48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSA8aW1hZ2Ugc3JjPVwic3RhdGljL3N0YXItc2hpLXIucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+IC0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRuYW1lOidyYXRlJyxcclxuXHRcdHByb3BzOntcclxuXHRcdFx0c3Rhcl9maWxsX2w6IHtcclxuXHRcdFx0XHQvL+S6ruaYn+aYn1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHJlcXVpcmUoJy4vc3RhdGljL3hpbmdzaGlsLnBuZycpXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJfZmlsbF9yOiB7XHJcblx0XHRcdFx0Ly/kuq7mmJ/mmJ9cclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiByZXF1aXJlKCcuL3N0YXRpYy94aW5nc2hpci5wbmcnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGFyX2VtcHR5X2w6IHtcclxuXHRcdFx0XHQvL+aal+aYn+aYn1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHJlcXVpcmUoJy4vc3RhdGljL3N0YXIteHUtbC5wbmcnKSBcclxuXHRcdFx0fSxcclxuXHRcdFx0c3Rhcl9lbXB0eV9yOiB7XHJcblx0XHRcdFx0Ly/mmpfmmJ/mmJ9cclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiByZXF1aXJlKCcuL3N0YXRpYy9zdGFyLXh1LXIucG5nJykgXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHQvLyDmmJ/mmJ/nmoTlpKflsI9cclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDQ4XHJcblx0XHRcdH0sXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0Ly8g5b2T5YmN6K+E5YiGXHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiA1XHJcblx0XHRcdH0sXHJcblx0XHRcdHRhZ3N0cjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXg6IHtcclxuXHRcdFx0XHQvLyDmnIDlpKfor4TliIZcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDVcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzYWJsZWQ6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKblj6/ngrnlh7tcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXJnaW46IHtcclxuXHRcdFx0XHQvLyDmmJ/mmJ/nmoTpl7Tot51cclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcwIDUnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbHVlU3luYzogMCxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLnZhbHVlU3luYyA9IHBhcnNlSW50KHRoaXMudmFsdWUvMC41KTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy52YWx1ZVN5bmMpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbGlja1N0YXJzKGkpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZygxMTExMTExMTExMTExMTExMSlcclxuXHRcdFx0XHQgIFxyXG5cdFx0XHQgIFx0cmV0dXJuO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0ICB2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0ICB0aGF0LnZhbHVlU3luYyA9IGlcclxuXHRcdFx0ICB0aGF0LiRlbWl0KFwiY2hhbmdlXCIsIHtcclxuXHRcdFx0ICBcdHZhbHVlOiB0aGF0LnZhbHVlU3luYyowLjUsXHJcblx0XHRcdFx0dGFnc3RyOnRoYXQudGFnc3RyXHJcblx0XHRcdCAgfSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///83\n");

/***/ }),
/* 84 */
/*!**********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/static/xingshil.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/banxing/static/xingshil.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL2Jhbnhpbmcvc3RhdGljL3hpbmdzaGlsLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///84\n");

/***/ }),
/* 85 */
/*!**********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/static/xingshir.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/banxing/static/xingshir.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL2Jhbnhpbmcvc3RhdGljL3hpbmdzaGlyLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!***********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/static/star-xu-l.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/banxing/static/star-xu-l.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL2Jhbnhpbmcvc3RhdGljL3N0YXIteHUtbC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!***********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/components/banxing/static/star-xu-r.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/components/banxing/static/star-xu-r.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL2Jhbnhpbmcvc3RhdGljL3N0YXIteHUtci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///87\n");

/***/ }),
/* 88 */
/*!******************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuidan.vue?vue&type=template&id=353ff3cc& */ 89);\n/* harmony import */ var _cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuidan.vue?vue&type=script&lang=js& */ 91);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./cuidan.vue?vue&type=style&index=0&lang=css& */ 93).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./cuidan.vue?vue&type=style&index=0&lang=css& */ 93).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"cb03182c\",\n  false,\n  _cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"package-mine/components/cuidan.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVEQUErQztBQUNuRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdURBQStDO0FBQ3hHOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY3VpZGFuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTNmZjNjYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2N1aWRhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2N1aWRhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jdWlkYW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2N1aWRhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiY2IwMzE4MmNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFja2FnZS1taW5lL2NvbXBvbmVudHMvY3VpZGFuLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///88\n");

/***/ }),
/* 89 */
/*!*************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=template&id=353ff3cc& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cuidan.vue?vue&type=template&id=353ff3cc& */ 90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_template_id_353ff3cc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 90 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=template&id=353ff3cc& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["uni-mask-nvue"],
      staticStyle: { alignItems: "center", justifyContent: "center" },
    },
    [
      _c("view", { staticClass: ["white_view", "column"] }, [
        _c(
          "view",
          {
            staticClass: ["row"],
            staticStyle: {
              marginLeft: "35px",
              width: "calc(100% - 35px)",
              height: "40px",
              alignItems: "center",
            },
          },
          [
            _c("view", { staticStyle: { textAlign: "center", flex: "1" } }, [
              _c(
                "u-text",
                {
                  staticStyle: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "100%",
                    textAlign: "center",
                  },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.i18n.order.cuidan))]
              ),
            ]),
            _c("u-image", {
              staticStyle: {
                width: "20px",
                height: "20px",
                marginRight: "15px",
              },
              attrs: { src: _vm.closeUrl, mode: "aspectFit" },
              on: {
                click: function ($event) {
                  _vm.doClose()
                },
              },
            }),
          ],
          1
        ),
        _c(
          "view",
          { staticClass: ["text_back_view"] },
          [
            _c("u-textarea", {
              staticClass: ["text_view"],
              attrs: { value: _vm.neirong, focus: "true" },
              on: { input: _vm.input },
            }),
          ],
          1
        ),
        _c("view", [
          _c(
            "u-text",
            {
              staticClass: ["bottom_button_cuidan"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: {
                click: function ($event) {
                  _vm.doSubmit()
                },
              },
            },
            [_vm._v(_vm._s(_vm.i18n.mine.submit))]
          ),
        ]),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 91 */
/*!*******************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cuidan.vue?vue&type=script&lang=js& */ 92);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQixpbEJBQUcsRUFBQyIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jdWlkYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3VpZGFuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///91\n");

/***/ }),
/* 92 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  computed: {\n    i18n: function i18n() {\n      return getApp().globalData.$t('index');\n    }\n  },\n  data: function data() {\n    return {\n      neirong: '',\n      closeUrl: ''\n    };\n  },\n  created: function created() {\n    this.closeUrl = getApp().globalData.weburl + 'wy-close.png';\n  },\n  methods: {\n    doClose: function doClose() {\n      this.$emit('cuidanle', '');\n    },\n    input: function input(e) {\n      this.neirong = e.detail.value;\n    },\n    doSubmit: function doSubmit() {\n      if (this.neirong.length > 0) {\n        this.$emit('cuidanle', this.neirong);\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFja2FnZS1taW5lL2NvbXBvbmVudHMvY3VpZGFuLnZ1ZSJdLCJuYW1lcyI6WyJjb21wdXRlZCIsImkxOG4iLCJkYXRhIiwibmVpcm9uZyIsImNsb3NlVXJsIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJkb0Nsb3NlIiwiaW5wdXQiLCJkb1N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFxQkE7RUFDQUE7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1tYXNrLW52dWVcIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIndoaXRlX3ZpZXcgY29sdW1uXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzVweDt3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7aGVpZ2h0OiA0MHB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtmbGV4OiAxO1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7d2lkdGg6IDEwMCU7dGV4dC1hbGlnbjogY2VudGVyO1wiPnt7aTE4bi5vcmRlci5jdWlkYW59fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJjbG9zZVVybFwiIG1vZGU9XCJhc3BlY3RGaXRcIiBzdHlsZT1cIndpZHRoOiAyMHB4O2hlaWdodDogMjBweDttYXJnaW4tcmlnaHQ6IDE1cHg7XCIgQGNsaWNrPVwiZG9DbG9zZSgpXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRleHRfYmFja192aWV3XCI+XHJcblx0XHRcdFx0PHRleHRhcmVhIGNsYXNzPVwidGV4dF92aWV3XCIgOnZhbHVlPVwibmVpcm9uZ1wiIGZvY3VzPVwidHJ1ZVwiIEBpbnB1dD1cImlucHV0XCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyA+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJib3R0b21fYnV0dG9uX2N1aWRhblwiIEBjbGljaz1cImRvU3VibWl0KClcIj57e2kxOG4ubWluZS5zdWJtaXR9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRpMThuKCkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRBcHAoKS5nbG9iYWxEYXRhLiR0KCdpbmRleCcpXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuZWlyb25nOicnLFxyXG5cdFx0XHRcdGNsb3NlVXJsOicnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmNsb3NlVXJsID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS53ZWJ1cmwgKyAnd3ktY2xvc2UucG5nJ1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZG9DbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjdWlkYW5sZScsJycpXHJcblx0XHRcdH0sXHJcblx0XHRcdGlucHV0KGUpe1xyXG5cdFx0XHRcdHRoaXMubmVpcm9uZyA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvU3VibWl0KCl7XHJcblx0XHRcdFx0aWYodGhpcy5uZWlyb25nLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY3VpZGFubGUnLHRoaXMubmVpcm9uZylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC53aGl0ZV92aWV3IHtcclxuXHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRoZWlnaHQ6IDIzMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0fVxyXG5cdC50ZXh0X2JhY2tfdmlldyB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzBycHg7XHJcblx0XHR3aWR0aDogNTQwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjc7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0fVxyXG5cdC50ZXh0X3ZpZXcge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0d2lkdGg6IDUyMHJweDtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0LmJvdHRvbV9idXR0b25fY3VpZGFuIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMjBycHg7XHJcblx0XHR3aWR0aDogMzYwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjU3MjU7XHJcblx0XHRjb2xvcjogI0ZGRjtcclxuXHRcdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///92\n");

/***/ }),
/* 93 */
/*!***************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./cuidan.vue?vue&type=style&index=0&lang=css& */ 94);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_cuidan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 94 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/cuidan.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".white_view": {
    "": {
      "width": [
        "600rpx",
        0,
        0,
        0
      ],
      "height": [
        "230",
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        0
      ],
      "borderRadius": [
        "16",
        0,
        0,
        0
      ]
    }
  },
  ".text_back_view": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        1
      ],
      "width": [
        "540rpx",
        0,
        0,
        1
      ],
      "height": [
        "110",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#F5F6F7",
        0,
        0,
        1
      ],
      "borderRadius": [
        "8",
        0,
        0,
        1
      ]
    }
  },
  ".text_view": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        2
      ],
      "marginTop": [
        "5",
        0,
        0,
        2
      ],
      "width": [
        "520rpx",
        0,
        0,
        2
      ],
      "height": [
        "100",
        0,
        0,
        2
      ],
      "fontSize": [
        "14",
        0,
        0,
        2
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        2
      ]
    }
  },
  ".bottom_button_cuidan": {
    "": {
      "marginLeft": [
        "120rpx",
        0,
        0,
        3
      ],
      "width": [
        "360rpx",
        0,
        0,
        3
      ],
      "height": [
        "40",
        0,
        0,
        3
      ],
      "borderRadius": [
        "8",
        0,
        0,
        3
      ],
      "lineHeight": [
        "40",
        0,
        0,
        3
      ],
      "fontSize": [
        "14",
        0,
        0,
        3
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "backgroundColor": [
        "#FF5725",
        0,
        0,
        3
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        3
      ],
      "marginTop": [
        "15",
        0,
        0,
        3
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */
/*!***************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/main.js?{"page":"package-mine%2Fpages%2Forder%2Forder-map-detaile"} ***!
  \***************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _package_mine_pages_order_order_map_detaile_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package-mine/pages/order/order-map-detaile.nvue?mpType=page */ 98);\n\n        \n        \n        \n        \n        _package_mine_pages_order_order_map_detaile_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _package_mine_pages_order_order_map_detaile_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'package-mine/pages/order/order-map-detaile'\n        _package_mine_pages_order_order_map_detaile_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_package_mine_pages_order_order_map_detaile_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBdUY7QUFDdkYsUUFBUSxvR0FBRztBQUNYLFFBQVEsb0dBQUc7QUFDWCxRQUFRLG9HQUFHO0FBQ1gsZ0JBQWdCLG9HQUFHIiwiZmlsZSI6Ijk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFja2FnZS1taW5lL3BhZ2VzL29yZGVyL29yZGVyLW1hcC1kZXRhaWxlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhY2thZ2UtbWluZS9wYWdlcy9vcmRlci9vcmRlci1tYXAtZGV0YWlsZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///97\n");

/***/ }),
/* 98 */
/*!*******************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-map-detaile.nvue?vue&type=template&id=5c483d46&mpType=page */ 99);\n/* harmony import */ var _order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-map-detaile.nvue?vue&type=script&lang=js&mpType=page */ 101);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./order-map-detaile.nvue?vue&type=style&index=0&lang=css&mpType=page */ 111).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./order-map-detaile.nvue?vue&type=style&index=0&lang=css&mpType=page */ 111).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6c897a66\",\n  false,\n  _order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"package-mine/pages/order/order-map-detaile.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDaUY7QUFDTDtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtFQUFzRTtBQUMxSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0VBQXNFO0FBQy9IOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLG1HQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vb3JkZXItbWFwLWRldGFpbGUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzQ4M2Q0NiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb3JkZXItbWFwLWRldGFpbGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlci1tYXAtZGV0YWlsZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9vcmRlci1tYXAtZGV0YWlsZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vb3JkZXItbWFwLWRldGFpbGUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZjODk3YTY2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhY2thZ2UtbWluZS9wYWdlcy9vcmRlci9vcmRlci1tYXAtZGV0YWlsZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=template&id=5c483d46&mpType=page ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./order-map-detaile.nvue?vue&type=template&id=5c483d46&mpType=page */ 100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_template_id_5c483d46_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 100 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=template&id=5c483d46&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _vm.orderMsg
        ? _c(
            "view",
            {
              staticClass: ["content", "page"],
              style: "height:" + _vm.windowHeight + "px;",
            },
            [
              _vm.orderMsg.status == 3 &&
              !(_vm.orderMsg.shipping_type != 1 || _vm.top_type_id == 3)
                ? _c(
                    "view",
                    {
                      staticStyle: { width: "750rpx" },
                      style: "height:" + _vm.windowHeight + "px;",
                    },
                    [
                      _c(
                        "map",
                        {
                          staticClass: ["mapView", "row"],
                          style: "height:" + _vm.windowHeight * 0.675 + "px;",
                          attrs: {
                            id: "orderMap",
                            latitude: _vm.latitude,
                            longitude: _vm.longitude,
                            scale: "16",
                            markers: _vm.markers,
                            polyline: _vm.polyline,
                            showLocation: false,
                          },
                        },
                        [
                          _c("cover-image", {
                            staticClass: ["returnImage"],
                            attrs: {
                              src: "../../static/images/order/map-back.png",
                              mode: "",
                            },
                            on: { click: _vm.doBack },
                          }),
                          _c("cover-image", {
                            staticStyle: {
                              position: "absolute",
                              right: "12px",
                              marginTop: "50px",
                              width: "30px",
                              height: "30px",
                            },
                            attrs: {
                              src: "../../static/images/order/order-map-shuaxin.png",
                              mode: "",
                            },
                            on: {
                              click: function ($event) {
                                _vm.requestOrderMessage()
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      _vm.orderMsg
                        ? _c(
                            "view",
                            {
                              ref: "detaileView",
                              staticClass: ["detaileView", "column"],
                              style: "top:" + _vm.viewTop + "px;",
                              attrs: { id: "detaileView" },
                              on: {
                                touchmove: _vm.touchmove,
                                touchstart: _vm.handletouchstart,
                              },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: ["column"],
                                  staticStyle: {
                                    width: "702rpx",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                  },
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["row"],
                                      staticStyle: {
                                        width: "654rpx",
                                        marginLeft: "24rpx",
                                        height: "80px",
                                        borderBottom: "1px solid #f0f0f0",
                                      },
                                    },
                                    [
                                      _c("u-image", {
                                        staticStyle: {
                                          width: "45px",
                                          height: "45px",
                                          borderRadius: "22.5px",
                                          marginTop: "17.5px",
                                          backgroundColor: "#F5f6f7",
                                        },
                                        attrs: {
                                          src: _vm.orderMsg.rider.avatar,
                                          mode: "",
                                        },
                                      }),
                                      _c(
                                        "view",
                                        {
                                          staticClass: ["column"],
                                          staticStyle: {
                                            marginTop: "17.5px",
                                            marginLeft: "10px",
                                            flex: "1",
                                            height: "45px",
                                          },
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["label-30H"],
                                              staticStyle: {
                                                textAlign: "left",
                                                color: "#323232",
                                                fontSize: "16px",
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.orderMsg.rider
                                                    .user_nickname
                                                )
                                              ),
                                            ]
                                          ),
                                          _c(
                                            "view",
                                            { staticClass: ["row"] },
                                            [
                                              _c("starV", {
                                                staticStyle: {
                                                  width: "200rpx",
                                                  flexDirection: "row",
                                                },
                                                attrs: {
                                                  size: "30",
                                                  disabled: "true",
                                                  value:
                                                    _vm.orderMsg.rider.star,
                                                },
                                                on: { change: _vm.onChange },
                                              }),
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["label-30H"],
                                                  staticStyle: {
                                                    color: "#FF5725",
                                                    height: "17px",
                                                    lineHeight: "17px",
                                                    marginLeft: "5px",
                                                    marginTop: "0",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.orderMsg.rider.star +
                                                        _vm.i18n.toher.fen
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      _c("u-image", {
                                        staticStyle: {
                                          marginTop: "29px",
                                          width: "22px",
                                          height: "22px",
                                        },
                                        attrs: {
                                          src: "../../static/images/order/phoneCall.png",
                                          mode: "aspectFit",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.call()
                                          },
                                        },
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            marginTop: "29px",
                                            width: "30px",
                                            height: "22px",
                                            lineHeight: "22px",
                                            fontSize: "14px",
                                            color: "#323232",
                                            marginRight: "5px",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                          on: {
                                            click: function ($event) {
                                              _vm.call()
                                            },
                                          },
                                        },
                                        [_vm._v(_vm._s(_vm.i18n.yilou.lianxi))]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm.orderMsg.code.length == 4
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            width: "702rpx",
                                            height: "60px",
                                          },
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              staticClass: ["row"],
                                              staticStyle: {
                                                width: "351rpx",
                                                height: "60px",
                                                borderRight:
                                                  "1px solid #f0f0f0",
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["label-30H"],
                                                  staticStyle: {
                                                    color: "#323232",
                                                    flex: "1",
                                                    marginTop: "16px",
                                                    marginLeft: "10px",
                                                    textAlign: "left",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.i18n.yilou.qujianzhao
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._l(
                                                _vm.orderMsg.thumbs,
                                                function (item, index) {
                                                  return _c("u-image", {
                                                    key: index,
                                                    staticStyle: {
                                                      marginRight: "8px",
                                                      width: "21px",
                                                      height: "46px",
                                                      marginTop: "7px",
                                                    },
                                                    attrs: {
                                                      src: item,
                                                      mode: "aspectFill",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        _vm.showBigImage(index)
                                                      },
                                                    },
                                                  })
                                                }
                                              ),
                                            ],
                                            2
                                          ),
                                          _c(
                                            "view",
                                            {
                                              staticClass: ["row"],
                                              staticStyle: {
                                                width: "351rpx",
                                                height: "60px",
                                                alignItems: "center",
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["label-30H"],
                                                  staticStyle: {
                                                    color: "#323232",
                                                    flex: "1",
                                                    marginLeft: "10px",
                                                    textAlign: "left",
                                                    marginTop: "0",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.i18n.yilou.wanchengma
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: [
                                                    "item-title-label",
                                                  ],
                                                  staticStyle: {
                                                    marginRight: "10px",
                                                    marginTop: "0px",
                                                    textAlign: "right",
                                                    width: "60px",
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                    color: "black",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.orderMsg.code)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]
                              ),
                              _vm.top_type_id != 2
                                ? _c(
                                    "view",
                                    { staticClass: ["store_lianxi"] },
                                    _vm._l(
                                      _vm.lianxiList,
                                      function (item, index) {
                                        return _c(
                                          "view",
                                          {
                                            key: index,
                                            staticClass: ["column"],
                                            staticStyle: {
                                              alignItems: "center",
                                            },
                                            on: {
                                              click: function ($event) {
                                                _vm.lianxi(item.id)
                                              },
                                            },
                                          },
                                          [
                                            _c("u-image", {
                                              staticStyle: {
                                                width: "28px",
                                                height: "28px",
                                              },
                                              attrs: {
                                                src: item.image,
                                                mode: "",
                                              },
                                            }),
                                            _c("view", [
                                              _c(
                                                "u-text",
                                                {
                                                  staticStyle: {
                                                    color: "#FF5725",
                                                    fontSize: "12px",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [_vm._v(_vm._s(item.name))]
                                              ),
                                            ]),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    0
                                  )
                                : _vm._e(),
                              _c(
                                "view",
                                { staticClass: ["store_name"] },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.orderMsg.store.use_name)
                                      ),
                                    ]
                                  ),
                                  _vm.top_type_id != 2
                                    ? _c("u-image", {
                                        staticStyle: {
                                          width: "20px",
                                          height: "20px",
                                          marginLeft: "5px",
                                        },
                                        attrs: {
                                          src: "../../../static/ads-seld-right.png",
                                          mode: "",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["orderxiangxixinxi"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.i18n.order.orderxiangxixinxi)
                                  ),
                                ]
                              ),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.order.orderbianhao)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.orderMsg.order_id))]
                                  ),
                                ]),
                              ]),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.order.dinggoushangjia)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: [
                                        "item-des-label",
                                        "oneline",
                                      ],
                                      staticStyle: { color: "#FF5725" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.orderMsg.store.use_name)
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              _vm.orderMsg.shipping_type == "1"
                                ? _c("view", { staticClass: ["item_view"] }, [
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-title-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.i18n.mine.shouhuodizhi)
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-des-label"],
                                          staticStyle: { height: "auto" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.orderMsg.address.place +
                                                _vm.orderMsg.address.addr
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm.orderMsg.shipping_type == 2
                                ? _c(
                                    "view",
                                    { staticClass: ["item_view"] },
                                    [
                                      _c("view", [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["item-title-label"],
                                            staticStyle: {
                                              width: "auto",
                                              flex: "1",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.i18n.order.tihuomendian
                                              )
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _c("u-image", {
                                        staticStyle: {
                                          width: "15px",
                                          height: "15px",
                                          marginTop: "9px",
                                          marginRight: "3px",
                                        },
                                        attrs: {
                                          src: "../../../static/meishi/shangjia-ads.png",
                                          mode: "",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.doSJMap()
                                          },
                                        },
                                      }),
                                      _c("view", [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["item-des-label"],
                                            staticStyle: {
                                              maxWidth: "60%",
                                              width: "auto",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                            on: {
                                              click: function ($event) {
                                                _vm.doSJMap()
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.orderMsg.pickup.address +
                                                  " " +
                                                  _vm.orderMsg.pickup.doorplate
                                              )
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.mine.xiadanshijian)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.orderMsg.add_time))]
                                  ),
                                ]),
                              ]),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.order.zhifufangshi)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.orderMsg.pay_type_txt))]
                                  ),
                                ]),
                              ]),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.i18n.order.peisongfuwu))]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.orderMsg.shipping_type_txt)
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              _vm.orderMsg.shipping_type == "2"
                                ? _c("view", { staticClass: ["item_view"] }, [
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-title-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.i18n.order.tihuoshijian)
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-des-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.orderMsg.pickup.pickup_date
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm.orderMsg.shipping_type == "2"
                                ? _c("view", { staticClass: ["item_view"] }, [
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-title-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.i18n.order.tihuoren)
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-des-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.userinfo.user_nickname) +
                                              " " +
                                              _vm._s(
                                                _vm.orderMsg.pickup.pickup_phone
                                              )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _c("view", {
                                staticStyle: {
                                  marginLeft: "15px",
                                  width: "calc(100% - 30px)",
                                  height: "1px",
                                  backgroundColor: "#D6DADE",
                                  marginTop: "10px",
                                },
                              }),
                              _vm._l(
                                _vm.orderMsg.cart_info,
                                function (item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: ["item_view"],
                                      staticStyle: {
                                        height: "50px",
                                        marginTop: "18px",
                                      },
                                    },
                                    [
                                      _c("u-image", {
                                        staticStyle: {
                                          width: "50px",
                                          height: "50px",
                                          borderRadius: "4px",
                                          backgroundColor: "#F5f6f7",
                                        },
                                        attrs: {
                                          src: item.product.image,
                                          mode: "aspectFill",
                                        },
                                      }),
                                      _c(
                                        "view",
                                        {
                                          staticClass: ["column"],
                                          staticStyle: {
                                            height: "50px",
                                            flex: "1",
                                            marginLeft: "8px",
                                          },
                                        },
                                        [
                                          _c("view", [
                                            _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  fontSize: "14px",
                                                  width: "100%",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.product.use_name)
                                                ),
                                              ]
                                            ),
                                          ]),
                                          item.more_product_attr &&
                                          item.more_product_attr.length > 0
                                            ? _c(
                                                "u-text",
                                                {
                                                  staticClass: ["row"],
                                                  staticStyle: {
                                                    fontSize: "12px",
                                                    color: "#6F6F6F",
                                                    width: "100%",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                _vm._l(
                                                  item.more_product_attr,
                                                  function (attr, a) {
                                                    return _c(
                                                      "u-text",
                                                      {
                                                        key: a,
                                                        staticStyle: {
                                                          fontSize: "12px",
                                                          color: "#646464",
                                                        },
                                                        appendAsTree: true,
                                                        attrs: {
                                                          append: "tree",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            attr.attr
                                                              .use_attr_name +
                                                              (a <
                                                              item
                                                                .more_product_attr
                                                                .length -
                                                                1
                                                                ? "、"
                                                                : "")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _vm._e(),
                                          item.product_attr_id > 0
                                            ? _c("view", {}, [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      fontSize: "12px",
                                                      color: "#6F6F6F",
                                                      width: "100%",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.attr.use_attr_name
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _c("view", {
                                                staticStyle: {
                                                  fontSize: "12px",
                                                  color: "#6F6F6F",
                                                  width: "100%",
                                                },
                                              }),
                                          _c("view", {}, [
                                            _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  fontSize: "12px",
                                                  color: "#FF5725",
                                                  width: "100%",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  "x" + _vm._s(item.cart_num)
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            alignItems: "center",
                                            fontSize: "10px",
                                            fontWeight: "bold",
                                          },
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticStyle: {
                                                fontSize: "10px",
                                                fontWeight: "bold",
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [_vm._v("¥")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              staticStyle: {
                                                fontSize: "14px",
                                                marginLeft: "3px",
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [_vm._v(_vm._s(item.use_price))]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                }
                              ),
                              _c("view", {
                                staticStyle: {
                                  marginLeft: "15px",
                                  width: "calc(100% - 30px)",
                                  height: "1px",
                                  backgroundColor: "#D6DADE",
                                  marginTop: "18px",
                                },
                              }),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      staticStyle: { color: "#181818" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.i18n.meishi.xiaoji))]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v("¥" + _vm._s(_vm.xiaojiprice))]
                                  ),
                                ]),
                              ]),
                              _vm.orderMsg.shipping_type == "1"
                                ? _c("view", { staticClass: ["item_view"] }, [
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-title-label"],
                                          staticStyle: { color: "#181818" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.i18n.meishi.waisongfei)
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-des-label"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            "¥" +
                                              _vm._s(_vm.orderMsg.freight_price)
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _vm.orderMsg.coupon_price > 0
                                ? _c("view", { staticClass: ["item_view"] }, [
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-title-label"],
                                          staticStyle: { color: "#181818" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.i18n.order.youhuizhekou)
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _c("view", [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["item-des-label"],
                                          staticStyle: { color: "#FF5725" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [
                                          _vm._v(
                                            "-¥" +
                                              _vm._s(_vm.orderMsg.coupon_price)
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ])
                                : _vm._e(),
                              _c("view", {
                                staticStyle: {
                                  marginLeft: "15px",
                                  width: "calc(100% - 30px)",
                                  height: "1px",
                                  backgroundColor: "#D6DADE",
                                  marginTop: "18px",
                                },
                              }),
                              _c("view", { staticClass: ["item_view"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      staticStyle: {
                                        color: "#181818",
                                        fontWeight: "bold",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.i18n.meishi.zongjine +
                                            "(" +
                                            _vm.i18n.meishi.hanshui +
                                            ")"
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        "¥" + _vm._s(_vm.orderMsg.pay_price)
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              _c("view", {
                                staticStyle: { width: "100%", height: "150px" },
                              }),
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm.opacity > 0
                        ? _c(
                            "view",
                            {
                              ref: "topNaviView",
                              staticStyle: {
                                width: "750rpx",
                                backgroundColor: "#FF5725",
                                position: "absolute",
                                top: "0",
                              },
                              style:
                                "height:" +
                                _vm.statusBarHeight +
                                "px;opacity:" +
                                _vm.opacity +
                                "",
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: ["row"],
                                  staticStyle: {
                                    width: "750rpx",
                                    height: "48px",
                                    position: "absolute",
                                    bottom: "0",
                                  },
                                },
                                [
                                  _c("u-image", {
                                    staticStyle: {
                                      marginLeft: "24rpx",
                                      marginTop: "19rpx",
                                      width: "60rpx",
                                      height: "60rpx",
                                    },
                                    attrs: {
                                      src: "../../../static/back-white.png",
                                      mode: "aspectFit",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.doBack()
                                      },
                                    },
                                  }),
                                  _c(
                                    "u-text",
                                    {
                                      staticStyle: {
                                        marginLeft: "166rpx",
                                        height: "48px",
                                        fontSize: "18px",
                                        lineHeight: "48px",
                                        color: "#FFFFFF",
                                        fontWeight: "bold",
                                        width: "250rpx",
                                        textAlign: "center",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v("订单详情")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm.orderMsg.show_reminder == 1
                        ? _c(
                            "view",
                            {
                              staticClass: ["bottom_view"],
                              staticStyle: { height: "150px" },
                            },
                            [
                              _c(
                                "view",
                                { staticClass: ["bottom_contentView"] },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["row"],
                                      staticStyle: {
                                        marginLeft: "30rpx",
                                        width: "690rpx",
                                        minHeight: "50px",
                                      },
                                    },
                                    [
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "14px",
                                              width: "276rpx",
                                              marginTop: "15px",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [_vm._v(_vm._s(_vm.orderMsg.des))]
                                        ),
                                      ]),
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                              width: "414rpx",
                                              textAlign: "right",
                                              marginTop: "15px",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.orderMsg.service_time)
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      on: {
                                        click: function ($event) {
                                          _vm.doCuidan()
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["bottom_button"],
                                          staticStyle: {
                                            border: "1px solid #FF5725",
                                            color: "#FF5725",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(_vm.i18n.order.cuidan))]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          )
                        : _c(
                            "view",
                            {
                              staticClass: ["bottom_view"],
                              staticStyle: { height: "70px" },
                            },
                            [
                              _c(
                                "view",
                                { staticClass: ["bottom_contentView"] },
                                [
                                  _vm.orderMsg.status == 4 ||
                                  _vm.orderMsg.status == 5
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            marginLeft: "15px",
                                            width: "calc(100% - 30px)",
                                            minHeight: "50px",
                                          },
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              staticStyle: {
                                                fontSize: "14px",
                                                flex: "1",
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticStyle: {
                                                    marginTop: "15px",
                                                    fontSize: "14px",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.orderMsg.des)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _c("view", {}, [
                                            _vm.orderMsg.status == 4
                                              ? _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      marginTop: "15px",
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      marginRight: "15px",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.orderMsg
                                                          .service_time
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]),
                                        ]
                                      )
                                    : _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            marginLeft: "15px",
                                            width: "calc(100% - 30px)",
                                            minHeight: "50px",
                                            alignItems: "center",
                                          },
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              staticStyle: {
                                                fontSize: "14px",
                                                flex: "1",
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticStyle: {
                                                    fontSize: "14px",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.orderMsg.des)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _c("view", {}, [
                                            _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  fontSize: "14px",
                                                  fontWeight: "bold",
                                                  marginRight: "15px",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.orderMsg.service_time
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                ]
                              ),
                            ]
                          ),
                    ],
                    1
                  )
                : _c(
                    "view",
                    {
                      staticStyle: { width: "750rpx" },
                      style: "height:" + _vm.windowHeight + "px;",
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: ["topView"],
                          style:
                            "height:" + (_vm.statusBarHeight + 120) + "px;",
                        },
                        [
                          _c(
                            "view",
                            {
                              staticStyle: {
                                width: "750rpx",
                                position: "relative",
                              },
                              style:
                                "height:" + (_vm.statusBarHeight + 120) + "px;",
                            },
                            [
                              _c(
                                "swiper",
                                {
                                  staticStyle: { width: "750rpx" },
                                  style:
                                    "height:" +
                                    (_vm.statusBarHeight + 120) +
                                    "px;",
                                  attrs: {
                                    indicatorDots: true,
                                    autoplay: true,
                                    interval: 3000,
                                    duration: 1000,
                                  },
                                },
                                _vm._l(
                                  _vm.orderMsg.store.environment,
                                  function (item, index) {
                                    return _c(
                                      "swiper-item",
                                      {
                                        key: index,
                                        staticStyle: {
                                          width: "750rpx",
                                          height: "100%",
                                        },
                                        attrs: { autoPlay: "true" },
                                      },
                                      [
                                        _c("u-image", {
                                          staticStyle: {
                                            width: "750rpx",
                                            height: "100%",
                                          },
                                          attrs: {
                                            src: item,
                                            mode: "aspectFill",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  }
                                ),
                                1
                              ),
                            ],
                            1
                          ),
                          _c("u-image", {
                            staticStyle: {
                              left: "12px",
                              bottom: "85px",
                              width: "30px",
                              height: "30px",
                              position: "absolute",
                            },
                            attrs: {
                              src: "../../../static/back-yuan.png",
                              mode: "",
                            },
                            on: {
                              click: function ($event) {
                                _vm.doBack()
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      _c(
                        "scroll-view",
                        {
                          staticClass: ["Back-scroll"],
                          style: "height:" + _vm.scrollHeight + "px;",
                          attrs: { scrollY: "true" },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: ["store_name"],
                              on: {
                                click: function ($event) {
                                  _vm.doStore()
                                },
                              },
                            },
                            [
                              _c("u-text", [
                                _vm._v(_vm._s(_vm.orderMsg.store.use_name)),
                              ]),
                              _vm.top_type_id != 2
                                ? _c("u-image", {
                                    staticStyle: {
                                      width: "20px",
                                      height: "20px",
                                      marginLeft: "5px",
                                    },
                                    attrs: {
                                      src: "../../../static/ads-seld-right.png",
                                      mode: "",
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                          _c("view", [
                            _c(
                              "u-text",
                              {
                                staticClass: ["orderxiangxixinxi"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v(_vm._s(_vm.i18n.order.orderxiangxixinxi))]
                            ),
                          ]),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.order.orderbianhao))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.orderMsg.order_id))]
                              ),
                            ]),
                          ]),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.order.dinggoushangjia))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  staticStyle: { color: "#FF5725" },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.orderMsg.store.use_name))]
                              ),
                            ]),
                          ]),
                          _vm.orderMsg.shipping_type == "1"
                            ? _c("view", { staticClass: ["item_view_vue"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.i18n.mine.shouhuodizhi))]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label-vue"],
                                      staticStyle: { height: "auto" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.orderMsg.address.place +
                                            _vm.orderMsg.address.addr
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _vm.orderMsg.shipping_type == 2
                            ? _c(
                                "view",
                                { staticClass: ["item_view_vue"] },
                                [
                                  _c("view", [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["item-title-label"],
                                        staticStyle: {
                                          width: "auto",
                                          flex: "1",
                                        },
                                        appendAsTree: true,
                                        attrs: { append: "tree" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.i18n.order.tihuomendian)
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _c("u-image", {
                                    staticStyle: {
                                      width: "15px",
                                      height: "15px",
                                      marginTop: "9px",
                                      marginRight: "3px",
                                    },
                                    attrs: {
                                      src: "../../../static/meishi/shangjia-ads.png",
                                      mode: "",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.doSJMap()
                                      },
                                    },
                                  }),
                                  _c("view", [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["item-des-label-vue"],
                                        staticStyle: {
                                          maxWidth: "60%",
                                          height: "auto",
                                          width: "auto",
                                        },
                                        appendAsTree: true,
                                        attrs: { append: "tree" },
                                        on: {
                                          click: function ($event) {
                                            _vm.doSJMap()
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.orderMsg.pickup.address +
                                              " " +
                                              _vm.orderMsg.pickup.doorplate
                                          )
                                        ),
                                      ]
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : _vm._e(),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.mine.xiadanshijian))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.orderMsg.add_time))]
                              ),
                            ]),
                          ]),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.order.zhifufangshi))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.orderMsg.pay_type_txt))]
                              ),
                            ]),
                          ]),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.order.peisongfuwu))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.orderMsg.shipping_type_txt))]
                              ),
                            ]),
                          ]),
                          _vm.orderMsg.shipping_type == "2"
                            ? _c("view", { staticClass: ["item_view_vue"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.order.tihuoshijian)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label-vue"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.orderMsg.pickup.pickup_date)
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _vm.orderMsg.shipping_type == "2"
                            ? _c("view", { staticClass: ["item_view_vue"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.i18n.order.tihuoren))]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label-vue"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userinfo.user_nickname +
                                            " " +
                                            _vm.orderMsg.pickup.pickup_phone
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _c("view", {
                            staticStyle: {
                              marginLeft: "30rpx",
                              width: "690rpx",
                              height: "1px",
                              backgroundColor: "#D6DADE",
                              marginTop: "10px",
                            },
                          }),
                          _vm._l(
                            _vm.orderMsg.cart_info,
                            function (item, index) {
                              return _c(
                                "view",
                                {
                                  key: index,
                                  staticClass: ["item_view_vue"],
                                  staticStyle: {
                                    height: "50px",
                                    marginTop: "18px",
                                  },
                                },
                                [
                                  _c("u-image", {
                                    staticStyle: {
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "4px",
                                      backgroundColor: "#F5f6f7",
                                    },
                                    attrs: {
                                      src: item.product.image,
                                      mode: "aspectFill",
                                    },
                                  }),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["column"],
                                      staticStyle: {
                                        height: "50px",
                                        flex: "1",
                                        marginLeft: "8px",
                                      },
                                    },
                                    [
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "14px",
                                              width: "100%",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.product.use_name)
                                            ),
                                          ]
                                        ),
                                      ]),
                                      item.more_product_attr &&
                                      item.more_product_attr.length > 0
                                        ? _c(
                                            "view",
                                            {
                                              staticClass: ["row"],
                                              staticStyle: {
                                                fontSize: "12px",
                                                color: "#6F6F6F",
                                                width: "100%",
                                              },
                                            },
                                            _vm._l(
                                              item.more_product_attr,
                                              function (attr, a) {
                                                return _c(
                                                  "u-text",
                                                  {
                                                    key: a,
                                                    staticStyle: {
                                                      fontSize: "12px",
                                                      color: "#646464",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        attr.attr
                                                          .use_attr_name +
                                                          (a <
                                                          item.more_product_attr
                                                            .length -
                                                            1
                                                            ? "、"
                                                            : "")
                                                      )
                                                    ),
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        : _vm._e(),
                                      item.product_attr_id > 0
                                        ? _c("view", {}, [
                                            _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  fontSize: "12px",
                                                  color: "#6F6F6F",
                                                  width: "100%",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    item.attr.use_attr_name
                                                  )
                                                ),
                                              ]
                                            ),
                                          ])
                                        : _c("view", {
                                            staticStyle: {
                                              fontSize: "12px",
                                              color: "#6F6F6F",
                                              width: "100%",
                                            },
                                          }),
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "12px",
                                              color: "#FF5725",
                                              width: "100%",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [_vm._v("x" + _vm._s(item.cart_num))]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["row"],
                                      staticStyle: { alignItems: "center" },
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            fontSize: "10px",
                                            fontWeight: "bold",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v("¥")]
                                      ),
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            fontSize: "14px",
                                            marginLeft: "3px",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(item.use_price))]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            }
                          ),
                          _c("view", {
                            staticStyle: {
                              marginLeft: "30rpx",
                              width: "690rpx",
                              height: "1px",
                              backgroundColor: "#D6DADE",
                              marginTop: "18px",
                            },
                          }),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  staticStyle: { color: "#181818" },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.i18n.meishi.xiaoji))]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("¥" + _vm._s(_vm.xiaojiprice))]
                              ),
                            ]),
                          ]),
                          _vm.orderMsg.shipping_type == "1"
                            ? _c("view", { staticClass: ["item_view_vue"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      staticStyle: { color: "#181818" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.i18n.meishi.waisongfei))]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label-vue"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        "¥" + _vm._s(_vm.orderMsg.freight_price)
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _vm.orderMsg.coupon_price > 0
                            ? _c("view", { staticClass: ["item_view_vue"] }, [
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-title-label"],
                                      staticStyle: { color: "#181818" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.i18n.order.youhuizhekou)
                                      ),
                                    ]
                                  ),
                                ]),
                                _c("view", [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["item-des-label-vue"],
                                      staticStyle: { color: "#FF5725" },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        "-¥" + _vm._s(_vm.orderMsg.coupon_price)
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _c("view", {
                            staticStyle: {
                              marginLeft: "30rpx",
                              width: "690rpx",
                              height: "1px",
                              backgroundColor: "#D6DADE",
                              marginTop: "18px",
                            },
                          }),
                          _c("view", { staticClass: ["item_view_vue"] }, [
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-title-label"],
                                  staticStyle: {
                                    color: "#181818",
                                    fontWeight: "bold",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.i18n.meishi.zongjine +
                                        "(" +
                                        _vm.i18n.meishi.hanshui +
                                        ")"
                                    )
                                  ),
                                ]
                              ),
                            ]),
                            _c("view", [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["item-des-label-vue"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("¥" + _vm._s(_vm.orderMsg.pay_price))]
                              ),
                            ]),
                          ]),
                          _c("view", {
                            staticStyle: { width: "100%", height: "150px" },
                          }),
                        ],
                        2
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["status_text"],
                          style: "top:" + (_vm.statusBarHeight + 110) + "px;",
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.orderMsg.status_txt))]
                      ),
                      _vm.orderMsg.show_reminder == 1
                        ? _c(
                            "view",
                            {
                              staticClass: ["bottom_view"],
                              staticStyle: { height: "150px" },
                            },
                            [
                              _c(
                                "view",
                                { staticClass: ["bottom_contentView"] },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["row"],
                                      staticStyle: {
                                        marginLeft: "30rpx",
                                        width: "690rpx",
                                        minHeight: "50px",
                                      },
                                    },
                                    [
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "14px",
                                              width: "276rpx",
                                              marginTop: "15px",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [_vm._v(_vm._s(_vm.orderMsg.des))]
                                        ),
                                      ]),
                                      _c("view", {}, [
                                        _c(
                                          "u-text",
                                          {
                                            staticStyle: {
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                              width: "414rpx",
                                              textAlign: "right",
                                              marginTop: "15px",
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.orderMsg.service_time)
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      on: {
                                        click: function ($event) {
                                          _vm.doCuidan()
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["bottom_button"],
                                          staticStyle: {
                                            border: "1px solid #FF5725",
                                            color: "#FF5725",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(_vm.i18n.order.cuidan))]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          )
                        : _c(
                            "view",
                            {
                              staticClass: ["bottom_view"],
                              style:
                                ((_vm.orderMsg.status == 1 ||
                                  _vm.orderMsg.status == 2) &&
                                  _vm.orderMsg.show_reminder != 1) ||
                                _vm.orderMsg.status == 7
                                  ? "height: 70px;"
                                  : "height: 150px;",
                            },
                            [
                              _c(
                                "view",
                                { staticClass: ["bottom_contentView"] },
                                [
                                  _vm.orderMsg.status == 4 ||
                                  _vm.orderMsg.status == 5 ||
                                  _vm.orderMsg.status == 7
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            marginLeft: "30rpx",
                                            width: "690rpx",
                                            minHeight: "50px",
                                          },
                                        },
                                        [
                                          _c("view", {}, [
                                            _c(
                                              "u-text",
                                              {
                                                staticStyle: {
                                                  marginTop: "15px",
                                                  fontSize: "14px",
                                                  width: "276rpx",
                                                },
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [_vm._v(_vm._s(_vm.orderMsg.des))]
                                            ),
                                          ]),
                                          _vm.orderMsg.status == 4
                                            ? _c("view", {}, [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      marginTop: "15px",
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      width: "414rpx",
                                                      textAlign: "right",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.orderMsg
                                                          .service_time
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                        ]
                                      )
                                    : _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            marginLeft: "30rpx",
                                            width: "690rpx",
                                            minHeight: "50px",
                                            alignItems: "center",
                                          },
                                        },
                                        [
                                          _vm.orderMsg.status == 0
                                            ? _c(
                                                "view",
                                                {
                                                  staticClass: ["row"],
                                                  staticStyle: {
                                                    width: "276rpx",
                                                    flexWrap: "wrap",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticStyle: {
                                                        fontSize: "14px",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [_vm._v("等待支付，剩余")]
                                                  ),
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticStyle: {
                                                        fontSize: "14px",
                                                        color: "#FF5623",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.count_downStr
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticStyle: {
                                                        fontSize: "14px",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "超时订单将自动取消"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _c("view", {}, [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      fontSize: "14px",
                                                      width: "276rpx",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.orderMsg.des)
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                          _vm.orderMsg.shipping_type == "2"
                                            ? _c("view", {}, [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      width: "414rpx",
                                                      textAlign: "right",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.i18n.order
                                                          .tihuoshijian +
                                                          _vm.orderMsg.pickup
                                                            .pickup_date
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _c("view", {}, [
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      width: "414rpx",
                                                      textAlign: "right",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.orderMsg
                                                          .service_time
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                        ]
                                      ),
                                  _vm.orderMsg.status == 0
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            width: "750rpx",
                                            marginTop: "10px",
                                          },
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              on: {
                                                click: function ($event) {
                                                  _vm.doCancleOrder()
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: [
                                                    "bottom_button",
                                                  ],
                                                  staticStyle: {
                                                    border: "1px solid #FF5725",
                                                    color: "#FF5725",
                                                    width: "330rpx",
                                                    marginLeft: "30rpx",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [_vm._v("取消订单")]
                                              ),
                                            ]
                                          ),
                                          _c(
                                            "view",
                                            {
                                              on: {
                                                click: function ($event) {
                                                  _vm.doPayOrder()
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: [
                                                    "bottom_button",
                                                  ],
                                                  staticStyle: {
                                                    backgroundColor: "#FF5725",
                                                    color: "#FFF",
                                                    width: "330rpx",
                                                    marginLeft: "30rpx",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [_vm._v("立即付款")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm.top_type_id != 3
                                    ? _c(
                                        "view",
                                        {
                                          staticStyle: {
                                            width: "750rpx",
                                            marginTop: "10px",
                                          },
                                        },
                                        [
                                          _vm.orderMsg.status == 4 ||
                                          _vm.orderMsg.status == 5
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.orderAgain()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        backgroundColor:
                                                          "#FF5725",
                                                        color: "#FFF",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.mine
                                                            .zailaiyidan
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm.orderMsg.show_reminder == 1
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.doCuidan()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        border:
                                                          "1px solid #FF5725",
                                                        color: "#FF5725",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.order.cuidan
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm.orderMsg.show_verify == 1
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.doTihuoma()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        border:
                                                          "1px solid #FF5725",
                                                        color: "#FF5725",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.yilou.tihuoma
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      )
                                    : _c(
                                        "view",
                                        {
                                          staticClass: ["row"],
                                          staticStyle: {
                                            justifyContent: "space-around",
                                          },
                                        },
                                        [
                                          _vm.orderMsg.status == 4 ||
                                          _vm.orderMsg.status == 5
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.orderAgain()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        backgroundColor:
                                                          "#FF5725",
                                                        color: "#FFF",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.mine
                                                            .zailaiyidan
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm.orderMsg.show_reminder == 1 &&
                                          _vm.orderMsg.status < 4
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.doCuidan()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        border:
                                                          "1px solid #FF5725",
                                                        color: "#FF5725",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.order.cuidan
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm.orderMsg.status == 3
                                            ? _c(
                                                "view",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.dofuwuwancheng()
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "bottom_button",
                                                      ],
                                                      staticStyle: {
                                                        backgroundColor:
                                                          "#FF5725",
                                                        color: "#FFF",
                                                        marginRight: "15px",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.i18n.shansong
                                                            .wancheng
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                ]
                              ),
                            ]
                          ),
                    ],
                    1
                  ),
              _vm.showCuidan
                ? _c("cuidanV", { on: { cuidanle: _vm.cuidanle } })
                : _vm._e(),
              _vm.showTihuoma
                ? _c("tihuoma", {
                    attrs: { orderMsg: _vm.orderMsg },
                    on: { cuidanle: _vm.cuidanle },
                  })
                : _vm._e(),
              _vm.showpay
                ? _c("payView", {
                    attrs: { money: _vm.payMoney, type: "3" },
                    on: { closePayView: _vm.closePayView },
                  })
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 101 */
/*!*******************************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./order-map-detaile.nvue?vue&type=script&lang=js&mpType=page */ 102);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtrQixDQUFnQix3bUJBQUcsRUFBQyIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXItbWFwLWRldGFpbGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXItbWFwLWRldGFpbGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),
/* 102 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _banStar = _interopRequireDefault(__webpack_require__(/*! @/components/banxing/banStar.vue */ 79));\nvar _WYToolClass = _interopRequireDefault(__webpack_require__(/*! @/toolClass/WYToolClass.js */ 12));\nvar _cuidan = _interopRequireDefault(__webpack_require__(/*! @/package-mine/components/cuidan.vue */ 88));\nvar _payview = _interopRequireDefault(__webpack_require__(/*! @/components/payview/payview.vue */ 53));\nvar _tihuoma = _interopRequireDefault(__webpack_require__(/*! @/package-mine/components/tihuoma.vue */ 103));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar amapFile = __webpack_require__(/*! ../../../libs/amap-wx.130.js */ 61); //如：..­/..­/libs/amap-wx.js\nvar myAmapFun = new amapFile.AMapWX({\n  key: getApp().globalData.amapKey\n});\nvar Binding = __webpack_provided_uni_dot_requireNativePlugin('bindingx');\nvar obj = null;\nvar _default = {\n  components: {\n    starV: _banStar.default,\n    cuidanV: _cuidan.default,\n    tihuoma: _tihuoma.default,\n    payView: _payview.default\n  },\n  computed: {\n    i18n: function i18n() {\n      return getApp().globalData.$t('index');\n    }\n  },\n  data: function data() {\n    return {\n      windowHeight: 0,\n      screenHeight: 0,\n      windowWidth: 0,\n      statusBarHeight: 0,\n      menuButtonWidth: 0,\n      markers: [],\n      latitude: 0,\n      longitude: 0,\n      polyline: [],\n      orderType: 0,\n      orderID: '',\n      orderMsg: null,\n      initTop: 0,\n      viewTop: 0,\n      detaileHeight: 0,\n      lastY: 0,\n      lastTY: 0,\n      isShowPrice: 0,\n      opacity: 0,\n      position: {\n        // 记录小球当前位置\n        y: 0\n      },\n      top_type_id: '',\n      lianxiList: [],\n      showCuidan: false,\n      xiaojiprice: 0.00,\n      userinfo: null,\n      showpay: false,\n      payMoney: 0,\n      showTihuoma: false,\n      count_down: 0,\n      count_downStr: '',\n      timer: null,\n      scrollHeight: 0\n    };\n  },\n  onLoad: function onLoad(option) {\n    var res = uni.getSystemInfoSync();\n    var that = this;\n    that.windowHeight = res.windowHeight;\n    that.windowWidth = res.windowWidth;\n    that.statusBarHeight = getApp().globalData.top;\n    that.menuButtonWidth = getApp().globalData.menuButtonWidth;\n    that.initTop = res.windowHeight * 0.675 - 80;\n    that.viewTop = that.initTop;\n    that.top_type_id = option.top_type_id;\n    that.orderID = option.order;\n    that.userinfo = uni.getStorageSync('userinfo');\n    that.requestOrderDeatiles();\n  },\n  methods: {\n    requestOrderDeatiles: function requestOrderDeatiles() {\n      var that = this;\n      _WYToolClass.default.sendRequest('MerchantStoreOrder.Read', {\n        'id': that.orderID\n      }).then(function (res) {\n        if (res.code == 0) {\n          that.orderMsg = res.info[0];\n          // that.orderMsg.store.environment = [\n          // \t'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672800109&t=2f38f886858b12d1239e890bf4132984',\n          // \t'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F57a42b9002e19.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672800109&t=a5e8ba4ffdcbcefc1ab1ce042fb6c99c'\n          // ]\n          if (that.orderMsg.status == 0) {\n            if (that.orderMsg.count_down > 0) {\n              that.count_down = that.orderMsg.count_down;\n              that.timer = setInterval(function () {\n                that.count_down--;\n                that.showtime();\n              }, 1000);\n            } else {\n              that.orderMsg.status = 7;\n            }\n          }\n          var xjp = 0;\n          for (var i = 0; i < that.orderMsg.cart_info.length; i++) {\n            var p = that.orderMsg.cart_info[i];\n            xjp = xjp + parseFloat(p.use_price);\n          }\n          that.xiaojiprice = xjp.toFixed(2);\n          if (that.orderMsg.status == 4) {\n            if (that.orderMsg.shipping_type == 1) {\n              if (that.orderMsg.is_evaluate == 0) {\n                that.lianxiList = [{\n                  'name': that.i18n.meishi.pingjia,\n                  'image': '../../static/images/order/pingjia.png',\n                  'id': 0\n                }, {\n                  'name': that.i18n.order.zhidianshangjia,\n                  'image': '../../static/images/order/zhidian.png',\n                  'id': 3\n                }];\n              } else {\n                that.lianxiList = [{\n                  'name': that.i18n.order.zhidianshangjia,\n                  'image': '../../static/images/order/zhidian.png',\n                  'id': 3\n                }];\n              }\n            } else {\n              if (that.orderMsg.is_evaluate == 0) {\n                that.lianxiList = [{\n                  'name': that.i18n.meishi.pingjia,\n                  'image': '../../static/images/order/pingjia.png',\n                  'id': 0\n                }, {\n                  'name': that.i18n.order.zhidianshangjia,\n                  'image': '../../static/images/order/zhidian.png',\n                  'id': 3\n                }];\n              } else {\n                that.lianxiList = [{\n                  'name': that.i18n.order.zhidianshangjia,\n                  'image': '../../static/images/order/zhidian.png',\n                  'id': 3\n                }];\n              }\n            }\n          } else {\n            if (that.orderMsg.status == 3) {\n              that.statusBarHeight = getApp().globalData.top + 48;\n              that.lianxiList = [{\n                'name': that.i18n.order.zhidianshangjia,\n                'image': '../../static/images/order/zhidian.png',\n                'id': 3\n              }];\n              that.latitude = uni.getStorageSync('latitude');\n              that.longitude = uni.getStorageSync('longitude');\n              var iconPath = '';\n              // if (that.orderType == 5) {\n              // \ticonPath = '../../static/images/order/order-map-ban.png'\n              // } else if (that.orderType == 4) {\n              // \ticonPath = '../../static/images/order/order-map-pai.png'\n              // } else {\n              iconPath = '../../static/images/order/order-map-shou.png';\n              // }\n              that.markers = [{\n                \"id\": 12312232,\n                \"width\": 45,\n                \"height\": 45,\n                \"latitude\": that.orderMsg.address.lat,\n                \"longitude\": that.orderMsg.address.lng,\n                \"iconPath\": iconPath,\n                'coordType': 'wgs84'\n              }];\n              that.requestOrderMessage();\n            } else {\n              that.lianxiList = [{\n                'name': that.i18n.order.zhidianshangjia,\n                'image': '../../static/images/order/zhidian.png',\n                'id': 3\n              }];\n            }\n          }\n          __f__(\"log\", that.orderMsg, \" at package-mine/pages/order/order-map-detaile.nvue:825\");\n          //(1:已付款(待接单) 2:待配送 3:配送中 4:已完成 5:退款 6:已备货)\n          if (that.orderMsg.show_reminder == 1) {\n            that.scrollHeight = that.windowHeight - that.statusBarHeight - 120 - 150;\n          } else {\n            if (that.orderMsg.status == 3) {} else {\n              if (that.orderMsg.status == 1 && that.orderMsg.show_reminder != 1 || that.orderMsg.status == 7 || that.orderMsg.status == 2) {\n                that.scrollHeight = that.windowHeight - that.statusBarHeight - 120 - 70;\n              } else {\n                that.scrollHeight = that.windowHeight - that.statusBarHeight - 120 - 150;\n              }\n            }\n          }\n\n          // that.orderType = that.orderMsg.type\n          __f__(\"log\", that.orderMsg, \" at package-mine/pages/order/order-map-detaile.nvue:846\");\n        }\n      });\n    },\n    doBack: function doBack() {\n      uni.navigateBack({\n        success: function success(res) {\n          __f__(\"log\", res, \" at package-mine/pages/order/order-map-detaile.nvue:854\");\n        },\n        fail: function fail(error) {\n          __f__(\"log\", 'fail', error, \" at package-mine/pages/order/order-map-detaile.nvue:857\");\n          uni.reLaunch({\n            url: '/pages/index/index'\n          });\n        }\n      });\n    },\n    requestOrderMessage: function requestOrderMessage() {\n      var that = this;\n      _WYToolClass.default.sendRequest('Orders.GetLocation', {\n        'orderid': that.orderID,\n        'type': '1'\n      }).then(function (res) {\n        if (res.code == 0) {\n          // var dic = {\n          // \t\"id\": 12312234,\n          // \t\"width\": 45,\n          // \t\"height\": 45,\n          // \t\"latitude\": res.info[0].lat,\n          // \t\"longitude\": res.info[0].lng,\n          // \t\"iconPath\": '../../../static/qishi-header.png',\n          // \t'coordType': 'wgs84',\n          // \t\"callout\": {\n          // \t\t\"content\": '',\n          // \t\t\"padding\": '5',\n          // \t\t\"borderRadius\": '12.5',\n          // \t\t\"textAlign\": 'center',\n          // \t\t\"display\": 'ALWAYS',\n          // \t\t\"color\": '#323232',\n          // \t\t\"bgColor\": '#FFFFFF',\n          // \t\t\"fontSize\": '14',\n          // \t}\n          // }\n\n          that.getRidingRoute(res.info[0]);\n        }\n      });\n    },\n    getRidingRoute: function getRidingRoute(dic) {\n      var that = this;\n      // if (that.orderMsg.status == 3 && that.orderMsg.extra.type != 2) {\n      __f__(\"log\", parseFloat(dic.lng).toFixed(6) + ',' + parseFloat(dic.lat).toFixed(6), \" at package-mine/pages/order/order-map-detaile.nvue:899\");\n      myAmapFun.getRidingRoute({\n        origin: that.orderMsg.address.lng + ',' + that.orderMsg.address.lat,\n        //'117.135215,36.192833',\n        destination: parseFloat(dic.lng).toFixed(6) + ',' + parseFloat(dic.lat).toFixed(6),\n        //'117.135215,36.292833',\n        success: function success(data) {\n          __f__(\"log\", data, \" at package-mine/pages/order/order-map-detaile.nvue:905\");\n          var distance = data.paths[0].distance;\n          var ssss = that.i18n.yilou.jushoujiandi;\n          // if (that.orderType == 1 || that.orderType == 2) {\n          // \tssss = '距取件地'\n          // } else if (that.orderType == 3) {\n          // \tssss = '距购买地'\n          // } else {\n          // \tssss = '距服务地'\n          // }\n          var showDis = '';\n          if (distance > 999) {\n            showDis = ssss + parseFloat(distance / 1000).toFixed(1) + 'km';\n          } else {\n            showDis = ssss + distance + 'm';\n          }\n          // dic.callout.content = showDis\n          var iconPath = '';\n          if (that.orderType == 5) {\n            iconPath = '../../static/images/order/order-map-ban.png';\n          } else if (that.orderType == 4) {\n            iconPath = '../../static/images/order/order-map-pai.png';\n          } else {\n            iconPath = '../../static/images/order/order-map-shou.png';\n          }\n          // var mmmm = [{\n          // \t\t\"id\": 12312232,\n          // \t\t\"width\": 45,\n          // \t\t\"height\": 45,\n          // \t\t\"latitude\": that.orderMsg.address.lat,\n          // \t\t\"longitude\": that.orderMsg.address.lng,\n          // \t\t\"iconPath\": iconPath,\n          // \t\t'coordType': 'wgs84'\n          // \t},\n          // \t{\n          // \t\t\"id\": 12312234,\n          // \t\t\"width\": 45,\n          // \t\t\"height\": 45,\n          // \t\t\"latitude\": dic.lat,\n          // \t\t\"longitude\": dic.lng,\n          // \t\t\"iconPath\": '../../../static/qishi-header.png',\n          // \t\t'coordType': 'wgs84',\n          // \t\t\"callout\": {\n          // \t\t\t\"content\": showDis,\n          // \t\t\t\"padding\": '5',\n          // \t\t\t\"borderRadius\": '12.5',\n          // \t\t\t\"textAlign\": 'center',\n          // \t\t\t\"display\": 'ALWAYS',\n          // \t\t\t\"color\": '#323232',\n          // \t\t\t\"bgColor\": '#FFFFFF',\n          // \t\t\t\"fontSize\": '14',\n          // \t\t}\n          // \t}\n          // ]\n          // if (that.orderType < 4) {\n\n          var iconPathF = '../../static/images/order/order-map-qu.png';\n          // if (that.orderType == 3) {\n          // \ticonPathF = '../../static/images/order/order-map-mai.png'\n          // }\n          var mmmm = [{\n            \"id\": 12312232,\n            \"width\": 45,\n            \"height\": 45,\n            \"latitude\": that.orderMsg.address.lat,\n            \"longitude\": that.orderMsg.address.lng,\n            \"iconPath\": iconPath,\n            'coordType': 'wgs84'\n          }, {\n            \"id\": 12312233,\n            \"width\": 45,\n            \"height\": 45,\n            \"latitude\": that.orderMsg.store.lat,\n            \"longitude\": that.orderMsg.store.lng,\n            \"iconPath\": iconPathF,\n            'coordType': 'wgs84'\n          }, {\n            \"id\": 12312234,\n            \"width\": 45,\n            \"height\": 45,\n            \"latitude\": dic.lat,\n            \"longitude\": dic.lng,\n            \"iconPath\": '../../../static/qishi-header.png',\n            'coordType': 'wgs84',\n            \"callout\": {\n              \"content\": showDis,\n              \"padding\": '5',\n              \"borderRadius\": '12.5',\n              \"textAlign\": 'center',\n              \"display\": 'ALWAYS',\n              \"color\": '#323232',\n              \"bgColor\": '#FFFFFF',\n              \"fontSize\": '14'\n            }\n          }];\n          // }\n          that.markers = mmmm;\n          // if (that.markers.count == 2) {\n          // \tthat.markers.pop()\n          // }\n          // that.markers.push(dic)\n          __f__(\"log\", that.markers, \" at package-mine/pages/order/order-map-detaile.nvue:1009\");\n          that.$forceUpdate();\n        },\n        fail: function fail(info) {\n          __f__(\"log\", info, \" at package-mine/pages/order/order-map-detaile.nvue:1014\");\n        }\n      });\n      // } else {\n      // \tmyAmapFun.getRidingRoute({\n      // \t\torigin: that.orderMsg.t_lng + ',' + that.orderMsg.t_lat, //'117.135215,36.192833',\n      // \t\tdestination: dic.lng + ',' + dic.lat, //'117.135215,36.292833',\n      // \t\tsuccess: function(data) {\n      // \t\t\tconsole.log(data)\n      // \t\t\tvar distance = data.paths[0].distance\n      // \t\t\tvar showDis = ''\n      // \t\t\tvar ssss = that.i18n.yilou.jushoujiandi\n      // \t\t\t// if (that.orderType == 1 || that.orderType == 2 || that.orderType == 3) {\n      // \t\t\t// \tssss = '距收件地'\n      // \t\t\t// } else {\n      // \t\t\t// \tssss = '距服务地'\n      // \t\t\t// }\n      // \t\t\tif (distance > 999) {\n      // \t\t\t\tshowDis = ssss + parseFloat(distance / 1000).toFixed(1) + 'km'\n      // \t\t\t} else {\n      // \t\t\t\tshowDis = ssss + distance + 'm'\n      // \t\t\t}\n      // \t\t\t// dic.callout.content = showDis\n      // \t\t\tvar iconPath = ''\n      // \t\t\tif (that.orderType == 5) {\n      // \t\t\t\ticonPath = '../../static/images/order/order-map-ban.png'\n      // \t\t\t} else if (that.orderType == 4) {\n      // \t\t\t\ticonPath = '../../static/images/order/order-map-pai.png'\n      // \t\t\t} else {\n      // \t\t\t\ticonPath = '../../static/images/order/order-map-shou.png'\n      // \t\t\t}\n      // \t\t\tvar mmmm = [{\n      // \t\t\t\t\t\"id\": 12312232,\n      // \t\t\t\t\t\"width\": 45,\n      // \t\t\t\t\t\"height\": 45,\n      // \t\t\t\t\t\"latitude\": that.orderMsg.t_lat,\n      // \t\t\t\t\t\"longitude\": that.orderMsg.t_lng,\n      // \t\t\t\t\t\"iconPath\": iconPath,\n      // \t\t\t\t\t'coordType': 'wgs84'\n      // \t\t\t\t},\n      // \t\t\t\t{\n      // \t\t\t\t\t\"id\": 12312234,\n      // \t\t\t\t\t\"width\": 45,\n      // \t\t\t\t\t\"height\": 45,\n      // \t\t\t\t\t\"latitude\": dic.lat,\n      // \t\t\t\t\t\"longitude\": dic.lng,\n      // \t\t\t\t\t\"iconPath\": '../../../static/qishi-header.png',\n      // \t\t\t\t\t'coordType': 'wgs84',\n      // \t\t\t\t\t\"callout\": {\n      // \t\t\t\t\t\t\"content\": showDis,\n      // \t\t\t\t\t\t\"padding\": '5',\n      // \t\t\t\t\t\t\"borderRadius\": '12.5',\n      // \t\t\t\t\t\t\"textAlign\": 'center',\n      // \t\t\t\t\t\t\"display\": 'ALWAYS',\n      // \t\t\t\t\t\t\"color\": '#323232',\n      // \t\t\t\t\t\t\"bgColor\": '#FFFFFF',\n      // \t\t\t\t\t\t\"fontSize\": '14',\n      // \t\t\t\t\t}\n      // \t\t\t\t}\n      // \t\t\t]\n      // \t\t\tif (that.orderType < 4 && that.orderMsg.extra.type != 2) {\n\n      // \t\t\t\tvar iconPathF = '../../static/images/order/order-map-qu.png'\n      // \t\t\t\tif (that.orderType == 3) {\n      // \t\t\t\t\ticonPathF = '../../static/images/order/order-map-mai.png'\n      // \t\t\t\t}\n      // \t\t\t\tmmmm = [{\n      // \t\t\t\t\t\t\"id\": 12312232,\n      // \t\t\t\t\t\t\"width\": 45,\n      // \t\t\t\t\t\t\"height\": 45,\n      // \t\t\t\t\t\t\"latitude\": that.orderMsg.t_lat,\n      // \t\t\t\t\t\t\"longitude\": that.orderMsg.t_lng,\n      // \t\t\t\t\t\t\"iconPath\": iconPath,\n      // \t\t\t\t\t\t'coordType': 'wgs84'\n      // \t\t\t\t\t},\n      // \t\t\t\t\t{\n      // \t\t\t\t\t\t\"id\": 12312233,\n      // \t\t\t\t\t\t\"width\": 45,\n      // \t\t\t\t\t\t\"height\": 45,\n      // \t\t\t\t\t\t\"latitude\": that.orderMsg.f_lat,\n      // \t\t\t\t\t\t\"longitude\": that.orderMsg.f_lng,\n      // \t\t\t\t\t\t\"iconPath\": iconPathF,\n      // \t\t\t\t\t\t'coordType': 'wgs84'\n      // \t\t\t\t\t},\n      // \t\t\t\t\t{\n      // \t\t\t\t\t\t\"id\": 12312234,\n      // \t\t\t\t\t\t\"width\": 45,\n      // \t\t\t\t\t\t\"height\": 45,\n      // \t\t\t\t\t\t\"latitude\": dic.lat,\n      // \t\t\t\t\t\t\"longitude\": dic.lng,\n      // \t\t\t\t\t\t\"iconPath\": '../../../static/qishi-header.png',\n      // \t\t\t\t\t\t'coordType': 'wgs84',\n      // \t\t\t\t\t\t\"callout\": {\n      // \t\t\t\t\t\t\t\"content\": showDis,\n      // \t\t\t\t\t\t\t\"padding\": '5',\n      // \t\t\t\t\t\t\t\"borderRadius\": '12.5',\n      // \t\t\t\t\t\t\t\"textAlign\": 'center',\n      // \t\t\t\t\t\t\t\"display\": 'ALWAYS',\n      // \t\t\t\t\t\t\t\"color\": '#323232',\n      // \t\t\t\t\t\t\t\"bgColor\": '#FFFFFF',\n      // \t\t\t\t\t\t\t\"fontSize\": '14',\n      // \t\t\t\t\t\t}\n      // \t\t\t\t\t}\n      // \t\t\t\t]\n      // \t\t\t}\n      // \t\t\t// if (that.markers.count == 2) {\n      // \t\t\t// \tthat.markers.pop()\n      // \t\t\t// }\n      // \t\t\t// that.markers.push(dic)\n\n      // \t\t\tthat.markers = mmmm\n      // \t\t\tconsole.log(that.markers)\n      // \t\t\tthat.$forceUpdate()\n\n      // \t\t},\n      // \t\tfail: function(info) {\n      // \t\t\tconsole.log(info)\n      // \t\t}\n      // \t})\n      // }\n    },\n    //订单追踪\n    doOrderStateDetail: function doOrderStateDetail() {\n      uni.navigateTo({\n        url: './ordertracking?orderID=' + this.orderID\n      });\n    },\n    //退款进度\n    tuikuanjindu: function tuikuanjindu() {\n      uni.navigateTo({\n        url: 'refundOrder/refundDetails?orderID=' + this.orderID\n      });\n    },\n    onChange: function onChange(e) {},\n    doApplyReturnMoney: function doApplyReturnMoney() {\n      uni.navigateTo({\n        url: './refundOrder/applyRefund?orderID=' + this.orderID + '&orderno=' + this.orderMsg.orderno + '&money=' + this.orderMsg.money\n      });\n    },\n    call: function call() {\n      var that = this;\n      uni.makePhoneCall({\n        phoneNumber: that.orderMsg.rider.mobile\n      });\n    },\n    showBigImage: function showBigImage(index) {\n      var that = this;\n      uni.previewImage({\n        current: index,\n        urls: that.orderMsg.thumbs\n      });\n    },\n    priceMessage: function priceMessage() {\n      this.isShowPrice = !this.isShowPrice;\n    },\n    copyWord: function copyWord() {\n      var that = this;\n      uni.setClipboardData({\n        data: that.orderMsg.orderno\n      });\n      uni.showToast({\n        title: '复制成功',\n        icon: 'none'\n      });\n    },\n    touchmove: function touchmove(event) {\n      var _this = this;\n      return;\n      var currentY = event.changedTouches[0].pageY;\n      var ty = currentY - this.lastY;\n      // console.log(currentY,ty,this.lastY)\n      var text = '';\n      if (ty < 0) {\n        if (this.lastTY > 0 && this.lastTY < 5) {\n          return;\n        }\n        text = '向上滑动';\n      } else if (ty > 0) {\n        text = '向下滑动';\n        if (this.lastTY < 0 && this.lastTY > -5) {\n          return;\n        }\n      }\n      this.lastTY = ty;\n      // this.opacity = 0.5\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#detaileView').boundingClientRect(function (data) {\n        var aaaa = _this.windowHeight - data.bottom;\n        // console.log(aaaa ,this.windowHeight ,data.bottom)\n        //将当前坐标进行保存以进行下一次计算\n        if (aaaa < 40) {\n          _this.viewTop = _this.viewTop + ty;\n          if (_this.viewTop > _this.initTop) {\n            _this.viewTop = _this.initTop;\n          }\n          _this.onchangeOpacity();\n        } else {\n          if (ty > 0) {\n            _this.viewTop = _this.viewTop + ty;\n            _this.onchangeOpacity();\n          }\n        }\n        _this.lastY = currentY;\n      }).exec();\n    },\n    handletouchstart: function handletouchstart(event) {\n      this.lastY = event.changedTouches[0].pageY;\n      this.moveAppPlus();\n    },\n    moveAppPlus: function moveAppPlus() {\n      var _this2 = this;\n      var drapview = this.getEl(this.$refs.detaileView);\n      obj = Binding.bind({\n        anchor: drapview,\n        eventType: 'pan',\n        props: [{\n          element: drapview,\n          property: 'transform.translateY',\n          expression: \"y+\".concat(this.position.y)\n        }]\n      }, function (e) {\n        if (e.state === 'end') {\n          // Binding.unbind({\n          // \ttoken: obj.token,\n          // \teventType: 'pan'\n          // })\n          __f__(\"log\", e.deltaY, \" at package-mine/pages/order/order-map-detaile.nvue:1258\");\n          _this2.position.y += e.deltaY;\n          __f__(\"log\", _this2.position.y, \" at package-mine/pages/order/order-map-detaile.nvue:1260\");\n          _this2.onchangeOpacity();\n        }\n      });\n    },\n    getEl: function getEl(el) {\n      if (typeof el === 'string' || typeof el === 'number') return el;\n      if (WXEnvironment) {\n        return el.ref;\n      } else {\n        return el instanceof HTMLElement ? el : el.$el;\n      }\n    },\n    onchangeOpacity: function onchangeOpacity() {\n      var _this3 = this;\n      // console.log(this.viewTop)\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#detaileView').boundingClientRect(function (data) {\n        var drapview = _this3.getEl(_this3.$refs.detaileView);\n        var moveY = 0;\n        var time = 500;\n        if (_this3.position.y < 0) {\n          if (data.bottom < _this3.windowHeight) {\n            moveY = -(_this3.position.y + data.height - _this3.windowHeight / 3);\n          }\n        } else {\n          if (_this3.position.y > 0) {\n            moveY = 0 - _this3.position.y;\n          }\n        }\n        var expression_y = \"easeInOutCubic(t,\".concat(_this3.position.y, \",\").concat(moveY, \",\").concat(time, \")\");\n        var result = Binding.bind({\n          eventType: 'timing',\n          exitExpression: \"t>=\".concat(time),\n          props: [{\n            element: drapview,\n            property: 'transform.translateY',\n            expression: expression_y\n          }]\n        }, function (e) {\n          if (e.state === 'end' || e.state === 'exit') {\n            _this3.position.y += moveY;\n            // Binding.unbind({\n            // \teventType: 'timing',\n            // \ttoken: result.gesToken\n            // })\n          }\n        });\n        // if (data.bottom < (data.height - (this.windowHeight - this.viewTop) + 40)) {\n        // \tthis.position.y = -(data.height - (this.windowHeight - this.viewTop) + 40)\n        // \tthis.moveAppPlus()\n        // }\n        // if (data.top >= this.viewTop) {\n        // \tthis.position.y = 0\n        // \tthis.moveAppPlus()\n        // }\n\n        __f__(\"log\", data.top, data.bottom, \" at package-mine/pages/order/order-map-detaile.nvue:1319\");\n        //将当前坐标进行保存以进行下一次计算\n        if (data.top <= _this3.statusBarHeight) {\n          _this3.opacity = (_this3.statusBarHeight - data.top) / _this3.statusBarHeight > 1 ? 1 : (_this3.statusBarHeight - data.top) / _this3.statusBarHeight;\n        } else {\n          _this3.opacity = 0;\n        }\n      }).exec();\n    },\n    doCuidan: function doCuidan() {\n      __f__(\"log\", 21211212, \" at package-mine/pages/order/order-map-detaile.nvue:1331\");\n      this.showCuidan = true;\n    },\n    cuidanle: function cuidanle(str) {\n      this.showCuidan = false;\n      if (str.length > 0) {\n        var that = this;\n        _WYToolClass.default.sendRequest('MerchantStoreOrder.Reminder', {\n          'id': that.orderID,\n          'content': str\n        }).then(function (res) {\n          // console.log(res)\n          uni.showToast({\n            title: res.msg,\n            icon: 'none',\n            duration: 2000\n          });\n        });\n      }\n    },\n    lianxi: function lianxi(id) {\n      if (id == 0) {\n        if (this.top_type_id == 1) {\n          uni.navigateTo({\n            url: './orderEvaluate?orderID=' + this.orderID\n          });\n        } else if (this.top_type_id == 3) {\n          uni.navigateTo({\n            url: './fuwuEVA?orderID=' + this.orderID\n          });\n        } else if (this.top_type_id == 2) {} else if (this.top_type_id == 4) {} else {\n          uni.navigateTo({\n            url: './marketEVA?orderID=' + this.orderID\n          });\n        }\n      } else if (id == 1) {\n        var that = this;\n        _WYToolClass.default.sendRequest('MerchantStoreOrder.SubmitOrder', {\n          'rider_id': that.orderMsg.rider.id,\n          'orderid': that.orderMsg.order_id,\n          'order_type': 1\n        }).then(function (res) {\n          var dic = {\n            ordernum: that.orderMsg.order_id,\n            id: that.orderMsg.id,\n            ads: that.orderMsg.address.place + that.orderMsg.address.addr,\n            type: 0\n          };\n          var dicstr = JSON.stringify(dic);\n          __f__(\"log\", dicstr, \" at package-mine/pages/order/order-map-detaile.nvue:1384\");\n          uni.navigateTo({\n            url: \"/pages/TUI-Chat/chat?conversationID=C2C\".concat(that.orderMsg.rider_im.uid, \"&order=\").concat(dicstr)\n          });\n        });\n        // uni.navigateTo({\n        // \turl: `/pages/TUI-Chat/chat?conversationID=C2C${this.orderMsg.rider_im.uid}`\n        // })\n      } else if (id == 2) {\n        uni.navigateTo({\n          url: \"/pages/TUI-Chat/chat?conversationID=C2C\".concat(this.orderMsg.im.uid)\n        });\n      } else {\n        uni.makePhoneCall({\n          phoneNumber: this.orderMsg.store.phone\n        });\n      }\n    },\n    closePayView: function closePayView(e) {\n      __f__(\"log\", e, \" at package-mine/pages/order/order-map-detaile.nvue:1405\");\n      var that = this;\n      that.showpay = false;\n      if (e == 0) {} else {\n        var url = '';\n        var dic = {\n          'pay_type': e.id,\n          'id': that.orderMsg.id\n        };\n        url = 'MerchantStoreOrder.Pay';\n        _WYToolClass.default.sendRequest(url, dic).then(function (res) {\n          if (res.code == 0) {\n            if (e.id == 1) {\n              uni.requestPayment({\n                provider: 'alipay',\n                orderInfo: res.info[0].ali.orderinfo,\n                //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】\n                success: function success(res) {\n                  uni.showToast({\n                    title: '支付成功',\n                    duration: 2000\n                  });\n                  __f__(\"log\", 'success:' + JSON.stringify(res), \" at package-mine/pages/order/order-map-detaile.nvue:1439\");\n                  that.requestOrderDeatiles();\n                },\n                fail: function fail(err) {\n                  __f__(\"log\", 'fail:' + JSON.stringify(err), \" at package-mine/pages/order/order-map-detaile.nvue:1445\");\n                  uni.showToast({\n                    title: '支付失败',\n                    duration: 2000\n                  });\n                }\n              });\n            } else if (e.id == 2) {\n              uni.requestPayment({\n                \"provider\": \"wxpay\",\n                \"orderInfo\": res.info[0].wx,\n                // {\n                //     \"appid\": \"wx499********7c70e\",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致\n                //     \"noncestr\": \"c5sEwbaNPiXAF3iv\", // 随机字符串\n                //     \"package\": \"Sign=WXPay\",        // 固定值\n                //     \"partnerid\": \"148*****52\",      // 微信支付商户号\n                //     \"prepayid\": \"wx202254********************fbe90000\", // 统一下单订单号 \n                //     \"timestamp\": 1597935292,        // 时间戳（单位：秒）\n                //     \"sign\": \"A842B45937F6EFF60DEC7A2EAA52D5A0\" // 签名，这里用的 MD5 签名\n                // }\n                success: function success(res) {\n                  uni.showToast({\n                    title: '支付成功',\n                    duration: 2000\n                  });\n                  __f__(\"log\", res, \" at package-mine/pages/order/order-map-detaile.nvue:1481\");\n\n                  // that.doBack()\n                  that.requestOrderDeatiles();\n                },\n                fail: function fail(e) {\n                  __f__(\"log\", e, \" at package-mine/pages/order/order-map-detaile.nvue:1488\");\n                  uni.showToast({\n                    title: '支付失败',\n                    duration: 2000\n                  });\n                }\n              });\n            } else {\n              uni.showToast({\n                title: '支付成功',\n                duration: 2000\n              });\n              // if (url == 'Orders.Fee') {\n              // \tthat.orderMsg.fee = that.orderMsg.fee * 1 + that.addTipMoney * 1\n              // \tthat.orderMsg.money = that.orderMsg.money * 1 + that.addTipMoney * 1\n              // } else {\n              // that.doBack()\n              that.requestOrderDeatiles();\n              // }\n            }\n          } else {\n            uni.showToast({\n              title: '支付失败',\n              duration: 2000\n            });\n          }\n        });\n      }\n    },\n    doTihuoma: function doTihuoma() {\n      this.showTihuoma = true;\n    },\n    dofuwuwancheng: function dofuwuwancheng() {\n      uni.showLoading({\n        title: '  '\n      });\n      var that = this;\n      _WYToolClass.default.sendRequest('Serve.ServiceComplete', {\n        'id': that.orderID\n      }).then(function (res) {\n        uni.hideLoading();\n        if (res.code == 0) {\n          that.requestOrderDeatiles();\n        }\n      });\n      setTimeout(function () {\n        uni.hideLoading();\n      }, 2000);\n    },\n    doCancleOrder: function doCancleOrder() {\n      var that = this;\n      uni.showModal({\n        title: '',\n        content: '是否确定取消订单',\n        showCancel: true,\n        cancelText: '取消',\n        confirmText: '确定',\n        success: function success(res) {\n          if (res.confirm) {\n            that.requestCancle('MerchantStoreOrder.Cancel');\n          }\n        },\n        fail: function fail() {},\n        complete: function complete() {}\n      });\n    },\n    requestCancle: function requestCancle(e) {\n      var that = this;\n      _WYToolClass.default.sendRequest(e, {\n        'id': that.orderID\n      }).then(function (res) {\n        if (res.code == 0) {\n          uni.navigateBack({});\n        }\n      });\n    },\n    doPayOrder: function doPayOrder() {\n      this.addTipMoney = 0;\n      this.payMoney = this.orderMsg.pay_price;\n      this.showpay = true;\n    },\n    showtime: function showtime() {\n      if (this.count_down < 0) {\n        clearInterval(this.timer);\n        this.requestOrderDeatiles();\n      } else {\n        var min = Math.floor(this.count_down / 60);\n        var seconds = Math.floor(this.count_down % 60);\n        if (min < 10) {\n          min = '0' + min;\n        }\n        if (seconds < 10) {\n          seconds = '0' + seconds;\n        }\n        this.count_downStr = min + ':' + seconds;\n      }\n    },\n    orderAgain: function orderAgain() {\n      var that = this;\n      __f__(\"log\", that.orderID, that.top_type_id, \" at package-mine/pages/order/order-map-detaile.nvue:1599\");\n      _WYToolClass.default.sendRequest('MerchantStoreOrder.Again', {\n        'id': that.orderID\n      }).then(function (res) {\n        __f__(\"log\", res, \" at package-mine/pages/order/order-map-detaile.nvue:1603\");\n        // that.listArray = res.info\n        //1:美食 2:闪送 3:服务 4:找店 5:超市 6:生鲜 7:送药 8:家政\n        if (res.code == 0) {\n          if (that.top_type_id == 1) {\n            uni.navigateTo({\n              url: '/package-meishi/pages/store/store?id=' + that.orderMsg.store.id\n            });\n          } else if (that.top_type_id == 3) {\n            uni.navigateTo({\n              url: '/package-other/pages/service/detaile/index?id=' + that.orderMsg.store.id\n            });\n          } else if (that.top_type_id == 2) {} else if (that.top_type_id == 4) {} else {\n            uni.navigateTo({\n              url: '/package-other/pages/market/store/store?id=' + that.orderMsg.store.id + '&type=' + that.top_type_id\n            });\n          }\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 78)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFja2FnZS1taW5lL3BhZ2VzL29yZGVyL29yZGVyLW1hcC1kZXRhaWxlLm52dWUiXSwibmFtZXMiOlsia2V5IiwiY29tcG9uZW50cyIsInN0YXJWIiwiY3VpZGFuViIsInRpaHVvbWEiLCJwYXlWaWV3IiwiY29tcHV0ZWQiLCJpMThuIiwiZGF0YSIsIndpbmRvd0hlaWdodCIsInNjcmVlbkhlaWdodCIsIndpbmRvd1dpZHRoIiwic3RhdHVzQmFySGVpZ2h0IiwibWVudUJ1dHRvbldpZHRoIiwibWFya2VycyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicG9seWxpbmUiLCJvcmRlclR5cGUiLCJvcmRlcklEIiwib3JkZXJNc2ciLCJpbml0VG9wIiwidmlld1RvcCIsImRldGFpbGVIZWlnaHQiLCJsYXN0WSIsImxhc3RUWSIsImlzU2hvd1ByaWNlIiwib3BhY2l0eSIsInBvc2l0aW9uIiwieSIsInRvcF90eXBlX2lkIiwibGlhbnhpTGlzdCIsInNob3dDdWlkYW4iLCJ4aWFvamlwcmljZSIsInVzZXJpbmZvIiwic2hvd3BheSIsInBheU1vbmV5Iiwic2hvd1RpaHVvbWEiLCJjb3VudF9kb3duIiwiY291bnRfZG93blN0ciIsInRpbWVyIiwic2Nyb2xsSGVpZ2h0Iiwib25Mb2FkIiwidGhhdCIsIm1ldGhvZHMiLCJyZXF1ZXN0T3JkZXJEZWF0aWxlcyIsImh0dHAiLCJ4anAiLCJpY29uUGF0aCIsInN0YXR1cyIsImRvQmFjayIsInVuaSIsInN1Y2Nlc3MiLCJmYWlsIiwidXJsIiwicmVxdWVzdE9yZGVyTWVzc2FnZSIsImdldFJpZGluZ1JvdXRlIiwibXlBbWFwRnVuIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJzaG93RGlzIiwiZG9PcmRlclN0YXRlRGV0YWlsIiwidHVpa3VhbmppbmR1Iiwib25DaGFuZ2UiLCJkb0FwcGx5UmV0dXJuTW9uZXkiLCJvcmRlcm5vIiwiY2FsbCIsInBob25lTnVtYmVyIiwic2hvd0JpZ0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJwcmljZU1lc3NhZ2UiLCJjb3B5V29yZCIsInRpdGxlIiwiaWNvbiIsInRvdWNobW92ZSIsInRleHQiLCJxdWVyeSIsImhhbmRsZXRvdWNoc3RhcnQiLCJtb3ZlQXBwUGx1cyIsIm9iaiIsImFuY2hvciIsImV2ZW50VHlwZSIsInByb3BzIiwiZWxlbWVudCIsInByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImdldEVsIiwib25jaGFuZ2VPcGFjaXR5IiwibW92ZVkiLCJleGl0RXhwcmVzc2lvbiIsImRvQ3VpZGFuIiwiY3VpZGFubGUiLCJkdXJhdGlvbiIsImxpYW54aSIsIm9yZGVybnVtIiwiaWQiLCJhZHMiLCJ0eXBlIiwiY2xvc2VQYXlWaWV3IiwicHJvdmlkZXIiLCJvcmRlckluZm8iLCJvcmRlcmluZm8iLCJkb1RpaHVvbWEiLCJkb2Z1d3V3YW5jaGVuZyIsInNldFRpbWVvdXQiLCJkb0NhbmNsZU9yZGVyIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJjb21wbGV0ZSIsInJlcXVlc3RDYW5jbGUiLCJkb1BheU9yZGVyIiwic2hvd3RpbWUiLCJjbGVhckludGVydmFsIiwibWluIiwic2Vjb25kcyIsIm9yZGVyQWdhaW4iLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQThtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiQTtBQUNBO0VBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQUEsZUFTQTtFQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFBQTtRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRUFDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQUM7SUFDQUE7SUFDQUE7SUFDQUE7SUFDQUE7SUFDQUE7SUFDQUE7SUFFQUE7SUFFQUE7SUFFQUE7RUFFQTtFQUVBQztJQUNBQztNQUNBO01BQ0FDO1FBQ0E7TUFDQTtRQUNBO1VBQ0FIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtZQUNBO2NBQ0FBO2NBQ0FBO2dCQUNBQTtnQkFDQUE7Y0FDQTtZQUVBO2NBQ0FBO1lBQ0E7VUFDQTtVQUVBO1VBQ0E7WUFDQTtZQUNBSTtVQUNBO1VBQ0FKO1VBQ0E7WUFDQTtjQUNBO2dCQUNBQTtrQkFDQTtrQkFDQTtrQkFDQTtnQkFDQSxHQUVBO2tCQUNBO2tCQUNBO2tCQUNBO2dCQUNBLEVBQ0E7Y0FDQTtnQkFDQUEsbUJBRUE7a0JBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0EsRUFDQTtjQUNBO1lBR0E7Y0FDQTtnQkFDQUE7a0JBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0EsR0FFQTtrQkFDQTtrQkFDQTtrQkFDQTtnQkFDQSxFQUNBO2NBQ0E7Z0JBQ0FBLG1CQUVBO2tCQUNBO2tCQUNBO2tCQUNBO2dCQUNBLEVBQ0E7Y0FDQTtZQUVBO1VBRUE7WUFDQTtjQUNBQTtjQUNBQSxtQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtjQUNBLEVBQ0E7Y0FDQUE7Y0FDQUE7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQUs7Y0FDQTtjQUNBTDtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtjQUNBO2NBQ0FBO1lBQ0E7Y0FDQUEsbUJBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDQSxFQUNBO1lBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtZQUNBQTtVQUVBO1lBQ0EsZ0NBRUE7Y0FDQSxtRkFDQU07Z0JBQ0FOO2NBQ0E7Z0JBQ0FBO2NBQ0E7WUFDQTtVQUNBOztVQUlBO1VBQ0E7UUFFQTtNQUNBO0lBQ0E7SUFDQU87TUFDQUM7UUFDQUM7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7VUFDQUY7WUFDQUc7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0FUO1FBQ0E7UUFDQTtNQUNBO1FBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQUg7UUFDQTtNQUNBO0lBQ0E7SUFDQWE7TUFDQTtNQUNBO01BQ0E7TUFDQUM7UUFDQUM7UUFBQTtRQUNBQyxnRkFDQTtRQUFBO1FBQ0FQO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1lBQ0FRO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtZQUNBWjtVQUNBO1lBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7VUFDQSxHQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7VUFDQSxHQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtVQUNBLEVBQ0E7VUFDQTtVQUNBTDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQUE7UUFFQTtRQUNBVTtVQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUVBO0lBQ0E7SUFDQVE7TUFDQVY7UUFDQUc7TUFDQTtJQUNBO0lBQ0E7SUFDQVE7TUFDQVg7UUFDQUc7TUFDQTtJQUNBO0lBQ0FTLGdDQUVBO0lBQ0FDO01BQ0FiO1FBQ0FHLHVGQUNBVztNQUNBO0lBRUE7SUFDQUM7TUFDQTtNQUNBZjtRQUNBZ0I7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQWpCO1FBQ0FrQjtRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQXJCO1FBQ0EzQztNQUNBO01BQ0EyQztRQUNBc0I7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFFQTtNQUdBO01BQ0E7TUFDQTtNQUNBO01BSUE7UUFDQTtVQUNBO1FBQ0E7UUFDQUM7TUFFQTtRQUNBQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO1FBRUE7UUFDQTtRQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUNBO1FBRUE7TUFDQTtJQUdBO0lBQ0FDO01BQ0E7TUFFQTtJQUlBO0lBQ0FDO01BQUE7TUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUNBQztVQUNBQztVQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNB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ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnQgcGFnZVwiIDpzdHlsZT1cIidoZWlnaHQ6JyArIHdpbmRvd0hlaWdodCArICdweDsnXCIgdi1pZj1cIm9yZGVyTXNnXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7XCIgOnN0eWxlPVwiJ2hlaWdodDonICsgd2luZG93SGVpZ2h0ICsgJ3B4OydcIiB2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDMgJiYgIShvcmRlck1zZy5zaGlwcGluZ190eXBlICE9IDEgfHwgdG9wX3R5cGVfaWQgPT0gMylcIj5cblx0XHRcdDxtYXAgaWQ9XCJvcmRlck1hcFwiIGNsYXNzPVwibWFwVmlldyByb3dcIiA6bGF0aXR1ZGU9XCJsYXRpdHVkZVwiIDpsb25naXR1ZGU9XCJsb25naXR1ZGVcIiBzY2FsZT1cIjE2XCIgOm1hcmtlcnM9XCJtYXJrZXJzXCJcblx0XHRcdFx0OnBvbHlsaW5lPVwicG9seWxpbmVcIiA6c2hvdy1sb2NhdGlvbj1cImZhbHNlXCIgOnN0eWxlPVwiJ2hlaWdodDonICsgKHdpbmRvd0hlaWdodCowLjY3NSkgKyAncHg7J1wiPlxuXHRcdFx0XG5cdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTIC0tPlxuXHRcdFx0XHQ8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9tYXAtYmFjay5wbmdcIiBtb2RlPVwiXCIgY2xhc3M9XCJyZXR1cm5JbWFnZVwiIEBjbGljaz1cImRvQmFja1wiPlxuXHRcdFx0XHQ8L2NvdmVyLWltYWdlPlxuXHRcdFx0XHQ8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtc2h1YXhpbi5wbmdcIiBtb2RlPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogMTJweDsgbWFyZ2luLXRvcDogNTBweDsgd2lkdGg6IDMwcHg7aGVpZ2h0OiAzMHB4O1wiXG5cdFx0XHRcdFx0QGNsaWNrPVwicmVxdWVzdE9yZGVyTWVzc2FnZSgpXCI+XG5cdFx0XHRcdDwvY292ZXItaW1hZ2U+XG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0XHQ8IS0tICNpZmRlZiBNUC1XRUlYSU4gLS0+XG5cdFx0XHRcdDxjb3Zlci1pbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL21hcC1iYWNrLnBuZ1wiXG5cdFx0XHRcdFx0OnN0eWxlPVwiJ21hcmdpbi10b3A6JyArIChzdGF0dXNCYXJIZWlnaHQtNDgpICsgJ3B4OydcIiBtb2RlPVwiXCIgY2xhc3M9XCJyZXR1cm5JbWFnZVwiIEBjbGljaz1cImRvQmFja1wiPlxuXHRcdFx0XHQ8L2NvdmVyLWltYWdlPlxuXHRcdFx0XHQ8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtc2h1YXhpbi5wbmdcIiBtb2RlPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogMTJweDsgdG9wOiA1MHB4OyB3aWR0aDogMzBweDtoZWlnaHQ6IDMwcHg7XCJcblx0XHRcdFx0XHQ6c3R5bGU9XCIncmlnaHQ6JyArICgxMittZW51QnV0dG9uV2lkdGgpICsgJ3B4O3RvcDonICsgKHN0YXR1c0JhckhlaWdodC00OCkgKyAncHg7J1wiXG5cdFx0XHRcdFx0QGNsaWNrPVwicmVxdWVzdE9yZGVyTWVzc2FnZSgpXCI+XG5cdFx0XHRcdDwvY292ZXItaW1hZ2U+XG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0XG5cdFx0XHQ8L21hcD5cblx0XHRcdDx2aWV3IHJlZj1cImRldGFpbGVWaWV3XCIgaWQ9XCJkZXRhaWxlVmlld1wiIGNsYXNzPVwiZGV0YWlsZVZpZXcgY29sdW1uXCIgOnN0eWxlPVwiJ3RvcDonICsgdmlld1RvcCArICdweDsnXCJcblx0XHRcdFx0QHRvdWNobW92ZT1cInRvdWNobW92ZVwiIEB0b3VjaHN0YXJ0PVwiaGFuZGxldG91Y2hzdGFydFwiIHYtaWY9XCJvcmRlck1zZ1wiPlxuXHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQ8IS0tIOmqkeaJi+S/oeaBryAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT1cIndpZHRoOiA3MDJycHg7YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtib3JkZXItcmFkaXVzOiA4cHg7bWFyZ2luLXRvcDogMTBweDtcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA2NTRycHg7bWFyZ2luLWxlZnQ6IDI0cnB4O2hlaWdodDogODBweDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwib3JkZXJNc2cucmlkZXIuYXZhdGFyXCIgbW9kZT1cIlwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDQ1cHg7aGVpZ2h0OiA0NXB4O2JvcmRlci1yYWRpdXM6IDIyLjVweDttYXJnaW4tdG9wOiAxNy41cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1ZjZmNztcIj5cblx0XHRcdFx0XHRcdDwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbHVtblwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTcuNXB4O21hcmdpbi1sZWZ0OiAxMHB4O2ZsZXg6IDE7aGVpZ2h0OiA0NXB4O1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxhYmVsLTMwSFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0O2NvbG9yOiAjMzIzMjMyO2ZvbnQtc2l6ZTogMTZweDtcIj57e29yZGVyTXNnLnJpZGVyLnVzZXJfbmlja25hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3RhclYgc2l6ZT0zMCBAY2hhbmdlPVwib25DaGFuZ2VcIiBkaXNhYmxlZD10cnVlIDp2YWx1ZT1cIm9yZGVyTXNnLnJpZGVyLnN0YXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMjAwcnB4O2ZsZXgtZGlyZWN0aW9uOiByb3c7XCI+PC9zdGFyVj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxhYmVsLTMwSFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImNvbG9yOiAjRkY1NzI1O2hlaWdodDogMTdweDtsaW5lLWhlaWdodDogMTdweDttYXJnaW4tbGVmdDogNXB4O21hcmdpbi10b3A6IDA7XCI+e3tvcmRlck1zZy5yaWRlci5zdGFyICsgaTE4bi50b2hlci5mZW59fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvcGhvbmVDYWxsLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLXRvcDogMjlweDt3aWR0aDogMjJweDtoZWlnaHQ6IDIycHg7XCIgbW9kZT1cImFzcGVjdEZpdFwiIEBjbGljaz1cImNhbGwoKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dGV4dFxuXHRcdFx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi10b3A6IDI5cHg7d2lkdGg6IDMwcHg7aGVpZ2h0OiAyMnB4O2xpbmUtaGVpZ2h0OiAyMnB4O2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzMyMzIzMjttYXJnaW4tcmlnaHQ6IDVweDtcIlxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJjYWxsKClcIj57e2kxOG4ueWlsb3UubGlhbnhpfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCIgc3R5bGU9XCJ3aWR0aDogNzAycnB4O2hlaWdodDogNjBweDtcIiB2LWlmPVwib3JkZXJNc2cuY29kZS5sZW5ndGggPT0gNFwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAzNTFycHg7aGVpZ2h0OiA2MHB4O2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYwZjA7XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGFiZWwtMzBIXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImNvbG9yOiAjMzIzMjMyO2ZsZXg6IDE7bWFyZ2luLXRvcDogMTZweDttYXJnaW4tbGVmdDogMTBweDt0ZXh0LWFsaWduOiBsZWZ0O1wiPnt7aTE4bi55aWxvdS5xdWppYW56aGFvfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcmRlck1zZy50aHVtYnNcIiA6a2V5PVwiaW5kZXhcIiA6c3JjPVwiaXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDhweDt3aWR0aDogMjFweDtoZWlnaHQ6IDQ2cHg7bWFyZ2luLXRvcDogN3B4O1wiIG1vZGU9XCJhc3BlY3RGaWxsXCJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJzaG93QmlnSW1hZ2UoaW5kZXgpXCI+XG5cdFx0XHRcblx0XHRcdFx0XHRcdFx0PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCIgc3R5bGU9XCJ3aWR0aDogMzUxcnB4O2hlaWdodDogNjBweDthbGlnbi1pdGVtczogY2VudGVyO1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxhYmVsLTMwSFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjogIzMyMzIzMjtmbGV4OiAxO21hcmdpbi1sZWZ0OiAxMHB4O3RleHQtYWxpZ246IGxlZnQ7bWFyZ2luLXRvcDogMDtcIj57e2kxOG4ueWlsb3Uud2FuY2hlbmdtYX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGUtbGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O21hcmdpbi10b3A6IDBweDt0ZXh0LWFsaWduOiByaWdodDt3aWR0aDogNjBweDtmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO1wiPnt7b3JkZXJNc2cuY29kZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RvcmVfbGlhbnhpXCIgdi1pZj1cInRvcF90eXBlX2lkICE9IDJcIj5cblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsaWFueGlMaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImxpYW54aShpdGVtLmlkKVwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDI4cHg7aGVpZ2h0OiAyOHB4O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJcIiBzdHlsZT1cImNvbG9yOiAjRkY1NzI1O2ZvbnQtc2l6ZTogMTJweDtcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RvcmVfbmFtZVwiPlxuXHRcdFx0XHRcdDwhLS0gQGNsaWNrPVwiZG9TdG9yZSgpXCIgLS0+XG5cdFx0XHRcdFx0PHRleHQ+e3tvcmRlck1zZy5zdG9yZS51c2VfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvYWRzLXNlbGQtcmlnaHQucG5nXCIgbW9kZT1cIlwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyMHB4O2hlaWdodDogMjBweDttYXJnaW4tbGVmdDogNXB4O1wiIHYtaWY9XCJ0b3BfdHlwZV9pZCAhPSAyXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyeGlhbmd4aXhpbnhpXCI+e3tpMThuLm9yZGVyLm9yZGVyeGlhbmd4aXhpbnhpfX08L3RleHQ+IFxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3XCI+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGUtbGFiZWxcIj57e2kxOG4ub3JkZXIub3JkZXJiaWFuaGFvfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLWRlcy1sYWJlbFwiPnt7b3JkZXJNc2cub3JkZXJfaWR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLmRpbmdnb3VzaGFuZ2ppYX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwgb25lbGluZVwiIHN0eWxlPVwiY29sb3I6ICNGRjU3MjU7XCI+e3tvcmRlck1zZy5zdG9yZS51c2VfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3XCIgdi1pZj1cIm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gJzEnXCI+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGUtbGFiZWxcIj57e2kxOG4ubWluZS5zaG91aHVvZGl6aGl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsXCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IGF1dG87XCI+e3tvcmRlck1zZy5hZGRyZXNzLnBsYWNlICsgb3JkZXJNc2cuYWRkcmVzcy5hZGRyfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3XCIgdi1pZj1cIm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gMlwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJ3aWR0aDogYXV0bztmbGV4OiAxO1wiPnt7aTE4bi5vcmRlci50aWh1b21lbmRpYW59fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9tZWlzaGkvc2hhbmdqaWEtYWRzLnBuZ1wiIG1vZGU9XCJcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4O21hcmdpbi10b3A6OXB4O21hcmdpbi1yaWdodDogM3B4O1wiIEBjbGljaz1cImRvU0pNYXAoKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJkb1NKTWFwKClcIiBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsXCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJtYXgtd2lkdGg6IDYwJTt3aWR0aDogYXV0bztcIj57e29yZGVyTXNnLnBpY2t1cC5hZGRyZXNzICsgJyAnICsgb3JkZXJNc2cucGlja3VwLmRvb3JwbGF0ZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm1pbmUueGlhZGFuc2hpamlhbn19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWxcIj57e29yZGVyTXNnLmFkZF90aW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX3ZpZXdcIj5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZS1sYWJlbFwiPnt7aTE4bi5vcmRlci56aGlmdWZhbmdzaGl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsXCI+e3tvcmRlck1zZy5wYXlfdHlwZV90eHR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLnBlaXNvbmdmdXd1fX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLWRlcy1sYWJlbFwiPnt7b3JkZXJNc2cuc2hpcHBpbmdfdHlwZV90eHR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiIHYtaWY9XCJvcmRlck1zZy5zaGlwcGluZ190eXBlID09ICcyJ1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLnRpaHVvc2hpamlhbn19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWxcIj57e29yZGVyTXNnLnBpY2t1cC5waWNrdXBfZGF0ZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3XCIgdi1pZj1cIm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gJzInXCI+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGUtbGFiZWxcIj57e2kxOG4ub3JkZXIudGlodW9yZW59fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsXCI+e3t1c2VyaW5mby51c2VyX25pY2tuYW1lfX0ge3tvcmRlck1zZy5waWNrdXAucGlja3VwX3Bob25lfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIlxuXHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO2hlaWdodDogMXB4O2JhY2tncm91bmQtY29sb3I6ICNENkRBREU7bWFyZ2luLXRvcDogMTBweDtcIj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9yZGVyTXNnLmNhcnRfaW5mb1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiaXRlbV92aWV3XCJcblx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNTBweDttYXJnaW4tdG9wOiAxOHB4O1wiPlxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5wcm9kdWN0LmltYWdlXCIgbW9kZT1cImFzcGVjdEZpbGxcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogNHB4O2JhY2tncm91bmQtY29sb3I6ICNGNWY2Zjc7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbHVtblwiIHN0eWxlPVwiaGVpZ2h0OiA1MHB4O2ZsZXg6MTttYXJnaW4tbGVmdDogOHB4O1wiPlxuXHRcdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiXCIgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7d2lkdGg6IDEwMCU7XCI+e3tpdGVtLnByb2R1Y3QudXNlX25hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicm93XCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7Y29sb3I6IzZGNkY2Rjt3aWR0aDogMTAwJTtcIlxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiaXRlbS5tb3JlX3Byb2R1Y3RfYXR0ciAmJiBpdGVtLm1vcmVfcHJvZHVjdF9hdHRyLmxlbmd0aCA+IDBcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEycHg7Y29sb3I6ICM2NDY0NjQ7XCIgdi1mb3I9XCIoYXR0cixhKSBpbiBpdGVtLm1vcmVfcHJvZHVjdF9hdHRyXCJcblx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiYVwiPnt7YXR0ci5hdHRyLnVzZV9hdHRyX25hbWUgKyAoYSA8IGl0ZW0ubW9yZV9wcm9kdWN0X2F0dHIubGVuZ3RoIC0xID8gJ+OAgScgOiAnJyl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgdi1pZj1cIml0ZW0ucHJvZHVjdF9hdHRyX2lkID4gMFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjojNkY2RjZGO3dpZHRoOiAxMDAlO1wiPnt7aXRlbS5hdHRyLnVzZV9hdHRyX25hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7Y29sb3I6IzZGNkY2Rjt3aWR0aDogMTAwJTtcIiB2LWVsc2U+XG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQ+e3tpMThuLnlpbG91Lnd1Z3VpZ2V9fTwvdGV4dD4gLS0+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjogI0ZGNTcyNTt3aWR0aDogMTAwJTtcIj54e3tpdGVtLmNhcnRfbnVtfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO2ZvbnQtc2l6ZTogMTBweDtmb250LXdlaWdodDogYm9sZDtcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O2ZvbnQtd2VpZ2h0OiBib2xkO1wiPsKlPC90ZXh0Pjx0ZXh0XG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O21hcmdpbi1sZWZ0OiAzcHg7XCI+e3tpdGVtLnVzZV9wcmljZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O3dpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtoZWlnaHQ6IDFweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRDZEQURFO21hcmdpbi10b3A6IDE4cHg7XCI+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJjb2xvcjogIzE4MTgxODtcIj57e2kxOG4ubWVpc2hpLnhpYW9qaX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWxcIj7CpXt7eGlhb2ppcHJpY2V9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiIHYtaWY9XCJvcmRlck1zZy5zaGlwcGluZ190eXBlID09ICcxJ1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJjb2xvcjogIzE4MTgxODtcIj57e2kxOG4ubWVpc2hpLndhaXNvbmdmZWl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsXCI+wqV7e29yZGVyTXNnLmZyZWlnaHRfcHJpY2V9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX3ZpZXdcIiB2LWlmPVwib3JkZXJNc2cuY291cG9uX3ByaWNlID4gMFwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJjb2xvcjogIzE4MTgxODtcIj57e2kxOG4ub3JkZXIueW91aHVpemhla291fX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLWRlcy1sYWJlbFwiIHN0eWxlPVwiY29sb3I6ICNGRjU3MjU7XCI+LcKle3tvcmRlck1zZy5jb3Vwb25fcHJpY2V9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O3dpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtoZWlnaHQ6IDFweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRDZEQURFO21hcmdpbi10b3A6IDE4cHg7XCI+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjogIzE4MTgxODtmb250LXdlaWdodDogYm9sZDtcIj57e2kxOG4ubWVpc2hpLnpvbmdqaW5lICsgJygnICsgaTE4bi5tZWlzaGkuaGFuc2h1aSArICcpJ319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWxcIj7CpXt7b3JkZXJNc2cucGF5X3ByaWNlfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtoZWlnaHQ6IDE1MHB4O1wiPlxuXHRcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyByZWY9XCJ0b3BOYXZpVmlld1wiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzI1O3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7XCJcblx0XHRcdFx0OnN0eWxlPVwiJ2hlaWdodDonICsgc3RhdHVzQmFySGVpZ2h0ICsgJ3B4O29wYWNpdHk6Jysgb3BhY2l0eSArICcnXCIgdi1pZj1cIm9wYWNpdHkgPiAwXCI+XG5cdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiA0OHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDA7XCI+XG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9iYWNrLXdoaXRlLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tbGVmdDogMjRycHg7bWFyZ2luLXRvcDogMTlycHg7d2lkdGg6IDYwcnB4O2hlaWdodDogNjBycHg7XCIgQGNsaWNrPVwiZG9CYWNrKClcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx0ZXh0XG5cdFx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNjZycHg7aGVpZ2h0OiA0OHB4O2ZvbnQtc2l6ZTogMThweDtsaW5lLWhlaWdodDogNDhweDtjb2xvcjogI0ZGRkZGRjtmb250LXdlaWdodDogYm9sZDt3aWR0aDogMjUwcnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIj7orqLljZXor6bmg4U8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b21fdmlld1wiIHN0eWxlPVwiaGVpZ2h0OiAxNTBweDtcIiB2LWlmPVwib3JkZXJNc2cuc2hvd19yZW1pbmRlciA9PSAxXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tX2NvbnRlbnRWaWV3XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMHJweDt3aWR0aDogNjkwcnB4O21pbi1oZWlnaHQ6IDUwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7d2lkdGg6IDI3NnJweDttYXJnaW4tdG9wOiAxNXB4O1wiPnt7b3JkZXJNc2cuZGVzfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogYm9sZDt3aWR0aDogNDE0cnB4O3RleHQtYWxpZ246IHJpZ2h0O21hcmdpbi10b3A6IDE1cHg7XCI+e3tvcmRlck1zZy5zZXJ2aWNlX3RpbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJkb0N1aWRhbigpXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJvdHRvbV9idXR0b25cIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI0ZGNTcyNTtjb2xvcjogI0ZGNTcyNTtcIj57e2kxOG4ub3JkZXIuY3VpZGFufX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbV92aWV3XCIgc3R5bGU9XCJoZWlnaHQ6IDcwcHg7XCIgdi1lbHNlPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbV9jb250ZW50Vmlld1wiPlxuXHRcdFx0XHRcdDwhLS0gKDE65bey5LuY5qy+KOW+heaOpeWNlSkgMjrlvoXphY3pgIEgMzrphY3pgIHkuK0gNDrlt7LlrozmiJAgNTrpgIDmrL4gNjrlt7LlpIfotKcpIC0tPlxuXHRcdFx0XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O3dpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTttaW4taGVpZ2h0OiA1MHB4O1wiXG5cdFx0XHRcdFx0XHR2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDQgfHwgb3JkZXJNc2cuc3RhdHVzID09IDVcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7ZmxleDogMTtcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNXB4O2ZvbnQtc2l6ZTogMTRweDtcIj57e29yZGVyTXNnLmRlc319PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNXB4O2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogYm9sZDttYXJnaW4tcmlnaHQ6IDE1cHg7XCJcblx0XHRcdFx0XHRcdFx0XHR2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDRcIj57e29yZGVyTXNnLnNlcnZpY2VfdGltZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O3dpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTttaW4taGVpZ2h0OiA1MHB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtmbGV4OiAxO1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtcIj57e29yZGVyTXNnLmRlc319PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7bWFyZ2luLXJpZ2h0OiAxNXB4O1wiPnt7b3JkZXJNc2cuc2VydmljZV90aW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJib3R0b21fYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzI1O2NvbG9yOiAjRkZGO1wiIEBjbGljaz1cIm9yZGVyQWdhaW4oKVwiXG5cdFx0XHRcdFx0XHR2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDQgfHwgb3JkZXJNc2cuc3RhdHVzID09IDVcIj5cblx0XHRcdFx0XHRcdHt7aTE4bi5taW5lLnphaWxhaXlpZGFufX1cblx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxuXHRcdFx0XHQ8IS0tIFx0PHZpZXcgdi1pZj1cIm9yZGVyTXNnLnNob3dfcmVtaW5kZXIgPT0gMVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJib3R0b21fYnV0dG9uXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICNGRjU3MjU7Y29sb3I6ICNGRjU3MjU7XCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiZG9DdWlkYW4oKVwiPnt7aTE4bi5vcmRlci5jdWlkYW59fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0g6Z2e5Zyw5Zu+5pi+56S6IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7XCIgOnN0eWxlPVwiJ2hlaWdodDonICsgd2luZG93SGVpZ2h0ICsgJ3B4OydcIiB2LWVsc2U+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvcFZpZXdcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyAoc3RhdHVzQmFySGVpZ2h0ICsgMTIwKSArICdweDsnXCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtwb3NpdGlvbjogcmVsYXRpdmU7XCIgOnN0eWxlPVwiJ2hlaWdodDonICsgKHN0YXR1c0JhckhlaWdodCArIDEyMCkgKyAncHg7J1wiPlxuXHRcdFx0XHRcdDxzd2lwZXIgOmluZGljYXRvci1kb3RzPVwidHJ1ZVwiIDphdXRvcGxheT1cInRydWVcIiA6aW50ZXJ2YWw9XCIzMDAwXCIgOmR1cmF0aW9uPVwiMTAwMFwiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyAoc3RhdHVzQmFySGVpZ2h0ICsgMTIwKSArICdweDsnXCI+XG5cdFx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gYXV0by1wbGF5PVwidHJ1ZVwiICBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiAxMDAlO1wiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBvcmRlck1zZy5zdG9yZS5lbnZpcm9ubWVudFwiXG5cdFx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogNzUwcnB4O2hlaWdodDogMTAwJTtcIiA6c3JjPVwiaXRlbVwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XG5cdFx0XHRcdFx0PC9zd2lwZXI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvYmFjay15dWFuLnBuZ1wiIG1vZGU9XCJcIlxuXHRcdFx0XHRzdHlsZT1cImxlZnQ6IDEycHg7Ym90dG9tOiA4NXB4O3dpZHRoOiAzMHB4O2hlaWdodDogMzBweDtwb3NpdGlvbjogYWJzb2x1dGU7XCIgQGNsaWNrPVwiZG9CYWNrKClcIj5cblx0XHRcdDwvaW1hZ2U+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJCYWNrLXNjcm9sbFwiIDpzdHlsZT1cIidoZWlnaHQ6JyArIHNjcm9sbEhlaWdodCArICdweDsnXCI+XG5cdFx0XHRcdDwhLS0gdG9wOicgKyAoc3RhdHVzQmFySGVpZ2h0ICsgNTIpICsgJ3B4OyAtLT5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RvcmVfbmFtZVwiIEBjbGljaz1cImRvU3RvcmUoKVwiPlxuXHRcdFx0XHRcdHt7b3JkZXJNc2cuc3RvcmUudXNlX25hbWV9fVxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvYWRzLXNlbGQtcmlnaHQucG5nXCIgbW9kZT1cIlwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyMHB4O2hlaWdodDogMjBweDttYXJnaW4tbGVmdDogNXB4O1wiIHYtaWY9XCJ0b3BfdHlwZV9pZCAhPSAyXCI+PC9pbWFnZT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyA+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlcnhpYW5neGl4aW54aVwiPnt7aTE4bi5vcmRlci5vcmRlcnhpYW5neGl4aW54aX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX3ZpZXdfdnVlXCI+XG5cdFx0XHRcdFx0PHZpZXcgPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLm9yZGVyYmlhbmhhb319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyA+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiPnt7b3JkZXJNc2cub3JkZXJfaWR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld192dWVcIj5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZS1sYWJlbFwiPnt7aTE4bi5vcmRlci5kaW5nZ291c2hhbmdqaWF9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiIHN0eWxlPVwiY29sb3I6ICNGRjU3MjU7XCI+e3tvcmRlck1zZy5zdG9yZS51c2VfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiIHYtaWY9XCJvcmRlck1zZy5zaGlwcGluZ190eXBlID09ICcxJ1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm1pbmUuc2hvdWh1b2RpemhpfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLWRlcy1sYWJlbC12dWVcIiBzdHlsZT1cImhlaWdodDogYXV0bztcIj57e29yZGVyTXNnLmFkZHJlc3MucGxhY2UgKyBvcmRlck1zZy5hZGRyZXNzLmFkZHJ9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX3ZpZXdfdnVlXCIgdi1pZj1cIm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gMlwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJ3aWR0aDogYXV0bztmbGV4OiAxO1wiPnt7aTE4bi5vcmRlci50aWh1b21lbmRpYW59fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9tZWlzaGkvc2hhbmdqaWEtYWRzLnBuZ1wiIG1vZGU9XCJcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4O21hcmdpbi10b3A6OXB4O21hcmdpbi1yaWdodDogM3B4O1wiIEBjbGljaz1cImRvU0pNYXAoKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiIHN0eWxlPVwibWF4LXdpZHRoOiA2MCU7aGVpZ2h0OiBhdXRvO3dpZHRoOiBhdXRvO1wiIEBjbGljaz1cImRvU0pNYXAoKVwiPnt7b3JkZXJNc2cucGlja3VwLmFkZHJlc3MgKyAnICcgKyBvcmRlck1zZy5waWNrdXAuZG9vcnBsYXRlfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm1pbmUueGlhZGFuc2hpamlhbn19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+e3tvcmRlck1zZy5hZGRfdGltZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLnpoaWZ1ZmFuZ3NoaX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+e3tvcmRlck1zZy5wYXlfdHlwZV90eHR9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld192dWVcIj5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZS1sYWJlbFwiPnt7aTE4bi5vcmRlci5wZWlzb25nZnV3dX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+e3tvcmRlck1zZy5zaGlwcGluZ190eXBlX3R4dH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiIHYtaWY9XCJvcmRlck1zZy5zaGlwcGluZ190eXBlID09ICcyJ1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCI+e3tpMThuLm9yZGVyLnRpaHVvc2hpamlhbn19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+e3tvcmRlck1zZy5waWNrdXAucGlja3VwX2RhdGV9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fdmlld192dWVcIiB2LWlmPVwib3JkZXJNc2cuc2hpcHBpbmdfdHlwZSA9PSAnMidcIj5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZS1sYWJlbFwiPnt7aTE4bi5vcmRlci50aWh1b3Jlbn19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+e3t1c2VyaW5mby51c2VyX25pY2tuYW1lICsgJyAnICsgb3JkZXJNc2cucGlja3VwLnBpY2t1cF9waG9uZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMHJweDt3aWR0aDogNjkwcnB4O2hlaWdodDogMXB4O2JhY2tncm91bmQtY29sb3I6ICNENkRBREU7bWFyZ2luLXRvcDogMTBweDtcIj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9yZGVyTXNnLmNhcnRfaW5mb1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDUwcHg7bWFyZ2luLXRvcDogMThweDtcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0ucHJvZHVjdC5pbWFnZVwiIG1vZGU9XCJhc3BlY3RGaWxsXCJcblx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O2JvcmRlci1yYWRpdXM6IDRweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRjVmNmY3O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT1cImhlaWdodDogNTBweDtmbGV4OjE7bWFyZ2luLWxlZnQ6IDhweDtcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDt3aWR0aDogMTAwJTtcIj57e2l0ZW0ucHJvZHVjdC51c2VfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjojNkY2RjZGO3dpZHRoOiAxMDAlO1wiXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJpdGVtLm1vcmVfcHJvZHVjdF9hdHRyICYmIGl0ZW0ubW9yZV9wcm9kdWN0X2F0dHIubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjogIzY0NjQ2NDtcIiB2LWZvcj1cIihhdHRyLGEpIGluIGl0ZW0ubW9yZV9wcm9kdWN0X2F0dHJcIlxuXHRcdFx0XHRcdFx0XHRcdDprZXk9XCJhXCI+e3thdHRyLmF0dHIudXNlX2F0dHJfbmFtZSArIChhIDwgaXRlbS5tb3JlX3Byb2R1Y3RfYXR0ci5sZW5ndGggLTEgPyAn44CBJyA6ICcnKX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiB2LWlmPVwiaXRlbS5wcm9kdWN0X2F0dHJfaWQgPiAwXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4O2NvbG9yOiM2RjZGNkY7d2lkdGg6IDEwMCU7XCI+e3tpdGVtLmF0dHIudXNlX2F0dHJfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjojNkY2RjZGO3dpZHRoOiAxMDAlO1wiIHYtZWxzZT5cblx0XHRcdFx0XHRcdFx0PCEtLSB7e2kxOG4ueWlsb3Uud3VndWlnZX19IC0tPlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiA+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4O2NvbG9yOiAjRkY1NzI1O3dpZHRoOiAxMDAlO1wiPnh7e2l0ZW0uY2FydF9udW19fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtmb250LXdlaWdodDogYm9sZDtcIj7CpTwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O21hcmdpbi1sZWZ0OiAzcHg7XCI+e3tpdGVtLnVzZV9wcmljZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMHJweDt3aWR0aDogNjkwcnB4O2hlaWdodDogMXB4O2JhY2tncm91bmQtY29sb3I6ICNENkRBREU7bWFyZ2luLXRvcDogMThweDtcIj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiPlxuXHRcdFx0XHRcdDx2aWV3ID5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZS1sYWJlbFwiIHN0eWxlPVwiY29sb3I6ICMxODE4MTg7XCI+e3tpMThuLm1laXNoaS54aWFvaml9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiPsKle3t4aWFvamlwcmljZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiIHYtaWY9XCJvcmRlck1zZy5zaGlwcGluZ190eXBlID09ICcxJ1wiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJjb2xvcjogIzE4MTgxODtcIj57e2kxOG4ubWVpc2hpLndhaXNvbmdmZWl9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiPsKle3tvcmRlck1zZy5mcmVpZ2h0X3ByaWNlfX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiIHYtaWY9XCJvcmRlck1zZy5jb3Vwb25fcHJpY2UgPiAwXCI+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGUtbGFiZWxcIiBzdHlsZT1cImNvbG9yOiAjMTgxODE4O1wiPnt7aTE4bi5vcmRlci55b3VodWl6aGVrb3V9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW0tZGVzLWxhYmVsLXZ1ZVwiIHN0eWxlPVwiY29sb3I6ICNGRjU3MjU7XCI+LcKle3tvcmRlck1zZy5jb3Vwb25fcHJpY2V9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMHJweDt3aWR0aDogNjkwcnB4O2hlaWdodDogMXB4O2JhY2tncm91bmQtY29sb3I6ICNENkRBREU7bWFyZ2luLXRvcDogMThweDtcIj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV92aWV3X3Z1ZVwiPlxuXHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRpdGxlLWxhYmVsXCIgc3R5bGU9XCJjb2xvcjogIzE4MTgxODtmb250LXdlaWdodDogYm9sZDtcIj57e2kxOG4ubWVpc2hpLnpvbmdqaW5lICsgJygnICsgaTE4bi5tZWlzaGkuaGFuc2h1aSArICcpJ319PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1kZXMtbGFiZWwtdnVlXCI+wqV7e29yZGVyTXNnLnBheV9wcmljZX19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxNTBweDtcIj5cblx0XHRcdFxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxuXHRcdFx0XG5cdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwic3RhdHVzX3RleHRcIiA6c3R5bGU9XCIndG9wOicgKyAoc3RhdHVzQmFySGVpZ2h0ICsgMTEwKSArICdweDsnXCI+IC0tPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInN0YXR1c190ZXh0XCIgOnN0eWxlPVwiJ3RvcDonICsgKHN0YXR1c0JhckhlaWdodCArIDExMCkgKyAncHg7J1wiPnt7b3JkZXJNc2cuc3RhdHVzX3R4dH19PC90ZXh0PlxuXHRcdFx0PCEtLSA8L3ZpZXc+IC0tPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b21fdmlld1wiIHN0eWxlPVwiaGVpZ2h0OiAxNTBweDtcIiB2LWlmPVwib3JkZXJNc2cuc2hvd19yZW1pbmRlciA9PSAxXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tX2NvbnRlbnRWaWV3XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMHJweDt3aWR0aDogNjkwcnB4O21pbi1oZWlnaHQ6IDUwcHg7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDt3aWR0aDogMjc2cnB4O21hcmdpbi10b3A6IDE1cHg7XCI+e3tvcmRlck1zZy5kZXN9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBib2xkO3dpZHRoOiA0MTRycHg7dGV4dC1hbGlnbjogcmlnaHQ7bWFyZ2luLXRvcDogMTVweDtcIj57e29yZGVyTXNnLnNlcnZpY2VfdGltZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJkb0N1aWRhbigpXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJvdHRvbV9idXR0b25cIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI0ZGNTcyNTtjb2xvcjogI0ZGNTcyNTtcIj57e2kxOG4ub3JkZXIuY3VpZGFufX08L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbV92aWV3XCJcblx0XHRcdFx0OnN0eWxlPVwiKChvcmRlck1zZy5zdGF0dXMgPT0gMSB8fCBvcmRlck1zZy5zdGF0dXMgPT0gMikgJiYgb3JkZXJNc2cuc2hvd19yZW1pbmRlciAhPSAxKSB8fCBvcmRlck1zZy5zdGF0dXMgPT0gNyA/ICdoZWlnaHQ6IDcwcHg7JyA6ICdoZWlnaHQ6IDE1MHB4OydcIiB2LWVsc2U+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tX2NvbnRlbnRWaWV3XCI+XG5cdFx0XHRcdFx0PCEtLSAoMTrlt7Lku5jmrL4o5b6F5o6l5Y2VKSAyOuW+hemFjemAgSAzOumFjemAgeS4rSA0OuW3suWujOaIkCA1OumAgOasviA2OuW3suWkh+i0pykgLS0+XG5cdFx0XHRcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMwcnB4O3dpZHRoOiA2OTBycHg7bWluLWhlaWdodDogNTBweDtcIlxuXHRcdFx0XHRcdFx0di1pZj1cIm9yZGVyTXNnLnN0YXR1cyA9PSA0IHx8IG9yZGVyTXNnLnN0YXR1cyA9PSA1IHx8IG9yZGVyTXNnLnN0YXR1cyA9PSA3XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDE1cHg7Zm9udC1zaXplOiAxNHB4O3dpZHRoOiAyNzZycHg7XCI+e3tvcmRlck1zZy5kZXN9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJvcmRlck1zZy5zdGF0dXMgPT0gNFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDE1cHg7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBib2xkO3dpZHRoOiA0MTRycHg7dGV4dC1hbGlnbjogcmlnaHQ7XCI+e3tvcmRlck1zZy5zZXJ2aWNlX3RpbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tbGVmdDogMzBycHg7d2lkdGg6IDY5MHJweDttaW4taGVpZ2h0OiA1MHB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAyNzZycHg7ZmxleC13cmFwOiB3cmFwO1wiIHYtaWY9XCJvcmRlck1zZy5zdGF0dXMgPT0gMFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtcIiA+562J5b6F5pSv5LuY77yM5Ymp5L2ZPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtjb2xvcjogI0ZGNTYyMztcIj57e2NvdW50X2Rvd25TdHJ9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7XCIgPui2heaXtuiuouWNleWwhuiHquWKqOWPlua2iDwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgdi1lbHNlPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCAgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7d2lkdGg6IDI3NnJweDtcIj57e29yZGVyTXNnLmRlc319PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBcblx0XHRcdFx0XHRcdFx0di1pZj1cIm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gJzInXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBib2xkO3dpZHRoOiA0MTRycHg7dGV4dC1hbGlnbjogcmlnaHQ7XCI+e3tpMThuLm9yZGVyLnRpaHVvc2hpamlhbiArIG9yZGVyTXNnLnBpY2t1cC5waWNrdXBfZGF0ZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiB2LWVsc2U+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBib2xkO3dpZHRoOiA0MTRycHg7dGV4dC1hbGlnbjogcmlnaHQ7XCI+e3tvcmRlck1zZy5zZXJ2aWNlX3RpbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHN0eWxlPVwid2lkdGg6IDc1MHJweDttYXJnaW4tdG9wOiAxMHB4O1wiIHYtaWY9XCJvcmRlck1zZy5zdGF0dXMgPT0gMFwiPlxuXHRcdFx0XHRcdFx0PHZpZXdcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiZG9DYW5jbGVPcmRlcigpXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm90dG9tX2J1dHRvblwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjRkY1NzI1O2NvbG9yOiAjRkY1NzI1O3dpZHRoOiAzMzBycHg7bWFyZ2luLWxlZnQ6IDMwcnB4O1wiPuWPlua2iOiuouWNlTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3XG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImRvUGF5T3JkZXIoKVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJvdHRvbV9idXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRjU3MjU7Y29sb3I6ICNGRkY7d2lkdGg6IDMzMHJweDttYXJnaW4tbGVmdDogMzBycHg7XCI+56uL5Y2z5LuY5qy+PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7bWFyZ2luLXRvcDogMTBweDtcIiB2LWlmPVwidG9wX3R5cGVfaWQgIT0gM1wiPlxuXHRcdFx0XHRcdFx0PHZpZXcgQGNsaWNrPVwib3JkZXJBZ2FpbigpXCJcblx0XHRcdFx0XHRcdFx0di1pZj1cIm9yZGVyTXNnLnN0YXR1cyA9PSA0IHx8IG9yZGVyTXNnLnN0YXR1cyA9PSA1XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm90dG9tX2J1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGNTcyNTtjb2xvcjogI0ZGRjtcIiA+e3tpMThuLm1pbmUuemFpbGFpeWlkYW59fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IEBjbGljaz1cImRvQ3VpZGFuKClcIlxuXHRcdFx0XHRcdFx0XHR2LWlmPVwib3JkZXJNc2cuc2hvd19yZW1pbmRlciA9PSAxXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm90dG9tX2J1dHRvblwiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjRkY1NzI1O2NvbG9yOiAjRkY1NzI1O1wiPnt7aTE4bi5vcmRlci5jdWlkYW59fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3ICBAY2xpY2s9XCJkb1RpaHVvbWEoKVwiXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJvcmRlck1zZy5zaG93X3ZlcmlmeSA9PSAxXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm90dG9tX2J1dHRvblwiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjRkY1NzI1O2NvbG9yOiAjRkY1NzI1O1wiPnt7aTE4bi55aWxvdS50aWh1b21hfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcIiB2LWVsc2U+XG5cdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJvcmRlckFnYWluKClcIlxuXHRcdFx0XHRcdFx0XHR2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDQgfHwgb3JkZXJNc2cuc3RhdHVzID09IDVcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJib3R0b21fYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzI1O2NvbG9yOiAjRkZGO1wiPnt7aTE4bi5taW5lLnphaWxhaXlpZGFufX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJkb0N1aWRhbigpXCJcblx0XHRcdFx0XHRcdFx0di1pZj1cIm9yZGVyTXNnLnNob3dfcmVtaW5kZXIgPT0gMSAmJiBvcmRlck1zZy5zdGF0dXMgPCA0XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm90dG9tX2J1dHRvblwiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjRkY1NzI1O2NvbG9yOiAjRkY1NzI1O1wiPnt7aTE4bi5vcmRlci5jdWlkYW59fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3XG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImRvZnV3dXdhbmNoZW5nKClcIiB2LWlmPVwib3JkZXJNc2cuc3RhdHVzID09IDNcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgIGNsYXNzPVwiYm90dG9tX2J1dHRvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojRkY1NzI1O2NvbG9yOiAjRkZGO21hcmdpbi1yaWdodDogMTVweDtcIj57e2kxOG4uc2hhbnNvbmcud2FuY2hlbmd9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XHJcblx0XHQ8Y3VpZGFuViB2LWlmPVwic2hvd0N1aWRhblwiIEBjdWlkYW5sZT1cImN1aWRhbmxlXCI+PC9jdWlkYW5WPlxuXHRcdDx0aWh1b21hIHYtaWY9XCJzaG93VGlodW9tYVwiIEBjdWlkYW5sZT1cImN1aWRhbmxlXCIgOm9yZGVyTXNnPVwib3JkZXJNc2dcIj48L3RpaHVvbWE+XG5cdFx0XG5cdFx0PHBheVZpZXcgdi1pZj1cInNob3dwYXlcIiA6bW9uZXk9XCJwYXlNb25leVwiIHR5cGU9XCIzXCIgQGNsb3NlUGF5Vmlldz1cImNsb3NlUGF5Vmlld1wiPjwvcGF5Vmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdHZhciBhbWFwRmlsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYnMvYW1hcC13eC4xMzAuanMnKTsgLy/lpoLvvJouLsKtLy4uwq0vbGlicy9hbWFwLXd4LmpzXHJcblx0dmFyIG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goe1xyXG5cdFx0a2V5OiBnZXRBcHAoKS5nbG9iYWxEYXRhLmFtYXBLZXlcclxuXHR9KTtcclxuXHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRjb25zdCBCaW5kaW5nID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2JpbmRpbmd4Jyk7XHJcblx0bGV0IG9iaiA9IG51bGxcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0aW1wb3J0IHN0YXJWIGZyb20gJ0AvY29tcG9uZW50cy9iYW54aW5nL2JhblN0YXIudnVlJ1xyXG5cdGltcG9ydCBodHRwIGZyb20gJ0AvdG9vbENsYXNzL1dZVG9vbENsYXNzLmpzJ1xyXG5cdGltcG9ydCBjdWlkYW5WIGZyb20gXCJAL3BhY2thZ2UtbWluZS9jb21wb25lbnRzL2N1aWRhbi52dWVcIlxyXG5cdGltcG9ydCBwYXlWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9wYXl2aWV3L3BheXZpZXcudnVlJ1xyXG5cdGltcG9ydCB0aWh1b21hIGZyb20gXCJAL3BhY2thZ2UtbWluZS9jb21wb25lbnRzL3RpaHVvbWEudnVlXCJcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRzdGFyVixcclxuXHRcdFx0Y3VpZGFuVixcblx0XHRcdHRpaHVvbWEsXG5cdFx0XHRwYXlWaWV3XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aTE4bigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS4kdCgnaW5kZXgnKVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6MCxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMCxcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bWVudUJ1dHRvbldpZHRoOiAwLFxyXG5cdFx0XHRcdG1hcmtlcnM6IFtdLFxyXG5cdFx0XHRcdGxhdGl0dWRlOiAwLFxyXG5cdFx0XHRcdGxvbmdpdHVkZTogMCxcclxuXHRcdFx0XHRwb2x5bGluZTogW10sXHJcblx0XHRcdFx0b3JkZXJUeXBlOiAwLFxyXG5cdFx0XHRcdG9yZGVySUQ6ICcnLFxyXG5cdFx0XHRcdG9yZGVyTXNnOiBudWxsLFxyXG5cdFx0XHRcdGluaXRUb3A6IDAsXHJcblx0XHRcdFx0dmlld1RvcDogMCxcclxuXHRcdFx0XHRkZXRhaWxlSGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGxhc3RZOiAwLFxyXG5cdFx0XHRcdGxhc3RUWTogMCxcclxuXHRcdFx0XHRpc1Nob3dQcmljZTogMCxcclxuXHRcdFx0XHRvcGFjaXR5OiAwLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IC8vIOiusOW9leWwj+eQg+W9k+WJjeS9jee9rlxyXG5cdFx0XHRcdFx0eTogMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dG9wX3R5cGVfaWQ6ICcnLFxyXG5cdFx0XHRcdGxpYW54aUxpc3Q6IFtdLFxyXG5cdFx0XHRcdHNob3dDdWlkYW46IGZhbHNlLFxyXG5cdFx0XHRcdHhpYW9qaXByaWNlOiAwLjAwLFxyXG5cdFx0XHRcdHVzZXJpbmZvOiBudWxsLFxuXHRcdFx0XHRcblx0XHRcdFx0c2hvd3BheTogZmFsc2UsXG5cdFx0XHRcdHBheU1vbmV5OiAwLFxuXHRcdFx0XHRzaG93VGlodW9tYTogZmFsc2UsXG5cdFx0XHRcdGNvdW50X2Rvd246IDAsXG5cdFx0XHRcdGNvdW50X2Rvd25TdHI6ICcnLFxuXHRcdFx0XHR0aW1lcjogbnVsbCxcblx0XHRcdFx0c2Nyb2xsSGVpZ2h0OjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dmFyIHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHR0aGF0LndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcclxuXHRcdFx0dGhhdC53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aFxyXG5cdFx0XHR0aGF0LnN0YXR1c0JhckhlaWdodCA9IGdldEFwcCgpLmdsb2JhbERhdGEudG9wXHJcblx0XHRcdHRoYXQubWVudUJ1dHRvbldpZHRoID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5tZW51QnV0dG9uV2lkdGhcclxuXHRcdFx0dGhhdC5pbml0VG9wID0gcmVzLndpbmRvd0hlaWdodCAqIDAuNjc1IC0gODBcclxuXHRcdFx0dGhhdC52aWV3VG9wID0gdGhhdC5pbml0VG9wXHJcblx0XHRcdHRoYXQudG9wX3R5cGVfaWQgPSBvcHRpb24udG9wX3R5cGVfaWRcclxuXHJcblx0XHRcdHRoYXQub3JkZXJJRCA9IG9wdGlvbi5vcmRlclxyXG5cdFx0XHRcclxuXHRcdFx0dGhhdC51c2VyaW5mbyA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcmluZm8nKTtcclxuXHJcblx0XHRcdHRoYXQucmVxdWVzdE9yZGVyRGVhdGlsZXMoKVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cmVxdWVzdE9yZGVyRGVhdGlsZXMoKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXG5cdFx0XHRcdGh0dHAuc2VuZFJlcXVlc3QoJ01lcmNoYW50U3RvcmVPcmRlci5SZWFkJywge1xuXHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJJRFxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGF0Lm9yZGVyTXNnID0gcmVzLmluZm9bMF1cblx0XHRcdFx0XHRcdC8vIHRoYXQub3JkZXJNc2cuc3RvcmUuZW52aXJvbm1lbnQgPSBbXG5cdFx0XHRcdFx0XHQvLyBcdCdodHRwczovL2dpbWcyLmJhaWR1LmNvbS9pbWFnZV9zZWFyY2gvc3JjPWh0dHAlM0ElMkYlMkZwaWMxLndpbjQwMDAuY29tJTJGd2FsbHBhcGVyJTJGMjAxOC0wNi0yNyUyRjViMzM0NTc4OWNhMmMuanBnJnJlZmVyPWh0dHAlM0ElMkYlMkZwaWMxLndpbjQwMDAuY29tJmFwcD0yMDAyJnNpemU9Zjk5OTksMTAwMDAmcT1hODAmbj0wJmc9MG4mZm10PWF1dG8/c2VjPTE2NzI4MDAxMDkmdD0yZjM4Zjg4Njg1OGIxMmQxMjM5ZTg5MGJmNDEzMjk4NCcsXG5cdFx0XHRcdFx0XHQvLyBcdCdodHRwczovL2dpbWcyLmJhaWR1LmNvbS9pbWFnZV9zZWFyY2gvc3JjPWh0dHAlM0ElMkYlMkZwaWMxLndpbjQwMDAuY29tJTJGd2FsbHBhcGVyJTJGZiUyRjU3YTQyYjkwMDJlMTkuanBnJnJlZmVyPWh0dHAlM0ElMkYlMkZwaWMxLndpbjQwMDAuY29tJmFwcD0yMDAyJnNpemU9Zjk5OTksMTAwMDAmcT1hODAmbj0wJmc9MG4mZm10PWF1dG8/c2VjPTE2NzI4MDAxMDkmdD1hNWU4YmE0ZmZkY2JjZWZjMWFiMWNlMDQyZmI2Yzk5Yydcblx0XHRcdFx0XHRcdC8vIF1cblx0XHRcdFx0XHRcdGlmICh0aGF0Lm9yZGVyTXNnLnN0YXR1cyA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0Lm9yZGVyTXNnLmNvdW50X2Rvd24gPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jb3VudF9kb3duID0gdGhhdC5vcmRlck1zZy5jb3VudF9kb3duXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuY291bnRfZG93bi0tXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnNob3d0aW1lKClcblx0XHRcdFx0XHRcdFx0XHR9LCAxMDAwKVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5vcmRlck1zZy5zdGF0dXMgPSA3XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dmFyIHhqcCA9IDBcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5vcmRlck1zZy5jYXJ0X2luZm8ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcCA9IHRoYXQub3JkZXJNc2cuY2FydF9pbmZvW2ldXG5cdFx0XHRcdFx0XHRcdHhqcCA9IHhqcCArIHBhcnNlRmxvYXQocC51c2VfcHJpY2UpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGF0LnhpYW9qaXByaWNlID0geGpwLnRvRml4ZWQoMilcblx0XHRcdFx0XHRcdGlmICh0aGF0Lm9yZGVyTXNnLnN0YXR1cyA9PSA0KSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0Lm9yZGVyTXNnLnNoaXBwaW5nX3R5cGUgPT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQub3JkZXJNc2cuaXNfZXZhbHVhdGUgPT0gMCl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmxpYW54aUxpc3QgPSBbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJzogdGhhdC5pMThuLm1laXNoaS5waW5namlhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpbWFnZSc6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL3BpbmdqaWEucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWQnOiAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25hbWUnOiB0aGF0LmkxOG4ub3JkZXIuemhpZGlhbnNoYW5namlhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpbWFnZSc6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL3poaWRpYW4ucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWQnOiAzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubGlhbnhpTGlzdCA9IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZSc6IHRoYXQuaTE4bi5vcmRlci56aGlkaWFuc2hhbmdqaWEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ltYWdlJzogJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvemhpZGlhbi5wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpZCc6IDNcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRpZih0aGF0Lm9yZGVyTXNnLmlzX2V2YWx1YXRlID09IDApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5saWFueGlMaXN0ID0gW3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZSc6IHRoYXQuaTE4bi5tZWlzaGkucGluZ2ppYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaW1hZ2UnOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9waW5namlhLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lkJzogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJzogdGhhdC5pMThuLm9yZGVyLnpoaWRpYW5zaGFuZ2ppYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaW1hZ2UnOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci96aGlkaWFuLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lkJzogM1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmxpYW54aUxpc3QgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25hbWUnOiB0aGF0LmkxOG4ub3JkZXIuemhpZGlhbnNoYW5namlhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpbWFnZSc6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL3poaWRpYW4ucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWQnOiAzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQub3JkZXJNc2cuc3RhdHVzID09IDMpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnN0YXR1c0JhckhlaWdodCA9IGdldEFwcCgpLmdsb2JhbERhdGEudG9wICsgNDhcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmxpYW54aUxpc3QgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJzogdGhhdC5pMThuLm9yZGVyLnpoaWRpYW5zaGFuZ2ppYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2ltYWdlJzogJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvemhpZGlhbi5wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaWQnOiAzXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubGF0aXR1ZGUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2xhdGl0dWRlJylcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmxvbmdpdHVkZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnbG9uZ2l0dWRlJylcblx0XHRcdFx0XHRcdFx0XHR2YXIgaWNvblBhdGggPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIGlmICh0aGF0Lm9yZGVyVHlwZSA9PSA1KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRpY29uUGF0aCA9ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL29yZGVyLW1hcC1iYW4ucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIH0gZWxzZSBpZiAodGhhdC5vcmRlclR5cGUgPT0gNCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFx0aWNvblBhdGggPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtcGFpLnBuZydcblx0XHRcdFx0XHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGljb25QYXRoID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLXNob3UucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1hcmtlcnMgPSBbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMxMjIzMixcblx0XHRcdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogNDUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiA0NSxcblx0XHRcdFx0XHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogdGhhdC5vcmRlck1zZy5hZGRyZXNzLmxhdCxcblx0XHRcdFx0XHRcdFx0XHRcdFwibG9uZ2l0dWRlXCI6IHRoYXQub3JkZXJNc2cuYWRkcmVzcy5sbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcImljb25QYXRoXCI6IGljb25QYXRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCdcblx0XHRcdFx0XHRcdFx0XHR9XVxuXHRcdFx0XHRcdFx0XHRcdHRoYXQucmVxdWVzdE9yZGVyTWVzc2FnZSgpXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQubGlhbnhpTGlzdCA9IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25hbWUnOiB0aGF0LmkxOG4ub3JkZXIuemhpZGlhbnNoYW5namlhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaW1hZ2UnOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci96aGlkaWFuLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdpZCc6IDNcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm9yZGVyTXNnKVxuXHRcdFx0XHRcdFx0Ly8oMTrlt7Lku5jmrL4o5b6F5o6l5Y2VKSAyOuW+hemFjemAgSAzOumFjemAgeS4rSA0OuW3suWujOaIkCA1OumAgOasviA2OuW3suWkh+i0pylcblx0XHRcdFx0XHRcdGlmKHRoYXQub3JkZXJNc2cuc2hvd19yZW1pbmRlciA9PSAxKXtcblx0XHRcdFx0XHRcdFx0dGhhdC5zY3JvbGxIZWlnaHQgPSB0aGF0LndpbmRvd0hlaWdodCAtIHRoYXQuc3RhdHVzQmFySGVpZ2h0IC0gMTIwIC0gMTUwXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdGlmKHRoYXQub3JkZXJNc2cuc3RhdHVzID09IDMpe1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCh0aGF0Lm9yZGVyTXNnLnN0YXR1cyA9PSAxICYmIHRoYXQub3JkZXJNc2cuc2hvd19yZW1pbmRlciAhPSAxKSB8fCB0aGF0Lm9yZGVyTXNnXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3RhdHVzID09IDcgfHwgdGhhdC5vcmRlck1zZy5zdGF0dXMgPT0gMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zY3JvbGxIZWlnaHQgPSB0aGF0LndpbmRvd0hlaWdodCAtIHRoYXQuc3RhdHVzQmFySGVpZ2h0IC0gMTIwIC0gNzBcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zY3JvbGxIZWlnaHQgPSB0aGF0LndpbmRvd0hlaWdodCAtIHRoYXQuc3RhdHVzQmFySGVpZ2h0IC0gMTIwIC0gMTUwXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5vcmRlclR5cGUgPSB0aGF0Lm9yZGVyTXNnLnR5cGVcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoYXQub3JkZXJNc2cpXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxyXG5cdFx0XHRkb0JhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJywgZXJyb3IpXHJcblx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcXVlc3RPcmRlck1lc3NhZ2UoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aHR0cC5zZW5kUmVxdWVzdCgnT3JkZXJzLkdldExvY2F0aW9uJywge1xyXG5cdFx0XHRcdFx0J29yZGVyaWQnOiB0aGF0Lm9yZGVySUQsXG5cdFx0XHRcdFx0J3R5cGUnOiAnMSdcclxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHZhciBkaWMgPSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0XCJpZFwiOiAxMjMxMjIzNCxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcIndpZHRoXCI6IDQ1LFxyXG5cdFx0XHRcdFx0XHQvLyBcdFwiaGVpZ2h0XCI6IDQ1LFxyXG5cdFx0XHRcdFx0XHQvLyBcdFwibGF0aXR1ZGVcIjogcmVzLmluZm9bMF0ubGF0LFxyXG5cdFx0XHRcdFx0XHQvLyBcdFwibG9uZ2l0dWRlXCI6IHJlcy5pbmZvWzBdLmxuZyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcImljb25QYXRoXCI6ICcuLi8uLi8uLi9zdGF0aWMvcWlzaGktaGVhZGVyLnBuZycsXHJcblx0XHRcdFx0XHRcdC8vIFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCcsXHJcblx0XHRcdFx0XHRcdC8vIFx0XCJjYWxsb3V0XCI6IHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwiY29udGVudFwiOiAnJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwicGFkZGluZ1wiOiAnNScsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImJvcmRlclJhZGl1c1wiOiAnMTIuNScsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcInRleHRBbGlnblwiOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwiZGlzcGxheVwiOiAnQUxXQVlTJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwiY29sb3JcIjogJyMzMjMyMzInLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XCJiZ0NvbG9yXCI6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwiZm9udFNpemVcIjogJzE0JyxcclxuXHRcdFx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0UmlkaW5nUm91dGUocmVzLmluZm9bMF0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0UmlkaW5nUm91dGUoZGljKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gaWYgKHRoYXQub3JkZXJNc2cuc3RhdHVzID09IDMgJiYgdGhhdC5vcmRlck1zZy5leHRyYS50eXBlICE9IDIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhwYXJzZUZsb2F0KGRpYy5sbmcpLnRvRml4ZWQoNikgKyAnLCcgKyBwYXJzZUZsb2F0KGRpYy5sYXQpLnRvRml4ZWQoNikpXHJcblx0XHRcdFx0bXlBbWFwRnVuLmdldFJpZGluZ1JvdXRlKHtcclxuXHRcdFx0XHRcdG9yaWdpbjogdGhhdC5vcmRlck1zZy5hZGRyZXNzLmxuZyArICcsJyArIHRoYXQub3JkZXJNc2cuYWRkcmVzcy5sYXQsIC8vJzExNy4xMzUyMTUsMzYuMTkyODMzJyxcclxuXHRcdFx0XHRcdGRlc3RpbmF0aW9uOiBwYXJzZUZsb2F0KGRpYy5sbmcpLnRvRml4ZWQoNikgKyAnLCcgKyBwYXJzZUZsb2F0KGRpYy5sYXQpLnRvRml4ZWQoXHJcblx0XHRcdFx0XHRcdDYpLCAvLycxMTcuMTM1MjE1LDM2LjI5MjgzMycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRcdHZhciBkaXN0YW5jZSA9IGRhdGEucGF0aHNbMF0uZGlzdGFuY2VcclxuXHRcdFx0XHRcdFx0dmFyIHNzc3MgPSB0aGF0LmkxOG4ueWlsb3UuanVzaG91amlhbmRpXHJcblx0XHRcdFx0XHRcdC8vIGlmICh0aGF0Lm9yZGVyVHlwZSA9PSAxIHx8IHRoYXQub3JkZXJUeXBlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRzc3NzID0gJ+i3neWPluS7tuWcsCdcclxuXHRcdFx0XHRcdFx0Ly8gfSBlbHNlIGlmICh0aGF0Lm9yZGVyVHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0c3NzcyA9ICfot53otK3kubDlnLAnXHJcblx0XHRcdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0c3NzcyA9ICfot53mnI3liqHlnLAnXHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0dmFyIHNob3dEaXMgPSAnJ1xyXG5cdFx0XHRcdFx0XHRpZiAoZGlzdGFuY2UgPiA5OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRzaG93RGlzID0gc3NzcyArIHBhcnNlRmxvYXQoZGlzdGFuY2UgLyAxMDAwKS50b0ZpeGVkKDEpICsgJ2ttJ1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNob3dEaXMgPSBzc3NzICsgZGlzdGFuY2UgKyAnbSdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBkaWMuY2FsbG91dC5jb250ZW50ID0gc2hvd0Rpc1xyXG5cdFx0XHRcdFx0XHR2YXIgaWNvblBhdGggPSAnJ1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5vcmRlclR5cGUgPT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGljb25QYXRoID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLWJhbi5wbmcnXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhhdC5vcmRlclR5cGUgPT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdGljb25QYXRoID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLXBhaS5wbmcnXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aWNvblBhdGggPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtc2hvdS5wbmcnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gdmFyIG1tbW0gPSBbe1xyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XCJpZFwiOiAxMjMxMjIzMixcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwid2lkdGhcIjogNDUsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImhlaWdodFwiOiA0NSxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwibGF0aXR1ZGVcIjogdGhhdC5vcmRlck1zZy5hZGRyZXNzLmxhdCxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwibG9uZ2l0dWRlXCI6IHRoYXQub3JkZXJNc2cuYWRkcmVzcy5sbmcsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImljb25QYXRoXCI6IGljb25QYXRoLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCdcclxuXHRcdFx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHRcdFx0XHQvLyBcdHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFwiaWRcIjogMTIzMTIyMzQsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcIndpZHRoXCI6IDQ1LFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XCJoZWlnaHRcIjogNDUsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImxhdGl0dWRlXCI6IGRpYy5sYXQsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImxvbmdpdHVkZVwiOiBkaWMubG5nLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XCJpY29uUGF0aFwiOiAnLi4vLi4vLi4vc3RhdGljL3Fpc2hpLWhlYWRlci5wbmcnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCcsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcImNhbGxvdXRcIjoge1xyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcImNvbnRlbnRcIjogc2hvd0RpcyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XCJwYWRkaW5nXCI6ICc1JyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XCJib3JkZXJSYWRpdXNcIjogJzEyLjUnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcInRleHRBbGlnblwiOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XCJkaXNwbGF5XCI6ICdBTFdBWVMnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcImNvbG9yXCI6ICcjMzIzMjMyJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XCJiZ0NvbG9yXCI6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XCJmb250U2l6ZVwiOiAnMTQnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHRcdFx0Ly8gXVxyXG5cdFx0XHRcdFx0XHQvLyBpZiAodGhhdC5vcmRlclR5cGUgPCA0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaWNvblBhdGhGID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLXF1LnBuZydcclxuXHRcdFx0XHRcdFx0Ly8gaWYgKHRoYXQub3JkZXJUeXBlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRpY29uUGF0aEYgPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtbWFpLnBuZydcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHR2YXIgbW1tbSA9IFt7XHJcblx0XHRcdFx0XHRcdFx0XHRcImlkXCI6IDEyMzEyMjMyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiA0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IDQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLmFkZHJlc3MubGF0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogdGhhdC5vcmRlck1zZy5hZGRyZXNzLmxuZyxcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWNvblBhdGhcIjogaWNvblBhdGgsXHJcblx0XHRcdFx0XHRcdFx0XHQnY29vcmRUeXBlJzogJ3dnczg0J1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMxMjIzMyxcclxuXHRcdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogNDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiA0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogdGhhdC5vcmRlck1zZy5zdG9yZS5sYXQsXHJcblx0XHRcdFx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLnN0b3JlLmxuZyxcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWNvblBhdGhcIjogaWNvblBhdGhGLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCdcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWRcIjogMTIzMTIyMzQsXHJcblx0XHRcdFx0XHRcdFx0XHRcIndpZHRoXCI6IDQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogNDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcImxhdGl0dWRlXCI6IGRpYy5sYXQsXHJcblx0XHRcdFx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiBkaWMubG5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpY29uUGF0aFwiOiAnLi4vLi4vLi4vc3RhdGljL3Fpc2hpLWhlYWRlci5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2Nvb3JkVHlwZSc6ICd3Z3M4NCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNhbGxvdXRcIjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImNvbnRlbnRcIjogc2hvd0RpcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6ICc1JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJib3JkZXJSYWRpdXNcIjogJzEyLjUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInRleHRBbGlnblwiOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6ICdBTFdBWVMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6ICcjMzIzMjMyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJiZ0NvbG9yXCI6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJmb250U2l6ZVwiOiAnMTQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdHRoYXQubWFya2VycyA9IG1tbW1cclxuXHRcdFx0XHRcdFx0Ly8gaWYgKHRoYXQubWFya2Vycy5jb3VudCA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGhhdC5tYXJrZXJzLnBvcCgpXHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC5tYXJrZXJzLnB1c2goZGljKVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm1hcmtlcnMpXHJcblx0XHRcdFx0XHRcdHRoYXQuJGZvcmNlVXBkYXRlKClcclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oaW5mbykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhpbmZvKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyBcdG15QW1hcEZ1bi5nZXRSaWRpbmdSb3V0ZSh7XHJcblx0XHRcdFx0Ly8gXHRcdG9yaWdpbjogdGhhdC5vcmRlck1zZy50X2xuZyArICcsJyArIHRoYXQub3JkZXJNc2cudF9sYXQsIC8vJzExNy4xMzUyMTUsMzYuMTkyODMzJyxcclxuXHRcdFx0XHQvLyBcdFx0ZGVzdGluYXRpb246IGRpYy5sbmcgKyAnLCcgKyBkaWMubGF0LCAvLycxMTcuMTM1MjE1LDM2LjI5MjgzMycsXHJcblx0XHRcdFx0Ly8gXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdC8vIFx0XHRcdHZhciBkaXN0YW5jZSA9IGRhdGEucGF0aHNbMF0uZGlzdGFuY2VcclxuXHRcdFx0XHQvLyBcdFx0XHR2YXIgc2hvd0RpcyA9ICcnXHJcblx0XHRcdFx0Ly8gXHRcdFx0dmFyIHNzc3MgPSB0aGF0LmkxOG4ueWlsb3UuanVzaG91amlhbmRpXHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gaWYgKHRoYXQub3JkZXJUeXBlID09IDEgfHwgdGhhdC5vcmRlclR5cGUgPT0gMiB8fCB0aGF0Lm9yZGVyVHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gXHRzc3NzID0gJ+i3neaUtuS7tuWcsCdcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFx0XHRcdC8vIFx0c3NzcyA9ICfot53mnI3liqHlnLAnXHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIFx0XHRcdGlmIChkaXN0YW5jZSA+IDk5OSkge1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0c2hvd0RpcyA9IHNzc3MgKyBwYXJzZUZsb2F0KGRpc3RhbmNlIC8gMTAwMCkudG9GaXhlZCgxKSArICdrbSdcclxuXHRcdFx0XHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0c2hvd0RpcyA9IHNzc3MgKyBkaXN0YW5jZSArICdtJ1xyXG5cdFx0XHRcdC8vIFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHQvLyBkaWMuY2FsbG91dC5jb250ZW50ID0gc2hvd0Rpc1xyXG5cdFx0XHRcdC8vIFx0XHRcdHZhciBpY29uUGF0aCA9ICcnXHJcblx0XHRcdFx0Ly8gXHRcdFx0aWYgKHRoYXQub3JkZXJUeXBlID09IDUpIHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdGljb25QYXRoID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLWJhbi5wbmcnXHJcblx0XHRcdFx0Ly8gXHRcdFx0fSBlbHNlIGlmICh0aGF0Lm9yZGVyVHlwZSA9PSA0KSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRpY29uUGF0aCA9ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL29yZGVyLW1hcC1wYWkucG5nJ1xyXG5cdFx0XHRcdC8vIFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRpY29uUGF0aCA9ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL29yZGVyL29yZGVyLW1hcC1zaG91LnBuZydcclxuXHRcdFx0XHQvLyBcdFx0XHR9XHJcblx0XHRcdFx0Ly8gXHRcdFx0dmFyIG1tbW0gPSBbe1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcImlkXCI6IDEyMzEyMjMyLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcIndpZHRoXCI6IDQ1LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcImhlaWdodFwiOiA0NSxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLnRfbGF0LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLnRfbG5nLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcImljb25QYXRoXCI6IGljb25QYXRoLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHQnY29vcmRUeXBlJzogJ3dnczg0J1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJpZFwiOiAxMjMxMjIzNCxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJ3aWR0aFwiOiA0NSxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJoZWlnaHRcIjogNDUsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogZGljLmxhdCxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJsb25naXR1ZGVcIjogZGljLmxuZyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJpY29uUGF0aFwiOiAnLi4vLi4vLi4vc3RhdGljL3Fpc2hpLWhlYWRlci5wbmcnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHQnY29vcmRUeXBlJzogJ3dnczg0JyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XCJjYWxsb3V0XCI6IHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImNvbnRlbnRcIjogc2hvd0RpcyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcInBhZGRpbmdcIjogJzUnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwiYm9yZGVyUmFkaXVzXCI6ICcxMi41JyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcInRleHRBbGlnblwiOiAnY2VudGVyJyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogJ0FMV0FZUycsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJjb2xvclwiOiAnIzMyMzIzMicsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJiZ0NvbG9yXCI6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImZvbnRTaXplXCI6ICcxNCcsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHRdXHJcblx0XHRcdFx0Ly8gXHRcdFx0aWYgKHRoYXQub3JkZXJUeXBlIDwgNCAmJiB0aGF0Lm9yZGVyTXNnLmV4dHJhLnR5cGUgIT0gMikge1xyXG5cclxuXHRcdFx0XHQvLyBcdFx0XHRcdHZhciBpY29uUGF0aEYgPSAnLi4vLi4vc3RhdGljL2ltYWdlcy9vcmRlci9vcmRlci1tYXAtcXUucG5nJ1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0aWYgKHRoYXQub3JkZXJUeXBlID09IDMpIHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0aWNvblBhdGhGID0gJy4uLy4uL3N0YXRpYy9pbWFnZXMvb3JkZXIvb3JkZXItbWFwLW1haS5wbmcnXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRtbW1tID0gW3tcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImlkXCI6IDEyMzEyMjMyLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwid2lkdGhcIjogNDUsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogNDUsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLnRfbGF0LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwibG9uZ2l0dWRlXCI6IHRoYXQub3JkZXJNc2cudF9sbmcsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJpY29uUGF0aFwiOiBpY29uUGF0aCxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHQnY29vcmRUeXBlJzogJ3dnczg0J1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJpZFwiOiAxMjMxMjIzMyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcIndpZHRoXCI6IDQ1LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IDQ1LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwibGF0aXR1ZGVcIjogdGhhdC5vcmRlck1zZy5mX2xhdCxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImxvbmdpdHVkZVwiOiB0aGF0Lm9yZGVyTXNnLmZfbG5nLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwiaWNvblBhdGhcIjogaWNvblBhdGhGLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdCdjb29yZFR5cGUnOiAnd2dzODQnXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcImlkXCI6IDEyMzEyMjM0LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwid2lkdGhcIjogNDUsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogNDUsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJsYXRpdHVkZVwiOiBkaWMubGF0LFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwibG9uZ2l0dWRlXCI6IGRpYy5sbmcsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XCJpY29uUGF0aFwiOiAnLi4vLi4vLi4vc3RhdGljL3Fpc2hpLWhlYWRlci5wbmcnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdCdjb29yZFR5cGUnOiAnd2dzODQnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFwiY2FsbG91dFwiOiB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcImNvbnRlbnRcIjogc2hvd0RpcyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFwicGFkZGluZ1wiOiAnNScsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcImJvcmRlclJhZGl1c1wiOiAnMTIuNScsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcInRleHRBbGlnblwiOiAnY2VudGVyJyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiAnQUxXQVlTJyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogJyMzMjMyMzInLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XCJiZ0NvbG9yXCI6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFwiZm9udFNpemVcIjogJzE0JyxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHRcdF1cclxuXHRcdFx0XHQvLyBcdFx0XHR9XHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gaWYgKHRoYXQubWFya2Vycy5jb3VudCA9PSAyKSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gXHR0aGF0Lm1hcmtlcnMucG9wKClcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gXHRcdFx0Ly8gdGhhdC5tYXJrZXJzLnB1c2goZGljKVxyXG5cclxuXHRcdFx0XHQvLyBcdFx0XHR0aGF0Lm1hcmtlcnMgPSBtbW1tXHJcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXJrZXJzKVxyXG5cdFx0XHRcdC8vIFx0XHRcdHRoYXQuJGZvcmNlVXBkYXRlKClcclxuXHJcblx0XHRcdFx0Ly8gXHRcdH0sXHJcblx0XHRcdFx0Ly8gXHRcdGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhpbmZvKVxyXG5cdFx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6K6i5Y2V6L+96LiqXHJcblx0XHRcdGRvT3JkZXJTdGF0ZURldGFpbCgpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuL29yZGVydHJhY2tpbmc/b3JkZXJJRD0nICsgdGhpcy5vcmRlcklEXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/pgIDmrL7ov5vluqZcclxuXHRcdFx0dHVpa3VhbmppbmR1KCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJ3JlZnVuZE9yZGVyL3JlZnVuZERldGFpbHM/b3JkZXJJRD0nICsgdGhpcy5vcmRlcklEXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaGFuZ2UoZSkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9BcHBseVJldHVybk1vbmV5KCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4vcmVmdW5kT3JkZXIvYXBwbHlSZWZ1bmQ/b3JkZXJJRD0nICsgdGhpcy5vcmRlcklEICsgJyZvcmRlcm5vPScgKyB0aGlzLm9yZGVyTXNnXHJcblx0XHRcdFx0XHRcdC5vcmRlcm5vICsgJyZtb25leT0nICsgdGhpcy5vcmRlck1zZy5tb25leVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYWxsKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdFx0XHRcdHBob25lTnVtYmVyOiB0aGF0Lm9yZGVyTXNnLnJpZGVyLm1vYmlsZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dCaWdJbWFnZShpbmRleCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y3VycmVudDogaW5kZXgsXHJcblx0XHRcdFx0XHR1cmxzOiB0aGF0Lm9yZGVyTXNnLnRodW1icyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcmljZU1lc3NhZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1Nob3dQcmljZSA9ICF0aGlzLmlzU2hvd1ByaWNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvcHlXb3JkKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHRcdGRhdGE6IHRoYXQub3JkZXJNc2cub3JkZXJub1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WkjeWItuaIkOWKnycsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaG1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRsZXQgY3VycmVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcclxuXHRcdFx0XHRsZXQgdHkgPSBjdXJyZW50WSAtIHRoaXMubGFzdFk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudFksdHksdGhpcy5sYXN0WSlcclxuXHRcdFx0XHRsZXQgdGV4dCA9ICcnXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdGlmICh0eSA8IDApIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RUWSA+IDAgJiYgdGhpcy5sYXN0VFkgPCA1KSB7XHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGV4dCA9ICflkJHkuIrmu5HliqgnO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5ID4gMCkge1xyXG5cdFx0XHRcdFx0dGV4dCA9ICflkJHkuIvmu5HliqgnO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubGFzdFRZIDwgMCAmJiB0aGlzLmxhc3RUWSA+IC01KSB7XHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmxhc3RUWSA9IHR5XHJcblx0XHRcdFx0Ly8gdGhpcy5vcGFjaXR5ID0gMC41XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI2RldGFpbGVWaWV3JykuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGxldCBhYWFhID0gdGhpcy53aW5kb3dIZWlnaHQgLSBkYXRhLmJvdHRvbVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYWFhYSAsdGhpcy53aW5kb3dIZWlnaHQgLGRhdGEuYm90dG9tKVxyXG5cdFx0XHRcdFx0Ly/lsIblvZPliY3lnZDmoIfov5vooYzkv53lrZjku6Xov5vooYzkuIvkuIDmrKHorqHnrpdcclxuXHRcdFx0XHRcdGlmIChhYWFhIDwgNDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWV3VG9wID0gdGhpcy52aWV3VG9wICsgdHlcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudmlld1RvcCA+IHRoaXMuaW5pdFRvcCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudmlld1RvcCA9IHRoaXMuaW5pdFRvcFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMub25jaGFuZ2VPcGFjaXR5KClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0eSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdUb3AgKyB0eVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMub25jaGFuZ2VPcGFjaXR5KClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMubGFzdFkgPSBjdXJyZW50WTtcclxuXHRcdFx0XHR9KS5leGVjKCk7XHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0aGFuZGxldG91Y2hzdGFydDogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmxhc3RZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0dGhpcy5tb3ZlQXBwUGx1cygpXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0bW92ZUFwcFBsdXMoKSB7XHJcblx0XHRcdFx0Y29uc3QgZHJhcHZpZXcgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnMuZGV0YWlsZVZpZXcpXHJcblx0XHRcdFx0b2JqID0gQmluZGluZy5iaW5kKHtcclxuXHRcdFx0XHRcdGFuY2hvcjogZHJhcHZpZXcsXHJcblx0XHRcdFx0XHRldmVudFR5cGU6ICdwYW4nLFxyXG5cdFx0XHRcdFx0cHJvcHM6IFt7XHJcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IGRyYXB2aWV3LFxyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eTogJ3RyYW5zZm9ybS50cmFuc2xhdGVZJyxcclxuXHRcdFx0XHRcdFx0ZXhwcmVzc2lvbjogYHkrJHt0aGlzLnBvc2l0aW9uLnl9YCxcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlLnN0YXRlID09PSAnZW5kJykge1xyXG5cdFx0XHRcdFx0XHQvLyBCaW5kaW5nLnVuYmluZCh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dG9rZW46IG9iai50b2tlbixcclxuXHRcdFx0XHRcdFx0Ly8gXHRldmVudFR5cGU6ICdwYW4nXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGUuZGVsdGFZKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uLnkgKz0gZS5kZWx0YVlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5wb3NpdGlvbi55KVxyXG5cdFx0XHRcdFx0XHR0aGlzLm9uY2hhbmdlT3BhY2l0eSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0RWwoZWwpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWwgPT09ICdudW1iZXInKSByZXR1cm4gZWw7XHJcblx0XHRcdFx0aWYgKFdYRW52aXJvbm1lbnQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbC5yZWY7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWwgOiBlbC4kZWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmNoYW5nZU9wYWNpdHkoKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWV3VG9wKVxyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJyNkZXRhaWxlVmlldycpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0Y29uc3QgZHJhcHZpZXcgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnMuZGV0YWlsZVZpZXcpXHJcblx0XHRcdFx0XHRsZXQgbW92ZVkgPSAwXHJcblx0XHRcdFx0XHRsZXQgdGltZSA9IDUwMFxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuYm90dG9tIDwgdGhpcy53aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRtb3ZlWSA9IC0odGhpcy5wb3NpdGlvbi55ICsgZGF0YS5oZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodCAvIDMpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnBvc2l0aW9uLnkgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bW92ZVkgPSAwIC0gdGhpcy5wb3NpdGlvbi55XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IGV4cHJlc3Npb25feSA9XHJcblx0XHRcdFx0XHRcdGBlYXNlSW5PdXRDdWJpYyh0LCR7dGhpcy5wb3NpdGlvbi55fSwke21vdmVZfSwke3RpbWV9KWBcclxuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBCaW5kaW5nLmJpbmQoe1xyXG5cdFx0XHRcdFx0XHRldmVudFR5cGU6ICd0aW1pbmcnLFxyXG5cdFx0XHRcdFx0XHRleGl0RXhwcmVzc2lvbjogYHQ+PSR7dGltZX1gLFxyXG5cdFx0XHRcdFx0XHRwcm9wczogW3tcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50OiBkcmFwdmlldyxcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eTogJ3RyYW5zZm9ybS50cmFuc2xhdGVZJyxcclxuXHRcdFx0XHRcdFx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uX3lcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlLnN0YXRlID09PSAnZW5kJyB8fCBlLnN0YXRlID09PSAnZXhpdCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uLnkgKz0gbW92ZVlcclxuXHRcdFx0XHRcdFx0XHQvLyBCaW5kaW5nLnVuYmluZCh7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXHRldmVudFR5cGU6ICd0aW1pbmcnLFxyXG5cdFx0XHRcdFx0XHRcdC8vIFx0dG9rZW46IHJlc3VsdC5nZXNUb2tlblxyXG5cdFx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gaWYgKGRhdGEuYm90dG9tIDwgKGRhdGEuaGVpZ2h0IC0gKHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy52aWV3VG9wKSArIDQwKSkge1xyXG5cdFx0XHRcdFx0Ly8gXHR0aGlzLnBvc2l0aW9uLnkgPSAtKGRhdGEuaGVpZ2h0IC0gKHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy52aWV3VG9wKSArIDQwKVxyXG5cdFx0XHRcdFx0Ly8gXHR0aGlzLm1vdmVBcHBQbHVzKClcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vIGlmIChkYXRhLnRvcCA+PSB0aGlzLnZpZXdUb3ApIHtcclxuXHRcdFx0XHRcdC8vIFx0dGhpcy5wb3NpdGlvbi55ID0gMFxyXG5cdFx0XHRcdFx0Ly8gXHR0aGlzLm1vdmVBcHBQbHVzKClcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEudG9wLCBkYXRhLmJvdHRvbSlcclxuXHRcdFx0XHRcdC8v5bCG5b2T5YmN5Z2Q5qCH6L+b6KGM5L+d5a2Y5Lul6L+b6KGM5LiL5LiA5qyh6K6h566XXHJcblx0XHRcdFx0XHRpZiAoZGF0YS50b3AgPD0gdGhpcy5zdGF0dXNCYXJIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gKHRoaXMuc3RhdHVzQmFySGVpZ2h0IC0gZGF0YS50b3ApIC8gdGhpcy5zdGF0dXNCYXJIZWlnaHQgPiAxID8gMSA6ICh0aGlzXHJcblx0XHRcdFx0XHRcdFx0LnN0YXR1c0JhckhlaWdodCAtIGRhdGEudG9wKSAvIHRoaXMuc3RhdHVzQmFySGVpZ2h0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9DdWlkYW4oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coMjEyMTEyMTIpXHJcblx0XHRcdFx0dGhpcy5zaG93Q3VpZGFuID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdWlkYW5sZShzdHIpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dDdWlkYW4gPSBmYWxzZVxyXG5cdFx0XHRcdGlmIChzdHIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0XHRodHRwLnNlbmRSZXF1ZXN0KCdNZXJjaGFudFN0b3JlT3JkZXIuUmVtaW5kZXInLCB7XHJcblx0XHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJJRCxcclxuXHRcdFx0XHRcdFx0J2NvbnRlbnQnOiBzdHJcclxuXHRcdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTpyZXMubXNnLFxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246MjAwMFxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaWFueGkoaWQpIHtcclxuXHRcdFx0XHRpZiAoaWQgPT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMudG9wX3R5cGVfaWQgPT0gMSkge1xuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6ICcuL29yZGVyRXZhbHVhdGU/b3JkZXJJRD0nICsgdGhpcy5vcmRlcklEXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3BfdHlwZV9pZCA9PSAzKSB7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogJy4vZnV3dUVWQT9vcmRlcklEPScgKyB0aGlzLm9yZGVySURcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnRvcF90eXBlX2lkID09IDIpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudG9wX3R5cGVfaWQgPT0gNCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogJy4vbWFya2V0RVZBP29yZGVySUQ9JyArIHRoaXMub3JkZXJJRFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpZCA9PSAxKSB7XHJcblx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRcdGh0dHAuc2VuZFJlcXVlc3QoJ01lcmNoYW50U3RvcmVPcmRlci5TdWJtaXRPcmRlcicsIHtcclxuXHRcdFx0XHRcdFx0J3JpZGVyX2lkJzogdGhhdC5vcmRlck1zZy5yaWRlci5pZCxcclxuXHRcdFx0XHRcdFx0J29yZGVyaWQnOiB0aGF0Lm9yZGVyTXNnLm9yZGVyX2lkLFxyXG5cdFx0XHRcdFx0XHQnb3JkZXJfdHlwZSc6IDFcclxuXHRcdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHZhciBkaWMgPSB7XHJcblx0XHRcdFx0XHRcdFx0b3JkZXJudW06IHRoYXQub3JkZXJNc2cub3JkZXJfaWQsXHJcblx0XHRcdFx0XHRcdFx0aWQ6IHRoYXQub3JkZXJNc2cuaWQsXHJcblx0XHRcdFx0XHRcdFx0YWRzOiB0aGF0Lm9yZGVyTXNnLmFkZHJlc3MucGxhY2UgKyB0aGF0Lm9yZGVyTXNnLmFkZHJlc3MuYWRkcixcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAwXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3QgZGljc3RyID0gSlNPTi5zdHJpbmdpZnkoZGljKVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkaWNzdHIpXHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvVFVJLUNoYXQvY2hhdD9jb252ZXJzYXRpb25JRD1DMkMke3RoYXQub3JkZXJNc2cucmlkZXJfaW0udWlkfSZvcmRlcj0ke2RpY3N0cn1gXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0Ly8gXHR1cmw6IGAvcGFnZXMvVFVJLUNoYXQvY2hhdD9jb252ZXJzYXRpb25JRD1DMkMke3RoaXMub3JkZXJNc2cucmlkZXJfaW0udWlkfWBcclxuXHRcdFx0XHRcdC8vIH0pXHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaWQgPT0gMikge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvVFVJLUNoYXQvY2hhdD9jb252ZXJzYXRpb25JRD1DMkMke3RoaXMub3JkZXJNc2cuaW0udWlkfWBcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRcdHBob25lTnVtYmVyOiB0aGlzLm9yZGVyTXNnLnN0b3JlLnBob25lXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcblx0XHRcdGNsb3NlUGF5VmlldyhlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdFx0XG5cdFx0XHRcdHRoYXQuc2hvd3BheSA9IGZhbHNlXG5cdFx0XHRcdGlmIChlID09IDApIHtcblx0XHRcdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciB1cmwgPSAnJ1xuXHRcdFx0XHRcdHZhciBkaWMgPSB7XG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHRcdFx0XHRcdCdwYXlfdHlwZSc6IGUuaWQsXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJNc2cuaWQsXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXG5cdFx0XHRcdFx0XHQnb3BlbmlkJzogdW5pLmdldFN0b3JhZ2VTeW5jKCdvcGVuaWQnKSxcblx0XHRcdFx0XHRcdCdwYXlfdHlwZSc6IGUuaWQgPT0gMiA/ICczJyA6IGUuaWQsXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHRcdHVybCA9ICdNZXJjaGFudFN0b3JlT3JkZXIuUGF5J1xuXHRcdFx0XG5cdFx0XHRcdFx0aHR0cC5zZW5kUmVxdWVzdCh1cmwsIGRpYykudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLmlkID09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkucmVxdWVzdFBheW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvdmlkZXI6ICdhbGlwYXknLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJJbmZvOiByZXMuaW5mb1swXS5hbGlcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lm9yZGVyaW5mbywgLy/lvq7kv6HjgIHmlK/ku5jlrp3orqLljZXmlbDmja4g44CQ5rOo5oSP5b6u5L+h55qE6K6i5Y2V5L+h5oGv77yM6ZSu5YC85bqU6K+l5YWo6YOo5piv5bCP5YaZ77yM5LiN6IO96YeH55So6am85bOw5ZG95ZCN44CRXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jmiJDlip8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzOicgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3RPcmRlckRlYXRpbGVzKClcblx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZmFpbDonICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGUuaWQgPT0gMikge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0UGF5bWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcInByb3ZpZGVyXCI6IFwid3hwYXlcIixcblx0XHRcdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJvcmRlckluZm9cIjogcmVzLmluZm9bMF0ud3gsXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cblx0XHRcdFx0XHRcdFx0XHRcdCd0aW1lU3RhbXAnOiByZXMuaW5mb1swXS5zbWFsbC50aW1lU3RhbXAsXG5cdFx0XHRcdFx0XHRcdFx0XHQnbm9uY2VTdHInOiByZXMuaW5mb1swXS5zbWFsbC5ub25jZVN0cixcblx0XHRcdFx0XHRcdFx0XHRcdCdwYWNrYWdlJzogcmVzLmluZm9bMF0uc21hbGwucGFja2FnZSxcblx0XHRcdFx0XHRcdFx0XHRcdCdzaWduVHlwZSc6IHJlcy5pbmZvWzBdLnNtYWxsLnNpZ25UeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0J3BheVNpZ24nOiByZXMuaW5mb1swXS5zbWFsbC5zaWduLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwiYXBwaWRcIjogXCJ3eDQ5OSoqKioqKioqN2M3MGVcIiwgIC8vIOW+ruS/oeW8gOaUvuW5s+WPsCAtIOW6lOeUqCAtIEFwcElk77yM5rOo5oSP5ZKM5b6u5L+h5bCP56iL5bqP44CB5YWs5LyX5Y+3IEFwcElkIOWPr+iDveS4jeS4gOiHtFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwibm9uY2VzdHJcIjogXCJjNXNFd2JhTlBpWEFGM2l2XCIsIC8vIOmaj+acuuWtl+espuS4slxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwicGFja2FnZVwiOiBcIlNpZ249V1hQYXlcIiwgICAgICAgIC8vIOWbuuWumuWAvFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwicGFydG5lcmlkXCI6IFwiMTQ4KioqKio1MlwiLCAgICAgIC8vIOW+ruS/oeaUr+S7mOWVhuaIt+WPt1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwicHJlcGF5aWRcIjogXCJ3eDIwMjI1NCoqKioqKioqKioqKioqKioqKioqZmJlOTAwMDBcIiwgLy8g57uf5LiA5LiL5Y2V6K6i5Y2V5Y+3IFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICAgIFwidGltZXN0YW1wXCI6IDE1OTc5MzUyOTIsICAgICAgICAvLyDml7bpl7TmiLPvvIjljZXkvY3vvJrnp5LvvIlcblx0XHRcdFx0XHRcdFx0XHRcdC8vICAgICBcInNpZ25cIjogXCJBODQyQjQ1OTM3RjZFRkY2MERFQzdBMkVBQTUyRDVBMFwiIC8vIOetvuWQje+8jOi/memHjOeUqOeahCBNRDUg562+5ZCNXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aUr+S7mOaIkOWKnycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoYXQuZG9CYWNrKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0T3JkZXJEZWF0aWxlcygpXG5cdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWlsKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pSv5LuY5oiQ5YqfJyxcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQvLyBpZiAodXJsID09ICdPcmRlcnMuRmVlJykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFx0dGhhdC5vcmRlck1zZy5mZWUgPSB0aGF0Lm9yZGVyTXNnLmZlZSAqIDEgKyB0aGF0LmFkZFRpcE1vbmV5ICogMVxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0dGhhdC5vcmRlck1zZy5tb25leSA9IHRoYXQub3JkZXJNc2cubW9uZXkgKiAxICsgdGhhdC5hZGRUaXBNb25leSAqIDFcblx0XHRcdFx0XHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRoYXQuZG9CYWNrKClcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3RPcmRlckRlYXRpbGVzKClcblx0XHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGRvVGlodW9tYSgpIHtcblx0XHRcdFx0dGhpcy5zaG93VGlodW9tYSA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRkb2Z1d3V3YW5jaGVuZygpIHtcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0XHR0aXRsZTogJyAgJ1xuXHRcdFx0XHR9KVxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcblx0XHRcdFx0aHR0cC5zZW5kUmVxdWVzdCgnU2VydmUuU2VydmljZUNvbXBsZXRlJywge1xuXHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJJRCxcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGF0LnJlcXVlc3RPcmRlckRlYXRpbGVzKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxuXHRcdFx0XHR9LCAyMDAwKTtcblx0XHRcdH0sXG5cdFx0XHRkb0NhbmNsZU9yZGVyKCkge1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfmmK/lkKbnoa7lrprlj5bmtojorqLljZUnLFxuXHRcdFx0XHRcdHNob3dDYW5jZWw6IHRydWUsXG5cdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXG5cdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfnoa7lrponLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yZXF1ZXN0Q2FuY2xlKCdNZXJjaGFudFN0b3JlT3JkZXIuQ2FuY2VsJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRyZXF1ZXN0Q2FuY2xlKGUpIHtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXG5cdFx0XHRcdGh0dHAuc2VuZFJlcXVlc3QoZSwge1xuXHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJJRFxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHRcdFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGRvUGF5T3JkZXIoKSB7XG5cdFx0XHRcdHRoaXMuYWRkVGlwTW9uZXkgPSAwXG5cdFx0XHRcdHRoaXMucGF5TW9uZXkgPSB0aGlzLm9yZGVyTXNnLnBheV9wcmljZVxuXHRcdFx0XHR0aGlzLnNob3dwYXkgPSB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0c2hvd3RpbWUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNvdW50X2Rvd24gPCAwKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHRcdFx0XHRcdHRoaXMucmVxdWVzdE9yZGVyRGVhdGlsZXMoKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBtaW4gPSBNYXRoLmZsb29yKHRoaXMuY291bnRfZG93biAvIDYwKVxuXHRcdFx0XHRcdHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcih0aGlzLmNvdW50X2Rvd24gJSA2MClcblx0XHRcdFx0XHRpZiAobWluIDwgMTApIHtcblx0XHRcdFx0XHRcdG1pbiA9ICcwJyArIG1pblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2Vjb25kcyA8IDEwKSB7XG5cdFx0XHRcdFx0XHRzZWNvbmRzID0gJzAnICsgc2Vjb25kc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvdW50X2Rvd25TdHIgPSBtaW4gKyAnOicgKyBzZWNvbmRzXG5cdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0b3JkZXJBZ2FpbigpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm9yZGVySUQsdGhhdC50b3BfdHlwZV9pZClcblx0XHRcdFx0aHR0cC5zZW5kUmVxdWVzdCgnTWVyY2hhbnRTdG9yZU9yZGVyLkFnYWluJywge1xuXHRcdFx0XHRcdCdpZCc6IHRoYXQub3JkZXJJRCxcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0Ly8gdGhhdC5saXN0QXJyYXkgPSByZXMuaW5mb1xuXHRcdFx0XHRcdC8vMTrnvo7po58gMjrpl6rpgIEgMzrmnI3liqEgNDrmib7lupcgNTrotoXluIIgNjrnlJ/pspwgNzrpgIHoja8gODrlrrbmlL9cblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoYXQudG9wX3R5cGVfaWQgPT0gMSkge1xuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhY2thZ2UtbWVpc2hpL3BhZ2VzL3N0b3JlL3N0b3JlP2lkPScgKyB0aGF0Lm9yZGVyTXNnLnN0b3JlLmlkXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoYXQudG9wX3R5cGVfaWQgPT0gMykge1xuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhY2thZ2Utb3RoZXIvcGFnZXMvc2VydmljZS9kZXRhaWxlL2luZGV4P2lkPScgKyB0aGF0Lm9yZGVyTXNnXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3RvcmUuaWRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhhdC50b3BfdHlwZV9pZCA9PSAyKSB7XG5cdFx0XHRcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhhdC50b3BfdHlwZV9pZCA9PSA0KSB7XG5cdFx0XHRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFja2FnZS1vdGhlci9wYWdlcy9tYXJrZXQvc3RvcmUvc3RvcmU/aWQ9JyArIHRoYXQub3JkZXJNc2cuc3RvcmVcblx0XHRcdFx0XHRcdFx0XHRcdC5pZCArICcmdHlwZT0nICsgdGhhdC50b3BfdHlwZV9pZFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5wYWdlIHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHQvKiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQucm93IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LmNvbHVtbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5tYXBWaWV3IHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMUFBRDE5O1xyXG5cdH1cclxuXHJcblx0LnJldHVybkltYWdlIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlsZVZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDI0cnB4O1xyXG5cdFx0d2lkdGg6IDcwMnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXJTdGF0ZUxhYmVsIHtcclxuXHRcdHdpZHRoOiAxNDBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjgxcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMzIzMjMyO1xyXG5cdH1cclxuXHJcblx0LmxhYmVsLTMwSCB7XHJcblx0XHRsaW5lLWhlaWdodDogMjhweDtcclxuXHRcdGhlaWdodDogMjhweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiAjOTg5ODk4O1xyXG5cdFx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lml0ZW1fdmlldyB7XHJcblxyXG5cdFx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDY0MnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtaW4taGVpZ2h0OiAzMnB4O1xyXG5cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cdC5pdGVtX3ZpZXdfdnVlIHtcblx0XG5cdFx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xuXHRcdHdpZHRoOiA2OTBycHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtaW4taGVpZ2h0OiAzMnB4O1xuXHRcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XHJcblx0Lml0ZW0tdGl0bGUtbGFiZWwge1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzFBQUQxOTsgKi9cclxuXHRcdG1hcmdpbi10b3A6IDZweDtcclxuXHRcdGNvbG9yOiAjNkY2RjZGO1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHR3aWR0aDogMzAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW0tZGVzLWxhYmVsIHtcclxuXHRcdG1hcmdpbi10b3A6IDZweDtcclxuXHRcdGNvbG9yOiAjMTgxODE4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0d2lkdGg6IDM0MnJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDZweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblx0Lml0ZW0tZGVzLWxhYmVsLXZ1ZSB7XHJcblx0XHRtYXJnaW4tdG9wOiA2cHg7XHJcblx0XHRjb2xvcjogIzE4MTgxODtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHdpZHRoOiAzOTBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA2cHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cdC5vcmRlckNlbGwtZHRhbC1oZWFkZXItdHlwZUxhYmVsIHtcclxuXHRcdG1hcmdpbi10b3A6IDE2cHg7XHJcblx0XHR3aWR0aDogNTZweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lm9yZGVyLWFkcy1pdGVtLWN5Y2xlIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNGRjU3MjU7XHJcblx0XHRtYXJnaW4tbGVmdDogOXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjguNXB4O1xyXG5cdFx0LyogZmxleC1zaHJpbms6IDA7ICovXHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyAqL1xyXG5cdH1cclxuXHJcblx0Lm9yZGVyLWFkcy1pdGVtLW1pZGRsZSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyAqL1xyXG5cdFx0LyogZmxleC1zaHJpbms6IDE7ICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0Lm9yZGVyLWFkcy1pdGVtLWFkcyB7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMzIzMjMyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1hZHMtaXRlbS1hZHMtdGlwIHtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Y29sb3I6ICM5ODk4OTg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHRcclxuXHQuc3RhdHVzX3RleHQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMzJweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGNTcyNTtcclxuXHR9XHJcblxyXG5cdC5zdG9yZV9saWFueGkge1xyXG5cdFx0bWFyZ2luLXRvcDogMjhweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHRcdHdpZHRoOiA2NDJycHg7XHJcblx0XHRoZWlnaHQ6IDY0cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNGRjU3MjU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHQvKiBib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI0ZGNTcyNTsgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR9XHJcblxyXG5cdC5zdG9yZV9uYW1lIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG5cdFx0aGVpZ2h0OiA2NHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDY0cHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5vcmRlcnhpYW5neGl4aW54aSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tX3ZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHR9XHJcblxyXG5cdC5ib3R0b21fY29udGVudFZpZXcge1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IDEwcHggcmdiYSg1MCwgNTAsIDU5LCAwLjEpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNDBweDtcclxuXHR9XHJcblxyXG5cdC5ib3R0b21fYnV0dG9uIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHRcdHdpZHRoOiA2OTBycHg7XHJcblx0XHRoZWlnaHQ6IDQ5cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDlweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cblx0LnRvcFZpZXcge1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGNTcyNTtcblx0XHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRTgzMjgsICNGRjRCMjEpOyAqL1xuXHR9XG5cdC5CYWNrLXNjcm9sbCB7XG5cdFx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuXHRcdC8qIG1hcmdpbi1sZWZ0OiAxMnB4OyAqL1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///102\n");

/***/ }),
/* 103 */
/*!*******************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tihuoma.vue?vue&type=template&id=19bd01df& */ 104);\n/* harmony import */ var _tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tihuoma.vue?vue&type=script&lang=js& */ 106);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./tihuoma.vue?vue&type=style&index=0&lang=css& */ 109).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./tihuoma.vue?vue&type=style&index=0&lang=css& */ 109).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5c4e8581\",\n  false,\n  _tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"package-mine/components/tihuoma.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlEQUFnRDtBQUNwRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseURBQWdEO0FBQ3pHOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RpaHVvbWEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YmQwMWRmJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGlodW9tYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RpaHVvbWEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdGlodW9tYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdGlodW9tYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNWM0ZTg1ODFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFja2FnZS1taW5lL2NvbXBvbmVudHMvdGlodW9tYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///103\n");

/***/ }),
/* 104 */
/*!**************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=template&id=19bd01df& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tihuoma.vue?vue&type=template&id=19bd01df& */ 105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_template_id_19bd01df___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 105 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=template&id=19bd01df& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["uni-mask-nvue"],
      staticStyle: { alignItems: "center", justifyContent: "center" },
    },
    [
      _c("view", { staticClass: ["white_view", "column"] }, [
        _c(
          "view",
          {
            staticClass: ["row"],
            staticStyle: {
              marginLeft: "35px",
              width: "calc(100% - 35px)",
              height: "40px",
              alignItems: "center",
            },
          },
          [
            _c(
              "view",
              {
                staticStyle: {
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  flex: "1",
                },
              },
              [_c("u-text", [_vm._v(_vm._s(_vm.i18n.yilou.tihuoma))])]
            ),
            _c("u-image", {
              staticStyle: {
                width: "20px",
                height: "20px",
                marginRight: "15px",
              },
              attrs: { src: "../../static/wy-close.png", mode: "" },
              on: {
                click: function ($event) {
                  _vm.doClose()
                },
              },
            }),
          ],
          1
        ),
        _vm._m(0),
        _c(
          "view",
          {
            staticStyle: {
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              flex: "1",
              height: "50px",
              lineHeight: "50px",
            },
          },
          [_c("u-text", [_vm._v(_vm._s(_vm.orderMsg.verify_code))])]
        ),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticStyle: { width: "180px", height: "180px", marginTop: "20px" } },
      [
        _c("canvas", {
          staticStyle: { width: "180px", height: "180px" },
          attrs: { canvasId: "qrcode" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),
/* 106 */
/*!********************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tihuoma.vue?vue&type=script&lang=js& */ 107);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIxMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGlodW9tYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aWh1b21hLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///106\n");

/***/ }),
/* 107 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _uqrcode = _interopRequireDefault(__webpack_require__(/*! @/package-mine/components/uqrcode.js */ 108));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  computed: {\n    i18n: function i18n() {\n      return getApp().globalData.$t('index');\n    }\n  },\n  props: {\n    orderMsg: {\n      //亮星星\n      type: Object,\n      default: null\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    var that = this;\n    setTimeout(function () {\n      // async loadList() {\n      _uqrcode.default.make({\n        canvasId: 'qrcode',\n        componentInstance: that,\n        text: that.orderMsg.verify_code,\n        size: 180,\n        margin: 0,\n        backgroundColor: '#ffffff',\n        //背景颜色\n        foregroundColor: '#000000',\n        fileType: 'jpg',\n        correctLevel: _uqrcode.default.defaults.correctLevel\n      }).then(function (res) {\n        __f__(\"log\", res, \" at package-mine/components/tihuoma.vue:58\");\n      });\n    }, 500);\n  },\n  methods: {\n    doClose: function doClose() {\n      this.$emit('cuidanle', '');\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFja2FnZS1taW5lL2NvbXBvbmVudHMvdGlodW9tYS52dWUiXSwibmFtZXMiOlsiY29tcHV0ZWQiLCJpMThuIiwicHJvcHMiLCJvcmRlck1zZyIsInR5cGUiLCJkZWZhdWx0IiwiZGF0YSIsImNyZWF0ZWQiLCJzZXRUaW1lb3V0IiwidVFSQ29kZSIsImNhbnZhc0lkIiwiY29tcG9uZW50SW5zdGFuY2UiLCJ0ZXh0Iiwic2l6ZSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImZvcmVncm91bmRDb2xvciIsImZpbGVUeXBlIiwiY29ycmVjdExldmVsIiwibWV0aG9kcyIsImRvQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQSxRQUVBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtFQUVBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIxMDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktbWFzay1udnVlXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ3aGl0ZV92aWV3IGNvbHVtblwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDM1cHg7d2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO2hlaWdodDogNDBweDthbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC1hbGlnbjogY2VudGVyO2ZsZXg6IDE7XCI+XHJcblx0XHRcdFx0XHR7e2kxOG4ueWlsb3UudGlodW9tYX19XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvd3ktY2xvc2UucG5nXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O21hcmdpbi1yaWdodDogMTVweDtcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiZG9DbG9zZSgpXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwid2lkdGg6IDE4MHB4O2hlaWdodDogMTgwcHg7bWFyZ2luLXRvcDogMjBweDtcIj5cclxuXHRcdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cInFyY29kZVwiIHN0eWxlPVwid2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDE4MHB4O1wiPjwvY2FudmFzPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIlwiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiAxODBweDtoZWlnaHQ6IDE4MHB4O1wiPjwvaW1hZ2U+IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO3RleHQtYWxpZ246IGNlbnRlcjtmbGV4OiAxO2hlaWdodDogNTBweDtsaW5lLWhlaWdodDogNTBweDtcIj5cclxuXHRcdFx0XHR7e29yZGVyTXNnLnZlcmlmeV9jb2RlfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1UVJDb2RlIGZyb20gXCJAL3BhY2thZ2UtbWluZS9jb21wb25lbnRzL3VxcmNvZGUuanNcIlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGkxOG4oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldEFwcCgpLmdsb2JhbERhdGEuJHQoJ2luZGV4JylcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRvcmRlck1zZzoge1xyXG5cdFx0XHRcdC8v5Lqu5pif5pifXHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQ6IG51bGxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGFzeW5jIGxvYWRMaXN0KCkge1xyXG5cdFx0XHRcdFx0dVFSQ29kZS5tYWtlKHtcclxuXHRcdFx0XHRcdFx0Y2FudmFzSWQ6ICdxcmNvZGUnLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnRJbnN0YW5jZTogdGhhdCxcclxuXHRcdFx0XHRcdFx0dGV4dDogdGhhdC5vcmRlck1zZy52ZXJpZnlfY29kZSxcclxuXHRcdFx0XHRcdFx0c2l6ZTogMTgwLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLCAvL+iDjOaZr+minOiJslxyXG5cdFx0XHRcdFx0XHRmb3JlZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxuXHRcdFx0XHRcdFx0ZmlsZVR5cGU6ICdqcGcnLFxyXG5cdFx0XHRcdFx0XHRjb3JyZWN0TGV2ZWw6IHVRUkNvZGUuZGVmYXVsdHMuY29ycmVjdExldmVsLFxyXG5cdFx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZG9DbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjdWlkYW5sZScsICcnKVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC53aGl0ZV92aWV3IHtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0XHQvKiBoZWlnaHQ6IDIzMHB4OyAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRleHRfYmFja192aWV3IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG5cdFx0aGVpZ2h0OiAxMTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjc7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0fVxyXG5cclxuXHQudGV4dF92aWV3IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcblx0XHRoZWlnaHQ6IDEwMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tX2J1dHRvbiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjAlO1xyXG5cdFx0d2lkdGg6IDYwJTtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzI1O1xyXG5cdFx0Y29sb3I6ICNGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///107\n");

/***/ }),
/* 108 */
/*!******************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/uqrcode.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// uqrcode.js\n//---------------------------------------------------------------------\n// github https://github.com/Sansnn/uQRCode\n//---------------------------------------------------------------------\n\nvar uQRCode = {};\n(function () {\n  //---------------------------------------------------------------------\n  // QRCode for JavaScript\n  //\n  // Copyright (c) 2009 Kazuhiko Arase\n  //\n  // URL: http://www.d-project.com/\n  //\n  // Licensed under the MIT license:\n  //   http://www.opensource.org/licenses/mit-license.php\n  //\n  // The word \"QR Code\" is registered trademark of \n  // DENSO WAVE INCORPORATED\n  //   http://www.denso-wave.com/qrcode/faqpatent-e.html\n  //\n  //---------------------------------------------------------------------\n\n  //---------------------------------------------------------------------\n  // QR8bitByte\n  //---------------------------------------------------------------------\n\n  function QR8bitByte(data) {\n    this.mode = QRMode.MODE_8BIT_BYTE;\n    this.data = data;\n  }\n  QR8bitByte.prototype = {\n    getLength: function getLength(buffer) {\n      return this.data.length;\n    },\n    write: function write(buffer) {\n      for (var i = 0; i < this.data.length; i++) {\n        // not JIS ...\n        buffer.put(this.data.charCodeAt(i), 8);\n      }\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRCode\n  //---------------------------------------------------------------------\n\n  function QRCode(typeNumber, errorCorrectLevel) {\n    this.typeNumber = typeNumber;\n    this.errorCorrectLevel = errorCorrectLevel;\n    this.modules = null;\n    this.moduleCount = 0;\n    this.dataCache = null;\n    this.dataList = new Array();\n  }\n  QRCode.prototype = {\n    addData: function addData(data) {\n      var newData = new QR8bitByte(data);\n      this.dataList.push(newData);\n      this.dataCache = null;\n    },\n    isDark: function isDark(row, col) {\n      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {\n        throw new Error(row + \",\" + col);\n      }\n      return this.modules[row][col];\n    },\n    getModuleCount: function getModuleCount() {\n      return this.moduleCount;\n    },\n    make: function make() {\n      // Calculate automatically typeNumber if provided is < 1\n      if (this.typeNumber < 1) {\n        var typeNumber = 1;\n        for (typeNumber = 1; typeNumber < 40; typeNumber++) {\n          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);\n          var buffer = new QRBitBuffer();\n          var totalDataCount = 0;\n          for (var i = 0; i < rsBlocks.length; i++) {\n            totalDataCount += rsBlocks[i].dataCount;\n          }\n          for (var i = 0; i < this.dataList.length; i++) {\n            var data = this.dataList[i];\n            buffer.put(data.mode, 4);\n            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));\n            data.write(buffer);\n          }\n          if (buffer.getLengthInBits() <= totalDataCount * 8) break;\n        }\n        this.typeNumber = typeNumber;\n      }\n      this.makeImpl(false, this.getBestMaskPattern());\n    },\n    makeImpl: function makeImpl(test, maskPattern) {\n      this.moduleCount = this.typeNumber * 4 + 17;\n      this.modules = new Array(this.moduleCount);\n      for (var row = 0; row < this.moduleCount; row++) {\n        this.modules[row] = new Array(this.moduleCount);\n        for (var col = 0; col < this.moduleCount; col++) {\n          this.modules[row][col] = null; //(col + row) % 3;\n        }\n      }\n\n      this.setupPositionProbePattern(0, 0);\n      this.setupPositionProbePattern(this.moduleCount - 7, 0);\n      this.setupPositionProbePattern(0, this.moduleCount - 7);\n      this.setupPositionAdjustPattern();\n      this.setupTimingPattern();\n      this.setupTypeInfo(test, maskPattern);\n      if (this.typeNumber >= 7) {\n        this.setupTypeNumber(test);\n      }\n      if (this.dataCache == null) {\n        this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);\n      }\n      this.mapData(this.dataCache, maskPattern);\n    },\n    setupPositionProbePattern: function setupPositionProbePattern(row, col) {\n      for (var r = -1; r <= 7; r++) {\n        if (row + r <= -1 || this.moduleCount <= row + r) continue;\n        for (var c = -1; c <= 7; c++) {\n          if (col + c <= -1 || this.moduleCount <= col + c) continue;\n          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {\n            this.modules[row + r][col + c] = true;\n          } else {\n            this.modules[row + r][col + c] = false;\n          }\n        }\n      }\n    },\n    getBestMaskPattern: function getBestMaskPattern() {\n      var minLostPoint = 0;\n      var pattern = 0;\n      for (var i = 0; i < 8; i++) {\n        this.makeImpl(true, i);\n        var lostPoint = QRUtil.getLostPoint(this);\n        if (i == 0 || minLostPoint > lostPoint) {\n          minLostPoint = lostPoint;\n          pattern = i;\n        }\n      }\n      return pattern;\n    },\n    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {\n      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);\n      var cs = 1;\n      this.make();\n      for (var row = 0; row < this.modules.length; row++) {\n        var y = row * cs;\n        for (var col = 0; col < this.modules[row].length; col++) {\n          var x = col * cs;\n          var dark = this.modules[row][col];\n          if (dark) {\n            qr_mc.beginFill(0, 100);\n            qr_mc.moveTo(x, y);\n            qr_mc.lineTo(x + cs, y);\n            qr_mc.lineTo(x + cs, y + cs);\n            qr_mc.lineTo(x, y + cs);\n            qr_mc.endFill();\n          }\n        }\n      }\n      return qr_mc;\n    },\n    setupTimingPattern: function setupTimingPattern() {\n      for (var r = 8; r < this.moduleCount - 8; r++) {\n        if (this.modules[r][6] != null) {\n          continue;\n        }\n        this.modules[r][6] = r % 2 == 0;\n      }\n      for (var c = 8; c < this.moduleCount - 8; c++) {\n        if (this.modules[6][c] != null) {\n          continue;\n        }\n        this.modules[6][c] = c % 2 == 0;\n      }\n    },\n    setupPositionAdjustPattern: function setupPositionAdjustPattern() {\n      var pos = QRUtil.getPatternPosition(this.typeNumber);\n      for (var i = 0; i < pos.length; i++) {\n        for (var j = 0; j < pos.length; j++) {\n          var row = pos[i];\n          var col = pos[j];\n          if (this.modules[row][col] != null) {\n            continue;\n          }\n          for (var r = -2; r <= 2; r++) {\n            for (var c = -2; c <= 2; c++) {\n              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {\n                this.modules[row + r][col + c] = true;\n              } else {\n                this.modules[row + r][col + c] = false;\n              }\n            }\n          }\n        }\n      }\n    },\n    setupTypeNumber: function setupTypeNumber(test) {\n      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);\n      for (var i = 0; i < 18; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;\n      }\n      for (var i = 0; i < 18; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;\n      }\n    },\n    setupTypeInfo: function setupTypeInfo(test, maskPattern) {\n      var data = this.errorCorrectLevel << 3 | maskPattern;\n      var bits = QRUtil.getBCHTypeInfo(data);\n\n      // vertical\t\t\n      for (var i = 0; i < 15; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 6) {\n          this.modules[i][8] = mod;\n        } else if (i < 8) {\n          this.modules[i + 1][8] = mod;\n        } else {\n          this.modules[this.moduleCount - 15 + i][8] = mod;\n        }\n      }\n\n      // horizontal\n      for (var i = 0; i < 15; i++) {\n        var mod = !test && (bits >> i & 1) == 1;\n        if (i < 8) {\n          this.modules[8][this.moduleCount - i - 1] = mod;\n        } else if (i < 9) {\n          this.modules[8][15 - i - 1 + 1] = mod;\n        } else {\n          this.modules[8][15 - i - 1] = mod;\n        }\n      }\n\n      // fixed module\n      this.modules[this.moduleCount - 8][8] = !test;\n    },\n    mapData: function mapData(data, maskPattern) {\n      var inc = -1;\n      var row = this.moduleCount - 1;\n      var bitIndex = 7;\n      var byteIndex = 0;\n      for (var col = this.moduleCount - 1; col > 0; col -= 2) {\n        if (col == 6) col--;\n        while (true) {\n          for (var c = 0; c < 2; c++) {\n            if (this.modules[row][col - c] == null) {\n              var dark = false;\n              if (byteIndex < data.length) {\n                dark = (data[byteIndex] >>> bitIndex & 1) == 1;\n              }\n              var mask = QRUtil.getMask(maskPattern, row, col - c);\n              if (mask) {\n                dark = !dark;\n              }\n              this.modules[row][col - c] = dark;\n              bitIndex--;\n              if (bitIndex == -1) {\n                byteIndex++;\n                bitIndex = 7;\n              }\n            }\n          }\n          row += inc;\n          if (row < 0 || this.moduleCount <= row) {\n            row -= inc;\n            inc = -inc;\n            break;\n          }\n        }\n      }\n    }\n  };\n  QRCode.PAD0 = 0xEC;\n  QRCode.PAD1 = 0x11;\n  QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {\n    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);\n    var buffer = new QRBitBuffer();\n    for (var i = 0; i < dataList.length; i++) {\n      var data = dataList[i];\n      buffer.put(data.mode, 4);\n      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));\n      data.write(buffer);\n    }\n\n    // calc num max data.\n    var totalDataCount = 0;\n    for (var i = 0; i < rsBlocks.length; i++) {\n      totalDataCount += rsBlocks[i].dataCount;\n    }\n    if (buffer.getLengthInBits() > totalDataCount * 8) {\n      throw new Error(\"code length overflow. (\" + buffer.getLengthInBits() + \">\" + totalDataCount * 8 + \")\");\n    }\n\n    // end code\n    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {\n      buffer.put(0, 4);\n    }\n\n    // padding\n    while (buffer.getLengthInBits() % 8 != 0) {\n      buffer.putBit(false);\n    }\n\n    // padding\n    while (true) {\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(QRCode.PAD0, 8);\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(QRCode.PAD1, 8);\n    }\n    return QRCode.createBytes(buffer, rsBlocks);\n  };\n  QRCode.createBytes = function (buffer, rsBlocks) {\n    var offset = 0;\n    var maxDcCount = 0;\n    var maxEcCount = 0;\n    var dcdata = new Array(rsBlocks.length);\n    var ecdata = new Array(rsBlocks.length);\n    for (var r = 0; r < rsBlocks.length; r++) {\n      var dcCount = rsBlocks[r].dataCount;\n      var ecCount = rsBlocks[r].totalCount - dcCount;\n      maxDcCount = Math.max(maxDcCount, dcCount);\n      maxEcCount = Math.max(maxEcCount, ecCount);\n      dcdata[r] = new Array(dcCount);\n      for (var i = 0; i < dcdata[r].length; i++) {\n        dcdata[r][i] = 0xff & buffer.buffer[i + offset];\n      }\n      offset += dcCount;\n      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);\n      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);\n      var modPoly = rawPoly.mod(rsPoly);\n      ecdata[r] = new Array(rsPoly.getLength() - 1);\n      for (var i = 0; i < ecdata[r].length; i++) {\n        var modIndex = i + modPoly.getLength() - ecdata[r].length;\n        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;\n      }\n    }\n    var totalCodeCount = 0;\n    for (var i = 0; i < rsBlocks.length; i++) {\n      totalCodeCount += rsBlocks[i].totalCount;\n    }\n    var data = new Array(totalCodeCount);\n    var index = 0;\n    for (var i = 0; i < maxDcCount; i++) {\n      for (var r = 0; r < rsBlocks.length; r++) {\n        if (i < dcdata[r].length) {\n          data[index++] = dcdata[r][i];\n        }\n      }\n    }\n    for (var i = 0; i < maxEcCount; i++) {\n      for (var r = 0; r < rsBlocks.length; r++) {\n        if (i < ecdata[r].length) {\n          data[index++] = ecdata[r][i];\n        }\n      }\n    }\n    return data;\n  };\n\n  //---------------------------------------------------------------------\n  // QRMode\n  //---------------------------------------------------------------------\n\n  var QRMode = {\n    MODE_NUMBER: 1 << 0,\n    MODE_ALPHA_NUM: 1 << 1,\n    MODE_8BIT_BYTE: 1 << 2,\n    MODE_KANJI: 1 << 3\n  };\n\n  //---------------------------------------------------------------------\n  // QRErrorCorrectLevel\n  //---------------------------------------------------------------------\n\n  var QRErrorCorrectLevel = {\n    L: 1,\n    M: 0,\n    Q: 3,\n    H: 2\n  };\n\n  //---------------------------------------------------------------------\n  // QRMaskPattern\n  //---------------------------------------------------------------------\n\n  var QRMaskPattern = {\n    PATTERN000: 0,\n    PATTERN001: 1,\n    PATTERN010: 2,\n    PATTERN011: 3,\n    PATTERN100: 4,\n    PATTERN101: 5,\n    PATTERN110: 6,\n    PATTERN111: 7\n  };\n\n  //---------------------------------------------------------------------\n  // QRUtil\n  //---------------------------------------------------------------------\n\n  var QRUtil = {\n    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],\n    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,\n    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,\n    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,\n    getBCHTypeInfo: function getBCHTypeInfo(data) {\n      var d = data << 10;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {\n        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);\n      }\n      return (data << 10 | d) ^ QRUtil.G15_MASK;\n    },\n    getBCHTypeNumber: function getBCHTypeNumber(data) {\n      var d = data << 12;\n      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {\n        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);\n      }\n      return data << 12 | d;\n    },\n    getBCHDigit: function getBCHDigit(data) {\n      var digit = 0;\n      while (data != 0) {\n        digit++;\n        data >>>= 1;\n      }\n      return digit;\n    },\n    getPatternPosition: function getPatternPosition(typeNumber) {\n      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];\n    },\n    getMask: function getMask(maskPattern, i, j) {\n      switch (maskPattern) {\n        case QRMaskPattern.PATTERN000:\n          return (i + j) % 2 == 0;\n        case QRMaskPattern.PATTERN001:\n          return i % 2 == 0;\n        case QRMaskPattern.PATTERN010:\n          return j % 3 == 0;\n        case QRMaskPattern.PATTERN011:\n          return (i + j) % 3 == 0;\n        case QRMaskPattern.PATTERN100:\n          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;\n        case QRMaskPattern.PATTERN101:\n          return i * j % 2 + i * j % 3 == 0;\n        case QRMaskPattern.PATTERN110:\n          return (i * j % 2 + i * j % 3) % 2 == 0;\n        case QRMaskPattern.PATTERN111:\n          return (i * j % 3 + (i + j) % 2) % 2 == 0;\n        default:\n          throw new Error(\"bad maskPattern:\" + maskPattern);\n      }\n    },\n    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {\n      var a = new QRPolynomial([1], 0);\n      for (var i = 0; i < errorCorrectLength; i++) {\n        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));\n      }\n      return a;\n    },\n    getLengthInBits: function getLengthInBits(mode, type) {\n      if (1 <= type && type < 10) {\n        // 1 - 9\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 10;\n          case QRMode.MODE_ALPHA_NUM:\n            return 9;\n          case QRMode.MODE_8BIT_BYTE:\n            return 8;\n          case QRMode.MODE_KANJI:\n            return 8;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else if (type < 27) {\n        // 10 - 26\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 12;\n          case QRMode.MODE_ALPHA_NUM:\n            return 11;\n          case QRMode.MODE_8BIT_BYTE:\n            return 16;\n          case QRMode.MODE_KANJI:\n            return 10;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else if (type < 41) {\n        // 27 - 40\n\n        switch (mode) {\n          case QRMode.MODE_NUMBER:\n            return 14;\n          case QRMode.MODE_ALPHA_NUM:\n            return 13;\n          case QRMode.MODE_8BIT_BYTE:\n            return 16;\n          case QRMode.MODE_KANJI:\n            return 12;\n          default:\n            throw new Error(\"mode:\" + mode);\n        }\n      } else {\n        throw new Error(\"type:\" + type);\n      }\n    },\n    getLostPoint: function getLostPoint(qrCode) {\n      var moduleCount = qrCode.getModuleCount();\n      var lostPoint = 0;\n\n      // LEVEL1\n\n      for (var row = 0; row < moduleCount; row++) {\n        for (var col = 0; col < moduleCount; col++) {\n          var sameCount = 0;\n          var dark = qrCode.isDark(row, col);\n          for (var r = -1; r <= 1; r++) {\n            if (row + r < 0 || moduleCount <= row + r) {\n              continue;\n            }\n            for (var c = -1; c <= 1; c++) {\n              if (col + c < 0 || moduleCount <= col + c) {\n                continue;\n              }\n              if (r == 0 && c == 0) {\n                continue;\n              }\n              if (dark == qrCode.isDark(row + r, col + c)) {\n                sameCount++;\n              }\n            }\n          }\n          if (sameCount > 5) {\n            lostPoint += 3 + sameCount - 5;\n          }\n        }\n      }\n\n      // LEVEL2\n\n      for (var row = 0; row < moduleCount - 1; row++) {\n        for (var col = 0; col < moduleCount - 1; col++) {\n          var count = 0;\n          if (qrCode.isDark(row, col)) count++;\n          if (qrCode.isDark(row + 1, col)) count++;\n          if (qrCode.isDark(row, col + 1)) count++;\n          if (qrCode.isDark(row + 1, col + 1)) count++;\n          if (count == 0 || count == 4) {\n            lostPoint += 3;\n          }\n        }\n      }\n\n      // LEVEL3\n\n      for (var row = 0; row < moduleCount; row++) {\n        for (var col = 0; col < moduleCount - 6; col++) {\n          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {\n            lostPoint += 40;\n          }\n        }\n      }\n      for (var col = 0; col < moduleCount; col++) {\n        for (var row = 0; row < moduleCount - 6; row++) {\n          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {\n            lostPoint += 40;\n          }\n        }\n      }\n\n      // LEVEL4\n\n      var darkCount = 0;\n      for (var col = 0; col < moduleCount; col++) {\n        for (var row = 0; row < moduleCount; row++) {\n          if (qrCode.isDark(row, col)) {\n            darkCount++;\n          }\n        }\n      }\n      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;\n      lostPoint += ratio * 10;\n      return lostPoint;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRMath\n  //---------------------------------------------------------------------\n\n  var QRMath = {\n    glog: function glog(n) {\n      if (n < 1) {\n        throw new Error(\"glog(\" + n + \")\");\n      }\n      return QRMath.LOG_TABLE[n];\n    },\n    gexp: function gexp(n) {\n      while (n < 0) {\n        n += 255;\n      }\n      while (n >= 256) {\n        n -= 255;\n      }\n      return QRMath.EXP_TABLE[n];\n    },\n    EXP_TABLE: new Array(256),\n    LOG_TABLE: new Array(256)\n  };\n  for (var i = 0; i < 8; i++) {\n    QRMath.EXP_TABLE[i] = 1 << i;\n  }\n  for (var i = 8; i < 256; i++) {\n    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];\n  }\n  for (var i = 0; i < 255; i++) {\n    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;\n  }\n\n  //---------------------------------------------------------------------\n  // QRPolynomial\n  //---------------------------------------------------------------------\n\n  function QRPolynomial(num, shift) {\n    if (num.length == undefined) {\n      throw new Error(num.length + \"/\" + shift);\n    }\n    var offset = 0;\n    while (offset < num.length && num[offset] == 0) {\n      offset++;\n    }\n    this.num = new Array(num.length - offset + shift);\n    for (var i = 0; i < num.length - offset; i++) {\n      this.num[i] = num[i + offset];\n    }\n  }\n  QRPolynomial.prototype = {\n    get: function get(index) {\n      return this.num[index];\n    },\n    getLength: function getLength() {\n      return this.num.length;\n    },\n    multiply: function multiply(e) {\n      var num = new Array(this.getLength() + e.getLength() - 1);\n      for (var i = 0; i < this.getLength(); i++) {\n        for (var j = 0; j < e.getLength(); j++) {\n          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));\n        }\n      }\n      return new QRPolynomial(num, 0);\n    },\n    mod: function mod(e) {\n      if (this.getLength() - e.getLength() < 0) {\n        return this;\n      }\n      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));\n      var num = new Array(this.getLength());\n      for (var i = 0; i < this.getLength(); i++) {\n        num[i] = this.get(i);\n      }\n      for (var i = 0; i < e.getLength(); i++) {\n        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);\n      }\n\n      // recursive call\n      return new QRPolynomial(num, 0).mod(e);\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRRSBlock\n  //---------------------------------------------------------------------\n\n  function QRRSBlock(totalCount, dataCount) {\n    this.totalCount = totalCount;\n    this.dataCount = dataCount;\n  }\n  QRRSBlock.RS_BLOCK_TABLE = [\n  // L\n  // M\n  // Q\n  // H\n\n  // 1\n  [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],\n  // 2\n  [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],\n  // 3\n  [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],\n  // 4\t\t\n  [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],\n  // 5\n  [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],\n  // 6\n  [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],\n  // 7\t\t\n  [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],\n  // 8\n  [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],\n  // 9\n  [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],\n  // 10\t\t\n  [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],\n  // 11\n  [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],\n  // 12\n  [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],\n  // 13\n  [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],\n  // 14\n  [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],\n  // 15\n  [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],\n  // 16\n  [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],\n  // 17\n  [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],\n  // 18\n  [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],\n  // 19\n  [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],\n  // 20\n  [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],\n  // 21\n  [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],\n  // 22\n  [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],\n  // 23\n  [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],\n  // 24\n  [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],\n  // 25\n  [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],\n  // 26\n  [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],\n  // 27\n  [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],\n  // 28\n  [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],\n  // 29\n  [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],\n  // 30\n  [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],\n  // 31\n  [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],\n  // 32\n  [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],\n  // 33\n  [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],\n  // 34\n  [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],\n  // 35\n  [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],\n  // 36\n  [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],\n  // 37\n  [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],\n  // 38\n  [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],\n  // 39\n  [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],\n  // 40\n  [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];\n  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {\n    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);\n    if (rsBlock == undefined) {\n      throw new Error(\"bad rs block @ typeNumber:\" + typeNumber + \"/errorCorrectLevel:\" + errorCorrectLevel);\n    }\n    var length = rsBlock.length / 3;\n    var list = new Array();\n    for (var i = 0; i < length; i++) {\n      var count = rsBlock[i * 3 + 0];\n      var totalCount = rsBlock[i * 3 + 1];\n      var dataCount = rsBlock[i * 3 + 2];\n      for (var j = 0; j < count; j++) {\n        list.push(new QRRSBlock(totalCount, dataCount));\n      }\n    }\n    return list;\n  };\n  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {\n    switch (errorCorrectLevel) {\n      case QRErrorCorrectLevel.L:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];\n      case QRErrorCorrectLevel.M:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];\n      case QRErrorCorrectLevel.Q:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];\n      case QRErrorCorrectLevel.H:\n        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];\n      default:\n        return undefined;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // QRBitBuffer\n  //---------------------------------------------------------------------\n\n  function QRBitBuffer() {\n    this.buffer = new Array();\n    this.length = 0;\n  }\n  QRBitBuffer.prototype = {\n    get: function get(index) {\n      var bufIndex = Math.floor(index / 8);\n      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;\n    },\n    put: function put(num, length) {\n      for (var i = 0; i < length; i++) {\n        this.putBit((num >>> length - i - 1 & 1) == 1);\n      }\n    },\n    getLengthInBits: function getLengthInBits() {\n      return this.length;\n    },\n    putBit: function putBit(bit) {\n      var bufIndex = Math.floor(this.length / 8);\n      if (this.buffer.length <= bufIndex) {\n        this.buffer.push(0);\n      }\n      if (bit) {\n        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;\n      }\n      this.length++;\n    }\n  };\n\n  //---------------------------------------------------------------------\n  // Support Chinese\n  //---------------------------------------------------------------------\n  function utf16To8(text) {\n    var result = '';\n    var c;\n    for (var i = 0; i < text.length; i++) {\n      c = text.charCodeAt(i);\n      if (c >= 0x0001 && c <= 0x007F) {\n        result += text.charAt(i);\n      } else if (c > 0x07FF) {\n        result += String.fromCharCode(0xE0 | c >> 12 & 0x0F);\n        result += String.fromCharCode(0x80 | c >> 6 & 0x3F);\n        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);\n      } else {\n        result += String.fromCharCode(0xC0 | c >> 6 & 0x1F);\n        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);\n      }\n    }\n    return result;\n  }\n  uQRCode = {\n    errorCorrectLevel: QRErrorCorrectLevel,\n    defaults: {\n      size: 354,\n      margin: 0,\n      backgroundColor: '#ffffff',\n      foregroundColor: '#000000',\n      fileType: 'png',\n      // 'jpg', 'png'\n      errorCorrectLevel: QRErrorCorrectLevel.H,\n      typeNumber: -1\n    },\n    make: function make(options) {\n      var _this = this;\n      return new Promise(function (reslove, reject) {\n        var defaultOptions = {\n          canvasId: options.canvasId,\n          componentInstance: options.componentInstance,\n          text: options.text,\n          size: _this.defaults.size,\n          margin: _this.defaults.margin,\n          backgroundColor: _this.defaults.backgroundColor,\n          foregroundColor: _this.defaults.foregroundColor,\n          fileType: _this.defaults.fileType,\n          errorCorrectLevel: _this.defaults.errorCorrectLevel,\n          typeNumber: _this.defaults.typeNumber\n        };\n        if (options) {\n          for (var i in options) {\n            defaultOptions[i] = options[i];\n          }\n        }\n        options = defaultOptions;\n        if (!options.canvasId) {\n          __f__(\"error\", 'uQRCode: Please set canvasId!', \" at package-mine/components/uqrcode.js:1324\");\n          return;\n        }\n        function createCanvas() {\n          var qrcode = new QRCode(options.typeNumber, options.errorCorrectLevel);\n          qrcode.addData(utf16To8(options.text));\n          qrcode.make();\n          var ctx = uni.createCanvasContext(options.canvasId, options.componentInstance);\n          ctx.setFillStyle(options.backgroundColor);\n          ctx.fillRect(0, 0, options.size, options.size);\n          var tileW = (options.size - options.margin * 2) / qrcode.getModuleCount();\n          var tileH = tileW;\n          for (var row = 0; row < qrcode.getModuleCount(); row++) {\n            for (var col = 0; col < qrcode.getModuleCount(); col++) {\n              var style = qrcode.isDark(row, col) ? options.foregroundColor : options.backgroundColor;\n              ctx.setFillStyle(style);\n              var x = Math.round(col * tileW) + options.margin;\n              var y = Math.round(row * tileH) + options.margin;\n              var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);\n              var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);\n              ctx.fillRect(x, y, w, h);\n            }\n          }\n          setTimeout(function () {\n            ctx.draw(false, function () {\n              setTimeout(function () {\n                uni.canvasToTempFilePath({\n                  canvasId: options.canvasId,\n                  fileType: options.fileType,\n                  width: options.size,\n                  height: options.size,\n                  destWidth: options.size,\n                  destHeight: options.size,\n                  success: function success(res) {\n                    var resData; // 将统一为base64格式\n                    var tempFilePath = res.tempFilePath; // H5为base64，其他为相对路径\n\n                    var path = plus.io.convertLocalFileSystemURL(tempFilePath); // 绝对路径\n                    var fileReader = new plus.io.FileReader();\n                    fileReader.readAsDataURL(path);\n                    fileReader.onloadend = function (res) {\n                      resData = res.target.result;\n                      options.success && options.success(resData);\n                      reslove(resData);\n                    };\n                  },\n                  fail: function fail(error) {\n                    options.fail && options.fail(error);\n                    reject(error);\n                  },\n                  complete: function complete(res) {\n                    options.complete && options.complete(res);\n                  }\n                }, options.componentInstance);\n              }, options.text.length + 100);\n            }());\n          }, 150);\n        }\n        createCanvas();\n      });\n    }\n  };\n})();\nvar _default = uQRCode;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFja2FnZS1taW5lL2NvbXBvbmVudHMvdXFyY29kZS5qcyJdLCJuYW1lcyI6WyJ1UVJDb2RlIiwiUVI4Yml0Qnl0ZSIsImRhdGEiLCJtb2RlIiwiUVJNb2RlIiwiTU9ERV84QklUX0JZVEUiLCJwcm90b3R5cGUiLCJnZXRMZW5ndGgiLCJidWZmZXIiLCJsZW5ndGgiLCJ3cml0ZSIsImkiLCJwdXQiLCJjaGFyQ29kZUF0IiwiUVJDb2RlIiwidHlwZU51bWJlciIsImVycm9yQ29ycmVjdExldmVsIiwibW9kdWxlcyIsIm1vZHVsZUNvdW50IiwiZGF0YUNhY2hlIiwiZGF0YUxpc3QiLCJBcnJheSIsImFkZERhdGEiLCJuZXdEYXRhIiwicHVzaCIsImlzRGFyayIsInJvdyIsImNvbCIsIkVycm9yIiwiZ2V0TW9kdWxlQ291bnQiLCJtYWtlIiwicnNCbG9ja3MiLCJRUlJTQmxvY2siLCJnZXRSU0Jsb2NrcyIsIlFSQml0QnVmZmVyIiwidG90YWxEYXRhQ291bnQiLCJkYXRhQ291bnQiLCJRUlV0aWwiLCJnZXRMZW5ndGhJbkJpdHMiLCJtYWtlSW1wbCIsImdldEJlc3RNYXNrUGF0dGVybiIsInRlc3QiLCJtYXNrUGF0dGVybiIsInNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4iLCJzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybiIsInNldHVwVGltaW5nUGF0dGVybiIsInNldHVwVHlwZUluZm8iLCJzZXR1cFR5cGVOdW1iZXIiLCJjcmVhdGVEYXRhIiwibWFwRGF0YSIsInIiLCJjIiwibWluTG9zdFBvaW50IiwicGF0dGVybiIsImxvc3RQb2ludCIsImdldExvc3RQb2ludCIsImNyZWF0ZU1vdmllQ2xpcCIsInRhcmdldF9tYyIsImluc3RhbmNlX25hbWUiLCJkZXB0aCIsInFyX21jIiwiY3JlYXRlRW1wdHlNb3ZpZUNsaXAiLCJjcyIsInkiLCJ4IiwiZGFyayIsImJlZ2luRmlsbCIsIm1vdmVUbyIsImxpbmVUbyIsImVuZEZpbGwiLCJwb3MiLCJnZXRQYXR0ZXJuUG9zaXRpb24iLCJqIiwiYml0cyIsImdldEJDSFR5cGVOdW1iZXIiLCJtb2QiLCJNYXRoIiwiZmxvb3IiLCJnZXRCQ0hUeXBlSW5mbyIsImluYyIsImJpdEluZGV4IiwiYnl0ZUluZGV4IiwibWFzayIsImdldE1hc2siLCJQQUQwIiwiUEFEMSIsInB1dEJpdCIsImNyZWF0ZUJ5dGVzIiwib2Zmc2V0IiwibWF4RGNDb3VudCIsIm1heEVjQ291bnQiLCJkY2RhdGEiLCJlY2RhdGEiLCJkY0NvdW50IiwiZWNDb3VudCIsInRvdGFsQ291bnQiLCJtYXgiLCJyc1BvbHkiLCJnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsIiwicmF3UG9seSIsIlFSUG9seW5vbWlhbCIsIm1vZFBvbHkiLCJtb2RJbmRleCIsImdldCIsInRvdGFsQ29kZUNvdW50IiwiaW5kZXgiLCJNT0RFX05VTUJFUiIsIk1PREVfQUxQSEFfTlVNIiwiTU9ERV9LQU5KSSIsIlFSRXJyb3JDb3JyZWN0TGV2ZWwiLCJMIiwiTSIsIlEiLCJIIiwiUVJNYXNrUGF0dGVybiIsIlBBVFRFUk4wMDAiLCJQQVRURVJOMDAxIiwiUEFUVEVSTjAxMCIsIlBBVFRFUk4wMTEiLCJQQVRURVJOMTAwIiwiUEFUVEVSTjEwMSIsIlBBVFRFUk4xMTAiLCJQQVRURVJOMTExIiwiUEFUVEVSTl9QT1NJVElPTl9UQUJMRSIsIkcxNSIsIkcxOCIsIkcxNV9NQVNLIiwiZCIsImdldEJDSERpZ2l0IiwiZGlnaXQiLCJlcnJvckNvcnJlY3RMZW5ndGgiLCJhIiwibXVsdGlwbHkiLCJRUk1hdGgiLCJnZXhwIiwidHlwZSIsInFyQ29kZSIsInNhbWVDb3VudCIsImNvdW50IiwiZGFya0NvdW50IiwicmF0aW8iLCJhYnMiLCJnbG9nIiwibiIsIkxPR19UQUJMRSIsIkVYUF9UQUJMRSIsIm51bSIsInNoaWZ0IiwidW5kZWZpbmVkIiwiZSIsIlJTX0JMT0NLX1RBQkxFIiwicnNCbG9jayIsImdldFJzQmxvY2tUYWJsZSIsImxpc3QiLCJidWZJbmRleCIsImJpdCIsInV0ZjE2VG84IiwidGV4dCIsInJlc3VsdCIsImNoYXJBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRlZmF1bHRzIiwic2l6ZSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImZvcmVncm91bmRDb2xvciIsImZpbGVUeXBlIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNsb3ZlIiwicmVqZWN0IiwiZGVmYXVsdE9wdGlvbnMiLCJjYW52YXNJZCIsImNvbXBvbmVudEluc3RhbmNlIiwiY3JlYXRlQ2FudmFzIiwicXJjb2RlIiwiY3R4IiwidW5pIiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGlsZVciLCJ0aWxlSCIsInN0eWxlIiwicm91bmQiLCJ3IiwiY2VpbCIsImgiLCJzZXRUaW1lb3V0IiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwid2lkdGgiLCJoZWlnaHQiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0Iiwic3VjY2VzcyIsInJlcyIsInJlc0RhdGEiLCJ0ZW1wRmlsZVBhdGgiLCJwYXRoIiwicGx1cyIsImlvIiwiY29udmVydExvY2FsRmlsZVN5c3RlbVVSTCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInRhcmdldCIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBRWhCLENBQUMsWUFBVztFQUNYO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUEsU0FBU0MsVUFBVSxDQUFDQyxJQUFJLEVBQUU7SUFDekIsSUFBSSxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsY0FBYztJQUNqQyxJQUFJLENBQUNILElBQUksR0FBR0Es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QUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNuQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFB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Q3pDLElBQUksQ0FBQzJELFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUMzRCxTQUFTLEdBQUdBLFNBQVM7RUFDM0I7RUFFQUosU0FBUyxDQUFDc0gsY0FBYyxHQUFHO0VBRTFCO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUVWO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUVYO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUVYO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUVWO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdEI7RUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRVg7RUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDYixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV0QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXRCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFWjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFdkI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRVo7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXhCO0VBQ0EsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV2QjtFQUNBLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFeEI7RUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBRXZCO0VBQ0EsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMzQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUV4QjtFQUNBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVB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c0JBQzNCVSxPQUFPLENBQUM0QixPQUFPLElBQUk1QixPQUFPLENBQUM0QixPQUFPLENBQUNFLE9BQU8sQ0FBQztzQkFDM0M1QixPQUFPLENBQUM0QixPQUFPLENBQUM7b0JBQ2pCLENBQUM7a0JBc0NGLENBQUM7a0JBQ0RXLElBQUksRUFBRSxjQUFTQyxLQUFLLEVBQUU7b0JBQ3JCMUMsT0FBTyxDQUFDeUMsSUFBSSxJQUFJekMsT0FBTyxDQUFDeUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7b0JBQ25DdkMsTUFBTSxDQUFDdUMsS0FBSyxDQUFDO2tCQUNkLENBQUM7a0JBQ0RDLFFBQVEsRUFBRSxrQkFBU2QsR0FBRyxFQUFFO29CQUN2QjdCLE9BQU8sQ0FBQzJDLFFBQVEsSUFBSTNDLE9BQU8sQ0FBQzJDLFFBQVEsQ0FBQ2QsR0FBRyxDQUFDO2tCQUMxQztnQkFDRCxDQUFDLEVBQUU3QixPQUFPLENBQUNNLGlCQUFpQixDQUFDO2NBQzlCLENBQUMsRUFBRU4sT0FBTyxDQUFDWCxJQUFJLENBQUNwSixNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQzlCLENBQUMsRUFBRyxDQUFDO1VBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNSO1FBRUFzSyxZQUFZLEVBQUU7TUFDZixDQUFDLENBQUM7SUFDSDtFQUNELENBQUM7QUFFRixDQUFDLEdBQUc7QUFBQSxlQUVXL0ssT0FBTztBQUFBLDJCIiwiZmlsZSI6IjEwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVxcmNvZGUuanNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gZ2l0aHViIGh0dHBzOi8vZ2l0aHViLmNvbS9TYW5zbm4vdVFSQ29kZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHVRUkNvZGUgPSB7fTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxyXG5cdC8vXHJcblx0Ly8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXHJcblx0Ly9cclxuXHQvLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cclxuXHQvL1xyXG5cdC8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcclxuXHQvLyAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0Ly9cclxuXHQvLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZiBcclxuXHQvLyBERU5TTyBXQVZFIElOQ09SUE9SQVRFRFxyXG5cdC8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxyXG5cdC8vXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUjhiaXRCeXRlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0ZnVuY3Rpb24gUVI4Yml0Qnl0ZShkYXRhKSB7XHJcblx0XHR0aGlzLm1vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdH1cclxuXHJcblx0UVI4Yml0Qnl0ZS5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0Z2V0TGVuZ3RoOiBmdW5jdGlvbihidWZmZXIpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdHdyaXRlOiBmdW5jdGlvbihidWZmZXIpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHQvLyBub3QgSklTIC4uLlxyXG5cdFx0XHRcdGJ1ZmZlci5wdXQodGhpcy5kYXRhLmNoYXJDb2RlQXQoaSksIDgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUkNvZGVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUkNvZGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcblx0XHR0aGlzLmVycm9yQ29ycmVjdExldmVsID0gZXJyb3JDb3JyZWN0TGV2ZWw7XHJcblx0XHR0aGlzLm1vZHVsZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5tb2R1bGVDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcblx0fVxyXG5cclxuXHRRUkNvZGUucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdGFkZERhdGE6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0dmFyIG5ld0RhdGEgPSBuZXcgUVI4Yml0Qnl0ZShkYXRhKTtcclxuXHRcdFx0dGhpcy5kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO1xyXG5cdFx0XHR0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcblx0XHR9LFxyXG5cclxuXHRcdGlzRGFyazogZnVuY3Rpb24ocm93LCBjb2wpIHtcclxuXHRcdFx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyb3cgKyBcIixcIiArIGNvbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldE1vZHVsZUNvdW50OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubW9kdWxlQ291bnQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ha2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBDYWxjdWxhdGUgYXV0b21hdGljYWxseSB0eXBlTnVtYmVyIGlmIHByb3ZpZGVkIGlzIDwgMVxyXG5cdFx0XHRpZiAodGhpcy50eXBlTnVtYmVyIDwgMSkge1xyXG5cdFx0XHRcdHZhciB0eXBlTnVtYmVyID0gMTtcclxuXHRcdFx0XHRmb3IgKHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDwgNDA7IHR5cGVOdW1iZXIrKykge1xyXG5cdFx0XHRcdFx0dmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHRcdFx0XHRcdHZhciB0b3RhbERhdGFDb3VudCA9IDA7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG5cdFx0XHRcdFx0XHRidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XHJcblx0XHRcdFx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsIHR5cGVOdW1iZXIpKTtcclxuXHRcdFx0XHRcdFx0ZGF0YS53cml0ZShidWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA8PSB0b3RhbERhdGFDb3VudCAqIDgpXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnR5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMubWFrZUltcGwoZmFsc2UsIHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtYWtlSW1wbDogZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcclxuXHJcblx0XHRcdHRoaXMubW9kdWxlQ291bnQgPSB0aGlzLnR5cGVOdW1iZXIgKiA0ICsgMTc7XHJcblx0XHRcdHRoaXMubW9kdWxlcyA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcclxuXHJcblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sXSA9IG51bGw7IC8vKGNvbCArIHJvdykgJSAzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xyXG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xyXG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgdGhpcy5tb2R1bGVDb3VudCAtIDcpO1xyXG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XHJcblx0XHRcdHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XHJcblx0XHRcdHRoaXMuc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybik7XHJcblxyXG5cdFx0XHRpZiAodGhpcy50eXBlTnVtYmVyID49IDcpIHtcclxuXHRcdFx0XHR0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuZGF0YUNhY2hlID09IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLmRhdGFDYWNoZSA9IFFSQ29kZS5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCwgdGhpcy5kYXRhTGlzdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubWFwRGF0YSh0aGlzLmRhdGFDYWNoZSwgbWFza1BhdHRlcm4pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuOiBmdW5jdGlvbihyb3csIGNvbCkge1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgciA9IC0xOyByIDw9IDc7IHIrKykge1xyXG5cclxuXHRcdFx0XHRpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYysrKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvbCArIGMgPD0gLTEgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSBjb2wgKyBjKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT0gMCB8fCBjID09IDYpKSB8fFxyXG5cdFx0XHRcdFx0XHQoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PSAwIHx8IHIgPT0gNikpIHx8XHJcblx0XHRcdFx0XHRcdCgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0QmVzdE1hc2tQYXR0ZXJuOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBtaW5Mb3N0UG9pbnQgPSAwO1xyXG5cdFx0XHR2YXIgcGF0dGVybiA9IDA7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cclxuXHRcdFx0XHR0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xyXG5cclxuXHRcdFx0XHR2YXIgbG9zdFBvaW50ID0gUVJVdGlsLmdldExvc3RQb2ludCh0aGlzKTtcclxuXHJcblx0XHRcdFx0aWYgKGkgPT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcclxuXHRcdFx0XHRcdG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuXHRcdFx0XHRcdHBhdHRlcm4gPSBpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBhdHRlcm47XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZU1vdmllQ2xpcDogZnVuY3Rpb24odGFyZ2V0X21jLCBpbnN0YW5jZV9uYW1lLCBkZXB0aCkge1xyXG5cclxuXHRcdFx0dmFyIHFyX21jID0gdGFyZ2V0X21jLmNyZWF0ZUVtcHR5TW92aWVDbGlwKGluc3RhbmNlX25hbWUsIGRlcHRoKTtcclxuXHRcdFx0dmFyIGNzID0gMTtcclxuXHJcblx0XHRcdHRoaXMubWFrZSgpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVzLmxlbmd0aDsgcm93KyspIHtcclxuXHJcblx0XHRcdFx0dmFyIHkgPSByb3cgKiBjcztcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgdGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xyXG5cclxuXHRcdFx0XHRcdHZhciB4ID0gY29sICogY3M7XHJcblx0XHRcdFx0XHR2YXIgZGFyayA9IHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRhcmspIHtcclxuXHRcdFx0XHRcdFx0cXJfbWMuYmVnaW5GaWxsKDAsIDEwMCk7XHJcblx0XHRcdFx0XHRcdHFyX21jLm1vdmVUbyh4LCB5KTtcclxuXHRcdFx0XHRcdFx0cXJfbWMubGluZVRvKHggKyBjcywgeSk7XHJcblx0XHRcdFx0XHRcdHFyX21jLmxpbmVUbyh4ICsgY3MsIHkgKyBjcyk7XHJcblx0XHRcdFx0XHRcdHFyX21jLmxpbmVUbyh4LCB5ICsgY3MpO1xyXG5cdFx0XHRcdFx0XHRxcl9tYy5lbmRGaWxsKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcXJfbWM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldHVwVGltaW5nUGF0dGVybjogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRmb3IgKHZhciByID0gODsgciA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyByKyspIHtcclxuXHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3JdWzZdICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbcl1bNl0gPSAociAlIDIgPT0gMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAodmFyIGMgPSA4OyBjIDwgdGhpcy5tb2R1bGVDb3VudCAtIDg7IGMrKykge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1s2XVtjXSA9IChjICUgMiA9PSAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybjogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgcG9zID0gUVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgcm93ID0gcG9zW2ldO1xyXG5cdFx0XHRcdFx0dmFyIGNvbCA9IHBvc1tqXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByKyspIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjKyspIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHIgPT0gLTIgfHwgciA9PSAyIHx8IGMgPT0gLTIgfHwgYyA9PSAyIHx8XHJcblx0XHRcdFx0XHRcdFx0XHQociA9PSAwICYmIGMgPT0gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXR1cFR5cGVOdW1iZXI6IGZ1bmN0aW9uKHRlc3QpIHtcclxuXHJcblx0XHRcdHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaSAvIDMpXVtpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM10gPSBtb2Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXVtNYXRoLmZsb29yKGkgLyAzKV0gPSBtb2Q7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0dXBUeXBlSW5mbzogZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcclxuXHJcblx0XHRcdHZhciBkYXRhID0gKHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcclxuXHRcdFx0dmFyIGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcblxyXG5cdFx0XHQvLyB2ZXJ0aWNhbFx0XHRcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblxyXG5cdFx0XHRcdGlmIChpIDwgNikge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW2ldWzhdID0gbW9kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaSA8IDgpIHtcclxuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1tpICsgMV1bOF0gPSBtb2Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGhvcml6b250YWxcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblxyXG5cdFx0XHRcdGlmIChpIDwgOCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdW3RoaXMubW9kdWxlQ291bnQgLSBpIC0gMV0gPSBtb2Q7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpIDwgOSkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDFdID0gbW9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZml4ZWQgbW9kdWxlXHJcblx0XHRcdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gOF1bOF0gPSAoIXRlc3QpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bWFwRGF0YTogZnVuY3Rpb24oZGF0YSwgbWFza1BhdHRlcm4pIHtcclxuXHJcblx0XHRcdHZhciBpbmMgPSAtMTtcclxuXHRcdFx0dmFyIHJvdyA9IHRoaXMubW9kdWxlQ291bnQgLSAxO1xyXG5cdFx0XHR2YXIgYml0SW5kZXggPSA3O1xyXG5cdFx0XHR2YXIgYnl0ZUluZGV4ID0gMDtcclxuXHJcblx0XHRcdGZvciAodmFyIGNvbCA9IHRoaXMubW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xyXG5cclxuXHRcdFx0XHRpZiAoY29sID09IDYpIGNvbC0tO1xyXG5cclxuXHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYysrKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgZGFyayA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhcmsgPSAoKChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09IDEpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG1hc2sgPSBRUlV0aWwuZ2V0TWFzayhtYXNrUGF0dGVybiwgcm93LCBjb2wgLSBjKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKG1hc2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhcmsgPSAhZGFyaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuXHRcdFx0XHRcdFx0XHRiaXRJbmRleC0tO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJ5dGVJbmRleCsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Yml0SW5kZXggPSA3O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJvdyArPSBpbmM7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cpIHtcclxuXHRcdFx0XHRcdFx0cm93IC09IGluYztcclxuXHRcdFx0XHRcdFx0aW5jID0gLWluYztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRRUkNvZGUuUEFEMCA9IDB4RUM7XHJcblx0UVJDb2RlLlBBRDEgPSAweDExO1xyXG5cclxuXHRRUkNvZGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsLCBkYXRhTGlzdCkge1xyXG5cclxuXHRcdHZhciByc0Jsb2NrcyA9IFFSUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XHJcblxyXG5cdFx0dmFyIGJ1ZmZlciA9IG5ldyBRUkJpdEJ1ZmZlcigpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBkYXRhTGlzdFtpXTtcclxuXHRcdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xyXG5cdFx0XHRidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLCB0eXBlTnVtYmVyKSk7XHJcblx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjYWxjIG51bSBtYXggZGF0YS5cclxuXHRcdHZhciB0b3RhbERhdGFDb3VudCA9IDA7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoXCIgK1xyXG5cdFx0XHRcdGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArXHJcblx0XHRcdFx0XCI+XCIgK1xyXG5cdFx0XHRcdHRvdGFsRGF0YUNvdW50ICogOCArXHJcblx0XHRcdFx0XCIpXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVuZCBjb2RlXHJcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0YnVmZmVyLnB1dCgwLCA0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwYWRkaW5nXHJcblx0XHR3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XHJcblx0XHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhZGRpbmdcclxuXHRcdHdoaWxlICh0cnVlKSB7XHJcblxyXG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDAsIDgpO1xyXG5cclxuXHRcdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIucHV0KFFSQ29kZS5QQUQxLCA4KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUVJDb2RlLmNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xyXG5cdH1cclxuXHJcblx0UVJDb2RlLmNyZWF0ZUJ5dGVzID0gZnVuY3Rpb24oYnVmZmVyLCByc0Jsb2Nrcykge1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHRcdHZhciBtYXhEY0NvdW50ID0gMDtcclxuXHRcdHZhciBtYXhFY0NvdW50ID0gMDtcclxuXHJcblx0XHR2YXIgZGNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XHJcblx0XHR2YXIgZWNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XHJcblxyXG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cclxuXHRcdFx0dmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7XHJcblx0XHRcdHZhciBlY0NvdW50ID0gcnNCbG9ja3Nbcl0udG90YWxDb3VudCAtIGRjQ291bnQ7XHJcblxyXG5cdFx0XHRtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XHJcblx0XHRcdG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuXHJcblx0XHRcdGRjZGF0YVtyXSA9IG5ldyBBcnJheShkY0NvdW50KTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZGNkYXRhW3JdW2ldID0gMHhmZiAmIGJ1ZmZlci5idWZmZXJbaSArIG9mZnNldF07XHJcblx0XHRcdH1cclxuXHRcdFx0b2Zmc2V0ICs9IGRjQ291bnQ7XHJcblxyXG5cdFx0XHR2YXIgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcblx0XHRcdHZhciByYXdQb2x5ID0gbmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG5cclxuXHRcdFx0dmFyIG1vZFBvbHkgPSByYXdQb2x5Lm1vZChyc1BvbHkpO1xyXG5cdFx0XHRlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG5cdFx0XHRcdGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKSA/IG1vZFBvbHkuZ2V0KG1vZEluZGV4KSA6IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRvdGFsQ29kZUNvdW50ID0gMDtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XHJcblx0XHR2YXIgaW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSsrKSB7XHJcblx0XHRcdGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuXHRcdFx0XHRpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRhdGFbaW5kZXgrK10gPSBkY2RhdGFbcl1baV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXhFY0NvdW50OyBpKyspIHtcclxuXHRcdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cdFx0XHRcdGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGF0YVtpbmRleCsrXSA9IGVjZGF0YVtyXVtpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHJcblx0fVxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSTW9kZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdHZhciBRUk1vZGUgPSB7XHJcblx0XHRNT0RFX05VTUJFUjogMSA8PCAwLFxyXG5cdFx0TU9ERV9BTFBIQV9OVU06IDEgPDwgMSxcclxuXHRcdE1PREVfOEJJVF9CWVRFOiAxIDw8IDIsXHJcblx0XHRNT0RFX0tBTkpJOiAxIDw8IDNcclxuXHR9O1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSRXJyb3JDb3JyZWN0TGV2ZWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHR2YXIgUVJFcnJvckNvcnJlY3RMZXZlbCA9IHtcclxuXHRcdEw6IDEsXHJcblx0XHRNOiAwLFxyXG5cdFx0UTogMyxcclxuXHRcdEg6IDJcclxuXHR9O1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSTWFza1BhdHRlcm5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHR2YXIgUVJNYXNrUGF0dGVybiA9IHtcclxuXHRcdFBBVFRFUk4wMDA6IDAsXHJcblx0XHRQQVRURVJOMDAxOiAxLFxyXG5cdFx0UEFUVEVSTjAxMDogMixcclxuXHRcdFBBVFRFUk4wMTE6IDMsXHJcblx0XHRQQVRURVJOMTAwOiA0LFxyXG5cdFx0UEFUVEVSTjEwMTogNSxcclxuXHRcdFBBVFRFUk4xMTA6IDYsXHJcblx0XHRQQVRURVJOMTExOiA3XHJcblx0fTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUlV0aWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHR2YXIgUVJVdGlsID0ge1xyXG5cclxuXHRcdFBBVFRFUk5fUE9TSVRJT05fVEFCTEU6IFtcclxuXHRcdFx0W10sXHJcblx0XHRcdFs2LCAxOF0sXHJcblx0XHRcdFs2LCAyMl0sXHJcblx0XHRcdFs2LCAyNl0sXHJcblx0XHRcdFs2LCAzMF0sXHJcblx0XHRcdFs2LCAzNF0sXHJcblx0XHRcdFs2LCAyMiwgMzhdLFxyXG5cdFx0XHRbNiwgMjQsIDQyXSxcclxuXHRcdFx0WzYsIDI2LCA0Nl0sXHJcblx0XHRcdFs2LCAyOCwgNTBdLFxyXG5cdFx0XHRbNiwgMzAsIDU0XSxcclxuXHRcdFx0WzYsIDMyLCA1OF0sXHJcblx0XHRcdFs2LCAzNCwgNjJdLFxyXG5cdFx0XHRbNiwgMjYsIDQ2LCA2Nl0sXHJcblx0XHRcdFs2LCAyNiwgNDgsIDcwXSxcclxuXHRcdFx0WzYsIDI2LCA1MCwgNzRdLFxyXG5cdFx0XHRbNiwgMzAsIDU0LCA3OF0sXHJcblx0XHRcdFs2LCAzMCwgNTYsIDgyXSxcclxuXHRcdFx0WzYsIDMwLCA1OCwgODZdLFxyXG5cdFx0XHRbNiwgMzQsIDYyLCA5MF0sXHJcblx0XHRcdFs2LCAyOCwgNTAsIDcyLCA5NF0sXHJcblx0XHRcdFs2LCAyNiwgNTAsIDc0LCA5OF0sXHJcblx0XHRcdFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxyXG5cdFx0XHRbNiwgMjgsIDU0LCA4MCwgMTA2XSxcclxuXHRcdFx0WzYsIDMyLCA1OCwgODQsIDExMF0sXHJcblx0XHRcdFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxyXG5cdFx0XHRbNiwgMzQsIDYyLCA5MCwgMTE4XSxcclxuXHRcdFx0WzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxyXG5cdFx0XHRbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxyXG5cdFx0XHRbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxyXG5cdFx0XHRbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxyXG5cdFx0XHRbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxyXG5cdFx0XHRbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxyXG5cdFx0XHRbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxyXG5cdFx0XHRbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXHJcblx0XHRcdFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcclxuXHRcdFx0WzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxyXG5cdFx0XHRbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXHJcblx0XHRcdFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcclxuXHRcdFx0WzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXHJcblx0XHRdLFxyXG5cclxuXHRcdEcxNTogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxyXG5cdFx0RzE4OiAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMCkgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApLFxyXG5cdFx0RzE1X01BU0s6ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDQpIHwgKDEgPDwgMSksXHJcblxyXG5cdFx0Z2V0QkNIVHlwZUluZm86IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0dmFyIGQgPSBkYXRhIDw8IDEwO1xyXG5cdFx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpID49IDApIHtcclxuXHRcdFx0XHRkIF49IChRUlV0aWwuRzE1IDw8IChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gUVJVdGlsLkcxNV9NQVNLO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRCQ0hUeXBlTnVtYmVyOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdHZhciBkID0gZGF0YSA8PCAxMjtcclxuXHRcdFx0d2hpbGUgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSA+PSAwKSB7XHJcblx0XHRcdFx0ZCBePSAoUVJVdGlsLkcxOCA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIChkYXRhIDw8IDEyKSB8IGQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEJDSERpZ2l0OiBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdFx0XHR2YXIgZGlnaXQgPSAwO1xyXG5cclxuXHRcdFx0d2hpbGUgKGRhdGEgIT0gMCkge1xyXG5cdFx0XHRcdGRpZ2l0Kys7XHJcblx0XHRcdFx0ZGF0YSA+Pj49IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBkaWdpdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0UGF0dGVyblBvc2l0aW9uOiBmdW5jdGlvbih0eXBlTnVtYmVyKSB7XHJcblx0XHRcdHJldHVybiBRUlV0aWwuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldE1hc2s6IGZ1bmN0aW9uKG1hc2tQYXR0ZXJuLCBpLCBqKSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAwOlxyXG5cdFx0XHRcdFx0cmV0dXJuIChpICsgaikgJSAyID09IDA7XHJcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDE6XHJcblx0XHRcdFx0XHRyZXR1cm4gaSAlIDIgPT0gMDtcclxuXHRcdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMDpcclxuXHRcdFx0XHRcdHJldHVybiBqICUgMyA9PSAwO1xyXG5cdFx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDExOlxyXG5cdFx0XHRcdFx0cmV0dXJuIChpICsgaikgJSAzID09IDA7XHJcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDA6XHJcblx0XHRcdFx0XHRyZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykpICUgMiA9PSAwO1xyXG5cdFx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAxOlxyXG5cdFx0XHRcdFx0cmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT0gMDtcclxuXHRcdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMDpcclxuXHRcdFx0XHRcdHJldHVybiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7XHJcblx0XHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTE6XHJcblx0XHRcdFx0XHRyZXR1cm4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PSAwO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYmFkIG1hc2tQYXR0ZXJuOlwiICsgbWFza1BhdHRlcm4pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEVycm9yQ29ycmVjdFBvbHlub21pYWw6IGZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCkge1xyXG5cclxuXHRcdFx0dmFyIGEgPSBuZXcgUVJQb2x5bm9taWFsKFsxXSwgMCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0YSA9IGEubXVsdGlwbHkobmV3IFFSUG9seW5vbWlhbChbMSwgUVJNYXRoLmdleHAoaSldLCAwKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRMZW5ndGhJbkJpdHM6IGZ1bmN0aW9uKG1vZGUsIHR5cGUpIHtcclxuXHJcblx0XHRcdGlmICgxIDw9IHR5cGUgJiYgdHlwZSA8IDEwKSB7XHJcblxyXG5cdFx0XHRcdC8vIDEgLSA5XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6XHJcblx0XHRcdFx0XHRcdHJldHVybiAxMDtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gOTtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gODtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6XHJcblx0XHRcdFx0XHRcdHJldHVybiA4O1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XHJcblxyXG5cdFx0XHRcdC8vIDEwIC0gMjZcclxuXHJcblx0XHRcdFx0c3dpdGNoIChtb2RlKSB7XHJcblx0XHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX05VTUJFUjpcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDEyO1xyXG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06XHJcblx0XHRcdFx0XHRcdHJldHVybiAxMTtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTY7XHJcblx0XHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTA7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcclxuXHJcblx0XHRcdFx0Ly8gMjcgLSA0MFxyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTQ7XHJcblx0XHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTpcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDEzO1xyXG5cdFx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6XHJcblx0XHRcdFx0XHRcdHJldHVybiAxNjtcclxuXHRcdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6XHJcblx0XHRcdFx0XHRcdHJldHVybiAxMjtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInR5cGU6XCIgKyB0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRMb3N0UG9pbnQ6IGZ1bmN0aW9uKHFyQ29kZSkge1xyXG5cclxuXHRcdFx0dmFyIG1vZHVsZUNvdW50ID0gcXJDb2RlLmdldE1vZHVsZUNvdW50KCk7XHJcblxyXG5cdFx0XHR2YXIgbG9zdFBvaW50ID0gMDtcclxuXHJcblx0XHRcdC8vIExFVkVMMVxyXG5cclxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cclxuXHRcdFx0XHRcdHZhciBzYW1lQ291bnQgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIGRhcmsgPSBxckNvZGUuaXNEYXJrKHJvdywgY29sKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciByID0gLTE7IHIgPD0gMTsgcisrKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBjID0gLTE7IGMgPD0gMTsgYysrKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChyID09IDAgJiYgYyA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXJrID09IHFyQ29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNhbWVDb3VudCsrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChzYW1lQ291bnQgPiA1KSB7XHJcblx0XHRcdFx0XHRcdGxvc3RQb2ludCArPSAoMyArIHNhbWVDb3VudCAtIDUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTEVWRUwyXHJcblxyXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xyXG5cdFx0XHRcdFx0dmFyIGNvdW50ID0gMDtcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKSkgY291bnQrKztcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCkpIGNvdW50Kys7XHJcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDEpKSBjb3VudCsrO1xyXG5cdFx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkpIGNvdW50Kys7XHJcblx0XHRcdFx0XHRpZiAoY291bnQgPT0gMCB8fCBjb3VudCA9PSA0KSB7XHJcblx0XHRcdFx0XHRcdGxvc3RQb2ludCArPSAzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTEVWRUwzXHJcblxyXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCsrKSB7XHJcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkgJiZcclxuXHRcdFx0XHRcdFx0IXFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKSAmJlxyXG5cdFx0XHRcdFx0XHRxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMikgJiZcclxuXHRcdFx0XHRcdFx0cXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDMpICYmXHJcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KSAmJlxyXG5cdFx0XHRcdFx0XHQhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDUpICYmXHJcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA2KSkge1xyXG5cdFx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gNDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuXHRcdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XHJcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkgJiZcclxuXHRcdFx0XHRcdFx0IXFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sKSAmJlxyXG5cdFx0XHRcdFx0XHRxckNvZGUuaXNEYXJrKHJvdyArIDIsIGNvbCkgJiZcclxuXHRcdFx0XHRcdFx0cXJDb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpICYmXHJcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93ICsgNCwgY29sKSAmJlxyXG5cdFx0XHRcdFx0XHQhcXJDb2RlLmlzRGFyayhyb3cgKyA1LCBjb2wpICYmXHJcblx0XHRcdFx0XHRcdHFyQ29kZS5pc0Rhcmsocm93ICsgNiwgY29sKSkge1xyXG5cdFx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gNDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBMRVZFTDRcclxuXHJcblx0XHRcdHZhciBkYXJrQ291bnQgPSAwO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkpIHtcclxuXHRcdFx0XHRcdFx0ZGFya0NvdW50Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuXHRcdFx0bG9zdFBvaW50ICs9IHJhdGlvICogMTA7XHJcblxyXG5cdFx0XHRyZXR1cm4gbG9zdFBvaW50O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUk1hdGhcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHR2YXIgUVJNYXRoID0ge1xyXG5cclxuXHRcdGdsb2c6IGZ1bmN0aW9uKG4pIHtcclxuXHJcblx0XHRcdGlmIChuIDwgMSkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUVJNYXRoLkxPR19UQUJMRVtuXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V4cDogZnVuY3Rpb24obikge1xyXG5cclxuXHRcdFx0d2hpbGUgKG4gPCAwKSB7XHJcblx0XHRcdFx0biArPSAyNTU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdoaWxlIChuID49IDI1Nikge1xyXG5cdFx0XHRcdG4gLT0gMjU1O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RVhQX1RBQkxFOiBuZXcgQXJyYXkoMjU2KSxcclxuXHJcblx0XHRMT0dfVEFCTEU6IG5ldyBBcnJheSgyNTYpXHJcblxyXG5cdH07XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcblx0XHRRUk1hdGguRVhQX1RBQkxFW2ldID0gMSA8PCBpO1xyXG5cdH1cclxuXHRmb3IgKHZhciBpID0gODsgaSA8IDI1NjsgaSsrKSB7XHJcblx0XHRRUk1hdGguRVhQX1RBQkxFW2ldID0gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNF0gXlxyXG5cdFx0XHRRUk1hdGguRVhQX1RBQkxFW2kgLSA1XSBeXHJcblx0XHRcdFFSTWF0aC5FWFBfVEFCTEVbaSAtIDZdIF5cclxuXHRcdFx0UVJNYXRoLkVYUF9UQUJMRVtpIC0gOF07XHJcblx0fVxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcclxuXHRcdFFSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXV0gPSBpO1xyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUlBvbHlub21pYWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLCBzaGlmdCkge1xyXG5cclxuXHRcdGlmIChudW0ubGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCArIFwiL1wiICsgc2hpZnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHRcdHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09IDApIHtcclxuXHRcdFx0b2Zmc2V0Kys7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aCAtIG9mZnNldDsgaSsrKSB7XHJcblx0XHRcdHRoaXMubnVtW2ldID0gbnVtW2kgKyBvZmZzZXRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm51bVtpbmRleF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldExlbmd0aDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdG11bHRpcGx5OiBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgbnVtID0gbmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XHJcblx0XHRcdFx0XHRudW1baSArIGpdIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKSArIFFSTWF0aC5nbG9nKGUuZ2V0KGopKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sIDApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtb2Q6IGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmICh0aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHJhdGlvID0gUVJNYXRoLmdsb2codGhpcy5nZXQoMCkpIC0gUVJNYXRoLmdsb2coZS5nZXQoMCkpO1xyXG5cclxuXHRcdFx0dmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcblx0XHRcdFx0bnVtW2ldID0gdGhpcy5nZXQoaSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcblx0XHRcdFx0bnVtW2ldIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKGUuZ2V0KGkpKSArIHJhdGlvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVjdXJzaXZlIGNhbGxcclxuXHRcdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUlJTQmxvY2tcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSB7XHJcblx0XHR0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG5cdFx0dGhpcy5kYXRhQ291bnQgPSBkYXRhQ291bnQ7XHJcblx0fVxyXG5cclxuXHRRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEUgPSBbXHJcblxyXG5cdFx0Ly8gTFxyXG5cdFx0Ly8gTVxyXG5cdFx0Ly8gUVxyXG5cdFx0Ly8gSFxyXG5cclxuXHRcdC8vIDFcclxuXHRcdFsxLCAyNiwgMTldLFxyXG5cdFx0WzEsIDI2LCAxNl0sXHJcblx0XHRbMSwgMjYsIDEzXSxcclxuXHRcdFsxLCAyNiwgOV0sXHJcblxyXG5cdFx0Ly8gMlxyXG5cdFx0WzEsIDQ0LCAzNF0sXHJcblx0XHRbMSwgNDQsIDI4XSxcclxuXHRcdFsxLCA0NCwgMjJdLFxyXG5cdFx0WzEsIDQ0LCAxNl0sXHJcblxyXG5cdFx0Ly8gM1xyXG5cdFx0WzEsIDcwLCA1NV0sXHJcblx0XHRbMSwgNzAsIDQ0XSxcclxuXHRcdFsyLCAzNSwgMTddLFxyXG5cdFx0WzIsIDM1LCAxM10sXHJcblxyXG5cdFx0Ly8gNFx0XHRcclxuXHRcdFsxLCAxMDAsIDgwXSxcclxuXHRcdFsyLCA1MCwgMzJdLFxyXG5cdFx0WzIsIDUwLCAyNF0sXHJcblx0XHRbNCwgMjUsIDldLFxyXG5cclxuXHRcdC8vIDVcclxuXHRcdFsxLCAxMzQsIDEwOF0sXHJcblx0XHRbMiwgNjcsIDQzXSxcclxuXHRcdFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcblx0XHRbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxyXG5cclxuXHRcdC8vIDZcclxuXHRcdFsyLCA4NiwgNjhdLFxyXG5cdFx0WzQsIDQzLCAyN10sXHJcblx0XHRbNCwgNDMsIDE5XSxcclxuXHRcdFs0LCA0MywgMTVdLFxyXG5cclxuXHRcdC8vIDdcdFx0XHJcblx0XHRbMiwgOTgsIDc4XSxcclxuXHRcdFs0LCA0OSwgMzFdLFxyXG5cdFx0WzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcclxuXHRcdFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXHJcblxyXG5cdFx0Ly8gOFxyXG5cdFx0WzIsIDEyMSwgOTddLFxyXG5cdFx0WzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcclxuXHRcdFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcblx0XHRbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG5cclxuXHRcdC8vIDlcclxuXHRcdFsyLCAxNDYsIDExNl0sXHJcblx0XHRbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG5cdFx0WzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcclxuXHRcdFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXHJcblxyXG5cdFx0Ly8gMTBcdFx0XHJcblx0XHRbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG5cdFx0WzQsIDY5LCA0MywgMSwgNzAsIDQ0XSxcclxuXHRcdFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcblx0XHRbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG5cclxuXHRcdC8vIDExXHJcblx0XHRbNCwgMTAxLCA4MV0sXHJcblx0XHRbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG5cdFx0WzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcclxuXHRcdFszLCAzNiwgMTIsIDgsIDM3LCAxM10sXHJcblxyXG5cdFx0Ly8gMTJcclxuXHRcdFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcclxuXHRcdFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcblx0XHRbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG5cdFx0WzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcclxuXHJcblx0XHQvLyAxM1xyXG5cdFx0WzQsIDEzMywgMTA3XSxcclxuXHRcdFs4LCA1OSwgMzcsIDEsIDYwLCAzOF0sXHJcblx0XHRbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxyXG5cdFx0WzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcblxyXG5cdFx0Ly8gMTRcclxuXHRcdFszLCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG5cdFx0WzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuXHRcdFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxyXG5cdFx0WzExLCAzNiwgMTIsIDUsIDM3LCAxM10sXHJcblxyXG5cdFx0Ly8gMTVcclxuXHRcdFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcclxuXHRcdFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXHJcblx0XHRbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG5cdFx0WzExLCAzNiwgMTJdLFxyXG5cclxuXHRcdC8vIDE2XHJcblx0XHRbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcblx0XHRbNywgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG5cdFx0WzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcblx0XHRbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAxN1xyXG5cdFx0WzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcblx0XHRbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuXHRcdFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxyXG5cdFx0WzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXHJcblxyXG5cdFx0Ly8gMThcclxuXHRcdFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxyXG5cdFx0WzksIDY5LCA0MywgNCwgNzAsIDQ0XSxcclxuXHRcdFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG5cdFx0WzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXHJcblxyXG5cdFx0Ly8gMTlcclxuXHRcdFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG5cdFx0WzMsIDcwLCA0NCwgMTEsIDcxLCA0NV0sXHJcblx0XHRbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcclxuXHRcdFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG5cclxuXHRcdC8vIDIwXHJcblx0XHRbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuXHRcdFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG5cdFx0WzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXHJcblx0XHRbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjFcclxuXHRcdFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxyXG5cdFx0WzE3LCA2OCwgNDJdLFxyXG5cdFx0WzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcblx0XHRbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcclxuXHJcblx0XHQvLyAyMlxyXG5cdFx0WzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcblx0XHRbMTcsIDc0LCA0Nl0sXHJcblx0XHRbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuXHRcdFszNCwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAyM1xyXG5cdFx0WzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXHJcblx0XHRbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuXHRcdFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuXHRcdFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAyNFxyXG5cdFx0WzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcblx0XHRbNiwgNzMsIDQ1LCAxNCwgNzQsIDQ2XSxcclxuXHRcdFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuXHRcdFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDI1XHJcblx0XHRbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuXHRcdFs4LCA3NSwgNDcsIDEzLCA3NiwgNDhdLFxyXG5cdFx0WzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcblx0XHRbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjZcclxuXHRcdFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcclxuXHRcdFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG5cdFx0WzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcblx0XHRbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcclxuXHJcblx0XHQvLyAyN1xyXG5cdFx0WzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcblx0XHRbMjIsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuXHRcdFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG5cdFx0WzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDI4XHJcblx0XHRbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcblx0XHRbMywgNzMsIDQ1LCAyMywgNzQsIDQ2XSxcclxuXHRcdFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxyXG5cdFx0WzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDI5XHJcblx0XHRbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcclxuXHRcdFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG5cdFx0WzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXHJcblx0XHRbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzBcclxuXHRcdFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcclxuXHRcdFsxOSwgNzUsIDQ3LCAxMCwgNzYsIDQ4XSxcclxuXHRcdFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuXHRcdFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzMVxyXG5cdFx0WzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG5cdFx0WzIsIDc0LCA0NiwgMjksIDc1LCA0N10sXHJcblx0XHRbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcclxuXHRcdFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzMlxyXG5cdFx0WzE3LCAxNDUsIDExNV0sXHJcblx0XHRbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcblx0XHRbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXHJcblx0XHRbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzNcclxuXHRcdFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuXHRcdFsxNCwgNzQsIDQ2LCAyMSwgNzUsIDQ3XSxcclxuXHRcdFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuXHRcdFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzNFxyXG5cdFx0WzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG5cdFx0WzE0LCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG5cdFx0WzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcblx0XHRbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuXHJcblx0XHQvLyAzNVxyXG5cdFx0WzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxyXG5cdFx0WzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG5cdFx0WzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG5cdFx0WzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM2XHJcblx0XHRbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXHJcblx0XHRbNiwgNzUsIDQ3LCAzNCwgNzYsIDQ4XSxcclxuXHRcdFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuXHRcdFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM3XHJcblx0XHRbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcblx0XHRbMjksIDc0LCA0NiwgMTQsIDc1LCA0N10sXHJcblx0XHRbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcblx0XHRbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzhcclxuXHRcdFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcclxuXHRcdFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuXHRcdFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuXHRcdFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzOVxyXG5cdFx0WzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG5cdFx0WzQwLCA3NSwgNDcsIDcsIDc2LCA0OF0sXHJcblx0XHRbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcblx0XHRbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gNDBcclxuXHRcdFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuXHRcdFsxOCwgNzUsIDQ3LCAzMSwgNzYsIDQ4XSxcclxuXHRcdFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcclxuXHRcdFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG5cdF07XHJcblxyXG5cdFFSUlNCbG9jay5nZXRSU0Jsb2NrcyA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcblxyXG5cdFx0dmFyIHJzQmxvY2sgPSBRUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHJcblx0XHRpZiAocnNCbG9jayA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYmFkIHJzIGJsb2NrIEAgdHlwZU51bWJlcjpcIiArIHR5cGVOdW1iZXIgKyBcIi9lcnJvckNvcnJlY3RMZXZlbDpcIiArIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xyXG5cclxuXHRcdHZhciBsaXN0ID0gbmV3IEFycmF5KCk7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdFx0dmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG5cdFx0XHR2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuXHRcdFx0dmFyIGRhdGFDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcclxuXHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgY291bnQ7IGorKykge1xyXG5cdFx0XHRcdGxpc3QucHVzaChuZXcgUVJSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fVxyXG5cclxuXHRRUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHJcblx0XHRzd2l0Y2ggKGVycm9yQ29ycmVjdExldmVsKSB7XHJcblx0XHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5MOlxyXG5cdFx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcclxuXHRcdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06XHJcblx0XHRcdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xyXG5cdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuXHRcdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XHJcblx0XHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5IOlxyXG5cdFx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUkJpdEJ1ZmZlclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdGZ1bmN0aW9uIFFSQml0QnVmZmVyKCkge1xyXG5cdFx0dGhpcy5idWZmZXIgPSBuZXcgQXJyYXkoKTtcclxuXHRcdHRoaXMubGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdFFSQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcclxuXHRcdFx0cmV0dXJuICgodGhpcy5idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkpICYgMSkgPT0gMTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHV0OiBmdW5jdGlvbihudW0sIGxlbmd0aCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT0gMSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubGVuZ3RoO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwdXRCaXQ6IGZ1bmN0aW9uKGJpdCkge1xyXG5cclxuXHRcdFx0dmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpO1xyXG5cdFx0XHRpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5idWZmZXIucHVzaCgwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGJpdCkge1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmxlbmd0aCsrO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU3VwcG9ydCBDaGluZXNlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRmdW5jdGlvbiB1dGYxNlRvOCh0ZXh0KSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gJyc7XHJcblx0XHR2YXIgYztcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRpZiAoYyA+PSAweDAwMDEgJiYgYyA8PSAweDAwN0YpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gdGV4dC5jaGFyQXQoaSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoYyA+IDB4MDdGRikge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RTAgfCBjID4+IDEyICYgMHgwRik7XHJcblx0XHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGMgPj4gNiAmIDB4M0YpO1xyXG5cdFx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjID4+IDAgJiAweDNGKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweEMwIHwgYyA+PiA2ICYgMHgxRik7XHJcblx0XHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGMgPj4gMCAmIDB4M0YpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0dVFSQ29kZSA9IHtcclxuXHJcblx0XHRlcnJvckNvcnJlY3RMZXZlbDogUVJFcnJvckNvcnJlY3RMZXZlbCxcclxuXHJcblx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRzaXplOiAzNTQsXHJcblx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHRcdGZvcmVncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG5cdFx0XHRmaWxlVHlwZTogJ3BuZycsIC8vICdqcGcnLCAncG5nJ1xyXG5cdFx0XHRlcnJvckNvcnJlY3RMZXZlbDogUVJFcnJvckNvcnJlY3RMZXZlbC5ILFxyXG5cdFx0XHR0eXBlTnVtYmVyOiAtMVxyXG5cdFx0fSxcclxuXHJcblx0XHRtYWtlOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IG9wdGlvbnMuY2FudmFzSWQsXHJcblx0XHRcdFx0XHRjb21wb25lbnRJbnN0YW5jZTogb3B0aW9ucy5jb21wb25lbnRJbnN0YW5jZSxcclxuXHRcdFx0XHRcdHRleHQ6IG9wdGlvbnMudGV4dCxcclxuXHRcdFx0XHRcdHNpemU6IHRoaXMuZGVmYXVsdHMuc2l6ZSxcclxuXHRcdFx0XHRcdG1hcmdpbjogdGhpcy5kZWZhdWx0cy5tYXJnaW4sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZGVmYXVsdHMuYmFja2dyb3VuZENvbG9yLFxyXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZENvbG9yOiB0aGlzLmRlZmF1bHRzLmZvcmVncm91bmRDb2xvcixcclxuXHRcdFx0XHRcdGZpbGVUeXBlOiB0aGlzLmRlZmF1bHRzLmZpbGVUeXBlLFxyXG5cdFx0XHRcdFx0ZXJyb3JDb3JyZWN0TGV2ZWw6IHRoaXMuZGVmYXVsdHMuZXJyb3JDb3JyZWN0TGV2ZWwsXHJcblx0XHRcdFx0XHR0eXBlTnVtYmVyOiB0aGlzLmRlZmF1bHRzLnR5cGVOdW1iZXJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdE9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XHJcblx0XHRcdFx0aWYgKCFvcHRpb25zLmNhbnZhc0lkKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCd1UVJDb2RlOiBQbGVhc2Ugc2V0IGNhbnZhc0lkIScpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlQ2FudmFzKCkge1xyXG5cdFx0XHRcdFx0dmFyIHFyY29kZSA9IG5ldyBRUkNvZGUob3B0aW9ucy50eXBlTnVtYmVyLCBvcHRpb25zLmVycm9yQ29ycmVjdExldmVsKTtcclxuXHRcdFx0XHRcdHFyY29kZS5hZGREYXRhKHV0ZjE2VG84KG9wdGlvbnMudGV4dCkpO1xyXG5cdFx0XHRcdFx0cXJjb2RlLm1ha2UoKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgY3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQob3B0aW9ucy5jYW52YXNJZCwgb3B0aW9ucy5jb21wb25lbnRJbnN0YW5jZSk7XHJcblx0XHRcdFx0XHRjdHguc2V0RmlsbFN0eWxlKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKTtcclxuXHRcdFx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCBvcHRpb25zLnNpemUsIG9wdGlvbnMuc2l6ZSk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRpbGVXID0gKG9wdGlvbnMuc2l6ZSAtIG9wdGlvbnMubWFyZ2luICogMikgLyBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcclxuXHRcdFx0XHRcdHZhciB0aWxlSCA9IHRpbGVXO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHFyY29kZS5nZXRNb2R1bGVDb3VudCgpOyByb3crKykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTsgY29sKyspIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3R5bGUgPSBxcmNvZGUuaXNEYXJrKHJvdywgY29sKSA/IG9wdGlvbnMuZm9yZWdyb3VuZENvbG9yIDogb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHRcdFx0XHRcdFx0Y3R4LnNldEZpbGxTdHlsZShzdHlsZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHggPSBNYXRoLnJvdW5kKGNvbCAqIHRpbGVXKSArIG9wdGlvbnMubWFyZ2luO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5yb3VuZChyb3cgKiB0aWxlSCkgKyBvcHRpb25zLm1hcmdpbjtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdyA9IE1hdGguY2VpbCgoY29sICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKGNvbCAqIHRpbGVXKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgaCA9IE1hdGguY2VpbCgocm93ICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKHJvdyAqIHRpbGVXKTtcclxuXHRcdFx0XHRcdFx0XHRjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRjdHguZHJhdyhmYWxzZSwgKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW52YXNJZDogb3B0aW9ucy5jYW52YXNJZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVR5cGU6IG9wdGlvbnMuZmlsZVR5cGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBvcHRpb25zLnNpemUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogb3B0aW9ucy5zaXplLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXN0V2lkdGg6IG9wdGlvbnMuc2l6ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzdEhlaWdodDogb3B0aW9ucy5zaXplLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgcmVzRGF0YTsgLy8g5bCG57uf5LiA5Li6YmFzZTY05qC85byPXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGg7IC8vIEg15Li6YmFzZTY077yM5YW25LuW5Li655u45a+56Lev5b6EXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwYXRoID0gcGx1cy5pby5jb252ZXJ0TG9jYWxGaWxlU3lzdGVtVVJMKHRlbXBGaWxlUGF0aCkgLy8g57ud5a+56Lev5b6EXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZpbGVSZWFkZXIgPSBuZXcgcGx1cy5pby5GaWxlUmVhZGVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKHBhdGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc0RhdGEgPSByZXMudGFyZ2V0LnJlc3VsdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMuc3VjY2VzcyAmJiBvcHRpb25zLnN1Y2Nlc3MocmVzRGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNsb3ZlKHJlc0RhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMuZmFpbCAmJiBvcHRpb25zLmZhaWwoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLmNvbXBsZXRlICYmIG9wdGlvbnMuY29tcGxldGUocmVzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSwgb3B0aW9ucy5jb21wb25lbnRJbnN0YW5jZSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgb3B0aW9ucy50ZXh0Lmxlbmd0aCArIDEwMCk7XHJcblx0XHRcdFx0XHRcdH0pKCkpO1xyXG5cdFx0XHRcdFx0fSwgMTUwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNyZWF0ZUNhbnZhcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1UVJDb2RlXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///108\n");

/***/ }),
/* 109 */
/*!****************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tihuoma.vue?vue&type=style&index=0&lang=css& */ 110);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tihuoma_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 110 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/components/tihuoma.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".white_view": {
    "": {
      "width": [
        80,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        0
      ],
      "borderRadius": [
        "16",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".text_back_view": {
    "": {
      "marginLeft": [
        "15",
        0,
        0,
        1
      ],
      "height": [
        "110",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#F5F6F7",
        0,
        0,
        1
      ],
      "borderRadius": [
        "8",
        0,
        0,
        1
      ]
    }
  },
  ".text_view": {
    "": {
      "marginLeft": [
        "5",
        0,
        0,
        2
      ],
      "marginTop": [
        "5",
        0,
        0,
        2
      ],
      "height": [
        "100",
        0,
        0,
        2
      ],
      "fontSize": [
        "14",
        0,
        0,
        2
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        2
      ]
    }
  },
  ".bottom_button": {
    "": {
      "marginLeft": [
        20,
        0,
        0,
        3
      ],
      "width": [
        60,
        0,
        0,
        3
      ],
      "height": [
        "40",
        0,
        0,
        3
      ],
      "borderRadius": [
        "8",
        0,
        0,
        3
      ],
      "lineHeight": [
        "40",
        0,
        0,
        3
      ],
      "fontSize": [
        "14",
        0,
        0,
        3
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "backgroundColor": [
        "#FF5725",
        0,
        0,
        3
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        3
      ],
      "marginTop": [
        "15",
        0,
        0,
        3
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 111 */
/*!***************************************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./order-map-detaile.nvue?vue&type=style&index=0&lang=css&mpType=page */ 112);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_order_map_detaile_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 112 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-user/take-user/package-mine/pages/order/order-map-detaile.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "height": [
        100,
        0,
        0,
        0
      ],
      "overflow": [
        "hidden",
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#F8F8F8",
        0,
        0,
        0
      ],
      "width": [
        "750rpx",
        0,
        0,
        0
      ]
    }
  },
  ".content": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#F8F8F8",
        0,
        0,
        1
      ],
      "width": [
        "750rpx",
        0,
        0,
        1
      ],
      "overflow": [
        "hidden",
        0,
        0,
        1
      ]
    }
  },
  ".row": {
    "": {
      "display": [
        "flex",
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ]
    }
  },
  ".column": {
    "": {
      "display": [
        "flex",
        0,
        0,
        3
      ],
      "flexDirection": [
        "column",
        0,
        0,
        3
      ]
    }
  },
  ".mapView": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        4
      ],
      "backgroundColor": [
        "#1AAD19",
        0,
        0,
        4
      ]
    }
  },
  ".returnImage": {
    "": {
      "marginLeft": [
        "12",
        0,
        0,
        5
      ],
      "marginTop": [
        "50",
        0,
        0,
        5
      ],
      "width": [
        "60rpx",
        0,
        0,
        5
      ],
      "height": [
        "60rpx",
        0,
        0,
        5
      ]
    }
  },
  ".detaileView": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "marginLeft": [
        "24rpx",
        0,
        0,
        6
      ],
      "width": [
        "702rpx",
        0,
        0,
        6
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        6
      ],
      "borderTopLeftRadius": [
        "10",
        0,
        0,
        6
      ],
      "borderTopRightRadius": [
        "10",
        0,
        0,
        6
      ],
      "borderBottomRightRadius": [
        "0",
        0,
        0,
        6
      ],
      "borderBottomLeftRadius": [
        "0",
        0,
        0,
        6
      ]
    }
  },
  ".orderStateLabel": {
    "": {
      "width": [
        "140rpx",
        0,
        0,
        7
      ],
      "marginLeft": [
        "281rpx",
        0,
        0,
        7
      ],
      "textAlign": [
        "center",
        0,
        0,
        7
      ],
      "height": [
        "30",
        0,
        0,
        7
      ],
      "lineHeight": [
        "30",
        0,
        0,
        7
      ],
      "fontSize": [
        "20",
        0,
        0,
        7
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        7
      ],
      "color": [
        "#323232",
        0,
        0,
        7
      ]
    }
  },
  ".label-30H": {
    "": {
      "lineHeight": [
        "28",
        0,
        0,
        8
      ],
      "height": [
        "28",
        0,
        0,
        8
      ],
      "fontSize": [
        "14",
        0,
        0,
        8
      ],
      "color": [
        "#989898",
        0,
        0,
        8
      ],
      "marginTop": [
        "1",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ]
    }
  },
  ".item_view": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        9
      ],
      "width": [
        "642rpx",
        0,
        0,
        9
      ],
      "display": [
        "flex",
        0,
        0,
        9
      ],
      "minHeight": [
        "32",
        0,
        0,
        9
      ],
      "flexDirection": [
        "row",
        0,
        0,
        9
      ]
    }
  },
  ".item_view_vue": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        10
      ],
      "width": [
        "690rpx",
        0,
        0,
        10
      ],
      "display": [
        "flex",
        0,
        0,
        10
      ],
      "minHeight": [
        "32",
        0,
        0,
        10
      ],
      "flexDirection": [
        "row",
        0,
        0,
        10
      ]
    }
  },
  ".item-title-label": {
    "": {
      "marginTop": [
        "6",
        0,
        0,
        11
      ],
      "color": [
        "#6F6F6F",
        0,
        0,
        11
      ],
      "height": [
        "20",
        0,
        0,
        11
      ],
      "lineHeight": [
        "20",
        0,
        0,
        11
      ],
      "width": [
        "300rpx",
        0,
        0,
        11
      ],
      "fontSize": [
        "14",
        0,
        0,
        11
      ]
    }
  },
  ".item-des-label": {
    "": {
      "marginTop": [
        "6",
        0,
        0,
        12
      ],
      "color": [
        "#181818",
        0,
        0,
        12
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        12
      ],
      "height": [
        "20",
        0,
        0,
        12
      ],
      "lineHeight": [
        "20",
        0,
        0,
        12
      ],
      "textAlign": [
        "right",
        0,
        0,
        12
      ],
      "width": [
        "342rpx",
        0,
        0,
        12
      ],
      "marginBottom": [
        "6",
        0,
        0,
        12
      ],
      "fontSize": [
        "14",
        0,
        0,
        12
      ]
    }
  },
  ".item-des-label-vue": {
    "": {
      "marginTop": [
        "6",
        0,
        0,
        13
      ],
      "color": [
        "#181818",
        0,
        0,
        13
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        13
      ],
      "height": [
        "20",
        0,
        0,
        13
      ],
      "lineHeight": [
        "20",
        0,
        0,
        13
      ],
      "textAlign": [
        "right",
        0,
        0,
        13
      ],
      "width": [
        "390rpx",
        0,
        0,
        13
      ],
      "marginBottom": [
        "6",
        0,
        0,
        13
      ],
      "fontSize": [
        "14",
        0,
        0,
        13
      ]
    }
  },
  ".orderCell-dtal-header-typeLabel": {
    "": {
      "marginTop": [
        "16",
        0,
        0,
        14
      ],
      "width": [
        "56",
        0,
        0,
        14
      ],
      "height": [
        "20",
        0,
        0,
        14
      ],
      "borderRadius": [
        "2",
        0,
        0,
        14
      ],
      "fontSize": [
        "12",
        0,
        0,
        14
      ],
      "lineHeight": [
        "20",
        0,
        0,
        14
      ],
      "textAlign": [
        "center",
        0,
        0,
        14
      ]
    }
  },
  ".order-ads-item-cycle": {
    "": {
      "width": [
        "8",
        0,
        0,
        15
      ],
      "height": [
        "8",
        0,
        0,
        15
      ],
      "borderRadius": [
        "4",
        0,
        0,
        15
      ],
      "borderWidth": [
        "2",
        0,
        0,
        15
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        15
      ],
      "borderColor": [
        "#FF5725",
        0,
        0,
        15
      ],
      "marginLeft": [
        "9",
        0,
        0,
        15
      ],
      "marginTop": [
        "28.5",
        0,
        0,
        15
      ]
    }
  },
  ".order-ads-item-middle": {
    "": {
      "marginLeft": [
        "10",
        0,
        0,
        16
      ],
      "height": [
        100,
        0,
        0,
        16
      ],
      "display": [
        "flex",
        0,
        0,
        16
      ],
      "flexDirection": [
        "column",
        0,
        0,
        16
      ],
      "marginRight": [
        "8",
        0,
        0,
        16
      ],
      "flex": [
        1,
        0,
        0,
        16
      ]
    }
  },
  ".order-ads-item-ads": {
    "": {
      "marginTop": [
        "15",
        0,
        0,
        17
      ],
      "height": [
        "18",
        0,
        0,
        17
      ],
      "lineHeight": [
        "18",
        0,
        0,
        17
      ],
      "fontSize": [
        "16",
        0,
        0,
        17
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        17
      ],
      "color": [
        "#323232",
        0,
        0,
        17
      ],
      "overflow": [
        "hidden",
        0,
        0,
        17
      ]
    }
  },
  ".order-ads-item-ads-tip": {
    "": {
      "height": [
        "20",
        0,
        0,
        18
      ],
      "lineHeight": [
        "20",
        0,
        0,
        18
      ],
      "fontSize": [
        "13",
        0,
        0,
        18
      ],
      "color": [
        "#989898",
        0,
        0,
        18
      ],
      "overflow": [
        "hidden",
        0,
        0,
        18
      ]
    }
  },
  ".status_text": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        19
      ],
      "left": [
        "32",
        0,
        0,
        19
      ],
      "height": [
        "20",
        0,
        0,
        19
      ],
      "lineHeight": [
        "20",
        0,
        0,
        19
      ],
      "borderRadius": [
        "2",
        0,
        0,
        19
      ],
      "paddingLeft": [
        "5",
        0,
        0,
        19
      ],
      "paddingRight": [
        "5",
        0,
        0,
        19
      ],
      "fontSize": [
        "11",
        0,
        0,
        19
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        19
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        19
      ],
      "backgroundColor": [
        "#FF5725",
        0,
        0,
        19
      ]
    }
  },
  ".store_lianxi": {
    "": {
      "marginTop": [
        "28",
        0,
        0,
        20
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        20
      ],
      "width": [
        "642rpx",
        0,
        0,
        20
      ],
      "height": [
        "64",
        0,
        0,
        20
      ],
      "display": [
        "flex",
        0,
        0,
        20
      ],
      "flexDirection": [
        "row",
        0,
        0,
        20
      ],
      "borderWidth": [
        "1",
        0,
        0,
        20
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        20
      ],
      "borderColor": [
        "#FF5725",
        0,
        0,
        20
      ],
      "borderRadius": [
        "8",
        0,
        0,
        20
      ],
      "alignItems": [
        "center",
        0,
        0,
        20
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        20
      ]
    }
  },
  ".store_name": {
    "": {
      "marginLeft": [
        "15",
        0,
        0,
        21
      ],
      "height": [
        "64",
        0,
        0,
        21
      ],
      "lineHeight": [
        "64",
        0,
        0,
        21
      ],
      "fontSize": [
        "18",
        0,
        0,
        21
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        21
      ],
      "display": [
        "flex",
        0,
        0,
        21
      ],
      "flexDirection": [
        "row",
        0,
        0,
        21
      ],
      "alignItems": [
        "center",
        0,
        0,
        21
      ]
    }
  },
  ".orderxiangxixinxi": {
    "": {
      "marginLeft": [
        "15",
        0,
        0,
        22
      ],
      "height": [
        "40",
        0,
        0,
        22
      ],
      "lineHeight": [
        "40",
        0,
        0,
        22
      ],
      "fontSize": [
        "14",
        0,
        0,
        22
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        22
      ]
    }
  },
  ".bottom_view": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        23
      ],
      "bottom": [
        0,
        0,
        0,
        23
      ],
      "left": [
        0,
        0,
        0,
        23
      ],
      "width": [
        "750rpx",
        0,
        0,
        23
      ],
      "height": [
        "150",
        0,
        0,
        23
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        23
      ]
    }
  },
  ".bottom_contentView": {
    "": {
      "boxShadow": [
        "0px 0px 10px 10px rgba(50, 50, 59, 0.1)",
        0,
        0,
        24
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        24
      ],
      "marginTop": [
        "10",
        0,
        0,
        24
      ],
      "width": [
        "750rpx",
        0,
        0,
        24
      ],
      "height": [
        "140",
        0,
        0,
        24
      ]
    }
  },
  ".bottom_button": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        25
      ],
      "width": [
        "690rpx",
        0,
        0,
        25
      ],
      "height": [
        "49",
        0,
        0,
        25
      ],
      "borderRadius": [
        "8",
        0,
        0,
        25
      ],
      "lineHeight": [
        "49",
        0,
        0,
        25
      ],
      "fontSize": [
        "14",
        0,
        0,
        25
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        25
      ],
      "textAlign": [
        "center",
        0,
        0,
        25
      ]
    }
  },
  ".topView": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        26
      ],
      "backgroundColor": [
        "#FF5725",
        0,
        0,
        26
      ]
    }
  },
  ".Back-scroll": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        27
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        27
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);