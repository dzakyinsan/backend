const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pangya20",
  database: "day7",
  port: "3306"
});

module.exports = db;
