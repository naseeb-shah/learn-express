const mongoose = require("mongoose");

let user = mongoose.Schema({
  name: {
    require: true,
    type: String,
    default: "alima",
  },
  mobile: {
    type: Number,
    require: true,
    length: 10,
  },
  password: String,
});

let User = mongoose.model("users", user);
module.exports = User;
