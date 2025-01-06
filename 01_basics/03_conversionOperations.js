let score = "33"; // here we know that score variable has integer value

/*
const {score} = req.body; 
//here we cannot be sure what is the datatype of variable score
*/

// SO THERE ARE TWO WAYS TO KNOW THAT.

// console.log(typeof score);   // 1
// console.log(typeof (score)); // 2 method type

// now we want to use score as number not string 
// create a new variable
// let intScore= Number(score); // similarly for string we can use String
// console.log(typeof intScore); 
// console.log(intScore); 

/*
but consider if score was equal to 33abc then the value of intScore will be NaN
for score== null output will be --> 0
for score== undefined output will be --> NaN
for score== true output will be --> 1
THERFORE BE CAREFULL
*/

//FOR CONVERSION IN BOOLEAN

// let isLoggedIn = 1;
// let boolLoggedIn = Boolean(isLoggedIn);
// console.log(typeof boolLoggedIn);
// console.log(boolLoggedIn);  // output --> true
// for any number other than 0 the output will be true
// for any string other than empty string the output will be true


// **************** OPERATIONS ****************** //


let value = 3;
let negValue = -value; // " - " gives negative value
// console.log(negValue);

//console.log(2**2); 

// similarly operations can be performed for:
//+, -, *, /, %

let str1 = "hello";
let str2 = " areesha";

let str3= str1 + str2; // cannot subtract
//console.log(str3)

//*** TRICKY ONES **********

// console.log("1" + 2) // output --> 12
// console.log(1 + "2") // output --> 12
// console.log("1" + 2 + 2) // output --> 122
// !!!!!!!!!!! HERE THE NUMBERS ARE ADDED AS WHEN WRITTEN BEFORE HOWEVER 
// IT WAS NOT HAPPENING IN THE PREVIOUS EXAMPLE WHERE NUMBERS WERE WRITTEN AFTER STRING!!!!!!!!!1
//console.log(1 + 2 + 2) // output --> 32
// !!!! THIS IS STANDARD EXPLAINED IN ECMA !!!!!

//console.log(3 + 4 *2 % 7); // not a good code writing technique
// add paranthesis in between

// ********** TRICKY CONVERSIONS ************
//console.log( + true) //possible, output --> 1

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // output --> 101

/*
study prefix and postfix from mdn js
and conversion from ecma document
*/