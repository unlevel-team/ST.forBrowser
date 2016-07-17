"use strict";


/**
 * SCS Request for Network 
 * 
 * @class
 * @memberof st.forbrowser.network
 * @protected
 * 
 * 
 */
class SCS_Requests_forNet {
	
	
	/**
	 * @constructs SCS_Requests_forNet
	 */
	constructor() {
		
	}
	
	/**
	 * Get Data channels list
	 * 
	 * @param {object} options - Options
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	get_DCList(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		switch (_netContext) {
			case 'server':
			case 'nodes':
				
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
		}
		
		// http://{{stServer}}:{{cc}}/Net/Nodes/List
		let _url = "/Net/" + _netContext + "/List";
		
		
		return _scsClient.exec_SCS_Request({
			"scsRequest": {
				"url": _url,
				"type": "GET",
				"data": null,
				"dataType": "json",
				
				"options": options
			}
		});
		
	}
	
	
}




/**
 * @memberof st.forbrowser.network
 * 
 * @returns {st.forbrowser.network.SCS_Requests_forNet}
 */
function get_SCS_Requests() {
	return new SCS_Requests_forNet();
}



let _lib = {
	"SCS_Requests_forNet": SCS_Requests_forNet,
	"get_SCS_Requests": get_SCS_Requests,
	
	"_public": {
		"get_SCS_Requests": get_SCS_Requests
	}
};


module.exports = _lib;

