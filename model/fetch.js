import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function fetchDb(user, card) {
  return new Promise((resolve) => {
    db.all(
      `SELECT page_content FROM ${user}
    WHERE primary_card = ${card}
    OR secondary_card = ${card}`,
      [],
      (err, rows) => {
        if (err || rows.length === 0) {
          resolve("404");
        } else {
          rows.forEach((row) => {
            resolve(row.page_content);
          });
        }
      }
    );
  });
}
