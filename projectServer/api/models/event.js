var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    chapter: String,
    description: String,
    date: Number
});

module.exports = mongoose.model('Event', eventSchema);