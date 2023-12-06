const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const router = require("./router/poemROuter")


//create an app instance
const app = express()

app.use(express.json())
app.use(router)

dotenv.config()
const port = process.env.port
const db = process.env.apiLink

mongoose.connect(db).then(()=> {
    console.log(`Database Successful`)
    app.listen(port, ()=>{
        console.log(`server is listening on port ${port}`)
    })
})
.catch((err)=>{
    console.log(err.message)
})

app.get('api/v1', (req, res)=> {
    res.send("welcome to our API")
   
});

