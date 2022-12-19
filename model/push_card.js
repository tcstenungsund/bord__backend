import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function pushCard(user, type, card, name) {
  return new Promise((resolve) => {
    db.run(
      `UPDATE or IGNORE ${user}
    SET ${type} = "${card}"
    WHERE page_name = "${name}"`,
      (err) => {
        if (err) {
          resolve(err);
        } else {
          resolve("clear");
        }
      }
    );
  });
}
