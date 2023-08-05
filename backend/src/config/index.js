import { app } from "./app.js";
import { database } from "./database.js";

const port = 3000;
const main = () => {
  database.connect((err) => {
    if (err) throw err;
    console.log("Base de datos conectada");
  });
  app.listen(port, () => {
    console.log("servidor escuchando en el puerto", port);
  });
};

main();
