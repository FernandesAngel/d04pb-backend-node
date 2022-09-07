import express from "express";
import UserController from "../controllers/userController.js";


const router = express.Router()

router
  .post("/api/v1/user", UserController.addUser)
  .delete("/api/v1/users/:id", UserController.deleteUser)


export default router
