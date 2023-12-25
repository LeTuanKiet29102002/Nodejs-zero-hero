const express = require('express');
const router = express.Router();
const {getHomePage, getKimoon,postCreateUser,getCreateUser,getUpdateUser}= require('../controllers/homeController')

router.get('/',getHomePage);

router.get('/kimoon', getKimoon);

router.post('/create-user',postCreateUser);


router.get('/create',getCreateUser);


router.get('/update/:id',getUpdateUser);





module.exports = router;