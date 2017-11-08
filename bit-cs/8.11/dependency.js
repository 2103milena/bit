
var transferService = require("./transferService")

var doSomeWork = function(transportService){
    var placeB="Greece";
    transportService.transport(placeB);
}

doSomeWork(new TransferService.Service());




