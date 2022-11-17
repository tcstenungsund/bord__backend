const express = require("Express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.status(200).render("fruit/start");
});

router.get("/banana", (req, res) => {
  res.status(200).render("fruit/banana");
});

router.get("/orange", (req, res) => {
  res.status(200).render("fruit/orange");
});

module.exports = router;
