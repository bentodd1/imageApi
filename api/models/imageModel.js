'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    id: {
       type: Number
    },
    name: {
        type: String
    },
    text: {
        type: String
    },
    src: {
        type: String
    },


});

module.exports = mongoose.model('Images',ImageSchema);
