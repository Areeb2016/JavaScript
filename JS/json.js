var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    var jsonObj = {
        name : 'max',
        age : 23,
        class : 15
    };
    res.end(JSON.stringify(jsonObj));
}).listen(3000);

console.log("Server Started!");