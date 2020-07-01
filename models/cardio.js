const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardioDocument = new Schema ({
    name: String,
    type: String,
    time: Number,
    distance: Number
});

module.exports = Cardio;