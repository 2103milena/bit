// 1. Write a function to check whether an `input` is a string or not.

function isstring(aninput) {
    if (typeof (aninput) === "string") {

        console.log("it is a string")

    } else console.log("not a string")
}

// isstring();



// 2. Write a function to check whether a string is blank or not.


function isitblank(string) {

    if (!!string === false) {
        return "blank"
    } else {
        return "not blank"
    }
}

isitblank(56);



// 3. Write a function to concatenates a given string n times (default is 1).


function addstring (string, times) {
    var output = ""
    if (typeof(times) === "undefined") {
        times = 1;
    }
    for (var i = 0; i < times; i++) {
        output = output + string
    } return output;
}

addstring("abc");

// or


function addstring (string, times = 1) {
    var output = ""
    for (var i = 0; i < times; i++) {
        output = output + string
    } return output;
}

addstring("abc");



// Write a program to sum the multiples of 3 and 5 under 1000.

var thesum = 0;
for (i = 1; i < 31; i++) {    
    if (i % 3 == 0 && i % 5 == 0) {
        thesum = thesum + i;
    }
}

console.log(thesum);

// Write a program to output the sum of squares of a first 5 numbers. 

function sumofsq (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i ++) {
        sum += (array[i]*array[i])
}   return(sum);
}

sumofsq([1, 2, 3])



// Write a program which prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];

var outarray = []
for (var i = 0; i < a.length; i++) {
    for (var e = 0; e < a[i].length; e++) {
    outarray = outarray + a[i][e]

}
}

console.log(outarray);

// Write a program to insert a string within a string at a particular position 
// (default is 1, beginning of a string).

function inserter(aString, anInsert, position) {


}


// Write a function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2]

function lastEl (array, n) {
    var last = array.length - n
    for (last = last; last < array.length; last++) {
        console.log(array[last])

    }
    

}

lastEl([7, 9, 0, -2], 2)





