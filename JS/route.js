var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    console.log('requested url : ' + req.url);
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        var readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        var jsonObj = {
            name: 'max',
            age: 23,
            class: 15
        };
        res.end(JSON.stringify(jsonObj));
    }
    else{
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        var readStream = fs.createReadStream('404.html');
        readStream.pipe(res);
    }
}).listen(3000);

console.log("Server Started!");