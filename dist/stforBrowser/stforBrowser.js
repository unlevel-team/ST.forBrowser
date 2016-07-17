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

var _lib = {
  "SCS_Requests_forEngines": SCS_Engines_Lib.SCS_Requests_forEngines,
  "get_SCS_Requests": SCS_Engines_Lib.get_SCS_Requests,

  "_public": {
    "get_SCS_Requests": SCS_Engines_Lib._public.get_SCS_Requests
  }
};

module.exports = _lib;


},{"./scs_engines.js":2}],4:[function(require,module,exports){
"use strict";

/**
 * AJAX method based on jQuery
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

	var _dataType = null;
	if (options.dataType === "json") {
		_dataType = "jsonp";
	} else {
		_dataType = options.dataType;
	}

	//    crossDomain: true,
	//    type:"GET",
	//    contentType: "application/json; charset=utf-8",
	//    async:false,

	jQuery.ajax({
		// URL for request
		url: options.url,

		// Data for send on request
		data: options.data,

		// type of request POST | GET
		type: options.type,

		// response type
		dataType: _dataType,

		// Allow crossdomain
		crossDomain: true,

		// Content type
		contentType: "application/json; charset=utf-8",

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

var jQuery_ajax = require("./jQuery_ajax.js").jQuery_ajax;

/**
 * import SCS for Network
 * @ignore
 */
var SCS_Network_Lib = require('./scs_network.js');

var _lib = {

  "jQuery_ajax": jQuery_ajax,

  "_public": {
    "jQuery_ajax": jQuery_ajax,
    "get_SCS_Requests": SCS_Network_Lib._public.get_SCS_Requests
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


},{}],8:[function(require,module,exports){
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


},{}],9:[function(require,module,exports){
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


},{}],10:[function(require,module,exports){
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


},{"./node.js":8,"./scs_nodes.js":9}],11:[function(require,module,exports){
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


},{}],12:[function(require,module,exports){
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


},{}],13:[function(require,module,exports){
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


},{"./server.js":12}],14:[function(require,module,exports){
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

	// Import jQuery_ajax
	var jQuery_ajax = require('../network/stNetwork.js').jQuery_ajax;

	var promise = new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…
		// resolve or reject...

		jQuery_ajax({
			// URL for request
			url: _url,

			// Data for send on request
			data: _scsRequest.data,

			// type of request POST | GET
			type: _scsRequest.type,

			// response type
			dataType: _scsRequest.dataType,

			// on success
			_onSuccess: function _onSuccess(data) {

				// Emit event Nodelist_Received
				//		    	let event = new Event(scsClient.CONSTANTS.Events.Nodelist_Received,
				//		    			{
				//		    				"data": data
				//		    			});
				//		    	
				//		    	scsClient.dispatchEvent(event);

				console.log("<~i~> exec_SCSRequest._onSuccess"); // TODO REMOVE DEBUG LOG
				console.log(data); // TODO REMOVE DEBUG LOG

				if (_reqOptions._onSuccess !== undefined) {
					_reqOptions._onSuccess(data);
				}

				resolve(data);
			},

			// on error
			_onError: function _onError(data) {

				console.log("<~i~> exec_SCSRequest._onError"); // TODO REMOVE DEBUG LOG
				console.log(data); // TODO REMOVE DEBUG LOG

				if (_reqOptions._onError !== undefined) {
					_reqOptions._onError(data);
				}

				reject(Error("It broke"));
			},

			// on complete
			_onComplete: function _onComplete(data) {

				console.log("<~i~> exec_SCSRequest._onComplete"); // TODO REMOVE DEBUG LOG
				console.log(data); // TODO REMOVE DEBUG LOG

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


},{"../network/stNetwork.js":6}],15:[function(require,module,exports){
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


},{"./SCS_Client.js":14}],16:[function(require,module,exports){
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


},{"./engines/stEngines.js":3,"./network/stNetwork.js":6,"./nodes/st_nodes.js":10,"./server/st_server.js":13,"./services/stServices.js":15}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])(16)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvZW5naW5lcy9BY3R1YXRvckVuZ2luZS5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9lbmdpbmVzL3Njc19lbmdpbmVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL2VuZ2luZXMvc3RFbmdpbmVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25ldHdvcmsvalF1ZXJ5X2FqYXguanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbmV0d29yay9zY3NfbmV0d29yay5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9uZXR3b3JrL3N0TmV0d29yay5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9ub2RlLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25vZGVzL25vZGUuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvbm9kZXMvc2NzX25vZGVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL25vZGVzL3N0X25vZGVzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3NlcnZlci5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2ZXIvc2VydmVyLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3NlcnZlci9zdF9zZXJ2ZXIuanMiLCJidWlsZC9zdGZvckJyb3dzZXIvc2VydmljZXMvU0NTX0NsaWVudC5qcyIsImJ1aWxkL3N0Zm9yQnJvd3Nlci9zZXJ2aWNlcy9zdFNlcnZpY2VzLmpzIiwiYnVpbGQvc3Rmb3JCcm93c2VyL3N0Zm9yQnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIEFjdHVhdG9yRW5naW5lIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0dWF0b3JFbmdpbmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNDUyBSZXF1ZXN0IGZvciBlbmdpbmVzIFxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lc1xyXG4gICovXG5cblx0ZnVuY3Rpb24gU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNDU19SZXF1ZXN0c19mb3JFbmdpbmVzKTtcblx0fVxuXG5cdC8qKlxyXG4gICogR2V0IHNlbnNvcnMgbGlzdFxyXG4gICogXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgKiBcclxuICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgKiBcclxuICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICovXG5cblxuXHRfY3JlYXRlQ2xhc3MoU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMsIFt7XG5cdFx0a2V5OiBcImdldF9TZW5zb3JzTGlzdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRfU2Vuc29yc0xpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG51bGw7XG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0X3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHRyZXR1cm4gX3Njc0NsaWVudC5leGVjX1NDU19SZXF1ZXN0KHtcblx0XHRcdFx0XCJzY3NSZXF1ZXN0XCI6IHtcblx0XHRcdFx0XHRcInVybFwiOiBcIi9uZ24vU2Vuc29ycy9MaXN0XCIsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBhY3R1YXRvcnMgbGlzdFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcImdldF9BY3R1YXRvcnNMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9BY3R1YXRvcnNMaXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBudWxsO1xuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogXCIvbmduL0FjdHVhdG9ycy9MaXN0XCIsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIEdldCBzZW5zb3Igb3B0aW9uc1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwiZ2V0X1NlbnNvck9wdGlvbnNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0X1NlbnNvck9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zZW5zb3JJRCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2Vuc29ySUQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2Vuc29ySUQgPSBvcHRpb25zLnNlbnNvcklEO1xuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0Ly8gaHR0cDovL3t7c3RTZXJ2ZXJ9fTp7e2NjfX0vbmduL1NlbnNvcnMve3tub2RlSUR9fS57e3NlbnNvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vU2Vuc29ycy9cIiArIF9zZW5zb3JJRCArIFwiL29wdGlvbnNcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogR2V0IGFjdHVhdG9yIG9wdGlvbnNcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJnZXRfQWN0dWF0b3JPcHRpb25zXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9BY3R1YXRvck9wdGlvbnMob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJhY3R1YXRvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2FjdHVhdG9ySUQgPSBvcHRpb25zLmFjdHVhdG9ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vQWN0dWF0b3JzL3t7bm9kZUlEfX0ue3thY3R1YXRvcklEfX0vb3B0aW9uc1xuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vQWN0dWF0b3JzL1wiICsgX2FjdHVhdG9ySUQgKyBcIi9vcHRpb25zXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIFN0YXJ0IHNlbnNvclxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbnNvcklEIC0gc2Vuc29yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic3RhcnRfU2Vuc29yXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHN0YXJ0X1NlbnNvcihvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnNlbnNvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzZW5zb3JJRCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zZW5zb3JJRCA9IG9wdGlvbnMuc2Vuc29ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vU2Vuc29ycy97e25vZGVJRH19Lnt7c2Vuc29ySUR9fS9zdGFydFxuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vU2Vuc29ycy9cIiArIF9zZW5zb3JJRCArIFwiL3N0YXJ0XCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIFN0YXJ0IGFjdHVhdG9yXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0dWF0b3JJRCAtIGFjdHVhdG9yIElEXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IG9wdGlvbnMuc2NzQ2xpZW50IC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAqL1xuXG5cdH0sIHtcblx0XHRrZXk6IFwic3RhcnRfQWN0dWF0b3JcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc3RhcnRfQWN0dWF0b3Iob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJhY3R1YXRvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2FjdHVhdG9ySUQgPSBvcHRpb25zLmFjdHVhdG9ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vQWN0dWF0b3JzL3t7bm9kZUlEfX0ue3thY3R1YXRvcklEfX0vc3RhcnRcblx0XHRcdHZhciBfdXJsID0gXCIvbmduL0FjdHVhdG9ycy9cIiArIF9hY3R1YXRvcklEICsgXCIvc3RhcnRcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXHJcbiAgICogU3RvcCBzZW5zb3JcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZW5zb3JJRCAtIHNlbnNvciBJRFxyXG4gICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfQ2xpZW50fSBvcHRpb25zLnNjc0NsaWVudCAtIFNDU19DbGllbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uRXJyb3JdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGVycm9yXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uQ29tcGxldGVdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIGNvbXBsZXRlXHJcbiAgICogXHJcbiAgICogQHRocm93cyBFeGNlcHRpb25cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcInN0b3BfU2Vuc29yXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHN0b3BfU2Vuc29yKG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdGlvbnMuc2Vuc29ySUQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNlbnNvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3NlbnNvcklEID0gb3B0aW9ucy5zZW5zb3JJRDtcblxuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdHZhciBfc2NzQ2xpZW50ID0gb3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0XHRcdC8vIGh0dHA6Ly97e3N0U2VydmVyfX06e3tjY319L25nbi9TZW5zb3JzL3t7bm9kZUlEfX0ue3tzZW5zb3JJRH19L3N0b3Bcblx0XHRcdHZhciBfdXJsID0gXCIvbmduL1NlbnNvcnMvXCIgKyBfc2Vuc29ySUQgKyBcIi9zdG9wXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxyXG4gICAqIFN0b3AgYWN0dWF0b3JcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3R1YXRvcklEIC0gYWN0dWF0b3IgSURcclxuICAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuX29uU3VjY2Vzc10gLSBGdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICAqIFxyXG4gICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogXCJzdG9wX0FjdHVhdG9yXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHN0b3BfQWN0dWF0b3Iob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5hY3R1YXRvcklEID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJhY3R1YXRvcklEIGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2FjdHVhdG9ySUQgPSBvcHRpb25zLmFjdHVhdG9ySUQ7XG5cblx0XHRcdGlmIChvcHRpb25zLnNjc0NsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzQ2xpZW50IGlzIHJlcXVpcmVkXCI7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3Njc0NsaWVudCA9IG9wdGlvbnMuc2NzQ2xpZW50O1xuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9uZ24vQWN0dWF0b3JzL3t7bm9kZUlEfX0ue3thY3R1YXRvcklEfX0vc3RvcFxuXHRcdFx0dmFyIF91cmwgPSBcIi9uZ24vQWN0dWF0b3JzL1wiICsgX2FjdHVhdG9ySUQgKyBcIi9zdG9wXCI7XG5cblx0XHRcdHJldHVybiBfc2NzQ2xpZW50LmV4ZWNfU0NTX1JlcXVlc3Qoe1xuXHRcdFx0XHRcInNjc1JlcXVlc3RcIjoge1xuXHRcdFx0XHRcdFwidXJsXCI6IF91cmwsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFx0XCJkYXRhXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJkYXRhVHlwZVwiOiBcImpzb25cIixcblxuXHRcdFx0XHRcdFwib3B0aW9uc1wiOiBvcHRpb25zXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTQ1NfUmVxdWVzdHNfZm9yRW5naW5lcztcbn0oKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLmVuZ2luZXMuU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXN9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9TQ1NfUmVxdWVzdHMoKSB7XG5cdHJldHVybiBuZXcgU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMoKTtcbn1cblxudmFyIF9saWIgPSB7XG5cdFwiU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXNcIjogU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXMsXG5cdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHNcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NzX2VuZ2luZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIDxwcmU+XHJcbiAqIEVuZ2luZXMgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIDwvcHJlPlxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyLmVuZ2luZXNcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICovXG5cbi8qKlxyXG4gKiBpbXBvcnQgU0NTIEVuZ2luZXNcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIFNDU19FbmdpbmVzX0xpYiA9IHJlcXVpcmUoJy4vc2NzX2VuZ2luZXMuanMnKTtcblxudmFyIF9saWIgPSB7XG4gIFwiU0NTX1JlcXVlc3RzX2ZvckVuZ2luZXNcIjogU0NTX0VuZ2luZXNfTGliLlNDU19SZXF1ZXN0c19mb3JFbmdpbmVzLFxuICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX0VuZ2luZXNfTGliLmdldF9TQ1NfUmVxdWVzdHMsXG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX0VuZ2luZXNfTGliLl9wdWJsaWMuZ2V0X1NDU19SZXF1ZXN0c1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdEVuZ2luZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIEFKQVggbWV0aG9kIGJhc2VkIG9uIGpRdWVyeVxyXG4gKiBcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5ldHdvcmtcclxuICogXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVybCAtIFVSTFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5kYXRhIC0gZGF0YVx0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR5cGUgLSBHRVQgb3IgUE9TVFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kYXRhVHlwZSAtIFJlc3BvbnNlIHR5cGUgKGpzb24vdGV4dC9odG1sLi4uKVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICogXHJcbiAqIFxyXG4gKi9cblxuZnVuY3Rpb24galF1ZXJ5X2FqYXgob3B0aW9ucykge1xuXG5cdHZhciBfZGF0YVR5cGUgPSBudWxsO1xuXHRpZiAob3B0aW9ucy5kYXRhVHlwZSA9PT0gXCJqc29uXCIpIHtcblx0XHRfZGF0YVR5cGUgPSBcImpzb25wXCI7XG5cdH0gZWxzZSB7XG5cdFx0X2RhdGFUeXBlID0gb3B0aW9ucy5kYXRhVHlwZTtcblx0fVxuXG5cdC8vICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuXHQvLyAgICB0eXBlOlwiR0VUXCIsXG5cdC8vICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcblx0Ly8gICAgYXN5bmM6ZmFsc2UsXG5cblx0alF1ZXJ5LmFqYXgoe1xuXHRcdC8vIFVSTCBmb3IgcmVxdWVzdFxuXHRcdHVybDogb3B0aW9ucy51cmwsXG5cblx0XHQvLyBEYXRhIGZvciBzZW5kIG9uIHJlcXVlc3Rcblx0XHRkYXRhOiBvcHRpb25zLmRhdGEsXG5cblx0XHQvLyB0eXBlIG9mIHJlcXVlc3QgUE9TVCB8IEdFVFxuXHRcdHR5cGU6IG9wdGlvbnMudHlwZSxcblxuXHRcdC8vIHJlc3BvbnNlIHR5cGVcblx0XHRkYXRhVHlwZTogX2RhdGFUeXBlLFxuXG5cdFx0Ly8gQWxsb3cgY3Jvc3Nkb21haW5cblx0XHRjcm9zc0RvbWFpbjogdHJ1ZSxcblxuXHRcdC8vIENvbnRlbnQgdHlwZVxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcblxuXHRcdC8vIEFzeW5jaHJvbm91c1xuXHRcdGFzeW5jOiB0cnVlLFxuXG5cdFx0Ly8gb24gc3VjY2Vzc1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoanNvbikge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5fb25TdWNjZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0b3B0aW9ucy5fb25TdWNjZXNzKGpzb24pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBvbiBlcnJvclxuXHRcdGVycm9yOiBmdW5jdGlvbiBlcnJvcih4aHIsIHN0YXR1cykge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5fb25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG9wdGlvbnMuX29uRXJyb3Ioe1xuXHRcdFx0XHRcdFwieGhyXCI6IHhocixcblx0XHRcdFx0XHRcInN0YXR1c1wiOiBzdGF0dXNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIG9uIGNvbXBsZXRlXG5cdFx0Y29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHhociwgc3RhdHVzKSB7XG5cblx0XHRcdGlmIChvcHRpb25zLl9vbkNvbXBsZXRlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0b3B0aW9ucy5fb25Db21wbGV0ZSh7XG5cdFx0XHRcdFx0XCJ4aHJcIjogeGhyLFxuXHRcdFx0XHRcdFwic3RhdHVzXCI6IHN0YXR1c1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG52YXIgX2xpYiA9IHtcblxuXHRcImpRdWVyeV9hamF4XCI6IGpRdWVyeV9hamF4LFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJqUXVlcnlfYWpheFwiOiBqUXVlcnlfYWpheFxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qUXVlcnlfYWpheC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU0NTIFJlcXVlc3QgZm9yIE5ldHdvcmsgXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubmV0d29ya1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTQ1NfUmVxdWVzdHNfZm9yTmV0ID0gZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxyXG4gICogQGNvbnN0cnVjdHMgU0NTX1JlcXVlc3RzX2Zvck5ldFxyXG4gICovXG5cblx0ZnVuY3Rpb24gU0NTX1JlcXVlc3RzX2Zvck5ldCgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU0NTX1JlcXVlc3RzX2Zvck5ldCk7XG5cdH1cblxuXHQvKipcclxuICAqIEdldCBEYXRhIGNoYW5uZWxzIGxpc3RcclxuICAqIFxyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICogXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uZXRDb250ZXh0IC0gU2hvdWxkIGJlIFwic2VydmVyXCIgb3IgXCJub2Rlc1wiXHJcbiAgKiBcclxuICAqIFxyXG4gICogQHRocm93cyBFeGNlcHRpb25cclxuICAqIFxyXG4gICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgKi9cblxuXG5cdF9jcmVhdGVDbGFzcyhTQ1NfUmVxdWVzdHNfZm9yTmV0LCBbe1xuXHRcdGtleTogXCJnZXRfRENMaXN0XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldF9EQ0xpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBcInNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0aWYgKG9wdGlvbnMubmV0Q29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwibmV0Q29udGV4dCBpcyByZXF1aXJlZFwiO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9uZXRDb250ZXh0ID0gb3B0aW9ucy5uZXRDb250ZXh0O1xuXG5cdFx0XHRzd2l0Y2ggKF9uZXRDb250ZXh0KSB7XG5cdFx0XHRcdGNhc2UgJ3NlcnZlcic6XG5cdFx0XHRcdGNhc2UgJ25vZGVzJzpcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJuZXRDb250ZXh0IGlzIHdyb25nLlwiO1xuXHRcdFx0XHQvL1x0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwOi8ve3tzdFNlcnZlcn19Ont7Y2N9fS9OZXQvTm9kZXMvTGlzdFxuXHRcdFx0dmFyIF91cmwgPSBcIi9OZXQvXCIgKyBfbmV0Q29udGV4dCArIFwiL0xpc3RcIjtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogX3VybCxcblx0XHRcdFx0XHRcInR5cGVcIjogXCJHRVRcIixcblx0XHRcdFx0XHRcImRhdGFcIjogbnVsbCxcblx0XHRcdFx0XHRcImRhdGFUeXBlXCI6IFwianNvblwiLFxuXG5cdFx0XHRcdFx0XCJvcHRpb25zXCI6IG9wdGlvbnNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNDU19SZXF1ZXN0c19mb3JOZXQ7XG59KCk7XG5cbi8qKlxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5uZXR3b3JrXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5uZXR3b3JrLlNDU19SZXF1ZXN0c19mb3JOZXR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9TQ1NfUmVxdWVzdHMoKSB7XG5cdHJldHVybiBuZXcgU0NTX1JlcXVlc3RzX2Zvck5ldCgpO1xufVxuXG52YXIgX2xpYiA9IHtcblx0XCJTQ1NfUmVxdWVzdHNfZm9yTmV0XCI6IFNDU19SZXF1ZXN0c19mb3JOZXQsXG5cdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHNcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NzX25ldHdvcmsuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIE5ldHdvcmsgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXIubmV0d29ya1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIEltcG9ydCBqUXVlcnlfYWpheFxyXG4gKiBcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIGpRdWVyeV9hamF4ID0gcmVxdWlyZShcIi4valF1ZXJ5X2FqYXguanNcIikualF1ZXJ5X2FqYXg7XG5cbi8qKlxyXG4gKiBpbXBvcnQgU0NTIGZvciBOZXR3b3JrXHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgU0NTX05ldHdvcmtfTGliID0gcmVxdWlyZSgnLi9zY3NfbmV0d29yay5qcycpO1xuXG52YXIgX2xpYiA9IHtcblxuICBcImpRdWVyeV9hamF4XCI6IGpRdWVyeV9hamF4LFxuXG4gIFwiX3B1YmxpY1wiOiB7XG4gICAgXCJqUXVlcnlfYWpheFwiOiBqUXVlcnlfYWpheCxcbiAgICBcImdldF9TQ1NfUmVxdWVzdHNcIjogU0NTX05ldHdvcmtfTGliLl9wdWJsaWMuZ2V0X1NDU19SZXF1ZXN0c1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9saWI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdE5ldHdvcmsuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIE5vZGUgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBUaGUgTm9kZV9Db25maWcgb2JqZWN0LlxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gTm9kZV9Db25maWdcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZCAtIE5hbWVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBUeXBlXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIE5vZGVcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuTm9kZV9Db25maWd9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqL1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlID1cblxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RzIE5vZGVcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLk5vZGVfQ29uZmlnfSBvcHRpb25zLmNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICovXG5mdW5jdGlvbiBOb2RlKG9wdGlvbnMpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBub2RlID0gdGhpcztcblx0bm9kZS5jb25maWcgPSBudWxsO1xuXG5cdGlmIChvcHRpb25zLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0bm9kZS5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblx0fVxufTtcblxuLyoqXHJcbiAqIE5vZGUgcmVmZXJlbmNlXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHByb3RlY3RlZFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKiBAaW1wbGVtZW50cyBzdC5mb3Jicm93c2VyLk5vZGVcclxuICogXHJcbiAqL1xuXG5cbnZhciBOb2RlX1JlZiA9IGZ1bmN0aW9uIChfTm9kZSkge1xuXHRfaW5oZXJpdHMoTm9kZV9SZWYsIF9Ob2RlKTtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIE5vZGVfUmVmXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBOb2RlX1JlZihvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVfUmVmKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9kZV9SZWYpLmNhbGwodGhpcywgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE5vZGVfUmVmO1xufShOb2RlKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLk5vZGVfUmVmfVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfTm9kZV9SZWYob3B0aW9ucykge1xuXG5cdHJldHVybiBuZXcgTm9kZV9SZWYob3B0aW9ucyk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIk5vZGVcIjogTm9kZSxcblx0XCJOb2RlX1JlZlwiOiBOb2RlX1JlZixcblx0XCJnZXRfTm9kZV9SZWZcIjogZ2V0X05vZGVfUmVmLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfTm9kZV9SZWZcIjogZ2V0X05vZGVfUmVmXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIE5vZGUgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBUaGUgTm9kZV9Db25maWcgb2JqZWN0LlxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gTm9kZV9Db25maWdcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZCAtIE5hbWVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBUeXBlXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIE5vZGVcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuTm9kZV9Db25maWd9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqL1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlID1cblxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RzIE5vZGVcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLm5vZGVzLk5vZGVfQ29uZmlnfSBvcHRpb25zLmNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICovXG5mdW5jdGlvbiBOb2RlKG9wdGlvbnMpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBub2RlID0gdGhpcztcblx0bm9kZS5jb25maWcgPSBudWxsO1xuXG5cdGlmIChvcHRpb25zLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0bm9kZS5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblx0fVxufTtcblxuLyoqXHJcbiAqIE5vZGUgcmVmZXJlbmNlXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHByb3RlY3RlZFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBAaW1wbGVtZW50cyBzdC5mb3Jicm93c2VyLm5vZGVzLk5vZGVcclxuICogXHJcbiAqL1xuXG5cbnZhciBOb2RlX1JlZiA9IGZ1bmN0aW9uIChfTm9kZSkge1xuXHRfaW5oZXJpdHMoTm9kZV9SZWYsIF9Ob2RlKTtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIE5vZGVfUmVmXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBOb2RlX1JlZihvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVfUmVmKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9kZV9SZWYpLmNhbGwodGhpcywgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIE5vZGVfUmVmO1xufShOb2RlKTtcblxuLyoqXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLm5vZGVzXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLm5vZGVzLk5vZGVfUmVmfVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRfTm9kZV9SZWYob3B0aW9ucykge1xuXG5cdHJldHVybiBuZXcgTm9kZV9SZWYob3B0aW9ucyk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIk5vZGVcIjogTm9kZSxcblx0XCJOb2RlX1JlZlwiOiBOb2RlX1JlZixcblx0XCJnZXRfTm9kZV9SZWZcIjogZ2V0X05vZGVfUmVmLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfTm9kZV9SZWZcIjogZ2V0X05vZGVfUmVmXG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNDUyBSZXF1ZXN0IGZvciBub2RlcyBcclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5ub2Rlc1xyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTQ1NfUmVxdWVzdHNfZm9yTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTQ1NfUmVxdWVzdHNfZm9yTm9kZXNcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNDU19SZXF1ZXN0c19mb3JOb2RlcygpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU0NTX1JlcXVlc3RzX2Zvck5vZGVzKTtcblx0fVxuXG5cdC8qKlxyXG4gICogR2V0IG5vZGVzIGxpc3RcclxuICAqIFxyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkNvbXBsZXRlXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBjb21wbGV0ZVxyXG4gICogXHJcbiAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICogXHJcbiAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAqL1xuXG5cblx0X2NyZWF0ZUNsYXNzKFNDU19SZXF1ZXN0c19mb3JOb2RlcywgW3tcblx0XHRrZXk6IFwiZ2V0X05vZGVzTGlzdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRfTm9kZXNMaXN0KG9wdGlvbnMpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9zY3NDbGllbnQgPSBudWxsO1xuXHRcdFx0aWYgKG9wdGlvbnMuc2NzQ2xpZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgXCJzY3NDbGllbnQgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdF9zY3NDbGllbnQgPSBvcHRpb25zLnNjc0NsaWVudDtcblxuXHRcdFx0cmV0dXJuIF9zY3NDbGllbnQuZXhlY19TQ1NfUmVxdWVzdCh7XG5cdFx0XHRcdFwic2NzUmVxdWVzdFwiOiB7XG5cdFx0XHRcdFx0XCJ1cmxcIjogXCIvTm9kZXMvTGlzdFwiLFxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcdFwiZGF0YVwiOiBudWxsLFxuXHRcdFx0XHRcdFwiZGF0YVR5cGVcIjogXCJqc29uXCIsXG5cblx0XHRcdFx0XHRcIm9wdGlvbnNcIjogb3B0aW9uc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU0NTX1JlcXVlc3RzX2Zvck5vZGVzO1xufSgpO1xuXG4vKipcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIubm9kZXMgXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7c3QuZm9yYnJvd3Nlci5ub2Rlcy5TQ1NfUmVxdWVzdHNfZm9yTm9kZXN9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9TQ1NfUmVxdWVzdHMoKSB7XG5cdHJldHVybiBuZXcgU0NTX1JlcXVlc3RzX2Zvck5vZGVzKCk7XG59XG5cbnZhciBfbGliID0ge1xuXHRcIlNDU19SZXF1ZXN0c19mb3JOb2Rlc1wiOiBTQ1NfUmVxdWVzdHNfZm9yTm9kZXMsXG5cdFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBnZXRfU0NTX1JlcXVlc3RzLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU0NTX1JlcXVlc3RzXCI6IGdldF9TQ1NfUmVxdWVzdHNcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NzX25vZGVzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiA8cHJlPlxyXG4gKiBOb2RlcyBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogPC9wcmU+XHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXIubm9kZXNcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICovXG5cbi8qKlxyXG4gKiBpbXBvcnQgTm9kZSBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG5cbnZhciBfTm9kZV9MaWIgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcblxuLyoqXHJcbiAqIGltcG9ydCBTQ1MgZm9yIE5vZGVzXHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgU0NTX05vZGVzX0xpYiA9IHJlcXVpcmUoJy4vc2NzX25vZGVzLmpzJyk7XG5cbnZhciBfbGliID0ge1xuXG4gIFwiX3B1YmxpY1wiOiB7XG4gICAgXCJnZXRfTm9kZV9SZWZcIjogX05vZGVfTGliLl9wdWJsaWMuZ2V0X05vZGVfUmVmLFxuICAgIFwiZ2V0X1NDU19SZXF1ZXN0c1wiOiBTQ1NfTm9kZXNfTGliLmdldF9TQ1NfUmVxdWVzdHNcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rfbm9kZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFNlcnZlciBtb2R1bGUgZm9yLi4uXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnkgZm9yIGJyb3dzZXJcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIFRoZSBTZXJ2ZXJfQ29uZmlnIG9iamVjdC5cclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlcnZlcl9Db25maWdcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZVxyXG4gKiBcclxuICogQHByb3BlcnR5IHtvYmplY3R9IHNjcyAtIHNjcyBjb25maWd1cmF0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzY3MubmV0TG9jYXRpb24gLSBOZXQgbG9jYXRpb25cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjcy5jb250cm9sUG9ydCAtIENvbnRyb2wgcG9ydFxyXG4gKi9cblxuLyoqXHJcbiAqIEdldCBTZXJ2ZXIgY29uZmlndXJhdGlvblxyXG4gKiBcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQHB1YmxpY1xyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuU2VydmVyX0NvbmZpZ30gb3B0aW9ucy5jb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqIFxyXG4gKiBAdGhyb3dzIEV4Y2VwdGlvbnNcclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLlNlcnZlcl9Db25maWd9XHJcbiAqL1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldF9TZXJ2ZXJfQ29uZmlnKG9wdGlvbnMpIHtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHRpZiAob3B0aW9ucy5jb25maWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwiQ29uZmlnIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcImNvbmZpZyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdHZhciBzZXJ2ZXJDb25maWcgPSB7XG5cdFx0XCJ0eXBlXCI6IFwiU1RTZXJ2ZXJcIixcblx0XHRcInNjc1wiOiB7XG5cdFx0XHRcIm5ldExvY2F0aW9uXCI6IG51bGwsXG5cdFx0XHRcImNvbnRyb2xQb3J0XCI6IG51bGxcblx0XHR9XG5cdH07XG5cblx0dmFyIF9jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblxuXHRpZiAoX2NvbmZpZy5zY3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKF9jb25maWcuc2NzLm5ldExvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcy5uZXRMb2NhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChfY29uZmlnLnNjcy5jb250cm9sUG9ydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MuY29udHJvbFBvcnQgb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHRzZXJ2ZXJDb25maWcuc2NzLm5ldExvY2F0aW9uID0gX2NvbmZpZy5zY3MubmV0TG9jYXRpb247XG5cdHNlcnZlckNvbmZpZy5zY3MuY29udHJvbFBvcnQgPSBfY29uZmlnLnNjcy5jb250cm9sUG9ydDtcblxuXHRyZXR1cm4gc2VydmVyQ29uZmlnO1xufVxuXG4vKipcclxuICogU2VydmVyXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtzdC5mb3Jicm93c2VyLlNlcnZlcl9Db25maWd9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqL1xuXG52YXIgU2VydmVyID1cblxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RzIFNlcnZlclxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5TZXJ2ZXJfQ29uZmlnfSBbb3B0aW9ucy5jb25maWddIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cbmZ1bmN0aW9uIFNlcnZlcihvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXIpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBzZXJ2ZXIgPSB0aGlzO1xuXHRzZXJ2ZXIuY29uZmlnID0gbnVsbDtcblxuXHRpZiAob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlcnZlci5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblx0fVxufTtcblxuLyoqXHJcbiAqIFNlcnZlcl9SZWZcclxuICogXHJcbiAqIDxwcmU+XHJcbiAqIFJlZmVyZW5jZSB0byBhIHNlcnZlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXJcclxuICogQGltcGxlbWVudHMgc3QuZm9yYnJvd3Nlci5TZXJ2ZXJcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICovXG5cblxudmFyIFNlcnZlcl9SZWYgPSBmdW5jdGlvbiAoX1NlcnZlcikge1xuXHRfaW5oZXJpdHMoU2VydmVyX1JlZiwgX1NlcnZlcik7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTZXJ2ZXJfUmVmXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBTZXJ2ZXJfUmVmKG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyX1JlZik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlcnZlcl9SZWYpLmNhbGwodGhpcywgb3B0aW9ucykpO1xuXHR9XG5cblx0cmV0dXJuIFNlcnZlcl9SZWY7XG59KFNlcnZlcik7XG5cbnZhciBfbGliID0ge1xuXHRcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IGdldF9TZXJ2ZXJfQ29uZmlnLFxuXHRcIlNlcnZlclwiOiBTZXJ2ZXIsXG5cdFwiU2VydmVyX1JlZlwiOiBTZXJ2ZXJfUmVmLFxuXG5cdFwiX3B1YmxpY1wiOiB7XG5cdFx0XCJnZXRfU2VydmVyX0NvbmZpZ1wiOiBnZXRfU2VydmVyX0NvbmZpZ1xuXHR9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcnZlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU2VydmVyIG1vZHVsZSBmb3IuLi5cclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogVGhlIFNlcnZlcl9Db25maWcgb2JqZWN0LlxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gU2VydmVyX0NvbmZpZ1xyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2ZXJcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVHlwZVxyXG4gKiBcclxuICogQHByb3BlcnR5IHtvYmplY3R9IHNjcyAtIHNjcyBjb25maWd1cmF0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzY3MubmV0TG9jYXRpb24gLSBOZXQgbG9jYXRpb25cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjcy5jb250cm9sUG9ydCAtIENvbnRyb2wgcG9ydFxyXG4gKi9cblxuLyoqXHJcbiAqIEdldCBTZXJ2ZXIgY29uZmlndXJhdGlvblxyXG4gKiBcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBwdWJsaWNcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJfQ29uZmlnfSBvcHRpb25zLmNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICogXHJcbiAqIEB0aHJvd3MgRXhjZXB0aW9uc1xyXG4gKiBcclxuICogQHJldHVybnMge3N0LmZvcmJyb3dzZXIuc2VydmVyLlNlcnZlcl9Db25maWd9XHJcbiAqL1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldF9TZXJ2ZXJfQ29uZmlnKG9wdGlvbnMpIHtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHRpZiAob3B0aW9ucy5jb25maWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwiQ29uZmlnIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuY29uZmlnID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcImNvbmZpZyBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdHZhciBzZXJ2ZXJDb25maWcgPSB7XG5cdFx0XCJ0eXBlXCI6IFwiU1RTZXJ2ZXJcIixcblx0XHRcInNjc1wiOiB7XG5cdFx0XHRcIm5ldExvY2F0aW9uXCI6IG51bGwsXG5cdFx0XHRcImNvbnRyb2xQb3J0XCI6IG51bGxcblx0XHR9XG5cdH07XG5cblx0dmFyIF9jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblxuXHRpZiAoX2NvbmZpZy5zY3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzIG9wdGlvbiBpcyByZXF1aXJlZFwiO1xuXHR9XG5cblx0aWYgKF9jb25maWcuc2NzLm5ldExvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBcInNjcy5uZXRMb2NhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIjtcblx0fVxuXG5cdGlmIChfY29uZmlnLnNjcy5jb250cm9sUG9ydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgXCJzY3MuY29udHJvbFBvcnQgb3B0aW9uIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHRzZXJ2ZXJDb25maWcuc2NzLm5ldExvY2F0aW9uID0gX2NvbmZpZy5zY3MubmV0TG9jYXRpb247XG5cdHNlcnZlckNvbmZpZy5zY3MuY29udHJvbFBvcnQgPSBfY29uZmlnLnNjcy5jb250cm9sUG9ydDtcblxuXHRyZXR1cm4gc2VydmVyQ29uZmlnO1xufVxuXG4vKipcclxuICogU2VydmVyXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3QuZm9yYnJvd3Nlci5zZXJ2ZXIuU2VydmVyX0NvbmZpZ30gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKiBcclxuICovXG5cbnZhciBTZXJ2ZXIgPVxuXG4vKipcclxuICogQGNvbnN0cnVjdHMgU2VydmVyXHJcbiAqIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBvYmplY3RcclxuICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZlci5TZXJ2ZXJfQ29uZmlnfSBbb3B0aW9ucy5jb25maWddIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cbmZ1bmN0aW9uIFNlcnZlcihvcHRpb25zKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXIpO1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBzZXJ2ZXIgPSB0aGlzO1xuXHRzZXJ2ZXIuY29uZmlnID0gbnVsbDtcblxuXHRpZiAob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlcnZlci5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblx0fVxufTtcblxuLyoqXHJcbiAqIFNlcnZlcl9SZWZcclxuICogXHJcbiAqIDxwcmU+XHJcbiAqIFJlZmVyZW5jZSB0byBhIHNlcnZlclxyXG4gKiA8L3ByZT5cclxuICogXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmVyXHJcbiAqIEBpbXBsZW1lbnRzIHN0LmZvcmJyb3dzZXIuc2VydmVyLlNlcnZlclxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqIFxyXG4gKi9cblxuXG52YXIgU2VydmVyX1JlZiA9IGZ1bmN0aW9uIChfU2VydmVyKSB7XG5cdF9pbmhlcml0cyhTZXJ2ZXJfUmVmLCBfU2VydmVyKTtcblxuXHQvKipcclxuICAqIEBjb25zdHJ1Y3RzIFNlcnZlcl9SZWZcclxuICAqL1xuXG5cdGZ1bmN0aW9uIFNlcnZlcl9SZWYob3B0aW9ucykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXJfUmVmKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VydmVyX1JlZikuY2FsbCh0aGlzLCBvcHRpb25zKSk7XG5cdH1cblxuXHRyZXR1cm4gU2VydmVyX1JlZjtcbn0oU2VydmVyKTtcblxudmFyIF9saWIgPSB7XG5cdFwiZ2V0X1NlcnZlcl9Db25maWdcIjogZ2V0X1NlcnZlcl9Db25maWcsXG5cdFwiU2VydmVyXCI6IFNlcnZlcixcblx0XCJTZXJ2ZXJfUmVmXCI6IFNlcnZlcl9SZWYsXG5cblx0XCJfcHVibGljXCI6IHtcblx0XHRcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IGdldF9TZXJ2ZXJfQ29uZmlnXG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiA8cHJlPlxyXG4gKiBTZXJ2ZXIgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIDwvcHJlPlxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyLnNlcnZlclxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3NlclxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBOb2RlIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIF9TZXJ2ZXJfTGliID0gcmVxdWlyZSgnLi9zZXJ2ZXIuanMnKTtcblxudmFyIF9saWIgPSB7XG5cbiAgXCJfcHVibGljXCI6IHtcbiAgICBcImdldF9TZXJ2ZXJfQ29uZmlnXCI6IF9TZXJ2ZXJfTGliLl9wdWJsaWMuZ2V0X1NlcnZlcl9Db25maWdcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Rfc2VydmVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBFdmVudHMgLSBFdmVudHNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEV2ZW50cy5Ob2RlbGlzdF9SZWNlaXZlZCAtIE5vZGVMaXN0IHJldmVpY2VkXHJcbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0NTX0NsaWVudF9DT05TVEFOVFMgPSB7XG5cblx0XCJFdmVudHNcIjoge1xuXHRcdFwiTm9kZWxpc3RfUmVjZWl2ZWRcIjogXCJOb2RlTGlzdCByZXZlaWNlZFwiXG5cdH1cblxufTtcblxuLyoqXHJcbiAqIFNlcnZlciBjb250cm9sIHN5c3RlbSByZWZlcmVuY2VcclxuICogXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNDU19SZWZcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXRMb2NhdGlvbiAtIE5ldCBsb2NhdGlvblxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29udHJvbFBvcnQgLSBDb250cm9sIHBvcnRcclxuICovXG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gcmVxdWVzdFxyXG4gKiBcclxuICogQHR5cGVkZWYge09iamVjdH0gU0NTX1JlcXVlc3RcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQHR5cGUgT2JqZWN0XHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHJlcXVlc3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIHRoZSByZXF1ZXN0IChHRVR8UE9TVClcclxuICogQHByb3BlcnR5IHtvYmplY3R9IGRhdGEgLSBkYXRhXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhVHlwZSAtIFJlc3BvbnNlIHR5cGVcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gKiBAcHJvcGVydHkge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX0NsaWVudH0gb3B0aW9ucy5zY3NDbGllbnQgLSBTQ1NfQ2xpZW50XHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25TdWNjZXNzXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vbkVycm9yXSAtIEZ1bmN0aW9uIHRvIHJ1biBvbiBlcnJvclxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICogXHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIEV4ZWN1dGUgU0NTIFJlcXVlc3RcclxuICogXHJcbiAqIEBtZW1iZXJvZiBzdC5mb3Jicm93c2VyLnNlcnZpY2VzXHJcbiAqIEBwcm90ZWN0ZWRcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlcXVlc3R9IG9wdGlvbnMuc2NzUmVxdWVzdCAtIFNDUyBSZXF1ZXN0XHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXG5mdW5jdGlvbiBleGVjX1NDU1JlcXVlc3Qob3B0aW9ucykge1xuXG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXG5cdHZhciBfc2NzUmVxdWVzdCA9IG51bGw7XG5cdGlmIChvcHRpb25zLnNjc1JlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwib3B0aW9ucy5zY3NSZXF1ZXN0IGlzIHJlcXVpcmVkXCI7XG5cdH1cblx0X3Njc1JlcXVlc3QgPSBvcHRpb25zLnNjc1JlcXVlc3Q7XG5cblx0aWYgKF9zY3NSZXF1ZXN0Lm9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzUmVxdWVzdC5vcHRpb25zIGlzIHJlcXVpcmVkXCI7XG5cdH1cblx0dmFyIF9yZXFPcHRpb25zID0gX3Njc1JlcXVlc3Qub3B0aW9ucztcblxuXHR2YXIgX3Njc0NsaWVudCA9IG51bGw7XG5cdGlmIChfcmVxT3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzUmVxdWVzdC5vcHRpb25zLnNjc0NsaWVudCBpcyByZXF1aXJlZFwiO1xuXHR9XG5cdF9zY3NDbGllbnQgPSBfcmVxT3B0aW9ucy5zY3NDbGllbnQ7XG5cblx0dmFyIF9zY3NSZWYgPSBfc2NzQ2xpZW50LnNjc1JlZjtcblx0dmFyIF91cmwgPSBcImh0dHA6Ly9cIiArIF9zY3NSZWYubmV0TG9jYXRpb24gKyBcIjpcIiArIF9zY3NSZWYuY29udHJvbFBvcnQgKyBfc2NzUmVxdWVzdC51cmw7XG5cblx0Ly8gSW1wb3J0IGpRdWVyeV9hamF4XG5cdHZhciBqUXVlcnlfYWpheCA9IHJlcXVpcmUoJy4uL25ldHdvcmsvc3ROZXR3b3JrLmpzJykualF1ZXJ5X2FqYXg7XG5cblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gZG8gYSB0aGluZywgcG9zc2libHkgYXN5bmMsIHRoZW7igKZcblx0XHQvLyByZXNvbHZlIG9yIHJlamVjdC4uLlxuXG5cdFx0alF1ZXJ5X2FqYXgoe1xuXHRcdFx0Ly8gVVJMIGZvciByZXF1ZXN0XG5cdFx0XHR1cmw6IF91cmwsXG5cblx0XHRcdC8vIERhdGEgZm9yIHNlbmQgb24gcmVxdWVzdFxuXHRcdFx0ZGF0YTogX3Njc1JlcXVlc3QuZGF0YSxcblxuXHRcdFx0Ly8gdHlwZSBvZiByZXF1ZXN0IFBPU1QgfCBHRVRcblx0XHRcdHR5cGU6IF9zY3NSZXF1ZXN0LnR5cGUsXG5cblx0XHRcdC8vIHJlc3BvbnNlIHR5cGVcblx0XHRcdGRhdGFUeXBlOiBfc2NzUmVxdWVzdC5kYXRhVHlwZSxcblxuXHRcdFx0Ly8gb24gc3VjY2Vzc1xuXHRcdFx0X29uU3VjY2VzczogZnVuY3Rpb24gX29uU3VjY2VzcyhkYXRhKSB7XG5cblx0XHRcdFx0Ly8gRW1pdCBldmVudCBOb2RlbGlzdF9SZWNlaXZlZFxuXHRcdFx0XHQvL1x0XHQgICAgXHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoc2NzQ2xpZW50LkNPTlNUQU5UUy5FdmVudHMuTm9kZWxpc3RfUmVjZWl2ZWQsXG5cdFx0XHRcdC8vXHRcdCAgICBcdFx0XHR7XG5cdFx0XHRcdC8vXHRcdCAgICBcdFx0XHRcdFwiZGF0YVwiOiBkYXRhXG5cdFx0XHRcdC8vXHRcdCAgICBcdFx0XHR9KTtcblx0XHRcdFx0Ly9cdFx0ICAgIFx0XG5cdFx0XHRcdC8vXHRcdCAgICBcdHNjc0NsaWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIjx+aX4+IGV4ZWNfU0NTUmVxdWVzdC5fb25TdWNjZXNzXCIpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdGlmIChfcmVxT3B0aW9ucy5fb25TdWNjZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfcmVxT3B0aW9ucy5fb25TdWNjZXNzKGRhdGEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIG9uIGVycm9yXG5cdFx0XHRfb25FcnJvcjogZnVuY3Rpb24gX29uRXJyb3IoZGF0YSkge1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiPH5pfj4gZXhlY19TQ1NSZXF1ZXN0Ll9vbkVycm9yXCIpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdGlmIChfcmVxT3B0aW9ucy5fb25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3JlcU9wdGlvbnMuX29uRXJyb3IoZGF0YSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZWplY3QoRXJyb3IoXCJJdCBicm9rZVwiKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBvbiBjb21wbGV0ZVxuXHRcdFx0X29uQ29tcGxldGU6IGZ1bmN0aW9uIF9vbkNvbXBsZXRlKGRhdGEpIHtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIjx+aX4+IGV4ZWNfU0NTUmVxdWVzdC5fb25Db21wbGV0ZVwiKTsgLy8gVE9ETyBSRU1PVkUgREVCVUcgTE9HXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblxuXHRcdFx0XHRpZiAoX3JlcU9wdGlvbnMuX29uQ29tcGxldGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9yZXFPcHRpb25zLl9vbkNvbXBsZXRlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHByb21pc2U7XG59XG5cbi8qKlxyXG4gKiBTZXJ2ZXIgY29udHJvbCBzeXN0ZW0gY2xpZW50XHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQG1lbWJlcm9mIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQHByb3RlY3RlZFxyXG4gKiBcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfUmVmfSBzY3NSZWYgLSBTQ1MgcmVmZXJlbmNlXHJcbiAqIFxyXG4gKi9cblxudmFyIFNDU19DbGllbnQgPSBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXHJcbiAgKiBAY29uc3RydWN0cyBTQ1NfQ2xpZW50XHJcbiAgKiBcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uc1xyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuY29uZmlnIC0gQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfUmVmfSBvcHRpb25zLmNvbmZpZy5zY3MgLSBzY3MgY29uZmlndXJhdGlvblxyXG4gICogXHJcbiAgKiBAdGhyb3dzIEV4Y2VwdGlvblxyXG4gICogXHJcbiAgKi9cblxuXHRmdW5jdGlvbiBTQ1NfQ2xpZW50KG9wdGlvbnMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU0NTX0NsaWVudCk7XG5cblx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9XG5cblx0XHR2YXIgc2NzQ2xpZW50ID0gdGhpcztcblx0XHRzY3NDbGllbnQuc2NzUmVmID0gbnVsbDtcblx0XHRzY3NDbGllbnQuQ09OU1RBTlRTID0gU0NTX0NsaWVudF9DT05TVEFOVFM7XG5cblx0XHRpZiAob3B0aW9ucy5jb25maWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgXCJjb25maWcgcGFyYW1ldGVyIGlzIHJlcXVpcmVkXCI7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb25maWcgPSBvcHRpb25zLmNvbmZpZztcblxuXHRcdGlmIChfY29uZmlnLnNjcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBcImNvbmZpZy5zY3MgcGFyYW1ldGVyIGlzIHJlcXVpcmVkXCI7XG5cdFx0fVxuXG5cdFx0c2NzQ2xpZW50LnNjc1JlZiA9IF9jb25maWcuc2NzO1xuXHR9XG5cblx0LyoqXHJcbiAgKiBFeGVjdXRlIGEgU0NTIFJlcXVlc3RcclxuICAqIFxyXG4gICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgKiBAcGFyYW0ge3N0LmZvcmJyb3dzZXIuc2VydmljZXMuU0NTX1JlcXVlc3R9IG9wdGlvbnMuc2NzUmVxdWVzdCAtIFNDUyBSZXF1ZXN0XHJcbiAgKiBcclxuICAqIEB0aHJvd3MgRXhjZXB0aW9uXHJcbiAgKiBcclxuICAqIEByZXR1cm5zIFByb21pc2VcclxuICAqL1xuXG5cblx0X2NyZWF0ZUNsYXNzKFNDU19DbGllbnQsIFt7XG5cdFx0a2V5OiBcImV4ZWNfU0NTX1JlcXVlc3RcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZXhlY19TQ1NfUmVxdWVzdChvcHRpb25zKSB7XG5cblx0XHRcdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3NDbGllbnQgPSB0aGlzO1xuXG5cdFx0XHR2YXIgX3Njc1JlcXVlc3QgPSBudWxsO1xuXHRcdFx0aWYgKG9wdGlvbnMuc2NzUmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IFwic2NzUmVxdWVzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWRcIjtcblx0XHRcdH1cblx0XHRcdF9zY3NSZXF1ZXN0ID0gb3B0aW9ucy5zY3NSZXF1ZXN0O1xuXG5cdFx0XHRpZiAoX3Njc1JlcXVlc3Qub3B0aW9ucy5zY3NDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRfc2NzUmVxdWVzdC5vcHRpb25zLnNjc0NsaWVudCA9IHNjc0NsaWVudDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV4ZWNfU0NTUmVxdWVzdChvcHRpb25zKTtcblx0XHR9XG5cblx0XHQvKipcclxuICAgKiBHZXQgbm9kZSBsaXN0XHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9IFtvcHRpb25zLnNjc19DbGllbnRdIC0gU0NTX0NsaWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLl9vblN1Y2Nlc3NdIC0gRnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25FcnJvcl0gLSBGdW5jdGlvbiB0byBydW4gb24gZXJyb3JcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5fb25Db21wbGV0ZV0gLSBGdW5jdGlvbiB0byBydW4gb24gY29tcGxldGVcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgKi9cblxuXHR9LCB7XG5cdFx0a2V5OiBcImdldF9Ob2RlTGlzdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRfTm9kZUxpc3Qob3B0aW9ucykge1xuXG5cdFx0XHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2NzQ2xpZW50ID0gdGhpcztcblx0XHRcdGlmIChvcHRpb25zLnNjc19DbGllbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRzY3NDbGllbnQgPSBvcHRpb25zLnNjc19DbGllbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3NSZWYgPSBzY3NDbGllbnQuc2NzUmVmO1xuXG5cdFx0XHR2YXIgX3VybCA9IFwiaHR0cDovL1wiICsgc2NzUmVmLm5ldExvY2F0aW9uICsgXCI6XCIgKyBzY3NSZWYuY29udHJvbFBvcnQgKyBcIi9Ob2Rlcy9MaXN0XCI7XG5cblx0XHRcdC8vIEltcG9ydCBqUXVlcnlfYWpheFxuXHRcdFx0dmFyIGpRdWVyeV9hamF4ID0gcmVxdWlyZSgnLi4vbmV0d29yay9zdE5ldHdvcmsuanMnKS5qUXVlcnlfYWpheDtcblxuXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdC8vIGRvIGEgdGhpbmcsIHBvc3NpYmx5IGFzeW5jLCB0aGVu4oCmXG5cdFx0XHRcdC8vIHJlc29sdmUgb3IgcmVqZWN0Li4uXG5cblx0XHRcdFx0alF1ZXJ5X2FqYXgoe1xuXHRcdFx0XHRcdC8vIFVSTCBmb3IgcmVxdWVzdFxuXHRcdFx0XHRcdHVybDogX3VybCxcblxuXHRcdFx0XHRcdC8vIERhdGEgZm9yIHNlbmQgb24gcmVxdWVzdFxuXHRcdFx0XHRcdGRhdGE6IHsgaWQ6IDEyMyB9LFxuXG5cdFx0XHRcdFx0Ly8gdHlwZSBvZiByZXF1ZXN0IFBPU1QgfCBHRVRcblx0XHRcdFx0XHR0eXBlOiAnR0VUJyxcblxuXHRcdFx0XHRcdC8vIHJlc3BvbnNlIHR5cGVcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXG5cdFx0XHRcdFx0Ly8gb24gc3VjY2Vzc1xuXHRcdFx0XHRcdF9vblN1Y2Nlc3M6IGZ1bmN0aW9uIF9vblN1Y2Nlc3MoZGF0YSkge1xuXG5cdFx0XHRcdFx0XHQvLyBFbWl0IGV2ZW50IE5vZGVsaXN0X1JlY2VpdmVkXG5cdFx0XHRcdFx0XHQvL1x0XHRcdCAgICBcdGxldCBldmVudCA9IG5ldyBFdmVudChzY3NDbGllbnQuQ09OU1RBTlRTLkV2ZW50cy5Ob2RlbGlzdF9SZWNlaXZlZCxcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0XHRcdFx0XCJkYXRhXCI6IGRhdGFcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Ly9cdFx0XHQgICAgXHRcblx0XHRcdFx0XHRcdC8vXHRcdFx0ICAgIFx0c2NzQ2xpZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIjx+aX4+IFNDU19DbGllbnQuZ2V0X05vZGVMaXN0Ll9vblN1Y2Nlc3NcIik7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5fb25TdWNjZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5fb25TdWNjZXNzKGRhdGEpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyBvbiBlcnJvclxuXHRcdFx0XHRcdF9vbkVycm9yOiBmdW5jdGlvbiBfb25FcnJvcihkYXRhKSB7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiPH5pfj4gU0NTX0NsaWVudC5nZXRfTm9kZUxpc3QuX29uRXJyb3JcIik7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7IC8vIFRPRE8gUkVNT1ZFIERFQlVHIExPR1xuXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5fb25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMuX29uRXJyb3IoZGF0YSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJlamVjdChFcnJvcihcIkl0IGJyb2tlXCIpKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly8gb24gY29tcGxldGVcblx0XHRcdFx0XHRfb25Db21wbGV0ZTogZnVuY3Rpb24gX29uQ29tcGxldGUoZGF0YSkge1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIjx+aX4+IFNDU19DbGllbnQuZ2V0X05vZGVMaXN0Ll9vbkNvbXBsZXRlXCIpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpOyAvLyBUT0RPIFJFTU9WRSBERUJVRyBMT0dcblxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuX29uQ29tcGxldGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLl9vbkNvbXBsZXRlKGRhdGEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU0NTX0NsaWVudDtcbn0oKTtcblxuLyoqXHJcbiAqIEdldCBhIG5ldyBTQ1NfQ2xpZW50XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2Ygc3QuZm9yYnJvd3Nlci5zZXJ2aWNlc1xyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXHJcbiAqIEBwYXJhbSB7c3QuZm9yYnJvd3Nlci5zZXJ2aWNlcy5TQ1NfUmVmfSBvcHRpb25zLnNjcyAtIFNDUyByZWZlcmVuY2VcclxuICogXHJcbiAqIEB0aHJvd3Mge0V4Y2VwdGlvbn1cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdC5mb3Jicm93c2VyLnNlcnZpY2VzLlNDU19DbGllbnR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldF9TQ1NfQ2xpZW50KG9wdGlvbnMpIHtcblxuXHRpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRvcHRpb25zID0ge307XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zY3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IFwic2NzIGlzIHJlcXVpcmVkXCI7XG5cdH1cblxuXHR2YXIgc2NzQ2xpZW50ID0gbnVsbDtcblxuXHR0cnkge1xuXHRcdHNjc0NsaWVudCA9IG5ldyBTQ1NfQ2xpZW50KHtcblx0XHRcdFwiY29uZmlnXCI6IHtcblx0XHRcdFx0XCJzY3NcIjogb3B0aW9ucy5zY3Ncblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFRPRE86IGhhbmRsZSBleGNlcHRpb25cblx0XHR0aHJvdyBcIkNhbm5vdCBjcmVhdGUgU0NTX0NsaWVudC4gXCIgKyBlO1xuXHR9XG5cblx0cmV0dXJuIHNjc0NsaWVudDtcbn1cblxudmFyIF9saWIgPSB7XG5cblx0XCJTQ1NfQ2xpZW50XCI6IFNDU19DbGllbnQsXG5cdFwiZ2V0X1NDU19DbGllbnRcIjogZ2V0X1NDU19DbGllbnQsXG5cdFwiZXhlY19TQ1NSZXF1ZXN0XCI6IGV4ZWNfU0NTUmVxdWVzdCxcblxuXHRcIl9wdWJsaWNcIjoge1xuXHRcdFwiZ2V0X1NDU19DbGllbnRcIjogZ2V0X1NDU19DbGllbnRcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfbGliO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U0NTX0NsaWVudC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcclxuICogU2VydmljZXMgbW9kdWxlIGZvci4uLlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBcclxuICovXG5cbi8qKlxyXG4gKiBcclxuICogU29tZVRoaW5ncyBsaWJyYXJ5IGZvciBicm93c2VyXHJcbiAqIFxyXG4gKiBAbmFtZXNwYWNlIHN0LmZvcmJyb3dzZXIuc2VydmljZXNcclxuICogQG1lbWJlcm9mIHN0XHJcbiAqIFxyXG4gKi9cblxuLyoqXHJcbiAqIGltcG9ydCBTQ1MgQ2xpZW50IGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIFNDU19DbGllbnRfTGliID0gcmVxdWlyZSgnLi9TQ1NfQ2xpZW50LmpzJyk7XG5cbnZhciBfbGliID0ge1xuICBcIlNDU19DbGllbnRcIjogU0NTX0NsaWVudF9MaWIuU0NTX0NsaWVudCxcblxuICBcIl9wdWJsaWNcIjoge1xuICAgIFwiZ2V0X1NDU19DbGllbnRcIjogU0NTX0NsaWVudF9MaWIuX3B1YmxpYy5nZXRfU0NTX0NsaWVudFxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2xpYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0U2VydmljZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXHJcbiAqIFxyXG4gKiBTb21lVGhpbmdzIGxpYnJhcnlcclxuICogXHJcbiAqIEBuYW1lc3BhY2Ugc3RcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogXHJcbiAqIFNvbWVUaGluZ3MgbGlicmFyeSBmb3IgYnJvd3NlclxyXG4gKiBcclxuICogQG5hbWVzcGFjZSBzdC5mb3Jicm93c2VyXHJcbiAqIEBtZW1iZXJvZiBzdFxyXG4gKiBcclxuICogXHJcbiAqL1xuXG4vKipcclxuICogaW1wb3J0IE5vZGVzIGxpYnJhcnlcclxuICogQGlnbm9yZVxyXG4gKi9cblxudmFyIE5vZGVzX0xpYiA9IHJlcXVpcmUoJy4vbm9kZXMvc3Rfbm9kZXMuanMnKTtcblxuLyoqXHJcbiAqIGltcG9ydCBTZXJ2ZXIgbGlicmFyeVxyXG4gKiBAaWdub3JlXHJcbiAqL1xudmFyIFNlcnZlcl9MaWIgPSByZXF1aXJlKCcuL3NlcnZlci9zdF9zZXJ2ZXIuanMnKTtcblxuLyoqXHJcbiAqIGltcG9ydCBTZXJ2aWNlcyBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgU2VydmljZXNfTGliID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9zdFNlcnZpY2VzLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgRW5naW5lcyBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgRW5naW5lc19MaWIgPSByZXF1aXJlKCcuL2VuZ2luZXMvc3RFbmdpbmVzLmpzJyk7XG5cbi8qKlxyXG4gKiBpbXBvcnQgTmV0d29yayBsaWJyYXJ5XHJcbiAqIEBpZ25vcmVcclxuICovXG52YXIgTmV0d29ya19MaWIgPSByZXF1aXJlKCcuL25ldHdvcmsvc3ROZXR3b3JrLmpzJyk7XG5cbnZhciBzdCA9IHt9O1xuc3QuZm9yYnJvd3NlciA9IHtcblxuICBcIm5vZGVzXCI6IE5vZGVzX0xpYi5fcHVibGljLFxuICBcInNlcnZlclwiOiBTZXJ2ZXJfTGliLl9wdWJsaWMsXG4gIFwic2VydmljZXNcIjogU2VydmljZXNfTGliLl9wdWJsaWMsXG4gIFwiZW5naW5lc1wiOiBFbmdpbmVzX0xpYi5fcHVibGljLFxuICBcIm5ldHdvcmtcIjogTmV0d29ya19MaWIuX3B1YmxpY1xufTtcblxuLy9sZXQgX2xpYiA9IHtcbi8vXHRcdFwic3RcIjogc3Rcbi8vXHR9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0LmZvcmJyb3dzZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGZvckJyb3dzZXIuanMubWFwXG4iXX0=
