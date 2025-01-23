const myNums= [1,2,3,4,5,6]

// let result= myNums.reduce( (acc, current) => {
//     console.log(`${acc} and ${current}`)
//     return acc + current; // 21
// } ,0) //to start with 0

// console.log(result)

// const total = myNums.reduce ((acc, current) => {
//     return acc + current
// }, 0)

// console.log(total)

const cart = [
    {
        item: "js",
        price: 299
    },
    {
        item: "data",
        price: 1299
    },
    {
        item: "ML",
        price: 599
    },
    {
        item: "AI",
        price: 3299
    },
]

const result = cart.reduce( (acc, items) => {
    cart.filter ( (items) => items.item==="AI")
    return acc+ items.price //5496
} ,0)

console.log(result)