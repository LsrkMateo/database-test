import { database } from "../config/database.js";
import mysql2 from "mysql2";
// crud

const getUser = (req, res) => {
  const { id } = req.params;
  const getQuery = `SELECT * FROM User WHERE id=?;`;
  const query = mysql2.format(getQuery, [id]);
  database.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

const createUser = (req, res) => {
  const { email, password } = req.body;
  res.send(`${email} ${password}`);
};

const updateUser = (req, res) => {
  res.send("peticion put");
};

const deleteUser = (req, res) => {
  res.send("peticion delete");
};

export { createUser, getUser, updateUser, deleteUser };
