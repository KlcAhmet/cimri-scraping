const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

/* routes require */
const usersRouter = require('./routes/users')
const usersInfoRouter = require('./routes/usersinfo')
const userProductsRouter = require('./routes/userProducts')
/* route */
app.use('/users', usersRouter)
app.use('/usersinfo', usersInfoRouter)
app.use('/userProducts', userProductsRouter)

app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`)
})