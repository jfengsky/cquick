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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(1);
var bodyParser = __webpack_require__(2);
var multer = __webpack_require__(3);
var layout_1 = __webpack_require__(4);
var api_1 = __webpack_require__(5);
var nproxy_1 = __webpack_require__(6);
var apiRoute_1 = __webpack_require__(11);
var apiCodeRoute_1 = __webpack_require__(12);
var clientPort = 4100;
var app = express();
var upload = multer();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));
app.use(express.static('./public'));
app.get('*', function (req, res) {
    var clientProp = {
        title: 'client',
        content: '',
        __INITSTATE__: {}
    };
    res.send(layout_1.layout(clientProp));
});
var success = { state: 0, data: null };
app.post('*', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var sendData, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                sendData = {};
                if (!(api_1.postList.indexOf(req.path) >= 0)) return [3 /*break*/, 8];
                _a = req.path;
                switch (_a) {
                    case api_1.nproxyInfo: return [3 /*break*/, 1];
                    case api_1.apiInfo: return [3 /*break*/, 3];
                    case api_1.apiCode: return [3 /*break*/, 5];
                }
                return [3 /*break*/, 7];
            case 1: return [4 /*yield*/, nproxy_1.default(req)];
            case 2:
                sendData = _b.sent();
                return [2 /*return*/, res.send(Object.assign({}, success, sendData))];
            case 3: return [4 /*yield*/, apiRoute_1.default(req)];
            case 4:
                sendData = _b.sent();
                return [2 /*return*/, res.send(Object.assign({}, success, sendData))];
            case 5: return [4 /*yield*/, apiCodeRoute_1.default(req)];
            case 6:
                sendData = _b.sent();
                return [2 /*return*/, res.send(Object.assign({}, success, sendData))];
            case 7: return [3 /*break*/, 9];
            case 8:
                res.sendStatus('404');
                _b.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
app.listen(clientPort, function () { return console.log("start client: http://localhost:" + clientPort); });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.layout = function (props) { return "\n  <html>\n    <head>\n      <meta name=\"viewport\" content=\"width=1000, initial-scale=1.0, maximum-scale=1.0\">\n      <title>" + props.title + "</title>\n    </head>\n    <body>\n      <div id=\"root\">" + (props.content || '') + "</div>\n      <script src=\"/vendor.js\"></script>\n      <script src=\"/index.js\"></script>\n      <script>\n        window.__INITSTATE__ = " + JSON.stringify(props.__INITSTATE__ || {}) + "\n      </script>\n    </body>\n  </html>\n"; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 所有接口列表
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nproxyInfo = '/nproxyInfo';
exports.apiInfo = '/apiInfo';
exports.apiCode = '/apiCode';
exports.postList = [exports.nproxyInfo, exports.apiInfo, exports.apiCode];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(7);
exports.default = function (req) { return __awaiter(_this, void 0, void 0, function () {
    var _a, type, data, sendData, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, type = _a.type, data = _a.data;
                sendData = {};
                _b = type;
                switch (_b) {
                    case 'read': return [3 /*break*/, 1];
                    case 'write': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, _1.readfile()];
            case 2:
                sendData = _c.sent();
                return [2 /*return*/, Object.assign({}, sendData)];
            case 3: return [4 /*yield*/, _1.writefile(data)];
            case 4:
                // 为了方便移植(mac和win环境),这里用文件来存储数据
                sendData = _c.sent();
                return [2 /*return*/, Object.assign({}, sendData)];
            case 5: return [2 /*return*/];
        }
    });
}); };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var os = __webpack_require__(8);
var fs = __webpack_require__(9);
// import * as readline from 'readline'
var path = __webpack_require__(10);
var filePath = path.join(__dirname, '../nproxy/index.js');
var disString = 'module.exports=';
// 读取文件
exports.readfile = function () { return __awaiter(_this, void 0, void 0, function () {
    var files, replaceFiles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFileSync(filePath, 'utf-8')];
            case 1:
                files = _a.sent();
                replaceFiles = files.replace(disString, '');
                return [2 /*return*/, {
                        data: {
                            info: replaceFiles,
                            OS: os.platform()
                        }
                    }];
        }
    });
}); };
// 写入文件
exports.writefile = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var fileStr, wirtes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileStr = disString + data;
                return [4 /*yield*/, fs.writeFileSync(filePath, fileStr)];
            case 1:
                wirtes = _a.sent();
                return [2 /*return*/, {
                        data: {}
                    }];
        }
    });
}); };
var apiFilePath = path.join(__dirname, '../ts/db/api');
exports.readApifile = function () { return __awaiter(_this, void 0, void 0, function () {
    var files;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFileSync(apiFilePath, 'utf-8')];
            case 1:
                files = _a.sent();
                return [2 /*return*/, {
                        data: {
                            list: JSON.parse(files)
                        }
                    }];
        }
    });
}); };
exports.writeApifile = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var wirtes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.writeFileSync(apiFilePath, data)];
            case 1:
                wirtes = _a.sent();
                return [2 /*return*/, {
                        data: {}
                    }];
        }
    });
}); };
exports.readApiCodefile = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                data: {}
            }];
    });
}); };
exports.writeApiCodefile = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var fileName, code, wirtes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileName = data.fileName, code = data.code;
                console.log(code);
                return [4 /*yield*/, fs.writeFileSync(path.join(__dirname, '../nproxy/files/' + fileName), code)];
            case 1:
                wirtes = _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(7);
exports.default = function (req) { return __awaiter(_this, void 0, void 0, function () {
    var _a, type, data, sendData, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, type = _a.type, data = _a.data;
                sendData = {};
                _b = type;
                switch (_b) {
                    case 'read': return [3 /*break*/, 1];
                    case 'write': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, _1.readApifile()];
            case 2:
                sendData = _c.sent();
                return [2 /*return*/, Object.assign({}, sendData)];
            case 3: return [4 /*yield*/, _1.writeApifile(data)];
            case 4:
                sendData = _c.sent();
                return [2 /*return*/, Object.assign({}, sendData)];
            case 5: return [2 /*return*/];
        }
    });
}); };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(7);
exports.default = function (req) { return __awaiter(_this, void 0, void 0, function () {
    var _a, type, data, sendData, _b, id_1, fileName_1, desc_1, code, isAdd_1, apiFile;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, type = _a.type, data = _a.data;
                sendData = {};
                _b = type;
                switch (_b) {
                    case 'read': return [3 /*break*/, 1];
                    case 'write': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 7];
            case 1: return [4 /*yield*/, _1.readApiCodefile()];
            case 2:
                sendData = _c.sent();
                return [2 /*return*/, Object.assign({}, sendData)];
            case 3:
                id_1 = data.id, fileName_1 = data.fileName, desc_1 = data.desc, code = data.code;
                isAdd_1 = false;
                // 没有文件名临时生成一个
                if (!fileName_1) {
                    fileName_1 = 'a' + new Date().getTime();
                    isAdd_1 = true;
                }
                return [4 /*yield*/, _1.writeApiCodefile({
                        fileName: fileName_1,
                        code: code
                    })];
            case 4:
                _c.sent();
                return [4 /*yield*/, _1.readApifile()];
            case 5:
                apiFile = _c.sent();
                apiFile.data.list.map(function (_a) {
                    var _id = _a.id, list = _a.list;
                    if (id_1 === _id) {
                        if (isAdd_1) {
                            list.push({
                                fileName: fileName_1,
                                desc: desc_1
                            });
                        }
                        else {
                            list.map(function (listItem) {
                                if (listItem.fileName === fileName_1) {
                                    listItem.desc = desc_1;
                                }
                            });
                        }
                    }
                });
                return [4 /*yield*/, _1.writeApifile(JSON.stringify(apiFile.data.list))];
            case 6:
                _c.sent();
                return [2 /*return*/, Object.assign({}, apiFile)];
            case 7: return [2 /*return*/];
        }
    });
}); };


/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map