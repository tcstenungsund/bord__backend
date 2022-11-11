const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

app.use( express.json() )
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')


//* Detta är routrarna som finns nu som test, vilka i sin tur refererar till
//* js-filerna i "routes"
const airRouter = require('./routes/air.js')
const fruitRouter = require('./routes/fruit.js')

//* Här används de och refererar till "views\air" respektive "views\fruit",
//* som är katalogerna där sidorna finns
app.use('/air', airRouter)
app.use('/fruit', fruitRouter)



//* Följande kommer eventuellt till användning senare
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
