// Set up connection to MySQL
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "v78kx9dh4bv69a5r",
  password: "m7gi3jr5ulm6rdyx",
  database: "blfd7kab3xtdr3ee"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
