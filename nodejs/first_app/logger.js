//module
console.log(module); // Works in Node.js → module is not attached to window

var url ='http://mylogger.io/log';

function log(message){
    // Send an HTTP request
    console.log(message);
}

//exporting a function
module.exports.log = log;
//exporting a variable
module.exports.url = url;