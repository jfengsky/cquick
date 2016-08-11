/*! This file is created by xxxx-xx-xx xx:xx */
webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var ListView = Backbone.View.extend({
	    el: $('body'),

	    initialize: function initialize() {
	        _.bindAll(this, 'render');
	        this.render();
	    },
	    render: function render() {
	        $(this.el).append('<ul><li>first</li></ul>');
	    }
	});

	var listView = new ListView();

/***/ }
]);