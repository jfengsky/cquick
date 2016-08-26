/*!  2016-08-26 15:03  */
webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _initialState = __webpack_require__(2);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _request = __webpack_require__(3);

	var _HeaderModel = __webpack_require__(4);

	var _HeaderModel2 = _interopRequireDefault(_HeaderModel);

	var _HeaderView = __webpack_require__(5);

	var _HeaderView2 = _interopRequireDefault(_HeaderView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *
	 */

	$.ready(function () {

	  _HeaderView2.default.init();

	  (0, _request.GET_LIST)().catch().then(function (data) {});
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var initState = {
	  // 当前所有task
	  list: []
	};

	exports.default = initState;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * 请求数据
	 */

	/**
	 * 获取task数据
	 * @constructor
	 */
	var GET_LIST = exports.GET_LIST = function GET_LIST() {
	  var setting = {
	    url: '/getAllTask',
	    type: 'get',
	    dataType: 'json',
	    cache: false
	  };
	  return Promise.resolve($.ajax(setting));
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * 顶部model
	 * Created on 16/8/26.
	 */

	var HeaderModel = Backbone.Model.extend({
	  defaults: {
	    title: '',
	    done: false
	  }
	});

	exports.default = HeaderModel;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 *
	 * Created 16/8/26.
	 */

	var headTpl = '<h1>todos</h1><input id="new-todo" placeholder="What needs to be done?" autofocus="">';

	var Header = Backbone.View.extend({
	  el: 'header',
	  id: 'header',
	  events: {
	    'keypress #new-todo': 'reateTask'
	  },
	  initialize: function initialize() {
	    this.render();
	  },
	  render: function render() {
	    this.$el.html(headTpl);
	    return this;
	  }
	});

	var HeaderView = {
	  init: function init() {
	    new Header();
	  }
	};
	exports.default = HeaderView;

/***/ }
]);