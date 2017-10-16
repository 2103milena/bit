// 1. Write a function to count vowels in provided string.

var counter = 0;
function vowels(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "o" || str[i] == "i" || string[i] == "u") {
        counter = counter +1;
        }

    } return counter

}

vowels ("helloooowoorld");


// 2. Write a function that combines two arrays by alternatingly taking elements

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]

var result = ""
function combiner (array1, array2) {
    for(var i = 0; i < array1.length || i < array2.length; i++) {
        result = result + array1[i] + array2[i];

    } return result;

    
}

combiner(["a","b","c", "d", "e", "f"], [1, 2, 3, 4]);


// 3. Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var newarray1 = []
function rotator (list, k) {
    for (var i = 0; i < list.length; i++) {
       newarray1 = newarray1 + (list[i] + k);  
           } 
    
    return newarray1;
}

rotator([1,2,3,4,5,6], 2)


// 4. Write a function that takes a number and returns array of its digits.

var res = []
function turnToArray(num1) {
   

} 

turnToArray(2131231);

// 5. Write a program that prints a multiplication table for numbers up to 12.

for (var i = 1; i < 13; i++) {
    for (var e = 1; e < 13; e++){
    var multiplesOf1 = e*i;
    console.log(multiplesOf1)

}}

