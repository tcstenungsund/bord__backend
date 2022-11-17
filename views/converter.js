const fs = require("fs");
const explorer = fs.readdirSync("../pages/markdown");
const md2json = require("md-2-json");

const folder = "../pages/markdown/";
for (const file in explorer) {
  const content = fs.readFileSync(folder + explorer[file], "utf8");
  console.log(md2json.parse(content));

  //! Lägg varje file i variabel, converta variabeln
}

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("../db/themes.db");

db.run(
  "INSERT INTO molekylverkstan (page_name, page_content) VALUES (" +
    pageName +
    ", " +
    pageContent +
    ")"
);
