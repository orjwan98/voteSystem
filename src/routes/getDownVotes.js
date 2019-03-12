const getAllDownVotes = require("../queries/getAllDownVotes");

module.exports = getDownVotes = (req, res) => {
  const { post_id } = req.query;
  getAllDownVotes(post_id, (err, response) => {
    if (err) {
      console.log("Something has happened, no votes");
    } else {
      res.send({ totalDownvotes: response[0].count });
    }
  });
};
