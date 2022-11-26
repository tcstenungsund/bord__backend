import express from "express";
import { fetchContent } from "../model/model.js";
import { converter } from "../views/converter.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080" (will be different on public server, like "www.bord.se")
router.get("/", function (req, res) {
  //converter();
  res.render("../pages/start.ejs");
});

//* Querys the database, the table ":id"
router.get("/:customerId", async function (req, res, next) {
  let customerId = req.params.customerId;
  let sqlQuery = `SELECT page_content FROM ${customerId} WHERE page_name = "about";`;
  const content = await fetchContent(sqlQuery);
  if (content == "404") {
    res.status(404).render("../pages/404.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
  next();
});

router.get("/:customerId/:pageId", async function (req, res, next) {
  let customerId = req.params.customerId;
  let pageId = req.params.pageId;
  let sqlQuery = `SELECT page_content FROM ${customerId} WHERE page_name = "${pageId}";`;
  const content = await fetchContent(sqlQuery);
  if (content == "404") {
    res.status(404).render("../pages/404.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
  next();
});

export default router;
