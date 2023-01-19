import express from "express";
import { fetchDb } from "../model/fetch.js";
import { updateCard } from "../model/push.js";
import { updateUser } from "../views/md_fetch.js";
import { repositories } from "../views/repos.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:9090"
router.get("/", function (req, res) {
  res.render("../views/pages/start.ejs");
});

//* This is the route for refreshing the possibly new content,
//* if the user pushed new markdown to their repo while being logged in
router.get("/refresh", async function (req, res) {
  const refreshResponse = await updateUser(
    repositories[1].name,
    repositories[1].md[0]
  );
  if (refreshResponse !== "success") {
    console.log(refreshResponse);
    res.status(400).send("Refresh error");
  } else {
    res.status(200).send("Refresh successful");
  }
});

//* Querys the database, the table being ":userId" (e.g. "molekylverkstan")
router.get("/:user", async function (req, res) {
  if (req.params.user !== "favicon.ico") {
    const content = await fetchDb(req.params.user, "", "about");
    if (content == "404") {
      res.status(404).render("../views/pages/no_user.ejs");
    } else {
      res.status(200).send(JSON.parse(content));
    }
  }
});

//* Querys the database, the table ":userId" and row containing the card id ":card"
router.get("/:user/:card", async function (req, res) {
  const content = await fetchDb(req.params.user, req.params.card, "");
  if (content == "404") {
    res.status(404).render("../views/pages/no_page.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
});

//* put-request, this modifies data in the database
//* mostly used for changing the linked cards for pages
router.put("/card", async function (req, res) {
  const putResponse = await updateCard(
    req.body.user,
    req.body.card_type,
    req.body.card_id,
    req.body.page_name
  );
  if (putResponse !== "clear") {
    console.log(putResponse);
    res.status(400).send("Put error");
  } else {
    res.status(200).send("Put successful");
  }
});

export default router;
