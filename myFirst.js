let http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello!!! Welcome to Node-JS.");
}).listen(8080);