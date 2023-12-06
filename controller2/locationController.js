const locationModel = require('../model2/locationModel')
const axios = require('axios')

const API_KEY = "38019f0a5c3c4a36bb4386de2f987001"
const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`

// axios.get(apiUrl).then((vivian)=> {
//     console.log(vivian)
// }).catch((e)=>{
//     console.log(e.message)
// })

const home =  (req, res)=> {
res.send("welcome")
}

const createData = async (req,res)=>{
    try {
       const user ={
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
       }

       const loc = await axios.get(apiUrl).then((anything)=>{
        return anything.data
       }).catch((e)=>{
        return e.message
       })

       const{ip, country_name, city, latitude, longitude}= loc

       const createUser = await new locationModel(user)

       createUser.location = {ip, country_name, city, latitude, longitude}

       await createUser.save()

       if (createUser) {
        res.status(200).json({
            message:`user created successfully`,
            data: createUser
        })
       }else{
        res.status(400).json({
            message:`error creating user`
        })
       }
       
    } catch (error) {
        res.json(error)
    }
}


module.exports ={
    home,
    createData
}