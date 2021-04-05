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

  // [
  //   { id: 1, name: 'John', favorite_product: 154},
  //   { id: 2, name: 'Peter', favorite_product: 154},
  //   { id: 3, name: 'Amy', favorite_product: 155},
  //   { id: 4, name: 'Hannah', favorite_product:},
  //   { id: 5, name: 'Michael', favorite_product:}
  // ]

  // [
  //   { id: 154, name: 'Chocolate Heaven' },
  //   { id: 155, name: 'Tasty Lemons' },
  //   { id: 156, name: 'Vanilla Dreams' }
  // ]

  // These two tables can be combined by using users' favorite_product field and products' id field.
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  // LEFT JOIN RIGHT JOIN return all data from 1 side
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // [
  //   { user: 'John', favorite: 'Chocolate Heaven' },
  //   { user: 'Peter', favorite: 'Chocolate Heaven' },
  //   { user: 'Amy', favorite: 'Tasty Lemons' }
  // ]
});