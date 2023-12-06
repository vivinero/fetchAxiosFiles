const express = require('express')
const router = express.Router()
const{home, createData}= require('../controller2/locationController')

router.get("/", home)
router.post("/createuser", createData)

module.exports = router