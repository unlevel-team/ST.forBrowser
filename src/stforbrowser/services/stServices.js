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
let SCS_Client_Lib = require('./SCS_Client.js');




let _lib = {
	"SCS_Client": SCS_Client_Lib.SCS_Client,
	
	"_public": {
		"get_SCS_Client": SCS_Client_Lib._public.get_SCS_Client
	}
		
};


module.exports = _lib;
