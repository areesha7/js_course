//for of

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }

// let str = "AREESHA"

// for (const char of str) {
//     console.log(char)
// }

// let arr= [
//     {
//         firstName: "areesha"
//     },
//     {
//         lastName:"rehan"
//     }
// ]

// for (const objs of arr) {
//     // console.log(objs)
//     let arr1 = [objs]
//     //console.log(arr1)
//     for (let j = 0; j < arr1.length; j++) {
//         const element = arr1[j];
//         //console.log(element)
//         //now since element is an object
//         for (const key in element ){
//             console.log(key)
//             console.log(element[key])
//         }
//     }
// }


//  MAP

// const map = new Map()
// map.set("Name", "Areesha")
// map.set("Age", "20")

//console.log(map)

// for (const [key, value] of map){
//     console.log(key)
//     console.log(value)
// }
    
const myObj = {
    firstName: "areesha",
    lastName:"rehan"
}

// for (const key of myObj) {  //object is not iterable --> ERROR
//     console.log(key)
//     console.log(myObj[key])
// }


//for in

// for (const key in myObj) {
//     {
//         console.log(key)
//         const element = myObj[key];
//         console.log(element)
//     }
    
// }


// let myArr= ["a", "b","c", "d"]

// for (const key in myArr) {
//     {
//         console.log(key) //--> indexes
//         const element = myArr[key];
//         console.log(element) //--> values
//     }
// }

const map = new Map()
map.set("Name", "Areesha")
map.set("Age", "20")
//map is not iteratable hence for in can't be used 

for (const key in map) {
    {
        console.log(key)
        const element = map[key];
        
    }
}