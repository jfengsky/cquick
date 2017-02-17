'use strict';

(function (win, doc) {
    var Absery = function Absery(selector, context) {
        return new Absery.fn.init(selector, context);
    };

    Absery.fn = Absery.prototype = {
        version: "0.0.1",

        constructor: Absery,

        length: 0,

        toArray: function toArray() {},


        // 处理字符串的selector
        selectText: function selectText(selector) {
            debugger;
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

    Absery.extend = Absery.fn.extend;

    Absery.fn.prototype = Absery.prototype;
    Absery.fn.init.prototype = Absery.prototype;
    window.Absery = Absery;
})(window, document);

Absery('<span></span>');