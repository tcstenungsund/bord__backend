import sqlite3 from "sqlite3";
import { updateUser } from "../views/md_fetch";

const db = new sqlite3.Database("./db/themes.db");

export function pushHtml(sqlQuery) {
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
