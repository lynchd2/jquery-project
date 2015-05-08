
$(document).ready(function() {

	var box = prompt("How many boxes per row and column do you want?");

	for(i=0; i < box*box;i++) {
		$('#grid').append('<div class ="square"></div>')
		$('#grid').css({'width':box * 50 + 'px'})

	}
	$('.square').mouseenter(function() {
		$(this).addClass('active')
		});

});
