/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL="postgres://zqvgpmei:KIdOhA5imYhfpXZQQWOyWlZ7KQ7fI0hD@jelani.db.elephantsql.com/zqvgpmei",
DATABASE_URL_DEVELOPMENT="postgres://qvxtcbuj:AJUc5Kd8dPv5-oJqR1zMKwKPOmZK6hrA@jelani.db.elephantsql.com/qvxtcbuj",
DATABASE_URL_TEST="postgres://daxkjxcn:VRUQxxzYQqB8y7qMPUXOE4DP8VcWQvgk@jelani.db.elephantsql.com/daxkjxcn",
DATABASE_URL_PREVIEW="postgres://tnctjyis:F2e2T-fi_XnwcSlTwLiNhzIyOa0fR-pa@jelani.db.elephantsql.com/tnctjyis",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
