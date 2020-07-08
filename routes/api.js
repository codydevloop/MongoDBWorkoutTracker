const express = require ("express");
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

router.get("/api/workouts", (req, res) => {
    try{
        const data = await Workout.find({});
        res.json(data);

    } catch (error) {
        console.log(error);
        res.send(error);

    }
    const data = await 
    //res.send("you made it");
})









module.exports = router;