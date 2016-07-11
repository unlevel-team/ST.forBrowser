"use strict"

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
class Server_Config {
	
	/**
	 * @constructs Server_Config
	 * 
	 * @param {object} [options] - options
	 * @param {object} [options.config] - scs options
	 * 
	 */
	constructor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let sConfig = this;
		
		sConfig.scs = {
			"netLocation": null,
			"controlPort": null
		};
		
		// get config option
		let _sConfig = {};
		if (options.config !== undefined) {
			
			_sConfig = options.config;
		}
		
		
		if (_sConfig.scs === undefined) {
			_sConfig.scs = {}
		}
		
		if (_sConfig.scs.netLocation !== undefined) {
			sConfig.scs.netLocation = _sConfig.scs.netLocation;
		}
		
		if (_sConfig.scs.controlPort !== undefined) {
			sConfig.scs.controlPort = _sConfig.scs.controlPort;
		}
		
	}
	
	
}


/**
 * Get Server configuration
 * 
 * @memberof st.forbrowser
 * 
 * @param options
 * @returns {st.forbrowser.Server_Config}
 */
function get_Server_Config(options){
	return new Server_Config(options);
}




/**
 * 
 * @class
 * @memberof st.forbrowser
 * 
 */
class Server {
	
	/**
	 * @constructs Server
	 */
	constructor() {
		
	}
	

}


let _lib = {
	"Server": Server,
	"get_Server_Config": get_Server_Config
		
};


module.exports = _lib;

