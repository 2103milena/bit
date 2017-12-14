// Write a program which compute, the average marks of the following students. Then, this average is used to determine the corresponding grade. 


// var studentiIOcene = [
//     ['David', 80],
//     ['Marko', 77],
//     ['Dany', 88],
//     ['John', 95],
//     ['Thomas', 68]
// ];

// var zbir = 0;

// for (var y = 0; y < studentiIOcene.length; y++) {
//     var svakaOcena = studentiIOcene[y][1];

//     zbir += svakaOcena;

//     if (svakaOcena <= 60) {
//         console.log("F")
//     } else if (svakaOcena <= 70 && svakaOcena > 60) {
//         console.log("D")
//     } else if (svakaOcena <= 80 && svakaOcena > 70) {
//         console.log("C")
//     } else if (svakaOcena <= 90 && svakaOcena > 80) {
//         console.log("B")
//     } else if (svakaOcena <= 100 && svakaOcena > 90) {
//         console.log("A")
//     }
// }

// console.log(zbir)

// var average = zbir / studentiIOcene.length;

// console.info('The average note is: ' + average);



// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (var i = 0; i <= 100; i++) {


//     if (i % 3 == 0 && i % 5 !== 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0 && i % 3 !== 0) {
//         console.log("Buzz")
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else{
//         console.log(i);
//     }
// }



// Write a conditional statement to find the largest of five numbers. Display result in console.

// var arr = [-25, 2, 6, -12, 111];  

// if(arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4] ){
//     console.log(arr[0]);
// } else if(arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4]){
//     console.log(arr[1]);
// } else if(arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4]){
//     console.log(arr[2]);
// }else if(arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4]){
//     console.log(arr[3]);
// }else {console.log(arr[4]);
// }

/////////////////////////////////////////////////////////////////////////////////////


// Write a function to check whether an `input` is a string or not.

// function isString(input) {

//     if (typeof input ==="string"){
//         return input + " is a string";
//     }else{
//         return input + " is not a string";
//     }
// }

// console.log(isString("Hej stringi"));

/////////////////////////////////////////////////////////

// Write a function to concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


// function concat(str, n) {

//     // return str.repeat(n)
//     var res = "";
//     for (var i = 1; i <= n; i++) {
//         res += str;
//     }return res;
// }

// console.log(concat(' jeee', 5))

// //////////////////////////////////////////////////////////////////////////////////////////


// Write a function to count number of letter occurrences in a string.

// function countingLetters(str, letter) {

//     var count = 0
//     for (var i = 0; i < str.length; i++) {
//         var element = str[i];
//         if (element === letter) {
//             count++;
//         } 
//     }return count;

// }

// console.log(countingLetters("sasasas", "a"));


////////////////////////////////////////////////////////////


// function double(){
// var array1=[1,2,3,4];

// const array2 = array1.map(x => x*2)
// return array2;

// }
// console.log(double())

//////////////////////////////////////////////////////////////////////////////////////////

// Write a function to find position of last occurrence of character in a string. Result should be in human numeration form. If there are no occurrences of character function should return -1.

