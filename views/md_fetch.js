import fetch from "node-fetch";
import { repositories } from "./repos.js";
import axios from "axios";
import { push } from "../model/push.js";

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

//! Here a query variable needs to be made, and ran in the "push"-function

md2html();
