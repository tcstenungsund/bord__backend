const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//* These are the routers in use, who in turn refer to the .js files in "routes"
const airRouter = require("./routes/air.js");
const fruitRouter = require("./routes/fruit.js");
const jsonRouter = require("./routes/json.js");

//* Here they are pointing to which folders to read from using which router
//* The pages are all located in "pages" and in there have their own folders
app.use("/air", airRouter);
app.use("/fruit", fruitRouter);
app.use("/json", jsonRouter);

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
