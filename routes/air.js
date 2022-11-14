const express = require('Express')
const router = express.Router()
const md2json = require('md-2-json');

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.render('air/start')
})

router.get('/borealis', (req, res) => {
    require("fs").readFile("views/air/example.md", "utf8", (err, data) => { 
        console.log(data);
        newData = md2json.parse(data);
        console.log(newData)
        res.send("Hejsan")

             //res.render('air/borealis')
    });
})

router.get('/uf', (req, res) => {
    res.render('air/uf')
})

module.exports = router