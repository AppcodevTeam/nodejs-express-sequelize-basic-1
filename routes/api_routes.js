const express = require("express")
const router = express.Router()

// controller
const userController = require("../controllers/user_controller")

// API : USER
router.get("/user", userController.getAllUserList)

module.exports = router
