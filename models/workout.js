const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema([
    {
        workout: {
            type: Date,
            default: Date.now
        }
    },
    {
        exercises: [
            {
                exerciseType: String,
                name: String,
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    }
]);

const Workout = model("Workout", workoutSchema);

module.exports = Workout;