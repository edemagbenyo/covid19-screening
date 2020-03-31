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

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./node_modules/novelcovid/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/novelcovid/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst node_fetch_1 = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\nconst json = (res) => res.json();\nclass NovelCovid {\n    constructor() {\n        this.baseURL = 'https://corona.lmao.ninja';\n    }\n    /**\n     * @description Gets all the information from the api.\n     * @returns {Promise<All>}\n     */\n    async all() {\n        return node_fetch_1.default(`${this.baseURL}/all`).then(json);\n    }\n    async countries(country, sort) {\n        if (country) {\n            return node_fetch_1.default(`${this.baseURL}/countries/${country}`).then(json);\n        }\n        else if (sort) {\n            return node_fetch_1.default(`${this.baseURL}/countries?${sort}`).then(json);\n        }\n        return node_fetch_1.default(`${this.baseURL}/countries`).then(json);\n    }\n    async states(state) {\n        if (state) {\n            return node_fetch_1.default(`${this.baseURL}/states/${state}`).then(json);\n        }\n        return node_fetch_1.default(`${this.baseURL}/states`).then(json);\n    }\n    async histroical(all, country, province) {\n        if (country) {\n            return node_fetch_1.default(`${this.baseURL}/v2/historical/${country}`).then(json);\n        }\n        else if (country && province) {\n            return node_fetch_1.default(`${this.baseURL}/v2/historical/${country}/${province}`).then(json);\n        }\n        else if (all) {\n            return node_fetch_1.default(`${this.baseURL}/v2/historical/all`).then(json);\n        }\n        return node_fetch_1.default(`${this.baseURL}/v2/historical`).then(json);\n    }\n    /**\n     * @description Return data from the John Hopkins CSSE Data Repository (Provinces and such).\n     * @returns {Promise<Array<Jhucsse>>}\n     */\n    async jhucsse() {\n        return node_fetch_1.default(`${this.baseURL}/v2/jhucsse`).then(json);\n    }\n}\nexports.NovelCovid = NovelCovid;\n\n\n//# sourceURL=webpack:///./node_modules/novelcovid/dist/index.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { NovelCovid } = __webpack_require__(/*! novelcovid */ \"./node_modules/novelcovid/dist/index.js\");\nconst track = new NovelCovid();\n\n\nconst api = (function api(){\n  async function getAll(){\n    return await track.countries();\n  }\n  return {\n    getAll\n  }\n})()\n\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/index */ \"./src/ui/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/index */ \"./src/api/index.js\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_index__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst table = document.querySelector('table')\n\nasync function all(){\n  const all = await _api_index__WEBPACK_IMPORTED_MODULE_0___default.a.getAll(); \n\n  all.forEach(country=>{\n    console.log(country)\n    const tr = document.createElement(\"tr\")\n    const tds = `<td>${country.country}</td><td>${country.cases}</td>`\n    tr.innerHTML = tds\n    table.append(tr)\n  })\n}\n\nall()\n\n//# sourceURL=webpack:///./src/ui/index.js?");

/***/ })

/******/ });