const express = require('express')
require('dotenv').config()
const connectDB = require('./config/dataBase')
connectDB()
const testRoute = require('./routes/testRoutes')

const app = express()

const port = process.env.PORT || 3000
//middleware
app.use(express.json())

//routes
app.use('/api/v1/', testRoute)



app.listen(port, () => {
   console.log( `server running in ${process.env.DEV_MODE} mode on port ${port}`.bgBlue);
})