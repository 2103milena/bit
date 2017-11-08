// var newModule = require("./worker")

// newModule.doingWork(" a string");



var memoryCheck = function() {
	var os = require("os");
	var memoryLeft = (os.freemem());
	if (memoryLeft < 2000000) {
		console.log("alert");

	}

	console.log(memoryLeft);
            
};



var checkOnInterval = function() {
	setInterval(memoryCheck, 1000);


}; 

module.exports.checkMemory = checkOnInterval;




   




  






