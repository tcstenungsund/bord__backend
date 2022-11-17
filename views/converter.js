const fs = require("fs");
const explorer = fs.readdirSync("../pages/markdown");
const md2json = require("md-2-json");
const pageArr = [explorer.length];

function mdfinder() {
  const folder = "../pages/markdown/";
  for (const file in explorer) {
    const content = fs.readFileSync(folder + explorer[file], "utf8");
    const website = md2json.parse(content);
    pageArr[file] = {
      name: explorer[file].replace(".md", ""),
      content: website,
    };
  }

  //! Lägg varje file i variabel, converta variabeln
}
mdfinder();
console.log(pageArr);

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("../db/themes.db");

db.run(
  "INSERT INTO molekylverkstan (page_name, page_content) VALUES (" +
    pageName +
    ", " +
    pageContent +
    ")"
);
>>>>>>> 695511295a54a72c9f4ad5b39beec4f8d5d90aa0
