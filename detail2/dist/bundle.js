webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, _, Backbone) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import jQuery from 'jQuery'

console.log((0, _add2.default)(2, 3));

console.log(jQuery);

console.log(_);

console.log(Backbone);

var Note = function (_Backbone$Model) {
    _inherits(Note, _Backbone$Model);

    function Note() {
        _classCallCheck(this, Note);

        console.log('Note constructor');
        return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this));
    }

    _createClass(Note, [{
        key: 'initialize',
        value: function initialize() {
            console.log('Note init');
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Note render');
        }
    }]);

    return Note;
}(Backbone.Model);

new Note();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(x, y) {
  return x + y;
};

exports.default = add;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
],[6]);