import express from "express";
import mysql2 from "mysql2";
const app = express();
const port = 3000;

app.use(express.json()); // para que sirve las lineas 5 y 6
app.use(express.urlencoded({ extended: true }));

app.get("/:name/:id", (req, res) => {
  const { name, id } = req.params;
  res.send(`Peticion get ${name}: ${id}`);
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  res.send(`${email} ${password}`);
});

app.put("/", (req, res) => {
  res.send("peticion put");
});

app.delete("/", (req, res) => {
  res.send("peticion delete");
});

// database

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "tutorial",
});

connection.connect((err)=>{
  if(err) throw err;
  console.log("base de datos conectada")
})

app.listen(port, () => {
  console.log(`Example app listening on port port!`);
});
