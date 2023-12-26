const express = require('express');
const router = express.Router();
const {getHomePage, getKimoon,postCreateUser,getCreateUser,getUpdateUser,postUpdateUser,postDeleteUser,getDeleteUser}= require('../controllers/homeController')

router.get('/',getHomePage);

router.get('/kimoon', getKimoon);

router.post('/create-user',postCreateUser);


router.post('/update-user',postUpdateUser);


router.get('/delete-user/:id',getDeleteUser);

router.post('/delete-user',postDeleteUser);


router.get('/create',getCreateUser);


router.get('/update/:id',getUpdateUser);





module.exports = router;