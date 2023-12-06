const poemModel = require('../model/poemModel')
const axios = require('axios')
const exAPI = "https://jsonplaceholder.typicode.com/todos"

const externalData = async (req, res)=> {
    try {
        const response = await axios.get(exAPI)
        const extractData  = response.data;
// console.log(extractData)
        for(const externalObject of extractData){
            const newPoem = new poemModel({
                title: externalObject.title,
                isCompleted: externalObject.completed
            })

            newPoem.save()
        }
        res.status(200).json({
            message: `sent successfully`,
            externalData,
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getall = async (req, res)=> {
    try {
        const student = await poemModel.find()
        res.status(200).json({
            message: `These are the data`,
            student,
        })
    } catch (error) {
        res.status(200).json(error.message)
    }
}
const getone = async (req, res)=> {
    try {
        const id = req.params.id
        const oneUser = await poemModel.findById(id)
        if (!oneUser) {
            res.status(404).json({
                message: `unable to find user`
        })
        }
        else{
            res.status(201).json({
                message: `Poem with id: ${oneUser.id} has been found`,
                oneUser,

        })
    }
    } catch (error) {
        res.status(200).json(error.message)
    }
}
const updateuser = async (req,res)=>{
    try{
        const id = req.params.id
        const data = {
            title:req.body.title,
            isCompleted:req.body.isCompleted
        }
const updatedpoem = await poemModel.findByIdAndUpdate(id,data,{new:true})
res.status(200).json({
    message:'updated successfully',
    data:updatedpoem
})

    }catch(err){
        res.status(500).json({
            message:"can not found id to update"
        })
    }
}

const deleteOne = async (req,res)=>{
    try{
        const id = req.params.id
        const newdata = await poemModel.findByIdAndDelete(id)
        res.status(200).json({
            message:`user with id: ${newdata.id} is deleted successfully`,
            data:newdata
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {
    externalData,
    getall,
    getone,
    updateuser,
    deleteOne
}