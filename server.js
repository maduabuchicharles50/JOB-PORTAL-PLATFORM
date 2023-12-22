const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send("hello world i'm back")
})


app.listen(port, () => {
   console.log( `server running on port ${port} ...`);
})