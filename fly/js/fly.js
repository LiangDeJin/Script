// -----------------添加购物车主要的图克隆飞过去到购物车那里
$(document).ready(function() {

	$(".append_cloth").click(function() {
        console.log(123)
					// --------------------------------------------------------
					var smallTu = $(".main_pict");
					var addone = $(".addone");
					// offset() 方法返回或设置匹配元素相对于文档的偏移（位置）。
					var position = smallTu.offset();
					// ----------body添加floating-cart 格子变化
					$("body").append("<div class='floating-cart'></div>");
					var xiaogezi = $("div.floating-cart");

					// --------------克隆块------------------
					smallTu.clone().appendTo(xiaogezi);
          alert(smallTu)
					// --------------位置的获取----------------
					$(xiaogezi).css({
						"top" : position.top + "px",
						"left" : position.left + "px"
					}).fadeIn("slow").addClass("moveToCart");/* 给div添加moveToCart */
					// -----------------设置飞过去
					setTimeout(function() {
						// -------------小格子消失
						$("div.floating-cart").remove();
						// -----小格子消失出现+1
						$(".addone").fadeIn().animate({
							top : "-1px"
						}, "800").fadeOut();
					}, 1000)

	});
})
