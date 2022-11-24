import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

var content;
function getPageContent(sqlQuery) {
  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      console.log("Something went wrong in the db");
    }
    // else {
    rows.forEach((row) => {
      content = row.page_content;
      console.log(content);
      return content;
    });
  });
}

getPageContent(`SELECT page_content FROM fruit WHERE page_name = "apples";`);
console.log(content);

// console.log(content);

// getPageContent(`SELECT page_content FROM fruit WHERE page_name = "apples";`);
