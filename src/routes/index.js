const express = require("express");
const router = express.Router();
const register = require("./register.js");
const login = require("./login.js");
const checkCookie = require("../middleWare/checkCookie");
const getData = require("./getData");
const upVote = require("./upVote");
const getUpVotes = require("./getUpVotes");
const getDownVotes = require("./getDownVotes");

router.post("/register", register);
router.post("/login", login);
router.post("/upVote", upVote);
router.get("/home", checkCookie, getData);
router.get("/getUpVotes", getUpVotes);
router.get("/getDownVotes", getDownVotes);

module.exports = router;
