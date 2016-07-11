"use strict";

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

var Node = require('./node.js').Node;
var Server = require('./server.js').Server;

//if (st === undefined) {
//	let st = {};
//}

var st = {};

st.forbrowser = {
  "Node": Node,
  "Server": Server
};

//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;
//# sourceMappingURL=stforBrowser.js.map
