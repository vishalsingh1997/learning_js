console.log(x); // Outputs: undefined
var x = 5;


foo(); // Outputs: "Hello, World!"

function foo() {
    console.log("Hello, World!");
}


bar(); // Throws a TypeError: bar is not a function if we call before initialize
var bar = function () {
    console.log("This won't work.");
};

// bar(); // work here since calling after initialize


