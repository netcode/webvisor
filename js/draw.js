var draw;
jQuery( document ).ready(function( $ ) {
  draw = {
		'show':function(){

		},
		'create':function(){
			//create new board
			//console.log('koko');
			var h = $(document).height();
			var w = $(document).width();
			
			div = '<canvas width="'+w+'" height="'+h+'" id="webvisor-drawing-board"></canvas>';
			$('body')			
			.append(div);
			$('#webvisor-drawing-board')
				.css({
						'position':'fixed',
						'z-index':9999
					})
				.sketch();
			
		},
		'init':function(){
			var _this = this;
			
		}

	}

	//unit testing
	draw.create();

});


