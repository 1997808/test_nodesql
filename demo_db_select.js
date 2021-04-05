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

	//Selecting From a Table
	//get data result[i].name
	//   con.query("SELECT * FROM customers", function (err, result, fields) {
	//     if (err) throw err;
	//     console.log(result);
	//   });

	//Selecting Columns
	//   con.query("SELECT name, address FROM customers", function (err, result, fields)

	//Select With a Filter 
	// con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) 
	// 	//JSON.parse(JSON.stringify(result)) no rowdatapacket 

	//Wildcard Characters WHERE something LIKE 'S%'
	// con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result)

	//Escaping Query Values
	// var name = 'Amy';
	// var adr = 'Mountain 21';
	// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
	// con.query(sql, [name, adr], function (err, result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// });

	//Sort the Result
	// con.query("SELECT * FROM customers ORDER BY name", function (err, result) 

	// con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result)

	//Limit the Result
	// var sql = "SELECT * FROM customers LIMIT 5";

	// var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
	// var sql = "SELECT * FROM customers LIMIT 2, 5";
});