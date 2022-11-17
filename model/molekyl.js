const express = require("Express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

const readId = "about";
const sqlQuery =
  'SELECT page_content FROM molekylverkstan WHERE page_name = "' + readId + '"';

router.get("/", (req, res) => {
  content = JSON.stringify(db.run(sqlQuery));
  console.log(typeof content);
  console.log(content);
  res.status(200).send(content);
});

module.exports = router;

// const sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database(":memory:", (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Connected to the in-memory SQlite database.");
// });

// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Close the database connection.");
// })
