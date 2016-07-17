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


let _lib = {
	"SCS_Requests_forEngines": SCS_Engines_Lib.SCS_Requests_forEngines,
	"get_SCS_Requests": SCS_Engines_Lib.get_SCS_Requests,
	
	"_public": {
		"get_SCS_Requests": SCS_Engines_Lib._public.get_SCS_Requests
	}
};


module.exports = _lib;

