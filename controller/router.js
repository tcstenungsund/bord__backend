import express from "express";
// import getPageContent from "C:/Users/pontu/Documents/Skola/bord__backend/model/model.js";
// import getPageContent from "../model/model.js";
const router = express.Router();

//* Sends put the HTML on "localhost:8080"
router.get("/", function (req, res) {
  //res.send("<h1>This is the home page!</h1>");
  res.render("../pages/start.ejs");
});

function idSlicer(input) {
  let output = JSON.stringify(input);
  output = output.slice(1, output.length - 1);
  return output;
}

export let sqlQuery;
// //* Querys the database, the table ":id"
router.get("/:id", function (req, res) {
  const id = req.params.id;
  const customerID = idSlicer(id);
  sqlQuery = `SELECT page_content FROM ${customerID} WHERE page_name = "about";`;
  console.log(sqlQuery);
  //console.log(getPageContent);
  res.send(customerID);
  // res.send(getPageContent);
});

export default router;
