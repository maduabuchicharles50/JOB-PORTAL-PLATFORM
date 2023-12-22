const express = require('express')
require('dotenv').config()
const connectDB = require('./config/dataBase')
connectDB()

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send("hello world i'm back")
})


app.listen(port, () => {
   console.log( `server running in ${process.env.DEV_MODE} mode on port ${port}`.bgBlue);
})