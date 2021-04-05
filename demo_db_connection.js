var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root1",
  password: "123456",
  insecureAuth: true,
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //Use SQL statements to read from (or write to) a MySQL database
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Result: " + result);
  // });

  //Creating a Database
  // con.query("CREATE DATABASE mydb", function (err, result)

  //Creating a Table
  // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

  //Alternate a Table
  // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
});