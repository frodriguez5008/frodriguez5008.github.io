// $(document).ready(function () {

// 	var lights = 'on';

// 	$('#lightswitch').click(function(){
// 		if (lights == 'on') {
// 		// console.log('on');
// 		$('#lightswitch').css('background-color' , 'white');
// 		$('#lightswitch').css('color' , 'black');
// 		$('body').css('background-color' , 'black');

// 		lights = 'off';
// 	} else {
// 		$('#lightswitch').css('background-color' , 'black');
// 		$('#lightswitch').css('color' , 'white');
// 		$('body').css('background-color' , 'white');

// 		lights = 'on';
// 		}
// 	});
// });

// REFACTORED using jQuery class manipulation

// $(document).ready(function () {

// 	var lights = 'on';

// 	$('#lightswitch').click(function(){
// 		if (lights == 'on') {
// 		$('#lightswitch').addClass('switch-off');
// 		$('#lightswitch').removeClass('switch-on');
// 		$('body').addClass('lights-off');
// 		lights = 'off';
// 	} else {
// 		$('#lightswitch').addClass('switch-on');
// 		$('#lightswitch').removeClass('switch-off');
// 		$('body').removeClass('lights-off');
// 		lights = 'on';
// 		}
// 	});
// });

// REFACTORED using jQuery class manipulation

$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){
		$('#lightswitch').toggleClass('switch-off switch-on');
		$('body').toggleClass('lights-off');
	});
});


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;