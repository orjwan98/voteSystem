const bcrypt = require("bcryptjs");
const register = require("../queries/register");

module.exports = registerHandler = (req, res) => {
  const { username, password } = req.body;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(hashErr, hashed) {
      if (hashErr) {
        res.send(
          "There was a problem with your register attempt, please try again"
        );
      } else {
        register(username, hashed, (err, data) => {
          if (err) {
            if ((err.code = "23505")) {
              res.send({ registered: true });
            } else {
              console.log(err);
            }
          } else {
            res.send({ signedUp: true });
          }
        });
      }
    });
  });
};
