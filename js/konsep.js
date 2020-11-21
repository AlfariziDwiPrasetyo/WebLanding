$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'swing');

 e.preventDefault();
});

// parallax

//  about

$(window).on('load', function() {
	$('.panimation').addClass('pmuncul');
	$('.H2animation').addClass('pmuncul');
	
});

$(window).scroll(function() {
	  var wScroll = $(this).scrollTop();

	 $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
          
	 });

	 $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
          
	 });

	 $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/0.8 +'%)'
          
	 });



     // Template

     if( wScroll > $('.Template').offset().top - 250) {
     	$('.Template .thumbnail').each(function(i) {
     		setTimeout(function() {
         $('.Template .thumbnail').eq(i).addClass('muncul');
     		}, 300 * (i+1));

     	});


     	 
     }

});



 


