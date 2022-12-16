import express from "express";
import { fetch } from "../model/fetch.js";
import { md_fetch } from "../views/md_fetch.js";
import { push } from "../model/push.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080"
router.get("/", function (req, res) {
  res.render("../views/pages/start.ejs");
});

//* Querys the database, the table ":userId"
router.get("/:userId", async function (req, res) {
  if (req.params.userId !== "favicon.ico") {
    //* Fetches data from db
    const content = await fetch(
      `SELECT page_content FROM ${req.params.userId}
      WHERE page_name = "about";`
    );
    if (content == "404") {
      res.status(404).render("../views/pages/no_user.ejs");
    } else {
      res.status(200).send(JSON.parse(content));
    }
  }
});

//* Querys the database, the table ":userId" and row ":pageID"
router.get("/:userId/:pageId", async function (req, res) {
  const content = await fetch(
    `SELECT page_content FROM ${req.params.userId}
    WHERE page_name = "${req.params.pageId}";`
  );
  if (content == "404") {
    res.status(404).render("../views/pages/no_page.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
});

//* put-request, modifies data in the database
router.put("/card", async function (req, res) {
  const putResponse = await push(
    `UPDATE or IGNORE ${req.body.user}
    SET ${req.body.card_type} = "${req.body.card_id}"
    WHERE page_name = "${req.body.page_name}"`
  );
  if (putResponse !== "clear") {
    console.log(putResponse);
    res.status(400).send("Put error");
  } else {
    res.status(200).send("Put successful");
  }
});

router.put("/refresh", async function (req, res) {
  const refreshResponse = await push(
    `UPDATE or IGNORE ${req.body.user} SET
    page_id = ${pageId},
    page_name = '${pageName}',
    page_content = '${pageContent}'`
  );
  if (refreshResponse !== "clear") {
    console.log(fetchResponse);
    res.status(400).send("Refresh error");
  } else {
    res.status(200).send("Refresh successful");
  }
});

export default router;
