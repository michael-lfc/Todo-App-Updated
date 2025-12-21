import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";           // Add .js for runtime
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
