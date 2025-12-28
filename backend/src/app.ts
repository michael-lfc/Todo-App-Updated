// import express from "express";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import todoRoutes from "./routes/todoRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ✅ Health check endpoint
// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "🚀 Server is running!"
//   });
// });

// // ✅ API routes
// app.use("/api/auth", authRoutes);
// app.use("/api/todos", todoRoutes);

// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

// ✅ JSON parsing
app.use(express.json());

// ✅ CORS configuration for deployed frontend
app.use(
  cors({
    origin: "https://todo-app-updated-seven.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Allow preflight requests
app.options("*", cors());

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
