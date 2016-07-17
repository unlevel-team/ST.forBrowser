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
function get_Server_Config(options){
	
	if (options === undefined ||
			options === null) {
		options = {};
	}
	
	if (options.config === undefined) {
		throw "Config option is required";
	}
	
	if (options.config === undefined) {
		throw "config option is required";
	}
	
	let serverConfig = {
		"type": "STServer",
		"scs": {
			"netLocation": null,
			"controlPort": null
		}
	};
	
	let _config = options.config;
	
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
class Server {
	
	/**
	 * @constructs Server
	 * 
	 * @param {object} [options] - Options object
	 * @param {st.forbrowser.server.Server_Config} [options.config] - Configuration
	 */
	constructor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let server = this;
		server.config = null;
		
		
		if (options.config !== undefined) {
			server.config = options.config;
		}
	}
	

}



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
class Server_Ref extends Server {
	
	/**
	 * @constructs Server_Ref
	 */
	constructor(options) {
		
		super(options);
		
	}
}





let _lib = {
	"get_Server_Config": get_Server_Config,
	"Server": Server,
	"Server_Ref": Server_Ref,
	
	"_public": {
		"get_Server_Config": get_Server_Config
	}
	
};


module.exports = _lib;

