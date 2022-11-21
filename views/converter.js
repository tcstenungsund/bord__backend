import fs from "fs";
import md2json from "md-2-json";

export function mdfinder() {
  const explorer = fs.readdirSync("./");
  const pageArr = [explorer.length];
  const folder = "./";
  for (const file in explorer) {
    const content = fs.readFileSync(folder + explorer[file], "utf8");
    const website = md2json.parse(content);
    pageArr[file] = {
      pageName: explorer[file].replace(".md", ""),
      pageContent: website,
    };
  }
  console.log("Findern är körd");
}

export function converter() {
  const sqlite3 = require("sqlite3").verbose();
  let db = new sqlite3.Database("../db/themes.db");

  db.run("DELETE FROM molekylverkstan");

  for (i = 0; i < pageArr.length; i++) {
    let pageID = i + 1;
    let finalName = JSON.stringify(pageArr[i].pageName).slice(
      1,
      pageArr[i].pageName.length + 1
    );
    let finalContent = JSON.stringify(pageArr[i].pageContent);
    db.run(
      "INSERT INTO molekylverkstan (page_id, page_name, page_content) VALUES (" +
        pageID +
        ", '" +
        finalName +
        "', '" +
        finalContent +
        "')"
    );
  }
  console.log("Convertern är körd");
}

export function logger() {
  console.log("HEJSAN");
}
