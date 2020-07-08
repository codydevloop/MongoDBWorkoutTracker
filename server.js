const express = require("express");
//const routes = require("./routes/workout-controller");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

// routes
app.use(require("./routes/api.js"));
//app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_trackerDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
