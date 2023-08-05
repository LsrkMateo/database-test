import { Router } from "express";

import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

export { router };
