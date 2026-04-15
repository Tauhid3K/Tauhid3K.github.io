;(function () {
	'use strict';

	// Device detection for viewport-specific behavior
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.iOS());
		}
	};

	// Full-height hero support
	var fullHeight = function() {
		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function() {
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Scroll-triggered animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;
				$(this.element).addClass('item-animate');

				setTimeout(function() {
					$('body .animate-box.item-animate').each(function(k) {
						var el = $(this);
						setTimeout(function() {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}
							el.removeClass('item-animate');
						}, k * 130);
					});
				}, 80);
			}
		}, { offset: '88%' });
	};

	// Mobile navigation toggle
	var burgerMenu = function() {
		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var toggle = $(this);
			if ($('body').hasClass('offcanvas')) {
				toggle.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				toggle.addClass('active');
				$('body').addClass('offcanvas');
			}
		});

		$(window).resize(function(){
			if ($(window).width() > 768) {
				if ($('body').hasClass('offcanvas')) {
					$('body').removeClass('offcanvas');
					$('.js-colorlib-nav-toggle').removeClass('active');
				}
			}
		});
	};

	// Close mobile menu on outside click
	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $('#colorlib-aside, .js-colorlib-nav-toggle');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas')) {
					$('body').removeClass('offcanvas');
					$('.js-colorlib-nav-toggle').removeClass('active');
				}
			}
		});
	};

	// Smooth in-page navigation
	var clickMenu = function() {
		$('a[data-nav-section]:not(.external)').click(function(event) {
			var section = $(this).data('nav-section');
			var navbar = $('#navbar');
			var target = $('[data-section="' + section + '"]');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 35
				}, 750, 'easeInOutExpo');
			}

			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.js-colorlib-nav-toggle').removeClass('active');
				$('body').removeClass('offcanvas');
			}

			event.preventDefault();
			return false;
		});
	};

	// Highlight active navigation section
	var navActive = function(section) {
		var nav = $('#navbar > ul');
		nav.find('li').removeClass('active');
		nav.each(function() {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});
	};

	var navigationSection = function() {
		var section = $('section[data-section]');

		section.waypoint(function(direction) {
			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '180px'
		});

		section.waypoint(function(direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function() {
				return -$(this.element).height() + 185;
			}
		});
	};

	// Hero slider behavior
	var sliderMain = function() {
		if (!$('#colorlib-hero .flexslider').length) {
			return;
		}

		$('#colorlib-hero .flexslider').flexslider({
			animation: 'fade',
			slideshowSpeed: 5200,
			directionNav: true,
			smoothHeight: true,
			start: function() {
				setTimeout(function() {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 320);
			},
			before: function() {
				setTimeout(function() {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 320);
			}
		});
	};

	// Boot sequence
	$(function() {
		fullHeight();
		contentWayPoint();
		burgerMenu();
		clickMenu();
		navigationSection();
		mobileMenuOutsideClick();
		sliderMain();
	});

}());
