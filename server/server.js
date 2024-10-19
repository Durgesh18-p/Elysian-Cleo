import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
const app = express()

dotenv.config()

app.get("/" , (req,res) => {
  res.send("Server is running.")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
  connectDB()
  console.log(`server is running on : http://localhost:${PORT}`);
})