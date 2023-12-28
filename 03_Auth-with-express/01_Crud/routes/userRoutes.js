const express = require("express")
const {home, createUser, getUser, deleteUser} = require('../controller/userController.js')

const router = express.Router()
router.get('/', home)
router.post('/user', createUser)
router.get('/getuser', getUser)
router.get('/deleteuser/:id', deleteUser)

module.exports = router