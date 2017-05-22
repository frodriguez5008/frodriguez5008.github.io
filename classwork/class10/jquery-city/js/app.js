// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$(document).ready();

$('.thumb').click(function(){
	var thumbnailSRC = $(this).attr('src');
	console.log(thumbnailSRC);

	$('#bigimage').attr('src',thumbnailSRC);
});

console.log($('#thumbnails').children());

// $('#second').click(function(){
// 	var thumbnailSRC = $('#second').attr('src');
// 	console.log(thumbnailSRC);

// 	$('#bigimage').attr('src',thumbnailSRC);
// });

// $('#third').click(function(){
// 	var thumbnailSRC = $('#third').attr('src');
// 	console.log(thumbnailSRC);

// 	$('#bigimage').attr('src',thumbnailSRC);
// });

// $('#fourth').click(function(){
// 	var thumbnailSRC = $('#fourth').attr('src');
// 	console.log(thumbnailSRC);

// 	$('#bigimage').attr('src',thumbnailSRC);
// });


