//file sys module
const fs = require('fs');

//read file
const files = fs.readdirSync('./');
console.log(files);

//read file async
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

//write file
fs.writeFileSync('example.txt', 'Hello World!');

//write file async
fs.writeFile('example_async.txt', 'Hello Async World!', function(err){
    if(err) console.log('Error', err);
    else console.log('File written successfully');
});