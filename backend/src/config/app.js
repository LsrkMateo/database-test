import express from "express";

import { router } from "../routes/user.routes.js";

const app = express();

//middlewares

app.use(express.json()); // para que sirve las lineas 5 y 6
app.use(express.urlencoded({ extended: true }));

//endpoints

app.use("/user", router);

export { app };
