var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Result', ResultSchema);
