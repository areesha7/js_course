{} // --> scope (used with if/else or functions)

// •	Variable in function --> BLOCK SCOPE
// •	Variable outside of function --> GLOBAL SCOPE
// •	Global Scope variable is accessible within a function but Block Scope variable is not accessible within a function

var c = 300 // since c is used in func as well so it will be overwritten That's why var SHOULD BE AVOIDED
let a = 300  // will not be overwritten

//in the below example the variables are intact and works only in function and not outside of it
// if (true) {
//     let a=10
//     const b=20
//     var c= 30
//     console.log("INNEr: ", a) // output --> INNEr:  10
// }

//console.log(a) //ReferenceError: a is not defined
//console.log(b) //ReferenceError: a is not defined
// console.log(c) // 30 (THIS IS THE DRAWBACK OF USING var HENCE IT SHOULD BE AVOIDED)

// console.log(a) //output --> 300

function one() {
    const user= "Areesha" 

    function two(){
        const website= "Portfolio"
        console.log(user) //THIS WILL RUN
    }
    //console.log(website) //THIS WILL GIVE ERROR B/C THE MAIN CAN'T RUN THE SUB ALTHOUGH THE SUB CAN RUN THE MAIN
    two()
}

//one()

//two() WILL NOT RUN AS IT STAYS WITHIN TH MAIN FUNCTION DUE TO ITS BLOCK SCOPE

// if (true) {
//     const user="Areesha"
//     console.log(user)
//     if (user ==="Areesha") {
//         const website ="Portfolio "
//         console.log(website)
//     }
//     //console.log(website) //WILL GIVE ERROR
// }
// //console.log(user) //ERROR

//------------INTERESTING------------

console.log(add1(5)) // THIS WORKS DUE TO ITS DECLARATION METHOD
function add1(num) {
    return num+1;
}

// console.log(add1(5))

//console.log(addTwo(5)) //error,  DUE TO ITS DECLARATION METHOD
const addTwo = function(num) {
    return num+2
}
//console.log(addTwo(5))

