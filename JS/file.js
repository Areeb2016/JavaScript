var fs = require("fs");
var read_string = fs.readFile('rad.txt', 'utf8', function(err, data){
    if(err)
        return console.error(err);
    console.log(data);
});
console.log('Read');
fs.writeFile('rad3.txt', read_string, function(err, data){
    if(err)
        return console.error(err);
    console.log('Success');
});