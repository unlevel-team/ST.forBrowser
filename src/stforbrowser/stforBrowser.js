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


/**
 * import Nodes library
 * @ignore
 */
let Nodes_Lib = require('./nodes/st_nodes.js');

/**
 * import Server library
 * @ignore
 */
let Server_Lib = require('./server/st_server.js');


/**
 * import Services library
 * @ignore
 */
let Services_Lib = require('./services/stServices.js');


/**
 * import Engines library
 * @ignore
 */
let Engines_Lib = require('./engines/stEngines.js');


/**
 * import Network library
 * @ignore
 */
let Network_Lib = require('./network/stNetwork.js');


let st = {};
st.forbrowser = {
	
	"nodes": Nodes_Lib._public,
	"server": Server_Lib._public,
	"services": Services_Lib._public,
	"engines": Engines_Lib._public,
	"network": Network_Lib._public
};



//let _lib = {
//		"st": st
//	};

module.exports = st.forbrowser;





