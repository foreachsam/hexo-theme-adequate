
!function(global, $) {
	var ui = {
		scrollToTop: function(){
			$('body').velocity('scroll', {duration: 1000, easing: 'spring'}); //http://julian.com/research/velocity/#scroll
		}
	};

	$(document).ready(function() {

		var btnTop = '.ui-btn-top';
		var btnTopHide = '.ui-btn-top-hide';

		$(document).on('click', btnTop, function(evt) {
			ui.scrollToTop();
		});

		$(document).on('click', btnTopHide, function(evt) {
			ui.scrollToTop();
		});

		$(window).on('scroll', function(){
			if ($(this).scrollTop() > 100) {
				$(btnTopHide).fadeIn();
			} else {
				$(btnTopHide).fadeOut();
			}
		});

	});
	global.ui = ui;
}(window, jQuery);
