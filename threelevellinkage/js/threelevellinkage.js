//-------------------select三级联动的绑定事件---------------

$(function() {
	$("._provice").change(function() {
		var provice = $(this).children("option:selected").val();
		var city = $("._city");
		city.empty();
		city.append("<option>选择市</option>");
		var contry = $("._contry");
		contry.empty();
		contry.append("<option>选择区/县</option>");

		if (provice != '0') {
			console.info(city);
			var url = "selectCityAction";
			$.ajax({
				type: "post",
				url: url,
				data: {
					"pid": provice,
				},
				dataType: "json",
				success: function(data) {
					for (var i = 0; i < data.length; i++) {
						city.append("<option value='" + data[i].id + "' >" + data[i].name + "</option>");
					}
				}
			});
		}
	})

	$("._city").change(function() {
		var city = $(this).children("option:selected").val();
		var contry = $("._contry");
		contry.empty();
		contry.append("<option>选择区/县</option>");
		if (city != '0') {
			console.info(contry);
			var url = "selectCityAction";
			$.ajax({
				type: "post",
				url: url,
				data: {
					"pid": city,
				},
				dataType: "json",
				success: function(data) {
					for (var i = 0; i < data.length; i++) {
						contry.append("<option value='" + data[i].id + "' >" + data[i].name + "</option>");
					}
				}
			});
		}
	})

})
