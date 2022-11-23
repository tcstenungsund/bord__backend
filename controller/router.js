import express from "express";
//import getPageContent from "C:/Users/pontu/Documents/Skola/bord__backend/model/model.js";
import getPageContent from "../model/model.js";
const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080" (will be different on public server, like "www.bord.se")
router.get("/", function (req, res) {
  res.render("../pages/start.ejs");
});

export let sqlQuery;
// //* Querys the database, the table ":id"
router.get("/:id", function (req, res) {
  const id = req.params.id;
  console.log("🚀 ~ id", id);
  sqlQuery = `SELECT page_content FROM ${id} WHERE page_name = "about";`;
  console.log("🚀 ~ sqlQuery", sqlQuery);
  //console.log(getPageContent);
  res.send(id);
  // res.send(getPageContent);
});

export default router;
