/*!

Name: Bitlr
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: May 27, 2014
Last Updated: May 27, 2014
Licensed under the MIT license

*/

;(function($) {

    $.bitlr = function(options) {

		//define default parameters
        var defaults = {
            error: function(message) {},
            success: function() {}
        }
        
        //define plugin
        var plugin = this;

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        //namespace settings
        var s = plugin.settings;
        
        //encode link
        s.link = encodeURI(s.link);
        
        $.ajax({
        	type: 'GET',
        	url: 'https://api-ssl.bitly.com/v3/shorten?access_token='+s.apiKey+'&longUrl='+s.link,
        	dataType: 'json',
        	success: function(result) {
        	
        		//if anchor is true
        		if(s.anchor === true) {
        		
        			//run success callback with new link as an anchor
        			s.success.call(this, '<a href="'+result.data.url+'">'+result.data.url+'</a>');
	        		
        		} else {
        		
	        		//run success callback with raw new link
	        		s.success.call(this, result.data.url);
        		
        		}
        	},
        	error: function(jqXHR, textStatus, errorThrown) {
        	
        		//run error callback
        		s.error.call(this);
        	}
        });

    }

})(jQuery);