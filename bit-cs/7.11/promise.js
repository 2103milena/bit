console.log('Hi');
var promise1 = new Promise (function(resolve,reject){

        var name = 'promise 1';
    for (var i = 0; i <= 100; i++) {
        setTimeout(function(i){
            console.log(name + ' radi na broju ' + i);
            if (i === 100) {
                resolve(); 
            }
        }, i, i);
    }

  
    // var now = new Date();
    // if (now.getMilliseconds() % 2 === 0) {  
    //     reject('deljivo sa 2, uzas!');
       
    // }
 
});
// console.log('keep working');

// promise.then(function(zavrseno){
//     console.log(zavrseno + ' is done with ' );

// }).catch(function(reason){
//     console.log('keep working 2 ' + reason);
// })

var promise2 = new Promise(function(resolve,reject){
    name = 'promise 2';
    for (var i = 0; i <= 200; i++) {
        setTimeout(function(i){
            if (i === 200) {
                resolve();
            }
            console.log(name + ' radi na broju ' + i);
        }, i, i);
        
    }
    
});





var allPromiseas=Promise.race([promise1, promise2]);

allPromiseas.then(function(){
    console.log("All promises done!");
})

