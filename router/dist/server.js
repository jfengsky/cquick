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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Home'
    )
  );
};

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'About'
    )
  );
};

var Topic = function Topic(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      match.params.topicId
    )
  );
};

var Topics = function Topics(_ref2) {
  var match = _ref2.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Topics'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/rendering' },
          'Rendering with React'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/components' },
          'Components'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/props-v-state' },
          'Props v. State'
        )
      )
    ),
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
        return _react2.default.createElement(
          'h3',
          null,
          'Please select a topic.'
        );
      } })
  );
};

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/about' },
          'About'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/topics' },
          'Topics'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/topics', component: Topics })
  );
};

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return '\n  <html>\n    <head>\n      <title>' + props.title + '</title>\n    </head>\n    <body>\n      <div id="root">' + (props.content || '') + '</div>\n    </body>\n  </html>\n';
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _reactRouter = __webpack_require__(5);

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import content from './html'
var app = (0, _express2.default)();

var routes = ['/', '/about', '/topics', '/topics/*'];

app.get('*', function (req, res) {
  var context = {};
  var match = routes.reduce(function (acc, route) {
    return (0, _reactRouter.matchPath)(req.url, route, { exact: true }) || acc;
  }, null);
  if (!match.isExact) {
    res.status(404).send('404 notfound');
    // res.status(404).send(render(<NoMatch />));
    return;
  }

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App2.default, null)
  ));
  res.status(200).send((0, _layout2.default)({ title: 'server', content: content }));
});

app.listen(3200, function () {
  return console.log('start server: http://localhost:3200');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);