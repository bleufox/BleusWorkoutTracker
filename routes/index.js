const router = require("express").Router();
const db = require("../models/")

router.get("/workouts", (req, res) => {
    db.Workout.find(
        {}).then(workouts => {
            console.log(workouts)
            workouts.forEach(workout => {
                let total = 0
                workout.exercises.forEach(ex =>
                    total += ex.duration)
            })
            res.json(workouts)
        })
})