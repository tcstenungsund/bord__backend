import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function fetch(sqlQuery) {
  return new Promise((resolve) => {
    db.all(sqlQuery, [], (err, rows) => {
      if (err || rows.length === 0) {
        console.log(sqlQuery);
        resolve("404");
      } else {
        rows.forEach((row) => {
          resolve(row.page_content);
        });
      }
    });
  });
}
