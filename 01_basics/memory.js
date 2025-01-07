/*
Types:
1.	Stack: Used in primitive data types. Gives copy of a variable. Changes are made in copy.
2.	Heap: Used in non-primitive data types. Gives reference of a variable. Changes are made in original.
*/

let myName = "areeshaRehan"
let anotherName = myName
anotherName = 'Areesha'
console.log(anotherName)
console.log(myName)

let user = {
    email:'user@gmail.com',
    password: "123abc",
    name: "user",
    age: 25
}

let userTwo = user
/*
It is also referenced from heap. Since there is no copy therefore, 
if userTwo makes changes then these changes will also be reflected in userOne
*/
console.log(user)
console.log(userTwo)
userTwo.email = "arisha@gmail.com"
console.log(userTwo)
console.log(user) // --> output email for both changed
