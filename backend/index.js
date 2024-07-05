import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRoute)

// Fixed the port number in the listen method to match the console log message
app.listen(5000, () => console.log('server running on port 5000'))