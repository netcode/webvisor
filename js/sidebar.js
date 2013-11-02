var showSidebar = {
	'show':function(){
		
		var html ='';
		/*header*/
		html +='<div class="WebvisorApp" id="WebvisorApp" style="display:none;">';
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
			jQuery('.posts').html('');
			//console.log(snapshot.val());
			var users = snapshot.val();
			for(i in users){
				//console.log(users[i].user.name);
				html += '<div id="'+users[i].user.id+'" class="post post-NaN cold">';
		    	html += '<div class="post-author">';
		      	html += '<a href="#" class="has-tooltip" target="_blank" onclick="draw.show('+users[i].user.id+')">';
		        html += '<img src="'+users[i].user.img+'">';
		        html += '</a>';
		    	html += '</div>';
			    html += '<div class="post-content">';
			    html += '<div class="post-info">';
			    html += '<h3 class="post-heading">';
			    html += '<span class="post-title" target="_blank">'+users[i].user.name+'</span>';
			    html += '</h3>';
			    html += '</div>';
			    html += '</div>';
			    html += '</div>';


			}
			jQuery('.posts').html(html);
				jQuery('.post-NaN').on('click',function(){
			    	draw.clear();
			    	draw.show(jQuery(this).attr('id'));
			    });
			// jQuery.each(users,function(k,v){
				
			// 	html += '<div id="'+v.user.id+'" class="post post-NaN cold">';
		 //    	html += '<div class="post-author">';
		 //      	html += '<a href="#" class="has-tooltip" target="_blank">';
		 //        html += '<img src="'+v.user.img+'">';
		 //        html += '</a>';
		 //    	html += '</div>';
			//     html += '<div class="post-content">';
			//     html += '<div class="post-info">';
			//     html += '<h3 class="post-heading">';
			//     html += '<span class="post-title" target="_blank">'+v.user.name+'</span>';
			//     html += '</h3>';
			//     html += '</div>';
			//     html += '</div>';
			//     html += '</div>';
			// });

			
		});
	
	    
	    
	    return html;
	}
}

showSidebar.show(); 
