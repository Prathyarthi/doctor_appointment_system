import express, { urlencoded } from "express";
import userRoutes from './routes/userRoutes.js'
import connectToDB from './config/dbConfig.js'
import { config } from "dotenv";
config()
import cors from 'cors'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server running"
    })
})

app.use('/api/v1/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToDB()
})