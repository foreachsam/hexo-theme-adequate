
!function(global, $) {
	var ui = {
		scrollToTop: function(){
			$('body').velocity('scroll', {duration: 500, easing: 'spring'}); //http://julian.com/research/velocity/#scroll
		}
	};

	$(document).ready(function(){
		$(document).on('click', '.ui-btn-top', function(evt) {
			ui.scrollToTop();
		});
	});
	global.ui = ui;
}(window, jQuery);
