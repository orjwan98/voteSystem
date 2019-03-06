const app = require("./app");
require("env2")("config.env");

app.set("PORT", process.env.PORT || 8000);
app.listen(app.get("PORT"), () => {
  console.log("app is running on wheels");
});
