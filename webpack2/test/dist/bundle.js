/*!  2016-08-11 15:30  */
webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _mod = __webpack_require__(2);

	var _mod2 = _interopRequireDefault(_mod);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _mod2.default)("test3111.js");
	var color = ['red', 'green', 'white'];
	var color2 = [].concat(color, ['yellow']);

	console.log(color2);

	var obj = {
	    aaa: 1,
	    bbb: 2,
	    ccc: 3
	};

	var newObj = _extends({}, obj, {
	    ddd: 4
	});
	console.log(newObj);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var test = function test(str) {
	    console.log(str);
	};
	module.exports = test;

/***/ }
]);