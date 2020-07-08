const express = require("express");
const router = express.Router();
const path = require("path");
const Workout = require("../models/workout");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    //res.send("you made it");
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
    //res.send("you made it");
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
    //res.send("you made it");
})


// API routes

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.find({});
        console.log(data);
        res.json(data);

    } catch (error) {
        console.log(error);
        res.send(error);

    }
    //res.send("you made it");
})


///work on this one
router.put("/api/workouts/:id", async (req, res) => {
    try {
        const data = await Workout.findByIdAndUpdate({id:req.params.id},
            { $push: { exercises: req.body } }, { new: true });

        console.log(data);
        res.json(data);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.post("/api/workouts/", async (req, res) => {
    try {
        const data = await Workout.create(req.body);
        
        console.log(data);
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})


module.exports = router;