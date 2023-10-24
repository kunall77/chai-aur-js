// singleton made with constructor
// Object.create;

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Kunal",
    "full name": "Kunal Singh",
    // here we are using Symbol as key
    [mySym]: "mykey1",
    age: 24,
    location: "Delhi",
    email: "kunal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// // Symbol as a key
// console.log(jsUser[mySym]);

// // override values of object
// jsUser.email = "kunal@chatgpt.com";

// this will not allow any changes to the object
// Object.freeze(jsUser);
// jsUser.email = "kunal@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
jsUser.greeting();

console.log(jsUser.greetingTwo());