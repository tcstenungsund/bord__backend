// import express from "express";
// import fs from "fs";
// import md2json from "md2json";
// const router = express.Router();

// //*Not needed for the new version, but might be useful later on
// // const markdown = require("markdown").markdown;
// // const html2json = require("html2json").html2json;

// //* The old version, with md2json
// router.get("/", (req, res) => {
//   const content = fs
//     .readFileSync("pages/markdown/markdown.md", "utf8")
//     .toString();
//   let newContent = md2json.parse(content);
//   res.status(200).send(newContent);
// });

// //* The funky version
// // router.get("/", (req, res) => {
// //   const content = fs
// //     .readFileSync("pages/markdown/markdown.md", "utf8")
// //     .toString();
// //   let htmlContent = markdown.toHTML(content);
// //   console.log(htmlContent);
// //   let jsonContent = html2json(htmlContent);
// //   res.status(200).json(jsonContent);
// // });

// module.exports = router;
