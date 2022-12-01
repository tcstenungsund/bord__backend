import fs from "fs";
import md2json from "md-2-json";
import sqlite3 from "sqlite3";
import fetch from "node-fetch";

const db = new sqlite3.Database("./db/themes.db");

const getFile = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/tcstenungsund/schedule/main/md/weuweb33-22te4i.md"
    );
    const data = await response.text();
    return data;
  } catch (err) {
    console.log("fetch error", err);
  }
};

function getMd() {
  (async () => {
    const getData = await getFile();
    console.log("data", getData);
  })();
}

getMd();

export function converter() {
  const explorer = fs.readdirSync(
    "C:/Users/03kaso20/Documents/web/bord/bord__backend/markdown"
  );
  const pageArr = [explorer.length];
  const folder = "C:/Users/03kaso20/Documents/web/bord/bord__backend/markdown";

  for (const file in explorer) {
    const content = fs.readFileSync(folder + explorer[file], "utf8");
    const website = md2json.parse(content);
    pageArr[file] = {
      pageName: explorer[file].replace(".md", ""),
      pageContent: website,
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
    const query = `UPDATE or IGNORE molekylverkstan SET
      page_id = ${pageID}, page_name = '${finalName}', page_content = '${finalContent}'`;

    db.run(query);
  }
  console.log("Convertern är körd");
}
