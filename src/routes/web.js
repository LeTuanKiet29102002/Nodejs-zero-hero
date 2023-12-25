const express = require('express');
const router = express.Router();
const {getHomePage, getKimoon,postCreateUser,getCreateUser}= require('../controllers/homeController')

router.get('/',getHomePage);

router.get('/kimoon', getKimoon);

router.post('/create-user',postCreateUser);


router.get('/create',getCreateUser);



module.exports = router;