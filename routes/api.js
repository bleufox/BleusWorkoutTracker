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

router.put("/workouts/:id", (req, res) => {
    console.log(req.body)
    db.Workout.findOneAndUpdate(
        req.params.id,
        {
            $push: { exercises: req.body }
        }).then(workouts => {
            res.json(workouts)
        })
})

router.post("/workouts", (req, res) => {
    db.Workout.create({}).then(newWorkout => {
        console.log(newWorkout)
        res.json(newWorkout)
    })
})

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).then(workouts => {
        console.log(workouts)
        res.json(workouts)
    })
})

module.exports = router