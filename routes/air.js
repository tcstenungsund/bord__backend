const express = require('Express')
const router = express.Router()
const md2json = require('md-2-json');
const fs = require('fs');
const markdown = require( "markdown" ).markdown;
const html2json = require('html2json').html2json;

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.render('air/start')
})

router.get('/borealis', (req, res) => {
    const content = fs.readFileSync('views/air/example.md','utf8').toString()
    let htmlContent = markdown.toHTML(content)
    console.log(htmlContent)
    let jsonContent = html2json(htmlContent)
    res.send(jsonContent)
})
// router.get('/borealis', (req, res) => {
//     const content = fs.readFileSync('views/air/example.md','utf8').toString()
//     let newContent = md2json.parse(content)
//     res.send(newContent)
// })

router.get('/uf', (req, res) => {
    res.render('air/uf')
})

module.exports = router