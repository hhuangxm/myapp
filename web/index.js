window.onload = function() {
	//获取URL中的查询参数
	var getURLSearch = document.getElementById("getURLSearch");
	getURLSearch.onclick = function(event) {
		var args = {};
		var querys = location.search;

		if(querys && querys.length > 0 ) {
			querys= querys.substring(1); //获取查询串，并去掉？

			var pairs = querys.split("&"); //按“&”分割
			for(var i = 0, length = pairs.length; i < length; i++) {
				var pos = pairs[i].indexOf("="); //返回“=”的位置信息
				if(pos == -1){ //如果不存在
					continue;
				} else {
					var name = pairs[i].substring(0, pos); //提取参数名字
					var value = pairs[i].substring(pos+1); //提取参数值
					value = decodeURIComponent(value);  //对参数值进行解码
					args[name] = value;
				}
			}
			let resultStr = JSON.stringify(args);

			alert("参数对象JSON为：" + resultStr);
		} else {
			alert("没有可以获取的查询参数！");
		}
	}
}
