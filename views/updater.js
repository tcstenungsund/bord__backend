import fs from "fs";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/themes.db");

export function updater(explorer, folder, user) {
  const pageArr = [explorer.length];

  for (const file in explorer) {
    const content = fs.readFileSync(folder + explorer[file], "utf8");
    pageArr[file] = {
      pageName: explorer[file].replace(".html", ""),
      pageContent: content,
    };
  }
  console.log("Findern är körd");

  let i;
  for (i = 0; i < pageArr.length; i++) {
    let pageID = i + 1;
    let finalName = JSON.stringify(pageArr[i].pageName).slice(
      1,
      pageArr[i].pageName.length + 1
    );
    let finalContent = JSON.stringify(pageArr[i].pageContent);

    const query = `UPDATE or IGNORE ${user} SET
      page_id = ${pageID}, page_name = '${finalName}', page_content = '${finalContent}'`;

    db.run(query);
  }
  console.log("Updatern är körd");
}
