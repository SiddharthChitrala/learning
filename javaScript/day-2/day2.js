var name = "John";
name = "David";   // allowed
var name = "Alex"; // allowed


let age = 25;
age = 30;        // allowed
// let age = 35;   // not allowed, will throw an error


const country = "USA";
// country = "Canada"; // not allowed, will throw an error
// const country = "UK"; // not allowed, will throw an error

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
