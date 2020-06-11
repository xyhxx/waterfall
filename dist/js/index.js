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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/indec.scss":
/*!************************!*\
  !*** ./src/indec.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indec_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indec.scss */ "./src/indec.scss");
/* harmony import */ var _indec_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_indec_scss__WEBPACK_IMPORTED_MODULE_0__);
 // import WaterFall from './waterfall';

var wf = null;

window.onload = function () {
  // 页面加载完成后初始化事件
  var options = {
    num: 5,
    padding: 5,
    className: 'items'
  };
  wf = new WaterFall('.container', options);
}; // 监听滚动


document.querySelector('.container').addEventListener('scroll', function () {
  var nowScrollTop = this.scrollTop;
  var nowClientHeight = this.clientHeight;
  var elHeight = this.scrollHeight;

  if (Math.ceil(nowScrollTop + nowClientHeight) >= elHeight) {
    // 滚动到底部
    var self = this.innerHTML;
    this.innerHTML = self + "\n      <div class=\"items\">\n        <img src=\"http://temp.im/200x300\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/160x400\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/230x230\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/200x300\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/180x100\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/100x130\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/300x300\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/200x300\">\n      </div>\n      <div class=\"items\">\n        <img src=\"http://temp.im/250x300\">\n      </div>\n    "; // 为新添加的样式重新排序

    wf.sortImg(true);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map