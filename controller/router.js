import express from "express";
import fs from "fs";
import { fetchContent } from "../model/model.js";
import { updater } from "../views/updater.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080"
router.get("/", function (req, res) {
  res.render("../pages/start.ejs");
});

//* Querys the database, the table ":id"
router.get("/:userId", async function (req, res) {
  if (req.params.userId !== "favicon.ico") {
    //* Fetches data from db
    const content = await fetchContent(
      `SELECT page_content FROM ${req.params.userId} WHERE page_name = "about";`
    );
    if (content == "404") {
      res.status(404).render("../pages/no_user.ejs");
    } else {
      res.status(200).send(JSON.parse(content));
    }
  }
});

router.get("/:userId/:pageId", async function (req, res) {
  const content = await fetchContent(
    `SELECT page_content FROM ${req.params.userId} WHERE page_name = "${req.params.pageId}";`
  );
  if (content == "404") {
    res.status(404).render("../pages/no_page.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
});

//* Querys the database, the table ":id"
// router.put("/:userId", async function (req, res) {
//   let userId = req.params.userId;

//   //* Updater
//   const explorer = fs.readdirSync(`./html/${userId}`);
//   const folder = `./html/${userId}/`;
//   updater(explorer, folder, userId);
// });

export default router;
