;(function($){
	$(function(){
		$(".my-menu > li:not(:first-child) > ul").hide();//选择器 不是第一个孩子都隐藏
		//绑定事件
		$(".my-menu > li > div").on("click",function(){
			var $this = $(this);
			var $next = $this.next();
			console.log($next)
			if($next.is(":hidden")){
				$this.parents(".my-menu").children("li").children("ul:visible").slideUp(500,function(){
					$next.slideDown(500);
				});
				
			}
		});
	});
})(jQuery);
