// Update with your config settings.
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },

};
