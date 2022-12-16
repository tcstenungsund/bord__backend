import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function push(sqlQuery) {
  return new Promise((resolve) => {
    db.run(sqlQuery, (err) => {
      if (err) {
        resolve(err);
      } else {
        resolve("clear");
      }
    });
  });
}
