// CONSTRUCTOR WAY
 const tinderUSer= new Object() //singleton object
 const tinder = {} // non singleton 
 //console.log(tinderUSer) // output --> {} empty object

 tinderUSer.name= "areesha";
 tinderUSer.age=20
 tinderUSer.email="arisha@gmail.com"
 //console.log(tinderUSer) //output --> { name: 'areesha', age: 20, email: 'arisha@gmail.com' }

 tinderUSer.obj={
    password: "arisha",
    code: {
        c1: 123,
        c2: 456,
        c3: 789
    }
 }
 /*console.log(tinderUSer)   {
 {
  name: 'areesha',
  age: 20,
  email: 'arisha@gmail.com',
  obj: { password: 'arisha', code: { c1: 123, c2: 456, c3: 789 } }
} */
//HERE " ? " IS USED TO CHECK WHETHER IT IS PRESENT OR NOT
//  console.log(tinderUSer.obj?.code) //output --> { c1: 123, c2: 456, c3: 789 }

//COMBINING OBJECTS
const obj1= {
    a: 3,
    b:4
}
const obj2= {
    c: 5,
    d:6
}
// const obj3= {obj1, obj2} //not very appropriate as object within object :
// console.log(obj3) //{ obj1: { a: 3, b: 4 }, obj2: { c: 5, d: 6 } }

//two appropriate ways:
const obj3= Object.assign(obj1, obj2)
//console.log(obj3) //output --> { a: 3, b: 4, c: 5, d: 6 }
const obj4= Object.assign({}, obj1, obj2)
//console.log(obj4) //output --> { a: 3, b: 4, c: 5, d: 6 } (same)

//DIFFERENCE
/* 
in first mehod all values goes in obj1 
in second method all values goes in the empty {}
*/

//SPREAD (mostly used)
const obj5= {...obj1, ...obj2}
//console.log(obj5); //output --> { a: 3, b: 4, c: 5, d: 6 } (same)

const arr= [
    {
        name: "Areesha"
    },
    {
        sem: 6
    }
]

// console.log(arr[0].name) //output --> Areesha
// console.log(Object.keys(tinderUSer))
// console.log(Object.values(tinderUSer))
/*console.log(Object.entries(tinderUSer))  /* output --> [
    [ 'name', 'areesha' ],
    [ 'age', 20 ],
    [ 'email', 'arisha@gmail.com' ],
    [ 'obj', { password: 'arisha', code: [Object] } ]
  ] --> arrays within an array*/

// output --> [ 'name', 'age', 'email', 'obj' ],
/*
[
  'areesha',
  20,
  'arisha@gmail.com',
  { password: 'arisha', code: { c1: 123, c2: 456, c3: 789 } }
]*/
//here the keys are nw in array so we can apply loops and other array functions

//TRY OTHER METHODS FROM CONSOLE LOG


//VERY IMPORTANT AND USED TOPIC
//------DESTRUCTURING OF OBJECTS----------
//used in react

const course= {
    courseName: "Javascript",
    platform: "Youtube",
    channelName: "Chai aur code"
}
console.log(course.channelName);

//another way:

const {platform}=course;
console.log(platform) 


//-----------APIs---------------

/*
go to "https://randomuser.me/api/" from there copy and then paste it in any json formatter
beautify or modify it , then see it's tree view
from there you will see what are arrays and what are objects
*/