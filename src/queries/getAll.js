const dbConnection = require("../database/db_connection.js");

module.exports = getAll = cb => {
  dbConnection.query(`SELECT * FROM posts`, (err, data) => {
    if (err) {
      cb(err.detail);
    } else {
      cb(null, data.rows);
    }
  });
};
