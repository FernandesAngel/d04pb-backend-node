import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/api/v1/users", UserController.getUsers)
  .get("/api/v1/users/:id", UserController.getUserById)
  .post("/api/v1/user", UserController.addUser)
  .put("/api/v1/users/:id", UserController.updateUser)
  .delete("/api/v1/users/:id", UserController.deleteUser);

export default router;
