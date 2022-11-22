import express from "express";
import sqlite3 from "sqlite3";
const router = express.Router();
const db = new sqlite3.Database(
  "C:/Users/03pool09/Documents/skola/bord__backend/db/themes.db"
);

//* Sends put the HTML on "localhost:8080"
router.get("/", function (req, res) {
  //res.send("<h1>This is the home page!</h1>");
  res.render("../pages/start.ejs");
});

//* Sends whatever you put as an ID
// router.get("/:id", function (req, res) {
//   const id = req.params;
//   res.send(id);
// });

//* Querys the database, the table ":id"
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  let pageID = JSON.stringify(id);
  pageID = pageID.slice(1, pageID.length - 1);
  const sqlStart = `SELECT page_content FROM ${pageID} WHERE page_name = "about";`;
  db.all(sqlStart, [], (err, rows) => {
    if (err) {
      res
        .status(404)
        .send(`<h1>Page could not be found</h1> \n <h2>(404)</h2>`);
    }
    rows.forEach((row) => {
      let printedContent;
      printedContent = JSON.parse(row.page_content);
      res.status(200).send(printedContent);
    });
  });
});

export default router;
