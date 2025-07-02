let score = "56"
console.log(typeof(score));

let convertedscore = Number(score);
console.log(typeof(convertedscore))

let islogged = false
let randomString = "33abc"
console.log(Number(randomString));
console.log(typeof(islogged));

/*"33" --> 33
"" or null ==> 0
"33abc or undefined" ==> Undefined
*/

randomNumber = null
let stringNumber = String(randomNumber)
console.log(stringNumber)//null
console.log(typeof(stringNumber));//string

let value = 3 
let negvalue = -value
//console.log(negvalue); // -3

//console.log(2+2);
//console.log(2*3); 
console.log(2%2);
console.log(2**3);

let firstName = "Marcus"
let middleName = "Chien"
let lastName = 111

console.log(firstName + middleName + lastName); // MarcusChien
console.log(1+2+"2")//32
console.log("1"+2+2)//122
console.log(+true);//1
console.log(+"");//0

let gamecounter = 100
++gamecounter
console.log(gamecounter); // 101