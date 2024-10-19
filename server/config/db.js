import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database Connected");
  } catch (error) {
    console.error(`Error connecting DB : ${error}`)
    process.exit(1)
  }
}

export default connectDB