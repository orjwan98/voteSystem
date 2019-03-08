const express = require("express");
const router = express.Router();
const register = require("./register.js");

router.post("/register", register.post);

module.exports = router;
