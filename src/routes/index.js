const express = require("express");
const router = express.Router();
const register = require("./register.js");
const login = require("./login.js");
const checkCookie = require("../middleWare/checkCookie");
const getData = require("./getData");

router.post("/register", register);
router.post("/login", login);
router.get("/home", checkCookie, getData);

module.exports = router;
