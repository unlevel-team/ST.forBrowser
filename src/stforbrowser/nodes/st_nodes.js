"use strict";


/**
 * <pre>
 * Nodes module for...
 * 
 * SomeThings library for browser
 * </pre>
 * 
 * @namespace st.forbrowser.nodes
 * @memberof st.forbrowser
 */


/**
 * import Node library
 * @ignore
 */
let _Node_Lib = require('./node.js');

/**
 * import SCS for Nodes
 * @ignore
 */
let SCS_Nodes_Lib = require('./scs_nodes.js');


let _lib = {
	
	"_public": {
		"get_Node_Ref": _Node_Lib._public.get_Node_Ref,
		"get_SCS_Requests": SCS_Nodes_Lib.get_SCS_Requests
	}
};


module.exports = _lib;