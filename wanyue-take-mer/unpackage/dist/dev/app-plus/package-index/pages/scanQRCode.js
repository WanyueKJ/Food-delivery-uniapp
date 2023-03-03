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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/main.js?{"page":"package-index%2Fpages%2FscanQRCode"} ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _package_index_pages_scanQRCode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package-index/pages/scanQRCode.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _package_index_pages_scanQRCode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _package_index_pages_scanQRCode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'package-index/pages/scanQRCode'\n        _package_index_pages_scanQRCode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_package_index_pages_scanQRCode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBMkU7QUFDM0UsUUFBUSx3RkFBRztBQUNYLFFBQVEsd0ZBQUc7QUFDWCxRQUFRLHdGQUFHO0FBQ1gsZ0JBQWdCLHdGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWNrYWdlLWluZGV4L3BhZ2VzL3NjYW5RUkNvZGUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFja2FnZS1pbmRleC9wYWdlcy9zY2FuUVJDb2RlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/main.js?{"type":"appStyle"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************/
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
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-mer/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "whiteSpace": [
        "nowrap",
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
/* 5 */
/*!********************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanQRCode.nvue?vue&type=template&id=43da73c6&mpType=page */ 6);\n/* harmony import */ var _scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanQRCode.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./scanQRCode.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./scanQRCode.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"af14cd10\",\n  false,\n  _scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"package-index/pages/scanQRCode.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUVBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zY2FuUVJDb2RlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDNkYTczYzYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NjYW5RUkNvZGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY2FuUVJDb2RlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3NjYW5RUkNvZGUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NjYW5RUkNvZGUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImFmMTRjZDEwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhY2thZ2UtaW5kZXgvcGFnZXMvc2NhblFSQ29kZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=template&id=43da73c6&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scanQRCode.nvue?vue&type=template&id=43da73c6&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_template_id_43da73c6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=template&id=43da73c6&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        [
          _c("barcode", {
            ref: "barcode",
            staticClass: ["barcode"],
            attrs: {
              id: "1",
              autostart: "true",
              background: "rgb(0,0,0)",
              frameColor: "#00C1DE",
              scanbarColor: "#00C1DE",
              filters: _vm.fil,
            },
            on: { marked: _vm.success1, error: _vm.fail1 },
          }),
          _c("view", { staticClass: ["top", "row"] }, [
            _c(
              "u-text",
              {
                staticClass: ["tip"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.i18n.index.scantip))]
            ),
            _c("view", { staticClass: ["scancode"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["scan"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(_vm.i18n.index.scanT))]
              ),
              _c("view", { staticClass: ["content_img"] }),
            ]),
            _c(
              "view",
              {
                staticClass: ["quan"],
                on: {
                  click: function ($event) {
                    _vm.inputCode()
                  },
                },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["scan"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(_vm.i18n.index.quan))]
                ),
              ]
            ),
          ]),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!********************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scanQRCode.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxcYXBwLXdpbmRvd3NcXFxcSEJ1aWxkZXJYLjMuNi44LjIwMjIxMDI3LWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjYW5RUkNvZGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXGFwcC13aW5kb3dzXFxcXEhCdWlsZGVyWC4zLjYuOC4yMDIyMTAyNy1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxhcHAtd2luZG93c1xcXFxIQnVpbGRlclguMy42LjguMjAyMjEwMjctYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NhblFSQ29kZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 12);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _WYToolClass = _interopRequireDefault(__webpack_require__(/*! @/toolClass/WYToolClass.js */ 13));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  computed: {\n    i18n: function i18n() {\n      // return this.$t('index')\n      return getApp().globalData.$t('index'); //当然页面中就是按Vue页面里那样使用了  \n    }\n  },\n  data: function data() {\n    return {\n      fil: [0, 2, 1]\n    };\n  },\n  onLoad: function onLoad() {\n    uni.setNavigationBarTitle({\n      title: this.i18n.index.scanT\n    });\n  },\n  methods: {\n    inputCode: function inputCode() {\n      uni.navigateTo({\n        url: 'surecode'\n      });\n    },\n    success1: function success1(e) {\n      __f__(\"log\", \"success1:\" + JSON.stringify(e), \" at package-index/pages/scanQRCode.nvue:46\");\n      var code = e.detail.message;\n      var param = {\n        'verify_code': code\n      };\n      _WYToolClass.default.sendRequest('MerchantOrder.VerificationSheet', param).then(function (data) {\n        __f__(\"log\", data, \" at package-index/pages/scanQRCode.nvue:50\");\n        if (data.code == 0) {\n          uni.showToast({\n            title: data.msg,\n            icon: '',\n            duration: 1000\n          });\n          setTimeout(function () {\n            uni.navigateBack();\n          }, 1000);\n        }\n      });\n    },\n    fail1: function fail1(e) {\n      __f__(\"log\", \"fail1:\" + JSON.stringify(e), \" at package-index/pages/scanQRCode.nvue:67\");\n    },\n    toStart: function toStart() {\n      this.$refs.barcode.start({\n        conserve: true,\n        filename: '_doc/barcode/'\n      });\n    },\n    tocancel: function tocancel() {\n      this.$refs.barcode.cancel();\n    },\n    toFlash: function toFlash() {\n      this.$refs.barcode.setFlash(true);\n    },\n    toscan: function toscan() {\n      __f__(\"log\", \"scan:\", \" at package-index/pages/scanQRCode.nvue:83\");\n      var barcodeModule = __webpack_provided_uni_dot_requireNativePlugin('barcodeScan');\n      barcodeModule.scan(\"/static/barcode1.png\", function (e) {\n        __f__(\"log\", \"scan_error:\" + JSON.stringify(e), \" at package-index/pages/scanQRCode.nvue:86\");\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFja2FnZS1pbmRleC9wYWdlcy9zY2FuUVJDb2RlLm52dWUiXSwibmFtZXMiOlsiY29tcHV0ZWQiLCJpMThuIiwiZGF0YSIsImZpbCIsIm9uTG9hZCIsInVuaSIsInRpdGxlIiwibWV0aG9kcyIsImlucHV0Q29kZSIsInVybCIsInN1Y2Nlc3MxIiwiaHR0cCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJmYWlsMSIsInRvU3RhcnQiLCJjb25zZXJ2ZSIsImZpbGVuYW1lIiwidG9jYW5jZWwiLCJ0b0ZsYXNoIiwidG9zY2FuIiwiYmFyY29kZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBO0VBQ0FBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFFQUM7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FIO1FBQ0FJO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBO01BQUE7TUFDQUM7UUFDQTtRQUNBO1VBQ0FOO1lBQ0FDO1lBQ0FNO1lBQ0FDO1VBQ0E7VUFDQUM7WUFDQVQ7VUFFQTtRQUdBO01BQ0E7SUFDQTtJQUNBVTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxiYXJjb2RlIGlkPScxJyBjbGFzcz1cImJhcmNvZGVcIiBhdXRvc3RhcnQ9XCJ0cnVlXCIgcmVmPVwiYmFyY29kZVwiIGJhY2tncm91bmQ9XCJyZ2IoMCwwLDApXCIgZnJhbWVDb2xvcj1cIiMwMEMxREVcIlxyXG5cdFx0XHRzY2FuYmFyQ29sb3I9XCIjMDBDMURFXCIgOmZpbHRlcnM9XCJmaWxcIiBAbWFya2VkPVwic3VjY2VzczFcIiBAZXJyb3I9XCJmYWlsMVwiPjwvYmFyY29kZT5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcCByb3dcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXBcIj57e2kxOG4uaW5kZXguc2NhbnRpcH19PC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNjYW5jb2RlXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJzY2FuXCI+e3tpMThuLmluZGV4LnNjYW5UfX08L3RleHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50X2ltZ1wiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInF1YW5cIiBAY2xpY2s9XCJpbnB1dENvZGUoKVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2NhblwiPnt7aTE4bi5pbmRleC5xdWFufX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBodHRwIGZyb20gJ0AvdG9vbENsYXNzL1dZVG9vbENsYXNzLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGkxOG4oKSB7XHJcblx0XHRcdFx0Ly8gcmV0dXJuIHRoaXMuJHQoJ2luZGV4JylcclxuXHRcdFx0XHRyZXR1cm4gZ2V0QXBwKCkuZ2xvYmFsRGF0YS4kdCgnaW5kZXgnKSAvL+W9k+eEtumhtemdouS4reWwseaYr+aMiVZ1ZemhtemdoumHjOmCo+agt+S9v+eUqOS6hiAgXHJcblx0XHRcdH0sXHJcblx0XHR9LFxuXHRcdFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmaWw6IFswLCAyLCAxXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuXHRcdFx0XHR0aXRsZTp0aGlzLmkxOG4uaW5kZXguc2NhblRcblx0XHRcdH0pXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0aW5wdXRDb2RlKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJ3N1cmVjb2RlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3MxKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInN1Y2Nlc3MxOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuXHRcdFx0XHR2YXIgY29kZSA9IGUuZGV0YWlsLm1lc3NhZ2Vcblx0XHRcdFx0dmFyIHBhcmFtID0geyd2ZXJpZnlfY29kZSc6Y29kZX1cblx0XHRcdFx0aHR0cC5zZW5kUmVxdWVzdCgnTWVyY2hhbnRPcmRlci5WZXJpZmljYXRpb25TaGVldCcscGFyYW0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdFx0aWYoZGF0YS5jb2RlID09IDApe1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRpY29uOicnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwxKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImZhaWwxOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1N0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuc3RhcnQoe1xyXG5cdFx0XHRcdFx0Y29uc2VydmU6IHRydWUsXHJcblx0XHRcdFx0XHRmaWxlbmFtZTogJ19kb2MvYmFyY29kZS8nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvY2FuY2VsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuY2FuY2VsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRmxhc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuYmFyY29kZS5zZXRGbGFzaCh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHRvc2NhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzY2FuOlwiKTtcclxuXHRcdFx0XHRjb25zdCBiYXJjb2RlTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2JhcmNvZGVTY2FuJyk7XHJcblx0XHRcdFx0YmFyY29kZU1vZHVsZS5zY2FuKFwiL3N0YXRpYy9iYXJjb2RlMS5wbmdcIiwgKGUpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwic2Nhbl9lcnJvcjpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmJhcmNvZGUge1xyXG5cdFx0d2lkdGg6IDM3NXB4O1xyXG5cdFx0aGVpZ2h0OiA0MDBweDtcclxuXHR9XHJcblxyXG5cdC50b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0d2lkdGg6IDM3NXB4O1xyXG5cdFx0aGVpZ2h0OiAyNjdweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LnRpcCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDg1cHg7XHJcblx0fVxyXG5cclxuXHQuc2NhbmNvZGUge1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHR0b3A6IDgwcHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bGVmdDogNzBweDtcclxuXHR9XHJcblxyXG5cdC5zY2FuIHtcclxuXHRcdGhlaWdodDogMjFweDtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIxcHg7XHJcblx0fVxuXHQuY29udGVudF9pbWcge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0d2lkdGg6IDVweDtcblx0XHRoZWlnaHQ6IDVweDtcblx0XHRib3JkZXItcmFkaXVzOiAyLjVweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0fVxyXG5cclxuXHQucXVhbiB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHRvcDogODBweDtcclxuXHRcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogNzBweDtcblx0XHRcclxuXHR9XG5cdC5xdWFudHh0e1xuXHRcdGhlaWdodDogMjFweDtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdGxpbmUtaGVpZ2h0OiAyMXB4O1xuXHR9XHJcblxyXG5cdFxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
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
/* 12 */
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
/* 13 */
/*!*********************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/toolClass/WYToolClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 12);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ 14));\nvar _default = {\n  user: function user() {\n    return uni.getStorageSync('userinfo');\n  },\n  sendRequest: function sendRequest(url, data) {\n    __f__(\"log\", \">--->\", url, data, \" at toolClass/WYToolClass.js:8\");\n    var promise = new Promise(function (resolve, reject) {\n      // uni.showLoading({\n      // \ttitle: ' '\n      // })\n      var value = uni.getStorageSync('userinfo');\n      // console.log(value)\n      var toolData = {\n        lat: '0',\n        lng: '0'\n      };\n      if (value) {\n        toolData.uid = value.uid;\n        toolData.token = value.token;\n      }\n      var loaction = uni.getStorageSync('shopAddress');\n      if (loaction) {\n        toolData.lat = loaction.lat;\n        toolData.lng = loaction.lng;\n      }\n      // const cityid = uni.getStorageSync('cityid')\n      // if(cityid){\n      // \ttoolData.cityid = cityid\n      // }\n      toolData.cityid = '1';\n      if (getApp().globalData.platform == 'ios') {\n        toolData.source = 2;\n      } else if (getApp().globalData.platform == 'android') {\n        toolData.source = 1;\n      }\n\n      // console.log(data,toolData)\n      uni.request({\n        url: getApp().globalData.weburl + 'api/?s=Merchant.' + url,\n        data: Object.assign(toolData, data),\n        success: function success(res) {\n          __f__(\"log\", \"<----<\", url, res, \" at toolClass/WYToolClass.js:49\");\n          // uni.hideLoading();\n          __f__(\"log\", res, \" at toolClass/WYToolClass.js:51\");\n          if (res.data.ret == 200) {\n            if (res.data.data.code == 0 || !res.data.data.code) {\n              resolve(res.data.data);\n            } else {\n              uni.showToast({\n                title: res.data.data.msg,\n                duration: 2000,\n                icon: 'none'\n              });\n              if (res.data.data.code == 1002 || res.data.data.code == 700) {\n                resolve(res.data.data);\n                uni.setStorage({\n                  key: 'userinfo',\n                  data: ''\n                });\n              }\n            }\n          } else {\n            uni.showToast({\n              title: res.data.msg,\n              duration: 2000,\n              icon: 'none'\n            });\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"log\", error, \" at toolClass/WYToolClass.js:82\");\n          // uni.hideLoading();\n        },\n\n        complete: function complete(res) {\n          __f__(\"log\", 'complete', res, \" at toolClass/WYToolClass.js:88\");\n        }\n      });\n    });\n    return promise;\n  },\n  //适用于接口带有APP.\n  sendAppRequest: function sendAppRequest(url, data) {\n    var promise = new Promise(function (resolve, reject) {\n      // uni.showLoading({\n      // \ttitle: ' '\n      // })\n      var value = uni.getStorageSync('userinfo');\n      // console.log(value)\n      var toolData = {\n        lat: '0',\n        lng: '0'\n      };\n      if (value) {\n        toolData.uid = value.uid;\n        toolData.token = value.token;\n      }\n      var loaction = uni.getStorageSync('shopAddress');\n      if (loaction) {\n        toolData.lat = loaction.lat;\n        toolData.lng = loaction.lng;\n      }\n      toolData.cityid = '1';\n      // const cityid = uni.getStorageSync('cityid')\n      // if(cityid){\n      // \ttoolData.cityid = cityid\n      // }\n\n      if (getApp().globalData.platform == 'ios') {\n        toolData.source = 2;\n      } else if (getApp().globalData.platform == 'android') {\n        toolData.source = 1;\n      }\n\n      // console.log(data,toolData)\n      uni.request({\n        url: getApp().globalData.weburl + 'api/?s=App.' + url,\n        data: Object.assign(toolData, data),\n        success: function success(res) {\n          // uni.hideLoading();\n          // console.log(JSON.stringify(res));\n          if (res.data.ret == 200) {\n            if (res.data.data.code == 0) {\n              resolve(res.data.data);\n            } else {\n              uni.showToast({\n                title: res.data.data.msg,\n                duration: 2000,\n                icon: 'none'\n              });\n              // plus.nativeUI.toast(res.data.data.msg,{type:'richtext',\n              // \tduration:'2000',\n              // \tverticalAlign:'center',\n              // \trichTextStyle:{\n              // \t\talign:'center'\n              // \t}\n              // })\n\n              if (res.data.data.code == 1002) {\n                resolve(res.data.data);\n              } else if (res.data.data.code == 700) {\n                // uni.setStorage({\n                // \tkey:'userinfo',\n                // \tdata:''\n                // })\n                resolve(res.data.data);\n              }\n            }\n          } else {\n            uni.showToast({\n              title: res.data.msg,\n              duration: 2000,\n              icon: 'none'\n            });\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"log\", 'error:' + error, \" at toolClass/WYToolClass.js:178\");\n          // uni.hideLoading();\n        },\n\n        complete: function complete(res) {\n          //console.log(res)\n        }\n      });\n    });\n    return promise;\n  },\n  //上传\n  sendUploadImages: function sendUploadImages(imgsList) {\n    var promise = new Promise(function (resolve, reject) {\n      var that = this;\n      var value = uni.getStorageSync('userinfo');\n      var toolData = {};\n      if (value) {\n        toolData.uid = value.uid;\n        toolData.token = value.token;\n      }\n      __f__(\"log\", imgsList, \" at toolClass/WYToolClass.js:202\");\n      var imgs = imgsList.map(function (value, index) {\n        return {\n          name: 'images' + index,\n          url: value\n        };\n      });\n      __f__(\"log\", imgs, \" at toolClass/WYToolClass.js:209\");\n      var imgUrlArr = [];\n      for (var i = 0; i < imgs.length; i++) {\n        uni.uploadFile({\n          url: getApp().globalData.weburl + 'api/?s=Merchant.Upload.Upload',\n          filePath: imgs[i].url,\n          name: imgs[i].name,\n          formData: toolData,\n          success: function success(res) {\n            __f__(\"log\", res, \" at toolClass/WYToolClass.js:218\");\n            // uni.hideLoading()\n            var data = JSON.parse(res.data);\n            var img = data.data.info[0].url_all;\n            imgUrlArr.push(img);\n            if (imgUrlArr.length == imgsList.length) {\n              resolve(imgUrlArr);\n            }\n          },\n          fail: function fail(err) {\n            // uni.hideLoading()\n          }\n        });\n      }\n    });\n    return promise;\n  },\n  decypt: function decypt(code) {\n    var newcode = '';\n    var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&*';\n    for (var i = 0; i < code.length; i++) {\n      var codeIteam = code[i];\n      for (var j = 0; j < str.length; j++) {\n        var stringIteam = str[j];\n        if (codeIteam == stringIteam) {\n          if (j == 0) {\n            newcode += str[str.length - 1];\n          } else {\n            newcode += str[j - 1];\n          }\n        }\n      }\n    }\n    return newcode;\n  },\n  sort2url: function sort2url(arr1) {\n    var newkey = Object.keys(arr1).sort();\n    var newObj = {};\n    for (var i = 0; i < newkey.length; i++) {\n      newObj[newkey[i]] = arr1[newkey[i]];\n    }\n    var text = \"\";\n    for (var index in newObj) {\n      text = text + index + \"=\" + newObj[index] + \"&\";\n    }\n    text = text.substr(0, text.length - 1);\n    text += '&' + '400d069a791d51ada8af3e6c2979bcd7';\n    return (0, _md.default)(text);\n  },\n  getQueryString: function getQueryString(name) {\n    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');\n    var r = window.location.search.substr(1).match(reg);\n    if (r != null) {\n      return unescape(r[2]);\n    }\n    return null;\n  },\n  checktoken: function checktoken() {\n    var promise = new Promise(function (resolve, reject) {\n      var value = uni.getStorageSync('userinfo');\n      if (value == '' || value.token == undefined || value == '') {\n        uni.hideLoading();\n        resolve(0);\n      } else {\n        uni.request({\n          url: getApp().globalData.weburl + 'api/?s=App.User.Iftoken',\n          method: 'POST',\n          data: {\n            'uid': value.uid,\n            'token': value.token\n          },\n          success: function success(res) {\n            __f__(\"log\", res, \" at toolClass/WYToolClass.js:292\");\n            uni.hideLoading();\n            if (res.data.data.code == 0) {\n              resolve(0);\n            } else {\n              reject(res.data.data.msg);\n            }\n          },\n          fail: function fail() {\n            uni.hideLoading();\n          },\n          complete: function complete() {\n            uni.hideLoading();\n          }\n        });\n      }\n    });\n    return promise;\n  }\n}; // module.exports.sendRequest = sendRequest;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdG9vbENsYXNzL1dZVG9vbENsYXNzLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsInNlbmRSZXF1ZXN0IiwidXJsIiwiZGF0YSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZhbHVlIiwidG9vbERhdGEiLCJsYXQiLCJsbmciLCJ1aWQiLCJ0b2tlbiIsImxvYWN0aW9uIiwiY2l0eWlkIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInBsYXRmb3JtIiwic291cmNlIiwicmVxdWVzdCIsIndlYnVybCIsIk9iamVjdCIsImFzc2lnbiIsInN1Y2Nlc3MiLCJyZXMiLCJyZXQiLCJjb2RlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJkdXJhdGlvbiIsImljb24iLCJzZXRTdG9yYWdlIiwia2V5IiwiZmFpbCIsImVycm9yIiwiY29tcGxldGUiLCJzZW5kQXBwUmVxdWVzdCIsInNlbmRVcGxvYWRJbWFnZXMiLCJpbWdzTGlzdCIsInRoYXQiLCJpbWdzIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwiaW1nVXJsQXJyIiwiaSIsImxlbmd0aCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiaW1nIiwiaW5mbyIsInVybF9hbGwiLCJwdXNoIiwiZXJyIiwiZGVjeXB0IiwibmV3Y29kZSIsInN0ciIsImNvZGVJdGVhbSIsImoiLCJzdHJpbmdJdGVhbSIsInNvcnQydXJsIiwiYXJyMSIsIm5ld2tleSIsImtleXMiLCJzb3J0IiwibmV3T2JqIiwidGV4dCIsInN1YnN0ciIsIm1kNV9qcyIsImdldFF1ZXJ5U3RyaW5nIiwicmVnIiwiUmVnRXhwIiwiciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibWF0Y2giLCJ1bmVzY2FwZSIsImNoZWNrdG9rZW4iLCJ1bmRlZmluZWQiLCJoaWRlTG9hZGluZyIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7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LEtBQUssQ0FBQ0ssS0FBSyxJQUFJdUUsU0FBUyxJQUFJNUUsS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUMxRFQsR0FBRyxDQUFDc0YsV0FBVyxFQUFFO1FBQ2xCL0UsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNYLENBQUMsTUFBTTtRQUNOUCxHQUFHLENBQUNxQixPQUFPLENBQUM7VUFDWGxCLEdBQUcsRUFBRWMsTUFBTSxFQUFFLENBQUNDLFVBQVUsQ0FBQ0ksTUFBTSxHQUFHLHlCQUF5QjtVQUMzRGlFLE1BQU0sRUFBRSxNQUFNO1VBQ2RuRixJQUFJLEVBQUU7WUFDTCxLQUFLLEVBQUVLLEtBQUssQ0FBQ0ksR0FBRztZQUNoQixPQUFPLEVBQUVKLEtBQUssQ0FBQ0s7VUFDaEIsQ0FBQztVQUNEVyxPQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtZQUNmLGFBQVlBLEdBQUc7WUFDZDFCLEdBQUcsQ0FBQ3NGLFdBQVcsRUFBRTtZQUNsQixJQUFJNUQsR0FBRyxDQUFDdEIsSUFBSSxDQUFDQSxJQUFJLENBQUN3QixJQUFJLElBQUksQ0FBQyxFQUFFO2NBQzVCckIsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsTUFBTTtjQUNOQyxNQUFNLENBQUNrQixHQUFHLENBQUN0QixJQUFJLENBQUNBLElBQUksQ0FBQzJCLEdBQUcsQ0FBQztZQUMxQjtVQUNELENBQUM7VUFDREssSUFBSSxFQUFFLGdCQUFNO1lBQUNwQyxHQUFHLENBQUNzRixXQUFXLEVBQUU7VUFBQSxDQUFDO1VBQy9CaEQsUUFBUSxFQUFFLG9CQUFNO1lBQUN0QyxHQUFHLENBQUNzRixXQUFXLEVBQUU7VUFBQTtRQUNuQyxDQUFDLENBQUM7TUFDSDtJQUNELENBQUMsQ0FBQztJQUVGLE9BQU9qRixPQUFPO0VBQ2Y7QUFFRixDQUFDLEVBQ0Q7QUFBQSwyQiIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZDVfanMgZnJvbSAnLi9tZDUuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dXNlcigpIHtcclxuXHRcdHJldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJpbmZvJylcclxuXHR9LFx0XHJcblx0c2VuZFJlcXVlc3QodXJsLCBkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIj4tLS0+XCIsdXJsLGRhdGEpXHJcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHQvLyB1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHQvLyBcdHRpdGxlOiAnICdcclxuXHRcdFx0Ly8gfSlcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJpbmZvJyk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cdFx0XHR2YXIgdG9vbERhdGEgPSB7XHJcblx0XHRcdFx0bGF0OicwJyxcclxuXHRcdFx0XHRsbmc6JzAnXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdFx0dG9vbERhdGEudWlkID0gdmFsdWUudWlkXHJcblx0XHRcdFx0dG9vbERhdGEudG9rZW4gPSB2YWx1ZS50b2tlblx0XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGxvYWN0aW9uID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdzaG9wQWRkcmVzcycpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGxvYWN0aW9uKSB7XHJcblx0XHRcdFx0dG9vbERhdGEubGF0ID0gbG9hY3Rpb24ubGF0XHJcblx0XHRcdFx0dG9vbERhdGEubG5nID0gbG9hY3Rpb24ubG5nXHRcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBjb25zdCBjaXR5aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2NpdHlpZCcpXHJcblx0XHRcdC8vIGlmKGNpdHlpZCl7XHJcblx0XHRcdC8vIFx0dG9vbERhdGEuY2l0eWlkID0gY2l0eWlkXHJcblx0XHRcdC8vIH1cclxuXHRcdFx0dG9vbERhdGEuY2l0eWlkID0gJzEnXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRpZihnZXRBcHAoKS5nbG9iYWxEYXRhLnBsYXRmb3JtID09ICdpb3MnKXtcclxuXHRcdFx0XHR0b29sRGF0YS5zb3VyY2UgPSAyXHJcblx0XHRcdH1lbHNlIGlmKGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcclxuXHRcdFx0XHR0b29sRGF0YS5zb3VyY2UgPSAxXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEsdG9vbERhdGEpXHJcblx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IGdldEFwcCgpLmdsb2JhbERhdGEud2VidXJsICsgJ2FwaS8/cz1NZXJjaGFudC4nICsgdXJsLFxyXG5cdFx0XHRcdGRhdGE6IE9iamVjdC5hc3NpZ24odG9vbERhdGEsIGRhdGEpLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCI8LS0tLTxcIix1cmwscmVzKVxyXG5cdFx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5yZXQgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMCB8fCAhcmVzLmRhdGEuZGF0YS5jb2RlKXtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS5jb2RlID09IDEwMDIgfHwgcmVzLmRhdGEuZGF0YS5jb2RlID09IDcwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5Oid1c2VyaW5mbycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6JydcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKCk7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y29tcGxldGU6ZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NvbXBsZXRlJyxyZXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH0sXHJcblx0Ly/pgILnlKjkuo7mjqXlj6PluKbmnIlBUFAuXHJcblx0c2VuZEFwcFJlcXVlc3QodXJsLCBkYXRhKSB7XHJcblx0XHRcclxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdC8vIHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdC8vIFx0dGl0bGU6ICcgJ1xyXG5cdFx0XHQvLyB9KVxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcmluZm8nKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdHZhciB0b29sRGF0YSA9IHtcclxuXHRcdFx0XHRsYXQ6JzAnLFxyXG5cdFx0XHRcdGxuZzonMCdcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0XHR0b29sRGF0YS51aWQgPSB2YWx1ZS51aWRcclxuXHRcdFx0XHR0b29sRGF0YS50b2tlbiA9IHZhbHVlLnRva2VuXHRcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgbG9hY3Rpb24gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Nob3BBZGRyZXNzJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobG9hY3Rpb24pIHtcclxuXHRcdFx0XHR0b29sRGF0YS5sYXQgPSBsb2FjdGlvbi5sYXRcclxuXHRcdFx0XHR0b29sRGF0YS5sbmcgPSBsb2FjdGlvbi5sbmdcdFxyXG5cdFx0XHR9XHJcblx0XHRcdHRvb2xEYXRhLmNpdHlpZCA9ICcxJ1xyXG5cdFx0XHQvLyBjb25zdCBjaXR5aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2NpdHlpZCcpXHJcblx0XHRcdC8vIGlmKGNpdHlpZCl7XHJcblx0XHRcdC8vIFx0dG9vbERhdGEuY2l0eWlkID0gY2l0eWlkXHJcblx0XHRcdC8vIH1cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdGlmKGdldEFwcCgpLmdsb2JhbERhdGEucGxhdGZvcm0gPT0gJ2lvcycpe1xyXG5cdFx0XHRcdHRvb2xEYXRhLnNvdXJjZSA9IDJcclxuXHRcdFx0fWVsc2UgaWYoZ2V0QXBwKCkuZ2xvYmFsRGF0YS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpe1xyXG5cdFx0XHRcdHRvb2xEYXRhLnNvdXJjZSA9IDFcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSx0b29sRGF0YSlcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS53ZWJ1cmwgKyAnYXBpLz9zPUFwcC4nICsgdXJsLFxyXG5cdFx0XHRcdGRhdGE6IE9iamVjdC5hc3NpZ24odG9vbERhdGEsIGRhdGEpLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5yZXQgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEuZGF0YS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQvLyBwbHVzLm5hdGl2ZVVJLnRvYXN0KHJlcy5kYXRhLmRhdGEubXNnLHt0eXBlOidyaWNodGV4dCcsXHJcblx0XHRcdFx0XHRcdFx0Ly8gXHRkdXJhdGlvbjonMjAwMCcsXHJcblx0XHRcdFx0XHRcdFx0Ly8gXHR2ZXJ0aWNhbEFsaWduOidjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdC8vIFx0cmljaFRleHRTdHlsZTp7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdGFsaWduOidjZW50ZXInXHJcblx0XHRcdFx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMTAwMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5kYXRhLmRhdGEuY29kZSA9PSA3MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0a2V5Oid1c2VyaW5mbycsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdGRhdGE6JydcclxuXHRcdFx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tc2csXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3I6JyArIGVycm9yKVxyXG5cdFx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjb21wbGV0ZTpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH0sXHJcblx0XHJcblx0XHJcblx0Ly/kuIrkvKBcclxuXHRcclxuXHRzZW5kVXBsb2FkSW1hZ2VzKGltZ3NMaXN0KXtcclxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcmluZm8nKTtcclxuXHRcdFx0dmFyIHRvb2xEYXRhID0ge31cclxuXHRcdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdFx0dG9vbERhdGEudWlkID0gdmFsdWUudWlkXHJcblx0XHRcdFx0dG9vbERhdGEudG9rZW4gPSB2YWx1ZS50b2tlblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKGltZ3NMaXN0KVxyXG5cdFx0XHRsZXQgaW1ncyA9IGltZ3NMaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZXMnICsgaW5kZXgsXHJcblx0XHRcdFx0XHR1cmw6IHZhbHVlXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGltZ3MpXHJcblx0XHRcdHZhciBpbWdVcmxBcnIgPSBbXVxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6IGdldEFwcCgpLmdsb2JhbERhdGEud2VidXJsICsgJ2FwaS8/cz1NZXJjaGFudC5VcGxvYWQuVXBsb2FkJyxcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiBpbWdzW2ldLnVybCxcclxuXHRcdFx0XHRcdG5hbWU6IGltZ3NbaV0ubmFtZSxcclxuXHRcdFx0XHRcdGZvcm1EYXRhOiB0b29sRGF0YSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0XHR2YXIgaW1nID0gZGF0YS5kYXRhLmluZm9bMF0udXJsX2FsbFxyXG5cdFx0XHRcdFx0XHRpbWdVcmxBcnIucHVzaChpbWcpXHJcblx0XHRcdFx0XHRcdGlmKGltZ1VybEFyci5sZW5ndGggPT0gaW1nc0xpc3QubGVuZ3RoKXtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGltZ1VybEFycilcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBwcm9taXNlXHJcblx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGRlY3lwdChjb2RlKSB7XHJcblx0XHR2YXIgbmV3Y29kZSA9ICcnO1xyXG5cdFx0dmFyIHN0ciA9ICcxZWN4WHlMUkIuQ09kckFpOnEwOVo2MmFzaC1RR244VkZOSWxiPWZNL0Q3NFdqU19FVXpZdXc/SG1UUHZrSjNvdEs1Z3AmKidcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29kZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY29kZUl0ZWFtID0gY29kZVtpXTtcclxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHR2YXIgc3RyaW5nSXRlYW0gPSBzdHJbal07XHJcblx0XHRcdFx0aWYgKGNvZGVJdGVhbSA9PSBzdHJpbmdJdGVhbSkge1xyXG5cdFx0XHRcdFx0aWYgKGogPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRuZXdjb2RlICs9IHN0cltzdHIubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdjb2RlICs9IHN0cltqIC0gMV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3Y29kZTtcclxuXHR9LFxyXG5cdHNvcnQydXJsKGFycjEpIHtcclxuXHRcdHZhciBuZXdrZXkgPSBPYmplY3Qua2V5cyhhcnIxKS5zb3J0KCk7XHJcblx0XHR2YXIgbmV3T2JqID0ge307XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld2tleS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXdPYmpbbmV3a2V5W2ldXSA9IGFycjFbbmV3a2V5W2ldXTtcclxuXHRcdH1cclxuXHRcdHZhciB0ZXh0ID0gXCJcIjtcclxuXHRcdGZvciAodmFyIGluZGV4IGluIG5ld09iaikge1xyXG5cdFx0XHR0ZXh0ID0gdGV4dCArIGluZGV4ICsgXCI9XCIgKyBuZXdPYmpbaW5kZXhdICsgXCImXCI7XHJcblx0XHR9XHJcblx0XHR0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgdGV4dC5sZW5ndGggLSAxKTtcclxuXHRcdHRleHQgKz0gJyYnICsgJzQwMGQwNjlhNzkxZDUxYWRhOGFmM2U2YzI5NzliY2Q3JztcclxuXHRcdHJldHVybiBtZDVfanModGV4dCk7XHJcblx0fSxcclxuXHRnZXRRdWVyeVN0cmluZyhuYW1lKSB7XHJcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKF58JiknICsgbmFtZSArICc9KFteJl0qKSgmfCQpJywgJ2knKTtcclxuXHRcdHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuXHRcdGlmIChyICE9IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHVuZXNjYXBlKHJbMl0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSxcclxuXHRjaGVja3Rva2VuKCkge1xyXG5cdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyaW5mbycpO1xyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZS50b2tlbiA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdCB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0cmVzb2x2ZSgwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGdldEFwcCgpLmdsb2JhbERhdGEud2VidXJsICsgJ2FwaS8/cz1BcHAuVXNlci5JZnRva2VuJyxcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHQndWlkJzogdmFsdWUudWlkLFxyXG5cdFx0XHRcdFx0XHRcdCd0b2tlbic6IHZhbHVlLnRva2VuXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHRcdCB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5kYXRhLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgwKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QocmVzLmRhdGEuZGF0YS5tc2cpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7dW5pLmhpZGVMb2FkaW5nKCl9LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge3VuaS5oaWRlTG9hZGluZygpfVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHR9LFxyXG5cdFx0XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMuc2VuZFJlcXVlc3QgPSBzZW5kUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/toolClass/md5.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 16);\n/**\r\n * [js-md5]{@link https://github.com/emn178/js-md5}\r\n *\r\n * @namespace md5\r\n * @version 0.7.3\r\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\r\n * @copyright Chen, Yi-Cyuan 2014-2017\r\n * @license MIT\r\n */\n(function () {\n  'use strict';\n\n  var ERROR = 'input is invalid type';\n  var WINDOW = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object';\n  var root = WINDOW ? window : {};\n  if (root.JS_MD5_NO_WINDOW) {\n    WINDOW = false;\n  }\n  var WEB_WORKER = !WINDOW && (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === 'object';\n  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === \"undefined\" ? \"undefined\" : _typeof(process)) === 'object' && process.versions && process.versions.node;\n  if (NODE_JS) {\n    root = global;\n  } else if (WEB_WORKER) {\n    root = self;\n  }\n  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;\n  var AMD =  true && __webpack_require__(/*! !webpack amd options */ 17);\n  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';\n  var HEX_CHARS = '0123456789abcdef'.split('');\n  var EXTRA = [128, 32768, 8388608, -2147483648];\n  var SHIFT = [0, 8, 16, 24];\n  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];\n  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');\n  var blocks = [],\n    buffer8;\n  if (ARRAY_BUFFER) {\n    var buffer = new ArrayBuffer(68);\n    buffer8 = new Uint8Array(buffer);\n    blocks = new Uint32Array(buffer);\n  }\n  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {\n    Array.isArray = function (obj) {\n      return Object.prototype.toString.call(obj) === '[object Array]';\n    };\n  }\n  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {\n    ArrayBuffer.isView = function (obj) {\n      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;\n    };\n  }\n\n  /**\r\n   * @method hex\r\n   * @memberof md5\r\n   * @description Output hash as hex string\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {String} Hex string\r\n   * @example\r\n   * md5.hex('The quick brown fox jumps over the lazy dog');\r\n   * // equal to\r\n   * md5('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method digest\r\n   * @memberof md5\r\n   * @description Output hash as bytes array\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Array} Bytes array\r\n   * @example\r\n   * md5.digest('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method array\r\n   * @memberof md5\r\n   * @description Output hash as bytes array\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Array} Bytes array\r\n   * @example\r\n   * md5.array('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method arrayBuffer\r\n   * @memberof md5\r\n   * @description Output hash as ArrayBuffer\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @example\r\n   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method buffer\r\n   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.\r\n   * @memberof md5\r\n   * @description Output hash as ArrayBuffer\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @example\r\n   * md5.buffer('The quick brown fox jumps over the lazy dog');\r\n   */\n  /**\r\n   * @method base64\r\n   * @memberof md5\r\n   * @description Output hash as base64 string\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {String} base64 string\r\n   * @example\r\n   * md5.base64('The quick brown fox jumps over the lazy dog');\r\n   */\n  var createOutputMethod = function createOutputMethod(outputType) {\n    return function (message) {\n      return new Md5(true).update(message)[outputType]();\n    };\n  };\n\n  /**\r\n   * @method create\r\n   * @memberof md5\r\n   * @description Create Md5 object\r\n   * @returns {Md5} Md5 object.\r\n   * @example\r\n   * var hash = md5.create();\r\n   */\n  /**\r\n   * @method update\r\n   * @memberof md5\r\n   * @description Create and update Md5 object\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Md5} Md5 object.\r\n   * @example\r\n   * var hash = md5.update('The quick brown fox jumps over the lazy dog');\r\n   * // equal to\r\n   * var hash = md5.create();\r\n   * hash.update('The quick brown fox jumps over the lazy dog');\r\n   */\n  var createMethod = function createMethod() {\n    var method = createOutputMethod('hex');\n    if (NODE_JS) {\n      method = nodeWrap(method);\n    }\n    method.create = function () {\n      return new Md5();\n    };\n    method.update = function (message) {\n      return method.create().update(message);\n    };\n    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {\n      var type = OUTPUT_TYPES[i];\n      method[type] = createOutputMethod(type);\n    }\n    return method;\n  };\n  var nodeWrap = function nodeWrap(method) {\n    var crypto = eval(\"require('crypto')\");\n    var Buffer = eval(\"require('buffer').Buffer\");\n    var nodeMethod = function nodeMethod(message) {\n      if (typeof message === 'string') {\n        return crypto.createHash('md5').update(message, 'utf8').digest('hex');\n      } else {\n        if (message === null || message === undefined) {\n          throw ERROR;\n        } else if (message.constructor === ArrayBuffer) {\n          message = new Uint8Array(message);\n        }\n      }\n      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {\n        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');\n      } else {\n        return method(message);\n      }\n    };\n    return nodeMethod;\n  };\n\n  /**\r\n   * Md5 class\r\n   * @class Md5\r\n   * @description This is internal class.\r\n   * @see {@link md5.create}\r\n   */\n  function Md5(sharedMemory) {\n    if (sharedMemory) {\n      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      this.blocks = blocks;\n      this.buffer8 = buffer8;\n    } else {\n      if (ARRAY_BUFFER) {\n        var buffer = new ArrayBuffer(68);\n        this.buffer8 = new Uint8Array(buffer);\n        this.blocks = new Uint32Array(buffer);\n      } else {\n        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n      }\n    }\n    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;\n    this.finalized = this.hashed = false;\n    this.first = true;\n  }\n\n  /**\r\n   * @method update\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Update hash\r\n   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n   * @returns {Md5} Md5 object.\r\n   * @see {@link md5.update}\r\n   */\n  Md5.prototype.update = function (message) {\n    if (this.finalized) {\n      return;\n    }\n    var notString,\n      type = _typeof(message);\n    if (type !== 'string') {\n      if (type === 'object') {\n        if (message === null) {\n          throw ERROR;\n        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {\n          message = new Uint8Array(message);\n        } else if (!Array.isArray(message)) {\n          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {\n            throw ERROR;\n          }\n        }\n      } else {\n        throw ERROR;\n      }\n      notString = true;\n    }\n    var code,\n      index = 0,\n      i,\n      length = message.length,\n      blocks = this.blocks;\n    var buffer8 = this.buffer8;\n    while (index < length) {\n      if (this.hashed) {\n        this.hashed = false;\n        blocks[0] = blocks[16];\n        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n      }\n      if (notString) {\n        if (ARRAY_BUFFER) {\n          for (i = this.start; index < length && i < 64; ++index) {\n            buffer8[i++] = message[index];\n          }\n        } else {\n          for (i = this.start; index < length && i < 64; ++index) {\n            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];\n          }\n        }\n      } else {\n        if (ARRAY_BUFFER) {\n          for (i = this.start; index < length && i < 64; ++index) {\n            code = message.charCodeAt(index);\n            if (code < 0x80) {\n              buffer8[i++] = code;\n            } else if (code < 0x800) {\n              buffer8[i++] = 0xc0 | code >> 6;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            } else if (code < 0xd800 || code >= 0xe000) {\n              buffer8[i++] = 0xe0 | code >> 12;\n              buffer8[i++] = 0x80 | code >> 6 & 0x3f;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            } else {\n              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);\n              buffer8[i++] = 0xf0 | code >> 18;\n              buffer8[i++] = 0x80 | code >> 12 & 0x3f;\n              buffer8[i++] = 0x80 | code >> 6 & 0x3f;\n              buffer8[i++] = 0x80 | code & 0x3f;\n            }\n          }\n        } else {\n          for (i = this.start; index < length && i < 64; ++index) {\n            code = message.charCodeAt(index);\n            if (code < 0x80) {\n              blocks[i >> 2] |= code << SHIFT[i++ & 3];\n            } else if (code < 0x800) {\n              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            } else if (code < 0xd800 || code >= 0xe000) {\n              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            } else {\n              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);\n              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n            }\n          }\n        }\n      }\n      this.lastByteIndex = i;\n      this.bytes += i - this.start;\n      if (i >= 64) {\n        this.start = i - 64;\n        this.hash();\n        this.hashed = true;\n      } else {\n        this.start = i;\n      }\n    }\n    if (this.bytes > 4294967295) {\n      this.hBytes += this.bytes / 4294967296 << 0;\n      this.bytes = this.bytes % 4294967296;\n    }\n    return this;\n  };\n  Md5.prototype.finalize = function () {\n    if (this.finalized) {\n      return;\n    }\n    this.finalized = true;\n    var blocks = this.blocks,\n      i = this.lastByteIndex;\n    blocks[i >> 2] |= EXTRA[i & 3];\n    if (i >= 56) {\n      if (!this.hashed) {\n        this.hash();\n      }\n      blocks[0] = blocks[16];\n      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n    }\n    blocks[14] = this.bytes << 3;\n    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;\n    this.hash();\n  };\n  Md5.prototype.hash = function () {\n    var a,\n      b,\n      c,\n      d,\n      bc,\n      da,\n      blocks = this.blocks;\n    if (this.first) {\n      a = blocks[0] - 680876937;\n      a = (a << 7 | a >>> 25) - 271733879 << 0;\n      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;\n      d = (d << 12 | d >>> 20) + a << 0;\n      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;\n      c = (c << 17 | c >>> 15) + d << 0;\n      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;\n      b = (b << 22 | b >>> 10) + c << 0;\n    } else {\n      a = this.h0;\n      b = this.h1;\n      c = this.h2;\n      d = this.h3;\n      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;\n      a = (a << 7 | a >>> 25) + b << 0;\n      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;\n      d = (d << 12 | d >>> 20) + a << 0;\n      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;\n      c = (c << 17 | c >>> 15) + d << 0;\n      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;\n      b = (b << 22 | b >>> 10) + c << 0;\n    }\n    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;\n    a = (a << 7 | a >>> 25) + b << 0;\n    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;\n    d = (d << 12 | d >>> 20) + a << 0;\n    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;\n    c = (c << 17 | c >>> 15) + d << 0;\n    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;\n    b = (b << 22 | b >>> 10) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;\n    b = (b << 20 | b >>> 12) + c << 0;\n    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;\n    a = (a << 5 | a >>> 27) + b << 0;\n    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;\n    d = (d << 9 | d >>> 23) + a << 0;\n    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;\n    c = (c << 14 | c >>> 18) + d << 0;\n    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;\n    b = (b << 20 | b >>> 12) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[5] - 378558;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[8] - 2022574463;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[11] + 1839030562;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[14] - 35309556;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[1] - 1530992060;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[4] + 1272893353;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[7] - 155497632;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[10] - 1094730640;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[13] + 681279174;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[0] - 358537222;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[3] - 722521979;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[6] + 76029189;\n    b = (b << 23 | b >>> 9) + c << 0;\n    bc = b ^ c;\n    a += (bc ^ d) + blocks[9] - 640364487;\n    a = (a << 4 | a >>> 28) + b << 0;\n    d += (bc ^ a) + blocks[12] - 421815835;\n    d = (d << 11 | d >>> 21) + a << 0;\n    da = d ^ a;\n    c += (da ^ b) + blocks[15] + 530742520;\n    c = (c << 16 | c >>> 16) + d << 0;\n    b += (da ^ c) + blocks[2] - 995338651;\n    b = (b << 23 | b >>> 9) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[0] - 198630844;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[5] - 57434055;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[10] - 1051523;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[15] - 30611744;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;\n    b = (b << 21 | b >>> 11) + c << 0;\n    a += (c ^ (b | ~d)) + blocks[4] - 145523070;\n    a = (a << 6 | a >>> 26) + b << 0;\n    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;\n    d = (d << 10 | d >>> 22) + a << 0;\n    c += (a ^ (d | ~b)) + blocks[2] + 718787259;\n    c = (c << 15 | c >>> 17) + d << 0;\n    b += (d ^ (c | ~a)) + blocks[9] - 343485551;\n    b = (b << 21 | b >>> 11) + c << 0;\n    if (this.first) {\n      this.h0 = a + 1732584193 << 0;\n      this.h1 = b - 271733879 << 0;\n      this.h2 = c - 1732584194 << 0;\n      this.h3 = d + 271733878 << 0;\n      this.first = false;\n    } else {\n      this.h0 = this.h0 + a << 0;\n      this.h1 = this.h1 + b << 0;\n      this.h2 = this.h2 + c << 0;\n      this.h3 = this.h3 + d << 0;\n    }\n  };\n\n  /**\r\n   * @method hex\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as hex string\r\n   * @returns {String} Hex string\r\n   * @see {@link md5.hex}\r\n   * @example\r\n   * hash.hex();\r\n   */\n  Md5.prototype.hex = function () {\n    this.finalize();\n    var h0 = this.h0,\n      h1 = this.h1,\n      h2 = this.h2,\n      h3 = this.h3;\n    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];\n  };\n\n  /**\r\n   * @method toString\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as hex string\r\n   * @returns {String} Hex string\r\n   * @see {@link md5.hex}\r\n   * @example\r\n   * hash.toString();\r\n   */\n  Md5.prototype.toString = Md5.prototype.hex;\n\n  /**\r\n   * @method digest\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as bytes array\r\n   * @returns {Array} Bytes array\r\n   * @see {@link md5.digest}\r\n   * @example\r\n   * hash.digest();\r\n   */\n  Md5.prototype.digest = function () {\n    this.finalize();\n    var h0 = this.h0,\n      h1 = this.h1,\n      h2 = this.h2,\n      h3 = this.h3;\n    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];\n  };\n\n  /**\r\n   * @method array\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as bytes array\r\n   * @returns {Array} Bytes array\r\n   * @see {@link md5.array}\r\n   * @example\r\n   * hash.array();\r\n   */\n  Md5.prototype.array = Md5.prototype.digest;\n\n  /**\r\n   * @method arrayBuffer\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as ArrayBuffer\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @see {@link md5.arrayBuffer}\r\n   * @example\r\n   * hash.arrayBuffer();\r\n   */\n  Md5.prototype.arrayBuffer = function () {\n    this.finalize();\n    var buffer = new ArrayBuffer(16);\n    var blocks = new Uint32Array(buffer);\n    blocks[0] = this.h0;\n    blocks[1] = this.h1;\n    blocks[2] = this.h2;\n    blocks[3] = this.h3;\n    return buffer;\n  };\n\n  /**\r\n   * @method buffer\r\n   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as ArrayBuffer\r\n   * @returns {ArrayBuffer} ArrayBuffer\r\n   * @see {@link md5.buffer}\r\n   * @example\r\n   * hash.buffer();\r\n   */\n  Md5.prototype.buffer = Md5.prototype.arrayBuffer;\n\n  /**\r\n   * @method base64\r\n   * @memberof Md5\r\n   * @instance\r\n   * @description Output hash as base64 string\r\n   * @returns {String} base64 string\r\n   * @see {@link md5.base64}\r\n   * @example\r\n   * hash.base64();\r\n   */\n  Md5.prototype.base64 = function () {\n    var v1,\n      v2,\n      v3,\n      base64Str = '',\n      bytes = this.array();\n    for (var i = 0; i < 15;) {\n      v1 = bytes[i++];\n      v2 = bytes[i++];\n      v3 = bytes[i++];\n      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];\n    }\n    v1 = bytes[i];\n    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';\n    return base64Str;\n  };\n  var exports = createMethod();\n  if (COMMON_JS) {\n    module.exports = exports;\n  } else {\n    /**\r\n     * @method md5\b\r\n     * @description Md5 hash function, export to global in browsers.\r\n     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash\r\n     * @returns {String} md5 hashes\r\n     * @example\r\n     * md5(''); // d41d8cd98f00b204e9800998ecf8427e\r\n     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6\r\n     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0\r\n     *\r\n     * // It also supports UTF-8 encoding\r\n     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07\r\n     *\r\n     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`\r\n     * md5([]); // d41d8cd98f00b204e9800998ecf8427e\r\n     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e\r\n     */\n    root.md5 = exports;\n    if (AMD) {\n      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n        return exports;\n      }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n  }\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/module.js */ 15)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdG9vbENsYXNzL21kNS5qcyJdLCJuYW1lcyI6WyJFUlJPUiIsIldJTkRPVyIsIndpbmRvdyIsInJvb3QiLCJKU19NRDVfTk9fV0lORE9XIiwiV0VCX1dPUktFUiIsInNlbGYiLCJOT0RFX0pTIiwiSlNfTUQ1X05PX05PREVfSlMiLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJub2RlIiwiZ2xvYmFsIiwiQ09NTU9OX0pTIiwiSlNfTUQ1X05PX0NPTU1PTl9KUyIsIm1vZHVsZSIsImV4cG9ydHMiLCJBTUQiLCJkZWZpbmUiLCJBUlJBWV9CVUZGRVIiLCJKU19NRDVfTk9fQVJSQVlfQlVGRkVSIiwiQXJyYXlCdWZmZXIiLCJIRVhfQ0hBUlMiLCJzcGxpdCIsIkVYVFJBIiwiU0hJRlQiLCJPVVRQVVRfVFlQRVMiLCJCQVNFNjRfRU5DT0RFX0NIQVIiLCJibG9ja3MiLCJidWZmZXI4IiwiYnVmZmVyIiwiVWludDhBcnJheSIsIlVpbnQzMkFycmF5IiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiSlNfTUQ1X05PX0FSUkFZX0JVRkZFUl9JU19WSUVXIiwiaXNWaWV3IiwiY29uc3RydWN0b3IiLCJjcmVhdGVPdXRwdXRNZXRob2QiLCJvdXRwdXRUeXBlIiwibWVzc2FnZSIsIk1kNSIsInVwZGF0ZSIsImNyZWF0ZU1ldGhvZCIsIm1ldGhvZCIsIm5vZGVXcmFwIiwiY3JlYXRlIiwiaSIsImxlbmd0aCIsInR5cGUiLCJjcnlwdG8iLCJldmFsIiwiQnVmZmVyIiwibm9kZU1ldGhvZCIsImNyZWF0ZUhhc2giLCJkaWdlc3QiLCJ1bmRlZmluZWQiLCJzaGFyZWRNZW1vcnkiLCJoMCIsImgxIiwiaDIiLCJoMyIsInN0YXJ0IiwiYnl0ZXMiLCJoQnl0ZXMiLCJmaW5hbGl6ZWQiLCJoYXNoZWQiLCJmaXJzdCIsIm5vdFN0cmluZyIsImNvZGUiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJsYXN0Qnl0ZUluZGV4IiwiaGFzaCIsImZpbmFsaXplIiwiYSIsImIiLCJjIiwiZCIsImJjIiwiZGEiLCJoZXgiLCJhcnJheSIsImFycmF5QnVmZmVyIiwiYmFzZTY0IiwidjEiLCJ2MiIsInYzIiwiYmFzZTY0U3RyIiwibWQ1Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFZO0VBQ1gsWUFBWTs7RUFFWixJQUFJQSxLQUFLLEdBQUcsdUJBQXVCO0VBQ25DLElBQUlDLE1BQU0sR0FBRyxRQUFPQyxNQUFNLHlDQUFOQSxNQUFNLE9BQUssUUFBUTtFQUN2QyxJQUFJQyxJQUFJLEdBQUdGLE1BQU0sR0FBR0MsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMvQixJQUFJQyxJQUFJLENBQUNDLGdCQUFnQixFQUFFO0lBQ3pCSCxNQUFNLEdBQUcsS0FBSztFQUNoQjtFQUNBLElBQUlJLFVBQVUsR0FBRyxDQUFDSixNQUFNLElBQUksUUFBT0ssSUFBSSx5Q0FBSkEsSUFBSSxPQUFLLFFBQVE7RUFDcEQsSUFBSUMsT0FBTyxHQUFHLENBQUNKLElBQUksQ0FBQ0ssaUJBQWlCLElBQUksUUFBT0MsT0FBTyx5Q0FBUEEsT0FBTyxPQUFLLFFBQVEsSUFBSUEsT0FBTyxDQUFDQyxRQUFRLElBQUlELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO0VBQ2pILElBQUlKLE9BQU8sRUFBRTtJQUNYSixJQUFJLEdBQUdTLE1BQU07RUFDZixDQUFDLE1BQU0sSUFBSVAsVUFBVSxFQUFFO0lBQ3JCRixJQUFJLEdBQUdHLElBQUk7RUFDYjtFQUNBLElBQUlPLFNBQVMsR0FBRyxDQUFDVixJQUFJLENBQUNXLG1CQUFtQixJQUFJLE9BQWEsdUJBQU5DLE1BQU0sT0FBSyxRQUFRLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTztFQUN6RixJQUFJQyxHQUFHLEdBQUcsS0FBNEIsSUFBSUMsbURBQVU7RUFDcEQsSUFBSUMsWUFBWSxHQUFHLENBQUNoQixJQUFJLENBQUNp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LEdBQUcsSUFBSSxDQUFDLEdBQ2xEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDLEdBQzFEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQzNEMUMsU0FBUyxDQUFFMEMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRzFDLFNBQVMsQ0FBRTBDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQzNEMUMsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRzNDLFNBQVMsQ0FBQzJDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FDbEQzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsR0FDMUQzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FDM0QzQyxTQUFTLENBQUUyQyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUFHM0MsU0FBUyxDQUFFMkMsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FDM0QzQyxTQUFTLENBQUU0QyxFQUFFLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxHQUFHNUMsU0FBUyxDQUFDNEMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUNsRDVDLFNBQVMsQ0FBRTRDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQUc1QyxTQUFTLENBQUU0QyxFQUFFLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxHQUMxRDVDLFNBQVMsQ0FBRTRDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQUc1QyxTQUFTLENBQUU0QyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQyxHQUMzRDVDLFNBQVMsQ0FBRTRDLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxDQUFDLEdBQUc1QyxTQUFTLENBQUU0QyxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FBQztFQUMvRCxDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VwQixHQUFHLENBQUNULFNBQVMsQ0FBQ0MsUUFBUSxHQUFHUSxHQUFHLENBQUNULFNBQVMsQ0FBQ2lELEdBQUc7O0VBRTFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0V4QyxHQUFHLENBQUNULFNBQVMsQ0FBQ3VCLE1BQU0sR0FBRyxZQUFZO0lBQ2pDLElBQUksQ0FBQ21CLFFBQVEsRUFBRTtJQUVmLElBQUloQixFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO01BQUVDLEVBQUUsR0FBRyxJQUFJLENBQUNBLEVBQUU7TUFBRUMsRUFBRSxHQUFHLElBQUksQ0FBQ0EsRUFBRTtNQUFFQyxFQUFFLEdBQUcsSUFBSSxDQUFDQSxFQUFFO0lBQzFELE9BQU8sQ0FDTEgsRUFBRSxHQUFHLElBQUksRUFBR0EsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLEVBQUdBLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxFQUFHQSxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksRUFDakVDLEVBQUUsR0FBRyxJQUFJLEVBQUdBLEVBQUUsSUFBSSxDQUFDLEdBQUksSUFBSSxFQUFHQSxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksRUFBR0EsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLEVBQ2pFQyxFQUFFLEdBQUcsSUFBSSxFQUFHQSxFQUFFLElBQUksQ0FBQyxHQUFJLElBQUksRUFBR0EsRUFBRSxJQUFJLEVBQUUsR0FBSSxJQUFJLEVBQUdBLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxFQUNqRUMsRUFBRSxHQUFHLElBQUksRUFBR0EsRUFBRSxJQUFJLENBQUMsR0FBSSxJQUFJLEVBQUdBLEVBQUUsSUFBSSxFQUFFLEdBQUksSUFBSSxFQUFHQSxFQUFFLElBQUksRUFBRSxHQUFJLElBQUksQ0FDbEU7RUFDSCxDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VwQixHQUFHLENBQUNULFNBQVMsQ0FBQ2tELEtBQUssR0FBR3pDLEdBQUcsQ0FBQ1QsU0FBUyxDQUFDdUIsTUFBTTs7RUFFMUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRWQsR0FBRyxDQUFDVCxTQUFTLENBQUNtRCxXQUFXLEdBQUcsWUFBWTtJQUN0QyxJQUFJLENBQUNULFFBQVEsRUFBRTtJQUVmLElBQUlqRCxNQUFNLEdBQUcsSUFBSVQsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUNoQyxJQUFJTyxNQUFNLEdBQUcsSUFBSUksV0FBVyxDQUFDRixNQUFNLENBQUM7SUFDcENGLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNtQyxFQUFFO0lBQ25CbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ29DLEVBQUU7SUFDbkJwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDcUMsRUFBRTtJQUNuQnJDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNzQyxFQUFFO0lBQ25CLE9BQU9wQyxNQUFNO0VBQ2YsQ0FBQzs7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VnQixHQUFHLENBQUNULFNBQVMsQ0FBQ1AsTUFBTSxHQUFHZ0IsR0FBRyxDQUFDVCxTQUFTLENBQUNtRCxXQUFXOztFQUVoRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFMUMsR0FBRyxDQUFDVCxTQUFTLENBQUNvRCxNQUFNLEdBQUcsWUFBWTtJQUNqQyxJQUFJQyxFQUFFO01BQUVDLEVBQUU7TUFBRUMsRUFBRTtNQUFFQyxTQUFTLEdBQUcsRUFBRTtNQUFFekIsS0FBSyxHQUFHLElBQUksQ0FBQ21CLEtBQUssRUFBRTtJQUNwRCxLQUFLLElBQUluQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxHQUFHO01BQ3ZCc0MsRUFBRSxHQUFHdEIsS0FBSyxDQUFDaEIsQ0FBQyxFQUFFLENBQUM7TUFDZnVDLEVBQUUsR0FBR3ZCLEtBQUssQ0FBQ2hCLENBQUMsRUFBRSxDQUFDO01BQ2Z3QyxFQUFFLEdBQUd4QixLQUFLLENBQUNoQixDQUFDLEVBQUUsQ0FBQztNQUNmeUMsU0FBUyxJQUFJbEUsa0JBQWtCLENBQUMrRCxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQ3ZDL0Qsa0JBQWtCLENBQUMsQ0FBQytELEVBQUUsSUFBSSxDQUFDLEdBQUdDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQzdDaEUsa0JBQWtCLENBQUMsQ0FBQ2dFLEVBQUUsSUFBSSxDQUFDLEdBQUdDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQzdDakUsa0JBQWtCLENBQUNpRSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQy9CO0lBQ0FGLEVBQUUsR0FBR3RCLEtBQUssQ0FBQ2hCLENBQUMsQ0FBQztJQUNieUMsU0FBUyxJQUFJbEUsa0JBQWtCLENBQUMrRCxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQ3ZDL0Qsa0JBQWtCLENBQUUrRCxFQUFFLElBQUksQ0FBQyxHQUFJLEVBQUUsQ0FBQyxHQUNsQyxJQUFJO0lBQ04sT0FBT0csU0FBUztFQUNsQixDQUFDO0VBRUQsSUFBSTdFLE9BQU8sR0FBR2dDLFlBQVksRUFBRTtFQUU1QixJQUFJbkMsU0FBUyxFQUFFO0lBQ2JFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQzFCLENBQUMsTUFBTTtJQUNMO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWIsSUFBSSxDQUFDMkYsR0FBRyxHQUFHOUUsT0FBTztJQUNsQixJQUFJQyxHQUFHLEVBQUU7TUFDUEMsbUNBQU8sWUFBWTtRQUNqQixPQUFPRixPQUFPO01BQ2hCLENBQUM7QUFBQSxvR0FBQztJQUNKO0VBQ0Y7QUFDRixDQUFDLEdBQUcsQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBbanMtbWQ1XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZW1uMTc4L2pzLW1kNX1cclxuICpcclxuICogQG5hbWVzcGFjZSBtZDVcclxuICogQHZlcnNpb24gMC43LjNcclxuICogQGF1dGhvciBDaGVuLCBZaS1DeXVhbiBbZW1uMTc4QGdtYWlsLmNvbV1cclxuICogQGNvcHlyaWdodCBDaGVuLCBZaS1DeXVhbiAyMDE0LTIwMTdcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIEVSUk9SID0gJ2lucHV0IGlzIGludmFsaWQgdHlwZSc7XHJcbiAgdmFyIFdJTkRPVyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xyXG4gIHZhciByb290ID0gV0lORE9XID8gd2luZG93IDoge307XHJcbiAgaWYgKHJvb3QuSlNfTUQ1X05PX1dJTkRPVykge1xyXG4gICAgV0lORE9XID0gZmFsc2U7XHJcbiAgfVxyXG4gIHZhciBXRUJfV09SS0VSID0gIVdJTkRPVyAmJiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCc7XHJcbiAgdmFyIE5PREVfSlMgPSAhcm9vdC5KU19NRDVfTk9fTk9ERV9KUyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XHJcbiAgaWYgKE5PREVfSlMpIHtcclxuICAgIHJvb3QgPSBnbG9iYWw7XHJcbiAgfSBlbHNlIGlmIChXRUJfV09SS0VSKSB7XHJcbiAgICByb290ID0gc2VsZjtcclxuICB9XHJcbiAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX01ENV9OT19DT01NT05fSlMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHM7XHJcbiAgdmFyIEFNRCA9IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZDtcclxuICB2YXIgQVJSQVlfQlVGRkVSID0gIXJvb3QuSlNfTUQ1X05PX0FSUkFZX0JVRkZFUiAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xyXG4gIHZhciBIRVhfQ0hBUlMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xyXG4gIHZhciBFWFRSQSA9IFsxMjgsIDMyNzY4LCA4Mzg4NjA4LCAtMjE0NzQ4MzY0OF07XHJcbiAgdmFyIFNISUZUID0gWzAsIDgsIDE2LCAyNF07XHJcbiAgdmFyIE9VVFBVVF9UWVBFUyA9IFsnaGV4JywgJ2FycmF5JywgJ2RpZ2VzdCcsICdidWZmZXInLCAnYXJyYXlCdWZmZXInLCAnYmFzZTY0J107XHJcbiAgdmFyIEJBU0U2NF9FTkNPREVfQ0hBUiA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XHJcblxyXG4gIHZhciBibG9ja3MgPSBbXSwgYnVmZmVyODtcclxuICBpZiAoQVJSQVlfQlVGRkVSKSB7XHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcclxuICAgIGJ1ZmZlcjggPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgfVxyXG5cclxuICBpZiAocm9vdC5KU19NRDVfTk9fTk9ERV9KUyB8fCAhQXJyYXkuaXNBcnJheSkge1xyXG4gICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChBUlJBWV9CVUZGRVIgJiYgKHJvb3QuSlNfTUQ1X05PX0FSUkFZX0JVRkZFUl9JU19WSUVXIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XHJcbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouYnVmZmVyICYmIG9iai5idWZmZXIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGV4XHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBoZXggc3RyaW5nXHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBIZXggc3RyaW5nXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBtZDUuaGV4KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICogLy8gZXF1YWwgdG9cclxuICAgKiBtZDUoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpZ2VzdFxyXG4gICAqIEBtZW1iZXJvZiBtZDVcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgYnl0ZXMgYXJyYXlcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQnl0ZXMgYXJyYXlcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5kaWdlc3QoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5XHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBieXRlcyBhcnJheVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogbWQ1LmFycmF5KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhcnJheUJ1ZmZlclxyXG4gICAqIEBtZW1iZXJvZiBtZDVcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgQXJyYXlCdWZmZXJcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5hcnJheUJ1ZmZlcignVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYnVmZmVyXHJcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtYXliZSBjb25mdXNlIHdpdGggQnVmZmVyIGluIG5vZGUuanMuIFBsZWFzZSB1c2UgYXJyYXlCdWZmZXIgaW5zdGVhZC5cclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIEFycmF5QnVmZmVyXHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IEFycmF5QnVmZmVyXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBtZDUuYnVmZmVyKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBiYXNlNjRcclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJhc2U2NCBzdHJpbmdcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IGJhc2U2NCBzdHJpbmdcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIG1kNS5iYXNlNjQoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcclxuICAgKi9cclxuICB2YXIgY3JlYXRlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKG91dHB1dFR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gbmV3IE1kNSh0cnVlKS51cGRhdGUobWVzc2FnZSlbb3V0cHV0VHlwZV0oKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcmVhdGVcclxuICAgKiBAbWVtYmVyb2YgbWQ1XHJcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBNZDUgb2JqZWN0XHJcbiAgICogQHJldHVybnMge01kNX0gTWQ1IG9iamVjdC5cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHZhciBoYXNoID0gbWQ1LmNyZWF0ZSgpO1xyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXBkYXRlXHJcbiAgICogQG1lbWJlcm9mIG1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYW5kIHVwZGF0ZSBNZDUgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcclxuICAgKiBAcmV0dXJucyB7TWQ1fSBNZDUgb2JqZWN0LlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogdmFyIGhhc2ggPSBtZDUudXBkYXRlKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XHJcbiAgICogLy8gZXF1YWwgdG9cclxuICAgKiB2YXIgaGFzaCA9IG1kNS5jcmVhdGUoKTtcclxuICAgKiBoYXNoLnVwZGF0ZSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xyXG4gICAqL1xyXG4gIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlT3V0cHV0TWV0aG9kKCdoZXgnKTtcclxuICAgIGlmIChOT0RFX0pTKSB7XHJcbiAgICAgIG1ldGhvZCA9IG5vZGVXcmFwKG1ldGhvZCk7XHJcbiAgICB9XHJcbiAgICBtZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gbmV3IE1kNSgpO1xyXG4gICAgfTtcclxuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZSgpLnVwZGF0ZShtZXNzYWdlKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB2YXIgdHlwZSA9IE9VVFBVVF9UWVBFU1tpXTtcclxuICAgICAgbWV0aG9kW3R5cGVdID0gY3JlYXRlT3V0cHV0TWV0aG9kKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1ldGhvZDtcclxuICB9O1xyXG5cclxuICB2YXIgbm9kZVdyYXAgPSBmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICB2YXIgY3J5cHRvID0gZXZhbChcInJlcXVpcmUoJ2NyeXB0bycpXCIpO1xyXG4gICAgdmFyIEJ1ZmZlciA9IGV2YWwoXCJyZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcIik7XHJcbiAgICB2YXIgbm9kZU1ldGhvZCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShtZXNzYWdlLCAndXRmOCcpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aHJvdyBFUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSB8fFxyXG4gICAgICAgIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKG5ldyBCdWZmZXIobWVzc2FnZSkpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZChtZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBub2RlTWV0aG9kO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogTWQ1IGNsYXNzXHJcbiAgICogQGNsYXNzIE1kNVxyXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIGludGVybmFsIGNsYXNzLlxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5jcmVhdGV9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gTWQ1KHNoYXJlZE1lbW9yeSkge1xyXG4gICAgaWYgKHNoYXJlZE1lbW9yeSkge1xyXG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cclxuICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cclxuICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcclxuICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XHJcbiAgICAgIHRoaXMuYnVmZmVyOCA9IGJ1ZmZlcjg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig2OCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXI4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgICAgICB0aGlzLmJsb2NrcyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmxvY2tzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmgwID0gdGhpcy5oMSA9IHRoaXMuaDIgPSB0aGlzLmgzID0gdGhpcy5zdGFydCA9IHRoaXMuYnl0ZXMgPSB0aGlzLmhCeXRlcyA9IDA7XHJcbiAgICB0aGlzLmZpbmFsaXplZCA9IHRoaXMuaGFzaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXBkYXRlXHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBVcGRhdGUgaGFzaFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICogQHJldHVybnMge01kNX0gTWQ1IG9iamVjdC5cclxuICAgKiBAc2VlIHtAbGluayBtZDUudXBkYXRlfVxyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5vdFN0cmluZywgdHlwZSA9IHR5cGVvZiBtZXNzYWdlO1xyXG4gICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSB7XHJcbiAgICAgICAgICB0aHJvdyBFUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKEFSUkFZX0JVRkZFUiAmJiBtZXNzYWdlLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpIHtcclxuICAgICAgICAgIGlmICghQVJSQVlfQlVGRkVSIHx8ICFBcnJheUJ1ZmZlci5pc1ZpZXcobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVSUk9SO1xyXG4gICAgICB9XHJcbiAgICAgIG5vdFN0cmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY29kZSwgaW5kZXggPSAwLCBpLCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aCwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XHJcbiAgICB2YXIgYnVmZmVyOCA9IHRoaXMuYnVmZmVyODtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzaGVkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNoZWQgPSBmYWxzZTtcclxuICAgICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdO1xyXG4gICAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxyXG4gICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XHJcbiAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobm90U3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKEFSUkFZX0JVRkZFUikge1xyXG4gICAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IG1lc3NhZ2VbaW5kZXhdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgNjQ7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBUlJBWV9CVUZGRVIpIHtcclxuICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gY29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweGMwIHwgKGNvZGUgPj4gNik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8IChjb2RlICYgMHgzZik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ZTAgfCAoY29kZSA+PiAxMik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M2YpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcclxuICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweGYwIHwgKGNvZGUgPj4gMTgpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoKGNvZGUgPj4gMTIpICYgMHgzZik7XHJcbiAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpO1xyXG4gICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M2YpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gY29kZSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweGQ4MDAgfHwgY29kZSA+PSAweGUwMDApIHtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhlMCB8IChjb2RlID4+IDEyKSkgPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKG1lc3NhZ2UuY2hhckNvZGVBdCgrK2luZGV4KSAmIDB4M2ZmKSk7XHJcbiAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ZjAgfCAoY29kZSA+PiAxOCkpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdEJ5dGVJbmRleCA9IGk7XHJcbiAgICAgIHRoaXMuYnl0ZXMgKz0gaSAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgIGlmIChpID49IDY0KSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGkgLSA2NDtcclxuICAgICAgICB0aGlzLmhhc2goKTtcclxuICAgICAgICB0aGlzLmhhc2hlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ5dGVzID4gNDI5NDk2NzI5NSkge1xyXG4gICAgICB0aGlzLmhCeXRlcyArPSB0aGlzLmJ5dGVzIC8gNDI5NDk2NzI5NiA8PCAwO1xyXG4gICAgICB0aGlzLmJ5dGVzID0gdGhpcy5ieXRlcyAlIDQyOTQ5NjcyOTY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBNZDUucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgIHZhciBibG9ja3MgPSB0aGlzLmJsb2NrcywgaSA9IHRoaXMubGFzdEJ5dGVJbmRleDtcclxuICAgIGJsb2Nrc1tpID4+IDJdIHw9IEVYVFJBW2kgJiAzXTtcclxuICAgIGlmIChpID49IDU2KSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNoZWQpIHtcclxuICAgICAgICB0aGlzLmhhc2goKTtcclxuICAgICAgfVxyXG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbMTZdO1xyXG4gICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cclxuICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cclxuICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxyXG4gICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcclxuICAgIH1cclxuICAgIGJsb2Nrc1sxNF0gPSB0aGlzLmJ5dGVzIDw8IDM7XHJcbiAgICBibG9ja3NbMTVdID0gdGhpcy5oQnl0ZXMgPDwgMyB8IHRoaXMuYnl0ZXMgPj4+IDI5O1xyXG4gICAgdGhpcy5oYXNoKCk7XHJcbiAgfTtcclxuXHJcbiAgTWQ1LnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGEsIGIsIGMsIGQsIGJjLCBkYSwgYmxvY2tzID0gdGhpcy5ibG9ja3M7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlyc3QpIHtcclxuICAgICAgYSA9IGJsb2Nrc1swXSAtIDY4MDg3NjkzNztcclxuICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgLSAyNzE3MzM4NzkgPDwgMDtcclxuICAgICAgZCA9ICgtMTczMjU4NDE5NCBeIGEgJiAyMDA0MzE4MDcxKSArIGJsb2Nrc1sxXSAtIDExNzgzMDcwODtcclxuICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xyXG4gICAgICBjID0gKC0yNzE3MzM4NzkgXiAoZCAmIChhIF4gLTI3MTczMzg3OSkpKSArIGJsb2Nrc1syXSAtIDExMjY0NzgzNzU7XHJcbiAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgICAgYiA9IChhIF4gKGMgJiAoZCBeIGEpKSkgKyBibG9ja3NbM10gLSAxMzE2MjU5MjA5O1xyXG4gICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhID0gdGhpcy5oMDtcclxuICAgICAgYiA9IHRoaXMuaDE7XHJcbiAgICAgIGMgPSB0aGlzLmgyO1xyXG4gICAgICBkID0gdGhpcy5oMztcclxuICAgICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzBdIC0gNjgwODc2OTM2O1xyXG4gICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgPDwgMDtcclxuICAgICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzFdIC0gMzg5NTY0NTg2O1xyXG4gICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIDw8IDA7XHJcbiAgICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1syXSArIDYwNjEwNTgxOTtcclxuICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xyXG4gICAgICBiICs9IChhIF4gKGMgJiAoZCBeIGEpKSkgKyBibG9ja3NbM10gLSAxMDQ0NTI1MzMwO1xyXG4gICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzRdIC0gMTc2NDE4ODk3O1xyXG4gICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIDw8IDA7XHJcbiAgICBkICs9IChjIF4gKGEgJiAoYiBeIGMpKSkgKyBibG9ja3NbNV0gKyAxMjAwMDgwNDI2O1xyXG4gICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYiBeIChkICYgKGEgXiBiKSkpICsgYmxvY2tzWzZdIC0gMTQ3MzIzMTM0MTtcclxuICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGEgXiAoYyAmIChkIF4gYSkpKSArIGJsb2Nrc1s3XSAtIDQ1NzA1OTgzO1xyXG4gICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyA8PCAwO1xyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzhdICsgMTc3MDAzNTQxNjtcclxuICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzldIC0gMTk1ODQxNDQxNztcclxuICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1sxMF0gLSA0MjA2MztcclxuICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGEgXiAoYyAmIChkIF4gYSkpKSArIGJsb2Nrc1sxMV0gLSAxOTkwNDA0MTYyO1xyXG4gICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyA8PCAwO1xyXG4gICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzEyXSArIDE4MDQ2MDM2ODI7XHJcbiAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGMgXiAoYSAmIChiIF4gYykpKSArIGJsb2Nrc1sxM10gLSA0MDM0MTEwMTtcclxuICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGIgXiAoZCAmIChhIF4gYikpKSArIGJsb2Nrc1sxNF0gLSAxNTAyMDAyMjkwO1xyXG4gICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoYSBeIChjICYgKGQgXiBhKSkpICsgYmxvY2tzWzE1XSArIDEyMzY1MzUzMjk7XHJcbiAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbMV0gLSAxNjU3OTY1MTA7XHJcbiAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1s2XSAtIDEwNjk1MDE2MzI7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1sxMV0gKyA2NDM3MTc3MTM7XHJcbiAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGEgJiAoYyBeIGQpKSkgKyBibG9ja3NbMF0gLSAzNzM4OTczMDI7XHJcbiAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbNV0gLSA3MDE1NTg2OTE7XHJcbiAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1sxMF0gKyAzODAxNjA4MztcclxuICAgIGQgPSAoZCA8PCA5IHwgZCA+Pj4gMjMpICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYSBeIChiICYgKGQgXiBhKSkpICsgYmxvY2tzWzE1XSAtIDY2MDQ3ODMzNTtcclxuICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYSAmIChjIF4gZCkpKSArIGJsb2Nrc1s0XSAtIDQwNTUzNzg0ODtcclxuICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoZCAmIChiIF4gYykpKSArIGJsb2Nrc1s5XSArIDU2ODQ0NjQzODtcclxuICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChjICYgKGEgXiBiKSkpICsgYmxvY2tzWzE0XSAtIDEwMTk4MDM2OTA7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1szXSAtIDE4NzM2Mzk2MTtcclxuICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYSAmIChjIF4gZCkpKSArIGJsb2Nrc1s4XSArIDExNjM1MzE1MDE7XHJcbiAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGQgJiAoYiBeIGMpKSkgKyBibG9ja3NbMTNdIC0gMTQ0NDY4MTQ2NztcclxuICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChjICYgKGEgXiBiKSkpICsgYmxvY2tzWzJdIC0gNTE0MDM3ODQ7XHJcbiAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1s3XSArIDE3MzUzMjg0NzM7XHJcbiAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGEgJiAoYyBeIGQpKSkgKyBibG9ja3NbMTJdIC0gMTkyNjYwNzczNDtcclxuICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcclxuICAgIGJjID0gYiBeIGM7XHJcbiAgICBhICs9IChiYyBeIGQpICsgYmxvY2tzWzVdIC0gMzc4NTU4O1xyXG4gICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiYyBeIGEpICsgYmxvY2tzWzhdIC0gMjAyMjU3NDQ2MztcclxuICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgPDwgMDtcclxuICAgIGRhID0gZCBeIGE7XHJcbiAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzExXSArIDE4MzkwMzA1NjI7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzE0XSAtIDM1MzA5NTU2O1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBiYyA9IGIgXiBjO1xyXG4gICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1sxXSAtIDE1MzA5OTIwNjA7XHJcbiAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgPDwgMDtcclxuICAgIGQgKz0gKGJjIF4gYSkgKyBibG9ja3NbNF0gKyAxMjcyODkzMzUzO1xyXG4gICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSA8PCAwO1xyXG4gICAgZGEgPSBkIF4gYTtcclxuICAgIGMgKz0gKGRhIF4gYikgKyBibG9ja3NbN10gLSAxNTU0OTc2MzI7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzEwXSAtIDEwOTQ3MzA2NDA7XHJcbiAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgPDwgMDtcclxuICAgIGJjID0gYiBeIGM7XHJcbiAgICBhICs9IChiYyBeIGQpICsgYmxvY2tzWzEzXSArIDY4MTI3OTE3NDtcclxuICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYmMgXiBhKSArIGJsb2Nrc1swXSAtIDM1ODUzNzIyMjtcclxuICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgPDwgMDtcclxuICAgIGRhID0gZCBeIGE7XHJcbiAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzNdIC0gNzIyNTIxOTc5O1xyXG4gICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoZGEgXiBjKSArIGJsb2Nrc1s2XSArIDc2MDI5MTg5O1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBiYyA9IGIgXiBjO1xyXG4gICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1s5XSAtIDY0MDM2NDQ4NztcclxuICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYmMgXiBhKSArIGJsb2Nrc1sxMl0gLSA0MjE4MTU4MzU7XHJcbiAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIDw8IDA7XHJcbiAgICBkYSA9IGQgXiBhO1xyXG4gICAgYyArPSAoZGEgXiBiKSArIGJsb2Nrc1sxNV0gKyA1MzA3NDI1MjA7XHJcbiAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzJdIC0gOTk1MzM4NjUxO1xyXG4gICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsgYmxvY2tzWzBdIC0gMTk4NjMwODQ0O1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzddICsgMTEyNjg5MTQxNTtcclxuICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgPDwgMDtcclxuICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBibG9ja3NbMTRdIC0gMTQxNjM1NDkwNTtcclxuICAgIGMgPSAoYyA8PCAxNSB8IGMgPj4+IDE3KSArIGQgPDwgMDtcclxuICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBibG9ja3NbNV0gLSA1NzQzNDA1NTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBibG9ja3NbMTJdICsgMTcwMDQ4NTU3MTtcclxuICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiA8PCAwO1xyXG4gICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGJsb2Nrc1szXSAtIDE4OTQ5ODY2MDY7XHJcbiAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIDw8IDA7XHJcbiAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzEwXSAtIDEwNTE1MjM7XHJcbiAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzFdIC0gMjA1NDkyMjc5OTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBibG9ja3NbOF0gKyAxODczMzEzMzU5O1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzE1XSAtIDMwNjExNzQ0O1xyXG4gICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSA8PCAwO1xyXG4gICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGJsb2Nrc1s2XSAtIDE1NjAxOTgzODA7XHJcbiAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XHJcbiAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzEzXSArIDEzMDkxNTE2NDk7XHJcbiAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIDw8IDA7XHJcbiAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsgYmxvY2tzWzRdIC0gMTQ1NTIzMDcwO1xyXG4gICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XHJcbiAgICBkICs9IChiIF4gKGEgfCB+YykpICsgYmxvY2tzWzExXSAtIDExMjAyMTAzNzk7XHJcbiAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIDw8IDA7XHJcbiAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzJdICsgNzE4Nzg3MjU5O1xyXG4gICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCA8PCAwO1xyXG4gICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGJsb2Nrc1s5XSAtIDM0MzQ4NTU1MTtcclxuICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcclxuXHJcbiAgICBpZiAodGhpcy5maXJzdCkge1xyXG4gICAgICB0aGlzLmgwID0gYSArIDE3MzI1ODQxOTMgPDwgMDtcclxuICAgICAgdGhpcy5oMSA9IGIgLSAyNzE3MzM4NzkgPDwgMDtcclxuICAgICAgdGhpcy5oMiA9IGMgLSAxNzMyNTg0MTk0IDw8IDA7XHJcbiAgICAgIHRoaXMuaDMgPSBkICsgMjcxNzMzODc4IDw8IDA7XHJcbiAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaDAgPSB0aGlzLmgwICsgYSA8PCAwO1xyXG4gICAgICB0aGlzLmgxID0gdGhpcy5oMSArIGIgPDwgMDtcclxuICAgICAgdGhpcy5oMiA9IHRoaXMuaDIgKyBjIDw8IDA7XHJcbiAgICAgIHRoaXMuaDMgPSB0aGlzLmgzICsgZCA8PCAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGV4XHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBoZXggc3RyaW5nXHJcbiAgICogQHJldHVybnMge1N0cmluZ30gSGV4IHN0cmluZ1xyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5oZXh9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmhleCgpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5maW5hbGl6ZSgpO1xyXG5cclxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDM7XHJcblxyXG4gICAgcmV0dXJuIEhFWF9DSEFSU1soaDAgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMCAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gOCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDAgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDE2KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMCA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDAgPj4gMjQpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDEgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDgpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgxID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMSA+PiAxNikgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDEgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDI0KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gyICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiA4KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMiA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gMTYpICYgMHgwRl0gK1xyXG4gICAgICBIRVhfQ0hBUlNbKGgyID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAyNCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMyAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gOCkgJiAweDBGXSArXHJcbiAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDE2KSAmIDB4MEZdICtcclxuICAgICAgSEVYX0NIQVJTWyhoMyA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDMgPj4gMjQpICYgMHgwRl07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gICAqIEBtZW1iZXJvZiBNZDVcclxuICAgKiBAaW5zdGFuY2VcclxuICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgaGV4IHN0cmluZ1xyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IEhleCBzdHJpbmdcclxuICAgKiBAc2VlIHtAbGluayBtZDUuaGV4fVxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogaGFzaC50b1N0cmluZygpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUudG9TdHJpbmcgPSBNZDUucHJvdG90eXBlLmhleDtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaWdlc3RcclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJ5dGVzIGFycmF5XHJcbiAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5kaWdlc3R9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmRpZ2VzdCgpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5maW5hbGl6ZSgpO1xyXG5cclxuICAgIHZhciBoMCA9IHRoaXMuaDAsIGgxID0gdGhpcy5oMSwgaDIgPSB0aGlzLmgyLCBoMyA9IHRoaXMuaDM7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBoMCAmIDB4RkYsIChoMCA+PiA4KSAmIDB4RkYsIChoMCA+PiAxNikgJiAweEZGLCAoaDAgPj4gMjQpICYgMHhGRixcclxuICAgICAgaDEgJiAweEZGLCAoaDEgPj4gOCkgJiAweEZGLCAoaDEgPj4gMTYpICYgMHhGRiwgKGgxID4+IDI0KSAmIDB4RkYsXHJcbiAgICAgIGgyICYgMHhGRiwgKGgyID4+IDgpICYgMHhGRiwgKGgyID4+IDE2KSAmIDB4RkYsIChoMiA+PiAyNCkgJiAweEZGLFxyXG4gICAgICBoMyAmIDB4RkYsIChoMyA+PiA4KSAmIDB4RkYsIChoMyA+PiAxNikgJiAweEZGLCAoaDMgPj4gMjQpICYgMHhGRlxyXG4gICAgXTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5XHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBieXRlcyBhcnJheVxyXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQnl0ZXMgYXJyYXlcclxuICAgKiBAc2VlIHtAbGluayBtZDUuYXJyYXl9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmFycmF5KCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5hcnJheSA9IE1kNS5wcm90b3R5cGUuZGlnZXN0O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFycmF5QnVmZmVyXHJcbiAgICogQG1lbWJlcm9mIE1kNVxyXG4gICAqIEBpbnN0YW5jZVxyXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBBcnJheUJ1ZmZlclxyXG4gICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcclxuICAgKiBAc2VlIHtAbGluayBtZDUuYXJyYXlCdWZmZXJ9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmFycmF5QnVmZmVyKCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZmluYWxpemUoKTtcclxuXHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDE2KTtcclxuICAgIHZhciBibG9ja3MgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGJsb2Nrc1swXSA9IHRoaXMuaDA7XHJcbiAgICBibG9ja3NbMV0gPSB0aGlzLmgxO1xyXG4gICAgYmxvY2tzWzJdID0gdGhpcy5oMjtcclxuICAgIGJsb2Nrc1szXSA9IHRoaXMuaDM7XHJcbiAgICByZXR1cm4gYnVmZmVyO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYnVmZmVyXHJcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtYXliZSBjb25mdXNlIHdpdGggQnVmZmVyIGluIG5vZGUuanMuIFBsZWFzZSB1c2UgYXJyYXlCdWZmZXIgaW5zdGVhZC5cclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIEFycmF5QnVmZmVyXHJcbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBBcnJheUJ1ZmZlclxyXG4gICAqIEBzZWUge0BsaW5rIG1kNS5idWZmZXJ9XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBoYXNoLmJ1ZmZlcigpO1xyXG4gICAqL1xyXG4gIE1kNS5wcm90b3R5cGUuYnVmZmVyID0gTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBiYXNlNjRcclxuICAgKiBAbWVtYmVyb2YgTWQ1XHJcbiAgICogQGluc3RhbmNlXHJcbiAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJhc2U2NCBzdHJpbmdcclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBiYXNlNjQgc3RyaW5nXHJcbiAgICogQHNlZSB7QGxpbmsgbWQ1LmJhc2U2NH1cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGhhc2guYmFzZTY0KCk7XHJcbiAgICovXHJcbiAgTWQ1LnByb3RvdHlwZS5iYXNlNjQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdjEsIHYyLCB2MywgYmFzZTY0U3RyID0gJycsIGJ5dGVzID0gdGhpcy5hcnJheSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTspIHtcclxuICAgICAgdjEgPSBieXRlc1tpKytdO1xyXG4gICAgICB2MiA9IGJ5dGVzW2krK107XHJcbiAgICAgIHYzID0gYnl0ZXNbaSsrXTtcclxuICAgICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xyXG4gICAgICAgIEJBU0U2NF9FTkNPREVfQ0hBUlsodjEgPDwgNCB8IHYyID4+PiA0KSAmIDYzXSArXHJcbiAgICAgICAgQkFTRTY0X0VOQ09ERV9DSEFSWyh2MiA8PCAyIHwgdjMgPj4+IDYpICYgNjNdICtcclxuICAgICAgICBCQVNFNjRfRU5DT0RFX0NIQVJbdjMgJiA2M107XHJcbiAgICB9XHJcbiAgICB2MSA9IGJ5dGVzW2ldO1xyXG4gICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xyXG4gICAgICBCQVNFNjRfRU5DT0RFX0NIQVJbKHYxIDw8IDQpICYgNjNdICtcclxuICAgICAgJz09JztcclxuICAgIHJldHVybiBiYXNlNjRTdHI7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGV4cG9ydHMgPSBjcmVhdGVNZXRob2QoKTtcclxuXHJcbiAgaWYgKENPTU1PTl9KUykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgbWQ1XGJcclxuICAgICAqIEBkZXNjcmlwdGlvbiBNZDUgaGFzaCBmdW5jdGlvbiwgZXhwb3J0IHRvIGdsb2JhbCBpbiBicm93c2Vycy5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBtZDUgaGFzaGVzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbWQ1KCcnKTsgLy8gZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcclxuICAgICAqIG1kNSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpOyAvLyA5ZTEwN2Q5ZDM3MmJiNjgyNmJkODFkMzU0MmE0MTlkNlxyXG4gICAgICogbWQ1KCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nLicpOyAvLyBlNGQ5MDljMjkwZDBmYjFjYTA2OGZmYWRkZjIyY2JkMFxyXG4gICAgICpcclxuICAgICAqIC8vIEl0IGFsc28gc3VwcG9ydHMgVVRGLTggZW5jb2RpbmdcclxuICAgICAqIG1kNSgn5Lit5paHJyk7IC8vIGE3YmFjMjIzOWZjZGNiM2EwNjc5MDNkODA3N2M0YTA3XHJcbiAgICAgKlxyXG4gICAgICogLy8gSXQgYWxzbyBzdXBwb3J0cyBieXRlIGBBcnJheWAsIGBVaW50OEFycmF5YCwgYEFycmF5QnVmZmVyYFxyXG4gICAgICogbWQ1KFtdKTsgLy8gZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcclxuICAgICAqIG1kNShuZXcgVWludDhBcnJheShbXSkpOyAvLyBkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVxyXG4gICAgICovXHJcbiAgICByb290Lm1kNSA9IGV4cG9ydHM7XHJcbiAgICBpZiAoQU1EKSB7XHJcbiAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cG9ydHM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 18 */
/*!****************************************************************************************************************************!*\
  !*** D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scanQRCode.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_app_windows_HBuilderX_3_6_8_20221027_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scanQRCode_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/wanyue/waimai-uni/wanyue-take-mer/package-index/pages/scanQRCode.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".barcode": {
    "": {
      "width": [
        "375",
        0,
        0,
        0
      ],
      "height": [
        "400",
        0,
        0,
        0
      ]
    }
  },
  ".top": {
    "": {
      "display": [
        "flex",
        0,
        0,
        1
      ],
      "flexDirection": [
        "column",
        0,
        0,
        1
      ],
      "width": [
        "375",
        0,
        0,
        1
      ],
      "height": [
        "267",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        1
      ]
    }
  },
  ".tip": {
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
      ],
      "height": [
        "20",
        0,
        0,
        2
      ],
      "color": [
        "#ffffff",
        0,
        0,
        2
      ],
      "textAlign": [
        "center",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ],
      "justifyContent": [
        "center",
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
      "marginTop": [
        "10",
        0,
        0,
        2
      ],
      "marginLeft": [
        "85",
        0,
        0,
        2
      ]
    }
  },
  ".scancode": {
    "": {
      "width": [
        "90",
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
      "top": [
        "80",
        0,
        0,
        3
      ],
      "alignItems": [
        "center",
        0,
        0,
        3
      ],
      "position": [
        "absolute",
        0,
        0,
        3
      ],
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
      ],
      "left": [
        "70",
        0,
        0,
        3
      ]
    }
  },
  ".scan": {
    "": {
      "height": [
        "21",
        0,
        0,
        4
      ],
      "fontSize": [
        "15",
        0,
        0,
        4
      ],
      "textAlign": [
        "center",
        0,
        0,
        4
      ],
      "color": [
        "#ffffff",
        0,
        0,
        4
      ],
      "lineHeight": [
        "21",
        0,
        0,
        4
      ]
    }
  },
  ".content_img": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        5
      ],
      "width": [
        "5",
        0,
        0,
        5
      ],
      "height": [
        "5",
        0,
        0,
        5
      ],
      "borderRadius": [
        "2.5",
        0,
        0,
        5
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        5
      ]
    }
  },
  ".quan": {
    "": {
      "width": [
        "80",
        0,
        0,
        6
      ],
      "height": [
        "40",
        0,
        0,
        6
      ],
      "top": [
        "80",
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
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "right": [
        "70",
        0,
        0,
        6
      ]
    }
  },
  ".quantxt": {
    "": {
      "height": [
        "21",
        0,
        0,
        7
      ],
      "fontSize": [
        "15",
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
      "color": [
        "#ffffff",
        0,
        0,
        7
      ],
      "lineHeight": [
        "21",
        0,
        0,
        7
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 20 */
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


/***/ })
/******/ ]);