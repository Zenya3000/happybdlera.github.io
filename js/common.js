

$(document).ready(function() {

	$('.but').click(function(){
		
		var $btn = $(this);
		var $step = $btn.parents('.main_box');
		var stepIndex = $step.index();
		alert(stepIndex);






	});	

});



