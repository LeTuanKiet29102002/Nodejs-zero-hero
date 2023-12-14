const express = require('express');
const router = express.Router();
const {getHomePage, getKimoon,postCreateUser}= require('../controllers/homeController')

router.get('/',getHomePage);

router.get('/kimoon', getKimoon);

router.post('/create-user',postCreateUser)


module.exports = router;