
// function istorija(smer) {
//     if (smer == "napred") {
//         history.go(2);
//     }
//     else if (smer == "nazad") {
//         history.go(-2);
//     }

// }

// (function greeting () {
//     alert('Hello!');
//     var userAnswer = prompt("provide input");

//     if (userAnswer) {
//         confirm("we'll submit the answer: " + userAnswer)
//     }

// })();

// function changeBackground () {

// document.getElementById("drugi").className = "giveBackground"


// }


// function addBackgorund (){

//     var list =  document.getElementsByTagName('li');
       
//     for (var i = 0; i < list.length; i++) {
//             list[i].className = "anotherBackground";
//        }
// }

// function thirdClass() {
    
//     var lis =  document.querySelectorAll(".treci li");
//         for (var i = 0; i < lis.length; i++) {

//         lis[i].className = "treciStyle";

//     }
// }


function changeClass() {


   querySelector("ul>.active").className = "";
    
    
    parentNode.parentNode.previousSibling.firstChild.firstChild.className ="active";

}



