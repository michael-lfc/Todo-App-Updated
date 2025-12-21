// testDb.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    process.exit(0); // Exit successfully
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit with error
  }
};

testConnection();
