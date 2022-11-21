import express from "express";
import sqlite3 from "sqlite3";
const router = express.Router();

//! @BensinBosse här har vi problemet att en absolut path krävs, prova runt lite gärna
const db = new sqlite3.Database(
  "C:/Users/03pool09/Documents/skola/bord__backend/db/themes.db"
);
const readId = "about";
const sqlQuery =
  'SELECT page_content FROM molekylverkstan WHERE page_name = "' + readId + '"';

router.get("/", (req, res) => {
  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      let printedContent;
      printedContent = JSON.parse(row.page_content);
      res.status(200).send(printedContent);
    });
  });
});

export default router;
