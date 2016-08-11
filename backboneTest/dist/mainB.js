/*! This file is created by xxxx-xx-xx xx:xx */
webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var ListView = Backbone.View.extend({
	    el: $('body'),
	    events: {
	        'click button#add': 'addItem'
	    },
	    initialize: function initialize() {
	        _.bindAll(this, 'render', 'addItem');
	        this.counter = 0;
	        this.render();
	    },
	    render: function render() {
	        $(this.el).append('<button id="add">add</button>');
	        $(this.el).append('<ul></ul>');
	    },
	    addItem: function addItem() {
	        this.counter++;
	        $('ul', this.el).append('<li>counter:' + this.counter + '</li>');
	    }
	});

	var listView = new ListView();

/***/ }
]);