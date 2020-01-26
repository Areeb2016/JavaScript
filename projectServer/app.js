var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var csRoutes = require('./api/routes/ieeecs');
var embsRoutes = require('./api/routes/ieeeembs');
var rasRoutes = require('./api/routes/ieeeras');
var eventRoutes = require('./api/routes/events');

mongoose.connect('mongodb+srv://ieeecs:' + process.env.MONGO_ATLAS_PW + '@cluster0-4ovww.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useMongoClient: true
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({

        });
    }
    next();
});

app.use('/ieeecs', csRoutes);
app.use('/ieeeembs', embsRoutes);
app.use('/ieeeras', rasRoutes);
app.use('/events', eventRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;