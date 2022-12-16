import fetch from "node-fetch";
// import { repositories } from "./repos.js";
import axios from "axios";

export async function updateUser(repo, file) {
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
        resolve([repo, mdAsHtml]);
      })
      .catch((error) => {
        // If there was an error, log it to the console and return "error"
        console.error(error);
        resolve("error");
      });
  });
}

console.log(await updateUser("md_test", "about.md"));