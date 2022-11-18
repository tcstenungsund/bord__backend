const express = require("Express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

//! Här har vi problemet att en absolut path krävs, prova runt lite gärna
const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

const readId = "about";
const sqlQuery =
  'SELECT page_content FROM molekylverkstan WHERE page_name = "' + readId + '"';

let newVar;
router.get("/", (req, res) => {
  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      newVar = JSON.parse(row.page_content);
      res.status(200).send(newVar);
    });
  });
});

module.exports = router;
