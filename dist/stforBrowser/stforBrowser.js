(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.st_forBrowser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * 
 * @class
 * @memberof st.forbrowser
 * 
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node =

/**
 * @constructs Node
 */
function Node() {
	_classCallCheck(this, Node);
};

var _lib = {
	"Node": Node

};

module.exports = _lib;


},{}],2:[function(require,module,exports){
"use strict";

/**
 * 
 * @class
 * @memberof st.forbrowser
 * 
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server =

/**
 * @constructs Server
 */
function Server() {
	_classCallCheck(this, Server);
};

var _lib = {
	"Server": Server

};

module.exports = _lib;


},{}],3:[function(require,module,exports){
"use strict";

/**
 * 
 * SomeThings library
 * 
 * @namespace st
 * 
 */

/**
 * 
 * SomeThings library for browser
 * 
 * @namespace st.forbrowser
 * @memberof st
 * 
 * 
 */

var Node = require('./node.js').Node;
var Server = require('./server.js').Server;

//if (st === undefined) {
//	let st = {};
//}

var st = {};

st.forbrowser = {
  "Node": Node,
  "Server": Server
};

//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;


},{"./node.js":1,"./server.js":2}]},{},[1,2,3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbm9kZS5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2ZXIuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc3Rmb3JCcm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBcclxuICovXG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlID1cblxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RzIE5vZGVcclxuICovXG5mdW5jdGlvbiBOb2RlKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG59O1xuXG52YXIgX2xpYiA9IHtcblx0XCJOb2RlXCI6IE5vZGVcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBcclxuICovXG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTZXJ2ZXIgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgU2VydmVyXHJcbiAqL1xuZnVuY3Rpb24gU2VydmVyKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyKTtcbn07XG5cbnZhciBfbGliID0ge1xuXHRcIlNlcnZlclwiOiBTZXJ2ZXJcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5XHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0XHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3NlclxyXG4gKiBAbWVtYmVyb2Ygc3RcclxuICogXHJcbiAqIFxyXG4gKi9cblxudmFyIE5vZGUgPSByZXF1aXJlKCcuL25vZGUuanMnKS5Ob2RlO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyLmpzJykuU2VydmVyO1xuXG4vL2lmIChzdCA9PT0gdW5kZWZpbmVkKSB7XG4vL1x0bGV0IHN0ID0ge307XG4vL31cblxudmFyIHN0ID0ge307XG5cbnN0LmZvcmJyb3dzZXIgPSB7XG4gIFwiTm9kZVwiOiBOb2RlLFxuICBcIlNlcnZlclwiOiBTZXJ2ZXJcbn07XG5cbi8vbGV0IF9saWIgPSB7XG4vL1x0XHRcInN0XCI6IHN0XG4vL1x0fTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdC5mb3Jicm93c2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rmb3JCcm93c2VyLmpzLm1hcFxuIl19
