/*
•	There are to ways to declare objects in js:
1.	Literal Way
2.	Constructor Way:
Includes Singleton meaning that the object has only one instance 
//object.create --> Singleton/constructor method
*/

//----------OBJECT LITERALS-------------//

//To use Symbol datatype
const mySymbol= Symbol("key1");

const JsUser = {
    name: "Areesha", //keys: values
    age:20,

    //IMPORTANT FOR INTERVIEW
    //mySymbol: "myKey1", // won't give any error and will be printed BUT the datatype is not symbol yet
    // the right way is to use []

    [mySymbol]: "mykey",
    "full name": "Areesha Rehan",
    Occupation: "Student",
    Major: "Software",
    isLoggedIn: false,
    sem_done: [1, 2, 3, 4, 5], 
}
// console.log(typeof(JsUser["mySymbol"])); //output --> String
// console.log((JsUser[mySymbol]));  //access 

// console.log(JsUser);

// // TWO WAYS TO ACCESS

// console.log(JsUser.sem_done);
// console.log(JsUser["sem_done"]); //here " " are must as it is string

// IF THE KEY IS IN INVERTED COMMAS AS full name (There should be two strings not just a single word )
//  THEN THE FIRST METH0D(.) CAN'T BE USED 

//console.log(JsUser."full name"); --> error
//console.log(JsUser["full name"]) //correct

//TO CHANGE A PARTICULAR VALUE:
JsUser.isLoggedIn= true; 
//console.log(JsUser); // value Changed

//IF WE DON'T WANT TO ALLOW CHANGES IN OUR OBJECT THEN:
//Object.freeze(JsUser);
JsUser.isLoggedIn= false; 
//console.log(JsUser);  //values NOT CHANGED

JsUser.greeting= function() {
    console.log("Hello Js User")
}

JsUser.greeting2= function() {
    console.log(`Hello Js User, ${this["full name"]}`)
}

console.log(JsUser["greeting"]); //output --> [Function (anonymous)]
console.log(JsUser.greeting()); //output --> Hello Js User
console.log(JsUser.greeting2()); //output --> Hello Js User, Areesha Rehan