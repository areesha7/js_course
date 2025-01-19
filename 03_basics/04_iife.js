// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS //

// (function chai() {
// named iife
//     console.log("DB connected")
// })(); //here semi colon is must to end the function so that other func could start

// ( () => {
    //unnamed iife
//     console.log("DB 2 CONNECTED")
// })();

//chai()


( (name) => {
    console.log(`Hello! ${name}`)
})("Areesha");