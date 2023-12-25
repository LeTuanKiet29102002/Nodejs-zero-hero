const connection = require('../config/database')

const getAllUsers = (callback) => {
    connection.query('SELECT * FROM Users', (err, results, fields) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results);
    });
};

module.exports = {getAllUsers}