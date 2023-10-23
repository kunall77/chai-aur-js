// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["ironman", "spiderman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); // this is time consuming when there are more elts.
// myArr.shift();    // remove 1st element in the arr.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // do not manipulate original arr

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // it manipulated the original arr
console.log("C ", myArr);
console.log(myn2);

