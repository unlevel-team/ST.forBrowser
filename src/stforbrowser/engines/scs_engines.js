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
	get_EnginesList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.ngntype === undefined) {
			throw "ngntype is required";
		}
		let _ngntype = options.ngntype;
		
		switch (_ngntype) {
			case 'sensors':
			case 'actuators':
				break;
	
			default:
				throw "ngntype is wrong.";
		}
		
		
		let _url = "/ngn/" + _ngntype + "/list";

		return _scsClient.exec_SCS_Request({
			"scsRequest": {
				"url":  _url,
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
	get_EngineInfo(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;

		if (options.ngntype === undefined) {
			throw "ngntype is required";
		}
		let _ngntype = options.ngntype;
		
		if (options.ngnID === undefined) {
			throw "ngnID is required";
		}
		let _ngnID = options.ngnID;
		
		switch (_ngntype) {
			case 'sensors':
			case 'actuators':
				break;
	
			default:
				throw "ngntype is wrong.";
		}
		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/info
		let _url = "/ngn/" + _ngntype + "/" + _ngnID + "/info";
		
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
	get_EngineOptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;

		if (options.ngntype === undefined) {
			throw "ngntype is required";
		}
		let _ngntype = options.ngntype;
		
		if (options.ngnID === undefined) {
			throw "ngnID is required";
		}
		let _ngnID = options.ngnID;
		
		switch (_ngntype) {
			case 'sensors':
			case 'actuators':
				break;
	
			default:
				throw "ngntype is wrong.";
		}

		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
		let _url = "/ngn/" + _ngntype + "/" + _ngnID + "/options";

		
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
	set_EngineOptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;

		if (options.ngntype === undefined) {
			throw "ngntype is required";
		}
		let _ngntype = options.ngntype;
		
		if (options.ngnID === undefined) {
			throw "ngnID is required";
		}
		let _ngnID = options.ngnID;
		
		if (options.ngnOptions === undefined) {
			throw "ngnOptions is required";
		}
		let _ngnOptions = options.ngnOptions;

		
		switch (_ngntype) {
			case 'sensors':
			case 'actuators':
				break;
	
			default:
				throw "ngntype is wrong.";
		}
		
		// http://{{stServer}}:{{cc}}/ngn/Sensors/{{nodeID}}.{{sensorID}}/options
		let _url = "/ngn/" + _ngntype + "/" + _ngnID + "/options";

		
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
	control_Engine(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;

		if (options.ngntype === undefined) {
			throw "ngntype is required";
		}
		let _ngntype = options.ngntype;
		
		if (options.ngnID === undefined) {
			throw "ngnID is required";
		}
		let _ngnID = options.ngnID;
		
		if (options.ctrlCommand === undefined) {
			throw "ctrlCommand is required";
		}
		let _ctrlCommand = options.ctrlCommand;

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
		let _url = "/ngn/" + _ngntype + "/" + _ngnID + "/" + _ctrlCommand;

		
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

