const express = require('Express')
const router = express.Router()
const fs = require('fs');
const markdown = require( "markdown" ).markdown;
const html2json = require('html2json').html2json;

//*Not needed for the new version, but might be useful later on
// const md2json = require('md-2-json');

//* The new version
router.get('/', (req, res) => {
    const content = fs.readFileSync('views/json/markdown.md','utf8').toString()
    let htmlContent = markdown.toHTML(content)
    console.log(htmlContent)
    let jsonContent = html2json(htmlContent)
    res.status(200).json(jsonContent)
})

//* The old version, with md2json
// router.get('/', (req, res) => {
//     const content = fs.readFileSync('views/air/markdown.md','utf8').toString()
//     let newContent = md2json.parse(content)
//     res.status(200).send(newContent)
// })

module.exports = router