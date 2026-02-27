import express from "express";
import { TodoController } from "../controllers/todo.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const route = express.Router();
const controller = new TodoController();

route.get("/", authMiddleware, controller.getAllTodos);
route.get("/:id", authMiddleware, controller.getTodoById);
route.post("/", authMiddleware, controller.createTodo);
route.put("/:id", authMiddleware, controller.updateTodo);
route.delete("/:id", authMiddleware, controller.deleteTodo);

export default route;

