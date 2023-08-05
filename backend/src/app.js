const execQuery = (querysql) => {
  connection.query(querysql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

const showQuery = "show tables;";

const insertQuery = `INSERT INTO User(first_name, age) VALUES('Juan', 30);`;

const getQuery = `SELECT * FROM User;`;

execQuery(getQuery);

app.listen(port, () => {
  console.log(`Example app listening on port port!`);
});
