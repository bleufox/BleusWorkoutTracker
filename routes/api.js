const router = require("express").Router();
const Workout = require("../models/workout.js")

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id, {
        $push: { exercises: body }
    }).then(workoutDB => {
        res.json(workoutDB);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;