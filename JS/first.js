var http = require("http");
var expect = require("./expect.js")

http.createServer(function(req, res){
    var body = 'Hello World using node now';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Type' : 'text/plain',
        'Content-Leegth' : content_length
    });
    res.end(expect.writeHello);
}).listen(3000);

console.log("Server Started!", expect.writeHello)