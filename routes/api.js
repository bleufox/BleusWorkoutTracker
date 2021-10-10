const router = require("express").Router();
const db = require("../models/")

router.get("/workouts", (req, res) => {
    db.Workout.find(
        {}).then(workoutDB => {
            console.log(workoutDB)
            workoutDB.forEach(workout => {
                let total = 0
                workout.exercises.forEach(ex =>
                    total += ex.duration)
            })
            res.json(workoutDB)
        })
})

router.put("/workouts/:id", (req, res) => {
    console.log(req.body)
    console.log('PUT ROUTE')
    db.Workout.findOneAndUpdate(
        req.params.id,
        {
            $push: { exercises: req.body }
        }).then(workoutDB => {
            res.json(workoutDB)
        })
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(workoutDB => {
        console.log(workoutDB)
        res.json(workoutDB)
    })
})

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).then(workoutDB => {
        console.log(workoutDB)
        res.json(workoutDB)
    })
})

module.exports = router