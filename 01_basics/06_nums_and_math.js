const score = 400;

const balance = new Number(100);

// console.log(score);
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof(balance.toString()));
// console.log(balance.toFixed(2));

const num1 = 23.8966;
const num2 = 123.8966;

// console.log(num1.toPrecision(2));
// console.log(num1.toPrecision(3));
// console.log(num2.toPrecision(3));
// console.log(num2.toPrecision(4));
// console.log(num2.toPrecision(2));
// console.log(num1.toPrecision(1));
// console.log(num2.toPrecision(1));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ========== Maths ================

// console.log(Math);
// console.log(Math.abs(-4));  //gives positive values
// console.log(Math.round(4.5));   // round
// console.log(Math.ceil(4.5));    // choose the top val
// console.log(Math.floor(4.6));   // choose the lesser val

// console.log(Math.min(4,3,5,2,0));   // gives minimum val
// console.log(Math.max(4,3,5,2,0));   // gives max val

console.log(Math.random());  // gives random value betwen 0 <= val < 1
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
