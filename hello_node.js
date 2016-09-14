var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello Node.js\nI am Tungfpm\n');
}).listen(3000, "45.63.121.5");
console.log('Server running at http://45.63.121.5:3000/');