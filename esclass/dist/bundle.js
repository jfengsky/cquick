webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);

	        this.x = x;
	        this.y = y;
	        console.log('constructor');
	    }

	    Point.prototype.toString = function toString() {
	        return '(' + this.x + ',' + this.y + ')';
	    };

	    return Point;
	}();

	var p1 = new Point(2, 3);

	// console.log(p1.toString())

	function Points(x, y) {
	    this.x = x;
	    this.y = y;
	    this.toString = function () {
	        return '(' + this.x + ',' + this.y + ')';
	    };
	}

	var p2 = new Points(2, 3);
	// console.log(p2.toString())

	console.log(p1.constructor);
	console.log(p2.constructor);

	console.log(Object.keys(Point.prototype));
	console.log(Object.getOwnPropertyNames(Point.prototype));

/***/ }
]);