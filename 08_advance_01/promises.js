// const promise1 = new Promise(function(resolve, reject) {
//     //Do an async task
//     //Db tasks
//     //cryptography, n/w related
//     setTimeout(function(){
//         console.log("Async task is completed")
//         resolve()
//     },1000)
// })

// // now the following then is directly connected with resolve;
// promise1.then(function(){ // has a call back function
//     console.log("Promise consumed"); // This is not shown if resolve is not in main promise function
    
// })

// COMBINED TASKS without storing into variable:

// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// DATA CONSUMPTION

// const Promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             name: "Areesha",
//             email: "chai@gmail.com",
//             age: 20
//         })// any param can be passed mostly object
//     },1000)
// })

// Promise3.then(function(user){
//     console.log(user)
//     console.log(user.name)
// })

//Chaining

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error){
//             resolve({name:"Areesha", Password: 123})
//         }
//         else{
//             reject("File not Found")
//         }
//     },1000)
// })
// promise4.then((user) => {
//     console.log(user)
//     // chaining can also be done by add more .then after current .then

// }).catch((error) => {
//     console.log(error)
// })

// ASYNC AWAIT alternative of then and cath (BOTH ARE CORRECT)

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Javascript", passwword: 123})
//         }
//         else{
//             reject("Error found")
//         }
//     },1000)
//     })

// async function consumepromise5() {
//     try{
//     const response= await promise5
//     console.log(response)
// }catch(error){
//     console.log(error);
    
// }
// }
// consumepromise5()



// async function getAllUsers(){
//     try {
//     const response = await fetch ('https://api.github.com/users/areesha7')
//     //console.log(response)
//     const data = await response.json() 
//     console.log(data)
//     } catch(e){
        
//         console.log("Error", error);
        
//     }
// }

// getAllUsers()


fetch ('https://api.github.com/users/areesha7')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) =>{
    console.log("Error", error)
})
