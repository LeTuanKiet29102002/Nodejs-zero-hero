const connection = require('../config/database')
const { getAllUsers, getUsersById } = require('../services/CRUDService')


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
    const userId = req.params.id;

    getUsersById(userId, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('update.ejs', { userEdit: user });
    });
};

const postUpdateUser = async (req, res) => {
    const { email, name, city, userId } = req.body;
    console.log(email, name, city, userId);
    connection.query(

        `
        UPDATE Users 
        SET email = ?, city = ?,name = ?
        WHERE id = ?
        `,
        [email, city, name, userId],
        (err, results) => {
            console.log(results);
            // res.send('UpDate user successfully');
            res.redirect('/')
        }
    );
};

const getDeleteUser =(req, res)=>{
    const userId = req.params.id;

    getUsersById(userId, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('delete.ejs', { userDelete: user });
    });


}
const postDeleteUser = (req, res) => {
    const { userId } = req.body;
    
    connection.query(

        `
        DELETE FROM Users 
        WHERE id = ?
        `,
        [ userId],
        (err, results) => {
            console.log(results);
            // res.send('UpDate user successfully');
            res.redirect('/')
        }
    );
}

module.exports = { getHomePage, getKimoon, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser ,postDeleteUser,getDeleteUser};