import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.status(200).render("air/start");
});

router.get("/borealis", (req, res) => {
  res.status(200).render("air/borealis");
});

router.get("/uf", (req, res) => {
  res.status(200).render("air/uf");
});

export default router;
