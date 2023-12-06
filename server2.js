const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const router = require('./router2/locationRouter')

const app = express()
app.use(express.json());
app.use(require('./router2/locationRouter'));

dotenv.config()

const PORT = process.env.PORT
const dataBase = process.env.APILINK

mongoose.connect(dataBase).then(()=>{
    console.log(`databasew successfully connected`)

    app.listen(PORT, ()=> {
        console.log(`server is listening on port: ${PORT}`)
    })
}).catch((e)=>{
    console.log(e.message)
})

