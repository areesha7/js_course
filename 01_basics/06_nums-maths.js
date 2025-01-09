const score = 400;
const score2 = new Number(100);
console.log(score);//output --> 400
console.log(score2); //output -->[Number: 100] 
// check its functions from google console

const strScore = score2.toString();
console.log(strScore); //output --> 100 (but is in string)
console.log(typeof(strScore)); //output --> String
//So now we can use functions/methods of string on it

console.log (score2.toFixed(3)) //output -->100.000

// PRECISION (RETURNS OUTPUT INTO STRING)
/*
const num1= 23.896
console.log(num1.toPrecision(3)); //output --> 23.9 (rounded off)
//but look here:
const num2= 123.896
console.log(num2.toPrecision(3)); //output --> 124 (rounded off to 3)

const hundreds=100000;
console.log(hundreds.toLocaleString()); //output --> 10,000 default en-US
console.log(hundreds.toLocaleString('en-PK')); //output --> 10,000 Now changed to Pakistan style
console.log(hundreds.toLocaleString('en-IN')); //output --> 1,00,000
*/


//*********************MATHS********************************* */
console.log(Math) //output --> Object [Math] {} Check in google console
console.log(Math.abs(-4));
console.log(Math.sqrt(4));
console.log(Math.log(0.4));
console.log(Math.random()*10 +7); //any random value
console.log(Math.round(0.4));
console.log(Math.sin(0.4));