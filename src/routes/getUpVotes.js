const getAllUpVotes = require("../queries/getAllUpVotes");

module.exports = getUpVotes = (req, res) => {
  const { post_id } = req.query;
  getAllUpVotes(post_id, (err, response) => {
    if (err) {
      console.log("Something bas happened, no votes");
    } else {
      res.send({ totalUpvotes: response[0].count });
    }
  });
};
