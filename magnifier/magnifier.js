function magnifier() {



	var main_pict = document.getElementById("main_pict");

	var tobig = document.getElementById("tobig");

	var To_big = document.getElementById("To_big");

	var image_div = document.getElementById("image_div");



	var x, y, z = false;

	// 显示小方框和展示图

	main_pict.onmouseover = show;



	document.onmouseover = yiru; // document,鼠标在窗口任意位置点击，图片都会跟随

	// 鼠标在main_pict内才起作用

	main_pict.onmousemove = yidong;

	main_pict.onmouseout = yichu;

	// 详细展示图移入小框和放大图展示

	function show() {

		tobig.style.display = "block";

		image_div.style.display = "block";

	}

	// 鼠标移入方法

	function yiru(event) {



		// 调试兼容,浏览器认识event有差别.

		var event = event || window.event;

		z = true;// 当z=true（n的值可随便设定）时，假定为鼠标移入的事件

		// offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置

		// offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置

		x = event.clientX - tobig.offsetLeft;

		// 鼠标在透明层的相对横坐标=鼠标坐标-小方块左边距

		y = event.clientY - tobig.offsetTop;

		// 鼠标在透明层的相对纵坐标=鼠标坐标-小方块上边距

	}



	function yidong(event) {

		var event = event || window.event;

		if (z == true) {

			// 鼠标 透明小方块移动位置

			tobig.style.left = event.clientX - x + "px";

			tobig.style.top = event.clientY - y + "px";

			// 图片移动的位置范围 parseInt() 函数可解析一个字符串，并返回一个整数。

			image_div.style.left = -1.2 * parseInt(tobig.style.left) + "px";

			image_div.style.top = -1.2 * parseInt(tobig.style.top) + "px";

			// 限定鼠标移动范围

			if (parseInt(tobig.style.left) < 0) {

				tobig.style.left = 0 + "px";

			}



			if (parseInt(tobig.style.top) < 0) {

				tobig.style.top = 0 + "px";

			}

			// clientHeight 可见区域

			if (parseInt(tobig.style.left) > main_pict.clientWidth

					- tobig.clientWidth) {

				tobig.style.left = main_pict.clientLeft - tobig.clientLeft

						+ "px";

			}

			if (parseInt(tobig.style.top) > main_pict.clientHeight

					- tobig.clientHeight) {

				tobig.style.top = main_pict.clientHeight - tobig.clientHeight

						+ "px";

			}

			// 限定图片移动的范围

			if (parseInt(image_div.style.left) > 0) {

				image_div.style.left = 0 + "px";

			}

			if (parseInt(image_div.style.top) > 0) {

				image_div.style.top = 0 + "px";

			}

			if (parseInt(image_div.style.left) < -1.2

					* (main_pict.clientWidth - tobig.clientWidth)) {

				image_div.style.left = -1.2

						* (main_pict.clientWidth - tobig.clientWidth) + "px";

			}

			if (parseInt(image_div.style.top) < -1.2

					* (main_pict.clientHeight - tobig.clientHeight)) {

				image_div.style.top = -1.2

						* (main_pict.clientHeight - tobig.clientHeight) + "px";

			}

		}

	}

	function yichu() {

		z = false;

		// 移出的时候小框和放大镜都消失

		tobig.style.display = "none";

		image_div.style.display = "none";



	}

}