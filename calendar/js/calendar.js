function fDrawCal(y, m) {
	var temp_d = new Date(y, m - 1, 1);
	var first_d = temp_d.getDay(); //返回本月1号是星期几
	temp_d = new Date(y, m, 0);
	var all_d = temp_d.getDate(); //返回本月共有多少天,同时避免复杂的判断润年不润年
	var html, i_d;
	html = "<h4>"+ y + "年" + m + "月" + d_d + "日</h4>"; // 显示当天日期
	html += "<table border='2' cellpadding='10' cellspacing='5' bgcolor='white'><tr>" // 星期表头
	html += "<td>日</td>";
	html += "<td>一</td>";
	html += "<td>二</td>";
	html += "<td>三</td>";
	html += "<td>四</td>";
	html += "<td>五</td>";
	html += "<td>六</td></tr>";
	html += "<tr>"; 
	for (var i = 1; i <= 42; i++) {
		if (first_d < i && i <= (all_d + first_d)) {
			i_d = i - first_d; //显示出几号
			html += "<td class='number' onclick='show(this)'"; //点击事件
			if (y == d_y && m == d_m && d_d == i_d) { //日历中为当天
				html += " style='color:red'>" + i_d + "</td>";
			} else {
				html += ">" + i_d + "</td>";
			}
		} else {
			html += "<td>&nbsp;</td>";
		}
		if (i % 7 == 0 && i < 42) {
			html += "</tr><tr>";
		}
	}
	html += "</tr></table>";
	document.getElementById("calendar").innerHTML = html;
}

//点击函数
function show(obj) {
	var t = obj.innerHTML;
	//点击后获取时间,如果日历在月视图中不作为,如果在日视图对应跳到对应的日期,如果是在周视图视情况判断
	console.log(t);
}

var currentDay = new Date(); //系统时间对象
var d_y = currentDay.getFullYear(); //完整的年份
var d_m = currentDay.getMonth() + 1; //注意获取的月份比实现的小1
var d_d = currentDay.getDate();
fDrawCal(d_y, d_m); 
