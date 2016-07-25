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
let SCS_Engines_Lib = require('./scs_engines.js');


/**
 * import Engines manager
 * @ignore
 */
let NGN_Manager_Lib = require('./ngn_manager.js');


let _lib = {
	"SCS_Requests_forEngines": SCS_Engines_Lib.SCS_Requests_forEngines,
	"get_SCS_Requests": SCS_Engines_Lib.get_SCS_Requests,
	
	"_public": {
		"get_SCS_Requests": SCS_Engines_Lib._public.get_SCS_Requests,
		"get_Engines_Manager": NGN_Manager_Lib._public.get_Engines_Manager
	}
};


module.exports = _lib;

