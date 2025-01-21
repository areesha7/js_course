const userEmail = 'arisha@gmail.com'

if (userEmail){ //no comparison only existence
    console.log(`${userEmail}`)
}else {
    console.log("no")
}


/* FALSY VALUES

false
0
-0
BigInt 0n
""
null
undefined
NaN

TRUTHY VALUES

"0"
"false"
' '
[]
{}
function() {}

*/

const arr=[]

if(arr.length===0){
    console.log("empty")
}

const obj = {}

if (Object.keys(obj).length){
    console.log("empty")
}


// Nullish Coalescing Operator ??
//usually the first is printed

let val1;
//val1 = 5 ?? 10 //output --> 5
//val1 = null ?? 10 //output --> 10
var1= undefined ?? 10 //output --> 10
var2 = null ?? 20 ?? 10


console.log(var1) //output --> 10
console.log(var2) //output --> 20

//TERNARY OPERATOR ?

//conditiion ? true : false

const price = 200
price> 80 ? console.log("Greater") : console.log("Not")

