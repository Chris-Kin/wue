(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Wue"] = factory();
	else
		root["Wue"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/compile.js":
/*!************************!*\
  !*** ./lib/compile.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  aa: 1\n});\n\n//# sourceURL=webpack://Wue/./lib/compile.js?");

/***/ }),

/***/ "./lib/connect.js":
/*!************************!*\
  !*** ./lib/connect.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://Wue/./lib/connect.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compile */ \"./lib/compile.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./lib/observer.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_observer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watcher */ \"./lib/watcher.js\");\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_watcher__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect */ \"./lib/connect.js\");\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_connect__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  compile: _compile__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  observer: (_observer__WEBPACK_IMPORTED_MODULE_1___default()),\n  watcher: (_watcher__WEBPACK_IMPORTED_MODULE_2___default()),\n  connect: (_connect__WEBPACK_IMPORTED_MODULE_3___default()),\n  aa: 1\n});\n\n//# sourceURL=webpack://Wue/./lib/index.js?");

/***/ }),

/***/ "./lib/observer.js":
/*!*************************!*\
  !*** ./lib/observer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var data = { name: 'kindeng' };\nobserve(data);\ndata.name = 'dmq';\n\nfunction observe(data) {\n  if (!data || typeof data !== 'object') {\n    return;\n  }\n  // 取出所有属性遍历\n  Object.keys(data).forEach(function (key) {\n    defineReactive(data, key, data[key]);\n  });\n};\n\nfunction defineReactive(data, key, val) {\n  // 对象属性也要监听\n  observe(val);\n  Object.defineProperty(data, key, {\n    enumerable: true,\n    configurable: false,\n    get: function () {\n      return val;\n    },\n    set: function (newVal) {\n      console.log('这里应通知订阅者 ', val, ' --> ', newVal);\n      val = newVal;\n    }\n  });\n}\n\n//# sourceURL=webpack://Wue/./lib/observer.js?");

/***/ }),

/***/ "./lib/watcher.js":
/*!************************!*\
  !*** ./lib/watcher.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Dep() {\n  this.subs = [];\n}\n\nDep.prototype.addSub = function (sub) {\n  if (this.subs) {}\n};\n\n//# sourceURL=webpack://Wue/./lib/watcher.js?");

/***/ })

/******/ });
});