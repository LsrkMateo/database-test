import express from "express";
import cors from "cors";

import { router } from "../routes/user.routes.js";

const app = express();

//middlewares

app.use(express.json()); // para que sirve las lineas 5 y 6
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//endpoints

app.use("/user", router);

export { app };
