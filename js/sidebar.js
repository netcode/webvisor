var showSidebar = {
	'show':function(){
		
		var html ='';
		/*header*/
		html +='<div class="wa">';
		html += '<header>';
		html += '<div class="title">';
		html += '<a href="/" class="logo"><img src="/img/sidebar-logo.png"></a>';
		html += '<h1 class="name"><a href="/">Webvisor</a></h1>';
		html += '<h2 class="tagline">share info with people around world.</h2>';
		html += '</div>';
		html += '</header>';
		
		html +='</div>'; /*/wa*/
		
		
		jQuery( document ).ready(function( $ ) {
			$('body').prepend(html);
		});
	}
}

showSidebar.show(); 
