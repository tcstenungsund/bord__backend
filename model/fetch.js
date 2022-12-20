import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function fetchDb(user, card, page) {
  return new Promise((resolve) => {
    db.all(
      `SELECT page_content FROM ${user}
      WHERE primary_card = "${card}"
      OR secondary_card = "${card}"
      OR page_name = "${page}"`,
      [],
      (err, rows) => {
        if (err || rows.length === 0) {
          resolve(err);
        } else {
          rows.forEach((row) => {
            resolve(row.page_content);
          });
        }
      }
    );
  });
}

// WHERE primary_card = "${card}"
// OR secondary_card = "${card}"
