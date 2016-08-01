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
let _jQuery_ajax = require("./jQuery_ajax.js").jQuery_ajax;


/**
 * import SCS for Network
 * @ignore
 */
let _SCS_Network_Lib = require('./scs_network.js');


let _lib = {
		
	"jQuery_ajax": _jQuery_ajax,
	
	"_public": {
		"jQuery_ajax": _jQuery_ajax,
		"get_SCS_Requests": _SCS_Network_Lib._public.get_SCS_Requests
	}
};


module.exports = _lib;
