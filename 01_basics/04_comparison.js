// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// In javascript comparison like > < <= >= and 
// equality check == and === work differently
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ******AVOID ABOVE COMPARISON**************

// === strict check (checks values + its datatype)
console.log("2" == 2);   // true
console.log("2" === 2);  // false

