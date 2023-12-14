const connection = require('../config/database')



const getHomePage = (req, res) => {
   return res.render('homePage.ejs')


}

const getKimoon = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log('check req json :', req.body);
    res.send('create new users');
}

module.exports = { getHomePage, getKimoon ,postCreateUser};