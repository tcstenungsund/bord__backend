import express from "express";
const router = express.Router();

//* This GET function shows the home page "index.html" on "localhost:8080/"
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", session: req.session });
});

router.get("/:id", function (req, res) {
  const { id } = req.params;
  // res.status(200).render(`..pages/air/${id}`);
  res.send(req.params);
});

export default router;
