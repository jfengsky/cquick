'use strict';

(function (win, doc) {
    var Absery = function Absery(selector, context) {
        return new Absery.fn.init(selector, context);
    };

    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;

    Absery.fn = Absery.prototype = {
        version: "0.0.1",

        constructor: Absery,

        length: 0,

        toArray: function toArray() {},


        // 处理字符串的selector
        selectText: function selectText(selector) {
            var match = rquickExpr.exec(selector);

            // 处理#id选择器
            if (match[2]) {
                var elem = doc.getElementById(match[2]);
                // if(elem && elem.parentNode) {
                if (elem) {
                    this.length = 1;
                    this[0] = elem;
                }
                this.context = doc;
                this.selector = selector;
                return this;
            }
        },
        init: function init(selector, context) {

            if (!selector) {
                return this;
            }

            if (typeof selector === 'string') {
                return this.selectText(selector);
            }

            return this;
        },
        extend: function extend() {
            for (var _len = arguments.length, obj = Array(_len), _key = 0; _key < _len; _key++) {
                obj[_key] = arguments[_key];
            }

            return Object.assign.apply(this, obj);
        }
    };

    var attr = {};

    Absery.extend = Absery.fn.extend;

    Absery.fn.prototype = Absery.fn.init.prototype = Absery.prototype;
    win.Absery = Absery;
})(window, document);

Absery('#test');

// Absery('<span></span>')