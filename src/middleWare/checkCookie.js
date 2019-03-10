const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
require("env2")("config.env");

module.exports = checkCookie = (req, res, next) => {
  if (req.cookies.id) {
    const cookie = req.cookies.id;
    jwt.verify(cookie, SECRET, function(err, decoded) {
      res.id = decoded;
      next();
    });
  } else {
    res.send({ logged: false });
  }
};
