const { Pool } = require("pg");
require("env2")("config.env");

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw Error("No Database URL");
}

const option = {
  connectionString: DATABASE_URL
};
module.exports = new Pool(option);

// ssl: true
