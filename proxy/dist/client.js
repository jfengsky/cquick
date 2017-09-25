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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiList__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__apiList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockList__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mockList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileList__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__fileList__["a"]; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongodb__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;

var MongoClient = __WEBPACK_IMPORTED_MODULE_0_mongodb___default.a.MongoClient;
var URL = 'mongodb://localhost:27017/myproject';
var ObjectID = __WEBPACK_IMPORTED_MODULE_0_mongodb___default.a.ObjectID;
/* harmony default export */ __webpack_exports__["b"] = (function (name) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(URL, function (err, db) { return __awaiter(_this, void 0, void 0, function () {
            var collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db.collection(name)];
                    case 1:
                        collection = _a.sent();
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({ collection: collection, db: db });
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    });
});;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reqRoute__ = __webpack_require__(18);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;






var port = 8989;
var app = __WEBPACK_IMPORTED_MODULE_0_express__();
var upload = __WEBPACK_IMPORTED_MODULE_2_multer__();
var server = app.listen(port, function () {
    console.log("http://localhost:" + port);
});
var filePath = function (fileName) {
    return __WEBPACK_IMPORTED_MODULE_3_path__["join"](__dirname + '/../data/' + fileName);
};
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser__["json"]({ limit: '50mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser__["urlencoded"]({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_0_express__["static"]('./dist'));
app.get('*', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var data, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_4__route__["a" /* default */])(req)];
            case 1:
                data = _d.sent();
                if (!(data.type === 'data')) return [3 /*break*/, 2];
                res.send(data.data);
                return [3 /*break*/, 4];
            case 2:
                _b = (_a = res).sendFile;
                _c = filePath;
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_5__reqRoute__["a" /* default */])(req.path)];
            case 3:
                _b.apply(_a, [_c.apply(void 0, [_d.sent()])]);
                _d.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('*', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var data, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_4__route__["a" /* default */])(req)];
            case 1:
                data = _d.sent();
                if (!(data.type === 'data')) return [3 /*break*/, 2];
                res.send(data.data);
                return [3 /*break*/, 4];
            case 2:
                _b = (_a = res).sendFile;
                _c = filePath;
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_5__reqRoute__["a" /* default */])(req.path)];
            case 3:
                _b.apply(_a, [_c.apply(void 0, [_d.sent()])]);
                _d.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initData__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadBookingInfoV2__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apis__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiRoute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mockRoute__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileRoute__ = __webpack_require__(20);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;






/* harmony default export */ __webpack_exports__["a"] = (function (req) { return __awaiter(_this, void 0, void 0, function () {
    var reqPath, query, body, _a, apiRouteData, mockRouteData, mockChangeData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                reqPath = req.path, query = req.query, body = req.body;
                _a = reqPath;
                switch (_a) {
                    case '/': return [3 /*break*/, 1];
                    case __WEBPACK_IMPORTED_MODULE_2__apis__["a" /* apilist */]: return [3 /*break*/, 2];
                    case __WEBPACK_IMPORTED_MODULE_2__apis__["c" /* mocklist */]: return [3 /*break*/, 4];
                    case __WEBPACK_IMPORTED_MODULE_2__apis__["b" /* mockchange */]: return [3 /*break*/, 6];
                    case '/favicon.ico': return [3 /*break*/, 8];
                    case '/tour/booking/OrderV2/initData': return [3 /*break*/, 9];
                    case '/bookingnext/LoadBookingInfoV2': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 13];
            case 1: return [2 /*return*/, 'layout.html'];
            case 2: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3__apiRoute__["a" /* default */])(body)];
            case 3:
                apiRouteData = _b.sent();
                return [2 /*return*/, {
                        type: 'data',
                        data: apiRouteData
                    }];
            case 4: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_4__mockRoute__["a" /* default */])(body)];
            case 5:
                mockRouteData = _b.sent();
                return [2 /*return*/, {
                        type: 'data',
                        data: mockRouteData
                    }];
            case 6: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_5__fileRoute__["a" /* default */])(body)];
            case 7:
                mockChangeData = _b.sent();
                return [2 /*return*/, {
                        type: 'data',
                        data: mockChangeData
                    }];
            case 8: return [2 /*return*/, {
                    type: 'data',
                    data: ''
                }
                // 填写页
            ];
            case 9: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__initData__["a" /* default */])(query)];
            case 10: return [2 /*return*/, _b.sent()];
            case 11: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__LoadBookingInfoV2__["a" /* default */])(body)];
            case 12: return [2 /*return*/, _b.sent()];
            case 13: return [2 /*return*/];
        }
    });
}); });;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (query) {
    return 'test.json';
});;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (body) {
    return 'test.json';
});;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apilist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mocklist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mockchange; });
/* unused harmony export apis */
var apilist = '/apilist';
var mocklist = '/mocklist';
var mockchange = '/mockchange';
var apis = [apilist, mocklist, mockchange];


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileRoute__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;


var clearTime = function (data) {
    var tempData = [];
    data.map(function (_a) {
        var _id = _a._id, name = _a.name, desc = _a.desc;
        tempData.push({
            _id: _id,
            name: name,
            desc: desc
        });
    });
    return tempData;
};
/* harmony default export */ __webpack_exports__["a"] = (function (body) { return __awaiter(_this, void 0, void 0, function () {
    var result, type, desc, name, id, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                result = {};
                type = body.type, desc = body.desc, name = body.name, id = body.id;
                _a = type;
                switch (_a) {
                    case 'search': return [3 /*break*/, 1];
                    case 'save': return [3 /*break*/, 3];
                    case 'delete': return [3 /*break*/, 6];
                    case 'modify': return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 1: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["a" /* apiListDB */].search()];
            case 2:
                result = _b.sent();
                return [2 /*return*/, clearTime(result)];
            case 3: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["a" /* apiListDB */].save({ name: name, desc: desc })];
            case 4:
                result = _b.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__fileRoute__["a" /* default */])({
                        type: 'add',
                        pid: result.insertedIds[0].toString()
                    })];
            case 5:
                _b.sent();
                return [2 /*return*/, clearTime(result.ops)];
            case 6: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["a" /* apiListDB */].delete({ id: id })];
            case 7:
                result = _b.sent();
                return [2 /*return*/, result];
            case 8: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["a" /* apiListDB */].modify({ id: id, name: name, desc: desc })];
            case 9:
                result = _b.sent();
                return [2 /*return*/, result];
            case 10: return [2 /*return*/];
        }
    });
}); });;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var colName = 'apiList';
// declare const PromiseObject: any
/* harmony default export */ __webpack_exports__["a"] = ({
    search: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        where = {};
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.find(where).toArray(function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    save: function (_a) {
        var name = _a.name, desc = _a.desc;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.insert({ name: name, desc: desc, time: new Date().getTime() }, function (err, docs) {
                                    resolve(docs);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    delete: function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id)
                                };
                                collection.remove({ _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id) }, function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    modify: function (_a) {
        var id = _a.id, name = _a.name, desc = _a.desc;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id)
                                };
                                collection.update(where, { $set: { name: name, desc: desc, time: new Date().getTime() } }, function (err, docs) {
                                    resolve(docs.result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    }
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var colName = 'mockList';
/* harmony default export */ __webpack_exports__["a"] = ({
    search: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        where = {};
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.find(where).toArray(function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    save: function (_a) {
        var name = _a.name, desc = _a.desc, pid = _a.pid;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.insert({ name: name, desc: desc, pid: pid, time: new Date().getTime() }, function (err, docs) {
                                    resolve(docs);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    delete: function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id)
                                };
                                collection.remove({ _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id) }, function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    modify: function (_a) {
        var id = _a.id, desc = _a.desc;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id)
                                };
                                collection.update(where, { $set: { desc: desc, time: new Date().getTime() } }, function (err, docs) {
                                    resolve(docs.result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    }
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;


var clearTime = function (data) {
    var tempData = [];
    data.map(function (_a) {
        var _id = _a._id, name = _a.name, pid = _a.pid, desc = _a.desc;
        tempData.push({
            _id: _id,
            desc: desc,
            pid: pid,
            name: name
        });
    });
    return tempData;
};
/* harmony default export */ __webpack_exports__["a"] = (function (body) { return __awaiter(_this, void 0, void 0, function () {
    var result, name, type, desc, code, pid, id, _a, saveFileName, readState;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                result = {};
                name = body.name, type = body.type, desc = body.desc, code = body.code, pid = body.pid, id = body.id;
                _a = type;
                switch (_a) {
                    case 'save': return [3 /*break*/, 1];
                    case 'search': return [3 /*break*/, 4];
                    case 'readCode': return [3 /*break*/, 6];
                    case 'delete': return [3 /*break*/, 8];
                    case 'modify': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 14];
            case 1: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__file__["a" /* default */].write(name, code)];
            case 2:
                saveFileName = _b.sent();
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["c" /* mockListDB */].save({ name: saveFileName, desc: desc, pid: pid })];
            case 3:
                result = _b.sent();
                return [2 /*return*/, clearTime(result.ops)
                    // result = await mockListDB.search(id)
                    // return clearTime(result)
                ];
            case 4: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["c" /* mockListDB */].search(id)];
            case 5:
                result = _b.sent();
                return [2 /*return*/, clearTime(result)];
            case 6: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__file__["a" /* default */].read(name)];
            case 7:
                readState = _b.sent();
                return [2 /*return*/, {
                        data: readState
                    }];
            case 8: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__file__["a" /* default */].delete(name)];
            case 9:
                _b.sent();
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["c" /* mockListDB */].delete({ id: id })];
            case 10:
                result = _b.sent();
                return [2 /*return*/, result];
            case 11: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__file__["a" /* default */].write(name, code)];
            case 12:
                _b.sent();
                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__db__["c" /* mockListDB */].modify({ id: id, desc: desc })];
            case 13:
                result = _b.sent();
                return [2 /*return*/, result];
            case 14: return [2 /*return*/];
        }
    });
}); });;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var filePath = function (name) { return __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, '/../data/') + name + '.json'; };
/* harmony default export */ __webpack_exports__["a"] = ({
    write: function (name, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!name) {
                            name = 'p' + new Date().getTime();
                        }
                        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.writeFile(filePath(name), decodeURIComponent(code), 'utf-8', function (err) {
                            resolve(name);
                        });
                    })];
            });
        });
    },
    read: function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.readFile(filePath(name), 'utf-8', function (err, data) {
                            resolve(data);
                        });
                    })];
            });
        });
    },
    delete: function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.unlink(filePath(name), function (err) {
                            resolve();
                        });
                    })];
            });
        });
    }
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_apiRoute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_mockRoute__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_fileRoute__ = __webpack_require__(20);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;



/* harmony default export */ __webpack_exports__["a"] = (function (path) { return __awaiter(_this, void 0, void 0, function () {
    var routes, mocks_1, pathMockList_1, pathApiId_1, fileMockId_1, fileRouteList, fileName_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(path === '/')) return [3 /*break*/, 1];
                return [2 /*return*/, 'layout.html'];
            case 1: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__route_apiRoute__["a" /* default */])({
                    type: 'search'
                })];
            case 2:
                routes = _a.sent();
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__route_mockRoute__["a" /* default */])({
                        type: 'search'
                    })];
            case 3: return [4 /*yield*/, _a.sent()];
            case 4:
                mocks_1 = _a.sent();
                pathMockList_1 = [];
                pathApiId_1 = '';
                routes.map(function (item) {
                    if (item.name === path) {
                        pathApiId_1 = item._id.toString();
                        mocks_1.map(function (mockItem) {
                            if (pathApiId_1 === mockItem.pid) {
                                pathMockList_1.push(mockItem);
                            }
                        });
                    }
                });
                fileMockId_1 = '';
                return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2__route_fileRoute__["a" /* default */])({
                        type: 'search'
                    })];
            case 5:
                fileRouteList = _a.sent();
                fileRouteList.some(function (item) {
                    if (item.pid === pathApiId_1) {
                        fileMockId_1 = item.mockId;
                        return true;
                    }
                });
                fileName_1 = '';
                pathMockList_1.some(function (item) {
                    if (item._id.toString() === fileMockId_1) {
                        fileName_1 = item.name;
                        return true;
                    }
                });
                if (!fileName_1) {
                    fileName_1 = pathMockList_1[0].name;
                }
                return [2 /*return*/, fileName_1 + '.json'];
        }
    });
}); });;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var colName = 'fileList';
/* harmony default export */ __webpack_exports__["a"] = ({
    save: function (_a) {
        var pid = _a.pid;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.insert({ pid: pid, mockId: '', time: new Date().getTime() }, function (err, docs) {
                                    resolve(docs);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    search: function () {
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        where = {};
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                collection.find(where).toArray(function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    modify: function (_a) {
        var id = _a.id, pid = _a.pid;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    // _id: new ObjectID(id)
                                    pid: id
                                };
                                collection.update(where, { $set: { mockId: pid, time: new Date().getTime() } }, function (err, docs) {
                                    resolve(docs.result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    },
    delete: function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var connect, collection, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* default */])(colName)];
                    case 1:
                        connect = _a.sent();
                        collection = connect.collection, db = connect.db;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var where = {
                                    _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id)
                                };
                                collection.remove({ _id: new __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ObjectID */](id) }, function (err, result) {
                                    resolve(result);
                                    db.close();
                                });
                            })];
                }
            });
        });
    }
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;

// interface ITSearchResult {
//   _id: any
//   name: string
//   desc: string
//   time: number
// }
// const clearTime = (data: Array<ITSearchResult>): Array<ITApiListInfo> => {
//   let tempData: Array<ITApiListInfo> = []
//   data.map(({ _id, name, desc }: ITSearchResult) => {
//     tempData.push({
//       _id,
//       name,
//       desc
//     })
//   })
//   return tempData
// }
/* harmony default export */ __webpack_exports__["a"] = (function (body) { return __awaiter(_this, void 0, void 0, function () {
    var result, type, pid, id, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                result = {};
                type = body.type, pid = body.pid, id = body.id;
                _a = type;
                switch (_a) {
                    case 'search': return [3 /*break*/, 1];
                    case 'add': return [3 /*break*/, 3];
                    case 'delete': return [3 /*break*/, 5];
                    case 'modify': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__db__["b" /* fileListDB */].search()];
            case 2:
                result = _b.sent();
                return [2 /*return*/, result];
            case 3: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__db__["b" /* fileListDB */].save({ pid: pid })];
            case 4:
                result = _b.sent();
                return [2 /*return*/, result];
            case 5: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__db__["b" /* fileListDB */].delete({ id: id })];
            case 6:
                result = _b.sent();
                return [2 /*return*/, result];
            case 7: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__db__["b" /* fileListDB */].modify({ id: id, pid: pid })];
            case 8:
                result = _b.sent();
                return [2 /*return*/, result];
            case 9: return [2 /*return*/];
        }
    });
}); });;


/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map