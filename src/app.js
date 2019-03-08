// const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const routes = require("./routes/index.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

module.exports = app;
