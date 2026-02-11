import express from "express"
import dotenv from "dotenv"
import myRoutes from "./routes/myRoutes.js"
import connectDB from "./config/db.js"

//using env variables
dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use("/api/users",myRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})