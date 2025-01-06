const accountId = 123
let accountEmail= "arisharehan7@gmail.com"
var accountPassword = "12345"
accountCity =  "Karachi"  // not at all a good practice
let accountState ; // output --> undefined

// accountId = 2  not allowed

accountEmail= "ar@bjd"
accountPassword = "345"
accountCity= "Lahore"

/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountEmail, accountPassword, accountCity])