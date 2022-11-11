const express = require('Express')
const router = express.Router()


router.get('/', (req, res) => {
    console.log(req.query.name)
    res.render('fruit/start')
})

router.get('/banan', (req, res) => {
    res.render('fruit/banan')
})

router.get('/apelsin', (req, res) => {
    res.render('fruit/apelsin')
})

module.exports = router