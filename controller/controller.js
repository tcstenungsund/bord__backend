import express from "express";
const app = express();
const PORT = 9090;
app.listen(PORT, () => console.log(`It's alive on http://localhost:${9090}`));

app.use(express.json());
app.use(express.static("start"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  // res.header("Access-Control-Allow-Origin", "https://tcstenungsund.github.io");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//* These are the routers in use, who in turn refer to the .js files in "routes"
import router from "../controller/router.js";

// * This defines what URI is used for what route
app.use("/", router);
