// const http = require('http');

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('A new connection has been established.');
// });

// server.listen(5050, () => {
//     console.log('Server is listening on port 5050');
// });

const http = require('http');

// const server = http.createServer(function (req, res) {

// });
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    } else if (req.url === '/api/data') {
        res.write(JSON.stringify({ name: 'John', age: 30 }));
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    }
});
server.listen(5050, () => {
    console.log('Server is listening on port 5050');
});