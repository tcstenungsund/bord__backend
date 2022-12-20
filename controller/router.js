import express from "express";
import { fetchDb } from "../model/fetch.js";
import { pushCard } from "../model/push_card.js";
import { updateUser } from "../views/md_fetch.js";
import { repositories } from "../views/repos.js";

const router = express.Router();

//* Sends out the ejs (basically HTML) on start URL "localhost:8080"
router.get("/", function (req, res) {
  res.render("../views/pages/start.ejs");
});

//* Querys the database, the table ":userId"
router.get("/:user", async function (req, res) {
  if (req.params.user !== "favicon.ico") {
    //* Fetches data from db
    const content = await fetchDb(req.params.user, "", "about");
    if (content == "404") {
      res.status(404).render("../views/pages/no_user.ejs");
    } else {
      res.status(200).send(JSON.parse(content));
    }
  }
});

//* Querys the database, the table ":userId" and row ":pageID"
router.get("/:user/:card", async function (req, res) {
  const content = await fetchDb(req.params.user, req.params.card, "");
  if (content == "404") {
    res.status(404).render("../views/pages/no_page.ejs");
  } else {
    res.status(200).send(JSON.parse(content));
  }
});

//* put-request, modifies data in the database
router.put("/card", async function (req, res) {
  const putResponse = await pushCard(
    req.body.user,
    req.body.card_type,
    `"${req.body.card_id}"`,
    `"${req.body.page_name}"`
  );
  if (putResponse !== "clear") {
    console.log(putResponse);
    res.status(400).send("Put error");
  } else {
    res.status(200).send("Put successful");
  }
});

router.put("/refresh", async function (req, res) {
  // const refreshResponse = await updateUser(req.body.user, "md")
  const refreshResponse = await updateUser(
    repositories[1].name,
    repositories[1].md[0]
  );
  if (refreshResponse !== "clear") {
    console.log(fetchResponse);
    res.status(400).send("Refresh error");
  } else {
    res.status(200).send("Refresh successful");
  }
});

export default router;
