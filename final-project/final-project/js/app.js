$(document).ready(function() {

	$(window).scroll(function(){
    $('.skrollable').css("opacity", 1 - $(window).scrollTop() / 400);
  });

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("carousel");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = "block"; 
	    setTimeout(carousel, 2000); 
	};

	$('a[href*=\\#]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:
	    	$(this.hash).offset().top}, 1000);
	});

	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });
});

