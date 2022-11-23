import fs from "fs";
import md2json from "md-2-json";
import sqlite3 from "sqlite3";

const explorer = fs.readdirSync(
  "C:/Users/pontu/Documents/Skola/bord__backend/markdown"
);
const pageArr = [explorer.length];
const folder = "C:/Users/pontu/Documents/Skola/bord__backend/markdown/";

export function mdfinder() {
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
  let db = new sqlite3.Database(
    "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
  );

  //db.run("DELETE FROM molekylverkstan");

  let i;
  for (i = 0; i < pageArr.length; i++) {
    let pageID = i + 1;
    let finalName = JSON.stringify(pageArr[i].pageName).slice(
      1,
      pageArr[i].pageName.length + 1
    );
    let finalContent = JSON.stringify(pageArr[i].pageContent);
    const query = `UPDATE or IGNORE molekylverkstan SET page_id = ${pageID}, page_name = '${finalName}', page_content = '${finalContent}'`;
    //   `INSERT INTO molekylverkstan (page_id, page_name, page_content)
    // VALUES('${pageID}', '${finalName}', '${finalContent}')`;

    // `UPDATE molekylverkstan SET page_id = :pageID, page_name = :pageName, page_content = :pageContent`

    db.run(query);
  }
  console.log("Convertern är körd");
}

export function logger() {
  console.log("HEJSAN");
}

mdfinder();
converter();
