const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

const readId = "about";
const sqlQuery =
  'SELECT page_content FROM molekylverkstan WHERE page_name = "' + readId + '"';

db.all(sqlQuery, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.page_content);
  });
});

console.log(sql);

db.close();
