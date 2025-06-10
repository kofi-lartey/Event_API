// import express dont use require use import
import express, { json, response } from "express"
// dont forget to add your extention(.js) any time it is imported
import { eventRouter } from "./routes/event_rout.js"

import mongoose from "mongoose"

import 'dotenv/config'

//assign a variable to it
const app = express()

// craete a port where it listens to
const PORT = 7373

const mongoURI= process.env.MONGO_URI

await mongoose.connect(mongoURI)



app.use(express.json())

app.use('/api/v1/',eventRouter)


//runs the program and if successful gives you an alert of server is up on port from the variable port
// app is a variable where we place the express in
//so the app listens to the port and give feedback
// creares the server
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})