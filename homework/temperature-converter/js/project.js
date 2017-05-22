
$(document).ready(function(){ 

	$('#first').change(function(){
  		var input = $(this).val();
  		$.isNumeric(input);
  		input = parseInt(input);
  		var output = ((input + 40) / 1.8) - 40;
  		output = String(output);
  		output = output.substring(0, 5);
		$('#one').html(output);
	});

	$('#second').change(function(){
  		var input = $(this).val();
  		$.isNumeric(input);
  		input = parseInt(input);
  		var output = ((input + 40) * 1.8) - 40;
  		output = String(output);
  		output = output.substring(0, 5);
		$('#two').html(output);
	});
	
});


