import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGO_URI;
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Mongo Url is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "picy",
      bufferCommands: false,
    });

    try {
      cached.conn = await cached.promise;
      console.log("Database connected successfully!"); // Log successful connection
      return true; // Database connection successful
    } catch (error) {
      console.error("Error connecting to the database:", error);
      return false; // Database connection failed
    }
};

module.exports = connectToDatabase;
