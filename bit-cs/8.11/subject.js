  var check = require("./index.js");

var checkingMemory = check.checkMemory();


function subject() {

    var listOfObservers = [];
    listOfObservers.push(newObserver);

    var notifyObs = function () {

   

        for (var i = 0; i < listOfObservers.length; i++) {

            listOfObservers[i].()

        }
    }
}

var Observer = function() {
        

}


