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

const myCoding = [
    {
        langName:"Python",
        langFile: "py"
    },
    {
        langName:"Javascript",
        langFile: "js"
    },
    {
        langName:"C++",
        langFile: "cpp"
    },
]

myCoding.forEach( (items) => {
    //console.log(items); // { langName: 'Python', langFile: 'py' } ......
    // console.log(items.langName); // Python.....
    console.log(items.langFile); // py ....
} )