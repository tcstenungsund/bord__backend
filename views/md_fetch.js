import fetch from "node-fetch";
import axios from "axios";
import { fetchDb } from "../model/fetch.js";
import { updateHtml } from "../model/push.js";
import { insertHtml } from "../model/push.js";

export async function updateUser(repo, file) {
  async function fetchRepo() {
    return new Promise(async (resolve) => {
      const response = await fetch(
        //https://raw.githubusercontent.com/tcstenungsund/md_test/main/about.md
        "https://raw.githubusercontent.com/tcstenungsund/" +
          repo +
          "/main/" +
          file
      );

      axios
        .post("https://api.github.com/markdown", {
          // mode=gfm would expand #13 issue links and suchlike
          mode: "markdown",
          text: await response.text(),
        })
        .then((response) => {
          // If the request was successful, get the markdown as HTML and return it
          const mdAsHtml = response.data;
          // console.log(mdAsHtml);
          resolve(mdAsHtml);
        })
        .catch((error) => {
          // If there was an error, log it to the console and return "error"
          console.error(error);
          resolve("fetching error");
        });
    });
  }
  const fetchResponse = await fetchDb(repo, file);
  if (fetchResponse == "404") {
    insertHtml(repo, file, await fetchRepo());
  } else {
    updateHtml(repo, file, await fetchRepo());
  }
  return "success";
}
