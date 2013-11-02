var showSidebar = {
	'show':function(){
		
		var html ='';
		/*header*/
		html +='<div class="WebvisorApp" id="WebvisorApp">';
		html += '<div class="header">';
		html += '<div class="title">';
		html += '<a href="/" class="logo"><img src="https://cdn1.iconfinder.com/data/icons/free-large-boss-icon-set/64/Wizard.png"></a>';
		html += '<h1 class="name"><a href="/">Webvisor</a></h1>';
		html += '</div>';
		html += '</div>';
		html += '<br /><br />';
		html += '<br /><br />';
		html += '<button type="button" id="wa_add_comment" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Add Comment </button>';
		
		/*content*/
		html += '<div class="content">';
		html += '<div class="posts">';
		
		html += this.get_posts();
		html +='</div>'; /* /:posts*/
		html +='</div>'; /* /:content*/
		html +='</div>'; /* /:wa*/
		
		
		jQuery( document ).ready(function( $ ) {
			$('body').prepend(html);
			$('.WebvisorApp .posts').css('height', $(document).height());
			$('#wa_add_comment').click(function(){
				login.showToolbar();
			});
		});
	},
	'get_posts':function() {
		var html = '';
		
		var website = window.btoa(window.location.host)
		var myDataRef = new Firebase('https://webvisor.firebaseio.com/'+website);
		
		myDataRef.on('value', function(snapshot) {
			html += '<div id="'+snapshot.val().user.id+'" class="post post-NaN cold">';
	    	html += '<div class="post-author">';
	      	html += '<a href="https://twitter.com/MohmedFat7i" class="has-tooltip" target="_blank">';
	        html += '<img src="'+snapshot.val().user.img+'">';
	        html += '</a>';
	    	html += '</div>';
		    html += '<div class="post-content">';
		    html += '<div class="post-info">';
		    html += '<h3 class="post-heading">';
		    html += '<span class="post-title" target="_blank">'+snapshot.val().user.name+'</span>';
		    html += '</h3>';
		    html += '</div>';
		    html += '</div>';
		    html += '</div>';
		});
	
	    
	    
	    return html;
	}
}

showSidebar.show(); 
