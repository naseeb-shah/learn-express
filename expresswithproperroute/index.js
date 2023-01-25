const express = require("express");
const mongoose = require("mongoose");
const app = express();
const home = require("./route/index");
// connnet to database
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/test").catch((e) => console.log(e));

//server

app.use(home);
app.listen(3000, (err) => {
  err ? console.log(err) : console.log("server is started at 3000");
});
