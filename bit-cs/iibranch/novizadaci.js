// function isString (a) {
//     return typeof a ==='string';
// }

//     if( (typeof a) === "string"){
//         console.log (a + " is string");
//     }else {
//         console.log (a + " is not string");
//     }
// }

// var rezultat = isString("nikola");
// console.log(rezultat);

// function isblank(word) {
//     if(word === "") {
//         return true;
//     } else {
//         return false;
//     }
// }

// var result = isblank("nikol");
// console.log(result);

// function concN(str, n) {
//     var result = "";
//     for(var i=1; i <=n; i++){

//         result += str;
//     }
//     return result;
// }

// console.log(concN('kekek', 10));

// function humanized(num) {
//     switch (num) {
//         case 1:
//             result = "1st";
//             break;
//         case 2:
//             result = "2nd";
//             break;
//         case 3:
//             result = "3rd";
//             break;
//         case 4:
//             result = "4th";
//             break;
//         default:
//             result = num + "th";

//     }
// return result;
// }

// console.log(humanized(1));


// function numOfLetter(str, letter) {
//     var sum = 0;

//     for (var i = 0; i <= str.length; i++) {
//         if( str[i] === letter){

//           sum ++;
//         }


//     }
//     return sum;
// }


// console.log(numOfLetter('Peraea', 'a'));




// function positionOfFirst(word, letter) {
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             return i+1;
//         }
//     }
//     return -1;
// }

// console.log(positionOfFirst("schoolh", "s"));



// function positionOfLast(str, character) {
//     for (var i = str.length; i > 0; i--) {

//         if (str[i] === character) {
//             return i + 1;
//         }

//     } return -1
// } 

// console.log (positionOfLast("occurrence", "e"));


// function stringIntoArray(a) {
//     var str = [];
//     for ( var i= 0; i <a.length; i++ ) {

//         var character = a[i];
//         str[i] = character;

//         if(str[i] === ' ') {

//             str[i] = null;
//         }
   
//     } return str;
    
// }

// console.log (stringIntoArray("Random jhjda askdf"));



