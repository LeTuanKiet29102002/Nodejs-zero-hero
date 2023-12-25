const connection = require('../config/database')

const getAllUsers = (callback) => {
    connection.query('SELECT * FROM Users', (err, results, fields) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results);
    });
};

const getUsersById = (userId,callback) => {
    connection.query(
        'SELECT * FROM Users where id = ?', [userId],
        function (err, results, fields) {
            console.log('>>>result with id = ', results);
            let user = results && results.length > 0 ? results[0] : {};
            callback(null, user);
        }
    )
}
module.exports = {getAllUsers,getUsersById}