const getAll = require("../queries/getAll");

module.exports = getData = (req, res) => {
  getAll((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ logged: true, allPosts: data });
    }
  });
};
