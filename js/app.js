$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.
});

var opened = 0;
// chrome.extension.onMessage.addListener(
//   	function(request, sender, sendResponse) {	
//   		if(request.openPlugin == 'open'){

//   		}else if(request.openPlugin == 'close'){

//   		}
//  	}
//  );
var openWebVisor = function(){
	alert('lkk');	
}

window.openWebVisor = openWebVisor;