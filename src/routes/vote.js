const dbConnection = require("../database/db_connection.js");

module.exports = vote = (req, res) => {
  const { id, vote, post_id } = req.body;
  dbConnection.query(
    `with updated as (UPDATE votes SET user_id= ${id}, vote= \'${vote}\', post_id= ${post_id}
      WHERE user_id= ${id} AND post_id= ${post_id} RETURNING *)
      INSERT INTO votes (user_id, vote, post_id)
      SELECT ${id}, \'${vote}\', ${post_id}
      WHERE NOT EXISTS (SELECT * FROM updated);`,
    (err, response) => {
      if (err) {
        console.log("Error happened No.342", id, vote, post_id, err);
      } else {
        if (vote === "upvote") {
          res.send({ upvote: true, downvote: false });
        } else {
          res.send({ upvote: false, downvote: true });
        }
      }
    }
  );
};
