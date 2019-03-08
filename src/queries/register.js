const dbConnection = require("../database/db_connection.js");

const register = (username, hashed, cb) => {
  dbConnection.query(
    `INSERT INTO users (username, password) VALUES ($1, $2)`,
    [username, hashed],
    (err, data) => {
      if (err) {
        cb(err.detail);
      } else {
        cb(null, data.rows);
      }
    }
  );
};

module.exports = register;
