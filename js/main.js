'use strict';

(function($){
	$(document).ready(function() {

		// link anchor
		$('.foliac-menu a').click(function() {
		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top - 119
		    }, 600);
		    return false;
		});

		// Change menu height on scroll
		$(window).scroll(function() {
			var $header = $('.foliac-header');

			if ($(this).scrollTop() > 0) {
				$header.addClass('scrolled');
			} else {
				$header.removeClass('scrolled');
			}
		});

		// Slider
		$('.slider').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 7000,
			pauseOnHover: true,
			infinite: false
		});

		// Masonry
		if ($(window).innerWidth() > 1024) {
			$('.foliac-portfolio-items').masonry({
				itemSelector: '.foliac-portfolio-item',
				columnWidth: 10
			});
		}

		// Tooltip
		$(document).tooltip({
			position: {
				my: "left+15 center",
				at: "top center"
			}
		});

		// Tabs
		$('.tabs').tabs();

		// Fancybox
		$('[data-fancybox]').fancybox({
			protect: true
		});
	});
})(jQuery);
