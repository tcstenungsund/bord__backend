import express from "express";
//* Imports the converter
import { logger, converter } from "../views/converter.js";

const app = express();
const PORT = 8080;
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());
app.use(express.static("start"));
app.use(express.urlencoded({ extended: true }));
//app.set("view engine", "ejs");

//TODO The following might come in handy later on
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
