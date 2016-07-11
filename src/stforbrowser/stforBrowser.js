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


let st = {};

st.forbrowser = {
	"Node": Node,
	"Server": Server
};



//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;





