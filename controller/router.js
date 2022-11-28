import express from "express";
import { fetchContent } from "../model/model.js";
// import { converter } from "../views/converter.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080"
router.get("/", function (req, res) {
  //converter();
  res.render("../pages/start.ejs");
});

//* Querys the database, the table ":id"
router.get("/:userId", async function (req, res, next) {
  let userId = req.params.userId;
  let sqlQuery = `SELECT page_content FROM ${userId} WHERE page_name = "about";`;
  const content = await fetchContent(sqlQuery);
  if (content == "404") {
    res.status(404).render("../pages/no_user.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
  next();
});

router.get("/:userId/:pageId", async function (req, res, next) {
  let userId = req.params.userId;
  let pageId = req.params.pageId;
  let sqlQuery = `SELECT page_content FROM ${userId} WHERE page_name = "${pageId}";`;
  const content = await fetchContent(sqlQuery);
  if (content == "404") {
    res.status(404).render("../pages/no_page.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
  next();
});

export default router;
