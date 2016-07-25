"use strict";




/**
 * Engine reference
 * 
 * @typedef {Object} Engine_Ref
 * @memberof st.forbrowser.engines
 * @type Object
 * @protected
 * 
 * @property {string} [sensorID] - Sensor ID
 * @property {string} [actuaorID] - Actuator ID
 * @property {string} type - Engine type
 * @property {string} _sysID - Engine sysID
 * @property {string} engine - Engine name. Could be 'not defined'
 * @property {string} state - Engine state.
 * 
 */


/**
 * The result object.
 * 
 * @typedef {Object} SearchResult
 * @memberof st.forbrowser.engines.Engines_Manager
 * 
 * @type Object
 * @property {(st.forbrowser.engines.Engine_Ref|null)} engine - The Engine object, may be null.
 * @property {number} position - The position in list.
 * 
 */


/**
 * Engines manager 
 * 
 * @class
 * @memberof st.forbrowser.engines
 * @protected
 * 
 * 
 */
class Engines_Manager {
	
	
	/**
	 * @constructs Engines_Manager
	 */
	constructor() {
		
	}
	
	
	/**
	 * Returns Engine searched by ID
	 * 
	 * @param {Object} options - Options
	 * @param {String} options.engineID - Engine ID
	 * @param {String} [options.type] - type. Could be 'sensor' or 'actuator'
	 * @param {st.forbrowser.engines.Engine_Ref[]} options.list - List of engines
	 * 
	 * @returns {st.forbrowser.engines.Engines_Manager.SearchResult} result - Result object
	 *  
	 */
	getEngineByID(options) {

		let _engineID = options.engineID;
		let _type = options.type;
		let _list = options.list;
		
		let _engine = null;
		let _i = 0;
		
		
		switch (_type) {
			case 'sensor':
				_i = _list.map(function(x) {return x.sensorID; }).indexOf(_engineID);
				break;
				
			case 'actuator':
				_i = _list.map(function(x) {return x.actuatorID; }).indexOf(_engineID);
				break;
	
			default:
				_i = _list.map(function(x) {return x._sysID; }).indexOf(_engineID);
				break;
		}
		
		
		if (_i !== -1) {
			_engine = _list[_i];
		}
		
		return {
			"engine": _engine,
			"position": _i
		};
	}
	
}



/**
 * @memberof st.forbrowser.engines
 * 
 * @returns {st.forbrowser.engines.Engines_Manager}
 */
function get_Engines_Manager() {
	return new Engines_Manager();
}



let _lib = {
	"Engines_Manager": Engines_Manager,
	"get_Engines_Manager": get_Engines_Manager,
	
	"_public": {
		"get_Engines_Manager": get_Engines_Manager
	}
};


module.exports = _lib;
