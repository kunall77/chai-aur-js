// Kis terha se data ko mermory me store kiya jata hai or access kiya jata hai
// uske base per 2 types ke data types hai:
// 1. Primitive and 2. Non-Primitive (refrence type)

// Primitive (these are call by value)):
// 7 types:
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreVal = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

//Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 23872358729571290n;

// Non-Primitive (Refrence Type):
// Here alising happens
// Array, Objects, Functions

// // I created an array
// let a = [1,2,3];
// // assign it to a new variable b
// let b = a;
// // change b's 0th index
// b[0] = 2;
// // but a's 0th index value also changed
// console.log(`A: ${a}, B: ${b}`);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "kunal",
    age: 24
}

const myFunction = function(){
    console.log("Hello, World");
}

console.log(typeof outsideTemp);
console.log(typeof bigNumber);