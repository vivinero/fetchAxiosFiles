const mongoose = require('mongoose') 
const poemSchema = new mongoose.Schema({
    title: {
    type : String,
    require: [true, "please enter a require"],
    unique: true
    }, 
    isCompleted: {
        type: Boolean,
        require: [true, " enter title"]
    }
})

const poemModel = mongoose.model("poem", poemSchema)
module.exports = poemModel