
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);
// console.log(result);

function logInUserMessage(username = "elon") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(logInUserMessage("Kunal"));
console.log(logInUserMessage());