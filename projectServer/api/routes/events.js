var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Event = require('../models/event');

router.get('/', (req, res, next) => {
    Event.find().exec().then(docs => {
        console.log(docs);
        if(docs.length >= 0){
            res.status(200).json(docs);
        } else{
            res.status(404).json({
                message: 'No entries found'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/add', (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        chapter: req.body.chapter,
        description: req.body.description,
        date: req.body.date
    });
    event.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /events',
            registeredMember: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:eventID', (req, res, next) => {
    const id = req.params.memberID;
    Event.findById(id).exec().then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        } else{
            res.status(404).json({
                message: 'No valid entry found for provided ID'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch('/edit/:eventID', (req, res, next) => {
    const id = req.params.memberID;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Event.update({_id: id}, {$set: updateOps}).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/del/:eventID', (req, res, next) => {
    const id = req.params.memberID;
    Event.remove({_id: id}).exec().then(result => {
        res.status(200).json(res);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;