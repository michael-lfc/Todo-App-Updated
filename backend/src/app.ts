import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🚀 Server is running!"
  });
});

// ✅ API routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

export default app;
