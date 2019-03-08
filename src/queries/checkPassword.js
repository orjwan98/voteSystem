const dbConnection = require("../database/db_connection.js");

const checkPassword = (username, cb) => {
  dbConnection.query(
    `SELECT id, password FROM users WHERE username='${username}'`,
    (err, data) => {
      if (err) {
        cb(err.detail);
      } else {
        cb(null, data.rows);
      }
    }
  );
};

module.exports = checkPassword;
