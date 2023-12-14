const connection = require('../config/database')



const getHomePage = (req, res) => {
   return res.render('homePage.ejs')


}

const getKimoon = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
        [email, name , city],
        function(err, results){
            console.log((results));
            res.send('Created user successfully')
        }
    );
}

module.exports = { getHomePage, getKimoon ,postCreateUser};