const name = "Areesha"
const age = 20

console.log(name + age + 20) //output --> Areesha2020
//The above method is not desirable

// STRING INTERPOLATION

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String ("areesha")
console.log(gameName)

//Now to access methods

console.log(gameName.length)
console.log(gameName.toUpperCase()) //-->function
console.log(gameName.charAt(4))
console.log(gameName.indexOf('e')) // must be in inverted commas

const newGameName = gameName.substring(0,4) //from 0 and the lat 4 is not included
console.log(newGameName) //output --> aree

const newName = gameName.slice(-7,4); // 0-6 therefore -7 is again first element
console.log(newName)  //output aree

const newName1 = gameName.slice(-6,4); // 0-6 therefore -7 is again first element
console.log(newName1)  //output--> ree
/*
0  1  2  3  4  5  6
a  r  e  e  s  h  a
7  6  5  4  3  2  1 --> negative
*/

const name1 = "   Areesha   "
console.log(name1); // output -->    Areesha   with spaces
console.log(name1.trim()); // output -->Areesha removes spaces 

const url = "https://screenrant.com/from-season-3-release-date-cast-story-details/"
// Sometimes it changes space with %20 to for example:
const url1 = "https://screenrant.com/from-season-3-release-date-cast-story%20details/"
//To solve this:
console.log(url1.replace('%20', '-')); //(what is to be replaced , from what)
console.log(url1.includes('season-3')); //if it includes or not

// CONVERTING STRING INTO ARRAY BASED ON CERTAIN PROPERTY (split method)

const str= "Areesha-Rehan-ahmed-siddiqui"; // here we will take '-' as property
console.log(str.split('-')); // output --> [ 'Areesha', 'Rehan', 'ahmed', 'siddiqui' ]
console.log(str.split('e')); //output --> [ 'Ar', '', 'sha-R', 'han-ahm', 'd-siddiqui' ]
console.log(str.split('a')); //output --> [ 'Areesh', '-Reh', 'n-', 'hmed-siddiqui' ]

//PRACTICE REMAINING BY YOURSELF FROM GOOGLE CONSOLE
