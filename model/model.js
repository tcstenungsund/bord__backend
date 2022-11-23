import sqlite3 from "sqlite3";

//! @BensinBosse här har vi problemet att en absolut path krävs, prova runt lite gärna
const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

import { sqlQuery } from "../controller/router";
export function getPageContent() {
  let printedContent;
  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      printedContent = JSON.parse(row.page_content);
      return printedContent;
    });
  });
}
