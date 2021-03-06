const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema([
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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;