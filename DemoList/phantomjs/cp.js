var casper = require("casper").create();

casper.start("http://bl.ocks.org/mbostock/c034d66572fd6bd6815a", function(){
	this.captureSelector("C:/Users/Administrator/Desktop/phantomjs/svg7.png", ".index");
});

casper.run();