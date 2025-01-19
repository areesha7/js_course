// if

// const check= (value) => { if (value<33) {
//     console.log("Fail")
// }
// else {
//     console.log("Pass")
// }
// }

// check (30) //output --> Fail

// const score=150

// if (150< score > 100){
//     const power = 'fly'
//     console.log(`user can ${power}`)
// }else if(score>=150){
//     console.log(`user has a got a booster`)
// }
// else{
//     console.log(`user can't fly`) //her ${power} can't be used due to scope and needs to be declared separately
// }


const userLoggedIn = true
const debitCard = false

if (userLoggedIn===true && debitCard===true){
    console.log("successfull")
}else if (userLoggedIn===true && debitCard===false){
    console.log("debit card is false")
}
else if (userLoggedIn===false && debitCard===true){
    console.log("user is not logged in")
}else {
    console.log("Unsuccessful")
}

// similarly OR --> ||