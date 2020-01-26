var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    var readStream = fs.createReadStream('index.html');
    readStream.pipe(res)
}).listen(3000);

console.log("Server Started!");