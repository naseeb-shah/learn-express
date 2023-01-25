const express = require("express");
let router = express.Router();

router.get("/home", (req, res) => {
  res.send("shah");
});

module.exports = router;
