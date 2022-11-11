const express = require('Express')
const router = express.Router()


router.get('/', (req, res) => {
    console.log(req.query.name)
    res.render('air/start')
})

router.get('/borealis', (req, res) => {
    res.render('air/borealis')
})

router.get('/uf', (req, res) => {
    res.render('air/uf')
})

module.exports = router