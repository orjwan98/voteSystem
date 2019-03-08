const bcrypt = require("bcryptjs");
const checkPassword = require("../queries/checkPassword");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
require("env2")("config.env");

exports.post = login = (req, res) => {
  const { username, password } = req.body;
  checkPassword(username, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length === 0) {
        res.send({ noUser: true });
      } else {
        const passwordSelected = data[0].password;
        bcrypt.compare(password, passwordSelected, (err, passwordsMatch) => {
          if (err) {
            console.log(err);
          } else if (!passwordsMatch) {
            console.log("passwords don't match");
          } else {
            const id = data[0].id;
            jwt.sign({ id: id }, SECRET, function(err, token) {
              res
                .cookie("id", token, {
                  expires: new Date(Date.now() + 900000),
                  httpOnly: true
                })
                .send({ logged: true });
            });
          }
        });
      }
    }
  });
};
