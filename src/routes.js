const express = require("express");
const routes = express.Router();

// Controllers
const UserController = require("./controllers/UserController");

// User routes
routes.post("/gerar-qr", UserController.gerarQRCode);

module.exports = routes;
