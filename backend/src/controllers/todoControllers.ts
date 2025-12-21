// import { Response } from "express";
// import Todo from "../models/Todo.js";
// import { AuthRequest } from "../middleware/authMiddleware.js";

// export const getTodos = async (req: AuthRequest, res: Response) => {
//   const todos = await Todo.find({ user: req.userId });
//   res.json(todos);
// };

// export const getTodoById = async (req: AuthRequest, res: Response) => {
//   const todo = await Todo.findOne({
//     _id: req.params.id,
//     user: req.userId
//   });

//   if (!todo) {
//     return res.status(404).json({ message: "Todo not found" });
//   }

//   res.json(todo);
// };


// export const createTodo = async (req: AuthRequest, res: Response) => {
//   const { title } = req.body;

//   const todo = await Todo.create({
//     title,
//     user: req.userId
//   });

//   res.status(201).json(todo);
// };

// export const updateTodo = async (req: AuthRequest, res: Response) => {
//   const { completed, title } = req.body;

//   // Update only the fields that exist in the request
//   const updateData: any = {};
//   if (completed !== undefined) updateData.completed = completed;
//   if (title) updateData.title = title;

//   const todo = await Todo.findOneAndUpdate(
//     { _id: req.params.id, user: req.userId }, // ensure ownership
//     updateData,
//     { new: true }
//   );

//   if (!todo) {
//     return res.status(404).json({ message: "Todo not found" });
//   }

//   res.json(todo);
// };


// export const deleteTodo = async (req: AuthRequest, res: Response) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Todo deleted" });
// };

import { Response } from "express";
import Todo from "../models/Todo.js";
import { AuthRequest } from "../middleware/authMiddleware.js";

// Get all todos for logged-in user
export const getTodos = async (req: AuthRequest, res: Response) => {
  const todos = await Todo.find({ user: req.userId });
  res.json(todos);
};

// Get a single todo by ID (optional)
export const getTodoById = async (req: AuthRequest, res: Response) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.userId });

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

// Create a new todo
export const createTodo = async (req: AuthRequest, res: Response) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  const todo = await Todo.create({ title: title.trim(), user: req.userId });
  res.status(201).json({ message: "Todo created successfully", todo });
};

// Update a todo
export const updateTodo = async (req: AuthRequest, res: Response) => {
  const { completed, title } = req.body;

  const updateData: any = {};
  if (completed !== undefined) updateData.completed = completed;
  if (title) updateData.title = title.trim();

  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.userId }, // ensure ownership
    updateData,
    { new: true }
  );

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ message: "Todo updated successfully", todo });
};

// Delete a todo
export const deleteTodo = async (req: AuthRequest, res: Response) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.userId });

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  await todo.deleteOne();
  res.json({ message: "Todo deleted successfully" });
};
