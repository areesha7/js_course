/*
EASIEST COMPARISON
>, < ,<= , ==, != >=, ......
console.log(2 > 1)
!!!! ANSWER WILL BE IN BOOLEAN FORM !!!1
*/

// COMPARISON B/W DIFFERENT DATATYPES
//console.log("2" > 1);  output --> true, this is b/c that js has converted this into number itself

//but with this the output will not be predictable 
// such as:

// console.log(null > 0); --> true
// console.log(null == 0); -->true
// console.log(null >= 0) --> false

// therefore, this is not an ideal way to perform 
// comparison b/w diff datatypes

//=== checks value as well as datatype