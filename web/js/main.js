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
	
	$(".wrapper .content .content-nav li").on('click',function (e) {
		        $(".wrapper .content .content-nav li").removeClass("active");
		        var index = $(".wrapper .content .content-nav li").index($(this));
		        $(".wrapper .content .content-nav li").eq(index).addClass("active");
		        $(".wrapper .content .nav-list").removeClass("on");
		        $(".wrapper .content .nav-list").eq(index).addClass("on");
	})
	$(".wrapper .mintro-content .platform-1-nav li").on('click',function (e) {
        $(".wrapper .mintro-content .platform-1-nav li").removeClass("check");
        var index = $(".wrapper .mintro-content .platform-1-nav li").index($(this));
        $(".wrapper .mintro-content .platform-1-nav li").eq(index).addClass("check");
        $(".wrapper .mintro-content .platform-1-list").removeClass("on");
        $(".wrapper .mintro-content .platform-1-list").eq(index).addClass("on");
    })
	$(".to-top").on("click",
	    function() {
	        var a = 800;
	        var c = $(document).scrollTop(),
	        h = parseInt(a / 20),
	        v = c / h,
	        N = 0,
	        C = setInterval(function() {
	            N++,
	            $(document).scrollTop(c - v * N),
	            N == h && (clearInterval(C), $(document).scrollTop(0))
	        },
	        20)
	})
})
$(function () {
	var urlstr = location.href;
		// alert((urlstr + '/').indexOf($(this).attr('href')));
		var urlstatus=false;
		$("#header .navigation .primary-nav a").each(function () {
		if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
		  	$(this).addClass('cur'); urlstatus = true;
		} else {
		  $(this).removeClass('cur');
		}
		});
		if (!urlstatus) {$("#menu a").eq(0).addClass('cur'); }
})
