import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function fetchContent(sqlQuery) {
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

export function putCard(sqlQuery) {
  return new Promise((resolve) => {
    db.run(sqlQuery, (err) => {
      if (err) {
        console.log(err);
        resolve(err);
      } else {
        resolve("clear");
      }
    });
  });
}
