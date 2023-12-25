const connection = require('../config/database')
const { getAllUsers,getUsersById } = require('../services/CRUDService')


const getHomePage = (req, res) => {
    getAllUsers((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('homePage.ejs', { listUsers: results });
    });
};

const getKimoon = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, city],
        (err, results) => {
            console.log(results);
            res.send('Created user successfully');
        }
    );
};


const getCreateUser = (req, res) => {
    res.render('create.ejs')
};

const getUpdateUser = (req, res) => {
    // const userId = req.params.id;
    // connection.query(
    //     'SELECT * FROM Users where id = ?', [userId],
    //     function (err, results, fields) {
    //         console.log('>>>result with id = ', results);
    //         let user = results && results.length > 0 ? results[0] : {};
    //         res.render('update.ejs', { userEdit: user })
    //     }
    // )
    const userId = req.params.id;
    
    getUsersById(userId, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('update.ejs', { userEdit: user });
    });
};



module.exports = { getHomePage, getKimoon, postCreateUser, getCreateUser, getUpdateUser };