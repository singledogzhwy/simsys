$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		/*if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}*/
	});
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');
	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
$(function () {
	$(".wrapper .content-btn .log-query-btn li").on('click',function (e) {
        $(".wrapper .content-btn .log-query-btn li").removeClass("active");
        var index = $(".wrapper .content-btn .log-query-btn li").index($(this));
        $(".wrapper .content-btn .log-query-btn li").eq(index).addClass("active");
        $(".wrapper .content-btn .login-btn").removeClass("on");
        $(".wrapper .content-btn .login-btn").eq(index).addClass("on");
	})
})
