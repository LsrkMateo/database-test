import { database } from "../config/database.js";
import mysql2 from "mysql2";
// crud

const getUser = (req, res) => {
  const { id } = req.params;
  const getQuery = `SELECT * FROM User WHERE id=?;`;
  const query = mysql2.format(getQuery, [id]);
  database.query(query, (err, result) => {
    if (err) throw err;
    console.log(typeof result[0]);
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: "usuario no encontrado" });
    }
  });
};

const createUser = (req, res) => {
  const { first_name, age } = req.body;
  const createQuery = "INSERT INTO User (first_name, age) VALUES(?, ?)";

  const query = mysql2.format(createQuery, [first_name, age]);
  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: "usuario creado" });
  });
};

const updateUser = (req, res) => {
  const { first_name, age } = req.body;
  const { id } = req.params;

  const updateUserQuery = "UPDATE User SET first_name = ?, age = ? WHERE id=?";

  const query = mysql2.format(updateUserQuery, [first_name, age, id]);
  database.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json({ message: "usuario actualizado" });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteUserQuery = "DELETE FROM User WHERE id = ?";

  const query = mysql2.format(deleteUserQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json({ message: "usuario eliminado" });
  });
};

export { createUser, getUser, updateUser, deleteUser };
