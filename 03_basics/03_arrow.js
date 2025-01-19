// const user = {
//     username: "Areesha",
//     price: 300,
//     welcomeMsg: function () {
//         console.log(`${this.username}!, Welcome to website`)
//         console.log(this) //gives curent context --> { username: 'hi', price: 300, welcomeMsg: [Function: welcomeMsg] }
//     },

// }

// user.welcomeMsg() //output --> Areesha!, Welcome to website
// user.username = "hi" 
// user.welcomeMsg() //output --> hi!, Welcome to website
// console.log(this) //output --> {} empty object

// function chai() {
//     let user= "Areesha"
// /*    console.log(this)  //output --> <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }  --> gives all global values*/


//   function outt () {
//     console.log(`${this.user}`) --> output undefined
//   }
//   outt()
// }
// chai ()


//------------ARROW FUNCTION-----------//

// const chai= () => {
//   let user= "Areesha"
//   console.log(user)
// }
// chai()

const addTwo = (num1, num2) => {
  return num1 + num2
}

//another method:

/*
implicit --> no curly braces no return keyord
explicit --> curly braces and a return keyword is must
*/

//const add2 = (n1,n2) =>  n1 + n2 //implicit method

// const add2 = (n1,n2) => { return n1 + n2} //explicit method

//now it is a must to add paranthesis with the object declaration
const add2 = (n1,n2) => ({user: "Areesha"})

console.log(addTwo(5,2)) //output --> 7
console.log(add2(3,2))