$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#chatBot').fadeIn();
        } else {
            $('#chatBot').fadeOut();
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

	// grab the initial top offset of the navigation
   	var stickyNavTop = $('.header').offset().top;

   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) {
	        $('.header').addClass('header-sticky');
	    } else {
	        $('.header').removeClass('header-sticky');
	    }
	};

    $('a[href*="#"]').on('click', function (e) {
		//e.preventDefault();
		//$(document).off("scroll");

		$('a[href*="#"]').each(function () {
			$(this).removeClass('active-anchor');
		})
		$(this).addClass('active-anchor');

        // var target = this.hash;
        // $target = $(target);
        // console.log("target: " + target);
        // var refElement = $(this).attr("href");
        // var urlTarget = $(this).data( "url" );
        // alert("href: "+refElement);
        // var url = window.location;
        // var url1 = window.location.href;
        //
        // alert("url: "+url+" / "+url1);
        //var containsUrl = url.indexOf(urlTarget) >= 0;

        // alert("containsUrl: "+containsUrl);
        //
        // if (containsUrl) {
        //     window.location.href = '/index.html';
        // }
		// var target = this.hash;
		// $target = $(target);
		// $('html, body').stop().animate({
		// 	'scrollTop': $target.offset().top+2
		// }, 500, 'swing', function () {
		// 	window.location.hash = target;
		// 	$(document).on("scroll", onScroll);
		// });
	});

    $('#menuIcon').on('click', function (e) {
        $('.header').toggleClass('header-mobile');
    });

    $('#menu').on('click', function (e) {
        $('.header').toggleClass('header-mobile');
    });

    $('.value').on('click', function (e) {
        $('.values').fadeToggle();
    });

    $('.values .link').each(function () {
        $(this).click(function() {
            var refElement = $(this).attr("data-breadcrumb");
            $('.value').attr("data-breadcrumb", refElement);
        });
    });

    $('.section-icon').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.section-dynamic-inv').click(function() {
        $(this).toggleClass('active');
    });

    $('.cta').click(function() {
        $(this).parent().toggleClass('active');
    });

    function onScroll(event){
		var scrollPosition = $(document).scrollTop();
        scrollPosition = scrollPosition + 90;
		$('.active .link-parent-content .link').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('.active .link-parent-content .link').removeClass("active-anchor");
				currentLink.addClass("active-anchor");
			}
			else{
				currentLink.removeClass("active-anchor");
			}
		});
        $('.values .link').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            var breadCrumb = $(this).attr("data-breadcrumb");
            console.log("refElement: " + refElement);
            console.log("breadCrumb: " + breadCrumb);
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.value').attr("data-breadcrumb", breadCrumb);
                var breadCrumb1 = $(this).attr("data-breadcrumb");
                console.log("breadCrumb1: " + breadCrumb1);
            }
        });
	}

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
        onScroll();
    });
});
