const express = require('express')
const router = express.Router()
const con = require('../controllers/myController')

router.get('/', con.indexcon);

router.get('/about', con.aboutcon );

router.get('/portfolio', con.portfoliocon);

router.get('/contact', con.contactcon );

module.exports = router;