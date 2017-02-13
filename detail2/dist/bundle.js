webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _model = __webpack_require__(8);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(9);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import add from './add'
//
// // import jQuery from 'jQuery'
//
// console.log(add(2, 3))
//
//
// console.log(jQuery)
//
// console.log(_)
//
// console.log(Backbone)
// class Note extends Backbone.Model {
//     constructor() {
//         console.log('Note constructor')
//         super()
//     }
//
//     initialize(){
//         console.log('Note init')
//     }
//
//     render(){
//         console.log('Note render')
//     }
// }
//
// new Note()

var man = new _model2.default();

// console.log(man)
man.set({ name: 'lisi', age: '28' });
console.log(man.get('name'));
console.log(man.aboutMe());
man.set({ name: '' });

var obj = {
    name: "zhaowu",
    age: 8
};

new _view2.default({
    model: obj
});

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Man = function (_Backbone$Model) {
    _inherits(Man, _Backbone$Model);

    function Man() {
        _classCallCheck(this, Man);

        return _possibleConstructorReturn(this, (Man.__proto__ || Object.getPrototypeOf(Man)).apply(this, arguments));
    }

    _createClass(Man, [{
        key: 'defaults',

        // constructor(){
        //     super()
        // },
        value: function defaults() {
            return {
                name: 'zhangsan',
                age: '38'
            };
        }
    }, {
        key: 'initialize',
        value: function initialize() {
            var _this2 = this;

            this.bind('change:name', function () {
                var name = _this2.get('name');
                console.log('changed Name ' + name);
            });

            this.bind('error', function (model, error) {
                console.log(model);
                console.log(error);
            });
        }
    }, {
        key: 'validate',
        value: function validate(attributes) {
            debugger;
            if (attributes.name == '') {
                return 'name empty';
            }
        }
    }, {
        key: 'aboutMe',
        value: function aboutMe() {
            return 'my Name is ' + this.get('name') + ', ' + this.get('age') + ' year';
        }
    }]);

    return Man;
}(Backbone.Model);

exports.default = Man;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchView = function (_Backbone$View) {
    _inherits(searchView, _Backbone$View);

    function searchView(aa) {
        _classCallCheck(this, searchView);

        var _this = _possibleConstructorReturn(this, (searchView.__proto__ || Object.getPrototypeOf(searchView)).call(this, aa));

        debugger;
        return _this;
    }

    _createClass(searchView, [{
        key: 'initialize',
        value: function initialize() {
            this;
            console.log('view');
        }
    }]);

    return searchView;
}(Backbone.View);

exports.default = searchView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
],[6]);