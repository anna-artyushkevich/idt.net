$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
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
    console.log("stickyNavTop: " + stickyNavTop);

   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
      console.log("scrollTop: " + scrollTop);

	    if (scrollTop > stickyNavTop) {
	        $('.header').addClass('header-sticky');
	    } else {
	        $('.header').removeClass('header-sticky');
	    }
	  };

    $('.link-parent-content .link').on('click', function (e) {
  		//e.preventDefault();
  		//$(document).off("scroll");
  		//$(this).addClass('active-anchor');
      console.log('active: ' + $(this).attr("href"));
      var hasClass = $('.header').hasClass('header-sticky');

      if (!hasClass) {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top - 192 //offsets for fixed header
                  }, 1000);
                  return false;
              }
          }
      }

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

    $('.breadcrumbs .link').on('click', function (e) {

      var hasClass = $('.header').hasClass('header-sticky');

      if (!hasClass) {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              var top = target.offset().top;
              if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top - 236 //offsets for fixed header
                  }, 1000, function(target) {
                    //var top = target.offset().top;
                    //console.log("top final: " + top);
                  });

                  return false;
              }
          }
      }
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
        var section = $(this).parents(".section-dynamic-dir");
        section.toggleClass('active-1');
        if (section.hasClass('active-3')) {
            section.removeClass('active-3');
        }
    });

    $('.investors-dir-block.block-2').click(function() {
        var section = $(this).parents(".section-dynamic-dir");
        section.toggleClass('active-2');
        if (section.hasClass('active-3')) {
            section.removeClass('active-3');
        }
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
        var hasClass = $('.header').hasClass('header-sticky');

        if (hasClass) {
          scrollPositionMobile = scrollPosition + 102;
          scrollPositionDesktop = scrollPosition + 103;
        } else {
          scrollPositionMobile = scrollPosition + 137;
          scrollPositionDesktop = scrollPosition + 192;
        }

    		$('.active .link-parent-content .link').each(function () {
    			var currentLink = $(this);
    			var refElement = $(currentLink.attr("href"));
    			if (refElement.position().top <= scrollPositionDesktop && refElement.position().top + refElement.height() > scrollPositionDesktop) {
    				$('.active .link-parent-content .link').each(function () {
                $(this).removeClass('active-anchor');
            });
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
            if (refElement.position().top <= scrollPositionMobile && refElement.position().top + refElement.height() > scrollPositionMobile) {
                $('.value').attr("data-breadcrumb", breadCrumb);
            }
        });
    }

    function onScrollNew(event){
        var scrollTopPosition = $(document).scrollTop();
        var scrollBottomPosition = scrollTopPosition + window.innerHeight;
        // previous navigation anchors
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

        scrollTopPosition = scrollTopPosition + 103;
        $('.breadcrumbs-top .values .link').each(function () {
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
                if (refElement.position().top <= scrollTopPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
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
                        if (currentLink.is(":last-child")) {
                            if (!down.hasClass("vis")) {
                                down.addClass("vis");
                            }
                        }
                        if (down.hasClass("w")) {
                            down.removeClass("w");
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
                } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) { // if current section is last and it's end is higher then viewport's bottom
                    breadCrumb = 'MORE...';
                    if (!value.hasClass("vis")) {
                        value.addClass("vis");
                    }

                    nextLink = undefined;
                    backLink = undefined;

                    href = currentLink.attr("href");
                    up.attr("href", href);
                }
            } else {
                if (refElement.position().top < scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
                    var top = refElement.position().top;
                    var height = refElement.height();
                    console.log("top: " + top + " / height: " + height + " / scrollTopPosition: " + scrollTopPosition + " / scrollBottomPosition: " + scrollBottomPosition);
                    console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                    console.log("dataScrollDirection: " + dataScrollDirection);

                    nextLink = $(this).prev();
                    console.log("---------------------");
                    console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                    if (nextLink.length ) {
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
                        if (currentLink.is(":first-child")) {

                        }
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
                      if (value.hasClass("vis")) {
                          value.removeClass("vis");
                      }
                      //breadCrumb = 'MORE...';
                }
            }


            if (refElement.position().top <= scrollTopPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
                $('.value').attr("data-breadcrumb", breadCrumb);
            } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollTopPosition) {
                $('.value').attr("data-breadcrumb", 'MORE...');
            } else if (currentLink.is(":last-child") && refElement.position().top <= scrollBottomPosition && refElement.position().top + refElement.height() < scrollBottomPosition && refElement.position().top + refElement.height() >= scrollTopPosition) {
                $('.value').attr("data-breadcrumb", breadCrumb);
            } else if (currentLink.is(":first-child") && refElement.position().top < scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
              $('.value').attr("data-breadcrumb", breadCrumb);
            }
        });
    }

    function onScrollHome(event){
      var scrollTopPosition = $(document).scrollTop();
      var scrollBottomPosition = scrollTopPosition + window.innerHeight;
      // home navigation anchors

      scrollTopPosition = scrollTopPosition + 103;
      $('#breadcrumbsNewHome .values .link').each(function () {
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
              if (refElement.position().top <= scrollTopPosition && (refElement.position().top + refElement.height() <= scrollBottomPosition || refElement.position().top + refElement.height() >= scrollBottomPosition)) {
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
                      // if (!down.hasClass("w")) {
                      //     down.addClass("w");
                      // }
                      // if (up.hasClass("w")) {
                      //     up.removeClass("w");
                      // }
                      if (value.hasClass("vis")) {
                          value.removeClass("vis");
                      }
                      console.log("nextRefElement: " + nextRefElement.attr('id') + " / nextBreadCrumb: " + nextBreadCrumb);
                  } else {
                      nextRefElement = 'The end';
                      nextHref = '#';
                      if (currentLink.is(":last-child")) {
                          if (!down.hasClass("vis")) {
                              down.addClass("vis");
                          }
                          if (refElement.position().top + refElement.height() <= scrollTopPosition) {
                            breadCrumb = 'MORE...';
                            if (!value.hasClass("vis")) {
                                value.addClass("vis");
                            }
                          }
                      }
                      // if (down.hasClass("w")) {
                      //     down.removeClass("w");
                      // }
                      console.log("nextRefElement: " + nextRefElement + " / nextBreadCrumb: " + nextBreadCrumb);
                  }

                  backLink = $(this).prev();
                  if (backLink.length) {
                      if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) {
                        href = currentLink.attr("href");
                        up.attr("href", href);
                      } else {
                        href = backLink.attr("href");
                        up.attr("href", href);
                      }
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
              } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) { // if current section is last and it's end is higher then viewport's bottom
                  breadCrumb = 'MORE...';
                  if (!value.hasClass("vis")) {
                      value.addClass("vis");
                  }

                  nextLink = undefined;
                  backLink = undefined;

                  href = currentLink.attr("href");
                  up.attr("href", href);
              } else if (currentLink.is(":first-child") && refElement.position().top <= scrollTopPosition && (refElement.position().top + refElement.height() <= scrollBottomPosition || refElement.position().top + refElement.height() >= scrollBottomPosition)) { // if current section is last and it's end is higher then viewport's bottom
                  // if (!down.hasClass("w")) {
                  //     down.addClass("w");
                  // }
                  // if (up.hasClass("w")) {
                  //     up.removeClass("w");
                  // }
                  // if (value.hasClass("vis")) {
                  //     value.removeClass("vis");
                  // }
                  //
                  // nextLink = undefined;
                  // backLink = undefined;
              }
          } else {
              if (refElement.position().top <= scrollTopPosition && (refElement.position().top + refElement.height() <= scrollBottomPosition || refElement.position().top + refElement.height() >= scrollBottomPosition)) {
                  var top = refElement.position().top;
                  var height = refElement.height();
                  console.log("top: " + top + " / height: " + height + " / scrollTopPosition: " + scrollTopPosition + " / scrollBottomPosition: " + scrollBottomPosition);
                  console.log("current refElement: " + refElement.attr('id') + " / current breadCrumb: " + breadCrumb);
                  console.log("dataScrollDirection: " + dataScrollDirection);

                  nextLink = $(this).prev();
                  console.log("---------------------");
                  console.log("refElement: " + refElement.attr('id') + " / breadCrumb: " + breadCrumb);

                  if (nextLink.length ) {
                      nextRefElement = $(nextLink.attr("href"));
                      if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) {
                        breadCrumb = 'MORE...';
                        nextHref = currentLink.attr("href");
                      } else {
                        nextHref = nextLink.attr("href");
                        nextBreadCrumb = $(nextLink).attr("data-breadcrumb");
                      }
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
                      if (currentLink.is(":first-child")) {
                      }
                      nextRefElement = 'The end';
                      nextHref = '#';
                      //breadCrumb = 'WHERE TO JUMP...';
                      if (currentLink.is(":last-child")) {
                          if (!down.hasClass("vis")) {
                              down.addClass("vis");
                          }
                          if (refElement.position().top + refElement.height() <= scrollTopPosition) {
                            breadCrumb = 'MORE...';
                            if (!value.hasClass("vis")) {
                                value.addClass("vis");
                            }
                          }
                      }
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
                      if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) {
                        href = currentLink.attr("href");
                        down.attr("href", href);
                      } else {
                        href = backLink.attr("href");
                        down.attr("href", href);
                      }
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
              } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() < scrollBottomPosition && refElement.position().top + refElement.height() >= scrollTopPosition) {
                  // if (!up.hasClass("w")) {
                  //     up.addClass("w");
                  // }
                  if (value.hasClass("vis")) {
                      value.removeClass("vis");
                  }
                  //breadCrumb = 'MORE...';
              } else if (currentLink.is(":first-child") && refElement.position().top >= scrollTopPosition) {
                  // if (!value.hasClass("vis")) {
                  //     value.addClass("vis");
                  // }
              }
          }

          if (refElement.position().top <= scrollTopPosition && (refElement.position().top + refElement.height() <= scrollBottomPosition || refElement.position().top + refElement.height() >= scrollBottomPosition)) {
              $('.value').attr("data-breadcrumb", breadCrumb);
          } else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollTopPosition) {
              // scroll down after last-child
              $('.value').attr("data-breadcrumb", 'MORE...');
          }
          // else if (currentLink.is(":last-child") && refElement.position().top + refElement.height() <= scrollBottomPosition ) {
          //     // scroll current last-child
          //     $('.value').attr("data-breadcrumb", breadCrumb);
          // }
          // else if (currentLink.is(":first-child") && refElement.position().top < scrollBottomPosition && refElement.position().top + refElement.height() > scrollBottomPosition) {
          //   $('.value').attr("data-breadcrumb", breadCrumb);
          // }
      });
    }

    stickyNav();
    onScrollNew();
    onScrollHome();
    getScrollDirection();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
        getScrollDirection();
        onScroll();
        onScrollNew();
        onScrollHome();
    });
});
