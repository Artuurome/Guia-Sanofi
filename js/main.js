$(document).ready(function () {
	
		var swiper = new Swiper('.swiper-container', {
			initialSlide: 0,
		 	slidesPerView: '1',
		 	loop: true,
		 	simulateTouch: true,
        	pagination: '.swiper-pagination',
        	paginationClickable: true
	  	});
		
		var mySwiper = $('.swiper-container')[0].swiper;
			mySwiper.onResize();
	
		var $section = $('section');
			$section.find('.panzoom').panzoom({
			$zoomIn: $section.find(".zoom-in"),
			$zoomOut: $section.find(".zoom-out"),
			$zoomRange: $section.find(".zoom-range"),
			$reset: $section.find(".reset"),
		});
	  
	  	$(".lineamientos").click(function(event){
	  		event.preventDefault();
	  		$(".submenu-navegacion").toggleClass("showSubmenu")	
	  	});
	
	  	$('.pop-up-container').hide();
	  	$('.info').click(function(){
			$('.pop-up-container').show();
			$('.pop-up').fadeIn(300);
	  	});
	  
	  	$('.cerrar').click(function() {
	  		$('.pop-up-container').hide();
	  	});
	  
});