(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.st_forBrowser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Engine reference
 * 
 * @typedef {Object} Engine_Ref
 * @memberof st.forbrowser.engines
 * @type Object
 * @protected
 * 
 * @property {string} [sensorID] - Sensor ID
 * @property {string} [actuaorID] - Actuator ID
 * @property {string} type - Engine type
 * @property {string} _sysID - Engine sysID
 * @property {string} engine - Engine name. Could be 'not defined'
 * @property {string} state - Engine state.
 * 
 */

/**
 * The result object.
 * 
 * @typedef {Object} SearchResult
 * @memberof st.forbrowser.engines.Engines_Manager
 * 
 * @type Object
 * @property {(st.forbrowser.engines.Engine_Ref|null)} engine - The Engine object, may be null.
 * @property {number} position - The position in list.
 * 
 */

/**
 * Engines manager 
 * 
 * @class
 * @memberof st.forbrowser.engines
 * @protected
 * 
 * 
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engines_Manager = function () {

	/**
  * @constructs Engines_Manager
  */

	function Engines_Manager() {
		_classCallCheck(this, Engines_Manager);
	}

	/**
  * Returns Engine searched by ID
  * 
  * @param {Object} options - Options
  * @param {String} options.engineID - Engine ID
  * @param {String} [options.type] - type. Could be 'sensor' or 'actuator'
  * @param {st.forbrowser.engines.Engine_Ref[]} options.list - List of engines
  * 
  * @returns {st.forbrowser.engines.Engines_Manager.SearchResult} result - Result object
  *  
  */


	_createClass(Engines_Manager, [{
		key: 'getEngineByID',
		value: function getEngineByID(options) {

			var _engineID = options.engineID;
			var _type = options.type;
			var _list = options.list;

			var _engine = null;
			var _i = 0;

			switch (_type) {
				case 'sensor':
					_i = _list.map(function (x) {
						return x.sensorID;
					}).indexOf(_engineID);
					break;

				case 'actuator':
					_i = _list.map(function (x) {
						return x.actuatorID;
					}).indexOf(_engineID);
					break;

				default:
					_i = _list.map(function (x) {
						return x._sysID;
					}).indexOf(_engineID);
					break;
			}

			if (_i !== -1) {
				_engine = _list[_i];
			}

			return {
				"engine": _engine,
				"position": _i
			};
		}
	}]);

	return Engines_Manager;
}();

/**
 * @memberof st.forbrowser.engines
 * 
 * @returns {st.forbrowser.engines.Engines_Manager}
 */


function get_Engines_Manager() {
	return new Engines_Manager();
}

var _lib = {
	"Engines_Manager": Engines_Manager,
	"get_Engines_Manager": get_Engines_Manager,

	"_public": {
		"get_Engines_Manager": get_Engines_Manager
	}
};

module.exports = _lib;


},{}],2:[function(require,module,exports){
"use strict";

/**
 * SCS Request for engines 
 * 
 * @class
 * @memberof st.forbrowser.engines
 * @protected
 * 
 * 
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCS_Requests_forEngines = function () {

	/**
  * @constructs SCS_Requests_forEngines
  */

	function SCS_Requests_forEngines() {
		_classCallCheck(this, SCS_Requests_forEngines);
	}

	/**
  * Get list of engines
  * 
  * @param {object} options - Options
  * @param {object} options.ngntype - Engine type. ('sensors', 'actuators')
  * 
  * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
  * @param {function} [options._onSuccess] - Function to run on success
  * @param {function} [options._onError] - Function to run on error
  * @param {function} [options._onComplete] - Function to run on complete
  * 
  * @throws Exception
  * 
  * @returns {Promise}
  */


	_createClass(SCS_Requests_forEngines, [{
		key: "get_EnginesList",
		value: function get_EnginesList(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.ngntype === undefined) {
				throw "ngntype is required";
			}
			var _ngntype = options.ngntype;

			switch (_ngntype) {
				case 'sensors':
				case 'actuators':
					break;

				default:
					throw "ngntype is wrong.";
			}

			var _url = "/ngn/" + _ngntype + "/list";

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Get Engine info
   * 
   * @param {object} options - Options
   * @param {object} options.ngntype - Engine type. ('sensors', 'actuators')
   * @param {string} options.ngnID - engine ID
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "get_EngineInfo",
		value: function get_EngineInfo(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.ngntype === undefined) {
				throw "ngntype is required";
			}
			var _ngntype = options.ngntype;

			if (options.ngnID === undefined) {
				throw "ngnID is required";
			}
			var _ngnID = options.ngnID;

			switch (_ngntype) {
				case 'sensors':
				case 'actuators':
					break;

				default:
					throw "ngntype is wrong.";
			}

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/info
			var _url = "/ngn/" + _ngntype + "/" + _ngnID + "/info";

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Get engine options
   * 
   * @param {object} options - Options
   * @param {object} options.ngntype - Engine type. ('sensors', 'actuators')
   * @param {string} options.ngnID - engine ID
   * 
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "get_EngineOptions",
		value: function get_EngineOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.ngntype === undefined) {
				throw "ngntype is required";
			}
			var _ngntype = options.ngntype;

			if (options.ngnID === undefined) {
				throw "ngnID is required";
			}
			var _ngnID = options.ngnID;

			switch (_ngntype) {
				case 'sensors':
				case 'actuators':
					break;

				default:
					throw "ngntype is wrong.";
			}

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
			var _url = "/ngn/" + _ngntype + "/" + _ngnID + "/options";

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Set engine options
   * 
   * @param {object} options - Options
   * @param {object} options.ngntype - Engine type. ('sensors', 'actuators')
   * @param {string} options.ngnID - engine ID
   * @param {object} options.ngnOptions - engine options
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "set_EngineOptions",
		value: function set_EngineOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.ngntype === undefined) {
				throw "ngntype is required";
			}
			var _ngntype = options.ngntype;

			if (options.ngnID === undefined) {
				throw "ngnID is required";
			}
			var _ngnID = options.ngnID;

			if (options.ngnOptions === undefined) {
				throw "ngnOptions is required";
			}
			var _ngnOptions = options.ngnOptions;

			switch (_ngntype) {
				case 'sensors':
				case 'actuators':
					break;

				default:
					throw "ngntype is wrong.";
			}

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
			var _url = "/ngn/" + _ngntype + "/" + _ngnID + "/options";

			var _postData = {
				'options': _ngnOptions
			};

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "POST",
					"data": JSON.stringify(_postData),
					"dataType": "json",
					"contentType": "application/json; charset=utf-8",

					"options": options
				}
			});
		}

		/**
   * Control engine
   * 
   * @param {object} options - Options
   * @param {object} options.ngntype - Engine type. ('sensors', 'actuators')
   * @param {string} options.ngnID - engine ID
   * @param {object} options.ctrlCommand - Control command ('start' or 'stop')
   * 
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "control_Engine",
		value: function control_Engine(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.ngntype === undefined) {
				throw "ngntype is required";
			}
			var _ngntype = options.ngntype;

			if (options.ngnID === undefined) {
				throw "ngnID is required";
			}
			var _ngnID = options.ngnID;

			if (options.ctrlCommand === undefined) {
				throw "ctrlCommand is required";
			}
			var _ctrlCommand = options.ctrlCommand;

			switch (_ngntype) {
				case 'sensors':
				case 'actuators':
					break;

				default:
					throw "ngntype is wrong.";
			}

			switch (_ctrlCommand) {
				case 'start':
				case 'stop':
					break;

				default:
					throw "ctrlCommand is wrong.";
			}

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/start
			var _url = "/ngn/" + _ngntype + "/" + _ngnID + "/" + _ctrlCommand;

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}
	}]);

	return SCS_Requests_forEngines;
}();

/**
 * @memberof st.forbrowser.engines
 * 
 * @returns {st.forbrowser.engines.SCS_Requests_forEngines}
 */


function get_SCS_Requests() {
	return new SCS_Requests_forEngines();
}

var _lib = {
	"SCS_Requests_forEngines": SCS_Requests_forEngines,
	"get_SCS_Requests": get_SCS_Requests,

	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};

module.exports = _lib;


},{}],3:[function(require,module,exports){
"use strict";

/**
 * <pre>
 * Engines module for...
 * 
 * SomeThings library for browser
 * </pre>
 * 
 * @namespace st.forbrowser.engines
 * @memberof st.forbrowser
 */

/**
 * import SCS Engines
 * @ignore
 */

var SCS_Engines_Lib = require('./scs_engines.js');

/**
 * import Engines manager
 * @ignore
 */
var NGN_Manager_Lib = require('./ngn_manager.js');

var _lib = {
  "SCS_Requests_forEngines": SCS_Engines_Lib.SCS_Requests_forEngines,
  "get_SCS_Requests": SCS_Engines_Lib.get_SCS_Requests,

  "_public": {
    "get_SCS_Requests": SCS_Engines_Lib._public.get_SCS_Requests,
    "get_Engines_Manager": NGN_Manager_Lib._public.get_Engines_Manager
  }
};

module.exports = _lib;


},{"./ngn_manager.js":1,"./scs_engines.js":2}],4:[function(require,module,exports){
"use strict";

/**
 * AJAX Get method based on jQuery
 * 
 * @function
 * @memberof st.forbrowser.network
 * 
 * 
 * @param {object} options - Options object
 * @param {string} options.url - URL
 * @param {object} options.data - data	
 * @param {string} options.type - GET or POST
 * @param {string} options.dataType - Response type (json/text/html...)
 * @param {function} [options._onSuccess] - Function to run on success
 * @param {function} [options._onError] - Function to run on error
 * @param {function} [options._onComplete] - Function to run on complete
 * 
 * 
 */

function jQuery_ajax(options) {

	jQuery.ajax({
		// URL for request
		url: options.url,

		// Data for send on request
		data: options.data,

		// type of request POST | GET
		type: options.type,

		// response type
		dataType: options.dataType,

		// Allow crossdomain
		crossDomain: true,

		// Content type
		contentType: options.contentType,

		// Asynchronous
		async: true,

		// on success
		success: function success(json) {

			if (options._onSuccess !== undefined) {
				options._onSuccess(json);
			}
		},

		// on error
		error: function error(xhr, status) {

			if (options._onError !== undefined) {
				options._onError({
					"xhr": xhr,
					"status": status
				});
			}
		},

		// on complete
		complete: function complete(xhr, status) {

			if (options._onComplete !== undefined) {
				options._onComplete({
					"xhr": xhr,
					"status": status
				});
			}
		}
	});
}

var _lib = {

	"jQuery_ajax": jQuery_ajax,

	"_public": {
		"jQuery_ajax": jQuery_ajax
	}
};

module.exports = _lib;


},{}],5:[function(require,module,exports){
"use strict";

/**
 * SCS Request for Network 
 * 
 * @class
 * @memberof st.forbrowser.network
 * @protected
 * 
 * 
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCS_Requests_forNet = function () {

	/**
  * @constructs SCS_Requests_forNet
  */

	function SCS_Requests_forNet() {
		_classCallCheck(this, SCS_Requests_forNet);
	}

	/**
  * Get Data channels list
  * 
  * @param {object} options - Options
  * @param {string} options.netContext - Should be "server" or "nodes"
  * 
  * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
  * @param {function} [options._onSuccess] - Function to run on success
  * @param {function} [options._onError] - Function to run on error
  * @param {function} [options._onComplete] - Function to run on complete
  * 
  * 
  * 
  * @throws Exception
  * 
  * @returns {Promise}
  */


	_createClass(SCS_Requests_forNet, [{
		key: "get_DCList",
		value: function get_DCList(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			switch (_netContext) {
				case 'server':
				case 'nodes':

					break;

				default:
					throw "netContext is wrong.";
				//			break;
			}

			// http://{{stServer}}:{{cc}}/Net/Nodes/List
			var _url = "/Net/" + _netContext + "/List";

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Create Data channel
   * 
   * @param {object} options - Options
   * @param {string} options.nodeID - ID of the Node when DC is created (only required for netContext='nodes')
   * @param {string} options.channelID - ID for the new channel
   * @param {string} options.mode - The operation mode of DC. Could be 'in' or 'out'
   * @param {string} options.netContext - Should be "server" or "nodes"
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "create_DC",
		value: function create_DC(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.channelID === undefined) {
				throw "channelID is required";
			}
			var _channelID = options.channelID;

			if (options.mode === undefined) {
				throw "mode is required";
			}
			var _mode = options.mode;

			switch (_mode) {
				case 'in':
				case 'out':
					break;

				default:
					throw "mode is wrong.";
			}

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			var _url = null;

			switch (_netContext) {

				case 'server':
					// Server context

					// http://{{stServer}}:{{cc}}/Net/Server/create/{{channelID}}/out
					_url = "/Net/" + _netContext + "/create/" + _channelID + "/" + _mode;
					break;

				case 'nodes':
					// Nodes context

					if (options.nodeID === undefined) {
						throw "nodeID is required";
					}
					var _nodeID = options.nodeID;

					// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/create/{{channelID}}/in
					_url = "/Net/" + _netContext + "/" + _nodeID + "/create/" + _channelID + "/" + _mode;
					break;

				default:
					throw "netContext is wrong.";
				//			break;

			}

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Delete Data channel
   * 
   * @param {object} options - Options
   * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
   * @param {string} options.channelID - ID of channel to be deleted
   * @param {string} options.netContext - Should be "server" or "nodes"
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "delete_DC",
		value: function delete_DC(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.channelID === undefined) {
				throw "channelID is required";
			}
			var _channelID = options.channelID;

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			var _url = null;

			switch (_netContext) {

				case 'server':
					// http://{{stServer}}:{{cc}}/Net/Server/delete/{{channelID}}
					_url = "/Net/" + _netContext + "/delete/" + _channelID;
					break;

				case 'nodes':

					if (options.nodeID === undefined) {
						throw "nodeID is required";
					}
					var _nodeID = options.nodeID;

					// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/delete/{{channelID}}
					_url = "/Net/" + _netContext + "/" + _nodeID + "/delete/" + _channelID;
					break;

				default:
					throw "netContext is wrong.";
				//			break;

			}

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Get Data channel options
   * 
   * @param {object} options - Options
   * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
   * @param {string} options.channelID - ID of channel to be deleted
   * @param {string} options.netContext - Should be "server" or "nodes"
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "get_DCoptions",
		value: function get_DCoptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.channelID === undefined) {
				throw "channelID is required";
			}
			var _channelID = options.channelID;

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			var _url = null;

			switch (_netContext) {

				case 'server':
					// http://{{stServer}}:{{cc}}/Net/Server/options/{{channelID}}
					_url = "/Net/" + _netContext + "/options/" + _channelID;
					break;

				case 'nodes':

					if (options.nodeID === undefined) {
						throw "nodeID is required";
					}
					var _nodeID = options.nodeID;

					// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/options/{{channelID}}
					_url = "/Net/" + _netContext + "/" + _nodeID + "/options/" + _channelID;
					break;

				default:
					throw "netContext is wrong.";
				//			break;

			}

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Set Data channel options
   * 
   * @param {object} options - Options
   * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
   * @param {string} options.channelID - ID of channel to be deleted
   * @param {string} options.netContext - Should be "server" or "nodes"
   * @param {object} options.dcOptions - Data channel options
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "set_DCoptions",
		value: function set_DCoptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.channelID === undefined) {
				throw "channelID is required";
			}
			var _channelID = options.channelID;

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			if (options.dcOptions === undefined) {
				throw "dcOptions is required";
			}
			var _dcOptions = options.dcOptions;

			var _url = null;

			switch (_netContext) {

				case 'server':
					// http://{{stServer}}:{{cc}}/Net/Server/options/{{channelID}}
					_url = "/Net/" + _netContext + "/options/" + _channelID;
					break;

				case 'nodes':

					if (options.nodeID === undefined) {
						throw "nodeID is required";
					}
					var _nodeID = options.nodeID;

					// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/options/{{channelID}}
					_url = "/Net/" + _netContext + "/" + _nodeID + "/options/" + _channelID;
					break;

				default:
					throw "netContext is wrong.";
				//			break;

			}

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "POST",
					"data": _dcOptions,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Control Data channel
   * 
   * @param {object} options - Options
   * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
   * @param {string} options.channelID - ID of channel to be deleted
   * @param {string} options.netContext - Should be "server" or "nodes"
   * @param {string} options.ctrlCommand - Control command ('init', 'close', 'start' or 'stop')
   * 
   * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * 
   * @throws Exception
   * 
   * @returns {Promise}
   */

	}, {
		key: "control_DC",
		value: function control_DC(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			if (options.channelID === undefined) {
				throw "channelID is required";
			}
			var _channelID = options.channelID;

			if (options.netContext === undefined) {
				throw "netContext is required";
			}
			var _netContext = options.netContext;

			if (options.ctrlCommand === undefined) {
				throw "ctrlCommand is required";
			}
			var _ctrlCommand = options.ctrlCommand;

			switch (_ctrlCommand) {
				case 'init':
				case 'close':
				case 'start':
				case 'stop':
					break;

				default:
					throw "crlCommand is wrong.";
			}

			var _url = null;

			switch (_netContext) {

				case 'server':
					// http://{{stServer}}:{{cc}}/Net/Server/control/{{channelID}}/init
					_url = "/Net/" + _netContext + "/control/" + _channelID + "/" + _ctrlCommand;
					break;

				case 'nodes':

					if (options.nodeID === undefined) {
						throw "nodeID is required";
					}
					var _nodeID = options.nodeID;

					// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/control/{{channelID}}/init
					_url = "/Net/" + _netContext + "/" + _nodeID + "/control/" + _channelID + "/" + _ctrlCommand;
					break;

				default:
					throw "netContext is wrong.";
				//			break;

			}

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": _url,
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}
	}]);

	return SCS_Requests_forNet;
}();

/**
 * @memberof st.forbrowser.network
 * 
 * @returns {st.forbrowser.network.SCS_Requests_forNet}
 */


function get_SCS_Requests() {
	return new SCS_Requests_forNet();
}

var _lib = {
	"SCS_Requests_forNet": SCS_Requests_forNet,
	"get_SCS_Requests": get_SCS_Requests,

	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};

module.exports = _lib;


},{}],6:[function(require,module,exports){
"use strict";

/**
 * Network module for...
 * 
 * SomeThings library for browser
 * 
 * @namespace st.forbrowser.network
 * @memberof st.forbrowser
 */

/**
 * Import jQuery_ajax
 * 
 * @ignore
 */

var _jQuery_ajax = require("./jQuery_ajax.js").jQuery_ajax;

/**
 * import SCS for Network
 * @ignore
 */
var _SCS_Network_Lib = require('./scs_network.js');

var _lib = {

  "jQuery_ajax": _jQuery_ajax,

  "_public": {
    "jQuery_ajax": _jQuery_ajax,
    "get_SCS_Requests": _SCS_Network_Lib._public.get_SCS_Requests
  }
};

module.exports = _lib;


},{"./jQuery_ajax.js":4,"./scs_network.js":5}],7:[function(require,module,exports){
"use strict";

/**
 * Node module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

/**
 * The Node_Config object.
 * 
 * @typedef {Object} Node_Config
 * @memberof st.forbrowser.nodes
 * @type Object
 * @protected
 * 
 * @property {string} id - Name
 * @property {string} type - Type
 * 
 */

/**
 * Node
 * 
 * @class
 * @protected
 * @memberof st.forbrowser.nodes
 * 
 * @property {st.forbrowser.Node_Config} config - Configuration
 * 
 */

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node =

/**
 * @constructs Node
 * 
 * @param {object} options - Options object
 * @param {st.forbrowser.nodes.Node_Config} options.config - Configuration
 */
function Node(options) {
	_classCallCheck(this, Node);

	if (options === undefined || options === null) {
		options = {};
	}

	var node = this;
	node.config = null;

	if (options.config !== undefined) {
		node.config = options.config;
	}
};

/**
 * Node reference
 * 
 * @class
 * @protected
 * @memberof st.forbrowser.nodes
 * @implements st.forbrowser.nodes.Node
 * 
 */


var Node_Ref = function (_Node) {
	_inherits(Node_Ref, _Node);

	/**
  * @constructs Node_Ref
  */

	function Node_Ref(options) {
		_classCallCheck(this, Node_Ref);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Node_Ref).call(this, options));
	}

	return Node_Ref;
}(Node);

/**
 * @memberof st.forbrowser.nodes
 * @param options
 * @returns {st.forbrowser.nodes.Node_Ref}
 */


function get_Node_Ref(options) {

	return new Node_Ref(options);
}

var _lib = {
	"Node": Node,
	"Node_Ref": Node_Ref,
	"get_Node_Ref": get_Node_Ref,

	"_public": {
		"get_Node_Ref": get_Node_Ref
	}
};

module.exports = _lib;


},{}],8:[function(require,module,exports){
"use strict";

/**
 * SCS Request for nodes 
 * 
 * @class
 * @memberof st.forbrowser.nodes
 * @protected
 * 
 * 
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCS_Requests_forNodes = function () {

	/**
  * @constructs SCS_Requests_forNodes
  */

	function SCS_Requests_forNodes() {
		_classCallCheck(this, SCS_Requests_forNodes);
	}

	/**
  * Get nodes list
  * 
  * @param {object} options - Options
  * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
  * @param {function} [options._onSuccess] - Function to run on success
  * @param {function} [options._onError] - Function to run on error
  * @param {function} [options._onComplete] - Function to run on complete
  * 
  * @throws Exception
  * 
  * @returns {Promise}
  */


	_createClass(SCS_Requests_forNodes, [{
		key: "get_NodesList",
		value: function get_NodesList(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			var _scsClient = null;
			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			_scsClient = options.scsClient;

			return _scsClient.exec_SCS_Request({
				"scsRequest": {
					"url": "/Nodes/List",
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}
	}]);

	return SCS_Requests_forNodes;
}();

/**
 * @memberof st.forbrowser.nodes 
 * 
 * @returns {st.forbrowser.nodes.SCS_Requests_forNodes}
 */


function get_SCS_Requests() {
	return new SCS_Requests_forNodes();
}

var _lib = {
	"SCS_Requests_forNodes": SCS_Requests_forNodes,
	"get_SCS_Requests": get_SCS_Requests,

	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};

module.exports = _lib;


},{}],9:[function(require,module,exports){
"use strict";

/**
 * <pre>
 * Nodes module for...
 * 
 * SomeThings library for browser
 * </pre>
 * 
 * @namespace st.forbrowser.nodes
 * @memberof st.forbrowser
 */

/**
 * import Node library
 * @ignore
 */

var _Node_Lib = require('./node.js');

/**
 * import SCS for Nodes
 * @ignore
 */
var SCS_Nodes_Lib = require('./scs_nodes.js');

var _lib = {

  "_public": {
    "get_Node_Ref": _Node_Lib._public.get_Node_Ref,
    "get_SCS_Requests": SCS_Nodes_Lib.get_SCS_Requests
  }
};

module.exports = _lib;


},{"./node.js":7,"./scs_nodes.js":8}],10:[function(require,module,exports){
"use strict";

/**
 * Server module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

/**
 * The Server_Config object.
 * 
 * @typedef {Object} Server_Config
 * @memberof st.forbrowser.server
 * @type Object
 * @protected
 * 
 * @property {string} type - Type
 * 
 * @property {object} scs - scs configuration
 * @property {string} scs.netLocation - Net location
 * @property {number} scs.controlPort - Control port
 */

/**
 * Get Server configuration
 * 
 * @memberof st.forbrowser.server
 * @public
 * 
 * @param {object} options - Options object
 * @param {st.forbrowser.server.Server_Config} options.config - Configuration
 * 
 * @throws Exceptions
 * 
 * @returns {st.forbrowser.server.Server_Config}
 */

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function get_Server_Config(options) {

	if (options === undefined || options === null) {
		options = {};
	}

	if (options.config === undefined) {
		throw "Config option is required";
	}

	if (options.config === undefined) {
		throw "config option is required";
	}

	var serverConfig = {
		"type": "STServer",
		"scs": {
			"netLocation": null,
			"controlPort": null
		}
	};

	var _config = options.config;

	if (_config.scs === undefined) {
		throw "scs option is required";
	}

	if (_config.scs.netLocation === undefined) {
		throw "scs.netLocation option is required";
	}

	if (_config.scs.controlPort === undefined) {
		throw "scs.controlPort option is required";
	}

	serverConfig.scs.netLocation = _config.scs.netLocation;
	serverConfig.scs.controlPort = _config.scs.controlPort;

	return serverConfig;
}

/**
 * Server
 * 
 * @class
 * @memberof st.forbrowser.server
 * @protected
 * 
 * @property {st.forbrowser.server.Server_Config} config - Configuration
 * 
 */

var Server =

/**
 * @constructs Server
 * 
 * @param {object} [options] - Options object
 * @param {st.forbrowser.server.Server_Config} [options.config] - Configuration
 */
function Server(options) {
	_classCallCheck(this, Server);

	if (options === undefined || options === null) {
		options = {};
	}

	var server = this;
	server.config = null;

	if (options.config !== undefined) {
		server.config = options.config;
	}
};

/**
 * Server_Ref
 * 
 * <pre>
 * Reference to a server
 * </pre>
 * 
 * 
 * @class
 * @memberof st.forbrowser.server
 * @implements st.forbrowser.server.Server
 * @protected
 * 
 */


var Server_Ref = function (_Server) {
	_inherits(Server_Ref, _Server);

	/**
  * @constructs Server_Ref
  */

	function Server_Ref(options) {
		_classCallCheck(this, Server_Ref);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Server_Ref).call(this, options));
	}

	return Server_Ref;
}(Server);

var _lib = {
	"get_Server_Config": get_Server_Config,
	"Server": Server,
	"Server_Ref": Server_Ref,

	"_public": {
		"get_Server_Config": get_Server_Config
	}

};

module.exports = _lib;


},{}],11:[function(require,module,exports){
"use strict";

/**
 * <pre>
 * Server module for...
 * 
 * SomeThings library for browser
 * </pre>
 * 
 * @namespace st.forbrowser.server
 * @memberof st.forbrowser
 */

/**
 * import Node library
 * @ignore
 */

var _Server_Lib = require('./server.js');

var _lib = {

  "_public": {
    "get_Server_Config": _Server_Lib._public.get_Server_Config
  }
};

module.exports = _lib;


},{"./server.js":10}],12:[function(require,module,exports){
"use strict";

/**
 * Server control system module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

/**
 * 
 * @type Object
 * @memberof st.forbrowser.services
 * @protected
 * 
 * @property {object} Events - Events
 * @property {string} Events.Nodelist_Received - NodeList reveiced
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCS_Client_CONSTANTS = {

	"Events": {
		"Nodelist_Received": "NodeList reveiced"
	}

};

/**
 * Server control system reference
 * 
 * @typedef {Object} SCS_Ref
 * @memberof st.forbrowser.services
 * @type Object
 * @protected
 * 
 * @property {string} netLocation - Net location
 * @property {number} controlPort - Control port
 */

/**
 * Server control system request
 * 
 * @typedef {Object} SCS_Request
 * @memberof st.forbrowser.services
 * @type Object
 * @protected
 * 
 * @property {string} url - URL of the request
 * @property {string} type - Type of the request (GET|POST)
 * @property {object} data - data
 * @property {string} dataType - Response type
 * 
 * @property {object} options - Options
 * @property {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
 * 
 * @property {function} [options._onSuccess] - Function to run on success
 * @property {function} [options._onError] - Function to run on error
 * @property {function} [options._onComplete] - Function to run on complete
 * 
 * 
 */

/**
 * Execute SCS Request
 * 
 * @memberof st.forbrowser.services
 * @protected
 * 
 * @param {object} options - Options
 * @param {st.forbrowser.services.SCS_Request} options.scsRequest - SCS Request
 * 
 * @returns {Promise}
 */
function exec_SCSRequest(options) {

	if (options === undefined || options === null) {
		options = {};
	}

	var _scsRequest = null;
	if (options.scsRequest === undefined) {
		throw "options.scsRequest is required";
	}
	_scsRequest = options.scsRequest;

	if (_scsRequest.options === undefined) {
		throw "scsRequest.options is required";
	}
	var _reqOptions = _scsRequest.options;

	var _scsClient = null;
	if (_reqOptions.scsClient === undefined) {
		throw "scsRequest.options.scsClient is required";
	}
	_scsClient = _reqOptions.scsClient;

	var _scsRef = _scsClient.scsRef;
	var _url = "http://" + _scsRef.netLocation + ":" + _scsRef.controlPort + _scsRequest.url;

	// console.log("<~i~> exec_SCSRequest");	// TODO REMOVE DEBUG LOG
	// console.log(_scsRequest);	// TODO REMOVE DEBUG LOG
	// console.log(_scsRequest.options);	// TODO REMOVE DEBUG LOG

	var _jQuery_ajax = require('../network/stNetwork.js').jQuery_ajax;

	var promise = new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…
		// resolve or reject...

		_jQuery_ajax({
			// URL for request
			url: _url,

			// Data for send on request
			data: _scsRequest.data,

			// method of request POST | GET
			// type : _scsRequest.type,
			type: _scsRequest.type,

			// response type
			dataType: _scsRequest.dataType,

			// content type
			contentType: _scsRequest.contentType,

			// on success
			_onSuccess: function _onSuccess(data) {

				// console.log("<~i~> exec_SCSRequest._onSuccess");	// TODO REMOVE DEBUG LOG
				// console.log(data);	// TODO REMOVE DEBUG LOG

				if (_reqOptions._onSuccess !== undefined) {
					_reqOptions._onSuccess(data);
				}

				resolve(data);
			},

			// on error
			_onError: function _onError(data) {

				// console.log("<~i~> exec_SCSRequest._onError");	// TODO REMOVE DEBUG LOG
				// console.log(data);	// TODO REMOVE DEBUG LOG

				if (_reqOptions._onError !== undefined) {
					_reqOptions._onError(data);
				}

				reject(Error("It broke"));
			},

			// on complete
			_onComplete: function _onComplete(data) {

				// console.log("<~i~> exec_SCSRequest._onComplete");	// TODO REMOVE DEBUG LOG
				// console.log(data);	// TODO REMOVE DEBUG LOG

				if (_reqOptions._onComplete !== undefined) {
					_reqOptions._onComplete(data);
				}
			}

		});
	});

	return promise;
}

/**
 * Server control system client
 * 
 * @class
 * @memberof st.forbrowser.services
 * @protected
 * 
 * 
 * @property {st.forbrowser.services.SCS_Ref} scsRef - SCS reference
 * 
 */

var SCS_Client = function () {

	/**
  * @constructs SCS_Client
  * 
  * @param {object} options - options
  * @param {object} options.config - Configuration object
  * @param {st.forbrowser.services.SCS_Ref} options.config.scs - scs configuration
  * 
  * @throws Exception
  * 
  */

	function SCS_Client(options) {
		_classCallCheck(this, SCS_Client);

		if (options === undefined || options === null) {
			options = {};
		}

		var scsClient = this;
		scsClient.scsRef = null;
		scsClient.CONSTANTS = SCS_Client_CONSTANTS;

		if (options.config === undefined) {
			throw "config parameter is required";
		}

		var _config = options.config;

		if (_config.scs === undefined) {
			throw "config.scs parameter is required";
		}

		scsClient.scsRef = _config.scs;
	}

	/**
  * Execute a SCS Request
  * 
  * @param {object} options - Options
  * @param {st.forbrowser.services.SCS_Request} options.scsRequest - SCS Request
  * 
  * @throws Exception
  * 
  * @returns Promise
  */


	_createClass(SCS_Client, [{
		key: "exec_SCS_Request",
		value: function exec_SCS_Request(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			var scsClient = this;

			var _scsRequest = null;
			if (options.scsRequest === undefined) {
				throw "scsRequest parameter is required";
			}
			_scsRequest = options.scsRequest;

			if (_scsRequest.options.scsClient === undefined) {
				_scsRequest.options.scsClient = scsClient;
			}

			return exec_SCSRequest(options);
		}

		/**
   * Get node list
   * 
   * @param {object} options - Options
   * @param {st.forbrowser.services.SCS_Client} [options.scs_Client] - SCS_Client
   * @param {function} [options._onSuccess] - Function to run on success
   * @param {function} [options._onError] - Function to run on error
   * @param {function} [options._onComplete] - Function to run on complete
   * 
   * @returns {Promise}
   */

	}, {
		key: "get_NodeList",
		value: function get_NodeList(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			var scsClient = this;
			if (options.scs_Client !== undefined) {
				scsClient = options.scs_Client;
			}

			var scsRef = scsClient.scsRef;

			var _url = "http://" + scsRef.netLocation + ":" + scsRef.controlPort + "/Nodes/List";

			// Import jQuery_ajax
			var jQuery_ajax = require('../network/stNetwork.js').jQuery_ajax;

			var promise = new Promise(function (resolve, reject) {
				// do a thing, possibly async, then…
				// resolve or reject...

				jQuery_ajax({
					// URL for request
					url: _url,

					// Data for send on request
					data: { id: 123 },

					// type of request POST | GET
					type: 'GET',

					// response type
					dataType: 'json',

					// on success
					_onSuccess: function _onSuccess(data) {

						// Emit event Nodelist_Received
						//			    	let event = new Event(scsClient.CONSTANTS.Events.Nodelist_Received,
						//			    			{
						//			    				"data": data
						//			    			});
						//			    	
						//			    	scsClient.dispatchEvent(event);

						console.log("<~i~> SCS_Client.get_NodeList._onSuccess"); // TODO REMOVE DEBUG LOG
						console.log(data); // TODO REMOVE DEBUG LOG

						if (options._onSuccess !== undefined) {
							options._onSuccess(data);
						}

						resolve(data);
					},

					// on error
					_onError: function _onError(data) {

						console.log("<~i~> SCS_Client.get_NodeList._onError"); // TODO REMOVE DEBUG LOG
						console.log(data); // TODO REMOVE DEBUG LOG

						if (options._onError !== undefined) {
							options._onError(data);
						}

						reject(Error("It broke"));
					},

					// on complete
					_onComplete: function _onComplete(data) {

						console.log("<~i~> SCS_Client.get_NodeList._onComplete"); // TODO REMOVE DEBUG LOG
						console.log(data); // TODO REMOVE DEBUG LOG

						if (options._onComplete !== undefined) {
							options._onComplete(data);
						}
					}

				});
			});

			return promise;
		}
	}]);

	return SCS_Client;
}();

/**
 * Get a new SCS_Client
 * 
 * @memberof st.forbrowser.services
 * 
 * @param {object} options - Options
 * @param {st.forbrowser.services.SCS_Ref} options.scs - SCS reference
 * 
 * @throws {Exception}
 * 
 * @returns {st.forbrowser.services.SCS_Client}
 */


function get_SCS_Client(options) {

	if (options === undefined || options === null) {
		options = {};
	}

	if (options.scs === undefined) {
		throw "scs is required";
	}

	var scsClient = null;

	try {
		scsClient = new SCS_Client({
			"config": {
				"scs": options.scs
			}
		});
	} catch (e) {
		// TODO: handle exception
		throw "Cannot create SCS_Client. " + e;
	}

	return scsClient;
}

var _lib = {

	"SCS_Client": SCS_Client,
	"get_SCS_Client": get_SCS_Client,
	"exec_SCSRequest": exec_SCSRequest,

	"_public": {
		"get_SCS_Client": get_SCS_Client
	}
};

module.exports = _lib;


},{"../network/stNetwork.js":6}],13:[function(require,module,exports){
"use strict";

/**
 * Services module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */

/**
 * 
 * SomeThings library for browser
 * 
 * @namespace st.forbrowser.services
 * @memberof st
 * 
 */

/**
 * import SCS Client library
 * @ignore
 */

var SCS_Client_Lib = require('./SCS_Client.js');

var _lib = {
  "SCS_Client": SCS_Client_Lib.SCS_Client,

  "_public": {
    "get_SCS_Client": SCS_Client_Lib._public.get_SCS_Client
  }

};

module.exports = _lib;


},{"./SCS_Client.js":12}],14:[function(require,module,exports){
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

/**
 * import Nodes library
 * @ignore
 */

var Nodes_Lib = require('./nodes/st_nodes.js');

/**
 * import Server library
 * @ignore
 */
var Server_Lib = require('./server/st_server.js');

/**
 * import Services library
 * @ignore
 */
var Services_Lib = require('./services/stServices.js');

/**
 * import Engines library
 * @ignore
 */
var Engines_Lib = require('./engines/stEngines.js');

/**
 * import Network library
 * @ignore
 */
var Network_Lib = require('./network/stNetwork.js');

var st = {};
st.forbrowser = {

  "nodes": Nodes_Lib._public,
  "server": Server_Lib._public,
  "services": Services_Lib._public,
  "engines": Engines_Lib._public,
  "network": Network_Lib._public
};

//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;


},{"./engines/stEngines.js":3,"./network/stNetwork.js":6,"./nodes/st_nodes.js":9,"./server/st_server.js":11,"./services/stServices.js":13}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14])(14)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvZW5naW5lcy9uZ25fbWFuYWdlci5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9lbmdpbmVzL3Njc19lbmdpbmVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL2VuZ2luZXMvc3RFbmdpbmVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25ldHdvcmsvalF1ZXJ5X2FqYXguanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbmV0d29yay9zY3NfbmV0d29yay5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9uZXR3b3JrL3N0TmV0d29yay5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9ub2Rlcy9ub2RlLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25vZGVzL3Njc19ub2Rlcy5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9ub2Rlcy9zdF9ub2Rlcy5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2ZXIvc2VydmVyLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3NlcnZlci9zdF9zZXJ2ZXIuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc2VydmljZXMvU0NTX0NsaWVudC5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2aWNlcy9zdFNlcnZpY2VzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3N0Zm9yQnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBFbmdpbmUgcmVmZXJlbmNlXHJcbiAqIFxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFbmdpbmVfUmVmXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2Vuc29ySURdIC0gU2Vuc29yIElEXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYWN0dWFvcklEXSAtIEFjdHVhdG9yIElEXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gRW5naW5lIHR5cGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9zeXNJRCAtIEVuZ2luZSBzeXNJRFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW5naW5lIC0gRW5naW5lIG5hbWUuIENvdWxkIGJlICdub3QgZGVmaW5lZCdcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0YXRlIC0gRW5naW5lIHN0YXRlLlxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBUaGUgcmVzdWx0IG9iamVjdC5cclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlYXJjaFJlc3VsdFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5lbmdpbmVzLkVuZ2luZXNfTWFuYWdlclxyXG4gKiBcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm9wZXJ0eSB7KHN0LmZvcmJyb3dzZXIuZW5naW5lcy5FbmdpbmVfUmVmfG51bGwpfSBlbmdpbmUgLSBUaGUgRW5naW5lIG9iamVjdCwgbWF5IGJlIG51bGwuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBpbiBsaXN0LlxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBFbmdpbmVzIG1hbmFnZXIgXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuZW5naW5lc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFbmdpbmVzX01hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBFbmdpbmVzX01hbmFnZXJcclxuICAqL1xuXG5cdGZ1bmN0aW9uIEVuZ2luZXNfTWFuYWdlcigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5naW5lc19NYW5hZ2VyKTtcblx0fVxuXG5cdC8qKlxyXG4gICogUmV0dXJucyBFbmdpbmUgc2VhcmNoZWQgYnkgSURcclxuICAqIFxyXG4gICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5lbmdpbmVJRCAtIEVuZ2luZSBJRFxyXG4gICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnR5cGVdIC0gdHlwZS4gQ291bGQgYmUgJ3NlbnNvcicgb3IgJ2FjdHVhdG9yJ1xyXG4gICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLmVuZ2luZXMuRW5naW5lX1JlZltdfSBvcHRpb25zLmxpc3QgLSBMaXN0IG9mIGVuZ2luZXNcclxuICAqIFxyXG4gICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuZW5naW5lcy5FbmdpbmVzX01hbmFnZXIuU2VhcmNoUmVzdWx0fSByZXN1bHQgLSBSZXN1bHQgb2JqZWN0XHJcbiAgKiAgXHJcbiAgKi9cblxuXG5cdF9jcmVhdGVDbGFzcyhFbmdpbmVzX01hbmFnZXIsIFt7XG5cdFx0a2V5OiAnZ2V0RW5naW5lQnlJRCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEVuZ2luZUJ5SUQob3B0aW9ucykge1xuXG5cdFx0XHR2YXIgX2VuZ2luZUlEID0gb3B0aW9ucy5lbmdpbmVJRDtcblx0XHRcdHZhciBfdHlwZSA9IG9wdGlvbnMudHlwZTtcblx0XHRcdHZhciBfbGlzdCA9IG9wdGlvbnMubGlzdDtcblxuXHRcdFx0dmFyIF9lbmdpbmUgPSBudWxsO1xuXHRcdFx0dmFyIF9pID0gMDtcblxuXHRcdFx0c3dpdGNoIChfdHlwZSkge1xuXHRcdFx0XHRjYXNlICdzZW5zb3InOlxuXHRcdFx0XHRcdF9pID0gX2xpc3QubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geC5zZW5zb3JJRDtcblx0XHRcdFx0XHR9KS5pbmRleE9mKF9lbmdpbmVJRCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYWN0dWF0b3InOlxuXHRcdFx0XHRcdF9pID0gX2xpc3QubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geC5hY3R1YXRvcklEO1xuXHRcdFx0XHRcdH0pLmluZGV4T2YoX2VuZ2luZUlEKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdF9pID0gX2xpc3QubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geC5fc3lzSUQ7XG5cdFx0XHRcdFx0fSkuaW5kZXhPZihfZW5naW5lSUQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2kgIT09IC0xKSB7XG5cdFx0XHRcdF9lbmdpbmUgPSBfbGlzdFtfaV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFwiZW5naW5lXCI6IF9lbmdpbmUsXG5cdFx0XHRcdFwicG9zaXRpb25cIjogX2lcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEVuZ2luZXNfTWFuYWdlcjtcbn0oKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLmVuZ2luZXMuRW5naW5lc19NYW5hZ2VyfVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfRW5naW5lc19NYW5hZ2VyKCkge1xuXHRyZXR1cm4gbmV3IEVuZ2luZXNfTWFuYWdlcigpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJFbmdpbmVzX01hbmFnZXJcIjogRW5naW5lc19NYW5hZ2VyLFxuXHRcImdldF9FbmdpbmVzX01hbmFnZXJcIjogZ2V0X0VuZ2luZXNfTWFuYWdlcixcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X0VuZ2luZXNfTWFuYWdlclwiOiBnZXRfRW5naW5lc19NYW5hZ2VyXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5nbl9tYW5hZ2VyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTQ1MgUmVxdWVzdCBmb3IgZW5naW5lcyBcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5lbmdpbmVzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIFxyXG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzID0gZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXNcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lcyk7XG5cdH1cblxuXHQvKipcclxuICAqIEdldCBsaXN0IG9mIGVuZ2luZXNcclxuICAqIFxyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5uZ250eXBlIC0gRW5naW5lIHR5cGUuICgnc2Vuc29ycycsICdhY3R1YXRvcnMnKVxyXG4gICogXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICogXHJcbiAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICogXHJcbiAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAqL1xuXG5cblx0X2NyZWF0ZUNsYXNzKFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzLCBbe1xuXHRcdGtleTogXCJnZXRfRW5naW5lc0xpc3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X0VuZ2luZXNMaXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdGlmIChvcHRpb25zLm5nbnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5nbnR5cGUgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmdudHlwZSA9IG9wdGlvbnMubmdudHlwZTtcblxuXHRcdFx0c3dpdGNoIChfbmdudHlwZSkge1xuXHRcdFx0XHRjYXNlICdzZW5zb3JzJzpcblx0XHRcdFx0Y2FzZSAnYWN0dWF0b3JzJzpcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IFwibmdudHlwZSBpcyB3cm9uZy5cIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vXCIgKyBfbmdudHlwZSArIFwiL2xpc3RcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogR2V0IEVuZ2luZSBpbmZvXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMubmdudHlwZSAtIEVuZ2luZSB0eXBlLiAoJ3NlbnNvcnMnLCAnYWN0dWF0b3JzJylcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uZ25JRCAtIGVuZ2luZSBJRFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcImdldF9FbmdpbmVJbmZvXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9FbmdpbmVJbmZvKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdGlmIChvcHRpb25zLm5nbnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5nbnR5cGUgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmdudHlwZSA9IG9wdGlvbnMubmdudHlwZTtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmduSUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5nbklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX25nbklEID0gb3B0aW9ucy5uZ25JRDtcblxuXHRcdFx0c3dpdGNoIChfbmdudHlwZSkge1xuXHRcdFx0XHRjYXNlICdzZW5zb3JzJzpcblx0XHRcdFx0Y2FzZSAnYWN0dWF0b3JzJzpcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IFwibmdudHlwZSBpcyB3cm9uZy5cIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vaW5mb1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vXCIgKyBfbmdudHlwZSArIFwiL1wiICsgX25nbklEICsgXCIvaW5mb1wiO1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcdFwiZGF0YVwiOiBudWxsLFxuXHRcdFx0XHRcdFwiZGF0YVR5cGVcIjogXCJqc29uXCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcclxuICAgKiBHZXQgZW5naW5lIG9wdGlvbnNcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5uZ250eXBlIC0gRW5naW5lIHR5cGUuICgnc2Vuc29ycycsICdhY3R1YXRvcnMnKVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5nbklEIC0gZW5naW5lIElEXHJcbiAgICogXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0X0VuZ2luZU9wdGlvbnNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X0VuZ2luZU9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmdudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmdudHlwZSBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZ250eXBlID0gb3B0aW9ucy5uZ250eXBlO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZ25JRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmduSUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmduSUQgPSBvcHRpb25zLm5nbklEO1xuXG5cdFx0XHRzd2l0Y2ggKF9uZ250eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3NlbnNvcnMnOlxuXHRcdFx0XHRjYXNlICdhY3R1YXRvcnMnOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZ250eXBlIGlzIHdyb25nLlwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vU2Vuc29ycy97e25vZGVJRH19Lnt7c2Vuc29ySUR9fS9vcHRpb25zXG5cdFx0XHR2YXIgX3VybCA9IFwiL25nbi9cIiArIF9uZ250eXBlICsgXCIvXCIgKyBfbmduSUQgKyBcIi9vcHRpb25zXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIFNldCBlbmdpbmUgb3B0aW9uc1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm5nbnR5cGUgLSBFbmdpbmUgdHlwZS4gKCdzZW5zb3JzJywgJ2FjdHVhdG9ycycpXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmduSUQgLSBlbmdpbmUgSURcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5uZ25PcHRpb25zIC0gZW5naW5lIG9wdGlvbnNcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJzZXRfRW5naW5lT3B0aW9uc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRfRW5naW5lT3B0aW9ucyhvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZ250eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJuZ250eXBlIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX25nbnR5cGUgPSBvcHRpb25zLm5nbnR5cGU7XG5cblx0XHRcdGlmIChvcHRpb25zLm5nbklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJuZ25JRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZ25JRCA9IG9wdGlvbnMubmduSUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLm5nbk9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5nbk9wdGlvbnMgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmduT3B0aW9ucyA9IG9wdGlvbnMubmduT3B0aW9ucztcblxuXHRcdFx0c3dpdGNoIChfbmdudHlwZSkge1xuXHRcdFx0XHRjYXNlICdzZW5zb3JzJzpcblx0XHRcdFx0Y2FzZSAnYWN0dWF0b3JzJzpcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IFwibmdudHlwZSBpcyB3cm9uZy5cIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vXCIgKyBfbmdudHlwZSArIFwiL1wiICsgX25nbklEICsgXCIvb3B0aW9uc1wiO1xuXG5cdFx0XHR2YXIgX3Bvc3REYXRhID0ge1xuXHRcdFx0XHQnb3B0aW9ucyc6IF9uZ25PcHRpb25zXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcImRhdGFcIjogSlNPTi5zdHJpbmdpZnkoX3Bvc3REYXRhKSxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXHRcdFx0XHRcdFwiY29udGVudFR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcclxuICAgKiBDb250cm9sIGVuZ2luZVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm5nbnR5cGUgLSBFbmdpbmUgdHlwZS4gKCdzZW5zb3JzJywgJ2FjdHVhdG9ycycpXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmduSUQgLSBlbmdpbmUgSURcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5jdHJsQ29tbWFuZCAtIENvbnRyb2wgY29tbWFuZCAoJ3N0YXJ0JyBvciAnc3RvcCcpXHJcbiAgICogXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiY29udHJvbF9FbmdpbmVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29udHJvbF9FbmdpbmUob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmdudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmdudHlwZSBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZ250eXBlID0gb3B0aW9ucy5uZ250eXBlO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZ25JRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmduSUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmduSUQgPSBvcHRpb25zLm5nbklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5jdHJsQ29tbWFuZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwiY3RybENvbW1hbmQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfY3RybENvbW1hbmQgPSBvcHRpb25zLmN0cmxDb21tYW5kO1xuXG5cdFx0XHRzd2l0Y2ggKF9uZ250eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3NlbnNvcnMnOlxuXHRcdFx0XHRjYXNlICdhY3R1YXRvcnMnOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZ250eXBlIGlzIHdyb25nLlwiO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKF9jdHJsQ29tbWFuZCkge1xuXHRcdFx0XHRjYXNlICdzdGFydCc6XG5cdFx0XHRcdGNhc2UgJ3N0b3AnOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJjdHJsQ29tbWFuZCBpcyB3cm9uZy5cIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vc3RhcnRcblx0XHRcdHZhciBfdXJsID0gXCIvbmduL1wiICsgX25nbnR5cGUgKyBcIi9cIiArIF9uZ25JRCArIFwiL1wiICsgX2N0cmxDb21tYW5kO1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcdFwiZGF0YVwiOiBudWxsLFxuXHRcdFx0XHRcdFwiZGF0YVR5cGVcIjogXCJqc29uXCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXM7XG59KCk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5lbmdpbmVzXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5lbmdpbmVzLlNDU19SZXF1ZXN0c19mb3JFbmdpbmVzfVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfU0NTX1JlcXVlc3RzKCkge1xuXHRyZXR1cm4gbmV3IFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzKCk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIlNDU19SZXF1ZXN0c19mb3JFbmdpbmVzXCI6IFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzLFxuXHRcImdldF9TQ1NfUmVxdWVzdHNcIjogZ2V0X1NDU19SZXF1ZXN0cyxcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjc19lbmdpbmVzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiA8cHJlPlxyXG4gKiBFbmdpbmVzIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3Nlci5lbmdpbmVzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqL1xuXG4vKipcclxuICogaW1wb3J0IFNDUyBFbmdpbmVzXHJcbiAqIEBpZ25vcmVcclxuICovXG5cbnZhciBTQ1NfRW5naW5lc19MaWIgPSByZXF1aXJlKCcuL3Njc19lbmdpbmVzLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgRW5naW5lcyBtYW5hZ2VyXHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgTkdOX01hbmFnZXJfTGliID0gcmVxdWlyZSgnLi9uZ25fbWFuYWdlci5qcycpO1xuXG52YXIgX2xpYiA9IHtcbiAgXCJTQ1NfUmVxdWVzdHNfZm9yRW5naW5lc1wiOiBTQ1NfRW5naW5lc19MaWIuU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMsXG4gIFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBTQ1NfRW5naW5lc19MaWIuZ2V0X1NDU19SZXF1ZXN0cyxcblxuICBcIl9wdWJsaWNcIjoge1xuICAgIFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBTQ1NfRW5naW5lc19MaWIuX3B1YmxpYy5nZXRfU0NTX1JlcXVlc3RzLFxuICAgIFwiZ2V0X0VuZ2luZXNfTWFuYWdlclwiOiBOR05fTWFuYWdlcl9MaWIuX3B1YmxpYy5nZXRfRW5naW5lc19NYW5hZ2VyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0RW5naW5lcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogQUpBWCBHZXQgbWV0aG9kIGJhc2VkIG9uIGpRdWVyeVxyXG4gKiBcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5ldHdvcmtcclxuICogXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVybCAtIFVSTFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5kYXRhIC0gZGF0YVx0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR5cGUgLSBHRVQgb3IgUE9TVFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kYXRhVHlwZSAtIFJlc3BvbnNlIHR5cGUgKGpzb24vdGV4dC9odG1sLi4uKVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICogXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24galF1ZXJ5X2FqYXgob3B0aW9ucykge1xuXG5cdGpRdWVyeS5hamF4KHtcblx0XHQvLyBVUkwgZm9yIHJlcXVlc3Rcblx0XHR1cmw6IG9wdGlvbnMudXJsLFxuXG5cdFx0Ly8gRGF0YSBmb3Igc2VuZCBvbiByZXF1ZXN0XG5cdFx0ZGF0YTogb3B0aW9ucy5kYXRhLFxuXG5cdFx0Ly8gdHlwZSBvZiByZXF1ZXN0IFBPU1QgfCBHRVRcblx0XHR0eXBlOiBvcHRpb25zLnR5cGUsXG5cblx0XHQvLyByZXNwb25zZSB0eXBlXG5cdFx0ZGF0YVR5cGU6IG9wdGlvbnMuZGF0YVR5cGUsXG5cblx0XHQvLyBBbGxvdyBjcm9zc2RvbWFpblxuXHRcdGNyb3NzRG9tYWluOiB0cnVlLFxuXG5cdFx0Ly8gQ29udGVudCB0eXBlXG5cdFx0Y29udGVudFR5cGU6IG9wdGlvbnMuY29udGVudFR5cGUsXG5cblx0XHQvLyBBc3luY2hyb25vdXNcblx0XHRhc3luYzogdHJ1ZSxcblxuXHRcdC8vIG9uIHN1Y2Nlc3Ncblx0XHRzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGpzb24pIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuX29uU3VjY2VzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG9wdGlvbnMuX29uU3VjY2Vzcyhqc29uKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gb24gZXJyb3Jcblx0XHRlcnJvcjogZnVuY3Rpb24gZXJyb3IoeGhyLCBzdGF0dXMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuX29uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRvcHRpb25zLl9vbkVycm9yKHtcblx0XHRcdFx0XHRcInhoclwiOiB4aHIsXG5cdFx0XHRcdFx0XCJzdGF0dXNcIjogc3RhdHVzXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBvbiBjb21wbGV0ZVxuXHRcdGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh4aHIsIHN0YXR1cykge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5fb25Db21wbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG9wdGlvbnMuX29uQ29tcGxldGUoe1xuXHRcdFx0XHRcdFwieGhyXCI6IHhocixcblx0XHRcdFx0XHRcInN0YXR1c1wiOiBzdGF0dXNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxudmFyIF9saWIgPSB7XG5cblx0XCJqUXVlcnlfYWpheFwiOiBqUXVlcnlfYWpheCxcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwialF1ZXJ5X2FqYXhcIjogalF1ZXJ5X2FqYXhcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9alF1ZXJ5X2FqYXguanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNDUyBSZXF1ZXN0IGZvciBOZXR3b3JrIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5ldHdvcmtcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX1JlcXVlc3RzX2Zvck5ldCA9IGZ1bmN0aW9uICgpIHtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIFNDU19SZXF1ZXN0c19mb3JOZXRcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNDU19SZXF1ZXN0c19mb3JOZXQoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNDU19SZXF1ZXN0c19mb3JOZXQpO1xuXHR9XG5cblx0LyoqXHJcbiAgKiBHZXQgRGF0YSBjaGFubmVscyBsaXN0XHJcbiAgKiBcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmV0Q29udGV4dCAtIFNob3VsZCBiZSBcInNlcnZlclwiIG9yIFwibm9kZXNcIlxyXG4gICogXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICogXHJcbiAgKiBcclxuICAqIFxyXG4gICogQHRocm93cyBFeGNlcHRpb25cclxuICAqIFxyXG4gICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgKi9cblxuXG5cdF9jcmVhdGVDbGFzcyhTQ1NfUmVxdWVzdHNfZm9yTmV0LCBbe1xuXHRcdGtleTogXCJnZXRfRENMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9EQ0xpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmV0Q29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmV0Q29udGV4dCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZXRDb250ZXh0ID0gb3B0aW9ucy5uZXRDb250ZXh0O1xuXG5cdFx0XHRzd2l0Y2ggKF9uZXRDb250ZXh0KSB7XG5cdFx0XHRcdGNhc2UgJ3NlcnZlcic6XG5cdFx0XHRcdGNhc2UgJ25vZGVzJzpcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHdyb25nLlwiO1xuXHRcdFx0XHQvL1x0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvTm9kZXMvTGlzdFxuXHRcdFx0dmFyIF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL0xpc3RcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogQ3JlYXRlIERhdGEgY2hhbm5lbFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5vZGVJRCAtIElEIG9mIHRoZSBOb2RlIHdoZW4gREMgaXMgY3JlYXRlZCAob25seSByZXF1aXJlZCBmb3IgbmV0Q29udGV4dD0nbm9kZXMnKVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNoYW5uZWxJRCAtIElEIGZvciB0aGUgbmV3IGNoYW5uZWxcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tb2RlIC0gVGhlIG9wZXJhdGlvbiBtb2RlIG9mIERDLiBDb3VsZCBiZSAnaW4nIG9yICdvdXQnXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmV0Q29udGV4dCAtIFNob3VsZCBiZSBcInNlcnZlclwiIG9yIFwibm9kZXNcIlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcImNyZWF0ZV9EQ1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVfREMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuY2hhbm5lbElEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJjaGFubmVsSUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfY2hhbm5lbElEID0gb3B0aW9ucy5jaGFubmVsSUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLm1vZGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm1vZGUgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbW9kZSA9IG9wdGlvbnMubW9kZTtcblxuXHRcdFx0c3dpdGNoIChfbW9kZSkge1xuXHRcdFx0XHRjYXNlICdpbic6XG5cdFx0XHRcdGNhc2UgJ291dCc6XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcIm1vZGUgaXMgd3JvbmcuXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLm5ldENvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5ldENvbnRleHQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmV0Q29udGV4dCA9IG9wdGlvbnMubmV0Q29udGV4dDtcblxuXHRcdFx0dmFyIF91cmwgPSBudWxsO1xuXG5cdFx0XHRzd2l0Y2ggKF9uZXRDb250ZXh0KSB7XG5cblx0XHRcdFx0Y2FzZSAnc2VydmVyJzpcblx0XHRcdFx0XHQvLyBTZXJ2ZXIgY29udGV4dFxuXG5cdFx0XHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vTmV0L1NlcnZlci9jcmVhdGUve3tjaGFubmVsSUR9fS9vdXRcblx0XHRcdFx0XHRfdXJsID0gXCIvTmV0L1wiICsgX25ldENvbnRleHQgKyBcIi9jcmVhdGUvXCIgKyBfY2hhbm5lbElEICsgXCIvXCIgKyBfbW9kZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdub2Rlcyc6XG5cdFx0XHRcdFx0Ly8gTm9kZXMgY29udGV4dFxuXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMubm9kZUlEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRocm93IFwibm9kZUlEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBfbm9kZUlEID0gb3B0aW9ucy5ub2RlSUQ7XG5cblx0XHRcdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvTm9kZXMve3tub2RlSUR9fS9jcmVhdGUve3tjaGFubmVsSUR9fS9pblxuXHRcdFx0XHRcdF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL1wiICsgX25vZGVJRCArIFwiL2NyZWF0ZS9cIiArIF9jaGFubmVsSUQgKyBcIi9cIiArIF9tb2RlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHdyb25nLlwiO1xuXHRcdFx0XHQvL1x0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIERlbGV0ZSBEYXRhIGNoYW5uZWxcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ub2RlSUQgLSBJRCBvZiB0aGUgTm9kZSB3aGVuIERDIGlzIGRlbGV0ZWQgKG9ubHkgcmVxdWlyZWQgZm9yIG5ldENvbnRleHQ9J25vZGVzJylcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jaGFubmVsSUQgLSBJRCBvZiBjaGFubmVsIHRvIGJlIGRlbGV0ZWRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uZXRDb250ZXh0IC0gU2hvdWxkIGJlIFwic2VydmVyXCIgb3IgXCJub2Rlc1wiXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZGVsZXRlX0RDXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZV9EQyhvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRpZiAob3B0aW9ucy5jaGFubmVsSUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcImNoYW5uZWxJRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9jaGFubmVsSUQgPSBvcHRpb25zLmNoYW5uZWxJRDtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmV0Q29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmV0Q29udGV4dCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZXRDb250ZXh0ID0gb3B0aW9ucy5uZXRDb250ZXh0O1xuXG5cdFx0XHR2YXIgX3VybCA9IG51bGw7XG5cblx0XHRcdHN3aXRjaCAoX25ldENvbnRleHQpIHtcblxuXHRcdFx0XHRjYXNlICdzZXJ2ZXInOlxuXHRcdFx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L05ldC9TZXJ2ZXIvZGVsZXRlL3t7Y2hhbm5lbElEfX1cblx0XHRcdFx0XHRfdXJsID0gXCIvTmV0L1wiICsgX25ldENvbnRleHQgKyBcIi9kZWxldGUvXCIgKyBfY2hhbm5lbElEO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ25vZGVzJzpcblxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm5vZGVJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBcIm5vZGVJRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgX25vZGVJRCA9IG9wdGlvbnMubm9kZUlEO1xuXG5cdFx0XHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vTmV0L05vZGVzL3t7bm9kZUlEfX0vZGVsZXRlL3t7Y2hhbm5lbElEfX1cblx0XHRcdFx0XHRfdXJsID0gXCIvTmV0L1wiICsgX25ldENvbnRleHQgKyBcIi9cIiArIF9ub2RlSUQgKyBcIi9kZWxldGUvXCIgKyBfY2hhbm5lbElEO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHdyb25nLlwiO1xuXHRcdFx0XHQvL1x0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBEYXRhIGNoYW5uZWwgb3B0aW9uc1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5vZGVJRCAtIElEIG9mIHRoZSBOb2RlIHdoZW4gREMgaXMgZGVsZXRlZCAob25seSByZXF1aXJlZCBmb3IgbmV0Q29udGV4dD0nbm9kZXMnKVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNoYW5uZWxJRCAtIElEIG9mIGNoYW5uZWwgdG8gYmUgZGVsZXRlZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5ldENvbnRleHQgLSBTaG91bGQgYmUgXCJzZXJ2ZXJcIiBvciBcIm5vZGVzXCJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJnZXRfRENvcHRpb25zXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9EQ29wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuY2hhbm5lbElEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJjaGFubmVsSUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfY2hhbm5lbElEID0gb3B0aW9ucy5jaGFubmVsSUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLm5ldENvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcIm5ldENvbnRleHQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfbmV0Q29udGV4dCA9IG9wdGlvbnMubmV0Q29udGV4dDtcblxuXHRcdFx0dmFyIF91cmwgPSBudWxsO1xuXG5cdFx0XHRzd2l0Y2ggKF9uZXRDb250ZXh0KSB7XG5cblx0XHRcdFx0Y2FzZSAnc2VydmVyJzpcblx0XHRcdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvU2VydmVyL29wdGlvbnMve3tjaGFubmVsSUR9fVxuXHRcdFx0XHRcdF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL29wdGlvbnMvXCIgKyBfY2hhbm5lbElEO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ25vZGVzJzpcblxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm5vZGVJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBcIm5vZGVJRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgX25vZGVJRCA9IG9wdGlvbnMubm9kZUlEO1xuXG5cdFx0XHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vTmV0L05vZGVzL3t7bm9kZUlEfX0vb3B0aW9ucy97e2NoYW5uZWxJRH19XG5cdFx0XHRcdFx0X3VybCA9IFwiL05ldC9cIiArIF9uZXRDb250ZXh0ICsgXCIvXCIgKyBfbm9kZUlEICsgXCIvb3B0aW9ucy9cIiArIF9jaGFubmVsSUQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcIm5ldENvbnRleHQgaXMgd3JvbmcuXCI7XG5cdFx0XHRcdC8vXHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU2V0IERhdGEgY2hhbm5lbCBvcHRpb25zXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubm9kZUlEIC0gSUQgb2YgdGhlIE5vZGUgd2hlbiBEQyBpcyBkZWxldGVkIChvbmx5IHJlcXVpcmVkIGZvciBuZXRDb250ZXh0PSdub2RlcycpXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2hhbm5lbElEIC0gSUQgb2YgY2hhbm5lbCB0byBiZSBkZWxldGVkXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmV0Q29udGV4dCAtIFNob3VsZCBiZSBcInNlcnZlclwiIG9yIFwibm9kZXNcIlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmRjT3B0aW9ucyAtIERhdGEgY2hhbm5lbCBvcHRpb25zXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic2V0X0RDb3B0aW9uc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRfRENvcHRpb25zKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdGlmIChvcHRpb25zLmNoYW5uZWxJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwiY2hhbm5lbElEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2NoYW5uZWxJRCA9IG9wdGlvbnMuY2hhbm5lbElEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZXRDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX25ldENvbnRleHQgPSBvcHRpb25zLm5ldENvbnRleHQ7XG5cblx0XHRcdGlmIChvcHRpb25zLmRjT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwiZGNPcHRpb25zIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RjT3B0aW9ucyA9IG9wdGlvbnMuZGNPcHRpb25zO1xuXG5cdFx0XHR2YXIgX3VybCA9IG51bGw7XG5cblx0XHRcdHN3aXRjaCAoX25ldENvbnRleHQpIHtcblxuXHRcdFx0XHRjYXNlICdzZXJ2ZXInOlxuXHRcdFx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L05ldC9TZXJ2ZXIvb3B0aW9ucy97e2NoYW5uZWxJRH19XG5cdFx0XHRcdFx0X3VybCA9IFwiL05ldC9cIiArIF9uZXRDb250ZXh0ICsgXCIvb3B0aW9ucy9cIiArIF9jaGFubmVsSUQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbm9kZXMnOlxuXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMubm9kZUlEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRocm93IFwibm9kZUlEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBfbm9kZUlEID0gb3B0aW9ucy5ub2RlSUQ7XG5cblx0XHRcdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvTm9kZXMve3tub2RlSUR9fS9vcHRpb25zL3t7Y2hhbm5lbElEfX1cblx0XHRcdFx0XHRfdXJsID0gXCIvTmV0L1wiICsgX25ldENvbnRleHQgKyBcIi9cIiArIF9ub2RlSUQgKyBcIi9vcHRpb25zL1wiICsgX2NoYW5uZWxJRDtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IFwibmV0Q29udGV4dCBpcyB3cm9uZy5cIjtcblx0XHRcdFx0Ly9cdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIlBPU1RcIixcblx0XHRcdFx0XHRcImRhdGFcIjogX2RjT3B0aW9ucyxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogQ29udHJvbCBEYXRhIGNoYW5uZWxcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ub2RlSUQgLSBJRCBvZiB0aGUgTm9kZSB3aGVuIERDIGlzIGRlbGV0ZWQgKG9ubHkgcmVxdWlyZWQgZm9yIG5ldENvbnRleHQ9J25vZGVzJylcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jaGFubmVsSUQgLSBJRCBvZiBjaGFubmVsIHRvIGJlIGRlbGV0ZWRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uZXRDb250ZXh0IC0gU2hvdWxkIGJlIFwic2VydmVyXCIgb3IgXCJub2Rlc1wiXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY3RybENvbW1hbmQgLSBDb250cm9sIGNvbW1hbmQgKCdpbml0JywgJ2Nsb3NlJywgJ3N0YXJ0JyBvciAnc3RvcCcpXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiY29udHJvbF9EQ1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb250cm9sX0RDKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdGlmIChvcHRpb25zLmNoYW5uZWxJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwiY2hhbm5lbElEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2NoYW5uZWxJRCA9IG9wdGlvbnMuY2hhbm5lbElEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZXRDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX25ldENvbnRleHQgPSBvcHRpb25zLm5ldENvbnRleHQ7XG5cblx0XHRcdGlmIChvcHRpb25zLmN0cmxDb21tYW5kID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJjdHJsQ29tbWFuZCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9jdHJsQ29tbWFuZCA9IG9wdGlvbnMuY3RybENvbW1hbmQ7XG5cblx0XHRcdHN3aXRjaCAoX2N0cmxDb21tYW5kKSB7XG5cdFx0XHRcdGNhc2UgJ2luaXQnOlxuXHRcdFx0XHRjYXNlICdjbG9zZSc6XG5cdFx0XHRcdGNhc2UgJ3N0YXJ0Jzpcblx0XHRcdFx0Y2FzZSAnc3RvcCc6XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcImNybENvbW1hbmQgaXMgd3JvbmcuXCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBfdXJsID0gbnVsbDtcblxuXHRcdFx0c3dpdGNoIChfbmV0Q29udGV4dCkge1xuXG5cdFx0XHRcdGNhc2UgJ3NlcnZlcic6XG5cdFx0XHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vTmV0L1NlcnZlci9jb250cm9sL3t7Y2hhbm5lbElEfX0vaW5pdFxuXHRcdFx0XHRcdF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL2NvbnRyb2wvXCIgKyBfY2hhbm5lbElEICsgXCIvXCIgKyBfY3RybENvbW1hbmQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbm9kZXMnOlxuXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMubm9kZUlEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRocm93IFwibm9kZUlEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBfbm9kZUlEID0gb3B0aW9ucy5ub2RlSUQ7XG5cblx0XHRcdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvTm9kZXMve3tub2RlSUR9fS9jb250cm9sL3t7Y2hhbm5lbElEfX0vaW5pdFxuXHRcdFx0XHRcdF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL1wiICsgX25vZGVJRCArIFwiL2NvbnRyb2wvXCIgKyBfY2hhbm5lbElEICsgXCIvXCIgKyBfY3RybENvbW1hbmQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcIm5ldENvbnRleHQgaXMgd3JvbmcuXCI7XG5cdFx0XHRcdC8vXHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNDU19SZXF1ZXN0c19mb3JOZXQ7XG59KCk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5uZXR3b3JrXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5uZXR3b3JrLlNDU19SZXF1ZXN0c19mb3JOZXR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9TQ1NfUmVxdWVzdHMoKSB7XG5cdHJldHVybiBuZXcgU0NTX1JlcXVlc3RzX2Zvck5ldCgpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJTQ1NfUmVxdWVzdHNfZm9yTmV0XCI6IFNDU19SZXF1ZXN0c19mb3JOZXQsXG5cdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHNcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NzX25ldHdvcmsuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIE5ldHdvcmsgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXIubmV0d29ya1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIEltcG9ydCBqUXVlcnlfYWpheFxyXG4gKiBcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIF9qUXVlcnlfYWpheCA9IHJlcXVpcmUoXCIuL2pRdWVyeV9hamF4LmpzXCIpLmpRdWVyeV9hamF4O1xuXG4vKipcclxuICogaW1wb3J0IFNDUyBmb3IgTmV0d29ya1xyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIF9TQ1NfTmV0d29ya19MaWIgPSByZXF1aXJlKCcuL3Njc19uZXR3b3JrLmpzJyk7XG5cbnZhciBfbGliID0ge1xuXG4gIFwialF1ZXJ5X2FqYXhcIjogX2pRdWVyeV9hamF4LFxuXG4gIFwiX3B1YmxpY1wiOiB7XG4gICAgXCJqUXVlcnlfYWpheFwiOiBfalF1ZXJ5X2FqYXgsXG4gICAgXCJnZXRfU0NTX1JlcXVlc3RzXCI6IF9TQ1NfTmV0d29ya19MaWIuX3B1YmxpYy5nZXRfU0NTX1JlcXVlc3RzXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0TmV0d29yay5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogTm9kZSBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBOb2RlX0NvbmZpZyBvYmplY3QuXHJcbiAqIFxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBOb2RlX0NvbmZpZ1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIC0gTmFtZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIFR5cGVcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogTm9kZVxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3QuZm9yYnJvd3Nlci5Ob2RlX0NvbmZpZ30gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKiBcclxuICovXG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgTm9kZVxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIubm9kZXMuTm9kZV9Db25maWd9IG9wdGlvbnMuY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cbmZ1bmN0aW9uIE5vZGUob3B0aW9ucykge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG5cblx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0b3B0aW9ucyA9IHt9O1xuXHR9XG5cblx0dmFyIG5vZGUgPSB0aGlzO1xuXHRub2RlLmNvbmZpZyA9IG51bGw7XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcblx0XHRub2RlLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlnO1xuXHR9XG59O1xuXG4vKipcclxuICogTm9kZSByZWZlcmVuY2VcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIEBpbXBsZW1lbnRzIHN0LmZvcmJyb3dzZXIubm9kZXMuTm9kZVxyXG4gKiBcclxuICovXG5cblxudmFyIE5vZGVfUmVmID0gZnVuY3Rpb24gKF9Ob2RlKSB7XG5cdF9pbmhlcml0cyhOb2RlX1JlZiwgX05vZGUpO1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgTm9kZV9SZWZcclxuICAqL1xuXG5cdGZ1bmN0aW9uIE5vZGVfUmVmKG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZV9SZWYpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihOb2RlX1JlZikuY2FsbCh0aGlzLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gTm9kZV9SZWY7XG59KE5vZGUpO1xuXG4vKipcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogQHBhcmFtIG9wdGlvbnNcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIubm9kZXMuTm9kZV9SZWZ9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9Ob2RlX1JlZihvcHRpb25zKSB7XG5cblx0cmV0dXJuIG5ldyBOb2RlX1JlZihvcHRpb25zKTtcbn1cblxudmFyIF9saWIgPSB7XG5cdFwiTm9kZVwiOiBOb2RlLFxuXHRcIk5vZGVfUmVmXCI6IE5vZGVfUmVmLFxuXHRcImdldF9Ob2RlX1JlZlwiOiBnZXRfTm9kZV9SZWYsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9Ob2RlX1JlZlwiOiBnZXRfTm9kZV9SZWZcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU0NTIFJlcXVlc3QgZm9yIG5vZGVzIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIFxyXG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNDU19SZXF1ZXN0c19mb3JOb2RlcyA9IGZ1bmN0aW9uICgpIHtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIFNDU19SZXF1ZXN0c19mb3JOb2Rlc1xyXG4gICovXG5cblx0ZnVuY3Rpb24gU0NTX1JlcXVlc3RzX2Zvck5vZGVzKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTQ1NfUmVxdWVzdHNfZm9yTm9kZXMpO1xuXHR9XG5cblx0LyoqXHJcbiAgKiBHZXQgbm9kZXMgbGlzdFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgKiBcclxuICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgKiBcclxuICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICovXG5cblxuXHRfY3JlYXRlQ2xhc3MoU0NTX1JlcXVlc3RzX2Zvck5vZGVzLCBbe1xuXHRcdGtleTogXCJnZXRfTm9kZXNMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9Ob2Rlc0xpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG51bGw7XG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0X3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBcIi9Ob2Rlcy9MaXN0XCIsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTQ1NfUmVxdWVzdHNfZm9yTm9kZXM7XG59KCk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2RlcyBcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLm5vZGVzLlNDU19SZXF1ZXN0c19mb3JOb2Rlc31cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X1NDU19SZXF1ZXN0cygpIHtcblx0cmV0dXJuIG5ldyBTQ1NfUmVxdWVzdHNfZm9yTm9kZXMoKTtcbn1cblxudmFyIF9saWIgPSB7XG5cdFwiU0NTX1JlcXVlc3RzX2Zvck5vZGVzXCI6IFNDU19SZXF1ZXN0c19mb3JOb2Rlcyxcblx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHMsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TQ1NfUmVxdWVzdHNcIjogZ2V0X1NDU19SZXF1ZXN0c1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3Nfbm9kZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIDxwcmU+XHJcbiAqIE5vZGVzIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBOb2RlIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIF9Ob2RlX0xpYiA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IFNDUyBmb3IgTm9kZXNcclxuICogQGlnbm9yZVxyXG4gKi9cbnZhciBTQ1NfTm9kZXNfTGliID0gcmVxdWlyZSgnLi9zY3Nfbm9kZXMuanMnKTtcblxudmFyIF9saWIgPSB7XG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9Ob2RlX1JlZlwiOiBfTm9kZV9MaWIuX3B1YmxpYy5nZXRfTm9kZV9SZWYsXG4gICAgXCJnZXRfU0NTX1JlcXVlc3RzXCI6IFNDU19Ob2Rlc19MaWIuZ2V0X1NDU19SZXF1ZXN0c1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdF9ub2Rlcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU2VydmVyIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogVGhlIFNlcnZlcl9Db25maWcgb2JqZWN0LlxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gU2VydmVyX0NvbmZpZ1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2ZXJcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZVxyXG4gKiBcclxuICogQHByb3BlcnR5IHtvYmplY3R9IHNjcyAtIHNjcyBjb25maWd1cmF0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzY3MubmV0TG9jYXRpb24gLSBOZXQgbG9jYXRpb25cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjcy5jb250cm9sUG9ydCAtIENvbnRyb2wgcG9ydFxyXG4gKi9cblxuLyoqXHJcbiAqIEdldCBTZXJ2ZXIgY29uZmlndXJhdGlvblxyXG4gKiBcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBwdWJsaWNcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJfQ29uZmlnfSBvcHRpb25zLmNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqIEB0aHJvd3MgRXhjZXB0aW9uc1xyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuc2VydmVyLlNlcnZlcl9Db25maWd9XHJcbiAqL1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldF9TZXJ2ZXJfQ29uZmlnKG9wdGlvbnMpIHtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHRpZiAob3B0aW9ucy5jb25maWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwiQ29uZmlnIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcImNvbmZpZyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdHZhciBzZXJ2ZXJDb25maWcgPSB7XG5cdFx0XCJ0eXBlXCI6IFwiU1RTZXJ2ZXJcIixcblx0XHRcInNjc1wiOiB7XG5cdFx0XHRcIm5ldExvY2F0aW9uXCI6IG51bGwsXG5cdFx0XHRcImNvbnRyb2xQb3J0XCI6IG51bGxcblx0XHR9XG5cdH07XG5cblx0dmFyIF9jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblxuXHRpZiAoX2NvbmZpZy5zY3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKF9jb25maWcuc2NzLm5ldExvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcy5uZXRMb2NhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChfY29uZmlnLnNjcy5jb250cm9sUG9ydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MuY29udHJvbFBvcnQgb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHRzZXJ2ZXJDb25maWcuc2NzLm5ldExvY2F0aW9uID0gX2NvbmZpZy5zY3MubmV0TG9jYXRpb247XG5cdHNlcnZlckNvbmZpZy5zY3MuY29udHJvbFBvcnQgPSBfY29uZmlnLnNjcy5jb250cm9sUG9ydDtcblxuXHRyZXR1cm4gc2VydmVyQ29uZmlnO1xufVxuXG4vKipcclxuICogU2VydmVyXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3QuZm9yYnJvd3Nlci5zZXJ2ZXIuU2VydmVyX0NvbmZpZ30gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKiBcclxuICovXG5cbnZhciBTZXJ2ZXIgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgU2VydmVyXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJfQ29uZmlnfSBbb3B0aW9ucy5jb25maWddIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cbmZ1bmN0aW9uIFNlcnZlcihvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXIpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBzZXJ2ZXIgPSB0aGlzO1xuXHRzZXJ2ZXIuY29uZmlnID0gbnVsbDtcblxuXHRpZiAob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlcnZlci5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblx0fVxufTtcblxuLyoqXHJcbiAqIFNlcnZlcl9SZWZcclxuICogXHJcbiAqIDxwcmU+XHJcbiAqIFJlZmVyZW5jZSB0byBhIHNlcnZlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBpbXBsZW1lbnRzIHN0LmZvcmJyb3dzZXIuc2VydmVyLlNlcnZlclxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKi9cblxuXG52YXIgU2VydmVyX1JlZiA9IGZ1bmN0aW9uIChfU2VydmVyKSB7XG5cdF9pbmhlcml0cyhTZXJ2ZXJfUmVmLCBfU2VydmVyKTtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIFNlcnZlcl9SZWZcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNlcnZlcl9SZWYob3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXJfUmVmKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VydmVyX1JlZikuY2FsbCh0aGlzLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gU2VydmVyX1JlZjtcbn0oU2VydmVyKTtcblxudmFyIF9saWIgPSB7XG5cdFwiZ2V0X1NlcnZlcl9Db25maWdcIjogZ2V0X1NlcnZlcl9Db25maWcsXG5cdFwiU2VydmVyXCI6IFNlcnZlcixcblx0XCJTZXJ2ZXJfUmVmXCI6IFNlcnZlcl9SZWYsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IGdldF9TZXJ2ZXJfQ29uZmlnXG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiA8cHJlPlxyXG4gKiBTZXJ2ZXIgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIDwvcHJlPlxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyLnNlcnZlclxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBOb2RlIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIF9TZXJ2ZXJfTGliID0gcmVxdWlyZSgnLi9zZXJ2ZXIuanMnKTtcblxudmFyIF9saWIgPSB7XG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IF9TZXJ2ZXJfTGliLl9wdWJsaWMuZ2V0X1NlcnZlcl9Db25maWdcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rfc2VydmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBFdmVudHMgLSBFdmVudHNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEV2ZW50cy5Ob2RlbGlzdF9SZWNlaXZlZCAtIE5vZGVMaXN0IHJldmVpY2VkXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX0NsaWVudF9DT05TVEFOVFMgPSB7XG5cblx0XCJFdmVudHNcIjoge1xuXHRcdFwiTm9kZWxpc3RfUmVjZWl2ZWRcIjogXCJOb2RlTGlzdCByZXZlaWNlZFwiXG5cdH1cblxufTtcblxuLyoqXHJcbiAqIFNlcnZlciBjb250cm9sIHN5c3RlbSByZWZlcmVuY2VcclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNDU19SZWZcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXRMb2NhdGlvbiAtIE5ldCBsb2NhdGlvblxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29udHJvbFBvcnQgLSBDb250cm9sIHBvcnRcclxuICovXG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gcmVxdWVzdFxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gU0NTX1JlcXVlc3RcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHJlcXVlc3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIHRoZSByZXF1ZXN0IChHRVR8UE9TVClcclxuICogQHByb3BlcnR5IHtvYmplY3R9IGRhdGEgLSBkYXRhXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhVHlwZSAtIFJlc3BvbnNlIHR5cGVcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIEV4ZWN1dGUgU0NTIFJlcXVlc3RcclxuICogXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlcXVlc3R9IG9wdGlvbnMuc2NzUmVxdWVzdCAtIFNDUyBSZXF1ZXN0XHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXG5mdW5jdGlvbiBleGVjX1NDU1JlcXVlc3Qob3B0aW9ucykge1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBfc2NzUmVxdWVzdCA9IG51bGw7XG5cdGlmIChvcHRpb25zLnNjc1JlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwib3B0aW9ucy5zY3NSZXF1ZXN0IGlzIHJlcXVpcmVkXCI7XG5cdH1cblx0X3Njc1JlcXVlc3QgPSBvcHRpb25zLnNjc1JlcXVlc3Q7XG5cblx0aWYgKF9zY3NSZXF1ZXN0Lm9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzUmVxdWVzdC5vcHRpb25zIGlzIHJlcXVpcmVkXCI7XG5cdH1cblx0dmFyIF9yZXFPcHRpb25zID0gX3Njc1JlcXVlc3Qub3B0aW9ucztcblxuXHR2YXIgX3Njc0NsaWVudCA9IG51bGw7XG5cdGlmIChfcmVxT3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzUmVxdWVzdC5vcHRpb25zLnNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHR9XG5cdF9zY3NDbGllbnQgPSBfcmVxT3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0dmFyIF9zY3NSZWYgPSBfc2NzQ2xpZW50LnNjc1JlZjtcblx0dmFyIF91cmwgPSBcImh0dHA6Ly9cIiArIF9zY3NSZWYubmV0TG9jYXRpb24gKyBcIjpcIiArIF9zY3NSZWYuY29udHJvbFBvcnQgKyBfc2NzUmVxdWVzdC51cmw7XG5cblx0Ly8gY29uc29sZS5sb2coXCI8fml+PiBleGVjX1NDU1JlcXVlc3RcIik7XHQvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0Ly8gY29uc29sZS5sb2coX3Njc1JlcXVlc3QpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdC8vIGNvbnNvbGUubG9nKF9zY3NSZXF1ZXN0Lm9wdGlvbnMpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0dmFyIF9qUXVlcnlfYWpheCA9IHJlcXVpcmUoJy4uL25ldHdvcmsvc3ROZXR3b3JrLmpzJykualF1ZXJ5X2FqYXg7XG5cblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gZG8gYSB0aGluZywgcG9zc2libHkgYXN5bmMsIHRoZW7igKZcblx0XHQvLyByZXNvbHZlIG9yIHJlamVjdC4uLlxuXG5cdFx0X2pRdWVyeV9hamF4KHtcblx0XHRcdC8vIFVSTCBmb3IgcmVxdWVzdFxuXHRcdFx0dXJsOiBfdXJsLFxuXG5cdFx0XHQvLyBEYXRhIGZvciBzZW5kIG9uIHJlcXVlc3Rcblx0XHRcdGRhdGE6IF9zY3NSZXF1ZXN0LmRhdGEsXG5cblx0XHRcdC8vIG1ldGhvZCBvZiByZXF1ZXN0IFBPU1QgfCBHRVRcblx0XHRcdC8vIHR5cGUgOiBfc2NzUmVxdWVzdC50eXBlLFxuXHRcdFx0dHlwZTogX3Njc1JlcXVlc3QudHlwZSxcblxuXHRcdFx0Ly8gcmVzcG9uc2UgdHlwZVxuXHRcdFx0ZGF0YVR5cGU6IF9zY3NSZXF1ZXN0LmRhdGFUeXBlLFxuXG5cdFx0XHQvLyBjb250ZW50IHR5cGVcblx0XHRcdGNvbnRlbnRUeXBlOiBfc2NzUmVxdWVzdC5jb250ZW50VHlwZSxcblxuXHRcdFx0Ly8gb24gc3VjY2Vzc1xuXHRcdFx0X29uU3VjY2VzczogZnVuY3Rpb24gX29uU3VjY2VzcyhkYXRhKSB7XG5cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCI8fml+PiBleGVjX1NDU1JlcXVlc3QuX29uU3VjY2Vzc1wiKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdGlmIChfcmVxT3B0aW9ucy5fb25TdWNjZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfcmVxT3B0aW9ucy5fb25TdWNjZXNzKGRhdGEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIG9uIGVycm9yXG5cdFx0XHRfb25FcnJvcjogZnVuY3Rpb24gX29uRXJyb3IoZGF0YSkge1xuXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiPH5pfj4gZXhlY19TQ1NSZXF1ZXN0Ll9vbkVycm9yXCIpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0XHRcdFx0aWYgKF9yZXFPcHRpb25zLl9vbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfcmVxT3B0aW9ucy5fb25FcnJvcihkYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlamVjdChFcnJvcihcIkl0IGJyb2tlXCIpKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIG9uIGNvbXBsZXRlXG5cdFx0XHRfb25Db21wbGV0ZTogZnVuY3Rpb24gX29uQ29tcGxldGUoZGF0YSkge1xuXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiPH5pfj4gZXhlY19TQ1NSZXF1ZXN0Ll9vbkNvbXBsZXRlXCIpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0XHRcdFx0aWYgKF9yZXFPcHRpb25zLl9vbkNvbXBsZXRlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfcmVxT3B0aW9ucy5fb25Db21wbGV0ZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBwcm9taXNlO1xufVxuXG4vKipcclxuICogU2VydmVyIGNvbnRyb2wgc3lzdGVtIGNsaWVudFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlZn0gc2NzUmVmIC0gU0NTIHJlZmVyZW5jZVxyXG4gKiBcclxuICovXG5cbnZhciBTQ1NfQ2xpZW50ID0gZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgU0NTX0NsaWVudFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnNcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmNvbmZpZyAtIENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlZn0gb3B0aW9ucy5jb25maWcuc2NzIC0gc2NzIGNvbmZpZ3VyYXRpb25cclxuICAqIFxyXG4gICogQHRocm93cyBFeGNlcHRpb25cclxuICAqIFxyXG4gICovXG5cblx0ZnVuY3Rpb24gU0NTX0NsaWVudChvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNDU19DbGllbnQpO1xuXG5cdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fVxuXG5cdFx0dmFyIHNjc0NsaWVudCA9IHRoaXM7XG5cdFx0c2NzQ2xpZW50LnNjc1JlZiA9IG51bGw7XG5cdFx0c2NzQ2xpZW50LkNPTlNUQU5UUyA9IFNDU19DbGllbnRfQ09OU1RBTlRTO1xuXG5cdFx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IFwiY29uZmlnIHBhcmFtZXRlciBpcyByZXF1aXJlZFwiO1xuXHRcdH1cblxuXHRcdHZhciBfY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cblx0XHRpZiAoX2NvbmZpZy5zY3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgXCJjb25maWcuc2NzIHBhcmFtZXRlciBpcyByZXF1aXJlZFwiO1xuXHRcdH1cblxuXHRcdHNjc0NsaWVudC5zY3NSZWYgPSBfY29uZmlnLnNjcztcblx0fVxuXG5cdC8qKlxyXG4gICogRXhlY3V0ZSBhIFNDUyBSZXF1ZXN0XHJcbiAgKiBcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19SZXF1ZXN0fSBvcHRpb25zLnNjc1JlcXVlc3QgLSBTQ1MgUmVxdWVzdFxyXG4gICogXHJcbiAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICogXHJcbiAgKiBAcmV0dXJucyBQcm9taXNlXHJcbiAgKi9cblxuXG5cdF9jcmVhdGVDbGFzcyhTQ1NfQ2xpZW50LCBbe1xuXHRcdGtleTogXCJleGVjX1NDU19SZXF1ZXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGV4ZWNfU0NTX1JlcXVlc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2NzQ2xpZW50ID0gdGhpcztcblxuXHRcdFx0dmFyIF9zY3NSZXF1ZXN0ID0gbnVsbDtcblx0XHRcdGlmIChvcHRpb25zLnNjc1JlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc1JlcXVlc3QgcGFyYW1ldGVyIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHRfc2NzUmVxdWVzdCA9IG9wdGlvbnMuc2NzUmVxdWVzdDtcblxuXHRcdFx0aWYgKF9zY3NSZXF1ZXN0Lm9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0X3Njc1JlcXVlc3Qub3B0aW9ucy5zY3NDbGllbnQgPSBzY3NDbGllbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBleGVjX1NDU1JlcXVlc3Qob3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogR2V0IG5vZGUgbGlzdFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBbb3B0aW9ucy5zY3NfQ2xpZW50XSAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJnZXRfTm9kZUxpc3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X05vZGVMaXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjc0NsaWVudCA9IHRoaXM7XG5cdFx0XHRpZiAob3B0aW9ucy5zY3NfQ2xpZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0c2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NfQ2xpZW50O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2NzUmVmID0gc2NzQ2xpZW50LnNjc1JlZjtcblxuXHRcdFx0dmFyIF91cmwgPSBcImh0dHA6Ly9cIiArIHNjc1JlZi5uZXRMb2NhdGlvbiArIFwiOlwiICsgc2NzUmVmLmNvbnRyb2xQb3J0ICsgXCIvTm9kZXMvTGlzdFwiO1xuXG5cdFx0XHQvLyBJbXBvcnQgalF1ZXJ5X2FqYXhcblx0XHRcdHZhciBqUXVlcnlfYWpheCA9IHJlcXVpcmUoJy4uL25ldHdvcmsvc3ROZXR3b3JrLmpzJykualF1ZXJ5X2FqYXg7XG5cblx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHQvLyBkbyBhIHRoaW5nLCBwb3NzaWJseSBhc3luYywgdGhlbuKAplxuXHRcdFx0XHQvLyByZXNvbHZlIG9yIHJlamVjdC4uLlxuXG5cdFx0XHRcdGpRdWVyeV9hamF4KHtcblx0XHRcdFx0XHQvLyBVUkwgZm9yIHJlcXVlc3Rcblx0XHRcdFx0XHR1cmw6IF91cmwsXG5cblx0XHRcdFx0XHQvLyBEYXRhIGZvciBzZW5kIG9uIHJlcXVlc3Rcblx0XHRcdFx0XHRkYXRhOiB7IGlkOiAxMjMgfSxcblxuXHRcdFx0XHRcdC8vIHR5cGUgb2YgcmVxdWVzdCBQT1NUIHwgR0VUXG5cdFx0XHRcdFx0dHlwZTogJ0dFVCcsXG5cblx0XHRcdFx0XHQvLyByZXNwb25zZSB0eXBlXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblxuXHRcdFx0XHRcdC8vIG9uIHN1Y2Nlc3Ncblx0XHRcdFx0XHRfb25TdWNjZXNzOiBmdW5jdGlvbiBfb25TdWNjZXNzKGRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Ly8gRW1pdCBldmVudCBOb2RlbGlzdF9SZWNlaXZlZFxuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoc2NzQ2xpZW50LkNPTlNUQU5UUy5FdmVudHMuTm9kZWxpc3RfUmVjZWl2ZWQsXG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdFx0XHR7XG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdFx0XHRcdFwiZGF0YVwiOiBkYXRhXG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0XG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdHNjc0NsaWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCI8fml+PiBTQ1NfQ2xpZW50LmdldF9Ob2RlTGlzdC5fb25TdWNjZXNzXCIpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuX29uU3VjY2VzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMuX29uU3VjY2VzcyhkYXRhKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly8gb24gZXJyb3Jcblx0XHRcdFx0XHRfb25FcnJvcjogZnVuY3Rpb24gX29uRXJyb3IoZGF0YSkge1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIjx+aX4+IFNDU19DbGllbnQuZ2V0X05vZGVMaXN0Ll9vbkVycm9yXCIpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuX29uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLl9vbkVycm9yKGRhdGEpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZWplY3QoRXJyb3IoXCJJdCBicm9rZVwiKSk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIG9uIGNvbXBsZXRlXG5cdFx0XHRcdFx0X29uQ29tcGxldGU6IGZ1bmN0aW9uIF9vbkNvbXBsZXRlKGRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCI8fml+PiBTQ1NfQ2xpZW50LmdldF9Ob2RlTGlzdC5fb25Db21wbGV0ZVwiKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLl9vbkNvbXBsZXRlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5fb25Db21wbGV0ZShkYXRhKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNDU19DbGllbnQ7XG59KCk7XG5cbi8qKlxyXG4gKiBHZXQgYSBuZXcgU0NTX0NsaWVudFxyXG4gKiBcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlZn0gb3B0aW9ucy5zY3MgLSBTQ1MgcmVmZXJlbmNlXHJcbiAqIFxyXG4gKiBAdGhyb3dzIHtFeGNlcHRpb259XHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfU0NTX0NsaWVudChvcHRpb25zKSB7XG5cblx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0b3B0aW9ucyA9IHt9O1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2NzID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcyBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0dmFyIHNjc0NsaWVudCA9IG51bGw7XG5cblx0dHJ5IHtcblx0XHRzY3NDbGllbnQgPSBuZXcgU0NTX0NsaWVudCh7XG5cdFx0XHRcImNvbmZpZ1wiOiB7XG5cdFx0XHRcdFwic2NzXCI6IG9wdGlvbnMuc2NzXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBUT0RPOiBoYW5kbGUgZXhjZXB0aW9uXG5cdFx0dGhyb3cgXCJDYW5ub3QgY3JlYXRlIFNDU19DbGllbnQuIFwiICsgZTtcblx0fVxuXG5cdHJldHVybiBzY3NDbGllbnQ7XG59XG5cbnZhciBfbGliID0ge1xuXG5cdFwiU0NTX0NsaWVudFwiOiBTQ1NfQ2xpZW50LFxuXHRcImdldF9TQ1NfQ2xpZW50XCI6IGdldF9TQ1NfQ2xpZW50LFxuXHRcImV4ZWNfU0NTUmVxdWVzdFwiOiBleGVjX1NDU1JlcXVlc3QsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TQ1NfQ2xpZW50XCI6IGdldF9TQ1NfQ2xpZW50XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNDU19DbGllbnQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNlcnZpY2VzIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBtZW1iZXJvZiBzdFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBpbXBvcnQgU0NTIENsaWVudCBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG5cbnZhciBTQ1NfQ2xpZW50X0xpYiA9IHJlcXVpcmUoJy4vU0NTX0NsaWVudC5qcycpO1xuXG52YXIgX2xpYiA9IHtcbiAgXCJTQ1NfQ2xpZW50XCI6IFNDU19DbGllbnRfTGliLlNDU19DbGllbnQsXG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9TQ1NfQ2xpZW50XCI6IFNDU19DbGllbnRfTGliLl9wdWJsaWMuZ2V0X1NDU19DbGllbnRcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdFNlcnZpY2VzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5XHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0XHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3NlclxyXG4gKiBAbWVtYmVyb2Ygc3RcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBOb2RlcyBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG5cbnZhciBOb2Rlc19MaWIgPSByZXF1aXJlKCcuL25vZGVzL3N0X25vZGVzLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgU2VydmVyIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cbnZhciBTZXJ2ZXJfTGliID0gcmVxdWlyZSgnLi9zZXJ2ZXIvc3Rfc2VydmVyLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgU2VydmljZXMgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIFNlcnZpY2VzX0xpYiA9IHJlcXVpcmUoJy4vc2VydmljZXMvc3RTZXJ2aWNlcy5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IEVuZ2luZXMgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIEVuZ2luZXNfTGliID0gcmVxdWlyZSgnLi9lbmdpbmVzL3N0RW5naW5lcy5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IE5ldHdvcmsgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIE5ldHdvcmtfTGliID0gcmVxdWlyZSgnLi9uZXR3b3JrL3N0TmV0d29yay5qcycpO1xuXG52YXIgc3QgPSB7fTtcbnN0LmZvcmJyb3dzZXIgPSB7XG5cbiAgXCJub2Rlc1wiOiBOb2Rlc19MaWIuX3B1YmxpYyxcbiAgXCJzZXJ2ZXJcIjogU2VydmVyX0xpYi5fcHVibGljLFxuICBcInNlcnZpY2VzXCI6IFNlcnZpY2VzX0xpYi5fcHVibGljLFxuICBcImVuZ2luZXNcIjogRW5naW5lc19MaWIuX3B1YmxpYyxcbiAgXCJuZXR3b3JrXCI6IE5ldHdvcmtfTGliLl9wdWJsaWNcbn07XG5cbi8vbGV0IF9saWIgPSB7XG4vL1x0XHRcInN0XCI6IHN0XG4vL1x0fTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdC5mb3Jicm93c2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rmb3JCcm93c2VyLmpzLm1hcFxuIl19
