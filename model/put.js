import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

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
