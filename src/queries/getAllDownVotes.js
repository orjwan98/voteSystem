const dbConnection = require("../database/db_connection.js");
module.exports = getAllDownVotes = (post_id, cb) => {
  dbConnection.query(
    `SELECT COUNT(vote) FROM votes WHERE post_id='${post_id}' AND vote='downvote'`,
    (err, data) => {
      if (err) {
        cb(err.detail);
      } else {
        cb(null, data.rows);
      }
    }
  );
};
