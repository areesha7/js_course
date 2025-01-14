//defining dunction:

// function myName() {
//     console.log("A")
//     console.log("R")
//     console.log("I")
//     console.log("S")
//     console.log("H")
//     console.log("A")
// }

// myName(); //here myName is referencing and paranthesis is execution

n1= 3;
n2= 5;
function addNums() {
    n1, n2;
    console.log(n1+n2);
}
//addNums() //output --> 8

//if numbers are not declared previously then: 

// function addNums1(num1, num2) {
//     console.log(num1+num2);
// }

// addNums1(6, 7) //output --> 13

// const result = addNums1(6, 7) 

// console.log("Result is: ", result) //output --> Result is:  undefined due to being in console.log

// function addNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
//     console.log ("a") // nothing can be printed after return statement
//  }

// console.log("Result is: ", addNumbers(7, 6)) //output --> Result is:  13

function loggedIn(userName) {
    // if (userName === undefined ){
    //     return "Please give username"
    // }

    //on more method:
    if (!userName){
        return "Please give username"
        }
        
    return `${userName} just logged in`
}

// loggedIn("Areesha")//this won't give any result as the function is returned but is not being printed
// console.log(loggedIn("Areesha")); //output --> Areesha just logged in

// console.log(loggedIn()); //output --> Please give username

//-----WITH OBJECTS AND ARRAYS--------//

// •	Mostly used in case of shopping carts where we are not sure how many items will be added by the user.

function calculateCartPrice(...num1) { //here "..." is called rest (different then spread)
    return num1;
    
}

console.log(calculateCartPrice(200,400,300)); //output --> [ 200, 400, 300 ]

function calculateValue(val1, val2,...num2) { //here "..." is called rest (different then spread)
    return num2;
    
}

console.log(calculateValue(200,400,300,500)); //output --> [ 300, 500 ] --> b/c 200 and 400 are assigned to val1 
//val2 respectively and rest are num2.


//OBJECTS

const user ={
    name:"Areesha",
    price: 2000
}

function handleObj(anyObject) {
    //return user.name; // Areesha
    //return user.price; //2000
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}
//handleObj()
handleObj(user)

//another method

// handleObj({
//     name: "Areesha",
//     price: 3000
// })


// function handleArr(...getArray) {
//     return getArray
// }

// console.log(handleArr(23, 76,87))

//OR

arr= [400, 700,800]

function handleArr(getArray) {
    //return getArray
    return arr[2]
}
console.log(handleArr(arr))