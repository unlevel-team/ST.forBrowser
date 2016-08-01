"use strict";


/**
 * AJAX Get method based on jQuery
 * 
 * @function
 * @memberof st.forbrowser.network
 * 
 * 
 * @param {object} options - Options object
 * @param {string} options.url - URL
 * @param {object} options.data - data	
 * @param {string} options.type - GET or POST
 * @param {string} options.dataType - Response type (json/text/html...)
 * @param {function} [options._onSuccess] - Function to run on success
 * @param {function} [options._onError] - Function to run on error
 * @param {function} [options._onComplete] - Function to run on complete
 * 
 * 
 */
function jQuery_ajax(options) {
	
	
	jQuery.ajax({
	    // URL for request
	    url : options.url,
	 
	    // Data for send on request
	    data : options.data,
	 
	    // type of request POST | GET
	    type: options.type,
	 
	    // response type
	    dataType : options.dataType,
	    
	    // Allow crossdomain
	    crossDomain: true,
	    
	    // Content type
	    contentType: options.contentType,
	    
	    // Asynchronous
	    async: true,
	 
	    // on success
	    success : function(json) {
	        
	    	if (options._onSuccess !== undefined) {
	    		options._onSuccess(json);
	    	}
	    	
	    },
	 
	    // on error
	    error : function(xhr, status) {
	    	
	    	if (options._onError !== undefined) {
	    		options._onError({
	    			"xhr": xhr,
	    			"status": status
	    		});
	    	}
	    },
	 
	    // on complete
	    complete : function(xhr, status) {
	    	
	    	
	    	if (options._onComplete !== undefined) {
	    		options._onComplete({
	    			"xhr": xhr,
	    			"status": status
	    		});
	    	}
	    }
	});
	
	
}



let _lib = {
		
	"jQuery_ajax": jQuery_ajax,
	
	"_public": {
		"jQuery_ajax": jQuery_ajax
	}
};


module.exports = _lib;
