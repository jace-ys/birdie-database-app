const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to Birdie\'s MySQL server.');
});

module.exports = connection;
