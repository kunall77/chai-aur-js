let score = "true";

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0
// null -> 0
// undefined -> NaN

let isLoggedIn = "kunal";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 -> true; 0 -> false
// "" -> false
// "kunal" -> true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************** Operations *********************

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let srt2 = " Kunal";

let str3 = str1 + srt2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * (5 % 3));

// ********* NO tricky Behaviours ****************
// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// ********** increments ************

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

let x = 3n;
console.log(++x);
x = 3n;
console.log(x++);