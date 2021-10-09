const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {type: Date, default: Date.now},
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Provide the type of exercise'
            },
            name:{
                type: String,
                trim: true,
                required: 'Provide the name of the exercise'
            },
            duration: {
                type: Number,
                required: 'Provide duration of workout'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ],
});

const Workout = mongoose.model("Workout, workoutSchema");
model.exports = Workout;