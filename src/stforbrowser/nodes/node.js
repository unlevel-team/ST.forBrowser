"use strict";

/**
 * Node module for...
 * 
 * SomeThings library for browser
 * 
 * 
 */


/**
 * The Node_Config object.
 * 
 * @typedef {Object} Node_Config
 * @memberof st.forbrowser.nodes
 * @type Object
 * @protected
 * 
 * @property {string} id - Name
 * @property {string} type - Type
 * 
 */


/**
 * Node
 * 
 * @class
 * @protected
 * @memberof st.forbrowser.nodes
 * 
 * @property {st.forbrowser.Node_Config} config - Configuration
 * 
 */
class Node {
	
	/**
	 * @constructs Node
	 * 
	 * @param {object} options - Options object
	 * @param {st.forbrowser.nodes.Node_Config} options.config - Configuration
	 */
	constructor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let node = this;
		node.config = null;
		
		if (options.config !== undefined) {
			node.config = options.config;
		}
	}
	
	
	
	
}


/**
 * Node reference
 * 
 * @class
 * @protected
 * @memberof st.forbrowser.nodes
 * @implements st.forbrowser.nodes.Node
 * 
 */
class Node_Ref extends Node {
	
	/**
	 * @constructs Node_Ref
	 */
	constructor(options) {
		
		super(options);
		
		
	}
}


/**
 * @memberof st.forbrowser.nodes
 * @param options
 * @returns {st.forbrowser.nodes.Node_Ref}
 */
function get_Node_Ref(options) {
	
	return new Node_Ref(options);
	
	
}


let _lib = {
	"Node": Node,
	"Node_Ref": Node_Ref,
	"get_Node_Ref": get_Node_Ref,
	
	"_public": {
		"get_Node_Ref": get_Node_Ref
	}
};


module.exports = _lib;
