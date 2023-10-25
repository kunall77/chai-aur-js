
// scope => {}

// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner:", a);
}

// console.log("Global:", a);
// console.log(b);
// console.log(c);

function one() {
    const username = "kunal";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    
    try {
        console.log(website);
    } catch(err) {
        console.log("can't access website variable");
    }

    two();
}

// one();


if (true) {
    const username = "kunal";
    if (username === "kunal") {
        const website = "yotube";
        // console.log(username + website);
    }
    // console.log(website); // gives error
}

// console.log(username);  // can't run as error before


// ================Intresting=====================

// can access function this way before declaration
console.log(addone(5));
function addone(num) {
    return num + 1;
}

// error: cant access function this way before declaration
// console.log(addTwo(5)); 
const addTwo = function(num) {
    return num + 2;
}

