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

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(1);
var proxy = __webpack_require__(6);
var layout_1 = __webpack_require__(2);
var app = express();
var clientPort = 8989;
var apiProxy = proxy('/tour', {
    target: 'http://localhost:3000',
    changeOrigin: true,
    router: {
        'localhost:3000': 'http://localhost:8989'
    }
});
app.use('/tour/*', apiProxy);
app.get('/', function (req, res) {
    res.send(layout_1.default);
});
// app.get('/tour/*', (req, res) => {
//   console.log('ccc')
// });
// app.post('/tour/*', (req, res) => {
//   console.log('aaa')
// })
app.listen(clientPort, function () {
    console.log("Listening on: http://localhost:" + clientPort);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=1000, initial-scale=1.0, maximum-scale=1.0\">\n    <title>client</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script src=\"/vendor.js\"></script>\n    <script src=\"/index.js\"></script>\n    <script>\n      window.__INITSTATE__ = {}\n    </script>\n  </body>\n</html>\n";


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(10);
var _ = __webpack_require__(3);

var loggerInstance;

var defaultProvider = {
    log: console.log,
    debug: console.log,    // use .log(); since console does not have .debug()
    info: console.info,
    warn: console.warn,
    error: console.error
};

// log level 'weight'
var LEVELS = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 50,
    silent: 80
};

module.exports = {
    // singleton
    getInstance: function() {
        if (!loggerInstance) {
            loggerInstance = new Logger();
        }

        return loggerInstance;
    },
    getArrow: getArrow
};

function Logger() {
    var logLevel;
    var provider;

    var api = {
        log: log,
        debug: debug,
        info: info,
        warn: warn,
        error: error,
        setLevel: function(v) {
            if (isValidLevel(v)) {
                logLevel = v;
            }
        },
        setProvider: function(fn) {
            if (fn && isValidProvider(fn)) {
                provider = fn(defaultProvider);
            }
        }
    };

    init();

    return api;

    function init() {
        api.setLevel('info');
        api.setProvider(function() {
            return defaultProvider;
        });
    }

    // log will log messages, regardless of logLevels
    function log() {
        provider.log(_interpolate.apply(null, arguments));
    }

    function debug() {
        if (_showLevel('debug')) {
            provider.debug(_interpolate.apply(null, arguments));
        }
    }

    function info() {
        if (_showLevel('info')) {
            provider.info(_interpolate.apply(null, arguments));
        }
    }

    function warn() {
        if (_showLevel('warn')) {
            provider.warn(_interpolate.apply(null, arguments));
        }
    }

    function error() {
        if (_showLevel('error')) {
            provider.error(_interpolate.apply(null, arguments));
        }
    }

    /**
     * Decide to log or not to log, based on the log levels 'weight'
     * @param  {String}  showLevel [debug, info, warn, error, silent]
     * @return {Boolean}
     */
    function _showLevel(showLevel) {
        var result = false;
        var currentLogLevel = LEVELS[logLevel];

        if (currentLogLevel && (currentLogLevel <= LEVELS[showLevel])) {
            result = true;
        }

        return result;
    }

    // make sure logged messages and its data are return interpolated
    // make it possible for additional log data, such date/time or custom prefix.
    function _interpolate() {
        var fn = _.spread(util.format);
        var result = fn(_.slice(arguments));

        return result;
    }

    function isValidProvider(fnProvider) {
        var result = true;

        if (fnProvider && !_.isFunction(fnProvider)) {
            throw new Error('[HPM] Log provider config error. Expecting a function.');
        }

        return result;
    }

    function isValidLevel(levelName) {
        var validLevels = _.keys(LEVELS);
        var isValid = _.includes(validLevels, levelName);

        if (!isValid) {
            throw new Error('[HPM] Log level error. Invalid logLevel.');
        }

        return isValid;
    }
}

/**
 * -> normal proxy
 * => router
 * ~> pathRewrite
 * ≈> router + pathRewrite
 */
function getArrow(originalPath, newPath, originalTarget, newTarget) {
    var arrow = ['>'];
    var isNewTarget = (originalTarget !== newTarget); // router
    var isNewPath = (originalPath !== newPath); // pathRewrite

    if (isNewPath && !isNewTarget) {arrow.unshift('~');} else if (!isNewPath && isNewTarget) {arrow.unshift('=');} else if (isNewPath && isNewTarget) {arrow.unshift('≈');} else {arrow.unshift('-');}

    return arrow.join('');
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var HPM  = __webpack_require__(7);

module.exports = function(context, opts) {
    return new HPM(context, opts);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _              = __webpack_require__(3);
var httpProxy      = __webpack_require__(8);
var configFactory  = __webpack_require__(9);
var handlers       = __webpack_require__(11);
var contextMatcher = __webpack_require__(12);
var PathRewriter   = __webpack_require__(15);
var Router         = __webpack_require__(16);
var logger         = __webpack_require__(4).getInstance();
var getArrow       = __webpack_require__(4).getArrow;

module.exports = HttpProxyMiddleware;

function HttpProxyMiddleware(context, opts) {
    // https://github.com/chimurai/http-proxy-middleware/issues/57
    var wsUpgradeDebounced  = _.debounce(handleUpgrade);
    var wsInitialized       = false;
    var config              = configFactory.createConfig(context, opts);
    var proxyOptions        = config.options;

    // create proxy
    var proxy = httpProxy.createProxyServer({});
    logger.info('[HPM] Proxy created:', config.context, ' -> ', proxyOptions.target);

    var pathRewriter = PathRewriter.create(proxyOptions.pathRewrite); // returns undefined when "pathRewrite" is not provided

    // attach handler to http-proxy events
    handlers.init(proxy, proxyOptions);

    // log errors for debug purpose
    proxy.on('error', logError);

    // https://github.com/chimurai/http-proxy-middleware/issues/19
    // expose function to upgrade externally
    middleware.upgrade = wsUpgradeDebounced;

    return middleware;

    function middleware(req, res, next) {
        if (shouldProxy(config.context, req)) {
            var activeProxyOptions = prepareProxyRequest(req);
            proxy.web(req, res, activeProxyOptions);
        } else {
            next();
        }

        if (proxyOptions.ws === true) {
            // use initial request to access the server object to subscribe to http upgrade event
            catchUpgradeRequest(req.connection.server);
        }
    }

    function catchUpgradeRequest(server) {
        // subscribe once; don't subscribe on every request...
        // https://github.com/chimurai/http-proxy-middleware/issues/113
        if (!wsInitialized) {
            server.on('upgrade', wsUpgradeDebounced);
            wsInitialized = true;
        }
    }

    function handleUpgrade(req, socket, head) {
        // set to initialized when used externally
        wsInitialized = true;

        if (shouldProxy(config.context, req)) {
            var activeProxyOptions = prepareProxyRequest(req);
            proxy.ws(req, socket, head, activeProxyOptions);
            logger.info('[HPM] Upgrading to WebSocket');
        }
    }

    /**
     * Determine whether request should be proxied.
     *
     * @private
     * @return {Boolean}
     */
    function shouldProxy(context, req) {
        var path = (req.originalUrl || req.url);
        return contextMatcher.match(context, path, req);
    }

    /**
     * Apply option.router and option.pathRewrite
     * Order matters:
          Router uses original path for routing;
          NOT the modified path, after it has been rewritten by pathRewrite
     */
    function prepareProxyRequest(req) {
        // https://github.com/chimurai/http-proxy-middleware/issues/17
        // https://github.com/chimurai/http-proxy-middleware/issues/94
        req.url = (req.originalUrl || req.url);

        // store uri before it gets rewritten for logging
        var originalPath = req.url;
        var newProxyOptions = _.assign({}, proxyOptions);

        // Apply in order:
        // 1. option.router
        // 2. option.pathRewrite
        __applyRouter(req, newProxyOptions);
        __applyPathRewrite(req, pathRewriter);

        // debug logging for both http(s) and websockets
        if (proxyOptions.logLevel === 'debug') {
            var arrow = getArrow(originalPath, req.url, proxyOptions.target, newProxyOptions.target);
            logger.debug('[HPM] %s %s %s %s', req.method, originalPath, arrow, newProxyOptions.target);
        }

        return newProxyOptions;
    }

    // Modify option.target when router present.
    function __applyRouter(req, options) {
        var newTarget;

        if (options.router) {
            newTarget = Router.getTarget(req, options);

            if (newTarget) {
                logger.debug('[HPM] Router new target: %s -> "%s"', options.target, newTarget);
                options.target = newTarget;
            }
        }
    }

    // rewrite path
    function __applyPathRewrite(req, pathRewriter) {
        if (pathRewriter) {
            var path = pathRewriter(req.url, req);

            if (typeof path === 'string') {
                req.url =  path;
            } else {
                logger.info('[HPM] pathRewrite: No rewritten path found. (%s)', req.url);
            }
        }
    }

    function logError(err, req, res) {
        var hostname = (req.headers && req.headers.host) || (req.hostname || req.host);     // (websocket) || (node0.10 || node 4/5)
        var target = proxyOptions.target.host || proxyOptions.target;
        var errReference = 'https://nodejs.org/api/errors.html#errors_common_system_errors'; // link to Node Common Systems Errors page

        logger.error('[HPM] Error occurred while trying to proxy request %s from %s to %s (%s) (%s)', req.url, hostname, target, err.code, errReference);
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _      = __webpack_require__(3);
var url    = __webpack_require__(5);
var logger = __webpack_require__(4).getInstance();

module.exports = {
    createConfig: createConfig
};

function createConfig(context, opts) {
    // structure of config object to be returned
    var config = {
        context: undefined,
        options: {}
    };

    // app.use('/api', proxy({target:'http://localhost:9000'}));
    if (isContextless(context, opts)) {
        config.context = '/';
        config.options = _.assign(config.options, context);
    }
    // app.use('/api', proxy('http://localhost:9000'));
    // app.use(proxy('http://localhost:9000/api'));
    else if (isStringShortHand(context)) {
        var oUrl   = url.parse(context);
        var target = [oUrl.protocol, '//', oUrl.host].join('');

        config.context = oUrl.pathname || '/';
        config.options = _.assign(config.options, {target: target}, opts);

        if (oUrl.protocol === 'ws:' || oUrl.protocol === 'wss:') {
            config.options.ws = true;
        }
    // app.use('/api', proxy({target:'http://localhost:9000'}));
    } else {
        config.context = context;
        config.options = _.assign(config.options, opts);
    }

    configureLogger(config.options);

    if (!config.options.target) {
        throw new Error('[HPM] Missing "target" option. Example: {target: "http://www.example.org"}');
    }

    // Legacy option.proxyHost
    config.options = mapLegacyProxyHostOption(config.options);

    // Legacy option.proxyTable > option.router
    config.options = mapLegacyProxyTableOption(config.options);

    return config;
}

/**
 * Checks if a String only target/config is provided.
 * This can be just the host or with the optional path.
 *
 * @example
 *      app.use('/api', proxy('http://localhost:9000'));
        app.use(proxy('http://localhost:9000/api'));
 *
 * @param  {String}  context [description]
 * @return {Boolean}         [description]
 */
function isStringShortHand(context) {
    if (_.isString(context)) {
        return (url.parse(context).host) ? true : false;
    }
}

/**
 * Checks if a Object only config is provided, without a context.
 * In this case the all paths will be proxied.
 *
 * @example
 *     app.use('/api', proxy({target:'http://localhost:9000'}));
 *
 * @param  {Object}  context [description]
 * @param  {*}       opts    [description]
 * @return {Boolean}         [description]
 */
function isContextless(context, opts) {
    return (_.isPlainObject(context) && _.isEmpty(opts));
}

function mapLegacyProxyHostOption(options) {
    // set options.headers.host when option.proxyHost is provided
    if (options.proxyHost) {
        logger.warn('*************************************');
        logger.warn('[HPM] Deprecated "option.proxyHost"');
        logger.warn('      Use "option.changeOrigin" or "option.headers.host" instead');
        logger.warn('      "option.proxyHost" will be removed in future release.');
        logger.warn('*************************************');

        options.headers = options.headers || {};
        options.headers.host = options.proxyHost;
    }

    return options;
}

// Warn deprecated proxyTable api usage
function mapLegacyProxyTableOption(options) {
    if (options.proxyTable) {
        logger.warn('*************************************');
        logger.warn('[HPM] Deprecated "option.proxyTable"');
        logger.warn('      Use "option.router" instead');
        logger.warn('      "option.proxyTable" will be removed in future release.');
        logger.warn('*************************************');

        options.router = _.clone(options.proxyTable);
        _.omit(options, 'proxyTable');
    }

    return options;
}

function configureLogger(options) {
    if (options.logLevel) {
        logger.setLevel(options.logLevel);
    }

    if (options.logProvider) {
        logger.setProvider(options.logProvider);
    }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _      = __webpack_require__(3);
var logger = __webpack_require__(4).getInstance();

module.exports = {
    init: init,
    getHandlers: getProxyEventHandlers
};

function init(proxy, opts) {
    var handlers = getProxyEventHandlers(opts);

    _.forIn(handlers, function(handler, eventName) {
        proxy.on(eventName, handlers[eventName]);
    });

    logger.debug('[HPM] Subscribed to http-proxy events: ', _.keys(handlers));
}

function getProxyEventHandlers(opts) {
    // https://github.com/nodejitsu/node-http-proxy#listening-for-proxy-events
    var proxyEvents = ['error', 'proxyReq', 'proxyReqWs', 'proxyRes', 'open', 'close'];
    var handlers = {};

    _.forEach(proxyEvents, function(event) {
        // all handlers for the http-proxy events are prefixed with 'on'.
        // loop through options and try to find these handlers
        // and add them to the handlers object for subscription in init().
        var eventName = _.camelCase('on ' + event);
        var fnHandler = _.get(opts, eventName);

        if (_.isFunction(fnHandler)) {
            handlers[event] = fnHandler;
        }
    });

    // add default error handler in absence of error handler
    if (!_.isFunction(handlers.error)) {
        handlers.error = defaultErrorHandler;
    }

    // add default close handler in absence of close handler
    if (!_.isFunction(handlers.close)) {
        handlers.close = logClose;
    }

    return handlers;
};

function defaultErrorHandler(err, req, res) {
    var host = (req.headers && req.headers.host);
    var code = err.code;

    if (res.writeHead && !res.headersSent) {
        if (/HPE_INVALID/.test(code)) {
            res.writeHead(502);
        } else {
            switch(code) {
                case 'ECONNRESET':
                case 'ENOTFOUND':
                case 'ECONNREFUSED':
                    res.writeHead(504);
                    break;
                default: res.writeHead(500);
            }
        }
    }

    res.end('Error occured while trying to proxy to: ' + host + req.url);
}

function logClose(req, socket, head) {
    // view disconnected websocket connections
    logger.info('[HPM] Client disconnected');
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(3);
var url = __webpack_require__(5);
var isGlob = __webpack_require__(13);
var micromatch = __webpack_require__(14);

module.exports = {
    match: matchContext
};

function matchContext(context, uri, req) {

    // single path
    if (isStringPath(context)) {
        return matchSingleStringPath(context, uri);
    }

    // single glob path
    if (isGlobPath(context)) {
        return matchSingleGlobPath(context, uri);
    }

    // multi path
    if (Array.isArray(context)) {
        if (context.every(isStringPath)) {
            return matchMultiPath(context, uri);
        }
        if (context.every(isGlobPath)) {
            return matchMultiGlobPath(context, uri);
        }

        throw new Error('[HPM] Invalid context. Expecting something like: ["/api", "/ajax"] or ["/api/**", "!**.html"]');
    }

    // custom matching
    if (_.isFunction(context)) {
        var pathname = getUrlPathName(uri);
        return context(pathname, req);
    }

    throw new Error('[HPM] Invalid context. Expecting something like: "/api" or ["/api", "/ajax"]');
}

/**
 * @param  {String} context '/api'
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchSingleStringPath(context, uri) {
    var pathname = getUrlPathName(uri);
    return pathname.indexOf(context) === 0;
}

function matchSingleGlobPath(pattern, uri) {
    var pathname = getUrlPathName(uri);
    var matches = micromatch(pathname, pattern);
    return matches && (matches.length > 0);
}

function matchMultiGlobPath(patternList, uri) {
    return matchSingleGlobPath(patternList, uri);
}

/**
 * @param  {String} context ['/api', '/ajax']
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchMultiPath(contextList, uri) {
    for (var i = 0; i < contextList.length; i++) {
        var context = contextList[i];
        if (matchSingleStringPath(context, uri)) {
            return true;
        }
    }
    return false;
}

/**
 * Parses URI and returns RFC 3986 path
 *
 * @param  {String} uri from req.url
 * @return {String}     RFC 3986 path
 */
function getUrlPathName(uri) {
    return uri && url.parse(uri).pathname;
}

function isStringPath(context) {
    return _.isString(context) && !isGlob(context);
}

function isGlobPath(context) {
    return isGlob(context);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("is-glob");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("micromatch");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _      = __webpack_require__(3);
var logger = __webpack_require__(4).getInstance();

module.exports = {
    create: createPathRewriter
};

/**
 * Create rewrite function, to cache parsed rewrite rules.
 *
 * @returns {function} Function to rewrite paths; This function should accept `path` (request.url) as parameter
 */
function createPathRewriter(rewriteConfig) {
    var rulesCache;

    if (!isValidRewriteConfig(rewriteConfig)) {
        return;
    }

    if (_.isFunction(rewriteConfig)) {
        var customRewriteFn = rewriteConfig;
        return customRewriteFn;
    } else {
        rulesCache = parsePathRewriteRules(rewriteConfig);
        return rewritePath;
    }

    function rewritePath(path) {
        var result = path;

        _.forEach(rulesCache, function(rule) {
            if (rule.regex.test(path)) {
                result = result.replace(rule.regex, rule.value);
                logger.debug('[HPM] Rewriting path from "%s" to "%s"', path, result);
                return false;
            }
        });

        return result;
    }
}

function isValidRewriteConfig(rewriteConfig) {
    if (_.isFunction(rewriteConfig)) {
        return true;
    } else if (!_.isEmpty(rewriteConfig) && _.isPlainObject(rewriteConfig)) {
        return true;
    } else if (_.isUndefined(rewriteConfig) ||
               _.isNull(rewriteConfig) ||
               _.isEqual(rewriteConfig, {})) {
        return false;
    } else {
        throw new Error('[HPM] Invalid pathRewrite config. Expecting object with pathRewrite config or a rewrite function');
    }
}

function parsePathRewriteRules(rewriteConfig) {
    var rules = [];

    if (_.isPlainObject(rewriteConfig)) {
        _.forIn(rewriteConfig, function(value, key) {
            rules.push({
                regex: new RegExp(key),
                value: rewriteConfig[key]
            });
            logger.info('[HPM] Proxy rewrite rule created: "%s" ~> "%s"', key, rewriteConfig[key]);
        });
    }

    return rules;
}



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _      = __webpack_require__(3);
var logger = __webpack_require__(4).getInstance();

module.exports = {
    getTarget: getTarget
};

function getTarget(req, config) {
    var newTarget;
    var router = config.router;

    if (_.isPlainObject(router)) {
        newTarget = getTargetFromProxyTable(req, router);
    } else if (_.isFunction(router)) {
        newTarget = router(req);
    }

    return newTarget;
}

function getTargetFromProxyTable(req, table) {
    var result;
    var host = req.headers.host;
    var path = req.url;

    var hostAndPath = host + path;

    _.forIn(table, function(value, key) {
        if (containsPath(key)) {

            if (hostAndPath.indexOf(key) > -1) {    // match 'localhost:3000/api'
                result = table[key];
                logger.debug('[HPM] Router table match: "%s"', key);
                return false;
            }
        } else {

            if (key === host) {                     // match 'localhost:3000'
                result = table[key];
                logger.debug('[HPM] Router table match: "%s"', host);
                return false;
            }

        }

    });

    return result;
}

function containsPath(v) {
    return v.indexOf('/') > -1;
}


/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map