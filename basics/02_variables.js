const myId = 123;
let myName = "Vishal"
var myEmail = "vishal@gmail.com" // we should not use var for declaring variables since it has issues with block scope & functional scope..
myAge = 25;
let myState; // It will shows udefined since not declared it's value.

// myId = 222  //constant can't be reassigned their value
myName = "Visu"
myEmail = "visu@test.com"
myAge = 26



console.log(myId);
console.table([myId, myName, myEmail, myAge, myState])
