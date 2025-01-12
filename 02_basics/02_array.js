const marvel_heroes= ['thor','iron','spiderman']
const dc_heroes= ['superman','flash','batman']
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) //output --> [ 'thor', 'iron', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//array within an array
// const dc= dc_heroes.join()
// console.log(dc)
// marvel_heroes.push(dc)
// console.log(marvel_heroes) //output --> [ 'thor', 'iron', 'spiderman', 'superman,flash,batman' ] still not proper

// SPREAD same as concat but is more prefered
//here dots means that each elemt is taken an spreaded
const new_heroes= [...marvel_heroes, ...dc_heroes]
console.log(new_heroes)

const another_arr= [1,2,3,[4,5],[6,7,[8,9]],10]
const another_arr1= another_arr.flat(Infinity)// can also give parameters like in above case it is three
/*console.log(another_arr1) output --> [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ]
    */

console.log(Array.isArray("Areesha")) //Question , output --> false
//to convert in array
/* console.log(Array.from("Areesha")) output --> [
  'A', 'r', 'e',
  'e', 's', 'h',
  'a'
] */

//*************** IMPORTANT FOR INTERVIEW******************
console.log(Array.from({name:"Areesha"})) //output --> empty array

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1, score2, score3)) //output --> [ 100, 200, 300 ]
