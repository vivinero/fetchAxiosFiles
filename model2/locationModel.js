const mongoose = require('mongoose')
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true ,"enter your name"],
        unique: true
    },
    age: {
        type: Number,
        required: [true ,"enter your age"],
    },
    sex: {
        type: String,
        required: [true, "enter your sex"],
        unique: true
    },
    location: {
        type:Object
    }
}, {timestamps:true})

const locationModule =  mongoose.model("new", locationSchema)
module.exports = locationModule