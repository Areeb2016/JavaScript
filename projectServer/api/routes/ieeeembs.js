var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Member = require('../models/member');

router.get('/', (req, res, next) => {
    Member.find().exec().then(docs => {
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

router.post('/addembs', (req, res, next) => {
    const member = new Member({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        semester: req.body.semester,
        dep: req.body.dep
    });
    member.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /ieeeembs',
            registeredMember: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:memberID', (req, res, next) => {
    const id = req.params.memberID;
    Member.findById(id).exec().then(doc => {
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

router.patch('/editembs/:memberID', (req, res, next) => {
    const id = req.params.memberID;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Member.update({_id: id}, {$set: updateOps}).exec().then(result => {
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

router.delete('delembs/:memberID', (req, res, next) => {
    const id = req.params.memberID;
    Member.remove({_id: id}).exec().then(result => {
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