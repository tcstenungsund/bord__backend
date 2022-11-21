import express from "express";
import molekylRouter from "../model/molekyl.js";
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//* These are the routers in use, who in turn refer to the .js files in "routes"
// import airRouter from "./routes/air.js";
// import fruitRouter from "./routes/fruit.js";
// import json2mdRouter from "./routes/md2json_page.js";

//* Imports the converter
// import { logger } from "../views/converter.js";
// logger();

// * This defines what URI is used for what route
// app.use("/air", airRouter);
// app.use("/fruit", fruitRouter);
// app.use("/json", json2mdRouter);
app.use("/molekylverkstan", molekylRouter);

//* The following might come in handy later on
// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         thirt: 'En t-tröja',
//         size: 'Large'
//     })
// });

// app.post('/tshirt/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'Vi behöver en logga!' })
//     }

//     res.send({
//         tshirt: `Tröja med din ${logo} and med ett ID som är ${id}`,
//     })
// })
