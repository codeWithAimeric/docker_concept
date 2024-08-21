const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const numbers = [1, 2, 3];
    const max = _.max(numbers);

    res.end("Hello, I am docker in node: " + max);
})

server.listen(3000);