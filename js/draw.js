var draw = {
	'show':function(){

	},
	'create':function(){
		//create new board
		console.log('koko');
		var h = $(document).height();
		var w = $(document).width();
		var div = $('<div />',{
			id:'webvisor-drawing-board',
			style:'width:'+w+'px;height:'+h+'px'
		});
		$('body').append(div);
		
	},
	'init':function(){
		var _this = this;
		
	}

}

//unit testing
draw.create();