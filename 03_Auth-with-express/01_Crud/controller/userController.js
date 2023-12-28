const User = require('../models/userModels.js')

exports.home = (req, res) => {
    res.send('Hello World by Code with Yuvi!')
}

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body
        const user = await User.create({
            name, 
            email
        })
        if(!name || !email) {
            throw new Error("Name and Email are required")
        }
        const userExists = User.findOne({email})
        if(userExists){
            throw new Error("User already Exists!!!")
        }
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            users
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
}
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User delete successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
    })
}
}