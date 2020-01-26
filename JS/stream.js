var fs = require('fs');

var readStream = fs.createReadStream('wiki.txt');
readStream.setEncoding('utf8');
var data = '';
readStream.on('data', function(chunk){
    console.log('----------------------');
    data += chunk;
    //console.log(chunk);
});
readStream.on('end', function(chunk){
    console.log(data);
    console.log('----------END-------------');
});