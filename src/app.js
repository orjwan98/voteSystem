const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const cookieparser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = app;
