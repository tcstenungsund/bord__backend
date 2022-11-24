import express from "express";
import * as model from "../model/model.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080" (will be different on public server, like "www.bord.se")
router.get("/", function (req, res) {
  res.render("../pages/start.ejs");
});

let sqlQuery;
//* Querys the database, the table ":id"
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  console.log("id:", id);
  console.log("Req url:", req.url);
  sqlQuery = `SELECT page_content FROM ${id} WHERE page_name = "about";`;
  let content = model.getPageContent(sqlQuery);
  // if (content) {
  //   res.status(404).render("../pages/404.ejs");
  // } else {
  console.log("🚀 ~ content", content);
  res.status(200).send(content);
  // }
  console.log("");
  next();
});

export default router;
