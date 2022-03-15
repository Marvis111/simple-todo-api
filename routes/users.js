const { Router } = require("express")
const userController = require("../controllers/userController")

const userRoutes = Router()

userRoutes.get('/',userController.home);
userRoutes.get('/:userId',userController.getUser);

module.exports = userRoutes