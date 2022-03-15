const { Router } = require("express");
const userController = require("../controllers/userController");

const indexRoutes = Router();

indexRoutes.get('/',userController.index);

module.exports = indexRoutes