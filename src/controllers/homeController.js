const connection = require('../config/database')



const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log('>>>result = ', results);
            console.log('check users :', users);
            res.send(JSON.stringify(users));
        }
    )


}

const getKimoon = (req, res) => {
    res.render('sample.ejs');
}

module.exports = { getHomePage, getKimoon };