var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})
app.get('/api', function(req, res){
    res.sendFile(__dirname + '/404.html');
})

var students = {
    1 : 'Mark',
    2 : 'Tom'
}

app.get('/student/:id', function(req, res){
    res.render('students', { name : students[req.params.id], id : req.params.id });
})
app.listen(3000, function(){
    console.log('Server Live!');
})