// *************** DATE ******************

let myDate = new Date();
// console.log(myDate); // the output is not very readable --> 2025-01-11T09:49:48.923Z
// console.log(myDate.toString()); //output --> Sat Jan 11 2025 09:51:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //output --> Sat Jan 11 2025 
// console.log(myDate.toLocaleDateString()); //output --> 1/11/2025
// console.log(myDate.toISOString()); //output --> 2025-01-11T09:52:44.406Z
// console.log(myDate.toJSON()); //output --> 2025-01-11T09:52:44.406Z
// console.log(myDate.toLocaleString()); //output --> 1/11/2025, 9:54:08 AM
// console.log(typeof(myDate)) //output --> object

//Declaration of Specific Date
let createdDate = new Date(2023, 4, 7)
//console.log(createdDate.toDateString()) //output --> Sun May 07 2023
//it is important to note that the indexing of month starts from 0

//Now to declare YY/MM/DD
//Now make sure that here the indexing starts from 1 as it is string
// let createDate = new Date("2023-04-7")
// console.log(createDate.toLocaleString()) //output --> 4/7/2023
// //                         DD/MM/YY
let date1= new Date("07-05-2004")
// console.log(date1.toDateString()); //output --> Mon Jul 05 2004

//********** TIMESTAMP ***********/
let myTimeStamp =  Date.now()
console.log(myTimeStamp) //output From 1970 uptil now in ms --> 1736591015470
console.log(date1.getTime()); //output --> 1088985600000
// Now we can compare both values

//to get time in seconds:
console.log(Math.floor(Date.now()/1000))

let date2= new Date()
console.log(date2.getDate())
console.log(date2.getMonth())
console.log(date2.getMonth()+1)

//using placeholders:
let var1= `${date2.getDate()}`;
console.log(var1);

date2.toDateString('default', {
    weekday:'long'
    
})
console.log(date2.toDateString());