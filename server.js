const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./config/dataBase')
connectDB()
const testRoutes = require('./routes/testRoutes')
const authRoutes = require('./routes/authRoute')

const app = express()

const port = process.env.PORT || 3000
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/auth', authRoutes)



app.listen(port, () => {
   console.log( `server running in ${process.env.DEV_MODE} mode on port ${port}`.bgBlue);
})