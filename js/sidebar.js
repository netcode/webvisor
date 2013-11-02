var showSidebar = {
	'show':function(){
		
		var html ='';
		/*header*/
		html +='<div class="WebvisorApp">';
		html += '<div class="header">';
		html += '<div class="title">';
		html += '<a href="/" class="logo"><img src="https://cdn1.iconfinder.com/data/icons/free-large-boss-icon-set/64/Wizard.png"></a>';
		html += '<h1 class="name"><a href="/">Webvisor</a></h1>';
		html += '<h2 class="tagline">share info with people around world.</h2>';
		html += '</div>';
		html += '</div>';
		html += '<br /><br /><br />';
		
		/*content*/
		html += '<div class="content">';
		html += '<div class="posts">';
		
		html += this.get_posts();
		html += this.get_posts();
		html += this.get_posts();
		html += this.get_posts();
		html += this.get_posts();
		html += this.get_posts();
		
		html +='</div>'; /* /:posts*/
		html +='</div>'; /* /:content*/
		html +='</div>'; /* /:wa*/
		
		
		jQuery( document ).ready(function( $ ) {
			$('body').prepend(html);
		});
	},
	'get_posts':function() {
		var html = '';
		
		html += '<div id="TODO_userID" class="post post-NaN cold">';
    	html += '<div class="post-author">';
      	html += '<a href="https://twitter.com/MohmedFat7i" class="has-tooltip" target="_blank">';
        html += '<span class="tooltip"><span>Added by <font>@MohmedFat7i</font></span></span>';
        html += '<img src="https://pbs.twimg.com/profile_images/3393792058/add89b9d945edd13b04f292410cfaf41_bigger.jpeg">';
        html += '</a>';
    	html += '</div>';
    	html += '<div class="post-share">';
	    html += '<div class="share-link">';
	    html += '<a href="#">';
	    html += '<i class="icon-share"></i>';
	    html += '</a>';
	    html += '</div>';
	    html += '</div>';
	    html += '<div class="post-content">';
	    html += '<div class="post-info">';
	    html += '<h3 class="post-heading">';
	    html += '<span class="post-title" target="_blank">This Site is suckes</span>';
	    html += '</h3>';
	    html += '<p class="post-text">lorem ipsum sit dolor blah blah, lorem ipsum sit dolor blah blah, lorem ipsum sit dolor blah blah, </p>';
	    html += '</div>';
	    html += '</div>';
	    html += '</div>';
	    
	    return html;
	}
}

showSidebar.show(); 
