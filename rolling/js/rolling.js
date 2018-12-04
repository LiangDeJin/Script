//随着滚动条滚动的div
;(function($) {
	console.log(123)
	$(function() {
		$(window).scroll(function() {
			var top = $(window).scrollTop() + 200;
			var left = $(window).scrollLeft() + 320;
			$(".rollingdiv").animate({
				"top": top
			}, 80, "linear");
		});
	})
})(jQuery)