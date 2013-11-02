var login = {
	isLoaded:false,
	isLoggedin:false,

	init: function(){
		console.log("ddd");
		this.isLoaded = true;
		hello.init({ 
			google   : "921216105001.apps.googleusercontent.com"
		});

		hello.on('auth.login', function(auth){
			// call user information, for the given network
			hello( auth.network ).api( '/me' ).success(function(r){
				var $target = $("#profile_"+ auth.network );
				if($target.length==0){
					$target = $("<div id='profile_"+auth.network+"'></div>").appendTo("#profile");
				}
				$target.html('<img src="'+ r.thumbnail +'" /> Hey '+r.name).attr('title', r.name + " on "+ auth.network);
			});
		});
	},

	process: function(){
		console.log("sss");
		this.isLoggedin = true;
		hello( 'google' ).login();
	},

	getUser: function(){
		console.log("jiji");
		if(!this.isLoaded) this.init();
		if(!this.isLoggedin) this.process();	
	}
}

//login.getUser();