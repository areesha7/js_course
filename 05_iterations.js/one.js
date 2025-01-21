// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element); //element can't be called outside the loop(scope)
// }

// let arr = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element); 
// }

// const str = "Areesha"

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);
    
// }

for (let index = 0; index <= 20; index++) {
    const element = index;
    // if(index==10){
    //     break;
    // }
    if(index==10){
        continue;
    }
    console.log(element)
    
}
    
