const express = require("express");
const router = express.Router();
const register = require("./register.js");
const login = require("./login.js");

router.post("/register", register.post);
router.post("/login", login.post);

module.exports = router;
