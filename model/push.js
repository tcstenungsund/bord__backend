import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function updateHtml(user, page, content) {
  return new Promise((resolve) => {
    db.run(
      `UPDATE or IGNORE ${user}
      SET page_content = $content
      WHERE page_name = $page`,
      { $page: page, $content: content },
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
      `INSERT INTO ${user}
      (page_name, page_content)
      VALUES ($page, $content)`,
      { $page: page, $content: content },
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

export function updateCard(user, type, card, name) {
  return new Promise((resolve) => {
    db.run(
      `UPDATE or IGNORE ${user}
      SET ${type} = $card
      WHERE page_name = $name`,
      { $card: card, $name: name },
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
