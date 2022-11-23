import sqlite3 from "sqlite3";

//! @BensinBosse här har vi problemet att en absolut path krävs, prova runt lite gärna
const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

import { sqlQuery } from "../controller/router.js";
export default function getPageContent() {
  console.log("query: " + sqlQuery);
  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      //throw err;
      console.log("Nu gick något snett i databasen");
      return 404;
    } else {
      rows.forEach((row) => {
        // console.log(row.page_content);
        let content = row.page_content;
        console.log("🚀 ~ rows.forEach ~ content", content);
        //return content;
      });
      //console.log(getPageContent());
    }
  });
}
