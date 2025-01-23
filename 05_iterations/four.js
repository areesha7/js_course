const coding = ["c++", "python", "js","java","c#"]

// coding.forEach ( function (val) {
//     console.log(val)
// })


// coding.flatMap ( function (item) {
//     console.log(item)
// })

// coding.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

// const myCoding = [
//     {
//         langName:"Python",
//         langFile: "py"
//     },
//     {
//         langName:"Javascript",
//         langFile: "js"
//     },
//     {
//         langName:"C++",
//         langFile: "cpp"
//     },
// ]

// myCoding.forEach( (items) => {
//     //console.log(items); // { langName: 'Python', langFile: 'py' } ......
//     // console.log(items.langName); // Python.....
//     console.log(items.langFile); // py ....
// } )


// const coding1 = ['js','c++',"py"]

// const values = coding1.forEach ( (item) => {
//     //console.log(item)
//     return item //undefined
// } )

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (item) => item >4 ) // //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (item) => {
//     //item >4 // output --> [] this is because in presence of curly brackets return keyword is must
//     return item >4
// })

// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

// let result = myNums.forEach ( (item) => {
//     //return item >4 // undefined
//     if( item >4 ){
//         console.log(`${item}`)
//     }
// } )

// console.log(result)

// const books = [
//     {
//         title:"one",
//         genre: "Horror"
//     },
//     {
//         title:"two",
//         genre: "Horror"
//     },
//     {
//         title:"three",
//         genre: "Drama"
//     },
//     {
//         title:"four",
//         genre: "Drama"
//     },
//     {
//         title:"five",
//         genre: "Fiction"
//     },
// ]

// // let result = books.filter( (bk) => bk.genre==="Horror"
// // )

// let result = books.filter( (bk) => bk.genre==="Horror" && bk.title==="one")

// console.log(result)


// let result = myNums.map( (item) => {
//     return item +10
// } )
/* console.log(result) [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ] */

// myNums.forEach( (item) => {
//     console.log(item)
// } )


// ***********CHAINING***********

const result = myNums.map
( (num) => num*10 ).map( (num) => {
    return num
})
.filter( (num) => num>=40 )

console.log(result)


