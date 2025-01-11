// const myArr=['areesha', 'rehan', 'ahmed', 'siddiqui']
// const arr2= [23,156,76,90,2, 'areesha'];
// console.log(typeof(myArr)); //object
// console.log(arr2);
// console.log(arr2[3]);
// console.log(arr2.sort()); //output --> [ 2, 23, 56, 76, 90, 'areesha' ]
// console.log(myArr.sort()); //output --> [ 'ahmed', 'areesha', 'rehan', 'siddiqui' ]
// myArr.push(20) // pushes '20 in the array
// console.log(myArr); //output --> [ 'ahmed', 'areesha', 'rehan', 'siddiqui', 20]
// myArr.pop(20);
// console.log(myArr);//output --> [ 'ahmed', 'areesha', 'rehan', 'siddiqui']

// arr2.unshift(3); //added in the starting, not very useful as it shifts all the other elements.
// console.log(arr2);
// arr2.shift(3); //removes first element
// console.log(arr2);
// //practice other methods too like includes, indexof.....

// const newArr= myArr.join() //removes square bracket
// console.log(newArr) //output --> areesha,rehan,ahmed,siddiqui
// console.log(typeof(newArr)); //output --> string

//slice, splice
const arr3= ['a','b','c','d','e','f','g','h','i']
console.log(arr3.slice(2, 6)); //output --> [ 'c', 'd', 'e', 'f' ] (starting index, ending index+1)
console.log(arr3) /*output --> [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i'
  ]
  */
console.log(arr3.splice(2, 6)); //ouput --> [ 'c', 'd', 'e', 'f', 'g', 'h' ] (starting index, no of elements to be deleted)
console.log(arr3) //output -->  [ 'a', 'b', 'i' ]