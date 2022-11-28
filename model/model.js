import sqlite3 from "sqlite3";

// const db = new sqlite3.Database(
//   "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
// );

const db = new sqlite3.Database(
  "C:/Users/03pool09/Documents/skola/bord__backend/db/themes.db"
);

export function fetchContent(sqlQuery) {
  return new Promise((resolve) => {
    db.all(sqlQuery, [], (err, rows) => {
      if (err || rows.length === 0) {
        resolve("404");
      } else {
        rows.forEach((row) => {
          resolve(row.page_content);
        });
      }
    });
  });
}
