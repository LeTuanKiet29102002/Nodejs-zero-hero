const express = require('express');
const router = express.Router();
const {getHomePage, getKimoon}= require('../controllers/homeController')

router.get('/',getHomePage);

router.get('/kimoon', getKimoon)


module.exports = router;