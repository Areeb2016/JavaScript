var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    mobile: Number,
    semester: Number,
    dep: String
});

module.exports = mongoose.model('Member', memberSchema);