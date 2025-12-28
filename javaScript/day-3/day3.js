let name = "John"; //string literal
let age = 25;      //number literal
let isStudent = true; //boolean literal
let height;        //undefined literal
let weight = null; //null literal
let bigNumber = 9007199254740991n; //bigint literal
let symbol = Symbol("uniqueIdentifier"); //symbol literal
name = "David";   // allowed
age = 30;        // allowed
height = 180;    // now height is defined
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Height:", height);
console.log("Weight:", weight);
console.log("Big Number:", bigNumber);
console.log("Symbol:", symbol.toString());