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
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
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
	
	
	/**
	 * Create Data channel
	 * 
	 * @param {object} options - Options
	 * @param {string} options.nodeID - ID of the Node when DC is created (only required for netContext='nodes')
	 * @param {string} options.channelID - ID for the new channel
	 * @param {string} options.mode - The operation mode of DC. Could be 'in' or 'out'
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	create_DC(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.channelID === undefined) {
			throw "channelID is required";
		}
		let _channelID = options.channelID;

		
		if (options.mode === undefined) {
			throw "mode is required";
		}
		let _mode = options.mode;
		
		switch (_mode) {
			case 'in':
			case 'out':						
				break;
	
			default:
				throw "mode is wrong.";
		}

		
		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		
		let _url = null;
		
		switch (_netContext) {
		
			case 'server':	// Server context
				
				// http://{{stServer}}:{{cc}}/Net/Server/create/{{channelID}}/out
				_url = "/Net/" + _netContext + "/create/" + _channelID + "/" + _mode;
				break;
				
			case 'nodes':	// Nodes context
				
				if (options.nodeID === undefined) {
					throw "nodeID is required";
				}
				let _nodeID = options.nodeID;
				
				// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/create/{{channelID}}/in
				_url = "/Net/" + _netContext + "/" + _nodeID  + "/create/" + _channelID + "/" + _mode;
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
			
		}
		
		
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
	
	
	/**
	 * Delete Data channel
	 * 
	 * @param {object} options - Options
	 * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
	 * @param {string} options.channelID - ID of channel to be deleted
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	delete_DC(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.channelID === undefined) {
			throw "channelID is required";
		}
		let _channelID = options.channelID;

		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		
		let _url = null;
		
		switch (_netContext) {
		
			case 'server':
				// http://{{stServer}}:{{cc}}/Net/Server/delete/{{channelID}}
				_url = "/Net/" + _netContext + "/delete/" +_channelID;
				break;
				
			case 'nodes':
				
				if (options.nodeID === undefined) {
					throw "nodeID is required";
				}
				let _nodeID = options.nodeID;
				

				// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/delete/{{channelID}}
				_url = "/Net/" + _netContext + "/" + _nodeID  + "/delete/" + _channelID;
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
			
		}
		
		
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
	
	
	/**
	 * Get Data channel options
	 * 
	 * @param {object} options - Options
	 * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
	 * @param {string} options.channelID - ID of channel to be deleted
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	get_DCoptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.channelID === undefined) {
			throw "channelID is required";
		}
		let _channelID = options.channelID;

		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		
		let _url = null;
		
		switch (_netContext) {
		
			case 'server':
				// http://{{stServer}}:{{cc}}/Net/Server/options/{{channelID}}
				_url = "/Net/" + _netContext + "/options/" +_channelID;
				break;
				
			case 'nodes':
				
				if (options.nodeID === undefined) {
					throw "nodeID is required";
				}
				let _nodeID = options.nodeID;
				

				// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/options/{{channelID}}
				_url = "/Net/" + _netContext + "/" + _nodeID  + "/options/" + _channelID;
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
			
		}
		
		
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

	
	/**
	 * Set Data channel options
	 * 
	 * @param {object} options - Options
	 * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
	 * @param {string} options.channelID - ID of channel to be deleted
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * @param {object} options.dcOptions - Data channel options
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	set_DCoptions(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.channelID === undefined) {
			throw "channelID is required";
		}
		let _channelID = options.channelID;

		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		
		if (options.dcOptions === undefined) {
			throw "dcOptions is required";
		}
		let _dcOptions = options.dcOptions;
		
		
		let _url = null;
		
		switch (_netContext) {
		
			case 'server':
				// http://{{stServer}}:{{cc}}/Net/Server/options/{{channelID}}
				_url = "/Net/" + _netContext + "/options/" +_channelID;
				break;
				
			case 'nodes':
				
				if (options.nodeID === undefined) {
					throw "nodeID is required";
				}
				let _nodeID = options.nodeID;
				

				// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/options/{{channelID}}
				_url = "/Net/" + _netContext + "/" + _nodeID  + "/options/" + _channelID;
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
			
		}
		
		
		return _scsClient.exec_SCS_Request({
			"scsRequest": {
				"url": _url,
				"type": "POST",
				"data": _dcOptions,
				"dataType": "json",
				
				"options": options
			}
		});
		
	}
	
	
	/**
	 * Control Data channel
	 * 
	 * @param {object} options - Options
	 * @param {string} options.nodeID - ID of the Node when DC is deleted (only required for netContext='nodes')
	 * @param {string} options.channelID - ID of channel to be deleted
	 * @param {string} options.netContext - Should be "server" or "nodes"
	 * @param {string} options.ctrlCommand - Control command ('init', 'close', 'start' or 'stop')
	 * 
	 * @param {st.forbrowser.services.SCS_Client} options.scsClient - SCS_Client
	 * @param {function} [options._onSuccess] - Function to run on success
	 * @param {function} [options._onError] - Function to run on error
	 * @param {function} [options._onComplete] - Function to run on complete
	 * 
	 * 
	 * @throws Exception
	 * 
	 * @returns {Promise}
	 */
	control_DC(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		
		if (options.scsClient === undefined) {
			throw "scsClient is required";
		}
		let _scsClient = options.scsClient;
		
		
		if (options.channelID === undefined) {
			throw "channelID is required";
		}
		let _channelID = options.channelID;

		
		if (options.netContext === undefined) {
			throw "netContext is required";
		}
		let _netContext = options.netContext;
		
		
		if (options.ctrlCommand === undefined) {
			throw "ctrlCommand is required";
		}
		let _ctrlCommand = options.ctrlCommand;
		
		switch (_ctrlCommand) {
			case 'init':
			case 'close':
			case 'start':
			case 'stop':
				break;
	
			default:
				throw "crlCommand is wrong.";
		}
		
		
		let _url = null;
		
		switch (_netContext) {
		
			case 'server':
				// http://{{stServer}}:{{cc}}/Net/Server/control/{{channelID}}/init
				_url = "/Net/" + _netContext + "/control/" +_channelID + "/" + _ctrlCommand;
				break;
				
			case 'nodes':
				
				if (options.nodeID === undefined) {
					throw "nodeID is required";
				}
				let _nodeID = options.nodeID;
				

				// http://{{stServer}}:{{cc}}/Net/Nodes/{{nodeID}}/control/{{channelID}}/init
				_url = "/Net/" + _netContext + "/" + _nodeID  + "/control/" + _channelID + "/" + _ctrlCommand;
				break;
	
			default:
				throw "netContext is wrong.";
	//			break;
			
		}
		
		
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

