const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardioDocument = new Schema ({
    name: String,
    type: String,  //cardio or resistance
    time: Number,  //how long
    resistance: [{
        weight: Number,
        sets:Number,
        reps:Number
        }]
});

module.exports = Resistance;