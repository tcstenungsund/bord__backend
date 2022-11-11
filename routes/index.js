const express = require('express')
const router = express.Router()

//* Denna GET-funktionen visar startsidan "index.html" på "localhost:8080"
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', session: req.session })
})

module.export = router

