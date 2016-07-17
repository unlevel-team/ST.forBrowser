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
class SCS_Requests_forEngines {
	
	
	/**
	 * @constructs SCS_Requests_forEngines
	 */
	constructor() {
		
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
	get_SensorsList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		let _scsClient = null;
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
	get_ActuatorsList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		let _scsClient = null;
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
	get_SensorOptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.sensorID === undefined) {
			throw "sensorID is required";
		}
		let _sensorID = options.sensorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
		let _url = "/ngn/Sensors/" + _sensorID + "/options";
		
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
	get_ActuatorOptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.actuatorID === undefined) {
			throw "actuatorID is required";
		}
		let _actuatorID = options.actuatorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/options
		let _url = "/ngn/Actuators/" + _actuatorID + "/options";
		
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
	start_Sensor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.sensorID === undefined) {
			throw "sensorID is required";
		}
		let _sensorID = options.sensorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/start
		let _url = "/ngn/Sensors/" + _sensorID + "/start";
		
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
	start_Actuator(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.actuatorID === undefined) {
			throw "actuatorID is required";
		}
		let _actuatorID = options.actuatorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/start
		let _url = "/ngn/Actuators/" + _actuatorID + "/start";
		
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
	stop_Sensor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.sensorID === undefined) {
			throw "sensorID is required";
		}
		let _sensorID = options.sensorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/stop
		let _url = "/ngn/Sensors/" + _sensorID + "/stop";
		
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
	stop_Actuator(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.actuatorID === undefined) {
			throw "actuatorID is required";
		}
		let _actuatorID = options.actuatorID;
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		// http://{{stServer}}:{{cc}}/ngn/Actuators/{{nodeID}}.{{actuatorID}}/stop
		let _url = "/ngn/Actuators/" + _actuatorID + "/stop";
		
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
	
}



/**
 * @memberof st.forbrowser.engines
 * 
 * @returns {st.forbrowser.engines.SCS_Requests_forEngines}
 */
function get_SCS_Requests() {
	return new SCS_Requests_forEngines();
}



let _lib = {
	"SCS_Requests_forEngines": SCS_Requests_forEngines,
	"get_SCS_Requests": get_SCS_Requests,
	
	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};


module.exports = _lib;

