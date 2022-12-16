import fetch from "node-fetch";
import { repositories } from "./repos.js";
import axios from "axios";
import { push } from "../model/push.js";

// const testVar = "md_test";
// const testVar2 = "about.md";

export async function updateUser(repo, md) {
  async function fetchUserData() {
    return new Promise((resolve) => {
      function pinpoint() {
        const targetRepo = repositories.find((object) => object.name === repo);
        const targetMd = targetRepo.md.find((markdown) => markdown === md);

        console.log("pinpoint körd");
        //! Här tar det stopp för att vi returnar, lösning på detta?
        return [targetRepo.name, targetMd];
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
          console.log("get file körd:" + data);
          return data;
        } catch (err) {
          console.log("fetch error", err);
        }
      };

      async function getMd() {
        const data = await getFile();
        // console.log(getData);
        console.log("data", getData);
        return data;
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
            // If the request was successful, get the markdown as HTML and return it
            const mdAsHtml = response.data;
            console.log(mdAsHtml);
            resolve(mdAsHtml);
          })
          .catch((error) => {
            // If there was an error, log it to the console and return "error"
            console.error(error);
            resolve("error");
          });
      }
    });
  }
  const html = await fetchUserData();
  if (html !== "error") {
    // const response = push(`UPDATE or IGNORE ${repo} SET
    //       page_name = '${pageName}',                    //! Unclear what this should be
    //       page_content = '${await fetchUserData()}'`); //? Is this right?
    const response = push(`UPDATE or IGNORE fruit SET
          page_name = 'about',
          page_content = '${await fetchUserData()}'`);
    if (response == "clear") {
      return "clear";
    }
    return "error";
  }
}
