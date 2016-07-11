"use strict"

/**
 * 
 * SomeThings library
 * 
 * @namespace st
 * 
 */


/**
 * 
 * SomeThings library for browser
 * 
 * @namespace st.forbrowser
 * @memberof st
 * 
 * 
 */



let Node = require('./node.js').Node;
let Server = require('./server.js').Server;



//if (st === undefined) {
//	let st = {};
//}


let _get_Server_Config = require('./server.js').get_Server_Config;



let st = {};
st.forbrowser = {
		
	"Node": Node,
	
	"Server": Server,
	"get_Server_Config": _get_Server_Config,
};



//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;





