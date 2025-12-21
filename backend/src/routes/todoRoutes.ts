import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todoControllers.js";

const router = Router();

router.use(protect);

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
