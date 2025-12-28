// Global Object in Node.js specifically

console.log(global);      // Shows all global properties
console.log(__dirname);   // Current directory path
console.log(__filename);  // Current file path

global.myVar = 100;       // Creating a global variable
console.log(myVar);       // Accessible anywhere

setTimeout(() => {
    console.log('This message is shown after 2 seconds');
}, 2000);               // Timer function to execute after 2 seconds
clearTimeout();          // Function to clear a timeout (not used here)
setInterval(() => {
    console.log('This message is shown every 3 seconds');
}, 3000);            // Timer function to execute every 3 seconds
clearInterval();         // Function to clear an interval (not used here)



// Global Object in Browser specifically

var sayHello = function() {
    console.log('Hello World');
};

console.log(window.sayHello); // Works in browser → function is attached to window
window.sayHello();             // Works

// module is specific to Node.js environment

console.log(module); // Works in Node.js → module is not attached to window