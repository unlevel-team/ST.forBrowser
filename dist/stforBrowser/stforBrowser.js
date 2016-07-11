(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.st_forBrowser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Node module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

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
 * Server module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

/**
 * Server configuration
 * 
 * @class
 * @memberof st.forbrowser
 * 
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server_Config =

/**
 * @constructs Server_Config
 * 
 * @param {object} [options] - options
 * @param {object} [options.config] - scs options
 * 
 */
function Server_Config(options) {
	_classCallCheck(this, Server_Config);

	if (options === undefined || options === null) {
		options = {};
	}

	var sConfig = this;

	sConfig.scs = {
		"netLocation": null,
		"controlPort": null
	};

	// get config option
	var _sConfig = {};
	if (options.config !== undefined) {

		_sConfig = options.config;
	}

	if (_sConfig.scs === undefined) {
		_sConfig.scs = {};
	}

	if (_sConfig.scs.netLocation !== undefined) {
		sConfig.scs.netLocation = _sConfig.scs.netLocation;
	}

	if (_sConfig.scs.controlPort !== undefined) {
		sConfig.scs.controlPort = _sConfig.scs.controlPort;
	}
};

/**
 * Get Server configuration
 * 
 * @memberof st.forbrowser
 * 
 * @param options
 * @returns {st.forbrowser.Server_Config}
 */


function get_Server_Config(options) {
	return new Server_Config(options);
}

/**
 * 
 * @class
 * @memberof st.forbrowser
 * 
 */

var Server =

/**
 * @constructs Server
 */
function Server() {
	_classCallCheck(this, Server);
};

var _lib = {
	"Server": Server,
	"get_Server_Config": get_Server_Config

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

var _get_Server_Config = require('./server.js').get_Server_Config;

var st = {};
st.forbrowser = {

  "Node": Node,

  "Server": Server,
  "get_Server_Config": _get_Server_Config
};

//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;


},{"./node.js":1,"./server.js":2}]},{},[1,2,3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbm9kZS5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2ZXIuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc3Rmb3JCcm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIE5vZGUgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgTm9kZVxyXG4gKi9cbmZ1bmN0aW9uIE5vZGUoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcbn07XG5cbnZhciBfbGliID0ge1xuICBcIk5vZGVcIjogTm9kZVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29uZmlndXJhdGlvblxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNlcnZlcl9Db25maWcgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgU2VydmVyX0NvbmZpZ1xyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnNcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmNvbmZpZ10gLSBzY3Mgb3B0aW9uc1xyXG4gKiBcclxuICovXG5mdW5jdGlvbiBTZXJ2ZXJfQ29uZmlnKG9wdGlvbnMpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlcl9Db25maWcpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBzQ29uZmlnID0gdGhpcztcblxuXHRzQ29uZmlnLnNjcyA9IHtcblx0XHRcIm5ldExvY2F0aW9uXCI6IG51bGwsXG5cdFx0XCJjb250cm9sUG9ydFwiOiBudWxsXG5cdH07XG5cblx0Ly8gZ2V0IGNvbmZpZyBvcHRpb25cblx0dmFyIF9zQ29uZmlnID0ge307XG5cdGlmIChvcHRpb25zLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRfc0NvbmZpZyA9IG9wdGlvbnMuY29uZmlnO1xuXHR9XG5cblx0aWYgKF9zQ29uZmlnLnNjcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0X3NDb25maWcuc2NzID0ge307XG5cdH1cblxuXHRpZiAoX3NDb25maWcuc2NzLm5ldExvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRzQ29uZmlnLnNjcy5uZXRMb2NhdGlvbiA9IF9zQ29uZmlnLnNjcy5uZXRMb2NhdGlvbjtcblx0fVxuXG5cdGlmIChfc0NvbmZpZy5zY3MuY29udHJvbFBvcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNDb25maWcuc2NzLmNvbnRyb2xQb3J0ID0gX3NDb25maWcuc2NzLmNvbnRyb2xQb3J0O1xuXHR9XG59O1xuXG4vKipcclxuICogR2V0IFNlcnZlciBjb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBcclxuICogQHBhcmFtIG9wdGlvbnNcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuU2VydmVyX0NvbmZpZ31cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X1NlcnZlcl9Db25maWcob3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFNlcnZlcl9Db25maWcob3B0aW9ucyk7XG59XG5cbi8qKlxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIFxyXG4gKi9cblxudmFyIFNlcnZlciA9XG5cbi8qKlxyXG4gKiBAY29uc3RydWN0cyBTZXJ2ZXJcclxuICovXG5mdW5jdGlvbiBTZXJ2ZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXIpO1xufTtcblxudmFyIF9saWIgPSB7XG5cdFwiU2VydmVyXCI6IFNlcnZlcixcblx0XCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBnZXRfU2VydmVyX0NvbmZpZ1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJ2ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnlcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3RcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyXHJcbiAqIEBtZW1iZXJvZiBzdFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG52YXIgTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS5qcycpLk5vZGU7XG52YXIgU2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXIuanMnKS5TZXJ2ZXI7XG5cbi8vaWYgKHN0ID09PSB1bmRlZmluZWQpIHtcbi8vXHRsZXQgc3QgPSB7fTtcbi8vfVxuXG52YXIgX2dldF9TZXJ2ZXJfQ29uZmlnID0gcmVxdWlyZSgnLi9zZXJ2ZXIuanMnKS5nZXRfU2VydmVyX0NvbmZpZztcblxudmFyIHN0ID0ge307XG5zdC5mb3Jicm93c2VyID0ge1xuXG4gIFwiTm9kZVwiOiBOb2RlLFxuXG4gIFwiU2VydmVyXCI6IFNlcnZlcixcbiAgXCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBfZ2V0X1NlcnZlcl9Db25maWdcbn07XG5cbi8vbGV0IF9saWIgPSB7XG4vL1x0XHRcInN0XCI6IHN0XG4vL1x0fTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdC5mb3Jicm93c2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rmb3JCcm93c2VyLmpzLm1hcFxuIl19
