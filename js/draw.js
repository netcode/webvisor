var draw;
var publicTool = 1;
jQuery( document ).ready(function( $ ) {
  draw = {
  		//var myDataRef = new Firebase('https://l6nxxzxvg76.firebaseio-demo.com/');
  		'firebaseURL':'https://webvisor.firebaseio.com/',
  		'currentUserID':'1',
		'show':function(UserID){
			
			var _this = this;
			_this.drawEmptyCanvas();

			//get curent website
			var website = window.btoa(window.location.host)
			var myDataRef = new Firebase(_this.firebaseURL+website);
			/*
			var pushData = {
				'img':dataURL,
				'texts':[]
			}
			*/
			myDataRef.child(UserID).on('value', function(snapshot) {
				console.log('tetst')
				if(snapshot.val() !== null) {
					var loadedImg = snapshot.val().img;
					var texts = snapshot.val().texts;
					//console.log(loadedImg);
					var canvas = document.getElementById('webvisor-drawing-board');
		        	var context = canvas.getContext('2d');
					var img = new Image();
					img.onload = function () {						
					    context.drawImage(this, 0, 0, canvas.width, canvas.height);
					}
					img.src = loadedImg;

					$.each(texts,function(k,v){
						var d = new Date();
						var n = d.getTime(); 

						var txtCon = $('<a />',{
							id:'x'+n,
							class:'btn webvisor-text-overlay',
							href:'#',
							"data-webvisor-content":v.text
						})
						.html('<span class="label label-success">T</span>')
						.css({
							'position':'fixed',
							'top':v.y+'px',
							'left':v.x+'px',
							'z-index':9999999
						});



						//<a  data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. right?" role="button">Click to toggle popover</a>
						$('body').append(txtCon);

						$('#'+'x'+n).popover({
							content:v.text,
						});

					});


				};
			});

			
			//load
			

		},
		'clear':function(){
			$('#webvisor-drawing-board').remove();
			$('.webvisor-drawing-tools').remove();
			$('.webvisor-text-overlay').remove();
		},
		'create':function(){
			//create new board
			//console.log('koko');
			var _this = this;
			_this.drawCanvas();
			
		},
		'drawEmptyCanvas':function(){
			var _this = this;
			var h = $(document).height();
			var w = $(document).width();
			
			var div = '<canvas width="'+w+'" height="'+h+'" id="webvisor-drawing-board"></canvas>';
			$('body')	
			.append(div);

			$('#webvisor-drawing-board')
				.css({
						'position':'absolute',
						'z-index':9999,
						'top':0,
						'left':0
					});
		},
		'drawCanvas':function(){
			var _this = this;
			_this.clear();
			var h = $(document).height();
			var w = $(document).width();
			
			var div = '<canvas width="'+w+'" height="'+h+'" id="webvisor-drawing-board"></canvas>';
			var tools = '<div class="webvisor-drawing-tools"></div>';
			$('body')	
			.append(tools)		
			.append(div);

			$.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function() {
		      $('.webvisor-drawing-tools').append("<a href='#webvisor-drawing-board' class='btn btn-default' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
		    });
		    $.each([3, 5, 10, 15], function() {
		      $('.webvisor-drawing-tools').append("<a href='#webvisor-drawing-board' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
		    });
		    var anchor = $('<a />',{href:'#'}).on('click',function(){
		    	_this.export();
		    });
		    var txtAnchor = $('<a />',{href:'#',class:'btn btn-default'}).html('T').on('click',function(){
		    	if(publicTool == 'text'){
		    		publicTool = 0;	
		    		$(this).removeClass('active');
		    		$('#webvisor-drawing-board').css('cursor','auto');
		    	}else{
		    		publicTool = 'text';
		    		$(this).addClass('active');
		    		$('#webvisor-drawing-board').css('cursor','pointer');
		    	}
		    	
		    });
		    var SaveAnchor = $('<a />',{href:'#',class:'btn btn-default'}).html('Save').on('click',function(){
		    	_this.export();
		    });
		    $('.webvisor-drawing-tools').append(SaveAnchor).append(txtAnchor);
		    $('.webvisor-drawing-tools')
		    	.css({
		    		'position':'fixed',
		    		'z-index':99999,
		    		'top':0,
		    		'left':0,
		    		'width':'100%',
		    	});
			$('#webvisor-drawing-board')
				.css({
						'position':'absolute',
						'z-index':9999,
						'top':0,
						'left':0,
					})
				.sketch();

			//aditional classes
			//$('#webvisor-drawing-addText-modal');
			var textModal = $('<div />').html('<div class="modal fade" style="z-index:999999" id="webvisor-drawing-addText-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h4 class="modal-title" id="myModalLabel">Add Comment</h4> </div> <div class="modal-body"><textarea id="webvisor-addText" style="width:100%;height:150px"></textarea></div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" id="webvisor-addTextSubmit" class="btn btn-primary">Add Comment</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --></div><!-- /.modal -->');
			$('body').append(textModal);

			//add events
			_this.attachEvents();
		},
		'attachEvents':function(){
			$('#webvisor-drawing-board').on('click',function(e){
				if(publicTool == 'text'){
					console.log('clicked');
					var posx = e.pageX;
					var posy =  e.pageY;
					
					$('#webvisor-drawing-addText-modal').modal();
					//atach event

					$('#webvisor-addTextSubmit').on('click',function(){
						//alert('add text');

						//alert($('#webvisor-addText').val());
						//alert('in pos : '+posx+' x '+posy);
						//attach the text to the board
						var d = new Date();
						var n = d.getTime(); 

						var txtCon = $('<a />',{
							id:'x'+n,
							class:'btn webvisor-text-overlay',
							href:'#',
							"data-webvisor-content":$('#webvisor-addText').val()
						})
						.html('<span class="label label-success">T</span>')
						.css({
							'position':'fixed',
							'top':posy+'px',
							'left':posx+'px',
							'z-index':9999999
						});



						//<a  data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. right?" role="button">Click to toggle popover</a>
						$('body').append(txtCon);

						$('#'+'x'+n).popover({
							content:$('#webvisor-addText').val(),

						});

						$('#webvisor-addText').val(' ');
						$('#webvisor-drawing-addText-modal').modal('hide')

					


						$(this).off('click');

					});
				}else{
					console.log('not clicked');
				}
				
				//console.log(publicTool);
			});
		},
		'export':function(){
			var _this = this;
			console.log(_this.firebaseURL+window.btoa(window.location.host));
			var myDataRef = new Firebase(_this.firebaseURL+window.btoa(window.location.host));

			var canvas = document.getElementById('webvisor-drawing-board');
			var dataURL = canvas.toDataURL();
			var userValue = $('#WVOauthInput').val();
			var userValueData = userValue.split('|');
			var pushData = {
				'img':dataURL,
				'texts':[],
				'user':{
					'name':userValueData[1],
					'img':userValueData[2],
					'id':userValueData[0]
				}
			}
			//get text markers
			$('.webvisor-text-overlay').each(function(){
			 	var textOverlayData = {
			 		'x':$(this).offset().left,
			 		'y':$(this).offset().top,
			 		'text':$(this).attr('data-webvisor-content')
			 	};
			 	pushData.texts.push(textOverlayData);
			 	//console.log(textOverlayData);
			 });

			//var pushData = 
			_this.currentUserID = userValueData[0];
			myDataRef.child(_this.currentUserID).set(pushData);

			console.log(dataURL);
		},
		'init':function(){
			var _this = this;			
		}

	}

	//unit testing
	//draw.show(1);

	//draw.create();

});


