var fs = require('fs');
var writeStream = fs.createWriteStream('wiki2.txt')
var readStream = fs.createReadStream('wiki.txt');
readStream.setEncoding('utf8');
var data = '';
readStream.on('data', function(chunk){
    console.log('----------------------');
    data += chunk;
    writeStream.write(chunk);
    console.log('Success');
})
readStream.on('end', function(chunk){
    console.log(data);
    console.log('----------------END------------------');
})