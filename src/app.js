const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("basic express server is set up");
});

module.exports = app;
