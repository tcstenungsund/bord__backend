const express = require("express");
const router = express.Router();

//* This GET function shows the home page "index.html" on "localhost:8080/"
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", session: req.session });
});

module.exports = router;
