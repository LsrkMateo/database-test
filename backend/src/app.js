import express from "express";
const app = express();
const port = 3000;

app.get("/:name/:id", (req, res) => {
  const {name, id} = req.params
  res.send(`Peticion get ${name}: ${id}`);
});

app.post("/", (req, res) => {
  res.send("peticion post");
});

app.put("/", (req, res) => {
  res.send("peticion put");
});

app.delete("/", (req, res) => {
  res.send("peticion delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port port!`);
});
