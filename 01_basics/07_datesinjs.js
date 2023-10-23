// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// // toLocalString
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate); // Date is an Object
// Months are between 0 to 11
// let myCreatedDate = new Date(2023, 9, 23);
// let myCreatedDate = new Date(2023, 9, 23, 5, 3);
// let myCreatedDate = new Date("2023-10-23");
let myCreatedDate = new Date("10-23-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// to convert milliseconds in seconds
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());         // starts with 1 as monday

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));