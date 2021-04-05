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

  //Delete Record using DELETE FROM
  // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  //Delete a Table
  // var sql = "DROP TABLE customers";

  // var sql = "DROP TABLE IF EXISTS customers";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table deleted");
  // });
});