const mongoose = require("mongoose");

let sms = mongoose.Schema({
  sender: {
    type: mongoose.isObjectIdOrHexString,
    ref: "user",
  },
  reciever: {
    type: mongoose.isObjectIdOrHexString,
    ref: "user",
  },
  sms: {
    type: String,
    require: true,
  },
});

let User = mongoose.model("sms", sms);
module.exports = User;
