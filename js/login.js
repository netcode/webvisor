var login = {
	isLoaded:false,
	isLoggedin:false,	

	init: function(){
		this.isLoaded = true;
		var input = jQuery('<input>').attr('type','hidden')
 						  .attr('id', 'WVOauthInput')
 						  .val("0");
		jQuery("body").append(input);
	},

	process: function(){
		var _this = this;
		start_url = "http://bered.org/hybridauth-2.1.2/examples/widget_authentication/widget/?provider=google" + "&_ts=" + (new Date()).getTime();
		window.open(
			start_url, 
			"google+", 
			"location=0,status=0,scrollbars=0,width=800,height=500"
		); 

		var m = setInterval(function() {
		    if (jQuery("#WVOauthInput").val() != "0") {
		        clearInterval(m);
		        _this.isLoggedin = true;
		        draw.create();
		    }
		}, 500);
	},

	showToolbar: function(){
		if(!this.isLoaded) this.init();
		if(!this.isLoggedin) this.process();
		else draw.create();
	}
}

var x = jQuery('<a>').attr('href','#')
					 .attr('id', '')
					 .html('click i me')
					 .click(function(){
					 		login.showToolbar();
					 });
					 jQuery("body").append(x);