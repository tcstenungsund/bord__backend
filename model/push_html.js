import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function updateHtml(user, page, content) {
  return new Promise((resolve) => {
    db.run(
      `UPDATE or IGNORE ${user}
    SET page_content = "${content}"
    WHERE page_name = "${page}"`,
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

export function insertHtml(user, page, content) {
  return new Promise((resolve) => {
    db.run(
      `UPDATE or IGNORE ${user}
    SET page_content = "${content}"
    WHERE page_name = "${page}"`,
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
