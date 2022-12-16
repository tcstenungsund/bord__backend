import fs from "fs";
import sqlite3 from "sqlite3";
import fetch from "node-fetch";
import { repositories } from "./repos.js";
import axios from "axios";

const db = new sqlite3.Database("../db/themes.db");

const testVar = "md_test";
const testVar2 = "about.md";

function pinpoint() {
  const repo = repositories.find((object) => object.name === testVar);
  const md = repo.md.find((markdown) => markdown === testVar2);

  return [repo.name, md];
}
const [targetRepo, targetMd] = pinpoint();

const getFile = async () => {
  try {
    const response = await fetch(
      //https://raw.githubusercontent.com/tcstenungsund/md_test/main/about.md
      "https://raw.githubusercontent.com/tcstenungsund/" +
        targetRepo +
        "/main/" +
        targetMd
    );
    const data = await response.text();
    return data;
  } catch (err) {
    console.log("fetch error", err);
  }
};

async function getMd() {
  const data = await getFile();
  // console.log(getData);
  return data;
  // console.log("data", getData);
}

async function md2html() {
  const data = await getMd();

  axios
    .post("https://api.github.com/markdown", {
      // mode=gfm would expand #13 issue links and suchlike
      mode: "markdown",
      text: data,
    })
    .then((response) => {
      // If the request was successful, get the markdown as HTML
      const mdAsHtml = response.data;
      console.log(mdAsHtml);
    })
    .catch((error) => {
      // If there was an error, log it to the console
      console.error(error);
    });
}

md2html();

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

    const query = `UPDATE or IGNORE $user SET
      page_id = $pageID, page_name = '$finalName', page_content = '$finalContent'`;

    db.run(query, {
      $pageID: pageID,
      $finalName: finalName,
      $finalContent: finalContent,
    });
  }
  console.log("Updatern är körd");
}
