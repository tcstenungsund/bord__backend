import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

//* This function fetches content from the database
//* It takes three arguments, "user", "card" and "page", of which only user is mandatory
//* Either "card" or "name" has to be provided, since they specify what page is wanted
export function fetchDb(user, card, name) {
  return new Promise((resolve) => {
    db.all(
      `SELECT page_content FROM ${user}
      WHERE primary_card = $card
      OR secondary_card = $card
      OR page_name = $name`,
      { $card: card, $name: name },
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
