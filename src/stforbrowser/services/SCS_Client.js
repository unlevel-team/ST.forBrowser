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
let SCS_Client_CONSTANTS = {
	
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
	
	if (options === undefined ||
			options === null) {
		options = {};
	}
	
	
	
	let _scsRequest = null;
	if (options.scsRequest === undefined) {
		throw "options.scsRequest is required";
	}
	_scsRequest = options.scsRequest;
	
	
	if (_scsRequest.options === undefined) {
		throw "scsRequest.options is required";
	}
	let _reqOptions = _scsRequest.options;
	
	let _scsClient = null;
	if (_reqOptions.scsClient === undefined) {
		throw "scsRequest.options.scsClient is required";
	}
	_scsClient = _reqOptions.scsClient;
	
	let _scsRef = _scsClient.scsRef;
	let _url = "http://" + _scsRef.netLocation + ":" + _scsRef.controlPort +
			_scsRequest.url;
	
	
	
	// Import jQuery_ajax
	let jQuery_ajax = require('../network/stNetwork.js').jQuery_ajax;
	
	
	let promise = new Promise(function(resolve, reject) {
		// do a thing, possibly async, then…
		// resolve or reject...
		
		
		jQuery_ajax({
		    // URL for request
		    url : _url,
		 
		    // Data for send on request
		    data : _scsRequest.data,
		 
		    // type of request POST | GET
		    type : _scsRequest.type,
		 
		    // response type
		    dataType : _scsRequest.dataType,
		 
		    // on success
		    _onSuccess : function(data) {
		        
		    	// Emit event Nodelist_Received
//		    	let event = new Event(scsClient.CONSTANTS.Events.Nodelist_Received,
//		    			{
//		    				"data": data
//		    			});
//		    	
//		    	scsClient.dispatchEvent(event);
		    	
		    	console.log("<~i~> exec_SCSRequest._onSuccess");	// TODO REMOVE DEBUG LOG
		    	console.log(data);	// TODO REMOVE DEBUG LOG

		    	if (_reqOptions._onSuccess !== undefined) {
		    		_reqOptions._onSuccess(data);
		    	}
		    	
		    	resolve(data);
		    	
		    },
		 
		    // on error
		    _onError : function(data) {
		    	
		    	console.log("<~i~> exec_SCSRequest._onError");	// TODO REMOVE DEBUG LOG
		    	console.log(data);	// TODO REMOVE DEBUG LOG
		    	
		    	if (_reqOptions._onError !== undefined) {
		    		_reqOptions._onError(data);
		    	}
		    	
		    	reject(Error("It broke"));
		    	
		    },
		 
		    // on complete
		    _onComplete : function(data) {
		    	
		    	console.log("<~i~> exec_SCSRequest._onComplete");	// TODO REMOVE DEBUG LOG
		    	console.log(data);	// TODO REMOVE DEBUG LOG
		    	
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
class SCS_Client {
	
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
	constructor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let scsClient = this;
		scsClient.scsRef = null;
		scsClient.CONSTANTS = SCS_Client_CONSTANTS;
		
		if (options.config === undefined) {
			throw "config parameter is required";
		}
		
		let _config = options.config;
		
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
	exec_SCS_Request(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let scsClient = this;
		
		let _scsRequest = null;
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
	get_NodeList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let scsClient = this;
		if (options.scs_Client !== undefined) {
			scsClient = options.scs_Client;
		}
		
		let scsRef = scsClient.scsRef;
		
		let _url = "http://" + scsRef.netLocation + ":" + scsRef.controlPort +
				"/Nodes/List";
		
		// Import jQuery_ajax
		let jQuery_ajax = require('../network/stNetwork.js').jQuery_ajax;
		
		
		let promise = new Promise(function(resolve, reject) {
			// do a thing, possibly async, then…
			// resolve or reject...
			
			
			jQuery_ajax({
			    // URL for request
			    url : _url,
			 
			    // Data for send on request
			    data : { id : 123 },
			 
			    // type of request POST | GET
			    type : 'GET',
			 
			    // response type
			    dataType : 'json',
			 
			    // on success
			    _onSuccess : function(data) {
			        
			    	// Emit event Nodelist_Received
//			    	let event = new Event(scsClient.CONSTANTS.Events.Nodelist_Received,
//			    			{
//			    				"data": data
//			    			});
//			    	
//			    	scsClient.dispatchEvent(event);
			    	
			    	console.log("<~i~> SCS_Client.get_NodeList._onSuccess");	// TODO REMOVE DEBUG LOG
			    	console.log(data);	// TODO REMOVE DEBUG LOG

			    	if (options._onSuccess !== undefined) {
			    		options._onSuccess(data);
			    	}
			    	
			    	resolve(data);
			    	
			    },
			 
			    // on error
			    _onError : function(data) {
			    	
			    	console.log("<~i~> SCS_Client.get_NodeList._onError");	// TODO REMOVE DEBUG LOG
			    	console.log(data);	// TODO REMOVE DEBUG LOG
			    	
			    	if (options._onError !== undefined) {
			    		options._onError(data);
			    	}
			    	
			    	reject(Error("It broke"));
			    	
			    },
			 
			    // on complete
			    _onComplete : function(data) {
			    	
			    	console.log("<~i~> SCS_Client.get_NodeList._onComplete");	// TODO REMOVE DEBUG LOG
			    	console.log(data);	// TODO REMOVE DEBUG LOG
			    	
			    	if (options._onComplete !== undefined) {
			    		options._onComplete(data);
			    	}
			    	
			    }
			    
			});
			
		});

		
		return promise;
		
	}
	
}







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
	
	
	if (options === undefined ||
			options === null) {
		options = {};
	}
	
	
	if (options.scs === undefined) {
		throw "scs is required";
	}
	
	
	let scsClient = null;
	
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


let _lib = {
		
	"SCS_Client": SCS_Client,
	"get_SCS_Client": get_SCS_Client,
	"exec_SCSRequest": exec_SCSRequest,
	
	"_public": {
		"get_SCS_Client": get_SCS_Client
	}
};


module.exports = _lib;

	