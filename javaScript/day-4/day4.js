let value;
value = 50;
console.log(typeof value);

value = "JavaScript";
console.log(typeof value);

value = {a:1};
console.log(typeof value);

value = null;
console.log(typeof value);

value = undefined;
console.log(typeof value);

value = Symbol("id");
console.log(typeof value);

value = 9007199254740991n;
console.log(typeof value);

value = true;
console.log(typeof value);
value = function() { return "Hello"; };
console.log(typeof value);

console.log("Final Value:", value());