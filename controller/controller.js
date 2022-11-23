import express from "express";
const app = express();
const PORT = 8080;
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());
app.use(express.static("start"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//* Imports the converter
//import { logger, converter } from "../views/converter.js";

//* These are the routers in use, who in turn refer to the .js files in "routes"
import router from "../controller/router.js";

// * This defines what URI is used for what route
app.use("/", router);
