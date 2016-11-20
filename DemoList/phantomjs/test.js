var page = require("webpage").create();

url = "http://bl.ocks.org/mbostock/c034d66572fd6bd6815a";

page.viewportSize = { width: 1024, height: 800 };

page.open(url, function(status){
	if(status === "success"){
		console.log("this page open is success");
		
		var dom = page.evaluate(function(){
			//return jQuery("svg");
			return document.getElementsByTagName("svg");
		});

		
		page.clipRect = {
			top : dom.top,
			left : dom.left,
			width : dom.width,
			height : dom.height
		};
		console.log(page.content);
		page.render("C:/Users/Administrator/Desktop/phantomjs-2.1.1-windows/bin/svg10.png");
	}else{
		console.log("fail");
	}	
phantom.exit();
});
