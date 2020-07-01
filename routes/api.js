const express = require ("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("index");
    //res.send("you made it");
})



module.exports = router;