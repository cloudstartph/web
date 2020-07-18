$('#info_btn').click(function(){	
	toggle_modal('info')
});

$('#question_btn').click(function(){	
	toggle_modal('question')
});

$('#warning_btn').click(function(){	
	toggle_modal('warning')
});

$('#error_btn').click(function(){	
	toggle_modal('error')
});

$('.modal-background').click(function(){
	close_modal();
});

$('.close-modal, #cancel_modal, #okay_modal').click(function(){
	close_modal();
})

function toggle_modal(modal_type){	
	$('.modal-header img').css('display','none');	
	$('.modal-header img.'+ modal_type).css('display','inline');
	$('.modal-footer button').first().removeClass();
	$('.modal-footer button').first().addClass('bg-'+modal_type);
	if($('.modal-container').hasClass('open')){
		close_modal();
	}
	else{
		open_modal();
		$('.modal-header span.title').html(modal_type);
		$('.modal-header span.message').html(modal_type + ' message');
		//$('.modal-content div.message').html(modal_type);
	}
}

function open_modal(){
	$('.modal-container').css('z-index', '3');
	$('.modal-container').css('opacity', '1');
	$('.modal-content').css('transform', 'scale(1)');
	$('.modal-container').addClass('open');
}

function close_modal(){
	$('.modal-container').css('z-index', '-1');
	$('.modal-container').css('opacity', '0');
	$('.modal-content').css('transform', 'scale(0.5)');	
	$('.modal-container').removeClass('open');
}

