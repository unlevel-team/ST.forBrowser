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
let _Server_Lib = require('./server.js');


let _lib = {
	
	"_public": {
		"get_Server_Config": _Server_Lib._public.get_Server_Config
	}
};


module.exports = _lib;