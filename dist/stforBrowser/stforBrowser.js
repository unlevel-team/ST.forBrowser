(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.st_forBrowser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * ActuatorEngine module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */


},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
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
  * Get sensors list
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


	_createClass(SCS_Requests_forEngines, [{
		key: "get_SensorsList",
		value: function get_SensorsList(options) {

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
					"url": "/ngn/Sensors/List",
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Get actuators list
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

	}, {
		key: "get_ActuatorsList",
		value: function get_ActuatorsList(options) {

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
					"url": "/ngn/Actuators/List",
					"type": "GET",
					"data": null,
					"dataType": "json",

					"options": options
				}
			});
		}

		/**
   * Get sensor info
   * 
   * @param {object} options - Options
   * @param {string} options.sensorID - sensor ID
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
		key: "get_SensorInfo",
		value: function get_SensorInfo(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.sensorID === undefined) {
				throw "sensorID is required";
			}
			var _sensorID = options.sensorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
			var _url = "/ngn/Sensors/" + _sensorID + "/info";

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
   * Get actuator info
   * 
   * @param {object} options - Options
   * @param {string} options.actuatorID - actuator ID
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
		key: "get_ActuatorInfo",
		value: function get_ActuatorInfo(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.actuatorID === undefined) {
				throw "actuatorID is required";
			}
			var _actuatorID = options.actuatorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/options
			var _url = "/ngn/Actuators/" + _actuatorID + "/info";

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
   * Get sensor options
   * 
   * @param {object} options - Options
   * @param {string} options.sensorID - sensor ID
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
		key: "get_SensorOptions",
		value: function get_SensorOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.sensorID === undefined) {
				throw "sensorID is required";
			}
			var _sensorID = options.sensorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
			var _url = "/ngn/Sensors/" + _sensorID + "/options";

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
   * Get actuator options
   * 
   * @param {object} options - Options
   * @param {string} options.actuatorID - actuator ID
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
		key: "get_ActuatorOptions",
		value: function get_ActuatorOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.actuatorID === undefined) {
				throw "actuatorID is required";
			}
			var _actuatorID = options.actuatorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/options
			var _url = "/ngn/Actuators/" + _actuatorID + "/options";

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
   * Set sensor options
   * 
   * @param {object} options - Options
   * @param {string} options.sensorID - sensor ID
   * @param {object} options.sensorOptions - sensor options
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
		key: "set_SensorOptions",
		value: function set_SensorOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.sensorID === undefined) {
				throw "sensorID is required";
			}
			var _sensorID = options.sensorID;

			if (options.sensorOptions === undefined) {
				throw "sensorOptions is required";
			}
			var _sensorOptions = options.sensorOptions;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
			var _url = "/ngn/Sensors/" + _sensorID + "/options/";

			var _postData = {
				'options': _sensorOptions
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
   * Set actuator options
   * 
   * @param {object} options - Options
   * @param {string} options.actuatorID - actuator ID
   * @param {object} options.actuatorOptions - actuator options
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
		key: "set_ActuatorOptions",
		value: function set_ActuatorOptions(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.actuatorID === undefined) {
				throw "actuatorID is required";
			}
			var _actuatorID = options.actuatorID;

			if (options.actuatorOptions === undefined) {
				throw "actuatorOptions is required";
			}
			var _actuatorOptions = options.actuatorOptions;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/options
			var _url = "/ngn/Actuators/" + _actuatorID + "/options/";

			var _postData = {
				'options': _actuatorOptions
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
   * Start sensor
   * 
   * @param {object} options - Options
   * @param {string} options.sensorID - sensor ID
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
		key: "start_Sensor",
		value: function start_Sensor(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.sensorID === undefined) {
				throw "sensorID is required";
			}
			var _sensorID = options.sensorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/start
			var _url = "/ngn/Sensors/" + _sensorID + "/start";

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
   * Start actuator
   * 
   * @param {object} options - Options
   * @param {string} options.actuatorID - actuator ID
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
		key: "start_Actuator",
		value: function start_Actuator(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.actuatorID === undefined) {
				throw "actuatorID is required";
			}
			var _actuatorID = options.actuatorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/start
			var _url = "/ngn/Actuators/" + _actuatorID + "/start";

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
   * Stop sensor
   * 
   * @param {object} options - Options
   * @param {string} options.sensorID - sensor ID
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
		key: "stop_Sensor",
		value: function stop_Sensor(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.sensorID === undefined) {
				throw "sensorID is required";
			}
			var _sensorID = options.sensorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/stop
			var _url = "/ngn/Sensors/" + _sensorID + "/stop";

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
   * Stop actuator
   * 
   * @param {object} options - Options
   * @param {string} options.actuatorID - actuator ID
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
		key: "stop_Actuator",
		value: function stop_Actuator(options) {

			if (options === undefined || options === null) {
				options = {};
			}

			if (options.actuatorID === undefined) {
				throw "actuatorID is required";
			}
			var _actuatorID = options.actuatorID;

			if (options.scsClient === undefined) {
				throw "scsClient is required";
			}
			var _scsClient = options.scsClient;

			// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/stop
			var _url = "/ngn/Actuators/" + _actuatorID + "/stop";

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


},{}],4:[function(require,module,exports){
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


},{"./ngn_manager.js":2,"./scs_engines.js":3}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
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
  * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
  * @param {function} [options._onSuccess] - Function to run on success
  * @param {function} [options._onError] - Function to run on error
  * @param {function} [options._onComplete] - Function to run on complete
  * 
  * @param {string} options.netContext - Should be "server" or "nodes"
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


},{}],7:[function(require,module,exports){
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


},{"./jQuery_ajax.js":5,"./scs_network.js":6}],8:[function(require,module,exports){
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
 * @memberof st.forbrowser
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
 * @memberof st.forbrowser
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
 * @param {st.forbrowser.Node_Config} options.config - Configuration
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
 * @memberof st.forbrowser
 * @implements st.forbrowser.Node
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
 * @memberof st.forbrowser
 * @param options
 * @returns {st.forbrowser.Node_Ref}
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


},{}],9:[function(require,module,exports){
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


},{}],10:[function(require,module,exports){
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


},{}],11:[function(require,module,exports){
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


},{"./node.js":9,"./scs_nodes.js":10}],12:[function(require,module,exports){
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
 * @memberof st.forbrowser
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
 * @memberof st.forbrowser
 * @public
 * 
 * @param {object} options - Options object
 * @param {st.forbrowser.Server_Config} options.config - Configuration
 * 
 * @throws Exceptions
 * 
 * @returns {st.forbrowser.Server_Config}
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
 * @memberof st.forbrowser
 * @protected
 * 
 * @property {st.forbrowser.Server_Config} config - Configuration
 * 
 */

var Server =

/**
 * @constructs Server
 * 
 * @param {object} [options] - Options object
 * @param {st.forbrowser.Server_Config} [options.config] - Configuration
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
 * @memberof st.forbrowser
 * @implements st.forbrowser.Server
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


},{}],13:[function(require,module,exports){
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


},{}],14:[function(require,module,exports){
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


},{"./server.js":13}],15:[function(require,module,exports){
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


},{"../network/stNetwork.js":7}],16:[function(require,module,exports){
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


},{"./SCS_Client.js":15}],17:[function(require,module,exports){
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


},{"./engines/stEngines.js":4,"./network/stNetwork.js":7,"./nodes/st_nodes.js":11,"./server/st_server.js":14,"./services/stServices.js":16}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])(17)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvZW5naW5lcy9BY3R1YXRvckVuZ2luZS5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9lbmdpbmVzL25nbl9tYW5hZ2VyLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL2VuZ2luZXMvc2NzX2VuZ2luZXMuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvZW5naW5lcy9zdEVuZ2luZXMuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbmV0d29yay9qUXVlcnlfYWpheC5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9uZXR3b3JrL3Njc19uZXR3b3JrLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25ldHdvcmsvc3ROZXR3b3JrLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25vZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbm9kZXMvbm9kZS5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9ub2Rlcy9zY3Nfbm9kZXMuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbm9kZXMvc3Rfbm9kZXMuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc2VydmVyLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3NlcnZlci9zZXJ2ZXIuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc2VydmVyL3N0X3NlcnZlci5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2aWNlcy9TQ1NfQ2xpZW50LmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3NlcnZpY2VzL3N0U2VydmljZXMuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc3Rmb3JCcm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIEFjdHVhdG9yRW5naW5lIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0dWF0b3JFbmdpbmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIEVuZ2luZSByZWZlcmVuY2VcclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEVuZ2luZV9SZWZcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuZW5naW5lc1xyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzZW5zb3JJRF0gLSBTZW5zb3IgSURcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthY3R1YW9ySURdIC0gQWN0dWF0b3IgSURcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBFbmdpbmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gX3N5c0lEIC0gRW5naW5lIHN5c0lEXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbmdpbmUgLSBFbmdpbmUgbmFtZS4gQ291bGQgYmUgJ25vdCBkZWZpbmVkJ1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc3RhdGUgLSBFbmdpbmUgc3RhdGUuXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSByZXN1bHQgb2JqZWN0LlxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gU2VhcmNoUmVzdWx0XHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXMuRW5naW5lc19NYW5hZ2VyXHJcbiAqIFxyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3BlcnR5IHsoc3QuZm9yYnJvd3Nlci5lbmdpbmVzLkVuZ2luZV9SZWZ8bnVsbCl9IGVuZ2luZSAtIFRoZSBFbmdpbmUgb2JqZWN0LCBtYXkgYmUgbnVsbC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIGluIGxpc3QuXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIEVuZ2luZXMgbWFuYWdlciBcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5lbmdpbmVzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIFxyXG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVuZ2luZXNfTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIEVuZ2luZXNfTWFuYWdlclxyXG4gICovXG5cblx0ZnVuY3Rpb24gRW5naW5lc19NYW5hZ2VyKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmdpbmVzX01hbmFnZXIpO1xuXHR9XG5cblx0LyoqXHJcbiAgKiBSZXR1cm5zIEVuZ2luZSBzZWFyY2hlZCBieSBJRFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVuZ2luZUlEIC0gRW5naW5lIElEXHJcbiAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudHlwZV0gLSB0eXBlLiBDb3VsZCBiZSAnc2Vuc29yJyBvciAnYWN0dWF0b3InXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuZW5naW5lcy5FbmdpbmVfUmVmW119IG9wdGlvbnMubGlzdCAtIExpc3Qgb2YgZW5naW5lc1xyXG4gICogXHJcbiAgKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5lbmdpbmVzLkVuZ2luZXNfTWFuYWdlci5TZWFyY2hSZXN1bHR9IHJlc3VsdCAtIFJlc3VsdCBvYmplY3RcclxuICAqICBcclxuICAqL1xuXG5cblx0X2NyZWF0ZUNsYXNzKEVuZ2luZXNfTWFuYWdlciwgW3tcblx0XHRrZXk6ICdnZXRFbmdpbmVCeUlEJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RW5naW5lQnlJRChvcHRpb25zKSB7XG5cblx0XHRcdHZhciBfZW5naW5lSUQgPSBvcHRpb25zLmVuZ2luZUlEO1xuXHRcdFx0dmFyIF90eXBlID0gb3B0aW9ucy50eXBlO1xuXHRcdFx0dmFyIF9saXN0ID0gb3B0aW9ucy5saXN0O1xuXG5cdFx0XHR2YXIgX2VuZ2luZSA9IG51bGw7XG5cdFx0XHR2YXIgX2kgPSAwO1xuXG5cdFx0XHRzd2l0Y2ggKF90eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3NlbnNvcic6XG5cdFx0XHRcdFx0X2kgPSBfbGlzdC5tYXAoZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB4LnNlbnNvcklEO1xuXHRcdFx0XHRcdH0pLmluZGV4T2YoX2VuZ2luZUlEKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhY3R1YXRvcic6XG5cdFx0XHRcdFx0X2kgPSBfbGlzdC5tYXAoZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB4LmFjdHVhdG9ySUQ7XG5cdFx0XHRcdFx0fSkuaW5kZXhPZihfZW5naW5lSUQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0X2kgPSBfbGlzdC5tYXAoZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB4Ll9zeXNJRDtcblx0XHRcdFx0XHR9KS5pbmRleE9mKF9lbmdpbmVJRCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfaSAhPT0gLTEpIHtcblx0XHRcdFx0X2VuZ2luZSA9IF9saXN0W19pXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XCJlbmdpbmVcIjogX2VuZ2luZSxcblx0XHRcdFx0XCJwb3NpdGlvblwiOiBfaVxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRW5naW5lc19NYW5hZ2VyO1xufSgpO1xuXG4vKipcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuZW5naW5lc1xyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuZW5naW5lcy5FbmdpbmVzX01hbmFnZXJ9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9FbmdpbmVzX01hbmFnZXIoKSB7XG5cdHJldHVybiBuZXcgRW5naW5lc19NYW5hZ2VyKCk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIkVuZ2luZXNfTWFuYWdlclwiOiBFbmdpbmVzX01hbmFnZXIsXG5cdFwiZ2V0X0VuZ2luZXNfTWFuYWdlclwiOiBnZXRfRW5naW5lc19NYW5hZ2VyLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfRW5naW5lc19NYW5hZ2VyXCI6IGdldF9FbmdpbmVzX01hbmFnZXJcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmduX21hbmFnZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNDUyBSZXF1ZXN0IGZvciBlbmdpbmVzIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lc1xyXG4gICovXG5cblx0ZnVuY3Rpb24gU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzKTtcblx0fVxuXG5cdC8qKlxyXG4gICogR2V0IHNlbnNvcnMgbGlzdFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgKiBcclxuICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgKiBcclxuICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICovXG5cblxuXHRfY3JlYXRlQ2xhc3MoU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMsIFt7XG5cdFx0a2V5OiBcImdldF9TZW5zb3JzTGlzdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRfU2Vuc29yc0xpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG51bGw7XG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0X3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBcIi9uZ24vU2Vuc29ycy9MaXN0XCIsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBhY3R1YXRvcnMgbGlzdFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcImdldF9BY3R1YXRvcnNMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9BY3R1YXRvcnNMaXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBudWxsO1xuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogXCIvbmduL0FjdHVhdG9ycy9MaXN0XCIsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBzZW5zb3IgaW5mb1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0X1NlbnNvckluZm9cIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X1NlbnNvckluZm8ob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2Vuc29ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2Vuc29ySUQgPSBvcHRpb25zLnNlbnNvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vU2Vuc29ycy9cIiArIF9zZW5zb3JJRCArIFwiL2luZm9cIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogR2V0IGFjdHVhdG9yIGluZm9cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJnZXRfQWN0dWF0b3JJbmZvXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9BY3R1YXRvckluZm8ob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJhY3R1YXRvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2FjdHVhdG9ySUQgPSBvcHRpb25zLmFjdHVhdG9ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vQWN0dWF0b3JzL3t7bm9kZUlEfX0ue3thY3R1YXRvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vQWN0dWF0b3JzL1wiICsgX2FjdHVhdG9ySUQgKyBcIi9pbmZvXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBzZW5zb3Igb3B0aW9uc1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0X1NlbnNvck9wdGlvbnNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X1NlbnNvck9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2Vuc29ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2Vuc29ySUQgPSBvcHRpb25zLnNlbnNvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vU2Vuc29ycy9cIiArIF9zZW5zb3JJRCArIFwiL29wdGlvbnNcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogR2V0IGFjdHVhdG9yIG9wdGlvbnNcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJnZXRfQWN0dWF0b3JPcHRpb25zXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9BY3R1YXRvck9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJhY3R1YXRvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2FjdHVhdG9ySUQgPSBvcHRpb25zLmFjdHVhdG9ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vQWN0dWF0b3JzL3t7bm9kZUlEfX0ue3thY3R1YXRvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vQWN0dWF0b3JzL1wiICsgX2FjdHVhdG9ySUQgKyBcIi9vcHRpb25zXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIFNldCBzZW5zb3Igb3B0aW9uc1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc2Vuc29yT3B0aW9ucyAtIHNlbnNvciBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic2V0X1NlbnNvck9wdGlvbnNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0X1NlbnNvck9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2Vuc29ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2Vuc29ySUQgPSBvcHRpb25zLnNlbnNvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JPcHRpb25zID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzZW5zb3JPcHRpb25zIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3NlbnNvck9wdGlvbnMgPSBvcHRpb25zLnNlbnNvck9wdGlvbnM7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vU2Vuc29ycy97e25vZGVJRH19Lnt7c2Vuc29ySUR9fS9vcHRpb25zXG5cdFx0XHR2YXIgX3VybCA9IFwiL25nbi9TZW5zb3JzL1wiICsgX3NlbnNvcklEICsgXCIvb3B0aW9ucy9cIjtcblxuXHRcdFx0dmFyIF9wb3N0RGF0YSA9IHtcblx0XHRcdFx0J29wdGlvbnMnOiBfc2Vuc29yT3B0aW9uc1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IEpTT04uc3RyaW5naWZ5KF9wb3N0RGF0YSksXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblx0XHRcdFx0XHRcImNvbnRlbnRUeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU2V0IGFjdHVhdG9yIG9wdGlvbnNcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5hY3R1YXRvck9wdGlvbnMgLSBhY3R1YXRvciBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic2V0X0FjdHVhdG9yT3B0aW9uc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRfQWN0dWF0b3JPcHRpb25zKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuYWN0dWF0b3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwiYWN0dWF0b3JJRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9hY3R1YXRvcklEID0gb3B0aW9ucy5hY3R1YXRvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvck9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcImFjdHVhdG9yT3B0aW9ucyBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9hY3R1YXRvck9wdGlvbnMgPSBvcHRpb25zLmFjdHVhdG9yT3B0aW9ucztcblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L25nbi9BY3R1YXRvcnMve3tub2RlSUR9fS57e2FjdHVhdG9ySUR9fS9vcHRpb25zXG5cdFx0XHR2YXIgX3VybCA9IFwiL25nbi9BY3R1YXRvcnMvXCIgKyBfYWN0dWF0b3JJRCArIFwiL29wdGlvbnMvXCI7XG5cblx0XHRcdHZhciBfcG9zdERhdGEgPSB7XG5cdFx0XHRcdCdvcHRpb25zJzogX2FjdHVhdG9yT3B0aW9uc1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJQT1NUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IEpTT04uc3RyaW5naWZ5KF9wb3N0RGF0YSksXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblx0XHRcdFx0XHRcImNvbnRlbnRUeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU3RhcnQgc2Vuc29yXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2Vuc29ySUQgLSBzZW5zb3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJzdGFydF9TZW5zb3JcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc3RhcnRfU2Vuc29yKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2Vuc29ySUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNlbnNvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3NlbnNvcklEID0gb3B0aW9ucy5zZW5zb3JJRDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L25nbi9TZW5zb3JzL3t7bm9kZUlEfX0ue3tzZW5zb3JJRH19L3N0YXJ0XG5cdFx0XHR2YXIgX3VybCA9IFwiL25nbi9TZW5zb3JzL1wiICsgX3NlbnNvcklEICsgXCIvc3RhcnRcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU3RhcnQgYWN0dWF0b3JcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJzdGFydF9BY3R1YXRvclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzdGFydF9BY3R1YXRvcihvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLmFjdHVhdG9ySUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcImFjdHVhdG9ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfYWN0dWF0b3JJRCA9IG9wdGlvbnMuYWN0dWF0b3JJRDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L25nbi9BY3R1YXRvcnMve3tub2RlSUR9fS57e2FjdHVhdG9ySUR9fS9zdGFydFxuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vQWN0dWF0b3JzL1wiICsgX2FjdHVhdG9ySUQgKyBcIi9zdGFydFwiO1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcdFwiZGF0YVwiOiBudWxsLFxuXHRcdFx0XHRcdFwiZGF0YVR5cGVcIjogXCJqc29uXCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcclxuICAgKiBTdG9wIHNlbnNvclxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic3RvcF9TZW5zb3JcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc3RvcF9TZW5zb3Iob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2Vuc29ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2Vuc29ySUQgPSBvcHRpb25zLnNlbnNvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vc3RvcFxuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vU2Vuc29ycy9cIiArIF9zZW5zb3JJRCArIFwiL3N0b3BcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU3RvcCBhY3R1YXRvclxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmFjdHVhdG9ySUQgLSBhY3R1YXRvciBJRFxyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcInN0b3BfQWN0dWF0b3JcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc3RvcF9BY3R1YXRvcihvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLmFjdHVhdG9ySUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcImFjdHVhdG9ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfYWN0dWF0b3JJRCA9IG9wdGlvbnMuYWN0dWF0b3JJRDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L25nbi9BY3R1YXRvcnMve3tub2RlSUR9fS57e2FjdHVhdG9ySUR9fS9zdG9wXG5cdFx0XHR2YXIgX3VybCA9IFwiL25nbi9BY3R1YXRvcnMvXCIgKyBfYWN0dWF0b3JJRCArIFwiL3N0b3BcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzO1xufSgpO1xuXG4vKipcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuZW5naW5lc1xyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuZW5naW5lcy5TQ1NfUmVxdWVzdHNfZm9yRW5naW5lc31cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X1NDU19SZXF1ZXN0cygpIHtcblx0cmV0dXJuIG5ldyBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lcygpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJTQ1NfUmVxdWVzdHNfZm9yRW5naW5lc1wiOiBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lcyxcblx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHMsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TQ1NfUmVxdWVzdHNcIjogZ2V0X1NDU19SZXF1ZXN0c1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3NfZW5naW5lcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogPHByZT5cclxuICogRW5naW5lcyBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogPC9wcmU+XHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXIuZW5naW5lc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBTQ1MgRW5naW5lc1xyXG4gKiBAaWdub3JlXHJcbiAqL1xuXG52YXIgU0NTX0VuZ2luZXNfTGliID0gcmVxdWlyZSgnLi9zY3NfZW5naW5lcy5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IEVuZ2luZXMgbWFuYWdlclxyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIE5HTl9NYW5hZ2VyX0xpYiA9IHJlcXVpcmUoJy4vbmduX21hbmFnZXIuanMnKTtcblxudmFyIF9saWIgPSB7XG4gIFwiU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXNcIjogU0NTX0VuZ2luZXNfTGliLlNDU19SZXF1ZXN0c19mb3JFbmdpbmVzLFxuICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX0VuZ2luZXNfTGliLmdldF9TQ1NfUmVxdWVzdHMsXG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX0VuZ2luZXNfTGliLl9wdWJsaWMuZ2V0X1NDU19SZXF1ZXN0cyxcbiAgICBcImdldF9FbmdpbmVzX01hbmFnZXJcIjogTkdOX01hbmFnZXJfTGliLl9wdWJsaWMuZ2V0X0VuZ2luZXNfTWFuYWdlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdEVuZ2luZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIEFKQVggR2V0IG1ldGhvZCBiYXNlZCBvbiBqUXVlcnlcclxuICogXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5uZXR3b3JrXHJcbiAqIFxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgLSBVUkxcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuZGF0YSAtIGRhdGFcdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50eXBlIC0gR0VUIG9yIFBPU1RcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGF0YVR5cGUgLSBSZXNwb25zZSB0eXBlIChqc29uL3RleHQvaHRtbC4uLilcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbmZ1bmN0aW9uIGpRdWVyeV9hamF4KG9wdGlvbnMpIHtcblxuXHRqUXVlcnkuYWpheCh7XG5cdFx0Ly8gVVJMIGZvciByZXF1ZXN0XG5cdFx0dXJsOiBvcHRpb25zLnVybCxcblxuXHRcdC8vIERhdGEgZm9yIHNlbmQgb24gcmVxdWVzdFxuXHRcdGRhdGE6IG9wdGlvbnMuZGF0YSxcblxuXHRcdC8vIHR5cGUgb2YgcmVxdWVzdCBQT1NUIHwgR0VUXG5cdFx0dHlwZTogb3B0aW9ucy50eXBlLFxuXG5cdFx0Ly8gcmVzcG9uc2UgdHlwZVxuXHRcdGRhdGFUeXBlOiBvcHRpb25zLmRhdGFUeXBlLFxuXG5cdFx0Ly8gQWxsb3cgY3Jvc3Nkb21haW5cblx0XHRjcm9zc0RvbWFpbjogdHJ1ZSxcblxuXHRcdC8vIENvbnRlbnQgdHlwZVxuXHRcdGNvbnRlbnRUeXBlOiBvcHRpb25zLmNvbnRlbnRUeXBlLFxuXG5cdFx0Ly8gQXN5bmNocm9ub3VzXG5cdFx0YXN5bmM6IHRydWUsXG5cblx0XHQvLyBvbiBzdWNjZXNzXG5cdFx0c3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhqc29uKSB7XG5cblx0XHRcdGlmIChvcHRpb25zLl9vblN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRvcHRpb25zLl9vblN1Y2Nlc3MoanNvbik7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIG9uIGVycm9yXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHhociwgc3RhdHVzKSB7XG5cblx0XHRcdGlmIChvcHRpb25zLl9vbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0b3B0aW9ucy5fb25FcnJvcih7XG5cdFx0XHRcdFx0XCJ4aHJcIjogeGhyLFxuXHRcdFx0XHRcdFwic3RhdHVzXCI6IHN0YXR1c1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gb24gY29tcGxldGVcblx0XHRjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoeGhyLCBzdGF0dXMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuX29uQ29tcGxldGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRvcHRpb25zLl9vbkNvbXBsZXRlKHtcblx0XHRcdFx0XHRcInhoclwiOiB4aHIsXG5cdFx0XHRcdFx0XCJzdGF0dXNcIjogc3RhdHVzXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbnZhciBfbGliID0ge1xuXG5cdFwialF1ZXJ5X2FqYXhcIjogalF1ZXJ5X2FqYXgsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImpRdWVyeV9hamF4XCI6IGpRdWVyeV9hamF4XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpRdWVyeV9hamF4LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTQ1MgUmVxdWVzdCBmb3IgTmV0d29yayBcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5uZXR3b3JrXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIFxyXG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNDU19SZXF1ZXN0c19mb3JOZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTQ1NfUmVxdWVzdHNfZm9yTmV0XHJcbiAgKi9cblxuXHRmdW5jdGlvbiBTQ1NfUmVxdWVzdHNfZm9yTmV0KCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTQ1NfUmVxdWVzdHNfZm9yTmV0KTtcblx0fVxuXG5cdC8qKlxyXG4gICogR2V0IERhdGEgY2hhbm5lbHMgbGlzdFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgKiBcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5ldENvbnRleHQgLSBTaG91bGQgYmUgXCJzZXJ2ZXJcIiBvciBcIm5vZGVzXCJcclxuICAqIFxyXG4gICogXHJcbiAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICogXHJcbiAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAqL1xuXG5cblx0X2NyZWF0ZUNsYXNzKFNDU19SZXF1ZXN0c19mb3JOZXQsIFt7XG5cdFx0a2V5OiBcImdldF9EQ0xpc3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X0RDTGlzdChvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRpZiAob3B0aW9ucy5uZXRDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX25ldENvbnRleHQgPSBvcHRpb25zLm5ldENvbnRleHQ7XG5cblx0XHRcdHN3aXRjaCAoX25ldENvbnRleHQpIHtcblx0XHRcdFx0Y2FzZSAnc2VydmVyJzpcblx0XHRcdFx0Y2FzZSAnbm9kZXMnOlxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcIm5ldENvbnRleHQgaXMgd3JvbmcuXCI7XG5cdFx0XHRcdC8vXHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L05ldC9Ob2Rlcy9MaXN0XG5cdFx0XHR2YXIgX3VybCA9IFwiL05ldC9cIiArIF9uZXRDb250ZXh0ICsgXCIvTGlzdFwiO1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBfdXJsLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcdFwiZGF0YVwiOiBudWxsLFxuXHRcdFx0XHRcdFwiZGF0YVR5cGVcIjogXCJqc29uXCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU0NTX1JlcXVlc3RzX2Zvck5ldDtcbn0oKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5ldHdvcmtcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLm5ldHdvcmsuU0NTX1JlcXVlc3RzX2Zvck5ldH1cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X1NDU19SZXF1ZXN0cygpIHtcblx0cmV0dXJuIG5ldyBTQ1NfUmVxdWVzdHNfZm9yTmV0KCk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIlNDU19SZXF1ZXN0c19mb3JOZXRcIjogU0NTX1JlcXVlc3RzX2Zvck5ldCxcblx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHMsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TQ1NfUmVxdWVzdHNcIjogZ2V0X1NDU19SZXF1ZXN0c1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3NfbmV0d29yay5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogTmV0d29yayBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3Nlci5uZXR3b3JrXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqL1xuXG4vKipcclxuICogSW1wb3J0IGpRdWVyeV9hamF4XHJcbiAqIFxyXG4gKiBAaWdub3JlXHJcbiAqL1xuXG52YXIgX2pRdWVyeV9hamF4ID0gcmVxdWlyZShcIi4valF1ZXJ5X2FqYXguanNcIikualF1ZXJ5X2FqYXg7XG5cbi8qKlxyXG4gKiBpbXBvcnQgU0NTIGZvciBOZXR3b3JrXHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgX1NDU19OZXR3b3JrX0xpYiA9IHJlcXVpcmUoJy4vc2NzX25ldHdvcmsuanMnKTtcblxudmFyIF9saWIgPSB7XG5cbiAgXCJqUXVlcnlfYWpheFwiOiBfalF1ZXJ5X2FqYXgsXG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImpRdWVyeV9hamF4XCI6IF9qUXVlcnlfYWpheCxcbiAgICBcImdldF9TQ1NfUmVxdWVzdHNcIjogX1NDU19OZXR3b3JrX0xpYi5fcHVibGljLmdldF9TQ1NfUmVxdWVzdHNcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3ROZXR3b3JrLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBOb2RlIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogVGhlIE5vZGVfQ29uZmlnIG9iamVjdC5cclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE5vZGVfQ29uZmlnXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBOYW1lXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZVxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBOb2RlXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHByb3RlY3RlZFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdC5mb3Jicm93c2VyLk5vZGVfQ29uZmlnfSBjb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTm9kZSA9XG5cbi8qKlxyXG4gKiBAY29uc3RydWN0cyBOb2RlXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5Ob2RlX0NvbmZpZ30gb3B0aW9ucy5jb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqL1xuZnVuY3Rpb24gTm9kZShvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHR2YXIgbm9kZSA9IHRoaXM7XG5cdG5vZGUuY29uZmlnID0gbnVsbDtcblxuXHRpZiAob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdG5vZGUuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cdH1cbn07XG5cbi8qKlxyXG4gKiBOb2RlIHJlZmVyZW5jZVxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQGltcGxlbWVudHMgc3QuZm9yYnJvd3Nlci5Ob2RlXHJcbiAqIFxyXG4gKi9cblxuXG52YXIgTm9kZV9SZWYgPSBmdW5jdGlvbiAoX05vZGUpIHtcblx0X2luaGVyaXRzKE5vZGVfUmVmLCBfTm9kZSk7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBOb2RlX1JlZlxyXG4gICovXG5cblx0ZnVuY3Rpb24gTm9kZV9SZWYob3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlX1JlZik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5vZGVfUmVmKS5jYWxsKHRoaXMsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBOb2RlX1JlZjtcbn0oTm9kZSk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5Ob2RlX1JlZn1cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X05vZGVfUmVmKG9wdGlvbnMpIHtcblxuXHRyZXR1cm4gbmV3IE5vZGVfUmVmKG9wdGlvbnMpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJOb2RlXCI6IE5vZGUsXG5cdFwiTm9kZV9SZWZcIjogTm9kZV9SZWYsXG5cdFwiZ2V0X05vZGVfUmVmXCI6IGdldF9Ob2RlX1JlZixcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X05vZGVfUmVmXCI6IGdldF9Ob2RlX1JlZlxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBOb2RlIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogVGhlIE5vZGVfQ29uZmlnIG9iamVjdC5cclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE5vZGVfQ29uZmlnXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBOYW1lXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZVxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBOb2RlXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHByb3RlY3RlZFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdC5mb3Jicm93c2VyLk5vZGVfQ29uZmlnfSBjb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTm9kZSA9XG5cbi8qKlxyXG4gKiBAY29uc3RydWN0cyBOb2RlXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5ub2Rlcy5Ob2RlX0NvbmZpZ30gb3B0aW9ucy5jb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqL1xuZnVuY3Rpb24gTm9kZShvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHR2YXIgbm9kZSA9IHRoaXM7XG5cdG5vZGUuY29uZmlnID0gbnVsbDtcblxuXHRpZiAob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdG5vZGUuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cdH1cbn07XG5cbi8qKlxyXG4gKiBOb2RlIHJlZmVyZW5jZVxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogQGltcGxlbWVudHMgc3QuZm9yYnJvd3Nlci5ub2Rlcy5Ob2RlXHJcbiAqIFxyXG4gKi9cblxuXG52YXIgTm9kZV9SZWYgPSBmdW5jdGlvbiAoX05vZGUpIHtcblx0X2luaGVyaXRzKE5vZGVfUmVmLCBfTm9kZSk7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBOb2RlX1JlZlxyXG4gICovXG5cblx0ZnVuY3Rpb24gTm9kZV9SZWYob3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlX1JlZik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5vZGVfUmVmKS5jYWxsKHRoaXMsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBOb2RlX1JlZjtcbn0oTm9kZSk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5ub2Rlcy5Ob2RlX1JlZn1cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X05vZGVfUmVmKG9wdGlvbnMpIHtcblxuXHRyZXR1cm4gbmV3IE5vZGVfUmVmKG9wdGlvbnMpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJOb2RlXCI6IE5vZGUsXG5cdFwiTm9kZV9SZWZcIjogTm9kZV9SZWYsXG5cdFwiZ2V0X05vZGVfUmVmXCI6IGdldF9Ob2RlX1JlZixcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X05vZGVfUmVmXCI6IGdldF9Ob2RlX1JlZlxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTQ1MgUmVxdWVzdCBmb3Igbm9kZXMgXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX1JlcXVlc3RzX2Zvck5vZGVzID0gZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgU0NTX1JlcXVlc3RzX2Zvck5vZGVzXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBTQ1NfUmVxdWVzdHNfZm9yTm9kZXMoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNDU19SZXF1ZXN0c19mb3JOb2Rlcyk7XG5cdH1cblxuXHQvKipcclxuICAqIEdldCBub2RlcyBsaXN0XHJcbiAgKiBcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAqIFxyXG4gICogQHRocm93cyBFeGNlcHRpb25cclxuICAqIFxyXG4gICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgKi9cblxuXG5cdF9jcmVhdGVDbGFzcyhTQ1NfUmVxdWVzdHNfZm9yTm9kZXMsIFt7XG5cdFx0a2V5OiBcImdldF9Ob2Rlc0xpc3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X05vZGVzTGlzdChvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gbnVsbDtcblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHRfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IFwiL05vZGVzL0xpc3RcIixcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNDU19SZXF1ZXN0c19mb3JOb2Rlcztcbn0oKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzIFxyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIubm9kZXMuU0NTX1JlcXVlc3RzX2Zvck5vZGVzfVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfU0NTX1JlcXVlc3RzKCkge1xuXHRyZXR1cm4gbmV3IFNDU19SZXF1ZXN0c19mb3JOb2RlcygpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJTQ1NfUmVxdWVzdHNfZm9yTm9kZXNcIjogU0NTX1JlcXVlc3RzX2Zvck5vZGVzLFxuXHRcImdldF9TQ1NfUmVxdWVzdHNcIjogZ2V0X1NDU19SZXF1ZXN0cyxcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjc19ub2Rlcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogPHByZT5cclxuICogTm9kZXMgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIDwvcHJlPlxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqL1xuXG4vKipcclxuICogaW1wb3J0IE5vZGUgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xuXG52YXIgX05vZGVfTGliID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgU0NTIGZvciBOb2Rlc1xyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIFNDU19Ob2Rlc19MaWIgPSByZXF1aXJlKCcuL3Njc19ub2Rlcy5qcycpO1xuXG52YXIgX2xpYiA9IHtcblxuICBcIl9wdWJsaWNcIjoge1xuICAgIFwiZ2V0X05vZGVfUmVmXCI6IF9Ob2RlX0xpYi5fcHVibGljLmdldF9Ob2RlX1JlZixcbiAgICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX05vZGVzX0xpYi5nZXRfU0NTX1JlcXVlc3RzXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0X25vZGVzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBUaGUgU2VydmVyX0NvbmZpZyBvYmplY3QuXHJcbiAqIFxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZXJ2ZXJfQ29uZmlnXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIFR5cGVcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBzY3MgLSBzY3MgY29uZmlndXJhdGlvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2NzLm5ldExvY2F0aW9uIC0gTmV0IGxvY2F0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY3MuY29udHJvbFBvcnQgLSBDb250cm9sIHBvcnRcclxuICovXG5cbi8qKlxyXG4gKiBHZXQgU2VydmVyIGNvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEBwdWJsaWNcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLlNlcnZlcl9Db25maWd9IG9wdGlvbnMuY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKiBcclxuICogQHRocm93cyBFeGNlcHRpb25zXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5TZXJ2ZXJfQ29uZmlnfVxyXG4gKi9cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRfU2VydmVyX0NvbmZpZyhvcHRpb25zKSB7XG5cblx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0b3B0aW9ucyA9IHt9O1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcIkNvbmZpZyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChvcHRpb25zLmNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJjb25maWcgb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHR2YXIgc2VydmVyQ29uZmlnID0ge1xuXHRcdFwidHlwZVwiOiBcIlNUU2VydmVyXCIsXG5cdFx0XCJzY3NcIjoge1xuXHRcdFx0XCJuZXRMb2NhdGlvblwiOiBudWxsLFxuXHRcdFx0XCJjb250cm9sUG9ydFwiOiBudWxsXG5cdFx0fVxuXHR9O1xuXG5cdHZhciBfY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cblx0aWYgKF9jb25maWcuc2NzID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChfY29uZmlnLnNjcy5uZXRMb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MubmV0TG9jYXRpb24gb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHRpZiAoX2NvbmZpZy5zY3MuY29udHJvbFBvcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzLmNvbnRyb2xQb3J0IG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0c2VydmVyQ29uZmlnLnNjcy5uZXRMb2NhdGlvbiA9IF9jb25maWcuc2NzLm5ldExvY2F0aW9uO1xuXHRzZXJ2ZXJDb25maWcuc2NzLmNvbnRyb2xQb3J0ID0gX2NvbmZpZy5zY3MuY29udHJvbFBvcnQ7XG5cblx0cmV0dXJuIHNlcnZlckNvbmZpZztcbn1cblxuLyoqXHJcbiAqIFNlcnZlclxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3QuZm9yYnJvd3Nlci5TZXJ2ZXJfQ29uZmlnfSBjb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKi9cblxudmFyIFNlcnZlciA9XG5cbi8qKlxyXG4gKiBAY29uc3RydWN0cyBTZXJ2ZXJcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuU2VydmVyX0NvbmZpZ30gW29wdGlvbnMuY29uZmlnXSAtIENvbmZpZ3VyYXRpb25cclxuICovXG5mdW5jdGlvbiBTZXJ2ZXIob3B0aW9ucykge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyKTtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHR2YXIgc2VydmVyID0gdGhpcztcblx0c2VydmVyLmNvbmZpZyA9IG51bGw7XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcblx0XHRzZXJ2ZXIuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cdH1cbn07XG5cbi8qKlxyXG4gKiBTZXJ2ZXJfUmVmXHJcbiAqIFxyXG4gKiA8cHJlPlxyXG4gKiBSZWZlcmVuY2UgdG8gYSBzZXJ2ZXJcclxuICogPC9wcmU+XHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEBpbXBsZW1lbnRzIHN0LmZvcmJyb3dzZXIuU2VydmVyXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqL1xuXG5cbnZhciBTZXJ2ZXJfUmVmID0gZnVuY3Rpb24gKF9TZXJ2ZXIpIHtcblx0X2luaGVyaXRzKFNlcnZlcl9SZWYsIF9TZXJ2ZXIpO1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgU2VydmVyX1JlZlxyXG4gICovXG5cblx0ZnVuY3Rpb24gU2VydmVyX1JlZihvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlcl9SZWYpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihTZXJ2ZXJfUmVmKS5jYWxsKHRoaXMsIG9wdGlvbnMpKTtcblx0fVxuXG5cdHJldHVybiBTZXJ2ZXJfUmVmO1xufShTZXJ2ZXIpO1xuXG52YXIgX2xpYiA9IHtcblx0XCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBnZXRfU2VydmVyX0NvbmZpZyxcblx0XCJTZXJ2ZXJcIjogU2VydmVyLFxuXHRcIlNlcnZlcl9SZWZcIjogU2VydmVyX1JlZixcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X1NlcnZlcl9Db25maWdcIjogZ2V0X1NlcnZlcl9Db25maWdcblx0fVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJ2ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNlcnZlciBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBTZXJ2ZXJfQ29uZmlnIG9iamVjdC5cclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlcnZlcl9Db25maWdcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIFR5cGVcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBzY3MgLSBzY3MgY29uZmlndXJhdGlvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2NzLm5ldExvY2F0aW9uIC0gTmV0IGxvY2F0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY3MuY29udHJvbFBvcnQgLSBDb250cm9sIHBvcnRcclxuICovXG5cbi8qKlxyXG4gKiBHZXQgU2VydmVyIGNvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZlclxyXG4gKiBAcHVibGljXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2ZXIuU2VydmVyX0NvbmZpZ30gb3B0aW9ucy5jb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKiBAdGhyb3dzIEV4Y2VwdGlvbnNcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJfQ29uZmlnfVxyXG4gKi9cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRfU2VydmVyX0NvbmZpZyhvcHRpb25zKSB7XG5cblx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0b3B0aW9ucyA9IHt9O1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcIkNvbmZpZyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChvcHRpb25zLmNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJjb25maWcgb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHR2YXIgc2VydmVyQ29uZmlnID0ge1xuXHRcdFwidHlwZVwiOiBcIlNUU2VydmVyXCIsXG5cdFx0XCJzY3NcIjoge1xuXHRcdFx0XCJuZXRMb2NhdGlvblwiOiBudWxsLFxuXHRcdFx0XCJjb250cm9sUG9ydFwiOiBudWxsXG5cdFx0fVxuXHR9O1xuXG5cdHZhciBfY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cblx0aWYgKF9jb25maWcuc2NzID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChfY29uZmlnLnNjcy5uZXRMb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MubmV0TG9jYXRpb24gb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHRpZiAoX2NvbmZpZy5zY3MuY29udHJvbFBvcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzLmNvbnRyb2xQb3J0IG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0c2VydmVyQ29uZmlnLnNjcy5uZXRMb2NhdGlvbiA9IF9jb25maWcuc2NzLm5ldExvY2F0aW9uO1xuXHRzZXJ2ZXJDb25maWcuc2NzLmNvbnRyb2xQb3J0ID0gX2NvbmZpZy5zY3MuY29udHJvbFBvcnQ7XG5cblx0cmV0dXJuIHNlcnZlckNvbmZpZztcbn1cblxuLyoqXHJcbiAqIFNlcnZlclxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZlclxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuc2VydmVyLlNlcnZlcl9Db25maWd9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqL1xuXG52YXIgU2VydmVyID1cblxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RzIFNlcnZlclxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2ZXIuU2VydmVyX0NvbmZpZ30gW29wdGlvbnMuY29uZmlnXSAtIENvbmZpZ3VyYXRpb25cclxuICovXG5mdW5jdGlvbiBTZXJ2ZXIob3B0aW9ucykge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyKTtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHR2YXIgc2VydmVyID0gdGhpcztcblx0c2VydmVyLmNvbmZpZyA9IG51bGw7XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcblx0XHRzZXJ2ZXIuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG5cdH1cbn07XG5cbi8qKlxyXG4gKiBTZXJ2ZXJfUmVmXHJcbiAqIFxyXG4gKiA8cHJlPlxyXG4gKiBSZWZlcmVuY2UgdG8gYSBzZXJ2ZXJcclxuICogPC9wcmU+XHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZlclxyXG4gKiBAaW1wbGVtZW50cyBzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICovXG5cblxudmFyIFNlcnZlcl9SZWYgPSBmdW5jdGlvbiAoX1NlcnZlcikge1xuXHRfaW5oZXJpdHMoU2VydmVyX1JlZiwgX1NlcnZlcik7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTZXJ2ZXJfUmVmXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBTZXJ2ZXJfUmVmKG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyX1JlZik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlcnZlcl9SZWYpLmNhbGwodGhpcywgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIFNlcnZlcl9SZWY7XG59KFNlcnZlcik7XG5cbnZhciBfbGliID0ge1xuXHRcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IGdldF9TZXJ2ZXJfQ29uZmlnLFxuXHRcIlNlcnZlclwiOiBTZXJ2ZXIsXG5cdFwiU2VydmVyX1JlZlwiOiBTZXJ2ZXJfUmVmLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBnZXRfU2VydmVyX0NvbmZpZ1xuXHR9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcnZlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogPHByZT5cclxuICogU2VydmVyIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3Nlci5zZXJ2ZXJcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICovXG5cbi8qKlxyXG4gKiBpbXBvcnQgTm9kZSBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG5cbnZhciBfU2VydmVyX0xpYiA9IHJlcXVpcmUoJy4vc2VydmVyLmpzJyk7XG5cbnZhciBfbGliID0ge1xuXG4gIFwiX3B1YmxpY1wiOiB7XG4gICAgXCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBfU2VydmVyX0xpYi5fcHVibGljLmdldF9TZXJ2ZXJfQ29uZmlnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0X3NlcnZlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU2VydmVyIGNvbnRyb2wgc3lzdGVtIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2aWNlc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gRXZlbnRzIC0gRXZlbnRzXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFdmVudHMuTm9kZWxpc3RfUmVjZWl2ZWQgLSBOb2RlTGlzdCByZXZlaWNlZFxyXG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNDU19DbGllbnRfQ09OU1RBTlRTID0ge1xuXG5cdFwiRXZlbnRzXCI6IHtcblx0XHRcIk5vZGVsaXN0X1JlY2VpdmVkXCI6IFwiTm9kZUxpc3QgcmV2ZWljZWRcIlxuXHR9XG5cbn07XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gcmVmZXJlbmNlXHJcbiAqIFxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTQ1NfUmVmXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV0TG9jYXRpb24gLSBOZXQgbG9jYXRpb25cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbnRyb2xQb3J0IC0gQ29udHJvbCBwb3J0XHJcbiAqL1xuXG4vKipcclxuICogU2VydmVyIGNvbnRyb2wgc3lzdGVtIHJlcXVlc3RcclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNDU19SZXF1ZXN0XHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVVJMIG9mIHRoZSByZXF1ZXN0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiB0aGUgcmVxdWVzdCAoR0VUfFBPU1QpXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkYXRhIC0gZGF0YVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGF0YVR5cGUgLSBSZXNwb25zZSB0eXBlXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICogQHByb3BlcnR5IHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBFeGVjdXRlIFNDUyBSZXF1ZXN0XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2aWNlc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19SZXF1ZXN0fSBvcHRpb25zLnNjc1JlcXVlc3QgLSBTQ1MgUmVxdWVzdFxyXG4gKiBcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xuZnVuY3Rpb24gZXhlY19TQ1NSZXF1ZXN0KG9wdGlvbnMpIHtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHR2YXIgX3Njc1JlcXVlc3QgPSBudWxsO1xuXHRpZiAob3B0aW9ucy5zY3NSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcIm9wdGlvbnMuc2NzUmVxdWVzdCBpcyByZXF1aXJlZFwiO1xuXHR9XG5cdF9zY3NSZXF1ZXN0ID0gb3B0aW9ucy5zY3NSZXF1ZXN0O1xuXG5cdGlmIChfc2NzUmVxdWVzdC5vcHRpb25zID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjc1JlcXVlc3Qub3B0aW9ucyBpcyByZXF1aXJlZFwiO1xuXHR9XG5cdHZhciBfcmVxT3B0aW9ucyA9IF9zY3NSZXF1ZXN0Lm9wdGlvbnM7XG5cblx0dmFyIF9zY3NDbGllbnQgPSBudWxsO1xuXHRpZiAoX3JlcU9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjc1JlcXVlc3Qub3B0aW9ucy5zY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0fVxuXHRfc2NzQ2xpZW50ID0gX3JlcU9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdHZhciBfc2NzUmVmID0gX3Njc0NsaWVudC5zY3NSZWY7XG5cdHZhciBfdXJsID0gXCJodHRwOi8vXCIgKyBfc2NzUmVmLm5ldExvY2F0aW9uICsgXCI6XCIgKyBfc2NzUmVmLmNvbnRyb2xQb3J0ICsgX3Njc1JlcXVlc3QudXJsO1xuXG5cdC8vIGNvbnNvbGUubG9nKFwiPH5pfj4gZXhlY19TQ1NSZXF1ZXN0XCIpO1x0Ly8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdC8vIGNvbnNvbGUubG9nKF9zY3NSZXF1ZXN0KTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHQvLyBjb25zb2xlLmxvZyhfc2NzUmVxdWVzdC5vcHRpb25zKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdHZhciBfalF1ZXJ5X2FqYXggPSByZXF1aXJlKCcuLi9uZXR3b3JrL3N0TmV0d29yay5qcycpLmpRdWVyeV9hamF4O1xuXG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdC8vIGRvIGEgdGhpbmcsIHBvc3NpYmx5IGFzeW5jLCB0aGVu4oCmXG5cdFx0Ly8gcmVzb2x2ZSBvciByZWplY3QuLi5cblxuXHRcdF9qUXVlcnlfYWpheCh7XG5cdFx0XHQvLyBVUkwgZm9yIHJlcXVlc3Rcblx0XHRcdHVybDogX3VybCxcblxuXHRcdFx0Ly8gRGF0YSBmb3Igc2VuZCBvbiByZXF1ZXN0XG5cdFx0XHRkYXRhOiBfc2NzUmVxdWVzdC5kYXRhLFxuXG5cdFx0XHQvLyBtZXRob2Qgb2YgcmVxdWVzdCBQT1NUIHwgR0VUXG5cdFx0XHQvLyB0eXBlIDogX3Njc1JlcXVlc3QudHlwZSxcblx0XHRcdHR5cGU6IF9zY3NSZXF1ZXN0LnR5cGUsXG5cblx0XHRcdC8vIHJlc3BvbnNlIHR5cGVcblx0XHRcdGRhdGFUeXBlOiBfc2NzUmVxdWVzdC5kYXRhVHlwZSxcblxuXHRcdFx0Ly8gY29udGVudCB0eXBlXG5cdFx0XHRjb250ZW50VHlwZTogX3Njc1JlcXVlc3QuY29udGVudFR5cGUsXG5cblx0XHRcdC8vIG9uIHN1Y2Nlc3Ncblx0XHRcdF9vblN1Y2Nlc3M6IGZ1bmN0aW9uIF9vblN1Y2Nlc3MoZGF0YSkge1xuXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiPH5pfj4gZXhlY19TQ1NSZXF1ZXN0Ll9vblN1Y2Nlc3NcIik7XHQvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHQvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblxuXHRcdFx0XHRpZiAoX3JlcU9wdGlvbnMuX29uU3VjY2VzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3JlcU9wdGlvbnMuX29uU3VjY2VzcyhkYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBvbiBlcnJvclxuXHRcdFx0X29uRXJyb3I6IGZ1bmN0aW9uIF9vbkVycm9yKGRhdGEpIHtcblxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIjx+aX4+IGV4ZWNfU0NTUmVxdWVzdC5fb25FcnJvclwiKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdGlmIChfcmVxT3B0aW9ucy5fb25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3JlcU9wdGlvbnMuX29uRXJyb3IoZGF0YSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZWplY3QoRXJyb3IoXCJJdCBicm9rZVwiKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBvbiBjb21wbGV0ZVxuXHRcdFx0X29uQ29tcGxldGU6IGZ1bmN0aW9uIF9vbkNvbXBsZXRlKGRhdGEpIHtcblxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIjx+aX4+IGV4ZWNfU0NTUmVxdWVzdC5fb25Db21wbGV0ZVwiKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcdC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdGlmIChfcmVxT3B0aW9ucy5fb25Db21wbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3JlcU9wdGlvbnMuX29uQ29tcGxldGUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXHJcbiAqIFNlcnZlciBjb250cm9sIHN5c3RlbSBjbGllbnRcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2aWNlc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19SZWZ9IHNjc1JlZiAtIFNDUyByZWZlcmVuY2VcclxuICogXHJcbiAqL1xuXG52YXIgU0NTX0NsaWVudCA9IGZ1bmN0aW9uICgpIHtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIFNDU19DbGllbnRcclxuICAqIFxyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5jb25maWcgLSBDb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19SZWZ9IG9wdGlvbnMuY29uZmlnLnNjcyAtIHNjcyBjb25maWd1cmF0aW9uXHJcbiAgKiBcclxuICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgKiBcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNDU19DbGllbnQob3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTQ1NfQ2xpZW50KTtcblxuXHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH1cblxuXHRcdHZhciBzY3NDbGllbnQgPSB0aGlzO1xuXHRcdHNjc0NsaWVudC5zY3NSZWYgPSBudWxsO1xuXHRcdHNjc0NsaWVudC5DT05TVEFOVFMgPSBTQ1NfQ2xpZW50X0NPTlNUQU5UUztcblxuXHRcdGlmIChvcHRpb25zLmNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBcImNvbmZpZyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWRcIjtcblx0XHR9XG5cblx0XHR2YXIgX2NvbmZpZyA9IG9wdGlvbnMuY29uZmlnO1xuXG5cdFx0aWYgKF9jb25maWcuc2NzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IFwiY29uZmlnLnNjcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWRcIjtcblx0XHR9XG5cblx0XHRzY3NDbGllbnQuc2NzUmVmID0gX2NvbmZpZy5zY3M7XG5cdH1cblxuXHQvKipcclxuICAqIEV4ZWN1dGUgYSBTQ1MgUmVxdWVzdFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfUmVxdWVzdH0gb3B0aW9ucy5zY3NSZXF1ZXN0IC0gU0NTIFJlcXVlc3RcclxuICAqIFxyXG4gICogQHRocm93cyBFeGNlcHRpb25cclxuICAqIFxyXG4gICogQHJldHVybnMgUHJvbWlzZVxyXG4gICovXG5cblxuXHRfY3JlYXRlQ2xhc3MoU0NTX0NsaWVudCwgW3tcblx0XHRrZXk6IFwiZXhlY19TQ1NfUmVxdWVzdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBleGVjX1NDU19SZXF1ZXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjc0NsaWVudCA9IHRoaXM7XG5cblx0XHRcdHZhciBfc2NzUmVxdWVzdCA9IG51bGw7XG5cdFx0XHRpZiAob3B0aW9ucy5zY3NSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NSZXF1ZXN0IHBhcmFtZXRlciBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0X3Njc1JlcXVlc3QgPSBvcHRpb25zLnNjc1JlcXVlc3Q7XG5cblx0XHRcdGlmIChfc2NzUmVxdWVzdC5vcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdF9zY3NSZXF1ZXN0Lm9wdGlvbnMuc2NzQ2xpZW50ID0gc2NzQ2xpZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhlY19TQ1NSZXF1ZXN0KG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBub2RlIGxpc3RcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gW29wdGlvbnMuc2NzX0NsaWVudF0gLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0X05vZGVMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9Ob2RlTGlzdChvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3NDbGllbnQgPSB0aGlzO1xuXHRcdFx0aWYgKG9wdGlvbnMuc2NzX0NsaWVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHNjc0NsaWVudCA9IG9wdGlvbnMuc2NzX0NsaWVudDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjc1JlZiA9IHNjc0NsaWVudC5zY3NSZWY7XG5cblx0XHRcdHZhciBfdXJsID0gXCJodHRwOi8vXCIgKyBzY3NSZWYubmV0TG9jYXRpb24gKyBcIjpcIiArIHNjc1JlZi5jb250cm9sUG9ydCArIFwiL05vZGVzL0xpc3RcIjtcblxuXHRcdFx0Ly8gSW1wb3J0IGpRdWVyeV9hamF4XG5cdFx0XHR2YXIgalF1ZXJ5X2FqYXggPSByZXF1aXJlKCcuLi9uZXR3b3JrL3N0TmV0d29yay5qcycpLmpRdWVyeV9hamF4O1xuXG5cdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0Ly8gZG8gYSB0aGluZywgcG9zc2libHkgYXN5bmMsIHRoZW7igKZcblx0XHRcdFx0Ly8gcmVzb2x2ZSBvciByZWplY3QuLi5cblxuXHRcdFx0XHRqUXVlcnlfYWpheCh7XG5cdFx0XHRcdFx0Ly8gVVJMIGZvciByZXF1ZXN0XG5cdFx0XHRcdFx0dXJsOiBfdXJsLFxuXG5cdFx0XHRcdFx0Ly8gRGF0YSBmb3Igc2VuZCBvbiByZXF1ZXN0XG5cdFx0XHRcdFx0ZGF0YTogeyBpZDogMTIzIH0sXG5cblx0XHRcdFx0XHQvLyB0eXBlIG9mIHJlcXVlc3QgUE9TVCB8IEdFVFxuXHRcdFx0XHRcdHR5cGU6ICdHRVQnLFxuXG5cdFx0XHRcdFx0Ly8gcmVzcG9uc2UgdHlwZVxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cblx0XHRcdFx0XHQvLyBvbiBzdWNjZXNzXG5cdFx0XHRcdFx0X29uU3VjY2VzczogZnVuY3Rpb24gX29uU3VjY2VzcyhkYXRhKSB7XG5cblx0XHRcdFx0XHRcdC8vIEVtaXQgZXZlbnQgTm9kZWxpc3RfUmVjZWl2ZWRcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KHNjc0NsaWVudC5DT05TVEFOVFMuRXZlbnRzLk5vZGVsaXN0X1JlY2VpdmVkLFxuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRcdFx0XHRcImRhdGFcIjogZGF0YVxuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdFxuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRzY3NDbGllbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiPH5pfj4gU0NTX0NsaWVudC5nZXRfTm9kZUxpc3QuX29uU3VjY2Vzc1wiKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLl9vblN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLl9vblN1Y2Nlc3MoZGF0YSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIG9uIGVycm9yXG5cdFx0XHRcdFx0X29uRXJyb3I6IGZ1bmN0aW9uIF9vbkVycm9yKGRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCI8fml+PiBTQ1NfQ2xpZW50LmdldF9Ob2RlTGlzdC5fb25FcnJvclwiKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLl9vbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5fb25FcnJvcihkYXRhKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmVqZWN0KEVycm9yKFwiSXQgYnJva2VcIikpO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyBvbiBjb21wbGV0ZVxuXHRcdFx0XHRcdF9vbkNvbXBsZXRlOiBmdW5jdGlvbiBfb25Db21wbGV0ZShkYXRhKSB7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiPH5pfj4gU0NTX0NsaWVudC5nZXRfTm9kZUxpc3QuX29uQ29tcGxldGVcIik7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5fb25Db21wbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMuX29uQ29tcGxldGUoZGF0YSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTQ1NfQ2xpZW50O1xufSgpO1xuXG4vKipcclxuICogR2V0IGEgbmV3IFNDU19DbGllbnRcclxuICogXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19SZWZ9IG9wdGlvbnMuc2NzIC0gU0NTIHJlZmVyZW5jZVxyXG4gKiBcclxuICogQHRocm93cyB7RXhjZXB0aW9ufVxyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gZ2V0X1NDU19DbGllbnQob3B0aW9ucykge1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdGlmIChvcHRpb25zLnNjcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MgaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdHZhciBzY3NDbGllbnQgPSBudWxsO1xuXG5cdHRyeSB7XG5cdFx0c2NzQ2xpZW50ID0gbmV3IFNDU19DbGllbnQoe1xuXHRcdFx0XCJjb25maWdcIjoge1xuXHRcdFx0XHRcInNjc1wiOiBvcHRpb25zLnNjc1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gVE9ETzogaGFuZGxlIGV4Y2VwdGlvblxuXHRcdHRocm93IFwiQ2Fubm90IGNyZWF0ZSBTQ1NfQ2xpZW50LiBcIiArIGU7XG5cdH1cblxuXHRyZXR1cm4gc2NzQ2xpZW50O1xufVxuXG52YXIgX2xpYiA9IHtcblxuXHRcIlNDU19DbGllbnRcIjogU0NTX0NsaWVudCxcblx0XCJnZXRfU0NTX0NsaWVudFwiOiBnZXRfU0NTX0NsaWVudCxcblx0XCJleGVjX1NDU1JlcXVlc3RcIjogZXhlY19TQ1NSZXF1ZXN0LFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU0NTX0NsaWVudFwiOiBnZXRfU0NTX0NsaWVudFxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TQ1NfQ2xpZW50LmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTZXJ2aWNlcyBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3QuZm9yYnJvd3Nlci5zZXJ2aWNlc1xyXG4gKiBAbWVtYmVyb2Ygc3RcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogaW1wb3J0IFNDUyBDbGllbnQgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xuXG52YXIgU0NTX0NsaWVudF9MaWIgPSByZXF1aXJlKCcuL1NDU19DbGllbnQuanMnKTtcblxudmFyIF9saWIgPSB7XG4gIFwiU0NTX0NsaWVudFwiOiBTQ1NfQ2xpZW50X0xpYi5TQ1NfQ2xpZW50LFxuXG4gIFwiX3B1YmxpY1wiOiB7XG4gICAgXCJnZXRfU0NTX0NsaWVudFwiOiBTQ1NfQ2xpZW50X0xpYi5fcHVibGljLmdldF9TQ1NfQ2xpZW50XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RTZXJ2aWNlcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeVxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXJcclxuICogQG1lbWJlcm9mIHN0XHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBpbXBvcnQgTm9kZXMgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xuXG52YXIgTm9kZXNfTGliID0gcmVxdWlyZSgnLi9ub2Rlcy9zdF9ub2Rlcy5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IFNlcnZlciBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgU2VydmVyX0xpYiA9IHJlcXVpcmUoJy4vc2VydmVyL3N0X3NlcnZlci5qcycpO1xuXG4vKipcclxuICogaW1wb3J0IFNlcnZpY2VzIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cbnZhciBTZXJ2aWNlc19MaWIgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3N0U2VydmljZXMuanMnKTtcblxuLyoqXHJcbiAqIGltcG9ydCBFbmdpbmVzIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cbnZhciBFbmdpbmVzX0xpYiA9IHJlcXVpcmUoJy4vZW5naW5lcy9zdEVuZ2luZXMuanMnKTtcblxuLyoqXHJcbiAqIGltcG9ydCBOZXR3b3JrIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cbnZhciBOZXR3b3JrX0xpYiA9IHJlcXVpcmUoJy4vbmV0d29yay9zdE5ldHdvcmsuanMnKTtcblxudmFyIHN0ID0ge307XG5zdC5mb3Jicm93c2VyID0ge1xuXG4gIFwibm9kZXNcIjogTm9kZXNfTGliLl9wdWJsaWMsXG4gIFwic2VydmVyXCI6IFNlcnZlcl9MaWIuX3B1YmxpYyxcbiAgXCJzZXJ2aWNlc1wiOiBTZXJ2aWNlc19MaWIuX3B1YmxpYyxcbiAgXCJlbmdpbmVzXCI6IEVuZ2luZXNfTGliLl9wdWJsaWMsXG4gIFwibmV0d29ya1wiOiBOZXR3b3JrX0xpYi5fcHVibGljXG59O1xuXG4vL2xldCBfbGliID0ge1xuLy9cdFx0XCJzdFwiOiBzdFxuLy9cdH07XG5cbm1vZHVsZS5leHBvcnRzID0gc3QuZm9yYnJvd3Nlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0Zm9yQnJvd3Nlci5qcy5tYXBcbiJdfQ==
