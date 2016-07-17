"use strict";



/**
 * SCS Request for nodes 
 * 
 * @class
 * @memberof st.forbrowser.nodes
 * @protected
 * 
 * 
 */
class SCS_Requests_forNodes {
	
	
	/**
	 * @constructs SCS_Requests_forNodes
	 */
	constructor() {
		
	}
	
	
	/**
	 * Get nodes list
	 * 
	 * @param {object} options - Options
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	get_NodesList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		let _scsClient = null;
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		_scsClient = options.scsClient;
		
		return _scsClient.exec_SCS_Request({
			"scsRequest": {
				"url": "/Nodes/List",
				"type": "GET",
				"data": null,
				"dataType": "json",
				
				"options": options
			}
		});
		
	}
	
}


/**
 * @memberof st.forbrowser.nodes 
 * 
 * @returns {st.forbrowser.nodes.SCS_Requests_forNodes}
 */
function get_SCS_Requests() {
	return new SCS_Requests_forNodes();
}



let _lib = {
	"SCS_Requests_forNodes": SCS_Requests_forNodes,
	"get_SCS_Requests": get_SCS_Requests,
	
	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};


module.exports = _lib;