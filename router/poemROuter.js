const express = require('express')
const router = express.Router()
const {externalData, getall, getone,updateuser,deleteOne} = require("../controller/poemController")

router.get("/externaldata", externalData),
router.get("/getall", getall)
router.get("/getone/:id", getone)
router.put("/updateuser/:id",updateuser)
router.delete("/deleteone/:id",deleteOne)





module.exports = router