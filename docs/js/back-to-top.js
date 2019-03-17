$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
        if ($(this).scrollTop() > 30) {
            $('#breadcrumbsNew').fadeIn("slow");
        } else {
            $('#breadcrumbsNew').fadeOut("slow");
        }
        if ($(this).scrollTop() > 30) {
            $('#breadcrumbsNewOne').fadeIn("slow");
        } else {
            $('#breadcrumbsNewOne').fadeOut("slow");
        }
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
    $('#backToTop1').click(function(){
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

    $('#menuIconMapOpen').on('click', function (e) {
        $('.header-map').toggleClass('map');
    });

    $('#menuIconMapClose').on('click', function (e) {
        $('.header-map').toggleClass('map');
    });

    $('#menuIconMapStickyOpen').on('click', function (e) {
        $('.header-map').toggleClass('map');
    });

    $('#menuIconMapStickyClose').on('click', function (e) {
        $('.header-map').toggleClass('map');
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

    $('.investors-dir-block.block-1').click(function() {
        $(this).parents(".section-dynamic-dir").toggleClass('active-1');
    });

    $('.investors-dir-block.block-2').click(function() {
        $(this).parents(".section-dynamic-dir").toggleClass('active-2');
    });

    $('.investors-dir-block.block-3').click(function() {
        $(this).parents(".section-dynamic-dir").toggleClass('active-3');
    });


    $('.contact-block.block-1').click(function() {
        $(this).parents(".section-dynamic-contact").toggleClass('active-2');
    });

    $('.contact-block.block-2-1').click(function() {
        $(this).parents(".section-dynamic-contact").toggleClass('active-2');
    });

    $('.contact-block.block-2-3').click(function() {
        $(this).parents(".section-dynamic-contact").toggleClass('active-2 active-3');
    });

    $('.contact-block.block-3-1').click(function() {
        $(this).parents(".section-dynamic-contact").toggleClass('active-3');
    });

    $('.contact-block.block-3-2').click(function() {
        $(this).parents(".section-dynamic-contact").toggleClass('active-2 active-3');
    });


    $('.inv-dir-action').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.inv-dir-popup').click(function() {
        $(this).parent().toggleClass('active');
    });

    // Initial state
    var scrollPos = 0;
    var dataScrollDirection = 0;
    // adding scroll event

    function getScrollDirection(event){
      // detects new state and compares it with the new one
      if ((document.body.getBoundingClientRect()).top > scrollPos) {
    		dataScrollDirection = 0;
      } else {
        dataScrollDirection = 1;
      }
    	// saves the new position for iteration.
    	scrollPos = (document.body.getBoundingClientRect()).top;
    }

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
        $('#breadcrumbs .values .link').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            var breadCrumb = $(this).attr("data-breadcrumb");
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.value').attr("data-breadcrumb", breadCrumb);
            }
        });
    }

    function onScrollNew(event){
        var scrollTopPosition = $(document).scrollTop();
        var scrollBottomPosition = scrollTopPosition + window.innerHeight;
        $('#breadcrumbsNew .values .link').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            var breadCrumb = $(this).attr("data-breadcrumb");
            var up = $('.up');
            var down = $('.down');
            var title = $('.title');
            var href = undefined;
            var nextLink = undefined;
            var backLink = undefined;
            var data = undefined;
            var nextRefElement = undefined;
            var nextHref = undefined;
            var nextBreadCrumb = undefined;

            if (dataScrollDirection) {
                if (refElement.position().top <= scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
                    var top = refElement.position().top;
                    var height = refElement.height();
                    console.log("top: " + top + " / height: " + height + " / scrollBottomPosition: " + scrollBottomPosition);
                    console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                    console.log("dataScrollDirection: " + dataScrollDirection);

                    nextLink = $(this).next();
                    console.log("---------------------");
                    console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                    if (nextLink.length) {
                        nextRefElement = $(nextLink.attr("href"));
                        nextHref = nextLink.attr("href");
                        nextBreadCrumb = $(nextLink).attr("data-breadcrumb");
                        if (down.hasClass("vis")) {
                            down.removeClass("vis");
                        }
                        if (!down.hasClass("w")) {
                            down.addClass("w");
                        }
                        if (up.hasClass("w")) {
                            up.removeClass("w");
                        }
                        if (title.hasClass("vis")) {
                            title.removeClass("vis");
                        }
                        $('.title').attr("data-title", 'DOWN');
                        console.log("nextRefElement: " + nextRefElement.attr('id') + " / nextBreadCrumb: " + nextBreadCrumb);
                    } else {
                        nextRefElement = 'The end';
                        nextHref = '#';
                        nextBreadCrumb = 'WHERE TO JUMP...';
                        if (!down.hasClass("vis")) {
                            down.addClass("vis");
                        }
                        if (!title.hasClass("vis")) {
                            title.addClass("vis");
                        }
                        if (down.hasClass("w")) {
                            down.removeClass("w");
                        }
                        console.log("nextRefElement: " + nextRefElement + " / nextBreadCrumb: " + nextBreadCrumb);
                    }

                    $('.value-new').attr("data-breadcrumb", nextBreadCrumb);
                    backLink = $(this).prev();
                    if (backLink.length) {
                        href = backLink.attr("href");
                        up.attr("href", href);
                        if (up.hasClass("vis")) {
                            up.removeClass("vis");
                        }
                    } else {
                        if (!up.hasClass("vis")) {
                            up.addClass("vis");
                        }
                    }
                    down.attr("href", nextHref);
                    console.log("up: " + up.attr("href") + " / down: " + down.attr("href"));
                    nextLink = undefined;
                    backLink = undefined;
                    if (currentLink.is(":last-child")) {
                      console.log("last");
                    }
                } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollBottomPosition && refElement.position().top + refElement.height() >= scrollTopPosition) {
                    href = currentLink.attr("href");
                    up.attr("href", href);
                }
            } else {
                if ((refElement.position().top < scrollTopPosition || refElement.position().top > scrollTopPosition && refElement.position().top < scrollBottomPosition) && refElement.position().top + refElement.height() > scrollBottomPosition) {
                    var top = refElement.position().top;
                    var height = refElement.height();
                    console.log("top: " + top + " / height: " + height + " / scrollTopPosition: " + scrollTopPosition + " / scrollBottomPosition: " + scrollBottomPosition);
                    console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                    console.log("dataScrollDirection: " + dataScrollDirection);

                    nextLink = $(this).prev();
                    console.log("---------------------");
                    console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                    if (nextLink.length) {
                        nextRefElement = $(nextLink.attr("href"));
                        nextHref = nextLink.attr("href");
                        nextBreadCrumb = $(nextLink).attr("data-breadcrumb");
                        if (up.hasClass("vis")) {
                            up.removeClass("vis");
                        }
                        if (title.hasClass("vis")) {
                            title.removeClass("vis");
                        }
                        if (!up.hasClass("w")) {
                            up.addClass("w");
                        }
                        if (down.hasClass("w")) {
                            down.removeClass("w");
                        }
                        $('.title').attr("data-title", 'UP');
                        console.log("nextRefElement: " + nextRefElement.attr('id') + " / nextBreadCrumb: " + nextBreadCrumb);
                    } else {
                        nextRefElement = 'The end';
                        nextHref = '#';
                        nextBreadCrumb = 'WHERE TO JUMP...';
                        if (!up.hasClass("vis")) {
                            up.addClass("vis");
                        }
                        if (!title.hasClass("vis")) {
                            title.addClass("vis");
                        }
                        if (up.hasClass("w")) {
                            up.removeClass("w");
                        }
                        console.log("nextRefElement: " + nextRefElement + " / nextBreadCrumb: " + nextBreadCrumb);
                    }

                    $('.value-new').attr("data-breadcrumb", nextBreadCrumb);
                    backLink = $(this).next();
                    if (backLink.length) {
                        href = backLink.attr("href");
                        down.attr("href", href);
                        if (down.hasClass("vis")) {
                            down.removeClass("vis");
                        }
                    } else {
                        if (!down.hasClass("vis")) {
                            down.addClass("vis");
                        }
                    }
                    up.attr("href", nextHref);
                    console.log("up: " + up.attr("href") + " / down: " + down.attr("href"));
                    nextLink = undefined;
                    backLink = undefined;
                } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollBottomPosition) {
                    nextBreadCrumb = currentLink.attr("data-breadcrumb");
                    $('.value-new').attr("data-breadcrumb", nextBreadCrumb);
                    if (title.hasClass("vis")) {
                        title.removeClass("vis");
                    }
                    $('.title').attr("data-title", 'UP');
                }
            }
        });

        $('#breadcrumbsNewOne .values .link').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            var breadCrumb = $(this).attr("data-breadcrumb");
            var up = $('.up');
            var down = $('.down');
            var value = $('.value');
            var href = undefined;
            var nextLink = undefined;
            var backLink = undefined;
            var data = undefined;
            var nextRefElement = undefined;
            var nextHref = undefined;
            var nextBreadCrumb = undefined;

            if (dataScrollDirection) {
                if (refElement.position().top <= scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
                    var top = refElement.position().top;
                    var height = refElement.height();
                    console.log("top: " + top + " / height: " + height + " / scrollBottomPosition: " + scrollBottomPosition);
                    console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                    console.log("dataScrollDirection: " + dataScrollDirection);

                    nextLink = $(this).next();
                    console.log("---------------------");
                    console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                    if (nextLink.length) {
                        nextRefElement = $(nextLink.attr("href"));
                        nextHref = nextLink.attr("href");
                        nextBreadCrumb = $(nextLink).attr("data-breadcrumb");
                        if (down.hasClass("vis")) {
                            down.removeClass("vis");
                        }
                        if (!down.hasClass("w")) {
                            down.addClass("w");
                        }
                        if (up.hasClass("w")) {
                            up.removeClass("w");
                        }
                        if (value.hasClass("vis")) {
                            value.removeClass("vis");
                        }
                        console.log("nextRefElement: " + nextRefElement.attr('id') + " / nextBreadCrumb: " + nextBreadCrumb);
                    } else {
                        nextRefElement = 'The end';
                        nextHref = '#';
                        breadCrumb = 'SELECT WHERE TO JUMP...';
                        if (!down.hasClass("vis")) {
                            down.addClass("vis");
                        }
                        if (down.hasClass("w")) {
                            down.removeClass("w");
                        }
                        if (!value.hasClass("vis")) {
                            value.addClass("vis");
                        }
                        console.log("nextRefElement: " + nextRefElement + " / nextBreadCrumb: " + nextBreadCrumb);
                    }

                    backLink = $(this).prev();
                    if (backLink.length) {
                        href = backLink.attr("href");
                        up.attr("href", href);
                        if (up.hasClass("vis")) {
                            up.removeClass("vis");
                        }
                    } else {
                        if (!up.hasClass("vis")) {
                            up.addClass("vis");
                        }
                    }
                    down.attr("href", nextHref);
                    console.log("up: " + up.attr("href") + " / down: " + down.attr("href"));
                    nextLink = undefined;
                    backLink = undefined;
                    if (currentLink.is(":last-child")) {
                      console.log("last");
                    }
                } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollBottomPosition && refElement.position().top + refElement.height() >= scrollTopPosition) {
                    href = currentLink.attr("href");
                    up.attr("href", href);
                }
            } else {
                if ((refElement.position().top < scrollTopPosition || refElement.position().top > scrollTopPosition && refElement.position().top < scrollBottomPosition) && refElement.position().top + refElement.height() > scrollBottomPosition) {
                    var top = refElement.position().top;
                    var height = refElement.height();
                    console.log("top: " + top + " / height: " + height + " / scrollTopPosition: " + scrollTopPosition + " / scrollBottomPosition: " + scrollBottomPosition);
                    console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                    console.log("dataScrollDirection: " + dataScrollDirection);

                    nextLink = $(this).prev();
                    console.log("---------------------");
                    console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                    if (nextLink.length) {
                        nextRefElement = $(nextLink.attr("href"));
                        nextHref = nextLink.attr("href");
                        nextBreadCrumb = $(nextLink).attr("data-breadcrumb");
                        if (up.hasClass("vis")) {
                            up.removeClass("vis");
                        }
                        if (!up.hasClass("w")) {
                            up.addClass("w");
                        }
                        if (down.hasClass("w")) {
                            down.removeClass("w");
                        }
                        if (value.hasClass("vis")) {
                            value.removeClass("vis");
                        }
                        console.log("nextRefElement: " + nextRefElement.attr('id') + " / nextBreadCrumb: " + nextBreadCrumb);
                    } else {
                        nextRefElement = 'The end';
                        nextHref = '#';
                        //breadCrumb = 'WHERE TO JUMP...';
                        if (!up.hasClass("vis")) {
                            up.addClass("vis");
                        }
                        if (up.hasClass("w")) {
                            up.removeClass("w");
                        }
                        console.log("nextRefElement: " + nextRefElement + " / nextBreadCrumb: " + nextBreadCrumb);
                    }

                    backLink = $(this).next();
                    if (backLink.length) {
                        href = backLink.attr("href");
                        down.attr("href", href);
                        if (down.hasClass("vis")) {
                            down.removeClass("vis");
                        }
                    } else {
                        if (!down.hasClass("vis")) {
                            down.addClass("vis");
                        }
                    }
                    up.attr("href", nextHref);
                    console.log("up: " + up.attr("href") + " / down: " + down.attr("href"));
                    nextLink = undefined;
                    backLink = undefined;
                }  else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollBottomPosition && refElement.position().top + refElement.height() >= scrollTopPosition) {
                      if (!up.hasClass("w")) {
                          up.addClass("w");
                      }
                }
            }

            if (refElement.position().top <= scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
                $('.value').attr("data-breadcrumb", breadCrumb);
            }
        });
    }

    stickyNav();
    onScrollNew();
    getScrollDirection();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
        getScrollDirection();
        onScroll();
        onScrollNew();
    });
});
